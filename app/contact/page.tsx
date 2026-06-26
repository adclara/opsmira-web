"use client";

/**
 * OpsMira — Contact / "Book Free Diagnosis" page.
 *
 * This form is front-end only. To actually receive submissions, wire `onSubmit`
 * to one of:
 *   - A Next.js Route Handler at app/api/contact/route.ts (recommended), or
 *   - A form service like Formspree / Basin (set the form `action`), or
 *   - An email API (Resend, SendGrid, etc.).
 * Right now it just shows a success state.
 */

import { useState } from "react";
import { Check } from "lucide-react";
import { site } from "@/lib/data";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section-shell section-space">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        {/* Left — pitch */}
        <div className="luxury-panel flex flex-col justify-between p-8">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-brand-100">
              Book free diagnosis
            </span>
            <h1 className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-3xl">
              Let's find where your operation is losing money.
            </h1>
            <p className="mt-3 max-w-md text-[0.9rem] leading-6 text-white/60">
              Tell us a bit about your business. We'll map the highest-impact
              opportunities and come back with a prioritized roadmap — no cost,
              no obligation.
            </p>
          </div>
          <ul className="mt-7 grid gap-3">
            {[
              "Free, no-obligation assessment",
              "Prioritized roadmap with expected payback",
              "You only invest if there's a clear fix"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.85rem] text-white/80">
                <Check className="h-4 w-4 text-brand-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <div className="card p-7">
          {sent ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center p-5 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50">
                <Check className="h-7 w-7 text-brand-600" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-foreground">
                Thanks — request received.
              </h2>
              <p className="mt-2 max-w-[34ch] text-[0.85rem] leading-6 text-neutral-600">
                We'll reach out within one business day to schedule your free
                operations diagnosis.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-5 text-[0.85rem] font-semibold text-brand-600 transition hover:text-brand-700"
              >
                Submit another →
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex flex-col gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[0.8rem] font-semibold text-foreground">Name</span>
                  <input
                    required
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[0.8rem] font-semibold text-foreground">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-[0.8rem] font-semibold text-foreground">
                  What&apos;s going on?{" "}
                  <span className="font-normal text-neutral-400">(optional)</span>
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Briefly, where's your operation losing time or money?"
                  className="w-full resize-y rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-[0.72rem] text-neutral-500">No cost. No obligation.</span>
                <button type="submit" className="button-primary">
                  Book Free Diagnosis
                </button>
              </div>

              <p className="text-[0.72rem] leading-5 text-neutral-400">
                Or email us directly at{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-brand-600">
                  {site.email}
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
