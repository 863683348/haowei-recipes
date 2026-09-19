import type { Recipe } from "@/lib/types";

/** Eggplant Stir-fried with Green Beans (茄子炒豆角) (茄子炒豆角) — Day batch */
export const eggplant_stir_fried_green_beans: Recipe = {
  "id": "eggplant-stir-fried-green-beans",
  "slug": "eggplant-stir-fried-green-beans",
  "titleEn": "Eggplant Stir-fried with Green Beans (茄子炒豆角)",
  "titleZh": "茄子炒豆角",
  "pinyin": "qié zi chǎo dòu jiǎo",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version stir-fries both vegetables together. Restaurant versions might par-boil the beans first to ensure they're fully cooked.",
  "versionNoteZh": "家常版两样同炒。餐厅版可能先把豆角焯水确保熟透。",
  "tags": [
    "30-min",
    "quick",
    "vegetable",
    "weeknight"
  ],
  "dietary": [
    "vegan"
  ],
  "story": "A humble northern Chinese combo: eggplant's silkiness meets green bean's snap. Both love oil and high heat. The trick is cutting the eggplant to release its starch (which thickens the sauce) while keeping the beans crisp-tender.",
  "storyZh": "北方家常搭配：茄子的软滑遇上豆角的爽脆。两者都爱油和大火。诀窍是切茄子释放淀粉增稠，同时让豆角保持脆嫩。",
  "ingredients": [
    {
      "id": "esgb-01",
      "nameEn": "Chinese eggplant",
      "nameZh": "长条茄子",
      "amountMetric": "300 g",
      "amountUS": "1.5 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "esgb-02",
      "nameEn": "green beans, cut 4cm pieces",
      "nameZh": "豆角切段",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "esgb-03",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "esgb-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "esgb-05",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "esgb-06",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "esgb-07",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut eggplant into 4 cm chunks. Toss with ½ tsp salt and set 10 min. Squeeze dry.",
      "textZh": "茄子切4cm块，撒半茶匙盐腌10分钟，挤干。",
      "stateNote": {
        "visual": "eggplant releases moisture and edges soften",
        "visualZh": "茄子出水边缘变软",
        "signal": "chunks feel firm, not slimy — if slimy, rinse and squeeze again",
        "signalZh": "块手感紧实不滑——发滑就冲一下再挤"
      }
    },
    {
      "text": "Snap green beans to 4 cm lengths, discarding the tough ends.",
      "textZh": "豆角掐成4cm段，去硬蒂。"
    },
    {
      "text": "Heat oil in a wok over high heat. Add eggplant and spread in a single layer. Let it sear 1 min without stirring — this develops flavor.",
      "textZh": "锅热油，大火，下茄子摊平。先不翻，煎1分钟——这是美拉德反应的关键。",
      "stateNote": {
        "visual": "bottom of eggplant turns golden brown",
        "visualZh": "茄子底部金黄",
        "signal": "eggplant releases from the wok surface — if it sticks, it needs another 30 sec",
        "signalZh": "茄子自然脱离锅底——粘说明还差30秒"
      }
    },
    {
      "text": "Add garlic and green beans. Stir-fry 2 min. Add soy sauces and salt. Toss continuously for 3 min until beans are cooked through but still have a bite.",
      "textZh": "下蒜片和豆角，翻炒2分钟。加生抽老抽和盐，持续翻炒3分钟——豆角熟但脆。",
      "stateNote": {
        "visual": "green beans turn bright olive-green and develop slight char",
        "visualZh": "豆角变亮橄榄绿，边缘微焦",
        "signal": "beans should still snap when bitten — raw beans contain toxins; undercooked is unsafe",
        "signalZh": "豆角咬下去应有脆响——生豆角有毒，半生不安全"
      }
    },
    {
      "text": "Taste and adjust salt. Serve immediately while hot.",
      "textZh": "尝味调盐。趁热上桌。"
    }
  ],
  "tips": [
    "Never serve undercooked green beans — they contain lectins that cause food poisoning. Cook until bright green and tender-crisp.",
    "Eggplant's starch naturally thickens the sauce — no cornstarch slurry needed here.",
    "High heat is essential. Low heat makes the dish watery and bland."
  ],
  "tipsZh": [
    "豆角绝对不能半生——含植物凝集素会食物中毒。炒到亮绿脆嫩。",
    "茄子的淀粉自然浓稠——不用勾芡。",
    "大火是灵魂。小火会让菜出水没味。"
  ],
  "relatedSlugs": [
    "spicy-potato-shreds",
    "garlic-romaine",
    "dry-fried-green-beans"
  ],
  "image": "/images/recipes/eggplant-stir-fried-green-beans.webp"
};
