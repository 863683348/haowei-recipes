"use client";

import { useUnitPreference } from "@/hooks/use-unit-preference";
import { useShoppingList } from "@/hooks/use-shopping-list";
import { TermPopover } from "./term-popover";
import type { Ingredient } from "@/lib/types";

const pantryLabel = { local: "🛒 local", asian: "🏮 asian" } as const;

/**
 * 食材列表（R-01 术语悬浮 + 计量双轨切换 + R-04 清单联动）
 */
export function IngredientList({
  ingredients,
  recipeSlug,
  recipeTitle,
}: {
  ingredients: Ingredient[];
  recipeSlug: string;
  recipeTitle: string;
}) {
  const { unit, toggle } = useUnitPreference();
  const { addRecipeIngredients } = useShoppingList();

  const renderName = (ing: Ingredient) => {
    if (ing.termKey) {
      return (
        <TermPopover termKey={ing.termKey}>
          <span className="font-medium">{ing.nameEn}</span>
        </TermPopover>
      );
    }
    return <span className="font-medium">{ing.nameEn}</span>;
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">Ingredients</h3>
        <button
          type="button"
          onClick={toggle}
          className="rounded-full border border-[var(--hw-border)] px-3 py-1 text-xs font-semibold text-[var(--hw-fg-muted)] hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
        >
          ⚖ {unit === "metric" ? "g/ml" : "cup/tbsp"}
        </button>
      </div>
      <ul className="space-y-2">
        {ingredients.map((ing) => (
          <li
            key={ing.id}
            className="flex items-baseline justify-between gap-3 border-b border-[var(--hw-border)]/60 py-2 text-sm"
          >
            <span className="min-w-0">
              {renderName(ing)}
              <span className="ml-1.5 text-xs text-[var(--hw-fg-muted)]">{ing.nameZh}</span>
              {ing.pantry && (
                <span className="ml-1.5 text-xs text-[var(--hw-fg-muted)]">
                  {pantryLabel[ing.pantry]}
                </span>
              )}
            </span>
            <span className="shrink-0 text-right text-[var(--hw-fg)]">
              {unit === "metric" ? ing.amountMetric : ing.amountUS}
            </span>
          </li>
        ))}
      </ul>
      {ingredients.some((i) => i.note) && (
        <div className="mt-3 space-y-1">
          {ingredients
            .filter((i) => i.note)
            .map((i) => (
              <p key={i.id} className="text-xs text-[var(--hw-fg-muted)]">
                <span className="font-medium text-[var(--hw-ginger)]">{i.nameEn}:</span>{" "}
                {i.note}
              </p>
            ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => addRecipeIngredients(recipeSlug, recipeTitle, ingredients)}
        className="mt-4 w-full rounded-lg bg-[var(--hw-ginger)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
      >
        🛒 Add all to shopping list
      </button>
    </div>
  );
}
