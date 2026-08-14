"use client";

import { useUnitPreference } from "@/hooks/use-unit-preference";

/** 计量双轨切换（公制 g/ml ↔ 美制 cup/tbsp/oz，localStorage 记忆） */
export function UnitToggle() {
  const { unit, toggle } = useUnitPreference();
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hw-border)] px-3 py-1.5 text-xs font-semibold text-[var(--hw-fg-muted)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
      aria-label="Toggle metric/US measurement units"
      title="Toggle g/ml ↔ cup/tbsp"
    >
      ⚖ {unit === "metric" ? "g/ml" : "cup/tbsp"}
    </button>
  );
}
