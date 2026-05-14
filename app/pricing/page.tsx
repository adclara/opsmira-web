import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PackagesSection } from "@/components/PackagesSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "OpsMira pricing plans scoped around workflow depth, coordination complexity, and operational impact for SMBs.",
  openGraph: {
    title: "Pricing | OpsMira",
    description: "Plans from $299/mo scoped around workflow depth and operational impact. Starter, Professional, and Premium tiers.",
    url: "https://opsmira.ai/pricing"
  }
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing and scope"
        title="Plans built around payback potential."
        description="Each plan connects to what gets implemented and what it replaces. Pricing is scoped around workflow depth and operational impact."
        stats={[
          { label: "Starter", value: "$299/mo" },
          { label: "Professional", value: "$599/mo" },
          { label: "Premium", value: "$899/mo" }
        ]}
      />
      <PackagesSection />
    </>
  );
}
