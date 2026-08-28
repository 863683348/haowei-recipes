import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { filterRecipes, cuisineOptions } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import type { DietLabel } from "@/lib/types";

export const dynamic = "force-static";

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    cuisine?: string;
    difficulty?: string;
    time?: string;
    diet?: string;
    tag?: string;
    q?: string;
    page?: string;
  }>;
}

const PAGE_SIZE = 24;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const t = getDictionary(loc);
  return {
    title: t.metadata.recipesTitle,
    description: t.metadata.recipesDesc,
    alternates: pageAlternates("/recipes", loc),
  };
}

export default async function RecipesPage({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const sp = await searchParams;
  const filter = {
    cuisine: sp.cuisine,
    difficulty: sp.difficulty,
    maxTime: sp.time ? Number(sp.time) : undefined,
    diet: (sp.diet ?? "") === "" ? undefined : (sp.diet as DietLabel),
    tag: sp.tag,
    query: sp.q,
  };
  const list = filterRecipes(filter);
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const page = Math.min(
    Math.max(1, Number(sp.page) || 1),
    totalPages
  );
  const pageItems = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const difficultyOptions = [
    { value: "easy", label: t.common.difficulty.easy },
    { value: "medium", label: t.common.difficulty.medium },
    { value: "hard", label: t.common.difficulty.hard },
  ];

  /** 分页链接（保留全部筛选参数） */
  function pageHref(p: number): string {
    const sp2 = new URLSearchParams();
    if (sp.cuisine) sp2.set("cuisine", sp.cuisine);
    if (sp.difficulty) sp2.set("difficulty", sp.difficulty);
    if (sp.time) sp2.set("time", sp.time);
    if (sp.diet) sp2.set("diet", sp.diet);
    if (sp.tag) sp2.set("tag", sp.tag);
    if (sp.q) sp2.set("q", sp.q);
    if (p > 1) sp2.set("page", String(p));
    const qs = sp2.toString();
    return localizePath(`/recipes${qs ? `?${qs}` : ""}`, loc);
  }

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
      if (page > 3) btns.push("...");
      addRange(Math.max(2, page - 1), Math.min(totalPages - 1, page + 1));
      if (page < totalPages - 2) btns.push("...");
      btns.push(totalPages);
    }
    return btns;
  }

  // ItemList JSON-LD（列表页结构化数据，只含当前页）
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.metadata.recipesTitle,
    itemListElement: pageItems.map((r, i) => ({
      "@type": "ListItem",
      position: (page - 1) * PAGE_SIZE + i + 1,
      url: absoluteUrl(localizePath(`/recipes/${r.slug}`, loc)),
      name: isZh ? r.titleZh : r.titleEn,
    })),
  };

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

      {/* 筛选条 */}
      <form className="mt-6 flex flex-wrap items-center gap-2" method="get">
        <select
          name="cuisine"
          defaultValue={sp.cuisine ?? ""}
          className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3 py-2 text-sm text-[var(--hw-fg)]"
        >
          <option value="">{t.recipes.allCuisines}</option>
          {cuisineOptions.map((c) => (
            <option key={c} value={c}>
              {isZh ? c : getCuisineEn(c)}
            </option>
          ))}
        </select>
        <select
          name="difficulty"
          defaultValue={sp.difficulty ?? ""}
          className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3 py-2 text-sm text-[var(--hw-fg)]"
        >
          <option value="">{t.recipes.anyDifficulty}</option>
          {difficultyOptions.map((d) => (
            <option key={d.value} value={d.value}>{d.label}</option>
          ))}
        </select>
        <select
          name="time"
          defaultValue={sp.time ?? ""}
          className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3 py-2 text-sm text-[var(--hw-fg)]"
        >
          <option value="">{t.recipes.anyTime}</option>
          {t.recipes.timeOptions.map((time) => (
            <option key={time.value} value={time.value}>{time.label}</option>
          ))}
        </select>
        <select
          name="diet"
          defaultValue={sp.diet ?? ""}
          className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3 py-2 text-sm text-[var(--hw-fg)]"
        >
          <option value="">{t.recipes.anyDiet}</option>
          <option value="vegetarian">{t.common.dietary.vegetarian}</option>
          <option value="none">{t.recipes.noRestriction}</option>
        </select>
        <input
          name="q"
          defaultValue={sp.q ?? ""}
          placeholder={t.recipes.search}
          className="min-w-32 flex-1 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3 py-2 text-sm text-[var(--hw-fg)] outline-none focus:border-[var(--hw-ginger)]"
        />
        <button
          type="submit"
          className="rounded-lg bg-[var(--hw-soy)] px-4 py-2 text-sm font-semibold text-white dark:bg-[var(--hw-ginger)]"
        >
          {t.recipes.filter}
        </button>
        {Object.keys(filter).some((k) => filter[k as keyof typeof filter]) && (
          <Link
            href={localizePath("/recipes", loc)}
            className="text-sm font-medium text-[var(--hw-fg-muted)] hover:text-[var(--hw-ginger)]"
          >
            {t.recipes.reset}
          </Link>
        )}
      </form>

      {list.length === 0 ? (
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

          {/* 分页导航 */}
          {totalPages > 1 && (
            <nav
              aria-label="Pagination"
              className="mt-10 flex flex-wrap items-center justify-center gap-2"
            >
              {page > 1 && (
                <Link
                  href={pageHref(page - 1)}
                  className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3.5 py-2 text-sm font-medium text-[var(--hw-fg)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
                >
                  ← {t.recipes.prev}
                </Link>
              )}
              {pageButtons().map((b, i) =>
                b === "..." ? (
                  <span key={`e${i}`} className="px-1 text-[var(--hw-fg-muted)]">
                    …
                  </span>
                ) : (
                  <Link
                    key={b}
                    href={pageHref(b)}
                    aria-current={b === page ? "page" : undefined}
                    className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                      b === page
                        ? "bg-[var(--hw-soy)] text-white dark:bg-[var(--hw-ginger)]"
                        : "border border-[var(--hw-border)] bg-[var(--hw-card)] text-[var(--hw-fg)] hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
                    }`}
                  >
                    {b}
                  </Link>
                )
              )}
              {page < totalPages && (
                <Link
                  href={pageHref(page + 1)}
                  className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3.5 py-2 text-sm font-medium text-[var(--hw-fg)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
                >
                  {t.recipes.next} →
                </Link>
              )}
              <span className="ml-2 text-sm text-[var(--hw-fg-muted)]">
                {t.recipes.pageOf
                  .replace("{page}", String(page))
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
