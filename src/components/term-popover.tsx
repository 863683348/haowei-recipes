"use client";

import { useState } from "react";
import { getTermByKey } from "@/data/terms";

/**
 * R-01 英中术语对照：悬浮/点击显示术语卡片
 * 用法：<TermPopover termKey="light-soy-sauce">生抽</TermPopover>
 */
export function TermPopover({
  termKey,
  children,
}: {
  termKey: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const term = getTermByKey(termKey);

  if (!term) return <>{children}</>;

  return (
    <span
      className="relative inline-flex cursor-help items-baseline"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      role="button"
      aria-label={`${term.en} — ${term.definition}`}
    >
      <span className="border-b border-dashed border-[var(--hw-ginger)] text-[var(--hw-soy)] dark:text-[var(--hw-soy)] hover:bg-[rgba(199,123,46,0.12)]">
        {children}
      </span>
      {open && (
        <span className="absolute bottom-full left-1/2 z-20 mb-2 w-64 -translate-x-1/2 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] p-3 text-left shadow-lg">
          <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--hw-ginger)]">
            {term.en}
          </span>
          <span className="mt-0.5 block text-sm text-[var(--hw-fg-muted)]">
            {term.zh} · {term.pinyin}
          </span>
          <span className="mt-1.5 block text-sm leading-snug text-[var(--hw-fg)]">
            {term.definition}
          </span>
          {term.quantEquivalent && (
            <span className="mt-1.5 block text-xs font-medium text-[var(--hw-scallion)]">
              ⚖ {term.quantEquivalent}
            </span>
          )}
          {term.substituteHint && (
            <span className="mt-1 block text-xs text-[var(--hw-fg-muted)]">
              🔁 {term.substituteHint}
            </span>
          )}
        </span>
      )}
    </span>
  );
}
