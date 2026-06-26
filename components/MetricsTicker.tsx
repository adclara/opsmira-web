"use client";

const items = [
  "Operations diagnosis",
  "Process design",
  "Cost reduction",
  "Supply chain",
  "SOPs & standards",
  "Custom dashboards",
  "Demand forecasting",
  "Inventory management",
  "Quality control",
  "AI agents (add-on)",
  "Logistics",
  "Profit growth",
];

export function MetricsTicker() {
  const doubled = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-stone-200/60 bg-[#f8faff] py-5">
      <div
        className="flex w-max gap-8"
        style={{
          animation: "marquee 40s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400"
          >
            {item}
            <span className="text-brand-300">✦</span>
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f8faff] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f8faff] to-transparent" />
    </section>
  );
}
