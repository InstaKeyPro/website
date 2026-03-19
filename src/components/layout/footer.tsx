import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { SITE, NAV_LINKS, SERVICE_AREAS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const topCities = SERVICE_AREAS.slice(0, 8);

  return (
    <footer className="bg-brand-blue text-white">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label={`${SITE.name} – Home`}>
              <Image
                src="/images/logo-white.png"
                alt={SITE.name}
                width={180}
                height={50}
                className="h-12 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Professional mobile locksmith services throughout Tampa Bay and
              surrounding Florida communities.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-200 mb-2">
              <Shield className="h-4 w-4 flex-shrink-0 text-brand-orange" />
              <span>{SITE.license}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-200">
              <Clock className="h-4 w-4 flex-shrink-0 text-brand-orange" />
              <span>{SITE.hours}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {NAV_LINKS.filter((l) =>
                ["Automotive", "Residential", "Commercial", "Smart Solutions"].includes(
                  l.label
                )
              ).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-brand-orange text-sm transition-colors"
                  >
                    {link.label} Locksmith
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-blue-200 hover:text-brand-orange text-sm transition-colors"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-200 hover:text-brand-orange text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Service Areas</h3>
            <ul className="space-y-2">
              {topCities.map(({ city, state }) => (
                <li key={city}>
                  <Link
                    href={`/service-areas/${city.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "")}`}
                    className="text-blue-200 hover:text-brand-orange text-sm transition-colors"
                  >
                    {city}, {state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE.phoneTel}
                  className="flex items-start gap-3 text-blue-200 hover:text-brand-orange transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-brand-orange" />
                  <span className="font-semibold text-white">{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 text-blue-200 hover:text-brand-orange transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-brand-orange" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-brand-orange" />
                <span>
                  Serving Tampa Bay &amp; the<br />
                  Greater Florida Area
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href={SITE.phoneTel}
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm w-full justify-center"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now – We&apos;re 24/7
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <p>
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
