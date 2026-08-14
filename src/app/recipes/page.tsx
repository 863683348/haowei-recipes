import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RecipeCard } from "@/components/recipe-card";
import { filterRecipes, cuisineOptions } from "@/data/recipes";

export const metadata: Metadata = {
  title: "All Recipes",
  description:
    "Browse authentic Chinese home-cooking recipes — filter by cuisine, difficulty, time, and dietary needs. English recipes with bilingual terms and substitutions.",
};

export const dynamic = "force-static";

interface Props {
  searchParams: Promise<{
    cuisine?: string;
    difficulty?: string;
    time?: string;
    diet?: string;
    tag?: string;
    q?: string;
  }>;
}

export default async function RecipesPage({ searchParams }: Props) {
  const sp = await searchParams;
  const filter = {
    cuisine: sp.cuisine,
    difficulty: sp.difficulty,
    maxTime: sp.time ? Number(sp.time) : undefined,
    diet: sp.diet,
    query: sp.q,
  };
  const list = filterRecipes(filter);

  const timeOptions = [
    { value: "15", label: "≤ 15 min" },
    { value: "30", label: "≤ 30 min" },
    { value: "45", label: "≤ 45 min" },
  ];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">All recipes</h1>
        <p className="mt-2 text-[var(--hw-fg-muted)]">
          {list.length} recipe{list.length === 1 ? "" : "s"} · every ingredient bilingual,
          every "look" step has a state note.
        </p>

        {/* 筛选条 */}
        <form className="mt-6 flex flex-wrap items-center gap-2" method="get">
          <select
            name="cuisine"
            defaultValue={sp.cuisine ?? ""}
            className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3 py-2 text-sm text-[var(--hw-fg)]"
          >
            <option value="">All cuisines</option>
            {cuisineOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            name="difficulty"
            defaultValue={sp.difficulty ?? ""}
            className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3 py-2 text-sm text-[var(--hw-fg)]"
          >
            <option value="">Any difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select
            name="time"
            defaultValue={sp.time ?? ""}
            className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3 py-2 text-sm text-[var(--hw-fg)]"
          >
            <option value="">Any time</option>
            {timeOptions.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
          <select
            name="diet"
            defaultValue={sp.diet ?? ""}
            className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3 py-2 text-sm text-[var(--hw-fg)]"
          >
            <option value="">Any diet</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="none">No restriction</option>
          </select>
          <input
            name="q"
            defaultValue={sp.q ?? ""}
            placeholder="Search…"
            className="min-w-32 flex-1 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-3 py-2 text-sm text-[var(--hw-fg)] outline-none focus:border-[var(--hw-ginger)]"
          />
          <button
            type="submit"
            className="rounded-lg bg-[var(--hw-soy)] px-4 py-2 text-sm font-semibold text-white dark:bg-[var(--hw-ginger)]"
          >
            Filter
          </button>
          {Object.keys(filter).some((k) => filter[k as keyof typeof filter]) && (
            <Link
              href="/recipes"
              className="text-sm font-medium text-[var(--hw-fg-muted)] hover:text-[var(--hw-ginger)]"
            >
              Reset
            </Link>
          )}
        </form>

        {list.length === 0 ? (
          <p className="mt-10 rounded-xl border border-dashed border-[var(--hw-border)] p-8 text-center text-[var(--hw-fg-muted)]">
            No recipes match those filters yet — we&apos;re adding new dishes every week.
          </p>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
