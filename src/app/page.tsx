import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Gauge, LockKeyhole, ServerCog } from "lucide-react";
import { Reveal, SignalLine, TiltCard } from "@/components/motion-primitives";
import { capabilities, process, services, stats } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#050607]">
        <div className="absolute inset-0 opacity-45">
          <Image src="/visuals/hero-command.png" alt="" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050607_0%,rgba(5,6,7,0.9)_38%,rgba(5,6,7,0.45)_100%)]" />
        <SignalLine className="absolute left-0 top-28 h-px w-full origin-left bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <p className="mb-5 inline-flex rounded-md border border-cyan-300/25 bg-cyan-300/8 px-3 py-2 text-sm font-medium text-cyan-200">
              Managed IT and engineering for Australian SMBs
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl">
              Technology that runs clean, secure, and ready to scale.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              NEXOIT plans, deploys, secures, and supports the systems your business relies on: Microsoft 365, networks, cloud, web platforms, backup, and specialist engineering.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200">
                Start a project <ArrowRight size={17} />
              </Link>
              <Link href="/packages" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/8">
                View packages
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-lg border border-white/12 bg-black/48 p-4 shadow-2xl backdrop-blur">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm text-slate-400">Operations console</span>
                <span className="rounded bg-emerald-400/12 px-2 py-1 text-xs text-emerald-300">Healthy</span>
              </div>
              <div className="grid gap-3">
                {[
                  { icon: ServerCog, title: "M365 tenant configured", value: "98%" },
                  { icon: LockKeyhole, title: "MFA and endpoint protection", value: "Active" },
                  { icon: Gauge, title: "Backup window", value: "Scheduled" },
                ].map((item) => (
                  <div key={item.title} className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/40 hover:bg-cyan-300/8">
                    <div className="flex items-center gap-3">
                      <item.icon className="text-cyan-300 transition group-hover:scale-110" size={20} />
                      <span className="text-sm text-white">{item.title}</span>
                    </div>
                    <span className="text-sm text-slate-300">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080a0c]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 px-5 py-px lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#080a0c] px-6 py-8">
              <div className="text-4xl font-semibold text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#050607] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Services</p>
              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                One technology partner across office, network, cloud, security, and web.
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
              Explore all services <ArrowRight size={16} />
            </Link>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <TiltCard className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-300/35">
                  <service.icon className="mb-8 text-cyan-300" size={28} />
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{service.summary}</p>
                  <div className="mt-6 grid gap-2">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                        <Check size={15} className="text-emerald-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d10] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Image src="/visuals/secure-operations.png" alt="Abstract secure network operations visual" width={1200} height={800} className="rounded-lg border border-white/10 object-cover" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Delivery model</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Clear setup, practical handover, reliable support.</h2>
            <div className="mt-8 grid gap-4">
              {process.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-lg border border-white/10 bg-black/22 p-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded bg-white text-sm font-semibold text-black">{index + 1}</span>
                  <p className="text-sm leading-6 text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-white/[0.035] p-8 md:p-12">
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Capabilities</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white">Built for businesses that need the essentials done properly.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-md border border-white/10 bg-black/28 p-4 text-sm text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/8">
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
