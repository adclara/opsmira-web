"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "OpsMira's AI agents eliminated 35 hours of weekly admin work. Now my team focuses exclusively on revenue-generating activities.",
    name: "Carlos M.",
    role: "Director of Operations",
    company: "Gulf Coast Construction",
    stars: 5,
  },
  {
    quote:
      "The ROI was visible in the first week. Automated reporting alone saved us 3 hours daily and caught operational gaps we were missing.",
    name: "Sarah L.",
    role: "General Manager",
    company: "LogiTech Supply Co.",
    stars: 5,
  },
  {
    quote:
      "Scheduling coordination went from chaos to fully automated. Our production throughput increased 28% without adding headcount.",
    name: "Robert A.",
    role: "Owner",
    company: "HVAC Solutions FL",
    stars: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1e] py-20 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/6 blur-[120px]" />

      <div className="section-shell relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          What our clients say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-4 max-w-lg text-center text-sm leading-6 text-white/40"
        >
          Real results from businesses running OpsMira AI agents
        </motion.p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="flex flex-col justify-between rounded-2xl border border-white/8 bg-white/[0.04] p-7 backdrop-blur transition-shadow hover:shadow-[0_20px_60px_rgba(79,70,229,0.1)]"
            >
              <div>
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.15 + j * 0.06 }}
                    >
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-white/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-white/8 pt-5">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/20 text-sm font-bold text-brand-300"
                  >
                    {t.name[0]}
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-white/40">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
