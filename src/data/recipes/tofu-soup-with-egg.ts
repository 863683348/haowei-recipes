import type { Recipe } from "@/lib/types";

/** Silky Tofu and Egg Drop Soup (滑蛋豆腐羹) — Day 138 豆制品盛宴 */
export const tofu_soup_with_egg: Recipe = {
  "id": "tofu-soup-with-egg",
  "slug": "tofu-soup-with-egg",
  "titleEn": "Silky Tofu and Egg Drop Soup",
  "titleZh": "滑蛋豆腐羹",
  "pinyin": "huá dàn dòu fu gēng",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 3,
  "version": "family",
  "versionNote": "Velvety soft tofu in a silky egg-drop broth — a Cantonese comfort soup.",
  "versionNoteZh": "丝滑嫩豆腐配蛋花汤——粤式家常舒适汤。",
  "tags": [
    "30-min",
    "soup",
    "vegetarian",
    "healthy",
    "quick"
  ],
  "dietary": [
    "vegetarian",
    "gluten-free"
  ],
  "story": "This Cantonese soup is the ultimate comfort food. Silky soft tofu melts in your mouth, and the egg ribbons add delicate texture.",
  "storyZh": "这道粤式汤是终极 comfort food。丝滑豆腐入口即化，蛋花增添细腻口感。",
  "image": "/images/recipes/tofu-soup-with-egg.webp",
  "relatedSlugs": [
    "egg-drop-soup",
    "winter-melon-coix-pork-bone-soup",
    "seaweed-shrimp-soup"
  ],
  "ingredients": [
    {
      "id": "ts-tofu-01",
      "nameEn": "silken tofu",
      "nameZh": "嫩豆腐",
      "pinyin": "nèn dòu fu",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "ts-egg-02",
      "nameEn": "egg, beaten",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "2",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "ts-ginger-03",
      "nameEn": "ginger, julienned",
      "nameZh": "生姜，切丝",
      "pinyin": "shēng jiāng",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ts-stock-04",
      "nameEn": "chicken stock",
      "nameZh": "高汤",
      "pinyin": "gāo tāng",
      "amountMetric": "600 ml",
      "amountUS": "about 2.5 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "ts-soy-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ts-sesame-06",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "ts-corn-07",
      "nameEn": "cornstarch slurry",
      "nameZh": "水淀粉",
      "pinyin": "shuǐ diàn fěn",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut silken tofu into 2cm cubes. Soak in warm water to keep from breaking.",
      "textZh": "嫩豆腐切2厘米块，泡温水防碎。",
      "zhHint": "嫩豆腐易碎"
    },
    {
      "text": "Bring stock to a boil. Add ginger julienne and tofu cubes. Simmer for 2 minutes.",
      "textZh": "高汤烧沸，下姜丝和豆腐块。小火煮2分钟。",
      "zhHint": "小火别让豆腐散",
      "stateNote": {
        "visual": "Gentle simmer, not rolling boil",
        "visualZh": "微沸，不是滚沸",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "Tofu floats but stays intact",
        "signalZh": "豆腐浮起但完整"
      }
    },
    {
      "text": "Slowly drizzle beaten egg in a thin stream while stirring gently to form ribbons.",
      "textZh": "缓慢淋入打散的鸡蛋，轻搅形成蛋花。",
      "zhHint": "蛋液要细流",
      "stateNote": {
        "visual": "Egg forms delicate ribbons",
        "visualZh": "蛋液形成薄纱状",
        "signal": "Egg sets in 10 seconds",
        "signalZh": "蛋花10秒凝固"
      }
    },
    {
      "text": "Add cornstarch slurry to thicken slightly. Season with soy sauce and sesame oil. Serve hot.",
      "textZh": "加水淀粉略勾芡，调生抽和香油。趁热上桌。",
      "zhHint": "芡汁要稀"
    }
  ],
  "tips": [
    "Use silken tofu for the silkiest texture.",
    "Don't boil vigorously after adding egg — it will make the egg rubbery.",
    "Serve immediately — the soup thickens as it cools."
  ],
  "tipsZh": [
    "用嫩豆腐口感最丝滑。",
    "加蛋后不要大火滚——蛋会变韧。",
    "立刻上桌——汤冷却后会变稠。"
  ]
};
