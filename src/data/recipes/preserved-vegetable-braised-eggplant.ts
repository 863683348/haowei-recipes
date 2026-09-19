import type { Recipe } from "@/lib/types";

/** Preserved Vegetable Braised Eggplant (梅干菜烧茄子) (梅干菜烧茄子) — Day batch */
export const preserved_vegetable_braised_eggplant: Recipe = {
  "id": "preserved-vegetable-braised-eggplant",
  "slug": "preserved-vegetable-braised-eggplant",
  "titleEn": "Preserved Vegetable Braised Eggplant (梅干菜烧茄子)",
  "titleZh": "梅干菜烧茄子",
  "pinyin": "méi gàn cài shāo qié zi",
  "cuisine": "浙菜",
  "cuisineEn": "Zhejiang",
  "region": "Shaoxing, Zhejiang",
  "regionZh": "浙江绍兴",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses a mix of eggplant and preserved vegetable — less oil than restaurant style. Preserved vegetable (meigancai) is the star: intensely savory, almost meaty.",
  "versionNoteZh": "家常版茄子与梅干菜各半，用油比餐厅少。梅干菜是灵魂：浓缩的鲜咸，近乎肉感。",
  "tags": [
    "comfort",
    "braised",
    "zhejiang",
    "weeknight"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Meigancai (preserved vegetable) is made by wilting mustard greens in the sun for days, then drying them. The result is an umami concentrate that transforms humble eggplant into something unforgettable. This Zhejiang home-style braise is comfort food at its most unpretentious.",
  "storyZh": "梅干菜是将雪里蕻日晒数日脱水而成，是鲜味的浓缩体，能让 humble 的茄子变得难忘。这是浙江家常焖烧，最朴实也最抚慰人心。",
  "ingredients": [
    {
      "id": "pv-egg",
      "nameEn": "Chinese eggplant",
      "nameZh": "长条茄子",
      "amountMetric": "400 g",
      "amountUS": "2 large",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "pv-mei",
      "nameEn": "preserved mustard greens (meigancai)",
      "nameZh": "梅干菜",
      "amountMetric": "40 g dried",
      "amountUS": "1.4 oz dried",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "pv-pork",
      "nameEn": "pork belly, sliced thin",
      "nameZh": "五花肉薄片",
      "amountMetric": "80 g",
      "amountUS": "3 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "pv-garlic",
      "nameEn": "garlic cloves, smashed",
      "nameZh": "蒜瓣拍扁",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "pv-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "pv-dark",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "pv-sugar",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    },
    {
      "id": "pv-oil",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Soak meigancai in warm water for 20 min until softened. Squeeze dry, then chop into 2 cm pieces. Cut eggplant into 3 cm chunks and toss with 1 tsp salt — set 10 min, then squeeze out excess moisture.",
      "textZh": "梅干菜温水泡20分钟变软，挤干切2cm段。茄子切3cm块，撒1茶匙盐腌制10分钟，挤干水分。",
      "stateNote": {
        "visual": "eggplant chunks release clear liquid when squeezed",
        "visualZh": "挤出的水清澈——说明涩味已去掉",
        "signal": "if liquid is cloudy or bitter-tasting, squeeze longer",
        "signalZh": "水浑浊或发苦——继续挤"
      }
    },
    {
      "text": "Heat oil in a wok over medium heat. Add pork belly slices and fry until edges curl and render fat — about 3 min.",
      "textZh": "锅热油，下五花肉片，中火煎至边缘卷曲出油——约3分钟。",
      "stateNote": {
        "visual": "pork renders golden fat, edges curl and crisp",
        "visualZh": "猪肉煸出金黄油脂，边缘微脆",
        "signal": "sizzling sound softens as water evaporates — fat is now rendering",
        "signalZh": "滋啦声变小，水蒸发，开始出油"
      }
    },
    {
      "text": "Add garlic and meigancai. Stir-fry 1 min until fragrant. Add eggplant, soy sauces, and rock sugar. Toss to coat.",
      "textZh": "下蒜瓣和梅干菜，炒香1分钟。加茄子、生抽、老抽、冰糖，翻匀。"
    },
    {
      "text": "Add ½ cup hot water. Bring to a boil, then reduce to medium-low. Cover and braise 10 min.",
      "textZh": "加半碗热水，大火烧开转中小火，盖盖焖10分钟。",
      "stateNote": {
        "visual": "eggplant turns translucent dark purple and collapses",
        "visualZh": "茄子呈半透明深紫色，塌软",
        "signal": "eggplant yields to gentle press with spatula",
        "signalZh": "锅铲轻压茄子即塌——入味完成"
      }
    },
    {
      "text": "Uncover and increase heat to high. Reduce sauce until it coats the eggplant in a glossy, concentrated glaze. Transfer to a serving dish. The meigancai should be dark, fragrant, and clinging to every piece.",
      "textZh": "开盖大火收汁，酱汁浓稠发亮包裹茄子。出锅。梅干菜应深褐油亮，附着每块茄子。",
      "stateNote": {
        "visual": "sauce reduces to a thin, shiny lacquer around the pieces",
        "visualZh": "酱汁收至薄亮包浆",
        "signal": "sauce leaves a thin film on the wok bottom — too dry; add 2 tbsp water if this happens",
        "signalZh": "锅底留薄层酱汁膜——恰到好处；若太干加2汤匙水"
      }
    }
  ],
  "tips": [
    "Preserved vegetable is very salty — taste before adding extra soy sauce.",
    "Squeezing the eggplant after salting is critical: it removes bitterness AND prevents the dish from being watery.",
    "This tastes even better the next day — the flavors deepen as the meigancai continues to infuse."
  ],
  "tipsZh": [
    "梅干菜很咸——尝过再加酱油。",
    "盐腌后挤水是关键：去涩同时防止出水。",
    "隔夜更美味——梅干菜的鲜味会继续渗入。"
  ],
  "relatedSlugs": [
    "yu-xiang-eggplant",
    "hongshao-pork",
    "yibin-ran-mian"
  ],
  "image": "/images/recipes/preserved-vegetable-braised-eggplant.webp"
};
