"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  hasPdfPassAccess,
  hasRecipeAccess,
  hasVolumeAccess,
  type Entitlements,
} from "@/lib/membership";
import { membershipText } from "@/lib/membership-i18n";

interface Props {
  /** 所需权益类型 */
  require: "recipe" | "pdf" | "volume";
  volumeId?: string;
  locale: "en" | "zh";
  children: ReactNode;
  fallback?: ReactNode;
}

type State =
  | { loading: true }
  | { loading: false; access: boolean };

/** 通用会员门禁：客户端校验权益（服务端接口为最终权威，此处仅 UI 层） */
export function MembershipGate({
  require,
  volumeId,
  locale,
  children,
  fallback,
}: Props) {
  const t = membershipText(locale);
  const [state, setState] = useState<State>({ loading: true });

  useEffect(() => {
    let cancelled = false;
    fetch("/api/entitlements")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { entitlements?: Entitlements | null } | null) => {
        if (cancelled) return;
        const e = data?.entitlements ?? null;
        let access = false;
        if (require === "recipe") access = hasRecipeAccess(e);
        else if (require === "pdf") access = hasPdfPassAccess(e);
        else if (require === "volume" && volumeId)
          access = hasVolumeAccess(e, volumeId);
        setState({ loading: false, access });
      })
      .catch(() => {
        if (!cancelled) setState({ loading: false, access: false });
      });
    return () => {
      cancelled = true;
    };
  }, [require, volumeId]);

  if (state.loading) return null;

  if (state.access) return <>{children}</>;

  if (fallback) return <>{fallback}</>;

  return (
    <div className="rounded-xl border border-dashed border-[var(--hw-border)] bg-[var(--hw-bg-soft)] p-6 text-center">
      <p className="text-sm font-semibold text-[var(--hw-fg)]">{t.gateTitle}</p>
      <p className="mt-1 text-xs text-[var(--hw-fg-muted)]">{t.gateDesc}</p>
      <a
        href={`/${locale}/pricing`}
        className="mt-4 inline-block rounded-lg bg-[var(--hw-ginger)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
      >
        {t.gateCta}
      </a>
    </div>
  );
}
