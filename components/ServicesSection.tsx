import { services, comparisonRows } from "@/lib/data";

export function ServicesSection() {
  const [featuredService, ...supportingServices] = services;

  return (
    <section className="section-shell section-space">
      <div className="grid gap-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">What OpsMira implements</span>
          <h2 className="section-title mx-auto text-3xl sm:text-4xl lg:text-[3.4rem]">
            The work that costs you the most time.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600">
            OpsMira focuses on operational workflows that create labor cost,
            slow customer response, and reduce visibility.
          </p>
        </div>

        <article className="luxury-panel grid gap-8 overflow-hidden p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/55">
              Core offer
            </p>
            <h3 className="mt-4 max-w-[14ch] font-display text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl">
              {featuredService.title}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
              {featuredService.body}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {supportingServices.map((service, index) => {
              const Icon = service.icon;
              const highlighted = index === 1;

              return (
                <article
                  key={service.title}
                  className={
                    highlighted
                      ? "rounded-[1.8rem] border border-[#cad1ff] bg-white p-5 text-foreground shadow-soft"
                      : "rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5"
                  }
                >
                  <div
                    className={
                      highlighted
                        ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white"
                        : "flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-300"
                    }
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className={
                      highlighted
                        ? "mt-5 text-xl font-semibold text-foreground"
                        : "mt-5 text-xl font-semibold text-white"
                    }
                  >
                    {service.title}
                  </h3>
                  <p
                    className={
                      highlighted
                        ? "mt-3 text-sm leading-7 text-neutral-600"
                        : "mt-3 text-sm leading-7 text-white/68"
                    }
                  >
                    {service.body}
                  </p>
                </article>
              );
            })}
          </div>
        </article>

        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft">
          <div className="border-b border-stone-200 px-6 py-5">
            <h3 className="text-lg font-semibold text-foreground">What it replaces</h3>
          </div>
          <div className="divide-y divide-stone-200">
            {comparisonRows.map((row) => (
              <div key={row.label} className="grid gap-1 px-6 py-4 sm:grid-cols-[0.3fr_1fr_1fr] sm:items-center sm:gap-4">
                <p className="text-sm font-semibold text-foreground">{row.label}</p>
                <p className="text-sm leading-6 text-neutral-500">{row.before}</p>
                <p className="text-sm font-medium leading-6 text-brand-700">{row.after}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
