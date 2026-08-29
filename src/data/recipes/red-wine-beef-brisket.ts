import type { Recipe } from "@/lib/types";

/** Red Wine Beef Brisket (红酒炖牛腩) (红酒炖牛腩) — Day batch */
export const red_wine_beef_brisket: Recipe = {
  "slug": "red-wine-beef-brisket",
  "titleEn": "Red Wine Beef Brisket (红酒炖牛腩)",
  "titleZh": "红酒炖牛腩",
  "pinyin": "hóng jiǔ dùn niú ruǎn",
  "cuisine": "融合菜",
  "cuisineEn": "Fusion",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 120,
  "servings": 4,
  "version": "family",
  "versionNote": "Western technique meets Chinese brisket — the wine tenderizes and adds depth.",
  "versionNoteZh": "西式技法配中式牛腩——红酒软化肉质增添深度。",
  "tags": [
    "beef",
    "wine",
    "stew",
    "special-occasion",
    "winter"
  ],
  "dietary": [],
  "story": "Shanghai's cosmopolitan history means fusion dishes are common. This red wine beef brisket uses Chinese braising techniques with a French wine base — the result is a deeply savory, tender dish that's perfect for dinner guests.",
  "storyZh": "上海开放的历史带来融合菜常见。这道红酒炖牛腩用法式红酒做底配中式烧技法——结果是一道深咸酥烂的待客菜。",
  "ingredients": [
    {
      "id": "rwb-1",
      "nameEn": "beef brisket, 5cm chunks",
      "nameZh": "牛腩块",
      "amountMetric": "800 g",
      "amountUS": "about 1.7 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "rwb-2",
      "nameEn": "dry red wine",
      "nameZh": "干红葡萄酒",
      "amountMetric": "300 ml",
      "amountUS": "about 1.25 cups",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "rwb-3",
      "nameEn": "carrot, cut into chunks",
      "nameZh": "胡萝卜",
      "amountMetric": "2 medium",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "rwb-4",
      "nameEn": "onion, quartered",
      "nameZh": "洋葱",
      "amountMetric": "1 large",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "rwb-5",
      "nameEn": "garlic cloves, smashed",
      "nameZh": "蒜瓣",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "rwb-6",
      "nameEn": "tomato paste",
      "nameZh": "番茄膏",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "rwb-7",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "rwb-8",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 piece",
      "amountUS": "1 piece",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "rwb-9",
      "nameEn": "bay leaves",
      "nameZh": "香叶",
      "amountMetric": "2 leaves",
      "amountUS": "2 leaves",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "rwb-10",
      "nameEn": "beef broth or water",
      "nameZh": "高汤或水",
      "amountMetric": "300 ml",
      "amountUS": "about 1.25 cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Pat brisket dry, season with salt and pepper. Sear in hot oil until deeply browned on all sides. Remove.",
      "textZh": "牛腩擦干，撒盐胡椒。热油下锅四面煎至上色，捞出。",
      "zhHint": "煎肉上色",
      "stateNote": {
        "visual": "Deep brown crust forms",
        "visualZh": "形成深棕色外壳",
        "heat": "high",
        "signal": "Sizzling, no sticking",
        "signalZh": "滋滋声，不粘锅"
      }
    },
    {
      "text": "In the same pot, sauté onion, carrot, and garlic until softened. Add tomato paste, stir 1 min.",
      "textZh": "同锅炒洋葱胡萝卜蒜至软，加番茄膏炒 1 分钟。",
      "zhHint": "炒蔬菜",
      "stateNote": {
        "visual": "Vegetables caramelizing",
        "visualZh": "蔬菜开始焦糖化",
        "heat": "medium",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Pour in wine, scrape up browned bits. Add soy sauce, star anise, bay leaves, and broth.",
      "textZh": "倒红酒，刮起锅边焦香物质。加生抽、八角、香叶、高汤。",
      "zhHint": "Deglaze",
      "stateNote": {
        "visual": "Wine bubbling and reducing slightly",
        "visualZh": "红酒起泡略微收浓",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Return beef to pot. Bring to boil, reduce to low. Cover and simmer 90 min.",
      "textZh": "放回牛肉，烧开转小火盖盖炖 90 分钟。",
      "zhHint": "慢炖",
      "stateNote": {
        "visual": "Broth is dark ruby",
        "visualZh": "汤汁呈深红宝石色",
        "heat": "low",
        "timeRef": "90 minutes",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Check tenderness — beef should be fork-tender. If needed, simmer uncovered 10-15 min to thicken sauce.",
      "textZh": "检查软烂度——牛腩应 fork-tender。如需要，开盖再煮 10-15 分钟收汁。",
      "zhHint": "收汁",
      "stateNote": {
        "visual": "Sauce coats back of spoon",
        "visualZh": "酱汁挂在勺背",
        "signal": "Fork slides in easily",
        "signalZh": "叉子轻松插入"
      }
    },
    {
      "text": "Remove star anise and bay leaves. Adjust seasoning. Serve with mashed potatoes or rice.",
      "textZh": "捞出八角香叶，调味，配土豆泥或米饭食用。",
      "zhHint": "出锅"
    }
  ],
  "tips": [
    "Use a wine you'd actually drink — cheap wine makes cheap sauce.",
    "Don't skip the sear — it creates fond (browned bits) that flavors the sauce.",
    "This dish is even better the next day — flavors deepen overnight."
  ],
  "tipsZh": [
    "用能喝的酒——便宜酒做便宜 sauce。",
    "煎肉不能省——锅边的焦香物质是风味来源。",
    "隔夜更美味——风味会融合加深。"
  ],
  "relatedSlugs": [
    "tomato-beef-brisket",
    "sweet-sour-ribs",
    "hongshao-pork",
    "char-siu-pork"
  ],
  "image": "/images/recipes/red-wine-beef-brisket.webp",
  "id": "red-wine-beef-brisket"
};
