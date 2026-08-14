import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RecipeCard } from "@/components/recipe-card";
import { getRecipeBySlug } from "@/data/recipes";

export const metadata: Metadata = {
  title: "Authentic Chinese Home Cooking — HǎoWèi 好味",
  description:
    "Real Chinese 家常菜 recipes in English with ingredient substitutions, bilingual terms, and step-by-step state photos. From mapo tofu to tomato eggs — cook authentic Chinese food at home.",
};

const featuredSlugs = ["tomato-and-egg", "mapo-tofu", "kung-pao-chicken", "egg-fried-rice"];
const featured = featuredSlugs
  .map((s) => getRecipeBySlug(s))
  .filter((r): r is NonNullable<typeof r> => Boolean(r));

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-[var(--hw-border)] bg-[var(--hw-bg-soft)]">
          <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--hw-ginger)]">
              家常菜 · Chinese home cooking
            </p>
            <h1 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight text-[var(--hw-fg)] sm:text-5xl">
              Authentic Chinese home cooking, made easy
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--hw-fg-muted)] sm:text-lg">
              Real recipes from Chinese family kitchens — in English, with substitutions for
              Western supermarkets, bilingual terms, and state photos so you know exactly what
              to look for. No more "适量".
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/recipes"
                className="rounded-lg bg-[var(--hw-soy)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-[var(--hw-ginger)]"
              >
                Browse all recipes
              </Link>
              <Link
                href="/ai-assistant"
                className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-card)] px-6 py-3 text-sm font-semibold text-[var(--hw-fg)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
              >
                🥢 Ask the AI assistant
              </Link>
            </div>
          </div>
        </section>

        {/* 场景入口 */}
        <section className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
            Cooking for every situation
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "30-minute dinners",
                desc: "Weeknight classics that go from fridge to table fast.",
                href: "/recipes?time=30",
              },
              {
                icon: "🍚",
                title: "Leftover magic",
                desc: "Day-old rice and odds & ends become dinner.",
                href: "/recipes?tag=leftover",
              },
              {
                icon: "🌱",
                title: "Vegetarian-friendly",
                desc: "Mapo tofu, scallion pancakes, and more without meat.",
                href: "/recipes?diet=vegetarian",
              },
            ].map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-2xl">{c.icon}</span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-[var(--hw-fg)]">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">{c.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 精选菜谱 */}
        <section className="mx-auto max-w-5xl px-4 pb-16">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
              Start here
            </h2>
            <Link
              href="/recipes"
              className="text-sm font-medium text-[var(--hw-ginger)] hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
