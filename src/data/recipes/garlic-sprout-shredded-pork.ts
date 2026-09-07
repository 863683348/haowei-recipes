import type { Recipe } from "@/lib/types";

/** Garlic Sprout Shredded Pork (蒜苔肉丝) (蒜苔肉丝) — Day batch */
export const garlic_sprout_shredded_pork: Recipe = {
  "id": "garlic-sprout-shredded-pork",
  "slug": "garlic-sprout-shredded-pork",
  "titleEn": "Garlic Sprout Shredded Pork (蒜苔肉丝)",
  "titleZh": "蒜苔肉丝",
  "pinyin": "suàn tái ròu sī",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Shandong (山东)",
  "regionZh": "山东",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version uses tender garlic sprouts stir-fried with velveted pork strips in a blazing wok.",
  "versionNoteZh": "家常版用嫩蒜苔配滑嫩肉丝猛火快炒。",
  "tags": [
    "30-min",
    "weeknight",
    "pork",
    "garlic",
    "stir-fry"
  ],
  "dietary": [
    "none"
  ],
  "story": "Suàn tái is the flowering stalk of the garlic plant — firm, garlicky, and wonderfully crisp. Every northern Chinese kitchen keeps a bunch in the fridge come spring.",
  "storyZh": "蒜苔是蒜株的花茎——紧实、蒜香浓郁、口感脆嫩。每到春天，北方中国家庭的冰箱里总会囤一把。",
  "ingredients": [
    {
      "id": "gs-pork",
      "nameEn": "pork tenderloin, julienned",
      "nameZh": "猪里脊切丝",
      "amountMetric": "250 g",
      "amountUS": "about 9 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-tenderloin"
    },
    {
      "id": "gs-sprout",
      "nameEn": "garlic sprouts, trimmed and cut into 5 cm segments",
      "nameZh": "蒜苔（切5厘米段）",
      "amountMetric": "200 g",
      "amountUS": "about 7 oz",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic-sprout"
    },
    {
      "id": "gs-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gs-dark",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "gs-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "gs-starch",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "gs-garlic",
      "nameEn": "garlic cloves, thinly sliced",
      "nameZh": "大蒜切片",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "gs-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gs-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut pork into 5 cm × 3 mm strips. Toss with Shaoxing wine, ½ tbsp light soy, and cornstarch. Let sit 10 minutes.",
      "textZh": "猪里脊切5厘米长、3毫米宽的细丝。加料酒、½汤匙生抽和玉米淀粉抓匀，腌制10分钟。",
      "stateNote": {
        "visual": "Pork strips are coated in a glossy, slightly sticky slurry",
        "visualZh": "肉丝裹上晶莹微黏的浆液",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Surface is tacky but not wet"
      }
    },
    {
      "text": "Trim the tough ends off the garlic sprouts and cut them into 5 cm pieces.",
      "textZh": "蒜苔去老根，切成5厘米段。",
      "stateNote": {
        "visual": "Sprouts are bright green and snap cleanly",
        "visualZh": "蒜苔鲜绿，折断时清脆有声",
        "signal": "No fibrous stringiness at the cut end"
      }
    },
    {
      "text": "Heat 1 tbsp oil in a wok over high heat until shimmering. Add pork strips and sear 30 seconds without stirring, then stir-fry until white.",
      "textZh": "热锅下1汤匙油，大火烧至微冒烟。下肉丝先煎30秒不翻，再翻炒至变白。",
      "stateNote": {
        "visual": "Pork edges turn opaque white; fat renders at edges",
        "visualZh": "肉丝边缘变白，肥肉开始出油",
        "heat": "high",
        "timeRef": "30-45 seconds",
        "timeRefZh": "30-45 秒",
        "signal": "Pork releases from pan easily — crust has formed"
      }
    },
    {
      "text": "Add remaining oil and garlic. Stir 10 seconds until fragrant, then add garlic sprouts and salt.",
      "textZh": "补入余油和蒜片，翻炒10秒出香，再加蒜苔和盐。",
      "stateNote": {
        "visual": "Garlic turns pale gold; sprouts brighten to vivid green",
        "visualZh": "蒜片变浅金；蒜苔颜色变鲜亮",
        "heat": "high",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Aromatics sizzle without browning"
      }
    },
    {
      "text": "Stir-fry 1-2 minutes until sprouts are tender-crisp. Splash in dark soy and remaining light soy. Toss 15 seconds and serve.",
      "textZh": "大火翻炒1-2分钟，蒜苔断生仍脆。淋入老抽和剩余生抽，翻匀15秒出锅。",
      "stateNote": {
        "visual": "Sprouts glossy, slightly wilted but still crisp",
        "visualZh": "蒜苔油亮微塌但保持脆感",
        "heat": "high",
        "timeRef": "1-2 minutes",
        "timeRefZh": "1-2 分钟",
        "signal": "Sprout snaps with slight resistance, not mushy"
      }
    }
  ],
  "tips": [
    "Don't overcrowd the wok — cook in batches if needed.",
    "Garlic sprouts cook fast. Overcooking turns them dull.",
    "The cornstarch velveting step is non-negotiable for tender results.",
    "Leftover garlic sprouts keep 3-4 days wrapped in a damp towel."
  ],
  "tipsZh": [
    "别一次下太多——分批煎。",
    "蒜苔很嫩，炒过头会变软发暗。",
    "玉米淀粉上浆是嫩滑的秘诀，不可省略。",
    "剩蒜苔用湿厨房纸包好冷藏，可存3-4天。"
  ],
  "relatedSlugs": [
    "pepper-pork",
    "garlic-chives-scrambled-eggs",
    "home-style-pork",
    "twice-cooked-pork"
  ],
  "image": "/images/recipes/garlic-chives-scrambled-eggs.webp"
};
