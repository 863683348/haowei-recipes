import type { Recipe } from "@/lib/types";

/** Tengjiao Chicken (藤椒鸡) (藤椒鸡) — Day batch */
export const tengjiao_chicken: Recipe = {
  "id": "tengjiao-chicken",
  "slug": "tengjiao-chicken",
  "titleEn": "Tengjiao Chicken (藤椒鸡)",
  "titleZh": "藤椒鸡",
  "pinyin": "téng jiāo jī",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "藤椒是四川特有的清香麻味花椒，比干花椒更清新，适合快手菜。",
  "versionNoteZh": "藤椒是四川特有的清香麻味花椒，比干花椒更清新，适合快手菜。",
  "tags": [
    "spicy",
    "sichuan",
    "chicken",
    "quick",
    "fresh"
  ],
  "dietary": [
    "none"
  ],
  "story": "Tengjiao (藤椒) is the fresh green Sichuan peppercorn picked in summer — it has a bright, citrusy, almost herbaceous numbing quality unlike dried peppercorns. Tengjiao chicken is a refreshing take on Sichuan chicken: poached until tender, then tossed in a bright green, numbing sauce. It's often served cold as an appetizer.",
  "storyZh": "藤椒是夏季采摘的新鲜青花椒——它有明亮的柑橘清香和草本感的麻味，不同于干花椒。藤椒鸡是川菜里一道清爽的鸡肉做法：白煮至嫩，再拌入翠绿微麻的酱汁。常作为凉菜上桌。",
  "ingredients": [
    {
      "id": "tj-1",
      "nameEn": "boneless chicken thighs",
      "nameZh": "鸡腿肉",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "tj-2",
      "nameEn": "fresh green Sichuan peppercorns (tengjiao) or frozen",
      "nameZh": "新鲜藤椒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "tj-3",
      "nameEn": "garlic cloves, minced",
      "nameZh": "蒜末",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "tj-4",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "tj-5",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tj-6",
      "nameEn": "chinkiang vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "tj-7",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "tj-8",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "tj-9",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "tj-10",
      "nameEn": "salt (for poaching)",
      "nameZh": "盐（煮用）",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Poach chicken: place thighs in a pot, cover with water, add 1/2 tsp salt and 2 scallion segments. Bring to a boil, then reduce to low. Cover and cook 12 minutes. Remove and plunge into ice water.",
      "textZh": "白煮鸡：鸡腿入锅，加水没过，放 1/2 茶匙盐和 2 段葱白。大火烧开转小火，盖盖煮 12 分钟。捞出浸入冰水。",
      "zhHint": "白煮后冰镇",
      "stateNote": {
        "visual": "Water is at a gentle simmer (small bubbles); chicken is opaque through the thickest part",
        "visualZh": "水微沸（小气泡）；鸡肉最厚处呈不透明白色",
        "heat": "low",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "Juices run clear when thickest part is pierced with a skewer"
      }
    },
    {
      "text": "Make the sauce: mix soy sauce, vinegar, sugar, sesame oil, minced garlic, and sliced scallions in a bowl. Taste — it should be salty, slightly sweet, with a bright vinegar note.",
      "textZh": "调酱汁：生抽、香醋、糖、香油、蒜末、葱丝搅匀。尝味——应咸中带甜、醋香鲜明。",
      "zhHint": "调藤椒酱汁",
      "stateNote": {
        "visual": "Sauce is emulsified and glossy; sugar is fully dissolved",
        "visualZh": "酱汁乳化有光泽；糖已完全溶解",
        "signal": "Balance: salty front, sweet middle, vinegar snap at the end"
      }
    },
    {
      "text": "Heat 1 tbsp oil in a small pan over medium. Add fresh tengjiao (or frozen) and fry 10 seconds until fragrant. Pour over the sauce.",
      "textZh": "小锅放 1 汤匙油，中火加热。下新鲜藤椒（或冷冻）炒 10 秒出香，倒入酱汁。",
      "zhHint": "藤椒爆香",
      "stateNote": {
        "visual": "Peppercorns swell and release a bright green oil; aroma is citrusy and numbing",
        "visualZh": "花椒膨胀，释放翠绿色油；香气是柑橘清香带麻感",
        "heat": "medium",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "Lips tingle slightly when you waft the aroma toward you"
      }
    },
    {
      "text": "Remove chicken from ice water, pat dry, and cut into bite-size strips. Toss with the sauce until evenly coated.",
      "textZh": "鸡腿从冰水捞出，擦干，切条。倒入酱汁，拌匀。",
      "zhHint": "切条拌酱",
      "stateNote": {
        "visual": "Chicken strips are coated in glossy green sauce with visible tengjiao bits",
        "visualZh": "鸡条裹满翠绿色酱汁，可见藤椒碎粒",
        "signal": "Each strip is uniformly green; no dry patches"
      }
    },
    {
      "text": "Let rest 10 minutes for flavors to penetrate. Serve at room temperature or chilled.",
      "textZh": "静置 10 分钟让味道渗入。室温或冷藏后上桌。",
      "zhHint": "静置入味",
      "stateNote": {
        "visual": "Sauce thickens slightly as it coats; chicken absorbs the green tint",
        "visualZh": "酱汁略浓稠，鸡肉染上绿色",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Chicken is cool to the touch but not ice-cold"
      }
    }
  ],
  "tips": [
    "Fresh tengjiao is hard to find outside China — frozen is available at Asian markets. If unavailable, use 1 tbsp dried green Sichuan peppercorns toasted and ground.",
    "Don't overcook the chicken — 12 minutes is enough for 2-inch thighs. Overcooked chicken is dry no matter how good the sauce.",
    "This is best served at room temperature or slightly chilled — not hot. The numbing sensation is more refreshing this way."
  ],
  "tipsZh": [
    "新鲜藤椒在中国以外难买到——亚超有卖冷冻的。实在没有，用 1 汤匙干青花椒碾碎煸香代替。",
    "鸡肉别煮过头——2 英寸厚的鸡腿 12 分钟刚好。煮老了再好的酱汁也救不回来。",
    "这道菜适合室温或微凉吃——不是热的。麻味在凉的时候更清爽。"
  ],
  "relatedSlugs": [
    "kou-shui-chicken",
    "pan-fried-chicken",
    "lazi-diced-chicken",
    "cucumber-scrambled-eggs"
  ],
  "image": "/images/recipes/kung-pao-chicken.webp"
};
