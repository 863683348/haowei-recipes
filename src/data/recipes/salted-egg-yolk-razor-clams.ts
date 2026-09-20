import type { Recipe } from "@/lib/types";

/** Salted Egg Yolk Razor Clams (咸蛋黄炒蛏子) — Day 137 贝壳鲜味 */
export const salted_egg_yolk_razor_clams: Recipe = {
  "id": "salted-egg-yolk-razor-clams",
  "slug": "salted-egg-yolk-razor-clams",
  "titleEn": "Salted Egg Yolk Razor Clams",
  "titleZh": "咸蛋黄炒蛏子",
  "pinyin": "xián dàn huáng chǎo chéng zi",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Salted egg yolk creates a rich, creamy sauce that coats each razor clam perfectly.",
  "versionNoteZh": "咸蛋黄 create 浓郁奶油般酱汁，完美包裹每一只蛏子。",
  "tags": [
    "30-min",
    "seafood",
    "cantonese",
    "crowd-pleaser"
  ],
  "dietary": [],
  "story": "Salted egg yolk is a Cantonese chef's secret weapon. When whipped into a foam and tossed with razor clams, it creates an addictive umami bomb that disappears fast.",
  "storyZh": "咸蛋黄是粤式厨师的 secret weapon。打成泡沫后与蛏子爆炒，create 让人上瘾的鲜味炸弹。",
  "image": "/images/recipes/salted-egg-yolk-razor-clams.webp",
  "relatedSlugs": [
    "scallion-steamed-clams",
    "garlic-clam-with-chives",
    "ketchup-prawns"
  ],
  "ingredients": [
    {
      "id": "se-razor-01",
      "nameEn": "fresh razor clams",
      "nameZh": "鲜蛏子",
      "pinyin": "chéng zi",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Remove inedible parts and sand vein; soak in salted water",
      "noteZh": "去掉不可食部分和沙线；盐水浸泡"
    },
    {
      "id": "se-yolk-02",
      "nameEn": "salted duck egg yolks",
      "nameZh": "咸鸭蛋黄",
      "pinyin": "xián yā dàn huáng",
      "amountMetric": "4 yolks",
      "amountUS": "4 yolks",
      "category": "protein",
      "pantry": "asian",
      "termKey": "salted-egg-yolk",
      "note": "Hard-boil fresh salted eggs and separate yolks",
      "noteZh": "煮熟咸鸭蛋，取蛋黄"
    },
    {
      "id": "se-garlic-03",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "pinyin": "dà suàn",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "se-wine-04",
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
      "id": "se-oil-05",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "se-scallion-06",
      "nameEn": "scallions, chopped",
      "nameZh": "小葱，切碎",
      "pinyin": "xiǎo cōng",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Prepare razor clams: soak in salted water 30 minutes, then scrub and remove the dark intestine and sand vein. Cut into 2-inch pieces.",
      "textZh": "准备蛏子：盐水浸泡30分钟，刷洗，去掉黑肠和沙线。切2英寸段。",
      "zhHint": "处理要干净"
    },
    {
      "text": "Hard-boil salted duck eggs for 10 minutes. Peel, separate yolks from whites, and mash yolks through a sieve until fine and powdery.",
      "textZh": "咸鸭蛋煮10分钟。剥壳，分离蛋黄蛋白，蛋黄过筛成细粉。",
      "zhHint": "过筛是关键"
    },
    {
      "text": "Heat oil in a wok over medium heat. Add minced garlic and stir-fry for 15 seconds until fragrant.",
      "textZh": "中火热锅冷油，下蒜末爆香15秒。",
      "zhHint": "蒜末别炸焦",
      "stateNote": {
        "visual": "Garlic turns light gold",
        "visualZh": "蒜末呈浅金色",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "heat": "medium",
        "signal": "Garlic aroma is pungent but not bitter",
        "signalZh": "蒜香浓烈但不苦"
      }
    },
    {
      "text": "Add mashed salted egg yolk and stir continuously over low heat for 1-2 minutes until it becomes frothy and aromatic.",
      "textZh": "下咸蛋黄碎，小火持续搅拌1-2分钟至起泡芳香。",
      "zhHint": "小火慢搅",
      "stateNote": {
        "visual": "Yolk turns pale yellow and frothy",
        "visualZh": "蛋黄变浅黄色，起泡",
        "timeRef": "1-2 minutes",
        "timeRefZh": "1-2 分钟",
        "heat": "low",
        "signal": "Yolk foams and releases oil",
        "signalZh": "蛋黄起泡出油"
      }
    },
    {
      "text": "Increase heat to high. Add razor clams and Shaoxing wine. Toss for 1-2 minutes until clams are coated and cooked through.",
      "textZh": "转大火，下蛏子和绍兴酒，翻炒1-2分钟至蚬肉裹满蛋黄酱。",
      "zhHint": "大火快炒",
      "stateNote": {
        "visual": "Each clam is coated in golden foam",
        "visualZh": "每只蛏子裹满金黄泡沫",
        "timeRef": "1-2 minutes",
        "timeRefZh": "1-2 分钟",
        "heat": "high",
        "signal": "Clams are opaque and firm",
        "signalZh": "蚬肉变白不透明"
      }
    },
    {
      "text": "Garnish with chopped scallions. Serve immediately while the egg yolk foam is still light and airy.",
      "textZh": "撒葱花，立刻上桌。蛋黄泡沫要趁热吃才蓬松。",
      "zhHint": "趁热"
    }
  ],
  "tips": [
    "The key is low heat when frothing the yolk—high heat will burn it.",
    "Don't overcook the razor clams or they'll be tough.",
    "Serve with steamed rice—the salty-savory sauce is perfect with grains."
  ],
  "tipsZh": [
    "咸蛋黄起泡用小火——大火会焦。",
    "蛏子不要炒过头，否则变韧。",
    "配米饭——咸鲜酱汁绝佳。"
  ]
};
