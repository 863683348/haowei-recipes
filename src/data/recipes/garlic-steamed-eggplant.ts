import type { Recipe } from "@/lib/types";

/** Steamed Eggplant with Garlic Sauce (蒜蓉蒸茄子) (蒜蓉蒸茄子) — Day batch */
export const garlic_steamed_eggplant: Recipe = {
  "id": "garlic-steamed-eggplant",
  "slug": "garlic-steamed-eggplant",
  "titleEn": "Steamed Eggplant with Garlic Sauce (蒜蓉蒸茄子)",
  "titleZh": "蒜蓉蒸茄子",
  "pinyin": "suan rong zheng qie zi",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong (广东)",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version steams the eggplant on the stove in a covered steamer for 10 minutes. Restaurant versions steam whole eggplants in tiered bamboo baskets and dress them with a pre-made garlic sauce kept warm at the station.",
  "versionNoteZh": "家庭版在灶上蒸锅加盖蒸 10 分钟。餐厅版用多层竹笼整条蒸，蒜蓉汁是提前调好、在档口保温的。",
  "tags": [
    "eggplant",
    "vegetarian",
    "vegan",
    "steamed",
    "low-oil"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Steaming is the Cantonese answer to the eggplant's problem: it wants to drink oil like a sponge the moment it hits a hot pan. Steamed, it collapses into something silky and nearly fat-free, and the garlic sauce poured on at the end does all the seasoning. It is the version my Cantonese neighbour made when her doctor told her to cut back on oil.",
  "storyZh": "蒸，是粤菜对茄子「一下锅就吸油」这个毛病的回答。蒸过的茄子塌软如绸、几乎无油，味道全靠最后浇的蒜蓉汁。这是我广东邻居被医生叮嘱少油之后的做法。",
  "ingredients": [
    {
      "id": "gse-1",
      "nameEn": "Chinese eggplant, cut into 6 cm batons",
      "nameZh": "长茄子（切 6 厘米条）",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "gse-2",
      "nameEn": "garlic cloves, finely minced",
      "nameZh": "大蒜（剁蓉）",
      "amountMetric": "6 cloves",
      "amountUS": "6 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "gse-3",
      "nameEn": "scallion, finely sliced",
      "nameZh": "小葱（切细）",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "gse-4",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 1/2 tbsp",
      "amountUS": "1 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gse-5",
      "nameEn": "oyster sauce (or vegetarian mushroom sauce)",
      "nameZh": "蚝油（或素蚝油）",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "gse-6",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gse-7",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gse-8",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "gse-9",
      "nameEn": "chili oil, for finishing (optional)",
      "nameZh": "辣椒油（可选）",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-oil"
    }
  ],
  "steps": [
    {
      "text": "Cut the eggplant into 6 cm batons about 2 cm thick. Do not peel — the skin holds the batons together and gives the finished dish its purple edge.",
      "textZh": "茄子切 6 厘米长、约 2 厘米粗的条，不用去皮——皮能撑住形状，成品也好看。",
      "stateNote": {
        "visual": "uniform batons with purple skin",
        "signal": "prep complete",
        "timeRef": "3 min"
      }
    },
    {
      "text": "Soak the batons in salted cold water for 5 minutes, then drain and pat dry. This keeps the flesh from oxidising grey.",
      "textZh": "茄条放入淡盐水泡 5 分钟，捞出擦干。这样可防止肉质氧化发灰。",
      "stateNote": {
        "visual": "flesh stays pale cream",
        "signal": "drained and dried",
        "timeRef": "5 min"
      }
    },
    {
      "text": "Arrange the batons in a heatproof dish with gaps between them so steam can circulate. Steam over high heat for 10 minutes.",
      "textZh": "茄条摆入耐热盘，彼此留缝隙让蒸汽流通。大火蒸 10 分钟。",
      "stateNote": {
        "visual": "flesh translucent and slumped",
        "signal": "chopstick slides through with no resistance",
        "timeRef": "10 min",
        "heat": "high"
      }
    },
    {
      "text": "While it steams, heat oil in a small pan over medium-low heat and add half the minced garlic. Fry gently for 1 minute until fragrant but still pale — do not let it brown.",
      "textZh": "蒸的同时，小锅中小火下油，放入一半蒜蓉，慢炸 1 分钟至出香但仍呈浅色——别炸黄。",
      "stateNote": {
        "visual": "garlic pale and soft, oil shimmering",
        "signal": "gentle bubbling, no browning",
        "timeRef": "1 min",
        "heat": "medium-low"
      }
    },
    {
      "text": "Add the remaining raw garlic off the heat, along with light soy sauce, oyster sauce, sugar and sesame oil. Stir — the raw garlic gives sharpness, the cooked garlic gives depth.",
      "textZh": "离火后加入剩余生蒜蓉，以及生抽、蚝油、白糖、香油，拌匀——生蒜冲、熟蒜厚，两者缺一不可。",
      "stateNote": {
        "visual": "sauce glossy and aromatic",
        "signal": "both raw and cooked garlic aroma",
        "timeRef": "30 sec"
      }
    },
    {
      "text": "Pour any liquid from the steamed eggplant dish, spoon the garlic sauce over the top, scatter scallion and finish with chili oil if using. Serve warm with rice.",
      "textZh": "蒸好的茄子倒掉盘中汁水，浇上蒜蓉汁，撒葱花，可选淋辣椒油。趁热配米饭食用。",
      "stateNote": {
        "visual": "glossy sauce pooling around slumped batons",
        "signal": "ready to serve"
      }
    }
  ],
  "tips": [
    "Steam, do not boil — boiled eggplant turns watery and bland.",
    "Using both raw and cooked garlic is what makes restaurant versions taste layered.",
    "Pour off the steaming liquid before saucing, or the flavour gets diluted.",
    "Chinese long eggplant is sweeter and less seedy than the globe variety."
  ],
  "tipsZh": [
    "要蒸不要煮——水煮茄子会寡淡出水。",
    "生熟蒜各一半，是餐厅版本有层次的关键。",
    "浇汁前先把蒸出的水倒掉，否则味道被冲淡。",
    "长茄子比圆茄子更甜、籽更少。"
  ],
  "relatedSlugs": [
    "hong-shao-eggplant",
    "yu-xiang-eggplant",
    "grilled-eggplant-with-garlic-sauce",
    "garlic-roasted-eggplant"
  ],
  "image": "/images/recipes/garlic-roasted-eggplant.webp"
};
