import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site-shell";
import { Reveal, TiltCard } from "@/components/motion-primitives";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Services",
  description: "Managed IT, web development, professional engineering, and cloud services for Australian SMBs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical technology services without the messy handover."
        copy="From office setup and Microsoft 365 to cloud networking, websites, security, and specialist engineering, NEXOIT keeps the work clear from consultation to support."
      />
      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <TiltCard className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-8 transition hover:border-cyan-300/35">
                <service.icon size={34} className="text-cyan-300" />
                <h2 className="mt-8 text-3xl font-semibold text-white">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">{service.summary}</p>
                <div className="mt-8 grid gap-3">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                      <Check size={16} className="text-emerald-300" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href={`/services/${service.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
                  View service detail <ArrowRight size={16} />
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-[#0b0d10] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">How it feels</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white">Local support, plain-English advice, and engineering depth when the work gets serious.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              The approach borrows the best parts of managed service providers, cyber consultancies, and engineering teams: predictable communication, clean documentation, and systems your staff can actually use.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200">
              Discuss requirements <ArrowRight size={17} />
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Image src="/visuals/cloud-network.png" alt="Abstract cloud and network operations visual" width={1200} height={800} className="rounded-lg border border-white/10 object-cover" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
