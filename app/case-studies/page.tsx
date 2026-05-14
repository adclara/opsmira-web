import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Review OpsMira implementation scenarios focused on workflow bottlenecks, automation logic, manual work reduced, and economic outcomes for SMB operations.",
  openGraph: {
    title: "Case Studies | OpsMira",
    description: "Implementation scenarios showing how OpsMira reduces admin labor, speeds response, and recovers missed opportunities.",
    url: "https://opsmira.ai/case-studies"
  }
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Implementation scenarios shaped around business problems and economic outcomes."
        description="OpsMira case studies are framed to help buyers understand where savings come from: what broke down operationally, what workflow layer gets implemented, and how the result improves labor cost, response speed, or owner visibility."
        stats={[
          { label: "Structure", value: "Problem -> build -> outcome" },
          { label: "Primary lens", value: "Operational payback" },
          { label: "Use", value: "Buyer evaluation" }
        ]}
        highlights={[
          "Focused on representative SMB workflow bottlenecks",
          "Shows implementation logic instead of vague transformation claims",
          "Connects delivery choices to measurable business value"
        ]}
      />

      <section className="section-shell pb-20 lg:pb-28">
        <div className="grid gap-6">
          {caseStudies.map((study, index) => (
            <article key={study.title} className="card p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-600">
                    Case Study {index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                    {study.title}
                  </h3>
                  <p className="mt-4 text-lg font-medium text-neutral-700">
                    {study.subtitle}
                  </p>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-600">
                    <p>
                      <span className="font-semibold text-foreground">Problem:</span>{" "}
                      {study.problem}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Implementation:</span>{" "}
                      {study.implementation}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Outcome:</span>{" "}
                      {study.outcome}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Economic logic:</span>{" "}
                      {study.economics}
                    </p>
                  </div>
                  {study.note ? (
                    <p className="mt-5 rounded-[1.5rem] border border-stone-300 bg-stone-100/80 px-5 py-4 text-sm leading-7 text-neutral-600">
                      {study.note}
                    </p>
                  ) : null}
                </div>

                <div className="rounded-[2rem] border border-stone-300 bg-[linear-gradient(160deg,#f8faff_0%,#eef0ff_100%)] p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                    Key Takeaways
                  </p>
                  <div className="mt-5 grid gap-3">
                    {study.takeaways.map((takeaway) => (
                      <div
                        key={takeaway}
                        className="rounded-[1.4rem] border border-white/80 bg-white/90 px-4 py-4 text-sm leading-7 text-neutral-700"
                      >
                        {takeaway}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="luxury-panel mt-10 flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">
              Next step
            </p>
            <h3 className="mt-4 font-display text-4xl text-white">
              If one of these patterns sounds familiar, start with the highest-payback workflow.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
              OpsMira uses the intake process to identify which operational lane
              is leaking the most labor, time, or follow-up value so the first
              deployment is easier to justify.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-brand-700"
          >
            Book Workflow Audit
          </Link>
        </div>
      </section>
    </>
  );
}
