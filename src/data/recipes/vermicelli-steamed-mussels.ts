import type { Recipe } from "@/lib/types";

/** Vermicelli Steamed Mussels (粉丝蒸青口) — Day 137 贝壳鲜味 */
export const vermicelli_steamed_mussels: Recipe = {
  "id": "vermicelli-steamed-mussels",
  "slug": "vermicelli-steamed-mussels",
  "titleEn": "Vermicelli Steamed Mussels",
  "titleZh": "粉丝蒸青口",
  "pinyin": "fěn sī zhēng qīng kǒu",
  "cuisine": "融合菜",
  "cuisineEn": "Fusion",
  "region": "Southern China",
  "regionZh": "中国南方",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Mussels with garlic vermicelli—a Cantonese technique applied to European shellfish.",
  "versionNoteZh": "蒜蓉粉丝蒸青口——粤式技法应用于欧洲贝壳。",
  "tags": [
    "30-min",
    "seafood",
    "fusion",
    "easy"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "This dish applies the classic Cantonese garlic vermicelli technique to mussels, which are more affordable and widely available than scallops. The vermicelli absorbs the mussel's briny cooking liquid.",
  "storyZh": "这道菜将经典的粤式蒜蓉粉丝技法应用于青口——更经济实惠，比扇贝更易得。粉丝吸收青口的咸鲜 cooking 液。",
  "image": "/images/recipes/vermicelli-steamed-mussels.webp",
  "relatedSlugs": [
    "garlic-vermicelli-steamed-scallops",
    "scallion-steamed-clams",
    "seafood-tofu-claypot"
  ],
  "ingredients": [
    {
      "id": "vm-mussels-01",
      "nameEn": "fresh mussels (blue mussels)",
      "nameZh": "鲜青口（蓝青口）",
      "pinyin": "qīng kǒu",
      "amountMetric": "600 g",
      "amountUS": "about 1.3 lbs",
      "category": "protein",
      "pantry": "local",
      "note": "Discard any open or damaged shells",
      "noteZh": "丢弃张开或破损的壳"
    },
    {
      "id": "vm-vermicelli-02",
      "nameEn": "mung bean vermicelli",
      "nameZh": "绿豆粉丝",
      "pinyin": "lǜ dòu fěn sī",
      "amountMetric": "50 g",
      "amountUS": "1.7 oz",
      "category": "staple",
      "pantry": "asian",
      "termKey": "vermicelli"
    },
    {
      "id": "vm-garlic-03",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "pinyin": "dà suàn",
      "amountMetric": "6 cloves",
      "amountUS": "6 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "vm-soy-04",
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
      "id": "vm-oil-05",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "vm-scallion-06",
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
      "text": "Soak vermicelli in warm water for 15 minutes. Drain and cut into 10cm lengths.",
      "textZh": "粉丝温水泡软15分钟。捞出剪10厘米段。",
      "zhHint": "别泡太久"
    },
    {
      "text": "Clean mussels: pull off the beard and scrub shells under running water. Discard any open or damaged ones.",
      "textZh": "清洗青口：拔掉胡须，流水下刷洗外壳。丢弃张开或破损的。",
      "zhHint": "清洗要彻底"
    },
    {
      "text": "Heat oil in a small wok. Fry half the garlic over medium heat until golden (2 minutes). Remove from heat and mix with remaining raw garlic.",
      "textZh": "小锅中火加热油，炸一半蒜末至金黄（2分钟）。离火，混合剩余生蒜。",
      "zhHint": "双味蒜是秘诀",
      "stateNote": {
        "visual": "Fried garlic is pale gold, raw garlic is pale",
        "visualZh": "炸蒜浅金，生蒜 pale",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Garlic sizzles and turns light gold",
        "signalZh": "蒜末滋滋作响变浅金"
      }
    },
    {
      "text": "Arrange mussels in a steamer. Place a bed of vermicelli on top. Spoon garlic sauce over everything.",
      "textZh": "青口码入蒸笼，粉丝铺在上面，蒜蓉酱淋上去。",
      "zhHint": "层层叠加"
    },
    {
      "text": "Steam over high heat for 5-6 minutes until mussels open wide.",
      "textZh": "大火蒸5-6分钟至青口充分张开。",
      "zhHint": "火候要旺",
      "stateNote": {
        "visual": "Mussel shells pop open, steam escapes",
        "visualZh": "青口壳张开，蒸汽逸出",
        "timeRef": "5-6 minutes",
        "timeRefZh": "5-6 分钟",
        "heat": "high",
        "signal": "At least 90% shells open",
        "signalZh": "90%以上贝壳张开"
      }
    },
    {
      "text": "Discard any unopened mussels. Sprinkle with chopped scallions and soy sauce. Serve immediately.",
      "textZh": "丢弃未张开的青口。撒葱花和生抽。立刻上桌。",
      "zhHint": "趁热吃"
    }
  ],
  "tips": [
    "The cooking liquid in the mussels is pure umami—serve with bread to soak it up.",
    "Don't steam too long or the mussels will be tough.",
    "Double-flavored garlic is essential."
  ],
  "tipsZh": [
    "Cooking 汁是纯鲜味——配面包吸食。",
    "不要蒸太久，否则变韧。",
    "双味蒜是关键。"
  ]
};
