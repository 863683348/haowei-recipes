import type { Recipe } from "@/lib/types";

/** Crab Roe Tofu (Xie Fen Dou Fu) (蟹粉豆腐) — Day batch */
export const crab_roe_tofu: Recipe = {
  "id": "xie-fen-dou-fu",
  "slug": "crab-roe-tofu",
  "titleEn": "Crab Roe Tofu (Xie Fen Dou Fu)",
  "titleZh": "蟹粉豆腐",
  "pinyin": "xiè fěn dòu fu",
  "cuisine": "沪菜",
  "cuisineEn": "Shanghai (Benbang)",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "The family version uses good lump crab meat plus a little salmon roe or extra egg yolk to mimic the richness of crab roe, so it can be made year-round. Restaurant versions use fresh crab roe and crab fat scraped from whole steamed hairy crabs in season, plus a rich chicken-and-ham stock.",
  "versionNoteZh": "家庭版用优质蟹腿肉加少许鱼子或额外蛋黄来模拟蟹粉的醇厚，四季可做。餐馆版取当季整只清蒸大闸蟹剔出的蟹黄蟹膏，并配火腿鸡汤提鲜。",
  "tags": [
    "seafood",
    "shanghai",
    "30-min",
    "comfort-food"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every late autumn my Shanghai grandmother bought two hairy crabs, steamed them, and spent an hour picking out every scrap of orange roe. She then made this tofu dish, and the whole table went quiet. She insisted the tofu be silken, because it should tremble rather than hold a shape.",
  "storyZh": "每年深秋，我上海的外婆会买两只大闸蟹，蒸好后花一小时把每一点橙红蟹黄都剔出来，然后做这道豆腐。一上桌全家都会安静下来。她坚持用嫩豆腐，因为豆腐该是颤的，而不是有型的。",
  "ingredients": [
    {
      "id": "xfd-01",
      "nameEn": "silken tofu",
      "nameZh": "嫩豆腐（内酯豆腐）",
      "amountMetric": "400 g",
      "amountUS": "1 block",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu",
      "note": "Silken, not firm. Cut into 2.5 cm cubes and handle with a slotted spoon."
    },
    {
      "id": "xfd-02",
      "nameEn": "lump crab meat",
      "nameZh": "蟹腿肉",
      "amountMetric": "120 g",
      "amountUS": "3/4 cup",
      "category": "protein",
      "pantry": "local",
      "note": "Refrigerated pasteurised lump crab meat is fine. In season, use fresh crab roe for half the amount."
    },
    {
      "id": "xfd-03",
      "nameEn": "salmon roe or extra egg yolk",
      "nameZh": "鱼子（或额外蛋黄）",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "protein",
      "pantry": "local",
      "note": "Stand-in for crab roe richness. Use 1 egg yolk if salmon roe is unavailable."
    },
    {
      "id": "xfd-04",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger",
      "note": "Ginger is not optional here — it balances crab's cooling nature in Chinese cooking."
    },
    {
      "id": "xfd-05",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "amountMetric": "25 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "xfd-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "xfd-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "xfd-08",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "xfd-09",
      "nameEn": "chicken stock",
      "nameZh": "鸡汤",
      "amountMetric": "200 ml",
      "amountUS": "3/4 cup + 1 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "xfd-10",
      "nameEn": "Chinkiang vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "xfd-11",
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
      "text": "Cut silken tofu into 2.5 cm cubes. Bring a pot of lightly salted water to a bare simmer, slide the tofu in and blanch for 2 minutes, then lift out gently.",
      "textZh": "嫩豆腐切2.5厘米方块。锅中淡盐水烧至微沸，滑入豆腐焯2分钟，轻轻捞出。",
      "zhHint": "嫩豆腐焯水2分钟",
      "stateNote": {
        "visual": "Cubes stay intact with squared edges; the surface looks slightly firmer and glossier",
        "visualZh": "豆腐块完整、棱角分明，表面略显紧致光亮",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Tofu firms just enough to lift without crumbling — no bubbling boil"
      },
      "tip": "Blanching removes the raw beany taste and stops the tofu from shattering later."
    },
    {
      "text": "Heat oil in a wok over medium heat. Add ginger and scallion whites, stir for 30 seconds, then add crab meat and salmon roe and stir gently for 1 minute.",
      "textZh": "锅中放油中火烧热，下姜末和葱白炒30秒，再加入蟹肉和鱼子轻炒1分钟。",
      "zhHint": "中火轻炒蟹肉1分钟",
      "stateNote": {
        "visual": "Crab turns bright orange-red and the oil takes on a warm orange tint",
        "visualZh": "蟹肉转为鲜橙红色，油色染上暖橙调",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "A rich, sweet seafood aroma rises and the oil smells of crab"
      }
    },
    {
      "text": "Splash in Shaoxing wine around the wok wall, let it bubble for 10 seconds, then pour in chicken stock and bring to a gentle simmer.",
      "textZh": "沿锅边淋入黄酒，让其沸腾10秒，再倒入鸡汤，烧至微沸。",
      "zhHint": "沿锅边烹黄酒",
      "stateNote": {
        "visual": "Liquid foams briefly at the edges, then settles into a clear orange broth",
        "visualZh": "汤汁边缘短暂起泡，随即化为清澈橙红汤汁",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Alcohol smell burns off and is replaced by a rounded sweetness"
      }
    },
    {
      "text": "Slide in the blanched tofu. Add light soy sauce and simmer gently for 4 minutes, shaking the pan instead of stirring so the cubes stay whole.",
      "textZh": "滑入焯好的豆腐，加生抽，小火煨4分钟，晃动锅身而非翻炒，保持豆腐完整。",
      "zhHint": "晃锅不翻炒，小火煨4分钟",
      "stateNote": {
        "visual": "Tofu cubes take on a pale amber colour and float slightly in the sauce",
        "visualZh": "豆腐块染上淡琥珀色，在汤汁中微微浮动",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-low",
        "signal": "Sauce bubbles lazily at the edges and has reduced by about a fifth"
      }
    },
    {
      "text": "Mix cornstarch with 2 tbsp cold water and drizzle in while shaking the pan. Cook 30 seconds until the sauce lightly coats the back of a spoon.",
      "textZh": "玉米淀粉加2汤匙冷水调匀，边晃锅边淋入，煮30秒至汤汁能薄薄挂勺。",
      "zhHint": "水淀粉勾薄芡",
      "stateNote": {
        "visual": "Sauce turns glossy and translucent, clinging to the tofu instead of pooling",
        "visualZh": "汤汁变得油亮透明，挂在豆腐上而不积在锅底",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Bubbles become thick and slow; a spoon dragged through leaves a trail that holds"
      },
      "tip": "Stop at a light coating — a heavy glaze buries the delicate crab flavour."
    },
    {
      "text": "Finish with Chinkiang vinegar, white pepper and scallion greens. Serve immediately with steamed rice.",
      "textZh": "最后加镇江香醋、白胡椒粉和葱绿，立即出锅，配米饭食用。",
      "zhHint": "起锅前下醋和白胡椒",
      "stateNote": {
        "visual": "Pale tofu suspended in a glowing orange sauce, flecked with green scallion",
        "visualZh": "嫩白豆腐浮在橙亮汤汁中，点缀翠绿葱花",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "signal": "Aroma is sweet crab first, with a faint vinegar lift at the end"
      }
    }
  ],
  "tips": [
    "Blanch the tofu first — it removes the raw taste and prevents breakage.",
    "Shake the pan rather than stirring; silken tofu cannot survive a spatula.",
    "In autumn, swap half the crab meat for real hairy crab roe for the authentic version."
  ],
  "tipsZh": [
    "豆腐先焯水：既去豆腥，也不易碎。",
    "晃锅而不是翻炒，嫩豆腐经不起锅铲。",
    "秋天可用真的大闸蟹蟹黄替换一半蟹肉，那就是正宗版。"
  ],
  "relatedSlugs": [
    "wen-si-tofu",
    "home-style-tofu",
    "steamed-hairy-crab"
  ],
  "image": "/images/recipes/chrysanthemum-tofu.webp"
};
