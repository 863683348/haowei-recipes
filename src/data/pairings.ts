import { recipes, getRecipeBySlug } from "@/data/recipes";
import type { Recipe } from "@/lib/types";

/**
 * 配餐系统（P1-3 内链矩阵）
 * 语义分组：主菜 / 配菜 / 主食 / 汤羹。
 * 菜谱页"配什么一起吃"区块据此拼出一餐（1 主 + 1 配 + 1 主食 + 1 汤），
 * 同时输出多个站内链接（内链矩阵，聚拢权重）。
 */

export type DishRole = "main" | "side" | "staple" | "soup";

/** 显式角色覆盖（手工校正自动分类的边界案例） */
const ROLE_OVERRIDES: Record<string, DishRole> = {
  // 饺子类：既是主食也是主菜 → 归主食（配汤食用）
  "chive-egg-dumplings": "staple",
  "pork-cabbage-dumplings": "staple",
  "sour-soup-dumplings": "staple",
  // 豆腐类：可做主菜可做配菜 → 主菜（配米饭）
  "mapo-tofu": "main",
  "braised-tofu": "main",
  "home-style-tofu": "main",
  // 凉拌/清炒绿叶 → 配菜
  "kou-shui-chicken": "side",
  "tengjiao-chicken": "side",
};

function classify(slug: string): DishRole {
  if (ROLE_OVERRIDES[slug]) return ROLE_OVERRIDES[slug];
  const r = getRecipeBySlug(slug);
  if (!r) return "main";
  const tags = new Set(r.tags);
  const name = r.titleEn.toLowerCase();
  if (tags.has("soup") || name.includes("soup")) return "soup";
  if (
    tags.has("noodles") ||
    tags.has("dough") ||
    name.includes("noodle") ||
    name.includes("rice") ||
    name.includes("pancake")
  )
    return "staple";
  if (
    tags.has("cold") ||
    tags.has("quick") ||
    tags.has("5-ingredients") ||
    r.dietary.includes("vegetarian") ||
    name.includes("cucumber") ||
    name.includes("lettuce") ||
    name.includes("bok-choy") ||
    name.includes("cabbage") ||
    name.includes("wood-ear")
  )
    return "side";
  return "main";
}

/** 每个菜谱的角色（运行时计算 + 缓存） */
const roleCache = new Map<string, DishRole>();
export function getDishRole(slug: string): DishRole {
  if (!roleCache.has(slug)) roleCache.set(slug, classify(slug));
  return roleCache.get(slug)!;
}

/** 按角色取菜谱（排除自身，按同菜系优先排序） */
function byRole(role: DishRole, self: string): Recipe[] {
  const selfRecipe = getRecipeBySlug(self);
  return recipes
    .filter((r) => r.slug !== self && getDishRole(r.slug) === role)
    .sort((a, b) => {
      const score = (x: Recipe) =>
        (selfRecipe && x.cuisine === selfRecipe.cuisine ? 2 : 0) +
        x.tags.filter((t) => selfRecipe?.tags.includes(t)).length;
      return score(b) - score(a);
    });
}

export interface MealPlan {
  main?: Recipe;
  side?: Recipe;
  staple?: Recipe;
  soup?: Recipe;
}

/**
 * 为一顿饭组配：给定任意菜谱，返回 1 主 + 1 配 + 1 主食 + 1 汤（各至多 1）。
 * - 若自身已是主菜：补配菜/主食/汤
 * - 若自身是配菜：配一个主菜 + 主食 + 汤
 * - 依此类推
 */
export function getMealPlan(slug: string): MealPlan {
  const self = getRecipeBySlug(slug);
  if (!self) return {};
  const role = getDishRole(slug);
  const pick = (r: DishRole, exclude?: string) =>
    byRole(r, slug).find((x) => x.slug !== exclude);

  const plan: MealPlan = {};
  const own = { main: undefined as Recipe | undefined };

  if (role === "main") {
    plan.main = self;
    plan.side = pick("side");
    plan.staple = pick("staple");
    plan.soup = pick("soup");
  } else if (role === "side") {
    plan.side = self;
    plan.main = pick("main");
    plan.staple = pick("staple");
    plan.soup = pick("soup");
  } else if (role === "staple") {
    plan.staple = self;
    plan.main = pick("main");
    plan.side = pick("side");
    plan.soup = pick("soup");
  } else {
    plan.soup = self;
    plan.main = pick("main");
    plan.side = pick("side");
    plan.staple = pick("staple");
  }
  return plan;
}
