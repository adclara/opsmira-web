import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { MetricsTicker } from "@/components/MetricsTicker";
import { BentoGrid } from "@/components/BentoGrid";
import { StatsCounter } from "@/components/StatsCounter";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { ROICalculator } from "@/components/ROICalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "OpsMira | AI Agents That Cut Costs & Maximize Output",
  description:
    "OpsMira deploys AI agents across your operations — production, logistics, sales, and admin — to reduce costs, increase throughput, and grow profit on autopilot.",
  openGraph: {
    title: "OpsMira | AI Agents That Cut Costs & Maximize Output",
    description:
      "Deploy intelligent AI agents to streamline your operations, automate processes, and maximize profit.",
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
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
