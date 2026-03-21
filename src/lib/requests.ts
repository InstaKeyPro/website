import { getSupabase } from "./db";
import type { RequestInput } from "./schema";

export class DuplicateRequestError extends Error {
  constructor() {
    super("DUPLICATE");
    this.name = "DuplicateRequestError";
  }
}

export async function createRequest(
  data: RequestInput
): Promise<{ id: string; status: string }> {
  const supabase = getSupabase();

  // Block duplicate submissions from the same phone within 5 minutes
  const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
  const { data: existing } = await supabase
    .from("requests")
    .select("id")
    .eq("phone", data.phone)
    .gte("created_at", fiveMinAgo)
    .maybeSingle();

  if (existing) throw new DuplicateRequestError();

  const status = data.email ? "quote_requested" : "pending";

  const { data: inserted, error } = await supabase
    .from("requests")
    .insert({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      address: data.address,
      lat: data.lat ?? null,
      lng: data.lng ?? null,
      place_id: data.place_id ?? null,
      service_type: data.service_type,
      notes: data.notes ?? null,
      source: data.source,
      address_verified: !!data.place_id,
      status,
    })
    .select("id, status")
    .single();

  if (error) {
    console.error("[requests] Supabase insert error:", error);
    throw new Error("DB_ERROR");
  }

  // Send confirmation email if Resend is configured and email was provided
  if (data.email && process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "InstaKey Pro <noreply@instakeypro.com>",
        to: data.email,
        subject: "We received your request – InstaKey Pro",
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
            <h2 style="color: #1e3a5f;">Hi ${data.name}!</h2>
            <p>We received your request for <strong>${data.service_type}</strong>.</p>
            <table style="border-collapse: collapse; width: 100%; margin: 16px 0;">
              <tr><td style="padding: 6px 0; color: #666;">📍 Address</td><td>${data.address}</td></tr>
              <tr><td style="padding: 6px 0; color: #666;">📱 Phone</td><td>${data.phone}</td></tr>
              ${data.notes ? `<tr><td style="padding: 6px 0; color: #666;">📝 Notes</td><td>${data.notes}</td></tr>` : ""}
            </table>
            <p>A technician will call you at <strong>${data.phone}</strong> shortly.</p>
            <p>For the fastest response, call us directly:<br/>
              <a href="tel:+18132954321" style="color: #f97316; font-weight: bold;">(813) 295-4321</a>
            </p>
            <p style="color: #999; font-size: 12px; margin-top: 32px;">— InstaKey Pro Team · Tampa Bay, FL</p>
          </div>
        `,
      });
    } catch (err) {
      // Non-fatal — log but don't fail the request
      console.error("[requests] Email send failed:", err);
    }
  }

  return { id: inserted.id, status: inserted.status };
}
