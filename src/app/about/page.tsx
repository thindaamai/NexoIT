import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cloud, FileCheck2, LockKeyhole, Network, ShieldCheck, UsersRound } from "lucide-react";
import { PageHero } from "@/components/site-shell";
import { Reveal } from "@/components/motion-primitives";

export const metadata = {
  title: "About Us",
  description: "Learn how NEXOIT delivers practical IT, cloud, security, web, and engineering services for Australian SMBs.",
};

const proofPoints = [
  {
    icon: Network,
    label: "Core focus",
    value: "Practical technology delivery",
    copy: "We work across networks, cloud, Microsoft 365, web platforms, security, backup, and documentation.",
  },
  {
    icon: FileCheck2,
    label: "Delivery style",
    value: "Clear handover",
    copy: "Projects are structured so clients understand what was built, where it lives, and how it is supported.",
  },
  {
    icon: ShieldCheck,
    label: "Operating mindset",
    value: "Secure by default",
    copy: "Security, access, backups, monitoring, and operational readiness are considered from the start.",
  },
];

const principles = [
  "Scope the business outcome before choosing tools.",
  "Keep systems simple enough to run after handover.",
  "Document credentials, diagrams, assets, and support notes.",
  "Build with security, backup, and reliability in mind.",
];

const capabilities = [
  { icon: UsersRound, title: "Microsoft 365 and users", copy: "Tenant setup, Teams, email, MFA, onboarding, and collaboration foundations." },
  { icon: Network, title: "Network and sites", copy: "Routers, firewalls, WiFi, VPN, SD-WAN, routing, switching, and site connectivity." },
  { icon: Cloud, title: "Cloud and hosting", copy: "Azure, AWS, hosting, cloud networking, monitoring, backup, and cost-aware operations." },
  { icon: LockKeyhole, title: "Security and support", copy: "Endpoint protection, access controls, backup checks, documentation, and practical support readiness." },
];

const partnerAreas = ["Microsoft Cloud", "AWS and Azure", "Fortinet and Cisco", "Cloudflare", "Endpoint security", "Backup and DR"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NEXOIT"
        title="Practical technology partner for Australian SMBs."
        copy="NEXOIT plans, deploys, secures, and supports the systems businesses rely on: office technology, networks, cloud, web platforms, backup, and specialist engineering."
      />

      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {proofPoints.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <item.icon size={26} className="text-cyan-300" />
                <div className="mt-8 text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
                <div className="mt-2 text-2xl font-semibold text-white">{item.value}</div>
                <p className="mt-4 text-sm leading-6 text-slate-400">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#0b0d10] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/service-photos/delivery-model.jpg"
                alt="Technology delivery planning workspace"
                width={1400}
                height={933}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Delivery model</p>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white">
                  Clear setup, practical handover, reliable support.
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">How we work</p>
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white">
              We keep technology work visible from first scope to final handover.
            </h2>
            <div className="mt-8 grid gap-3">
              {principles.map((principle) => (
                <div key={principle} className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/30 p-4 text-slate-300">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Capabilities</p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white">
              One team for the technology layers that usually get split between vendors.
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-7 transition hover:border-cyan-300/35">
                  <item.icon size={26} className="text-cyan-300" />
                  <h3 className="mt-8 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d10] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-lg border border-white/10 bg-white/[0.025] p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <Reveal>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Partner ecosystem</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Built around the platforms your business already uses.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              NEXOIT commonly designs and supports environments across these technology areas. Official partner badges can be added later when your partner assets are ready.
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {partnerAreas.map((area, index) => (
              <Reveal key={area} delay={index * 0.04}>
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-4">
                  <ShieldCheck size={18} className="text-cyan-300" />
                  <span className="font-medium text-white">{area}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <Reveal className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(16,185,129,0.06),transparent)] p-8 md:flex-row md:items-center md:p-12">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Work with us</p>
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white">
              Bring practical engineering into your next technology project.
            </h2>
          </div>
          <Link href="/contact#enquiry-form" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200">
            Start a conversation <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
