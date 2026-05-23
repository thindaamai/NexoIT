import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, CircleDot, Layers3 } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
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
    return {
      title: "Service",
    };
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

  return (
    <>
      <section className="overflow-hidden border-b border-white/10 bg-[#050607]">
        <div className="mx-auto grid min-h-[620px] max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <Reveal>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Service</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{service.detail}</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">{service.audience}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200">
                Scope this service <ArrowRight size={17} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/8">
                All services
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
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Service environment</p>
                <h2 className="mt-2 max-w-lg text-2xl font-semibold text-white">{service.title}</h2>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">What we solve</p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white">
              Clear fixes for the operational problems behind {service.title.toLowerCase()}.
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {service.problems.map((problem, index) => (
              <Reveal key={problem} delay={index * 0.04}>
                <div className="flex h-full gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded bg-cyan-300 text-sm font-semibold text-black">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{problem}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d10] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="sticky top-28 overflow-hidden rounded-lg border border-white/10 bg-black/24">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                <Image src={servicePhoto} alt={`${service.title} team and systems`} fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover opacity-86" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/18 to-transparent" />
                <service.icon size={34} className="absolute bottom-5 left-5 text-cyan-300" />
              </div>
              <div className="p-7">
                <h2 className="text-3xl font-semibold text-white">What exactly we do</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">{service.summary}</p>
              <div className="mt-8 grid gap-3">
                {service.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] p-4 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal>
              <DetailBlock title="Products and platforms" items={service.products} />
            </Reveal>
            <Reveal delay={0.05}>
              <DetailBlock title="Implementation scope" items={service.delivery} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Delivery flow</p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white">
              From assessment to handover, the work stays visible.
            </h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-4">
            {service.workflow.map((step, index) => (
              <div key={step} className="bg-[#080a0c] p-6">
                <div className="mb-10 flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded bg-white text-sm font-semibold text-black">
                    {index + 1}
                  </span>
                  <span className="h-px w-14 bg-gradient-to-r from-cyan-300 to-transparent" />
                </div>
                <p className="text-sm leading-6 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d10] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <section className="h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
              <div className="border-b border-white/10 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Project examples</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Example work for {service.title}</h2>
              </div>
              <div className="grid gap-px bg-white/10">
                {service.projectExamples.map((example, index) => (
                  <div key={example} className="flex gap-4 bg-[#080a0c] p-5">
                    <Layers3 size={20} className="mt-1 shrink-0 text-cyan-300" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{example}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Scope, assets, milestones, handover notes, and support status can be presented as a service-specific showcase.
                      </p>
                    </div>
                    <span className="ml-auto text-sm text-slate-600">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
          <Reveal delay={0.06}>
            <DetailBlock title="Business outcomes" items={service.outcomes} />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(16,185,129,0.06),transparent)] p-8 md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Next step</p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white">
            Ready to turn {service.title.toLowerCase()} into a clear project plan?
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            Share the systems, users, locations, timeline, and risks you want handled. NEXOIT will shape the scope, deliverables, and handover plan around your business.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200">
            Talk to us <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-7">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 rounded-md border border-white/10 bg-black/24 p-4 text-sm leading-6 text-slate-300">
            <CircleDot size={17} className="mt-0.5 shrink-0 text-cyan-300" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
