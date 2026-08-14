import type { StateNote } from "@/lib/types";

const heatLabels: Record<string, string> = {
  low: "Low heat",
  "medium-low": "Medium-low",
  medium: "Medium heat",
  "medium-high": "Medium-high",
  high: "High heat",
};

/**
 * R-03 火候状态可视化：每个"看状态"步骤的状态描述 + 时间参考 + 判断信号
 */
export function StateNote({ state }: { state: StateNote }) {
  return (
    <div className="mt-3 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg-soft)] p-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-[var(--hw-ginger)]/15 px-2.5 py-0.5 text-xs font-semibold text-[var(--hw-ginger)]">
          🔍 Look for
        </span>
        {state.heat && (
          <span className="rounded-full bg-[var(--hw-soy)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--hw-fg-muted)]">
            🔥 {heatLabels[state.heat]}
          </span>
        )}
        {state.timeRef && (
          <span className="rounded-full bg-[var(--hw-scallion)]/12 px-2.5 py-0.5 text-xs font-medium text-[var(--hw-scallion)]">
            ⏱ {state.timeRef}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-[var(--hw-fg)]">
        <span className="font-semibold">Visual: </span>
        {state.visual}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-[var(--hw-fg-muted)]">
        <span className="font-semibold">You know it's right when: </span>
        {state.signal}
      </p>
    </div>
  );
}
