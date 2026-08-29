import type { Metadata } from "next";
import { RecipesBrowser } from "@/components/recipes-browser";
import { recipes as allRecipes, cuisineOptions } from "@/data/recipes";
import { toSearchItem } from "@/lib/recipe-search";
import { isLocale, pageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
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

export default async function RecipesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const searchItems = allRecipes.map(toSearchItem);
  return <RecipesBrowser recipes={searchItems} cuisines={cuisineOptions} initialPage={1} />;
}
