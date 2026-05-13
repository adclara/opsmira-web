import Link from "next/link";
import { footerLinks, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-stone-300/80 bg-white/60">
      <div className="section-shell py-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-xl">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              <span className="font-display text-3xl">Ops</span>
              <span className="text-olive-700">Mira</span>
            </Link>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-olive-700">
              Supply Chain Optimization | AI Automation | Process Intelligence
            </p>
            <div className="mt-5 space-y-2 text-sm leading-7 text-neutral-600">
              <p>{site.legalName}</p>
              <p>{site.location}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${site.email}`} className="hover:text-foreground">
                  {site.email}
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href={site.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  www.linkedin.com/in/adrian-clara-9721a9122
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[28rem]">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[1.5rem] border border-stone-300 bg-background px-4 py-4 text-sm font-semibold text-foreground transition hover:border-olive-300 hover:bg-olive-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-stone-300 pt-6 text-xs leading-6 text-neutral-500">
          <p>{site.legalDisclaimer}</p>
          <p>{site.experienceDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
