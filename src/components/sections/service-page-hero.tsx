import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  Icon: LucideIcon;
  highlights: string[];
  breadcrumb: string;
}

export function ServicePageHero({
  title,
  subtitle,
  description,
  Icon,
  highlights,
  breadcrumb,
}: ServicePageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-brand-blue to-brand-blue-light py-20 lg:py-28 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-blue-200">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-medium" aria-current="page">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Service badge */}
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <Icon className="h-4 w-4" aria-hidden="true" />
              {subtitle}
            </div>

            <h1 className="text-white font-extrabold mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-blue-100 text-lg mb-6 max-w-lg leading-relaxed">
              {description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle2
                    className="h-4 w-4 text-brand-orange flex-shrink-0"
                    aria-hidden="true"
                  />
                  {h}
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
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { v: "24/7", l: "Emergency Service" },
              { v: "30min", l: "Response Time" },
              { v: "Licensed", l: "& Fully Insured" },
              { v: "Flat Rate", l: "Upfront Pricing" },
            ].map(({ v, l }) => (
              <div
                key={l}
                className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center"
              >
                <div className="text-2xl font-extrabold text-brand-orange mb-1">{v}</div>
                <div className="text-blue-100 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
