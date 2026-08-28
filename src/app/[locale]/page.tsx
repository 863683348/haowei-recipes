import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { BoltIcon, RiceIcon, LeafIcon, EyeIcon, DownloadIcon } from "@/components/icons";
import { getRecipeBySlug } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const t = getDictionary(loc);
  return {
    title: t.metadata.homeTitle,
    description: t.metadata.homeDesc,
    alternates: pageAlternates("/", loc),
  };
}

const featuredSlugs = ["tomato-and-egg", "mapo-tofu", "kung-pao-chicken", "egg-fried-rice"];

/** 场景卡片图标（icon 字段为语义 key，映射到统一 SVG 图标集） */
function ScenarioIcon({ name }: { name: string }) {
  const cls = "h-6 w-6 text-[var(--hw-ginger)]";
  switch (name) {
    case "bolt":
      return <BoltIcon className={cls} />;
    case "rice":
      return <RiceIcon className={cls} />;
    case "leaf":
      return <LeafIcon className={cls} />;
    default:
      return null;
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const featured = featuredSlugs
    .map((s) => getRecipeBySlug(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  // WebSite + Organization JSON-LD（首页 SEO 站点级结构化数据）
  const siteJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "HǎoWèi 好味",
      alternateName: ["HaoWei", "好味", "HǎoWèi Recipes"],
      url: absoluteUrl("/"),
      inLanguage: ["en-US", "zh-CN"],
      description: t.metadata.siteDesc,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "HǎoWèi 好味",
      url: absoluteUrl("/"),
      logo: absoluteUrl("/images/og-default.webp"),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
      />
      <main>
      {/* Hero */}
      <section className="border-b border-[var(--hw-border)] bg-[var(--hw-bg-soft)]">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--hw-ginger)]">
            {t.home.eyebrow}
          </p>
          <h1 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight text-[var(--hw-fg)] sm:text-5xl">
            {t.home.heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--hw-fg-muted)] sm:text-lg">
            {t.home.heroDesc}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={localizePath("/recipes", loc)}
              className="rounded-lg bg-[var(--hw-soy)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-[var(--hw-ginger)]"
            >
              {t.home.browseAll}
            </Link>
            <Link
              href={localizePath("/ai-assistant", loc)}
              className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-6 py-3 text-sm font-semibold text-[var(--hw-fg)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
            >
              {t.home.askAI}
            </Link>
          </div>
        </div>
      </section>

      {/* 场景入口 */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
          {t.home.situationsTitle}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {t.home.scenarios.map((c) => (
            <Link
              key={c.title}
              href={localizePath(c.href, loc)}
              className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <ScenarioIcon name={c.icon} />
              <h3 className="mt-3 font-serif text-lg font-semibold text-[var(--hw-fg)]">
                {c.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 枢纽页矩阵：分类探索（SEO 权重聚拢） */}
      <section className="border-t border-[var(--hw-border)]">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
            {t.home.hubTitle}
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {t.home.hubLinks.map((c) => (
              <Link
                key={c.href}
                href={localizePath(c.href, loc)}
                className="group rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--hw-ginger)] hover:shadow-md"
              >
                <span className="text-2xl">{c.icon}</span>
                <h3 className="mt-2 font-serif text-base font-semibold text-[var(--hw-fg)] group-hover:text-[var(--hw-ginger)]">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--hw-fg-muted)]">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 首发合集 PDF：预览 + 下载入口 */}
      <section className="border-t border-[var(--hw-border)] bg-[var(--hw-bg-soft)]">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
                {t.home.pdfCta.title}
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--hw-fg-muted)]">
                {t.home.pdfCta.desc}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/pdf/haowei-v1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-5 py-3 text-sm font-semibold text-[var(--hw-fg)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
              >
                <EyeIcon className="h-5 w-5" />
                {t.home.pdfCta.preview}
              </a>
              <Link
                href={localizePath("/pdf/v1", loc)}
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--hw-soy)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-[var(--hw-ginger)]"
              >
                <DownloadIcon className="h-5 w-5" />
                {t.home.pdfCta.download}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 精选菜谱 */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
            {t.home.startHere}
          </h2>
          <Link
            href={localizePath("/recipes", loc)}
            className="text-sm font-medium text-[var(--hw-ginger)] hover:underline"
          >
            {t.home.viewAll}
          </Link>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((r) => (
            <RecipeCard key={r.slug} recipe={r} />
          ))}
        </div>
      </section>
    </main>
    </>
  );
}
