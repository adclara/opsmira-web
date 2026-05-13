import type { Metadata } from "next";
import { AboutFounder } from "@/components/AboutFounder";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how OpsMira approaches AI operations implementation for SMBs through workflow discipline, measurable ROI, human oversight, and post-launch optimization."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OpsMira"
        title="A delivery-first AI operations service built around workflow control."
        description="OpsMira is not positioned as a personal brand or vague consulting practice. It is a productized implementation service that helps SMBs remove administrative drag, improve coordination, and launch practical AI-supported operational systems."
        stats={[
          { label: "Operating style", value: "Implementation-led" },
          { label: "Primary lens", value: "Measured ROI" },
          { label: "Service model", value: "Done-for-you" }
        ]}
        highlights={[
          "Operations-first before tool-first",
          "Founder background supports the work but does not dominate the message",
          "Focused on systems that teams can actually use after launch"
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
              OpsMira exists to help owners gain a more controlled operation:
              fewer manual handoffs, faster response, clearer reporting, and a
              stronger business case for automation than generic consulting
              language usually provides.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
