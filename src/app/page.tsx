import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { LockoutPricing } from "@/components/sections/lockout-pricing";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FaqSection } from "@/components/sections/faq-section";
import { ServiceAreasPreview } from "@/components/sections/service-areas-preview";
import { ContactSection } from "@/components/sections/contact-section";
import { LockoutFAQSchema, SpeakableSchema } from "@/components/seo/json-ld";
import { SITE, LOCKOUT_FAQ } from "@/lib/constants";

export const metadata: Metadata = {
  title: "24 Hour Locksmith Tampa | Car Lockout $50, House Lockout $80",
  description:
    "Locked out in Tampa Bay? Car lockouts from $50, house lockouts from $80 — open 24 hours including after midnight, weekends and holidays. No night surcharge. Call for an arrival estimate. Call (954) 662-2972.",
  keywords: [
    "24 hour locksmith Tampa",
    "car lockout service Tampa",
    "house lockout Tampa",
    "locksmith open now",
    "locksmith after midnight",
    "cheap locksmith Tampa",
    "emergency locksmith near me",
    "late night locksmith Tampa",
    "car lockout price",
    "unlock car door service",
  ],
  alternates: { canonical: SITE.baseUrl },
  openGraph: {
    title: "24 Hour Locksmith Tampa | Car Lockout $50, House Lockout $80",
    description:
      "Open 24 hours, every night. Car lockouts from $50, house lockouts from $80, no after-midnight surcharge. Call for an arrival estimate across Tampa Bay.",
    url: SITE.baseUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <LockoutFAQSchema />
      <SpeakableSchema url={SITE.baseUrl} />

      <Hero />
      <LockoutPricing />
      <ServicesOverview />
      <WhyChooseUs />
      <FaqSection
        items={LOCKOUT_FAQ}
        intro="What a lockout costs, and whether we are open right now."
      />
      <ServiceAreasPreview />
      <ContactSection />
    </>
  );
}
