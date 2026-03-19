import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact InstaKey Pro Locksmith | 24/7 Emergency Service Tampa Bay",
  description:
    "Contact InstaKey Pro Locksmith for 24/7 emergency locksmith services in Tampa Bay. Call or fill out our form for fast, professional lock & key solutions.",
  alternates: {
    canonical: `${SITE.baseUrl}/contact`,
  },
};

const CONTACT_ITEMS = [
  {
    Icon: Phone,
    label: "Phone (24/7 Emergency)",
    value: SITE.phone,
    href: SITE.phoneTel,
    iconBg: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
  },
  {
    Icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    iconBg: "bg-brand-blue-lighter",
    iconColor: "text-brand-blue",
  },
  {
    Icon: MapPin,
    label: "Coverage Area",
    value: "Tampa Bay & Surrounding Counties",
    href: "/service-areas",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "24 Hours / 7 Days / 365 Days",
    href: null,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-light py-16 text-white">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">Contact</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange" />
              </span>
              We&apos;re Available Right Now
            </div>
            <h1 className="text-white font-extrabold mb-4">
              Contact InstaKey Pro Locksmith
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Need help fast? Call us directly for the fastest response. Or fill
              out the form below and we&apos;ll call you back within minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Emergency call */}
              <div className="bg-brand-blue rounded-2xl p-6 text-white">
                <h2 className="font-bold text-xl mb-2">Emergency Lockout?</h2>
                <p className="text-blue-200 text-sm mb-4">
                  Don&apos;t wait — call us directly for the fastest 24/7 response.
                </p>
                <a
                  href={SITE.phoneTel}
                  className="flex items-center gap-3 text-2xl font-extrabold text-brand-orange hover:text-yellow-300 transition-colors"
                >
                  <Phone className="h-7 w-7" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </div>

              {/* Contact details */}
              <div className="space-y-3">
                {CONTACT_ITEMS.map(({ Icon, label, value, href, iconBg, iconColor }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className={`${iconBg} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-5 w-5 ${iconColor}`} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-brand-blue font-semibold text-sm hover:text-brand-orange transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-brand-blue font-semibold text-sm">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-semibold text-brand-blue text-sm mb-4">Why Trust Us?</h3>
                <ul className="space-y-2">
                  {[
                    { Icon: Shield, text: "Licensed & Insured" },
                    { Icon: Clock, text: "20–30 Min Response Time" },
                    { Icon: MapPin, text: "19 Cities Served" },
                  ].map(({ Icon, text }) => (
                    <li key={text} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-card p-8">
              <h2 className="font-bold text-brand-blue text-2xl mb-2">
                Request a Callback
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill out the form and we&apos;ll call you back within minutes — 24 hours a day.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service areas quick links */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="text-brand-blue mb-3">Serving All of Tampa Bay</h2>
          <p className="text-gray-600 mb-6 text-sm max-w-xl mx-auto">
            We provide fast, mobile locksmith service across 19 cities. Find your city below.
          </p>
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            View All Service Areas
          </Link>
        </div>
      </section>
    </>
  );
}
