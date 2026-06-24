import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronDown, CircleDot, Layers3 } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import {
  WorkflowGrid,
  CapabilitiesGrid,
  EngagementRow,
} from "@/components/service-sections";
import { services } from "@/lib/site-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const servicePhotos: Record<string, string> = {
  "business-essentials": "/service-photos/business-essentials.jpg",
  "web-development": "/service-photos/web-development.jpg",
  "professional-services": "/service-photos/professional-services.jpg",
  "cloud-services": "/service-photos/cloud-services.jpg",
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service" };
  }

  return {
    title: service.title,
    description: service.detail,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const servicePhoto = servicePhotos[service.slug] ?? service.image;
  const labels = service.workflowLabels;

  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden border-b border-white/10 bg-[#050607]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <Reveal>
            <p
              className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300"
              data-testid="service-eyebrow"
            >
              Service
            </p>
            <h1
              className="max-w-xl text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl"
              data-testid="service-title"
            >
              {service.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {service.detail}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded bg-white px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:bg-cyan-200"
                data-testid="hero-cta-primary"
              >
                Request consultation
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 rounded border border-white/12 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-cyan-300/50 hover:bg-white/8"
                data-testid="hero-cta-secondary"
              >
                View capabilities
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
              <Image
                src={servicePhoto}
                alt={`${service.title} service environment`}
                width={1200}
                height={800}
                priority
                className="aspect-[4/3] object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Service environment
                </p>
                <h2 className="mt-2 max-w-lg text-xl font-semibold text-white sm:text-2xl">
                  {service.title}
                </h2>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Our Approach / Workflow ── */}
      <section className="border-b border-white/10 bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Our approach
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
              We take a structured approach that turns your business needs into
              a solid, secure IT foundation.
            </h2>
          </Reveal>

          <WorkflowGrid steps={service.workflow} labels={labels} />
        </div>
      </section>

      {/* ── Ways We Work ── */}
      <section className="border-b border-white/10 bg-[#0b0d10] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Ways we work
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Work with us the way that suits your business.
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <div
                className="flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.035] p-7"
                data-testid="work-mode-setup"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-lg text-white">&#9881;</span>
                  <h3 className="text-xl font-semibold text-white">
                    Setup Architecture
                  </h3>
                </div>
                <p className="mb-6 text-sm leading-6 text-slate-400">
                  Foundational engineering projects designed for long-term
                  operational stability.
                </p>
                <div className="mt-auto grid gap-3">
                  <EngagementRow label="Project-based" />
                  <EngagementRow label="Fixed contract" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div
                className="flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.035] p-7"
                data-testid="work-mode-support"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-lg text-white">&#127911;</span>
                  <h3 className="text-xl font-semibold text-white">
                    Support Systems
                  </h3>
                </div>
                <p className="mb-6 text-sm leading-6 text-slate-400">
                  Continuous oversight and expert intervention for maintaining
                  peak performance.
                </p>
                <div className="mt-auto grid gap-3">
                  <EngagementRow label="Monthly retainer" />
                  <EngagementRow label="On-demand resolution" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section
        id="capabilities"
        className="border-b border-white/10 bg-[#050607] px-5 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Capabilities
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Everything your business runs on, set up in one place.
            </h2>
          </Reveal>

          <CapabilitiesGrid capabilities={service.capabilities} />
        </div>
      </section>

      {/* ── Project Examples & Business Outcomes ── */}
      <section className="border-b border-white/10 bg-[#0b0d10] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
              <div className="border-b border-white/10 p-7">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Project examples
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Example work for {service.title}
                </h2>
              </div>
              <div className="grid gap-px bg-white/10">
                {service.projectExamples.map((example, index) => (
                  <details
                    key={example}
                    className="group bg-[#080a0c]"
                    data-testid={`project-example-${index}`}
                  >
                    <summary className="flex cursor-pointer items-center gap-4 p-5 [&::-webkit-details-marker]:hidden">
                      <Layers3
                        size={18}
                        className="shrink-0 text-cyan-300"
                      />
                      <span className="flex-1 text-sm font-semibold text-white sm:text-base">
                        {example}
                      </span>
                      <ChevronDown
                        size={16}
                        className="shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="border-t border-white/5 px-5 pb-5 pt-3">
                      <p className="text-sm leading-6 text-slate-400">
                        {service.detail}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-7">
              <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Business outcomes
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex gap-3 rounded-md border border-white/10 bg-black/24 p-4"
                  >
                    <CircleDot
                      size={17}
                      className="mt-0.5 shrink-0 text-cyan-300"
                    />
                    <div>
                      <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
                        {outcome.split(" ").slice(0, 2).join(" ")}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {outcome}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.10),rgba(16,185,129,0.05),transparent)] px-6 py-16 text-center sm:px-10 md:py-20">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-cyan-100 sm:text-4xl md:text-5xl">
            Ready for a Gated Infrastructure?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Join the elite SMBs that treat their technology as a competitive
            advantage rather than a friction point.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded bg-white px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:bg-cyan-200"
            data-testid="cta-consultation"
          >
            Request consultation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
