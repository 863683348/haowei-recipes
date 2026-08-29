import type { Recipe } from "@/lib/types";

/** Authentic Sichuan Mala Hot Pot Base (正宗川味麻辣火锅底料) — Seed batch */
export const mala_hot_pot_base: Recipe = {
  "id": "mala-hot-pot-base",
  "slug": "mala-hot-pot-base",
  "titleEn": "Authentic Sichuan Mala Hot Pot Base",
  "titleZh": "正宗川味麻辣火锅底料",
  "pinyin": "zheng zong chuan wei ma la huo guo di liao",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "This is the home-style version: less oil than restaurant versions, balanced heat and numbing, built in layers—not just dumped in. My aunt in Jinniu District taught me to bloom spices slowly so the mala doesn’t burn or turn bitter.",
  "versionNoteZh": "这是家常版：用油量比餐馆少，麻与辣更均衡、分层炒制而非一锅倒。我金牛区的姑妈教我慢火煸香香料，避免焦苦。",
  "tags": [
    "45-min",
    "weeknight",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every winter holiday in Chengdu, my grandmother would stir this base in her wok while singing old Sichuan opera tunes — she said the rhythm kept the heat steady. We’d eat it with hand-cut beef and lotus root from the Jinjiang River market.",
  "storyZh": "每年成都过冬至，奶奶一边在铁锅里翻炒这底料，一边哼川剧老调——她说节奏能让火候稳当。我们配手切牛肉和锦江河市集买的藕片一起涮。",
  "ingredients": [
    {
      "id": "ml-01",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "hua jiao",
      "amountMetric": "12 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Use whole red or brown Sichuan peppercorns; avoid pre-ground (loses aroma fast)",
      "noteZh": "选整粒红/褐色花椒，勿用预磨粉（香气易散）",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "ml-02",
      "nameEn": "Dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gan hong la jiao",
      "amountMetric": "30 g",
      "amountUS": "1/4 cup",
      "category": "spice",
      "pantry": "asian",
      "note": "Use mild-to-medium chilies like Er Jing Tiao or substitute Korean gochugaru (1:1) for accessible heat",
      "noteZh": "推荐二荆条干椒；若难购，可用韩式粗辣椒粉等量替代",
      "termKey": "dried-chili"
    },
    {
      "id": "ml-03",
      "nameEn": "Doubanjiang (spicy fermented broad bean paste)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pi xian dou ban jiang",
      "amountMetric": "80 g",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Must be fermented, brick-red, and oily — look for 'Pixian' on label",
      "noteZh": "须选发酵型、砖红色、带油润感的郫县豆瓣酱，认准‘郫县’字样",
      "termKey": "doubanjiang"
    },
    {
      "id": "ml-04",
      "nameEn": "Peanut oil",
      "nameZh": "花生油",
      "pinyin": "hua sheng you",
      "amountMetric": "120 ml",
      "amountUS": "1/2 cup",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Substitute neutral oil like canola or sunflower if peanut oil unavailable",
      "noteZh": "若无花生油，可用菜籽油或葵花籽油替代"
    },
    {
      "id": "ml-05",
      "nameEn": "Fresh ginger, minced",
      "nameZh": "生姜（切末）",
      "pinyin": "sheng jiang",
      "amountMetric": "25 g",
      "amountUS": "1 tbsp minced",
      "category": "produce",
      "pantry": "local",
      "note": "Peel and grate or finely mince — no dried ginger substitution",
      "noteZh": "去皮后现磨或细切，不可用干姜粉替代",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Toast Sichuan peppercorns in a dry wok over medium-low heat until fragrant and slightly puffed (do not brown). Transfer to a mortar and lightly crush with pestle.",
      "textZh": "干锅小火焙香花椒，至微膨、散发麻香（勿焦），倒入臼中轻捣碎。",
      "zhHint": "焙香后轻捣",
      "stateNote": {
        "visual": "Peppercorns turn glossy and swell slightly",
        "visualZh": "花椒泛油光、微微鼓起",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium-low",
        "signal": "Aromatic citrus-mint scent fills the kitchen",
        "signalZh": "厨房弥漫柑橘薄荷香"
      }
    },
    {
      "text": "Rinse dried chilies under warm water, pat dry, then roughly chop. Soak in 60 ml hot water for 10 minutes. Drain, reserving soaking liquid.",
      "textZh": "干辣椒用温水冲洗后擦干，粗切，加60毫升热水浸泡10分钟。捞出沥干，泡椒水留用。",
      "zhHint": "泡椒水别倒掉",
      "stateNote": {
        "visual": "Chilies soften and deepen to brick red",
        "visualZh": "辣椒变软、色泽转为砖红",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Water turns faintly reddish and cloudy",
        "signalZh": "泡水呈淡红浑浊状"
      }
    },
    {
      "text": "Heat peanut oil in a heavy-bottomed pot or wok over medium heat. Add minced ginger and stir 1 minute until aromatic.",
      "textZh": "厚底锅或铁锅中火加热花生油，下姜末爆香1分钟。",
      "zhHint": "姜末微颤即香",
      "stateNote": {
        "visual": "Ginger sizzles gently without browning",
        "visualZh": "姜末轻响不焦黄",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Fragrant steam rises, no smoke",
        "signalZh": "升腾香气，无油烟"
      }
    },
    {
      "text": "Add doubanjiang and stir-fry 5–6 minutes until oil separates and turns brick-red. Scrape bottom constantly to prevent sticking.",
      "textZh": "加入郫县豆瓣酱，中火炒5–6分钟至油红、酱体起沙、锅底显油亮。",
      "zhHint": "炒到油红起沙",
      "stateNote": {
        "visual": "Red oil pools around thick, grainy paste",
        "visualZh": "红油浮于酱体四周，酱质显颗粒感",
        "timeRef": "5–6 minutes",
        "timeRefZh": "5–6 分钟",
        "heat": "medium",
        "signal": "Distinct fermented bean aroma deepens, not sour",
        "signalZh": "豆香醇厚，无酸馊味"
      }
    },
    {
      "text": "Add crushed Sichuan peppercorns and chopped chilies. Stir-fry 3 more minutes. Pour in reserved chili soaking liquid and simmer 10 minutes uncovered.",
      "textZh": "下花椒碎与泡好的辣椒段，再炒3分钟；倒入泡椒水，敞盖小火熬10分钟。",
      "zhHint": "敞盖慢熬出味",
      "stateNote": {
        "visual": "Mixture bubbles softly with red foam at edges",
        "visualZh": "边缘泛细密红沫，汤汁微滚",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Aroma becomes layered — numbing first, then heat, then depth",
        "signalZh": "香气分层：先麻、后辣、再醇厚"
      }
    }
  ],
  "tips": [
    "Store cooled base in an airtight jar in fridge up to 3 weeks — skim any surface oil before use.",
    "For milder heat, remove chili seeds before chopping.",
    "Always add fresh broth (not water) when diluting for hot pot — chicken or pork bone stock adds richness."
  ],
  "tipsZh": [
    "冷却后密封冷藏，可存3周；使用前撇去表面浮油。",
    "减辣做法：剁椒前去籽。",
    "涮锅时务必用高汤（非清水）稀释底料——鸡汤或猪骨汤更醇厚。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/mala-hot-pot-base.webp"
};
