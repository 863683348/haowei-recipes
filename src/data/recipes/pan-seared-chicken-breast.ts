import type { Recipe } from "@/lib/types";

/** Cantonese Pan-Seared Chicken Breast (粤式香煎鸡胸) — Seed batch */
export const pan_seared_chicken_breast: Recipe = {
  "id": "xiang-jian-ji-xiong",
  "slug": "pan-seared-chicken-breast",
  "titleEn": "Cantonese Pan-Seared Chicken Breast",
  "titleZh": "粤式香煎鸡胸",
  "pinyin": "yue shi xiang jian ji xiong",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 32,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips cornstarch slurry and deep-frying—uses low-medium heat and patience for golden crust without drying.",
  "versionNoteZh": "家常版不腌粉、不油炸，靠中小火耐心煎制，形成金黄脆边而不柴。",
  "tags": [
    "30-min",
    "weeknight",
    "high-protein"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather in Liwan District taught me this while flipping chicken in his wok-shaped frying pan—he said ‘golden edge, soft center’ was the sign of respect for the ingredient. We ate it with steamed bok choy and jasmine rice, never with sauce.",
  "storyZh": "我在荔湾区的祖父教我这道菜时，正用他那只仿中式炒锅的平底锅翻煎鸡胸——他说‘金边软心’才是对食材的尊重。我们只配清炒菜心和茉莉香米饭，从不浇酱。",
  "ingredients": [
    {
      "id": "pj-01",
      "nameEn": "boneless, skinless chicken breast",
      "nameZh": "去骨去皮鸡胸肉",
      "pinyin": "qu gu qu pi ji xiong rou",
      "amountMetric": "320 g",
      "amountUS": "11.3 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Slice horizontally into two even 1.2-cm thick cutlets; pound gently to 1 cm if uneven.",
      "noteZh": "横切成两片厚约1.2厘米的鸡排；若厚薄不均，轻拍至1厘米厚。"
    },
    {
      "id": "pj-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "sheng chou",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "pj-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shao xing jiu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "pj-04",
      "nameEn": "fresh ginger, finely minced",
      "nameZh": "鲜姜末",
      "pinyin": "xian jiang mo",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "pj-05",
      "nameEn": "neutral oil (e.g., canola or grapeseed)",
      "nameZh": "无味植物油（如芥花籽油）",
      "pinyin": "wu wei zhi wu you",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Place chicken cutlets between two sheets of parchment. Gently pound with flat side of cleaver or rolling pin to 1 cm thickness, keeping edges intact.",
      "textZh": "鸡排夹在两张烘焙纸间，用刀背或擀面杖轻拍至1厘米厚，保持边缘完整。",
      "zhHint": "拍松肌理，利入味锁汁",
      "stateNote": {
        "visual": "Surface is smooth, slightly glossy, and uniformly thin.",
        "visualZh": "表面平滑微亮，厚薄一致。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No tearing or ragged edges.",
        "signalZh": "无撕裂或毛边。"
      }
    },
    {
      "text": "In a shallow dish, combine light soy sauce, Shaoxing wine, and ginger. Add chicken; marinate 10 minutes at room temperature.",
      "textZh": "浅盘中混合生抽、绍兴酒与姜末；放入鸡排，室温腌10分钟。",
      "zhHint": "短时腌制保嫩，不需过夜",
      "stateNote": {
        "visual": "Liquid clings lightly to surface; no pooling underneath.",
        "visualZh": "酱汁轻附表面，盘底无积液。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Meat fibers visibly relax and darken slightly.",
        "signalZh": "肌肉纤维明显松弛、颜色微深。"
      }
    },
    {
      "text": "Pat chicken *very* dry with paper towels—moisture is the enemy of sear. Let sit 2 minutes uncovered.",
      "textZh": "用厨房纸彻底吸干鸡排表面水分——水汽是焦香的大敌。敞放2分钟。",
      "zhHint": "干爽是脆边前提",
      "stateNote": {
        "visual": "No damp spots visible; surface looks matte, not shiny.",
        "visualZh": "无潮湿斑点；表面呈哑光，不反光。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Paper towel stays dry after pressing.",
        "signalZh": "按压后纸巾仍干燥。"
      }
    },
    {
      "text": "Heat oil in heavy-bottomed skillet (cast iron or stainless) over medium-high until shimmering but not smoking (~180°C / 356°F). Carefully place chicken, smooth-side down.",
      "textZh": "厚底煎锅（铸铁或不锈钢）中火烧热油，至微微波动但未冒烟（约180°C）；鸡排光滑面朝下轻放入锅。",
      "zhHint": "热锅冷油易粘，热油冷肉才脆",
      "stateNote": {
        "visual": "Oil shimmers like liquid glass; faint ripples form.",
        "visualZh": "油面如镜泛涟漪。",
        "timeRef": "45–60 seconds",
        "timeRefZh": "45–60 秒",
        "heat": "medium-high",
        "signal": "A drop of water sizzles violently and vanishes instantly.",
        "signalZh": "一滴水入锅即爆响并瞬间蒸发。"
      }
    },
    {
      "text": "Press gently with spatula for first 10 seconds to ensure full contact. Cook undisturbed 5 minutes until deeply golden and release easily. Flip and cook 3–4 more minutes until internal temp hits 65°C.",
      "textZh": "前10秒用锅铲轻压确保贴锅；全程勿翻动，煎5分钟至深金黄且自然脱锅。翻面再煎3–4分钟，中心达65°C。",
      "zhHint": "第一次翻面是成败关键",
      "stateNote": {
        "visual": "Bottom is rich amber with defined sear lines; edges curl slightly.",
        "visualZh": "底面呈琥珀色，焦痕清晰，边缘微卷。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high",
        "signal": "Edges lift cleanly when nudged with spatula.",
        "signalZh": "锅铲轻推边缘即自然翘起。"
      }
    }
  ],
  "tips": [
    "If chicken sticks, wait 30 seconds—it will release naturally when properly seared.",
    "Rest 3 minutes before slicing—this retains juices better than immediate cutting.",
    "For subtle sweetness, add ½ tsp rock sugar to marinade (dissolve in warm soy sauce first)."
  ],
  "tipsZh": [
    "若粘锅，再等30秒——焦化层形成后会自然脱锅。",
    "煎好后静置3分钟再切，比即刻切更保汁水。",
    "如喜微甜，可在腌汁中加½茶匙冰糖（先用温生抽化开）。"
  ],
  "relatedSlugs": [
    "chicken-breast-salad"
  ],
  "image": "/images/recipes/pan-seared-chicken-breast.webp"
};
