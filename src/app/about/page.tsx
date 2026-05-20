import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Handshake, ShieldCheck, UsersRound } from "lucide-react";
import { PageHero } from "@/components/site-shell";
import { Reveal, TiltCard } from "@/components/motion-primitives";
import { founders, partners } from "@/lib/site-data";

export const metadata = {
  title: "About",
  description: "Meet the NEXOIT founding team, delivery approach, and technology partners.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NEXOIT"
        title="Experienced engineers, practical operators, and long-term technology partners."
        copy="NEXOIT brings together network architecture, cloud delivery, SRE, web platforms, and security operations for Australian SMBs that need technology handled clearly."
      />

      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            { icon: UsersRound, label: "Founding team", value: "5 leads", copy: "Senior operators across network, cloud, SRE, web, and security." },
            { icon: BadgeCheck, label: "Experience range", value: "10-20 yrs", copy: "Each founder brings deep delivery experience from real operating environments." },
            { icon: ShieldCheck, label: "Delivery style", value: "Documented", copy: "Every engagement is designed for clear handover and support readiness." },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <item.icon size={26} className="text-cyan-300" />
                <div className="mt-8 text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
                <div className="mt-2 text-4xl font-semibold text-white">{item.value}</div>
                <p className="mt-4 text-sm leading-6 text-slate-400">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#0b0d10] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Founding team</p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white">
              Five founding specialists covering the core systems every modern business depends on.
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {founders.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.04}>
                <TiltCard className="h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition hover:border-cyan-300/35">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    width={720}
                    height={900}
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="mb-3 inline-flex rounded bg-cyan-300/12 px-2 py-1 text-xs font-semibold text-cyan-200">
                      {member.experience} experience
                    </div>
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="mt-2 text-sm leading-5 text-slate-300">{member.role}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-500">{member.focus}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Partners</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white">A practical partner ecosystem for the tools your business already uses.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              These partner-style technology areas represent the platforms NEXOIT commonly designs, integrates, secures, and hands over. Replace these marks with official partner badges when your partner program assets are ready.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {partners.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 0.04}>
                <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan-300/35">
                  <Image
                    src={partner.image}
                    alt={`${partner.name} partner visual`}
                    width={520}
                    height={260}
                    className="rounded-md border border-white/10"
                  />
                  <div className="mt-4 flex items-start gap-3">
                    <Handshake size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                    <div>
                      <h3 className="font-semibold text-white">{partner.name}</h3>
                      <p className="mt-1 text-sm text-slate-400">{partner.area}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d10] px-5 py-20 lg:px-8">
        <Reveal className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(16,185,129,0.06),transparent)] p-8 md:flex-row md:items-center md:p-12">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Work with us</p>
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white">Bring the right people into your next technology project.</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200">
            Start a conversation <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
