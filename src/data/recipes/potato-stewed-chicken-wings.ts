import type { Recipe } from "@/lib/types";

/** Potato Stewed Chicken Wings (土豆炖鸡翅) (土豆炖鸡翅) — Day batch */
export const potato_stewed_chicken_wings: Recipe = {
  "id": "potato-stewed-chicken-wings",
  "slug": "potato-stewed-chicken-wings",
  "titleEn": "Potato Stewed Chicken Wings (土豆炖鸡翅)",
  "titleZh": "土豆炖鸡翅",
  "pinyin": "tu dou dun ji chi",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Hearty stew with tender wings and creamy potatoes in savory broth.",
  "versionNoteZh": "鸡翅土豆浓汤炖，暖身暖心。",
  "tags": [
    "comfort",
    "chicken",
    "stew",
    "weeknight",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "Potato stewed chicken wings is the ultimate comfort stew — chicken collagen enriches the broth while potatoes absorb all the savory flavor.",
  "storyZh": "土豆炖鸡翅是终极 comfort stew——鸡肉胶原蛋白让汤汁浓稠，土豆吸收所有咸鲜味。",
  "ingredients": [
    {
      "id": "ps-01",
      "nameEn": "chicken wings, halved",
      "nameZh": "鸡翅切半",
      "amountMetric": "8 (about 500 g)",
      "amountUS": "8 (about 1.1 lb)",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ps-02",
      "nameEn": "potato, cut into chunks",
      "nameZh": "土豆块",
      "amountMetric": "2 medium (about 300 g)",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ps-03",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ps-04",
      "nameEn": "scallions, cut into sections",
      "nameZh": "葱段",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ps-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "ps-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "ps-07",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ps-08",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Score wings. Blanch 2 minutes. Remove and pat dry.",
      "textZh": "鸡翅划刀，沸水焯2分钟，捞出擦干。",
      "zhHint": "焯水",
      "stateNote": {
        "visual": "Wings firm, surface dry",
        "visualZh": "鸡翅紧实表面干",
        "timeRef": "2 minutes",
        "signal": "No pink"
      }
    },
    {
      "text": "Heat oil medium. Sear wings 3 minutes per side until golden.",
      "textZh": "热油中火，鸡翅煎3分钟每面金黄。",
      "zhHint": "煎鸡翅",
      "stateNote": {
        "visual": "Deep golden skin",
        "visualZh": "鸡皮深金黄",
        "heat": "medium",
        "timeRef": "3 minutes",
        "signal": "Crisp"
      }
    },
    {
      "text": "Add ginger, scallions, stir 30 seconds. Add soy, Shaoxing, sugar.",
      "textZh": "下姜片葱段炒香30秒，加生抽料酒糖。",
      "zhHint": "爆香料",
      "stateNote": {
        "visual": "Aromatics sizzling",
        "visualZh": "香料滋滋作响",
        "heat": "medium",
        "timeRef": "30 seconds",
        "signal": "Fragrant"
      }
    },
    {
      "text": "Add 2 cups hot water. Bring to boil, skim foam.",
      "textZh": "加2杯热水，大火烧开，撇浮沫。",
      "zhHint": "加水烧",
      "stateNote": {
        "visual": "Broth dark and clear",
        "visualZh": "汤汁深褐清澈",
        "signal": "Foam removed"
      }
    },
    {
      "text": "Add potato chunks. Cover, reduce to low. Simmer 20 minutes.",
      "textZh": "下土豆块，盖盖转小火焖20分钟。",
      "zhHint": "炖土豆",
      "stateNote": {
        "visual": "Gentle bubble",
        "visualZh": "汤汁微滚",
        "heat": "low",
        "timeRef": "20 minutes",
        "signal": "Potato fork-tender"
      }
    },
    {
      "text": "Uncover, raise heat. Reduce sauce 5 minutes until coating. Serve.",
      "textZh": "开盖转大火收汁5分钟至浓稠包裹，上桌。",
      "zhHint": "收汁",
      "stateNote": {
        "visual": "Sauce glossy thick",
        "visualZh": "酱汁浓稠油亮",
        "heat": "high",
        "timeRef": "5 minutes",
        "signal": "Coats spoon"
      }
    }
  ],
  "tips": [
    "Potato absorbs flavor — taste and adjust salt.",
    "Do not stir too much — potato breaks easily.",
    "Use waxy potatoes for stewing."
  ],
  "tipsZh": [
    "土豆吸味——尝尝再调咸淡。",
    "别多翻——土豆容易散。",
    "炖菜选蜡质土豆。"
  ],
  "relatedSlugs": [
    "potato-pork-rib-stew",
    "sweet-sour-pork",
    "yam-pork-rib-soup"
  ],
  "image": "/images/recipes/potato-stewed-chicken-wings.webp"
};
