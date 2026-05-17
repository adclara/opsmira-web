import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FitSection } from "@/components/FitSection";
import { PageHero } from "@/components/PageHero";
import { intakeSteps, rolloutTimeline, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a free OpsMira operations audit to identify where your business is losing money on manual processes, missed follow-ups, and inefficient workflows.",
  openGraph: {
    title: "Contact | OpsMira",
    description: "Book a free operations audit — we'll show you which workflows to automate and how much you'll save.",
    url: "https://opsmira.ai/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with an operations audit, not a generic inquiry."
        description="Tell us where your business is losing money — operational delays, process bottlenecks, missed leads, or manual admin. OpsMira uses that context to identify the best first AI agent deployment and outline measurable savings."
        stats={[
          { label: "Best first step", value: "Operations audit" },
          { label: "Typical focus", value: "Highest-cost bottleneck" },
          { label: "Goal", value: "Measurable cost reduction" }
        ]}
        highlights={[
          "Tell us where costs, delays, or missed revenue are hurting most",
          "We identify the workflow with the clearest payback for AI agents",
          "OpsMira deploys fast — results from week one, not month six"
        ]}
      />

      <section className="section-shell pb-20 lg:pb-28">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />

          <aside className="space-y-6">
            <div className="luxury-panel p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                Direct contact
              </p>
              <h2 className="mt-4 font-display text-4xl text-white">
                Get started
              </h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-white/72">
                <p>
                  Email: <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href={site.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    www.linkedin.com/in/adrian-clara-9721a9122
                  </a>
                </p>
                <p>{site.location}</p>
              </div>
            </div>

            <div className="card p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-brand-600">
                What happens next
              </p>
              <div className="mt-5 grid gap-3">
                {intakeSteps.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[1.4rem] border border-stone-300 bg-[#f8faff] px-4 py-4 text-sm leading-7 text-neutral-700"
                  >
                    <p className="font-semibold text-foreground">
                      {index + 1}. {item.title}
                    </p>
                    <p className="mt-1">{item.body}</p>
                  </div>
                ))}
              </div>
              <Link href="/services" className="button-secondary mt-6">
                Explore Services
              </Link>
            </div>

            <div className="card p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-brand-600">
                First 90 days
              </p>
              <div className="mt-5 grid gap-3">
                {rolloutTimeline.map((item) => (
                  <div
                    key={item.phase}
                    className="rounded-[1.4rem] border border-stone-300 bg-[#f8faff] px-4 py-4 text-sm leading-7 text-neutral-700"
                  >
                    <p className="font-semibold text-foreground">
                      {item.phase}: {item.title}
                    </p>
                    <p className="mt-1">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="section-shell pb-20 lg:pb-28">
        <FitSection embedded />
      </div>
    </>
  );
}
