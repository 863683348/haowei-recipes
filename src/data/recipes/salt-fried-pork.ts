import type { Recipe } from "@/lib/types";

/** Salt-Fried Pork (盐煎肉) — Seed batch */
export const salt_fried_pork: Recipe = {
  "id": "yan-jian-rou",
  "slug": "salt-fried-pork",
  "titleEn": "Salt-Fried Pork",
  "titleZh": "盐煎肉",
  "pinyin": "yán jiān ròu",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses leaner pork belly (skinless) and less oil than restaurant-style, emphasizing savory saltiness over richness.",
  "versionNoteZh": "家常版选用去皮五花肉，用油量更少，突出咸鲜本味，而非餐馆版的浓油赤酱。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Chengdu’s Qingyang District taught me this when I was twelve — she’d fry the pork in her wok until it crackled like autumn leaves, then toss in garlic sprouts from her balcony pot. She said, 'It’s not about heat, it’s about listening to the meat.'",
  "storyZh": "我十二岁时，成都青羊区的姨妈教我这道菜——她把猪肉在铁锅里煎到噼啪作响，像秋叶落地，再撒入阳台花盆里现掐的蒜苗。她说：‘火候不难，难的是听肉的声音。’",
  "ingredients": [
    {
      "id": "yr-01",
      "nameEn": "pork belly, skinless, finely diced (1 cm)",
      "nameZh": "五花肉（去皮），切1厘米见方丁",
      "pinyin": "wǔ huā ròu",
      "amountMetric": "300 g",
      "amountUS": "1 ¼ cups (diced)",
      "category": "protein",
      "pantry": "local",
      "note": "Choose pork with thin, even fat layers — avoid pre-ground or minced; texture is key.",
      "noteZh": "选肥瘦均匀、肥层薄的五花肉；禁用预绞肉或肉末，口感全靠手工切丁。"
    },
    {
      "id": "yr-02",
      "nameEn": "fermented broad bean paste (doubanjiang)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for 'Pixian' on label; substitute Korean gochujang only if unavailable (use half amount).",
      "noteZh": "务必选包装标有‘郫县’二字者；若无，可用韩式辣酱替代（减半用量）。",
      "termKey": "doubanjiang"
    },
    {
      "id": "yr-03",
      "nameEn": "garlic chives or garlic sprouts, cut into 3 cm pieces",
      "nameZh": "蒜苗（或蒜苔），切3厘米段",
      "pinyin": "suàn miáo",
      "amountMetric": "120 g",
      "amountUS": "1 cup (loosely packed)",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute scallion greens + 1 tsp minced garlic if garlic chives unavailable.",
      "noteZh": "若无蒜苗，可用葱绿段+1茶匙蒜末替代。"
    },
    {
      "id": "yr-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "",
      "noteZh": "",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "yr-05",
      "nameEn": "Sichuan peppercorn, lightly toasted and ground",
      "nameZh": "花椒（焙香后碾碎）",
      "pinyin": "huā jiāo",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Toast whole Sichuan peppercorns in dry pan 1 min until fragrant; cool before grinding.",
      "noteZh": "整粒花椒干锅焙香1分钟至出麻香，晾凉后再碾碎。",
      "termKey": "sichuan-peppercorn"
    }
  ],
  "steps": [
    {
      "text": "Rinse diced pork and pat completely dry with paper towels. Let sit uncovered 5 minutes to further air-dry surface moisture.",
      "textZh": "将肉丁清水冲洗后，用厨房纸彻底吸干水分；敞口静置5分钟，让表面进一步风干。",
      "zhHint": "务必擦干！",
      "stateNote": {
        "visual": "Pork cubes look matte, not shiny or damp.",
        "visualZh": "肉丁呈哑光状，无水光或湿润感。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "No water beads form on surface when touched.",
        "signalZh": "指尖轻触无水珠渗出。"
      },
      "tip": "Dry meat ensures proper browning instead of steaming.",
      "tipZh": "肉丁干燥才能煎出焦香，否则会出水变蒸煮。"
    },
    {
      "text": "Heat wok over medium-high heat until a drop of water sizzles and vanishes instantly. Add pork and stir-fry without oil until fat renders and edges turn golden-brown.",
      "textZh": "旺火烧热铁锅，滴水即爆裂蒸发；下肉丁，不放油干煸至出油、边缘微金黄。",
      "zhHint": "干煸出油是关键",
      "stateNote": {
        "visual": "Small droplets of clear fat gather around browned cubes.",
        "visualZh": "金黄肉丁周围聚起透明小油珠。",
        "timeRef": "4–5 minutes",
        "timeRefZh": "4–5 分钟",
        "heat": "medium-high",
        "signal": "A rich, nutty aroma rises and wok emits faint white smoke.",
        "signalZh": "散发坚果香，锅底泛起淡白烟气。"
      }
    },
    {
      "text": "Push pork to one side. Add doubanjiang to empty space and stir-fry 30 seconds until oil turns brick-red and fragrance blooms.",
      "textZh": "将肉拨至锅边，空出位置放入豆瓣酱，小火炒30秒至油色转砖红、香气迸发。",
      "zhHint": "豆瓣酱需煸透",
      "stateNote": {
        "visual": "Oil separates and deepens to rusty red; tiny bubbles rise steadily.",
        "visualZh": "油析出并转为锈红色，表面持续冒细密小泡。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-low",
        "signal": "Aroma shifts from raw bean to warm, fermented depth.",
        "signalZh": "气味由生豆腥转为醇厚发酵香。"
      }
    },
    {
      "text": "Mix pork back into sauce. Add light soy sauce and stir-fry 1 minute until evenly coated and glossy.",
      "textZh": "将肉回拌入酱中，加生抽，大火翻炒1分钟至酱汁均匀裹附、油亮。",
      "zhHint": "快炒上色",
      "stateNote": {
        "visual": "Each cube glistens with a thin, mahogany-hued glaze.",
        "visualZh": "每粒肉丁裹着一层枣红色薄亮酱汁。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Sizzle becomes louder and sharper.",
        "signalZh": "锅中滋滋声更响更脆。"
      }
    },
    {
      "text": "Add garlic chives and ground Sichuan pepper. Toss 60 seconds — just until chives soften slightly but retain bright green color and crisp-tender bite.",
      "textZh": "下蒜苗和花椒粉，大火快翻60秒，至蒜苗断生仍翠绿、脆嫩。",
      "zhHint": "最后下料，保色保脆",
      "stateNote": {
        "visual": "Garlic chives brighten visibly; no yellowing at tips.",
        "visualZh": "蒜苗颜色明显鲜亮，尖端无泛黄。",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "high",
        "signal": "A fresh, grassy scent cuts through the savory base.",
        "signalZh": "清冽草香穿透咸鲜底味。"
      }
    }
  ],
  "tips": [
    "Use a carbon-steel or cast-iron wok — nonstick prevents proper Maillard browning.",
    "Doubanjiang must be fried until oil separates; undercooked paste tastes raw and muddy.",
    "Serve immediately — residual heat continues cooking garlic chives."
  ],
  "tipsZh": [
    "务必用熟铁或铸铁锅——不粘锅无法形成美拉德焦香。",
    "豆瓣酱须煸至油红分离，未煸透则有生豆腥与浑浊感。",
    "出锅即食，余温会使蒜苗继续变软。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/salt-fried-pork.webp"
};
