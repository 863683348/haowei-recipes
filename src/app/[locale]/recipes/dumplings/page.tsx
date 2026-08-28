import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

/** 饺子枢纽页 — 收拢饺子/水饺菜谱，聚合 "chinese dumpling recipes" 大词 */
const DUMPLING_SLUGS = [
  "chive-egg-dumplings",
  "pork-cabbage-dumplings",
  "sour-soup-dumplings",
];

const DUMPLING_BLOG_SLUGS: string[] = [];

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
      ? "饺子食谱合集（韭菜鸡蛋饺、白菜猪肉饺、酸汤水饺）| HǎoWèi 好味"
      : "Chinese Dumpling Recipes: Chive Egg, Pork Cabbage & More | HǎoWèi 好味",
    description: isZh
      ? "中式饺子家常做法：韭菜鸡蛋饺、白菜猪肉饺、酸汤水饺。馅料怎么调不出水、饺子怎么包不破皮，附分步状态图。"
      : "Chinese dumpling home recipes: chive and egg, pork and cabbage, sour soup dumplings. How to keep the filling dry and the wrappers intact — with step-by-step visual states.",
    alternates: pageAlternates("/recipes/dumplings", loc),
  };
}

export default async function DumplingsHubPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const dishRecipes = DUMPLING_SLUGS.map(getRecipeBySlug).filter(
    (r): r is NonNullable<typeof r> => Boolean(r)
  );
  const hubUrl = absoluteUrl(localizePath("/recipes/dumplings", loc));

  // BreadcrumbList + CollectionPage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isZh ? "中式饺子食谱合集" : "Chinese Dumpling Recipes",
    description: isZh
      ? "中式饺子家常做法合集：韭菜鸡蛋饺、白菜猪肉饺、酸汤水饺。"
      : "A collection of Chinese dumpling home recipes, from chive egg to pork cabbage.",
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
      { "@type": "ListItem", position: 3, name: isZh ? "饺子" : "Dumplings", item: hubUrl },
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
          <span>{isZh ? "饺子" : "Dumplings"}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl font-semibold text-[var(--hw-fg)] sm:text-4xl">
            {isZh ? "中式饺子食谱合集" : "Chinese Dumpling Recipes"}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--hw-fg-muted)]">
            {isZh
              ? "饺子是中餐里最有仪式感的一餐：韭菜鸡蛋、白菜猪肉是南北通吃的经典馅，酸汤水饺则是陕西人的深夜食堂。这一页把调馅、包制、煮制、汤底一次讲清。"
              : "Dumplings are the most ritualistic meal in Chinese cooking: chive-egg and pork-cabbage are the classics, sour soup dumplings are Shaanxi's midnight comfort. Filling, folding, boiling, soup base — all on this page."}
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "饺子菜谱" : "Dumpling Recipes"}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "饺子基础：先读这几篇" : "Learn the Basics First"}
          </h2>
          {DUMPLING_BLOG_SLUGS.length > 0 ? (
            <ul className="space-y-2">
              {DUMPLING_BLOG_SLUGS.map((slug) => (
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
                ? "想看更多饺子技巧？访问我们的"
                : "Want more dumpling tips? Visit our "}
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
