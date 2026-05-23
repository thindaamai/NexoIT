"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, PhoneCall } from "lucide-react";
import { services } from "@/lib/site-data";

const companyLinks = [
  { href: "/about", label: "About Us" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050607]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="NEXOIT home">
          <Image
            src="/brand/nexoit-logo-clean.svg"
            alt="NEXOIT"
            width={174}
            height={40}
            priority
            className="h-7 w-auto transition-opacity duration-300 group-hover:opacity-85 sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <Link href="/" className={navLinkClass(pathname === "/")}>
            Home
          </Link>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={navLinkClass(pathname === `/services/${service.slug}`)}
            >
              {service.title}
            </Link>
          ))}
          <Link href="/about" className={navLinkClass(pathname === "/about")}>
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200 sm:inline-flex">
            Talk to us
          </Link>
          <details className="group relative md:hidden">
            <summary className="grid size-9 cursor-pointer list-none place-items-center rounded-md border border-white/12 bg-white/[0.03] text-slate-200 [&::-webkit-details-marker]:hidden" aria-label="Open menu">
              <Menu size={18} />
            </summary>
            <div className="absolute right-0 mt-3 grid w-[min(82vw,300px)] gap-2 rounded-lg border border-white/10 bg-[#0b0d10] p-2 shadow-2xl">
              <Link href="/" className={mobileLinkClass(pathname === "/")}>
                Home
              </Link>
              <MobileGroup title="Services">
                {services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className={mobileLinkClass(pathname === `/services/${service.slug}`)}>
                    {service.title}
                  </Link>
                ))}
              </MobileGroup>
              <Link href="/about" className={mobileLinkClass(pathname === "/about")}>
                About Us
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function navLinkClass(active: boolean) {
  return `rounded-md px-4 py-2 text-sm transition ${
    active
      ? "bg-white text-black shadow-[0_0_28px_rgba(255,255,255,0.16)]"
      : "text-slate-300 hover:bg-white/8 hover:text-white"
  }`;
}

function mobileLinkClass(active: boolean) {
  return `rounded px-3 py-2 text-sm transition ${
    active
      ? "bg-white text-black"
      : "text-slate-300 hover:bg-white/8 hover:text-white"
  }`;
}

function MobileGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded border border-white/10 bg-white/[0.03] p-2">
      <div className="px-3 py-2 text-sm text-slate-200">{title}</div>
      <div className="grid gap-1">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050607]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_0.9fr_1fr] lg:px-8 lg:py-12">
        <div>
          <div className="mb-3 text-xl font-black tracking-tight sm:text-2xl">NEXOIT</div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            Practical IT, cloud, security, and engineering services for Australian SMBs that need calm systems and clear handover.
          </p>
        </div>
        <div>
          <div className="mb-4 text-sm font-semibold text-white">Navigation</div>
          <div className="grid gap-2">
            <Link href="/" className="text-sm text-slate-400 transition hover:text-white">Home</Link>
            {companyLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-sm font-semibold text-white">Services</div>
          <div className="grid gap-2">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="text-sm text-slate-400 transition hover:text-cyan-200">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-sm font-semibold text-white">Start a conversation</div>
          <Link href="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/12 px-4 py-3 text-sm text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10 sm:w-auto">
            <PhoneCall size={16} />
            Book a consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} NEXOIT. All rights reserved.</p>
          <p>Built for Australian SMB technology delivery.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_34%),#050607]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
        <h1 className="max-w-4xl text-[2.65rem] font-semibold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">{copy}</p>
      </div>
    </section>
  );
}
