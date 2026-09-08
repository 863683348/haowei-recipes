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

/** 聚合页 FAQ（P1-4 做深：可见文本 + FAQPage JSON-LD，吃下「vegetarian chinese food」长尾） */
const VEGETARIAN_FAQ = [
  {
    qEn: "Is Chinese food vegetarian-friendly?",
    qZh: "中餐对素食者友好吗？",
    aEn: "More than it looks. Many classics are already meatless — mapo tofu, smashed cucumber, scallion pancakes, braised tofu. The trap is hidden non-vegetarian seasonings: oyster sauce, fish sauce, and some chicken stocks. Check labels or ask for the vegetarian version.",
    aZh: "比看起来友好得多。麻婆豆腐、拍黄瓜、葱油饼、红烧豆腐这些经典款本来就是素的。要小心的是隐形荤料：蚝油、鱼露和一些鸡汤底。看配料表，或直接点素版。",
  },
  {
    qEn: "Can mapo tofu be made vegan?",
    qZh: "麻婆豆腐能做纯素版吗？",
    aEn: "Yes. Swap the ground pork for mushrooms or soy crumbles, and replace any chicken stock with mushroom water or plain water. The mala — Sichuan peppercorn + chili oil — carries the dish; you won't miss the meat.",
    aZh: "可以。肉末换成香菇丁或植物蛋白，高汤换成泡香菇的水或清水。麻味和辣味由花椒与辣椒油扛起整道菜——不会觉得缺肉。",
  },
  {
    qEn: "How do Chinese vegetarian dishes avoid tasting bland?",
    qZh: "中式素菜怎么做到不寡淡？",
    aEn: "Three tricks: wok hei from a hot pan, umami from fermented ingredients (doubanjiang, fermented bean curd, soy sauce), and texture contrast (crunchy vegetables + silky tofu + chewy wood ear). Every dish here hits at least two of the three.",
    aZh: "三个窍门：大火炝锅的镬气、发酵调料的鲜（豆瓣酱、腐乳、酱油），以及口感对比（脆蔬菜 + 滑豆腐 + 韧木耳）。这页每道菜都至少占了其中两样。",
  },
  {
    qEn: "What tofu should I use for vegetarian stir-fries?",
    qZh: "素炒该用什么豆腐？",
    aEn: "Firm or extra-firm for stir-fries and braises — it holds its shape and browns. Silken is for soups and steamed dishes. Press firm tofu for 20 minutes before pan-frying if you want a golden crust.",
    aZh: "炒和烧用老豆腐或北豆腐——定型好、能煎出金黄。嫩豆腐留给汤和蒸菜。想煎出脆壳，先压 20 分钟去水。",
  },
  {
    qEn: "Do Chinese vegetarian dishes have enough protein?",
    qZh: "中式素食蛋白质够吗？",
    aEn: "Yes, when you build the plate right. Tofu, eggs, and edamame are the obvious ones, but don't skip scallion pancakes and noodles — wheat has protein, and the egg fried rice here pairs rice protein with egg. Two or three dishes from this page easily cover a meal's protein needs.",
    aZh: "搭配得当就够。豆腐、鸡蛋、毛豆是明摆着的来源，但葱油饼和面条也别小看——小麦本身有蛋白质，蛋炒饭更是米蛋白加蛋。这页任选两三道就够一餐的蛋白质需求。",
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

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: VEGETARIAN_FAQ.map((f) => ({
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

        {/* 聚合页 FAQ（P1-4 做深：可见文本 + FAQPage JSON-LD） */}
        <section className="mt-14 border-t border-[var(--hw-fg-muted)]/20 pt-8">
          <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "中式素食常见问题" : "Vegetarian Chinese Food: Frequently Asked Questions"}
          </h2>
          <div className="mt-5 space-y-4">
            {VEGETARIAN_FAQ.map((f, i) => (
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
