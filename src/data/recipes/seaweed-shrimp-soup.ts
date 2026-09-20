import type { Recipe } from "@/lib/types";

/** Seaweed and Shrimp Slippery Soup (紫菜虾滑汤) — Day 137 贝壳鲜味 */
export const seaweed_shrimp_soup: Recipe = {
  "id": "seaweed-shrimp-soup",
  "slug": "seaweed-shrimp-soup",
  "titleEn": "Seaweed and Shrimp Slippery Soup",
  "titleZh": "紫菜虾滑汤",
  "pinyin": "zǐ cài xiā huá tāng",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 3,
  "version": "family",
  "versionNote": "Light, comforting soup with slippery shrimp paste and seaweed—ready in minutes.",
  "versionNoteZh": "清淡舒适的紫菜虾滑汤——几分钟搞定。",
  "tags": [
    "30-min",
    "soup",
    "seafood",
    "healthy",
    "quick"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "This is the soup every Cantonese family makes when someone is under the weather. The slippery shrimp paste gives it body, while seaweed adds minerality.",
  "storyZh": "这是广东家庭生病时做的家常汤。虾滑带来口感，紫菜增添矿物质的鲜味。",
  "image": "/images/recipes/seaweed-shrimp-soup.webp",
  "relatedSlugs": [
    "winter-melon-coix-pork-bone-soup",
    "egg-drop-soup",
    "tomato-egg-drop-soup"
  ],
  "ingredients": [
    {
      "id": "ss-shrimp-01",
      "nameEn": "shrimp, peeled and deveined",
      "nameZh": "虾仁",
      "pinyin": "xiā",
      "amountMetric": "300 g",
      "amountUS": "about 10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ss-corn-02",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "ss-seaweed-03",
      "nameEn": "dried seaweed (laver/zicai)",
      "nameZh": "干紫菜",
      "pinyin": "zǐ cài",
      "amountMetric": "10 g",
      "amountUS": "about 0.35 oz",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "seaweed"
    },
    {
      "id": "ss-egg-04",
      "nameEn": "egg, beaten",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "1",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "ss-ginger-05",
      "nameEn": "ginger, julienned",
      "nameZh": "生姜，切丝",
      "pinyin": "shēng jiāng",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp julienned",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ss-stock-06",
      "nameEn": "chicken stock or water",
      "nameZh": "高汤或水",
      "pinyin": "gāo tāng",
      "amountMetric": "800 ml",
      "amountUS": "about 3.4 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "ss-soy-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ss-sesame-08",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Make shrimp paste: pound shrimp in a mortar until sticky, or pulse in a food processor. Mix with cornstarch, a pinch of salt, and white pepper. Chill 15 minutes.",
      "textZh": "制作虾滑：将虾仁捶打至粘手，或用料理机脉冲打碎。混合玉米淀粉、少许盐和白胡椒粉。冷藏15分钟。",
      "zhHint": "虾滑要够粘"
    },
    {
      "text": "Rehydrate seaweed in warm water for 5 minutes. Drain and tear into bite-sized pieces.",
      "textZh": "紫菜温水泡发5分钟。捞出撕成适口大小。",
      "zhHint": "泡发时间别太长"
    },
    {
      "text": "Bring stock to a boil. Add ginger julienne and seaweed. Simmer for 2 minutes.",
      "textZh": "高汤烧沸，下姜丝和紫菜。小火煮2分钟。",
      "zhHint": "先煮姜和紫菜",
      "stateNote": {
        "visual": "Seaweed unfurls and stock is bubbling",
        "visualZh": "紫菜舒展，高汤微沸",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Seaweed is soft and broth is aromatic",
        "signalZh": "紫菜软，汤有香气"
      }
    },
    {
      "text": "Using two spoons, drop shrimp paste into the simmering broth in small quenelles. Cook for 2-3 minutes until they float.",
      "textZh": "用两把勺子舀虾滑入微沸的高汤中，形成小团。煮2-3分钟至浮起。",
      "zhHint": "勺子蘸水防粘",
      "stateNote": {
        "visual": "Shrimp paste floats to surface",
        "visualZh": "虾滑浮到表面",
        "timeRef": "2-3 minutes",
        "timeRefZh": "2-3 分钟",
        "heat": "medium",
        "signal": "Shrimp paste is firm and opaque",
        "signalZh": "虾滑变硬不透明"
      }
    },
    {
      "text": "Drizzle in beaten egg slowly while stirring gently to create egg ribbons. Season with soy sauce and sesame oil. Serve hot.",
      "textZh": "缓慢倒入打散的鸡蛋，轻搅形成蛋花。调生抽和香油。趁热上桌。",
      "zhHint": "蛋花要薄",
      "stateNote": {
        "visual": "Egg forms delicate ribbons in the broth",
        "visualZh": "蛋液在高汤中形成薄纱状",
        "signal": "Serve immediately",
        "signalZh": "立刻上桌"
      }
    }
  ],
  "tips": [
    "For extra slippery texture, add a bit of wood ear mushroom to the soup.",
    "Don't boil the soup vigorously after adding egg—gentle heat keeps ribbons intact.",
    "Shrimp paste can be made ahead and chilled—just bring to room temp before cooking."
  ],
  "tipsZh": [
    "加少许木耳让口感更滑。",
    "加蛋后不要大火滚——小火保持蛋花完整。",
    "虾滑可提前做好冷藏——烹饪前恢复室温。"
  ]
};
