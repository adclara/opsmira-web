import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { MetricsTicker } from "@/components/MetricsTicker";
import { BentoGrid } from "@/components/BentoGrid";
import { StatsCounter } from "@/components/StatsCounter";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { ROICalculator } from "@/components/ROICalculator";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: "OpsMira | Operations & Supply-Chain Consulting That Pays for Itself",
  },
  description:
    "OpsMira diagnoses where your business is losing money and delivers the fix — better processes, standards, custom apps, dashboards, and AI agents. The diagnosis is free; you pay for the improvement.",
  openGraph: {
    title: "OpsMira | Operations & Supply-Chain Consulting",
    description:
      "Free operations diagnosis. You pay for the improvement — processes, standards, custom apps, dashboards, or AI agents, scoped to the value they create.",
    url: "https://opsmira.ai",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <MetricsTicker />
      <BentoGrid />
      <StatsCounter />
      <FeaturesShowcase />
      <ROICalculator />
      <FAQSection />
      <CTASection />
    </>
  );
}
