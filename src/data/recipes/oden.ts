import type { Recipe } from "@/lib/types";

/** Oden (关东煮) (关东煮) — Day batch */
export const oden: Recipe = {
  "titleEn": "Oden (关东煮)",
  "titleZh": "关东煮",
  "pinyin": "guān dōng zhǔ",
  "cuisine": "日式中华融合",
  "cuisineEn": "Japanese-Chinese Fusion",
  "region": "全国",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 4,
  "version": "family",
  "versionNote": "Home-style warm pot with dashi broth",
  "versionNoteZh": "家庭版日式关东煮",
  "tags": [
    "comfort-food",
    "winter",
    "slow-cook"
  ],
  "dietary": [
    "none"
  ],
  "story": "Originally from Japan's Kantō region, oden is a one-pot winter warm-up that's now ubiquitous at Chinese convenience stores. The umami-rich dashi broth slowly infuses into fish cakes, daikon, and tofu pockets throughout the day.",
  "storyZh": "原产于日本关东地区，关东煮是一道冬日暖身一锅出，如今在中国便利店随处可见。鲜味浓郁的出汁高汤将鱼饼、白萝卜和豆腐泡慢慢浸润。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "Daikon radish",
      "nameZh": "白萝卜",
      "amountMetric": "300g",
      "amountUS": "10 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "2",
      "nameEn": "Fish cakes (naruto)",
      "nameZh": "鱼籽福袋",
      "amountMetric": "200g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "asian"
    },
    {
      "id": "3",
      "nameEn": "Hard tofu",
      "nameZh": "硬豆腐",
      "amountMetric": "200g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "asian"
    },
    {
      "id": "4",
      "nameEn": "Konjac cake",
      "nameZh": "魔芋结",
      "amountMetric": "150g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "asian"
    },
    {
      "id": "5",
      "nameEn": "Won ton dumplings",
      "nameZh": "云吞",
      "amountMetric": "10 pieces",
      "amountUS": "10 pcs",
      "category": "protein",
      "pantry": "asian"
    },
    {
      "id": "6",
      "nameEn": "Dashi stock",
      "nameZh": "出汁高汤",
      "amountMetric": "1L",
      "amountUS": "4 cups",
      "category": "other",
      "pantry": "asian"
    },
    {
      "id": "7",
      "nameEn": "Soy sauce",
      "nameZh": "酱油",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "8",
      "nameEn": "Mirin",
      "nameZh": "味淋",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Cut daikon into 3cm thick rounds, score the edges in a cross pattern.",
      "textZh": "白萝卜切成3厘米厚圆片，在边缘划十字花刀，便于入味。",
      "stateNote": {
        "visual": "even thick slices",
        "signal": "ready to cook"
      }
    },
    {
      "text": "Bring dashi stock to a gentle simmer in a pot, add soy sauce and mirin.",
      "textZh": "锅中倒入出汁高汤，中小火煮开后加入酱油和味淋调味。",
      "stateNote": {
        "visual": "light amber broth, small bubbles",
        "signal": "simmering"
      }
    },
    {
      "text": "Add daikon first and simmer covered for 10 minutes until starting to soften.",
      "textZh": "先放入白萝卜，盖盖小火煮10分钟，使其开始变软。",
      "zhHint": "萝卜难熟，先下锅",
      "stateNote": {
        "visual": "萝卜边缘略透明",
        "signal": "10 minutes"
      }
    },
    {
      "text": "Add fish cakes, konjac, tofu, and won ton, simmer another 8-10 minutes.",
      "textZh": "再加入鱼籽福袋、魔芋结、豆腐和云吞，继续煮8-10分钟。",
      "stateNote": {
        "visual": "all ingredients hot through",
        "signal": "8-10 minutes"
      }
    },
    {
      "text": "Turn off heat and let rest 5 minutes before serving with chopsticks or skewers.",
      "textZh": "关火后焖5分钟让味道融合，用签子串起或筷子夹出食用。",
      "stateNote": {
        "visual": "steam rising, fragrant",
        "signal": "ready to serve"
      }
    }
  ],
  "tips": [
    "Make ahead and keep warm — flavors deepen overnight",
    "Add a knob of kombu for extra umami depth",
    "Serve with a side of karashi mustard for dipping"
  ],
  "tipsZh": [
    "可提前制作保温，过夜更入味",
    "加一小块昆布增加鲜味层次",
    "配黄芥末酱蘸食风味更佳"
  ],
  "relatedSlugs": [
    "grilled-cold-noodles-day88-1",
    "malatang-day88-9"
  ],
  "image": "/images/recipes/oden-day88.webp",
  "slug": "oden",
  "id": "oden"
};
