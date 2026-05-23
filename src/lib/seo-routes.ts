import { comparisons, locations, resourceTopics, seoIndustries, seoServices } from "@/lib/seo-data";

export function getSeoRoutes() {
  const staticRoutes = ["", "/services", "/packages", "/about", "/industries", "/contact"];

  const locationRoutes = locations.flatMap((city) =>
    seoServices.map((service) => `/locations/${city.slug}/${service.slug}`)
  );

  const industryRoutes = seoIndustries.flatMap((industry) =>
    seoServices.map((service) => `/industries/${industry.slug}/${service.slug}`)
  );

  const resourceRoutes = resourceTopics.map((topic) => `/resources/${topic.slug}`);
  const comparisonRoutes = comparisons.map((comparison) => `/compare/${comparison.slug}`);

  return [...staticRoutes, ...locationRoutes, ...industryRoutes, ...resourceRoutes, ...comparisonRoutes];
}
