"use client";

import { useEffect, useState } from "react";
import { useShoppingList } from "@/hooks/use-shopping-list";
import type { Recipe } from "@/lib/types";
import { useI18n } from "@/i18n/provider";

/**
 * R-04 购物清单：一键把菜谱食材加入清单（分本地超市/亚超，localStorage 跨页共享）
 */
export function ShoppingListButton({ recipe }: { recipe: Recipe }) {
  const { addRecipeIngredients, items } = useShoppingList();
  const { locale, t } = useI18n();
  const [added, setAdded] = useState(false);
  const count = items.filter((i) => i.recipeSlug === recipe.slug).length;
  const recipeTitle = locale === "zh" ? recipe.titleZh : recipe.titleEn;

  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(false), 2500);
    return () => clearTimeout(timer);
  }, [added]);

  const onClick = () => {
    addRecipeIngredients(recipe.slug, recipeTitle, recipe.ingredients);
    setAdded(true);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-lg bg-[var(--hw-ginger)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
    >
      {added ? t.recipeDetail.addedToShoppingList : t.recipeDetail.addToShoppingList}
      {count > 0 && (
        <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-xs">{count}</span>
      )}
    </button>
  );
}
