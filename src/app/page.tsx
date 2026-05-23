import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, ServiceShowcase, SignalLine } from "@/components/motion-primitives";
import { capabilities, process, services } from "@/lib/site-data";

const serviceVisuals: Record<string, string> = {
  "business-essentials": "/service-photos/business-essentials.jpg",
  "web-development": "/service-photos/web-development.jpg",
  "professional-services": "/service-photos/professional-services.jpg",
  "cloud-services": "/service-photos/cloud-services.jpg",
};

const serviceShowcaseItems = services.map(({ slug, title, summary, image, items }) => ({
  slug,
  title,
  summary,
  image: serviceVisuals[slug] ?? image,
  items,
}));

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#050607]">
        <div className="absolute inset-0 opacity-45">
          <Image src="/visuals/hero-command.png" alt="" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050607_0%,rgba(5,6,7,0.9)_38%,rgba(5,6,7,0.45)_100%)]" />
        <SignalLine className="absolute left-0 top-20 h-px w-full origin-left bg-gradient-to-r from-transparent via-cyan-300 to-transparent sm:top-28" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:py-16 lg:min-h-[680px] lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <Reveal>
            <p className="mb-4 inline-flex max-w-full rounded-md border border-cyan-300/25 bg-cyan-300/8 px-3 py-2 text-xs font-medium text-cyan-200 sm:mb-5 sm:text-sm">
              Managed IT and engineering for Australian SMBs
            </p>
            <h1 className="max-w-3xl text-[2.7rem] font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Technology that runs clean, secure, and ready to scale.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              NEXOIT plans, deploys, secures, and supports the systems your business relies on: Microsoft 365, networks, cloud, web platforms, backup, and specialist engineering.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200">
                Start a project <ArrowRight size={17} />
              </Link>
              <Link href="/packages" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/8">
                View packages
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ServiceShowcase services={serviceShowcaseItems} />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#050607] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-8 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Services</p>
              <h2 className="max-w-2xl text-[2.15rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-4xl md:text-5xl">
                One technology partner across office, network, cloud, security, and web.
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
              Explore all services <ArrowRight size={16} />
            </Link>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <Link href={`/services/${service.slug}`} className="group block h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-cyan-300/45">
                  <div className="relative aspect-[16/10.5] overflow-hidden border-b border-white/10 sm:aspect-[16/8.5]">
                    <img
                      src={serviceVisuals[service.slug] ?? service.image}
                      alt={`${service.title} visual`}
                      className="h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/16 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/44 px-2.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-200 backdrop-blur sm:left-5 sm:top-5 sm:px-3 sm:py-2 sm:text-xs">
                      <service.icon size={15} />
                      Service
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">{service.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400 sm:mt-4">{service.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2 sm:mt-6">
                      {service.items.slice(0, 3).map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-black/24 px-2.5 py-1 text-[0.7rem] text-slate-300 sm:px-3 sm:py-1.5 sm:text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:text-white sm:mt-7">
                      View service <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d10] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal>
            <div className="group relative overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/service-photos/delivery-model.jpg"
                alt="Technology delivery team planning a client handover"
                width={1200}
                height={800}
                className="aspect-[4/3] object-cover opacity-88 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Planning, handover, support</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                  Clear delivery steps, documented ownership, and a supported launch window.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Delivery model</p>
            <h2 className="text-[2.15rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-4xl md:text-5xl">Clear setup, practical handover, reliable support.</h2>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
              {process.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-lg border border-white/10 bg-black/22 p-4 sm:gap-4 sm:p-5">
                  <span className="grid size-8 shrink-0 place-items-center rounded bg-white text-sm font-semibold text-black sm:size-9">{index + 1}</span>
                  <p className="text-sm leading-6 text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#050607] px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-8 md:p-12">
          <Reveal className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Capabilities</p>
              <h2 className="text-[2.05rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl">Built for businesses that need the essentials done properly.</h2>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-md border border-white/10 bg-black/28 p-3 text-sm text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/8 sm:p-4">
                  <item.icon size={18} className="text-cyan-300" />
                  {item.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
