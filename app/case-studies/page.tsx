import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { caseStudies, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies | OpsMira",
  description:
    "See how real-world supply chain and operations experience informs OpsMira’s approach to process improvement, automation, training, and operational visibility."
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real Operational Experience Applied to Modern Business Problems."
        description="OpsMira uses lessons from high-volume operations to help businesses identify waste, improve flow, train teams, and modernize execution."
      />

      <section className="section-shell pb-20 lg:pb-28">
        <div className="grid gap-6">
          {caseStudies.map((study, index) => (
            <article key={study.title} className="card p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-olive-700">
                    Case Study {index + 1}
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                    {study.title}
                  </h2>
                  <p className="mt-4 text-lg font-medium text-neutral-700">
                    {study.subtitle}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-neutral-600">
                    {study.body}
                  </p>
                  {"detail" in study && study.detail ? (
                    <p className="mt-4 text-sm leading-7 text-neutral-600">
                      {study.detail}
                    </p>
                  ) : null}
                  {"outcome" in study && study.outcome ? (
                    <p className="mt-4 text-sm leading-7 text-neutral-600">
                      {study.outcome}
                    </p>
                  ) : null}
                  {"note" in study && study.note ? (
                    <p className="mt-5 rounded-[1.5rem] border border-stone-300 bg-stone-100/80 px-5 py-4 text-sm leading-7 text-neutral-600">
                      {study.note}
                    </p>
                  ) : null}
                </div>

                <div className="rounded-[2rem] border border-stone-300 bg-[linear-gradient(160deg,#f9fbf4_0%,#eef2e2_100%)] p-6">
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

        <p className="mt-8 text-xs leading-6 text-neutral-500">
          {site.experienceDisclaimer}
        </p>
      </section>
    </>
  );
}
