import type { Recipe } from "@/lib/types";

/** Yam and Pork Rib Soup | Chinese Shan Yao Pai Gu Tang (山药排骨汤) — Day batch */
export const yam_pork_rib_soup: Recipe = {
  "slug": "yam-pork-rib-soup",
  "id": "yam-pork-rib-soup",
  "titleEn": "Yam and Pork Rib Soup | Chinese Shan Yao Pai Gu Tang",
  "titleZh": "山药排骨汤",
  "pinyin": "shān yáo pái gǔ tāng",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "National",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Nourishing winter soup with slippery yam and tender ribs.",
  "versionNoteZh": "冬季滋补汤品，山药滑糯，排骨软烂。",
  "tags": [
    "soup",
    "winter",
    "nourishing"
  ],
  "dietary": [
    "none"
  ],
  "story": "Shan yao (Chinese yam) is prized in Chinese cooking for its nourishing properties. This clear soup is gentle, comforting, and perfect for cold winters.",
  "storyZh": "山药在中医里被认为有滋补功效。这道清汤温和滋补，是寒冷冬季的完美选择。",
  "ingredients": [
    {
      "id": "ys-01",
      "nameEn": "pork ribs",
      "nameZh": "排骨",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-ribs"
    },
    {
      "id": "ys-02",
      "nameEn": "Chinese yam",
      "nameZh": "山药",
      "amountMetric": "300 g",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ys-03",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ys-04",
      "nameEn": "water",
      "nameZh": "清水",
      "amountMetric": "1500 ml",
      "amountUS": "6 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "ys-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut ribs into pieces. Blanch 5 minutes. Rinse.",
      "textZh": "排骨切段，焯水5分钟，冲洗。",
      "zhHint": "排骨焯水",
      "stateNote": {
        "visual": "Scum rises; water cloudy.",
        "visualZh": "浮沫上升；水浑浊。",
        "timeRef": "5 minutes",
        "signal": "Gray scum floats to surface."
      }
    },
    {
      "text": "Peel yam, cut into chunks. Wear gloves — yam sap irritates skin.",
      "textZh": "山药去皮切块。戴手套——山药黏液刺激皮肤。",
      "zhHint": "山药去皮戴手套",
      "stateNote": {
        "visual": "Yam white and firm.",
        "visualZh": "山药洁白紧实。",
        "signal": "No brown spots; firm to touch."
      }
    },
    {
      "text": "Place ribs, ginger, water in pot. Bring to boil.",
      "textZh": "排骨、姜片、清水入锅，大火烧开。",
      "zhHint": "大火烧开",
      "stateNote": {
        "visual": "Large bubbles breaking surface.",
        "visualZh": "大气泡翻滚。",
        "heat": "high",
        "signal": "Vigorous rolling boil."
      }
    },
    {
      "text": "Reduce to low. Simmer 60 minutes.",
      "textZh": "转小火慢炖60分钟。",
      "zhHint": "小火慢炖",
      "stateNote": {
        "visual": "Gentle simmer; surface clear.",
        "visualZh": "微沸；汤面清澈。",
        "timeRef": "60 minutes",
        "heat": "low",
        "signal": "Small bubbles occasionally break surface."
      }
    },
    {
      "text": "Add yam. Cook 20 minutes until yam tender. Season with salt. Serve.",
      "textZh": "下山药，煮20分钟至软。加盐调味，出锅。",
      "zhHint": "山药后下",
      "stateNote": {
        "visual": "Yam translucent and soft.",
        "visualZh": "山药半透明软糯。",
        "timeRef": "20 minutes",
        "signal": "Fork slides into yam easily; no hard center."
      }
    }
  ],
  "tips": [
    "Wear gloves when peeling yam — sap causes itching.",
    "Skim scum regularly for clear soup.",
    "Add yam late — it disintegrates if overcooked."
  ],
  "tipsZh": [
    "去皮戴手套——黏液痒皮肤。",
    "定期撇沫——汤更清。",
    "山药后下——久煮会散。"
  ],
  "relatedSlugs": [
    "hubei-pork-rib-and-lotus-root-soup",
    "winter-melon-soup",
    "chicken-broth-noodle-soup"
  ],
  "image": "/images/recipes/yam-pork-rib-soup.webp"
};
