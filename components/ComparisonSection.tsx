import clsx from "clsx";
import { comparisonRows } from "@/lib/data";

export function ComparisonSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section
      className={clsx(
        embedded ? "pt-10" : "section-shell section-space pt-6"
      )}
    >
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <span className="eyebrow">What it replaces or improves</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-[3.15rem]">
            What changes after the engagement.
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-600">
            Buyers should not have to guess what changes after the work. OpsMira
            reduces cost leakage and repetitive coordination, tightens processes,
            and makes operations easier to see and control.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-stone-300 bg-white/95 shadow-soft">
          <div className="grid grid-cols-[0.9fr_1.05fr_1.05fr] border-b border-stone-200 bg-[#f5f7ff] px-5 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500 sm:px-6">
            <div>Operation</div>
            <div>Before OpsMira</div>
            <div>After OpsMira</div>
          </div>

          <div className="divide-y divide-stone-200">
            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-4 px-5 py-5 sm:grid-cols-[0.9fr_1.05fr_1.05fr] sm:px-6"
              >
                <div className="text-sm font-semibold text-foreground">
                  {row.label}
                </div>
                <div className="text-sm leading-7 text-neutral-600">
                  {row.before}
                </div>
                <div className="rounded-[1.2rem] bg-[#eef2ff] px-4 py-3 text-sm leading-7 text-brand-700">
                  {row.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
