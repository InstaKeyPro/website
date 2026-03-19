import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { ServiceAreasPreview } from "@/components/sections/service-areas-preview";
import { ContactSection } from "@/components/sections/contact-section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} | 24/7 Emergency Locksmith Tampa Bay`,
  description:
    "InstaKey Pro Locksmith — Tampa Bay's #1 mobile locksmith. 24/7 emergency service for car lockouts, key replacement, residential locks, commercial security & smart lock installation. 30-min response.",
  alternates: { canonical: SITE.baseUrl },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreasPreview />
      <ContactSection />
    </>
  );
}
