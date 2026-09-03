import type { Recipe } from "@/lib/types";

/** Air Fryer Chinese Fries (空气炸锅中式薯条) — Day batch */
export const air_fryer_chinese_fries: Recipe = {
  "id": "air-fryer-chinese-fries",
  "slug": "air-fryer-chinese-fries",
  "titleEn": "Air Fryer Chinese Fries",
  "titleZh": "空气炸锅中式薯条",
  "pinyin": "kōng qì zhá guō zhōng shì shǔ tiáo",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "北方",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses air fryer instead of deep-frying—less oil, same street-food crunch with cumin-chili dusting.",
  "versionNoteZh": "家常版用空气炸锅代替油炸，少油却同样酥脆，配上孜然辣椒面。",
  "tags": [
    "30-min",
    "weeknight",
    "air-fryer",
    "snack",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Street vendors in Beijing fry these in bubbling oil, but my air-fryer version gets the same cumin-spiked crunch with a fraction of the oil. The trick is soaking the potatoes first to remove starch.",
  "storyZh": "北京街头小贩在滚油里炸薯条，但我的空气炸锅版本用更少的油做出同样的孜然酥脆。秘诀是先浸泡土豆去除淀粉。",
  "ingredients": [
    {
      "id": "acf-01",
      "nameEn": "large russet potatoes",
      "nameZh": "大土豆",
      "amountMetric": "2 large (500 g)",
      "amountUS": "2 large (17.6 oz)",
      "category": "produce",
      "pantry": "local",
      "termKey": "potato"
    },
    {
      "id": "acf-02",
      "nameEn": "neutral oil",
      "nameZh": "中性油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "acf-03",
      "nameEn": "cumin powder",
      "nameZh": "孜然粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "acf-04",
      "nameEn": "chili flakes",
      "nameZh": "辣椒碎",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "chili-flakes"
    },
    {
      "id": "acf-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "acf-06",
      "nameEn": "garlic powder",
      "nameZh": "蒜粉",
      "amountMetric": "¼ tsp",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut potatoes into ¼-inch thick sticks about 3 inches long.",
      "textZh": "土豆切成¼英寸粗、3英寸长的条。",
      "stateNote": {
        "visual": "Sticks are uniform in thickness",
        "visualZh": "薯条厚度均匀",
        "signal": "No wedge thicker than ¼ inch"
      }
    },
    {
      "text": "Soak potato sticks in cold water 10 minutes to remove surface starch.",
      "textZh": "薯条冷水浸泡10分钟去除表面淀粉。",
      "stateNote": {
        "visual": "Water turns cloudy white from starch",
        "visualZh": "水变浑浊呈白色",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Water runs clear after first rinse"
      }
    },
    {
      "text": "Drain and pat potatoes completely dry with paper towels—any moisture creates steam instead of crisp.",
      "textZh": "沥干后用厨房纸彻底擦干土豆——任何水分都会产生蒸汽而非酥脆。",
      "stateNote": {
        "visual": "Potato surface looks matte, no wet sheen",
        "visualZh": "土豆表面呈哑光，无湿亮感",
        "signal": "Paper towels show no moisture"
      }
    },
    {
      "text": "Toss dried potato sticks with neutral oil until evenly coated.",
      "textZh": "干燥的薯条与中性油拌匀至均匀裹上。",
      "stateNote": {
        "visual": "Each stick glistens with thin oil film",
        "visualZh": "每根薯条泛薄油光",
        "signal": "No dry spots visible"
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
    }
  ],
  "tips": [
    "Soaking removes starch for crispier results",
    "Dry potatoes thoroughly—water = steam = soggy fries",
    "Shake basket every 4 minutes for even cooking"
  ],
  "tipsZh": [
    "浸泡去除淀粉更酥脆",
    "土豆必须彻底干燥——水会产生蒸汽",
    "每4分钟摇晃炸篮确保均匀"
  ],
  "relatedSlugs": [
    "chinese-fries",
    "air-fryer-chicken-wings",
    "dry-pot-potato-slices"
  ],
  "image": "/images/recipes/chinese-fries.webp"
};
