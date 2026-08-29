import type { Recipe } from "@/lib/types";

/** Garlic-Steamed Shrimp with Vermicelli (蒜蓉粉丝蒸虾) — Seed batch */
export const garlic_shrimp_vermicelli: Recipe = {
  "id": "garlic-shrimp-vermicelli",
  "slug": "garlic-shrimp-vermicelli",
  "titleEn": "Garlic-Steamed Shrimp with Vermicelli",
  "titleZh": "蒜蓉粉丝蒸虾",
  "pinyin": "suàn róng fěn sī zhēng xiā",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Shenzhen",
  "regionZh": "深圳",
  "difficulty": "easy",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips dried shrimp and fermented black beans—uses fresh garlic, soaked vermicelli, and gentle steam to highlight sweetness of shrimp.",
  "versionNoteZh": "家常版不加虾米和豆豉，仅用新鲜蒜蓉、泡发粉丝与清蒸，凸显虾肉本味甜鲜。",
  "tags": [
    "30-min",
    "weeknight",
    "seafood"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Shekou ran a seafood stall in the 90s—he’d steam this for lunch every Tuesday, using ‘just-opened’ tiger prawns from Yantian pier. He’d say, 'The garlic must smell like summer rain, not burnt earth.'",
  "storyZh": "我在蛇口的叔父90年代经营海鲜摊，每周二中午必做这道菜，用盐田码头刚卸的活虎虾。他说：‘蒜香要像夏日阵雨，不能像焦土。’",
  "ingredients": [
    {
      "id": "shrimp-01",
      "nameEn": "large shrimp",
      "nameZh": "大虾",
      "pinyin": "dà xiā",
      "amountMetric": "300 g",
      "amountUS": "10.6 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Peel and devein, leaving tails intact; butterfly lightly along back",
      "noteZh": "去壳去线，留尾，背部浅切开便于入味"
    },
    {
      "id": "shrimp-02",
      "nameEn": "dried vermicelli (mung bean or rice)",
      "nameZh": "干粉丝",
      "pinyin": "gān fěn sī",
      "amountMetric": "80 g",
      "amountUS": "2.8 oz (about 1 bundle)",
      "category": "staple",
      "pantry": "asian",
      "note": "Soak in warm water 15 min until pliable but not mushy",
      "noteZh": "温水泡15分钟，至柔韧不烂"
    },
    {
      "id": "shrimp-03",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "4 cloves (20 g)",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "shrimp-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "1.5 tbsp (22 ml)",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "shrimp-05",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "1 tsp (5 ml)",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Soak vermicelli in warm water for 15 minutes. Drain well and cut into 10-cm lengths. Spread evenly in a heatproof dish.",
      "textZh": "粉丝温水泡15分钟，沥干后剪成10厘米段，平铺于耐热盘中。",
      "zhHint": "沥干防蒸水",
      "stateNote": {
        "visual": "Vermicelli is soft, translucent, and separates easily",
        "visualZh": "粉丝柔软透亮，能轻松分开",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "No opaque white core remains when bent",
        "signalZh": "弯曲时无乳白硬芯"
      }
    },
    {
      "text": "Mince garlic finely. Heat 1 tsp oil in a small pan over medium-low heat; sauté garlic 1 minute until fragrant but not browned.",
      "textZh": "蒜切极细末；小锅中火微热1茶匙油，下蒜末炒1分钟至香而不焦。",
      "zhHint": "蒜末金黄即离火",
      "stateNote": {
        "visual": "Garlic turns pale ivory with slight translucence",
        "visualZh": "蒜末呈淡象牙色，略带半透明",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-low",
        "signal": "Aromas fill the kitchen—clean, pungent, sweet",
        "signalZh": "厨房充满清爽辛香与微甜气息"
      }
    },
    {
      "text": "Arrange shrimp over vermicelli in a single layer. Spoon garlic oil and minced garlic evenly over shrimp.",
      "textZh": "将虾平铺于粉丝上，均匀淋入蒜油，并撒上蒜末。",
      "zhHint": "虾背朝上",
      "stateNote": {
        "visual": "Each shrimp is fully visible, spaced 1 cm apart",
        "visualZh": "每只虾清晰可见，间距约1厘米",
        "timeRef": "immediate",
        "timeRefZh": "即刻",
        "signal": "Oil glistens on shrimp surface without pooling",
        "signalZh": "油光浮于虾身，无积液"
      }
    },
    {
      "text": "Drizzle light soy sauce and sesame oil over top. Steam over briskly boiling water for 8 minutes.",
      "textZh": "淋入生抽和芝麻油，放入已沸水的蒸锅，大火蒸8分钟。",
      "zhHint": "水沸再入锅",
      "stateNote": {
        "visual": "Shrimp curl into C-shapes and turn opaque pink-white",
        "visualZh": "虾身卷成C形，呈不透明粉白色",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "high",
        "signal": "Steam flows steadily from lid edges",
        "signalZh": "锅盖边缘持续稳定冒蒸汽"
      }
    },
    {
      "text": "Carefully remove dish. Discard any excess liquid pooled at bottom. Garnish with chopped scallions if desired.",
      "textZh": "小心取出蒸盘，倒掉盘底多余汤汁，可撒少许葱花装饰。",
      "zhHint": "汤汁弃之不食",
      "stateNote": {
        "visual": "Liquid in dish is less than 1 tsp and clear",
        "visualZh": "盘中液体少于1茶匙且清亮",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Shrimp surface looks moist but not swimming",
        "signalZh": "虾身润泽但不浸在汤里"
      }
    }
  ],
  "tips": [
    "Butterflying shrimp ensures even cooking and better absorption of garlic aroma.",
    "Use only light soy sauce—dark soy would muddy the delicate color and flavor.",
    "Serve within 2 minutes of steaming for optimal texture."
  ],
  "tipsZh": [
    "开背处理使虾受热均匀，更易吸吮蒜香。",
    "仅用生抽，老抽会掩盖虾肉本色与清鲜。",
    "出锅2分钟内上桌，口感最佳。"
  ],
  "relatedSlugs": [
    "oyster-sauce-beef"
  ],
  "image": "/images/recipes/garlic-shrimp-vermicelli.webp"
};
