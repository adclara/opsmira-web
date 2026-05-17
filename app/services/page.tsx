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
    "See what OpsMira deploys: AI agents for supply chain optimization, production intelligence, customer recovery, sales automation, and operational cost reduction.",
  openGraph: {
    title: "Services | OpsMira",
    description: "AI agent deployments for supply chain, production, sales, and operations — cut costs and maximize output.",
    url: "https://opsmira.ai/services"
  }
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What OpsMira deploys."
        description="Done-for-you AI agent systems that optimize supply chains, automate production workflows, recover lost revenue, and eliminate operational waste — with measurable ROI from week one."
        stats={[
          { label: "Delivery model", value: "Managed AI deployment" },
          { label: "Primary value", value: "Cost reduction + growth" },
          { label: "Best fit", value: "Operations-heavy businesses" }
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
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-foreground">
                    {service.title}
                  </h3>
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
              Ready to deploy AI agents on your highest-cost workflow?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
              OpsMira identifies the bottleneck costing you the most and deploys agents to fix it first.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-brand-700"
          >
            Book Operations Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
