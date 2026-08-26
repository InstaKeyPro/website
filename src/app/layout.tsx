import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyCallButton } from "@/components/layout/sticky-call-button";
import { Chatbot } from "@/components/chatbot/chatbot";
import { LocalBusinessSchema } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: "24 Hour Locksmith Tampa | Car Lockout $50, House Lockout $80",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Locked out in Tampa Bay? Car lockouts from $50, house lockouts from $80. Open 24 hours including after midnight, weekends and holidays with no surcharge. 20-30 minute arrival. Call (954) 662-2972.",
  keywords: [
    "24 hour locksmith Tampa",
    "locksmith open now",
    "locksmith after midnight",
    "car lockout price",
    "house lockout price",
    "locksmith near me",
    "emergency locksmith",
    "car lockout",
    "car key replacement",
    "locksmith Tampa",
    "locksmith Tampa Bay",
    "mobile locksmith",
    "24 hour locksmith",
    "key fob programming",
    "smart lock installation",
  ],
  authors: [{ name: SITE.name, url: SITE.baseUrl }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.baseUrl,
    siteName: SITE.name,
    title: "24 Hour Locksmith Tampa | Car Lockout $50, House Lockout $80",
    description:
      "Car lockouts from $50, house lockouts from $80. Open 24 hours across Tampa Bay including after midnight, with no night or holiday surcharge.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} – Tampa Bay Locksmith`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24 Hour Locksmith Tampa | Car Lockout $50, House Lockout $80",
    description:
      "Car lockout $50, house lockout $80. Open 24 hours across Tampa Bay, no after-midnight surcharge. 20-30 min arrival.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: SITE.baseUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <LocalBusinessSchema />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-[calc(40px+5rem)] lg:pt-[calc(40px+5rem)]">
          {children}
        </main>
        <Footer />
        <StickyCallButton />
        <Chatbot />
        <Analytics />
        <SpeedInsights />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
