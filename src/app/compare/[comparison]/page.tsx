import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, SeoHero, SeoSection } from "@/components/seo-page";
import { comparisons, getBaseService, siteUrl } from "@/lib/seo-data";

type PageProps = {
  params: Promise<{ comparison: string }>;
};

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ comparison: comparison.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { comparison } = await params;
  const item = comparisons.find((entry) => entry.slug === comparison);

  if (!item) {
    return { title: "Comparison" };
  }

  return {
    title: `${item.a} vs ${item.b}`,
    description: `Compare ${item.a} and ${item.b} for Australian SMB technology planning with NEXOIT.`,
    alternates: {
      canonical: `/compare/${item.slug}`,
    },
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { comparison } = await params;
  const item = comparisons.find((entry) => entry.slug === comparison);

  if (!item) {
    notFound();
  }

  const baseService = getBaseService(item.serviceSlug);
  const url = `${siteUrl}/compare/${item.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${item.a} vs ${item.b}`,
          author: { "@type": "Organization", name: "NEXOIT" },
          mainEntityOfPage: url,
        }}
      />
      <SeoHero
        eyebrow="Comparison"
        title={`${item.a} vs ${item.b}`}
        copy={`Use this comparison to understand which option fits your business, risk level, operating model, and support needs. NEXOIT can help turn the decision into a practical implementation plan.`}
        cta="Compare options with us"
      />
      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {[item.a, item.b].map((name) => (
            <div key={name} className="rounded-lg border border-white/10 bg-white/[0.035] p-7">
              <h2 className="text-3xl font-semibold text-white">{name}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Best considered by looking at cost, support model, security, documentation, user experience, and how the option will be maintained after launch.
              </p>
            </div>
          ))}
        </div>
      </section>
      <SeoSection
        eyebrow="Decision factors"
        title="What to compare before choosing"
        items={[
          "Total cost of ownership, including setup, licences, support, and future changes.",
          "Security, access control, backup, monitoring, and documentation requirements.",
          "How much control your internal team needs after the project is handed over.",
          "Whether the option supports your current users, locations, workflows, and growth plans.",
        ]}
      />
      <SeoSection
        eyebrow="NEXOIT support"
        title={`How this connects to ${baseService.title}`}
        copy={baseService.detail}
        items={baseService.outcomes}
      />
    </>
  );
}
