import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="section-shell section-space">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <span className="eyebrow">How It Works</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">
            From Process Assessment to Practical Implementation
          </h2>
        </div>

        <div className="space-y-4">
          {processSteps.map((step) => (
            <article
              key={step.step}
              className="card grid gap-4 p-6 sm:grid-cols-[90px_1fr] sm:items-start"
            >
              <div className="font-display text-5xl text-neutral-300">
                {step.step}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
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
