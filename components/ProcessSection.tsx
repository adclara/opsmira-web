import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="section-shell section-space">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">How it works</span>
        <h2 className="section-title mx-auto text-3xl sm:text-4xl lg:text-[3.4rem]">
          Three steps to measurable savings.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600">
          Every engagement follows the same clear path from workflow audit to
          live deployment and optimization.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <article
            key={step.step}
            className={
              index === 1
                ? "luxury-panel p-6"
                : "card p-6"
            }
          >
            <div
              className={
                index === 1
                  ? "font-display text-5xl text-brand-100"
                  : "font-display text-5xl text-neutral-300"
              }
            >
              {step.step}
            </div>
            <h3
              className={
                index === 1
                  ? "mt-4 text-2xl font-semibold text-white"
                  : "mt-4 text-2xl font-semibold text-foreground"
              }
            >
              {step.title}
            </h3>
            <p
              className={
                index === 1
                  ? "mt-3 text-sm leading-7 text-white/72"
                  : "mt-3 text-sm leading-7 text-neutral-600"
              }
            >
              {step.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
