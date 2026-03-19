"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={SITE.phoneTel}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-5 py-3.5 rounded-full shadow-cta transition-all duration-300 lg:hidden",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0 pointer-events-none"
      )}
      aria-label={`Call us at ${SITE.phone}`}
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>
      <Phone className="h-5 w-5" aria-hidden="true" />
      <span>Call Now</span>
    </a>
  );
}
