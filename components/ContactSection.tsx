import Link from "next/link";
import { intakeOutputs, site } from "@/lib/data";

export function ContactSection() {
  return (
    <section className="section-shell section-space pt-10">
      <div className="overflow-hidden rounded-[2.8rem] border border-stone-300 bg-[linear-gradient(135deg,#f8faff_0%,#eef2ff_48%,#dce4ff_100%)] p-8 shadow-soft sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">Get started</span>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-[3.4rem]">
              Start with the workflow costing you the most.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600">
              Bring the follow-up problem, scheduling friction, or reporting
              burden. We will identify the highest-value workflow to fix first.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Book Workflow Audit
              </Link>
              <Link href="/services" className="button-secondary">
                Review Deliverables
              </Link>
            </div>
          </div>

          <div className="luxury-panel p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.26em] text-white/65">
              What you leave with
            </p>
            <div className="mt-5 grid gap-3">
              {intakeOutputs.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/12 bg-white/[0.06] px-4 py-4 text-sm text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-white/60">
              {site.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
