import type { Recipe } from "@/lib/types";

/** Kung Pao Tofu (宫保豆腐) — Seed batch */
export const kung_pao_tofu: Recipe = {
  "id": "kung-pao-tofu",
  "slug": "kung-pao-tofu",
  "titleEn": "Kung Pao Tofu",
  "titleZh": "宫保豆腐",
  "pinyin": "gōng bǎo dòu fu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Chongqing home cooks use soft tofu for tenderness and skip deep-frying — instead, they gently pan-sear cubes until golden on two sides, preserving moisture inside. No sugar syrup: balance comes from black vinegar + light soy only.",
  "versionNoteZh": "重庆家常做法用嫩豆腐，不油炸，只煎两面至金黄，内里柔润。不熬糖浆，靠陈醋与生抽自然调和酸甜。",
  "tags": [
    "30-min",
    "vegetarian",
    "weeknight"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My uncle Wang in Yuzhong District made this for me when I was sick with fever at 12 — he said ‘tofu cools the body, chilies wake the spirit.’ He always used local fermented black beans (douchi) as a secret umami boost, though we omit them here for Western pantry access.",
  "storyZh": "我渝中区的王叔在我12岁发高烧时给我做这道菜，说‘豆腐清热，辣椒提神’。他总加本地豆豉增鲜，此处为方便西式厨房略去。",
  "ingredients": [
    {
      "id": "tf-01",
      "nameEn": "soft tofu",
      "nameZh": "嫩豆腐",
      "pinyin": "nèn dòu fu",
      "amountMetric": "300 g",
      "amountUS": "1 block (12 oz)",
      "category": "protein",
      "pantry": "local",
      "note": "Press gently between paper towels for 2 minutes — do NOT squeeze dry",
      "noteZh": "用厨房纸轻压2分钟，不可用力挤水"
    },
    {
      "id": "tf-02",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "6 g",
      "amountUS": "8–10 whole",
      "category": "spice",
      "pantry": "asian",
      "note": "Substitute crushed red pepper flakes (½ tsp)",
      "noteZh": "可用红椒碎替代（½ tsp）"
    },
    {
      "id": "tf-03",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "2.5 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "tf-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "18 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tf-05",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "12 ml",
      "amountUS": "2½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "tf-06",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "8 g",
      "amountUS": "1 tsp + ½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "tf-07",
      "nameEn": "roasted unsalted peanuts",
      "nameZh": "原味烤花生仁",
      "pinyin": "yuán wèi kǎo huā shēng rén",
      "amountMetric": "35 g",
      "amountUS": "⅓ cup",
      "category": "staple",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut tofu into 1.5 cm cubes. Pat surface dry with paper towel. Lightly coat cubes with 1 tsp cornstarch (4 g).",
      "textZh": "豆腐切1.5 cm方块，表面轻拍干；薄薄裹一层玉米淀粉（4 g）。",
      "zhHint": "淀粉仅附表皮，防碎不腻",
      "stateNote": {
        "visual": "Cubes look matte, not wet or glossy",
        "visualZh": "豆腐块呈哑光，不湿不亮",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Starch adheres without clumping",
        "signalZh": "淀粉均匀附着，无结块"
      }
    },
    {
      "text": "Heat 12 ml (¾ tbsp) neutral oil in nonstick skillet over medium heat. Place tofu cubes in single layer; cook 3 minutes undisturbed until golden brown on bottom.",
      "textZh": "不粘锅烧热，加油，豆腐单层码放，中火煎3分钟不动，底面金黄。",
      "zhHint": "一次煎一面，不翻动",
      "stateNote": {
        "visual": "Bottom surface turns even golden with crisp edges",
        "visualZh": "底面均匀金黄，边缘微脆",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Tofu releases easily when tilted",
        "signalZh": "锅倾斜时豆腐自然松脱"
      }
    },
    {
      "text": "Carefully flip cubes using thin spatula. Cook 2 more minutes until second side is golden. Transfer to plate; set aside.",
      "textZh": "用薄铲小心翻面，再煎2分钟至另一面金黄，盛出备用。",
      "zhHint": "翻面要稳，防碎",
      "stateNote": {
        "visual": "Both sides evenly bronzed; interior remains soft",
        "visualZh": "两面均呈琥珀色，内部仍柔嫩",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "No crumbling at corners",
        "signalZh": "角部完整不碎"
      }
    },
    {
      "text": "In same skillet, reduce heat to medium-low. Toast dried chilies and Sichuan peppercorns 90 seconds until fragrant and darkened slightly.",
      "textZh": "原锅转小火，下干辣椒与花椒，焙90秒至微香微深。",
      "zhHint": "锅余油足够，不另加油",
      "stateNote": {
        "visual": "Chilies deepen to brick red; peppercorns puff",
        "visualZh": "辣椒转砖红色，花椒微胀",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium-low",
        "signal": "Warm, citrusy aroma fills air",
        "signalZh": "空气中弥漫清新麻香"
      }
    },
    {
      "text": "Add 1 tsp minced ginger and 1 tsp minced garlic; stir 30 seconds. Return tofu. Pour in soy sauce, black vinegar, and remaining cornstarch (4 g) mixed with 2 tbsp water. Toss gently 1 minute. Fold in peanuts. Serve hot.",
      "textZh": "下姜末、蒜末各1 tsp，煸30秒；回豆腐，淋入生抽、陈醋及余下淀粉水（4 g+30 ml），轻翻1分钟；最后拌入花生，趁热上桌。",
      "zhHint": "翻动要轻，保豆腐完整",
      "stateNote": {
        "visual": "Sauce glazes tofu without breaking cubes",
        "visualZh": "酱汁裹匀豆腐，块形完整",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Liquid reduces to glossy film",
        "signalZh": "汤汁收成亮膜状"
      }
    }
  ],
  "tips": [
    "For extra richness, add 1 tsp sesame oil at the very end.",
    "If tofu sticks, your pan isn’t hot enough — preheat longer next time.",
    "Use day-old tofu: it holds shape better than fresh-packed."
  ],
  "tipsZh": [
    "起锅前淋1 tsp芝麻油，风味更醇厚。",
    "若粘锅，说明锅温不足——下次请延长空烧时间。",
    "隔夜豆腐比新买豆腐更耐煎，不易碎。"
  ],
  "relatedSlugs": [
    "kung-pao-shrimp"
  ],
  "image": "/images/recipes/kung-pao-tofu.webp"
};
