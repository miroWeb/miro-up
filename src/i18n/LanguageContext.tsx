"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionaries, type Dictionary, type Locale } from "./dictionary";

const STORAGE_KEY = "miroup-locale";

// A tiny external store for the current locale, synced via useSyncExternalStore.
// This keeps the server-rendered "uz" snapshot stable during hydration (no
// mismatch) and then syncs to the visitor's saved preference right after —
// a single, instant React re-render, never a page navigation or reload, so
// switching (or restoring a saved choice) never flickers.
let currentLocale: Locale = "uz";
let hydratedFromStorage = false;
const listeners = new Set<() => void>();

function readStoredLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "uz" || saved === "ru") return saved;
  } catch {
    // localStorage unavailable (private mode, etc.)
  }
  return "uz";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Locale {
  if (!hydratedFromStorage) {
    currentLocale = readStoredLocale();
    hydratedFromStorage = true;
  }
  return currentLocale;
}

function getServerSnapshot(): Locale {
  return "uz";
}

function setGlobalLocale(next: Locale) {
  if (next === currentLocale) return;
  currentLocale = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // ignore write failures
  }
  for (const listener of listeners) listener();
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setGlobalLocale(next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
