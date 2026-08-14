"use client";

import { useCallback, useEffect, useState } from "react";

export type UnitPreference = "metric" | "us";

const KEY = "hw-unit";

/** 计量双轨偏好（公制 + 美制，localStorage 记忆，Spec §5） */
export function useUnitPreference() {
  const [unit, setUnit] = useState<UnitPreference>("metric");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "us" || saved === "metric") setUnit(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setUnit((prev) => {
      const next: UnitPreference = prev === "metric" ? "us" : "metric";
      try {
        localStorage.setItem(KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return { unit, toggle, setUnit };
}
