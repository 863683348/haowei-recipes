"use client";

import { useTheme } from "@/hooks/use-theme";

/** 亮黑主题切换 */
export function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hw-border)] px-3 py-1.5 text-xs font-semibold text-[var(--hw-fg-muted)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
      aria-label="Toggle dark mode"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
