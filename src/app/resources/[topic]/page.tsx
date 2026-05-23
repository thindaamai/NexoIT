import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { JsonLd, SeoHero, SeoSection } from "@/components/seo-page";
import { getBaseService, getSeoService, resourceTopics, siteUrl } from "@/lib/seo-data";

type PageProps = {
  params: Promise<{ topic: string }>;
};

export function generateStaticParams() {
  return resourceTopics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic } = await params;
  const resource = resourceTopics.find((item) => item.slug === topic);

  if (!resource) {
    return { title: "Resource" };
  }

  return {
    title: resource.title,
    description: `${resource.title}: practical guidance from NEXOIT for Australian SMB technology planning.`,
    alternates: {
      canonical: `/resources/${resource.slug}`,
    },
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { topic } = await params;
  const resource = resourceTopics.find((item) => item.slug === topic);

  if (!resource) {
    notFound();
  }

  const service = getSeoService(resource.serviceSlug);
  const baseService = getBaseService(resource.serviceSlug);
  const url = `${siteUrl}/resources/${resource.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: resource.title,
          author: { "@type": "Organization", name: "NEXOIT" },
          publisher: { "@type": "Organization", name: "NEXOIT", url: siteUrl },
          mainEntityOfPage: url,
        }}
      />
      <SeoHero
        eyebrow="Resource"
        title={resource.title}
        copy={`A practical guide for Australian SMBs planning ${service?.title.toLowerCase() ?? "technology services"}. Use this as a starting point before scoping requirements, risks, handover, and support.`}
        cta="Discuss this topic"
      />
      <SeoSection
        eyebrow="Checklist"
        title="What to consider first"
        items={resource.questions.map((question) => `${question} NEXOIT can help assess this during discovery and turn it into a scoped delivery plan.`)}
      />
      <SeoSection
        eyebrow="Related service"
        title={service ? `How this connects to ${service.title}` : "How this connects to NEXOIT services"}
        copy={service?.intent}
        items={baseService.delivery.slice(0, 5)}
      />
      <section className="bg-[#0b0d10] px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-lg border border-white/10 bg-white/[0.035] p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white">Want this turned into a delivery plan?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Share your current environment and NEXOIT will map the scope, timeline, and handover requirements.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200">
            Talk to us <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
