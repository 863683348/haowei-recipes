import type { Recipe } from "@/lib/types";

/** Pumpkin Cake (Steamed-Savory-Sweet Glutinous Pancakes) (南瓜饼) — Seed batch */
export const pumpkin_cake_glutinous_rice_pancakes: Recipe = {
  "id": "nan-gua-bing",
  "slug": "pumpkin-cake-glutinous-rice-pancakes",
  "titleEn": "Pumpkin Cake (Steamed-Savory-Sweet Glutinous Pancakes)",
  "titleZh": "南瓜饼",
  "pinyin": "nán guā bǐng",
  "cuisine": "面点小吃",
  "cuisineEn": "Dim Sum & Snacks",
  "region": "Zhejiang",
  "regionZh": "浙江",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses fresh steamed pumpkin purée—not canned pie filling—and just enough sugar to highlight natural sweetness. No eggs or dairy—purely plant-based texture.",
  "versionNoteZh": "家常版用现蒸南瓜泥，非罐装南瓜派馅；仅加少量糖提鲜，不加蛋奶，纯植物质地。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "My uncle in Hangzhou made these every Mid-Autumn morning—he’d steam local kabocha squash, mash it with his wooden pestle, and fry small cakes in lard-free oil while humming old Shaoxing opera tunes.",
  "storyZh": "杭州的舅舅每逢中秋清晨必做这道点心——他用本地笋瓜上锅蒸熟，木杵捣泥，再用无猪油的植物油煎成小饼，边做边哼绍兴老调。",
  "ingredients": [
    {
      "id": "ng-01",
      "nameEn": "kabocha squash (peeled, cubed)",
      "nameZh": "日本南瓜（去皮切块）",
      "pinyin": "rì běn nán guā",
      "amountMetric": "300 g",
      "amountUS": "2 ½ cups (cubed)",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute: butternut squash or canned unsweetened pumpkin purée (200 g drained weight).",
      "noteZh": "替代：美洲南瓜或无糖罐装南瓜泥（沥干后200 g）。"
    },
    {
      "id": "ng-02",
      "nameEn": "glutinous rice flour",
      "nameZh": "糯米粉",
      "pinyin": "nuò mǐ fěn",
      "amountMetric": "180 g",
      "amountUS": "1 ½ cups",
      "category": "staple",
      "pantry": "asian",
      "note": "Must be labeled 'sweet rice flour' or 'glutinous rice flour'.",
      "noteZh": "必须标有‘甜米粉’或‘糯米粉’。"
    },
    {
      "id": "ng-03",
      "nameEn": "granulated sugar",
      "nameZh": "白砂糖",
      "pinyin": "bái shā táng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "",
      "noteZh": ""
    },
    {
      "id": "ng-04",
      "nameEn": "neutral oil (for frying)",
      "nameZh": "无味植物油（煎制用）",
      "pinyin": "wú wèi zhí wù yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Use canola, grapeseed, or sunflower oil.",
      "noteZh": "可用菜籽油、葡萄籽油或葵花籽油。"
    }
  ],
  "steps": [
    {
      "text": "Steam cubed kabocha over boiling water until fork-tender (15–18 minutes). Drain well, then mash into smooth purée while still warm.",
      "textZh": "南瓜块上沸水蒸锅蒸至筷子可轻松穿透（15–18分钟）。充分沥干，趁热压成细腻泥状。",
      "zhHint": "蒸南瓜压泥",
      "stateNote": {
        "visual": "Purée is thick, lump-free, and holds ridges when stirred",
        "visualZh": "泥糊浓稠无颗粒，搅拌后留清晰纹路",
        "timeRef": "15–18 minutes",
        "timeRefZh": "15–18 分钟",
        "heat": "high",
        "signal": "Steam stops rising vigorously and cubes collapse when pressed",
        "signalZh": "蒸汽减弱，南瓜块轻压即塌"
      }
    },
    {
      "text": "Let purée cool to lukewarm (≈40°C), then mix in sugar and glutinous rice flour until a soft, slightly sticky dough forms.",
      "textZh": "南瓜泥晾至微温（约40°C），加入糖与糯米粉，揉成柔软微黏面团。",
      "zhHint": "混合成团",
      "stateNote": {
        "visual": "Dough gathers cleanly and leaves slight residue on bowl",
        "visualZh": "面团成团利落，碗壁留薄层微黏",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "signal": "No dry flour remains and dough feels warm but workable",
        "signalZh": "无干粉残留，面团温热且易操作"
      }
    },
    {
      "text": "Divide dough into 12 equal portions (~45 g each). Flatten each into 6 cm (2.5-inch) discs using floured palms.",
      "textZh": "将面团均分12份（每份约45 g），在掌心撒少许糯米粉，压成直径6 cm圆饼。",
      "zhHint": "分剂压饼",
      "stateNote": {
        "visual": "Discs are even thickness with smooth edges, no tearing",
        "visualZh": "饼坯厚薄均匀、边缘完整无裂",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "signal": "Dough yields gently under palm pressure without cracking",
        "signalZh": "面团受压微延展，不裂不散"
      }
    },
    {
      "text": "Heat oil in nonstick skillet over medium heat. Fry cakes until golden brown and crisp on both sides (2–3 minutes per side). Drain on paper towel.",
      "textZh": "不粘锅中火烧热油，放入南瓜饼，两面煎至金黄酥脆（每面2–3分钟）。吸油纸吸油。",
      "zhHint": "中小火煎至金黄",
      "stateNote": {
        "visual": "Edges curl slightly and surface bubbles faintly before browning",
        "visualZh": "边缘微翘，表面初现细泡后转色",
        "timeRef": "2–3 minutes per side",
        "timeRefZh": "每面2–3 分钟",
        "heat": "medium",
        "signal": "Bottom is deep golden and releases easily from pan",
        "signalZh": "底面深金黄，轻推即离锅"
      }
    },
    {
      "text": "Cool on wire rack for 2 minutes before serving. Best eaten warm—the outer crisp gives way to a tender, sweet-savory interior.",
      "textZh": "架上晾2分钟再食。趁热食用最佳：外酥内糯，甜中带鲜。",
      "zhHint": "稍晾后趁热食",
      "stateNote": {
        "visual": "Surface glistens faintly and emits gentle steam",
        "visualZh": "表面微亮，散发柔和热气",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Cakes feel warm to touch but not scalding",
        "signalZh": "触之温热不烫手"
      }
    }
  ],
  "tips": [
    "Add 1 tsp grated fresh ginger to dough for subtle warmth.",
    "For crispier cakes, chill shaped discs for 15 minutes before frying.",
    "Serve with a pinch of flaky sea salt—it balances sweetness beautifully."
  ],
  "tipsZh": [
    "面团中可加1茶匙鲜姜末，增添温润辛香。",
    "若追求更酥脆口感，整形后冷藏15分钟再煎。",
    "配少许海盐碎食用，甜咸相宜。"
  ],
  "relatedSlugs": [
    "sesame-tangyuan-glutinous-rice-balls",
    "red-bean-mochi-glutinous-rice-dumplings"
  ],
  "image": "/images/recipes/pumpkin-cake-glutinous-rice-pancakes.webp"
};
