"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SignalLine({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={{ opacity: [0.25, 1, 0.25], scaleX: [0.72, 1, 0.72] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function TechnologyMesh() {
  const nodes = [
    { left: "18%", top: "28%", delay: 0 },
    { left: "36%", top: "55%", delay: 0.2 },
    { left: "54%", top: "34%", delay: 0.4 },
    { left: "72%", top: "62%", delay: 0.6 },
    { left: "84%", top: "24%", delay: 0.8 },
  ];

  return (
    <div className="relative min-h-[390px] overflow-hidden rounded-lg border border-white/12 bg-black/35 p-6 shadow-2xl backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_25%,rgba(34,211,238,0.25),transparent_28%),radial-gradient(circle_at_76%_66%,rgba(16,185,129,0.14),transparent_32%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
        animate={{ opacity: [0.2, 1, 0.2], scaleX: [0.72, 1, 0.72] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 left-10 top-10 w-px bg-gradient-to-b from-transparent via-emerald-300/80 to-transparent"
        animate={{ opacity: [0.18, 0.85, 0.18], scaleY: [0.6, 1, 0.6] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
      />
      <div className="absolute inset-0">
        {nodes.map((node) => (
          <motion.span
            key={`${node.left}-${node.top}`}
            className="absolute grid size-12 place-items-center rounded-full border border-cyan-200/35 bg-cyan-300/14 shadow-[0_0_34px_rgba(34,211,238,0.28)]"
            style={{ left: node.left, top: node.top }}
            animate={{ y: [-7, 7, -7], opacity: [0.72, 1, 0.72] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
          >
            <span className="size-2 rounded-full bg-cyan-200" />
          </motion.span>
        ))}
      </div>
      <motion.div
        aria-hidden="true"
        className="absolute left-[18%] top-[28%] h-[2px] w-[64%] origin-left bg-gradient-to-r from-cyan-300/80 via-cyan-200/30 to-emerald-300/70"
        animate={{ scaleX: [0.25, 1, 0.25], opacity: [0.25, 0.8, 0.25] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
        {["Cloud", "Security", "Network"].map((label, index) => (
          <motion.div
            key={label}
            className="rounded-md border border-white/10 bg-black/34 px-4 py-3 text-sm font-semibold text-white"
            animate={{ borderColor: ["rgba(255,255,255,0.1)", "rgba(34,211,238,0.45)", "rgba(255,255,255,0.1)"] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.35 }}
          >
            <span className="mb-2 block h-px w-10 bg-cyan-300" />
            {label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

type ServiceShowcaseItem = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  items: string[];
};

export function ServiceShowcase({ services }: { services: ServiceShowcaseItem[] }) {
  const secondsPerSlide = 5;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex] ?? services[0];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, secondsPerSlide * 1000);

    return () => window.clearInterval(timer);
  }, [services.length]);

  return (
    <div className="relative h-[360px] max-w-full overflow-hidden rounded-lg border border-white/12 bg-black/35 shadow-2xl backdrop-blur sm:h-[440px] lg:h-[520px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_80%_78%,rgba(16,185,129,0.14),transparent_34%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-14 z-20 h-px w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent sm:top-20"
        animate={{ x: ["-60%", "60%"], opacity: [0, 1, 0] }}
        transition={{ duration: secondsPerSlide, repeat: Infinity, ease: "easeInOut" }}
      />

      {activeService && (
        <motion.article
          key={activeService.slug}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.045, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={activeService.image}
            alt={`${activeService.title} service environment`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-200/18 to-transparent"
            initial={{ x: "-120%" }}
            animate={{ x: "320%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-[18%] top-[24%] size-3 rounded-full bg-cyan-200 shadow-[0_0_28px_rgba(103,232,249,0.8)]"
            animate={{ scale: [0.75, 1.45, 0.75], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute right-[18%] top-[42%] size-2 rounded-full bg-emerald-200 shadow-[0_0_24px_rgba(110,231,183,0.75)]"
            animate={{ scale: [1, 1.8, 1], opacity: [0.25, 0.9, 0.25] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/30 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
            <div className="max-w-lg">
              <motion.p
                className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:mb-3 sm:text-xs sm:tracking-[0.26em]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.45 }}
              >
                Service {activeIndex + 1}
              </motion.p>
              <motion.h3
                className="text-2xl font-semibold tracking-tight text-white sm:text-4xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.5 }}
              >
                {activeService.title}
              </motion.h3>
              <motion.p
                className="mt-3 max-w-md text-sm leading-6 text-slate-300"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.5 }}
              >
                {activeService.summary.split(".")[0]}.
              </motion.p>
            </div>
          </div>
        </motion.article>
      )}

      <div className="absolute right-4 top-4 z-30 flex gap-2">
        {services.map((service, index) => (
          <button
            type="button"
            key={service.slug}
            aria-label={`Show ${service.title}`}
            onClick={() => setActiveIndex(index)}
            className="relative h-1.5 w-6 overflow-hidden rounded-full bg-white/24 transition hover:bg-white/50 sm:w-8"
          >
            {activeIndex === index && (
              <motion.span
                className="absolute inset-y-0 left-0 rounded-full bg-cyan-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: secondsPerSlide, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), {
    stiffness: 180,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), {
    stiffness: 180,
    damping: 18,
  });

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
