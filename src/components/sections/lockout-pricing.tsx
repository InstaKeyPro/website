import { Car, Home, Phone, Clock, ShieldCheck, BadgeDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, PRICING } from "@/lib/constants";

const TIERS = [
  { ...PRICING.carLockout, Icon: Car },
  { ...PRICING.homeLockout, Icon: Home },
];

const GUARANTEES = [
  { Icon: Clock, text: "Open 24 hours — after midnight, weekends, holidays" },
  { Icon: BadgeDollarSign, text: "No call-out fee and no night surcharge" },
  { Icon: ShieldCheck, text: "Damage-free entry, price quoted before we dispatch" },
];

/**
 * The prices in plain text. This is the section answer engines lift from, so
 * the numbers stay as real text (never baked into an image) and the headline
 * carries .speakable-headline for voice assistants.
 */
export function LockoutPricing() {
  return (
    <section className="section bg-white" aria-labelledby="pricing-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="pricing-heading" className="speakable-headline text-brand-blue mb-4">
            Lockout Prices: $50 Car, $80 Home — Any Hour
          </h2>
          <p className="speakable-answer text-gray-600 max-w-2xl mx-auto text-lg">
            A car lockout starts at $50 and a house lockout starts at $80 anywhere in
            Tampa Bay. The same price applies at 2 AM as at 2 PM — we never add a
            night, weekend, or holiday surcharge.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {TIERS.map(({ service, label, blurb, Icon }) => (
            <div
              key={service}
              className="border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-brand-orange transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-brand-blue-lighter rounded-xl flex items-center justify-center mx-auto mb-5">
                <Icon className="h-7 w-7 text-brand-blue" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-brand-blue text-xl mb-2">{service}</h3>
              <p className="mb-4">
                <span className="text-sm text-gray-500 align-top">from </span>
                <span className="text-5xl font-extrabold text-brand-orange">{label}</span>
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">{blurb}</p>
            </div>
          ))}
        </div>

        <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          {GUARANTEES.map(({ Icon, text }) => (
            <li key={text} className="flex items-center gap-2 text-sm text-gray-700">
              <Icon className="h-4 w-4 text-brand-orange flex-shrink-0" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Button asChild size="xl">
            <a href={SITE.phoneTel}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {SITE.phone} — Open Now
            </a>
          </Button>
          <p className="text-gray-500 text-sm mt-4">{PRICING.note}</p>
        </div>
      </div>
    </section>
  );
}
