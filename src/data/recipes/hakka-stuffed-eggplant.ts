import type { Recipe } from "@/lib/types";

/** Hakka Stuffed Eggplant (客家酿茄子) (客家酿茄子) — Day batch */
export const hakka_stuffed_eggplant: Recipe = {
  "id": "hakka-stuffed-eggplant",
  "slug": "hakka-stuffed-eggplant",
  "titleEn": "Hakka Stuffed Eggplant (客家酿茄子)",
  "titleZh": "客家酿茄子",
  "pinyin": "kè jiā niàng qié zi",
  "cuisine": "客家菜",
  "cuisineEn": "Hakka",
  "region": "Meizhou, Guangdong",
  "regionZh": "广东梅州",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version: pan-seared then simmered with less oil. Restaurant version deep-fries the stuffed halves first.",
  "versionNoteZh": "家常版：先煎后焖，用油少。餐厅版会先过油把酿口封住。",
  "tags": [
    "comfort",
    "hakka",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "Hakka 'niang' (酿) means 'to stuff' — a technique born from Hakka settlers who missed their northern dumplings but adopted local vegetables. Slice the eggplant, scoop a well, stuff with seasoned pork, then pan-fry and braise in soy-based broth. The result is silky eggplant that melts around a savory, springy filling.",
  "storyZh": "客家'酿'意为'填入'——客家人怀念北方的饺子，便用当地茄子代替面皮，填入肉馅。煎出金黄后焖煮，茄子绵软吸汁，肉馅弹牙。",
  "ingredients": [
    {
      "id": "hse-egg",
      "nameEn": "Chinese eggplant",
      "nameZh": "长条茄子",
      "pinyin": "cháng tiáo qié zi",
      "amountMetric": "350 g",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "hse-pork",
      "nameEn": "ground pork (30% fat)",
      "nameZh": "猪肉末（肥瘦3:7）",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "hse-ginger",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜末",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "hse-scallion",
      "nameEn": "scallions, finely chopped",
      "nameZh": "小葱末",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "hse-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "hse-oyster",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "hse-sesame",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "hse-pepper",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "¼ tsp",
      "amountUS": "pinch",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "hse-cornstarch",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "hse-oil",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Slice eggplants lengthwise into 1.5 cm thick planks. Use a spoon to scoop out the center, leaving a 1 cm border — you now have 'boats'. Sprinkle salt on the insides and set aside 10 min to draw out bitterness.",
      "textZh": "茄子纵向切片约1.5cm厚，用勺挖去中心留1cm边框，成'小船'状。撒盐腌制10分钟去涩。",
      "stateNote": {
        "visual": "eggplant flesh begins to turn translucent at edges",
        "visualZh": "茄子边缘开始微微透明",
        "signal": "salts have drawn out excess moisture — pat dry with paper towel",
        "signalZh": "盐分已析出多余水分——用厨房纸吸干"
      }
    },
    {
      "text": "Mix ground pork with ginger, half the scallions, soy sauce, oyster sauce, sesame oil, white pepper, and cornstarch. Stir in one direction until sticky and cohesive — this is the 'niang' filling.",
      "textZh": "猪肉末加姜末、一半葱花、生抽、蚝油、香油、白胡椒、淀粉，朝一个方向搅拌至起胶，成为酿馅。",
      "stateNote": {
        "visual": "mixture becomes glossy and clings to the spoon",
        "visualZh": "肉馅发亮，能挂在勺子上",
        "signal": "stickiness means gluten development — good for holding shape",
        "signalZh": "起胶说明蛋白质网络形成，煎时不易散"
      }
    },
    {
      "text": "Pat eggplant boats dry. Fill each with the pork mixture, mounding slightly. Heat oil in a non-stick skillet over medium-high heat.",
      "textZh": "茄子吸干水分，填入肉馅堆成小山丘。平底锅烧热油。"
    },
    {
      "text": "Place stuffed eggplant meat-side down first. Fry 3 min until golden, then flip and sear the bottom 2 min. The eggplant should be tender but holding its shape.",
      "textZh": "肉馅面朝下先煎3分钟至金黄，再翻面煎底部2分钟。茄子软而不烂。",
      "stateNote": {
        "visual": "eggplant edges curl slightly, meat is opaque and set",
        "visualZh": "茄子边缘微卷，肉馅完全变色定型",
        "signal": "golden crust forms and releases from pan easily — don't force it",
        "signalZh": "金黄 crust 自然脱离锅底，不要硬铲"
      }
    },
    {
      "text": "Pour in ½ cup water plus 1 tbsp soy sauce. Cover and simmer 8 min. Uncover, increase heat to reduce sauce to a glossy glaze. Garnish with remaining scallions. Serve immediately.",
      "textZh": "倒入半碗水加1勺生抽，盖盖焖8分钟。开盖大火收汁至浓稠发亮。撒葱花上桌。",
      "stateNote": {
        "visual": "sauce thickens to a shiny glaze coating the eggplant",
        "visualZh": "酱汁浓稠发亮，包裹茄子",
        "signal": "bubbling slows and sauce coats the back of a spoon — done",
        "signalZh": "气泡变少，酱汁挂勺——完成"
      }
    }
  ],
  "tips": [
    "Salt the eggplant first — this removes bitterness and prevents oil absorption during frying.",
    "Stir the pork filling in one direction only; this develops stickiness so the stuffing doesn't fall apart.",
    "Don't skip the simmer step — raw filling in the center is a food safety risk."
  ],
  "tipsZh": [
    "先盐渍茄子——去涩同时减少吸油。",
    "肉馅朝一个方向搅打上劲，酿的时候才不散。",
    "焖煮不可省略——中间夹生有食品安全风险。"
  ],
  "relatedSlugs": [
    "yu-xiang-eggplant",
    "hongshao-pork",
    "mapo-tofu"
  ],
  "image": "/images/recipes/hakka-stuffed-eggplant.webp"
};
