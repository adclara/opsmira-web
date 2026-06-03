import clsx from "clsx";

type BrandProps = {
  dark?: boolean;
  compact?: boolean;
};

export function Brand({ dark = false, compact = false }: BrandProps) {
  return (
    <div className="flex items-center gap-3">
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
