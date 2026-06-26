import type { Metadata } from "next";
import { AboutFounder } from "@/components/AboutFounder";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "OpsMira is an operations and supply-chain consulting practice. The diagnosis is free; you pay for the improvement we deliver — better processes, standards, custom apps, dashboards, and AI agents where they pay.",
  openGraph: {
    title: "About | OpsMira",
    description: "Operations and supply-chain consulting that pays for itself.",
    url: "https://opsmira.ai/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OpsMira"
        title="Operations and supply-chain consulting that pays for itself."
        description="OpsMira is an operations and supply-chain consulting practice. We diagnose where your business is losing money, then deliver the fix — better processes, standards, custom apps, dashboards, and AI agents where they pay. The advice is free; you pay for the improvement."
        stats={[
          { label: "Approach", value: "Diagnosis first" },
          { label: "Primary lens", value: "Measurable ROI" },
          { label: "Engagement", value: "You pay for the fix" }
        ]}
        highlights={[
          "Diagnosis first — we map the problem before proposing a fix",
          "You invest only in the improvement we deliver",
          "Results in 30–90 days, not month six"
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
              OpsMira exists to help businesses gain operational control: lower
              costs, faster and more consistent processes, and fewer missed
              opportunities — through better processes, standards, custom tools,
              and AI agents where they pay. The advice is free; you pay for the
              improvement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
