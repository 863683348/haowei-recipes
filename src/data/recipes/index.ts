import type { Recipe } from "@/lib/types";
import { tomatoEggs } from "./tomato-eggs";
import { mapoTofu } from "./mapo-tofu";
import { kungPaoChicken } from "./kung-pao-chicken";
import { scallionPancakes } from "./scallion-pancakes";
import { eggFriedRice } from "./egg-fried-rice";
import { cucumber_scrambled_eggs } from "./cucumber-scrambled-eggs";
import { garlic_chives_scrambled_eggs } from "./garlic-chives-scrambled-eggs";
import { beefBroccoli } from "./beef-and-broccoli";

/** 全部菜谱（P0 首批 6 篇，后续扩展） */
export const recipes: Recipe[] = [
  tomatoEggs,
  mapoTofu,
  kungPaoChicken,
  scallionPancakes,
  eggFriedRice,
  beefBroccoli,
  cucumber_scrambled_eggs,
  garlic_chives_scrambled_eggs,
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getRelatedRecipes(recipe: Recipe): Recipe[] {
  return recipe.relatedSlugs
    .map((slug) => getRecipeBySlug(slug))
    .filter((r): r is Recipe => Boolean(r));
}

export interface RecipeFilter {
  cuisine?: string;
  difficulty?: string;
  maxTime?: number;
  diet?: string;
  query?: string;
}

export function filterRecipes(filter: RecipeFilter): Recipe[] {
  return recipes.filter((r) => {
    if (filter.cuisine && r.cuisine !== filter.cuisine) return false;
    if (filter.difficulty && r.difficulty !== filter.difficulty) return false;
    if (filter.maxTime && r.timeMin > filter.maxTime) return false;
    if (filter.diet && filter.diet !== "none" && !r.dietary.includes(filter.diet as never))
      return false;
    if (filter.query) {
      const q = filter.query.toLowerCase();
      const haystack = [
        r.titleEn,
        r.titleZh,
        r.pinyin,
        r.cuisine,
        ...r.tags,
        ...r.ingredients.map((i) => i.nameEn),
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

/** 所有可用筛选值 */
export const cuisineOptions = [...new Set(recipes.map((r) => r.cuisine))];
export const difficultyOptions: Recipe["difficulty"][] = ["easy", "medium", "hard"];
