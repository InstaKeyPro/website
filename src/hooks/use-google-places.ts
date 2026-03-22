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
    ) as HTMLScriptElement | null;
    if (existing) {
      if (window.google?.maps?.places) {
        setReady(true);
      } else {
        const onLoad = () => setReady(true);
        existing.addEventListener("load", onLoad, { once: true });
        return () => existing.removeEventListener("load", onLoad);
      }
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
