"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const closeMenuAndRestoreFocus = useCallback(() => {
    setMenuOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const panel = menuPanelRef.current;
    if (!panel) return;

    const focusables = Array.from(
      panel.querySelectorAll<HTMLElement>(FOCUSABLE),
    );
    focusables[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenuAndRestoreFocus();
        return;
      }

      if (event.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenuAndRestoreFocus]);

  const navLinkClass =
    "text-sm text-ink-inverse/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";
  const homeSectionHref = (hash: string) =>
    pathname === "/" ? hash : `/${hash}`;

  return (
    <header className="sticky top-0 z-50 border-b border-ink-inverse/10 bg-foundation/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[72rem] items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/#hero"
          className="font-display text-lg font-medium tracking-tight text-ink-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          <span className="text-accent">{site.wordmark}</span>
          <span className="sr-only"> — {site.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={homeSectionHref(item.href)}
              className={navLinkClass}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={homeSectionHref("#contact")}
            variant="primary"
            className="text-ink"
          >
            Let&apos;s Connect
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-ink-inverse/20 px-3 font-mono text-xs uppercase tracking-wider text-ink-inverse md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div
          id={menuId}
          ref={menuPanelRef}
          className="absolute inset-x-0 top-full min-h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-ink-inverse/10 bg-foundation md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-[72rem] items-center justify-between border-b border-ink-inverse/10 px-4 py-4 sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              Navigation
            </p>
            <button
              type="button"
              className="inline-flex min-h-11 items-center px-2 font-mono text-xs uppercase tracking-wider text-ink-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              onClick={closeMenuAndRestoreFocus}
            >
              Close menu
            </button>
          </div>
          <nav
            className="mx-auto flex max-w-[72rem] flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile primary"
          >
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={homeSectionHref(item.href)}
                className="min-h-11 py-3 font-display text-xl text-ink-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={homeSectionHref("#contact")}
              variant="primary"
              className="mt-4 w-full text-ink"
              onClick={closeMenu}
            >
              Let&apos;s Connect
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
