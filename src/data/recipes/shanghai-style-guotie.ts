import type { Recipe } from "@/lib/types";

/** Shanghai-Style Pan-Fried Dumplings (Guotie) (上海锅贴) — Seed batch */
export const shanghai_style_guotie: Recipe = {
  "id": "guotie-shanghai-style",
  "slug": "shanghai-style-guotie",
  "titleEn": "Shanghai-Style Pan-Fried Dumplings (Guotie)",
  "titleZh": "上海锅贴",
  "pinyin": "shàng hǎi guō tiē",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses less oil and a gentler fry—crisp bottom, tender top, no deep-frying. Restaurant versions often use more oil and higher heat for dramatic browning.",
  "versionNoteZh": "家常版用油少、火候柔和，底脆皮薄、上部柔嫩；餐馆版油多火猛，焦香更重。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Yangpu District made these every Sunday morning while I watched from the kitchen stool—she’d press each dumpling flat with her palm before sliding them into the wok, saying, 'The secret is the water-steam lock: just enough to cook the filling, not drown it.'",
  "storyZh": "我杨浦区的阿姨每个周日清晨都做这个，我坐在小凳子上看她把每个饺子用手掌压扁再滑进锅里，她说：‘秘诀是水汽封口——刚好蒸熟馅料，又不泡烂皮。’",
  "ingredients": [
    {
      "id": "gt-01",
      "nameEn": "ground pork (20% fat)",
      "nameZh": "猪肉馅（肥瘦比2:8）",
      "pinyin": "zhū ròu xiàn",
      "amountMetric": "300 g",
      "amountUS": "1 ¼ cups",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for fresh ground pork with ~20% fat; lean-only dries out",
      "noteZh": "请肉铺现绞，肥瘦比约2:8；纯瘦肉易干柴"
    },
    {
      "id": "gt-02",
      "nameEn": "Napa cabbage, finely chopped & salted",
      "nameZh": "大白菜，切碎后加盐挤水",
      "pinyin": "dà bái cài",
      "amountMetric": "200 g",
      "amountUS": "2 cups loosely packed",
      "category": "produce",
      "pantry": "local",
      "note": "Salt 1 tsp per 200g, wait 5 min, then squeeze *hard* to remove all water",
      "noteZh": "每200g白菜加1 tsp盐，静置5分钟，用力挤干所有水分"
    },
    {
      "id": "gt-03",
      "nameEn": "ginger, minced",
      "nameZh": "生姜末",
      "pinyin": "shēng jiāng mò",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "gt-04",
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
      "id": "gt-05",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "In a bowl, combine pork, squeezed cabbage, ginger, light soy sauce, and sesame oil. Mix vigorously in one direction for 2 minutes until sticky and cohesive.",
      "textZh": "将猪肉馅、挤干的白菜、姜末、生抽和芝麻油放入碗中，朝同一方向用力搅打2分钟，至馅料粘稠有劲。",
      "zhHint": "同向搅打上劲"
    },
    {
      "text": "Place 1 tbsp filling onto a round dumpling wrapper (10 cm diameter). Pleat and seal tightly into a half-moon shape. Press gently to flatten base—this ensures even contact with pan.",
      "textZh": "取一张直径10厘米的圆面皮，放1汤匙馅料，捏褶封口成半月形，轻轻按压底部使其摊平，确保与锅底充分接触。",
      "zhHint": "按压底部摊平"
    },
    {
      "text": "Heat 15 ml neutral oil (e.g., canola) in a heavy-bottomed nonstick or cast-iron skillet over medium heat until shimmering but not smoking.",
      "textZh": "在厚底不粘或铸铁平底锅中倒入15毫升中性油（如菜籽油），中火加热至油面微漾但未冒烟。",
      "zhHint": "油面微漾"
    },
    {
      "text": "Arrange dumplings in single layer, seam-side up. Fry 2–3 minutes until golden brown on bottom.",
      "textZh": "将饺子整齐排入锅中，褶边朝上。中火煎2–3分钟，至底部呈金黄色。",
      "zhHint": "褶边朝上，煎至底脆",
      "stateNote": {
        "visual": "Bottom edges turn pale gold with fine bubbles rising at edges",
        "visualZh": "边缘泛浅金，饺子边沿出现细密气泡",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium",
        "signal": "Sizzling sound drops slightly as crust forms",
        "signalZh": "滋滋声略减，表明脆底初成"
      }
    },
    {
      "text": "Pour in 120 ml cold water (just enough to reach ⅓ up dumpling height). Immediately cover and steam 6 minutes. Uncover, cook uncovered 2 more minutes until water fully evaporates and bottom re-crisps.",
      "textZh": "沿锅边均匀淋入120毫升冷水（水位约达饺子高度1/3），立刻盖盖焖蒸6分钟。揭盖，继续无盖煎2分钟，至水分完全蒸发、底部再次酥脆。",
      "zhHint": "淋水焖蒸，再开盖收干",
      "stateNote": {
        "visual": "Steam billows thickly under lid; water level visibly drops during last 2 minutes",
        "visualZh": "盖下蒸汽浓白；最后2分钟可见水位明显下降",
        "timeRef": "6 minutes covered + 2 minutes uncovered",
        "timeRefZh": "盖盖焖6分钟 + 开盖煎2分钟",
        "heat": "medium-low",
        "signal": "Hissing stops and pan surface looks dry again",
        "signalZh": "嘶嘶声停止，锅面重新显干"
      }
    }
  ],
  "tips": [
    "Use dumpling wrappers labeled 'guotie' or 'pan-fry'—they’re thicker and less prone to tearing.",
    "Never skip squeezing cabbage: excess water causes steaming instead of crisping.",
    "For best results, serve immediately—crisp bottom softens within 5 minutes."
  ],
  "tipsZh": [
    "选用标有‘锅贴’或‘煎制’字样的饺子皮，更厚实不易破皮。",
    "白菜务必挤干：多余水分会导致蒸煮而非煎脆。",
    "最佳赏味期为出锅即食——脆底5分钟内即回软。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/shanghai-style-guotie.webp"
};
