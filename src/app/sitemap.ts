import { MetadataRoute } from "next";
import { SITE, SERVICE_AREAS } from "@/lib/constants";
import { slugify } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE.baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.baseUrl}/automotive`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.baseUrl}/residential`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.baseUrl}/commercial`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.baseUrl}/smart-solutions`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.baseUrl}/service-areas`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.baseUrl}/contact`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  const cityPages: MetadataRoute.Sitemap = SERVICE_AREAS.map(({ city, state }) => ({
    url: `${SITE.baseUrl}/service-areas/${slugify(`${city} ${state}`)}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages];
}
