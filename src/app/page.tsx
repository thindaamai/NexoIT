"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Shield, Clock, MapPin, MessageSquare } from "lucide-react";
import { Reveal, ServiceShowcase, SignalLine } from "@/components/motion-primitives";
import { capabilities, process, services } from "@/lib/site-data";

const serviceVisuals: Record<string, string> = {
  "business-essentials": "/service-photos/business-essentials.jpg",
  "web-development": "/service-photos/web-development.jpg",
  "professional-services": "/service-photos/professional-services.jpg",
  "cloud-services": "/service-photos/cloud-services.jpg",
};

const serviceTaglines: Record<string, string> = {
  "business-essentials": "Office, network, security, and staff onboarding in one managed setup.",
  "web-development": "Modern websites and apps that are easy to operate after launch.",
  "professional-services": "Specialist engineers for serious network, SRE, and security work.",
  "cloud-services": "Secure cloud foundations for teams that need resilience and control.",
};

const serviceShowcaseItems = services.map(({ slug, title, summary, image, items }) => ({
  slug,
  title,
  summary,
  tagline: serviceTaglines[slug] ?? summary,
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
        <div className="relative mx-auto max-w-7xl px-5 pt-12 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 lg:min-h-[600px]">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 sm:mb-5">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Australian-owned &middot; Remote-first &middot; No lock-in contracts</span>
              </div>
              <h1 className="font-jakarta max-w-3xl text-3xl font-bold leading-[1.18] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Reliable IT Support for Australian Businesses
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
                From managed IT infrastructure to professional websites and Microsoft 365 &mdash; we handle your tech so you can focus on running your business.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-6 sm:mt-9">
                <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-200">
                  Talk to us <ArrowRight size={17} className="transition group-hover:translate-x-0.5" />
                </Link>
                <Link href="#services" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/8">
                  See our services
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
                <Phone size={15} className="text-cyan-300" />
                <span>Call us: <a href="tel:+61400000000" className="font-medium text-slate-300 transition hover:text-white">+61 400 000 000</a></span>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ServiceShowcase services={serviceShowcaseItems} />
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-y-4 border-t border-white/10 py-6 text-slate-400 sm:grid-cols-4 sm:gap-x-6 sm:mt-16 lg:mt-20">
            <div className="flex items-center gap-2.5 text-xs text-slate-300 sm:text-sm font-medium">
              <Shield size={16} className="text-cyan-300 shrink-0" />
              <span>No lock-in contracts</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 sm:text-sm font-medium">
              <Clock size={16} className="text-cyan-300 shrink-0" />
              <span>Fast response times</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 sm:text-sm font-medium">
              <MapPin size={16} className="text-cyan-300 shrink-0" />
              <span>Local Australian business</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 sm:text-sm font-medium">
              <MessageSquare size={16} className="text-cyan-300 shrink-0" />
              <span>Plain English &mdash; no jargon</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#050607] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-8 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Services</p>
              <h2 className="font-jakarta max-w-2xl text-2xl font-bold leading-[1.25] tracking-tight text-white sm:text-3xl md:text-4xl">
                One technology partner across office, network, cloud, security, and web.
              </h2>
            </div>
            <Link href="#services" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
              Explore all services <ArrowRight size={16} />
            </Link>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <Link id={service.slug} href={`/services/${service.slug}`} className="group relative block aspect-[16/10.5] overflow-hidden rounded-xl border border-white/10 bg-[#060809] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] sm:aspect-[16/9.5]">
                  <img
                    src={serviceVisuals[service.slug] ?? service.image}
                    alt={`${service.title} visual`}
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="flex flex-col gap-1">
                      <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        0{index + 1} &middot; SERVICE
                      </div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-outfit text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-cyan-200">
                          {service.title}
                        </h3>
                        <ArrowRight size={12} className="text-slate-500 transition-all duration-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-cyan-300" />
                      </div>
                    </div>
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
            <h2 className="font-jakarta text-2xl font-bold leading-[1.25] tracking-tight text-white sm:text-3xl md:text-4xl">Clear setup, practical handover, reliable support.</h2>
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
              <h2 className="font-jakarta text-2xl font-bold leading-[1.25] tracking-tight text-white sm:text-3xl">Built for businesses that need the essentials done properly.</h2>
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
