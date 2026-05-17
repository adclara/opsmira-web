import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PackagesSection } from "@/components/PackagesSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "OpsMira pricing plans scoped around AI agent complexity, operational depth, and measurable cost reduction for your business.",
  openGraph: {
    title: "Pricing | OpsMira",
    description: "AI agent deployment plans from $250/mo — Starter, Professional, and Premium tiers scoped by operational impact.",
    url: "https://opsmira.ai/pricing"
  }
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing and scope"
        title="Plans built around measurable ROI."
        description="Each plan connects to the AI agents deployed and the operational costs they eliminate. Pricing is scoped around complexity, number of workflows, and business impact."
        stats={[
          { label: "Starter", value: "$250/mo" },
          { label: "Professional", value: "$419/mo" },
          { label: "Premium", value: "$629/mo" }
        ]}
      />
      <PackagesSection />
    </>
  );
}
