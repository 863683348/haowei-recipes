import type { Recipe } from "@/lib/types";
import { recipes, getRecipeBySlug } from "./recipes";

export interface OccasionDef {
  /** 稳定英文 slug，用于 /occasion/{slug}。勿随意改动，否则旧 URL 失效 */
  slug: string;
  zh: string;
  en: string;
  /** 编辑导语（双语，页面 H1 下方展示 + metadata description 素材） */
  introEn: string;
  introZh: string;
  /** 标签规则：菜谱 tags 任一命中即入选 */
  matchTags?: string[];
  /** 编辑精选菜 slug（数据中不存在时自动忽略） */
  extraSlugs?: string[];
}

/**
 * 节令/场景聚合表：时效性搜索意图（年夜饭、冬至、感恩节配菜…）。
 * 入选 = 编辑精选（extraSlugs，置前）∪ 标签规则命中（matchTags），按 slug 去重。
 */
export const OCCASION_LIST: OccasionDef[] = [
  {
    slug: "chinese-new-year",
    zh: "春节年夜饭",
    en: "Chinese New Year",
    introEn:
      "A reunion-dinner shortlist for Chinese New Year: a whole fish for abundance, slow braises to make ahead, and sweet glutinous rice balls to finish the night.",
    introZh:
      "年夜饭精选清单：整鱼寓意年年有余、可提前炖好的硬菜压桌，再以一碗甜汤圆收尾——硬菜、时蔬、汤羹、甜品一桌配齐。",
    matchTags: ["chinese-new-year", "chinese-new-year-feast", "festive", "family-feast", "holiday", "celebration"],
    extraSlugs: [
      "steamed-bass",
      "sweet-sour-fish",
      "wuchang-fish-hubei-style",
      "hongshao-pork",
      "sesame-tangyuan-glutinous-rice-balls",
      "reunion-hot-pot",
      "whole-family-blessing-casserole",
      "man-han-family-feast-combo",
    ],
  },
  {
    slug: "mid-autumn",
    zh: "中秋家宴",
    en: "Mid-Autumn Festival",
    introEn:
      "A Mid-Autumn family table: hairy crab, lotus root, taro and a chilled pomelo dessert — the classic pairings for the harvest moon.",
    introZh:
      "中秋家宴经典搭配：清蒸大闸蟹、莲藕排骨汤、芋头压桌，再以杨枝甘露收尾——应季而食，团圆不腻。",
    extraSlugs: [
      "steamed-hairy-crab",
      "hubei-pork-rib-and-lotus-root-soup",
      "duojiao-steamed-taro",
      "white-boiled-shrimp",
      "salt-baked-chicken",
      "mango-pomelo-yang-zhi-gan-lu",
    ],
  },
  {
    slug: "winter-solstice",
    zh: "冬至进补",
    en: "Winter Solstice",
    introEn:
      "Winter solstice comfort: dumplings in the north, tangyuan in the south, plus slow stews and hot pot to warm the longest night of the year.",
    introZh:
      "北方饺子、南方汤圆，再加慢炖硬菜与围炉火锅——冬至最长的夜，用一桌热乎的家常菜把寒气挡在门外。",
    matchTags: ["winter", "winter-warmth", "cold-season"],
    extraSlugs: [
      "pork-cabbage-dumplings",
      "sour-soup-dumplings",
      "sesame-tangyuan-glutinous-rice-balls",
      "shuan-yang-rou",
      "iron-pot-stew-goose",
      "rock-sugar-pear-soup",
    ],
  },
  {
    slug: "thanksgiving",
    zh: "感恩节餐桌",
    en: "Thanksgiving Table",
    introEn:
      "Chinese-style sides and mains for Thanksgiving: a whole steamed fish, bright vegetable stir-fries and light soups to balance the rich roast.",
    introZh:
      "感恩节的中式搭配思路：一条清蒸整鱼、几道清爽时蔬炒、一盅清汤——给丰盛大餐解腻平衡，中西同席。",
    extraSlugs: [
      "steamed-bass",
      "wuchang-fish-hubei-style",
      "garlic-romaine",
      "oyster-sauce-lettuce",
      "stir-fried-bok-choy",
      "vinegar-cabbage",
      "egg-drop-soup",
      "winter-melon-soup",
    ],
  },
  {
    slug: "christmas-party",
    zh: "圣诞聚会",
    en: "Christmas Party",
    introEn:
      "Party-ready Chinese dishes for the holidays: glazed wings, char siu, sweet-and-sour ribs — finger food that disappears fast at a gathering.",
    introZh:
      "聚会硬菜清单：蜜汁烤翅、广式叉烧、糖醋排骨——下酒又抓手的手指食物，一上桌就会被抢光。",
    matchTags: ["party", "family-bbq", "impressive"],
    extraSlugs: [
      "honey-glazed-grilled-chicken-wings",
      "char-siu-pork",
      "honey-rib-roast",
      "sweet-sour-ribs",
      "grilled-chicken-wings",
    ],
  },
  {
    slug: "summer",
    zh: "夏日清爽",
    en: "Summer Refreshing",
    introEn:
      "Light and cooling dishes for hot days: smashed cucumber, cold dressing salads, poached shrimp and no-cook sweets — minimal time at the stove.",
    introZh:
      "天热就吃这些：拍黄瓜、凉拌木耳、白灼虾和免烤甜品——开胃解腻，尽量少开火，厨房不遭罪。",
    matchTags: ["summer", "refreshing", "cold", "cold-dish", "no-cook"],
    extraSlugs: ["smashed-cucumber", "cold-wood-ear", "white-boiled-shrimp", "mango-pomelo-yang-zhi-gan-lu"],
  },
];

const OCCASION_BY_SLUG = new Map(OCCASION_LIST.map((o) => [o.slug, o]));

export function getOccasionBySlug(slug: string): OccasionDef | undefined {
  return OCCASION_BY_SLUG.get(slug);
}

/** 某场景下的全部菜谱：编辑精选置前 ∪ 标签规则命中，按 slug 去重 */
export function getRecipesByOccasionSlug(slug: string): Recipe[] {
  const def = getOccasionBySlug(slug);
  if (!def) return [];
  const extra = (def.extraSlugs ?? [])
    .map((s) => getRecipeBySlug(s))
    .filter((r): r is Recipe => Boolean(r));
  const byTag = def.matchTags
    ? recipes.filter((r) => r.tags.some((t) => def.matchTags!.includes(t)))
    : [];
  const seen = new Set<string>();
  return [...extra, ...byTag].filter((r) => {
    if (seen.has(r.slug)) return false;
    seen.add(r.slug);
    return true;
  });
}
