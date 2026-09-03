import type { Recipe } from "@/lib/types";

/** Air Fryer Sweet Potato Wedges (空气炸锅烤红薯块) — Day batch */
export const air_fryer_sweet_potato_wedges: Recipe = {
  "id": "air-fryer-sweet-potato-wedges",
  "slug": "air-fryer-sweet-potato-wedges",
  "titleEn": "Air Fryer Sweet Potato Wedges",
  "titleZh": "空气炸锅烤红薯块",
  "pinyin": "kōng qì zhá guō kǎo hóng shǔ kuài",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "北方",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version keeps skins on for fiber—restaurant version sometimes peels for softer texture.",
  "versionNoteZh": "家常版保留薯皮增加纤维；餐馆版有时去皮追求更软口感。",
  "tags": [
    "30-min",
    "weeknight",
    "air-fryer",
    "vegan",
    "gluten-free"
  ],
  "dietary": [
    "vegan",
    "gluten-free"
  ],
  "story": "Sweet potatoes are a humble winter staple across northern China. Air-frying them brings out natural caramelization without the heavy oil of deep-frying.",
  "storyZh": "红薯是北方冬季的家常作物。空气炸锅能激发其自然焦糖化，无需深炸的重油。",
  "ingredients": [
    {
      "id": "asw-01",
      "nameEn": "sweet potatoes",
      "nameZh": "红薯",
      "amountMetric": "2 medium (400 g)",
      "amountUS": "2 medium (14.1 oz)",
      "category": "produce",
      "pantry": "local",
      "termKey": "sweet-potato"
    },
    {
      "id": "asw-02",
      "nameEn": "olive oil",
      "nameZh": "橄榄油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "asw-03",
      "nameEn": "cinnamon",
      "nameZh": "肉桂粉",
      "amountMetric": "¼ tsp",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "asw-04",
      "nameEn": "paprika",
      "nameZh": "红椒粉",
      "amountMetric": "¼ tsp",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "asw-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Scrub sweet potatoes clean, cut each into 8 wedges. Leave skins on for extra fiber and flavor.",
      "textZh": "红薯 scrub 洗净，每个切成8块楔形。保留薯皮增加纤维和风味。",
      "stateNote": {
        "visual": "Wedges have uniform thickness about ¾ inch",
        "visualZh": "薯块厚度均匀约¾英寸",
        "signal": "No wedge thinner than ¾ inch"
      }
    },
    {
      "text": "Transfer wedges to a bowl. Drizzle olive oil, sprinkle cinnamon, paprika, and salt. Toss until evenly coated.",
      "textZh": "薯块入碗，淋橄榄油，撒肉桂粉、红椒粉、盐，拌匀至均匀裹上。",
      "stateNote": {
        "visual": "Wedges glisten with thin oil coating",
        "visualZh": "薯块泛薄油光",
        "signal": "No dry patches visible"
      }
    },
    {
      "text": "Preheat air fryer to 200°C (390°F) for 3 minutes.",
      "textZh": "空气炸锅预热至200°C（390°F），3分钟。",
      "stateNote": {
        "visual": "Heating element glows faintly orange",
        "visualZh": "发热管泛淡橙色微光",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Fan runs steadily, interior hot to hand held 10cm away"
      }
    },
    {
      "text": "Check doneness and adjust cooking time as needed.",
      "textZh": "检查熟度并根据需要调整烹饪时间。",
      "stateNote": {
        "visual": "Food is cooked through with desired texture",
        "visualZh": "食物完全熟透，质地符合预期",
        "signal": "Internal temperature or visual cue confirms doneness"
      }
    },
    {
      "text": "Transfer to serving plate. Garnish and serve immediately while hot.",
      "textZh": "移至餐盘，装饰后立即热食。",
      "stateNote": {
        "visual": "Dish is steaming and appetizing",
        "visualZh": "菜品热气腾腾，食欲诱人",
        "signal": "Aroma is prominent and inviting"
      }
    }
  ],
  "tips": [
    "Don't overcrowd the basket—steam = soggy",
    "Shake basket every 5 minutes",
    "Cinnamon pairs well with natural sweetness"
  ],
  "tipsZh": [
    "不要 overcrowd 炸篮——蒸汽=软糯",
    "每5分钟摇晃炸篮",
    "肉桂与天然甜味很搭"
  ],
  "relatedSlugs": [
    "air-fryer-chicken-wings",
    "baked-sweet-potato-with-honey"
  ],
  "image": "/images/recipes/dry-pot-potato-slices.webp"
};
