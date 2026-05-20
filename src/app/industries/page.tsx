import { PageHero } from "@/components/site-shell";
import { Reveal, TiltCard } from "@/components/motion-primitives";
import { industries } from "@/lib/site-data";

export const metadata = {
  title: "Industries",
  description: "NEXOIT supports SMB and enterprise teams across finance, healthcare, government, telecommunications, retail, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Systems support for teams where downtime has a real cost."
        copy="NEXOIT works across SMB and enterprise environments that need security, clarity, documentation, and dependable technology foundations."
      />
      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.name} delay={index * 0.04}>
              <TiltCard className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-7 transition hover:border-cyan-300/35">
                <industry.icon className="text-cyan-300" size={30} />
                <h2 className="mt-8 text-2xl font-semibold text-white">{industry.name}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-400">{industry.copy}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-[#0b0d10] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(16,185,129,0.06),transparent)] p-8 md:p-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Target market</p>
              <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Small to mid-size Australian businesses that need enterprise-grade thinking without enterprise confusion.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The service model is intentionally simple: assess, implement, secure, document, train, and support. That keeps the work understandable for owners while still giving technical teams the depth they need.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
