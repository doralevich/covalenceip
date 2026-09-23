"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden bg-brand py-1.5 md:block">
        <div className="mx-auto flex max-w-[1440px] justify-end px-6">
          <a
            href={`mailto:${site.email}`}
            className="text-shadow flex items-center gap-2 text-[14.5px] font-semibold text-white"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.3-.5 7.7 5.8L19.7 6H4.3ZM20 8.1l-7.4 5.6a1 1 0 0 1-1.2 0L4 8.1v9.4c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V8.1Z" />
            </svg>
            {site.email}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#dddddd] bg-white/95 shadow-[0_12px_18px_-6px_rgba(0,0,0,0.3)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-3">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo, no optimisation needed */}
            <img
              src="/images/CovalencePurpleLogo.svg"
              alt={`${site.name} Logo`}
              className="h-auto w-[240px] md:w-[322px] lg:w-[400px]"
            />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="px-2.5 py-2 font-semibold tracking-[0.5px] text-brand transition-colors hover:text-brand-hover"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="rounded border border-brand p-2 text-brand lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" aria-label="Main" className="border-t border-[#dddddd] lg:hidden">
            <ul className="mx-auto max-w-[90%] py-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 text-lg font-semibold text-brand hover:bg-[#eff9ff] hover:text-brand-hover"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
