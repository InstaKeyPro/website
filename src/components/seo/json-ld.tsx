import { SITE, PRICING, SERVICE_AREAS, LOCKOUT_FAQ } from "@/lib/constants";

/** One <script type="application/ld+json"> — every schema below renders through this. */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/** 24/7, no closing time — this is what "open now" and "after midnight" queries read. */
const ALWAYS_OPEN = {
  "@type": "OpeningHoursSpecification" as const,
  dayOfWeek: DAYS,
  opens: "00:00",
  closes: "23:59",
};

const AREA_SERVED = SERVICE_AREAS.map(({ city, state }) => ({
  "@type": "City" as const,
  name: `${city}, ${state}`,
}));

const TEL = SITE.phoneTel.replace("tel:", "");

/** Offers carry the actual numbers answer engines quote. Keep in sync with PRICING. */
const LOCKOUT_OFFERS = [PRICING.carLockout, PRICING.homeLockout].map((p) => ({
  "@type": "Offer" as const,
  name: p.service,
  description: p.blurb,
  priceSpecification: {
    "@type": "PriceSpecification" as const,
    minPrice: p.from,
    priceCurrency: PRICING.currency,
  },
  availability: "https://schema.org/InStock",
  availableAtOrFrom: { "@type": "Place" as const, name: "Tampa Bay, FL" },
  itemOffered: {
    "@type": "Service" as const,
    name: p.service,
    serviceType: p.service,
    provider: { "@type": "Locksmith" as const, name: SITE.name },
  },
}));

export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Locksmith", "EmergencyService"],
        "@id": `${SITE.baseUrl}/#business`,
        name: SITE.name,
        alternateName: SITE.shortName,
        image: `${SITE.baseUrl}/images/logo.png`,
        logo: `${SITE.baseUrl}/images/logo.png`,
        url: SITE.baseUrl,
        telephone: TEL,
        email: SITE.email,
        description: `24 hour emergency locksmith serving Tampa Bay, Florida. Car lockouts from $${PRICING.carLockout.from} and house lockouts from $${PRICING.homeLockout.from}, with no extra charge after midnight, on weekends, or on holidays. Call for current availability and an arrival estimate.`,
        openingHours: "Mo-Su 00:00-23:59",
        openingHoursSpecification: [ALWAYS_OPEN],

        currenciesAccepted: PRICING.currency,

        areaServed: AREA_SERVED,
        makesOffer: LOCKOUT_OFFERS,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Emergency Lockout Services",
          itemListElement: LOCKOUT_OFFERS,
        },

        contactPoint: {
          "@type": "ContactPoint",
          telephone: TEL,
          contactType: "emergency",
          areaServed: "US-FL",

          hoursAvailable: ALWAYS_OPEN,
        },
      }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  /** Starting price in USD. Emitted as an Offer so the number is machine-readable. */
  priceFrom?: number;
}

export function ServiceSchema({
  name,
  description,
  url,
  priceFrom,
}: ServiceSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        serviceType: name,
        description,
        url,
        provider: {
          "@type": ["LocalBusiness", "Locksmith"],
          "@id": `${SITE.baseUrl}/#business`,
          name: SITE.name,
          telephone: TEL,
        },
        areaServed: AREA_SERVED,
        hoursAvailable: ALWAYS_OPEN,
        ...(priceFrom
          ? {
              offers: {
                "@type": "Offer",
                priceCurrency: PRICING.currency,
                priceSpecification: {
                  "@type": "PriceSpecification",
                  minPrice: priceFrom,
                  priceCurrency: PRICING.currency,
                },
                availability: "https://schema.org/InStock",
              },
            }
          : {}),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: url,
          servicePhone: TEL,
          serviceLocation: {
            "@type": "Place",
            name: "Mobile service across Tampa Bay, FL",
          },
        },
      }}
    />
  );
}

export function FAQSchema({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}

/**
 * speakable marks which sentences a voice assistant (Siri, Alexa, Google
 * Assistant) may read aloud. Without it they read whatever they scrape first,
 * which is usually the navigation.
 */
export function SpeakableSchema({ url }: { url: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".speakable-headline", ".speakable-answer"],
        },
        mainEntity: { "@id": `${SITE.baseUrl}/#business` },
      }}
    />
  );
}

/** Site-wide price + open-now FAQ. Home page only, to avoid duplicate FAQPage markup. */
export function LockoutFAQSchema() {
  return <FAQSchema items={LOCKOUT_FAQ} />;
}
