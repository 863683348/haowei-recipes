"use client";

import type { StateNote } from "@/lib/types";
import { useI18n } from "@/i18n/provider";
import { FireIcon, ClockIcon } from "@/components/icons";

/**
 * R-03 火候状态可视化：每个"看状态"步骤的状态描述 + 时间参考 + 判断信号
 */
export function StateNote({ state }: { state: StateNote }) {
  const { locale, t } = useI18n();
  const isZh = locale === "zh";
  const heatLabels = t.stateNote.heatLabels;
  const visual = isZh ? state.visualZh ?? state.visual : state.visual;
  const signal = isZh ? state.signalZh ?? state.signal : state.signal;
  const timeRef = isZh ? state.timeRefZh ?? state.timeRef : state.timeRef;

  return (
    <div className="mt-3 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg-soft)] p-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-[var(--hw-ginger)]/15 px-2.5 py-0.5 text-xs font-semibold text-[var(--hw-ginger)]">
          {t.recipeDetail.lookFor}
        </span>
        {state.heat && (
          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--hw-soy)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--hw-fg-muted)]">
            <FireIcon className="h-3 w-3" /> {heatLabels[state.heat]}
          </span>
        )}
        {timeRef && (
          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--hw-scallion)]/12 px-2.5 py-0.5 text-xs font-medium text-[var(--hw-scallion)]">
            <ClockIcon className="h-3 w-3" /> {timeRef}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-[var(--hw-fg)]">
        <span className="font-semibold">{t.recipeDetail.visual}</span>
        {visual}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-[var(--hw-fg-muted)]">
        <span className="font-semibold">{t.recipeDetail.youKnow}</span>
        {signal}
      </p>
    </div>
  );
}
