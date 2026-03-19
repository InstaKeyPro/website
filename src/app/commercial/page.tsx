import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Phone, ArrowRight, Shield } from "lucide-react";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/components/sections/contact-section";
import { ServiceSchema } from "@/components/seo/json-ld";
import { SERVICES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Locksmith Tampa Bay – Master Keys, Access Control & More",
  description:
    "Professional commercial locksmith services in Tampa Bay. Master key systems, high-security locks, access control, office lockouts & panic bars. Licensed, insured, 24/7 available.",
  keywords: [
    "commercial locksmith Tampa",
    "master key system Tampa",
    "access control installation Tampa",
    "high security locks Tampa Bay",
    "office lockout Tampa",
  ],
};

export default function CommercialPage() {
  const service = SERVICES.commercial;

  return (
    <>
      <ServiceSchema
        name="Commercial Locksmith Service"
        description="Professional commercial locksmith services including master key systems, high-security locks, access control installation, and office lockouts in Tampa Bay, FL."
        url={`${SITE.baseUrl}/commercial`}
      />

      <ServicePageHero
        title="Commercial Locksmith Services"
        subtitle="Business Security Solutions"
        description="Protect your business, employees, and assets with enterprise-grade commercial locksmith services. We work with all types of commercial properties across Tampa Bay."
        Icon={Building2}
        highlights={[
          "Master key system design & installation",
          "High-security locks — Medeco, Mul-T-Lock, ABLOY",
          "Access control — keypad, card, biometric",
          "24/7 commercial emergency lockout",
          "Compliance-ready panic bars & exit devices",
        ]}
        breadcrumb="Commercial Locksmith"
      />

      {/* Services */}
      <section className="section bg-white" aria-labelledby="com-services-heading">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="com-services-heading" className="text-brand-blue mb-4">
              Commercial Security Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with businesses of all sizes — from retail shops to multi-floor office buildings — to deliver security solutions that fit your operations and budget.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.items.map(({ name, description }) => (
              <Card key={name} className="group hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-700 transition-colors duration-300">
                    <Shield className="h-5 w-5 text-slate-700 group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-brand-blue mb-2">{name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-gray-50" aria-labelledby="industries-heading">
        <div className="container">
          <div className="text-center mb-10">
            <h2 id="industries-heading" className="text-brand-blue mb-3">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our commercial locksmith team has experience across a wide range of business types.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Retail Stores",
              "Office Buildings",
              "Medical Facilities",
              "Schools & Universities",
              "Restaurants & Bars",
              "Hotels & Hospitality",
              "Warehouses",
              "Government Buildings",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm"
              >
                <Building2 className="h-6 w-6 text-brand-orange mx-auto mb-2" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-16">
        <div className="container text-center text-white">
          <h2 className="text-white mb-3">Need a Commercial Security Assessment?</h2>
          <p className="text-blue-100 mb-6 text-lg max-w-xl mx-auto">
            We offer free on-site security audits for businesses in Tampa Bay. Let us find the gaps before someone else does.
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
                Request a Quote
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
