import { values } from "@/lib/data";

export function AboutFounder() {
  return (
    <section className="section-shell section-space">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">About OpsMira</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">
            Operations First. Technology Second. Results Through Better Flow.
          </h2>
          <p className="section-copy mt-5">
            OpsMira was created to help businesses bring enterprise-level
            operational thinking into practical, affordable, and scalable
            solutions.
          </p>
        </div>

        <div className="grid gap-5">
          <article className="card p-7">
            <h3 className="text-2xl font-semibold text-foreground">
              Founded by Adrian Clara
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Adrian Clara has over 7 years of experience in supply chain and
              operations, with professional experience across Amazon, Lowe’s,
              and Sam’s Club/Walmart. His background includes outbound quality,
              central flow operations, inbound operations, quality assurance,
              inventory analysis, training, Lean Six Sigma projects, KPI
              improvement, process standardization, and data-driven decision
              making.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-600">
              <li>
                Bachelor’s Degree in Supply Chain, Transportation & Logistics
                Management from Bellevue University
              </li>
              <li>
                Master’s Degree in Data Science in progress at Bellevue
                University
              </li>
            </ul>
          </article>

          <article className="card p-7">
            <h3 className="text-2xl font-semibold text-foreground">
              Values That Shape the Work
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Adrian brings a practical operations-first perspective. Instead of
              selling generic technology, OpsMira focuses on understanding the
              real process first, then designing the right system, automation,
              training, or improvement method around the business.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-stone-300 bg-stone-100/80 px-4 py-3 text-sm font-medium text-neutral-700"
                >
                  {value}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
