"use client";

import { useCallback, useEffect, useState } from "react";
import type { Ingredient } from "@/lib/types";

/** 购物清单项（R-04） */
export interface ShoppingItem {
  key: string; // recipeSlug + ingredientId 唯一
  recipeSlug: string;
  recipeTitle: string;
  ingredientId: string;
  nameEn: string;
  nameZh: string;
  amountMetric: string;
  amountUS: string;
  category: Ingredient["category"];
  pantry: "local" | "asian";
  checked: boolean;
}

const STORAGE_KEY = "hw-shopping-list";

export function useShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  // 初始化：从 localStorage 读取（仅客户端）
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as ShoppingItem[]);
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  // 持久化
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage full / unavailable — degrade silently */
    }
  }, [items]);

  const addRecipeIngredients = useCallback(
    (recipeSlug: string, recipeTitle: string, ingredients: Ingredient[]) => {
      setItems((prev) => {
        const next = [...prev];
        for (const ing of ingredients) {
          const key = `${recipeSlug}::${ing.id}`;
          if (!next.some((i) => i.key === key)) {
            next.push({
              key,
              recipeSlug,
              recipeTitle,
              ingredientId: ing.id,
              nameEn: ing.nameEn,
              nameZh: ing.nameZh,
              amountMetric: ing.amountMetric,
              amountUS: ing.amountUS,
              category: ing.category,
              pantry: ing.pantry ?? "local",
              checked: false,
            });
          }
        }
        return next;
      });
    },
    []
  );

  const toggleItem = useCallback((key: string) => {
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, checked: !i.checked } : i))
    );
  }, []);

  const removeItem = useCallback((key: string) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  const removeRecipe = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.recipeSlug !== slug));
  }, []);

  const clearAll = useCallback(() => setItems([]), []);

  /** 分组：本地超市 / 亚超（R-04 双列） */
  const grouped = useCallback(() => {
    const local = items.filter((i) => i.pantry === "local");
    const asian = items.filter((i) => i.pantry === "asian");
    const unknown = items.filter(
      (i) => i.pantry !== "local" && i.pantry !== "asian"
    );
    return { local, asian, unknown };
  }, [items]);

  /** 纯文本导出（复制到剪贴板） */
  const toText = useCallback(
    (unit: "metric" | "us") => {
      const { local, asian, unknown } = grouped();
      const lines: string[] = ["HǎoWèi shopping list", "--------------------"];
      const fmt = (i: ShoppingItem) =>
        `${i.checked ? "[x]" : "[ ]"} ${unit === "metric" ? i.amountMetric : i.amountUS} — ${i.nameEn}${i.nameZh ? ` (${i.nameZh})` : ""}`;
      if (local.length) lines.push("\nLocal supermarket:", ...local.map(fmt));
      if (asian.length) lines.push("\nAsian grocery / online:", ...asian.map(fmt));
      if (unknown.length) lines.push("\nOther:", ...unknown.map(fmt));
      return lines.join("\n");
    },
    [grouped]
  );

  return {
    items,
    addRecipeIngredients,
    toggleItem,
    removeItem,
    removeRecipe,
    clearAll,
    grouped,
    toText,
  };
}
