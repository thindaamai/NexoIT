"use client";

import {
  ArrowRight,
  Search,
  ArrowRightLeft,
  Settings,
  Truck,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import { businessEssentialsCapabilities } from "@/lib/site-data";

const workflowIcons = [Search, ArrowRightLeft, Settings, Truck, Headphones];

export function WorkflowGrid({
  steps,
  labels,
}: {
  steps: string[];
  labels?: string[];
}) {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3 md:grid-cols-5">
      {steps.map((step, index) => {
        const label = labels?.[index];
        const IconComp = workflowIcons[index];
        return (
          <div
            key={index}
            className="flex h-full flex-col bg-[#080a0c] p-6"
            data-testid={`workflow-step-${index}`}
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="grid size-9 place-items-center rounded border border-white/10 font-mono text-sm font-semibold text-white">
                0{index + 1}
              </span>
              {IconComp && <IconComp size={18} className="text-slate-500" />}
            </div>
            {label && (
              <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white">
                {label}
              </h3>
            )}
            <p className="text-sm leading-6 text-slate-400">{step}</p>
          </div>
        );
      })}
    </div>
  );
}

export function CapabilitiesGrid({
  slug,
  fallbackItems,
}: {
  slug: string;
  fallbackItems: string[];
}) {
  if (slug === "business-essentials") {
    return (
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {businessEssentialsCapabilities.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-5 text-center transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
            data-testid={`capability-${item.label.toLowerCase()}`}
          >
            <item.icon size={24} className="text-white" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
      {fallbackItems.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-5 text-sm text-white"
        >
          <CheckCircle2 size={16} className="text-cyan-300" />
          {item}
        </div>
      ))}
    </div>
  );
}

export function EngagementRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between rounded border border-white/10 bg-black/24 px-4 py-3">
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-slate-300">
        {label}
      </span>
      <ArrowRight size={14} className="text-slate-500" />
    </div>
  );
}
