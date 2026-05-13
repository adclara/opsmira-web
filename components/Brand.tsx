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
            d="M9 11.5h13c5.1 0 9.2 4.1 9.2 9.2v13"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M9 18h9.5c4.7 0 8.5 3.8 8.5 8.5V33"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            opacity="0.96"
          />
          <path
            d="M9 25h5.5c3.2 0 5.8 2.6 5.8 5.8V35"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            opacity="0.9"
          />
          <circle cx="29.5" cy="34" r="3.1" fill="#6b6cff" />
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
              "mt-1 text-[11px] font-medium uppercase tracking-[0.34em]",
              dark ? "text-white/90" : "text-neutral-500"
            )}
            style={dark ? { textShadow: "0 1px 0 rgba(15,23,47,0.35)" } : undefined}
          >
            AI Innovations
          </div>
        </div>
      )}
    </div>
  );
}
