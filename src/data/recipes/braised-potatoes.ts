import type { Recipe } from "@/lib/types";

/** Braised Potatoes in Soy Sauce (红烧土豆) (红烧土豆) — Day batch */
export const braised_potatoes: Recipe = {
  "id": "braised-potatoes",
  "slug": "braised-potatoes",
  "titleEn": "Braised Potatoes in Soy Sauce (红烧土豆)",
  "titleZh": "红烧土豆",
  "pinyin": "hong shao tu dou",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide (全国)",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version uses water and a little rock sugar, simmered in one pan until the sauce reduces naturally. Restaurant versions deep-fry the potato chunks first for a shell that holds its shape.",
  "versionNoteZh": "家庭版加水与少量冰糖一锅焖到自然收汁。餐厅版会先把土豆块过油，形成不易散的外壳。",
  "tags": [
    "potato",
    "vegetarian",
    "vegan",
    "rice-pairing",
    "30-min"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Hong shao potatoes are what a Chinese household cooks when there is no meat in the fridge but there are always potatoes. The technique is identical to red-braised pork — caramelise, braise, reduce — except the potato swallows the sauce and turns glossy and dense. My mother called it the dish that saved dinner more times than she could count.",
  "storyZh": "家里冰箱没肉但总有土豆时，中国家庭就会做红烧土豆。做法跟红烧肉一模一样——上色、焖煮、收汁，只不过土豆把汤汁全吸进去，变得油亮绵密。我妈说这道菜「救场」的次数她数都数不清。",
  "ingredients": [
    {
      "id": "bp-1",
      "nameEn": "potatoes, peeled and cut into 3 cm chunks",
      "nameZh": "土豆（去皮切 3 厘米块）",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "bp-2",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bp-3",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1/2 tbsp",
      "amountUS": "1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "bp-4",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    },
    {
      "id": "bp-5",
      "nameEn": "ginger, sliced",
      "nameZh": "姜（切片）",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bp-6",
      "nameEn": "garlic cloves, smashed",
      "nameZh": "大蒜（拍碎）",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "bp-7",
      "nameEn": "scallion, cut into sections",
      "nameZh": "小葱（切段）",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "bp-8",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 pod",
      "amountUS": "1 pod",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "bp-9",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "bp-10",
      "nameEn": "hot water",
      "nameZh": "热水",
      "amountMetric": "300 ml",
      "amountUS": "1 1/4 cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse the potato chunks under cold water and pat dry. Keeping them dry at this stage prevents violent oil spatter.",
      "textZh": "土豆块用冷水冲洗后擦干。这一步保持干燥可避免下锅时油花四溅。",
      "stateNote": {
        "visual": "surface no longer wet",
        "signal": "prep complete",
        "timeRef": "1 min"
      }
    },
    {
      "text": "Heat oil in a wok or deep skillet over medium heat. Add the potato chunks and fry, turning occasionally, until the edges turn translucent and faintly golden.",
      "textZh": "锅烧热下油，中火放入土豆块，不时翻动，煎到边缘半透明、微微泛金。",
      "stateNote": {
        "visual": "edges translucent with pale gold patches",
        "signal": "light sizzle, no browning smell",
        "timeRef": "5-6 min",
        "heat": "medium"
      }
    },
    {
      "text": "Push potatoes to one side. Add ginger, garlic, scallion whites and star anise to the bare oil and fry for 30 seconds until fragrant.",
      "textZh": "土豆拨到一边，在空出的油里下姜片、蒜瓣、葱白和八角，爆香 30 秒。",
      "stateNote": {
        "visual": "oil shimmering, aromatics just softening",
        "signal": "sharp fragrant aroma rises",
        "timeRef": "30 sec",
        "heat": "medium"
      }
    },
    {
      "text": "Add rock sugar and let it melt into the oil, then pour in light and dark soy sauce. Toss until every chunk is evenly coated in a reddish-brown glaze.",
      "textZh": "下冰糖炒至融化，倒入生抽和老抽，翻炒至每块土豆都裹上红亮的酱色。",
      "stateNote": {
        "visual": "chunks coated deep reddish-brown",
        "signal": "sauce clinging, not pooling",
        "timeRef": "1-2 min",
        "heat": "medium"
      }
    },
    {
      "text": "Pour in hot water to just cover. Bring to a boil, then cover and simmer over low heat until the potatoes are tender and the liquid has reduced by two thirds.",
      "textZh": "倒入热水基本没过土豆。大火煮开后加盖，转小火焖到土豆软糯、汤汁收掉三分之二。",
      "stateNote": {
        "visual": "sauce thickened and bubbling slowly",
        "signal": "chopstick pierces potato with no resistance",
        "timeRef": "12-15 min",
        "heat": "low"
      }
    },
    {
      "text": "Uncover, raise the heat and reduce until the sauce coats the back of a spoon. Scatter with scallion greens and serve with plain rice.",
      "textZh": "开盖转大火收汁，到酱汁能挂住勺背即可。撒葱花，配白米饭上桌。",
      "stateNote": {
        "visual": "glossy sauce clinging to each chunk",
        "signal": "large lazy bubbles",
        "timeRef": "2-3 min",
        "heat": "medium-high"
      }
    }
  ],
  "tips": [
    "Cut the chunks to a uniform 3 cm so they cook at the same rate.",
    "Dark soy sauce is for colour, light soy sauce is for salt — do not swap them.",
    "Do not stir too often during the braise or the potatoes will break down into mash.",
    "Add a few dried chilies with the aromatics if you want a gentle background heat."
  ],
  "tipsZh": [
    "土豆块统一切 3 厘米，受热才均匀。",
    "老抽上色、生抽调味，两者不能互换。",
    "焖煮时别频繁翻动，否则土豆会碎成泥。",
    "想要一点底味辣度，爆香时加几只干辣椒即可。"
  ],
  "relatedSlugs": [
    "potato-stewed-green-beans",
    "potato-beef-stew",
    "hong-shao-eggplant",
    "egg-fried-rice"
  ],
  "image": "/images/recipes/potato-stewed-green-beans.webp"
};
