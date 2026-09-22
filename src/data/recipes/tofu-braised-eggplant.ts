import type { Recipe } from "@/lib/types";

/** Braised Tofu and Eggplant (豆腐烧茄子) — Day 138 豆制品盛宴 */
export const tofu_braised_eggplant: Recipe = {
  "id": "tofu-braised-eggplant",
  "slug": "tofu-braised-eggplant",
  "titleEn": "Braised Tofu and Eggplant",
  "titleZh": "豆腐烧茄子",
  "pinyin": "dòu fu shāo qié zi",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Soft eggplant and firm tofu braised together in a savory sauce — comfort food at its best.",
  "versionNoteZh": "软茄子和老豆腐一起红烧—— comfort food 的极致。",
  "tags": [
    "30-min",
    "sichuan",
    "vegetarian",
    "comfort"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "This dish combines the creaminess of eggplant with the protein of tofu in a savory braising liquid. It's a home-style classic that's deeply satisfying.",
  "storyZh": "这道菜将茄子的奶油口感与豆腐的蛋白结合，在咸鲜红烧汁中。是令人满足的家常经典。",
  "image": "/images/recipes/tofu-braised-eggplant.webp",
  "relatedSlugs": [
    "yu-xiang-eggplant",
    "eggplant-tofu-claypot",
    "mapo-tofu"
  ],
  "ingredients": [
    {
      "id": "tb-tofu-01",
      "nameEn": "firm tofu, cubed",
      "nameZh": "老豆腐，切块",
      "pinyin": "lǎo dòu fu",
      "amountMetric": "300 g",
      "amountUS": "about 10 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "tb-egg-02",
      "nameEn": "eggplant, cubed",
      "nameZh": "茄子，切块",
      "pinyin": "qié zi",
      "amountMetric": "1 large",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "tb-garlic-03",
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
      "id": "tb-soy-04",
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
      "id": "tb-dark-05",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "tb-sugar-06",
      "nameEn": "sugar",
      "nameZh": "糖",
      "pinyin": "táng",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "sugar"
    },
    {
      "id": "tb-oil-07",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut eggplant into 3cm cubes. Sprinkle with salt and let sit for 10 minutes. Rinse and pat dry.",
      "textZh": "茄子切3厘米块，撒盐静置10分钟。冲洗吸干。",
      "zhHint": "去涩"
    },
    {
      "text": "Heat oil in a wok. Fry tofu until golden. Remove and set aside.",
      "textZh": "大火热锅冷油，炸豆腐至金黄。取出备用。",
      "zhHint": "先炸豆腐"
    },
    {
      "text": "In the same wok, sauté garlic for 15 seconds. Add eggplant and stir-fry for 2 minutes.",
      "textZh": "同锅炒蒜末15秒，下茄子翻炒2分钟。",
      "zhHint": "茄子先炒",
      "stateNote": {
        "visual": "Eggplant starts to soften",
        "visualZh": "茄子开始软",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Eggplant releases oil",
        "signalZh": "茄子出油"
      }
    },
    {
      "text": "Add tofu, soy sauces, sugar, and 100ml water. Bring to a boil, then simmer for 8 minutes.",
      "textZh": "下豆腐、酱油、糖和水100ml，烧沸后小火煮8分钟。",
      "zhHint": "入味",
      "stateNote": {
        "visual": "Sauce reduces and coats ingredients",
        "visualZh": "酱汁收浓包裹食材",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium-low",
        "signal": "Sauce is thick and glossy",
        "signalZh": "酱汁浓而有光泽"
      }
    },
    {
      "text": "Garnish with scallions. Serve with steamed rice.",
      "textZh": "撒葱花，配米饭上桌。",
      "zhHint": "米饭吸汁"
    }
  ],
  "tips": [
    "Salt eggplant to remove bitterness and prevent oil absorption.",
    "Don't rush the braising — low and slow builds flavor.",
    "This dish reheats well for leftovers."
  ],
  "tipsZh": [
    "茄子盐渍去涩并减少吸油。",
    "不要急——小火慢炖 build 风味。",
    "这道菜剩菜再加热也好吃。"
  ]
};
