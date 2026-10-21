"use client";

import { useRouter, usePathname } from "next/navigation";
import { LOCALE_COOKIE, locales, type Locale } from "../../lib/i18n";

const NAMES: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
};

export default function LanguageSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(locale: Locale) {
    if (locale === current) return;
    try {
      document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      // Cookie blocked: navigation below still switches the language for this visit.
    }
    const rest = pathname.replace(/^\/(en|es|pt)(?=\/|$)/, "");
    router.push(`/${locale}${rest}`);
  }

  return (
    <div className="lang-switch" role="group" aria-label={label}>
      <span className="lang-label">{label}</span>
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          onClick={() => switchTo(l)}
          className={l === current ? "active" : undefined}
          aria-current={l === current ? "true" : undefined}
        >
          {NAMES[l]}
        </button>
      ))}
    </div>
  );
}
