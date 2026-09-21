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
  // P0-1：SERP 专用 title/desc 优先（如 summer 命中「凉菜菜单」意图），无 seo 字段时回退默认「{zh}菜单」
  const title = isZh
    ? (def.seoTitleZh ?? `${def.zh}菜单`)
    : (def.seoTitleEn ?? `${def.en} Menu — Chinese Recipes`);
  const desc = isZh ? (def.seoDescZh ?? def.introZh) : (def.seoDescEn ?? def.introEn);
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

  // P0-1：H1 与 SERP title 同源（剥掉「| HǎoWèi 好味」品牌后缀），使 h1/title 主题一致
  const seoTitle = isZh ? def.seoTitleZh : def.seoTitleEn;
  const h1Text = seoTitle
    ? seoTitle.split("|")[0].trim()
    : `${def.zh} ${def.en}`;

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

  // P0-2：正文扩充——每道菜一句话（菜系 / 用时 / 难度 / 主料全部由菜谱真实数据派生，不虚构），
  // 解决「聚合页排名高但正文薄」的错配（/zh/occasion/summer 曾仅 2,063 字符）
  const dishLines = list.map((r) => ({
    slug: r.slug,
    name: isZh ? r.titleZh : r.titleEn,
    line: isZh
      ? `${r.timeMin} 分钟即可上桌，${
          r.difficulty === "easy" ? "简单" : r.difficulty === "medium" ? "进阶" : "硬核"
        }难度，主料：${r.ingredients.slice(0, 3).map((i) => i.nameZh).join("、")}。`
      : `Ready in ${r.timeMin} min, ${r.difficulty} difficulty. Key ingredients: ${r.ingredients
          .slice(0, 3)
          .map((i) => i.nameEn)
          .join(", ")}.`,
  }));

  const faqs = isZh
    ? [
        {
          q: "凉菜可以提前一晚做好吗？",
          a: "大部分可以。需要泡发、腌制的食材和卤味类，提前一晚准备反而更入味；但黄瓜、绿叶菜这类现拌现吃才脆，调味留到上桌前再做。",
        },
        {
          q: "凉菜怎么保存？",
          a: "密封盒冷藏、生熟分开、酱汁和食材分开存放，吃之前再拌。当天做当天吃最稳妥；海鲜类凉菜不建议隔夜。",
        },
        {
          q: `一桌${name}配几道合适？`,
          a: "家常 4–6 道、宴客 8–12 道，按每人 1.5–2 道估算，再留一道冰甜的收尾就不会错。",
        },
      ]
    : [
        {
          q: "Can I make these a day ahead?",
          a: "Mostly yes. Ingredients that need soaking, marinating, or braising actually benefit from an overnight rest; cucumbers and leafy salads should be dressed right before serving to stay crisp.",
        },
        {
          q: "How should cold dishes be stored?",
          a: "Airtight containers in the fridge, raw and cooked kept separate, dressing stored apart and tossed just before serving. Same-day is best; seafood cold dishes should not be kept overnight.",
        },
        {
          q: `How many dishes for a ${name.toLowerCase()} spread?`,
          a: "4–6 for a family dinner, 8–12 for guests — roughly 1.5–2 dishes per person, plus one icy-sweet finisher.",
        },
      ];

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

        {/* P0-1：H1 必须与 SERP title 同源——h1 说「夏日清爽」而 title 说「凉菜菜单」时
            主题信号冲突，是 11,348 曝光 / 排名 5.9 / 0 点击的直接成因。
            有 seoTitle 时 h1 用 seoTitle（去掉品牌后缀「| HǎoWèi 好味」），否则回退「{zh} {en}」 */}
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)] sm:text-4xl">
          {h1Text}
          <span className="mt-1 block text-base font-normal text-[var(--hw-fg-muted)]">
            {isZh ? def.en : def.zh}
          </span>
        </h1>
        <p className="mt-2 max-w-3xl text-[var(--hw-fg-muted)]">{isZh ? def.introZh : def.introEn}</p>
        {/* P0-1：zh summer 收割「凉菜菜单」意图——可见导语 + 内链到凉菜博客，把排名 2.46 的零点击查询接住 */}
        {isZh && def.slug === "summer" && (
          <p className="mt-3 max-w-3xl rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-4 text-sm text-[var(--hw-fg)]">
            2026 夏日凉菜菜单：本页 15 道清爽开胃菜——拍黄瓜、凉拌木耳、白灼虾、杨枝甘露等，提前备好、落座即上。
            想系统学凉菜怎么拼一桌，看
            <Link
              href={localizePath("/blog/chinese-cold-dishes-appetizers", loc)}
              className="mx-1 font-medium text-[var(--hw-ginger)] underline underline-offset-2 hover:text-[var(--hw-ginger-dark)]"
            >
              《宴会凉菜怎么拼一桌：15 道凉拌菜的上桌顺序与搭配》
            </Link>
            。
          </p>
        )}
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

        {/* P0-2：正文扩充——上桌逻辑 / 备菜时间表 / 每道菜一句话 / 调味公式 / FAQ。
            全部由本页真实菜谱数据 + 通用凉菜知识驱动，不虚构任何菜谱事实。 */}
        <section className="mt-14 max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
            {isZh ? `这一桌${name}怎么拼：上桌顺序与搭配逻辑` : `How to build a ${name.toLowerCase()} spread`}
          </h2>
          <p className="mt-3 leading-relaxed text-[var(--hw-fg-muted)]">
            {isZh
              ? `一桌凉菜的讲究不在「多」，而在顺序和口感层次：先用脆爽的菜打开胃口，中间安排一两道有分量的荤凉撑住场面，最后用冰凉清甜的收尾。这一桌 ${count} 道菜按「开胃 → 撑场 → 收尾」的思路自由组合即可，注意重口（蒜香、红油）与清淡（白灼、清拌）交错出现，互不抢味；每道菜之间最好再来点颜色上的呼应，绿配白、红配金，端上桌才有一桌菜的样子。人少挑 4–6 道，人多照单全收。`
              : `A good cold-dish spread is about sequencing, not quantity: crisp appetizers first, one or two substantial platters in the middle, an icy-sweet finisher at the end. Mix any ${count} dishes from this page following that arc, alternating bold flavors (garlic, chili oil) with clean ones (poached, lightly dressed) so nothing fights for attention — and echo the colors across the table, green against white, red against gold, so the spread looks composed rather than crowded. Pick 4–6 for a small table, take the whole list for a crowd.`}
          </p>

          <h2 className="mt-10 font-serif text-2xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "提前备菜时间表：最后一刻不用开火" : "Make-ahead timeline: no last-minute cooking"}
          </h2>
          <p className="mt-3 leading-relaxed text-[var(--hw-fg-muted)]">
            {isZh
              ? "凉菜最大的优势是能提前做。前一天晚上，处理需要泡发、腌制的食材，把酱汁调好冷藏；开饭前两三个小时，完成需要入味的拌菜和需要放凉再切的蒸煮菜——调味宁淡勿咸，上桌前再补盐补酸，冷藏过的菜风味会稍稍收敛；开饭前十分钟只做三件事：摆盘、淋汁、撒最后一把香菜或葱花。这样安排下来，全程开火不超过半小时，厨房不再像蒸笼，主人也能坐下来一起吃饭。"
              : "Cold dishes win because they can be made ahead. The night before, handle anything that needs soaking or marinating and mix the dressings. Two to three hours before dinner, finish the salads that need seasoning time and the poached items that must chill before slicing — season lightly, because cold mutes flavor; correct salt and acid right before serving. Ten minutes out, do only three things: plate, dress, and scatter the final herbs. Total stove time stays under half an hour, and the cook gets to sit down too."}
          </p>

          <h2 className="mt-10 font-serif text-2xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "每道菜一句话：用时、难度与主料" : "Every dish at a glance: time, difficulty, key ingredients"}
          </h2>
          <ul className="mt-3 space-y-2 leading-relaxed text-[var(--hw-fg-muted)]">
            {dishLines.map((d) => (
              <li key={d.slug}>
                <Link
                  href={localizePath(`/recipes/${d.slug}`, loc)}
                  className="font-medium text-[var(--hw-ginger)] underline underline-offset-2 hover:text-[var(--hw-ginger-dark)]"
                >
                  {d.name}
                </Link>
                {isZh ? "：" : ": "}
                {d.line}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-2xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "调味公式：四种万能凉菜汁" : "Four dressings that cover every cold dish"}
          </h2>
          <p className="mt-3 leading-relaxed text-[var(--hw-fg-muted)]">
            {isZh
              ? "蒜泥汁（蒜 + 醋 + 糖 + 少量生抽）配瓜果类最提味；红油汁在蒜泥汁的基础上泼一勺热油激出香气，适合重口凉拌；麻酱汁（芝麻酱用温水澥开 + 蒜 + 醋）裹拌菜和面食都好使；捞汁（生抽 + 醋 + 糖 + 冰水 + 小米辣）最清爽，泡海鲜和素菜皆宜。备齐这四种汁，这一桌菜的底味就有了，临时加菜也不慌。"
              : "Garlic dressing (garlic, vinegar, sugar, a splash of soy) lifts anything with melon or leafy crunch; chili-oil dressing blooms that same garlic base with hot oil for bolder palates; sesame paste loosened with warm water, garlic, and vinegar coats salads and noodles alike; and lou shao — soy, vinegar, sugar, ice water, fresh chili — is the cleanest of the four, ideal for seafood and vegetables. With these four in the fridge, every dish on this page has its base flavor covered, and last-minute additions stop being a scramble."}
          </p>

          <h2 className="mt-10 font-serif text-2xl font-semibold text-[var(--hw-fg)]">
            {isZh ? "常见问题" : "FAQ"}
          </h2>
          <div className="mt-3 space-y-4">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-[var(--hw-fg)]">{f.q}</h3>
                <p className="mt-1 leading-relaxed text-[var(--hw-fg-muted)]">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

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
