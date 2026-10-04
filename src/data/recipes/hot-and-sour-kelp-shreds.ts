import type { Recipe } from "@/lib/types";

/** Hot and Sour Kelp Shreds (酸辣海带丝) (酸辣海带丝) — Day batch */
export const hot_and_sour_kelp_shreds: Recipe = {
  "id": "hot-and-sour-kelp-shreds",
  "slug": "hot-and-sour-kelp-shreds",
  "titleEn": "Hot and Sour Kelp Shreds (酸辣海带丝)",
  "titleZh": "酸辣海带丝",
  "pinyin": "suan la hai dai si",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Shandong (山东)",
  "regionZh": "山东",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version uses pre-cut salted kelp from the Asian grocer and dresses it cold. Restaurant versions blanch fresh kelp to order and add a spoonful of fried peanut crunch on top.",
  "versionNoteZh": "家庭版买亚超切好的盐渍海带丝，凉拌即可。餐厅版现焯鲜海带，最后撒一勺炸花生碎增加口感。",
  "tags": [
    "cold-dish",
    "vegan",
    "low-calorie",
    "appetizer",
    "20-min"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "This is the plate of cold kelp that arrives almost free at northern Chinese dumpling houses while you wait for your order — sharp with vinegar, hot with chili oil, impossibly moreish. Making it at home costs pennies and keeps for three days in the fridge, which is why it has become the default 'we need one more vegetable dish' answer in our house.",
  "storyZh": "这是北方饺子馆里等餐时几乎免费上桌的那盘凉拌海带——酸得利落、辣得通透，越吃越停不下来。在家做成本几毛钱，冰箱里能放三天，所以它成了我家「还差一个素菜」的默认答案。",
  "ingredients": [
    {
      "id": "hsks-1",
      "nameEn": "dried or salted kelp shreds",
      "nameZh": "干 / 盐渍海带丝",
      "amountMetric": "60 g dried",
      "amountUS": "2 oz dried",
      "category": "produce",
      "pantry": "asian",
      "termKey": "seaweed"
    },
    {
      "id": "hsks-2",
      "nameEn": "carrot, cut into fine shreds",
      "nameZh": "胡萝卜（切细丝）",
      "amountMetric": "60 g",
      "amountUS": "2 oz",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "hsks-3",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜（剁蓉）",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "hsks-4",
      "nameEn": "dried chilies, snipped",
      "nameZh": "干辣椒（剪段）",
      "amountMetric": "3 pieces",
      "amountUS": "3 pieces",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "hsks-5",
      "nameEn": "chili oil",
      "nameZh": "辣椒油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-oil"
    },
    {
      "id": "hsks-6",
      "nameEn": "chinkiang vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "1 1/2 tbsp",
      "amountUS": "1 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "hsks-7",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "hsks-8",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "hsks-9",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "hsks-10",
      "nameEn": "toasted sesame seeds",
      "nameZh": "熟白芝麻",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-seeds"
    }
  ],
  "steps": [
    {
      "text": "Soak dried kelp in cold water for 30 minutes (or rinse salted kelp three times). It will expand to roughly four times its dry volume.",
      "textZh": "干海带用冷水泡 30 分钟（盐渍海带则反复冲洗三遍）。体积会膨胀到干品的四倍左右。",
      "stateNote": {
        "visual": "kelp dark green, fully unfurled and flexible",
        "signal": "no longer stiff or curled",
        "timeRef": "30 min"
      }
    },
    {
      "text": "Bring a pot of water to a rolling boil and blanch the kelp for 3 minutes. This softens the fibre and removes any seaweed funk.",
      "textZh": "一锅水大火煮开，海带丝焯水 3 分钟。这一步软化纤维、去掉海腥味。",
      "stateNote": {
        "visual": "kelp turns brighter green and softens",
        "signal": "bends easily without snapping",
        "timeRef": "3 min",
        "heat": "high"
      }
    },
    {
      "text": "Drain and rinse under cold running water for 30 seconds to stop the cooking, then squeeze out as much water as you can.",
      "textZh": "捞出用流动冷水冲 30 秒降温，然后尽量挤干水分。",
      "stateNote": {
        "visual": "kelp cool to the touch",
        "signal": "no water drips when squeezed",
        "timeRef": "30 sec"
      }
    },
    {
      "text": "Cut the kelp into 6 cm lengths and pile it in a bowl with the carrot shreds and minced garlic.",
      "textZh": "海带切 6 厘米段，与胡萝卜丝、蒜蓉一同放入碗中。",
      "stateNote": {
        "visual": "even 6 cm shreds mixed with orange carrot",
        "signal": "prep complete",
        "timeRef": "2 min"
      }
    },
    {
      "text": "Heat 1 tbsp oil in a small pan over medium heat, add the snipped dried chilies and fry for 20 seconds until they darken and smell toasty. Pour the hot chili oil directly over the garlic in the bowl.",
      "textZh": "小锅中火下 1 汤匙油，放干辣椒段炸 20 秒至颜色变深、香气焦香，趁热连油一起浇在碗里的蒜蓉上。",
      "stateNote": {
        "visual": "chilies dark red, oil shimmering",
        "signal": "garlic sizzles when oil hits",
        "timeRef": "20 sec",
        "heat": "medium"
      }
    },
    {
      "text": "Add chinkiang vinegar, light soy sauce, sugar and sesame oil. Toss thoroughly, rest 10 minutes, then taste — it should hit sour first, then salty, then hot. Sprinkle sesame seeds and serve cold or at room temperature.",
      "textZh": "加入镇江香醋、生抽、白糖和香油，充分拌匀，静置 10 分钟后尝味——应该先酸、再咸、后辣。撒白芝麻，冷食或室温食用均可。",
      "stateNote": {
        "visual": "shreds glossy and evenly coated",
        "signal": "flavours balanced after resting",
        "timeRef": "10 min"
      }
    }
  ],
  "tips": [
    "Squeeze the kelp dry after blanching — watery kelp dilutes the dressing.",
    "Pouring hot oil over raw garlic is what gives the dish its aroma; do not skip it.",
    "Chinkiang vinegar is essential. Rice vinegar is too mild and the dish falls flat.",
    "It tastes better after 30 minutes in the fridge, so make it ahead."
  ],
  "tipsZh": [
    "焯水后一定要挤干——带水的海带会把调料冲淡。",
    "热油泼生蒜是这道菜香气的来源，不能省。",
    "镇江香醋是关键。米醋太温和，做出来没精神。",
    "冰箱冷藏 30 分钟后更入味，建议提前做。"
  ],
  "relatedSlugs": [
    "cold-wood-ear",
    "kelp-pork-rib-soup",
    "spicy-potato-shreds",
    "cold-dressed-dried-tofu"
  ],
  "image": "/images/recipes/cold-wood-ear.webp"
};
