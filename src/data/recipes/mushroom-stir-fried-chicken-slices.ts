import type { Recipe } from "@/lib/types";

/** Mushroom Stir-Fried Chicken Slices (蘑菇炒鸡片) (蘑菇炒鸡片) — Day batch */
export const mushroom_stir_fried_chicken_slices: Recipe = {
  "id": "mushroom-stir-fried-chicken-slices",
  "slug": "mushroom-stir-fried-chicken-slices",
  "titleEn": "Mushroom Stir-Fried Chicken Slices (蘑菇炒鸡片)",
  "titleZh": "蘑菇炒鸡片",
  "pinyin": "mo gu chao ji pian",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Mushroom umami meets tender chicken in this quick stir-fry.",
  "versionNoteZh": "蘑菇鲜味遇上嫩鸡片，快手家常小炒。",
  "tags": [
    "30-min",
    "weeknight",
    "chicken",
    "umami"
  ],
  "dietary": [
    "none"
  ],
  "story": "Mushroom stir-fried chicken is a home cook's secret weapon.",
  "storyZh": "蘑菇炒鸡片是家庭厨师的秘密武器。",
  "ingredients": [
    {
      "id": "mm-01",
      "nameEn": "chicken breast, sliced thin",
      "nameZh": "鸡胸肉切片",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "mm-02",
      "nameEn": "cremini or button mushrooms, sliced",
      "nameZh": "口蘑切片",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "mm-03",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "mm-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "mm-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "mm-06",
      "nameEn": "cornstarch",
      "nameZh": "淀粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "mm-07",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Slice chicken breast against the grain into thin slices. Marinate with soy, Shaoxing, and 1/2 tbsp cornstarch. Rest 10 minutes.",
      "textZh": "鸡胸逆纹切薄片，加生抽、料酒和半汤匙淀粉腌10分钟。",
      "zhHint": "切片上浆",
      "stateNote": {
        "visual": "Slices glossy and coated",
        "visualZh": "鸡片油亮裹浆",
        "timeRef": "10 minutes",
        "signal": "Surface tacky"
      }
    },
    {
      "text": "Slice mushrooms 3 mm thick. Mince garlic.",
      "textZh": "蘑菇切3毫米厚片，蒜切末。",
      "zhHint": "备料",
      "stateNote": {
        "visual": "Mushroom slices uniform",
        "visualZh": "蘑菇片均匀",
        "signal": "No slimy spots"
      }
    },
    {
      "text": "Heat oil over high heat. Sear chicken slices in single layer 1-2 minutes per side.",
      "textZh": "热油大火，鸡片单层煎1-2分钟每面。",
      "zhHint": "煎鸡片",
      "stateNote": {
        "visual": "Chicken white and slightly golden",
        "visualZh": "鸡片白亮微金黄",
        "heat": "high",
        "timeRef": "2 minutes per side",
        "signal": "Edges crisp"
      }
    },
    {
      "text": "Push chicken to side, add mushrooms and garlic. Stir-fry 2 minutes.",
      "textZh": "鸡片推一边，下蘑菇蒜片炒2分钟。",
      "zhHint": "炒蘑菇",
      "stateNote": {
        "visual": "Mushrooms shrink and brown",
        "visualZh": "蘑菇收缩变褐",
        "heat": "high",
        "timeRef": "2 minutes",
        "signal": "Mushrooms golden brown"
      }
    },
    {
      "text": "Add remaining cornstarch with 2 tbsp water. Toss until glossy. Serve.",
      "textZh": "剩余淀粉加水调匀倒入，翻炒至油亮。",
      "zhHint": "勾芡",
      "stateNote": {
        "visual": "Sauce glossy and coating",
        "visualZh": "酱汁油亮包裹",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Slice chicken against the grain for tenderness.",
    "Do not overcrowd the pan.",
    "Mushrooms release water — let it evaporate."
  ],
  "tipsZh": [
    "逆纹切鸡胸更嫩。",
    "别 overcrowd。",
    "蘑菇会出水——让水汽蒸发后再勾芡。"
  ],
  "relatedSlugs": [
    "shiitake-mushroom-chicken-stew",
    "black-pepper-chicken-dice",
    "kung-pao-chicken"
  ],
  "image": "/images/recipes/mushroom-stir-fried-chicken-slices.webp"
};
