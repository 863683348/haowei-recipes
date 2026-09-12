import type { Recipe } from "@/lib/types";

/** Shrimp Paste Tofu Pot (虾滑豆腐) — Day batch */
export const shrimp_tofu_pot: Recipe = {
  "id": "shrimp-tofu-pot",
  "slug": "shrimp-tofu-pot",
  "titleEn": "Shrimp Paste Tofu Pot",
  "titleZh": "虾滑豆腐",
  "pinyin": "xiā huá dòu fu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Dim sum style delicate pot.",
  "versionNoteZh": "点心风格精致小煲。",
  "tags": [
    "30-min",
    "healthy",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "Dim sum houses serve this delicate pot with hand-pounded shrimp paste.",
  "storyZh": "茶楼的精致小煲——手打虾滑口感弹牙。",
  "ingredients": [
    {
      "id": "st-01",
      "nameEn": "shrimp paste",
      "nameZh": "虾滑",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "st-02",
      "nameEn": "silken tofu",
      "nameZh": "嫩豆腐",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "st-03",
      "nameEn": "chicken stock",
      "nameZh": "高汤",
      "amountMetric": "400 ml",
      "amountUS": "1.7 cups",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "st-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Form shrimp paste into small balls.",
      "textZh": "虾滑搓成小丸子。",
      "stateNote": {
        "visual": "Smooth paste",
        "visualZh": "虾滑细腻",
        "signal": "Ready"
      }
    },
    {
      "text": "Bring stock to gentle boil.",
      "textZh": "高汤小火烧开。",
      "stateNote": {
        "visual": "Gentle bubble",
        "visualZh": "微沸",
        "heat": "medium",
        "signal": "Simmering"
      }
    },
    {
      "text": "Add tofu cubes and cook 2 minutes.",
      "textZh": "下豆腐块煮2分钟。",
      "stateNote": {
        "visual": "Tofu heated",
        "visualZh": "豆腐热透",
        "heat": "medium",
        "timeRef": "2 minutes",
        "signal": "Hot"
      }
    },
    {
      "text": "Drop shrimp paste balls into stock.",
      "textZh": "下虾滑丸子。",
      "stateNote": {
        "visual": "Prawns floating",
        "visualZh": "虾丸浮起",
        "signal": "Cooking"
      }
    },
    {
      "text": "Cook 3 minutes until prawns are opaque.",
      "textZh": "煮3分钟至虾滑熟透。",
      "stateNote": {
        "visual": "Prawns opaque",
        "visualZh": "虾肉变白",
        "heat": "medium",
        "timeRef": "3 minutes",
        "signal": "Cooked"
      }
    }
  ],
  "tips": [
    "Use day-old tofu for cleaner cuts.",
    "Don't boil hard after adding shrimp paste."
  ],
  "tipsZh": [
    "用隔夜豆腐切面更整齐。",
    "虾滑下锅后别大火滚。"
  ],
  "relatedSlugs": [
    "red-braised-prawns",
    "garlic-steamed-prawns"
  ],
  "image": "/images/recipes/shrimp-tofu-pot.webp"
};
