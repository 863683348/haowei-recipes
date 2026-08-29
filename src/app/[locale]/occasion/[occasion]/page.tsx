import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { RecipeCard } from "@/components/recipe-card";
import { toSearchItem } from "@/lib/recipe-search";
import {
  OCCASION_LIST,
  getOccasionBySlug,
  getRecipesByOccasionSlug,
} from "@/data/occasions";
import {
  locales,
  isLocale,
  localizePath,
  pageAlternates,
  absoluteUrl,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface Props {
  params: Promise<{ locale: string; occasion: string }>;
}

/** 静态生成所有「语言 × 节令」组合（6 场景 × 2 语言 = 12 个聚合页） */
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    OCCASION_LIST.map((o) => ({ locale, occasion: o.slug }))
  );
}

export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, occasion } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const def = getOccasionBySlug(occasion);
  if (!def) return {};
  const isZh = loc === "zh";
  const count = getRecipesByOccasionSlug(occasion).length;
  const title = isZh ? `${def.zh}菜单` : `${def.en} Menu — Chinese Recipes`;
  const desc = isZh ? def.introZh : def.introEn;
  const pageUrl = absoluteUrl(localizePath(`/occasion/${def.slug}`, loc));
  const imageUrl = absoluteUrl("/images/og-default.webp");
  return {
    title,
    description: desc,
    alternates: pageAlternates(`/occasion/${def.slug}`, loc),
    openGraph: {
      type: "website",
      locale: loc === "zh" ? "zh_CN" : "en_US",
      siteName: "HǎoWèi 好味",
      title,
      description: desc,
      url: pageUrl,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [imageUrl],
    },
  };
}

export default async function OccasionPage({ params }: Props) {
  const { locale, occasion } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const def = getOccasionBySlug(occasion);
  if (!def) notFound();
  const t = getDictionary(loc);
  const isZh = loc === "zh";
  const name = isZh ? def.zh : def.en;
  const list = getRecipesByOccasionSlug(occasion).map(toSearchItem);
  const count = list.length;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isZh ? `${def.zh}菜单` : `${def.en} Menu`,
    itemListElement: list.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(localizePath(`/recipes/${r.slug}`, loc)),
      name: isZh ? r.titleZh : r.titleEn,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isZh ? "首页" : "Home",
        item: absoluteUrl(localizePath("/", loc)),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isZh ? "全部菜谱" : "All recipes",
        item: absoluteUrl(localizePath("/recipes", loc)),
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: absoluteUrl(localizePath(`/occasion/${def.slug}`, loc)),
      },
    ],
  };

  const otherOccasions = OCCASION_LIST.filter((c) => c.slug !== def.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="mx-auto max-w-5xl px-4 py-10">
        {/* 可见面包屑 */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-[var(--hw-fg-muted)]">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href={localizePath("/", loc)} className="hover:text-[var(--hw-ginger)]">
                {isZh ? "首页" : "Home"}
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href={localizePath("/recipes", loc)} className="hover:text-[var(--hw-ginger)]">
                {isZh ? "全部菜谱" : "All recipes"}
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li aria-current="page" className="font-medium text-[var(--hw-fg)]">
              {name}
            </li>
          </ol>
        </nav>

        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)] sm:text-4xl">
          {isZh ? def.zh : def.en} <span className="text-[var(--hw-fg-muted)]">{isZh ? def.en : def.zh}</span>
        </h1>
        <p className="mt-2 max-w-3xl text-[var(--hw-fg-muted)]">{isZh ? def.introZh : def.introEn}</p>
        <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">
          {isZh ? `共 ${count} 道` : `${count} recipes`}
        </p>

        {/* 菜谱网格 */}
        {list.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        ) : (
          <p className="mt-10 rounded-xl border border-dashed border-[var(--hw-border)] p-8 text-center text-[var(--hw-fg-muted)]">
            {t.recipes.cuisineEmpty}
          </p>
        )}

        {/* 其他节令（内部互链） */}
        <section className="mt-14">
          <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {t.recipes.moreOccasions}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherOccasions.map((c) => (
              <Link
                key={c.slug}
                href={localizePath(`/occasion/${c.slug}`, loc)}
                className="rounded-full border border-[var(--hw-border)] bg-[var(--hw-card)] px-3.5 py-1.5 text-sm text-[var(--hw-fg)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
              >
                {isZh ? c.zh : c.en}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
