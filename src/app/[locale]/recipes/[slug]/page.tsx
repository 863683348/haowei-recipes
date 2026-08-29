import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IngredientList } from "@/components/ingredient-list";
import { StateNote } from "@/components/state-note";
import { FlavorAdjuster } from "@/components/flavor-adjuster";
import { AIAssistant } from "@/components/ai-assistant";
import { ShoppingListButton } from "@/components/shopping-list-button";
import { RecipeCard } from "@/components/recipe-card";
import { RecipeHeroImage } from "@/components/recipe-hero-image";
import { RecipeViews } from "@/components/recipe-views";
import { RecipeComments } from "@/components/recipe-comments";
import { BowlIcon, LeafIcon, BulbIcon, ClockIcon } from "@/components/icons";
import { getRecipeBySlug, recipes, getRelatedRecipes } from "@/data/recipes";
import { getMealPlan, type DishRole } from "@/data/pairings";
import { getDepthFields } from "@/data/depth-fields";
import { locales, isLocale, localizePath, pageAlternates, absoluteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

/** 动态段静态化：6 篇菜谱 × 2 语言 全部静态生成 */
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    recipes.map((r) => ({ locale, slug: r.slug }))
  );
}

export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const loc = locale as Locale;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return {};
  const t = getDictionary(loc);
  const isZh = loc === "zh";
  const title = isZh ? recipe.titleZh : recipe.titleEn;
  const cuisine = isZh ? recipe.cuisine : recipe.cuisineEn ?? recipe.cuisine;
  // 修复描述 bug：titleEn 已含中文括号，去掉拼接 `(titleZh)` 避免重复；
  // 中文版用拼音代替 titleEn 在括号里，避免 (中文)（中文）双重括号。
  const desc = isZh
    ? `${recipe.titleZh}（${recipe.pinyin}）——${recipe.cuisine}家常做法，${recipe.timeMin} 分钟。中英对照食材、替换方案与分步状态说明。`
    : `${recipe.titleEn} — an authentic ${cuisine} home recipe in ${recipe.timeMin} minutes. Bilingual ingredients, substitutions, and step-by-step state photos.`;
  const pageUrl = absoluteUrl(localizePath(`/recipes/${recipe.slug}`, loc));
  const imageUrl = absoluteUrl(recipe.image);
  const fullTitle = t.metadata.recipeTitle.replace("{title}", title);

  return {
    title: fullTitle,
    description: desc,
    alternates: pageAlternates(`/recipes/${recipe.slug}`, loc),
    openGraph: {
      type: "article",
      locale: loc === "zh" ? "zh_CN" : "en_US",
      siteName: "HǎoWèi 好味",
      title: fullTitle,
      description: desc,
      url: pageUrl,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [imageUrl],
    },
  };
}

export default async function RecipePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  const related = getRelatedRecipes(recipe);
  const title = isZh ? recipe.titleZh : recipe.titleEn;
  const subtitle = isZh
    ? `${recipe.titleEn} · ${recipe.pinyin}`
    : `${recipe.titleZh} · ${recipe.pinyin}`;
  const cuisine = isZh ? recipe.cuisine : recipe.cuisineEn ?? recipe.cuisine;
  const region = isZh ? recipe.regionZh ?? recipe.region : recipe.region;
  const story = isZh ? recipe.storyZh ?? recipe.story : recipe.story;
  const versionNote = isZh
    ? recipe.versionNoteZh ?? recipe.versionNote
    : recipe.versionNote;
  const pageUrl = absoluteUrl(localizePath(`/recipes/${recipe.slug}`, loc));
  const imageUrl = absoluteUrl(recipe.image);

  // Recipe 结构化数据（SEO，按语言输出；增强 E-E-A-T / citation）
  const editorialPolicyUrl = absoluteUrl(localizePath("/editorial-policy", loc));
  const authorUrl = absoluteUrl(localizePath("/about", loc));
  const recipeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: title,
    alternateName: isZh ? recipe.titleEn : recipe.titleZh,
    description: `${title} — ${cuisine}${region} home cooking.`,
    image: [imageUrl],
    author: {
      "@type": "Person",
      name: isZh ? "HǎoWèi 好味测试厨房" : "HǎoWèi Test Kitchen",
      jobTitle: isZh ? "家常菜研究与测试团队" : "Home-cooking research team",
      url: authorUrl,
      worksFor: {
        "@type": "Organization",
        name: "HǎoWèi 好味",
        url: absoluteUrl("/"),
      },
    },
    reviewedBy: {
      "@type": "Organization",
      name: isZh ? "HǎoWèi 好味编辑团队" : "HǎoWèi editorial team",
      url: editorialPolicyUrl,
    },
    datePublished: "2026-08-14",
    dateModified: "2026-08-29",
    mainEntityOfPage: pageUrl,
    keywords: [...recipe.tags, cuisine, recipe.pinyin].join(", "),
    recipeCuisine: cuisine,
    recipeCategory: "Chinese home cooking",
    totalTime: `PT${recipe.timeMin}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeIngredient: recipe.ingredients.map((i) =>
      isZh ? i.nameZh : i.nameEn
    ),
    recipeInstructions: recipe.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text:
        (isZh ? s.textZh ?? s.text : s.text) +
        (s.stateNote
          ? ` (${isZh ? s.stateNote.visualZh ?? s.stateNote.visual : s.stateNote.visual})`
          : ""),
    })),
    suitableForDiet: recipe.dietary
      .filter((d) => d !== "none")
      .map((d) => `https://schema.org/${d === "vegetarian" ? "VegetarianDiet" : "Diet"}`),
    citation: [
      {
        "@type": "WebPage",
        name: isZh ? "HǎoWèi 编辑政策" : "HǎoWèi Editorial Policy",
        url: editorialPolicyUrl,
      },
      {
        "@type": "Book",
        name: "Land of Plenty: A Treasury of Authentic Sichuan Cooking",
        author: "Fuchsia Dunlop",
      },
      {
        "@type": "WebPage",
        name: "USDA FoodData Central",
        url: "https://fdc.nal.usda.gov/",
      },
    ],
  };

  // BreadcrumbList JSON-LD（谷歌面包屑 SERP 富结果）
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
        name: title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-10">
        {/* 可见面包屑（结构化数据 + 用户导航） */}
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
              {title}
            </li>
          </ol>
        </nav>

        {/* Hero 图（og:image + 视觉封面） */}
        <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-xl">
          <RecipeHeroImage
            src={recipe.image}
            alt={`${title} — ${cuisine} recipe hero image`}
          />
        </div>

        {/* 元信息 */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-[var(--hw-ginger)]/15 px-2.5 py-1 font-semibold text-[var(--hw-ginger)]">
            {cuisine}
          </span>
          <span className="rounded-full bg-[var(--hw-bg-soft)] px-2.5 py-1 text-[var(--hw-fg-muted)]">
            {t.common.difficulty[recipe.difficulty]}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--hw-bg-soft)] px-2.5 py-1 text-[var(--hw-fg-muted)]">
            <ClockIcon className="h-3.5 w-3.5" /> {recipe.timeMin} {t.common.minutes}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--hw-bg-soft)] px-2.5 py-1 text-[var(--hw-fg-muted)]">
            <BowlIcon className="h-3.5 w-3.5" /> {t.common.serves} {recipe.servings}
          </span>
          {recipe.dietary.filter((d) => d !== "none").map((d) => (
            <span
              key={d}
              className="inline-flex items-center gap-1 rounded-full bg-[rgba(74,124,89,0.15)] px-2.5 py-1 font-medium text-[var(--hw-scallion)]"
            >
              <LeafIcon className="h-3.5 w-3.5" /> {t.common.dietary[d]}
            </span>
          ))}
          <RecipeViews slug={recipe.slug} />
        </div>

        <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-[var(--hw-fg)] sm:text-4xl">
          {title}
        </h1>
        <p className="mt-1 text-lg text-[var(--hw-fg-muted)]">{subtitle}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <ShoppingListButton recipe={recipe} />
        </div>

        {/* 版本说明（信任要素：家庭快手版 vs 餐厅正宗版） */}
        {versionNote && (
          <div className="mt-4 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg-soft)] p-3 text-sm text-[var(--hw-fg-muted)]">
            <span className="font-semibold text-[var(--hw-fg)]">
              {t.recipeDetail.homeVersion}:
            </span>{" "}
            {versionNote}
          </div>
        )}

        {/* 故事（信任要素：家庭配方来源） */}
        <p className="mt-5 text-sm leading-relaxed text-[var(--hw-fg-muted)]">{story}</p>

        {/* 作者署名 + 审核信息（E-E-A-T / GEO citation） */}
        <div className="mt-5 flex flex-wrap items-center gap-3 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg-soft)] px-4 py-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--hw-ginger)]/15 text-sm font-bold text-[var(--hw-ginger)]">
              H
            </span>
            <div>
              <p className="font-medium text-[var(--hw-fg)]">
                {t.recipeDetail.authorLabel}: {t.recipeDetail.authorName}
              </p>
              <p className="text-xs text-[var(--hw-fg-muted)]">{t.recipeDetail.authorRole}</p>
            </div>
          </div>
          <span className="hidden text-[var(--hw-border)] sm:inline">|</span>
          <p className="text-xs text-[var(--hw-fg-muted)]">
            {t.recipeDetail.reviewedBy} {t.recipeDetail.reviewedByName} · {t.recipeDetail.lastUpdated} 2026-08-29
          </p>
        </div>

        {/* 食材 + 步骤 双栏 */}
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div>
            <IngredientList
              ingredients={recipe.ingredients}
              recipeSlug={recipe.slug}
              recipeTitle={title}
            />
            <div className="mt-6">
              <FlavorAdjuster />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
              {t.recipeDetail.instructions}
            </h3>
            <ol className="mt-3 space-y-5">
              {recipe.steps.map((step, i) => {
                const stepText = isZh ? step.textZh ?? step.text : step.text;
                const tip = isZh ? step.tipZh ?? step.tip : step.tip;
                return (
                  <li key={i} className="border-l-2 border-[var(--hw-border)] pl-4">
                    <p className="text-sm leading-relaxed text-[var(--hw-fg)]">
                      <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--hw-soy)] text-xs font-bold text-white dark:bg-[var(--hw-ginger)]">
                        {i + 1}
                      </span>
                      {stepText}
                    </p>
                    {step.zhHint && (
                      <p className="mt-1 pl-8 text-xs text-[var(--hw-fg-muted)]">{step.zhHint}</p>
                    )}
                    {step.stateNote && <StateNote state={step.stateNote} />}
                    {tip && (
                      <p className="mt-2 flex items-start gap-1 pl-8 text-xs text-[var(--hw-ginger)]">
                        <BulbIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {tip}
                      </p>
                    )}
                  </li>
                );
              })}
            </ol>

            <div className="mt-8">
              <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
                {t.recipeDetail.tips}
              </h3>
              <ul className="mt-2 space-y-1.5">
                {(isZh ? recipe.tipsZh ?? recipe.tips : recipe.tips).map((tip, i) => (
                  <li key={i} className="text-sm text-[var(--hw-fg-muted)]">
                    · {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 来源与参考（GEO citation / E-E-A-T） */}
        <section className="mt-10 rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6">
          <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {t.recipeDetail.referencesTitle}
          </h2>
          <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">{t.recipeDetail.referencesIntro}</p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-[var(--hw-fg-muted)]">
            <li>
              <Link
                href={localizePath("/editorial-policy", loc)}
                className="text-[var(--hw-ginger)] hover:underline"
              >
                {t.recipeDetail.editorialPolicyLink}
              </Link>
            </li>
            <li>
              {isZh ? "邓扶霞（Fuchsia Dunlop）《川菜》（Land of Plenty）—— 技法与味型参考" : "Fuchsia Dunlop, Land of Plenty: A Treasury of Authentic Sichuan Cooking"}
            </li>
            <li>
              {isZh ? "USDA FoodData Central —— 食材营养与分量数据" : "USDA FoodData Central — ingredient nutrition and portion data"}
            </li>
            <li>
              {isZh ? "中国传统家庭厨房实践与地域口味记录" : "Traditional Chinese family-kitchen practice and regional taste records"}
            </li>
          </ul>
        </section>

        {/* 深度字段（P1-1：替代指南 / 翻车点 / 变花样） */}
        {(() => {
          const depth = getDepthFields(recipe.slug);
          if (!depth) return null;
          const subs = depth.ingredientSubs ?? [];
          const mistakes = depth.commonMistakes ?? [];
          const vars = isZh
            ? depth.variationsZh ?? depth.variations ?? []
            : depth.variations ?? [];
          const hasAny = subs.length > 0 || mistakes.length > 0 || vars.length > 0;
          if (!hasAny) return null;
          return (
            <section className="mt-14 grid gap-6 md:grid-cols-2">
              {/* 替代指南 */}
              {subs.length > 0 && (
                <div className="rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6">
                  <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
                    {t.recipeDetail.depthSubs}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">
                    {t.recipeDetail.depthSubsDesc}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {subs.map((s, i) => {
                      const from = isZh ? s.fromZh ?? s.from : s.from;
                      const to = isZh ? s.toZh ?? s.to : s.to;
                      const note = isZh ? s.noteZh ?? s.note : s.note;
                      return (
                        <li key={i} className="rounded-xl bg-[var(--hw-bg-soft)] p-3">
                          <p className="text-sm font-semibold text-[var(--hw-fg)]">
                            {t.recipeDetail.swap}: {from}
                          </p>
                          <p className="mt-1 text-sm text-[var(--hw-ginger)]">
                            → {to}
                          </p>
                          <p className="mt-1 text-xs text-[var(--hw-fg-muted)]">
                            {t.recipeDetail.ratioLabel}: {s.ratio} · {note}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* 翻车点 */}
              {mistakes.length > 0 && (
                <div className="rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6">
                  <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
                    {t.recipeDetail.depthMistakes}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">
                    {t.recipeDetail.depthMistakesDesc}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {mistakes.map((m, i) => {
                      const mistake = isZh ? m.mistakeZh ?? m.mistake : m.mistake;
                      const fix = isZh ? m.fixZh ?? m.fix : m.fix;
                      return (
                        <li key={i} className="rounded-xl bg-[var(--hw-bg-soft)] p-3">
                          <p className="text-sm font-medium text-[var(--hw-fg)]">
                            ✗ {mistake}
                          </p>
                          <p className="mt-1 text-sm text-[var(--hw-scallion)]">
                            ✓ {t.recipeDetail.mistakeFix} {fix}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* 变花样（全宽） */}
              {vars.length > 0 && (
                <div className="rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6 md:col-span-2">
                  <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
                    {t.recipeDetail.depthVars}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">
                    {t.recipeDetail.depthVarsDesc}
                  </p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                    {vars.map((v, i) => (
                      <li
                        key={i}
                        className="rounded-xl border border-dashed border-[var(--hw-border)] bg-[var(--hw-bg-soft)] p-3 text-sm leading-relaxed text-[var(--hw-fg)]"
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          );
        })()}

        {/* 内嵌 AI 问答（R-05） */}
        <section className="mt-14">
          <AIAssistant />
        </section>

        {/* 配什么一起吃（P1-3 内链矩阵：一顿饭 = 主+配+主食+汤） */}
        {(() => {
          const plan = getMealPlan(recipe.slug);
          const entries = (
            [
              ["main", t.recipeDetail.pairingMain],
              ["side", t.recipeDetail.pairingSide],
              ["staple", t.recipeDetail.pairingStaple],
              ["soup", t.recipeDetail.pairingSoup],
            ] as [DishRole, string][]
          ).filter(([role]) => plan[role]);
          if (entries.length === 0) return null;
          return (
            <section className="mt-14 rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6">
              <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
                {t.recipeDetail.pairingTitle}
              </h2>
              <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">
                {t.recipeDetail.pairingDesc}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {entries.map(([role, label]) => {
                  const r = plan[role]!;
                  const name = isZh ? r.titleZh : r.titleEn;
                  return (
                    <Link
                      key={role}
                      href={localizePath(`/recipes/${r.slug}`, loc)}
                      className="group rounded-xl border border-[var(--hw-border)] bg-[var(--hw-bg-soft)] p-4 transition hover:border-[var(--hw-ginger)] hover:shadow-sm"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--hw-ginger)]">
                        {label}
                      </p>
                      <p className="mt-1.5 font-serif text-sm font-semibold leading-snug text-[var(--hw-fg)] group-hover:text-[var(--hw-ginger)]">
                        {name}
                      </p>
                      <p className="mt-1 text-xs text-[var(--hw-fg-muted)]">
                        {r.timeMin} {t.common.minutes}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })()}

        {/* 评论区（P1-2 社交证明） */}
        <section className="mt-14">
          <RecipeComments slug={recipe.slug} />
        </section>

        {/* 相关菜谱 */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
              {t.recipeDetail.cookNext}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 6).map((r) => (
                <RecipeCard key={r.slug} recipe={r} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
