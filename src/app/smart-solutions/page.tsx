import type { Metadata } from "next";
import Link from "next/link";
import { Smartphone, Phone, ArrowRight, Wifi, KeyRound, Shield } from "lucide-react";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/components/sections/contact-section";
import { ServiceSchema } from "@/components/seo/json-ld";
import { SERVICES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Smart Lock Installation Tampa Bay – Keyless & WiFi Lock Solutions",
  description:
    "Professional smart lock installation in Tampa Bay. Keypad locks, WiFi smart locks, Schlage Encode, Yale, August & more. Mobile-controlled access for homes and businesses.",
  keywords: [
    "smart lock installation Tampa",
    "keypad lock installation Tampa Bay",
    "WiFi lock installation Tampa",
    "keyless entry installation",
    "smart home locksmith Tampa",
  ],
};

const BRANDS = [
  "Schlage Encode",
  "Yale Assure",
  "August Smart Lock",
  "Kwikset Halo",
  "Ultraloq",
  "Level Lock",
  "Lockly",
  "Wyze Lock",
];

export default function SmartSolutionsPage() {
  const service = SERVICES.smartSolutions;

  return (
    <>
      <ServiceSchema
        name="Smart Lock Installation Service"
        description="Professional smart lock installation including WiFi locks, keypad locks, and mobile-controlled access systems for residential and commercial properties in Tampa Bay, FL."
        url={`${SITE.baseUrl}/smart-solutions`}
      />

      <ServicePageHero
        title="Smart Lock & Keyless Entry Solutions"
        subtitle="Smart Home Security"
        description="Upgrade your home or business with cutting-edge smart lock technology. We install, program, and troubleshoot all major smart lock brands across Tampa Bay."
        Icon={Smartphone}
        highlights={[
          "All major smart lock brands installed",
          "Keypad, Bluetooth, WiFi & Z-Wave options",
          "App setup and user training included",
          "Integration with smart home systems",
          "Works with Alexa, Google Home & Apple Home",
        ]}
        breadcrumb="Smart Solutions"
      />

      {/* Services */}
      <section className="section bg-white" aria-labelledby="smart-services-heading">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="smart-services-heading" className="text-brand-blue mb-4">
              Smart Lock Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From standalone keypad locks to fully connected WiFi systems, we install and configure the right smart lock for your lifestyle and security needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.items.map(({ name, description }) => (
              <Card key={name} className="group hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Smartphone className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-blue mb-2">{name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-gray-50" aria-labelledby="smart-benefits-heading">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="smart-benefits-heading" className="text-brand-blue mb-6">
                Why Go Keyless?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    Icon: KeyRound,
                    title: "No More Lost Keys",
                    desc: "Access codes and phone-based entry means you&apos;re never locked out because of a missing key.",
                  },
                  {
                    Icon: Wifi,
                    title: "Remote Access & Control",
                    desc: "Lock or unlock from anywhere in the world. Perfect for letting in guests, contractors, or Airbnb visitors.",
                  },
                  {
                    Icon: Shield,
                    title: "Activity Monitoring",
                    desc: "See a real-time log of who entered and when. Instant alerts when your lock is accessed.",
                  },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-blue mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="font-bold text-brand-blue mb-4 text-lg">
                Brands We Install & Support
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {BRANDS.map((brand) => (
                  <div
                    key={brand}
                    className="bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-center gap-2 shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-gray-700">{brand}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-3">
                Don&apos;t see your brand? Call us — we likely support it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-emerald-700 to-brand-blue py-16">
        <div className="container text-center text-white">
          <h2 className="text-white mb-3">Ready to Go Keyless?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Our smart lock experts will help you choose the perfect system for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="primary" size="xl">
              <a href={SITE.phoneTel}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {SITE.phone}
              </a>
            </Button>
            <Button asChild variant="outline-white" size="xl">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
