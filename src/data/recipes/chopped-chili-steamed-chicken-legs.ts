import type { Recipe } from "@/lib/types";

/** Chopped Chili Steamed Chicken Legs (剁椒蒸鸡腿) — Day batch */
export const chopped_chili_steamed_chicken_legs: Recipe = {
  "id": "chopped-chili-steamed-chicken-legs",
  "slug": "chopped-chili-steamed-chicken-legs",
  "titleEn": "Chopped Chili Steamed Chicken Legs",
  "titleZh": "剁椒蒸鸡腿",
  "pinyin": "duò jiāo zhēng jī tuǐ",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Changsha",
  "regionZh": "长沙",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Simple steamed dish with fiery chili paste.",
  "versionNoteZh": "简单蒸制，辣味十足。",
  "tags": [
    "20-min",
    "spicy",
    "steamed"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Hunan-style steamed chicken with chopped chili peppers is a home favorite.",
  "storyZh": "湖南人家家都会做的剁椒蒸鸡腿，香辣入味。",
  "ingredients": [
    {
      "id": "ccs-01",
      "nameEn": "chicken legs",
      "nameZh": "鸡腿",
      "amountMetric": "2 pieces",
      "amountUS": "2 pieces",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "ccs-02",
      "nameEn": "chopped chili peppers",
      "nameZh": "剁椒",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chopped-chili"
    },
    {
      "id": "ccs-03",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ccs-04",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "2 slices",
      "amountUS": "2 slices",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "ccs-05",
      "nameEn": "soy sauce",
      "nameZh": "酱油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "soy-sauce"
    },
    {
      "id": "ccs-06",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Make 2-3 slits on chicken legs for better flavor absorption.",
      "textZh": "鸡腿两侧划几刀方便入味。",
      "stateNote": {
        "visual": "Slits made",
        "visualZh": "鸡腿划刀",
        "signal": "Ready"
      }
    },
    {
      "text": "Marinate chicken with soy sauce, minced garlic, and ginger for 15 minutes.",
      "textZh": "用酱油、蒜末、姜末腌制15分钟。",
      "stateNote": {
        "visual": "Chicken marinating",
        "visualZh": "鸡腿腌制中",
        "timeRef": "15 minutes",
        "signal": "Marinated"
      }
    },
    {
      "text": "Spread chopped chili evenly over chicken legs.",
      "textZh": "剁椒均匀铺在鸡腿上。",
      "stateNote": {
        "visual": "Chili covering",
        "visualZh": "剁椒覆盖",
        "signal": "Ready"
      }
    },
    {
      "text": "Steam over high heat for 15 minutes.",
      "textZh": "大火蒸15分钟。",
      "stateNote": {
        "visual": "Steam rising",
        "visualZh": "蒸汽升腾",
        "heat": "high",
        "timeRef": "15 minutes",
        "signal": "Cooked"
      }
    },
    {
      "text": "Drizzle sesame oil and serve.",
      "textZh": "淋上香油即可上桌。",
      "stateNote": {
        "visual": "Glossy finish",
        "visualZh": "香油增亮",
        "signal": "Ready"
      }
    }
  ],
  "tips": [
    "Use fresh chopped chilies for best flavor.",
    "Steam until juices run clear."
  ],
  "tipsZh": [
    "新鲜剁椒风味更佳。",
    "蒸到汁水清澈即可。"
  ],
  "relatedSlugs": [
    "spicy-clam-stir-fry",
    "mala-dry-pot"
  ],
  "image": "/images/recipes/chopped-chili-steamed-chicken-legs.webp"
};
