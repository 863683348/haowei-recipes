import type { Recipe } from "@/lib/types";

/** Candied Hawthorn (糖葫芦) (糖葫芦) — Day batch */
export const tanghulu: Recipe = {
  "titleEn": "Candied Hawthorn (糖葫芦)",
  "titleZh": "糖葫芦",
  "pinyin": "táng hú lu",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Snack",
  "region": "北京",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 4,
  "version": "family",
  "versionNote": "Classic Beijing winter street dessert",
  "versionNoteZh": "经典北京冬日街头甜点",
  "tags": [
    "dessert",
    "winter",
    "traditional",
    "festival"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "The quintessential Chinese winter street snack, candied hawthorn features tart berries encased in a glassy sugar shell. Beijing's frozen streets once saw vendors calling out from wheelbarrows, selling these ruby-red treats on bamboo skewers.",
  "storyZh": "中国冬日最具代表性的街头小吃，山楂裹着晶莹的糖壳，酸甜爽口。老北京的冰天雪地里，小贩推着板车叫卖，竹签串起的红宝石串儿是孩子们的冬日记忆。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "Fresh hawthorn berries",
      "nameZh": "新鲜山楂",
      "amountMetric": "500g",
      "amountUS": "1.1 lbs",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "2",
      "nameEn": "White sugar",
      "nameZh": "白砂糖",
      "amountMetric": "200g",
      "amountUS": "1 cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "3",
      "nameEn": "Water",
      "nameZh": "清水",
      "amountMetric": "100ml",
      "amountUS": "1/2 cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Bamboo skewers",
      "nameZh": "竹签",
      "amountMetric": "10-12 pcs",
      "amountUS": "10-12 pcs",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Wash hawthorn berries, remove stems and cores, pat dry completely.",
      "textZh": "山楂洗净，去蒂去核，用厨房纸彻底吸干表面水分。",
      "zhHint": "表面不能有生水，否则糖浆挂不住",
      "stateNote": {
        "visual": "clean, dry berries",
        "signal": "ready to skewer"
      }
    },
    {
      "text": "Thread 3-5 berries onto each skewer, arranging neatly.",
      "textZh": "每根竹签穿3-5颗山楂，排列整齐。",
      "stateNote": {
        "visual": "berries evenly spaced on skewers",
        "signal": "skewered"
      }
    },
    {
      "text": "Combine sugar and water in a heavy pan, heat to 150°C without stirring.",
      "textZh": "白砂糖和清水放入厚底锅中，中火加热至150度，期间不要搅拌。",
      "stateNote": {
        "visual": "syrup turning amber",
        "signal": "150°C candy stage"
      },
      "tip": "用糖浆测试：滴入冷水成硬球即到位"
    },
    {
      "text": "Quickly dip each skewer into the hot syrup, rotating to coat evenly.",
      "textZh": "将串好的山楂快速浸入糖浆中，迅速旋转裹匀。",
      "zhHint": "动作要快，糖浆冷却后会变硬",
      "stateNote": {
        "visual": "glossy glassy coating forming",
        "signal": "1-2 seconds per skewer"
      }
    },
    {
      "text": "Place on oiled parchment to set, about 2 minutes until shell is hard and crisp.",
      "textZh": "放在刷油的油纸上晾凉，约2分钟糖壳变硬即可。",
      "stateNote": {
        "visual": "hard transparent shell",
        "signal": "crack when bitten"
      }
    }
  ],
  "tips": [
    "Sugar temperature is critical — use a candy thermometer",
    "Alternative fruits: strawberries, kiwi, or grapes work too",
    "Add sesame seeds to syrup for extra crunch and visual appeal"
  ],
  "tipsZh": [
    "糖浆温度是关键，建议用温度计",
    "可选替代水果：草莓、猕猴桃或葡萄",
    "糖浆中加入芝麻增加口感和视觉效果"
  ],
  "relatedSlugs": [
    "egg-puffs-day88-5",
    "malatang-day88-9"
  ],
  "image": "/images/recipes/tanghulu-day88.webp",
  "slug": "tanghulu",
  "id": "tanghulu"
};
