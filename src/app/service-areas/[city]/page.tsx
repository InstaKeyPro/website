import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, Car, Home, Building2, Smartphone, CheckCircle2 } from "lucide-react";
import { SERVICE_AREAS, SITE } from "@/lib/constants";
import { slugify } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LocalBusinessSchema } from "@/components/seo/json-ld";
import { ContactSection } from "@/components/sections/contact-section";

interface PageProps {
  params: { city: string };
}

function findCity(slug: string) {
  return SERVICE_AREAS.find(
    (area) => slugify(`${area.city} ${area.state}`) === slug
  );
}

export async function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({
    city: slugify(`${area.city} ${area.state}`),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const area = findCity(params.city);
  if (!area) return {};

  const title = `Locksmith in ${area.city}, ${area.state} | 24/7 Emergency Service`;
  const description = `InstaKey Pro Locksmith provides 24/7 mobile locksmith services in ${area.city}, FL. Car lockouts, key replacement, residential locks, commercial security & smart lock installation. Fast response — licensed & insured.`;

  return {
    title,
    description,
    keywords: [
      `locksmith ${area.city}`,
      `locksmith ${area.city} FL`,
      `emergency locksmith ${area.city}`,
      `car lockout ${area.city}`,
      `key replacement ${area.city} Florida`,
    ],
    openGraph: {
      title,
      description,
      url: `${SITE.baseUrl}/service-areas/${params.city}`,
    },
    alternates: {
      canonical: `${SITE.baseUrl}/service-areas/${params.city}`,
    },
  };
}

const CITY_SERVICES = [
  { Icon: Car, title: "Automotive Locksmith", href: "/automotive", color: "bg-brand-blue", items: ["Car lockout", "Key replacement", "Key fob programming", "Transponder keys"] },
  { Icon: Home, title: "Residential Locksmith", href: "/residential", color: "bg-brand-orange", items: ["House lockout", "Lock rekey", "Deadbolt installation", "Key duplication"] },
  { Icon: Building2, title: "Commercial Locksmith", href: "/commercial", color: "bg-slate-700", items: ["Office lockout", "Master key systems", "Access control", "Panic bars"] },
  { Icon: Smartphone, title: "Smart Solutions", href: "/smart-solutions", color: "bg-emerald-600", items: ["Smart lock install", "Keypad locks", "WiFi locks", "App setup"] },
];

export default function CityPage({ params }: PageProps) {
  const area = findCity(params.city);
  if (!area) notFound();

  const { city, state, zip } = area;
  const nearbyAreas = SERVICE_AREAS.filter((a) => a.city !== city).slice(0, 6);

  return (
    <>
      <LocalBusinessSchema city={city} state={state} url={`${SITE.baseUrl}/service-areas/${params.city}`} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-light py-20 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">{city}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {city}, {state} {zip}
              </div>

              <h1 className="text-white font-extrabold mb-4 leading-tight">
                Locksmith in {city}, {state}
              </h1>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed max-w-lg">
                InstaKey Pro Locksmith provides professional 24/7 mobile locksmith
                services in {city}, {state}. From emergency lockouts to complete security
                upgrades — we come to you, fast.
              </p>

              <ul className="space-y-2 mb-8">
                {[
                  `Licensed & insured locksmith serving ${city}, FL`,
                  "20–30 minute average response time",
                  "Automotive, residential & commercial services",
                  "Upfront flat-rate pricing — no surprises",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-blue-100 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand-orange flex-shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="primary" size="lg">
                  <a href={SITE.phoneTel}>
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call {SITE.phone}
                  </a>
                </Button>
                <Button asChild variant="outline-white" size="lg">
                  <Link href="/contact">
                    Request Service
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Dispatch card */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-semibold text-white">Technician Available in {city}</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Response Time", value: "~30 min" },
                    { label: "Availability", value: "24/7/365" },
                    { label: "Coverage", value: `${city} & Nearby` },
                    { label: "Pricing", value: "Flat Rate" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm py-2 border-b border-white/10 last:border-0">
                      <span className="text-blue-200">{label}</span>
                      <span className="font-semibold text-white">{value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={SITE.phoneTel}
                  className="mt-6 flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 px-6 rounded-xl transition-colors w-full"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Dispatch Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="section bg-white" aria-labelledby={`${city}-services-heading`}>
        <div className="container">
          <div className="text-center mb-10">
            <h2 id={`${city}-services-heading`} className="text-brand-blue mb-3">
              Locksmith Services in {city}, FL
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certified technicians in {city} handle all types of lock and key
              emergencies — with no additional travel fees.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CITY_SERVICES.map(({ Icon, title, href, color, items }) => (
              <Card key={title} className="group hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-brand-blue mb-3">{title}</h3>
                  <ul className="space-y-1.5 mb-4">
                    {items.map((item) => (
                      <li key={item} className="text-xs text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="text-brand-blue-light text-sm font-semibold hover:text-brand-blue inline-flex items-center gap-1 group/link"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local content block */}
      <section className="section bg-gray-50" aria-labelledby={`about-${city}-heading`}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 id={`about-${city}-heading`} className="text-brand-blue mb-4">
                Your Trusted Locksmith in {city}, FL
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                InstaKey Pro Locksmith has been serving {city} and the surrounding
                Tampa Bay area since {SITE.founded}. We understand the local community
                and are committed to providing fast, reliable locksmith services whenever
                you need them.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you&apos;re locked out of your car on the highway, need your home
                rekeyed after a move, or want to upgrade your business to a master key
                system — our {city}-area technicians are ready to help.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We serve all neighborhoods in {city}, {state} {zip} and keep response
                times under 30 minutes for most calls. Our pricing is always upfront —
                no hidden fees, no surprises.
              </p>
              <Button asChild variant="secondary" size="lg">
                <a href={SITE.phoneTel}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call for Service in {city}
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-brand-blue text-lg">
                Nearby Service Areas
              </h3>
              <p className="text-gray-600 text-sm">
                We also serve the communities surrounding {city}:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {nearbyAreas.map(({ city: nearCity, state: nearState }) => {
                  const nearSlug = slugify(`${nearCity} ${nearState}`);
                  return (
                    <Link
                      key={nearCity}
                      href={`/service-areas/${nearSlug}`}
                      className="flex items-center gap-2 p-3 bg-white border border-gray-100 rounded-xl hover:border-brand-blue hover:bg-brand-blue-lighter text-sm text-gray-700 hover:text-brand-blue transition-all group"
                    >
                      <MapPin className="h-3.5 w-3.5 text-brand-orange flex-shrink-0" aria-hidden="true" />
                      {nearCity}, {nearState}
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-1.5 text-brand-blue-light text-sm font-medium hover:text-brand-blue"
              >
                View All Service Areas
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
