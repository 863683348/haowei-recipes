import type { Recipe } from "@/lib/types";

/** Lamb Pilaf (羊肉抓饭) (羊肉抓饭) — Day batch */
export const lamb_pilaf: Recipe = {
  "id": "yang-rou-zhua-fan",
  "slug": "lamb-pilaf",
  "titleEn": "Lamb Pilaf (羊肉抓饭)",
  "titleZh": "羊肉抓饭",
  "pinyin": "yáng ròu zhuā fàn",
  "cuisine": "新疆菜",
  "cuisineEn": "Xinjiang",
  "region": "Xinjiang",
  "regionZh": "新疆",
  "difficulty": "medium",
  "timeMin": 60,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version browns lamb with cumin and carrot, then steams rice in the same pot so every grain drinks the lamb fat — the Uyghur polo made at home.",
  "versionNoteZh": "家常版以孜然胡萝卜炒羊，再同锅焖饭，米粒尽吸羊油——在家复刻维吾尔抓饭（polo）。",
  "tags": [
    "rice",
    "one-pot",
    "lamb",
    "weekend"
  ],
  "dietary": [
    "halal"
  ],
  "story": "In Urumqi a whole cauldron of polo fed a wedding of two hundred. This home pot is smaller, but the cumin-and-carrot perfume is exactly the same.",
  "storyZh": "乌鲁木齐一锅抓饭喂了两百人的婚宴。这家用小锅虽小，孜然胡萝卜的香一模一样。",
  "ingredients": [
    {
      "id": "lp-01",
      "nameEn": "lamb shoulder, cubed",
      "nameZh": "羊肩肉（切丁）",
      "pinyin": "yáng jiān ròu",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Small cubes render fat that flavors the rice.",
      "noteZh": "小丁出油，香渗米饭。"
    },
    {
      "id": "lp-02",
      "nameEn": "jasmine or long-grain rice, rinsed",
      "nameZh": "茉莉/长粒米（淘净）",
      "pinyin": "mǐ",
      "amountMetric": "300 g",
      "amountUS": "1.5 cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "lp-03",
      "nameEn": "carrot, julienned",
      "nameZh": "胡萝卜（切丝）",
      "pinyin": "hú luó bo",
      "amountMetric": "200 g",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "lp-04",
      "nameEn": "ground cumin",
      "nameZh": "孜然粉",
      "pinyin": "zī rán fěn",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "cumin"
    },
    {
      "id": "lp-05",
      "nameEn": "neutral oil",
      "nameZh": "植物油",
      "pinyin": "zhí wù yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "lp-06",
      "nameEn": "salt",
      "nameZh": "盐",
      "pinyin": "yán",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Heat oil over medium-high; add lamb and sear until browned and fat renders, about 5 minutes.",
      "textZh": "中高油温下羊肉煸炒至褐、出油，约5分钟。",
      "zhHint": "煸羊出油",
      "stateNote": {
        "visual": "Lamb edges brown; clear fat pools in the pan.",
        "visualZh": "羊肉边褐；锅内析出清油。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high",
        "signal": "Sizzle steady; meat releases easily.",
        "signalZh": "滋啦持续；肉易离锅。"
      }
    },
    {
      "text": "Add carrot and cumin; stir-fry 3 minutes until carrot softens and smells sweet.",
      "textZh": "下胡萝卜与孜然翻炒3分钟至软、出甜香。",
      "zhHint": "炒香胡萝卜",
      "stateNote": {
        "visual": "Carrot brightens to deep orange and wilts.",
        "visualZh": "胡萝卜转深橙、变软。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Sweet, toasty cumin aroma fills the pan.",
        "signalZh": "孜然甜香满锅。"
      }
    },
    {
      "text": "Add rinsed rice and salt; stir 1 minute to coat grains in lamb fat.",
      "textZh": "下淘净米与盐，翻拌1分钟让米裹羊油。",
      "zhHint": "米裹羊油",
      "stateNote": {
        "visual": "Each grain glistens with a thin oil film.",
        "visualZh": "每粒米裹薄油膜发亮。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Rice smells nutty, not raw.",
        "signalZh": "米香转坚果感，无生味。"
      }
    },
    {
      "text": "Pour in water (1.2× rice volume), bring to a boil, then cover and simmer on low 18 minutes.",
      "textZh": "注入水（米量1.2倍），煮沸后加盖小火焖18分钟。",
      "zhHint": "注水焖饭",
      "stateNote": {
        "visual": "Surface dimples as steam escapes; water absorbed.",
        "visualZh": "表面起孔冒汽，水渐收。",
        "timeRef": "18 minutes",
        "timeRefZh": "18 分钟",
        "heat": "low",
        "signal": "No water visible at edges; gentle hiss.",
        "signalZh": "边缘无水、轻嘶。"
      }
    },
    {
      "text": "Turn off heat, fluff with a fork after 5 minutes rest, and serve.",
      "textZh": "关火静置5分钟，用叉拨松即可。",
      "zhHint": "拨松装盘",
      "stateNote": {
        "visual": "Grains separate and fluffy, tinted golden from fat.",
        "visualZh": "米粒分明蓬松，染羊油金黄。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Aroma of cumin rice and lamb.",
        "signalZh": "孜然米饭与羊肉香。"
      }
    }
  ],
  "tips": [
    "Render the lamb fat first — it is what makes the rice taste like pilaf.",
    "Don't stir after adding water, or the rice gets gummy.",
    "Rest before fluffing so grains firm up."
  ],
  "tipsZh": [
    "先煸出羊油，饭才有抓饭味。",
    "加水后勿搅，否则米饭发黏。",
    "焖后静置再拨，米粒才挺。"
  ],
  "relatedSlugs": [
    "roast-lamb-chops",
    "cumin-lamb",
    "hand-torn-lamb",
    "tea-braised-beef"
  ],
  "image": "/images/recipes/og-default.webp"
};
