"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/provider";
import { locales, type Locale, stripLocaleFromPath, localizePath } from "@/i18n/config";

/**
 * 语言切换器：在 /en ↔ /zh 之间切换，保持当前路径（如 /zh/recipes/x → /en/recipes/x）。
 * 切换时把偏好写入 localStorage（hw-lang），middleware 无法读 localStorage，
 * 因此仅作为访问 / 时的手动选择提示（首访仍由 middleware 决定默认语言）。
 */
export function LanguageToggle() {
  const { locale } = useI18n();
  const pathname = usePathname();
  const other = locales.find((l) => l !== locale) as Locale;

  const target = localizePath(stripLocaleFromPath(pathname), other);

  return (
    <Link
      href={target}
      className="inline-flex items-center gap-1 rounded-full border border-[var(--hw-border)] px-3 py-1.5 text-xs font-semibold text-[var(--hw-fg-muted)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
      aria-label={other === "zh" ? "切换到中文" : "Switch to English"}
      onClick={() => {
        try {
          localStorage.setItem("hw-lang", other);
        } catch {
          /* ignore */
        }
      }}
    >
      {other === "zh" ? "中文" : "EN"}
    </Link>
  );
}
