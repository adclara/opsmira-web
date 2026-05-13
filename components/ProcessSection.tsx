import { deliveryFacts, processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="section-shell section-space">
      <div className="grid gap-6 xl:grid-cols-[0.7fr_1.3fr]">
        <div className="rounded-[2.25rem] border border-stone-300 bg-white/[0.84] p-7 sm:p-8">
          <span className="eyebrow">How implementation works</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-[3.15rem]">
            A clear delivery model from workflow audit to optimization after launch.
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-600">
            OpsMira is designed to feel like an operational deployment, not a
            vague automation engagement. Each phase exists to remove admin drag
            and make the savings measurable.
          </p>
          <div className="mt-8 rounded-[1.9rem] border border-stone-300 bg-stone-100/80 p-5">
            <p className="section-kicker">What customers buy</p>
            <p className="mt-3 text-lg leading-8 text-foreground">
              Audit the workflow, identify where money is leaking, configure
              the operational system, launch with oversight, then refine around
              real business use.
            </p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {deliveryFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-[1.4rem] border border-stone-300 bg-white/85 px-4 py-4"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {processSteps.map((step, index) => (
            <article
              key={step.step}
              className={
                index === 2
                  ? "luxury-panel grid gap-4 p-6 sm:grid-cols-[112px_1fr] sm:items-start"
                  : "card grid gap-4 p-6 sm:grid-cols-[112px_1fr] sm:items-start"
              }
            >
              <div
                className={
                  index === 2
                    ? "font-display text-5xl text-brand-100"
                    : "font-display text-5xl text-neutral-300"
                }
              >
                {step.step}
              </div>
              <div>
                <h3
                  className={
                    index === 2
                      ? "text-2xl font-semibold text-white"
                      : "text-2xl font-semibold text-foreground"
                  }
                >
                  {step.title}
                </h3>
                <p
                  className={
                    index === 2
                      ? "mt-3 text-sm leading-7 text-white/[0.72]"
                      : "mt-3 text-sm leading-7 text-neutral-600"
                  }
                >
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
