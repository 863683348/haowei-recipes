import type { Recipe } from "@/lib/types";

/** Tomato Fish Slices (番茄鱼片) (番茄鱼片) — Day batch */
export const tomato_fish_slices: Recipe = {
  "id": "fan-qie-yu-pian",
  "slug": "tomato-fish-slices",
  "titleEn": "Tomato Fish Slices (番茄鱼片)",
  "titleZh": "番茄鱼片",
  "pinyin": "fān qié yú piàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version velvets fish slices in egg and cornstarch, then poaches them in a bright tomato broth for a kid-friendly, tangy bowl.",
  "versionNoteZh": "家常版用蛋与淀粉上浆鱼片，再入番茄清汤汆熟，酸甜适口、老少皆宜。",
  "tags": [
    "fish-slices",
    "tomato",
    "soup",
    "kid-friendly"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "This is the fish dish that converts tomato-suspicious kids — the broth is sweet, sour, and impossible to refuse.",
  "storyZh": "这是让不爱番茄的孩子改观的鱼：汤酸甜，拒绝不了。",
  "ingredients": [
    {
      "id": "tfy-01",
      "nameEn": "white fish fillet, thinly sliced",
      "nameZh": "白肉鱼柳（薄片）",
      "pinyin": "yú liǔ",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Partial-freeze for clean slices.",
      "noteZh": "微冻后好切片。"
    },
    {
      "id": "tfy-02",
      "nameEn": "tomato, cubed",
      "nameZh": "番茄（切块）",
      "pinyin": "fān qié",
      "amountMetric": "300 g",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "tfy-03",
      "nameEn": "egg white",
      "nameZh": "蛋清",
      "pinyin": "dàn qīng",
      "amountMetric": "1 pc",
      "amountUS": "1 white",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "tfy-04",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "15 g",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "tfy-05",
      "nameEn": "ginger, minced",
      "nameZh": "姜（剁末）",
      "pinyin": "jiāng",
      "amountMetric": "8 g",
      "amountUS": "1.5 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "tfy-06",
      "nameEn": "garlic, minced",
      "nameZh": "蒜（剁末）",
      "pinyin": "suàn",
      "amountMetric": "6 g",
      "amountUS": "1 clove",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "tfy-07",
      "nameEn": "scallion, minced",
      "nameZh": "葱（剁末）",
      "pinyin": "cōng",
      "amountMetric": "15 g",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Marinate fish slices with egg white, cornstarch, and a pinch of salt 10 minutes.",
      "textZh": "鱼片加蛋清、玉米淀粉与少许盐腌10分钟。",
      "zhHint": "上浆",
      "stateNote": {
        "visual": "Slices look glossy and coated.",
        "visualZh": "鱼片发亮挂浆。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Slurry clings without dripping.",
        "signalZh": "浆液挂住不滴。"
      }
    },
    {
      "text": "Soften tomato with ginger and garlic over medium heat until it breaks into a sauce.",
      "textZh": "中火将番茄与姜蒜炒软成酱。",
      "zhHint": "炒番茄",
      "stateNote": {
        "visual": "Tomato collapses into a loose, jammy base.",
        "visualZh": "番茄化开成稀酱。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium",
        "signal": "Pulp loosens and releases juice.",
        "signalZh": "果肉松散出汁。"
      }
    },
    {
      "text": "Add 500 ml water; bring to a gentle simmer.",
      "textZh": "加500毫升水，煮到微沸。",
      "zhHint": "加水煮开",
      "stateNote": {
        "visual": "Broth simmers with red specks.",
        "visualZh": "汤面红点微沸。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Bubbles rise slowly.",
        "signalZh": "气泡缓升。"
      }
    },
    {
      "text": "Slide fish slices in one by one; poach 90 seconds until they turn white.",
      "textZh": "鱼片逐一滑入，汆90秒至变白。",
      "zhHint": "汆鱼片",
      "stateNote": {
        "visual": "Slices curl and turn opaque.",
        "visualZh": "鱼片卷起转白。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium-low",
        "signal": "No pink remains at the center.",
        "signalZh": "中心无粉红。"
      }
    },
    {
      "text": "Season lightly; shower with scallion and serve in the broth.",
      "textZh": "轻调味，撒葱末，连汤上桌。",
      "zhHint": "出锅",
      "stateNote": {
        "visual": "Slices float in a clear red broth.",
        "visualZh": "鱼片浮于清红汤中。",
        "timeRef": "5 seconds",
        "timeRefZh": "5 秒",
        "heat": "medium-low",
        "signal": "Steam carries a sweet-sour note.",
        "signalZh": "热气带出酸甜。"
      }
    }
  ],
  "tips": [
    "Don't boil hard or the velvet coating breaks.",
    "Slice the fish on a slight bias for wider, tender pieces.",
    "A pinch of sugar rounds the tomato tang if it's too sharp."
  ],
  "tipsZh": [
    "别大火滚，否则浆会散。",
    "斜刀片鱼，片大更嫩。",
    "太酸可加一小撮糖。"
  ],
  "commonMistakes": [
    {
      "mistake": "Overcooking so slices turn rubbery.",
      "mistakeZh": "煮久变橡胶。",
      "fix": "Poach just until opaque, then stop.",
      "fixZh": "刚转白就关火。"
    },
    {
      "mistake": "Boiling too hard and washing off the velvet.",
      "mistakeZh": "滚太猛冲掉浆。",
      "fix": "Keep the broth at a bare simmer.",
      "fixZh": "保持将沸未沸。"
    }
  ],
  "variations": [
    "Add soft tofu cubes for a heartier bowl.",
    "Swap white fish for shrimp for a tomato-shrimp version."
  ],
  "variationsZh": [
    "加豆腐块，更饱足。",
    "鱼片换虾仁，番茄虾版。"
  ],
  "relatedSlugs": [
    "braised-fish-cubes",
    "sweet-sour-carp",
    "dry-braised-crucian",
    "sauce-braised-croaker",
    "pan-fried-hairtail",
    "scallion-oil-turbot",
    "salt-pepper-croaker",
    "stir-fried-shrimp",
    "broccoli-shrimp"
  ],
  "image": "/images/recipes/og-default.webp"
};
