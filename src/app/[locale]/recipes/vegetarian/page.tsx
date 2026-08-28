import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

/** 素食枢纽页 — 收拢 vegetarian/vegan 菜谱，聚合 "vegetarian chinese recipes" 大词 */
const VEGETARIAN_SLUGS = [
  "braised-tofu",
  "cold-wood-ear",
  "cucumber-scrambled-eggs",
  "egg-fried-rice",
  "garlic-chives-scrambled-eggs",
  "garlic-romaine",
  "home-style-tofu",
  "mapo-tofu",
  "oyster-sauce-lettuce",
  "scallion-noodles",
  "scallion-pancakes",
  "smashed-cucumber",
  "spicy-potato-shreds",
  "stir-fried-bok-choy",
  "vinegar-cabbage",
  "egg-drop-soup",
  "tomato-egg-drop-soup",
];

const VEGETARIAN_BLOG_SLUGS = ["western-supermarket-chinese-pantry", "tofu-types"];

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
      ? "素食食谱合集（麻婆豆腐、蛋炒饭、拍黄瓜等17道）| HǎoWèi 好味"
      : "Vegetarian Chinese Recipes: Mapo Tofu, Fried Rice & 15 More | HǎoWèi 好味",
    description: isZh
      ? "17 道中式素食家常做法：麻婆豆腐、蛋炒饭、拍黄瓜、蒜蓉油麦菜、酸辣土豆丝……无肉也满足，附素食主义友好标识与分步状态图。"
      : "17 vegetarian Chinese recipes: mapo tofu, egg fried rice, smashed cucumber, garlic romaine, spicy potato shreds — meatless and satisfying. With diet labels and step-by-step visual states.",
    alternates: pageAlternates("/recipes/vegetarian", loc),
  };
}

export default async function VegetarianHubPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const dishRecipes = VEGETARIAN_SLUGS.map(getRecipeBySlug).filter(
    (r): r is NonNullable<typeof r> => Boolean(r)
  );
  const hubUrl = absoluteUrl(localizePath("/recipes/vegetarian", loc));

  // BreadcrumbList + CollectionPage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isZh ? "中式素食食谱合集" : "Vegetarian Chinese Recipes",
    description: isZh
      ? "17 道中式素食家常做法：麻婆豆腐、蛋炒饭、拍黄瓜等。"
      : "A collection of 17 vegetarian Chinese recipes, from mapo tofu to smashed cucumber.",
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
      { "@type": "ListItem", position: 3, name: isZh ? "素食" : "Vegetarian", item: hubUrl },
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
          <span>{isZh ? "素食" : "Vegetarian"}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl font-semibold text-[var(--hw-fg)] sm:text-4xl">
            {isZh ? "中式素食食谱合集" : "Vegetarian Chinese Recipes"}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--hw-fg-muted)]">
            {isZh
              ? "中式素食从来不等于清淡：麻婆豆腐的麻、酸辣土豆丝的脆、拍黄瓜的爽、蛋炒饭的香——17 道无肉也满足的家常做法，每一道都标注素食/纯素/无麸质。"
              : "Chinese vegetarian cooking is never bland: mapo tofu's mala, potato shreds' crunch, smashed cucumber's cool bite, egg fried rice's wok aroma — 17 meatless recipes, each labeled vegetarian, vegan or gluten-free."}
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "素食菜谱" : "Vegetarian Recipes"}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "素食基础：先读这几篇" : "Learn the Basics First"}
          </h2>
          {VEGETARIAN_BLOG_SLUGS.length > 0 ? (
            <ul className="space-y-2">
              {VEGETARIAN_BLOG_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link href={localizePath(`/blog/${slug}`, loc)} className="text-[var(--hw-accent)] hover:underline">
                    {slug === "western-supermarket-chinese-pantry"
                      ? isZh
                        ? "在西方超市搭中式厨房"
                        : "Building a Chinese Pantry From a Western Supermarket"
                      : slug === "tofu-types"
                        ? isZh
                          ? "豆腐种类与处理方法"
                          : "Tofu Types and How to Handle Each"
                        : slug}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[var(--hw-fg-muted)]">
              {isZh
                ? "想看更多素食技巧？访问我们的"
                : "Want more vegetarian tips? Visit our "}
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
