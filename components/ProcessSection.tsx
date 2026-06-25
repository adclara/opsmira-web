import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section id="how-it-works" className="section-shell section-space scroll-mt-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">How it works</span>
        <h2 className="section-title mx-auto">
          The advice is free. You pay for results.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[0.9rem] leading-6 text-neutral-600">
          Start with a no-cost diagnosis. You only invest once there's a clear
          improvement and an expected payback on the table.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <article
            key={step.step}
            className={
              index === 1
                ? "luxury-panel p-5"
                : "card p-5"
            }
          >
            <div
              className={
                index === 1
                  ? "font-display text-3xl text-brand-100"
                  : "font-display text-3xl text-neutral-300"
              }
            >
              {step.step}
            </div>
            <h3
              className={
                index === 1
                  ? "mt-3 text-lg font-semibold text-white"
                  : "mt-3 text-lg font-semibold text-foreground"
              }
            >
              {step.title}
            </h3>
            <p
              className={
                index === 1
                  ? "mt-2 text-[0.8rem] leading-6 text-white/72"
                  : "mt-2 text-[0.8rem] leading-6 text-neutral-600"
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
