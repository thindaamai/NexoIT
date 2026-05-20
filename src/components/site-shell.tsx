"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, PhoneCall } from "lucide-react";
import { services } from "@/lib/site-data";

const companyLinks = [
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [openMenu, setOpenMenu] = useState<"services" | "company" | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDropdown(menu: "services" | "company") {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setOpenMenu(menu);
  }

  function closeDropdownSoon() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050607]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="NEXOIT home">
          <span className="grid size-10 place-items-center rounded-md border border-white/12 bg-white text-base font-black text-black transition-transform duration-300 group-hover:rotate-3">
            N
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.28em] text-white">NEXOIT</span>
            <span className="block text-xs text-slate-400">Networks. Cloud. Security.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] p-1 md:flex">
          <Link href="/" className="rounded px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white">
            Home
          </Link>

          <Dropdown
            label="Services"
            open={openMenu === "services"}
            onOpen={() => openDropdown("services")}
            onClose={closeDropdownSoon}
            onToggle={() => setOpenMenu((current) => (current === "services" ? null : "services"))}
            width="w-72"
          >
            <Link
              href="/services"
              onClick={() => setOpenMenu(null)}
              className="mb-1 flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-300/10 hover:text-white"
            >
              Services overview
              <ArrowRight size={15} />
            </Link>
            <div className="h-px bg-white/10" />
            <div className="mt-1 grid gap-1">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setOpenMenu(null)}
                  className="group/item flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/8 hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <service.icon size={16} className="text-cyan-300 transition group-hover/item:scale-110" />
                    {service.title}
                  </span>
                  <ArrowRight size={14} className="text-slate-500 transition group-hover/item:translate-x-0.5 group-hover/item:text-cyan-200" />
                </Link>
              ))}
            </div>
          </Dropdown>

          <Dropdown
            label="Company"
            open={openMenu === "company"}
            onOpen={() => openDropdown("company")}
            onClose={closeDropdownSoon}
            onToggle={() => setOpenMenu((current) => (current === "company" ? null : "company"))}
            width="w-56"
          >
            <div className="grid gap-1">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpenMenu(null)}
                  className="group/item flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/8 hover:text-white"
                >
                  {link.label}
                  <ArrowRight size={14} className="text-slate-500 transition group-hover/item:translate-x-0.5 group-hover/item:text-cyan-200" />
                </Link>
              ))}
            </div>
          </Dropdown>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200 sm:inline-flex">
            Talk to us
          </Link>
          <details className="group relative md:hidden">
            <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-md border border-white/12 text-slate-200 [&::-webkit-details-marker]:hidden" aria-label="Open menu">
              <Menu size={18} />
            </summary>
            <div className="absolute right-0 mt-3 grid w-60 gap-2 rounded-lg border border-white/10 bg-[#0b0d10] p-2 shadow-2xl">
              <Link href="/" className="rounded px-3 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white">
                Home
              </Link>
              <MobileGroup title="Services">
                <Link href="/services" className="rounded px-3 py-2 text-xs text-cyan-200 transition hover:bg-cyan-300/10">
                  Services overview
                </Link>
                {services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="rounded px-3 py-2 text-xs text-slate-400 transition hover:bg-cyan-300/10 hover:text-cyan-200">
                    {service.title}
                  </Link>
                ))}
              </MobileGroup>
              <MobileGroup title="Company">
                {companyLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="rounded px-3 py-2 text-xs text-slate-400 transition hover:bg-cyan-300/10 hover:text-cyan-200">
                    {link.label}
                  </Link>
                ))}
              </MobileGroup>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function Dropdown({
  label,
  open,
  onOpen,
  onClose,
  onToggle,
  width,
  children,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  width: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={onToggle}
        className="flex items-center gap-1 rounded px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
      >
        {label}
        <ChevronDown size={14} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        onMouseEnter={onOpen}
        className={`absolute left-1/2 top-[calc(100%-1px)] z-50 ${width} -translate-x-1/2 rounded-lg border border-white/10 bg-[#090b0e]/98 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl transition duration-200 ${
          open ? "visible translate-y-1 opacity-100" : "invisible translate-y-3 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
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
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_0.9fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 text-2xl font-black tracking-tight">NEXOIT</div>
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
            <Link href="/services" className="text-sm text-cyan-200 transition hover:text-white">Overview</Link>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="text-sm text-slate-400 transition hover:text-cyan-200">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-sm font-semibold text-white">Start a conversation</div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/12 px-4 py-3 text-sm text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10">
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
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{copy}</p>
      </div>
    </section>
  );
}
