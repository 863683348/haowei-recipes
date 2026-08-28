import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

/** 汤羹枢纽页 — 收拢中式汤品菜谱，聚合 "chinese soup" 长尾流量 */
const SOUP_SLUGS = ["egg-drop-soup", "tomato-egg-drop-soup", "winter-melon-soup"];

const SOUP_BLOG_SLUGS: string[] = [];

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const isZh = loc === "zh";
  return {
    title: isZh
      ? "中式汤品食谱合集（蛋花汤、番茄蛋花汤、冬瓜排骨汤等）| HǎoWèi 好味"
      : "Chinese Soup Recipes: Egg Drop, Winter Melon Rib Soup & More | HǎoWèi 好味",
    description: isZh
      ? "一锅好汤暖全家：紫菜蛋花汤、番茄蛋花汤、冬瓜排骨汤等中式家常汤品做法，附分步状态与火候参考。"
      : "Comforting Chinese soups for home cooks: seaweed egg drop soup, tomato egg drop soup, winter melon pork rib soup — with step-by-step visual states and heat guidance.",
    alternates: pageAlternates("/recipes/soups", loc),
  };
}

export default async function SoupsHubPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const dishRecipes = SOUP_SLUGS.map(getRecipeBySlug).filter(
    (r): r is NonNullable<typeof r> => Boolean(r)
  );
  const hubUrl = absoluteUrl(localizePath("/recipes/soups", loc));

  // BreadcrumbList + CollectionPage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isZh ? "中式汤品食谱合集" : "Chinese Soup Recipes",
    description: isZh
      ? "一锅好汤暖全家的中式汤品食谱合集：蛋花汤、冬瓜排骨汤等。"
      : "A collection of comforting Chinese soup recipes, from egg drop soup to winter melon rib soup.",
    url: hubUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: dishRecipes.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: isZh ? r.titleZh : r.titleEn,
        url: absoluteUrl(localizePath(`/recipes/${r.slug}`, loc)),
      })),
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isZh ? "首页" : "Home", item: absoluteUrl(localizePath("/", loc)) },
      { "@type": "ListItem", position: 2, name: isZh ? "全部菜谱" : "All recipes", item: absoluteUrl(localizePath("/recipes", loc)) },
      { "@type": "ListItem", position: 3, name: isZh ? "汤羹" : "Soups", item: hubUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-[var(--hw-fg-muted)]">
          <Link href={localizePath("/", loc)} className="hover:underline">
            {isZh ? "首页" : "Home"}
          </Link>
          <span className="mx-1">/</span>
          <Link href={localizePath("/recipes", loc)} className="hover:underline">
            {isZh ? "全部菜谱" : "All recipes"}
          </Link>
          <span className="mx-1">/</span>
          <span>{isZh ? "汤羹" : "Soups"}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl font-semibold text-[var(--hw-fg)] sm:text-4xl">
            {isZh ? "中式汤品食谱合集" : "Chinese Soup Recipes"}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--hw-fg-muted)]">
            {isZh
              ? "蛋花汤、番茄蛋花汤、冬瓜排骨汤——中式汤品的诀窍不在久炖，而在火候与食材顺序。这一页的家常汤谱，15 分钟到一锅老火汤都有。"
              : "Egg drop soup, tomato egg drop soup, winter melon pork rib soup — great Chinese soup is about timing and ingredient order, not hours of boiling. From 15-minute bowls to slow-simmered classics."}
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "汤品菜谱" : "Soup Recipes"}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "汤品基础：先读这几篇" : "Learn the Basics First"}
          </h2>
          {SOUP_BLOG_SLUGS.length > 0 ? (
            <ul className="space-y-2">
              {SOUP_BLOG_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link href={localizePath(`/blog/${slug}`, loc)} className="text-[var(--hw-accent)] hover:underline">
                    {slug}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[var(--hw-fg-muted)]">
              {isZh
                ? "想看更多汤品技巧？访问我们的"
                : "Want more soup tips? Visit our "}
              <Link href={localizePath("/blog", loc)} className="text-[var(--hw-accent)] hover:underline">
                {isZh ? "烹饪博客" : "cooking blog"}
              </Link>
              。
            </p>
          )}
        </section>
      </main>
    </>
  );
}
