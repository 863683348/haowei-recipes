import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

/** 川菜枢纽页 — 收拢 Sichuan 菜谱 + 豆瓣酱系 + 技法博客，聚合权重 */
const SICHUAN_SLUGS = [
  "mapo-tofu",
  "kung-pao-chicken",
  "kou-shui-chicken",
  "lazi-diced-chicken",
  "twice-cooked-pork",
  "yu-xiang-pork",
  "home-style-tofu",
  "dry-fried-green-beans",
  "garlic-chives-scrambled-eggs",
];

const SICHUAN_BLOG_SLUGS = ["doubanjiang-101", "10-sichuan-home-recipes"];

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
      ? "川菜食谱合集（麻婆豆腐、宫保鸡丁、辣子鸡等）| HǎoWèi 好味"
      : "Sichuan Recipes: Mapo Tofu, Kung Pao Chicken & More | HǎoWèi 好味",
    description: isZh
      ? "一站吃遍川菜：麻婆豆腐、宫保鸡丁、辣子鸡、回锅肉、鱼香肉丝等正宗家常做法，附豆瓣酱用法、食材替换与分步状态图。"
      : "Authentic Sichuan home recipes: mapo tofu, kung pao chicken, la zi ji, twice-cooked pork and more — with doubanjiang tips, substitutions and step-by-step visual states.",
    alternates: pageAlternates("/recipes/sichuan", loc),
  };
}

export default async function SichuanHubPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const dishRecipes = SICHUAN_SLUGS.map(getRecipeBySlug).filter(
    (r): r is NonNullable<typeof r> => Boolean(r)
  );
  const hubUrl = absoluteUrl(localizePath("/recipes/sichuan", loc));

  // BreadcrumbList + CollectionPage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isZh ? "川菜食谱合集" : "Sichuan Recipes",
    description: isZh
      ? "正宗川菜家常食谱合集：麻婆豆腐、宫保鸡丁、辣子鸡等。"
      : "A collection of authentic Sichuan home recipes, from mapo tofu to kung pao chicken.",
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
      { "@type": "ListItem", position: 3, name: isZh ? "川菜" : "Sichuan", item: hubUrl },
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
          <span>{isZh ? "川菜" : "Sichuan"}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl font-semibold text-[var(--hw-fg)] sm:text-4xl">
            {isZh ? "川菜食谱合集" : "Sichuan Recipes"}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--hw-fg-muted)]">
            {isZh
              ? "麻婆豆腐、宫保鸡丁、辣子鸡、回锅肉、鱼香肉丝——把川菜的灵魂（豆瓣酱、干辣椒、花椒）学会，这一页的家常做法就能一直做下去。"
              : "Mapo tofu, kung pao chicken, la zi ji, twice-cooked pork, yu-xiang pork — master the soul of Sichuan cooking (doubanjiang, dried chilies, Sichuan pepper) and this page of home recipes will keep you fed for months."}
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "川菜菜谱" : "Sichuan Dishes"}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "川菜基础：先读这几篇" : "Learn the Basics First"}
          </h2>
          <ul className="space-y-2">
            {SICHUAN_BLOG_SLUGS.map((slug) => {
              const url = localizePath(`/blog/${slug}`, loc);
              const label =
                slug === "doubanjiang-101"
                  ? isZh
                    ? "豆瓣酱用法与挑选：一篇讲透川菜灵魂"
                    : "Doubanjiang 101: The Soul of Sichuan"
                  : isZh
                    ? "10 道家常川菜：从零开始"
                    : "10 Sichuan Home Recipes to Start With";
              return (
                <li key={slug}>
                  <Link href={url} className="text-[var(--hw-accent)] hover:underline">
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "没有豆瓣酱？" : "No doubanjiang?"}
          </h2>
          <p className="text-[var(--hw-fg-muted)]">
            {isZh ? (
              <>
                看{" "}
                <Link href={localizePath("/substitutions", loc)} className="text-[var(--hw-accent)] hover:underline">
                  中餐食材替换指南
                </Link>
                ，或用{" "}
                <Link href={localizePath("/blog/chinese-condiment-substitutions", loc)} className="text-[var(--hw-accent)] hover:underline">
                  豆瓣酱替代方案
                </Link>{" "}
                应急。
              </>
            ) : (
              <>
                See our{" "}
                <Link href={localizePath("/substitutions", loc)} className="text-[var(--hw-accent)] hover:underline">
                  ingredient substitution guide
                </Link>
                , or grab a{" "}
                <Link href={localizePath("/blog/chinese-condiment-substitutions", loc)} className="text-[var(--hw-accent)] hover:underline">
                  doubanjiang alternative
                </Link>{" "}
                in a pinch.
              </>
            )}
          </p>
        </section>
      </main>
    </>
  );
}
