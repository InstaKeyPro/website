import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { SERVICE_AREAS, SITE } from "@/lib/constants";
import { slugify } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LocalBusinessSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Locksmith Service Areas – Tampa Bay, FL & Surrounding Cities",
  description:
    "InstaKey Pro Locksmith serves Tampa Bay and 19+ surrounding communities including Tampa, St. Petersburg, Clearwater, Wesley Chapel, Land O' Lakes, and more. 24/7 mobile locksmith.",
  keywords: [
    "locksmith service areas Tampa Bay",
    "mobile locksmith Tampa Florida",
    "locksmith Wesley Chapel",
    "locksmith Clearwater",
    "locksmith St Petersburg",
  ],
};

export default function ServiceAreasPage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-light py-20 text-white">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">
                Service Areas
              </li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Tampa Bay Coverage
            </div>
            <h1 className="text-white font-extrabold mb-4">
              Locksmith Service Areas
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              We proudly serve Tampa Bay and 19 surrounding communities. Our mobile
              locksmiths are strategically positioned to reach you fast — wherever
              you are in the greater Tampa Bay area.
            </p>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="section bg-white" aria-labelledby="cities-heading">
        <div className="container">
          <div className="text-center mb-10">
            <h2 id="cities-heading" className="text-brand-blue mb-3">
              Cities We Serve
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Click on your city to see locally-specific locksmith services and information.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_AREAS.map(({ city, state, zip }) => {
              const slug = slugify(`${city} ${state}`);
              return (
                <Link
                  key={city}
                  href={`/service-areas/${slug}`}
                  className="group flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:border-brand-blue hover:shadow-card-hover transition-all duration-300 bg-white"
                >
                  <div className="w-10 h-10 bg-brand-blue-lighter rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-brand-blue group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-brand-blue group-hover:text-brand-orange transition-colors">
                      {city}, {state}
                    </div>
                    <div className="text-gray-400 text-xs">{zip}</div>
                  </div>
                  <ArrowRight
                    className="h-4 w-4 text-gray-300 group-hover:text-brand-orange transition-all group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Not in the list */}
      <section className="section bg-gray-50" aria-labelledby="other-areas-heading">
        <div className="container">
          <div className="bg-brand-blue rounded-3xl p-10 text-white text-center max-w-3xl mx-auto">
            <MapPin className="h-12 w-12 text-brand-orange mx-auto mb-4" aria-hidden="true" />
            <h2 id="other-areas-heading" className="text-white mb-3">
              Don&apos;t See Your City?
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Our coverage extends throughout Hillsborough, Pinellas, Pasco, Manatee, and
              Sarasota counties. Give us a call — we probably serve your area!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="primary" size="lg">
                <a href={SITE.phoneTel}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call {SITE.phone}
                </a>
              </Button>
              <Button asChild variant="outline-white" size="lg">
                <Link href="/contact">
                  Ask About Your Area
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
