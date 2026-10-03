import type { Recipe } from "@/lib/types";

/** Thai Hot and Sour Eggplant (泰式酸辣茄子) (泰式酸辣茄子) — Day batch */
export const thai_sour_spicy_eggplant: Recipe = {
  "id": "thai-sour-spicy-eggplant",
  "slug": "thai-sour-spicy-eggplant",
  "titleEn": "Thai Hot and Sour Eggplant (泰式酸辣茄子)",
  "titleZh": "泰式酸辣茄子",
  "pinyin": "tài shì suān là qié zi",
  "cuisine": "泰式中餐",
  "cuisineEn": "Thai-Chinese",
  "region": "Southeast Asia / Thai-Chinese kitchens",
  "regionZh": "东南亚 · 泰式中餐",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Thai restaurant woks cook this at brutal heat for ninety seconds so the eggplant chars and the sauce caramelizes onto it. At home that is unrealistic; instead soften the eggplant first in a covered pan with a splash of water, then crank the heat and add the sauce at the very end so it reduces fast without burning.",
  "versionNoteZh": "泰餐厅九十秒猛火：茄子边缘微焦，酱汁直接焦化在上面。家用灶做不到，所以先把茄子加水加盖焖软，最后再开大火下酱快速收干，一样浓郁但不糊。",
  "tags": [
    "thai",
    "eggplant",
    "spicy",
    "sour",
    "quick",
    "seafood-sauce"
  ],
  "dietary": [
    "none"
  ],
  "story": "Thai cooking builds flavor out of four things hitting you at once: salty fish sauce, sour lime, hot chili, sweet sugar. Eggplant is the perfect vehicle because it is bland enough to carry all four and soft enough to drink the sauce up. This is the Thai-Chinese version — no coconut milk, stir-fried, eaten with rice, and ready faster than the noodles would be.",
  "storyZh": "泰餐的味道是四样东西同时打过来：咸的鱼露、酸的青柠、辣的小米椒、甜的糖。茄子是最合适的载体，它本身够寡淡，能同时扛住四味，又够软能把酱汁喝进去。这是泰式中餐版本——不加椰浆，快炒下饭，比煮面还快。",
  "ingredients": [
    {
      "id": "tse-eggplant",
      "nameEn": "Chinese or Thai eggplant (small round Thai ones are ideal)",
      "nameZh": "长茄子或泰国圆茄（小圆茄最地道）",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "tse-fishsauce",
      "nameEn": "fish sauce",
      "nameZh": "鱼露",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Vegetarian substitute: 1 tbsp light soy sauce plus 1/4 tsp salt.",
      "noteZh": "素食替代：1 大勺生抽 + 1/4 茶匙盐。",
      "termKey": "fish-sauce"
    },
    {
      "id": "tse-lime",
      "nameEn": "lime juice (fresh)",
      "nameZh": "青柠汁（现挤）",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tse-sugar",
      "nameEn": "palm sugar or brown sugar",
      "nameZh": "棕榈糖或红糖",
      "amountMetric": "1.5 tsp",
      "amountUS": "1.5 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "tse-chili",
      "nameEn": "Thai bird's eye chilies, sliced",
      "nameZh": "小米椒（切圈）",
      "amountMetric": "2–3",
      "amountUS": "2–3",
      "category": "produce",
      "pantry": "asian",
      "note": "Substitute: 1/2 tsp chili flakes; serrano works too.",
      "noteZh": "替代：1/2 茶匙辣椒碎；青辣椒也可用。"
    },
    {
      "id": "tse-garlic",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "tse-shallot",
      "nameEn": "shallot or small red onion, sliced",
      "nameZh": "红葱头或小洋葱（切丝）",
      "amountMetric": "1",
      "amountUS": "1",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "tse-basil",
      "nameEn": "Thai basil leaves (or regular basil)",
      "nameZh": "泰国罗勒叶（或普通罗勒）",
      "amountMetric": "a large handful",
      "amountUS": "a large handful",
      "category": "produce",
      "pantry": "asian"
    },
    {
      "id": "tse-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "tse-water",
      "nameEn": "water (for steaming)",
      "nameZh": "清水（焖软用）",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut the eggplant into 4 cm batons (halve or quarter the small Thai ones). Whisk fish sauce, lime juice and sugar in a small bowl until the sugar dissolves; set it next to the stove.",
      "textZh": "茄子切成 4 厘米长的条（小圆茄对半或四开）。把鱼露、青柠汁和糖在小碗里搅到糖化开，放在灶边备用。",
      "zhHint": "调酸辣汁",
      "stateNote": {
        "visual": "Sauce is clear pale amber with no sugar crystals at the bottom",
        "visualZh": "酱汁是清透的浅琥珀色，碗底没有糖粒",
        "signal": "Taste it: it should hit salty first, then sour, then sweet",
        "signalZh": "尝一口：先是咸，再是酸，最后回甜"
      }
    },
    {
      "text": "Heat 1.5 tbsp oil in a wok over medium-high. Add the eggplant with 3 tbsp water, cover immediately, and steam-fry 4 minutes until it softens and the water evaporates.",
      "textZh": "锅中大火热 1.5 大勺油，下茄子加 3 大勺水，立刻加盖焖 4 分钟到茄子变软、水分收干。",
      "zhHint": "加水焖软",
      "stateNote": {
        "visual": "Skin brightens, then dulls as the water leaves; pieces collapse against the pan",
        "visualZh": "外皮先变得鲜亮，水分收干后转哑光；茄块贴合锅底塌软",
        "heat": "medium-high",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "No water pools when you tilt the pan — only oil remains",
        "signalZh": "倾斜锅体没有水流出——只剩油"
      }
    },
    {
      "text": "Uncover, add the last 1/2 tbsp oil, garlic, shallot and chilies. Stir-fry over high heat 45 seconds until the garlic is golden and the chilies smell sharp.",
      "textZh": "开盖补最后 1/2 大勺油，下蒜片、洋葱丝和小米椒，大火炒 45 秒到蒜片金黄、辣椒冲香。",
      "zhHint": "大火爆香",
      "stateNote": {
        "visual": "Garlic edges turn golden brown; shallot softens and turns translucent pink",
        "visualZh": "蒜片边缘变金黄；洋葱丝变软、呈半透明粉色",
        "heat": "high",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "signal": "You start to cough slightly — that is the moment to add the sauce",
        "signalZh": "开始微微呛咳——那就是下酱汁的时刻"
      }
    },
    {
      "text": "Pour the sauce straight over the eggplant. Toss over high heat 30 seconds; it will hiss and thicken into a thin glaze.",
      "textZh": "把调好的酱汁直接淋在茄子上，大火翻炒 30 秒，会滋啦作响并收成薄薄一层芡。",
      "zhHint": "下汁快炒",
      "stateNote": {
        "visual": "Sauce coats everything in a glossy film; almost nothing pools at the bottom",
        "visualZh": "酱汁像一层亮膜裹住所有食材；锅底几乎没有积液",
        "heat": "high",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "It smells sharply of lime and fish sauce before anything burns",
        "signalZh": "青柠和鱼露的香气强烈窜出——在任何糊味之前"
      }
    },
    {
      "text": "Turn off the heat. Add the basil and toss twice so the leaves wilt in the residual heat. Serve immediately with jasmine rice.",
      "textZh": "关火，下罗勒叶翻拌两下，让叶子用余温塌软。立刻配茉莉香米上桌。",
      "zhHint": "关火下罗勒",
      "stateNote": {
        "visual": "Basil leaves darken and go limp but stay green, not black",
        "visualZh": "罗勒叶颜色变深、叶片塌软，但仍保持绿色不发黑",
        "timeRef": "about 20 seconds",
        "timeRefZh": "约 20 秒",
        "signal": "Basil smells sweet and anise-like — if it darkens, it went in too hot",
        "signalZh": "罗勒散发出甜香的茴香味——如果叶色发黑就是下得太早"
      },
      "tip": "Basil always goes in off the heat; residual heat is plenty.",
      "tipZh": "罗勒一定关火后再放，余温完全够。"
    }
  ],
  "tips": [
    "Mix the sauce before you start — a Thai stir-fry moves too fast to season later.",
    "Taste the raw sauce: salty first, sour second, sweet last. That order is the recipe.",
    "The steam-then-fry trick gives you restaurant tenderness without deep-frying.",
    "Skip the fish sauce for a vegetarian version, but keep the lime — losing it loses the dish."
  ],
  "tipsZh": [
    "酱汁要提前调好——泰式快炒太快，来不及边炒边调味。",
    "尝生酱汁：先咸、再酸、最后甜。这个顺序就是配方本身。",
    "先加水焖软再大火收汁，不用油炸也有餐厅那种软糯。",
    "素食版可去鱼露，但青柠不能省——少了它整道菜就散了。"
  ],
  "relatedSlugs": [
    "thai-sour-spicy-hot-pot",
    "dry-fried-green-beans",
    "steamed-bass"
  ],
  "image": "/images/recipes/thai-sour-spicy-hot-pot.webp"
};
