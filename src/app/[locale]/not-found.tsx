"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPath, localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * [locale] 级 404（包在 [locale]/layout 内，带 Header/Footer）。
 * 注意：Next.js 15 的 not-found.tsx 不接收 params，语言从当前 URL 路径提取。
 */
export default function LocaleNotFound() {
  const pathname = usePathname();
  const loc: Locale = getLocaleFromPath(pathname) ?? "en";
  const t = getDictionary(loc);

  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <p className="font-serif text-6xl font-bold text-[var(--hw-ginger)]">404</p>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-[var(--hw-fg)]">
        {t.notFound.title}
      </h1>
      <p className="mt-2 text-[var(--hw-fg-muted)]">{t.notFound.desc}</p>
      <Link
        href={localizePath("/recipes", loc)}
        className="mt-6 rounded-lg bg-[var(--hw-soy)] px-6 py-3 text-sm font-semibold text-white dark:bg-[var(--hw-ginger)]"
      >
        {t.notFound.browse}
      </Link>
    </main>
  );
}
