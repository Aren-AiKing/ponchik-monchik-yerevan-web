import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries } from "./dictionary";
import { LANGS, type Lang } from "./types";

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "pm.lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "hy";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && (LANGS as string[]).includes(saved)) return saved as Lang;
  } catch {}
  return "hy";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("hy");

  // Hydrate from localStorage after mount to avoid SSR mismatch
  useEffect(() => {
    const initial = detectInitialLang();
    setLangState(initial);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  const t = useCallback(
    (key: string) => {
      const dict = dictionaries[lang];
      return dict[key] ?? dictionaries.en[key] ?? key;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
