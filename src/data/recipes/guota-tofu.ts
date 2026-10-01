import type { Recipe } from "@/lib/types";

/** Guo Ta Tofu — Egg-Battered Braised Tofu (锅塌豆腐) (锅塌豆腐) — Day batch */
export const guota_tofu: Recipe = {
  "id": "guo-ta-dou-fu",
  "slug": "guota-tofu",
  "titleEn": "Guo Ta Tofu — Egg-Battered Braised Tofu (锅塌豆腐)",
  "titleZh": "锅塌豆腐",
  "pinyin": "guō tā dòu fu",
  "cuisine": "鲁菜",
  "cuisineEn": "Shandong",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version pan-fries one slice at a time and simmers in a shallow skillet; restaurant version deep-fries the battoered slices then braises in master stock.",
  "versionNoteZh": "家常版逐片煎、平底锅浅汁慢塌；酒楼版先炸再入高汤塌制。",
  "tags": [
    "shandong",
    "tofu",
    "egg",
    "braised",
    "classic"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "A Shandong banquet technique: tofu slices wear a coat of egg, get fried to gold, then 'collapse' (塌) into broth until the coating drinks it all up.",
  "storyZh": "鲁菜的一道功夫菜：豆腐片裹蛋液煎至金黄，再入汤「塌」到把汁全吃进去。",
  "ingredients": [
    {
      "id": "gtdf-01",
      "nameEn": "firm tofu, cut into 1 cm slices",
      "nameZh": "北豆腐（切1厘米片）",
      "pinyin": "běi dòu fu",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu",
      "note": "Firm, not silken — it must hold a flip.",
      "noteZh": "用北豆腐不用嫩豆腐，翻面才不散。"
    },
    {
      "id": "gtdf-02",
      "nameEn": "large eggs, beaten",
      "nameZh": "鸡蛋（打散）",
      "pinyin": "jī dàn",
      "amountMetric": "2 pc",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "gtdf-03",
      "nameEn": "all-purpose flour",
      "nameZh": "面粉",
      "pinyin": "miàn fěn",
      "amountMetric": "20 g",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gtdf-04",
      "nameEn": "scallion, cut into 3 cm lengths",
      "nameZh": "葱（切3厘米段）",
      "pinyin": "cōng",
      "amountMetric": "20 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "gtdf-05",
      "nameEn": "ginger, sliced thin",
      "nameZh": "姜（切片）",
      "pinyin": "jiāng",
      "amountMetric": "5 g",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "gtdf-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gtdf-07",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "gtdf-08",
      "nameEn": "vegetable stock",
      "nameZh": "素高汤",
      "pinyin": "sù gāo tāng",
      "amountMetric": "200 ml",
      "amountUS": "3/4 cup + 1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gtdf-09",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Press tofu 15 minutes between paper towels; season slices lightly with salt.",
      "textZh": "豆腐用厨房纸压15分钟去水，片上轻撒盐。",
      "zhHint": "压豆腐",
      "stateNote": {
        "visual": "Paper towels come away damp; slices feel firm.",
        "visualZh": "纸巾吸出水、豆腐片变挺。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Slice lifts without bending.",
        "signalZh": "提起不弯。"
      }
    },
    {
      "text": "Dust each slice in flour, then dip into beaten egg to coat both sides.",
      "textZh": "每片先拍薄面粉，再裹满蛋液。",
      "zhHint": "裹蛋",
      "stateNote": {
        "visual": "A thin even yellow film covers the slice.",
        "visualZh": "表面覆一层薄黄衣。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "No bald patches, no dripping pools.",
        "signalZh": "无露白、不积蛋液。"
      }
    },
    {
      "text": "Pan-fry over medium heat 2 minutes per side until golden; work in batches.",
      "textZh": "中火每面煎2分钟至金黄，分批进行。",
      "zhHint": "煎豆腐",
      "stateNote": {
        "visual": "Coating sets into a lacy golden crust.",
        "visualZh": "蛋衣结成金黄网壳。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium",
        "signal": "Edges smell toasty; slice releases easily from the pan.",
        "signalZh": "边缘焦香、能轻松铲起。"
      }
    },
    {
      "text": "Push slices to one side; add scallion and ginger; splash in wine and soy sauce.",
      "textZh": "豆腐推到一边，下葱姜，烹黄酒与生抽。",
      "zhHint": "烹汁",
      "stateNote": {
        "visual": "Liquid sizzles up in an aromatic burst.",
        "visualZh": "汁液遇热腾起香气。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "medium",
        "signal": "Sharp, savoury steam rises.",
        "signalZh": "冲出一股咸鲜热气。"
      }
    },
    {
      "text": "Pour in stock to half the height of the tofu; cover and simmer 6 minutes.",
      "textZh": "倒入高汤至豆腐一半高，加盖焖6分钟。",
      "zhHint": "塌制",
      "stateNote": {
        "visual": "Coating swells and drinks the broth; sauce reduces by half.",
        "visualZh": "蛋衣吸汁鼓起、汤汁收半。",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium-low",
        "signal": "Bubbles are slow and lazy.",
        "signalZh": "汤面微缓冒泡。"
      }
    },
    {
      "text": "Uncover, reduce until the sauce clings, finish with sesame oil.",
      "textZh": "开盖收汁至挂糊，淋香油出锅。",
      "zhHint": "收汁",
      "stateNote": {
        "visual": "Glossy amber glaze; slices hold their shape.",
        "visualZh": "琥珀色亮汁、豆腐完整不散。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Spoon dragged through leaves a clean trail.",
        "signalZh": "勺划过留清痕。"
      }
    }
  ],
  "tips": [
    "Press the tofu properly or the egg coat will slide off.",
    "Flour first, then egg — the flour gives the egg something to grip.",
    "Simmer covered: that is the '塌' part."
  ],
  "tipsZh": [
    "豆腐不压干，蛋衣会脱落。",
    "先粉后蛋，粉给蛋液抓力。",
    "加盖慢焖，这一步才叫「塌」。"
  ],
  "commonMistakes": [
    {
      "mistake": "Using silken tofu so the slices break when flipped.",
      "mistakeZh": "用嫩豆腐，翻面即碎。",
      "fix": "Use firm tofu and press it.",
      "fixZh": "改用北豆腐并压水。"
    },
    {
      "mistake": "Boiling hard so the coating peels off.",
      "mistakeZh": "大火猛滚，蛋衣脱落。",
      "fix": "Keep it at a lazy simmer, covered.",
      "fixZh": "加盖保持微沸。"
    }
  ],
  "variations": [
    "Add shrimp mince to the egg for a seafood version.",
    "Use chicken stock instead of vegetable.",
    "Scatter coriander before serving."
  ],
  "variationsZh": [
    "蛋液里加虾茸，成海鲜版。",
    "素高汤换鸡汤。",
    "出锅撒香菜。"
  ],
  "relatedSlugs": [
    "braised-tofu",
    "iron-plate-tofu",
    "hakka-stuffed-tofu",
    "tomato-tofu",
    "mapo-tofu"
  ],
  "image": "/images/recipes/braised-tofu.webp"
};
