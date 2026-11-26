import type { Metadata } from "next";
import Link from "next/link";
import { Car, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/components/sections/contact-section";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import { LockoutPricing } from "@/components/sections/lockout-pricing";
import { SERVICES, SITE, PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: `${SITE.baseUrl}/automotive` },
  title: "Car Lockout Tampa from $50 | 24 Hour Auto Locksmith",
  description:
    "Locked out of your car in Tampa Bay? Car lockouts from $50, open 24 hours including after midnight — no night surcharge. Lost key replacement, fob programming, ignition repair. Call for an arrival estimate. Call (954) 662-2972.",
  keywords: [
    "car lockout Tampa",
    "car lockout price",
    "car lockout service near me",
    "24 hour car locksmith Tampa",
    "locked keys in car",
    "unlock car door service Tampa",
    "lost car key replacement Tampa",
    "key fob programming Tampa",
    "auto locksmith open now",
  ],
  openGraph: {
    title: "Automotive Locksmith Tampa Bay | InstaKey Pro",
    url: `${SITE.baseUrl}/automotive`,
    description:
      "24/7 car lockout & key replacement service. We come to you anywhere in Tampa Bay.",
  },
};

const FAQ_ITEMS = [
  {
    question: "How long does it take for you to arrive for a car lockout?",
    answer:
      "Arrival depends on location, traffic, and technician availability. Call for a current estimate.",
  },
  {
    question: "Can you replace car keys without the original?",
    answer:
      "Yes! We can cut and program new keys for most vehicles even without the original key. We use the vehicle's VIN number and may require proof of ownership.",
  },
  {
    question: "Do you program key fobs and transponder keys?",
    answer:
      "We offer key fob and transponder programming. Call with your vehicle year, make, and model to confirm compatibility and get a quote.",
  },
  {
    question: "Are you open after midnight for car lockouts?",
    answer:
      "Yes. We run 24 hours a day, 7 days a week, 365 days a year, including after midnight, weekends, and holidays. Car lockouts start at $50. Call (954) 662-2972 to confirm the final quote and current availability.",
  },
  {
    question: "How much does a car lockout service cost?",
    answer:
      "A car lockout starts at $50 anywhere in Tampa Bay. That is a flat starting rate quoted before we dispatch, with no call-out fee and no extra charge for nights, weekends, or holidays.",
  },
];

export default function AutomotivePage() {
  const service = SERVICES.automotive;

  return (
    <>
      <ServiceSchema
        name="Automotive Locksmith Service"
        description="24/7 mobile automotive locksmith services including car lockouts, key replacement, key fob programming, and ignition repair in Tampa Bay, FL."
        url={`${SITE.baseUrl}/automotive`}
        priceFrom={PRICING.carLockout.from}
      />
      <FAQSchema items={FAQ_ITEMS} />

      <ServicePageHero
        title="Automotive Locksmith Services"
        subtitle="Automotive Locksmith"
        description="Locked out of your car? Lost your keys? Our mobile automotive locksmiths come to you anywhere in Tampa Bay — Call to confirm compatibility, availability, and pricing."
        Icon={Car}
        highlights={[
          "Car lockout service",
          "Key cutting & programming on-site",
          "Call to confirm vehicle compatibility",
          "Quote confirmed before dispatch",
          "Arrival estimate confirmed when you call",
        ]}
        breadcrumb="Automotive Locksmith"
      />

      <LockoutPricing />

      {/* Services Grid */}
      <section className="section bg-white" aria-labelledby="auto-services-heading">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="auto-services-heading" className="text-brand-blue mb-4">
              Our Automotive Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every automotive lock and key problem has a solution — and we bring that
              solution directly to you, wherever you are in Tampa Bay.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.items.map(({ name, description }) => (
              <Card key={name} className="group hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-brand-blue-lighter rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors duration-300">
                    <Car className="h-5 w-5 text-brand-blue group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-brand-blue mb-2">{name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50" aria-labelledby="process-heading">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="process-heading" className="text-brand-blue mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Getting back into your car is simple with InstaKey Pro.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Call or Request Online", desc: "Contact us 24/7 by phone or web form." },
              { step: "2", title: "Give Your Location", desc: "We pinpoint your location and dispatch the nearest technician." },
              { step: "3", title: "Arrival Estimate Confirmed", desc: "Confirm the arrival estimate and service details before dispatch." },
              { step: "4", title: "Problem Solved", desc: "We unlock your car or cut/program new keys on-site." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center text-white text-2xl font-extrabold mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-bold text-brand-blue mb-2 text-base">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" aria-labelledby="faq-heading">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 id="faq-heading" className="text-brand-blue mb-3">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map(({ question, answer }) => (
              <details
                key={question}
                className="group border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-brand-blue hover:bg-gray-50 transition-colors list-none">
                  {question}
                  <CheckCircle2 className="h-5 w-5 text-brand-orange flex-shrink-0" aria-hidden="true" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-orange py-14">
        <div className="container text-center text-white">
          <h2 className="text-white mb-3">Locked Out Right Now?</h2>
          <p className="text-orange-100 mb-6 text-lg">Don&apos;t wait — our technicians are standing by 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="xl">
              <a href={SITE.phoneTel}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {SITE.phone}
              </a>
            </Button>
            <Button asChild variant="outline-white" size="xl">
              <Link href="/contact">
                Request Online
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
