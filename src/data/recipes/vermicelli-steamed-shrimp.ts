import type { Recipe } from "@/lib/types";

/** Vermicelli Steamed Shrimp (粉丝蒸虾) — Day batch */
export const vermicelli_steamed_shrimp: Recipe = {
  "id": "vermicelli-steamed-shrimp",
  "slug": "vermicelli-steamed-shrimp",
  "titleEn": "Vermicelli Steamed Shrimp",
  "titleZh": "粉丝蒸虾",
  "pinyin": "fěn sī zhēng xiā",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Unlike garlic vermicelli scallops, this version focuses on the shrimp's natural sweetness with minimal seasoning.",
  "versionNoteZh": "与蒜蓉粉丝蒸扇贝不同，这款突出虾的本味，调味极简。",
  "tags": [
    "quick",
    "healthy",
    "seafood",
    "30-min"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "This is the Cantonese version of 'less is more.' The shrimp should taste like the ocean, not like garlic. Vermicelli at the bottom catches every drop of sweet shrimp juice.",
  "storyZh": "这是粤式'少即是多'的哲学。虾要吃出海的味道，不是蒜的味道。粉丝铺底，吸尽每一滴虾的鲜甜汁液。",
  "ingredients": [
    {
      "id": "shrimp-01",
      "nameEn": "large prawns, heads on, shells on",
      "nameZh": "大虾（带头带壳）",
      "pinyin": "dà xiā",
      "amountMetric": "300 g",
      "amountUS": "10-12 large",
      "category": "protein",
      "pantry": "local",
      "note": "Head-on, shell-on for maximum flavor; devein if preferred",
      "noteZh": "带头带壳鲜味更足；可去虾线"
    },
    {
      "id": "vermicelli-02",
      "nameEn": "mung bean vermicelli, soaked",
      "nameZh": "绿豆粉丝（泡软）",
      "pinyin": "lǜ dòu fěn sī",
      "amountMetric": "40 g",
      "amountUS": "1.4 oz",
      "category": "staple",
      "pantry": "asian",
      "termKey": "vermicelli"
    },
    {
      "id": "ginger-03",
      "nameEn": "ginger, sliced",
      "nameZh": "生姜，切片",
      "pinyin": "shēng jiāng",
      "amountMetric": "20 g",
      "amountUS": "1.5 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "scallion-04",
      "nameEn": "scallions, cut into strips",
      "nameZh": "小葱，切丝",
      "pinyin": "xiǎo cōng",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "light-soy-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Soak vermicelli in warm water 10 minutes. Drain and arrange on a plate. Arrange prawns on top, heads facing outward.",
      "textZh": "粉丝温水泡软10分钟，捞出铺盘底。虾摆其上，头朝外。",
      "zhHint": "粉丝量适中，不能盖过虾身"
    },
    {
      "text": "Make a shallow slit along the back of each prawn to remove the vein. Rinse under cold water.",
      "textZh": "虾背切一刀去虾线，冷水冲洗。",
      "zhHint": "带壳蒸更鲜，但去虾线"
    },
    {
      "text": "Place ginger slices on and around the shrimp. Drizzle soy sauce over everything.",
      "textZh": "姜片撒在虾上和周围，淋入生抽。",
      "zhHint": "少即是多——姜和酱油足矣"
    },
    {
      "text": "Pat shrimp dry with paper towels. Arrange on top of vermicelli, heads facing outward for presentation.",
      "textZh": "吸干虾表面水分，头朝外摆盘。",
      "zhHint": "头朝外更美观"
    },
    {
      "text": "Steam over high heat for 5-6 minutes. Shrimp are done when they turn opaque pink.",
      "textZh": "大火蒸5-6分钟，虾身变粉红不透明即熟。",
      "zhHint": "虾蒸过头会变硬",
      "stateNote": {
        "visual": "Shrimp turn from grey-translucent to opaque pink",
        "visualZh": "虾身由灰透明转为粉红不透明",
        "timeRef": "5-6 minutes",
        "timeRefZh": "5-6 分钟",
        "heat": "high",
        "signal": "Shell color changes from grey to bright pink; flesh is opaque",
        "signalZh": "虾壳由灰转亮粉，肉质变白不透明"
      }
    },
    {
      "text": "Remove, discard ginger. Scatter scallion strips and drizzle 1 tbsp hot oil. Serve immediately.",
      "textZh": "取出，去掉姜片，撒葱丝，淋热油，立即上桌。",
      "zhHint": "热油淋葱丝是最后的点睛"
    }
  ],
  "tips": [
    "Don't oversteam — 6 minutes is the max for large prawns.",
    "Head-on steaming infuses the vermicelli with incredible flavor.",
    "This dish is all about the shrimp's natural sweetness — keep seasoning minimal."
  ],
  "tipsZh": [
    "不要蒸过头——大虾最多6分钟。",
    "带头蒸，粉丝吸尽虾脑的鲜味。",
    "这道菜的精髓是虾的本味——调味越简单越好。"
  ],
  "relatedSlugs": [
    "garlic-vermicelli-steamed-scallops",
    "clear-steamed-prawns",
    "garlic-steamed-prawns",
    "scallion-oil-steamed-sea-bass",
    "steamed-clams-with-garlic"
  ],
  "image": "/images/recipes/vermicelli-steamed-shrimp.webp"
};
