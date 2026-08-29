import type { Recipe } from "@/lib/types";

/** 列表搜索/筛选所需的精简字段。
 * 用于避免把 289 道完整 Recipe（含 story / 完整 ingredients）全量打包进客户端 bundle。 */
export interface RecipeSearchItem {
  slug: string;
  titleZh: string;
  titleEn: string;
  pinyin: string;
  cuisine: string;
  cuisineEn?: string;
  image: string;
  timeMin: number;
  difficulty: Recipe["difficulty"];
  tags: string[];
  dietary: string[];
  ingredients: { nameZh: string; nameEn: string; pinyin?: string }[];
}

/** 服务端调用：把完整 Recipe 转为搜索精简对象（结果序列化进 RSC payload 传给客户端） */
export function toSearchItem(r: Recipe): RecipeSearchItem {
  return {
    slug: r.slug,
    titleZh: r.titleZh,
    titleEn: r.titleEn,
    pinyin: r.pinyin,
    cuisine: r.cuisine,
    cuisineEn: r.cuisineEn,
    image: r.image,
    timeMin: r.timeMin,
    difficulty: r.difficulty,
    tags: r.tags,
    dietary: r.dietary,
    ingredients: r.ingredients.map((i) => ({
      nameZh: i.nameZh,
      nameEn: i.nameEn,
      pinyin: i.pinyin,
    })),
  };
}

export interface SearchFilter {
  q?: string;
  cuisine?: string;
  difficulty?: string;
  maxTime?: number;
  diet?: string;
}

/** 客户端实时判定：单条菜谱是否命中筛选条件。
 * 搜索匹配：标题中/英、拼音、菜系、标签、食材名（中/英）全字段 haystack。 */
export function matchSearchItem(r: RecipeSearchItem, f: SearchFilter): boolean {
  if (f.cuisine && r.cuisine !== f.cuisine) return false;
  if (f.difficulty && r.difficulty !== f.difficulty) return false;
  if (f.maxTime && r.timeMin > f.maxTime) return false;
  if (f.diet && f.diet !== "none" && !r.dietary.includes(f.diet)) return false;
  if (f.q) {
    const q = f.q.trim().toLowerCase();
    if (q) {
      const hay = [
        r.titleEn,
        r.titleZh,
        r.pinyin,
        r.cuisine,
        r.cuisineEn ?? "",
        ...r.tags,
        ...r.ingredients.map((i) => i.nameEn),
        ...r.ingredients.map((i) => i.nameZh),
        ...r.ingredients.map((i) => i.pinyin ?? ""),
      ]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
  }
  return true;
}
