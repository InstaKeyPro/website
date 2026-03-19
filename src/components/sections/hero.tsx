import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

const TRUST_POINTS = [
  "30-Min Emergency Response",
  "Licensed & Insured",
  "Upfront Pricing",
  "Available 24/7/365",
];

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center bg-brand-blue overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Blue gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-light opacity-90"
        aria-hidden="true"
      />

      {/* Van image (decorative background right side) */}
      <div className="absolute right-0 bottom-0 w-full lg:w-1/2 h-full opacity-10 lg:opacity-20 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/van.jpg"
          alt=""
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
              </span>
              Available 24/7 – Emergency Response
            </div>

            <h1 className="text-white font-extrabold mb-4 leading-tight">
              24/7 Emergency
              <span className="block text-brand-orange">Locksmith Services</span>
            </h1>

            <p className="text-xl text-blue-100 mb-4 max-w-lg">
              {SITE.tagline}
            </p>
            <p className="text-blue-200 mb-8 max-w-lg">
              Locked out? Lost your keys? InstaKey Pro Locksmith is Tampa Bay&apos;s
              most trusted mobile locksmith — serving you fast, wherever you are.
            </p>

            {/* Trust points */}
            <ul className="grid grid-cols-2 gap-2 mb-8">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle2
                    className="h-4 w-4 text-brand-orange flex-shrink-0"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="primary" size="xl">
                <a href={SITE.phoneTel}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call {SITE.phone}
                </a>
              </Button>
              <Button asChild variant="outline-white" size="xl">
                <Link href="/contact">
                  Request Service
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "24/7", label: "Emergency Service" },
                    { value: "30min", label: "Avg Response Time" },
                    { value: "5★", label: "Google Rating" },
                    { value: "247+", label: "Happy Customers" },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center p-4 bg-white/10 rounded-2xl">
                      <div className="text-3xl font-extrabold text-brand-orange mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-blue-100">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-brand-orange/20 border border-brand-orange/30 rounded-2xl">
                  <p className="text-center text-sm font-medium">
                    🔑 Serving Tampa Bay &amp; 19 Surrounding Cities
                  </p>
                </div>
              </div>

              {/* Decorative ring */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-orange/20 rounded-full blur-2xl" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-blue-light/20 rounded-full blur-2xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
