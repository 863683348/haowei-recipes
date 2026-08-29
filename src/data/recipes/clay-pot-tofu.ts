import type { Recipe } from "@/lib/types";

/** Clay Pot Tofu (砂锅豆腐) — Seed batch */
export const clay_pot_tofu: Recipe = {
  "id": "sha-guo-dou-fu",
  "slug": "clay-pot-tofu",
  "titleEn": "Clay Pot Tofu",
  "titleZh": "砂锅豆腐",
  "pinyin": "shā guō dòu fu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses soft tofu and gentle simmering—no deep-frying or restaurant-style thickening. It’s the kind of dish my grandmother in Yangpu would make on rainy evenings, ladling hot broth straight from the sandpot into our bowls.",
  "versionNoteZh": "家常版用嫩豆腐、轻炖不油炸、不勾芡。这是我杨浦外婆雨夜常做的菜，热汤直接从砂锅舀进碗里。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My aunt in Shanghai’s Hongkou district taught me this when I was twelve—she’d soak dried shiitakes overnight, then layer them with silken tofu and scallions in her old Yixing clay pot, saying, 'The pot remembers heat, so it cooks gently, like a mother’s hand.'",
  "storyZh": "我上海虹口区的姑妈十二岁时教我这道菜——她会提前一晚泡发干香菇，再把嫩豆腐和葱段铺进她那口宜兴老砂锅里，说：‘砂锅记得火候，所以炖得温柔，像母亲的手。’",
  "ingredients": [
    {
      "id": "df-01",
      "nameEn": "soft tofu",
      "nameZh": "嫩豆腐",
      "pinyin": "nèn dòu fu",
      "amountMetric": "300 g",
      "amountUS": "1 block (12 oz)",
      "category": "protein",
      "pantry": "local",
      "note": "Look for 'silken' or 'soft' tofu in refrigerated section; avoid firm or extra-firm.",
      "noteZh": "冷藏区找标有‘绢豆腐’或‘嫩豆腐’者；勿用老豆腐或北豆腐。"
    },
    {
      "id": "df-02",
      "nameEn": "dried shiitake mushrooms",
      "nameZh": "干香菇",
      "pinyin": "gān xiāng gū",
      "amountMetric": "4 g",
      "amountUS": "1/4 cup (small, ~6 caps)",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak in warm water 20 min until plump; reserve soaking liquid.",
      "noteZh": "温水泡发20分钟至软胀；泡发水留用。"
    },
    {
      "id": "df-03",
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
      "id": "df-04",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "note": "Use both white and green parts, cut into 3-cm lengths.",
      "noteZh": "葱白葱绿都用，切3厘米段。"
    }
  ],
  "steps": [
    {
      "text": "Rinse soaked shiitakes; squeeze out excess water and slice thinly. Reserve soaking liquid.",
      "textZh": "捞出泡发好的香菇，挤干水分，切薄片；泡发水滤净备用。",
      "zhHint": "挤干、切片、留水",
      "stateNote": {
        "visual": "Mushrooms are plump and dark brown, with no grit visible.",
        "visualZh": "香菇饱满呈深褐色，无泥沙残留。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Water drips slowly when squeezed—not running freely.",
        "signalZh": "轻捏后水滴缓慢渗出，非成股流下。"
      }
    },
    {
      "text": "Heat 1 tsp neutral oil in a seasoned clay pot over medium-low heat. Add sliced shiitakes and stir 1 minute until fragrant.",
      "textZh": "砂锅中放1茶匙无味油，中小火加热，下香菇片炒香1分钟。",
      "zhHint": "小火煸香",
      "stateNote": {
        "visual": "Mushrooms release steam and darken slightly at edges.",
        "visualZh": "香菇边缘微深、泛出水汽。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-low",
        "signal": "Aromatic earthy scent fills the kitchen.",
        "signalZh": "厨房弥漫出浓郁菌香。"
      }
    },
    {
      "text": "Pour in reserved mushroom soaking liquid and 200 ml cold water. Bring to a gentle simmer.",
      "textZh": "倒入香菇泡发水和200毫升冷水，烧至微沸。",
      "zhHint": "微沸即止",
      "stateNote": {
        "visual": "Tiny bubbles rise steadily around the edges, not rolling boil.",
        "visualZh": "锅边持续冒细泡，非大滚。",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium",
        "signal": "Surface shimmers faintly with small, even bubbles.",
        "signalZh": "汤面微微泛光，浮起均匀小泡。"
      }
    },
    {
      "text": "Carefully slide tofu cubes into broth. Gently shake pot to submerge. Drizzle light soy sauce over top.",
      "textZh": "将豆腐块轻轻滑入汤中，轻晃砂锅使其浸没；淋入生抽。",
      "zhHint": "轻滑、轻晃、淋酱",
      "stateNote": {
        "visual": "Tofu cubes hold shape without breaking; broth remains clear.",
        "visualZh": "豆腐块完整不碎，汤色清亮。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low",
        "signal": "No vigorous bubbling—just soft undulation beneath surface.",
        "signalZh": "无剧烈翻滚，仅汤面轻柔起伏。"
      }
    },
    {
      "text": "Simmer uncovered 8 minutes. Scatter scallions over top just before serving.",
      "textZh": "敞盖小火炖8分钟。上桌前撒入葱段。",
      "zhHint": "敞盖慢炖",
      "stateNote": {
        "visual": "Tofu is heated through but still tender; broth lightly coats cubes.",
        "visualZh": "豆腐热透仍柔嫩，汤汁轻裹表面。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "low",
        "signal": "Steam rises steadily, not forcefully.",
        "signalZh": "蒸汽匀速上升，不猛烈。"
      }
    }
  ],
  "tips": [
    "Always preheat clay pot gradually—never add cold liquid to a hot dry pot.",
    "For richer umami, add 1/2 tsp vegetarian oyster sauce (check label for vegan version).",
    "Serve directly from the pot—it stays hot 15+ minutes at table."
  ],
  "tipsZh": [
    "砂锅务必冷锅冷油或冷锅加水，忌热锅骤加冷液。",
    "如需更浓鲜味，可加半茶匙素蚝油（选纯素标签款）。",
    "直接端砂锅上桌，保温长达15分钟以上。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/clay-pot-tofu.webp"
};
