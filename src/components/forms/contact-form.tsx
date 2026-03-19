"use client";

import { useRef, useState, useTransition } from "react";
import { Phone, CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitContact, type ContactActionResult } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Car Lockout",
  "Lost Car Key / Key Replacement",
  "Key Fob Programming",
  "Transponder Key",
  "Ignition Repair",
  "House Lockout",
  "Lock Rekey",
  "Lock Installation",
  "Deadbolt Upgrade",
  "Commercial Lockout",
  "Master Key System",
  "Access Control",
  "Smart Lock Installation",
  "Other",
];

interface ContactFormProps {
  isCompact?: boolean;
}

export function ContactForm({ isCompact = false }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<ContactActionResult | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const res = await submitContact(formData);
      setResult(res);
      if (res.success) {
        formRef.current?.reset();
      }
    });
  }

  if (result?.success) {
    return (
      <div className="flex flex-col items-center text-center py-8 gap-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-800">Request Received!</h3>
        <p className="text-gray-600 text-sm max-w-sm">{result.message}</p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setResult(null)}
          className="mt-2"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className={cn("grid gap-4", isCompact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1")}>
        {/* Name */}
        <div className={cn("flex flex-col gap-1.5", !isCompact && "")}>
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-700"
          >
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Smith"
            disabled={isPending}
            className={cn(
              "w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-light transition-colors",
              result?.errors?.name
                ? "border-red-400 bg-red-50"
                : "border-gray-200 bg-white focus:border-brand-blue-light"
            )}
          />
          {result?.errors?.name && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" aria-hidden="true" />
              {result.errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-gray-700"
          >
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(813) 555-0100"
            disabled={isPending}
            className={cn(
              "w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-light transition-colors",
              result?.errors?.phone
                ? "border-red-400 bg-red-50"
                : "border-gray-200 bg-white focus:border-brand-blue-light"
            )}
          />
          {result?.errors?.phone && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" aria-hidden="true" />
              {result.errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email{" "}
            <span className="text-gray-400 text-xs font-normal">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            disabled={isPending}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-light focus:border-brand-blue-light transition-colors"
          />
        </div>

        {/* City */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="city" className="text-sm font-medium text-gray-700">
            Your City <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            autoComplete="address-level2"
            placeholder="Tampa, FL"
            disabled={isPending}
            className={cn(
              "w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-light transition-colors",
              result?.errors?.city
                ? "border-red-400 bg-red-50"
                : "border-gray-200 bg-white focus:border-brand-blue-light"
            )}
          />
        </div>

        {/* Service */}
        <div className={cn("flex flex-col gap-1.5", isCompact ? "sm:col-span-2" : "")}>
          <label htmlFor="service" className="text-sm font-medium text-gray-700">
            Service Needed <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            disabled={isPending}
            className={cn(
              "w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-light transition-colors bg-white",
              result?.errors?.service
                ? "border-red-400"
                : "border-gray-200 focus:border-brand-blue-light"
            )}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service...
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {result?.errors?.service && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" aria-hidden="true" />
              {result.errors.service}
            </p>
          )}
        </div>

        {/* Message (hidden in compact mode) */}
        {!isCompact && (
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Additional Details{" "}
              <span className="text-gray-400 text-xs font-normal">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us more about your situation..."
              disabled={isPending}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-light focus:border-brand-blue-light transition-colors resize-none"
            />
          </div>
        )}
      </div>

      {/* Error message */}
      {result && !result.success && !result.errors && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
          <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          {result.message}
        </div>
      )}

      {/* Submit */}
      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isPending}
          className="flex-1"
        >
          {isPending ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" aria-hidden="true" />
              Request Callback
            </>
          )}
        </Button>
        {isCompact && (
          <Button asChild variant="secondary" size="lg">
            <a href="tel:+18132954321">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now
            </a>
          </Button>
        )}
      </div>
      <p className="text-xs text-gray-400 mt-3 text-center">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}
