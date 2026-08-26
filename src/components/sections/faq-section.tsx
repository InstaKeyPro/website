import { ChevronDown } from "lucide-react";

interface FaqSectionProps {
  items: readonly { question: string; answer: string }[];
  title?: string;
  intro?: string;
}

/**
 * Native <details> accordion — no JS, so the answers are in the initial HTML
 * where crawlers and LLM fetchers can read them without executing scripts.
 */
export function FaqSection({
  items,
  title = "Locksmith Prices & Hours — Straight Answers",
  intro,
}: FaqSectionProps) {
  return (
    <section className="section bg-gray-50" aria-labelledby="faq-heading">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <h2 id="faq-heading" className="text-brand-blue mb-3">
            {title}
          </h2>
          {intro && <p className="text-gray-600">{intro}</p>}
        </div>

        <div className="space-y-3">
          {items.map(({ question, answer }, i) => (
            <details
              key={question}
              open={i === 0}
              className="group border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-brand-blue hover:bg-gray-50 transition-colors list-none">
                <h3 className="text-base font-semibold m-0">{question}</h3>
                <ChevronDown
                  className="h-5 w-5 text-brand-orange flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="speakable-answer px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
