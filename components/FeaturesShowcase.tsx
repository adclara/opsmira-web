"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  SearchCheck,
  ClipboardCheck,
  LayoutDashboard,
  Bot,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: SearchCheck,
    eyebrow: "Diagnosis",
    title: "Find where you're losing money",
    description:
      "We map your operations, supply chain, and cost structure — on-site or remotely — then hand you a prioritized roadmap of the highest-impact fixes. No cost, no obligation.",
    color: "from-brand-500/20 to-brand-600/10",
    accent: "bg-brand-500",
    mockup: {
      label: "Recoverable cost identified",
      stat: "$11.4k/mo",
      statLabel: "Across 3 lanes",
    },
  },
  {
    icon: ClipboardCheck,
    eyebrow: "Process & standards",
    title: "Standardize how the work gets done",
    description:
      "Redesigned workflows, SOPs, and documented standards your team can actually follow — so execution is consistent, repeatable, and easy to onboard into.",
    color: "from-emerald-500/20 to-emerald-600/10",
    accent: "bg-emerald-500",
    mockup: {
      label: "Process cycle time",
      stat: "−35%",
      statLabel: "After redesign",
    },
  },
  {
    icon: LayoutDashboard,
    eyebrow: "Apps & dashboards",
    title: "Real-time visibility into cost and output",
    description:
      "Custom tools and dashboards built around your actual workflow — intake, scheduling, tracking, approvals — surfacing the metrics that matter, without manual reporting.",
    color: "from-amber-500/20 to-amber-600/10",
    accent: "bg-amber-500",
    mockup: {
      label: "Production output",
      stat: "+37%",
      statLabel: "With visibility",
    },
  },
  {
    icon: Bot,
    eyebrow: "Automation · add-on",
    title: "Automate the busywork where it pays",
    description:
      "Where it pays off, AI agents handle follow-ups, reporting, and scheduling — a layer on top of solid processes, not a replacement for them.",
    color: "from-cyan-500/20 to-cyan-600/10",
    accent: "bg-cyan-500",
    mockup: {
      label: "Manual hours reclaimed",
      stat: "120/mo",
      statLabel: "Typical add-on",
    },
  },
];

export function FeaturesShowcase() {
  return (
    <section className="section-shell section-space">
      <div className="mb-12 max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="eyebrow"
        >
          What we deliver
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mt-3"
        >
          Consulting that ends in a working solution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-copy mt-4"
        >
          Every engagement starts with a free diagnosis. From there we deliver
          the fix — and AI agents are one capability in the toolkit, not the
          headline.
        </motion.p>
      </div>

      <div className="space-y-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="group grid items-center gap-8 overflow-hidden rounded-2xl border border-stone-300/70 bg-white/95 p-6 shadow-soft backdrop-blur transition-shadow hover:shadow-lg sm:p-8 lg:grid-cols-[1fr_1fr] lg:p-10"
          >
            <div>
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${feature.accent}`}
              >
                <feature.icon className="h-5 w-5 text-white" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-neutral-400"
              >
                {feature.eyebrow}
              </motion.p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground lg:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {feature.description}
              </p>
              <Link
                href="/services"
                className="group/link mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition hover:text-brand-700"
              >
                See what we deliver
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className={`rounded-2xl bg-gradient-to-br ${feature.color} p-6 transition-transform group-hover:scale-[1.02] lg:p-8`}
            >
              <div className="rounded-xl border border-white/60 bg-white/80 p-5 shadow-sm backdrop-blur">
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-neutral-400">
                  {feature.mockup.label}
                </p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08, type: "spring" }}
                  className="mt-2 text-4xl font-bold tracking-tight text-foreground"
                >
                  {feature.mockup.stat}
                </motion.p>
                <p className="mt-1 text-sm text-neutral-500">
                  {feature.mockup.statLabel}
                </p>

                <div className="mt-4 flex items-end gap-1">
                  {Array.from({ length: 7 }).map((_, j) => {
                    const h = 18 + ((j * 37 + i * 13) % 32);
                    return (
                      <motion.div
                        key={j}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}px` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + j * 0.06 }}
                        className="w-5 rounded-sm"
                        style={{
                          background:
                            j >= 5
                              ? "linear-gradient(to top, #4338CA, #5B4CF0)"
                              : "#E5E7EB",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
