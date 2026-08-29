import type { Recipe } from "@/lib/types";
import { recipes } from "./recipes";

export interface TagDef {
  /** 稳定英文 slug，用于 /tag/{slug}。勿随意改动，否则旧 URL 失效 */
  slug: string;
  zh: string;
  en: string;
  /** 数据层原始 tags 匹配集合（任一命中即属于该合集） */
  match: string[];
}

/**
 * 规范标签表（从数据层 185 个原始 tag 归一化聚合，
 * 合并 kids-friendly/kid-friendly、vegetarian-ok/vegetarian-option 等变体拼写）。
 * 选择标准：搜索意图明确（快手/素食/辣/宴客…）且菜量充足。
 */
export const TAG_LIST: TagDef[] = [
  {
    slug: "quick",
    zh: "快手菜",
    en: "Quick & Easy",
    match: ["30-min", "weeknight", "quick", "15-min", "20-min", "25-min", "easy", "beginner", "45-min"],
  },
  {
    slug: "vegetarian",
    zh: "素食",
    en: "Vegetarian",
    match: ["vegetarian", "vegetarian-option", "vegetarian-ok", "vegetarian-friendly", "meatless-monday", "vegan"],
  },
  { slug: "spicy", zh: "辣味", en: "Spicy", match: ["spicy"] },
  { slug: "comfort", zh: "治愈家常", en: "Comfort Food", match: ["comfort", "comfort-food", "hearty", "soothing"] },
  { slug: "one-pot", zh: "一锅出", en: "One-Pot", match: ["one-pot", "one-pan"] },
  {
    slug: "make-ahead",
    zh: "提前备餐",
    en: "Make-Ahead",
    match: ["make-ahead", "meal-prep", "freezer-friendly"],
  },
  { slug: "seafood", zh: "海鲜水产", en: "Seafood", match: ["seafood", "fish"] },
  { slug: "soup", zh: "汤羹", en: "Soups", match: ["soup", "gedat-tang"] },
  {
    slug: "party",
    zh: "宴客聚会",
    en: "Party & Sharing",
    match: ["party", "party-appetizer", "dinner-party", "shareable", "family-bbq", "appetizer"],
  },
  { slug: "kid-friendly", zh: "儿童友好", en: "Kid-Friendly", match: ["kids-friendly", "kid-friendly", "kids"] },
  {
    slug: "healthy",
    zh: "清爽健康",
    en: "Healthy & Light",
    match: ["healthy", "light", "high-protein", "protein-rich", "protein-packed", "detox"],
  },
  { slug: "breakfast", zh: "早餐早午餐", en: "Breakfast & Brunch", match: ["breakfast", "brunch"] },
];

const TAG_BY_SLUG = new Map(TAG_LIST.map((t) => [t.slug, t]));

export function getTagBySlug(slug: string): TagDef | undefined {
  return TAG_BY_SLUG.get(slug);
}

export function getRecipesByTagSlug(slug: string): Recipe[] {
  const def = getTagBySlug(slug);
  if (!def) return [];
  return recipes.filter((r) => r.tags.some((t) => def.match.includes(t)));
}

/** 单道菜归属的所有规范标签（用于详情页链到 /tag/[slug]） */
export function getRecipeTagDefs(recipe: Recipe): TagDef[] {
  return TAG_LIST.filter((t) => recipe.tags.some((x) => t.match.includes(x)));
}

/* ---------- 食材主题枢纽（复用已上线的硬编码 /recipes/* hub 页做内链） ---------- */

export interface HubLink {
  /** 匹配关键词（词边界匹配 titleEn + 食材名） */
  keyword: string;
  labelEn: string;
  labelZh: string;
  href: string;
}

const INGREDIENT_HUBS: HubLink[] = [
  { keyword: "chicken", labelEn: "More chicken recipes", labelZh: "更多鸡肉菜谱", href: "/recipes/chicken" },
  { keyword: "pork", labelEn: "More pork recipes", labelZh: "更多猪肉菜谱", href: "/recipes/pork" },
  { keyword: "beef", labelEn: "More beef recipes", labelZh: "更多牛肉菜谱", href: "/recipes/beef" },
  { keyword: "tofu", labelEn: "More tofu recipes", labelZh: "更多豆腐菜谱", href: "/recipes/tofu" },
  { keyword: "egg", labelEn: "More egg recipes", labelZh: "更多鸡蛋菜谱", href: "/recipes/egg" },
  { keyword: "noodle", labelEn: "More noodle dishes", labelZh: "更多面食", href: "/recipes/noodles" },
  { keyword: "dumpling", labelEn: "More dumplings & buns", labelZh: "更多饺子面点", href: "/recipes/dumplings" },
  { keyword: "wonton", labelEn: "More dumplings & buns", labelZh: "更多饺子面点", href: "/recipes/dumplings" },
];

/** 一道菜可链入的食材枢纽（词边界匹配，最多 3 个，自动去重同 href） */
export function getIngredientHubLinks(recipe: Recipe): HubLink[] {
  const hay = [recipe.titleEn, ...recipe.ingredients.map((i) => i.nameEn)]
    .join(" ")
    .toLowerCase();
  const seen = new Set<string>();
  const out: HubLink[] = [];
  for (const h of INGREDIENT_HUBS) {
    if (seen.has(h.href)) continue;
    const re = new RegExp(`\\b${h.keyword}`);
    if (re.test(hay)) {
      seen.add(h.href);
      out.push(h);
    }
  }
  return out.slice(0, 3);
}
