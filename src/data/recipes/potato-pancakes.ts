import type { Recipe } from "@/lib/types";

/** Crispy Chinese Potato Pancakes (土豆饼) (土豆饼) — Day batch */
export const potato_pancakes: Recipe = {
  "id": "potato-pancakes",
  "slug": "potato-pancakes",
  "titleEn": "Crispy Chinese Potato Pancakes (土豆饼)",
  "titleZh": "土豆饼",
  "pinyin": "tu dou bing",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Northern China (北方)",
  "regionZh": "北方",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version: pan-fried in a thin layer of oil until the edges turn lacy and crisp. Street stalls deep-fry them and brush on chili sauce — great, but far heavier.",
  "versionNoteZh": "家庭版：平底锅少油煎到边缘起蕾丝焦边。街头小摊是油炸再刷辣酱，香是香，油太重。",
  "tags": [
    "potato",
    "vegetarian",
    "breakfast",
    "kid-friendly",
    "30-min"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Potato pancakes are the northern Chinese answer to the hash brown. My grandmother made them on Sunday mornings with whatever potatoes were sprouting in the pantry — grated, squeezed, mixed with a handful of flour, and fried on a cast-iron pan until the kitchen smelled like toasted starch. They were never meant to be fancy; they were meant to be eaten standing up, straight from the pan.",
  "storyZh": "土豆饼是北方人对薯饼的回应。我奶奶在周日早晨用储藏室里冒芽的土豆做——擦丝、挤水、抓一把面粉拌匀，在铸铁锅里煎到满屋子都是焦香淀粉味。它从来不是什么讲究菜，而是该站着、直接从锅里夹起来吃的东西。",
  "ingredients": [
    {
      "id": "pp-1",
      "nameEn": "starchy potatoes (russet or maris piper)",
      "nameZh": "土豆（粉质）",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "pp-2",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "40 g",
      "amountUS": "1/3 cup",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "pp-3",
      "nameEn": "egg",
      "nameZh": "鸡蛋",
      "amountMetric": "1 large",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "pp-4",
      "nameEn": "scallion, finely sliced",
      "nameZh": "小葱（切细）",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "pp-5",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "tsp"
    },
    {
      "id": "pp-6",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "pp-7",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "pp-8",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "pp-9",
      "nameEn": "cooking oil, for pan-frying",
      "nameZh": "食用油（煎用）",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Peel the potatoes and grate them on the coarse side of a box grater. Drop the shreds into a bowl of cold water and swish for 10 seconds to rinse off surface starch.",
      "textZh": "土豆去皮，用擦丝器粗孔擦成丝。放入冷水中搅洗 10 秒，冲掉表面多余淀粉。",
      "stateNote": {
        "visual": "water turns cloudy white",
        "signal": "starch released",
        "timeRef": "10 sec"
      }
    },
    {
      "text": "Drain well, then wrap the shreds in a clean kitchen towel and squeeze hard. This is the single most important step — wet potato means a pancake that falls apart.",
      "textZh": "沥干后用干净厨房布包住土豆丝，用力挤干水分。这一步最关键——水分不挤干，饼一定散。",
      "stateNote": {
        "visual": "shreds feel damp but not dripping",
        "signal": "no water drips when squeezed",
        "timeRef": "1-2 min"
      }
    },
    {
      "text": "Return the shreds to a dry bowl. Add flour, egg, scallion, salt, white pepper, light soy sauce and sesame oil. Toss with your hands until every shred is coated.",
      "textZh": "把土豆丝放回干碗中，加入面粉、鸡蛋、葱花、盐、白胡椒、生抽和香油，用手抓拌至每根丝都裹上浆。",
      "stateNote": {
        "visual": "mixture holds together when pressed",
        "signal": "batter clumps in fist",
        "timeRef": "1 min"
      }
    },
    {
      "text": "Heat 2 tbsp oil in a non-stick skillet over medium-low heat. Scoop half the mixture in, press flat with a spatula to about 1 cm thick, and cook undisturbed for 4 minutes.",
      "textZh": "不粘锅中小火下 2 汤匙油，倒入一半土豆丝，用锅铲压平成约 1 厘米厚的圆饼，不要翻动，煎 4 分钟。",
      "stateNote": {
        "visual": "edges turning golden and lacy",
        "signal": "gentle even sizzle",
        "timeRef": "4 min",
        "heat": "medium-low"
      }
    },
    {
      "text": "Slide the pancake onto a plate, cover with a second plate and flip. Add the remaining 1 tbsp oil and slide it back in to brown the other side for 3-4 minutes.",
      "textZh": "把饼滑到盘子上，扣另一个盘子翻面。补 1 汤匙油，滑回锅中煎另一面 3-4 分钟。",
      "stateNote": {
        "visual": "both sides deep golden with crisp edges",
        "signal": "pancake sounds hollow when tapped",
        "timeRef": "3-4 min",
        "heat": "medium-low"
      }
    },
    {
      "text": "Repeat with the second half. Cut into wedges and serve hot, plain or dipped in a mix of light soy sauce and chinkiang vinegar.",
      "textZh": "另一半同样操作。切块趁热吃，可直接吃，也可蘸生抽加镇江香醋调的汁。",
      "stateNote": {
        "visual": "crisp surface, fluffy interior",
        "signal": "ready to serve"
      }
    }
  ],
  "tips": [
    "Use starchy potatoes (russet). Waxy potatoes hold too much water and turn gummy.",
    "Squeezing the water out is not optional — it is the difference between a pancake and a pile of fried shreds.",
    "Keep the heat at medium-low. High heat burns the outside before the centre sets.",
    "Leftover pancakes reheat beautifully in a dry skillet; never microwave them or they go limp."
  ],
  "tipsZh": [
    "要用粉质土豆（如 russet）。蜡质土豆含水太多，做出来发黏。",
    "挤干水分不是可选项，它决定了这是「一张饼」还是「一堆炒土豆丝」。",
    "火候保持中小火。火大外面焦了里面还没定型。",
    "剩下的饼用干锅回热最好，千万别微波炉，会软塌。"
  ],
  "relatedSlugs": [
    "spicy-potato-shreds",
    "dry-pot-potato-slices",
    "scallion-noodles",
    "egg-fried-rice"
  ],
  "image": "/images/recipes/scallion-pancakes.webp"
};
