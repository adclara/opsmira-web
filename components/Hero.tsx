import Link from "next/link";
import { heroStats } from "@/lib/data";

function DiagnosisMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[42rem]">
      <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-xl">
        <div className="rounded-xl bg-white p-4 shadow-[0_16px_40px_rgba(15,23,47,0.14)] sm:p-5">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.1em] text-neutral-500">
                OpsMira diagnosis
              </p>
              <p className="mt-1.5 text-lg font-semibold text-foreground">
                Where your operations leak cost
              </p>
            </div>
            <div className="rounded-lg bg-[#eef0ff] px-2.5 py-1.5 text-[0.65rem] font-medium text-brand-700">
              Free assessment
            </div>
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-xl border border-stone-200 bg-[#f8faff] p-3.5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.1em] text-neutral-500">
                    Recoverable cost identified
                  </p>
                  <p className="mt-1.5 text-3xl font-semibold tracking-[-0.02em] text-foreground">
                    $11.4k
                    <span className="text-base font-medium text-neutral-400">/mo</span>
                  </p>
                </div>
                <div className="rounded-lg bg-white px-2.5 py-1.5 text-[0.65rem] font-medium text-neutral-600">
                  Across 3 lanes
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {[
                  ["Manual process hours", "120 hrs/mo"],
                  ["Process steps to standardize", "8 found"],
                  ["Quick-win automations", "5 flagged"]
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-3 py-2.5"
                  >
                    <span className="text-[0.8rem] font-medium text-neutral-700">{label}</span>
                    <span className="text-[0.8rem] font-semibold text-brand-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-stone-200 bg-white p-3.5"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.1em] text-neutral-500">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-2xl font-semibold tracking-[-0.02em] text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="section-shell pb-6 pt-6 lg:pb-8 lg:pt-8">
      <div className="overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121b36,#161f3f)] px-6 py-8 text-white shadow-[0_20px_60px_rgba(15,23,47,0.2)] sm:px-8 lg:px-10 lg:py-10">
        <div className="relative">
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-500/18 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid items-center gap-12 xl:grid-cols-[0.96fr_1.04fr]">
            <div className="max-w-[42rem]">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-brand-100">
                Operations &amp; Supply-Chain Consulting
              </span>
              <h1 className="mt-5 max-w-[18ch] font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl xl:text-5xl">
                Free operations diagnosis. You pay for the improvement.
              </h1>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-white/72">
                OpsMira maps how your business runs, pinpoints where cost leaks
                and processes stall, and delivers the fix — streamlined
                processes, documented standards, custom apps, dashboards, or AI
                agents. Scoped to the value it creates.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="button-primary">
                  Book Free Diagnosis
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  See What We Deliver
                </Link>
              </div>

              <p className="mt-5 max-w-md text-[0.75rem] leading-6 text-white/50">
                Built on years optimizing operations and supply chain at the
                scale of the largest U.S. retailers.
              </p>
            </div>

            <DiagnosisMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
