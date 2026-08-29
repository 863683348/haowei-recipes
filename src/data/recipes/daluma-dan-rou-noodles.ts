import type { Recipe } from "@/lib/types";

/** Shandong-Style Dàlǔ Miàn (Egg & Pork Noodles) (山东打卤面) — Seed batch */
export const daluma_dan_rou_noodles: Recipe = {
  "id": "da-lu-mian",
  "slug": "daluma-dan-rou-noodles",
  "titleEn": "Shandong-Style Dàlǔ Miàn (Egg & Pork Noodles)",
  "titleZh": "山东打卤面",
  "pinyin": "shān dōng dǎ lǔ miàn",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Chinese Snack",
  "region": "Jinan",
  "regionZh": "济南",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips dried shiitake and uses fresh shiitake + egg slurry for silkier broth—my uncle’s shortcut after returning from Qingdao fish markets.",
  "versionNoteZh": "家常版弃用干香菇，改用鲜香菇+蛋液勾芡，汤汁更滑润——青岛渔市归来的舅舅自创的快手法。",
  "tags": [
    "40-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every winter solstice, my uncle in Jinan would boil a giant pot of broth while singing old Shandong opera. He taught me to whisk eggs slowly into hot broth—not pouring, but drizzling—to make ‘cloud eggs’ that melt into the noodles.",
  "storyZh": "每年冬至，济南的舅舅必炖一大锅卤汤，边唱山东梆子边搅卤。他教我蛋液要‘绕圈细淋’进滚汤，不能直冲，才能做出入口即化的‘云朵蛋’，融进面条里。",
  "ingredients": [
    {
      "id": "dl-01",
      "nameEn": "pork shoulder, finely minced",
      "nameZh": "猪前腿肉末",
      "pinyin": "zhū qián tuǐ ròu mò",
      "amountMetric": "180 g",
      "amountUS": "3/4 cup",
      "category": "protein",
      "pantry": "local",
      "note": "Substitute ground pork if unavailable; avoid extra-lean cuts.",
      "noteZh": "可用普通绞肉替代；忌用纯瘦肉。"
    },
    {
      "id": "dl-02",
      "nameEn": "fresh shiitake mushrooms, stems removed, thinly sliced",
      "nameZh": "鲜香菇，去蒂切薄片",
      "pinyin": "xiān xiāng gū",
      "amountMetric": "120 g",
      "amountUS": "1 cup (sliced)",
      "category": "produce",
      "pantry": "local",
      "note": "Do not substitute dried—they require soaking and change broth clarity.",
      "noteZh": "勿用干香菇——需泡发且影响卤汁清亮。"
    },
    {
      "id": "dl-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "dl-04",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Substitute potato starch if cornstarch unavailable.",
      "noteZh": "可用马铃薯淀粉替代。"
    },
    {
      "id": "dl-05",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "2 large (100 g)",
      "amountUS": "2 large",
      "category": "dairy",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "In a bowl, mix 30 ml cold water with cornstarch until smooth. Set aside.",
      "textZh": "小碗中将冷水30毫升与玉米淀粉搅匀成水淀粉，静置备用。",
      "zhHint": "先调芡汁",
      "stateNote": {
        "visual": "Mixture is opaque white and lump-free.",
        "visualZh": "浆液呈不透明乳白色，无颗粒。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No separation after 30 seconds of rest.",
        "signalZh": "静置30秒不分层。"
      }
    },
    {
      "text": "Heat oil in a deep skillet over medium heat. Sauté pork until no pink remains, ~3 minutes.",
      "textZh": "中火热油，下肉末炒至完全变色、无粉红，约3分钟。",
      "zhHint": "炒散不结块",
      "stateNote": {
        "visual": "Meat crumbles into fine granules; releases faint aroma.",
        "visualZh": "肉末散成细粒；散发微香。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Edges curl slightly; moisture evaporates fully.",
        "signalZh": "边缘微卷；水分全干。"
      }
    },
    {
      "text": "Add mushrooms and stir-fry 2 minutes until softened and fragrant.",
      "textZh": "下香菇片翻炒2分钟，至变软、香气溢出。",
      "zhHint": "菇香是卤魂",
      "stateNote": {
        "visual": "Mushrooms shrink by 1/3; edges turn translucent.",
        "visualZh": "香菇体积缩小约1/3；边缘呈半透明。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Earthy scent intensifies; no raw mushroom odor.",
        "signalZh": "土腥味消失，菌香浓郁。"
      }
    },
    {
      "text": "Pour in 500 ml boiling water, light soy sauce, and bring to gentle simmer. Cook 5 minutes uncovered.",
      "textZh": "冲入沸水500毫升与生抽，煮沸后转小火慢 simmer 5分钟，不盖盖。",
      "zhHint": "沸水激香，小火稳卤",
      "stateNote": {
        "visual": "Surface shimmers with tiny bubbles; broth remains pale amber.",
        "visualZh": "汤面泛细泡；汤色呈淡琥珀。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Bubbles rise steadily but don’t break violently.",
        "signalZh": "气泡匀速上升，不爆裂。"
      }
    },
    {
      "text": "Slowly drizzle in egg mixture while stirring broth in one direction. Remove from heat immediately once ribbons form.",
      "textZh": "一手持蛋液碗，一手持筷顺同一方向搅汤，将蛋液细流淋入；一见蛋丝成形即关火。",
      "zhHint": "蛋丝成形即离火",
      "stateNote": {
        "visual": "Thin, soft yellow ribbons float just below surface.",
        "visualZh": "细软金黄蛋丝浮于汤面下。",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "signal": "Eggs set into delicate strands—not curds.",
        "signalZh": "蛋成丝状而非块状。"
      }
    }
  ],
  "tips": [
    "Always use boiling water—not cold—to prevent cloudiness and ensure clean broth.",
    "For authentic Shandong texture, serve hot broth directly over room-temp noodles—no preheating bowls.",
    "The ‘lu’ (broth) must coat noodles without pooling—adjust thickness with extra water or cornstarch slurry."
  ],
  "tipsZh": [
    "务必用沸水冲卤，冷水会使汤浑浊、失清亮。",
    "正宗山东吃法：热卤直接浇在室温手擀面上，碗不预热。",
    "卤汁讲究‘挂面不淌汁’——太稀加水，太稠补少量水淀粉。"
  ],
  "relatedSlugs": [
    "zhajiang-noodles"
  ],
  "image": "/images/recipes/daluma-dan-rou-noodles.webp"
};
