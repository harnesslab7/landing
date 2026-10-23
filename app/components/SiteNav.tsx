"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { Dict } from "../../lib/dictionaries";

// Must match the max-width of the collapsed-nav media query in globals.css.
const DESKTOP_QUERY = "(min-width: 1101px)";

export default function SiteNav({ t }: { t: Dict["nav"] }) {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", close);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", close);
    };
  }, [open]);

  // Any link inside the menu jumps to a section, so the menu closes behind it.
  function onMenuClick(e: MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).closest("a")) setOpen(false);
  }

  return (
    <nav ref={navRef} className="wrap nav" aria-label="Main">
      <a href="#top" className="wm" onClick={() => setOpen(false)}>
        <span className="slash">/</span>workspace
      </a>
      <button
        ref={toggleRef}
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? t.menuClose : t.menuOpen}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      <div
        id="site-menu"
        className={open ? "nav-links is-open" : "nav-links"}
        onClick={onMenuClick}
      >
        <a href="#shares">{t.shares}</a>
        <a href="#how">{t.how}</a>
        <a href="#whatsapp">{t.whatsapp}</a>
        <a href="#about">{t.about}</a>
        <a href="#waitlist" className="nav-cta">
          {t.cta}
        </a>
      </div>
    </nav>
  );
}
