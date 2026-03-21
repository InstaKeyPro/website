import { z } from "zod";

export const requestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[\d\s\-\(\)\+\.]+$/, "Enter a valid phone number"),
  email: z
    .string()
    .email("Enter a valid email address")
    .optional()
    .or(z.literal("")),
  address: z.string().min(5, "Enter your full address").max(300),
  lat: z.number().optional(),
  lng: z.number().optional(),
  place_id: z.string().optional(),
  service_type: z.string().min(1, "Please select a service"),
  notes: z.string().max(500).optional(),
  source: z.enum(["web", "chat"]).default("web"),
});

export type RequestInput = z.infer<typeof requestSchema>;
