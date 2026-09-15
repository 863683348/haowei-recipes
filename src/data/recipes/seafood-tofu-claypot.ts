import type { Recipe } from "@/lib/types";

/** Seafood Tofu Claypot (海鲜豆腐煲) (海鲜豆腐煲) — Day batch */
export const seafood_tofu_claypot: Recipe = {
  "id": "seafood-tofu-claypot",
  "slug": "seafood-tofu-claypot",
  "titleEn": "Seafood Tofu Claypot (海鲜豆腐煲)",
  "titleZh": "海鲜豆腐煲",
  "pinyin": "hǎi xiān dòu fu bāo",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 3,
  "version": "family",
  "versionNote": "广式海鲜豆腐煲，鲜味来自虾、蛤蜊与豆腐的交融。",
  "versionNoteZh": "广式海鲜豆腐煲，鲜味来自虾、蛤蜊与豆腐的交融。",
  "tags": [
    "claypot",
    "seafood",
    "tofu",
    "cantonese",
    "umami"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "My aunt in Guangzhou made this claypot for every weekend gathering. Shellfish sweetness, silken tofu, and a hint of white pepper — simple, but every bite carried the sea.",
  "storyZh": "我在广州的姑姑每个周末聚会都做这道砂锅。贝类鲜甜、豆腐嫩滑、白胡椒点睛——简单，但每口都是海的滋味。",
  "ingredients": [
    {
      "id": "stc-1",
      "nameEn": "mixed shellfish (clams, mussels)",
      "nameZh": "混合贝类",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "stc-2",
      "nameEn": "raw shrimp, peeled",
      "nameZh": "鲜虾",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "stc-3",
      "nameEn": "firm tofu, cubed",
      "nameZh": "老豆腐块",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "stc-4",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "stc-5",
      "nameEn": "ginger, julienned",
      "nameZh": "姜丝",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "stc-6",
      "nameEn": "fish sauce",
      "nameZh": "鱼露",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian"
    }
  ],
  "steps": [
    {
      "text": "Sauté garlic and ginger in claypot until fragrant, 1 minute.",
      "textZh": "砂锅爆香蒜片和姜丝，1分钟。",
      "stateNote": {
        "visual": "Garlic turns pale gold, aroma rises.",
        "visualZh": "蒜片微金黄，香气升起。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Aroma is pungent, not burnt.",
        "signalZh": "香气浓但不焦。"
      }
    },
    {
      "text": "Add tofu, pour in 400ml water, bring to gentle boil.",
      "textZh": "下豆腐，冲入400毫升水，小火烧开。",
      "stateNote": {
        "visual": "Broth begins to bubble around tofu.",
        "visualZh": "汤汁在豆腐周围开始冒泡。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Small bubbles at edge.",
        "signalZh": "边缘小泡。"
      }
    },
    {
      "text": "Add shellfish, cover and cook 3 minutes until shells open.",
      "textZh": "下贝类，盖盖煮3分钟至壳张开。",
      "stateNote": {
        "visual": "Shells begin to open, steam escapes.",
        "visualZh": "贝壳开始张开，蒸汽逸出。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Most shells opened — discard unopened.",
        "signalZh": "大部分壳张开——丢弃未开的。"
      }
    },
    {
      "text": "Add shrimp, cook 2 minutes until pink.",
      "textZh": "下虾，煮2分钟至变红。",
      "stateNote": {
        "visual": "Shrimp turns pink and curls.",
        "visualZh": "虾变红卷曲。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Shrimp is opaque pink.",
        "signalZh": "虾肉不透明粉红。"
      }
    },
    {
      "text": "Season with fish sauce and white pepper. Serve immediately.",
      "textZh": "加鱼露和白胡椒调味，立即热盛。",
      "stateNote": {
        "visual": "Broth is clear, seafood is bright.",
        "visualZh": "汤汁清亮，海鲜鲜亮。",
        "signal": "Shrimp springs back when pressed.",
        "signalZh": "虾轻压回弹。"
      }
    }
  ],
  "tips": [
    "Add shellfish last — they open quickly.",
    "Don't overcook shrimp; they turn rubbery."
  ],
  "tipsZh": [
    "贝类最后放——它们很快张开。",
    "虾不要煮过头，会变韧。"
  ],
  "relatedSlugs": [
    "steamed-grouper-ginger-scallion",
    "garlic-lass-greens"
  ],
  "image": "/images/recipes/seafood-tofu-claypot.webp"
};
