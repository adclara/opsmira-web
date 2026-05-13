import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/data";

export function CaseStudySection() {
  return (
    <section className="section-shell section-space">
      <div className="card overflow-hidden p-8 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Case Study Preview</span>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">
              Process Intelligence Built From Real Operations
            </h2>
            <p className="section-copy mt-5">
              A previous Amazon process improvement study analyzed manual packing
              defects and explored how system-driven validation could reduce
              unscannable errors, rework, and workflow disruption. The
              initiative compared manual and automated packing workflows and
              identified how automation logic, standard work, and validation
              steps could improve quality and process control.
            </p>
            <p className="mt-5 text-xs leading-6 text-neutral-500">
              Presenting this as a conceptual, data-supported improvement
              initiative only. It is not described as a fully implemented
              client-wide deployment.
            </p>
            <p className="mt-3 text-xs leading-6 text-neutral-500">
              {site.experienceDisclaimer}
            </p>
            <Link href="/case-studies" className="button-primary mt-8">
              View Case Studies
            </Link>
          </div>

          <div className="rounded-[2rem] border border-stone-300 bg-[#11160f] p-6 text-white shadow-soft">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                Opportunity Scan
              </span>
              <ArrowRight className="h-5 w-5 text-olive-100" />
            </div>
            <div className="mt-8 grid gap-4">
              {[
                ["Manual vs. Automated Validation", "Gap Identified"],
                ["Unscannable Defect Risk", "Priority Review"],
                ["Standard Work Alignment", "Improvement Path"],
                ["Operator Variation", "Reduction Opportunity"]
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
