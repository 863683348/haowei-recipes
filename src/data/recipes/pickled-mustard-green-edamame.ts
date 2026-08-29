import type { Recipe } from "@/lib/types";

/** Pickled Mustard Green & Edamame (雪菜毛豆) — Seed batch */
export const pickled_mustard_green_edamame: Recipe = {
  "id": "pickled-mustard-green-edamame",
  "slug": "pickled-mustard-green-edamame",
  "titleEn": "Pickled Mustard Green & Edamame",
  "titleZh": "雪菜毛豆",
  "pinyin": "xuě cài máo dòu",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Shaoxing",
  "regionZh": "绍兴",
  "difficulty": "easy",
  "timeMin": 22,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses no meat — pure vegetable harmony. Restaurants often add minced pork for richness, but grandmother said, ‘Snow greens need no help to sing.’",
  "versionNoteZh": "家常版纯素，突出雪里蕻与毛豆本味；餐馆常加肉末增腴，但祖母说：‘雪菜不用人帮腔，自己就会唱。’",
  "tags": [
    "30-min",
    "vegetarian",
    "comfort"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Every winter, my grandmother in Shaoxing’s old city fermented mustard greens in stone crocks buried in her cellar. Come spring, she’d boil young edamame, chop the pungent greens finely, and stir-fry them together — ‘the first song of warmth after cold silence,’ she called it.",
  "storyZh": "绍兴老城的祖母每年冬至在地窖石瓮里腌雪里蕻。开春时煮新毛豆，细剁雪菜，同炒——她说：‘这是寒寂之后，暖的第一支歌。’",
  "ingredients": [
    {
      "id": "edamame-01",
      "nameEn": "shelled edamame (fresh or frozen, thawed)",
      "nameZh": "毛豆仁（鲜剥或解冻）",
      "pinyin": "máo dòu rén",
      "amountMetric": "200 g",
      "amountUS": "1¼ cups",
      "category": "produce",
      "pantry": "local",
      "note": "Frozen edamame is acceptable — skip thawing and cook from frozen.",
      "noteZh": "可用冷冻毛豆仁，无需解冻，直接下锅。"
    },
    {
      "id": "snow-greens-02",
      "nameEn": "pickled mustard greens (‘xue cai’), rinsed and finely chopped",
      "nameZh": "雪里蕻（洗净切碎）",
      "pinyin": "xuě lǐ hóng",
      "amountMetric": "120 g",
      "amountUS": "¾ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: Korean kimchi base (without chili) or Chinese preserved cabbage (‘suan cai’) — reduce salt by half.",
      "noteZh": "替代：韩式无辣泡菜基底，或四川酸菜（减盐一半）"
    },
    {
      "id": "ginger-03",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜末",
      "pinyin": "shēng jiāng mò",
      "amountMetric": "10 g",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "light-soy-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "8 ml",
      "amountUS": "1½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sesame-oil-05",
      "nameEn": "toasted sesame oil",
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
      "text": "Blanch edamame in boiling salted water 3 minutes until bright green and just tender. Drain and rinse under cold water to stop cooking. Pat dry.",
      "textZh": "毛豆仁盐水沸煮3分钟至翠绿微韧，捞出浸冰水断生，沥干。",
      "zhHint": "断生保脆，沥干防溅油",
      "stateNote": {
        "visual": "Edamame plump, vibrant green, skins taut",
        "visualZh": "豆粒饱满翠绿，豆皮紧绷",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Bubbles break steadily at surface",
        "signalZh": "水面持续匀沸"
      }
    },
    {
      "text": "Heat wok over medium heat. Add 10 ml (2 tsp) neutral oil. Sauté ginger 30 seconds until fragrant — do not brown.",
      "textZh": "中火起锅，下10毫升油，姜末煸30秒至香，勿焦。",
      "zhHint": "姜香是引子，不可抢戏",
      "stateNote": {
        "visual": "Ginger softens slightly, releases golden oil droplets",
        "visualZh": "姜末微软，析出金黄油珠",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Aroma fills air — warm, citrusy, clean",
        "signalZh": "空气弥漫温润柑橘辛香"
      }
    },
    {
      "text": "Add snow greens. Stir-fry 2 minutes until moisture evaporates and aroma turns deep and savory.",
      "textZh": "下雪菜，中火煸炒2分钟至水汽尽、香气转醇厚。",
      "zhHint": "煸干是去咸提香关键",
      "stateNote": {
        "visual": "Greens darken slightly, cling to wok with oily sheen",
        "visualZh": "菜色微深，油润贴锅",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Sharp saltiness mellows into umami depth",
        "signalZh": "尖锐咸气转为醇厚鲜香"
      }
    },
    {
      "text": "Add edamame. Stir-fry 1 minute to warm through and combine.",
      "textZh": "倒入毛豆，翻炒1分钟至热透融合。",
      "zhHint": "快炒保豆粒分明",
      "stateNote": {
        "visual": "Edamame glistens, separate and intact",
        "visualZh": "毛豆粒粒分明，泛润泽光",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "No sputtering — indicates dryness is perfect",
        "signalZh": "无油星迸溅，说明干湿恰宜"
      }
    },
    {
      "text": "Turn off heat. Drizzle with light soy sauce and sesame oil. Toss once — just to coat. Serve immediately while steaming gently.",
      "textZh": "关火，淋入生抽与香油，轻翻一次即停。趁热上桌，微冒热气为佳。",
      "zhHint": "最后淋油，锁香保润",
      "stateNote": {
        "visual": "Each edamame bean glistens with thin, aromatic film",
        "visualZh": "每粒毛豆裹薄薄一层油润香膜",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "signal": "Steam rises in soft, fragrant wisps",
        "signalZh": "热气轻袅，香气绵长"
      }
    }
  ],
  "tips": [
    "Rinse snow greens thoroughly — residual brine can overpower the dish.",
    "Use only shelled edamame — pods absorb too much salt and ruin texture.",
    "For extra depth, toast sesame oil in a separate pan first, then cool slightly before drizzling.",
    "This tastes best at room temperature — let sit 5 minutes before serving."
  ],
  "tipsZh": [
    "雪菜务必多冲几遍，余盐会压过豆鲜。",
    "只用剥壳毛豆——豆荚吸盐且口感粗涩。",
    "香油可先单独小火焙香，晾至微温再淋，风味更醇。",
    "室温静置5分钟再吃，滋味最圆融。"
  ],
  "relatedSlugs": [
    "longjing-shrimp",
    "oil-braised-bamboo-shoots"
  ],
  "image": "/images/recipes/pickled-mustard-green-edamame.webp"
};
