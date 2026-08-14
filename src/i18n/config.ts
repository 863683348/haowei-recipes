/** i18n 全局配置（Spec §5 更新：双前缀 /en /zh 全双语） */

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const isLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v);

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
};

export const localeOgLocale: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
};

/** 站点域名（sitemap / alternates / metadataBase 共用） */
export const SITE_URL = "https://haoweirecipes.com";

/**
 * 在给定 pathname（不含 locale 前缀，如 "/recipes" 或 "/recipes/mapo-tofu"）
 * 与目标 locale 之间换算路径。规则：双前缀，en/zh 均带前缀（根路径 "/" 由
 * middleware 重定向到 "/en"，与 next.config.ts 的 /:locale(en|zh) 缓存规则一致）。
 */
export function localizePath(pathname: string, locale: Locale): string {
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** 从带前缀的 pathname 提取 locale；无前缀（如 "/"）返回 undefined */
export function getLocaleFromPath(pathname: string): Locale | undefined {
  const seg = pathname.split("/")[1] ?? "";
  return isLocale(seg) ? seg : undefined;
}

/** 去掉 pathname 的 locale 前缀，返回原始路径（如 "/zh/recipes/x" → "/recipes/x"） */
export function stripLocaleFromPath(pathname: string): string {
  const loc = getLocaleFromPath(pathname);
  if (!loc) return pathname;
  const rest = pathname.slice(loc.length + 1);
  return rest === "" ? "/" : rest;
}

/**
 * 生成页面级 `alternates`（canonical + hreflang languages + x-default）。
 * 三处形态严格统一：page canonical = sitemap URL = hreflang URL，均带 /en /zh 前缀。
 * 用法：`alternates: pageAlternates("/recipes", locale)`
 */
export function pageAlternates(path: string, locale: Locale) {
  const localized = (loc: Locale) => `${SITE_URL}${localizePath(path, loc)}`;
  return {
    canonical: localized(locale),
    languages: Object.fromEntries(
      [...locales, "x-default"].map((loc) => [
        loc,
        localized(loc === "x-default" ? defaultLocale : (loc as Locale)),
      ])
    ) as Record<string, string>,
  };
}

/** 把页面相对路径（如 "/images/recipes/tomato-and-egg.png"）拼成 OG/JSON-LD 用的绝对 URL */
export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
