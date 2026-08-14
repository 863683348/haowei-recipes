"use client";

import { useTheme } from "@/hooks/use-theme";
import { useI18n } from "@/i18n/provider";

/** 亮黑主题切换 */
export function ThemeToggle() {
  const { dark, toggle } = useTheme();
  const { t } = useI18n();
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hw-border)] px-3 py-1.5 text-xs font-semibold text-[var(--hw-fg-muted)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
      aria-label={dark ? t.common.theme.light : t.common.theme.dark}
    >
      {dark ? `☀️ ${t.common.theme.light}` : `🌙 ${t.common.theme.dark}`}
    </button>
  );
}
