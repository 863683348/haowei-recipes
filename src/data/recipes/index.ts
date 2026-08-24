import type { DietLabel, Recipe } from "@/lib/types";

import { beefBroccoli } from "./beef-and-broccoli";
import { braised_tofu } from "./braised-tofu";
import { cashew_chicken } from "./cashew-chicken";
import { chiveEggDumplings } from "./chive-egg-dumplings";
import { cokeChickenWings } from "./coke-chicken-wings";
import { coldWoodEar } from "./cold-wood-ear";
import { cucumber_scrambled_eggs } from "./cucumber-scrambled-eggs";
import { dryFriedGreenBeans } from "./dry-fried-green-beans";
import { eggFriedRice } from "./egg-fried-rice";
import { garlic_chives_scrambled_eggs } from "./garlic-chives-scrambled-eggs";
import { garlicRomaine } from "./garlic-romaine";
import { green_pepper_beef } from "./green-pepper-beef";
import { homeStylePork } from "./home-style-pork";
import { home_style_tofu } from "./home-style-tofu";
import { hongshaoChicken } from "./hongshao-chicken";
import { hongshaoPork } from "./hongshao-pork";
import { huangmenChicken } from "./huangmen-chicken";
import { jingJiangPork } from "./jing-jiang-pork";
import { kouShuiChicken } from "./kou-shui-chicken";
import { kungPaoChicken } from "./kung-pao-chicken";
import { lazi_diced_chicken } from "./lazi-diced-chicken";
import { mapoTofu } from "./mapo-tofu";
import { mooShuPork } from "./moo-shu-pork";
import { onion_beef_stir_fry } from "./onion-beef-stir-fry";
import { oysterSauceLettuce } from "./oyster-sauce-lettuce";
import { panFriedChicken } from "./pan-fried-chicken";
import { pepperPork } from "./pepper-pork";
import { pineapple_fried_rice } from "./pineapple-fried-rice";
import { porkCabbageDumplings } from "./pork-cabbage-dumplings";
import { potatoBeefStew } from "./potato-beef-stew";
import { scallion_noodles } from "./scallion-noodles";
import { scallionPancakes } from "./scallion-pancakes";
import { smashedCucumber } from "./smashed-cucumber";
import { sourSoupDumplings } from "./sour-soup-dumplings";
import { soyChickenWings } from "./soy-chicken-wings";
import { spicyPotatoShreds } from "./spicy-potato-shreds";
import { stirFriedBokChoy } from "./stir-fried-bok-choy";
import { stirFriedGreens } from "./stir-fried-greens";
import { sweet_sour_pork } from "./sweet-sour-pork";
import { tomato_egg_noodles } from "./tomato-egg-noodles";
import { tomatoEggs } from "./tomato-eggs";
import { twiceCookedPork } from "./twice-cooked-pork";
import { vinegar_cabbage } from "./vinegar-cabbage";
import { yangchun_noodles } from "./yangchun-noodles";
import { yangzhou_fried_rice } from "./yangzhou-fried-rice";
import { sweet_sour_ribs } from "./sweet-sour-ribs";
import { sweet_sour_fish } from "./sweet-sour-fish";
import { egg_drop_soup } from "./egg-drop-soup";
import { tomato_egg_drop_soup } from "./tomato-egg-drop-soup";
import { winter_melon_soup } from "./winter-melon-soup";
import { yuXiangPork } from "./yu-xiang-pork";

/** 全部菜谱（P0 首批，扩展至50道） */
export const recipes: Recipe[] = [
  beefBroccoli,
  braised_tofu,
  cashew_chicken,
  chiveEggDumplings,
  cokeChickenWings,
  coldWoodEar,
  cucumber_scrambled_eggs,
  dryFriedGreenBeans,
  eggFriedRice,
  garlic_chives_scrambled_eggs,
  garlicRomaine,
  green_pepper_beef,
  homeStylePork,
  home_style_tofu,
  hongshaoChicken,
  hongshaoPork,
  huangmenChicken,
  jingJiangPork,
  kouShuiChicken,
  kungPaoChicken,
  mapoTofu,
  mooShuPork,
  onion_beef_stir_fry,
  oysterSauceLettuce,
  panFriedChicken,
  pepperPork,
  pineapple_fried_rice,
  porkCabbageDumplings,
  potatoBeefStew,
  scallion_noodles,
  scallionPancakes,
  smashedCucumber,
  sourSoupDumplings,
  soyChickenWings,
  spicyPotatoShreds,
  stirFriedBokChoy,
  stirFriedGreens,
  sweet_sour_pork,
  tomato_egg_noodles,
  tomatoEggs,
  twiceCookedPork,
  vinegar_cabbage,
  yangchun_noodles,
  yangzhou_fried_rice,
  yuXiangPork,
  sweet_sour_ribs,
  sweet_sour_fish,
  egg_drop_soup,
  tomato_egg_drop_soup,
  winter_melon_soup,
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
