import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyCallButton } from "@/components/layout/sticky-call-button";
import { Chatbot } from "@/components/chatbot/chatbot";
import { LocalBusinessSchema } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `${SITE.name} | 24/7 Emergency Locksmith Tampa Bay`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "InstaKey Pro Locksmith — Tampa Bay's trusted 24/7 mobile locksmith. Car lockouts, key replacement, residential, commercial & smart lock services. Fast response, licensed & insured.",
  keywords: [
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
    title: `${SITE.name} | 24/7 Emergency Locksmith Tampa Bay`,
    description:
      "Tampa Bay's trusted 24/7 mobile locksmith. Car lockouts, key replacement, residential, commercial & smart lock services.",
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
    title: `${SITE.name} | 24/7 Emergency Locksmith`,
    description:
      "Tampa Bay's trusted 24/7 mobile locksmith. Fast response, upfront pricing, licensed & insured.",
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
      </body>
    </html>
  );
}
