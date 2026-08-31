import type { Recipe } from "@/lib/types";

/** Pop-open Cruller (开口笑) (开口笑) — Day batch */
export const kai_kou_xiao: Recipe = {
  "id": "kai-kou-xiao",
  "slug": "kai-kou-xiao",
  "titleEn": "Pop-open Cruller (开口笑)",
  "titleZh": "开口笑",
  "pinyin": "kāi kǒu xiào",
  "cuisine": "川式点心",
  "cuisineEn": "Sichuan Pastry",
  "region": "Sichuan (English)",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 15,
  "version": "family",
  "versionNote": "家庭版：油炸小球，咬开会心一笑",
  "versionNoteZh": "家庭版：油炸小球，咬开会心一笑",
  "tags": [
    "pastry",
    "snack",
    "fried",
    "sweet",
    "festive"
  ],
  "dietary": [
    "none"
  ],
  "story": "These golden balls crack open when bitten, revealing a hollow center — hence the name 'laughing opening.' A Sichuan festival treat, crispy outside, chewy inside, rolled in sugar.",
  "storyZh": "咬下去裂开露出空心——故名'开口笑'。四川节庆点心，外脆内糯，裹糖粒。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "Glutinous rice flour",
      "nameZh": "糯米粉",
      "amountMetric": "200 g",
      "amountUS": "1¾ cups",
      "category": "staple",
      "pantry": "asian",
      "termKey": "glutinous-rice"
    },
    {
      "id": "2",
      "nameEn": "White sugar",
      "nameZh": "白糖",
      "amountMetric": "60 g",
      "amountUS": "⅓ cup",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "3",
      "nameEn": "Warm water",
      "nameZh": "温水",
      "amountMetric": "90 ml",
      "amountUS": "⅓ cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Lard or vegetable oil (for dough)",
      "nameZh": "猪油或植物油（和面用）",
      "amountMetric": "20 g",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "Vegetable oil (for frying)",
      "nameZh": "植物油（炸用）",
      "amountMetric": "1 liter",
      "amountUS": "4 cups",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "6",
      "nameEn": "White sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "50 g",
      "amountUS": "5 tbsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Mix糯米粉, sugar, lard and warm water. Knead into smooth dough. Rest 15 minutes.",
      "textZh": "糯米粉、糖、猪油、温水揉成光滑面团。静置15分钟。",
      "stateNote": {
        "visual": "Dough should be soft and pliable, like playdough",
        "visualZh": "面团应柔软可塑，如橡皮泥",
        "signal": "面团光滑不裂"
      }
    },
    {
      "text": "Form into 15 small balls (about 25g each). Roll each in water, then sesame seeds.",
      "textZh": "分15个小球（每份约25g）。蘸水沾芝麻。",
      "stateNote": {
        "visual": "Sesame should adhere well — if falling off, dough is too dry",
        "visualZh": "芝麻应粘牢——若脱落说明面团太干",
        "signal": "芝麻覆盖均匀"
      }
    },
    {
      "text": "Heat oil to 160°C (320°F). Fry balls, stirring gently, for 8-10 minutes.",
      "textZh": "油烧至160°C。炸球，轻搅，8-10分钟。",
      "stateNote": {
        "visual": "Balls should float and slowly expand — cracks will appear",
        "visualZh": "球应浮起并缓慢膨胀——裂纹会出现",
        "timeRef": "约8-10分钟",
        "heat": "medium",
        "signal": "浮起、表面微裂"
      }
    },
    {
      "text": "Increase heat to 180°C for 1 minute to crisp. Drain on paper towel.",
      "textZh": "升温至180°C炸1分钟脆化。厨房纸吸油。",
      "stateNote": {
        "visual": "Color should be deep golden — not pale (under) or dark (over)",
        "visualZh": "颜色应深金黄——不浅（欠炸）不深（过炸）",
        "signal": "金黄酥脆"
      }
    },
    {
      "text": "While hot, toss in extra sugar if desired. Cool and serve.",
      "textZh": "趁热可再滚糖。冷却食用。",
      "stateNote": {
        "visual": "Finished product should crack open when bitten, revealing hollow center",
        "visualZh": "咬下应裂开露出空心",
        "signal": "咬开'开口笑'"
      }
    }
  ],
  "tips": [
    "Oil temperature is critical — too hot outside burns before inside cooks",
    "The cracks forming are the signature — don't try to prevent them",
    "Fry in batches — overcrowding drops oil temp",
    "Best eaten same day — they lose crispiness overnight"
  ],
  "tipsZh": [
    "油温关键——太热外焦里生",
    "裂纹是特色——不要试图防止",
    "分批炸——锅太满油温下降",
    "当天吃最佳——隔夜失脆"
  ],
  "relatedSlugs": [
    "peach-cake",
    "egg-yolk-pastry",
    "sesame-flatbread"
  ],
  "image": "/images/recipes/kai-kou-xiao.webp"
};
