import { industries } from "@/lib/data";

export function IndustriesSection() {
  return (
    <section className="section-shell section-space">
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2.25rem] border border-stone-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,248,245,0.96))] p-7 sm:p-8">
          <span className="eyebrow">Ideal industries</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-[3.2rem]">
            Best for service businesses with real coordination complexity.
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-600">
            OpsMira fits best where customer requests, office coordination,
            scheduling, project updates, and field communication create
            administrative drag that slows growth.
          </p>
          <div className="mt-8 rounded-[1.7rem] border border-stone-300 bg-stone-100/80 p-5 text-sm leading-7 text-neutral-700">
            Typical value comes from recovering 20 to 60 monthly admin hours,
            reducing repetitive communication, improving follow-up speed, and
            preventing missed customer opportunities.
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const emphasized = index === 0 || index === 5;

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
                      Better response, stronger coordination, and cleaner admin
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
