import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site-shell";
import { Reveal } from "@/components/motion-primitives";
import { packages } from "@/lib/site-data";

export const metadata = {
  title: "Packages",
  description: "NEXOIT Business Essentials, Web Development, Professional Services, and Cloud Services packages.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Service packages that match the way SMB projects actually happen."
        copy="Choose a focused package, then shape the scope around your business, team, sites, systems, and support needs."
      />
      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5">
          {packages.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.04}>
              <article className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-300/35 md:grid-cols-[0.9fr_1.2fr_1.2fr] md:p-8">
                <div>
                  <p className="text-sm font-semibold text-cyan-300">Package {index + 1}</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">{item.name}</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{item.tagline}</p>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Products included</h3>
                  <div className="grid gap-2">
                    {item.products.map((product) => (
                      <span key={product} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={15} className="text-cyan-300" />
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Services included</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.services.map((service) => (
                      <span key={service} className="rounded bg-white/8 px-3 py-2 text-xs text-slate-200">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-[#0b0d10] px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-lg border border-white/10 bg-black/24 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white">Need a mixed package?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Combine cloud, network, security, web, and professional services into one implementation plan.
            </p>
          </div>
          <Link href="/contact#enquiry-form" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200">
            Build a scope <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
