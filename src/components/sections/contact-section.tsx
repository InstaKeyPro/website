import Link from "next/link";
import { Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { ContactForm } from "@/components/forms/contact-form";

export function ContactSection() {
  return (
    <section
      className="section bg-gray-50"
      aria-labelledby="contact-section-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Get Help Now
          </span>
          <h2 id="contact-section-heading" className="text-brand-blue mb-4">
            Contact InstaKey Pro
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Locked out? Need a quote? We respond fast — usually within minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-brand-blue rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Emergency? Call Now</h3>
              <a
                href={SITE.phoneTel}
                className="flex items-center gap-3 text-2xl font-extrabold text-brand-orange hover:text-yellow-300 transition-colors"
              >
                <Phone className="h-7 w-7" aria-hidden="true" />
                {SITE.phone}
              </a>
              <p className="text-blue-200 text-sm mt-2">
                Fastest response for emergencies — don&apos;t wait, call us!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="bg-brand-blue-lighter p-2.5 rounded-lg flex-shrink-0">
                  <Clock className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">Hours</div>
                  <div className="text-gray-600 text-sm">24 hours / 7 days a week</div>
                  <div className="text-gray-600 text-sm">365 days a year</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="bg-orange-50 p-2.5 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">Email</div>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-brand-blue-light text-sm hover:underline"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="flex items-center justify-between p-4 bg-brand-orange/10 border border-brand-orange/30 rounded-xl hover:bg-brand-orange/20 transition-colors group"
            >
              <div>
                <div className="font-semibold text-brand-blue text-sm">
                  Need a detailed quote?
                </div>
                <div className="text-gray-600 text-xs">
                  Visit our full contact page
                </div>
              </div>
              <ArrowRight
                className="h-5 w-5 text-brand-orange group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Right: Quick form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-card p-8">
            <h3 className="font-bold text-brand-blue text-xl mb-6">
              Request a Callback
            </h3>
            <ContactForm isCompact />
          </div>
        </div>
      </div>
    </section>
  );
}
