"use client";

import { useEffect, useState } from "react";
import { useShoppingList } from "@/hooks/use-shopping-list";
import type { Recipe } from "@/lib/types";

/**
 * R-04 购物清单：一键把菜谱食材加入清单（分本地超市/亚超，localStorage 跨页共享）
 */
export function ShoppingListButton({ recipe }: { recipe: Recipe }) {
  const { addRecipeIngredients, items } = useShoppingList();
  const [added, setAdded] = useState(false);
  const count = items.filter((i) => i.recipeSlug === recipe.slug).length;

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 2500);
    return () => clearTimeout(t);
  }, [added]);

  const onClick = () => {
    addRecipeIngredients(recipe.slug, recipe.titleEn, recipe.ingredients);
    setAdded(true);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-lg bg-[var(--hw-ginger)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
    >
      {added ? "✓ Added to list" : "🛒 Add ingredients to shopping list"}
      {count > 0 && (
        <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-xs">{count}</span>
      )}
    </button>
  );
}
