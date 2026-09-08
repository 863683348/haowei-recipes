import type { Recipe } from "@/lib/types";

/** Pumpkin Braised Pork | Chinese Nan Gua Shao Rou (南瓜烧肉) — Day batch */
export const pumpkin_braised_pork: Recipe = {
  "slug": "pumpkin-braised-pork",
  "id": "pumpkin-braised-pork",
  "titleEn": "Pumpkin Braised Pork | Chinese Nan Gua Shao Rou",
  "titleZh": "南瓜烧肉",
  "pinyin": "nán guā shāo ròu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "National",
  "regionZh": "全国",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Sweet pumpkin balances savory pork — autumn comfort food.",
  "versionNoteZh": "南瓜清甜平衡猪肉咸鲜，秋日家常美味。",
  "tags": [
    "autumn",
    "braised",
    "comfort-food"
  ],
  "dietary": [
    "none"
  ],
  "story": "Pumpkin and pork belly is a classic autumn combination in Chinese homes. The pumpkin absorbs the pork fat, becoming sweet and creamy, while the pork gets tender and rich. This one-pot dish is the essence of fall cooking.",
  "storyZh": "南瓜烧肉是经典的秋季家常菜。南瓜吸收猪肉油脂，变得香甜绵软；猪肉则入味软烂。这道一锅出体现了秋季烹饪的精髓。",
  "ingredients": [
    {
      "id": "pp-01",
      "nameEn": "pork belly",
      "nameZh": "五花肉",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "pp-02",
      "nameEn": "pumpkin",
      "nameZh": "南瓜",
      "amountMetric": "300 g",
      "amountUS": "3 cups, cut into wedges",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "pp-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "pp-04",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "pp-05",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "20 g",
      "amountUS": "1½ tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "pp-06",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "pp-07",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut pork belly into 3-cm cubes. Blanch in boiling water for 3 minutes. Drain and pat dry.",
      "textZh": "五花肉切3厘米方块，沸水焯3分钟，捞出沥干。",
      "zhHint": "五花肉焯水去腥",
      "stateNote": {
        "visual": "Pork surface firm and pale.",
        "visualZh": "肉块表面紧实发白。",
        "timeRef": "3 minutes",
        "signal": "Scum rises to surface; water turns cloudy."
      }
    },
    {
      "text": "Cut pumpkin into 3-cm wedges, remove seeds and stringy parts.",
      "textZh": "南瓜切3厘米楔形块，去籽去瓤。",
      "zhHint": "南瓜去籽",
      "stateNote": {
        "visual": "Pumpkin flesh is firm orange, no soft spots.",
        "visualZh": "南瓜肉紧实橙色，无软烂。",
        "signal": "Firm to touch, skin intact."
      }
    },
    {
      "text": "Heat oil in wok. Add rock sugar, melt to amber. Add pork, toss to coat.",
      "textZh": "热锅下油，冰糖炒至琥珀色，下五花肉翻炒上色。",
      "zhHint": "炒糖色",
      "stateNote": {
        "visual": "Pork coated in amber glaze.",
        "visualZh": "肉块裹上琥珀色。",
        "timeRef": "2 minutes",
        "heat": "medium",
        "signal": "Caramel aroma; sugar bubbles turn amber."
      }
    },
    {
      "text": "Add soy sauces, ginger. Pour hot water to cover. Bring to boil, then reduce to low. Cover and braise 30 minutes.",
      "textZh": "加生抽、老抽、姜片，加热水没过肉，大火烧开转小火，盖盖焖30分钟。",
      "zhHint": "小火焖煮",
      "stateNote": {
        "visual": "Pork tender, sauce reduced.",
        "visualZh": "肉软，酱汁收浓。",
        "timeRef": "30 minutes",
        "heat": "low",
        "signal": "Fork slides into pork easily; sauce coats spoon."
      }
    },
    {
      "text": "Add pumpkin. Cook 10 minutes until pumpkin is tender but holds shape. Adjust seasoning. Serve.",
      "textZh": "下南瓜，煮10分钟至南瓜软但保持形状。调口味，出锅。",
      "zhHint": "南瓜后下防烂",
      "stateNote": {
        "visual": "Pumpkin soft but intact; sauce glossy.",
        "visualZh": "南瓜软而不散；酱汁光亮。",
        "timeRef": "10 minutes",
        "signal": "Pumpkin fork-tender; no raw taste."
      }
    }
  ],
  "tips": [
    "Add pumpkin last — it cooks faster than pork.",
    "Choose mature pumpkin for better flavor.",
    "Don't over-stir pumpkin to prevent mushiness."
  ],
  "tipsZh": [
    "南瓜后下——比肉熟得快。",
    "选老南瓜风味更佳。",
    "少翻动南瓜防碎。"
  ],
  "relatedSlugs": [
    "hongshao-pork",
    "honey-rib-roast",
    "home-style-pork"
  ],
  "image": "/images/recipes/pumpkin-braised-pork.webp"
};
