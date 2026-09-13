import type { Recipe } from "@/lib/types";

/** Steamed Crab with Ginger and Scallion (姜葱蒸蟹) — Day batch */
export const steamed_crab_with_ginger: Recipe = {
  "id": "steamed-crab-with-ginger",
  "slug": "steamed-crab-with-ginger",
  "titleEn": "Steamed Crab with Ginger and Scallion",
  "titleZh": "姜葱蒸蟹",
  "pinyin": "jiāng cōng zhēng xiè",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Crab must be steamed live — never dead. The ginger-scallion dressing cuts the richness.",
  "versionNoteZh": "蟹必须活蒸——死蟹绝对不能吃。姜葱汁解腻提鲜。",
  "tags": [
    "healthy",
    "seafood",
    "cantonese",
    "celebration"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Cantonese steamed crab is the ultimate test of freshness — there's nowhere to hide. The crab must be alive when it hits the steamer. Ginger and scallion are added not just for flavor but to balance the crab's cooling nature in TCM theory.",
  "storyZh": "粤式清蒸蟹是检验新鲜度的终极标准——无处可藏。蟹入蒸锅时必须活着。姜葱不只是调味，在中医理论里还能中和蟹的寒性。",
  "ingredients": [
    {
      "id": "crab-01",
      "nameEn": "live mud crab or swimming crab",
      "nameZh": "活青蟹或梭子蟹",
      "pinyin": "qīng xiè",
      "amountMetric": "2 whole (about 400g each)",
      "amountUS": "2 whole",
      "category": "protein",
      "pantry": "local",
      "note": "Must be alive before steaming; brush shells clean",
      "noteZh": "蒸制前必须存活；刷洗干净外壳"
    },
    {
      "id": "ginger-02",
      "nameEn": "ginger, sliced into thick rounds",
      "nameZh": "生姜，厚切片",
      "pinyin": "shēng jiāng",
      "amountMetric": "50 g",
      "amountUS": "3.5 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "scallion-03",
      "nameEn": "scallions, cut into long strips",
      "nameZh": "小葱，切长段",
      "pinyin": "xiǎo cōng",
      "amountMetric": "4 stalks",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "light-soy-04",
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
      "id": "rice-vinegar-05",
      "nameEn": "rice vinegar (Zhenjiang or Chinkiang)",
      "nameZh": "米醋（镇江香醋）",
      "pinyin": "mǐ cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    },
    {
      "id": "shaoxing-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Brush crab shells clean under running water. Tie legs if possible, or steam upright to prevent leg loss.",
      "textZh": "活蟹刷洗外壳，用绳绑腿或蒸时腹部朝上，防止掉腿。",
      "zhHint": "蟹腿掉落影响卖相"
    },
    {
      "text": "Prepare dipping sauce: mix 3 tbsp light soy sauce, 1 tbsp rice vinegar, and a pinch of shredded ginger.",
      "textZh": "调蘸料：生抽3汤匙+米醋1汤匙+姜丝少许。",
      "zhHint": "姜醋是蟹的绝配"
    },
    {
      "text": "Place ginger slices on a heatproof plate. Set crabs on top, belly up. Place a ginger slice on each crab's belly.",
      "textZh": "盘中铺姜片，蟹腹朝上摆放，每只蟹腹上再盖一片姜。",
      "zhHint": "腹上放姜是去寒提鲜的秘诀"
    },
    {
      "text": "Remove crabs from steamer. Use kitchen shears to cut each crab in half lengthwise for easier eating.",
      "textZh": "蒸好后取出，用厨房剪沿中线剪开，方便食用。",
      "zhHint": "剪开更入味"
    },
    {
      "text": "Steam over high heat for 15-18 minutes for medium crabs. The shell turns bright orange-red when done.",
      "textZh": "大火蒸15-18分钟（中等蟹），壳变橙红色即熟。",
      "zhHint": "时间到壳必定变红",
      "stateNote": {
        "visual": "Shell turns from dark green/brown to bright orange-red",
        "visualZh": "蟹壳由暗绿/褐色转为亮橙红色",
        "timeRef": "15-18 minutes",
        "timeRefZh": "15-18 分钟",
        "heat": "high",
        "signal": "Shell color is uniformly bright orange; no dark patches remain",
        "signalZh": "壳色均匀亮橙红，无暗斑"
      }
    },
    {
      "text": "Mix soy sauce, rice vinegar, and a splash of Shaoxing wine for the dipping sauce. Serve crabs whole with the sauce on the side.",
      "textZh": "生抽、米醋、少许绍酒调成蘸料。整只上桌，蘸料随碟。",
      "zhHint": "蘸料比例：酱油:醋 = 2:1"
    }
  ],
  "tips": [
    "Only steam live crabs — dead crabs develop toxins rapidly.",
    "Steaming upright (belly up) prevents leg loss and keeps juices in.",
    "Ginger in the belly is traditional and helps neutralize the crab's 'cold' nature."
  ],
  "tipsZh": [
    "只能蒸活蟹——死蟹会产生毒素。",
    "腹朝上蒸防止掉腿、锁住鲜汁。",
    "腹中放姜是传统，帮助中和寒性。"
  ],
  "relatedSlugs": [
    "garlic-vermicelli-steamed-scallops",
    "scallion-oil-steamed-sea-bass",
    "ginger-scallion-steamed-grouper",
    "spicy-crab-dry-pot",
    "clear-steamed-prawns"
  ],
  "image": "/images/recipes/steamed-crab-with-ginger.webp"
};
