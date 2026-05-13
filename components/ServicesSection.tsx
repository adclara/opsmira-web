import { services } from "@/lib/data";

export function ServicesSection() {
  const [featuredService, ...supportingServices] = services;

  return (
    <section className="section-shell section-space">
      <div className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
        <div className="rounded-[2.25rem] border border-stone-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(241,244,232,0.95))] p-7 sm:p-8">
          <span className="eyebrow">What We Build</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-[3.2rem]">
            A sharper mix of operations consulting and modern workflow systems.
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-600">
            OpsMira helps companies find the operational friction behind
            missed productivity, weak handoffs, and repetitive admin work, then
            translate that into clear systems, standard work, and practical
            automation.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-neutral-600">
            {[
              "Process-first diagnostics before tooling decisions",
              "Executive-level clarity without losing floor-level detail",
              "Automation that supports people instead of replacing judgment"
            ].map((point) => (
              <div
                key={point}
                className="rounded-full border border-stone-300 bg-white/[0.86] px-4 py-3"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="luxury-panel p-7 md:col-span-2">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.28em] text-white/[0.65]">
                  Signature service
                </p>
                <h3 className="mt-3 font-display text-4xl leading-none tracking-[-0.03em] text-white sm:text-5xl">
                  {featuredService.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/[0.75]">
                  {featuredService.body}
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-5 lg:max-w-xs">
                <p className="text-xs uppercase tracking-[0.24em] text-white/[0.55]">
                  Outcome
                </p>
                <p className="mt-3 text-lg leading-7 text-white">
                  Better flow, lower waste, and clearer control points across
                  the operation.
                </p>
              </div>
            </div>
          </article>

          {supportingServices.map((service, index) => {
            const Icon = service.icon;
            const highlighted = index === 1;

            return (
              <article
                key={service.title}
                className={
                  highlighted
                    ? "rounded-[2rem] border border-olive-300 bg-[linear-gradient(180deg,#eef4df,#f9faf6)] p-6 shadow-soft"
                    : "card p-6"
                }
              >
                <div
                  className={
                    highlighted
                      ? "w-fit rounded-2xl bg-olive-700 p-3 text-white"
                      : "w-fit rounded-2xl bg-olive-50 p-3 text-olive-800"
                  }
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {service.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
