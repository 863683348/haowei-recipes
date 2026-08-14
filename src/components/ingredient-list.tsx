"use client";

import { useUnitPreference } from "@/hooks/use-unit-preference";
import { useShoppingList } from "@/hooks/use-shopping-list";
import { TermPopover } from "./term-popover";
import { ScaleIcon } from "./icons";
import type { Ingredient } from "@/lib/types";
import { useI18n } from "@/i18n/provider";

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
  const { locale, t } = useI18n();
  const isZh = locale === "zh";

  const pantryLabel = { local: t.recipeDetail.pantryLocal, asian: t.recipeDetail.pantryAsian } as const;

  const renderName = (ing: Ingredient) => {
    const name = isZh ? ing.nameZh : ing.nameEn;
    if (ing.termKey) {
      return (
        <TermPopover termKey={ing.termKey} locale={locale}>
          <span className="font-medium">{name}</span>
        </TermPopover>
      );
    }
    return <span className="font-medium">{name}</span>;
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
          {t.recipeDetail.ingredients}
        </h3>
        <button
          type="button"
          onClick={toggle}
          className="rounded-full border border-[var(--hw-border)] px-3 py-1 text-xs font-semibold text-[var(--hw-fg-muted)] hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
        >
          <ScaleIcon className="h-3.5 w-3.5" /> {unit === "metric" ? t.common.unitMetric : t.common.unitUS}
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
              <span className="ml-1.5 text-xs text-[var(--hw-fg-muted)]">
                {isZh ? ing.nameEn : ing.nameZh}
              </span>
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
      {ingredients.some((i) => i.note || i.noteZh) && (
        <div className="mt-3 space-y-1">
          {ingredients
            .filter((i) => i.note || i.noteZh)
            .map((i) => {
              const note = isZh ? i.noteZh ?? i.note : i.note;
              const name = isZh ? i.nameZh : i.nameEn;
              return (
                <p key={i.id} className="text-xs text-[var(--hw-fg-muted)]">
                  <span className="font-medium text-[var(--hw-ginger)]">{name}:</span>{" "}
                  {note}
                </p>
              );
            })}
        </div>
      )}
      <button
        type="button"
        onClick={() => addRecipeIngredients(recipeSlug, recipeTitle, ingredients)}
        className="mt-4 w-full rounded-lg bg-[var(--hw-ginger)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
      >
        {t.recipeDetail.addAllToList}
      </button>
    </div>
  );
}
