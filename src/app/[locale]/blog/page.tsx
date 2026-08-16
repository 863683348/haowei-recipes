import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/data/blog";
import { BlogCard } from "@/components/blog-card";
import {
  locales,
  isLocale,
  localizePath,
  pageAlternates,
  absoluteUrl,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const dynamic = "force-static";

interface Props {
  params: Promise<{ locale: string }>;
}

/** 动态段静态化：en / zh 两套列表页全部静态生成 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const t = getDictionary(loc);
  return {
    title: t.metadata.blogTitle,
    description: t.metadata.blogDesc,
    alternates: pageAlternates("/blog", loc),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";
  const posts = getAllPosts();

  // CollectionPage / ItemList JSON-LD（列表页结构化数据）
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.blog.title,
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(localizePath(`/blog/${p.slug}`, loc)),
      name: isZh ? p.titleZh : p.titleEn,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">{t.blog.title}</h1>
        <p className="mt-2 text-[var(--hw-fg-muted)]">{t.blog.subtitle}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} locale={loc} />
          ))}
        </div>
      </main>
    </>
  );
}
