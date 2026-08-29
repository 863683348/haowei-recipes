import type { Recipe } from "@/lib/types";

/** Curry Beef Brisket (咖喱牛腩) (咖喱牛腩) — Day batch */
export const curry_beef_brisket: Recipe = {
  "slug": "curry-beef-brisket",
  "titleEn": "Curry Beef Brisket (咖喱牛腩)",
  "titleZh": "咖喱牛腩",
  "pinyin": "gā lí niú ruǎn",
  "cuisine": "融合菜",
  "cuisineEn": "Fusion",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Cantonese-style curry uses more coconut milk and milder curry powder than Indian versions.",
  "versionNoteZh": "粤式咖喱用更多椰浆、更温和的咖喱粉，不同于印度版本。",
  "tags": [
    "beef",
    "curry",
    "stew",
    "coconut",
    "aromatic"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Cantonese curry beef is a beloved dish with Portuguese influence — the colonial history of Macau and Guangzhou brought curry to the region. This version uses mild curry powder and coconut milk for a creamy, warming stew.",
  "storyZh": "粤式咖喱牛腩是深受喜爱的融合菜——澳门和广州的殖民历史把咖喱带到了这个地区。这道用温和咖喱粉和椰浆做出 creamy 暖身炖菜。",
  "ingredients": [
    {
      "id": "cb-1",
      "nameEn": "beef brisket, 4cm chunks",
      "nameZh": "牛腩块",
      "amountMetric": "600 g",
      "amountUS": "about 1.3 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "cb-2",
      "nameEn": "curry powder (mild)",
      "nameZh": "咖喱粉",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "curry-powder"
    },
    {
      "id": "cb-3",
      "nameEn": "onion, chopped",
      "nameZh": "洋葱",
      "amountMetric": "1 medium",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cb-4",
      "nameEn": "garlic cloves, minced",
      "nameZh": "蒜末",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cb-5",
      "nameEn": "ginger, minced",
      "nameZh": "姜末",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cb-6",
      "nameEn": "coconut milk",
      "nameZh": "椰浆",
      "amountMetric": "400 ml",
      "amountUS": "about 1.6 cups",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "cb-7",
      "nameEn": "potato, cut into chunks",
      "nameZh": "土豆",
      "amountMetric": "2 medium",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cb-8",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cb-9",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cb-10",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "to taste",
      "amountUS": "to taste",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Blanch brisket in cold water, skim foam, drain and rinse.",
      "textZh": "牛腩冷水下锅，烧开撇沫，捞出冲洗。",
      "zhHint": "焯水",
      "stateNote": {
        "visual": "Gray foam",
        "visualZh": "灰色浮沫",
        "signal": "Water runs clear",
        "signalZh": "水变清"
      }
    },
    {
      "text": "Heat oil, fry onion until translucent. Add garlic, ginger, curry powder. Stir 30s until fragrant.",
      "textZh": "热油炒洋葱至透明，下蒜姜末和咖喱粉，炒 30 秒出香。",
      "zhHint": "爆香",
      "stateNote": {
        "visual": "Curry powder blooms in oil",
        "visualZh": "咖喱粉在油中散开",
        "heat": "medium",
        "signal": "Aromatic",
        "signalZh": "香气四溢"
      }
    },
    {
      "text": "Add brisket, stir to coat. Pour in soy sauce and coconut milk.",
      "textZh": "下牛腩翻炒裹匀，倒入生抽和椰浆。",
      "zhHint": "混合",
      "stateNote": {
        "visual": "Sauce turns golden-orange",
        "visualZh": "酱汁呈金橙色",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Add potatoes and enough water to just cover. Bring to boil, reduce to low. Cover and simmer 60 min.",
      "textZh": "加土豆和适量水没过食材，烧开转小火盖盖炖 60 分钟。",
      "zhHint": "炖煮",
      "stateNote": {
        "visual": "Sauce is bubbling gently",
        "visualZh": "酱汁微微冒泡",
        "heat": "low",
        "timeRef": "60 minutes",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Potatoes should be tender and sauce thickened. Season with salt.",
      "textZh": "土豆应软烂，酱汁浓稠。盐调味。",
      "zhHint": "收汁",
      "stateNote": {
        "visual": "Sauce coats back of spoon",
        "visualZh": "酱汁挂在勺背",
        "signal": "Potatoes pierce easily",
        "signalZh": "土豆能轻松插入"
      }
    },
    {
      "text": "Serve over steamed rice. Garnish with cilantro if desired.",
      "textZh": "配米饭食用，可撒香菜。",
      "zhHint": "出锅"
    }
  ],
  "tips": [
    "Use full-fat coconut milk for best texture.",
    "Potatoes absorb curry flavor — they're often the first to go.",
    "Adjust curry powder to taste — start with less and add more."
  ],
  "tipsZh": [
    "用全脂椰浆口感最好。",
    "土豆吸咖喱味——往往最先光盘。",
    "咖喱粉按口味调整——先少后加。"
  ],
  "relatedSlugs": [
    "tomato-beef-brisket",
    "chicken-mushroom-stew",
    "potato-beef-stew",
    "curry-chicken"
  ],
  "image": "/images/recipes/curry-beef-brisket.webp",
  "id": "curry-beef-brisket"
};
