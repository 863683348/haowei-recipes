"use client";

import { useState } from "react";
import { flavorRules } from "@/data/flavor-adjust";
import type { FlavorRule } from "@/lib/types";

/**
 * R-06 个性化口味调整：选择辣/咸/油/素食等级 → 显示量化调整（前端规则，无 API）
 */
export function FlavorAdjuster() {
  const [selected, setSelected] = useState<Record<string, string>>({});

  const choose = (rule: FlavorRule, levelId: string) => {
    setSelected((prev) => ({ ...prev, [rule.key]: levelId }));
  };

  return (
    <div className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-5 shadow-sm">
      <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
        🌶️ Adjust to your taste
      </h3>
      <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">
        Pick a level and we'll show exactly how much to change — no more "适量".
      </p>

      <div className="mt-4 space-y-5">
        {flavorRules.map((rule) => (
          <div key={rule.id}>
            <p className="text-sm font-semibold text-[var(--hw-fg)]">{rule.label}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {rule.levels.map((level) => (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => choose(rule, level.id)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    selected[rule.key] === level.id
                      ? "border-[var(--hw-ginger)] bg-[var(--hw-ginger)]/15 text-[var(--hw-ginger)]"
                      : "border-[var(--hw-border)] text-[var(--hw-fg-muted)] hover:border-[var(--hw-ginger)]"
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>

            {/* 显示当前选择的量化调整 */}
            {selected[rule.key] &&
              (() => {
                const level = rule.levels.find((l) => l.id === selected[rule.key]);
                if (!level || level.adjustments.length === 0) return null;
                return (
                  <ul className="mt-2 space-y-1.5 rounded-lg bg-[var(--hw-bg-soft)] p-3">
                    {level.adjustments.map((adj, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 text-[var(--hw-scallion)]">✓</span>
                        <span className="text-[var(--hw-fg)]">
                          <span className="font-medium">{adj.label}:</span>{" "}
                          <span className="text-[var(--hw-ginger)]">{adj.from}</span>{" "}
                          → <span className="font-semibold">{adj.to}</span>
                          {adj.note && (
                            <span className="block text-xs text-[var(--hw-fg-muted)]">
                              {adj.note}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              })()}
          </div>
        ))}
      </div>
    </div>
  );
}
