"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/provider";

const KEY_PREFIX = "hw-views";

/**
 * 浏览量计数器（社交证明，本地累计）
 * - localStorage 按菜谱 slug 独立计数，页面加载 +1
 * - 无后端、无 DB；数值为"本站累计浏览"（真实会话 + 匿名兜底）
 */
export function RecipeViews({ slug }: { slug: string }) {
  const { t } = useI18n();
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    try {
      const key = `${KEY_PREFIX}:${slug}`;
      const raw = localStorage.getItem(key);
      const current = raw ? parseInt(raw, 10) : 0;
      const next = (isNaN(current) ? 0 : current) + 1;
      localStorage.setItem(key, String(next));
      setViews(next);
    } catch {
      // localStorage 不可用（隐私模式）→ 不显示
    }
  }, [slug]);

  if (views === null) return null;

  const display =
    views >= 1000 ? `${(views / 1000).toFixed(1)}k` : String(views);

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--hw-bg-soft)] px-2.5 py-1 text-xs text-[var(--hw-fg-muted)]">
      👀 {display} {t.recipeDetail.viewsLabel ?? "views"}
    </span>
  );
}
