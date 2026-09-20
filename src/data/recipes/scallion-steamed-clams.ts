import type { Recipe } from "@/lib/types";

/** Scallion Steamed Clams (葱油蛤蜊) — Day 137 贝壳鲜味 */
export const scallion_steamed_clams: Recipe = {
  "id": "scallion-steamed-clams",
  "slug": "scallion-steamed-clams",
  "titleEn": "Scallion Steamed Clams",
  "titleZh": "葱油蛤蜊",
  "pinyin": "cōng yóu gé lí",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Home-style steamed clams with scallion oil — pure umami, no fancy techniques needed.",
  "versionNoteZh": "家常葱油蛤蜊——纯粹鲜味，无需复杂技法。",
  "tags": [
    "30-min",
    "seafood",
    "cantonese",
    "quick"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "In Cantonese homes, steaming clams with scallions and a splash of Shaoxing wine is the fastest way to get fresh seafood on the table. The trick is timing — overcook and they turn rubbery.",
  "storyZh": "广东家庭里，葱油蒸蛤蜊是最快的海鲜上桌方式。秘诀在于火候——过久肉质会变韧。",
  "image": "/images/recipes/scallion-steamed-clams.webp",
  "relatedSlugs": [
    "garlic-vermicelli-steamed-scallops",
    "steamed-clams-with-garlic",
    "scallion-oil-steamed-bass"
  ],
  "ingredients": [
    {
      "id": "sc-clams-01",
      "nameEn": "fresh clams",
      "nameZh": "蛤蜊",
      "pinyin": "gé lí",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lbs",
      "category": "protein",
      "pantry": "local",
      "note": "Soak in salted water 30 min to purge sand",
      "noteZh": "盐水浸泡30分钟吐沙"
    },
    {
      "id": "sc-scallion-02",
      "nameEn": "scallions, cut into 5cm strips",
      "nameZh": "大葱，切5厘米段",
      "pinyin": "dà cōng",
      "amountMetric": "4 stalks",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "sc-soy-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sc-wine-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sc-oil-05",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "3 tbsp (45 ml)",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "sc-ginger-06",
      "nameEn": "ginger, julienned",
      "nameZh": "生姜，切丝",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp julienned",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Soak clams in salted water (1 tbsp salt per liter) for 30 minutes to purge sand. Scrub shells under running water and discard any open or damaged ones.",
      "textZh": "蛤蜊盐水浸泡30分钟吐沙（每升水加1汤匙盐）。流水下刷洗外壳，丢弃张开或有破损的。",
      "zhHint": "吐沙是关键",
      "stateNote": {
        "visual": "Water at bottom of bowl turns cloudy with sand",
        "visualZh": "碗底水变浑浊带沙",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "No more sand settling at bottom",
        "signalZh": "底部不再有沙子沉淀"
      }
    },
    {
      "text": "Bring a pot of water to boil. Add clams and Shaoxing wine. Cover and steam for 3-4 minutes until shells open wide.",
      "textZh": "锅中水烧沸，加入蛤蜊和绍兴酒。盖锅盖蒸3-4分钟至贝壳充分张开。",
      "zhHint": "火候要旺",
      "stateNote": {
        "visual": "Shells pop open one by one, steam rises",
        "visualZh": "贝壳逐个张开，蒸汽升腾",
        "timeRef": "3-4 minutes",
        "timeRefZh": "3-4 分钟",
        "heat": "high",
        "signal": "At least 80% of shells are open",
        "signalZh": "80%以上贝壳已张开"
      }
    },
    {
      "text": "Discard any clams that remain closed (they were dead before cooking). Transfer open clams to a serving plate, reserving the cooking liquid.",
      "textZh": "丢弃任何未张开的蛤蜊（烹饪前已死）。将张开的蛤蜊转移到盘中，保留 cooking 汁。",
      "zhHint": "未开的不吃"
    },
    {
      "text": "In a small wok, heat oil over medium-high until shimmering. Add scallion strips and ginger julienne. Stir-fry for 30 seconds until fragrant but not browned.",
      "textZh": "小锅中火加热油至微烟。下葱段和姜丝，翻炒30秒至香但不焦。",
      "zhHint": "快炒提香",
      "stateNote": {
        "visual": "Scallions turn bright green and fragrant",
        "visualZh": "葱段变翠绿，香气四溢",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "Aroma hits your nose immediately",
        "signalZh": "香气立刻扑鼻"
      }
    },
    {
      "text": "Pour the hot scallion oil over the steamed clams. Drizzle with light soy sauce. Serve immediately with the reserved clam broth on the side for dipping.",
      "textZh": "将热葱油淋在蒸好的蛤蜊上，淋生抽。立刻上桌，配 reserved 蛤蜊汤蘸食。",
      "zhHint": "趁热吃",
      "stateNote": {
        "visual": "Oil sizzles on contact with hot clams",
        "visualZh": "热油接触蛤蜊时滋滋作响",
        "signal": "Serve while piping hot",
        "signalZh": "趁热上桌"
      }
    }
  ],
  "tips": [
    "Discard any clams that don't open after cooking—they're unsafe to eat.",
    "Don't oversteam: 3-4 minutes is all you need. Overcooked clams are tough and rubbery.",
    "The cooking liquid is pure umami—serve it on the side for dipping or drinking."
  ],
  "tipsZh": [
    "烹饪后未张开的蛤蜊请勿食用——不安全。",
    "不要蒸过头：3-4分钟足够。过久的蛤蜊肉质变韧。",
    "Cooking 汁是纯鲜味——可作为蘸料或直接饮用。"
  ]
};
