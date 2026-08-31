import type { Recipe } from "@/lib/types";

/** Peach Cake (桃酥) (桃酥) — Day batch */
export const peach_cake: Recipe = {
  "id": "peach-cake",
  "slug": "peach-cake",
  "titleEn": "Peach Cake (桃酥)",
  "titleZh": "桃酥",
  "pinyin": "táo sū",
  "cuisine": "北方点心",
  "cuisineEn": "Northern Chinese Pastry",
  "region": "Beijing (English)",
  "regionZh": "北京",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 12,
  "version": "family",
  "versionNote": "家庭版：一揉成型，酥到掉渣",
  "versionNoteZh": "家庭版：一揉成型，酥到掉渣",
  "tags": [
    "pastry",
    "snack",
    "tea-time",
    "crispy",
    "quick"
  ],
  "dietary": [
    "none"
  ],
  "story": "Peach cake gets its name from the impression of a peach left by the thumb when shaping. These melt-in-mouth cookies are a Beijing teahouse classic — crispy, nutty, perfect with pu'er.",
  "storyZh": "桃酥因拇指按出的桃形而得名。入口即化的饼干是北京茶楼经典——酥脆坚果香，配普洱绝配。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "All-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "200 g",
      "amountUS": "1¾ cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "2",
      "nameEn": "White sugar",
      "nameZh": "白糖",
      "amountMetric": "100 g",
      "amountUS": "½ cup",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "3",
      "nameEn": "Lard or vegetable oil",
      "nameZh": "猪油或植物油",
      "amountMetric": "100 g",
      "amountUS": "⅓ cup + 2 tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Egg",
      "nameZh": "鸡蛋",
      "amountMetric": "1",
      "amountUS": "1",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "Baking powder",
      "nameZh": "泡打粉",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "baking-powder"
    },
    {
      "id": "6",
      "nameEn": "White sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "15 g",
      "amountUS": "1½ tbsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "7",
      "nameEn": "Kao hua ( toasted flour)",
      "nameZh": "烤熟面粉（饸饹面）",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "staple",
      "pantry": "local",
      "note": "Optional: toast flour in dry pan until golden for authentic flavor",
      "noteZh": "可选：干锅焙香面粉增加正宗风味"
    }
  ],
  "steps": [
    {
      "text": "Mix sugar, lard, and egg until creamy. Sift in flour, baking powder, and烤 flour.",
      "textZh": "糖、猪油、鸡蛋搅匀至乳化。筛入面粉、泡打粉、烤面粉。",
      "stateNote": {
        "visual": "Mixture should be crumbly but hold together when squeezed",
        "visualZh": "混合物应呈碎屑状但捏之成团",
        "signal": "面团不粘手"
      }
    },
    {
      "text": "Form into 12 balls (about 30g each). Place on lined baking sheet.",
      "textZh": "分成12个球（每份约30g）。放在垫纸烤盘上。",
      "stateNote": {
        "visual": "Balls should be smooth, no cracks",
        "visualZh": "球应光滑无裂纹",
        "signal": "球体紧实"
      }
    },
    {
      "text": "Flatten with palm, make thumb indent in center. Brush with water, sprinkle sesame.",
      "textZh": "手掌压扁，中心拇指按凹。刷水沾芝麻。",
      "stateNote": {
        "visual": "Indent should be clear but not go all the way through",
        "visualZh": "凹印应明显但不穿透",
        "signal": "形状如桃"
      }
    },
    {
      "text": "Bake at 170°C (340°F) for 18-20 minutes until golden edges.",
      "textZh": "170°C烤18-20分钟至边缘金黄。",
      "stateNote": {
        "visual": "Edges should be golden, center still pale — they firm up on cooling",
        "visualZh": "边缘金黄，中心仍浅——冷却后变硬",
        "timeRef": "约18-20分钟",
        "heat": "medium",
        "signal": "边缘金黄、敲起来清脆"
      }
    },
    {
      "text": "Cool completely on rack — they crisp up as they cool.",
      "textZh": "架上完全冷却——冷却后变脆。",
      "stateNote": {
        "visual": "Completely cooled桃酥 should shatter when broken, not bend",
        "visualZh": "完全冷却的桃酥掰开应碎裂而非弯曲",
        "signal": "冷却后酥脆掉渣"
      }
    }
  ],
  "tips": [
    "Don't overmix — just combine until no dry flour remains",
    "Kao hua (toasted flour) is the secret — toast 2 tbsp flour in dry pan 3 minutes",
    "These keep 1 week in airtight container — they get crisper over time",
    "Serve with pu'er or jasmine tea to cut the richness"
  ],
  "tipsZh": [
    "勿过度搅拌——无干粉即可",
    "烤熟面粉是秘诀——干锅焙2汤匙面粉3分钟",
    "密封罐保存1周——放越久越脆",
    "配普洱或茉莉花茶解腻"
  ],
  "relatedSlugs": [
    "egg-yolk-pastry",
    "wife-cake",
    "sesame-flatbread"
  ],
  "image": "/images/recipes/peach-cake.webp"
};
