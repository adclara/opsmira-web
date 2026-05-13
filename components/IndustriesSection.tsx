import { industries } from "@/lib/data";

export function IndustriesSection() {
  return (
    <section className="section-shell section-space">
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2.25rem] border border-stone-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,248,245,0.96))] p-7 sm:p-8">
          <span className="eyebrow">Who We Serve</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-[3.2rem]">
            Designed for businesses carrying real operational complexity.
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-600">
            The strongest fit is where execution depends on handoffs, process
            reliability, inventory accuracy, route discipline, or better
            visibility across teams.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const emphasized = index === 1 || index === 3;

            return (
              <article
                key={industry.title}
                className={
                  emphasized
                    ? "rounded-[2rem] border border-olive-300 bg-[linear-gradient(180deg,#f0f4e4,#fbfcf8)] p-5 shadow-soft"
                    : "card p-5"
                }
              >
                <div className="flex items-start gap-3">
                  <div
                    className={
                      emphasized
                        ? "rounded-2xl bg-olive-700 p-3 text-white"
                        : "rounded-2xl bg-olive-50 p-3 text-olive-800"
                    }
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {industry.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      Process clarity, stronger routines, and higher-confidence
                      execution.
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
