"use client";

import { useEffect, useState, type ReactNode } from "react";
import { membershipText } from "@/lib/membership-i18n";

interface FullIngredient {
  id: string;
  name: string;
  amountMetric: string;
  amountUS: string;
  note?: string;
}

interface FullStep {
  text: string;
  tip?: string;
  stateNote?: { visual?: string; timeRef?: string; signal?: string };
}

interface FullRecipe {
  slug: string;
  title: string;
  story?: string;
  versionNote?: string;
  ingredients: FullIngredient[];
  steps: FullStep[];
  tips: string[];
}

interface Props {
  slug: string;
  locale: "en" | "zh";
  /** 未解锁时的兜底（缺省为锁定占位） */
  fallback?: ReactNode;
}

/**
 * 菜谱完整内容加载器（会员门禁用）：
 * 调用 /api/recipe/[slug]/full 获取完整步骤/用料并渲染；
 * 渐进式门禁下（FREE_RECIPE_LIMIT 内）对所有人开放，超出需菜谱会员权益。
 * Phase 2 集成时直接放入菜谱详情页预览区即可。
 */
export function RecipeContent({ slug, locale, fallback }: Props) {
  const t = membershipText(locale);
  const [content, setContent] = useState<FullRecipe | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "locked" | "error">(
    "loading"
  );

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    fetch(`/api/recipe/${encodeURIComponent(slug)}/full?locale=${locale}`)
      .then(async (res) => {
        if (res.status === 403 || res.status === 401) {
          if (!cancelled) setStatus("locked");
          return null;
        }
        if (!res.ok) {
          if (!cancelled) setStatus("error");
          return null;
        }
        const data = (await res.json()) as FullRecipe;
        if (!cancelled) {
          setContent(data);
          setStatus("ready");
        }
        return null;
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [slug, locale]);

  if (status === "loading") return null;

  if (status === "locked") {
    return (
      fallback ?? (
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
      )
    );
  }

  if (status === "error" || !content) {
    return (
      <p className="text-sm text-[var(--hw-fg-muted)]">{t.genericError}</p>
    );
  }

  return (
    <div className="space-y-6">
      {content.versionNote && (
        <p className="text-sm text-[var(--hw-fg-muted)]">{content.versionNote}</p>
      )}
      {content.story && (
        <p className="text-sm leading-relaxed text-[var(--hw-fg-muted)]">
          {content.story}
        </p>
      )}

      <section>
        <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
          {locale === "zh" ? "食材" : "Ingredients"}
        </h3>
        <ul className="mt-2 divide-y divide-[var(--hw-border)]">
          {content.ingredients.map((i) => (
            <li key={i.id} className="flex items-baseline justify-between gap-3 py-2 text-sm">
              <span className="text-[var(--hw-fg)]">{i.name}</span>
              <span className="shrink-0 text-[var(--hw-fg-muted)]">
                {i.amountMetric} · {i.amountUS}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
          {locale === "zh" ? "步骤" : "Steps"}
        </h3>
        <ol className="mt-2 space-y-4">
          {content.steps.map((s, idx) => (
            <li key={idx} className="border-l-2 border-[var(--hw-border)] pl-4">
              <p className="text-sm leading-relaxed text-[var(--hw-fg)]">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--hw-soy)] text-xs font-bold text-white dark:bg-[var(--hw-ginger)]">
                  {idx + 1}
                </span>
                {s.text}
              </p>
              {s.stateNote?.visual && (
                <p className="mt-1 pl-8 text-xs text-[var(--hw-fg-muted)]">
                  {s.stateNote.visual}
                  {s.stateNote.timeRef ? ` · ${s.stateNote.timeRef}` : ""}
                </p>
              )}
              {s.tip && (
                <p className="mt-1 pl-8 text-xs text-[var(--hw-ginger)]">{s.tip}</p>
              )}
            </li>
          ))}
        </ol>
      </section>

      {content.tips.length > 0 && (
        <section>
          <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
            {locale === "zh" ? "小贴士" : "Tips"}
          </h3>
          <ul className="mt-2 space-y-1.5">
            {content.tips.map((tip, i) => (
              <li key={i} className="text-sm text-[var(--hw-fg-muted)]">
                · {tip}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
