import type { Recipe } from "@/lib/types";

/** Dry Chili Dipping Bowl (Gān Dié) (干碟) — Seed batch */
export const dry_chili_dipping_bowl: Recipe = {
  "id": "gan-die",
  "slug": "dry-chili-dipping-bowl",
  "titleEn": "Dry Chili Dipping Bowl (Gān Dié)",
  "titleZh": "干碟",
  "pinyin": "gān dié",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "easy",
  "timeMin": 8,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version skips frying—uses dry-toasted chili flakes, Sichuan peppercorn, and roasted peanuts for crunch and depth. Restaurants often fry dried chilies in oil; our version is lighter, brighter, and ready in under 10 minutes.",
  "versionNoteZh": "家庭版免油炸——用干焙辣椒碎、花椒与焙香花生仁，酥脆醇香。餐馆版多用热油炸干辣椒；我们做法更清爽明亮，10分钟内完成。",
  "tags": [
    "5-min",
    "dipping-sauce",
    "spicy"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "At my cousin’s hot pot stall near Jiefangbei Square in Chongqing, she served gān dié in tiny ceramic bowls lined with parchment. She’d toast chilies and peanuts separately in a wok, then grind them with salt and Sichuan peppercorn—never a drop of oil.",
  "storyZh": "我在重庆解放碑广场旁表姐的火锅摊，干碟盛在铺了油纸的小瓷碗里。她总在锅里分别焙香辣椒与花生，再同盐、花椒一起舂碎——一滴油都不加。",
  "ingredients": [
    {
      "id": "gd-01",
      "nameEn": "Sichuan chili flakes (coarse, not powder)",
      "nameZh": "四川辣椒碎（粗粒）",
      "pinyin": "sì chuān là jiāo suì",
      "amountMetric": "20 g",
      "amountUS": "3 tbsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Look for ‘er jing tiao’ or ‘facing heaven’ chili flakes—bright red, fruity heat. Sub: ancho + chipotle flakes (2:1 ratio).",
      "noteZh": "选‘二荆条’或‘朝天椒’粗碎——色红、果香辣。替代：安乔辣椒碎+烟熏墨西哥辣椒碎（2:1）。"
    },
    {
      "id": "gd-02",
      "nameEn": "Sichuan peppercorns, toasted and ground",
      "nameZh": "花椒（焙香后碾碎）",
      "pinyin": "huā jiāo",
      "amountMetric": "2 g",
      "amountUS": "½ tsp whole, ground",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "gd-03",
      "nameEn": "roasted unsalted peanuts, coarsely crushed",
      "nameZh": "焙香无盐花生仁（粗碎）",
      "pinyin": "péi xiāng huā shēng",
      "amountMetric": "30 g",
      "amountUS": "¼ cup crushed",
      "category": "protein",
      "pantry": "local",
      "note": "Buy raw peanuts and toast yourself in a dry pan for best flavor. Sub: roasted cashews (softer crunch).",
      "noteZh": "建议买生花生自焙，风味最佳。替代：焙香腰果（口感更绵软）。"
    },
    {
      "id": "gd-04",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "gd-05",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "白胡椒粉（现磨）",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "In a dry wok or skillet over medium heat, toast Sichuan chili flakes for 1 minute—stir constantly until fragrant and deepening in color.",
      "textZh": "干锅中火加热，下辣椒碎不停翻炒1分钟，至香气迸发、颜色转深。",
      "zhHint": "干锅中火焙香辣椒",
      "stateNote": {
        "visual": "Flakes darken from brick-red to burnt-orange; no smoking or blackening",
        "visualZh": "辣椒碎由砖红转为焦橙色；无冒烟或焦黑",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Aroma shifts from grassy to raisin-like sweetness",
        "signalZh": "香气由青草味转为葡萄干般的甜香"
      }
    },
    {
      "text": "Immediately transfer toasted chili flakes to a plate to cool—this stops cooking and preserves volatile oils.",
      "textZh": "迅速盛出至盘中摊凉——终止余热，锁住挥发性芳香油。",
      "zhHint": "速出锅摊凉",
      "stateNote": {
        "visual": "Flakes retain glossy sheen; steam rises visibly",
        "visualZh": "辣椒碎仍泛油光；可见明显热气升腾",
        "timeRef": "30 seconds cooling",
        "timeRefZh": "30 秒摊凉",
        "signal": "Touching a flake feels warm—not hot—and yields slightly",
        "signalZh": "触碰一片，微温不烫手，略带弹性"
      }
    },
    {
      "text": "In same wok (off heat), toast Sichuan peppercorns for 45 seconds until aromatic, then transfer to cool separately.",
      "textZh": "同一锅（关火），焙香花椒45秒至出香，随即盛出单独摊凉。",
      "zhHint": "同锅焙花椒，分开放凉",
      "stateNote": {
        "visual": "Peppercorns puff slightly and emit visible vapor",
        "visualZh": "花椒粒微膨，散发可见水汽",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium",
        "signal": "Citrus-and-camphor scent unmistakable within 20 seconds",
        "signalZh": "20秒内即散发清晰柑橘樟脑香"
      }
    },
    {
      "text": "Grind toasted chili flakes and Sichuan peppercorns together in a mortar or spice grinder until coarse—like cracked black pepper.",
      "textZh": "将焙香辣椒碎与花椒一同放入石臼或研磨机，粗磨至如黑胡椒碎大小。",
      "zhHint": "共磨保风味融合",
      "stateNote": {
        "visual": "Rust-red mixture with flecks of gray-brown peppercorn husk",
        "visualZh": "铁锈红色混合物，夹杂灰褐色花椒皮碎屑",
        "timeRef": "15 seconds grinding",
        "timeRefZh": "研磨15秒",
        "signal": "Texture is gritty—not powdery—and releases aroma with each tap",
        "signalZh": "质地微糙不粉状，轻敲即散香"
      }
    },
    {
      "text": "In a bowl, combine ground chili-peppercorn mix, crushed peanuts, fine sea salt, and freshly ground white pepper. Stir once with a spoon—do not overmix.",
      "textZh": "碗中混合辣椒花椒粉、花生碎、细海盐与现磨白胡椒粉，轻拌一次即可，切勿过度搅拌。",
      "zhHint": "轻拌一次，保酥脆",
      "stateNote": {
        "visual": "Speckled rust-and-cream mixture with visible peanut bits",
        "visualZh": "铁锈色与米白色相间，可见完整花生碎粒",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "Crunch audible when spoon scrapes bowl bottom",
        "signalZh": "勺刮碗底，发出清晰酥脆声"
      }
    }
  ],
  "tips": [
    "Store in an airtight container away from light—lasts 2 weeks at room temp.",
    "Always crush peanuts by hand with a rolling pin for better texture control.",
    "Add a pinch of sugar only if serving with very fatty meats—never in family version."
  ],
  "tipsZh": [
    "密封避光保存，室温可存2周。",
    "花生务必手擀粗碎，口感更可控。",
    "仅搭配肥肉时可加一小撮糖——家庭版从不加糖。"
  ],
  "relatedSlugs": [
    "sesame-sauce-dipping-sauce",
    "oil-dipping-bowl"
  ],
  "image": "/images/recipes/dry-chili-dipping-bowl.webp"
};
