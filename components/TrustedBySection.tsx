"use client";

import Image from "next/image";

const clients = [
  {
    name: "Teimeca",
    logo: "/logos/teimeca.png",
    width: 140,
    height: 48,
  },
];

const repeated = [
  ...clients,
  ...clients,
  ...clients,
  ...clients,
  ...clients,
  ...clients,
  ...clients,
  ...clients,
];

export function TrustedBySection() {
  return (
    <section className="section-shell py-10 sm:py-14">
      <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
        Trusted by growing companies
      </p>

      <div className="relative overflow-hidden rounded-2xl border border-stone-200/60 bg-white/80 py-6 sm:py-8">
        <div
          className="flex w-max items-center gap-20 sm:gap-28 md:gap-36"
          style={{ animation: "marquee 25s linear infinite" }}
        >
          {repeated.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex shrink-0 flex-col items-center gap-2 grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="h-12 w-auto object-contain sm:h-14"
              />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-neutral-500">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/95 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/95 to-transparent sm:w-28" />
      </div>
    </section>
  );
}
