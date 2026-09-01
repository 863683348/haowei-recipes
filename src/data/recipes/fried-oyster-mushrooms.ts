import type { Recipe } from "@/lib/types";

/** Crispy Fried Oyster Mushrooms (炸平菇) (炸平菇) — Day batch */
export const fried_oyster_mushrooms: Recipe = {
  "id": "fried-oyster-mushrooms",
  "slug": "fried-oyster-mushrooms",
  "titleEn": "Crispy Fried Oyster Mushrooms (炸平菇)",
  "titleZh": "炸平菇",
  "pinyin": "zhà píng gū",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "北方",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭版直接炸，无需面糊；餐馆版有时会挂薄糊追求更脆口感。",
  "versionNoteZh": "家庭版直接炸，无需面糊；餐馆版有时会挂薄糊追求更脆口感。",
  "tags": [
    "fried",
    "vegetarian",
    "quick",
    "snack"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Fried oyster mushrooms are the simplest and most addictive vegetable snack—crispy outside, meaty inside, with zero effort. My neighbor in Beijing would make these with a dusting of cumin and chili powder, calling them 'vegetarian chicken feet'.",
  "storyZh": "炸平菇是最简单也最上瘾的蔬菜小食——外酥里嫩，零难度。北京邻居撒孜然辣椒粉，叫它'素鸡爪'。",
  "ingredients": [
    {
      "id": "fo-01",
      "nameEn": "oyster mushrooms",
      "nameZh": "平菇",
      "amountMetric": "400 g",
      "amountUS": "about 1 lb",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "fo-02",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "40 g",
      "amountUS": "1/3 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "fo-03",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "staple",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "fo-04",
      "nameEn": "garlic powder",
      "nameZh": "蒜粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "fo-05",
      "nameEn": "cumin powder",
      "nameZh": "孜然粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "fo-06",
      "nameEn": "chili flakes",
      "nameZh": "辣椒碎",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "chili-flakes"
    },
    {
      "id": "fo-07",
      "nameEn": "neutral oil (for frying)",
      "nameZh": "中性油（炸用）",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Tear mushrooms into bite-sized pieces, wash and squeeze dry thoroughly.",
      "textZh": "平菇撕成块，洗净后用力挤干水分。",
      "stateNote": {
        "visual": "Mushrooms look shriveled, no water drips",
        "visualZh": "蘑菇收缩，无水滴出",
        "signal": "Heavy squeeze releases minimal liquid",
        "signalZh": "用力捏几乎不出水"
      }
    },
    {
      "text": "Toss mushrooms with flour, cornstarch, garlic powder, cumin, and chili flakes until evenly coated.",
      "textZh": "加面粉、淀粉、蒜粉、孜然、辣椒碎拌匀，均匀裹粉。",
      "stateNote": {
        "visual": "Each piece dusted white, no clumps",
        "visualZh": "每片均匀裹白粉，无结块",
        "signal": "Powder adheres without falling off",
        "signalZh": "粉能粘住不掉落"
      }
    },
    {
      "text": "Heat oil to 180°C, fry mushrooms in batches 2-3 minutes until golden and crispy.",
      "textZh": "油温180°C，分批炸2-3分钟至金黄酥脆。",
      "stateNote": {
        "visual": "Mushrooms puff, turn golden, bubbles subside",
        "visualZh": "蘑菇膨胀，金黄，气泡减少",
        "signal": "Sound changes from violent crackle to gentle fizz",
        "signalZh": "油炸声从剧烈变柔和"
      }
    },
    {
      "text": "Drain immediately, sprinkle with extra cumin and salt while hot.",
      "textZh": "立刻沥油，趁热再撒孜然和盐。",
      "stateNote": {
        "visual": "Steam rises, crust crackles",
        "visualZh": "热气腾腾，外壳咔嚓响",
        "signal": "Crunchy when bitten, not chewy",
        "signalZh": "咬下嘎嘣脆，不韌"
      }
    },
    {
      "text": "Prepare serving plates with newspaper or parchment for authentic street-food presentation.",
      "textZh": "准备上桌盘子，铺报纸或烘焙纸，呈现街头风味。",
      "stateNote": {
        "visual": "Plates ready, seasoning within reach",
        "visualZh": "盘子就位，调料在手边",
        "signal": "All components arranged",
        "signalZh": "所有组件就位"
      }
    }
  ],
  "tips": [
    "Mushrooms must be completely dry—wet mushrooms = soggy coating",
    "Don't overcrowd the pan—fry in batches for even cooking",
    "Add a pinch of MSG if available—authentic street vendors always do"
  ],
  "tipsZh": [
    "蘑菇必须完全干燥——有水会让外皮软塌",
    "不要一次性炸太多——分批炸受热均匀",
    "有味精可以加一撮——街头摊贩必加"
  ],
  "relatedSlugs": [
    "fried-eggplant-box",
    "fried-lotus-root-box",
    "homestyle-spring-rolls"
  ],
  "image": "/images/recipes/garlic-roasted-eggplant.webp"
};
