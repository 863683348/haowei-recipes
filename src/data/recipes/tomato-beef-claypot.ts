import type { Recipe } from "@/lib/types";

/** Tomato Beef Claypot (番茄牛腩煲) (番茄牛腩煲) — Day batch */
export const tomato_beef_claypot: Recipe = {
  "id": "tomato-beef-claypot",
  "slug": "tomato-beef-claypot",
  "titleEn": "Tomato Beef Claypot (番茄牛腩煲)",
  "titleZh": "番茄牛腩煲",
  "pinyin": "fān qié niú pài bāo",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 75,
  "servings": 3,
  "version": "family",
  "versionNote": "家庭砂锅版，番茄与牛腩慢炖至汤汁浓稠，比餐厅版更家常。",
  "versionNoteZh": "家庭砂锅版，番茄与牛腩慢炖至汤汁浓稠，比餐厅版更家常。",
  "tags": [
    "claypot",
    "beef",
    "tomato",
    "stew",
    "comfort-food"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "My mother's Sunday ritual was this claypot — tomatoes softened into the broth, beef brisket yielding to the fork. She'd use a heavy earthenware pot from the market, low heat for an hour, until the kitchen smelled like home.",
  "storyZh": "母亲的周日仪式就是这个砂锅——番茄在汤里化开，牛腩软到用叉就能分开。她用市集买的粗陶砂锅，小火慢炖一小时，满屋都是家的味道。",
  "ingredients": [
    {
      "id": "tbc-1",
      "nameEn": "beef brisket, 3cm cubes",
      "nameZh": "牛腩块",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "tbc-2",
      "nameEn": "ripe tomatoes, quartered",
      "nameZh": "熟番茄",
      "amountMetric": "3 large",
      "amountUS": "3 large",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tbc-3",
      "nameEn": "onion, chopped",
      "nameZh": "洋葱",
      "amountMetric": "1 medium",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tbc-4",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tbc-5",
      "nameEn": "garlic cloves, crushed",
      "nameZh": "蒜瓣",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tbc-6",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "2 pieces",
      "amountUS": "2 pieces",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "tbc-7",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "tbc-8",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Blanch beef in boiling water 3 minutes, skim foam, drain.",
      "textZh": "牛腩焯水3分钟，撇去浮沫，沥干。",
      "stateNote": {
        "visual": "Beef turns grey-brown, foam rises to surface.",
        "visualZh": "牛肉变灰褐色，浮沫浮起。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Grey foam floats — discard and rinse.",
        "signalZh": "灰色浮沫浮起——丢弃并冲洗。"
      }
    },
    {
      "text": "Sauté onion, ginger, garlic in claypot until fragrant, 2 minutes.",
      "textZh": "砂锅炒香洋葱、姜、蒜，2分钟。",
      "stateNote": {
        "visual": "Aromatics soften, edges translucent.",
        "visualZh": "香料变软，边缘半透明。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Pungent aroma fills kitchen.",
        "signalZh": "辛辣香气充满厨房。"
      }
    },
    {
      "text": "Add beef, stir 1 minute, pour in 600ml hot water.",
      "textZh": "下牛腩翻炒1分钟，冲入600毫升热水。",
      "stateNote": {
        "visual": "Beef sears lightly, water steams vigorously.",
        "visualZh": "牛肉微煎，热水剧烈蒸汽。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Sizzle is loud, not smoking.",
        "signalZh": "滋滋声大，不冒烟。"
      }
    },
    {
      "text": "Bring to boil, skim foam, add tomatoes and star anise.",
      "textZh": "大火烧开，撇去浮沫，加番茄和八角。",
      "stateNote": {
        "visual": "Broth bubbles actively, foam rises.",
        "visualZh": "汤汁沸腾，浮沫涌起。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Rolling boil, white foam on surface.",
        "signalZh": "滚沸，表面白色浮沫。"
      }
    },
    {
      "text": "Reduce to low heat, cover and simmer 45 minutes.",
      "textZh": "转小火，盖盖焖炖45分钟。",
      "stateNote": {
        "visual": "Broth simmers gently, tomatoes soften.",
        "visualZh": "汤汁微滚，番茄变软。",
        "timeRef": "45 minutes",
        "timeRefZh": "45 分钟",
        "heat": "low",
        "signal": "Steam escapes steadily from lid edge.",
        "signalZh": "蒸汽匀速自盖缝逸出。"
      }
    },
    {
      "text": "Add soy sauce and wine, simmer 10 more minutes until beef is tender.",
      "textZh": "加生抽和绍兴酒，再炖10分钟至牛肉软烂。",
      "stateNote": {
        "visual": "Broth reduces slightly, beef yields to fork.",
        "visualZh": "汤汁略收，牛肉叉入即入。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "Fork slides in with no resistance.",
        "signalZh": "叉子轻松插入无阻力。"
      }
    }
  ],
  "tips": [
    "Use a heavy-bottomed claypot for even heat distribution.",
    "Add boiling water after searing to keep broth clear."
  ],
  "tipsZh": [
    "用厚底砂锅受热更均匀。",
    "煎后加开水，汤色更清。"
  ],
  "relatedSlugs": [
    "tomato-beef-brisket",
    "sour-soup-beef"
  ],
  "image": "/images/recipes/tomato-beef-claypot.webp"
};
