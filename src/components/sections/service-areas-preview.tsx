import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { SERVICE_AREAS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/utils";

export function ServiceAreasPreview() {
  return (
    <section className="section bg-white" aria-labelledby="areas-heading">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Service Coverage
          </span>
          <h2 id="areas-heading" className="text-brand-blue mb-4">
            We Come to You — Anywhere in Tampa Bay
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mobile locksmiths cover a wide area across the Tampa Bay region.
            Can&apos;t find your city? Call us — we likely serve it.
          </p>
        </div>

        {/* Map + Cities */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* City list */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SERVICE_AREAS.map(({ city, state }) => {
                const slug = slugify(`${city} ${state}`);
                return (
                  <Link
                    key={city}
                    href={`/service-areas/${slug}`}
                    className="flex items-center gap-2 p-3 rounded-xl border border-gray-100 hover:border-brand-blue hover:bg-brand-blue-lighter text-sm font-medium text-gray-700 hover:text-brand-blue transition-all duration-200 group"
                  >
                    <MapPin
                      className="h-4 w-4 text-brand-orange flex-shrink-0 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <span>
                      {city}, {state}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Coverage info card */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-3xl p-8 text-white sticky top-28">
              <div className="w-14 h-14 bg-brand-orange/20 rounded-2xl flex items-center justify-center mb-5">
                <MapPin className="h-7 w-7 text-brand-orange" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">Can&apos;t Find Your City?</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                Our coverage extends beyond the listed cities. If you&apos;re in
                the Greater Tampa Bay area, there&apos;s a good chance we can reach
                you. Call us to confirm service availability.
              </p>
              <div className="space-y-3">
                <a
                  href={SITE.phoneTel}
                  className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold py-3 px-6 rounded-xl transition-colors w-full text-sm"
                >
                  Call {SITE.phone}
                </a>
                <Button asChild variant="outline-white" size="md" className="w-full text-sm">
                  <Link href="/service-areas">
                    View All Areas
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
