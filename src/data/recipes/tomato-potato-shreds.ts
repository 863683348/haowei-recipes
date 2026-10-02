import type { Recipe } from "@/lib/types";

/** Tomato Potato Shreds (番茄土豆丝) (番茄土豆丝) — Day batch */
export const tomato_potato_shreds: Recipe = {
  "id": "fan-qie-tu-dou-si",
  "slug": "tomato-potato-shreds",
  "titleEn": "Tomato Potato Shreds (番茄土豆丝)",
  "titleZh": "番茄土豆丝",
  "pinyin": "fān qié tǔ dòu sī",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 3,
  "version": "family",
  "versionNote": "The restaurant version fries the shreds in more oil for a crisp-tender snap; the family version rinses off the surface starch and stir-fries in 2 tbsp oil, keeping the shreds distinct rather than clumped.",
  "versionNoteZh": "餐厅版用更多油炒出脆嫩口感；家庭版洗去表面淀粉、用 2 汤匙油快炒，保持土豆丝根根分明不结团。",
  "tags": [
    "25-min",
    "vegetarian",
    "vegan",
    "potato",
    "tomato",
    "budget"
  ],
  "dietary": [
    "vegan"
  ],
  "story": "A Shandong home dish that costs almost nothing: two potatoes, two tomatoes, and the sour-sweet juice that makes plain rice disappear. It is the dish I cook when I have not been shopping in ten days.",
  "storyZh": "一道几乎不花钱的山东家常菜：两个土豆、两个番茄，酸甜汤汁能让白米饭瞬间见底。十天没采购的时候我就做这个。",
  "ingredients": [
    {
      "id": "ing-potato",
      "nameEn": "potatoes, peeled and julienned",
      "nameZh": "土豆（去皮切丝）",
      "amountMetric": "450 g",
      "amountUS": "1 lb",
      "category": "produce",
      "pantry": "local",
      "note": "Rinse shreds in cold water until the water runs clear.",
      "noteZh": "土豆丝用冷水洗到水变清。"
    },
    {
      "id": "ing-tomato",
      "nameEn": "ripe tomatoes, diced",
      "nameZh": "成熟番茄（切丁）",
      "amountMetric": "3 medium (400 g)",
      "amountUS": "3 medium (14 oz)",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "ing-vinegar",
      "nameEn": "Chinkiang vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "ing-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "大蒜（切末）",
      "amountMetric": "12 g",
      "amountUS": "2-3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "ing-scallion",
      "nameEn": "scallion, sliced",
      "nameZh": "葱（切片）",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ing-lss",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ing-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "4 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Julienne the potatoes into matchsticks, then rinse in cold water 2-3 times until the water runs clear. Drain thoroughly.",
      "textZh": "土豆切成火柴棍细丝，用冷水冲洗 2-3 次至水清。彻底沥干。",
      "stateNote": {
        "visual": "Shreds look almost translucent and no longer cloud the water.",
        "visualZh": "土豆丝近乎半透明，水不再变浑。",
        "signal": "Shreds clump less in your hand and feel squeaky clean.",
        "signalZh": "抓在手里不再黏团，摸起来发涩感。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low"
      },
      "tip": "Rinsing off surface starch is the whole secret to non-clumpy stir-fried potato.",
      "tipZh": "洗掉表面淀粉就是土豆丝不结团的全部秘诀。"
    },
    {
      "text": "Heat 2 tbsp oil over medium-high. Add the potato shreds and stir-fry 3 minutes, tossing constantly so they do not stick.",
      "textZh": "中大火热 2 汤匙油，下土豆丝翻炒 3 分钟，不停翻动防粘。",
      "stateNote": {
        "visual": "Shreds turn from opaque cream to slightly translucent with a few golden tips.",
        "visualZh": "土豆丝由不透明乳白转为略半透明，个别尖端泛金。",
        "signal": "They bend without snapping when pressed against the wok.",
        "signalZh": "贴锅按压时能弯折而不断。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Clear a space, add garlic and scallion, fry 15 seconds, then add the tomato and sugar.",
      "textZh": "锅中间让出空位，下蒜末葱片炒 15 秒，再下番茄丁和糖。",
      "stateNote": {
        "visual": "Garlic turns pale gold and the tomato starts to release red juice.",
        "visualZh": "蒜末变浅金，番茄开始渗出红汁。",
        "signal": "A sharp sweet-sour aroma rises as the tomato hits the hot oil.",
        "signalZh": "番茄遇热油升起明显的酸甜香气。",
        "timeRef": "about 1 minute",
        "timeRefZh": "约 1 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Cover and cook 3 minutes over medium-low so the potato finishes in the tomato steam.",
      "textZh": "盖盖中火偏小焖 3 分钟，让土豆在番茄蒸汽中熟透。",
      "stateNote": {
        "visual": "Tomato collapses into sauce and steam beads on the lid.",
        "visualZh": "番茄塌成酱汁，锅盖内侧凝满水珠。",
        "signal": "A shred mashes easily against the side of the wok.",
        "signalZh": "土豆丝在锅边一压就碎。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low"
      }
    },
    {
      "text": "Uncover, add light soy sauce and Chinkiang vinegar, and toss 30 seconds over high heat. Serve immediately.",
      "textZh": "开盖，加生抽和镇江香醋，大火翻匀 30 秒，立刻出锅。",
      "stateNote": {
        "visual": "Shreds are glossy and orange-tinted with no watery liquid in the pan.",
        "visualZh": "土豆丝油亮带橙色，锅内无多余汤水。",
        "signal": "The vinegar smell is bright but no longer sharp.",
        "signalZh": "醋香提亮但不刺鼻。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high"
      }
    }
  ],
  "tips": [
    "Add the vinegar at the very end — earlier and it just evaporates.",
    "Use waxy potatoes if you can find them; they hold the shred shape better.",
    "Do not cover for too long or the shreds go soft and lose their snap."
  ],
  "tipsZh": [
    "醋一定最后放——早放会全部挥发掉。",
    "尽量用面土豆中偏脆的品种，切丝后更挺。",
    "焖的时间别太长，否则土豆丝发软失去脆感。"
  ],
  "relatedSlugs": [
    "spicy-potato-shreds",
    "dry-pot-potato-slices",
    "tomato-cauliflower",
    "tomato-tofu"
  ],
  "image": "/images/recipes/dry-pot-potato-slices.webp"
};
