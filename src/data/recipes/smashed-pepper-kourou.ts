import type { Recipe } from "@/lib/types";

/** Smashed Pepper Pork Belly | Hunan Lei La Jiao Kou Rou (擂辣椒扣肉) — Day batch */
export const smashed_pepper_kourou: Recipe = {
  "id": "smashed-pepper-kourou",
  "slug": "smashed-pepper-kourou",
  "titleEn": "Smashed Pepper Pork Belly | Hunan Lei La Jiao Kou Rou",
  "titleZh": "擂辣椒扣肉",
  "pinyin": "léi là jiāo kòu ròu",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Hunan",
  "regionZh": "湖南",
  "difficulty": "hard",
  "timeMin": 95,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version pan-fries the belly instead of deep-frying and skips the long steaming press; restaurant versions fry the skin to a blistered 'tiger skin' and steam for two hours.",
  "versionNoteZh": "家庭版以煎代炸、省去长时间压制；餐厅版会把猪皮炸出虎皮再蒸两小时。",
  "tags": [
    "hunan",
    "pork-belly",
    "steamed",
    "rich",
    "weekend-project"
  ],
  "dietary": [
    "none"
  ],
  "story": "Lei la jiao kou rou is a Hunan banquet crossover: the rustic smashed-pepper relish meets kou rou, the festive steamed pork belly. The peppers are charred until collapsing and pounded by hand, and their smoky acidity is exactly what cuts through an hour of rendered pork fat.",
  "storyZh": "擂辣椒扣肉是湘菜里的宴客菜：把乡土擂辣椒与年节扣肉合二为一。辣椒煸到塌软再手擂，烟熏酸辣正好解掉一小时蒸出的猪油。",
  "ingredients": [
    {
      "id": "sk-01",
      "nameEn": "pork belly, skin on",
      "nameZh": "带皮五花肉",
      "amountMetric": "800 g",
      "amountUS": "1.75 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly"
    },
    {
      "id": "sk-02",
      "nameEn": "long green peppers",
      "nameZh": "青尖椒",
      "amountMetric": "250 g",
      "amountUS": "8-10 pieces",
      "category": "produce",
      "pantry": "local",
      "termKey": "green-pepper"
    },
    {
      "id": "sk-03",
      "nameEn": "garlic",
      "nameZh": "蒜",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "sk-04",
      "nameEn": "fermented black beans",
      "nameZh": "豆豉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "douchi"
    },
    {
      "id": "sk-05",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "sk-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sk-07",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sk-08",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "2 pieces",
      "amountUS": "2 pieces",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "sk-09",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "20 g",
      "amountUS": "1 knob",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sk-10",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "8 g",
      "amountUS": "1.5 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    }
  ],
  "steps": [
    {
      "text": "Put the whole pork belly in a pot of cold water with ginger and Shaoxing wine. Simmer 25 minutes until a skewer pierces the skin easily.",
      "textZh": "整块五花肉冷水下锅，加姜和料酒，煮 25 分钟至竹签能轻松扎透猪皮。",
      "stateNote": {
        "visual": "The skin goes from opaque pink-grey to a pale, slightly swollen surface that yields to a skewer.",
        "visualZh": "猪皮由粉灰转为浅白微胀，竹签可轻松扎入。",
        "signal": "Skewer slides through the skin with no resistance",
        "signalZh": "竹签无阻力穿透猪皮",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "medium-low"
      }
    },
    {
      "text": "Pat the belly dry, prick the skin all over with a fork, brush with dark soy sauce and let it air-dry 10 minutes.",
      "textZh": "五花肉擦干，用叉子在猪皮上扎满孔，刷老抽晾 10 分钟。",
      "stateNote": {
        "visual": "The skin turns an even mahogany and feels tacky rather than wet.",
        "visualZh": "猪皮呈均匀红褐、手感发黏而非湿漉。",
        "signal": "Sauce no longer drips when the piece is lifted",
        "signalZh": "提起时老抽不再滴落",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low"
      },
      "tip": "Pricking the skin is the only way to get bubbles later — be thorough."
    },
    {
      "text": "Heat a thin film of oil in a pan skin-side down over medium heat and fry the skin until it blisters and turns deep golden, about 6 minutes. Cool, then slice into 6 mm pieces.",
      "textZh": "锅中薄油，猪皮朝下中火煎至起泡、呈深金黄约 6 分钟。放凉后切 6 毫米厚片。",
      "stateNote": {
        "visual": "The skin bubbles into a coarse orange-peel texture and turns deep golden-brown.",
        "visualZh": "猪皮鼓起粗橘皮纹，呈深金棕色。",
        "signal": "Skin is rigid and crisp-tapping; a spoon on it sounds hollow",
        "signalZh": "猪皮发硬，勺子敲上去声音发空",
        "timeRef": "5-7 minutes",
        "timeRefZh": "5-7 分钟",
        "heat": "medium"
      }
    },
    {
      "text": "Dry-toast the whole peppers in a hot dry pan, pressing them flat, until the skins are blistered and the flesh collapses. Peel off the loose skins and pound the peppers with garlic and fermented black beans into a coarse paste.",
      "textZh": "青椒入干锅大火干煸并压扁，至表皮起泡、椒身塌软。撕去浮皮，与蒜、豆豉一起擂成粗糊。",
      "stateNote": {
        "visual": "Pepper skins go from taut glossy green to blistered, dull and partly blackened; the flesh flattens and leaks a little juice.",
        "visualZh": "椒皮由紧亮转为起泡发暗、局部焦黑，椒身塌扁出汁。",
        "signal": "Peppers bend without snapping and smell smoky",
        "signalZh": "辣椒弯折不断、有烟熏香",
        "timeRef": "6-8 minutes",
        "timeRefZh": "6-8 分钟",
        "heat": "medium-high"
      },
      "tip": "Pound by hand in a mortar if you can — a blender turns the relish into a watery puree."
    },
    {
      "text": "Toss the sliced belly with light soy, dark soy, rock sugar and star anise, then arrange skin-side down in a deep bowl and spread the smashed pepper paste over the top.",
      "textZh": "五花肉片加生抽、老抽、冰糖、八角拌匀，皮朝下码入深碗，上面铺满擂辣椒糊。",
      "stateNote": {
        "visual": "Every slice is coated in a dark glossy film and the bowl is layered: meat on the bottom, green-black pepper paste sealing the top.",
        "visualZh": "每片肉都裹上深亮酱汁，碗中分层：底是肉，顶是墨绿椒糊。",
        "signal": "No pale patches of fat are still visible on the slices",
        "signalZh": "肉片上看不到白色生肥斑",
        "timeRef": "3 minutes",
        "timeRefZh": "约 3 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Steam over high heat for 60 minutes, then rest 5 minutes, invert onto a plate and spoon the collected juices over the top.",
      "textZh": "大火蒸 60 分钟，静置 5 分钟后倒扣入盘，把蒸出的汤汁浇在上面。",
      "stateNote": {
        "visual": "The fat layer has turned translucent and wobbles; the pepper paste is dark and saturated with rendered fat.",
        "visualZh": "肥肉层变透明并微微颤动；椒糊吸饱油脂颜色变深。",
        "signal": "A chopstick slides through the lean layer with no resistance",
        "signalZh": "筷子无阻力穿过瘦肉层",
        "timeRef": "60 minutes steam + 5 minutes rest",
        "timeRefZh": "蒸 60 分钟 + 焖 5 分钟",
        "heat": "high"
      }
    }
  ],
  "tips": [
    "Steam it a day ahead and re-steam for 20 minutes — the flavor improves and the slices hold together better when inverted cold.",
    "Blanch the smashed pepper paste briefly if you want less heat; the seeds carry most of the fire.",
    "Save the steaming liquid: it is concentrated pork stock and makes an excellent noodle broth."
  ],
  "tipsZh": [
    "提前一天蒸好、第二天回蒸 20 分钟更入味，凉透后倒扣也更完整。",
    "怕辣就把擂辣椒焯一下水，辣椒籽最辣。",
    "蒸出的汤汁别倒，是浓缩肉汤，煮面极佳。"
  ],
  "relatedSlugs": [
    "meicai-kourou",
    "smashed-peppers-lei-la-jiao",
    "hongshao-pork",
    "suan-ni-bai-rou"
  ],
  "image": "/images/recipes/meicai-kourou.webp"
};
