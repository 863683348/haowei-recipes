import type { Recipe } from "@/lib/types";

/** Salted Egg Yolk Pastry (蛋黄酥) (蛋黄酥) — Day batch */
export const egg_yolk_pastry: Recipe = {
  "id": "egg-yolk-pastry",
  "slug": "egg-yolk-pastry",
  "titleEn": "Salted Egg Yolk Pastry (蛋黄酥)",
  "titleZh": "蛋黄酥",
  "pinyin": "dàn huáng sū",
  "cuisine": "江浙点心",
  "cuisineEn": "Jiangsu-Zhejiang Dim Sum",
  "region": "Jiangsu (English)",
  "regionZh": "江苏",
  "difficulty": "hard",
  "timeMin": 75,
  "servings": 8,
  "version": "family",
  "versionNote": "家庭版：水油皮+油酥，咸蛋黄灵魂",
  "versionNoteZh": "家庭版：水油皮+油酥，咸蛋黄灵魂",
  "tags": [
    "pastry",
    "dessert",
    "festive",
    "mid-autumn",
    "sweet"
  ],
  "dietary": [
    "none"
  ],
  "story": "The king of Chinese pastries — a perfect sphere of flaky layers surrounding sweet bean paste and a salted duck egg yolk. The contrast of salty and sweet is what makes this addictive. Made for Mid-Autumn but enjoyed year-round.",
  "storyZh": "中式点心之王——酥脆多层包裹甜豆沙和咸鸭蛋黄。咸甜交织令人上瘾。中秋必备，全年皆宜。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "Low-protein flour (水油皮)",
      "nameZh": "低筋面粉（水油皮）",
      "amountMetric": "120 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "2",
      "nameEn": "Low-protein flour (油酥)",
      "nameZh": "低筋面粉（油酥）",
      "amountMetric": "80 g",
      "amountUS": "⅔ cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "3",
      "nameEn": "Lard",
      "nameZh": "猪油",
      "amountMetric": "45 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Lard (for paste)",
      "nameZh": "猪油（油酥用）",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "Water",
      "nameZh": "水",
      "amountMetric": "50 ml",
      "amountUS": "¼ cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "6",
      "nameEn": "Salted duck egg yolks",
      "nameZh": "咸鸭蛋黄",
      "amountMetric": "8 pieces",
      "amountUS": "8",
      "category": "protein",
      "pantry": "asian",
      "termKey": "salted-egg"
    },
    {
      "id": "7",
      "nameEn": "Red bean paste",
      "nameZh": "红豆沙",
      "amountMetric": "240 g",
      "amountUS": "1 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "red-bean-paste"
    },
    {
      "id": "8",
      "nameEn": "Egg wash",
      "nameZh": "蛋液",
      "amountMetric": "1",
      "amountUS": "1",
      "category": "protein",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Make water-oil dough: mix 120g flour, 45g lard, water. Knead smooth. Rest 30 min.",
      "textZh": "制作水油皮：120g面粉+45g猪油+水揉匀。静置30分钟。",
      "stateNote": {
        "visual": "Dough should be soft and elastic, like a baby's cheek",
        "visualZh": "面团应柔软有弹性，如婴儿脸颊",
        "signal": "面团光滑有延展"
      }
    },
    {
      "text": "Make oil paste: mix 80g flour with 40g lard until smooth. Should be soft putty.",
      "textZh": "制作油酥：80g面粉+40g猪油搅匀，呈软泥状。",
      "stateNote": {
        "visual": "Paste should be smooth, no lumps, spreadable",
        "visualZh": "油酥应顺滑无颗粒可涂抹",
        "signal": "油酥软如橡皮泥"
      }
    },
    {
      "text": "Prepare filling: wrap 30g red bean paste around each salted yolk. Chill 15 minutes.",
      "textZh": "准备馅心：每颗咸蛋黄包30g红豆沙。冷藏15分钟。",
      "stateNote": {
        "visual": "Ball should be smooth and firm, not cracking",
        "visualZh": "球应光滑紧实不开裂",
        "signal": "馅球紧实不散"
      }
    },
    {
      "text": "Divide water-oil dough into 8. Roll each into circle. Place oil paste in center, wrap.",
      "textZh": "水油皮分8份。擀圆，包入油酥，收口。",
      "stateNote": {
        "visual": "Seam must be sealed — any crack = oil paste leaks out",
        "visualZh": "收口必须密封——有裂缝油酥会漏",
        "signal": "收口捏紧"
      }
    },
    {
      "text": "Roll into oval, fold like letter, roll again, fold again. Rest 15 min. Repeat once.",
      "textZh": "擀长，三折，再擀，再折。静置15分钟。重复一次。",
      "stateNote": {
        "visual": "After folds, dough should be cool — if warm, chill",
        "visualZh": "折叠后面团应凉爽——若发热需冷藏",
        "signal": "层次分明"
      }
    },
    {
      "text": "Roll into circle, place filling, wrap. Flatten slightly. Brush egg wash, sprinkle sesame.",
      "textZh": "擀圆，包入馅心，收口。轻压扁。刷蛋液沾芝麻。",
      "stateNote": {
        "visual": "Surface should be smooth — cracks will show after baking",
        "visualZh": "表面应光滑——有裂纹烤后明显",
        "signal": "收口密封"
      }
    },
    {
      "text": "Bake at 180°C (350°F) for 25-28 minutes. Rotate halfway. Cool completely.",
      "textZh": "180°C烤25-28分钟，中途转盘。完全冷却。",
      "stateNote": {
        "visual": "Pastry should be deep golden with visible layer separation",
        "visualZh": "酥皮应深金黄，层间可见分离",
        "timeRef": "约25-28分钟",
        "heat": "medium",
        "signal": "敲底清脆、层间分离"
      }
    }
  ],
  "tips": [
    "Salted egg yolks: steam 5 minutes before wrapping to remove raw smell",
    "Keep dough cool — warm lard = heavy pastry",
    "The double-fold technique creates 9+ layers minimum",
    "Serve at room temperature — refrigeration makes pastry tough"
  ],
  "tipsZh": [
    "咸蛋黄：包前蒸5分钟去腥",
    "保持低温——暖猪油会让酥皮沉重",
    "双折法产生至少9层",
    "室温食用——冷藏会让酥皮变硬"
  ],
  "relatedSlugs": [
    "wife-cake",
    "peach-cake",
    "开口笑"
  ],
  "image": "/images/recipes/egg-yolk-pastry.webp"
};
