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

const stats = [
  { value: 2400, suffix: "+", label: "Horas admin eliminadas" },
  { value: 87, suffix: "%", label: "Velocidad de respuesta" },
  { value: 340, suffix: "k", label: "Valor recuperado ($)" },
  { value: 12, suffix: "x", label: "ROI promedio" },
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
          Confiado por equipos en crecimiento
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-center"
        >
          <span className="font-display text-5xl font-extrabold tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
            <AnimatedNumber target={2400} suffix="+" />
          </span>
          <p className="mt-3 text-base text-white/50 sm:text-lg">
            Horas de trabajo administrativo eliminadas para nuestros clientes
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border border-white/8 bg-white/[0.04] p-6 text-center backdrop-blur"
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
