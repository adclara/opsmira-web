import Link from "next/link";
import { intakeOutputs, site } from "@/lib/data";

export function ContactSection() {
  return (
    <section className="section-shell section-space pt-10">
      <div className="overflow-hidden rounded-[2.8rem] border border-stone-300 bg-[linear-gradient(135deg,#f8faff_0%,#eef2ff_48%,#dce4ff_100%)] p-8 shadow-soft sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="eyebrow">How to get started</span>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-[3.8rem]">
              Start with the workflow that is costing you the most time or money.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">
              The first conversation is an implementation intake. Bring the
              messy follow-up process, delayed customer response, reporting
              burden, or scheduling problem. OpsMira will help identify the
              highest-value workflow to fix first.
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
            <p className="text-xs uppercase tracking-[0.26em] text-white/[0.65]">
              What you should expect
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-white/[0.12] bg-white/[0.08] p-5">
              <p className="text-sm font-semibold text-white">You leave the intake with clarity on:</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {intakeOutputs.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/[0.12] bg-white/[0.06] px-4 py-4 text-sm text-white/[0.85]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Where admin labor is piling up",
                "How response delays are affecting revenue",
                "What coordination issues are creating daily friction",
                "What a realistic first deployment should include"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/[0.12] bg-white/[0.06] px-4 py-4 text-sm text-white/[0.85]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-white/[0.12] bg-white/[0.08] p-5 text-sm leading-7 text-white/[0.82]">
              {site.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
