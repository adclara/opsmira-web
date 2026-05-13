import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section className="section-shell section-space">
      <span className="eyebrow">What We Do</span>
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">
        Practical Operations Improvement for Growing Businesses
      </h2>
      <p className="section-copy mt-5">
        OpsMira helps companies identify process gaps, reduce manual work,
        improve team execution, and build smarter workflows. Our approach
        combines supply chain management, Lean process thinking, AI automation,
        reporting systems, training, and operational discipline.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article key={service.title} className="card h-full p-6">
              <div className="rounded-2xl bg-olive-50 p-3 text-olive-800 w-fit">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {service.body}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
