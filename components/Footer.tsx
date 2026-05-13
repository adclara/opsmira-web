import Link from "next/link";
import { footerLinks, site } from "@/lib/data";
import { Brand } from "@/components/Brand";

export function Footer() {
  return (
    <footer className="mt-10 bg-[#0f172f] text-white">
      <div className="section-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex">
              <Brand dark />
            </Link>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-brand-200">
              Done-for-you AI operations for SMBs
            </p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/66">
              OpsMira helps owners remove administrative drag, recover missed
              opportunities, improve scheduling coordination, automate
              reporting, and launch a working AI operations layer with human
              oversight.
            </p>
            <div className="mt-6 space-y-2 text-sm leading-7 text-white/60">
              <p>{site.legalName}</p>
              <p>{site.location}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${site.email}`} className="text-white hover:text-brand-200">
                  {site.email}
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href={site.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-brand-200"
                >
                  Adrian Clara
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:justify-self-end lg:min-w-[30rem]">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-white/45">
          <p>{site.legalDisclaimer}</p>
          <p>{site.experienceDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
