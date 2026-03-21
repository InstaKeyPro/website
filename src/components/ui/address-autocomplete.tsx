"use client";

import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { useGooglePlaces } from "@/hooks/use-google-places";
import { cn } from "@/lib/utils";

export interface PlaceResult {
  address: string;
  lat?: number;
  lng?: number;
  place_id?: string;
}

export interface AddressAutocompleteHandle {
  getValue: () => string;
  clear: () => void;
}

interface AddressAutocompleteProps {
  onSelect?: (result: PlaceResult) => void;
  onChange?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

export const AddressAutocomplete = forwardRef<
  AddressAutocompleteHandle,
  AddressAutocompleteProps
>(
  (
    { onSelect, onChange, onKeyDown, name, placeholder, disabled, className, ...rest },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
    const ready = useGooglePlaces();

    useImperativeHandle(ref, () => ({
      getValue: () => inputRef.current?.value ?? "",
      clear: () => {
        if (inputRef.current) inputRef.current.value = "";
      },
    }));

    useEffect(() => {
      if (!ready || !inputRef.current || autocompleteRef.current) return;

      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ["address"],
          componentRestrictions: { country: "us" },
          fields: ["formatted_address", "geometry", "place_id"],
        }
      );

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current!.getPlace();
        const result: PlaceResult = {
          address: place.formatted_address ?? inputRef.current?.value ?? "",
          lat: place.geometry?.location?.lat(),
          lng: place.geometry?.location?.lng(),
          place_id: place.place_id,
        };
        // Update the DOM input value to the formatted address
        if (inputRef.current) inputRef.current.value = result.address;
        onChange?.(result.address);
        onSelect?.(result);
      });
    }, [ready, onSelect, onChange]);

    return (
      <input
        ref={inputRef}
        type="text"
        name={name}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={
          placeholder ?? (ready ? "Start typing your address..." : "Enter your address")
        }
        disabled={disabled}
        autoComplete="off"
        className={cn(
          "w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-light transition-colors",
          disabled
            ? "opacity-50 cursor-not-allowed bg-gray-50"
            : "border-gray-200 bg-white focus:border-brand-blue-light",
          className
        )}
        {...rest}
      />
    );
  }
);

AddressAutocomplete.displayName = "AddressAutocomplete";
