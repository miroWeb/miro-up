"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { LOCALES, type Locale } from "@/i18n/dictionary";

const LABELS: Record<Locale, string> = { uz: "UZ", ru: "RU" };

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-ink/10 bg-white/70 p-0.5 text-[12.5px] font-semibold ${className}`}
      role="group"
      aria-label="Til / Язык"
    >
      {LOCALES.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => setLocale(loc)}
          aria-pressed={locale === loc}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === loc
              ? "bg-ink text-white"
              : "text-ink-soft/70 hover:text-ink"
          }`}
        >
          {LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
