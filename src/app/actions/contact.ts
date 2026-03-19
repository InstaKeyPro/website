"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[\d\s\-\(\)\+\.]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  city: z.string().min(2, "Please enter your city").max(100),
  message: z.string().max(500).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string>>;
}

export async function submitContact(
  formData: FormData
): Promise<ContactActionResult> {
  const raw = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    service: formData.get("service") as string,
    city: formData.get("city") as string,
    message: formData.get("message") as string,
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof ContactFormData;
      errors[field] = issue.message;
    });
    return {
      success: false,
      message: "Please fix the errors below.",
      errors,
    };
  }

  const data = result.data;

  // Option 1: Send email notification (configure SMTP / Resend / SendGrid)
  // await sendEmail({ to: SITE.email, subject: `New lead: ${data.name}`, data })

  // Option 2: Save to Supabase
  // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)
  // await supabase.from('leads').insert([data])

  // For now, simulate processing
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log("New contact submission:", data);

  return {
    success: true,
    message: `Thank you, ${data.name}! We received your request and will call you back shortly at ${data.phone}.`,
  };
}
