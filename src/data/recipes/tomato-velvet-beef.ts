import type { Recipe } from "@/lib/types";

/** Tomato Velveted Beef with Egg (番茄滑蛋牛肉) (番茄滑蛋牛肉) — Day batch */
export const tomato_velvet_beef: Recipe = {
  "id": "fan-qie-hua-dan-niu-rou",
  "slug": "tomato-velvet-beef",
  "titleEn": "Tomato Velveted Beef with Egg (番茄滑蛋牛肉)",
  "titleZh": "番茄滑蛋牛肉",
  "pinyin": "fān qié huá dàn niú ròu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Restaurant cha chaan teng style passes the beef through hot oil first for a silkier bite; the family version velvets the beef in a slurry and soft-scrambles it in the same pan, cutting the oil by two thirds.",
  "versionNoteZh": "茶餐厅做法会把牛肉先过油，口感更滑；家庭版用上浆（velveting）后同锅软炒鸡蛋，油量减少三分之二。",
  "tags": [
    "30-min",
    "cantonese",
    "beef",
    "tomato",
    "weeknight",
    "rice-friendly"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the Cantonese diner answer to a 20-minute dinner: the same pan gives you sweet tomato sauce, silky egg and tender beef in one pass. My mother always kept the beef in the freezer for 30 minutes before slicing — a half-frozen block gives you the paper-thin slices that make restaurant velveting possible at home.",
  "storyZh": "这是粤式茶餐厅的快手答案：一个锅同时出番茄甜汁、滑蛋和嫩牛肉。我妈总把牛肉冻 30 分钟再切——半冻的肉块才能切出餐厅那种薄片，上浆后在家也能做到滑嫩。",
  "ingredients": [
    {
      "id": "ing-beef",
      "nameEn": "beef flank or sirloin, thinly sliced",
      "nameZh": "牛腩肉/牛里脊（切薄片）",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Freeze 30 min for easier slicing.",
      "noteZh": "冷冻 30 分钟更好切薄片。",
      "termKey": "velveting"
    },
    {
      "id": "ing-tomato",
      "nameEn": "ripe tomatoes, cut in wedges",
      "nameZh": "成熟番茄（切块）",
      "amountMetric": "3 medium (400 g)",
      "amountUS": "3 medium (14 oz)",
      "category": "produce",
      "pantry": "local",
      "note": "Roma or on-the-vine; avoid underripe ones.",
      "noteZh": "用罗马番茄或串收番茄，不要太生。",
      "termKey": "tomato"
    },
    {
      "id": "ing-egg",
      "nameEn": "large eggs, beaten",
      "nameZh": "鸡蛋（打散）",
      "amountMetric": "3",
      "amountUS": "3 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "ing-cornstarch",
      "nameEn": "cornstarch (for velveting + slurry)",
      "nameZh": "玉米淀粉（上浆+勾芡）",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "ing-lss",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ing-oyster",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "ing-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "6 g",
      "amountUS": "1.5 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ing-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜（切片）",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ing-scallion",
      "nameEn": "scallion, cut in 3 cm lengths",
      "nameZh": "葱（切段）",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Toss the sliced beef with 1 tbsp cornstarch, 1 tsp light soy sauce and 1 tbsp water until every slice is coated and no liquid pools. Rest 10 minutes.",
      "textZh": "牛肉片加 1 汤匙玉米淀粉、1 茶匙生抽和 1 汤匙清水抓匀，直到每片都挂上浆、盆底无余液。静置 10 分钟。",
      "stateNote": {
        "visual": "Beef looks glossy and slightly tacky, no puddle in the bowl.",
        "visualZh": "牛肉表面发亮、略发黏，盆底无积水。",
        "signal": "When you lift a slice it holds a thin film instead of dripping.",
        "signalZh": "提起一片时挂着薄薄一层浆，不会滴落。",
        "timeRef": "about 10 minutes",
        "timeRefZh": "约 10 分钟",
        "heat": "low"
      },
      "tip": "This is velveting — the starch film is what keeps the beef tender in a hot pan.",
      "tipZh": "这就是「上浆」——淀粉膜是牛肉在高温下依然嫩滑的关键。"
    },
    {
      "text": "Heat 1 tbsp oil in a wok over medium-high until it shimmers. Add the tomato wedges and 1.5 tsp sugar, stir-fry 3-4 minutes until they slump and release a red, jammy sauce.",
      "textZh": "炒锅加 1 汤匙油，中大火烧至油面泛光。下番茄块和 1.5 茶匙糖，翻炒 3-4 分钟至番茄软塌、出红色浓汁。",
      "stateNote": {
        "visual": "Tomato skins curl away and the pan bottom is coated in glossy red sauce.",
        "visualZh": "番茄皮卷起脱落，锅底挂满红色亮汁。",
        "signal": "A spoon dragged through the sauce leaves a channel that slowly fills in.",
        "signalZh": "用勺子划过锅底留下的沟会慢慢回填。",
        "timeRef": "3-4 minutes on medium-high",
        "timeRefZh": "中大火 3-4 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Push tomatoes to one side, add the beaten eggs to the cleared side. Let them set for 15 seconds, then fold gently into the tomato for soft curds.",
      "textZh": "把番茄拨到一边，蛋液倒在空出的一侧。静置 15 秒待底部凝固，再轻轻与番茄翻拌成软蛋块。",
      "stateNote": {
        "visual": "Egg edges turn opaque white with a still-moist center.",
        "visualZh": "蛋液边缘变白不透明，中心仍湿润。",
        "signal": "The egg just barely holds together when you fold — stop while it looks slightly underdone.",
        "signalZh": "翻拌时蛋块刚刚成形即可——看起来略欠熟就停手。",
        "timeRef": "about 45 seconds total",
        "timeRefZh": "共约 45 秒",
        "heat": "medium"
      }
    },
    {
      "text": "Return the beef to the pan in a single layer with the remaining soy sauce and oyster sauce. Stir-fry 60-90 seconds just until the color changes from red to brown.",
      "textZh": "牛肉平铺回锅，加入剩余生抽和蚝油。翻炒 60-90 秒，肉色由红转褐即可。",
      "stateNote": {
        "visual": "No pink remains on the surface; the sauce clings to each slice.",
        "visualZh": "表面无血色，酱汁挂在每片肉上。",
        "signal": "Slices feel springy, not firm, when pressed with the spatula.",
        "signalZh": "用锅铲轻压有回弹感，而不是发硬。",
        "timeRef": "60-90 seconds",
        "timeRefZh": "60-90 秒",
        "heat": "high"
      }
    },
    {
      "text": "Scatter scallion and ginger, give two final tosses, and serve immediately over steamed rice.",
      "textZh": "撒葱段姜片，最后翻两下出锅，立刻浇在米饭上。",
      "stateNote": {
        "visual": "Scallion turns bright green and fragrant.",
        "visualZh": "葱段变翠绿、香气出来。",
        "signal": "You smell raw scallion give way to sweet onion aroma.",
        "signalZh": "闻到生葱味转为甜香。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "high"
      }
    }
  ],
  "tips": [
    "Slice against the grain — look for the direction of the muscle fibers and cut across them.",
    "Sugar is not optional: it balances tomato acidity and speeds up the jammy breakdown.",
    "Serve straight from the pan; the egg keeps cooking and will weep if it sits."
  ],
  "tipsZh": [
    "逆着纹理切——看清肌肉纤维走向，横刀切断。",
    "糖不能省：它中和番茄酸味，也让番茄更快炒出浓稠感。",
    "出锅即食；鸡蛋余热会继续熟化，放久了会出水。"
  ],
  "relatedSlugs": [
    "tomato-eggs",
    "tomato-tofu",
    "tomato-beef-brisket",
    "tomato-beef-soup"
  ],
  "image": "/images/recipes/green-pepper-beef.webp"
};
