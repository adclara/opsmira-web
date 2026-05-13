import clsx from "clsx";

type BrandProps = {
  dark?: boolean;
  compact?: boolean;
};

export function Brand({ dark = false, compact = false }: BrandProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={clsx(
          "flex h-11 w-11 items-center justify-center rounded-2xl border shadow-sm",
          dark
            ? "border-white/14 bg-white/[0.1] text-white"
            : "border-[#d9def3] bg-white text-[#18213d]"
        )}
      >
        <svg
          viewBox="0 0 40 40"
          className="h-7 w-7"
          aria-hidden="true"
          fill="none"
        >
          <path
            d="M8 12h9c4.4 0 8 3.6 8 8v8"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M14 8h9c5 0 9 4 9 9v11"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            opacity="0.72"
          />
          <path
            d="M8 20h8c3.9 0 7 3.1 7 7v5"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            opacity="0.56"
          />
          <circle cx="29" cy="29" r="2.8" fill="currentColor" />
        </svg>
      </div>

      {compact ? null : (
        <div className="leading-none">
          <div
            className={clsx(
              "text-2xl font-semibold tracking-tight",
              dark ? "text-white" : "text-foreground"
            )}
          >
            Ops
            <span className={dark ? "text-[#8ea2ff]" : "text-brand-500"}>
              Mira
            </span>
          </div>
          <div
            className={clsx(
              "mt-1 text-[10px] uppercase tracking-[0.28em]",
              dark ? "text-white" : "text-neutral-500"
            )}
          >
            AI Innovations
          </div>
        </div>
      )}
    </div>
  );
}
