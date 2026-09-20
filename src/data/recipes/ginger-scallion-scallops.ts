import type { Recipe } from "@/lib/types";

/** Ginger Scallion Scallops (姜葱炒扇贝) — Day 137 贝壳鲜味 */
export const ginger_scallion_scallops: Recipe = {
  "id": "ginger-scallion-scallops",
  "slug": "ginger-scallion-scallops",
  "titleEn": "Ginger Scallion Scallops",
  "titleZh": "姜葱炒扇贝",
  "pinyin": "jiāng cōng chǎo shàn bèi",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Quick wok-fried scallops with ginger and scallion—a Cantonese classic that highlights the scallop's natural sweetness.",
  "versionNoteZh": "姜葱快炒扇贝——粤式经典，突出扇贝天然甜味。",
  "tags": [
    "30-min",
    "seafood",
    "cantonese",
    "quick"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "This is one of the most fundamental Cantonese seafood preparations. The ginger and scallion are there to enhance, not mask, the scallop's natural sweetness.",
  "storyZh": "这是最基础的粤式海鲜做法之一。姜葱的作用是提鲜，不是掩盖扇贝的天然甜味。",
  "image": "/images/recipes/ginger-scallion-scallops.webp",
  "relatedSlugs": [
    "garlic-vermicelli-steamed-scallops",
    "scallion-steamed-clams",
    "white-boiled-shrimp"
  ],
  "ingredients": [
    {
      "id": "gs-scallop-01",
      "nameEn": "fresh sea scallops",
      "nameZh": "鲜扇贝",
      "pinyin": "shàn bèi",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Remove the small white adductor muscle if present",
      "noteZh": "如有白色小肌肉去掉"
    },
    {
      "id": "gs-ginger-02",
      "nameEn": "ginger, julienned",
      "nameZh": "生姜，切丝",
      "pinyin": "shēng jiāng",
      "amountMetric": "20 g",
      "amountUS": "about 2 tbsp julienned",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "gs-scallion-03",
      "nameEn": "scallions, cut into 2-inch lengths",
      "nameZh": "大葱，切2英寸段",
      "pinyin": "dà cōng",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "gs-wine-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "1 tbsp (15 ml)",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "gs-oil-05",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gs-salt-06",
      "nameEn": "salt",
      "nameZh": "盐",
      "pinyin": "yán",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Pat scallops dry with paper towels. Season lightly with salt. Heat wok over high heat until smoking.",
      "textZh": "扇贝用厨房纸吸干水分。轻撒盐调味。大火烧 wok 至冒烟。",
      "zhHint": "锅要够热",
      "stateNote": {
        "visual": "Wok surface shimmers with heat",
        "visualZh": "锅面热气蒸腾",
        "heat": "high",
        "signal": "A drop of water sizzles and evaporates instantly",
        "signalZh": "水滴入锅立即滋滋蒸发"
      }
    },
    {
      "text": "Add oil and swirl to coat. Add scallops in a single layer—don't overcrowd. Sear undisturbed for 1 minute.",
      "textZh": "加油润锅，下扇贝单排放置。不要 overcrowd。煎1分钟不动。",
      "zhHint": "不要翻动",
      "stateNote": {
        "visual": "Bottom of scallop turns golden",
        "visualZh": "扇贝底部呈金黄色",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Scallop releases easily from wok",
        "signalZh": "扇贝轻易脱离锅底"
      }
    },
    {
      "text": "Flip scallops. Add ginger julienne and scallion whites. Stir-fry for 30 seconds.",
      "textZh": "翻面，下姜丝和葱白，翻炒30秒。",
      "zhHint": "快速翻动",
      "stateNote": {
        "visual": "Ginger releases aroma",
        "visualZh": "姜片释放香气",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Aroma is sharp and fresh",
        "signalZh": "香气锐利清新"
      }
    },
    {
      "text": "Add Shaoxing wine around the edge of the wok. Toss everything together for 20 seconds.",
      "textZh": "沿锅边淋绍兴酒，翻炒20秒。",
      "zhHint": "锅边淋酒激发香气",
      "stateNote": {
        "visual": "Wine sizzles and deglazes the wok",
        "visualZh": "酒接触热锅滋滋作响",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "Alcohol aroma dissipates, leaving savory scent",
        "signalZh": "酒精味散尽，留下鲜香"
      }
    },
    {
      "text": "Add scallion greens, toss once more, and serve immediately.",
      "textZh": "下葱绿部分，再翻一次，立刻上桌。",
      "zhHint": "葱绿最后放保持翠绿"
    }
  ],
  "tips": [
    "Scallops must be very dry before searing—pat them thoroughly.",
    "High heat is essential; low heat will steam the scallops instead of searing them.",
    "Don't overcook—1-2 minutes per side is enough for plump scallops."
  ],
  "tipsZh": [
    "扇贝煎前要彻底吸干水分。",
    "大火是关键——小火会蒸而不是煎。",
    "不要过度烹饪——每面1-2分钟足够。"
  ]
};
