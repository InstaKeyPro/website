import Link from "next/link";
import { Car, Home, Building2, Smartphone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

const SERVICE_CARDS = [
  {
    ...SERVICES.automotive,
    Icon: Car,
    href: "/automotive",
    color: "from-blue-50 to-blue-100",
    iconBg: "bg-brand-blue",
    highlights: ["Car Lockout", "Key Replacement", "Key Fob Programming"],
  },
  {
    ...SERVICES.residential,
    Icon: Home,
    href: "/residential",
    color: "from-orange-50 to-orange-100",
    iconBg: "bg-brand-orange",
    highlights: ["House Lockout", "Lock Rekey", "Deadbolt Upgrades"],
  },
  {
    ...SERVICES.commercial,
    Icon: Building2,
    href: "/commercial",
    color: "from-slate-50 to-slate-100",
    iconBg: "bg-slate-700",
    highlights: ["Master Key Systems", "Access Control", "High-Security Locks"],
  },
  {
    ...SERVICES.smartSolutions,
    Icon: Smartphone,
    href: "/smart-solutions",
    color: "from-emerald-50 to-emerald-100",
    iconBg: "bg-emerald-600",
    highlights: ["Smart Lock Install", "Keypad Locks", "WiFi Locks"],
  },
];

export function ServicesOverview() {
  return (
    <section className="section bg-white" aria-labelledby="services-heading">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 id="services-heading" className="text-brand-blue mb-4">
            Complete Locksmith Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From car lockouts to full smart lock integrations — our certified
            technicians handle every type of lock and key challenge with speed
            and precision.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {SERVICE_CARDS.map(({ title, description, Icon, href, iconBg, highlights }) => (
            <Card
              key={title}
              className="group flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <CardContent className="flex flex-col flex-1 p-6">
                {/* Icon */}
                <div
                  className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>

                <h3 className="text-lg font-bold text-brand-blue mb-2">
                  {title} Locksmith
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-xs text-gray-600"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-brand-blue-light font-semibold text-sm hover:text-brand-blue group/link"
                >
                  Learn More
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">
              Request Any Service Now
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
