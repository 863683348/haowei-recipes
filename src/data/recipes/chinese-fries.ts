import type { Recipe } from "@/lib/types";

/** Chinese-Style French Fries (中式炸薯条) (中式炸薯条) — Day batch */
export const chinese_fries: Recipe = {
  "id": "chinese-fries",
  "slug": "chinese-fries",
  "titleEn": "Chinese-Style French Fries (中式炸薯条)",
  "titleZh": "中式炸薯条",
  "pinyin": "zhōng shì zhà shǔ tiáo",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "北方",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭版双炸法：先低温熟透，再高温酥脆；餐馆版有时用专用薯条机。",
  "versionNoteZh": "家庭版双炸法：先低温熟透，再高温酥脆；餐馆版有时用专用薯条机。",
  "tags": [
    "fried",
    "side",
    "snack",
    "quick",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Chinese french fries are different from Western ones—often dusted with cumin and chili, served as street snack rather than side dish. My friend in Xi'an showed me this version, and they beat McDonald's any day.",
  "storyZh": "中式薯条和西式不同——常撒孜然辣椒，是街边小食而非配菜。西安的朋友教我这道，比麦当劳还好吃。",
  "ingredients": [
    {
      "id": "cf-01",
      "nameEn": "large potatoes",
      "nameZh": "大土豆",
      "amountMetric": "4 large",
      "amountUS": "4 large",
      "category": "produce",
      "pantry": "local",
      "termKey": "potato"
    },
    {
      "id": "cf-02",
      "nameEn": "neutral oil (for frying)",
      "nameZh": "中性油（炸用）",
      "amountMetric": "1 liter",
      "amountUS": "4 cups",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cf-03",
      "nameEn": "cumin powder",
      "nameZh": "孜然粉",
      "amountMetric": "2 tsp",
      "amountUS": "2 tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "cf-04",
      "nameEn": "chili powder",
      "nameZh": "辣椒粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "cf-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cf-06",
      "nameEn": "white vinegar",
      "nameZh": "白醋",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Peel potatoes, cut into 1cm sticks. Soak in cold water 30 minutes, then dry thoroughly.",
      "textZh": "土豆去皮切1厘米条，冷水浸泡30分钟，彻底擦干。",
      "stateNote": {
        "visual": "Water runs clear, potatoes look matte",
        "visualZh": "水变清，土豆表面哑光",
        "signal": "No more cloudy water when swishing",
        "signalZh": "晃动不再浑浊"
      }
    },
    {
      "text": "Heat oil to 140°C, fry potatoes 5-6 minutes until soft but not colored. Remove and drain.",
      "textZh": "油温140°C，炸5-6分钟至软但不上色，捞出沥油。",
      "stateNote": {
        "visual": "Potatoes soften, edges slightly translucent",
        "visualZh": "土豆变软，边缘微透",
        "signal": "Fork pierces easily with no resistance",
        "signalZh": "叉子轻松穿透"
      }
    },
    {
      "text": "Increase oil to 190°C, fry potatoes again 2-3 minutes until golden and crispy.",
      "textZh": "油温升至190°C，复炸2-3分钟至金黄酥脆。",
      "stateNote": {
        "visual": "Color deepens to golden, bubbles intensify then subside",
        "visualZh": "颜色加深金黄，气泡剧烈后减少",
        "signal": "Sounds sharp and crisp when tapped",
        "signalZh": "轻敲声音清脆"
      }
    },
    {
      "text": "Toss immediately with cumin, chili, salt, and a splash of vinegar. Serve hot.",
      "textZh": "立刻加孜然、辣椒粉、盐、几滴醋拌匀，趁热吃。",
      "stateNote": {
        "visual": "Seasoning adheres to crispy surface, steam rises",
        "visualZh": "调料粘附脆壳，热气升腾",
        "signal": "Crunchy exterior, fluffy interior",
        "signalZh": "外脆里糯"
      }
    },
    {
      "text": "Prepare serving bowls with extra cumin, chili powder, and salt for table-side seasoning.",
      "textZh": "准备调味碗：额外孜然、辣椒粉、盐，供桌边添加。",
      "stateNote": {
        "visual": "Seasoning bowls arranged",
        "visualZh": "调味碗就位",
        "signal": "Each seasoning is visible and accessible",
        "signalZh": "每样调料可见可取"
      }
    }
  ],
  "tips": [
    "Double-frying is essential—first cook through, second creates crust",
    "Dry potatoes completely before frying—water = steam = soggy fries",
    "Vinegar splash adds authentic street-food tang"
  ],
  "tipsZh": [
    "双炸是关键——第一炸熟透，第二炸酥脆",
    "炸前土豆必须完全干燥——水=蒸汽=软薯条",
    "醋是街头风味的灵魂"
  ],
  "relatedSlugs": [
    "homestyle-spring-rolls",
    "fried-oyster-mushrooms",
    "fried-eggplant-box"
  ],
  "image": "/images/recipes/air-fryer-chicken-wings.webp"
};
