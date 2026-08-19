import type { DietLabel, Recipe } from "@/lib/types";

import { beefBroccoli } from "./beef-and-broccoli";
import { braised_tofu } from "./braised-tofu";
import { cashew_chicken } from "./cashew-chicken";
import { cucumber_scrambled_eggs } from "./cucumber-scrambled-eggs";
import { eggFriedRice } from "./egg-fried-rice";
import { garlicRomaine } from "./garlic-romaine";
import { garlic_chives_scrambled_eggs } from "./garlic-chives-scrambled-eggs";
import { green_pepper_beef } from "./green-pepper-beef";
import { home_style_tofu } from "./home-style-tofu";
import { kungPaoChicken } from "./kung-pao-chicken";
import { lazi_diced_chicken } from "./lazi-diced-chicken";
import { mapoTofu } from "./mapo-tofu";
import { oysterSauceLettuce } from "./oyster-sauce-lettuce";
import { onion_beef_stir_fry } from "./onion-beef-stir-fry";
import { pineapple_fried_rice } from "./pineapple-fried-rice";
import { scallionPancakes } from "./scallion-pancakes";
import { stirFriedBokChoy } from "./stir-fried-bok-choy";
import { sweetSourPork } from "./sweet-sour-pork";
import { tomatoEggs } from "./tomato-eggs";
import { yangzhou_fried_rice } from "./yangzhou-fried-rice";

/** 全部菜谱（P0 首批，扩展至50道） */
export const recipes: Recipe[] = [
  beefBroccoli,
  braised_tofu,
  cashew_chicken,
  cucumber_scrambled_eggs,
  eggFriedRice,
  garlicRomaine,
  garlic_chives_scrambled_eggs,
  green_pepper_beef,
  home_style_tofu,
  kungPaoChicken,
  lazi_diced_chicken,
  mapoTofu,
  oysterSauceLettuce,
  onion_beef_stir_fry,
  pineapple_fried_rice,
  scallionPancakes,
  stirFriedBokChoy,
  sweetSourPork,
  tomatoEggs,
  yangzhou_fried_rice,
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
  diet?: DietLabel;
  tag?: string;
  query?: string;
}

export function filterRecipes(filter: RecipeFilter): Recipe[] {
  return recipes.filter((r) => {
    if (filter.cuisine && r.cuisine !== filter.cuisine) return false;
    if (filter.difficulty && r.difficulty !== filter.difficulty) return false;
    if (filter.maxTime && r.timeMin > filter.maxTime) return false;
    if (filter.diet && filter.diet !== "none" && !r.dietary.includes(filter.diet))
      return false;
    if (filter.tag && !r.tags.includes(filter.tag)) return false;
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
