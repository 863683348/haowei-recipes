"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "hw-theme";

/** 亮黑主题切换（bootstrap 已在根 layout 内联执行，这里只负责切换与持久化） */
export function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem(KEY, next ? "dark" : "light");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return { dark, toggle };
}
