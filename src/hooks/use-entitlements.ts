"use client";

import { useCallback, useEffect, useState } from "react";
import type { Entitlements } from "@/lib/membership";

export interface SessionUser {
  id: string;
  email: string;
  name: string;
}

interface ApiResponse {
  user: SessionUser | null;
  entitlements: Entitlements | null;
}

export interface UseEntitlementsResult {
  loading: boolean;
  user: SessionUser | null;
  entitlements: Entitlements | null;
  refresh: () => void;
}

/**
 * 客户端权益 Hook：封装 /api/entitlements（登录态 + 双维度权益）。
 * 服务端接口为最终权威，本 Hook 仅用于 UI 层。
 */
export function useEntitlements(): UseEntitlementsResult {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ApiResponse>({ user: null, entitlements: null });

  const refresh = useCallback(() => {
    setLoading(true);
    fetch("/api/entitlements")
      .then((res) => (res.ok ? (res.json() as Promise<ApiResponse>) : null))
      .then((d) => {
        if (d) setData({ user: d.user, entitlements: d.entitlements });
      })
      .catch(() => {
        // 网络/服务异常：保持空态，由门禁 fallback 兜底
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { loading, user: data.user, entitlements: data.entitlements, refresh };
}
