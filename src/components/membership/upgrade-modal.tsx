"use client";

import { useEffect, useState } from "react";
import { membershipText } from "@/lib/membership-i18n";

/**
 * 轻量升级弹窗：任何组件调用 openUpgrade(planCode) 即可弹出；
 * 在页面内挂载 <UpgradeModalHost locale=.../> 接收触发。
 */
type Listener = (planCode: string | null) => void;

let current: string | null = null;
const listeners = new Set<Listener>();

export function openUpgrade(planCode: string) {
  current = planCode;
  listeners.forEach((l) => l(current));
}

export function UpgradeModalHost({ locale }: { locale: "en" | "zh" }) {
  const t = membershipText(locale);
  const [plan, setPlan] = useState<string | null>(null);

  useEffect(() => {
    const listener: Listener = (p) => setPlan(p);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  if (!plan) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      onClick={() => openUpgrade("")}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
          {t.gateTitle}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--hw-fg-muted)]">
          {t.gateDesc}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <a
            href={`/${locale}/pricing`}
            className="rounded-lg bg-[var(--hw-ginger)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {t.gateCta}
          </a>
          <button
            type="button"
            onClick={() => openUpgrade("")}
            className="rounded-lg border border-[var(--hw-border)] px-4 py-2 text-sm text-[var(--hw-fg-muted)] transition hover:text-[var(--hw-fg)]"
          >
            {locale === "zh" ? "关闭" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
