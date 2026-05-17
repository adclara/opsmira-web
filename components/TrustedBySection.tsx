"use client";

function HabitatLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="0" y="4" width="32" height="32" rx="6" fill="currentColor" fillOpacity="0.12" />
      <path
        d="M8 24V16l8-6 8 6v8H8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path d="M14 24v-5h4v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="40" y="19" fontSize="11.5" fontWeight="700" letterSpacing="0.06em" fill="currentColor">
        HABITAT
      </text>
      <text x="40" y="32" fontSize="9" fontWeight="500" letterSpacing="0.12em" fill="currentColor" fillOpacity="0.6">
        SOLUTIONS GROUP
      </text>
    </svg>
  );
}

function TeimecaLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="0" y="4" width="32" height="32" rx="6" fill="currentColor" fillOpacity="0.12" />
      <path
        d="M8 14h16M16 14v14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M10 20h12M10 26h12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
      <text x="40" y="19" fontSize="13" fontWeight="800" letterSpacing="0.08em" fill="currentColor">
        TEIMECA
      </text>
      <text x="40" y="32" fontSize="8" fontWeight="500" letterSpacing="0.1em" fill="currentColor" fillOpacity="0.6">
        DRAFTING &amp; ENGINEERING
      </text>
    </svg>
  );
}

const logos = [
  { name: "Habitat Solutions Group", Logo: HabitatLogo },
  { name: "Teimeca", Logo: TeimecaLogo },
];

const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

export function TrustedBySection() {
  return (
    <section className="section-shell py-10 sm:py-14">
      <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
        Trusted by growing companies
      </p>

      <div className="relative overflow-hidden rounded-2xl border border-stone-200/60 bg-white/80 py-8">
        <div
          className="flex w-max items-center gap-16 sm:gap-24"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {repeatedLogos.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex shrink-0 items-center"
            >
              <item.Logo className="h-10 w-auto text-neutral-400 transition-colors duration-300 hover:text-neutral-600" />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/95 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/95 to-transparent" />
      </div>
    </section>
  );
}
