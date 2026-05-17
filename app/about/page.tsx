import type { Metadata } from "next";
import { AboutFounder } from "@/components/AboutFounder";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how OpsMira deploys AI agents to cut operational costs, optimize supply chains, and maximize production output — with human oversight and measurable ROI.",
  openGraph: {
    title: "About | OpsMira",
    description: "An AI-first operations company built around deploying intelligent agents that reduce costs and grow profit.",
    url: "https://opsmira.ai/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OpsMira"
        title="AI agents deployed to cut costs and maximize output."
        description="OpsMira is not a consulting firm or a generic SaaS platform. We deploy purpose-built AI agents that integrate directly into your operations — supply chain, production, sales, and admin — delivering measurable cost reduction and profit growth from day one."
        stats={[
          { label: "Operating style", value: "AI-first deployment" },
          { label: "Primary lens", value: "Measurable ROI" },
          { label: "Service model", value: "Done-for-you" }
        ]}
        highlights={[
          "Operations-first — we fix the process, then deploy AI to run it",
          "Human oversight on every agent — automation with accountability",
          "Results from week one, not month six"
        ]}
      />
      <AboutFounder />
      <section className="section-shell pb-20 lg:pb-28">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-8 text-sm leading-7 text-neutral-600 sm:p-10">
            <p className="section-kicker">Company notes</p>
            <p className="mt-4">{site.legalDisclaimer}</p>
            <p className="mt-3">{site.experienceDisclaimer}</p>
          </div>
          <div className="luxury-panel p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">
              Positioning summary
            </p>
            <p className="mt-4 text-lg leading-8 text-white/78">
              OpsMira exists to help businesses gain operational control through
              AI: lower costs, faster throughput, fewer missed opportunities, and
              a clear path from manual processes to intelligent automation that
              pays for itself.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
