"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { navLinks, site } from "@/lib/data";
import { Brand } from "@/components/Brand";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-6 rounded-[1.75rem] border border-[#27345f] bg-[linear-gradient(180deg,rgba(16,24,51,0.98),rgba(21,31,63,0.96))] px-5 shadow-[0_22px_54px_rgba(15,23,47,0.28)] backdrop-blur-xl sm:px-7">
          <Link href="/" className="group flex items-center gap-3">
            <Brand dark />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "rounded-xl px-4 py-2 text-sm font-medium text-white/78 transition hover:bg-white/8 hover:text-white",
                    active && "bg-white/10 text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" className="button-primary">
              Book Workflow Audit
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="section-shell lg:hidden">
          <div className="mt-3 rounded-[2rem] border border-[#d9def3] bg-white p-5 shadow-soft">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "block rounded-2xl px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-[#f3f5ff] hover:text-foreground",
                    active && "bg-[#eef0ff] text-brand-700"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3">
              <Link
                href="/contact"
                className="button-primary w-full"
                onClick={() => setOpen(false)}
              >
                Book Workflow Audit
              </Link>
            </div>

            <p className="pt-3 text-xs leading-5 text-neutral-500">
              {site.legalName}
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
