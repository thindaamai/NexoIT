import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export function SeoHero({
  eyebrow,
  title,
  copy,
  cta = "Talk to NEXOIT",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  cta?: string;
}) {
  return (
    <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_34%),#050607]">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy}</p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200">
          {cta} <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}

export function SeoSection({
  eyebrow,
  title,
  copy,
  items,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  items: string[];
}) {
  return (
    <section className="bg-[#050607] px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white">{title}</h2>
          {copy ? <p className="mt-5 text-sm leading-7 text-slate-400">{copy}</p> : null}
        </div>
        <div className="grid gap-3">
          {items.map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-5 text-sm leading-6 text-slate-300">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-300" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <section className="bg-[#0b0d10] px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-white/[0.035] p-7">
        <div className="mb-6 flex items-center gap-3">
          <MapPin size={20} className="text-cyan-300" />
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="group flex items-center justify-between rounded-md border border-white/10 bg-black/24 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-white">
              {link.label}
              <ArrowRight size={14} className="text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-cyan-200" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
