"use client";

import { createContext, useContext } from "react";
import type { Dict } from "./dictionaries/en";
import type { Locale } from "./config";

/** 客户端 i18n Context：提供 dict 与当前 locale（客户端组件统一入口） */
const I18nContext = createContext<{ locale: Locale; t: Dict } | null>(null);

export function I18nProvider({
  locale,
  t,
  children,
}: {
  locale: Locale;
  t: Dict;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, t }}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): { locale: Locale; t: Dict } {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
