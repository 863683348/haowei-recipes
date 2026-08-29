import type { Recipe } from "@/lib/types";

/** Silver Fungus and Lotus Seed Soup (银耳莲子羹) — Seed batch */
export const silver_fungus_lotus_seed_soup: Recipe = {
  "id": "yin-er-lian-zi-geng",
  "slug": "silver-fungus-lotus-seed-soup",
  "titleEn": "Silver Fungus and Lotus Seed Soup",
  "titleZh": "银耳莲子羹",
  "pinyin": "yín ěr lián zǐ gēng",
  "cuisine": "汤羹凉菜",
  "cuisineEn": "Soup & Dessert",
  "region": "Suzhou",
  "regionZh": "苏州",
  "difficulty": "easy",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses gentle simmering and no thickening agents — texture relies on natural silver fungus gelatinization, unlike restaurant versions that sometimes add tapioca.",
  "versionNoteZh": "家常版仅靠银耳自然出胶，不添加木薯粉等增稠剂；餐馆版有时为加快出胶会加少量淀粉。",
  "tags": [
    "slow-cook",
    "comfort",
    "dessert"
  ],
  "dietary": [
    "vegetarian",
    "vegan",
    "gluten-free"
  ],
  "story": "My grandmother in Suzhou soaked dried silver fungus overnight in a blue-glazed ceramic bowl, then stirred the soup with a bamboo spoon while humming Suzhou opera. She said the lotus seeds must be pearly-white and plump — never shriveled — because 'a good lotus seed holds its breath like a quiet child.'",
  "storyZh": "我苏州的外婆总用青花瓷碗提前一晚泡发银耳，再用竹勺慢慢搅动羹汤，嘴里哼着苏州评弹。她说莲子要选雪白饱满的，不能干瘪，‘好莲子像安静的孩子，含着一口气’。",
  "ingredients": [
    {
      "id": "ye-01",
      "nameEn": "dried silver fungus (snow fungus)",
      "nameZh": "干银耳",
      "pinyin": "gān yín ěr",
      "amountMetric": "15 g",
      "amountUS": "½ oz (about 1 large cup when rehydrated)",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for pale ivory, slightly crinkled caps — avoid yellowed or brittle pieces.",
      "noteZh": "选象牙色、微皱的朵状，避免发黄或脆硬者。"
    },
    {
      "id": "ye-02",
      "nameEn": "dried lotus seeds (unsalted, skin-on)",
      "nameZh": "干莲子（带皮、未盐渍）",
      "pinyin": "gān lián zǐ",
      "amountMetric": "60 g",
      "amountUS": "¼ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: canned lotus seeds (drained, rinsed) — reduce cooking time by 30 min.",
      "noteZh": "替代：罐装莲子（沥干冲洗），减少炖煮时间30分钟。"
    },
    {
      "id": "ye-03",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "80 g",
      "amountUS": "⅓ cup granulated (or ½ cup crushed)",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Crush with mortar or rolling pin before adding — dissolves evenly.",
      "noteZh": "使用前敲碎，更易溶化。"
    },
    {
      "id": "ye-04",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "1200 ml",
      "amountUS": "5 cups",
      "category": "western-pantry",
      "pantry": "local",
      "note": "",
      "noteZh": ""
    }
  ],
  "steps": [
    {
      "text": "Rinse dried silver fungus under cool water; remove hard yellow base (the 'stump') and tear into small, bite-sized pieces. Soak in room-temperature water for 3 hours until soft and translucent.",
      "textZh": "银耳用冷水冲洗，剪去底部黄色硬蒂，撕成小朵。室温清水浸泡3小时，至柔软透亮。",
      "zhHint": "泡发至半透明",
      "stateNote": {
        "visual": "Fungus expands to 4–5x original size, edges curl gently, jelly-like sheen appears.",
        "visualZh": "银耳体积膨大4–5倍，边缘微卷，表面泛出胶质光泽。",
        "timeRef": "3 hours",
        "timeRefZh": "3 小时",
        "signal": "No chalky white residue remains when rubbed between fingers.",
        "signalZh": "手指搓揉无粉白残渣。"
      }
    },
    {
      "text": "Rinse soaked silver fungus and drained lotus seeds together in a fine-mesh strainer. Discard soaking water.",
      "textZh": "将泡好的银耳与莲子一同过细网筛，冲洗干净，倒掉泡水。",
      "zhHint": "同洗同滤",
      "stateNote": {
        "visual": "Water runs clear after second rinse.",
        "visualZh": "第二遍冲洗后水流变清。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Lotus seeds feel smooth and heavy, not gritty.",
        "signalZh": "莲子手感沉实光滑，无沙粒感。"
      }
    },
    {
      "text": "Combine silver fungus, lotus seeds, and water in a heavy-bottomed pot. Bring to a gentle boil over medium-high heat, then immediately reduce to low heat.",
      "textZh": "银耳、莲子与清水同入厚底锅，中大火烧沸后立刻转最小火。",
      "zhHint": "沸即转小火",
      "stateNote": {
        "visual": "Tiny bubbles rise steadily at edges, surface barely shivers.",
        "visualZh": "锅边持续冒细泡，水面仅微颤。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "First wisp of steam rises without vigorous bubbling.",
        "signalZh": "初见轻烟，无翻滚气泡。"
      }
    },
    {
      "text": "Simmer uncovered for 75 minutes, stirring gently every 15 minutes with a wooden spoon. Skim off any foam that forms on top.",
      "textZh": "敞盖小火慢炖75分钟，每15分钟用木勺轻搅一次，撇去浮沫。",
      "zhHint": "勤搅少碰",
      "stateNote": {
        "visual": "Liquid turns pale amber and slightly viscous; silver fungus threads separate and float freely.",
        "visualZh": "汤色呈浅琥珀色，略显粘稠；银耳丝缕分明，悬浮舒展。",
        "timeRef": "75 minutes",
        "timeRefZh": "75 分钟",
        "heat": "low",
        "signal": "A spoon drawn through leaves a slow-trailing trail.",
        "signalZh": "勺背划过留缓慢拖痕。"
      }
    },
    {
      "text": "Add rock sugar and stir until fully dissolved (about 3 minutes). Turn off heat and let cool slightly before serving warm or chilled.",
      "textZh": "加入冰糖，小火搅拌至完全融化（约3分钟）。关火，稍晾后热食或冷藏后冷食。",
      "zhHint": "糖融即离火",
      "stateNote": {
        "visual": "Liquid glistens uniformly; no undissolved crystals visible at bottom.",
        "visualZh": "汤汁均匀透亮，锅底无未溶晶粒。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "Liquid emits a clean, sweet aroma — no raw sugar scent remains.",
        "signalZh": "散发清甜香，无生糖味。"
      }
    }
  ],
  "tips": [
    "Use only unsalted, skin-on dried lotus seeds — peeled or salted versions turn mushy or salty.",
    "Never boil silver fungus vigorously — high heat breaks down polysaccharides and prevents gel formation.",
    "For deeper fragrance, add 1 tsp dried osmanthus flowers (guì huā) in last 5 minutes."
  ],
  "tipsZh": [
    "务必选用未脱皮、未盐渍的干莲子，去皮或盐渍莲子易烂且偏咸。",
    "银耳切忌猛火久煮，高温会破坏多糖结构，无法出胶。",
    "追求馥郁香气，可在最后5分钟加入1茶匙干桂花（桂花）。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/silver-fungus-lotus-seed-soup.webp"
};
