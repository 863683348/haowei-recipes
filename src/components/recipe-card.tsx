import Link from "next/link";
import type { Recipe } from "@/lib/types";

const difficultyLabel = { easy: "Easy", medium: "Medium", hard: "Hard" } as const;
const difficultyCls = {
  easy: "bg-[rgba(74,124,89,0.15)] text-[var(--hw-scallion)]",
  medium: "bg-[rgba(199,123,46,0.15)] text-[var(--hw-ginger)]",
  hard: "bg-[rgba(62,39,35,0.12)] text-[var(--hw-fg-muted)]",
} as const;

/** 菜谱卡片（列表/首页用） */
export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group flex flex-col rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-[var(--hw-ginger)]">{recipe.cuisine}</span>
        <span className="text-xs text-[var(--hw-fg-muted)]">⏱ {recipe.timeMin} min</span>
      </div>
      <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-[var(--hw-fg)] group-hover:text-[var(--hw-ginger)]">
        {recipe.titleEn}
      </h3>
      <p className="text-sm text-[var(--hw-fg-muted)]">
        {recipe.titleZh} · {recipe.pinyin}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${difficultyCls[recipe.difficulty]}`}>
          {difficultyLabel[recipe.difficulty]}
        </span>
        {recipe.tags.slice(0, 2).map((t) => (
          <span
            key={t}
            className="rounded-full bg-[var(--hw-bg-soft)] px-2 py-0.5 text-xs text-[var(--hw-fg-muted)]"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
