"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { navLinks, site } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-300/80 bg-background/90 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-stone-300 bg-white shadow-sm transition group-hover:border-olive-300 group-hover:bg-olive-50">
            <span className="font-display text-xl text-foreground">O</span>
          </div>
          <div className="leading-none">
            <div className="text-2xl font-semibold tracking-tight text-foreground">
              <span className="font-display text-3xl">Ops</span>
              <span className="text-olive-700">Mira</span>
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-neutral-500">
              Process Intelligence
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium text-neutral-600 transition hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="button-primary">
            Schedule Call
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-stone-300 bg-white lg:hidden">
          <div className="section-shell flex flex-col gap-2 py-5">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "rounded-2xl px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-stone-100 hover:text-foreground",
                    active && "bg-olive-50 text-olive-800"
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
                Schedule Call
              </Link>
            </div>

            <p className="pt-2 text-xs leading-5 text-neutral-500">
              {site.legalName}
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
