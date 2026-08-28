import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

/** 面食/主食枢纽页 — 收拢面条 + 炒饭 + 葱油饼，聚合 "chinese noodle recipes" 大词 */
const NOODLE_SLUGS = [
  "scallion-noodles",
  "tomato-egg-noodles",
  "yangchun-noodles",
  "yangzhou-fried-rice",
  "scallion-pancakes",
];

const NOODLE_BLOG_SLUGS = ["chinese-noodles-buyers-guide", "chinese-rice-types"];

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
      ? "中式面食食谱合集（葱油拌面、番茄鸡蛋面、阳春面、炒饭等）| HǎoWèi 好味"
      : "Chinese Noodle Recipes: Scallion Oil, Tomato Egg & More | HǎoWèi 好味",
    description: isZh
      ? "中式面食与主食家常做法：葱油拌面、番茄鸡蛋面、阳春面、扬州炒饭、葱油饼。面条怎么选、炒饭怎么粒粒分明，附面条选购指南与分步状态图。"
      : "Chinese noodles and staples: scallion oil noodles, tomato egg noodles, yangchun noodles, yangzhou fried rice, scallion pancakes. How to pick noodles and get wok-hei fried rice — with a noodles buyer's guide and step-by-step visual states.",
    alternates: pageAlternates("/recipes/noodles", loc),
  };
}

export default async function NoodlesHubPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const dishRecipes = NOODLE_SLUGS.map(getRecipeBySlug).filter(
    (r): r is NonNullable<typeof r> => Boolean(r)
  );
  const hubUrl = absoluteUrl(localizePath("/recipes/noodles", loc));

  // BreadcrumbList + CollectionPage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isZh ? "中式面食食谱合集" : "Chinese Noodle Recipes",
    description: isZh
      ? "中式面食与主食家常做法合集：葱油拌面、阳春面、扬州炒饭等。"
      : "A collection of Chinese noodle and staple recipes, from scallion oil noodles to yangzhou fried rice.",
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
      { "@type": "ListItem", position: 3, name: isZh ? "面食主食" : "Noodles & Staples", item: hubUrl },
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
          <span>{isZh ? "面食主食" : "Noodles & Staples"}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl font-semibold text-[var(--hw-fg)] sm:text-4xl">
            {isZh ? "中式面食食谱合集" : "Chinese Noodle Recipes"}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--hw-fg-muted)]">
            {isZh
              ? "葱油拌面、番茄鸡蛋面、阳春面——一碗面就是一顿饭；扬州炒饭、葱油饼则是主食的另一种形态。这一页收拢面食与主食做法，附面条选购与米饭品种指南。"
              : "Scallion oil noodles, tomato egg noodles, yangchun noodles — a bowl of noodles is a meal; yangzhou fried rice and scallion pancakes are staples in another form. Noodles and grains, all on this page, with buying guides."}
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "面食主食菜谱" : "Noodle & Staple Recipes"}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "面食基础：先读这几篇" : "Learn the Basics First"}
          </h2>
          {NOODLE_BLOG_SLUGS.length > 0 ? (
            <ul className="space-y-2">
              {NOODLE_BLOG_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link href={localizePath(`/blog/${slug}`, loc)} className="text-[var(--hw-accent)] hover:underline">
                    {slug === "chinese-noodles-buyers-guide"
                      ? isZh
                        ? "中式面条选购指南"
                        : "Chinese Noodles: A Buyer's Guide"
                      : slug === "chinese-rice-types"
                        ? isZh
                          ? "中餐用米品种指南"
                          : "Rice Varieties for Chinese Cooking"
                        : slug}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[var(--hw-fg-muted)]">
              {isZh
                ? "想看更多面食技巧？访问我们的"
                : "Want more noodle tips? Visit our "}
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
