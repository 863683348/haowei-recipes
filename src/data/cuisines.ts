import type { Recipe } from "@/lib/types";
import { recipes } from "./recipes";

export interface CuisineDef {
  /** 稳定英文 slug，用于 URL（/cuisine/{slug}）。勿随意改动，否则旧 URL 失效 */
  slug: string;
  /** 规范中文名，用于匹配归一化后的 recipe.cuisine */
  zh: string;
  /** 英文显示名 */
  en: string;
}

/**
 * 规范菜系表（基于数据实际分布归一化得出）。
 * 数据层 cuisine 字段存在两种写法（"家常菜" / "家常"）及复合值（"粤菜 / 家常"），
 * 此处统一为规范中文名，slug 稳定用于 URL。
 */
export const CUISINE_LIST: CuisineDef[] = [
  { slug: "home-style", zh: "家常菜", en: "Home-style" },
  { slug: "sichuan", zh: "川菜", en: "Sichuan" },
  { slug: "cantonese", zh: "粤菜", en: "Cantonese" },
  { slug: "jiangzhe", zh: "江浙菜", en: "Jiangsu-Zhejiang" },
  { slug: "northern-snacks", zh: "北方小吃", en: "Northern Snacks" },
  { slug: "hunan", zh: "湘菜", en: "Hunan" },
  { slug: "dim-sum", zh: "面点小吃", en: "Dim Sum & Snacks" },
  { slug: "desserts", zh: "甜品饮品", en: "Desserts & Beverages" },
  { slug: "soups-cold", zh: "汤羹凉菜", en: "Soups & Cold Dishes" },
  { slug: "shandong", zh: "鲁菜", en: "Shandong" },
  { slug: "beijing", zh: "京菜", en: "Beijing" },
  { slug: "shaanxi", zh: "陕菜", en: "Shaanxi" },
  { slug: "northeast", zh: "东北菜", en: "Northeastern" },
  { slug: "huaiyang", zh: "淮扬菜", en: "Huaiyang" },
];

/** 原始 cuisine 字符串归一化（处理 家常→家常菜、复合 "粤菜 / 家常" 拆分） */
const NORMALIZE: Record<string, string> = { 家常: "家常菜" };

/** 把一道菜的 cuisine 字段拆分为规范中文菜系标签集合（支持复合值） */
export function recipeCuisineTags(recipe: Recipe): string[] {
  return recipe.cuisine
    .split(/[\/／]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((c) => NORMALIZE[c] ?? c);
}

export function getCuisineBySlug(slug: string): CuisineDef | undefined {
  return CUISINE_LIST.find((c) => c.slug === slug);
}

/** 某菜系下所有菜谱（用于聚合页列表） */
export function getRecipesByCuisineSlug(slug: string): Recipe[] {
  const def = getCuisineBySlug(slug);
  if (!def) return [];
  return recipes.filter((r) => recipeCuisineTags(r).includes(def.zh));
}

/** 单道菜归属的所有菜系定义（用于详情页 cuisine 标签链到聚合页，支持复合值） */
export function getRecipeCuisineDefs(recipe: Recipe): CuisineDef[] {
  const tags = new Set(recipeCuisineTags(recipe));
  return CUISINE_LIST.filter((c) => tags.has(c.zh));
}
