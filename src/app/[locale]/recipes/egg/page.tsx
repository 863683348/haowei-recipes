import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

/** 鸡蛋枢纽页 — 收拢鸡蛋菜谱（炒/蒸/汤/面点），聚合 "chinese egg recipes" 大词 */
const EGG_SLUGS = [
  "tomato-eggs",
  "egg-fried-rice",
  "garlic-chives-scrambled-eggs",
  "cucumber-scrambled-eggs",
  "egg-drop-soup",
  "tomato-egg-drop-soup",
  "minced-pork-steamed-egg",
  "shrimp-steamed-egg",
  "braised-eggs-luwei",
  "chive-egg-dumplings",
  "tomato-egg-noodles",
  "ji-dan-guan-bing",
];

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
      ? "鸡蛋食谱合集（番茄炒蛋、蒸蛋、蛋花汤等12道）| HǎoWèi 好味"
      : "Chinese Egg Recipes: Tomato & Egg, Steamed Egg, Egg Drop Soup & More | HǎoWèi 好味",
    description: isZh
      ? "12 道中式鸡蛋家常做法：番茄炒蛋、虾仁蒸蛋、紫菜蛋花汤、卤蛋、鸡蛋灌饼……炒、蒸、煮、烙全都有，附水蛋比例与分步状态图。"
      : "12 Chinese egg recipes: tomato & egg, shrimp steamed egg, seaweed egg drop soup, lu dan braised eggs, egg-stuffed pancake — stir-fried, steamed, simmered. With egg-to-water ratios and step-by-step visual states.",
    alternates: pageAlternates("/recipes/egg", loc),
  };
}

export default async function EggHubPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const isZh = loc === "zh";

  const dishRecipes = EGG_SLUGS.map(getRecipeBySlug).filter(
    (r): r is NonNullable<typeof r> => Boolean(r)
  );
  const hubUrl = absoluteUrl(localizePath("/recipes/egg", loc));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isZh ? "中式鸡蛋食谱合集" : "Chinese Egg Recipes",
    description: isZh
      ? "12 道中式鸡蛋家常做法：番茄炒蛋、蒸蛋、蛋花汤等。"
      : "A collection of 12 Chinese egg recipes, from tomato & egg to steamed egg custard.",
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
      { "@type": "ListItem", position: 3, name: isZh ? "鸡蛋" : "Eggs", item: hubUrl },
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
          <span>{isZh ? "鸡蛋" : "Eggs"}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl font-semibold text-[var(--hw-fg)] sm:text-4xl">
            {isZh ? "中式鸡蛋食谱合集" : "Chinese Egg Recipes"}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--hw-fg-muted)]">
            {isZh
              ? "鸡蛋是中餐厨房最万能的食材：番茄炒蛋的滑嫩靠火候，蒸蛋的水蛋比是 1.5:1，蛋花汤要在勾芡后 spiraling 淋入，卤蛋的琥珀色来自老抽与香料。这一页把 12 种家常做法收在一起，从 15 分钟快手到宴席蒸蛋全覆盖。"
              : "Eggs are the most versatile ingredient in a Chinese kitchen: tomato & egg lives or dies by wok heat, steamed custard wants a 1.5:1 egg-to-water ratio, egg drop soup swirls in after the thickener, and lu dan's amber color comes from dark soy and spices. Twelve home recipes, from 15-minute quick dishes to banquet-style steamed custard."}
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "鸡蛋菜谱" : "Egg Recipes"}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "想学更多基础？" : "Want More Basics?"}
          </h2>
          <p className="text-[var(--hw-fg-muted)]">
            {isZh ? "蒸蛋水蛋比、生抽老抽怎么选等常见问题，看我们的" : "For egg-to-water ratios, choosing soy sauces and other common questions, see our "}
            <Link href={localizePath("/faq", loc)} className="text-[var(--hw-accent)] hover:underline">
              {isZh ? "常见问题" : "FAQ"}
            </Link>
            ，或访问
            <Link href={localizePath("/blog", loc)} className="text-[var(--hw-accent)] hover:underline">
              {isZh ? "烹饪博客" : "our cooking blog"}
            </Link>
            。
          </p>
        </section>
      </main>
    </>
  );
}
