"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { RecipeCard } from "@/components/recipe-card";
import { useI18n } from "@/i18n/provider";
import { localizePath, absoluteUrl } from "@/i18n/config";
import { matchSearchItem, type RecipeSearchItem } from "@/lib/recipe-search";

const PAGE_SIZE = 24;

interface Props {
  recipes: RecipeSearchItem[];
  cuisines: string[];
  /** SSR/SSG 首屏页码（来自 /recipes/page/[page] 路由），客户端交互不跳路由 */
  initialPage?: number;
}

export function RecipesBrowser({ recipes, cuisines, initialPage = 1 }: Props) {
  const { locale, t } = useI18n();
  const isZh = locale === "zh";

  const [q, setQ] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [time, setTime] = useState("");
  const [diet, setDiet] = useState("");
  const [curPage, setCurPage] = useState(initialPage);

  // 跳过首屏 effect，保留 SSG 路由传入的 initialPage；用户改动筛选后才回到第 1 页
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setCurPage(1);
  }, [q, cuisine, difficulty, time, diet]);

  const filter = useMemo(
    () => ({
      q,
      cuisine: cuisine || undefined,
      difficulty: difficulty || undefined,
      maxTime: time ? Number(time) : undefined,
      diet: diet || undefined,
    }),
    [q, cuisine, difficulty, time, diet]
  );

  const filtered = useMemo(
    () => recipes.filter((r) => matchSearchItem(r, filter)),
    [recipes, filter]
  );

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(Math.max(1, curPage), totalPages);
  const pageItems = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const difficultyOptions = [
    { value: "easy", label: t.common.difficulty.easy },
    { value: "medium", label: t.common.difficulty.medium },
    { value: "hard", label: t.common.difficulty.hard },
  ];

  const hasFilter = Boolean(q || cuisine || difficulty || time || diet);

  // 分页按钮数组（1 … cur-1 cur cur+1 … last）
  function pageButtons(): (number | "...")[] {
    const btns: (number | "...")[] = [];
    const addRange = (a: number, b: number) => {
      for (let i = a; i <= b; i++) btns.push(i);
    };
    if (totalPages <= 7) {
      addRange(1, totalPages);
    } else {
      btns.push(1);
      if (safePage > 3) btns.push("...");
      addRange(Math.max(2, safePage - 1), Math.min(totalPages - 1, safePage + 1));
      if (safePage < totalPages - 2) btns.push("...");
      btns.push(totalPages);
    }
    return btns;
  }

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.metadata.recipesTitle,
    itemListElement: pageItems.map((r, i) => ({
      "@type": "ListItem",
      position: (safePage - 1) * PAGE_SIZE + i + 1,
      url: absoluteUrl(localizePath(`/recipes/${r.slug}`, locale)),
      name: isZh ? r.titleZh : r.titleEn,
    })),
  };

  const inputCls =
    "min-w-32 flex-1 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3 py-2 text-sm text-[var(--hw-fg)] outline-none focus:border-[var(--hw-ginger)]";
  const selectCls =
    "rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3 py-2 text-sm text-[var(--hw-fg)]";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">{t.recipes.title}</h1>
        <p className="mt-2 text-[var(--hw-fg-muted)]">
          {t.recipes.subtitle
            .replace("{n}", String(total))
            .replace("{s}", total === 1 ? "" : "s")}
        </p>

        {/* 筛选 + 实时搜索条 */}
        <form
          className="mt-6 flex flex-wrap items-center gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            name="q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.recipes.search}
            aria-label={t.recipes.search}
            className={inputCls}
          />
          <select
            name="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className={selectCls}
          >
            <option value="">{t.recipes.allCuisines}</option>
            {cuisines.map((c) => (
              <option key={c} value={c}>
                {isZh ? c : getCuisineEn(c)}
              </option>
            ))}
          </select>
          <select
            name="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className={selectCls}
          >
            <option value="">{t.recipes.anyDifficulty}</option>
            {difficultyOptions.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
          <select
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={selectCls}
          >
            <option value="">{t.recipes.anyTime}</option>
            {t.recipes.timeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <select
            name="diet"
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            className={selectCls}
          >
            <option value="">{t.recipes.anyDiet}</option>
            <option value="vegetarian">{t.common.dietary.vegetarian}</option>
            <option value="none">{t.recipes.noRestriction}</option>
          </select>
          {hasFilter && (
            <Link
              href={localizePath("/recipes", locale)}
              className="text-sm font-medium text-[var(--hw-fg-muted)] hover:text-[var(--hw-ginger)]"
            >
              {t.recipes.reset}
            </Link>
          )}
        </form>

        {total === 0 ? (
          <p className="mt-10 rounded-xl border border-dashed border-[var(--hw-border)] p-8 text-center text-[var(--hw-fg-muted)]">
            {t.recipes.empty}
          </p>
        ) : (
          <>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((r) => (
                <RecipeCard key={r.slug} recipe={r} />
              ))}
            </div>

            {/* 客户端分页导航（实时交互，不跳路由） */}
            {totalPages > 1 && (
              <nav
                aria-label="Pagination"
                className="mt-10 flex flex-wrap items-center justify-center gap-2"
              >
                {safePage > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurPage(safePage - 1)}
                    className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3.5 py-2 text-sm font-medium text-[var(--hw-fg)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
                  >
                    ← {t.recipes.prev}
                  </button>
                )}
                {pageButtons().map((b, i) =>
                  b === "..." ? (
                    <span key={`e${i}`} className="px-1 text-[var(--hw-fg-muted)]">
                      …
                    </span>
                  ) : (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setCurPage(b)}
                      aria-current={b === safePage ? "page" : undefined}
                      className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                        b === safePage
                          ? "bg-[var(--hw-soy)] text-white dark:bg-[var(--hw-ginger)]"
                          : "border border-[var(--hw-border)] bg-[var(--hw-card)] text-[var(--hw-fg)] hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
                      }`}
                    >
                      {b}
                    </button>
                  )
                )}
                {safePage < totalPages && (
                  <button
                    type="button"
                    onClick={() => setCurPage(safePage + 1)}
                    className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3.5 py-2 text-sm font-medium text-[var(--hw-fg)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
                  >
                    {t.recipes.next} →
                  </button>
                )}
                <span className="ml-2 text-sm text-[var(--hw-fg-muted)]">
                  {t.recipes.pageOf
                    .replace("{page}", String(safePage))
                    .replace("{pages}", String(totalPages))
                    .replace("{total}", String(total))}
                </span>
              </nav>
            )}
          </>
        )}
      </main>
    </>
  );
}

/** 菜系中文 → 英文（数据层 cuisine 为中文，英文界面显示 cuisineEn） */
function getCuisineEn(cuisine: string): string {
  const map: Record<string, string> = {
    家常菜: "Home-style",
    川菜: "Sichuan",
    粤菜: "Cantonese",
    北方小吃: "Northern snack",
    "粤菜 / 家常": "Cantonese / Home-style",
  };
  return map[cuisine] ?? cuisine;
}
