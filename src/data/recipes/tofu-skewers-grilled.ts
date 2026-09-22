import type { Recipe } from "@/lib/types";

/** Grilled Tofu Skewers (烤豆腐串) — Day 138 豆制品盛宴 */
export const tofu_skewers_grilled: Recipe = {
  "id": "tofu-skewers-grilled",
  "slug": "tofu-skewers-grilled",
  "titleEn": "Grilled Tofu Skewers",
  "titleZh": "烤豆腐串",
  "pinyin": "kǎo dòu fu chuàn",
  "cuisine": "街头小吃",
  "cuisineEn": "Street Food",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Street-style grilled tofu skewers with cumin and chili — smoky, spicy, addictive.",
  "versionNoteZh": "街边烤豆腐串配孜然辣椒——烟熏、辣、上瘾。",
  "tags": [
    "30-min",
    "street-food",
    "vegetarian",
    "grilled"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Grilled tofu skewers are a street food staple in northern China. The tofu is first pressed and marinated, then grilled over charcoal or a grill pan until smoky and charred.",
  "storyZh": "烤豆腐串是北方街头小吃的标配。豆腐先压干腌制，然后炭火或烤盘烤至烟熏焦香。",
  "image": "/images/recipes/tofu-skewers-grilled.webp",
  "relatedSlugs": [
    "spicy-crayfish",
    "garlic-romaine",
    "salt-pepper-mantis-shrimp"
  ],
  "ingredients": [
    {
      "id": "ts-tofu-01",
      "nameEn": "extra-firm tofu, pressed",
      "nameZh": "超老豆腐，压干",
      "pinyin": "chāo lǎo dòu fu",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "ts-cumin-02",
      "nameEn": "cumin seeds, ground",
      "nameZh": "孜然粉",
      "pinyin": "zī rán fěn",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "cumin"
    },
    {
      "id": "ts-chili-03",
      "nameEn": "chili powder",
      "nameZh": "辣椒粉",
      "pinyin": "là jiāo fěn",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "chili-flakes"
    },
    {
      "id": "ts-soy-04",
      "nameEn": "soy sauce",
      "nameZh": "酱油",
      "pinyin": "jiàng yóu",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "soy-sauce"
    },
    {
      "id": "ts-oil-05",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ts-salt-06",
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
      "text": "Press tofu for 30 minutes. Cut into 2cm x 5cm strips. Thread onto skewers.",
      "textZh": "豆腐压30分钟，切2厘米x5厘米条，穿串。",
      "zhHint": "穿串要紧"
    },
    {
      "text": "Mix soy sauce, oil, cumin, chili powder, and salt for the marinade.",
      "textZh": "混合酱油、油、孜然、辣椒粉和盐做腌料。",
      "zhHint": "腌料要够"
    },
    {
      "text": "Brush marinade on skewers. Let sit for 10 minutes.",
      "textZh": "刷腌料在串上，静置10分钟。",
      "zhHint": "入味"
    },
    {
      "text": "Grill over medium-high heat for 3-4 minutes per side, brushing with marinade.",
      "textZh": "中大火烤3-4分钟每面，刷腌料。",
      "zhHint": "不要频繁翻动",
      "stateNote": {
        "visual": "Char marks appear, aroma rises",
        "visualZh": "出现焦痕，香气升起",
        "timeRef": "3-4 minutes",
        "timeRefZh": "3-4 分钟",
        "heat": "medium-high",
        "signal": "Smoke rises, surface is caramelized",
        "signalZh": "冒烟，表面焦糖化"
      }
    },
    {
      "text": "Sprinkle with extra cumin and chili powder. Serve hot.",
      "textZh": "撒额外孜然和辣椒粉，趁热上桌。",
      "zhHint": "趁热吃"
    }
  ],
  "tips": [
    "Press tofu well — wet tofu won't grill properly.",
    "Don't flip too often — let the char develop.",
    "Serve with cold beer for the full street food experience."
  ],
  "tipsZh": [
    "豆腐压干——湿豆腐烤不好。",
    "不要频繁翻面——让焦痕形成。",
    "配啤酒体验街头小吃全貌。"
  ]
};
