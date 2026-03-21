"use client";

import { useEffect, useState } from "react";

let scriptLoaded = false;

export function useGooglePlaces(): boolean {
  const [ready, setReady] = useState(
    () =>
      typeof window !== "undefined" && !!window.google?.maps?.places
  );

  useEffect(() => {
    if (ready || scriptLoaded) return;

    const key = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    if (!key) return; // Gracefully degrade to plain text input

    if (window.google?.maps?.places) {
      scriptLoaded = true;
      setReady(true);
      return;
    }

    // Avoid injecting a duplicate script tag
    const existing = document.querySelector(
      'script[src*="maps.googleapis.com"]'
    );
    if (existing) {
      existing.addEventListener("load", () => setReady(true));
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      setReady(true);
    };
    document.head.appendChild(script);
  }, [ready]);

  return ready;
}
