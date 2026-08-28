import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { getAllPosts, getPostBySlug, categoryLabel } from "@/data/blog";
import { getRecipeBySlug } from "@/data/recipes";
import { BlogContent } from "@/components/blog-content";
import { RecipeCard } from "@/components/recipe-card";
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
  params: Promise<{ locale: string; slug: string }>;
}

/** 动态段静态化：每篇文章 × 2 语言 全部静态生成 */
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllPosts().map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const isZh = loc === "zh";
  const title = isZh ? post.titleZh : post.titleEn;
  const desc = isZh ? post.excerptZh : post.excerptEn;
  const pageUrl = absoluteUrl(localizePath(`/blog/${post.slug}`, loc));
  const imageUrl = absoluteUrl(post.coverImage);

  // 封面图存在性（metadata 的 og:image 用同样的检查，破图不引用）
  const coverExists =
    !post.coverImage.startsWith("http") &&
    existsSync(join(process.cwd(), "public", post.coverImage));
  const ogImage = coverExists ? imageUrl : absoluteUrl("/images/og-default.webp");

  return {
    title,
    description: desc,
    alternates: pageAlternates(`/blog/${post.slug}`, loc),
    openGraph: {
      type: "article",
      locale: loc === "zh" ? "zh_CN" : "en_US",
      siteName: "HǎoWèi 好味",
      title,
      description: desc,
      url: pageUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const title = isZh ? post.titleZh : post.titleEn;
  const excerpt = isZh ? post.excerptZh : post.excerptEn;
  const author = isZh ? post.authorZh : post.authorEn;
  const category = categoryLabel(post, loc);
  const body = isZh ? post.bodyZh : post.bodyEn;
  const pageUrl = absoluteUrl(localizePath(`/blog/${post.slug}`, loc));
  const imageUrl = absoluteUrl(post.coverImage);

  // 封面图兜底：图片文件不存在时不渲染封面（避免破图），标题直接上移
  const coverExists =
    !post.coverImage.startsWith("http") &&
    existsSync(join(process.cwd(), "public", post.coverImage));

  // Article JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    image: [coverExists ? imageUrl : absoluteUrl("/images/og-default.webp")],
    datePublished: post.publishDate,
    dateModified: post.updatedDate ?? post.publishDate,
    author: { "@type": "Organization", name: author },
    publisher: { "@type": "Organization", name: "HǎoWèi 好味", url: absoluteUrl("/") },
    mainEntityOfPage: pageUrl,
    keywords: post.tags.join(", "),
  };

  // BreadcrumbList JSON-LD
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
        name: t.blog.title,
        item: absoluteUrl(localizePath("/blog", loc)),
      },
      { "@type": "ListItem", position: 3, name: title, item: pageUrl },
    ],
  };

  // FAQPage JSON-LD（有 FAQ 时才输出）
  const faqJsonLd = post.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: isZh ? f.qZh : f.qEn,
          acceptedAnswer: {
            "@type": "Answer",
            text: isZh ? f.aZh : f.aEn,
          },
        })),
      }
    : null;

  const related = (post.relatedRecipeSlugs ?? [])
    .map((s) => getRecipeBySlug(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <main className="mx-auto max-w-3xl px-4 py-10">
        {/* 面包屑 */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-[var(--hw-fg-muted)]">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href={localizePath("/", loc)} className="hover:text-[var(--hw-ginger)]">
                {isZh ? "首页" : "Home"}
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href={localizePath("/blog", loc)} className="hover:text-[var(--hw-ginger)]">
                {t.blog.title}
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li aria-current="page" className="font-medium text-[var(--hw-fg)]">
              {title}
            </li>
          </ol>
        </nav>

        {/* 封面（图片文件存在才渲染，避免破图） */}
        {coverExists && (
          <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-xl">
            <Image
              src={post.coverImage}
              alt={title}
              fill
              priority
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        )}

        {/* 元信息 */}
        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[var(--hw-fg-muted)]">
          <span className="rounded-full bg-[var(--hw-ginger)]/15 px-2.5 py-1 font-semibold text-[var(--hw-ginger)]">
            {category}
          </span>
          <span>·</span>
          <span>
            {t.blog.publishedOn} {post.publishDate}
          </span>
          <span>·</span>
          <span>
            {t.blog.by} {author}
          </span>
        </div>

        <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-[var(--hw-fg)] sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-lg text-[var(--hw-fg-muted)]">{excerpt}</p>

        {/* 正文 */}
        <article className="mt-8">
          <BlogContent blocks={body} />
        </article>

        {/* 相关菜谱（内链 → 权重传递） */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
              {t.blog.relatedRecipes}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <RecipeCard key={r.slug} recipe={r} />
              ))}
            </div>
          </section>
        )}

        {/* 返回博客 */}
        <div className="mt-12">
          <Link
            href={localizePath("/blog", loc)}
            className="text-sm font-medium text-[var(--hw-ginger)] hover:underline"
          >
            ← {t.blog.backToBlog}
          </Link>
        </div>
      </main>
    </>
  );
}
