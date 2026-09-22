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
  {
    qEn: "Are these recipes vegan?",
    qZh: "这些菜谱是纯素的吗？",
    aEn: "Mostly vegetarian rather than vegan: several dishes here are built on eggs (egg fried rice, cucumber scrambled eggs, tomato egg drop soup). The rest — braised tofu, cold wood ear, smashed cucumber, spicy potato shreds, stir-fried greens — are vegan or one swap away: use shiitake soaking water instead of stock, and leave the pork out of the mapo tofu.",
    aZh: "多数是素食而不是纯素：蛋炒饭、黄瓜炒蛋、番茄蛋花汤这几道本身就以鸡蛋为主料。其余的红烧豆腐、凉拌木耳、拍黄瓜、酸辣土豆丝、清炒青菜则是纯素，或只需一步替换：高汤换成泡香菇水，麻婆豆腐去掉肉末即可。",
  },
  {
    qEn: "What if I can't find Chinese vegetables near me?",
    qZh: "买不到中式蔬菜怎么办？",
    aEn: "Substitute by texture, not by name. Bok choy gives way to regular cabbage or spinach; Chinese chives to scallion greens or a mild onion; wood ear to any firm mushroom; fresh wheat noodles to dried ones. The pantry side is easier: doubanjiang, dried shiitake and fermented bean curd keep for months, so they only ever need one order.",
    aZh: "按口感替换，别死磕名字。小白菜换成普通卷心菜或菠菜；韭菜换成葱绿或口味温和的洋葱；木耳换成任何一种肉质紧实的菌菇；鲜面条换成干面条。调料这边更好办：豆瓣酱、干香菇、腐乳都能放几个月，下单一次就够用很久。",
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

  // P1-7：英文侧排名攻坚（/en/recipes/vegetarian 359 曝光 / 排名 72.1）——
  // 正文扩容 + 每道菜一行数据（用时/难度/饮食标签/主料全部由菜谱真实数据派生，不虚构）
  const dietLabel = (d: string) =>
    isZh ? ({ vegetarian: "素食", vegan: "纯素", "gluten-free": "无麸质", "dairy-free": "无奶" } as Record<string, string>)[d] ?? d : d;
  const dishLines = dishRecipes.map((r) => ({
    slug: r.slug,
    name: isZh ? r.titleZh : r.titleEn,
    line: isZh
      ? `${r.timeMin} 分钟，${
          r.difficulty === "easy" ? "简单" : r.difficulty === "medium" ? "进阶" : "硬核"
        }，${r.dietary.map(dietLabel).join(" / ")}；主料：${r.ingredients
          .slice(0, 3)
          .map((i) => i.nameZh)
          .join("、")}。`
      : `${r.timeMin} min · ${r.difficulty} · ${r.dietary.join(", ")} · ${r.ingredients
          .slice(0, 3)
          .map((i) => i.nameEn.split(",")[0].slice(0, 34))
          .join(", ")}.`,
  }));

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

        {/* P1-7：聚合页正文扩容——隐形荤料 / 均衡搭配公式 / 素菜常备调料 / 每道菜一行（含内链）。
            全部为通用中餐常识 + 本页菜谱真实数据，不虚构任何菜谱事实。 */}
        <section className="mt-14 max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "中餐里的五个隐形荤料：点菜前先确认" : "Five hidden non-vegetarian ingredients in Chinese cooking"}
          </h2>
          <p className="mt-3 leading-relaxed text-[var(--hw-fg-muted)]">
            {isZh
              ? "中式菜单看起来对素食者很友好，但有几味调料会在你看不见的地方带来荤腥。它们都不难替换，难的是知道它们藏在哪——下面五条按出现频率从高到低排列，换掉它们，一桌素菜才算真的素。"
              : "Chinese menus look vegetarian-friendly, but a handful of seasonings quietly carry meat or seafood. None are hard to work around — the trick is knowing where they hide. Below, the five you will meet most often, in rough order of frequency, with a swap for each."}
          </p>
          <ul className="mt-3 space-y-2 leading-relaxed text-[var(--hw-fg-muted)]">
            {(isZh
              ? [
                  { t: "蚝油", a: "用牡蛎提取物熬成，粤菜里白灼/蒜蓉青菜的默认调味，连菜名都叫「蚝油生菜」。替换：素蚝油（菌菇基底），或生抽 + 少许糖 + 一勺泡香菇水。" },
                  { t: "鱼露", a: "发酵鳀鱼制成，南方小炒和蘸汁里常见。替换：生抽加一小撮糖，或用市售素鱼露。" },
                  { t: "鸡高汤 / 高汤", a: "烧、炖、汤甚至蒸蛋的默认液体。替换：泡干香菇的水、昆布水，或清水加少量额外生抽。" },
                  { t: "猪油", a: "部分面点、青菜和葱油饼的传统用油。替换：中性植物油 + 一小滴香油补香气。" },
                  { t: "虾皮 / 虾酱", a: "XO 酱和不少「素炒」里用来提鲜。替换：腐乳、豆瓣酱，或多加香菇。" },
                ]
              : [
                  { t: "Oyster sauce", a: "Made from oyster extract; the default dressing for blanched or garlic greens in Cantonese cooking — the dish is literally named after it. Swap: mushroom-based vegetarian oyster sauce, or light soy plus a pinch of sugar and a spoon of shiitake soaking water." },
                  { t: "Fish sauce", a: "Fermented anchovy; common in southern stir-fries and dipping sauces. Swap: light soy with a pinch of sugar, or a vegan fish sauce." },
                  { t: "Chicken stock", a: "The default liquid in braises, soups and even steamed egg. Swap: dried-shiitake soaking water, kombu water, or plain water with a little extra soy." },
                  { t: "Lard", a: "Still the traditional fat for some noodles, greens and scallion pancakes. Swap: a neutral oil with one drop of toasted sesame oil for aroma." },
                  { t: "Dried shrimp / shrimp paste", a: "Common in XO sauce and in stir-fries that look vegetarian for added umami. Swap: fermented bean curd, doubanjiang, or extra shiitake." },
                ]
            ).map((x) => (
              <li key={x.t}>
                <span className="font-medium text-[var(--hw-fg)]">{x.t}</span>
                {isZh ? "：" : ": "}
                {x.a}
              </li>
            ))}
          </ul>
          <p className="mt-3 leading-relaxed text-[var(--hw-fg-muted)]">
            {isZh
              ? "在外点菜时说一句「素，不要蚝油和鱼露」，比只说「不要肉」有效得多——大部分厨房都乐意配合，因为替换成本几乎为零。"
              : "When ordering out, asking for the dish \"vegetarian — no oyster sauce, no fish sauce\" works far better than simply \"no meat\": the swap costs a kitchen nothing, so the answer is almost always yes."}
          </p>

          <h2 className="mt-10 font-serif text-2xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "怎么搭出一桌均衡的素食中餐" : "How to build a balanced vegetarian Chinese meal"}
          </h2>
          <p className="mt-3 leading-relaxed text-[var(--hw-fg-muted)]">
            {isZh
              ? "一桌好吃的素食中餐由三件事撑起来：一份蛋白质、一组口感对比、一勺能扛鲜味的酱。蛋白质来自豆腐、鸡蛋、毛豆、面筋；口感对比指「脆 + 滑 + 韧」至少占两样；鲜味则交给豆瓣酱、腐乳、酱油和香菇水。三道菜的组合最容易验证这个公式：一道主食或面点、一道重味下饭菜、一道清口凉菜——比如葱油饼配麻婆豆腐（去掉肉末）再加拍黄瓜。"
              : "A satisfying vegetarian Chinese meal rests on three things: a protein, a texture contrast, and a sauce that carries umami. Protein comes from tofu, eggs, edamame or wheat gluten; texture contrast means putting at least two of crisp, silky and chewy on the table; umami comes from doubanjiang, fermented bean curd, soy sauce or shiitake water. Three dishes are enough to make the formula work: one staple or carb, one bold dish built for rice, one cool palate-cleanser — scallion pancakes with mapo tofu (hold the pork) and smashed cucumber, for instance."}
          </p>

          <h2 className="mt-10 font-serif text-2xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "素菜常备调料：八样东西够开一整周的火" : "The vegetarian Chinese pantry: eight things cover a whole week"}
          </h2>
          <ul className="mt-3 space-y-2 leading-relaxed text-[var(--hw-fg-muted)]">
            {(isZh
              ? [
                  { t: "生抽 + 老抽", a: "生抽给咸鲜，老抽只给颜色——红烧类两样都要，炒菜只用生抽。" },
                  { t: "镇江香醋", a: "凉拌、酸辣和蘸汁的酸味基准，比米醋酸香更厚。" },
                  { t: "郫县豆瓣酱", a: "川味素菜的灵魂，剁细后用小火炒出红油再下其他料。" },
                  { t: "腐乳", a: "素食提鲜的捷径，一小块就能让炒青菜有「汤底感」。" },
                  { t: "干香菇", a: "泡发的水就是素高汤，烧豆腐和炖菜全靠它。" },
                  { t: "香油与花椒", a: "收尾用：香油出锅前淋，花椒热油激出麻香。" },
                ]
              : [
                  { t: "Light + dark soy", a: "Light soy brings salt and savor; dark soy only brings colour — braises need both, stir-fries usually just the light one." },
                  { t: "Chinkiang black vinegar", a: "The acid baseline for cold dishes, hot-and-sour and dipping sauces — deeper than rice vinegar." },
                  { t: "Doubanjiang", a: "The soul of Sichuan-style vegetarian cooking: mince it, fry it gently until the red oil separates, then add everything else." },
                  { t: "Fermented bean curd", a: "The shortcut to depth — a single cube gives stir-fried greens a stock-like backbone." },
                  { t: "Dried shiitake", a: "The soaking water is your vegetarian stock; braised tofu and stews depend on it." },
                  { t: "Sesame oil + Sichuan peppercorn", a: "For finishing: sesame oil off the heat, peppercorns bloomed in hot oil for the numbing edge." },
                ]
            ).map((x) => (
              <li key={x.t}>
                <span className="font-medium text-[var(--hw-fg)]">{x.t}</span>
                {isZh ? "：" : ": "}
                {x.a}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-2xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "每道菜一行：用时、难度与饮食标签" : "Every dish at a glance: time, difficulty, diet"}
          </h2>
          <ul className="mt-3 space-y-2 leading-relaxed text-[var(--hw-fg-muted)]">
            {dishLines.map((d) => (
              <li key={d.slug}>
                <Link href={localizePath(`/recipes/${d.slug}`, loc)} className="font-medium text-[var(--hw-accent)] hover:underline">
                  {d.name}
                </Link>
                {isZh ? "：" : " — "}
                {d.line}
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-[var(--hw-fg-muted)]">
            {isZh ? "按食材继续逛：" : "Browse by ingredient next: "}
            {[
              { slug: "tofu", label: isZh ? "豆腐菜谱" : "tofu recipes" },
              { slug: "egg", label: isZh ? "鸡蛋菜谱" : "egg recipes" },
              { slug: "noodles", label: isZh ? "面食菜谱" : "noodle recipes" },
              { slug: "dumplings", label: isZh ? "面点菜谱" : "dumpling recipes" },
            ].map((x, i) => (
              <span key={x.slug}>
                {i > 0 ? (isZh ? "、" : ", ") : ""}
                <Link href={localizePath(`/recipes/${x.slug}`, loc)} className="text-[var(--hw-accent)] hover:underline">
                  {x.label}
                </Link>
              </span>
            ))}
            {isZh ? "；也可以看" : "; or see our "}
            <Link href={localizePath("/occasion/summer", loc)} className="text-[var(--hw-accent)] hover:underline">
              {isZh ? "夏日凉菜菜单" : "summer cold-dish menu"}
            </Link>
            {isZh ? "。" : "."}
          </p>
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
