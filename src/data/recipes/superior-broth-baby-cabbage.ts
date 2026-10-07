import type { Recipe } from "@/lib/types";

/** Baby Cabbage in Superior Broth (上汤娃娃菜) (上汤娃娃菜) — Day batch */
export const superior_broth_baby_cabbage: Recipe = {
  "id": "superior-broth-baby-cabbage",
  "slug": "superior-broth-baby-cabbage",
  "titleEn": "Baby Cabbage in Superior Broth (上汤娃娃菜)",
  "titleZh": "上汤娃娃菜",
  "pinyin": "shàng tāng wá wá cài",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "A true restaurant 上汤 is made from chicken, ham and dried scallop simmered for hours. The home version builds a fast stock from chicken stock, dried shrimp and a slice of ginger in ten minutes — lighter, but it still tastes nothing like plain water.",
  "versionNoteZh": "真正的餐厅上汤是用鸡、火腿、干贝熬几小时。家常版用鸡高汤加虾米和一片姜十分钟速成——更清淡，但绝不是白水的味道。",
  "tags": [
    "cantonese",
    "braise",
    "comfort",
    "garlic",
    "restaurant-style"
  ],
  "dietary": [
    "none"
  ],
  "story": "上汤 is the Cantonese idea that a vegetable dish can be the most expensive thing on the table, because what you are really eating is the stock. 上汤娃娃菜 takes the humblest vegetable — the small pale cabbage sold three for a dollar — and simmers it in broth with garlic, dried shrimp and a spoon of cured meat until the leaves turn silky and taste of everything. It is the dish that turns a plate of cabbage into the reason people ask for a second bowl of rice.",
  "storyZh": "上汤是广东人的一个观念：素菜也可以是全桌最贵的一道，因为你真正在吃的是那锅汤。上汤娃娃菜用最不起眼的菜——三颗一块钱的小白菜——配蒜、虾米和一勺腊味在汤里慢慢煨到菜叶绵滑、吸尽百味。正是这道菜，能让一盘白菜变成大家要添第二碗饭的理由。",
  "ingredients": [
    {
      "id": "sb-cabbage",
      "nameEn": "baby Chinese cabbage (娃娃菜), quartered lengthwise",
      "nameZh": "娃娃菜（竖切四瓣）",
      "amountMetric": "3 small heads (about 500 g)",
      "amountUS": "3 small heads (about 1.1 lb)",
      "category": "produce",
      "pantry": "asian",
      "termKey": "napa-cabbage"
    },
    {
      "id": "sb-stock",
      "nameEn": "chicken stock",
      "nameZh": "鸡高汤",
      "amountMetric": "500 ml",
      "amountUS": "about 2 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "sb-shrimp",
      "nameEn": "dried shrimp, rinsed",
      "nameZh": "虾米（洗净）",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shrimp"
    },
    {
      "id": "sb-garlic",
      "nameEn": "garlic, smashed whole",
      "nameZh": "蒜瓣（拍碎整粒）",
      "amountMetric": "6 cloves",
      "amountUS": "6 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "sb-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sb-ham",
      "nameEn": "Chinese cured ham or bacon, cut into thin matchsticks",
      "nameZh": "金华火腿或培根（切细条）",
      "amountMetric": "30 g",
      "amountUS": "about 1 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "sb-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sb-pepper",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "0.25 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "sb-starch",
      "nameEn": "cornstarch mixed with 1 tbsp water",
      "nameZh": "玉米淀粉 + 1 汤匙水（水淀粉）",
      "amountMetric": "1 tsp + 15 ml water",
      "amountUS": "1 tsp + 1 tbsp water",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "sb-oil",
      "nameEn": "neutral oil",
      "nameZh": "中性油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse the dried shrimp and soak it in 60 ml of warm water for 10 minutes. Keep both the shrimp and the soaking liquid.",
      "textZh": "虾米洗净用 60 毫升温水泡 10 分钟，虾米和泡虾水都留着。",
      "stateNote": {
        "visual": "Shrimp plump up and soften; the water turns cloudy amber",
        "visualZh": "虾米泡胀变软，水变成浑浊琥珀色",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "A shrimp can be squeezed flat between your fingers",
        "signalZh": "虾米用手指能捏扁"
      },
      "tip": "The soaking liquid is concentrated umami — pour it in, but leave the last spoonful of grit behind.",
      "tipZh": "泡虾水是浓缩的鲜味——倒进去，但碗底那点沉沙别要。"
    },
    {
      "text": "Quarter each baby cabbage lengthwise, keeping the core intact so the quarters hold together during the long simmer.",
      "textZh": "娃娃菜竖切四瓣，保留菜芯，长时间煨时才不会散。",
      "stateNote": {
        "visual": "Each quarter shows a pale yellow heart with nested leaves, cut face flat",
        "visualZh": "每瓣露出淡黄菜芯与层叠叶片，切面平整",
        "signal": "Lift a quarter by the core — it stays in one piece",
        "signalZh": "拎起菜芯整瓣不散"
      }
    },
    {
      "text": "Heat the oil in a wok over medium-high and fry the smashed garlic until the cut faces are golden, then add the ginger, dried shrimp and ham or bacon.",
      "textZh": "锅中大火热油，把拍碎的蒜瓣煎到切面金黄，再下姜片、虾米和火腿或培根。",
      "stateNote": {
        "visual": "Garlic cut faces are deep gold, shrimp are reddish and fragrant, ham fat turns translucent",
        "visualZh": "蒜瓣切面深金，虾米泛红出香，火腿肥肉部分转透明",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium-high",
        "signal": "The kitchen smells of toasted garlic and seafood at the same time",
        "signalZh": "厨房同时飘出焦蒜香与海鲜香"
      },
      "tip": "Frying the garlic whole and golden is what separates 上汤 from plain boiled cabbage.",
      "tipZh": "整粒蒜煎到金黄，正是上汤和清水煮白菜的区别。"
    },
    {
      "text": "Pour in the chicken stock and the shrimp soaking liquid, add the soy sauce and white pepper, and bring to a boil.",
      "textZh": "倒入鸡高汤和泡虾水，加生抽和白胡椒粉，烧开。",
      "stateNote": {
        "visual": "Broth turns a pale gold and rolls in a full boil; a thin layer of aromatic oil floats on top",
        "visualZh": "汤呈淡金、完全沸腾，表面浮着一层薄薄香油",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Taste the broth — it should be savoury enough to drink on its own",
        "signalZh": "尝一口汤——应该鲜到可以直接喝"
      }
    },
    {
      "text": "Lay the cabbage quarters in the broth in a single layer, cover, and simmer over medium-low heat for 8 minutes.",
      "textZh": "娃娃菜平铺一层放入汤中，加盖中小火煨 8 分钟。",
      "stateNote": {
        "visual": "Leaves turn translucent and silky, cores look glassy; the broth reduces slightly",
        "visualZh": "叶片转半透明绵滑，菜芯呈玻璃状，汤汁略收",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium-low",
        "signal": "A chopstick slides through the thickest core with no resistance",
        "signalZh": "筷子穿过最厚的菜芯毫无阻力"
      },
      "tip": "Keep the heat gentle. A hard boil knocks the leaves apart and clouds the broth.",
      "tipZh": "火要小。大滚会把叶片冲散、汤也变浑。"
    },
    {
      "text": "Remove the cabbage to a deep plate. Thicken the remaining broth with the cornstarch slurry, then pour it over the cabbage.",
      "textZh": "把娃娃菜夹进深盘，剩下的汤用水淀粉勾薄芡后浇在菜上。",
      "stateNote": {
        "visual": "Broth turns glossy and just coats a spoon; cabbage sits half-submerged and shiny",
        "visualZh": "汤变油亮刚能挂勺，娃娃菜半浸在汤中发亮",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium",
        "signal": "Bubbles at the edge are slow and thick",
        "signalZh": "边缘气泡慢而稠"
      }
    }
  ],
  "tips": [
    "Vegetarian? Skip the ham and shrimp, use dried shiitake soaking liquid plus a piece of kombu for the stock.",
    "The broth should be slightly over-seasoned on its own — the bland cabbage will dilute it.",
    "Add a handful of glass noodles in the last 3 minutes for a complete one-bowl meal."
  ],
  "tipsZh": [
    "吃素？省掉火腿和虾米，用干香菇泡水加一片昆布做汤底。",
    "汤本身要略重口一点——清淡的娃娃菜会把它稀释。",
    "最后 3 分钟加一把粉丝，就是完整的一碗餐。"
  ],
  "ingredientSubs": [
    {
      "from": "dried shrimp",
      "fromZh": "虾米",
      "to": "dried shiitake soaking liquid + 1/4 tsp salt",
      "toZh": "干香菇泡水 + 1/4 茶匙盐",
      "ratio": "1 tbsp shrimp ≈ 3 tbsp liquid",
      "note": "Vegetarian path; the umami shifts from seafood to earthy, which suits cabbage well.",
      "noteZh": "素食方案；鲜味从海鲜转为菌菇的土香，和白菜很搭。"
    },
    {
      "from": "Chinese cured ham",
      "fromZh": "金华火腿",
      "to": "bacon or prosciutto ends",
      "toZh": "培根或帕尔马火腿边角",
      "ratio": "1:1 by weight",
      "note": "Bacon is smokier and saltier, so skip the added soy sauce if using it.",
      "noteZh": "培根烟熏味和咸度更重，用了就不再额外加生抽。"
    }
  ],
  "relatedSlugs": [
    "napa-cabbage-stewed-tofu",
    "garlic-baby-cabbage",
    "egg-drop-soup"
  ],
  "image": "/images/recipes/egg-drop-soup.webp"
};
