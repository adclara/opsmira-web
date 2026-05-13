import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ComparisonSection } from "@/components/ComparisonSection";
import { EngagementSection } from "@/components/EngagementSection";
import { detailedServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "See what OpsMira implements for SMBs: workflow audits, AI agents, customer follow-up systems, scheduling coordination, owner dashboards, reporting automation, and launch support."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What OpsMira implements."
        description="Done-for-you AI operations systems for SMBs — workflow audit, system configuration, launch support, and measurable reductions in admin burden and response delays."
        stats={[
          { label: "Delivery model", value: "Managed implementation" },
          { label: "Primary value", value: "Cost savings first" },
          { label: "Best fit", value: "SMB service operators" }
        ]}
      />

      <section className="section-shell pb-20 lg:pb-28">
        <div className="grid gap-5">
          {detailedServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="card grid gap-8 p-7 lg:grid-cols-[0.9fr_1.1fr] lg:p-8"
              >
                <div>
                  <div className="w-fit rounded-2xl bg-[#eef0ff] p-3 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">
                    {service.description}
                  </p>
                  <p className="mt-4 rounded-[1.4rem] border border-stone-300 bg-stone-100/80 px-4 py-4 text-sm leading-7 text-neutral-700">
                    {service.impact}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-[1.4rem] border border-stone-300 bg-[#f8faff] px-4 py-4 text-sm font-medium text-neutral-700"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <ComparisonSection embedded />
        <EngagementSection embedded />

        <div className="luxury-panel mt-10 flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-display text-3xl text-white">
              Ready to scope the right first workflow?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
              OpsMira identifies the highest-value bottleneck to target first.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-brand-700"
          >
            Book Workflow Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
