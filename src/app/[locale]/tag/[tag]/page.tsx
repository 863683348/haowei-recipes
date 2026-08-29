import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { RecipeCard } from "@/components/recipe-card";
import { toSearchItem } from "@/lib/recipe-search";
import { TAG_LIST, getTagBySlug, getRecipesByTagSlug } from "@/data/tags";
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
  params: Promise<{ locale: string; tag: string }>;
}

/** 静态生成所有「语言 × 合集」组合（12 合集 × 2 语言 = 24 个聚合页） */
export function generateStaticParams() {
  return locales.flatMap((locale) => TAG_LIST.map((t) => ({ locale, tag: t.slug })));
}

export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, tag } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const def = getTagBySlug(tag);
  if (!def) return {};
  const isZh = loc === "zh";
  const count = getRecipesByTagSlug(tag).length;
  const title = isZh ? `${def.zh}菜谱合集` : `${def.en} Chinese Recipes`;
  const desc = isZh
    ? `${count} 道${def.zh}中式家常做法，附中英对照食材、替代方案与分步状态说明。`
    : `${count} ${def.en.toLowerCase()} Chinese home-cooking recipes with bilingual ingredients, substitutions, and step-by-step state photos.`;
  const pageUrl = absoluteUrl(localizePath(`/tag/${def.slug}`, loc));
  const imageUrl = absoluteUrl("/images/og-default.webp");
  return {
    title,
    description: desc,
    alternates: pageAlternates(`/tag/${def.slug}`, loc),
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

export default async function TagPage({ params }: Props) {
  const { locale, tag } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const def = getTagBySlug(tag);
  if (!def) notFound();
  const t = getDictionary(loc);
  const isZh = loc === "zh";
  const name = isZh ? def.zh : def.en;
  const list = getRecipesByTagSlug(tag).map(toSearchItem);
  const count = list.length;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isZh ? `${def.zh}菜谱合集` : `${def.en} Chinese Recipes`,
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
        item: absoluteUrl(localizePath(`/tag/${def.slug}`, loc)),
      },
    ],
  };

  const otherTags = TAG_LIST.filter((c) => c.slug !== def.slug);

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
        <p className="mt-2 text-[var(--hw-fg-muted)]">
          {isZh
            ? `${count} 道${def.zh}中式家常做法，附中英对照食材、替代方案与分步状态说明。`
            : `${count} ${def.en.toLowerCase()} Chinese home-cooking recipes — bilingual ingredients, substitutions, and step-by-step state photos.`}
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

        {/* 其他合集（内部互链） */}
        <section className="mt-14">
          <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {t.recipes.moreTags}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherTags.map((c) => (
              <Link
                key={c.slug}
                href={localizePath(`/tag/${c.slug}`, loc)}
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
