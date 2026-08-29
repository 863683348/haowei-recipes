import type { Recipe } from "@/lib/types";

/** Garlic-Roasted Eggplant (Grilled Sichuan-Style) (蒜蓉烤茄子) — Seed batch */
export const garlic_roasted_eggplant: Recipe = {
  "id": "garlic-roasted-eggplant",
  "slug": "garlic-roasted-eggplant",
  "titleEn": "Garlic-Roasted Eggplant (Grilled Sichuan-Style)",
  "titleZh": "蒜蓉烤茄子",
  "pinyin": "suàn róng kǎo qié zi",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses oven roasting instead of street-side charcoal grilling — eggplants are halved, scored, roasted until collapsed and smoky, then topped with intensely garlicky, chili-flecked sauce. No skewers, no smoke alarm.",
  "versionNoteZh": "家常版改用烤箱代替炭火烤制，茄子对半切、划刀、烤至软塌微焦，再铺上猛蒜辣酱，零油烟、零明火。",
  "tags": [
    "30-min",
    "vegetarian",
    "smoky"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "At Chengdu’s Jinli Street, my uncle ran a tiny stall where he’d roast whole eggplants over glowing charcoal, then split them open and pile on a mountain of raw garlic, chili oil, and cilantro. He told me, 'The magic is in the contrast — hot charcoal smoke meets cold, pungent garlic. At home? Oven does 90% — just don’t skip the raw garlic finish.'",
  "storyZh": "成都锦里街上，舅舅摆小摊，炭火烤整茄至焦香，剖开铺满生蒜末、辣椒油和香菜。他说：‘妙在冷热撞——炭烟热，蒜泥凉。家里烤箱顶九成，但生蒜绝不能省！’",
  "ingredients": [
    {
      "id": "gr-01",
      "nameEn": "Chinese eggplant",
      "nameZh": "长条茄子",
      "pinyin": "cháng tiáo qié zi",
      "amountMetric": "300 g",
      "amountUS": "1½ medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "gr-02",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "30 g",
      "amountUS": "6 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "gr-03",
      "nameEn": "chili oil with sediment",
      "nameZh": "红油辣子（带油渣）",
      "pinyin": "hóng yóu là zǐ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: 1 tsp neutral oil + ½ tsp crushed red pepper flakes",
      "noteZh": "替代：1茶匙无味油 + ½茶匙干辣椒碎"
    },
    {
      "id": "gr-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gr-05",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Preheat oven to 220°C (425°F). Halve eggplants lengthwise. Score flesh diagonally in 1-cm-deep crisscross pattern — do not cut through skin.",
      "textZh": "烤箱预热220°C（425°F）。茄子纵剖两半，在茄肉上斜刀划1厘米深十字花刀，勿切断茄皮。",
      "zhHint": "划刀防缩",
      "stateNote": {
        "visual": "Flesh opens slightly along cuts, revealing white interior",
        "visualZh": "茄肉沿刀口微张，露出洁白内里",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Knife meets slight resistance — skin intact, flesh yielding",
        "signalZh": "刀感微阻——茄皮完好，茄肉已软"
      }
    },
    {
      "text": "Place cut-side up on a foil-lined baking sheet. Roast 20 minutes until skin wrinkles, flesh collapses, and edges char lightly.",
      "textZh": "茄子切面朝上置于铺锡纸烤盘，烤20分钟，至表皮起皱、茄肉塌陷、边缘微焦。",
      "zhHint": "烤至塌软",
      "stateNote": {
        "visual": "Skin deeply wrinkled; flesh bulges outward and feels very soft when pressed",
        "visualZh": "表皮深皱；茄肉外鼓，按压极软",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "high",
        "signal": "Edges turn dark brown and smell faintly smoky",
        "signalZh": "边缘转深褐，散发淡淡焦香"
      }
    },
    {
      "text": "Meanwhile, finely mince garlic and scallions. Mix with chili oil, light soy sauce, and 5 ml (1 tsp) water to form a wet, fragrant paste.",
      "textZh": "同时将蒜、葱切极细末，与辣椒油、生抽、5毫升（1茶匙）水拌匀成湿润香辣糊。",
      "zhHint": "现剁现拌",
      "stateNote": {
        "visual": "Paste glistens with oil and holds together without separating",
        "visualZh": "糊状油润，不析油、不散开",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Aroma rises sharply — pungent, warm, and layered",
        "signalZh": "蒜香猛烈上扬，辛香复合"
      }
    },
    {
      "text": "Carefully scoop out roasted flesh, leaving 3-mm shell intact. Mash lightly with fork, then fold in sauce mixture.",
      "textZh": "小心挖出茄肉，保留约3毫米厚茄壳。用叉轻压成泥，拌入酱料糊。",
      "zhHint": "留壳拌馅",
      "stateNote": {
        "visual": "Mixture turns pale purple-gray and becomes cohesive but not pasty",
        "visualZh": "混合物呈淡紫灰，成团但不糊烂",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Fork glides smoothly — no large lumps remain",
        "signalZh": "叉子顺滑推进，无大块未拌匀"
      }
    },
    {
      "text": "Mound mixture back into shells. Broil on high for 2 minutes until top bubbles and edges crisp.",
      "textZh": "将茄馅填回茄壳，入烤箱上层炙烤2分钟，至表面冒泡、边缘微脆。",
      "zhHint": "炙烤上色",
      "stateNote": {
        "visual": "Top develops golden-brown speckles and slight blistering",
        "visualZh": "表面浮现金褐斑点，略起小泡",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Sizzling sound returns — oil begins to pop gently",
        "signalZh": "再次响起滋滋声——油开始轻爆"
      }
    }
  ],
  "tips": [
    "Roasting whole halves preserves moisture better than diced eggplant.",
    "Use fresh garlic — pre-minced lacks punch and oxidizes too fast.",
    "For extra depth, brush shells with ½ tsp sesame oil before broiling."
  ],
  "tipsZh": [
    "整半烤比切丁烤更锁水多汁。",
    "务必用新鲜蒜末——瓶装蒜泥风味寡淡且易氧化。",
    "炙烤前可在茄壳刷½茶匙芝麻油，增香添润。"
  ],
  "relatedSlugs": [
    "yu-xiang-eggplant",
    "hong-shao-eggplant"
  ],
  "image": "/images/recipes/garlic-roasted-eggplant.webp"
};
