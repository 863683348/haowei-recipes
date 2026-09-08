import Link from "next/link";
import type { Metadata } from "next";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug } from "@/data/recipes";
import { isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

/** 猪肉枢纽页 — 收拢猪肉菜谱（红烧/小炒/糖醋/蒸炖），聚合 "chinese pork recipes" 大词 */
const PORK_SLUGS = [
  "hongshao-pork",
  "twice-cooked-pork",
  "yu-xiang-pork",
  "sweet-sour-pork",
  "sweet-sour-ribs",
  "moo-shu-pork",
  "jing-jiang-pork",
  "pepper-pork",
  "home-style-pork",
  "meicai-kourou",
  "pork-cabbage-dumplings",
  "shui-zhu-pork-slices",
];

const PORK_BLOG_SLUGS = ["marinating-meat-chinese-way"];

/** 聚合页 FAQ（P1-4 做深：可见文本 + FAQPage JSON-LD，吃下「hong shao rou / chinese pork recipes」长尾） */
const PORK_FAQ = [
  {
    qEn: "How do I keep hong shao rou (red-braised pork) tender?",
    qZh: "红烧肉怎么才能不柴？",
    aEn: "Three rules: blanch and rinse the belly first, then simmer — never boil — after the sugar caramelizes, and season salt only in the last 10 minutes. A gentle small-bubble simmer for 60-90 minutes is what turns fat into silk.",
    aZh: "三条铁律：五花肉先焯水洗净；炒完糖色后全程小火慢炖、绝不滚沸；盐到最后 10 分钟再放。小火微沸炖 60–90 分钟，肥肉才会化成糯。",
  },
  {
    qEn: "How do I pick the right pork belly?",
    qZh: "五花肉怎么选？",
    aEn: "Look for even layers — 2-3 distinct bands of lean and fat, ideally with skin on. Thicker, well-marbled belly renders into a glossy, melt-in-the-mouth result; lean-only cuts dry out in a long braise.",
    aZh: "挑层次分明的——两三层的五花最好，带皮更佳。肥瘦相间的厚五花才能炖出油亮软糯；纯瘦的部位久炖必柴。",
  },
  {
    qEn: "How do I caramelize sugar without burning it?",
    qZh: "炒糖色怎么不苦？",
    aEn: "Use low heat, cold oil, and sugar in the pan together, and pull it off the heat the moment it turns amber with small bubbles — about 2 minutes. Burnt sugar tastes bitter and can't be fixed; when in doubt, under-caramelize.",
    aZh: "冷油下糖、全程小火，看到糖化开变成琥珀色并泛起小泡就立刻离火——大约 2 分钟。炒过头发苦就没救了；拿不准宁可浅一点。",
  },
  {
    qEn: "Why does twice-cooked pork need to be boiled first?",
    qZh: "回锅肉为什么要先煮再炒？",
    aEn: "Boiling (about 20 minutes) sets the shape and drives off some fat so the later stir-fry crisps the edges instead of stewing them. Let it cool completely before slicing thin — cold meat slices cleanly and curls properly in the wok.",
    aZh: "先煮约 20 分钟是为了定型并逼出一部分油脂，后面炒的时候才能煸出灯盏窝而不是炖成一坨。煮完彻底放凉再切——冷肉切得薄，下锅才会卷。",
  },
  {
    qEn: "How do I marinate pork so it stays silky?",
    qZh: "猪肉怎么腌才嫩滑？",
    aEn: "Follow the Chinese order: salt and soy first, then a little cornstarch slurry, then oil last to seal. Rest 10-15 minutes before cooking. Never add oil before the wet seasonings — it blocks flavor absorption. Full breakdown in our marinating guide.",
    aZh: "按中式顺序：先盐和酱油，再薄薄上浆（玉米淀粉+水），最后油封。下锅前静置 10–15 分钟。千万别先放油再放湿料——油会挡住味道渗入。完整原理看我们的腌肉指南。",
  },
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
      ? "猪肉食谱合集（红烧肉、回锅肉、糖醋里脊等12道）| HǎoWèi 好味"
      : "Chinese Pork Recipes: Hong Shao Rou, Twice-Cooked Pork & 10 More | HǎoWèi 好味",
    description: isZh
      ? "12 道中式猪肉家常做法：红烧肉、回锅肉、糖醋里脊、鱼香肉丝、京酱肉丝、梅菜扣肉……炒、烧、炖、蒸全都有，附腌肉要点与分步状态图。"
      : "12 Chinese pork recipes: hong shao rou, twice-cooked pork, sweet-and-sour ribs, yu-xiang pork, jing jiang pork, mei cai kou rou — stir-fried, braised, steamed. With marinating tips and step-by-step visual states.",
    alternates: pageAlternates("/recipes/pork", loc),
  };
}

export default async function PorkHubPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const isZh = loc === "zh";

  const dishRecipes = PORK_SLUGS.map(getRecipeBySlug).filter(
    (r): r is NonNullable<typeof r> => Boolean(r)
  );
  const hubUrl = absoluteUrl(localizePath("/recipes/pork", loc));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isZh ? "中式猪肉食谱合集" : "Chinese Pork Recipes",
    description: isZh
      ? "12 道中式猪肉家常做法：红烧肉、回锅肉、糖醋里脊等。"
      : "A collection of 12 Chinese pork recipes, from hong shao rou to twice-cooked pork.",
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
      { "@type": "ListItem", position: 3, name: isZh ? "猪肉" : "Pork", item: hubUrl },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PORK_FAQ.map((f) => ({
      "@type": "Question",
      name: isZh ? f.qZh : f.qEn,
      acceptedAnswer: { "@type": "Answer", text: isZh ? f.aZh : f.aEn },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
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
          <span>{isZh ? "猪肉" : "Pork"}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl font-semibold text-[var(--hw-fg)] sm:text-4xl">
            {isZh ? "中式猪肉食谱合集" : "Chinese Pork Recipes"}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--hw-fg-muted)]">
            {isZh
              ? "五花肉、里脊、排骨、肉丝——中式做法各有章法：红烧肉炒糖色的火候、回锅肉先煮后炒的定型、糖醋里脊的脆壳、鱼香肉丝的上浆。这一页把 12 种家常做法收在一起，切法、腌肉、调味一次讲透。"
              : "Belly, tenderloin, ribs, shredded — Chinese cooking has a method for each cut: hong shao's caramelized sugar, twice-cooked pork's boil-then-fry, sweet-and-sour's crisp shell, yu-xiang's velveting. Twelve home recipes on one page, with cutting, marinating and sauce guidance."}
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "猪肉菜谱" : "Pork Recipes"}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishRecipes.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "猪肉基础：先读这几篇" : "Learn the Basics First"}
          </h2>
          <ul className="space-y-2">
            {PORK_BLOG_SLUGS.map((slug) => (
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
        </section>

        {/* 聚合页 FAQ（P1-4 做深：可见文本 + FAQPage JSON-LD） */}
        <section className="mt-14 border-t border-[var(--hw-fg-muted)]/20 pt-8">
          <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "猪肉菜谱常见问题" : "Chinese Pork Recipes: Frequently Asked Questions"}
          </h2>
          <div className="mt-5 space-y-4">
            {PORK_FAQ.map((f, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--hw-fg-muted)]/20 bg-[var(--hw-bg-soft)]/40 p-5"
              >
                <h3 className="font-semibold leading-snug text-[var(--hw-fg)]">
                  {isZh ? f.qZh : f.qEn}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--hw-fg-muted)]">
                  {isZh ? f.aZh : f.aEn}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
