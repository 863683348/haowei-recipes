import type { Recipe } from "@/lib/types";

/** Crispy Fried Tangyuan (炸汤圆) (炸汤圆) — Day batch */
export const fried_tangyuan: Recipe = {
  "id": "fried-tangyuan",
  "slug": "fried-tangyuan",
  "titleEn": "Crispy Fried Tangyuan (炸汤圆)",
  "titleZh": "炸汤圆",
  "pinyin": "zhà tāng yuán",
  "cuisine": "江浙点心",
  "cuisineEn": "Jiangsu-Zhejiang Dim Sum",
  "region": "Jiangsu",
  "regionZh": "江苏",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭版用冷冻汤圆直接炸，无需解冻；餐馆版有时现包现炸。",
  "versionNoteZh": "家庭版用冷冻汤圆直接炸，无需解冻；餐馆版有时现包现炸。",
  "tags": [
    "fried",
    "dessert",
    "festive",
    "chinese-new-year",
    "sweet"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Fried tangyuan is a winter festival treat—the crispy exterior cracks open to reveal hot, flowing black sesame filling. My grandmother in Hangzhou would make these for Lunar New Year, saying the round shape symbolizes family reunion.",
  "storyZh": "炸汤圆是冬季节庆美食——脆皮裂开，热腾腾的黑芝麻流心。杭州外婆每年过年必做，说圆形象征团圆。",
  "ingredients": [
    {
      "id": "ft-01",
      "nameEn": "frozen tangyuan (black sesame)",
      "nameZh": "冷冻汤圆（黑芝麻）",
      "amountMetric": "16 pieces",
      "amountUS": "16 pieces",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "ft-02",
      "nameEn": "panko breadcrumbs",
      "nameZh": "面包糠",
      "amountMetric": "100 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "ft-03",
      "nameEn": "egg, beaten",
      "nameZh": "鸡蛋（打散）",
      "amountMetric": "1 large",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "ft-04",
      "nameEn": "neutral oil (for frying)",
      "nameZh": "中性油（炸用）",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ft-05",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "staple",
      "pantry": "asian",
      "termKey": "rock-sugar"
    }
  ],
  "steps": [
    {
      "text": "Do NOT thaw tangyuan—keep frozen. This prevents bursting during frying.",
      "textZh": "不要解冻——保持冷冻。防止炸时爆开。",
      "stateNote": {
        "visual": "Tangyuan still hard and frozen",
        "visualZh": "汤圆仍硬且冷冻",
        "signal": "Surface is frosty, not slick",
        "signalZh": "表面有霜，不滑"
      }
    },
    {
      "text": "Dip frozen tangyuan in egg, then coat with panko. Press gently to adhere.",
      "textZh": "冷冻汤圆过蛋液，裹面包糠，轻压粘附。",
      "stateNote": {
        "visual": "Even coating, no bare spots",
        "visualZh": "均匀包裹，无裸露",
        "signal": "Breadcrumb sticks without falling",
        "signalZh": "面包糠粘附不掉落"
      }
    },
    {
      "text": "Heat oil to 150°C (lower than usual—tangyuan expand quickly). Fry 3-4 minutes, turning gently.",
      "textZh": "油温150°C（比普通低——汤圆膨胀快）。炸3-4分钟，轻翻面。",
      "stateNote": {
        "visual": "Tangyuan puff up, turn golden",
        "visualZh": "汤圆膨胀，变金黄",
        "signal": "Crust is firm, interior is hot",
        "signalZh": "外壳硬，内部热"
      }
    },
    {
      "text": "Remove carefully—the filling is molten hot. Serve immediately with a dusting of powdered sugar.",
      "textZh": "小心取出——内馅滚烫。立刻上桌，撒糖粉。",
      "stateNote": {
        "visual": "Crust crackles, steam escapes from seams",
        "visualZh": "外壳咔嚓响，接缝冒气",
        "signal": "Gentle squeeze releases hot steam",
        "signalZh": "轻压冒热蒸汽"
      }
    },
    {
      "text": "Prepare a small bowl of ice water nearby in case any tangyuan burst during frying.",
      "textZh": "准备一小碗冰水，以防炸时爆开可紧急冷却。",
      "stateNote": {
        "visual": "Ice water ready, towel nearby",
        "visualZh": "冰水就绪，毛巾在旁边",
        "signal": "Safety station complete",
        "signalZh": "安全站完备"
      }
    }
  ],
  "tips": [
    "Keep tangyuan frozen—thawing causes bursting",
    "Oil temperature must be lower (150°C) to prevent explosive expansion",
    "Let cool 1 minute before biting—the filling is lava-hot"
  ],
  "tipsZh": [
    "保持冷冻——解冻会爆开",
    "油温要低（150°C）——防止爆胀",
    "吃之前等1分钟——内馅是熔岩温度"
  ],
  "relatedSlugs": [
    "sesame-tangyuan-glutinous-rice-balls",
    "egg-yolk-pastry",
    "fried-milk"
  ],
  "image": "/images/recipes/sesame-tangyuan-glutinous-rice-balls.webp"
};
