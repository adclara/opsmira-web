import { industries } from "@/lib/data";

export function IndustriesSection() {
  return (
    <section className="section-shell section-space">
      <span className="eyebrow">Industries We Serve</span>
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">
        Designed for Businesses With Operational Complexity
      </h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {industries.map((industry) => {
          const Icon = industry.icon;

          return (
            <article key={industry.title} className="card p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-olive-50 p-3 text-olive-800">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {industry.title}
                </h3>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
