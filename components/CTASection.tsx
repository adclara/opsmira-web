"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-shell py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl"
        style={{
          background: "linear-gradient(135deg, #121b36 0%, #1a2547 50%, #0f172f 100%)",
        }}
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-brand-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-[250px] w-[250px] rounded-full bg-cyan-400/10 blur-[80px]" />

        <div className="relative z-10 px-8 py-16 text-center sm:px-12 lg:px-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/20"
          >
            <Sparkles className="h-7 w-7 text-brand-300" />
          </motion.div>

          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Stop losing money on tasks AI agents can handle
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/55">
            Book a free 30-minute operations audit. We&apos;ll show you exactly
            which workflows to automate and how much you can save.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(79,70,229,0.3)] transition hover:-translate-y-0.5"
            >
              Book a free audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View plans & pricing
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/30">
            No commitment · Setup in 5 days · Measurable results from week 1
          </p>
        </div>
      </motion.div>
    </section>
  );
}
