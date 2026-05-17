"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";

const floatingCards = [
  {
    label: "Admin hours saved",
    value: "42 hrs/mo",
    icon: Clock,
    bg: "bg-brand-500/90",
  },
  {
    label: "Production output",
    value: "+37%",
    icon: TrendingUp,
    bg: "bg-cyan-500/90",
  },
  {
    label: "Cost reduction",
    value: "$18k/yr",
    icon: DollarSign,
    bg: "bg-emerald-500/90",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1e]">
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-brand-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-brand-600/8 blur-[80px]" />

      <div className="section-shell relative z-10 pb-20 pt-28 lg:pb-28 lg:pt-36">
        <div className="grid items-center gap-16 xl:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-300 backdrop-blur"
            >
              AI Agents for Business
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-[18ch] font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              AI agents that cut costs and maximize output
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg"
            >
              We deploy intelligent AI agents across your operations — from
              supply chain and production to sales and admin — so you reduce
              costs, increase throughput, and grow profit on autopilot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(79,70,229,0.3)] transition hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Book a Demo
              </Link>
            </motion.div>
          </div>

          <div className="relative hidden xl:block">
            <div className="relative h-[420px]">
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`absolute rounded-2xl border border-white/10 p-5 backdrop-blur-xl ${
                    i === 0
                      ? "left-0 top-0 w-72"
                      : i === 1
                        ? "right-0 top-16 w-64"
                        : "bottom-4 left-8 w-80"
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.bg}`}
                    >
                      <card.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.1em] text-white/50">
                        {card.label}
                      </p>
                      <p className="mt-0.5 text-2xl font-bold tracking-tight text-white">
                        {card.value}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-end gap-1">
                    {Array.from({ length: 8 }).map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ height: 0 }}
                        animate={{
                          height: `${20 + Math.random() * 30}px`,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 0.8 + i * 0.15 + j * 0.04,
                        }}
                        className="w-3 rounded-sm bg-white/15"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 bg-white/[0.03]">
        <div className="section-shell flex flex-col items-center justify-between gap-6 py-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <TrendingUp className="h-4 w-4 text-brand-300" />
            </div>
            <div>
              <span className="text-xl font-bold text-white">3x–10x</span>
              <span className="ml-2 text-sm text-white/50">Estimated ROI</span>
            </div>
          </div>
          <p className="max-w-md text-center text-sm leading-6 text-white/50 sm:text-left">
            We deploy AI agents that automate operations, optimize your supply
            chain, and drive measurable profit growth.
          </p>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="rounded-lg border border-white/12 bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/10"
            >
              Start free
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-white px-4 py-2 text-xs font-medium text-foreground transition hover:bg-white/90"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
