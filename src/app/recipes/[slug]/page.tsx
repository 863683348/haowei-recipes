import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { IngredientList } from "@/components/ingredient-list";
import { StateNote } from "@/components/state-note";
import { FlavorAdjuster } from "@/components/flavor-adjuster";
import { AIAssistant } from "@/components/ai-assistant";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug, recipes, getRelatedRecipes } from "@/data/recipes";

interface Props {
  params: Promise<{ slug: string }>;
}

/** 动态段静态化（skill 铁律：动态段必须 generateStaticParams） */
export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return {};
  return {
    title: `${recipe.titleEn} Recipe`,
    description: `${recipe.titleEn} (${recipe.titleZh}) — an authentic ${recipe.cuisine} home recipe in ${recipe.timeMin} minutes. Bilingual ingredients, substitutions, and step-by-step state photos.`,
    keywords: [
      recipe.titleEn.toLowerCase(),
      recipe.titleZh,
      `${recipe.titleEn.toLowerCase()} recipe`,
      "authentic chinese home cooking",
      "easy chinese dinner",
    ],
    alternates: { canonical: `/recipes/${recipe.slug}` },
  };
}

export default async function RecipePage({ params }: Props) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  const related = getRelatedRecipes(recipe);

  // Recipe 结构化数据（SEO）
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.titleEn,
    alternateName: recipe.titleZh,
    description: `${recipe.titleEn} — authentic ${recipe.cuisine} home cooking from ${recipe.region}.`,
    recipeCuisine: recipe.cuisine,
    recipeCategory: "Chinese home cooking",
    totalTime: `PT${recipe.timeMin}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeIngredient: recipe.ingredients.map((i) => i.nameEn),
    recipeInstructions: recipe.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: s.text + (s.stateNote ? ` (${s.stateNote.visual})` : ""),
    })),
    suitableForDiet: recipe.dietary
      .filter((d) => d !== "none")
      .map((d) => `https://schema.org/${d === "vegetarian" ? "VegetarianDiet" : "Diet"}`),
  };

  const difficultyLabel = { easy: "Easy", medium: "Medium", hard: "Hard" } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-10">
        {/* 元信息 */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-[var(--hw-ginger)]/15 px-2.5 py-1 font-semibold text-[var(--hw-ginger)]">
            {recipe.cuisine}
          </span>
          <span className="rounded-full bg-[var(--hw-bg-soft)] px-2.5 py-1 text-[var(--hw-fg-muted)]">
            {difficultyLabel[recipe.difficulty]}
          </span>
          <span className="rounded-full bg-[var(--hw-bg-soft)] px-2.5 py-1 text-[var(--hw-fg-muted)]">
            ⏱ {recipe.timeMin} min
          </span>
          <span className="rounded-full bg-[var(--hw-bg-soft)] px-2.5 py-1 text-[var(--hw-fg-muted)]">
            🍽 serves {recipe.servings}
          </span>
          {recipe.dietary.filter((d) => d !== "none").map((d) => (
            <span
              key={d}
              className="rounded-full bg-[rgba(74,124,89,0.15)] px-2.5 py-1 font-medium text-[var(--hw-scallion)]"
            >
              {d === "vegetarian" ? "🌱 Vegetarian-ok" : d}
            </span>
          ))}
        </div>

        <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-[var(--hw-fg)] sm:text-4xl">
          {recipe.titleEn}
        </h1>
        <p className="mt-1 text-lg text-[var(--hw-fg-muted)]">
          {recipe.titleZh} · {recipe.pinyin}
        </p>

        {/* 版本说明（信任要素：家庭快手版 vs 餐厅正宗版） */}
        <div className="mt-4 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg-soft)] p-3 text-sm text-[var(--hw-fg-muted)]">
          <span className="font-semibold text-[var(--hw-fg)]">家庭快手版 · Home version:</span>{" "}
          {recipe.versionNote}
        </div>

        {/* 故事（信任要素：家庭配方来源） */}
        <p className="mt-5 text-sm leading-relaxed text-[var(--hw-fg-muted)]">{recipe.story}</p>

        {/* 食材 + 步骤 双栏 */}
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div>
            <IngredientList
              ingredients={recipe.ingredients}
              recipeSlug={recipe.slug}
              recipeTitle={recipe.titleEn}
            />
            <div className="mt-6">
              <FlavorAdjuster />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
              Instructions
            </h3>
            <ol className="mt-3 space-y-5">
              {recipe.steps.map((step, i) => (
                <li key={i} className="border-l-2 border-[var(--hw-border)] pl-4">
                  <p className="text-sm leading-relaxed text-[var(--hw-fg)]">
                    <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--hw-soy)] text-xs font-bold text-white dark:bg-[var(--hw-ginger)]">
                      {i + 1}
                    </span>
                    {step.text}
                  </p>
                  {step.zhHint && (
                    <p className="mt-1 pl-8 text-xs text-[var(--hw-fg-muted)]">{step.zhHint}</p>
                  )}
                  {step.stateNote && <StateNote state={step.stateNote} />}
                  {step.tip && (
                    <p className="mt-2 pl-8 text-xs text-[var(--hw-ginger)]">💡 {step.tip}</p>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">Tips</h3>
              <ul className="mt-2 space-y-1.5">
                {recipe.tips.map((t, i) => (
                  <li key={i} className="text-sm text-[var(--hw-fg-muted)]">
                    · {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 内嵌 AI 问答（R-05） */}
        <section className="mt-14">
          <AIAssistant />
        </section>

        {/* 相关菜谱 */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
              Cook next
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <RecipeCard key={r.slug} recipe={r} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
