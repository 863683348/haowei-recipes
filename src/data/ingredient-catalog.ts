import type { CatalogEntry } from "@/lib/types";

/**
 * 食材采购渠道目录（R-04 购物清单）
 * 分类：local = 本地超市可买（Whole Foods/Tesco/Coles...）；asian = 需亚超或线上亚超。
 */
export const ingredientCatalog: CatalogEntry[] = [
  /* 本地超市常备 */
  { name: "neutral oil", category: "western-pantry", pantry: "local" },
  { name: "vegetable oil", category: "western-pantry", pantry: "local" },
  { name: "peanut oil", category: "western-pantry", pantry: "local" },
  { name: "garlic", category: "produce", pantry: "local" },
  { name: "ginger", category: "produce", pantry: "local" },
  { name: "scallions", category: "produce", pantry: "local" },
  { name: "eggs", category: "protein", pantry: "local" },
  { name: "chicken breast", category: "protein", pantry: "local" },
  { name: "chicken thigh", category: "protein", pantry: "local" },
  { name: "ground pork", category: "protein", pantry: "local" },
  { name: "beef", category: "protein", pantry: "local" },
  { name: "flank steak", category: "protein", pantry: "local" },
  { name: "shrimp", category: "protein", pantry: "local" },
  { name: "broccoli", category: "produce", pantry: "local" },
  { name: "napa cabbage", category: "produce", pantry: "local" },
  { name: "bell pepper", category: "produce", pantry: "local" },
  { name: "carrot", category: "produce", pantry: "local" },
  { name: "white rice", category: "staple", pantry: "local" },
  { name: "day-old rice", category: "staple", pantry: "local" },
  { name: "all-purpose flour", category: "staple", pantry: "local" },
  { name: "cornstarch", category: "western-pantry", pantry: "local" },
  { name: "sugar", category: "western-pantry", pantry: "local" },
  { name: "white pepper", category: "spice", pantry: "local" },
  { name: "black pepper", category: "spice", pantry: "local" },
  { name: "salt", category: "western-pantry", pantry: "local" },
  { name: "dried chili", category: "spice", pantry: "local" },
  { name: "dry sherry", category: "western-pantry", pantry: "local" },
  { name: "balsamic vinegar", category: "western-pantry", pantry: "local" },
  { name: "tomato", category: "produce", pantry: "local" },
  { name: "green beans", category: "produce", pantry: "local" },
  { name: "cucumber", category: "produce", pantry: "local" },
  { name: "sesame seeds", category: "spice", pantry: "local" },
  { name: "yogurt", category: "dairy", pantry: "local" },

  /* 亚超 / 线上亚超 */
  { name: "light soy sauce", category: "asian-pantry", pantry: "asian" },
  { name: "dark soy sauce", category: "asian-pantry", pantry: "asian" },
  { name: "shaoxing wine", category: "asian-pantry", pantry: "asian" },
  { name: "oyster sauce", category: "asian-pantry", pantry: "asian" },
  { name: "doubanjiang", category: "asian-pantry", pantry: "asian" },
  { name: "hoisin sauce", category: "asian-pantry", pantry: "asian" },
  { name: "chinkiang vinegar", category: "asian-pantry", pantry: "asian" },
  { name: "rice vinegar", category: "asian-pantry", pantry: "asian" },
  { name: "toasted sesame oil", category: "asian-pantry", pantry: "asian" },
  { name: "chili oil", category: "asian-pantry", pantry: "asian" },
  { name: "sichuan peppercorn", category: "asian-pantry", pantry: "asian" },
  { name: "star anise", category: "asian-pantry", pantry: "asian" },
  { name: "five-spice powder", category: "asian-pantry", pantry: "asian" },
  { name: "dried shiitake", category: "asian-pantry", pantry: "asian" },
  { name: "silken tofu", category: "asian-pantry", pantry: "asian" },
  { name: "firm tofu", category: "asian-pantry", pantry: "asian" },
  { name: "baby bok choy", category: "produce", pantry: "asian" },
  { name: "gai lan", category: "produce", pantry: "asian" },
  { name: "chinese sausage", category: "asian-pantry", pantry: "asian" },
  { name: "noodles (fresh)", category: "asian-pantry", pantry: "asian" },
  { name: "wonton wrappers", category: "asian-pantry", pantry: "asian" },
  { name: "mushroom oyster sauce", category: "asian-pantry", pantry: "asian" },
];

/** 根据食材名查采购渠道（支持别名） */
export function lookupPantry(name: string): "local" | "asian" | "unknown" {
  const n = name.toLowerCase();
  for (const entry of ingredientCatalog) {
    if (n.includes(entry.name.toLowerCase())) return entry.pantry;
    for (const alias of entry.aliases ?? []) {
      if (n.includes(alias.toLowerCase())) return entry.pantry;
    }
  }
  return "unknown";
}
