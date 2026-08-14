"use client";

import { useEffect } from "react";
import { localeHtmlLang, type Locale } from "./config";

/** 同步 <html lang> 与 <title> 语言（客户端轻量同步，不影响 SSR 静态生成） */
export function LangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale];
  }, [locale]);
  return null;
}
