"use client";

import { useUnitPreference } from "@/hooks/use-unit-preference";
import { useI18n } from "@/i18n/provider";
import { ScaleIcon } from "@/components/icons";

/** 计量双轨切换（公制 g/ml ↔ 美制 cup/tbsp/oz，localStorage 记忆） */
export function UnitToggle() {
  const { unit, toggle } = useUnitPreference();
  const { t } = useI18n();
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hw-border)] px-3 py-1.5 text-xs font-semibold text-[var(--hw-fg-muted)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
      aria-label="Toggle metric/US measurement units"
      title="Toggle g/ml ↔ cup/tbsp"
    >
      <ScaleIcon className="h-3.5 w-3.5" /> {unit === "metric" ? t.common.unitMetric : t.common.unitUS}
    </button>
  );
}
