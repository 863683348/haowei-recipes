import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

/** 豆腐枢纽页 — 收拢豆腐菜谱，聚合 "tofu recipes chinese" 大词（含素食流量） */
const TOFU_SLUGS = [
  "braised-tofu",
  "home-style-tofu",
  "mapo-tofu",
  "eggplant-green-bean-casserole",
];

const TOFU_BLOG_SLUGS = ["tofu-types"];

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
      ? "豆腐食谱合集（麻婆豆腐、红烧豆腐、家常豆腐等）| HǎoWèi 好味"
      : "Chinese Tofu Recipes: Mapo, Braised, Home-Style & More | HǎoWèi 好味",
    description: isZh
      ? "中式豆腐家常做法：麻婆豆腐、红烧豆腐、家常豆腐、茄子豆角煲。豆腐怎么选、怎么切、怎么烧不碎，附豆腐种类指南与分步状态图。"
      : "Chinese tofu home recipes: mapo tofu, braised tofu, home-style tofu, eggplant & green bean casserole. How to pick, cut and cook tofu without breaking it — with a tofu types guide and step-by-step visual states.",
    alternates: pageAlternates("/recipes/tofu", loc),
  };
}

export default async function TofuHubPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const dishRecipes = TOFU_SLUGS.map(getRecipeBySlug).filter(
    (r): r is NonNullable<typeof r> => Boolean(r)
  );
  const hubUrl = absoluteUrl(localizePath("/recipes/tofu", loc));

  // BreadcrumbList + CollectionPage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isZh ? "中式豆腐食谱合集" : "Chinese Tofu Recipes",
    description: isZh
      ? "中式豆腐家常做法合集：麻婆豆腐、红烧豆腐、家常豆腐等。"
      : "A collection of Chinese tofu home recipes, from mapo tofu to braised tofu.",
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
      { "@type": "ListItem", position: 3, name: isZh ? "豆腐" : "Tofu", item: hubUrl },
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
          <span>{isZh ? "豆腐" : "Tofu"}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl font-semibold text-[var(--hw-fg)] sm:text-4xl">
            {isZh ? "中式豆腐食谱合集" : "Chinese Tofu Recipes"}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--hw-fg-muted)]">
            {isZh
              ? "嫩豆腐做麻婆、老豆腐做红烧、家常豆腐煎到两面金黄——豆腐是中式家常菜里最便宜的蛋白质，也是最容易做碎的一种。这一页把选豆腐、切豆腐、烧豆腐的窍门一次讲清。"
              : "Silken for mapo, firm for braising, pan-seared golden for home-style tofu — tofu is the cheapest protein in the Chinese kitchen and the easiest to break. Picking it, cutting it, cooking it without wrecking it — all on this page."}
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "豆腐菜谱" : "Tofu Recipes"}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "豆腐基础：先读这几篇" : "Learn the Basics First"}
          </h2>
          {TOFU_BLOG_SLUGS.length > 0 ? (
            <ul className="space-y-2">
              {TOFU_BLOG_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link href={localizePath(`/blog/${slug}`, loc)} className="text-[var(--hw-accent)] hover:underline">
                    {slug === "tofu-types"
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
                ? "想看更多豆腐技巧？访问我们的"
                : "Want more tofu tips? Visit our "}
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
