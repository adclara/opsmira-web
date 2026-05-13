import clsx from "clsx";
import { engagementSummary } from "@/lib/data";

export function EngagementSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section className={clsx(embedded ? "pt-10" : "section-shell section-space")}>
      <div className="grid gap-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How the engagement works</span>
          <h2 className="section-title mx-auto text-3xl sm:text-4xl lg:text-[3.2rem]">
            Clear on scope, control, and what success gets measured against.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600">
            OpsMira is designed to feel like a managed operational rollout. The
            service is easier to buy when buyers can see what gets handled for
            them, what stays in their hands, and what the work is expected to improve.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <article className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
              OpsMira handles
            </p>
            <div className="mt-5 grid gap-3">
              {engagementSummary.opsmiraHandles.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-stone-300 bg-[#f8faff] px-4 py-4 text-sm leading-7 text-neutral-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="luxury-panel p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              You keep control of
            </p>
            <div className="mt-5 grid gap-3">
              {engagementSummary.clientKeeps.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-white/12 bg-white/8 px-4 py-4 text-sm leading-7 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
              What gets measured
            </p>
            <div className="mt-5 grid gap-3">
              {engagementSummary.measuredOutcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-stone-300 bg-[#f8faff] px-4 py-4 text-sm leading-7 text-neutral-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
