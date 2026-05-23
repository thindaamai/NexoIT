import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, RelatedLinks, SeoHero, SeoSection } from "@/components/seo-page";
import { getBaseService, getSeoIndustry, getSeoService, seoIndustries, seoServices, siteUrl } from "@/lib/seo-data";

type PageProps = {
  params: Promise<{ industry: string; service: string }>;
};

export function generateStaticParams() {
  return seoIndustries.flatMap((industry) => seoServices.map((service) => ({ industry: industry.slug, service: service.slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry, service } = await params;
  const seoIndustry = getSeoIndustry(industry);
  const seoService = getSeoService(service);

  if (!seoIndustry || !seoService) {
    return { title: "Industry service" };
  }

  return {
    title: `${seoService.title} for ${seoIndustry.name}`,
    description: `NEXOIT provides ${seoService.title.toLowerCase()} for ${seoIndustry.name.toLowerCase()} organisations in Australia with practical scope, security, and handover.`,
    alternates: {
      canonical: `/industries/${seoIndustry.slug}/${seoService.slug}`,
    },
  };
}

export default async function IndustryServicePage({ params }: PageProps) {
  const { industry, service } = await params;
  const seoIndustry = getSeoIndustry(industry);
  const seoService = getSeoService(service);

  if (!seoIndustry || !seoService) {
    notFound();
  }

  const baseService = getBaseService(seoService.slug);
  const url = `${siteUrl}/industries/${seoIndustry.slug}/${seoService.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${seoService.title} for ${seoIndustry.name}`,
          provider: { "@type": "Organization", name: "NEXOIT", url: siteUrl },
          audience: { "@type": "Audience", audienceType: seoIndustry.name },
          serviceType: seoService.title,
          url,
        }}
      />
      <SeoHero
        eyebrow={`${seoIndustry.name} ${seoService.title}`}
        title={`${seoService.title} for ${seoIndustry.name}`}
        copy={`NEXOIT helps ${seoIndustry.name.toLowerCase()} teams with ${seoService.intent}. The work is shaped around operational risk, user needs, documentation, and support readiness.`}
      />
      <SeoSection
        eyebrow="Industry needs"
        title={`Common ${seoIndustry.name.toLowerCase()} requirements`}
        items={seoIndustry.needs.map((need) => `Support ${need} through a practical ${seoService.title.toLowerCase()} scope.`)}
      />
      <SeoSection
        eyebrow="Delivery"
        title={`How NEXOIT delivers ${seoService.title.toLowerCase()}`}
        copy={`The implementation is based on the same disciplined delivery model used across NEXOIT service work.`}
        items={baseService.workflow}
      />
      <RelatedLinks
        title={`Related ${seoIndustry.name} pages`}
        links={seoServices
          .filter((item) => item.slug !== seoService.slug)
          .slice(0, 6)
          .map((item) => ({ href: `/industries/${seoIndustry.slug}/${item.slug}`, label: `${item.title} for ${seoIndustry.name}` }))}
      />
    </>
  );
}
