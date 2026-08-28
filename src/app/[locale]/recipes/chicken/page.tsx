import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

/** 鸡肉枢纽页 — 收拢鸡肉菜谱（炒/炸/炖/凉拌），聚合 "chinese chicken recipes" 大词 */
const CHICKEN_SLUGS = [
  "cashew-chicken",
  "coke-chicken-wings",
  "hongshao-chicken",
  "huangmen-chicken",
  "kou-shui-chicken",
  "kung-pao-chicken",
  "pan-fried-chicken",
  "soy-chicken-wings",
  "ge-le-shan-lazi-chicken",
  "tengjiao-chicken",
];

const CHICKEN_BLOG_SLUGS = ["marinating-meat-chinese-way"];

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
      ? "鸡肉食谱合集（宫保鸡丁、可乐鸡翅、辣子鸡等10道）| HǎoWèi 好味"
      : "Chinese Chicken Recipes: Kung Pao, Wings, Lazi Ji & 7 More | HǎoWèi 好味",
    description: isZh
      ? "10 道中式鸡肉家常做法：宫保鸡丁、可乐鸡翅、红烧鸡腿、歌乐山辣子鸡、藤椒鸡……炒、炸、炖、凉拌全都有，附腌肉要点与分步状态图。"
      : "10 Chinese chicken recipes: kung pao, coke wings, braised legs, ge le shan la zi ji, tengjiao chicken — stir-fried, fried, braised and cold. With marinating tips and step-by-step visual states.",
    alternates: pageAlternates("/recipes/chicken", loc),
  };
}

export default async function ChickenHubPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const dishRecipes = CHICKEN_SLUGS.map(getRecipeBySlug).filter(
    (r): r is NonNullable<typeof r> => Boolean(r)
  );
  const hubUrl = absoluteUrl(localizePath("/recipes/chicken", loc));

  // BreadcrumbList + CollectionPage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isZh ? "中式鸡肉食谱合集" : "Chinese Chicken Recipes",
    description: isZh
      ? "10 道中式鸡肉家常做法：宫保鸡丁、可乐鸡翅、辣子鸡等。"
      : "A collection of 10 Chinese chicken recipes, from kung pao chicken to la zi ji.",
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
      { "@type": "ListItem", position: 3, name: isZh ? "鸡肉" : "Chicken", item: hubUrl },
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
          <span>{isZh ? "鸡肉" : "Chicken"}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl font-semibold text-[var(--hw-fg)] sm:text-4xl">
            {isZh ? "中式鸡肉食谱合集" : "Chinese Chicken Recipes"}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--hw-fg-muted)]">
            {isZh
              ? "鸡胸、鸡腿、鸡翅、整鸡——中式做法几乎都能驾驭：宫保的糊辣、可乐的焦糖甜、辣子鸡的干香、藤椒鸡的麻鲜。这一页把 10 种家常做法收在一起，腌肉、火候、调味一次讲透。"
              : "Breast, thigh, wing, whole bird — Chinese cooking does them all: kung pao's numbing chili, coke wings' caramel sweetness, la zi ji's dry crunch, tengjiao's fresh mala. Ten home recipes, one page, with marinating and heat guidance."}
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "鸡肉菜谱" : "Chicken Recipes"}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "鸡肉基础：先读这几篇" : "Learn the Basics First"}
          </h2>
          {CHICKEN_BLOG_SLUGS.length > 0 ? (
            <ul className="space-y-2">
              {CHICKEN_BLOG_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link href={localizePath(`/blog/${slug}`, loc)} className="text-[var(--hw-accent)] hover:underline">
                    {slug === "marinating-meat-chinese-way"
                      ? isZh
                        ? "中式腌肉：顺序、时间与为什么重要"
                        : "Marinating Meat the Chinese Way"
                      : slug}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[var(--hw-fg-muted)]">
              {isZh
                ? "想看更多鸡肉技巧？访问我们的"
                : "Want more chicken tips? Visit our "}
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
