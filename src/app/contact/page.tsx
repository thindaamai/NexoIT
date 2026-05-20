import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { PageHero } from "@/components/site-shell";
import { Reveal } from "@/components/motion-primitives";

export const metadata = {
  title: "Contact",
  description: "Contact NEXOIT for managed IT, cloud, web, security, and professional engineering services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what your business needs next."
        copy="Share the systems, users, sites, timelines, and risks you want handled. NEXOIT will help shape the right service package."
      />
      <section className="bg-[#050607] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="rounded-lg border border-white/10 bg-white/[0.035] p-7">
              <h2 className="text-2xl font-semibold text-white">Contact details</h2>
              <div className="mt-8 grid gap-5">
                {[
                  { icon: Mail, label: "Email", value: "hello@nexoit.com.au" },
                  { icon: PhoneCall, label: "Phone", value: "Book a discovery call" },
                  { icon: MapPin, label: "Region", value: "Australia-wide support" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 rounded-md border border-white/10 bg-black/24 p-4">
                    <item.icon size={20} className="text-cyan-300" />
                    <div>
                      <div className="text-sm text-slate-400">{item.label}</div>
                      <div className="mt-1 text-sm font-medium text-white">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form className="rounded-lg border border-white/10 bg-white/[0.035] p-7">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-slate-300">
                  Name
                  <input className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-cyan-300" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  Business email
                  <input className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-cyan-300" placeholder="you@company.com" />
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  Service interest
                  <select className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-cyan-300">
                    <option>Business Essentials</option>
                    <option>Web Development</option>
                    <option>Professional Services</option>
                    <option>Cloud Services</option>
                    <option>Mixed scope</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  Timeline
                  <input className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-cyan-300" placeholder="This month, quarter, etc." />
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm text-slate-300">
                Project notes
                <textarea className="min-h-40 rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-cyan-300" placeholder="Tell us about users, locations, systems, risks, and outcomes." />
              </label>
              <button type="button" className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200">
                Send enquiry <Send size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
