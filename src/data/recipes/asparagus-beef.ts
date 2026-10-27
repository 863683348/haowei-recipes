import type { Recipe } from "@/lib/types";

/** Beef with Asparagus (Lu Sun Chao Niu Rou) (芦笋炒牛肉) — Day batch */
export const asparagus_beef: Recipe = {
  "id": "lu-sun-chao-niu-rou",
  "slug": "asparagus-beef",
  "titleEn": "Beef with Asparagus (Lu Sun Chao Niu Rou)",
  "titleZh": "芦笋炒牛肉",
  "pinyin": "lú sǔn chǎo niú ròu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "The family version velvets the beef with cornstarch and blanches the asparagus, both easy in a home kitchen. Restaurant versions pass the beef through hot oil first and use a far hotter wok, so the beef gets a sear while staying pink inside.",
  "versionNoteZh": "家庭版用玉米淀粉给牛肉上浆、芦笋先焯水，家中操作都很容易。餐馆版会把牛肉先过油，并用猛火灶，牛肉外层焦香而内里仍嫩。",
  "tags": [
    "25-min",
    "weeknight",
    "beef",
    "stir-fry"
  ],
  "dietary": [
    "none"
  ],
  "story": "A Cantonese chef I cooked beside in Guangzhou sliced beef against the grain so fast the knife barely seemed to move. He said the secret is not the marinade but the order: asparagus out first, beef second, sauce last, and nothing ever waits in the pan.",
  "storyZh": "在广州跟一位粤菜师傅做菜时，他逆着纹理切牛肉快得几乎看不见刀动。他说秘诀不在腌料而在顺序：芦笋先出锅，牛肉第二，酱汁最后，任何东西都不许在锅里等着。",
  "ingredients": [
    {
      "id": "ls-01",
      "nameEn": "beef flank or sirloin",
      "nameZh": "牛腩条/牛里脊",
      "amountMetric": "350 g",
      "amountUS": "12 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Slice thinly against the grain, about 3 mm thick. Flank is more flavourful; sirloin is more tender."
    },
    {
      "id": "ls-02",
      "nameEn": "asparagus",
      "nameZh": "芦笋",
      "amountMetric": "400 g",
      "amountUS": "1 bunch",
      "category": "produce",
      "pantry": "local",
      "note": "Choose medium-thick spears; snap off the woody ends and cut on a diagonal."
    },
    {
      "id": "ls-03",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "amountMetric": "15 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "ls-04",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "10 g",
      "amountUS": "2 tsp minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ls-05",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "20 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "ls-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ls-07",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "ls-08",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ls-09",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "ls-10",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Slice the beef thinly against the grain. Toss with 1 tsp cornstarch, 1 tsp light soy sauce, Shaoxing wine and white pepper, then stir in 1 tsp oil. Rest 10 minutes.",
      "textZh": "牛肉逆纹切薄片。加1茶匙玉米淀粉、1茶匙生抽、黄酒和白胡椒粉抓匀，再拌入1茶匙油，静置10分钟。",
      "zhHint": "逆纹切片上浆腌10分钟",
      "stateNote": {
        "visual": "Beef looks glossy and slightly coated; marinade is fully absorbed with no pooling",
        "visualZh": "牛肉泛着光泽、薄薄上浆，腌汁完全吸收不积水",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Slices feel slippery and slightly springy, not wet"
      },
      "tip": "A spoonful of oil at the end of the marinade stops the slices sticking together in the wok."
    },
    {
      "text": "Bring a pot of salted water to a rolling boil. Blanch asparagus for 60 seconds, then drain and spread on a plate.",
      "textZh": "锅中盐水大火烧至大滚。芦笋焯60秒，捞出平铺在盘中。",
      "zhHint": "芦笋盐水焯60秒",
      "stateNote": {
        "visual": "Asparagus turns bright emerald and looks glossy; cut end yields slightly to a fingernail",
        "visualZh": "芦笋变为鲜亮翠绿、表面油亮；切口用指甲轻掐略有弹性",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "high",
        "signal": "Colour shifts from dull green to vivid green almost immediately"
      },
      "tip": "Blanching sets the colour and means the asparagus needs only a brief time in the wok."
    },
    {
      "text": "Heat the wok over high heat with 1 tbsp oil. Add the beef in a single layer and leave it undisturbed for 40 seconds, then toss for another 40 seconds.",
      "textZh": "大火烧热铁锅，放1汤匙油。牛肉平铺一层，静置40秒不动，再翻炒40秒。",
      "zhHint": "大火单层煎40秒再翻",
      "stateNote": {
        "visual": "Beef browns on the outside while the centre still shows a little pink; juices run clear",
        "visualZh": "牛肉外表焦褐、中心仍带一点粉红，流出的汁水澄清",
        "timeRef": "80 seconds",
        "timeRefZh": "80 秒",
        "heat": "high",
        "signal": "Edges curl and the slices no longer stick to the wok base"
      }
    },
    {
      "text": "Push the beef up the side of the wok. Add garlic and ginger to the cleared base, stir 20 seconds, then return the beef and toss together.",
      "textZh": "把牛肉推到锅边，在空出的锅底下蒜姜炒20秒，再将牛肉拨回翻匀。",
      "zhHint": "推牛肉到锅边爆香蒜姜",
      "stateNote": {
        "visual": "Garlic and ginger are pale gold and fragrant; beef is coated in the aromatic oil",
        "visualZh": "蒜姜呈淡金色、香气四溢，牛肉裹上香油",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "Sharp garlic aroma rises; no browning beyond pale gold"
      }
    },
    {
      "text": "Add the blanched asparagus, oyster sauce and remaining light soy sauce. Toss over high heat for 60 seconds until everything is glossy and coated.",
      "textZh": "加入焯好的芦笋、蚝油和剩余生抽，大火翻炒60秒至全部油亮上汁。",
      "zhHint": "大火合炒60秒",
      "stateNote": {
        "visual": "Asparagus glistens with a thin brown sauce; beef and spears are evenly distributed",
        "visualZh": "芦笋裹着薄薄褐色酱汁发亮，牛肉与芦笋分布均匀",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "high",
        "signal": "Sauce bubbles at the edges and thickens enough to coat but not pool"
      }
    },
    {
      "text": "Turn off the heat, add sesame oil, and give two final tosses. Serve at once with steamed rice.",
      "textZh": "关火，淋香油翻拌两下。立即配米饭上桌。",
      "zhHint": "关火淋香油翻两下",
      "stateNote": {
        "visual": "Green spears and browned beef with a light sheen; no excess liquid",
        "visualZh": "翠绿芦笋与焦香牛肉泛着轻亮油光，无多余汤汁",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "signal": "Sesame aroma is noticeable but does not overpower the beef"
      },
      "tip": "Overcooking is the usual mistake — the whole stir-fry happens in under 4 minutes."
    }
  ],
  "tips": [
    "Slice against the grain, or the beef will be chewy no matter how well you cook it.",
    "Blanch the asparagus first so it stays vivid green and crisp.",
    "Do not overcrowd the wok; sear the beef in two batches if needed."
  ],
  "tipsZh": [
    "必须逆纹切片，否则再怎么炒牛肉都柴。",
    "芦笋先焯水，才能保持翠绿脆嫩。",
    "锅不要挤，肉多就分两批煎。"
  ],
  "relatedSlugs": [
    "beef-and-broccoli",
    "asparagus-shrimp",
    "oyster-sauce-beef"
  ],
  "image": "/images/recipes/beef-and-broccoli.webp"
};
