import type { Recipe } from "@/lib/types";

/** Tin-Foil Grilled Fish (锡纸烤鱼) — Seed batch */
export const tin_foil_grilled_fish: Recipe = {
  "id": "xi-zhi-kao-yu",
  "slug": "tin-foil-grilled-fish",
  "titleEn": "Tin-Foil Grilled Fish",
  "titleZh": "锡纸烤鱼",
  "pinyin": "xi zhi kao yu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses whole small fish (like tilapia or snapper) wrapped in foil with minimal oil and bold aromatics—no heavy sauces or restaurant-style charring.",
  "versionNoteZh": "家常版用整条小鱼（如罗非鱼或红鲷），锡纸包裹，少油重香辛料，不追求餐厅级焦香。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Chengdu’s Jinniu District taught me this after I burned three fish trying to replicate her street-side tin-foil grill. She said, 'If the foil puffs like a pillow, the fish is breathing—not burning.' We ate it on her balcony with cold beer and pickled mustard greens.",
  "storyZh": "成都金牛区的姑妈教我这道菜，就在我连续烤糊三条鱼后。她说：‘锡纸鼓得像枕头，鱼就在呼吸，不是在烧。’我们坐在她阳台吃，配冰啤酒和泡芥菜。",
  "ingredients": [
    {
      "id": "fy-01",
      "nameEn": "whole tilapia",
      "nameZh": "整条罗非鱼",
      "pinyin": "zheng tiao luo fei yu",
      "amountMetric": "400 g",
      "amountUS": "1 small fish (14 oz)",
      "category": "protein",
      "pantry": "local",
      "note": "Look for fresh, scaled, gutted fish with bright eyes and firm flesh; substitute red snapper or catfish if tilapia unavailable.",
      "noteZh": "选新鲜、已去鳞去内脏的鱼，眼睛清亮、肉质紧实；无罗非鱼可用红鲷或鲶鱼替代。"
    },
    {
      "id": "fy-02",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "sheng jiang",
      "amountMetric": "25 g",
      "amountUS": "1 tbsp finely julienned",
      "category": "produce",
      "pantry": "local",
      "note": "Use young ginger for milder heat and tender texture.",
      "noteZh": "优选嫩姜，辣味柔和、纤维细软。",
      "termKey": "ginger"
    },
    {
      "id": "fy-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "sheng chou",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Ensure gluten-free if needed; tamari works as sub.",
      "noteZh": "需无麸质可选木鱼酱油。",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "fy-04",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhi ma you",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use toasted sesame oil for authentic aroma.",
      "noteZh": "务必用焙炒芝麻油以获地道香气。",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Rinse fish under cold water, pat dry inside and out with paper towels. Score both sides of the fish three times diagonally with a sharp knife.",
      "textZh": "鱼用冷水冲洗，里外彻底擦干。两面斜刀划三道。",
      "zhHint": "擦干+斜刀",
      "stateNote": {
        "visual": "Fish surface appears matte and slightly tacky, not wet or shiny.",
        "visualZh": "鱼身呈哑光微黏感，不反光、不挂水。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No water droplets remain on skin.",
        "signalZh": "鱼皮无水珠残留。"
      }
    },
    {
      "text": "Rub fish inside and out with half the ginger juliennes and 1 tsp light soy sauce. Let marinate 10 minutes at room temperature.",
      "textZh": "将一半姜丝和1茶匙生抽均匀抹遍鱼内外，室温腌10分钟。",
      "zhHint": "姜+生抽抹匀",
      "stateNote": {
        "visual": "Ginger threads cling lightly to moist fish surface.",
        "visualZh": "姜丝轻附于微润鱼身。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Fish flesh turns slightly translucent near edges.",
        "signalZh": "鱼肉边缘略显半透明。"
      }
    },
    {
      "text": "Lay two overlapping 45-cm sheets of heavy-duty aluminum foil on a work surface. Place fish centered on foil. Top with remaining ginger, 1 tbsp light soy sauce, and sesame oil.",
      "textZh": "铺两张45厘米宽的加厚铝箔（交叉叠放），鱼居中放上，撒剩余姜丝，淋余下生抽和芝麻油。",
      "zhHint": "双层箔+居中",
      "stateNote": {
        "visual": "Foil lies flat with no wrinkles under fish weight.",
        "visualZh": "铝箔平整承托鱼身，无褶皱。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Oil glistens evenly across fish back.",
        "signalZh": "油光均匀覆盖鱼背。"
      }
    },
    {
      "text": "Seal foil tightly into a sealed packet, leaving 2 cm air space above fish. Place on cold oven rack.",
      "textZh": "严密封包锡纸袋，顶部预留2厘米空隙，置于冷烤架上。",
      "zhHint": "留气隙+冷架",
      "stateNote": {
        "visual": "Packet swells gently like a soft pillow when heated.",
        "visualZh": "受热后锡纸袋如软枕般微微鼓起。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high",
        "signal": "Foil begins to shimmer faintly at edges.",
        "signalZh": "锡纸边缘初现微光。"
      }
    },
    {
      "text": "Bake at 220°C (425°F) for 18–20 minutes. Carefully open foil: steam should rush out, fish flesh should flake easily with a fork, and center should reach 63°C (145°F). Rest 3 minutes before serving.",
      "textZh": "220°C（425°F）烘烤18–20分钟。小心掀开锡纸——热气喷涌，鱼肉应易散成片，中心达63°C（145°F）。静置3分钟再上桌。",
      "zhHint": "掀箔验汽+测温",
      "stateNote": {
        "visual": "Steam billows white and thick; flesh separates cleanly into large flakes.",
        "visualZh": "白汽浓烈喷涌；鱼肉大块分离，不碎烂。",
        "timeRef": "18–20 minutes",
        "timeRefZh": "18–20 分钟",
        "heat": "medium-high",
        "signal": "Center of thickest part flakes with gentle fork pressure.",
        "signalZh": "最厚处鱼肉经叉轻压即散成大片。"
      }
    }
  ],
  "tips": [
    "Use only heavy-duty foil—thin foil tears when steaming.",
    "For extra aroma, add 2 dried chili peppers and 3 Sichuan peppercorns inside foil before sealing.",
    "Serve immediately with steamed rice and blanched bok choy."
  ],
  "tipsZh": [
    "务必用加厚锡纸，普通款蒸制易破。",
    "增香可加2个干辣椒和3粒花椒入箔同烤。",
    "配白米饭与焯水小白菜同食最佳。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/tin-foil-grilled-fish.webp"
};
