import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { caseStudies, testimonials, proofLogos, workflowVisuals } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Representative engagement scenarios showing how OpsMira diagnoses operations, delivers the fix, and the economic result — cost savings, revenue recovered, or throughput gained.",
  openGraph: {
    title: "Case Studies | OpsMira",
    description: "Representative scenarios showing how OpsMira reduces cost, speeds operations, and recovers missed revenue.",
    url: "https://opsmira.ai/case-studies"
  }
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Engagements with measurable business outcomes."
        description="Each scenario shows the operational problem, the improvement OpsMira delivered, and the economic result — cost savings, revenue recovered, or throughput gained."
        stats={[
          { label: "Structure", value: "Problem → Fix → Result" },
          { label: "Primary lens", value: "Cost savings & ROI" },
          { label: "Use", value: "Buyer evaluation" }
        ]}
        highlights={[
          "Focused on operations, supply chain, and revenue recovery",
          "Shows the improvement delivered and how it integrates",
          "Connects each decision to measurable dollar impact"
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

        {testimonials.length === 0 && proofLogos.length === 0 && workflowVisuals.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/70 px-6 py-5 text-sm leading-7 text-blue-800">
            These are representative engagement scenarios based on common operational patterns. Client proof and approved assets will appear here as they become available.
          </div>
        ) : (
          <>
            {testimonials.length > 0 && (
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t) => (
                  <div key={t.name} className="card p-6">
                    <p className="text-sm leading-7 text-neutral-600 italic">&ldquo;{t.quote}&rdquo;</p>
                    <p className="mt-4 text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.role}, {t.company}</p>
                  </div>
                ))}
              </div>
            )}
            {proofLogos.length > 0 && (
              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.1em] text-neutral-500">Trusted by</p>
                <div className="mt-4 flex flex-wrap items-center gap-8">
                  {proofLogos.map((logo) => (
                    <Image key={logo.name} src={logo.src} alt={logo.alt} width={120} height={40} className="h-8 w-auto object-contain grayscale" />
                  ))}
                </div>
              </div>
            )}
            {workflowVisuals.length > 0 && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {workflowVisuals.map((v) => (
                  <figure key={v.title} className="card overflow-hidden">
                    <Image src={v.src} alt={v.alt} width={600} height={400} className="w-full" />
                    <figcaption className="p-5">
                      <p className="text-sm font-semibold text-foreground">{v.title}</p>
                      <p className="mt-1 text-xs text-neutral-500">{v.caption}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </>
        )}

        <div className="luxury-panel mt-10 flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">
              Next step
            </p>
            <h3 className="mt-4 font-display text-4xl text-white">
              See a pattern that matches your business? Let&apos;s start with a free diagnosis.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
              We start with a free diagnosis of the operation costing you the
              most — then deliver the fix that pays back first, with the expected
              impact spelled out.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-brand-700"
          >
            Book Free Diagnosis
          </Link>
        </div>
      </section>
    </>
  );
}
