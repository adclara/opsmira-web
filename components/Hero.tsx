import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  heroSignals,
  heroStats,
  platformModules,
  site
} from "@/lib/data";

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[46rem]">
      <div className="absolute left-10 right-10 top-12 h-52 rounded-[3rem] bg-olive-100/70 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2.8rem] border border-[#d6dccd] bg-[#f6f6f1]/95 p-4 shadow-[0_28px_90px_rgba(20,28,15,0.12)] sm:p-5">
        <div className="rounded-[2.2rem] border border-stone-300 bg-white/92 p-5 sm:p-6">
          <div className="flex flex-col gap-5">
            <div className="grid gap-4 border-b border-stone-300 pb-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                  OpsMira executive dashboard
                </p>
                <div className="mt-4 flex items-end gap-3">
                  <span className="font-display text-5xl leading-none text-foreground sm:text-6xl">
                    $4.2k
                  </span>
                  <span className="pb-2 text-sm font-medium text-neutral-600">
                    projected monthly operational value
                  </span>
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-stone-300 bg-stone-100/80 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  Managed system
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-700">
                  Private AI infrastructure supporting customer communication,
                  scheduling, summaries, and reporting.
                </p>
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[1.9rem] border border-stone-300 bg-[linear-gradient(180deg,#f6f8ef,#ffffff)] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-neutral-700">
                    Monthly impact model
                  </h3>
                  <span className="rounded-full bg-olive-50 px-3 py-1 text-xs font-medium text-olive-800">
                    SMB operations
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    ["Admin labor recovered", "$1,050", "42 hrs/mo"],
                    ["Owner time recovered", "$900", "18 hrs/mo"],
                    ["Customer work recovered", "$2,250", "1 additional job"],
                    ["Manual reporting reduced", "68%", "weekly summaries"]
                  ].map(([label, value, meta]) => (
                    <div
                      key={label}
                      className="grid items-center gap-3 rounded-[1.4rem] border border-stone-300 bg-white px-4 py-4 sm:grid-cols-[1fr_auto]"
                    >
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {label}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                          {meta}
                        </p>
                      </div>
                      <div className="font-display text-3xl text-foreground">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4">
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

                <div className="rounded-[1.8rem] border border-white/10 bg-[#11160f] p-5 text-white">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold">Automation stack</h3>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/75">
                      Managed centrally
                    </span>
                  </div>
                  <div className="space-y-3">
                    {platformModules.map((module) => {
                      const Icon = module.icon;

                      return (
                        <div
                          key={module.title}
                          className="rounded-[1.3rem] border border-white/10 bg-white/[0.05] p-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="rounded-xl bg-white/10 p-2 text-olive-100">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {module.title}
                              </p>
                              <p className="mt-1 text-xs leading-6 text-white/70">
                                {module.body}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {heroSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-3 rounded-[1.4rem] border border-stone-300 bg-stone-100/70 px-4 py-3 text-sm text-neutral-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-olive-700" />
                  {signal}
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
    <section className="section-shell relative overflow-hidden pb-10 pt-8 sm:pt-10 lg:pb-16 lg:pt-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-hero-glow" />
      <div className="relative overflow-hidden rounded-[3rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,246,241,0.96)_48%,rgba(240,244,232,0.9))] px-6 py-8 shadow-[0_26px_100px_rgba(20,28,15,0.08)] sm:px-8 lg:px-10 lg:py-10">
        <div className="absolute -left-14 top-10 h-48 w-48 rounded-full bg-olive-100/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-olive-100/[0.45] blur-3xl" />

        <div className="relative grid items-start gap-12 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="max-w-[38rem] pt-3">
            <span className="eyebrow">Private AI operational infrastructure for SMB businesses</span>
            <p className="section-kicker">
              Adrian Clara | AI admin automation | operational ROI | workflow
              acceleration
            </p>
            <h1 className="mt-5 max-w-[12ch] font-display text-5xl leading-[0.9] tracking-[-0.05em] text-foreground sm:text-6xl xl:text-[6rem]">
              Reduce admin drag. Recover revenue. Run a cleaner operation.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
              OpsMira is not a generic chatbot. It is a managed AI-powered
              operational system designed to help service businesses automate
              repetitive administrative work, improve customer communication,
              centralize workflows, and recover real monthly value.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Schedule a Strategy Call
              </Link>
              <Link href="/services" className="button-secondary">
                Explore The Platform
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2rem] border border-stone-300/80 bg-white/[0.82] p-5">
                <p className="section-kicker">Why Adrian Clara</p>
                <p className="mt-3 text-lg leading-8 text-foreground">
                  Adrian brings enterprise-grade operations thinking shaped by
                  work connected to cost reduction at Sam&apos;s Club and supply
                  chain improvement opportunities at Amazon, then translates
                  that discipline into SMB automation systems.
                </p>
              </div>

              <div className="luxury-panel p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/[0.65]">
                  Positioning
                </p>
                <p className="mt-3 text-sm leading-7 text-white/[0.82]">
                  {site.valueProp}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white">
                  Realistic ROI, modern systems, human-controlled automation
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
