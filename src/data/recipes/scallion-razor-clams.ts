import type { Recipe } from "@/lib/types";

/** Scallion Razor Clams (葱油蛏子) — Day 137 贝壳鲜味 */
export const scallion_razor_clams: Recipe = {
  "id": "scallion-razor-clams",
  "slug": "scallion-razor-clams",
  "titleEn": "Scallion Razor Clams",
  "titleZh": "葱油蛏子",
  "pinyin": "cōng yóu chéng zi",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Steamed razor clams with scallion oil—a clean, bright dish that lets the seafood shine.",
  "versionNoteZh": "葱油蛏子——干净明亮的菜，让海鲜本身说话。",
  "tags": [
    "30-min",
    "seafood",
    "cantonese",
    "healthy"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "This is pure Cantonese philosophy: minimal intervention, maximum flavor. The scallion oil is poured over just-cooked clams, and the residual heat gently cooks the aromatics.",
  "storyZh": "这是纯粹的粤式哲学：最少干预，最大风味。葱油淋在刚蒸好的蛏子上，余热温和地烹调香料。",
  "image": "/images/recipes/scallion-razor-clams.webp",
  "relatedSlugs": [
    "scallion-steamed-clams",
    "garlic-clam-with-chives",
    "ginger-scallion-scallops"
  ],
  "ingredients": [
    {
      "id": "sr-razor-01",
      "nameEn": "fresh razor clams",
      "nameZh": "鲜蛏子",
      "pinyin": "chéng zi",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lbs",
      "category": "protein",
      "pantry": "local",
      "note": "Soak in salted water 30 min, clean thoroughly",
      "noteZh": "盐水浸泡30分钟，彻底清理"
    },
    {
      "id": "sr-scallion-02",
      "nameEn": "scallions, cut into 5cm lengths",
      "nameZh": "大葱，切5厘米段",
      "pinyin": "dà cōng",
      "amountMetric": "5 stalks",
      "amountUS": "5 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "sr-soy-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sr-oil-04",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "sr-wine-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Soak razor clams in salted water for 30 minutes to purge sand. Scrub shells and trim the dark edge. Cut each clam in half lengthwise.",
      "textZh": "蛏子盐水浸泡30分钟吐沙。刷洗外壳，trim黑边。每只蛏子对半切开。",
      "zhHint": "切半更易入味"
    },
    {
      "text": "Arrange clams on a heat-proof plate. Drizzle with Shaoxing wine. Steam over high heat for 4-5 minutes until shells open and meat is just cooked.",
      "textZh": "蛏子码入耐热盘，淋绍兴酒。大火蒸4-5分钟至贝壳张开，肉质刚熟。",
      "zhHint": "宁短勿长",
      "stateNote": {
        "visual": "Shells open wide, meat turns opaque",
        "visualZh": "贝壳充分张开，肉变白不透明",
        "timeRef": "4-5 minutes",
        "timeRefZh": "4-5 分钟",
        "heat": "high",
        "signal": "Meat is firm but still tender",
        "signalZh": "肉质硬但依然嫩"
      }
    },
    {
      "text": "Transfer to a serving plate, reserving the cooking liquid. Arrange scallion strips on top.",
      "textZh": "转移到盘中，保留 cooking 汁。葱丝铺在上面。",
      "zhHint": "保留原汁"
    },
    {
      "text": "Heat oil in a small wok until it just starts to smoke. Pour hot oil over scallions—they should sizzle and wilt instantly.",
      "textZh": "小锅烧油至微烟。热油淋在葱上——应该立即滋滋作响萎软。",
      "zhHint": "油要够热",
      "stateNote": {
        "visual": "Oil sizzles on contact, scallions turn bright green",
        "visualZh": "热油接触时滋滋作响，葱变翠绿",
        "signal": "Aroma of cooked scallion fills the air",
        "signalZh": "熟葱香气弥漫"
      }
    },
    {
      "text": "Drizzle with light soy sauce and the reserved cooking liquid. Serve immediately.",
      "textZh": "淋生抽和 reserved cooking 汁。立刻上桌。",
      "zhHint": "趁热喝汤"
    }
  ],
  "tips": [
    "Don't oversteam—the meat will become tough and rubbery.",
    "The cooking liquid is pure umami—don't discard it.",
    "Use the thickest part of the scallion for the best flavor."
  ],
  "tipsZh": [
    "不要蒸过头——肉质会变韧。",
    "Cooking 汁是纯鲜味——别倒掉。",
    "用葱的最粗部分风味最佳。"
  ]
};
