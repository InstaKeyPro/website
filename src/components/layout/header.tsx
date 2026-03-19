"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      )}
    >
      {/* Top bar */}
      <div className="bg-brand-blue text-white text-sm py-1.5">
        <div className="container flex items-center justify-between gap-4">
          <span className="hidden sm:block opacity-90">
            📍 Serving Tampa Bay &amp; Surrounding Areas
          </span>
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-1.5 font-semibold hover:text-brand-orange transition-colors ml-auto"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav aria-label="Main navigation">
        <div className="container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:ring-2 focus-visible:ring-brand-blue-light rounded"
            aria-label={`${SITE.name} – Home`}
          >
            <Image
              src="/images/logo.png"
              alt={SITE.name}
              width={200}
              height={56}
              priority
              className="h-10 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-blue-lighter rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="secondary" size="sm">
              <a href={SITE.phoneTel}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </Button>
            <Button asChild variant="primary" size="sm">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
          aria-hidden={!isOpen}
        >
          <ul className="container py-4 space-y-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-blue-lighter rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 border-t border-gray-100 mt-3">
              <a
                href={SITE.phoneTel}
                className="flex items-center gap-2 px-4 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-hover transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {SITE.phone}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
