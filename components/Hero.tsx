import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroSignals, heroStats, site } from "@/lib/data";

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[44rem]">
      <div className="absolute left-8 right-8 top-10 h-44 rounded-[3rem] bg-olive-100/80 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2.6rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,247,238,0.95)_48%,rgba(236,242,226,0.98))] p-4 shadow-[0_24px_90px_rgba(20,28,15,0.14)] sm:p-5">
        <div className="rounded-[2rem] border border-white/80 bg-white/[0.88] p-5 sm:p-6">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 border-b border-stone-300 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                  Executive Operations View
                </p>
                <div className="mt-3 flex items-end gap-3">
                  <span className="font-display text-5xl text-foreground sm:text-6xl">
                    78%
                  </span>
                  <span className="pb-2 text-sm font-medium text-neutral-600">
                    Visibility unlocked
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 self-start rounded-full bg-olive-50 px-4 py-2 text-xs font-semibold text-olive-800">
                <Sparkles className="h-4 w-4" />
                AI-assisted decision support
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.5fr_0.9fr]">
              <div className="rounded-[1.8rem] border border-stone-300 bg-[radial-gradient(circle_at_top,_rgba(221,232,194,0.74),_rgba(255,255,255,0.92)_46%,_white_100%)] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-neutral-700">
                    Flow intelligence map
                  </h3>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-500">
                    Live review
                  </span>
                </div>

                <div className="relative h-72 overflow-hidden rounded-[1.55rem] border border-white/80 bg-[#eff3e6] p-4 sm:h-80">
                  <div className="absolute left-10 top-12 h-px w-[78%] bg-gradient-to-r from-olive-300 via-olive-500/70 to-transparent" />
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
                <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.5rem] border border-stone-300 bg-white p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                        {stat.label}
                      </p>
                      <p className="mt-3 font-display text-4xl text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.8rem] border border-stone-300 bg-[#10150d] p-4 text-white sm:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold">Signal queue</h3>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                      Updated daily
                    </span>
                  </div>
                  <div className="space-y-3">
                    {heroSignals.map((signal, index) => (
                      <div
                        key={signal}
                        className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
                      >
                        <span className="text-sm text-white/[0.9]">{signal}</span>
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
    <section className="section-shell relative overflow-hidden pb-10 pt-8 sm:pt-10 lg:pb-16 lg:pt-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-hero-glow" />
      <div className="relative overflow-hidden rounded-[2.8rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(248,248,245,0.88)_42%,rgba(241,244,232,0.96))] px-6 py-8 shadow-[0_26px_100px_rgba(20,28,15,0.08)] sm:px-8 lg:px-10 lg:py-10">
        <div className="absolute -left-14 top-10 h-48 w-48 rounded-full bg-olive-100/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-olive-100/[0.45] blur-3xl" />
        <div className="relative grid items-start gap-12 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="max-w-[36rem] pt-3">
            <span className="eyebrow">Operations clarity for teams scaling under pressure</span>
            <p className="section-kicker">Supply chain optimization | workflow systems | AI automation</p>
            <h1 className="mt-5 max-w-[11ch] font-display text-5xl leading-[0.92] tracking-[-0.045em] text-foreground sm:text-6xl xl:text-[5.7rem]">
              Fresh visibility for operations that need to move smarter.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
              OpsMira helps growing businesses reduce operational waste, tighten
              execution, and modernize daily workflows with consulting that
              blends floor-level process intelligence and practical AI systems.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Schedule a Free Consultation
              </Link>
              <Link href="/services" className="button-secondary">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[2rem] border border-stone-300/80 bg-white/[0.78] p-5">
                <p className="section-kicker">Why teams call OpsMira</p>
                <p className="mt-3 text-lg leading-8 text-foreground">
                  We do not layer software on top of broken operations. We map
                  the flow, identify the waste, then design systems that teams
                  can actually run.
                </p>
              </div>

              <div className="luxury-panel p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/[0.65]">
                  Trust signal
                </p>
                <p className="mt-3 text-sm leading-7 text-white/[0.82]">
                  {site.trustLine}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white">
                  {site.valueProp}
                  <ArrowRight className="h-4 w-4 text-olive-100" />
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
