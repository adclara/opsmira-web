import Link from "next/link";
import { heroStats } from "@/lib/data";

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[42rem]">
      <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
        <div className="rounded-[1.65rem] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,47,0.18)] sm:p-5">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                OpsMira control layer
              </p>
              <p className="mt-2 text-2xl font-semibold text-foreground">
                Delivery-first operational rollout
              </p>
            </div>
            <div className="rounded-xl bg-[#eef0ff] px-3 py-2 text-xs font-semibold text-brand-700">
              Done-for-you setup
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[1.5rem] border border-stone-200 bg-[#f8faff] p-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Example monthly value created
                  </p>
                  <p className="mt-2 text-5xl font-semibold tracking-[-0.03em] text-foreground">
                    $4.2k
                  </p>
                </div>
                <div className="rounded-xl bg-white px-3 py-2 text-xs font-medium text-neutral-600">
                  3.8x estimated ROI
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ["Admin work removed", "42 hrs/mo"],
                  ["Response speed improvement", "84% faster"],
                  ["Recovered opportunities", "+11 this month"]
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-[1.1rem] border border-stone-200 bg-white px-4 py-3"
                  >
                    <span className="text-sm font-medium text-neutral-700">{label}</span>
                    <span className="text-sm font-semibold text-brand-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.4rem] border border-stone-200 bg-white p-4"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-foreground">
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
    <section className="section-shell pb-0 pt-6 lg:pb-2 lg:pt-8">
      <div className="overflow-hidden rounded-[2.8rem] bg-[linear-gradient(180deg,#121b36,#161f3f)] px-6 py-8 text-white shadow-[0_30px_90px_rgba(15,23,47,0.24)] sm:px-8 lg:px-10 lg:py-12">
        <div className="relative">
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-500/18 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid items-center gap-12 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-[40rem]">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand-100">
                Done-for-you AI operations for SMBs
              </span>
              <h1 className="mt-6 max-w-[14ch] font-display text-5xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-6xl xl:text-[5.6rem]">
                Cut admin cost with AI operations.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
                OpsMira implements customer follow-up, scheduling coordination,
                reporting automation, and owner dashboards — so you save time
                and recover revenue.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="button-primary">
                  Book Workflow Audit
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  See What Gets Implemented
                </Link>
              </div>
            </div>

            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
