import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

/** 牛肉枢纽页 — 收拢牛肉菜谱（滑炒/炖煮），聚合 "chinese beef recipes" 大词 */
const BEEF_SLUGS = [
  "beef-and-broccoli",
  "green-pepper-beef",
  "onion-beef-stir-fry",
  "potato-beef-stew",
];

const BEEF_BLOG_SLUGS = ["marinating-meat-chinese-way"];

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
      ? "牛肉食谱合集（西兰花炒牛肉、土豆炖牛肉、洋葱炒牛肉等）| HǎoWèi 好味"
      : "Chinese Beef Recipes: Broccoli Beef, Potato Stew & More | HǎoWèi 好味",
    description: isZh
      ? "中式牛肉家常做法：西兰花炒牛肉、青椒牛柳、洋葱炒牛肉、土豆炖牛肉。滑嫩牛肉的腌肉与油温诀窍，附分步状态图。"
      : "Chinese beef home recipes: beef & broccoli, green pepper beef, onion beef stir-fry, potato beef stew. Learn the velveting and wok-heat tricks for tender beef, with step-by-step visual states.",
    alternates: pageAlternates("/recipes/beef", loc),
  };
}

export default async function BeefHubPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const dishRecipes = BEEF_SLUGS.map(getRecipeBySlug).filter(
    (r): r is NonNullable<typeof r> => Boolean(r)
  );
  const hubUrl = absoluteUrl(localizePath("/recipes/beef", loc));

  // BreadcrumbList + CollectionPage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isZh ? "中式牛肉食谱合集" : "Chinese Beef Recipes",
    description: isZh
      ? "中式牛肉家常做法合集：西兰花炒牛肉、土豆炖牛肉等。"
      : "A collection of Chinese beef home recipes, from broccoli beef to potato beef stew.",
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
      { "@type": "ListItem", position: 3, name: isZh ? "牛肉" : "Beef", item: hubUrl },
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
          <span>{isZh ? "牛肉" : "Beef"}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl font-semibold text-[var(--hw-fg)] sm:text-4xl">
            {isZh ? "中式牛肉食谱合集" : "Chinese Beef Recipes"}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--hw-fg-muted)]">
            {isZh
              ? "中餐做牛肉只有两件事：滑炒要嫩、炖煮要烂。这一页把西兰花炒牛肉、青椒牛柳、洋葱炒牛肉、土豆炖牛肉收在一起——腌肉配方、油温判断、炖煮火候全部讲透。"
              : "Chinese beef cooking is really two skills: velvet-stir-fry for tenderness, and low-and-slow braising for fall-apart texture. Broccoli beef, green pepper beef, onion beef, potato stew — all here, with the full technique."}
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "牛肉菜谱" : "Beef Recipes"}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "牛肉基础：先读这几篇" : "Learn the Basics First"}
          </h2>
          {BEEF_BLOG_SLUGS.length > 0 ? (
            <ul className="space-y-2">
              {BEEF_BLOG_SLUGS.map((slug) => (
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
                ? "想看更多牛肉技巧？访问我们的"
                : "Want more beef tips? Visit our "}
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
