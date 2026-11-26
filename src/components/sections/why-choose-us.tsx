import { Zap, Shield, DollarSign, Wrench, Clock, Award } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

const ICON_MAP = {
  Zap,
  Shield,
  DollarSign,
  Wrench,
  Clock,
  Award,
} as const;

export function WhyChooseUs() {
  return (
    <section
      className="section bg-gradient-to-br from-brand-blue to-brand-blue-light"
      aria-labelledby="why-us-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Why InstaKey Pro
          </span>
          <h2 id="why-us-heading" className="text-white mb-4">
            The Tampa Bay Locksmith You Can Trust
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            We&apos;re not just another locksmith company. We&apos;re your neighbors —
            committed to keeping Tampa Bay safe and never leaving you stranded.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map(({ icon, title, description }) => {
            const Icon = ICON_MAP[icon as keyof typeof ICON_MAP];
            return (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300 group"
              >
                <div className="bg-brand-orange/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {Icon && (
                    <Icon
                      className="h-6 w-6 text-brand-orange"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
