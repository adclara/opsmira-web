"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

function LiveCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(2400);

  useEffect(() => {
    if (!inView) return;
    let current = 2400;
    const duration = 2000;
    const steps = 60;
    const increment = current / steps;
    let v = 0;
    const countUp = setInterval(() => {
      v += increment;
      if (v >= current) {
        setValue(current);
        clearInterval(countUp);
      } else {
        setValue(Math.floor(v));
      }
    }, duration / steps);

    const tick = setTimeout(() => {
      const interval = setInterval(() => {
        setValue((prev) => prev + Math.floor(Math.random() * 3) + 1);
      }, 3000);
      return () => clearInterval(interval);
    }, duration + 500);

    return () => {
      clearInterval(countUp);
      clearTimeout(tick);
    };
  }, [inView]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}+
    </span>
  );
}

const stats = [
  { value: 2400, suffix: "+", label: "Admin hours eliminated" },
  { value: 87, suffix: "%", label: "Faster response time" },
  { value: 340, suffix: "k", label: "Cost savings ($)" },
  { value: 12, suffix: "x", label: "Average ROI" },
];

export function StatsCounter() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1e] py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-400/8 blur-[100px]" />

      <div className="section-shell relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium uppercase tracking-[0.14em] text-white/40"
        >
          Trusted by growing teams
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-center"
        >
          <span className="font-display text-5xl font-extrabold tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
            <LiveCounter />
          </span>
          <p className="mt-3 text-base text-white/50 sm:text-lg">
            Hours of manual work eliminated by our AI agents across all clients
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-2xl border border-white/8 bg-white/[0.04] p-6 text-center backdrop-blur transition-shadow hover:shadow-[0_16px_40px_rgba(79,70,229,0.1)]"
            >
              <p className="font-display text-3xl font-bold tracking-tight text-white lg:text-4xl">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-white/40">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
