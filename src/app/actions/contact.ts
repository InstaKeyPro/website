"use server";

import { requestSchema, type RequestInput } from "@/lib/schema";
import { createRequest, DuplicateRequestError } from "@/lib/requests";

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof RequestInput, string>>;
}

export async function submitContact(
  formData: FormData
): Promise<ContactActionResult> {
  const latRaw = formData.get("lat");
  const lngRaw = formData.get("lng");

  const raw = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: (formData.get("email") as string) || undefined,
    address: formData.get("address") as string,
    lat: latRaw ? Number(latRaw) : undefined,
    lng: lngRaw ? Number(lngRaw) : undefined,
    place_id: (formData.get("place_id") as string) || undefined,
    service_type: formData.get("service_type") as string,
    notes: (formData.get("notes") as string) || undefined,
    source: "web" as const,
  };

  const result = requestSchema.safeParse(raw);
  if (!result.success) {
    const errors: Partial<Record<keyof RequestInput, string>> = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof RequestInput;
      if (!errors[field]) errors[field] = issue.message;
    });
    return { success: false, message: "Please fix the errors below.", errors };
  }

  try {
    await createRequest(result.data);
    return {
      success: true,
      message: `Thank you, ${result.data.name}! We received your request and will call you at ${result.data.phone} shortly.`,
    };
  } catch (err) {
    if (err instanceof DuplicateRequestError) {
      return {
        success: false,
        message:
          "A request from this number was already submitted. We'll call you shortly!",
      };
    }
    return {
      success: false,
      message: "Something went wrong. Please try again or call us directly.",
    };
  }
}
