"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Home,
  LayoutGrid,
  Menu,
  PhoneCall,
  Server,
  ShieldCheck,
  X,
} from "lucide-react";
import { services } from "@/lib/site-data";

const mobileTabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services/business-essentials", label: "Solutions", icon: LayoutGrid },
  { href: "/services/cloud-services", label: "Infra", icon: Server },
  { href: "/services/professional-services", label: "Secure", icon: ShieldCheck },
  { href: "/contact", label: "Contact", icon: PhoneCall },
];

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0b0d10]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
      data-testid="mobile-tabbar"
      aria-label="Primary mobile navigation"
    >
      <div className="mx-auto flex max-w-md items-stretch justify-around px-2">
        {mobileTabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 transition ${
                isActive ? "text-cyan-300" : "text-slate-400 hover:text-white"
              }`}
              data-testid={`mobile-tab-${tab.label.toLowerCase()}`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={20} />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em]">
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

const companyLinks = [
  { href: "/about", label: "About Us" },
];

const navLinks = [
  { href: "/services/business-essentials", label: "Solutions" },
  { href: "/services/cloud-services", label: "Infrastructure" },
  { href: "/services/professional-services", label: "Sovereignty" },
  { href: "/about", label: "Timeline" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close on click/tap outside the menu and on Escape.
  useEffect(() => {
    if (!menuOpen) return;

    function handlePointer(event: MouseEvent | TouchEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

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

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                  isActive
                    ? "text-cyan-300"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact#enquiry-form"
            className="hidden rounded bg-cyan-400 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:inline-flex"
            data-testid="nav-consultation"
          >
            Consultation
          </Link>
          <div ref={menuRef} className="relative md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-9 cursor-pointer place-items-center rounded-md border border-white/12 bg-white/[0.03] text-slate-200"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              data-testid="mobile-menu-toggle"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-3 grid w-[min(82vw,300px)] gap-2 rounded-lg border border-white/10 bg-[#0b0d10] p-2 shadow-2xl">
                <MobileGroup title="Navigation">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={mobileLinkClass(pathname === link.href)}>
                      {link.label}
                    </Link>
                  ))}
                </MobileGroup>
                <MobileGroup title="Services">
                  {services.map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setMenuOpen(false)} className={mobileLinkClass(pathname === `/services/${service.slug}`)}>
                      {service.title}
                    </Link>
                  ))}
                </MobileGroup>
                <Link href="/contact#enquiry-form" onClick={() => setMenuOpen(false)} className="rounded bg-cyan-400 px-3 py-2 text-center text-sm font-semibold text-black">
                  Consultation
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function navLinkClass(active: boolean) {
  return `rounded-md px-4 py-2 text-sm transition font-medium ${
    active
      ? "text-white"
      : "text-slate-400 hover:text-white"
  }`;
}

function mobileLinkClass(active: boolean) {
  return `rounded px-3 py-2 text-sm transition font-medium ${
    active
      ? "text-white"
      : "text-slate-400 hover:text-white"
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
          <div className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white">Navigation</div>
          <div className="grid gap-2">
            <Link href="/" className="text-sm text-slate-400 transition hover:text-white">Home</Link>
            {companyLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="text-sm text-slate-400 transition hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <div className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white">Services</div>
          <div className="grid gap-2">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="text-sm text-slate-400 transition hover:text-cyan-200">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white">Start a conversation</div>
          <Link
            href="/contact#enquiry-form"
            className="inline-flex w-full items-center justify-center gap-2 rounded border border-white/12 px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10 sm:w-auto"
            data-testid="footer-consultation"
          >
            Book a consultation
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} NEXOIT. All rights reserved.</p>
          <p className="font-mono text-[10px] uppercase tracking-wider">Built for knowledge and technology re-code</p>
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
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
        <h1 className="max-w-4xl text-[2.65rem] font-semibold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">{copy}</p>
      </div>
    </section>
  );
}
