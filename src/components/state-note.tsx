"use client";

import type { StateNote } from "@/lib/types";
import { useI18n } from "@/i18n/provider";
import { FireIcon, ClockIcon } from "@/components/icons";

/**
 * R-03 火候状态可视化：每个"看状态"步骤的状态描述 + 时间参考 + 判断信号
 *
 * 双语标准（docs/spec.md R-03）：stateNote 备注必须中英双语对照显示——
 * - visual / timeRef / signal 为英文
 * - visualZh / timeRefZh / signalZh 为中文
 * - 同屏显示中英两行；某侧缺失时降级为另一侧，避免空白
 */
export function StateNote({ state }: { state: StateNote }) {
  const { t } = useI18n();
  const heatLabels = t.stateNote.heatLabels;

  // 中英双语对照（中文主行 + 英文副行）
  const zhVisual = state.visualZh ?? state.visual;
  const zhSignal = state.signalZh ?? state.signal;
  const timeRefLabel =
    state.timeRefZh && state.timeRef && state.timeRefZh !== state.timeRef
      ? `${state.timeRefZh} · ${state.timeRef}`
      : (state.timeRefZh ?? state.timeRef);

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
        {timeRefLabel && (
          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--hw-scallion)]/12 px-2.5 py-0.5 text-xs font-medium text-[var(--hw-scallion)]">
            <ClockIcon className="h-3 w-3" /> {timeRefLabel}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-[var(--hw-fg)]">
        <span className="font-semibold">{t.recipeDetail.visual}</span>
        <span className="block">{zhVisual}</span>
        {state.visual && state.visual !== zhVisual && (
          <span className="block text-[var(--hw-fg-muted)]">{state.visual}</span>
        )}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-[var(--hw-fg)]">
        <span className="font-semibold">{t.recipeDetail.youKnow}</span>
        <span className="block">{zhSignal}</span>
        {state.signal && state.signal !== zhSignal && (
          <span className="block text-[var(--hw-fg-muted)]">{state.signal}</span>
        )}
      </p>
    </div>
  );
}
