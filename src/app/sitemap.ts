import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo-data";
import { getSeoRoutes } from "@/lib/seo-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getSeoRoutes().map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/locations") || route.startsWith("/industries") ? 0.7 : 0.6,
  }));
}
