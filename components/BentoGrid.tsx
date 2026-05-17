"use client";

import { motion } from "framer-motion";
import { Zap, BarChart3, Brain, ArrowRight } from "lucide-react";

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function BentoGrid() {
  return (
    <section className="section-shell section-space">
      <div className="mb-10 max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="eyebrow"
        >
          Products
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mt-3"
        >
          One platform, three engines of efficiency
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-copy mt-4"
        >
          Each module works autonomously and together to eliminate operational
          friction across your entire business.
        </motion.p>
      </div>

      <div className="grid gap-5 md:grid-cols-[1.6fr_1fr] md:grid-rows-2" style={{ minHeight: "520px" }}>
        {/* Card 1 — Automate (spans 2 rows, dark) */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardVariant}
          whileHover={{ scale: 1.012, transition: { duration: 0.3 } }}
          className="luxury-panel row-span-1 flex cursor-default flex-col justify-between p-8 transition-shadow hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)] md:row-span-2 md:p-10"
        >
          <div>
            <motion.div
              whileHover={{ rotate: 12 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20"
            >
              <Zap className="h-6 w-6 text-brand-300" />
            </motion.div>
            <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-300">
              OpsMira Automate
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white lg:text-3xl">
              Zero-code automation
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
              AI agents handle follow-ups, scheduling, approvals, and reporting
              — all on autopilot. Set it once, let it run forever.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {["Intake", "Process", "Deliver"].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-white/70"
                >
                  {step}
                </motion.div>
                {i < 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + i * 0.15 }}
                  >
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white/20" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-300 transition hover:text-brand-100"
            >
              Explore Automate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Card 2 — Analyze (light) */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardVariant}
          whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
          className="card flex cursor-default flex-col justify-between p-7 transition-shadow hover:shadow-lg"
        >
          <div>
            <motion.div
              whileHover={{ rotate: -12 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50"
            >
              <BarChart3 className="h-6 w-6 text-brand-600" />
            </motion.div>
            <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-600">
              OpsMira Analyze
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">
              Real-time visibility
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Operational dashboards that show exactly where you lose time,
              money, and production capacity.
            </p>
          </div>

          <div className="mt-6 flex items-end gap-1.5">
            {[40, 55, 35, 70, 50, 85, 65, 90, 75].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h * 0.6}px` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                className="w-4 rounded-sm"
                style={{
                  background:
                    i >= 6
                      ? "linear-gradient(to top, #4338CA, #5B4CF0)"
                      : "#E5E7EB",
                }}
              />
            ))}
          </div>

          <a
            href="/services"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition hover:text-brand-700"
          >
            Explore Analyze
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Card 3 — Intelligence (dark) */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardVariant}
          whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
          className="luxury-panel flex cursor-default flex-col justify-between p-7 transition-shadow hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)]"
        >
          <div>
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20"
              >
                <Brain className="h-6 w-6 text-brand-300" />
              </motion.div>
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full bg-brand-500/15 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-brand-300"
              >
                AI-Powered
              </motion.span>
            </div>
            <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-300">
              OpsMira Intelligence
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
              AI that learns your operation
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Predictive insights, anomaly detection, and recommendations that
              improve every week — driving profit automatically.
            </p>
          </div>

          <a
            href="/services"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-300 transition hover:text-brand-100"
          >
            Explore Intelligence
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
