import type { Recipe } from "@/lib/types";

/** Century Egg and Lean Pork Congee (皮蛋瘦肉粥) — Seed batch */
export const pidan_shourou_congee: Recipe = {
  "id": "pidan-shourou-zhou",
  "slug": "pidan-shourou-congee",
  "titleEn": "Century Egg and Lean Pork Congee",
  "titleZh": "皮蛋瘦肉粥",
  "pinyin": "pí dàn shòu ròu zhōu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses less rice water reduction and gentle simmering—no restaurant-style thickening with cornstarch or excessive garnishes.",
  "versionNoteZh": "家常版减少米汤浓缩时间，用文火慢熬，不添加玉米淀粉增稠，也不堆砌过多配料。",
  "tags": [
    "45-min",
    "comfort",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Guangzhou made this every Sunday morning when I visited as a child—she’d crack open the century eggs over the pot so the yolk ribbons swirled into the broth like golden clouds. She said it was ‘medicine for tired bones’ after weekend market runs.",
  "storyZh": "小时候每逢周日去广州姑妈家，她总在清晨煮这碗粥——剥开皮蛋时特意让溏心蛋黄滴入锅中，在米汤里化成金云。她说这是‘跑完菜市场后给骨头喝的药’。",
  "ingredients": [
    {
      "id": "ps-01",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "duǎn lì bái mǐ",
      "amountMetric": "120 g",
      "amountUS": "3/4 cup",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse until water runs clear to remove excess starch",
      "noteZh": "淘洗至水清，去除多余淀粉"
    },
    {
      "id": "ps-02",
      "nameEn": "lean pork loin, finely minced",
      "nameZh": "猪里脊肉末",
      "pinyin": "zhū lǐ jǐ ròu mò",
      "amountMetric": "180 g",
      "amountUS": "6 oz (¾ cup loosely packed)",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher to mince twice, or pulse in food processor — avoid pre-ground supermarket pork (too fatty)",
      "noteZh": "请肉铺细剁两次，或料理机短脉冲；勿用超市预绞肉（肥多）"
    },
    {
      "id": "ps-03",
      "nameEn": "century egg (pidan), peeled and cubed",
      "nameZh": "皮蛋（松花蛋），去壳切丁",
      "pinyin": "pí dàn, qù ké qiē dīng",
      "amountMetric": "2 large (160 g total)",
      "amountUS": "2 large (about 5.6 oz)",
      "category": "protein",
      "pantry": "asian",
      "note": "Look for firm, amber yolks with creamy texture; avoid rubbery or overly sulfurous ones. Sub: 1 hard-boiled egg + ½ tsp black vinegar if unavailable",
      "noteZh": "选琥珀色溏心、质地柔润者；避胶质硬或硫味重者。替代：1只水煮蛋 + ½ tsp 中国黑醋"
    },
    {
      "id": "ps-04",
      "nameEn": "fresh ginger, finely grated",
      "nameZh": "鲜姜末",
      "pinyin": "xiān jiāng mò",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ps-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ps-06",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "xiàn mó bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Rinse rice thoroughly under cold water until runoff is clear. Soak in 600 ml (2.5 cups) cold water for 30 minutes.",
      "textZh": "大米反复淘洗至水清，加600毫升冷水浸泡30分钟。",
      "zhHint": "淘净泡透"
    },
    {
      "text": "Marinate minced pork with light soy sauce, white pepper, and 1 tsp grated ginger for 15 minutes.",
      "textZh": "将猪肉末与生抽、白胡椒粉及1茶匙姜末拌匀，腌15分钟。",
      "zhHint": "肉末先腌"
    },
    {
      "text": "Bring soaked rice and soaking water to a boil in a heavy-bottomed pot. Reduce heat to medium-low and simmer uncovered, stirring gently every 5 minutes to prevent sticking.",
      "textZh": "将泡米连水倒入厚底锅，大火烧沸后转中小火，不盖盖子慢煮，每5分钟轻搅防糊底。",
      "zhHint": "沸后转小火"
    },
    {
      "text": "After 20 minutes, stir in marinated pork and remaining ginger. Simmer 10 more minutes until rice grains fully disintegrate and porridge thickens slightly.",
      "textZh": "20分钟后加入腌好的肉末和剩余姜末，再煮10分钟，至米粒完全化开、粥体微稠。",
      "zhHint": "肉末后下"
    },
    {
      "text": "Gently fold in cubed century eggs. Cook 2–3 more minutes—do not boil vigorously, or eggs will turn rubbery.",
      "textZh": "轻轻拌入皮蛋丁，再煮2–3分钟——忌大滚，否则皮蛋变韧。",
      "zhHint": "皮蛋最后放",
      "stateNote": {
        "visual": "Porridge is creamy with visible flecks of golden yolk and tender pork shreds",
        "visualZh": "粥体柔滑，可见金黄蛋黄碎与细嫩肉丝",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium-low",
        "signal": "Surface bubbles gently break without roiling foam",
        "signalZh": "表面气泡轻破，无翻腾泡沫"
      }
    }
  ],
  "tips": [
    "Use day-old cooked rice for faster congee: skip soaking and reduce cooking time by 15 minutes.",
    "For richer mouthfeel, add 1 tsp sesame oil just before serving.",
    "Serve with pickled mustard greens (zha cai) and fresh scallions."
  ],
  "tipsZh": [
    "用隔夜熟米饭可省时：免浸泡，总煮制时间减15分钟。",
    "出锅前淋1茶匙芝麻油，滋味更醇厚。",
    "配榨菜丝与新鲜葱花同食。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/pidan-shourou-congee.webp"
};
