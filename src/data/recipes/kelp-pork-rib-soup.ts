import type { Recipe } from "@/lib/types";

/** Kelp and Pork Rib Soup | Chinese Hai Dai Dun Pai Gu (海带排骨汤) — Day batch */
export const kelp_pork_rib_soup: Recipe = {
  "slug": "kelp-pork-rib-soup",
  "id": "kelp-pork-rib-soup",
  "titleEn": "Kelp and Pork Rib Soup | Chinese Hai Dai Dun Pai Gu",
  "titleZh": "海带排骨汤",
  "pinyin": "hǎi dài dùn pái gǔ",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Coastal",
  "regionZh": "沿海",
  "difficulty": "easy",
  "timeMin": 75,
  "servings": 4,
  "version": "family",
  "versionNote": "Umami-rich soup from the sea with tender ribs.",
  "versionNoteZh": "海鲜鲜味与排骨醇厚的完美结合。",
  "tags": [
    "soup",
    "nourishing",
    "coastal"
  ],
  "dietary": [
    "none"
  ],
  "story": "Kelp (hai dai) adds ocean umami to this comforting rib soup. A coastal Chinese favorite, especially in winter.",
  "storyZh": "海带为这道排骨汤增添海洋鲜味。沿海地区的冬季首选。",
  "ingredients": [
    {
      "id": "ks-01",
      "nameEn": "pork ribs",
      "nameZh": "排骨",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-ribs"
    },
    {
      "id": "ks-02",
      "nameEn": "dried kelp",
      "nameZh": "干海带",
      "amountMetric": "50 g dry",
      "amountUS": "2 oz dry",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "seaweed"
    },
    {
      "id": "ks-03",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "3 slices",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ks-04",
      "nameEn": "scallions",
      "nameZh": "大葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Soak kelp in water overnight or 4 hours until soft. Cut into pieces.",
      "textZh": "海带泡水过夜或4小时至软，切块。",
      "zhHint": "海带泡发",
      "stateNote": {
        "visual": "Kelp pliable and dark green.",
        "visualZh": "海带柔软深绿。",
        "timeRef": "4+ hours",
        "signal": "No hard centers; bends easily."
      }
    },
    {
      "text": "Cut ribs, blanch 5 minutes. Rinse.",
      "textZh": "排骨切段，焯水5分钟，冲洗。",
      "zhHint": "排骨焯水",
      "stateNote": {
        "visual": "Ribs pale; scum removed.",
        "visualZh": "排骨发白；杂质去除。",
        "timeRef": "5 minutes",
        "signal": "Gray foam rises; water cloudy."
      }
    },
    {
      "text": "Place ribs, kelp, ginger, water in pot. Bring to boil.",
      "textZh": "排骨、海带、姜片、清水入锅，大火烧开。",
      "zhHint": "大火烧开",
      "stateNote": {
        "visual": "Large bubbles.",
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
        "visual": "Gentle simmer.",
        "visualZh": "微沸。",
        "timeRef": "60 minutes",
        "heat": "low",
        "signal": "Small bubbles occasionally break."
      }
    },
    {
      "text": "Add scallion pieces. Cook 5 minutes. Season with salt. Serve.",
      "textZh": "下葱段，煮5分钟。加盐调味，出锅。",
      "zhHint": "葱段提香",
      "stateNote": {
        "visual": "Scallions wilted but green.",
        "visualZh": "葱段微软仍绿。",
        "timeRef": "5 minutes",
        "signal": "Fresh scallion aroma; ready to serve."
      }
    }
  ],
  "tips": [
    "Soak kelp well — it expands 5x when hydrated.",
    "Skim scum regularly for clear broth.",
    "Add salt at end — early salting toughens meat."
  ],
  "tipsZh": [
    "海带充分泡发——吸水膨胀5倍。",
    "撇沫——汤更清。",
    "最后放盐——早放肉变硬。"
  ],
  "relatedSlugs": [
    "yam-pork-rib-soup",
    "potato-pork-rib-stew",
    "winter-melon-soup"
  ],
  "image": "/images/recipes/kelp-pork-rib-soup.webp"
};
