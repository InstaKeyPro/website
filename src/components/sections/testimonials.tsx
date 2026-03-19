import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function Testimonials() {
  return (
    <section className="section bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Real Reviews
          </span>
          <h2 id="testimonials-heading" className="text-brand-blue mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="h-6 w-6 text-brand-orange fill-brand-orange"
                aria-hidden="true"
              />
            ))}
            <span className="font-bold text-brand-blue ml-2 text-lg">4.9</span>
            <span className="text-gray-500 text-sm">(247+ Google Reviews)</span>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Don&apos;t take our word for it — hear from the Tampa Bay community we serve every day.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, location, rating, text, service }) => (
            <Card key={name} className="flex flex-col">
              <CardContent className="flex flex-col flex-1 p-6">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-brand-orange fill-brand-orange"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote
                  className="h-8 w-8 text-brand-blue-lighter mb-3"
                  aria-hidden="true"
                />

                {/* Review text */}
                <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-4 italic">
                  &ldquo;{text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-semibold text-brand-blue text-sm">
                      {name}
                    </div>
                    <div className="text-xs text-gray-500">{location}</div>
                  </div>
                  <Badge variant="muted" className="text-xs">{service}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google badge */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/search?q=InstaKey+Pro+Locksmith+Tampa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
