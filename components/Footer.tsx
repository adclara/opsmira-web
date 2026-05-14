import Link from "next/link";
import { footerLinks, site } from "@/lib/data";
import { Brand } from "@/components/Brand";

export function Footer() {
  return (
    <footer className="mt-8 bg-[#0f172f] text-white">
      <div className="section-shell py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex">
              <Brand dark />
            </Link>
            <p className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-brand-200">
              Done-for-you AI operations for SMBs
            </p>
            <p className="mt-4 max-w-lg text-[0.8rem] leading-6 text-white/66">
              OpsMira helps owners remove administrative drag, recover missed
              opportunities, improve scheduling coordination, automate
              reporting, and launch a working AI operations layer with human
              oversight.
            </p>
            <div className="mt-5 space-y-1.5 text-[0.8rem] leading-6 text-white/60">
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

          <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[28rem] lg:justify-self-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-3 text-[0.8rem] font-medium text-white transition hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-[0.7rem] leading-5 text-white/45">
          <p>{site.legalDisclaimer}</p>
          <p>{site.experienceDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
