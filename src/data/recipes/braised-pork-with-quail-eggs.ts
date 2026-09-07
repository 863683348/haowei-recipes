import type { Recipe } from "@/lib/types";

/** Braised Pork with Quail Eggs (红烧肉鹌鹑蛋) (红烧肉鹌鹑蛋) — Day batch */
export const braised_pork_with_quail_eggs: Recipe = {
  "id": "braised-pork-with-quail-eggs",
  "slug": "braised-pork-with-quail-eggs",
  "titleEn": "Braised Pork with Quail Eggs (红烧肉鹌鹑蛋)",
  "titleZh": "红烧肉鹌鹑蛋",
  "pinyin": "hóng shāo ròu àn chún dàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Shanghai (上海)",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 75,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version braises pork belly until meltingly tender, then adds pre-boiled quail eggs in the last 20 minutes.",
  "versionNoteZh": "家常版把五花肉烧至入口即化，最后20分钟加入预煮鹌鹑蛋吸汁。",
  "tags": [
    "braise",
    "comfort",
    "pork",
    "weekend",
    "festive"
  ],
  "dietary": [
    "none"
  ],
  "story": "Hóng shāo ròu with quail eggs is a dish that celebrates patience.",
  "storyZh": "红烧肉配鹌鹑蛋是一道需要耐心的菜。",
  "ingredients": [
    {
      "id": "bq-pork",
      "nameEn": "pork belly, cut into 3 cm cubes",
      "nameZh": "五花肉切3厘米方块",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly"
    },
    {
      "id": "bq-quail",
      "nameEn": "quail eggs, hard-boiled and peeled",
      "nameZh": "鹌鹑蛋（煮熟剥壳）",
      "amountMetric": "12 large",
      "amountUS": "12 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "quail-eggs"
    },
    {
      "id": "bq-ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bq-scallion",
      "nameEn": "scallions, cut into 3 cm lengths",
      "nameZh": "葱段",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "bq-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bq-dark",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "bq-shaoxing",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "bq-rock",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "15 g (~1 tbsp)",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "bq-star",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 whole",
      "amountUS": "1 whole",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "bq-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Blanch pork belly cubes in boiling water for 3 minutes. Drain and rinse. This removes impurities and firms the meat.",
      "textZh": "五花肉块入沸水焯3分钟，捞出冲洗。去除血沫杂质，让肉更易切且口感更紧实。",
      "stateNote": {
        "visual": "Scum rises to the surface; water turns cloudy",
        "visualZh": "水面浮起灰褐色浮沫；水变浑浊",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Water turns from pink-tinged to gray-cloudy"
      }
    },
    {
      "text": "Hard-boil quail eggs: place in cold water, bring to a boil, cook 8 minutes. Peel carefully while still warm.",
      "textZh": "鹌鹑蛋冷水下锅，烧开煮8分钟。趁热小心剥壳。",
      "stateNote": {
        "visual": "Yolks are fully set, pale yellow",
        "visualZh": "蛋黄完全凝固，淡黄色",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "Yolk springs back when pressed"
      }
    },
    {
      "text": "Heat oil in a heavy pot over medium heat. Add rock sugar and stir until melted and caramelized to amber (about 2 minutes).",
      "textZh": "热锅下油，中火下冰糖，搅拌至融化变成琥珀色（约2分钟）。",
      "stateNote": {
        "visual": "Sugar melts, bubbles, turns golden-amber",
        "visualZh": "糖融化冒泡，变为金黄琥珀色",
        "heat": "medium",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Color changes from pale yellow to deep amber — watch closely, it burns fast"
      }
    },
    {
      "text": "Immediately add blanched pork belly. Toss to coat in caramel. Add ginger, scallion, star anise. Pour in Shaoxing wine, light soy, and dark soy.",
      "textZh": "立即下焯过水的五花肉，翻炒裹上糖色。加姜片、葱段、八角。倒入料酒、生抽、老抽。",
      "stateNote": {
        "visual": "Pork glistens with amber glaze; aromatics sizzle",
        "visualZh": "肉块裹上琥珀光泽；香料滋滋作响",
        "heat": "medium-high",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Sugar coating is glossy and adheres to every piece"
      }
    },
    {
      "text": "Add enough hot water to just cover the pork. Bring to a boil, then reduce to a simmer. Cover and cook 40 minutes. Add quail eggs and simmer 20 minutes more until sauce reduces to a glossy glaze.",
      "textZh": "加热水至刚没过肉块。大火烧开，转小火盖锅盖焖40分钟。加入鹌鹑蛋再煮20分钟，让酱汁收浓挂满肉和蛋。",
      "stateNote": {
        "visual": "Gentle bubbles; sauce is deep crimson; eggs are stained amber",
        "visualZh": "汤汁微滚；深红色酱汁；鹌鹑蛋染上琥珀色",
        "heat": "low",
        "timeRef": "60 minutes total",
        "timeRefZh": "共60分钟",
        "signal": "Pork yields to chopstick; sauce coats spoon"
      }
    }
  ],
  "tips": [
    "The caramel step is critical — if the sugar burns, the dish will be bitter.",
    "Use hot water, not cold, when deglazing.",
    "Quail eggs absorb flavor beautifully.",
    "This dish improves overnight."
  ],
  "tipsZh": [
    "炒糖色是关键——炒焦会苦。",
    "加水用热水，不用冷水。",
    "鹌鹑蛋很吸味。",
    "这道菜隔夜更香。"
  ],
  "relatedSlugs": [
    "hongshao-pork",
    "twice-cooked-pork",
    "home-style-pork",
    "sweet-sour-pork"
  ],
  "image": "/images/recipes/hongshao-pork.webp"
};
