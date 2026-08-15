"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { PlanCode } from "@/lib/membership";
import { membershipText } from "@/lib/membership-i18n";

interface Props {
  planCode: PlanCode;
  volumeId?: string;
  locale: "en" | "zh";
  label?: string;
  className?: string;
}

/** 发起购买：POST /api/checkout → 跳转支付渠道（mock 或 waffo） */
export function CheckoutButton({
  planCode,
  volumeId,
  locale,
  label,
  className,
}: Props) {
  const t = membershipText(locale);
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onClick() {
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planCode, volumeId, locale }),
      });
      if (res.status === 401) {
        router.push(`/${locale}/account?signin=1&next=/pricing`);
        return;
      }
      const data = (await res.json().catch(() => ({}))) as {
        url?: string;
        error?: string;
      };
      if (!res.ok || !data.url) {
        setError(t.genericError);
        setBusy(false);
        return;
      }
      window.location.assign(data.url);
    } catch {
      setError(t.genericError);
      setBusy(false);
    }
  }

  return (
    <span className={className}>
      <button
        type="button"
        onClick={onClick}
        disabled={busy}
        className="rounded-lg bg-[var(--hw-ginger)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
      >
        {busy ? "…" : label ?? t.upgrade}
      </button>
      {error && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </span>
  );
}
