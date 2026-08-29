import type { FAQ, Recipe } from "@/lib/types";
import { faqs } from "@/data/faqs";

/** 匹配时忽略的虚词（FAQ keywords 与菜谱核心词都做此过滤） */
const STOP_WORDS = new Set([
  "what", "why", "how", "the", "and", "with", "for", "you", "your", "does",
  "doesnt", "is", "are", "can", "cant", "my", "should", "shouldnt", "when",
  "before", "after", "make", "cook", "need", "have", "use", "using", "into",
  "that", "this", "them", "their", "from", "over", "under", "than", "then",
  "give", "gets", "does", "do", "did", "also", "very", "much", "more", "most",
]);

function significantWords(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((w) => w.length >= 4 && !STOP_WORDS.has(w));
}

/**
 * 为一道菜匹配最相关的 FAQ（关键词显著词交集，多词短语命中加权）。
 * 服务端调用（build 时静态求值），每菜最多返回 limit 条。
 */
export function getRelatedFaqs(recipe: Recipe, limit = 3): FAQ[] {
  const words = new Set<string>();
  significantWords(recipe.titleEn).forEach((w) => words.add(w));
  recipe.ingredients.forEach((i) => significantWords(i.nameEn).forEach((w) => words.add(w)));
  recipe.tags.forEach((t) => significantWords(t).forEach((w) => words.add(w)));
  significantWords(recipe.cuisineEn ?? recipe.cuisine).forEach((w) => words.add(w));
  if (words.size === 0) return [];

  const scored: { faq: FAQ; score: number }[] = [];
  for (const f of faqs) {
    let score = 0;
    for (const kw of f.keywords) {
      if (/[\u4e00-\u9fff]/.test(kw)) continue; // 跳过中文关键词（英文页匹配英文词）
      const kwWords = significantWords(kw);
      if (kwWords.length === 0) continue;
      let hit = 0;
      for (const w of kwWords) if (words.has(w)) hit++;
      if (hit > 0) score += hit * (kwWords.length >= 2 ? 2 : 1);
    }
    if (score > 0) scored.push({ faq: f, score });
  }
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.faq);
}
