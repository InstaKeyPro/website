import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

/**
 * AI answer engines use two separate crawler classes:
 *  - training/indexing crawlers (GPTBot, ClaudeBot, Google-Extended, ...)
 *  - live retrieval fetchers that run at question time (OAI-SearchBot,
 *    ChatGPT-User, Claude-User, PerplexityBot, ...)
 * Both are listed explicitly. A bare "User-agent: *" technically allows them,
 * but several of these bots treat an explicit allow as the stronger signal and
 * some CDN bot rules block anything not named.
 */
const AI_CRAWLERS = [
  // OpenAI / ChatGPT
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic / Claude
  "ClaudeBot",
  "Claude-Web",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Google Gemini / AI Overviews
  "Google-Extended",
  "GoogleOther",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Microsoft Copilot / Bing (powers Alexa+ and Windows Copilot answers)
  "bingbot",
  "BingPreview",
  "msnbot",
  // Apple (Siri / Spotlight suggestions)
  "Applebot",
  "Applebot-Extended",
  // Meta AI, Amazon, ByteDance, Common Crawl (feeds many open models)
  "FacebookBot",
  "meta-externalagent",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "DuckAssistBot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
    host: SITE.baseUrl,
  };
}
