import type { Recipe } from "@/lib/types";

/** Salt and Pepper Fried Potatoes (椒盐土豆) (椒盐土豆) — Day batch */
export const salt_and_pepper_potatoes: Recipe = {
  "id": "salt-and-pepper-potatoes",
  "slug": "salt-and-pepper-potatoes",
  "titleEn": "Salt and Pepper Fried Potatoes (椒盐土豆)",
  "titleZh": "椒盐土豆",
  "pinyin": "jiāo yán tǔ dòu",
  "cuisine": "家常小吃",
  "cuisineEn": "Home-style snack",
  "region": "Northern China / street stalls",
  "regionZh": "华北民间 / 街边小摊",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Street stalls deep-fry twice in a vat of oil at 180°C, then toss the potatoes with the spice mix in a wok for ten seconds. At home, shallow-frying twice gets you nearly the same crust with a fraction of the oil — the key is letting them rest between fries so the surface can dry and set.",
  "versionNoteZh": "街边小摊是 180°C 大油锅炸两遍，起锅后在铁锅里和椒盐翻十秒。家里改成半煎两次，用几分之一油量就能做到差不多的脆壳——关键是两遍之间要让表面静置回干、把壳定住。",
  "tags": [
    "snack",
    "potato",
    "vegetarian",
    "crispy",
    "street-food",
    "kid-friendly"
  ],
  "dietary": [
    "vegan",
    "vegetarian"
  ],
  "story": "Salt-and-pepper (椒盐) is one of the two great Chinese dry rubs, and it is not just salt and pepper — it is salt toasted with Sichuan peppercorns until the kitchen smells like a spice shop, then ground together. Tossed with anything fried it turns a plain ingredient into something you eat standing over the pan. Potatoes are the cheapest version and arguably the best: floury inside, shatteringly crisp outside.",
  "storyZh": "椒盐是中式两大干拌料之一，而且不只是盐加胡椒——是把盐和花椒一起焙到整间厨房像香料铺，再磨成粉。任何炸物只要拌上它，都能让人站在锅边就吃完。土豆是最便宜、大概也是最好吃的版本：里面松，外面脆得会碎。",
  "ingredients": [
    {
      "id": "spp-potato",
      "nameEn": "waxy potatoes, peeled",
      "nameZh": "土豆（脆土豆，去皮）",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lb",
      "category": "produce",
      "pantry": "local",
      "note": "Waxy (red or Yukon) potatoes hold their shape when fried. Very starchy ones fall apart.",
      "noteZh": "脆土豆（红皮/黄肉）油炸后能保持形状；太面的土豆会散。"
    },
    {
      "id": "spp-cornstarch",
      "nameEn": "cornstarch, for coating",
      "nameZh": "玉米淀粉（裹粉）",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "spp-salt",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "amountMetric": "3/4 tsp",
      "amountUS": "3/4 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "spp-sichuan",
      "nameEn": "Sichuan peppercorns, freshly ground",
      "nameZh": "花椒（现磨）",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "spp-fivespice",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "spp-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "spp-scallion",
      "nameEn": "scallion greens, finely sliced",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "spp-chili",
      "nameEn": "small hot red chili, sliced (optional)",
      "nameZh": "小米椒圈（可选）",
      "amountMetric": "1",
      "amountUS": "1",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "spp-oil",
      "nameEn": "neutral oil, for shallow frying",
      "nameZh": "食用油（半煎炸用）",
      "amountMetric": "about 120 ml",
      "amountUS": "about 1/2 cup",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Toast the salt and Sichuan peppercorns in a dry pan over low heat for 2 minutes, shaking constantly, until fragrant. Grind them together into the salt-and-pepper mix. Mix in five-spice.",
      "textZh": "干锅小火焙盐和花椒 2 分钟，不停晃动锅子，炒到出香后一起磨成椒盐粉。再拌入五香粉。",
      "zhHint": "焙香研椒盐",
      "stateNote": {
        "visual": "Salt takes on a faint tan color; peppercorns darken a shade and turn brittle",
        "visualZh": "盐粒微微发黄；花椒颜色略深、变得酥脆",
        "heat": "low",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "It smells like a spice shop — nutty, numbing, sharp. Pull it off before it smokes",
        "signalZh": "闻起来像香料铺——焦香、麻、冲。冒烟前离火"
      },
      "tip": "Make double. It keeps for a month in a jar and improves everything fried.",
      "tipZh": "一次做双倍。装罐能存一个月，拌任何炸物都好吃。"
    },
    {
      "text": "Cut the potatoes into chunky wedges or irregular 2 cm cubes. Boil them in salted water for exactly 3 minutes, then drain very thoroughly.",
      "textZh": "土豆切成滚刀块或约 2 厘米的不规则方块。在盐水里煮 3 分钟整，然后彻底沥干。",
      "zhHint": "焯水去生",
      "stateNote": {
        "visual": "Edges just go translucent; the centers are still firm and opaque",
        "visualZh": "边缘刚刚转半透明；中心仍然硬实不透明",
        "heat": "high",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "A knife tip sinks into the edge but meets resistance in the middle",
        "signalZh": "刀尖能扎进边缘，但在中心遇到阻力"
      }
    },
    {
      "text": "Spread them on a towel for 2 minutes to steam dry, then toss with cornstarch until each piece has a thin dusty coat.",
      "textZh": "把土豆块摊在布上晾 2 分钟让水汽散掉，再撒玉米淀粉抓匀，每块都薄薄裹上一层粉。",
      "zhHint": "晾干粉裹衣",
      "stateNote": {
        "visual": "Surface water disappears; cornstarch clings evenly with no wet patches",
        "visualZh": "表面水痕消失；淀粉均匀附着，没有湿黏的斑块",
        "timeRef": "2 minutes air-dry",
        "timeRefZh": "晾 2 分钟",
        "signal": "Shake the bowl: no clumps of paste, each cube moves freely",
        "signalZh": "晃碗：没有黏成一团的粉块，每粒都能自由滑动"
      }
    },
    {
      "text": "Heat the oil to about 170°C (a piece of bread browns in 20 seconds). Fry the potatoes in batches for 7–8 minutes, turning occasionally, until pale gold. Remove and rest 5 minutes.",
      "textZh": "把油烧到约 170°C（丢一小块面包 20 秒变黄即可）。分批下锅炸 7–8 分钟，不时翻动，炸到浅金色。捞出静置 5 分钟。",
      "zhHint": "第一遍炸定型",
      "stateNote": {
        "visual": "Bubbles around the potatoes shrink from vigorous to lazy; crust goes pale gold",
        "visualZh": "土豆周围的气泡从剧烈变稀疏；外壳转成浅金色",
        "heat": "medium-high",
        "timeRef": "7–8 minutes",
        "timeRefZh": "7–8 分钟",
        "signal": "Tapping a piece gives a faint hollow sound — the crust has formed",
        "signalZh": "敲一块发出轻微的空心声——外壳已经结成"
      }
    },
    {
      "text": "Bring the oil up to high heat and fry the potatoes a second time for 1.5–2 minutes until deep golden and crisp. Drain on a rack.",
      "textZh": "把油温升高，第二次复炸 1.5–2 分钟到深金黄色、外皮酥脆。捞出放在网架上沥油。",
      "zhHint": "高温复炸",
      "stateNote": {
        "visual": "Color deepens from pale to amber; the surface looks dry and matte-crisp",
        "visualZh": "颜色从浅金转琥珀；表面呈现干爽的哑光脆感",
        "heat": "high",
        "timeRef": "1.5–2 minutes",
        "timeRefZh": "1.5–2 分钟",
        "signal": "They sound hard and scratchy when you stir them, not soft",
        "signalZh": "翻动时是干脆的摩擦声，而不是沉闷的软声"
      },
      "tip": "Never skip the rest between fries — it is what lets the crust set before it crisps.",
      "tipZh": "两次油炸之间的静置不能省——壳要先定住才会脆。"
    },
    {
      "text": "In a clean dry wok over medium heat, stir-fry garlic and chili 20 seconds. Add the potatoes off the heat, sprinkle with 1 tsp of the pepper-salt mix and scallion, and toss 20 seconds. Serve immediately.",
      "textZh": "干净无油的锅中火下蒜末和小米椒炒 20 秒。关火后倒入土豆块，撒 1 茶匙椒盐和葱花，颠锅翻匀 20 秒。立刻上桌。",
      "zhHint": "拌椒盐出锅",
      "stateNote": {
        "visual": "Salt crystals and green scallion flecks are visible on every piece",
        "visualZh": "每块土豆上都能看到盐晶和绿色的葱花点",
        "heat": "medium",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "signal": "The numbing aroma of Sichuan pepper hits you before the first bite",
        "signalZh": "还没入口就先闻到花椒的麻香"
      }
    }
  ],
  "tips": [
    "Parboil exactly 3 minutes — longer and the wedges break apart in the oil.",
    "Dry + starch coating = crust. Skip either and the potatoes just absorb oil.",
    "Resting between the two fries is what makes the second fry worth doing.",
    "Toss with the salt off the heat; residual heat is enough and salt won't weep."
  ],
  "tipsZh": [
    "焯水严格 3 分钟——煮久了下锅会散开。",
    "擦干 + 裹粉 = 脆壳。少了任何一步，土豆只会吸油。",
    "两次油炸之间的静置，才是值得复炸的原因。",
    "拌椒盐要关火：余温足够，盐也不会返潮。"
  ],
  "relatedSlugs": [
    "dry-pot-potato-slices",
    "green-pepper-potato-shreds",
    "spicy-potato-shreds"
  ],
  "image": "/images/recipes/dry-pot-potato-slices.webp"
};
