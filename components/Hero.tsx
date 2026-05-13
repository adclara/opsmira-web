import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroSignals, heroStats, site } from "@/lib/data";

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[42rem]">
      <div className="absolute inset-x-12 top-8 h-44 rounded-[3rem] bg-olive-100/90 blur-3xl" />
      <div className="card relative overflow-hidden rounded-[2.5rem] border-white/60 bg-[linear-gradient(180deg,#fcfcf7_0%,#f4f7ec_52%,#eef2e2_100%)] p-4 sm:p-5">
        <div className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-soft sm:p-6">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 border-b border-stone-300 pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  Operations Overview
                </p>
                <div className="mt-3 flex items-end gap-3">
                  <span className="font-display text-5xl text-foreground sm:text-6xl">
                    78%
                  </span>
                  <span className="pb-2 text-sm font-medium text-neutral-600">
                    Workflow Visibility
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 self-start rounded-full bg-olive-50 px-4 py-2 text-xs font-semibold text-olive-800">
                <Sparkles className="h-4 w-4" />
                AI Assisted Operations
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.45fr_0.85fr]">
              <div className="rounded-[1.7rem] border border-stone-300 bg-[radial-gradient(circle_at_top,_rgba(221,232,194,0.72),_rgba(255,255,255,0.84)_45%,_white_100%)] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-neutral-700">
                    Process Improvement Map
                  </h3>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-500">
                    Live Review
                  </span>
                </div>

                <div className="relative h-72 overflow-hidden rounded-[1.5rem] border border-white/80 bg-[#f4f7ed] p-4 sm:h-80">
                  <div className="absolute left-10 top-12 h-px w-[78%] bg-gradient-to-r from-olive-200 via-olive-300 to-transparent" />
                  <div className="absolute left-16 top-20 h-24 w-24 rounded-full border border-dashed border-olive-300/80" />
                  <div className="absolute left-1/3 top-1/3 h-28 w-28 rounded-full border border-dashed border-olive-300/80" />
                  <div className="absolute right-12 top-24 h-20 w-20 rounded-full border border-dashed border-olive-300/80" />
                  {[
                    "Receiving",
                    "Inventory",
                    "Picking",
                    "Packing",
                    "QA",
                    "Dispatch"
                  ].map((node, index) => (
                    <div
                      key={node}
                      className="absolute rounded-2xl border border-stone-300 bg-white/95 px-3 py-2 text-xs font-semibold text-neutral-700 shadow-sm"
                      style={{
                        left: ["10%", "27%", "46%", "59%", "74%", "66%"][index],
                        top: ["60%", "37%", "67%", "18%", "48%", "74%"][index]
                      }}
                    >
                      {node}
                    </div>
                  ))}
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 400 280"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M42 196C82 140 110 114 160 120C208 126 220 178 265 166C314 154 332 102 365 70"
                      stroke="#405C0B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="8 10"
                    />
                    {[42, 94, 142, 196, 254, 320, 365].map((point, index) => (
                      <circle
                        key={point}
                        cx={point}
                        cy={[196, 148, 122, 138, 170, 122, 70][index]}
                        r="4.5"
                        fill="#405C0B"
                      />
                    ))}
                  </svg>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-1">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.5rem] border border-stone-300 bg-white p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        {stat.label}
                      </p>
                      <p className="mt-3 font-display text-4xl">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.75rem] border border-stone-300 bg-[#10150d] p-4 text-white sm:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold">AI Signals</h3>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                      Updated Today
                    </span>
                  </div>
                  <div className="space-y-3">
                    {heroSignals.map((signal, index) => (
                      <div
                        key={signal}
                        className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
                      >
                        <span className="text-sm text-white/90">{signal}</span>
                        <span className="text-xs text-olive-100">
                          +{index + 2} insights
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="section-shell section-space relative overflow-hidden pt-12 lg:pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-hero-glow" />
      <div className="card relative overflow-hidden rounded-[2.75rem] border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(248,248,245,0.86)_48%,rgba(241,244,232,0.92))] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="absolute -left-10 top-14 h-44 w-44 rounded-full bg-olive-100/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-olive-100/45 blur-3xl" />
        <div className="relative grid items-center gap-12 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-[35rem]">
            <span className="eyebrow">
              Operations Visibility for Growing Teams
            </span>
            <h1 className="max-w-[11ch] font-display text-5xl leading-[0.94] tracking-[-0.03em] text-foreground sm:text-6xl xl:text-[5.4rem]">
              See Your Operations Clearly. Improve the Flow. Automate the Work.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
              OpsMira helps growing businesses reduce operational waste,
              improve productivity, and modernize daily workflows through
              supply chain consulting, AI automation, process improvement,
              training, and practical system integration.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Schedule a Free Consultation
              </Link>
              <Link href="/services" className="button-secondary">
                Explore Services
              </Link>
            </div>
            <div className="mt-8 grid gap-5 rounded-[2rem] border border-stone-300/80 bg-white/75 p-5 sm:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-olive-700">
                  Supply Chain Optimization | AI Automation | Process
                  Intelligence
                </p>
                <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
                  {site.trustLine}
                </p>
              </div>
              <div className="flex items-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-background px-4 py-2 text-sm text-neutral-600">
                  <span className="h-2 w-2 rounded-full bg-olive-700" />
                  {site.valueProp}
                  <ArrowRight className="h-4 w-4 text-olive-700" />
                </div>
              </div>
            </div>
          </div>

          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
