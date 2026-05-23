import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, RelatedLinks, SeoHero, SeoSection } from "@/components/seo-page";
import { getBaseService, getLocation, getSeoService, locations, seoServices, siteUrl } from "@/lib/seo-data";

type PageProps = {
  params: Promise<{ city: string; service: string }>;
};

export function generateStaticParams() {
  return locations.flatMap((city) => seoServices.map((service) => ({ city: city.slug, service: service.slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, service } = await params;
  const location = getLocation(city);
  const seoService = getSeoService(service);

  if (!location || !seoService) {
    return { title: "Service location" };
  }

  return {
    title: `${seoService.title} in ${location.name}`,
    description: `NEXOIT provides ${seoService.title.toLowerCase()} in ${location.name}, ${location.state} for Australian SMBs that need practical, secure technology delivery.`,
    alternates: {
      canonical: `/locations/${location.slug}/${seoService.slug}`,
    },
  };
}

export default async function LocationServicePage({ params }: PageProps) {
  const { city, service } = await params;
  const location = getLocation(city);
  const seoService = getSeoService(service);

  if (!location || !seoService) {
    notFound();
  }

  const baseService = getBaseService(seoService.slug);
  const url = `${siteUrl}/locations/${location.slug}/${seoService.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${seoService.title} in ${location.name}`,
          provider: { "@type": "Organization", name: "NEXOIT", url: siteUrl },
          areaServed: { "@type": "City", name: location.name },
          serviceType: seoService.title,
          url,
        }}
      />
      <SeoHero
        eyebrow={`${location.name} ${seoService.title}`}
        title={`${seoService.title} in ${location.name}`}
        copy={`NEXOIT helps ${location.name} businesses with ${seoService.intent}. We focus on practical delivery, clear documentation, and secure handover for SMB teams across ${location.state}.`}
      />
      <SeoSection
        eyebrow="Local fit"
        title={`Why ${location.name} teams choose NEXOIT`}
        copy={`${location.name} has a mix of ${location.industries.join(", ")} businesses that need dependable systems without enterprise confusion.`}
        items={[
          `Plan ${seoService.title.toLowerCase()} around your users, locations, current systems, and growth plans.`,
          `Deliver the work with security, documentation, and handover included from the start.`,
          `Support common ${location.name} business needs across ${location.industries.slice(0, 3).join(", ")} and other SMB sectors.`,
          `Connect this work with related NEXOIT services like ${baseService.title.toLowerCase()} when your scope needs more coverage.`,
        ]}
      />
      <SeoSection
        eyebrow="Scope"
        title={`What is included in ${seoService.title.toLowerCase()}`}
        items={baseService.delivery.slice(0, 6)}
      />
      <RelatedLinks
        title={`Related ${location.name} service pages`}
        links={seoServices
          .filter((item) => item.slug !== seoService.slug)
          .slice(0, 6)
          .map((item) => ({ href: `/locations/${location.slug}/${item.slug}`, label: `${item.title} in ${location.name}` }))}
      />
    </>
  );
}
