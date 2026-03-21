import { NextRequest, NextResponse } from "next/server";
import { requestSchema } from "@/lib/schema";
import { createRequest, DuplicateRequestError } from "@/lib/requests";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = requestSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: result.error.flatten() },
      { status: 422 }
    );
  }

  try {
    const record = await createRequest(result.data);
    return NextResponse.json(record, { status: 201 });
  } catch (err) {
    if (err instanceof DuplicateRequestError) {
      return NextResponse.json(
        {
          error:
            "A request from this number was already submitted. We'll call you shortly!",
        },
        { status: 429 }
      );
    }
    console.error("[POST /api/requests]", err);
    return NextResponse.json(
      { error: "Failed to save request. Please call us directly." },
      { status: 500 }
    );
  }
}
