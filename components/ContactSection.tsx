import Link from "next/link";
import { intakeOutputs, site } from "@/lib/data";

export function ContactSection() {
  return (
    <section className="section-shell section-space pt-8">
      <div className="overflow-hidden rounded-2xl border border-stone-300 bg-[linear-gradient(135deg,#f8faff_0%,#eef2ff_48%,#dce4ff_100%)] p-6 shadow-soft sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">Get started</span>
            <h2 className="section-title">
              Start with the workflow costing you the most.
            </h2>
            <p className="mt-3 max-w-xl text-[0.9rem] leading-6 text-neutral-600">
              Bring the follow-up problem, scheduling friction, or reporting
              burden. We will identify the highest-value workflow to fix first.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Book Workflow Audit
              </Link>
              <Link href="/services" className="button-secondary">
                Review Deliverables
              </Link>
            </div>
          </div>

          <div className="luxury-panel p-5 sm:p-6">
            <p className="text-[0.65rem] uppercase tracking-[0.1em] text-white/65">
              What you leave with
            </p>
            <div className="mt-4 grid gap-2">
              {intakeOutputs.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/12 bg-white/[0.06] px-3.5 py-3 text-[0.8rem] text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.8rem] leading-6 text-white/60">
              {site.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
