import type { Metadata } from "next";
import { RecipesBrowser } from "@/components/recipes-browser";
import { recipes as allRecipes, cuisineOptions } from "@/data/recipes";
import { toSearchItem } from "@/lib/recipe-search";
import { isLocale, pageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

const PAGE_SIZE = 24;

/** 静态生成所有分页（按当前菜谱总数计算页数；第 1 页由 /recipes 处理） */
export function generateStaticParams() {
  const total = allRecipes.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const params: { page: string }[] = [];
  for (let p = 2; p <= totalPages; p++) params.push({ page: String(p) });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; page: string }> }): Promise<Metadata> {
  const { locale, page } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const p = Math.max(1, Number(page) || 1);
  return {
    title: `${t.metadata.recipesTitle} — Page ${p}`,
    description: t.metadata.recipesDesc,
    alternates: pageAlternates(`/recipes/page/${p}`, loc),
    robots: { index: true, follow: true },
  };
}

export default async function RecipesPagePaged({ params }: { params: Promise<{ locale: string; page: string }> }) {
  const { locale, page } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const p = Math.max(1, Number(page) || 1);
  const searchItems = allRecipes.map(toSearchItem);
  return <RecipesBrowser recipes={searchItems} cuisines={cuisineOptions} initialPage={p} />;
}
