import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

/** 猪肉枢纽页 — 收拢猪肉菜谱（红烧/小炒/糖醋/蒸炖），聚合 "chinese pork recipes" 大词 */
const PORK_SLUGS = [
  "hongshao-pork",
  "twice-cooked-pork",
  "yu-xiang-pork",
  "sweet-sour-pork",
  "sweet-sour-ribs",
  "moo-shu-pork",
  "jing-jiang-pork",
  "pepper-pork",
  "home-style-pork",
  "meicai-kourou",
  "pork-cabbage-dumplings",
  "shui-zhu-pork-slices",
];

const PORK_BLOG_SLUGS = ["marinating-meat-chinese-way"];

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
      ? "猪肉食谱合集（红烧肉、回锅肉、糖醋里脊等12道）| HǎoWèi 好味"
      : "Chinese Pork Recipes: Hong Shao Rou, Twice-Cooked Pork & 10 More | HǎoWèi 好味",
    description: isZh
      ? "12 道中式猪肉家常做法：红烧肉、回锅肉、糖醋里脊、鱼香肉丝、京酱肉丝、梅菜扣肉……炒、烧、炖、蒸全都有，附腌肉要点与分步状态图。"
      : "12 Chinese pork recipes: hong shao rou, twice-cooked pork, sweet-and-sour ribs, yu-xiang pork, jing jiang pork, mei cai kou rou — stir-fried, braised, steamed. With marinating tips and step-by-step visual states.",
    alternates: pageAlternates("/recipes/pork", loc),
  };
}

export default async function PorkHubPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const isZh = loc === "zh";

  const dishRecipes = PORK_SLUGS.map(getRecipeBySlug).filter(
    (r): r is NonNullable<typeof r> => Boolean(r)
  );
  const hubUrl = absoluteUrl(localizePath("/recipes/pork", loc));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isZh ? "中式猪肉食谱合集" : "Chinese Pork Recipes",
    description: isZh
      ? "12 道中式猪肉家常做法：红烧肉、回锅肉、糖醋里脊等。"
      : "A collection of 12 Chinese pork recipes, from hong shao rou to twice-cooked pork.",
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
      { "@type": "ListItem", position: 3, name: isZh ? "猪肉" : "Pork", item: hubUrl },
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
          <span>{isZh ? "猪肉" : "Pork"}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl font-semibold text-[var(--hw-fg)] sm:text-4xl">
            {isZh ? "中式猪肉食谱合集" : "Chinese Pork Recipes"}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--hw-fg-muted)]">
            {isZh
              ? "五花肉、里脊、排骨、肉丝——中式做法各有章法：红烧肉炒糖色的火候、回锅肉先煮后炒的定型、糖醋里脊的脆壳、鱼香肉丝的上浆。这一页把 12 种家常做法收在一起，切法、腌肉、调味一次讲透。"
              : "Belly, tenderloin, ribs, shredded — Chinese cooking has a method for each cut: hong shao's caramelized sugar, twice-cooked pork's boil-then-fry, sweet-and-sour's crisp shell, yu-xiang's velveting. Twelve home recipes on one page, with cutting, marinating and sauce guidance."}
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "猪肉菜谱" : "Pork Recipes"}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "猪肉基础：先读这几篇" : "Learn the Basics First"}
          </h2>
          <ul className="space-y-2">
            {PORK_BLOG_SLUGS.map((slug) => (
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
        </section>
      </main>
    </>
  );
}
