import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PackagesSection } from "@/components/PackagesSection";

export const metadata: Metadata = {
  title: "Engagement",
  description:
    "How OpsMira engagements work: the diagnosis is free, and you invest only in the improvement we deliver — scoped and priced to the value it creates.",
  openGraph: {
    title: "Engagement | OpsMira",
    description: "The advice is free. You pay for the improvement — scoped to the value it creates.",
    url: "https://opsmira.ai/pricing"
  }
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Engagement model"
        title="You pay for the improvement, not the advice."
        description="The diagnosis is free. From there, every engagement is scoped to a specific deliverable and priced to the value it creates — process redesign, standards, an app, dashboards, or AI agents."
        stats={[
          { label: "Diagnose", value: "Free" },
          { label: "Build", value: "Scoped to the fix" },
          { label: "Optimize", value: "Optional retainer" }
        ]}
      />
      <PackagesSection />
    </>
  );
}
