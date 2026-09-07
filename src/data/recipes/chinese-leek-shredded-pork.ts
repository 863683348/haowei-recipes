import type { Recipe } from "@/lib/types";

/** Chinese Leek Shredded Pork (韭黄肉丝) (韭黄肉丝) — Day batch */
export const chinese_leek_shredded_pork: Recipe = {
  "id": "chinese-leek-shredded-pork",
  "slug": "chinese-leek-shredded-pork",
  "titleEn": "Chinese Leek Shredded Pork (韭黄肉丝)",
  "titleZh": "韭黄肉丝",
  "pinyin": "jiǔ huáng ròu sī",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong (广东)",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Cantonese home version emphasizes silkiness: the pork is velveted generously and the leeks are added at the very end.",
  "versionNoteZh": "粤式家常版强调肉丝嫩滑：淀粉上浆充分，韭黄最后下锅。",
  "tags": [
    "15-min",
    "weeknight",
    "pork",
    "cantonese",
    "quick"
  ],
  "dietary": [
    "none"
  ],
  "story": "Jiǔ huáng — yellow chives grown in the dark — are one of Cantonese cooking's most elegant shortcuts.",
  "storyZh": "韭黄——遮光栽培的嫩韭——是粤式厨房里最优雅的捷径。",
  "ingredients": [
    {
      "id": "cl-pork",
      "nameEn": "pork tenderloin, julienned",
      "nameZh": "猪里脊切丝",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-tenderloin"
    },
    {
      "id": "cl-leek",
      "nameEn": "Chinese leek shoots (jiǔ huáng), cut into 4 cm pieces",
      "nameZh": "韭黄（切4厘米段）",
      "amountMetric": "250 g",
      "amountUS": "about 9 oz",
      "category": "produce",
      "pantry": "local",
      "termKey": "chinese-leek"
    },
    {
      "id": "cl-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cl-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cl-starch",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "cl-egg",
      "nameEn": "egg white",
      "nameZh": "蛋清",
      "amountMetric": "1",
      "amountUS": "1",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "cl-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cl-sesame",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Cut pork into 5 cm × 3 mm strips. Toss with Shaoxing wine, egg white, and cornstarch. Let sit 15 minutes.",
      "textZh": "猪里脊切5厘米长、3毫米宽的细丝。加料酒、蛋清和玉米淀粉抓匀，腌制15分钟。",
      "stateNote": {
        "visual": "Pork is coated in a silky, glossy slurry",
        "visualZh": "肉丝裹上丝滑晶莹的浆液",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Surface is tacky, not wet"
      }
    },
    {
      "text": "Trim the root ends and any wilted outer leaves from the Chinese leeks. Cut into 4 cm lengths.",
      "textZh": "韭黄去老根和萎蔫外层叶，切4厘米段。",
      "stateNote": {
        "visual": "Stems are pale yellow-white, crisp, and fresh-smelling",
        "visualZh": "韭黄茎部淡黄白色，脆嫩清香",
        "signal": "No yellowing or slime at the cut ends"
      }
    },
    {
      "text": "Heat oil in a wok over high heat. Add pork and sear 20 seconds. Stir-fry until just cooked through.",
      "textZh": "热锅下油，大火烧至油面波动。下肉丝煎20秒，翻炒至刚熟。",
      "stateNote": {
        "visual": "Pork turns opaque white, exterior silky",
        "visualZh": "肉丝变白，表面丝滑",
        "heat": "high",
        "timeRef": "45-60 seconds",
        "timeRefZh": "45-60 秒",
        "signal": "No pink remaining; surface is glossy from the starch"
      }
    },
    {
      "text": "Add Chinese leeks and light soy sauce. Toss vigorously for 30 seconds — the leeks should just wilt, not collapse.",
      "textZh": "下韭黄和生抽，猛火翻炒30秒——韭黄刚塌软即可，不能炒烂。",
      "stateNote": {
        "visual": "Leeks brighten and begin to soften at edges",
        "visualZh": "韭黄颜色变鲜亮，边缘开始变软",
        "heat": "high",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Leeks are wilted but still hold their shape"
      }
    },
    {
      "text": "Drizzle sesame oil, toss once, and serve immediately.",
      "textZh": "淋香油，翻匀出锅，立即上桌。",
      "stateNote": {
        "visual": "Glossy, fragrant, leeks still vividly yellow",
        "visualZh": "油亮喷香，韭黄依然鲜黄",
        "signal": "Aromatic sesame and leek scent fills the kitchen"
      }
    }
  ],
  "tips": [
    "Chinese leeks wilt incredibly fast. Add them last and serve within 30 seconds.",
    "The egg white in the marinade is the Cantonese secret — it creates an extra-silky coating around the pork.",
    "Don't use green chives as a substitute; the flavor is completely different.",
    "This dish is best with short-grain or jasmine rice."
  ],
  "tipsZh": [
    "韭黄非常娇嫩，最后下锅，30秒内上桌。",
    "蛋清是粤式秘诀——给肉丝加了一层extra丝滑的保护膜。",
    "不要用青蒜苗替代——味道完全不同，太冲。",
    "配短粒米或茉莉香米，让米饭吸收这道菜的清淡汁水。"
  ],
  "relatedSlugs": [
    "pepper-pork",
    "garlic-sprout-shredded-pork",
    "wild-rice-shoot-shredded-pork",
    "garlic-chives-scrambled-eggs"
  ],
  "image": "/images/recipes/garlic-chives-scrambled-eggs.webp"
};
