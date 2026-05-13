import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/data";

export function CaseStudySection() {
  return (
    <section className="section-shell section-space">
      <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="luxury-panel overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
              Case study preview
            </span>
            <ArrowRight className="h-5 w-5 text-olive-100" />
          </div>
          <h2 className="mt-8 max-w-[12ch] font-display text-4xl leading-[0.96] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4.2rem]">
            Process intelligence built from real operations.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.76]">
            A previous Amazon process improvement study analyzed manual packing
            defects and explored how system-driven validation could reduce
            unscannable errors, rework, and workflow disruption.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Validation gap", "Mapped"],
              ["Rework exposure", "Reduced"],
              ["Standard work", "Strengthened"]
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/[0.55]">
                  {label}
                </p>
                <p className="mt-3 font-display text-4xl text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.25rem] border border-stone-300 bg-white/[0.88] p-8 sm:p-10">
          <span className="section-kicker">What makes it relevant</span>
          <p className="mt-4 text-lg leading-8 text-foreground">
            The initiative compared manual and automated workflows to identify
            where automation logic, standard work, and validation checkpoints
            could create better process control.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Conceptual, data-supported improvement framing only",
              "Focused on quality control, throughput, and operator variation",
              "Useful as proof of diagnostic thinking and systems design"
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-stone-300 bg-stone-100/80 px-5 py-4 text-sm leading-7 text-neutral-700"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-neutral-500">
            {site.experienceDisclaimer}
          </p>
          <Link href="/case-studies" className="button-primary mt-8">
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
