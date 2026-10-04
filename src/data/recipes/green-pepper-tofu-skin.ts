import type { Recipe } from "@/lib/types";

/** Green Pepper with Dried Tofu Skin (青椒炒腐竹) (青椒炒腐竹) — Day batch */
export const green_pepper_tofu_skin: Recipe = {
  "id": "green-pepper-tofu-skin",
  "slug": "green-pepper-tofu-skin",
  "titleEn": "Green Pepper with Dried Tofu Skin (青椒炒腐竹)",
  "titleZh": "青椒炒腐竹",
  "pinyin": "qing jiao chao fu zhu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide (全国)",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version soaks the dried tofu skin in warm water until pliable and stir-fries it directly. Restaurant versions briefly deep-fry the soaked sticks first for a puffed, chewier bite.",
  "versionNoteZh": "家庭版：腐竹温水泡软后直接炒。餐厅版会先把泡好的腐竹快速过油，口感更蓬松有嚼劲。",
  "tags": [
    "tofu",
    "vegetarian",
    "quick",
    "high-protein",
    "weeknight"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Fu zhu — dried tofu skin — is the skin that forms on top of heating soy milk, lifted off and dried into brittle sticks. Rehydrated, it turns silky and layered, with a bite closer to pasta than to tofu. Paired with green pepper it is the dish my aunt made during Lent-looking weeks when the family wanted something filling without meat.",
  "storyZh": "腐竹是煮豆浆时表面结的那层皮，挑起来晾干成脆条。泡发后变得柔滑有层次，口感更像意面而不像豆腐。配青椒炒，是我姨妈在「家里想少吃肉」那段日子常做的菜——够顶饱，又没肉。",
  "ingredients": [
    {
      "id": "gpts-1",
      "nameEn": "dried tofu skin sticks (fu zhu)",
      "nameZh": "干腐竹",
      "amountMetric": "80 g",
      "amountUS": "2.8 oz",
      "category": "protein",
      "pantry": "asian",
      "termKey": "tofu"
    },
    {
      "id": "gpts-2",
      "nameEn": "green bell pepper, cut into wedges",
      "nameZh": "青椒（切块）",
      "amountMetric": "1 large",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "local",
      "termKey": "green-pepper"
    },
    {
      "id": "gpts-3",
      "nameEn": "garlic cloves, sliced",
      "nameZh": "大蒜（切片）",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "gpts-4",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 1/2 tbsp",
      "amountUS": "1 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gpts-5",
      "nameEn": "oyster sauce (or vegetarian mushroom sauce)",
      "nameZh": "蚝油（或素蚝油）",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "gpts-6",
      "nameEn": "cornstarch, mixed with 2 tbsp water",
      "nameZh": "玉米淀粉（加 2 汤匙水调匀）",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "gpts-7",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gpts-8",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "gpts-9",
      "nameEn": "dried chilies, snipped (optional)",
      "nameZh": "干辣椒（剪段，可选）",
      "amountMetric": "2 pieces",
      "amountUS": "2 pieces",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    }
  ],
  "steps": [
    {
      "text": "Soak the dried tofu skin sticks in warm water (about 50 C) for 20 minutes, weighing them down with a plate so they stay submerged. They should be fully pliable with no hard core.",
      "textZh": "干腐竹用约 50℃ 温水泡 20 分钟，上面压个盘子使其完全浸没。泡到完全柔软、中间无硬芯。",
      "stateNote": {
        "visual": "sticks pale, flexible, no hard centre",
        "signal": "bends without snapping",
        "timeRef": "20 min"
      }
    },
    {
      "text": "Drain and cut into 4 cm lengths. Squeeze gently to remove excess water so they do not splatter in the wok.",
      "textZh": "捞出切 4 厘米段，轻轻挤掉多余水分，避免下锅溅油。",
      "stateNote": {
        "visual": "cut lengths, surface damp not wet",
        "signal": "prep complete",
        "timeRef": "2 min"
      }
    },
    {
      "text": "Heat oil in a wok over medium-high heat. Add garlic and dried chilies and fry for 20 seconds until fragrant.",
      "textZh": "锅中火下油烧热，下蒜片和干辣椒爆香 20 秒。",
      "stateNote": {
        "visual": "garlic just turning pale gold",
        "signal": "fragrant aroma rises",
        "timeRef": "20 sec",
        "heat": "medium-high"
      }
    },
    {
      "text": "Add the tofu skin and stir-fry for 1 minute, then pour in light soy sauce and oyster sauce plus 60 ml water. Let it simmer for 2 minutes so the sticks drink up the sauce.",
      "textZh": "下腐竹翻炒 1 分钟，加入生抽、蚝油和 60 毫升水，小焖 2 分钟让腐竹吸足味道。",
      "stateNote": {
        "visual": "sticks darkened and swollen",
        "signal": "liquid bubbling gently",
        "timeRef": "2 min",
        "heat": "medium"
      }
    },
    {
      "text": "Add the green pepper wedges and stir-fry for 1 minute until glossy but still crisp.",
      "textZh": "下青椒块翻炒 1 分钟，至油亮但仍保持脆感。",
      "stateNote": {
        "visual": "pepper bright green with glossy sheen",
        "signal": "still firm when pressed",
        "timeRef": "1 min",
        "heat": "high"
      }
    },
    {
      "text": "Stir the cornstarch slurry and drizzle it in, tossing until the sauce thickens and clings. Finish with sesame oil and serve hot.",
      "textZh": "水淀粉搅匀后淋入，翻匀至汤汁浓稠挂芡，淋香油出锅。",
      "stateNote": {
        "visual": "sauce glossy and coating, no free liquid",
        "signal": "bubbles turn thick and slow",
        "timeRef": "30 sec"
      }
    }
  ],
  "tips": [
    "Soak in warm, not boiling, water. Boiling water makes the outside mushy before the core softens.",
    "Weigh the sticks down while soaking — floating pieces never rehydrate evenly.",
    "Use vegetarian mushroom oyster sauce to keep the dish fully vegan.",
    "Tofu skin is bland on its own; it needs the 2-minute simmer to absorb flavour."
  ],
  "tipsZh": [
    "用温水泡，别用开水。开水会让外面烂了芯还硬。",
    "泡的时候要压住——浮起来的部分永远泡不透。",
    "想做全素版就用素蚝油（香菇蚝油）。",
    "腐竹本身没味道，必须靠那 2 分钟小焖吸味。"
  ],
  "relatedSlugs": [
    "green-pepper-dried-tofu",
    "braised-dried-tofu",
    "green-pepper-beef",
    "stir-fried-dried-tofu-with-celery"
  ],
  "image": "/images/recipes/napa-cabbage-stewed-tofu.webp"
};
