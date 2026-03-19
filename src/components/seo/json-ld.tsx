import { SITE } from "@/lib/constants";

interface LocalBusinessSchemaProps {
  city?: string;
  state?: string;
  url?: string;
}

export function LocalBusinessSchema({
  city = "Tampa",
  state = "FL",
  url,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Locksmith"],
    name: SITE.name,
    image: `${SITE.baseUrl}/images/logo.png`,
    url: url ?? SITE.baseUrl,
    telephone: SITE.phone,
    email: SITE.email,
    description: `Professional 24/7 mobile locksmith services in ${city}, ${state}. Automotive, residential, commercial, and smart lock solutions.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.9506",
      longitude: "-82.4572",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    areaServed: [
      "Tampa, FL",
      "St. Petersburg, FL",
      "Clearwater, FL",
      "Wesley Chapel, FL",
      "Land O' Lakes, FL",
      "Lutz, FL",
    ],
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(`${SITE.name} ${city} ${state}`)}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "247",
      bestRating: "5",
    },
    sameAs: [
      `https://www.facebook.com/instakeypro`,
      `https://www.google.com/maps`,
      `https://www.yelp.com/biz/instakey-pro-locksmith`,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone,
    },
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      servicePhone: SITE.phone,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
