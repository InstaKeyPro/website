import type { Metadata } from "next";
import Link from "next/link";
import { Home, Phone, ArrowRight } from "lucide-react";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/components/sections/contact-section";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import { SERVICES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Locksmith Tampa Bay – House Lockout, Rekey & Lock Installation",
  description:
    "24/7 residential locksmith services in Tampa Bay. House lockouts, lock rekeying, deadbolt installation & key duplication. Fast, trusted, mobile service — we come to you.",
  keywords: [
    "residential locksmith Tampa",
    "house lockout Tampa",
    "lock rekey Tampa Bay",
    "deadbolt installation Tampa",
    "home locksmith near me",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How quickly can you get to a house lockout?",
    answer:
      "Typically 20–30 minutes anywhere in the Tampa Bay area. We operate 24/7 including holidays.",
  },
  {
    question: "What is rekeying and when should I do it?",
    answer:
      "Rekeying changes the internal pins of your lock so old keys no longer work. Do it when moving in, after a break-up, or if you've lost a key. It's cheaper than replacing the whole lock.",
  },
  {
    question: "What brands of locks do you install?",
    answer:
      "We work with all major brands: Schlage, Kwikset, Baldwin, Medeco, and more. We'll recommend the best option for your security level and budget.",
  },
  {
    question: "Can you install deadbolts on any door?",
    answer:
      "Yes, we can install deadbolts on virtually any exterior door, including hollow and solid wood, steel, and fiberglass doors.",
  },
];

export default function ResidentialPage() {
  const service = SERVICES.residential;

  return (
    <>
      <ServiceSchema
        name="Residential Locksmith Service"
        description="24/7 residential locksmith services including house lockouts, lock rekeying, deadbolt installation, and key duplication in Tampa Bay, FL."
        url={`${SITE.baseUrl}/residential`}
      />
      <FAQSchema items={FAQ_ITEMS} />

      <ServicePageHero
        title="Residential Locksmith Services"
        subtitle="Home Security Experts"
        description="Locked out of your home or ready to upgrade your security? Our residential locksmiths provide fast, reliable service for homeowners and renters across Tampa Bay."
        Icon={Home}
        highlights={[
          "House lockouts — damage-free entry",
          "Lock rekeying for new homeowners",
          "Grade 1 deadbolt installation",
          "Key duplication for all lock types",
          "Available 24/7 — even on holidays",
        ]}
        breadcrumb="Residential Locksmith"
      />

      {/* Services */}
      <section className="section bg-white" aria-labelledby="res-services-heading">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="res-services-heading" className="text-brand-blue mb-4">
              Residential Lock Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a simple house lockout to a full security upgrade, InstaKey Pro has you covered with honest pricing and professional workmanship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.items.map(({ name, description }) => (
              <Card key={name} className="group hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-orange transition-colors duration-300">
                    <Home className="h-5 w-5 text-brand-orange group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-brand-blue mb-2">{name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="section bg-gray-50" aria-labelledby="security-tips-heading">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">
                Pro Tips
              </span>
              <h2 id="security-tips-heading" className="text-brand-blue mt-2 mb-4">
                Home Security Best Practices
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Rekey when you move in",
                    tip: "You never know how many copies of the previous keys exist. Rekeying is fast and inexpensive.",
                  },
                  {
                    title: "Use Grade 1 deadbolts on exterior doors",
                    tip: "Grade 1 is the highest residential security rating. It resists kicking, prying, and drilling.",
                  },
                  {
                    title: "Don't hide a spare key outside",
                    tip: "Burglars know all the common hiding spots. Instead, leave a spare with a trusted neighbor.",
                  },
                  {
                    title: "Consider a smart lock for secondary entries",
                    tip: "Smart locks let you grant access without physical keys and track who comes and goes.",
                  },
                ].map(({ title, tip }) => (
                  <li key={title} className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0 mt-2" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-brand-blue block mb-0.5">{title}</span>
                      <span className="text-gray-600 text-sm">{tip}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-blue rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Free Security Consultation</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                When our technician arrives, we&apos;ll assess your home&apos;s security and provide honest recommendations — at no extra charge.
              </p>
              <div className="space-y-3">
                <a
                  href={SITE.phoneTel}
                  className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold py-3 px-6 rounded-xl transition-colors w-full text-sm"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {SITE.phone}
                </a>
                <Button asChild variant="outline-white" size="md" className="w-full text-sm">
                  <Link href="/contact">
                    Request Online
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" aria-labelledby="res-faq-heading">
        <div className="container max-w-3xl">
          <h2 id="res-faq-heading" className="text-brand-blue text-center mb-8">
            Common Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map(({ question, answer }) => (
              <details key={question} className="border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-brand-blue hover:bg-gray-50 transition-colors list-none">
                  {question}
                  <span className="text-brand-orange text-lg" aria-hidden="true">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
