import type { Recipe } from "@/lib/types";

/** Spicy Stir-Fried Squid (辣炒墨鱼) — Day batch */
export const spicy_squid_stir_fry: Recipe = {
  "id": "spicy-squid-stir-fry",
  "slug": "spicy-squid-stir-fry",
  "titleEn": "Spicy Stir-Fried Squid",
  "titleZh": "辣炒墨鱼",
  "pinyin": "là chǎo mò yú",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Crispy squid with Cantonese spicy kick.",
  "versionNoteZh": "粤式辣炒墨鱼，脆嫩爽口。",
  "tags": [
    "20-min",
    "spicy",
    "seafood"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Squid stir-fried with chili and garlic is a Cantonese seafood staple.",
  "storyZh": "墨鱼与辣椒蒜片快炒，是广东人餐桌上的海鲜家常菜。",
  "ingredients": [
    {
      "id": "ssq-01",
      "nameEn": "squid",
      "nameZh": "墨鱼",
      "amountMetric": "300 g",
      "amountUS": "0.7 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ssq-02",
      "nameEn": "dried chilies",
      "nameZh": "干辣椒",
      "amountMetric": "8 pieces",
      "amountUS": "8 pieces",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-chili"
    },
    {
      "id": "ssq-03",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "5 cloves",
      "amountUS": "5 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ssq-04",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ssq-05",
      "nameEn": "soy sauce",
      "nameZh": "酱油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "soy-sauce"
    },
    {
      "id": "ssq-06",
      "nameEn": "rice wine",
      "nameZh": "米酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-wine"
    }
  ],
  "steps": [
    {
      "text": "Clean squid, remove internal organs and quill.",
      "textZh": "墨鱼去内脏和软骨洗净。",
      "stateNote": {
        "visual": "Clean squid",
        "visualZh": "墨鱼处理干净",
        "signal": "Ready"
      }
    },
    {
      "text": "Score squid body in crosshatch pattern and cut into strips.",
      "textZh": "墨鱼身划十字花刀切条。",
      "stateNote": {
        "visual": "Crosshatch pattern",
        "visualZh": "十字刀纹",
        "signal": "Prepared"
      }
    },
    {
      "text": "Blanch squid in boiling water for 30 seconds.",
      "textZh": "墨鱼条焯水30秒。",
      "stateNote": {
        "visual": "Squid curls",
        "visualZh": "墨鱼卷曲",
        "heat": "high",
        "timeRef": "30 seconds",
        "signal": "Blanched"
      }
    },
    {
      "text": "Heat oil and fry garlic, ginger, and dried chilies.",
      "textZh": "热油爆香蒜、姜、干辣椒。",
      "stateNote": {
        "visual": "Aroma rising",
        "visualZh": "香气四溢",
        "heat": "medium",
        "signal": "Fragrant"
      }
    },
    {
      "text": "Add blanched squid and stir-fry on high heat.",
      "textZh": "加入墨鱼大火快炒。",
      "stateNote": {
        "visual": "Squid sizzling",
        "visualZh": "墨鱼滋滋响",
        "heat": "high",
        "signal": "Sizzling"
      }
    },
    {
      "text": "Add soy sauce and rice wine, toss quickly.",
      "textZh": "倒入酱油和米酒快速翻匀。",
      "stateNote": {
        "visual": "Sauce coating",
        "visualZh": "酱汁包裹",
        "signal": "Mixed"
      }
    },
    {
      "text": "Serve immediately.",
      "textZh": "立即上桌。",
      "stateNote": {
        "visual": "Steaming dish",
        "visualZh": "热气腾腾",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Don't overcook or squid becomes rubbery.",
    "High heat is essential for wok hei."
  ],
  "tipsZh": [
    "别炒太久，肉质会变韧。",
    "大火快炒才有镬气。"
  ],
  "relatedSlugs": [
    "spicy-clam-stir-fry",
    "longjing-shrimp"
  ],
  "image": "/images/recipes/spicy-squid-stir-fry.webp"
};
