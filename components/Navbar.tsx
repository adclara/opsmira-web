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
        <div className="flex h-16 items-center justify-between gap-6 rounded-2xl border border-[#2d3b67] bg-[#18213d] px-5 shadow-[0_14px_40px_rgba(15,23,47,0.22)] sm:px-7">
          <Link href="/" className="group flex items-center gap-3">
            <Brand dark />
          </Link>

          <nav className="hidden items-center gap-0.5 rounded-xl border border-[#31406f] bg-[#202b4d] p-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: active ? "#ffffff" : "#eef2ff" }}
                  className={clsx(
                    "whitespace-nowrap rounded-lg px-3.5 py-2 text-[0.8rem] font-medium transition hover:bg-[#2c3a67] hover:text-white",
                    active && "bg-[#31406f] shadow-[0_6px_16px_rgba(15,23,47,0.18)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" className="button-primary">
              Book Free Diagnosis
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#31406f] bg-[#202b4d] text-white lg:hidden"
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
          <div className="mt-2 rounded-xl border border-[#d9def3] bg-white p-4 shadow-soft">
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
                Book Free Diagnosis
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
