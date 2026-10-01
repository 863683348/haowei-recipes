import type { Recipe } from "@/lib/types";

/** Scallion Oil Turbot (葱油多宝鱼) (葱油多宝鱼) — Day batch */
export const scallion_oil_turbot: Recipe = {
  "id": "cong-you-duo-bao-yu",
  "slug": "scallion-oil-turbot",
  "titleEn": "Scallion Oil Turbot (葱油多宝鱼)",
  "titleZh": "葱油多宝鱼",
  "pinyin": "cōng yóu duō bǎo yú",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese Cuisine",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version steams turbot whole, then pours smoking scallion oil and light soy over the top for a clean, restaurant-style finish.",
  "versionNoteZh": "家常版整鱼清蒸，再淋滚葱油与生抽，干净利落如茶餐厅。",
  "tags": [
    "turbot",
    "steamed",
    "cantonese",
    "light"
  ],
  "dietary": [
    "none"
  ],
  "story": "Scallion oil is the quiet hero of Cantonese seafood — it wakes a plain steamed fish into something you remember.",
  "storyZh": "葱油是粤式海鲜的隐形主角：让清蒸鱼从平淡变成难忘。",
  "ingredients": [
    {
      "id": "cot-01",
      "nameEn": "turbot (whole, about 500 g)",
      "nameZh": "多宝鱼（整条约500克）",
      "pinyin": "duō bǎo yú",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Score the thick side.",
      "noteZh": "厚身一侧打花刀。"
    },
    {
      "id": "cot-02",
      "nameEn": "scallion, shredded",
      "nameZh": "葱（切丝）",
      "pinyin": "cōng",
      "amountMetric": "40 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cot-03",
      "nameEn": "ginger, shredded",
      "nameZh": "姜（切丝）",
      "pinyin": "jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cot-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cot-05",
      "nameEn": "neutral oil",
      "nameZh": "植物油",
      "pinyin": "zhí wù yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cot-06",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Lay turbot on a plate with ginger; steam over boiling water 8 minutes.",
      "textZh": "多宝鱼铺姜丝上盘，沸水蒸8分钟。",
      "zhHint": "清蒸",
      "stateNote": {
        "visual": "Flesh turns opaque and flakes at the spine.",
        "visualZh": "鱼肉转白、脊处易离。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "high",
        "signal": "Eyes turn white and cloudy.",
        "signalZh": "鱼眼变白浑浊。"
      }
    },
    {
      "text": "Pour off the pooled liquid; lay scallion shreds over the fish.",
      "textZh": "倒掉盘中腥水，铺葱丝于鱼身。",
      "zhHint": "去水铺葱",
      "stateNote": {
        "visual": "Scallion sits bright on the hot flesh.",
        "visualZh": "葱丝鲜亮铺在热鱼肉上。",
        "signal": "Fish stays steaming.",
        "signalZh": "鱼仍腾热气。"
      }
    },
    {
      "text": "Heat neutral oil with sesame oil until shimmering and just smoking.",
      "textZh": "植物油加香油烧至微冒烟。",
      "zhHint": "烧热葱油",
      "stateNote": {
        "visual": "Oil shimmers and a wisp of smoke rises.",
        "visualZh": "油面波动、飘起一缕烟。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "A drop of scallion sizzles instantly.",
        "signalZh": "滴葱即爆。"
      }
    },
    {
      "text": "Pour the hot oil evenly over the scallion to blister it.",
      "textZh": "热油均匀淋过葱丝，烫出香味。",
      "zhHint": "淋油",
      "stateNote": {
        "visual": "Scallion wilts and turns vivid green.",
        "visualZh": "葱丝塌软、转鲜绿。",
        "timeRef": "5 seconds",
        "timeRefZh": "5 秒",
        "heat": "high",
        "signal": "A sharp scallion aroma blooms.",
        "signalZh": "葱香骤然绽放。"
      }
    },
    {
      "text": "Drizzle light soy around the plate and serve at once.",
      "textZh": "沿盘淋生抽，即刻上桌。",
      "zhHint": "淋豉油",
      "stateNote": {
        "visual": "Soy pools at the rim and glazes the edges.",
        "visualZh": "生抽在盘边汇成、润泽边缘。",
        "timeRef": "5 seconds",
        "timeRefZh": "5 秒",
        "heat": "high",
        "signal": "Everything is hot and glossy.",
        "signalZh": "全热、油亮。"
      }
    }
  ],
  "tips": [
    "Discard the steaming liquid — it carries the fishy note.",
    "Shred scallion thin so the oil blisters it evenly.",
    "Oil must be truly hot to bloom the scallion aroma."
  ],
  "tipsZh": [
    "蒸鱼水要倒掉，腥味全在那。",
    "葱丝切细，油才烫得匀。",
    "油要够热，葱香才炸得开。"
  ],
  "commonMistakes": [
    {
      "mistake": "Keeping the steaming water so the dish tastes fishy.",
      "mistakeZh": "留蒸鱼水，整道发腥。",
      "fix": "Always pour it off before the oil step.",
      "fixZh": "淋油前务必倒掉。"
    },
    {
      "mistake": "Oil not hot enough so scallion stays raw.",
      "mistakeZh": "油不够热，葱生。",
      "fix": "Wait until the oil just smokes.",
      "fixZh": "等油将冒烟。"
    }
  ],
  "variations": [
    "Add a few cilantro sprigs for a fresh note.",
    "Use a sea bass instead of turbot."
  ],
  "variationsZh": [
    "加几根香菜，更清新。",
    "多宝鱼换鲈鱼。"
  ],
  "relatedSlugs": [
    "braised-fish-cubes",
    "sweet-sour-carp",
    "dry-braised-crucian",
    "sauce-braised-croaker",
    "pan-fried-hairtail",
    "tomato-fish-slices",
    "salt-pepper-croaker",
    "stir-fried-shrimp",
    "broccoli-shrimp"
  ],
  "image": "/images/recipes/og-default.webp"
};
