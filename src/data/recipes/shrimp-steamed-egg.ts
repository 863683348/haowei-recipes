import type { Recipe } from '@/lib/types';

/\*\* Shrimp Steamed Egg (虾仁蒸蛋) (虾仁蒸蛋) — Day 15 batch \*/
export const shrimp_steamed_egg: Recipe = {
  "id": "shrimp-steamed-egg",
  "slug": "shrimp-steamed-egg",
  "titleEn": "Shrimp Steamed Egg (虾仁蒸蛋)",
  "titleZh": "虾仁蒸蛋",
  "pinyin": "xiā rén zhēng dàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong (广东)",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version: silky custard with sweet shrimp — Cantonese home cooking at its simplest.",
  "versionNoteZh": "家庭版：嫩滑蛋羹配鲜甜虾仁——粤式家常极简风味。",
  "tags": [
    "steamed",
    "quick",
    "protein",
    "easy",
    "weeknight"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Shrimp steamed egg is a Cantonese classic — a dish that looks fancy but takes only minutes. The key is the water-to-egg ratio and gentle steaming. A single plump prawn crowns each bowl. It is the kind of dish a Cantonese grandma makes when someone is sick or just needs comfort food.",
  "storyZh": "虾仁蒸蛋是粤菜经典——看着高档，实则只需几分钟。秘诀在于蛋水比例和温和蒸制。每碗顶一颗饱满虾仁，是广东阿婆在家人不适或需要慰藉时必做的一道菜。",
  "ingredients": [
    {
      "id": "se-1",
      "nameEn": "large eggs",
      "nameZh": "鸡蛋",
      "amountMetric": "3 large",
      "amountUS": "3 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "se-2",
      "nameEn": "raw shrimp, peeled and deveined",
      "nameZh": "鲜虾仁",
      "amountMetric": "150 g",
      "amountUS": "about 5 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "shrimp"
    },
    {
      "id": "se-3",
      "nameEn": "warm water",
      "nameZh": "温水",
      "amountMetric": "300 ml",
      "amountUS": "1 1/4 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "se-4",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tsp",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "se-5",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "se-6",
      "nameEn": "scallions, finely chopped",
      "nameZh": "小葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "se-7",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "se-8",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "a pinch",
      "amountUS": "a pinch",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Beat the eggs in a bowl with a pinch of salt and white pepper until just combined — do not over-whisk to avoid foam.",
      "textZh": "碗中打入鸡蛋，加少许盐和胡椒，轻轻打散即可，不要过度搅打产生气泡。",
      "stateNote": {
        "visual": "Eggs evenly mixed, slight foam OK",
        "visualZh": "蛋液均匀，略有泡沫亦可",
        "signal": "No large streaks of white yolk remain",
        "signalZh": "没有明显蛋黄条纹即可"
      }
    },
    {
      "text": "Add warm water (about 40C, warm to touch but not hot) to the beaten eggs. Mix gently. Strain through a fine sieve into a steaming bowl to remove bubbles and achieve silkiness.",
      "textZh": "加入温水（约40度，触手温热但不烫），轻轻拌匀。过筛入蒸碗，滤去气泡，确保蛋羹丝滑。",
      "stateNote": {
        "visual": "Liquid smooth and homogenous, no bubbles on surface",
        "visualZh": "液体顺滑均匀，表面无气泡",
        "signal": "Strained liquid pours like thin cream",
        "signalZh": "过筛后呈稀奶油状流动性"
      }
    },
    {
      "text": "Cover the bowl tightly with heatproof plastic wrap or a plate. Bring a pot of water to a boil, then reduce to a steady simmer. Place the bowl inside, cover the pot, and steam on medium-low heat for 12 minutes.",
      "textZh": "碗口紧封耐高温保鲜膜或盖盘。锅中水烧开，转中火，放入蒸碗，盖锅盖，中火蒸12分钟。",
      "stateNote": {
        "visual": "Egg set like a firm custard, jiggles slightly in center",
        "visualZh": "蛋羹凝固，中心轻晃微微颤动",
        "signal": "A skewer inserted in center comes out clean",
        "signalZh": "牙签插入中心拔出干净"
      }
    },
    {
      "text": "While the egg steams, quickly blanch the shrimp in boiling salted water for 60 seconds until pink. Remove and pat dry.",
      "textZh": "蒸蛋的同时，虾仁在沸盐水中快速焯烫60秒至变红，捞出沥干。",
      "stateNote": {
        "visual": "Shrimp turn opaque pink and curl into C-shape",
        "visualZh": "虾仁变粉红 opaque 并卷成 C 形",
        "signal": "About 1 minute — do not overcook",
        "signalZh": "约1分钟，勿久煮"
      }
    },
    {
      "text": "Gently place 5-6 prawns on top of the set steamed egg. Drizzle with soy sauce and sesame oil. Garnish with chopped scallions. Serve immediately.",
      "textZh": "将虾仁轻放于凝固蛋羹上，淋生抽和香油，撒葱花，立刻上桌。",
      "stateNote": {
        "visual": "Glossy egg surface with bright pink shrimp and green scallions",
        "visualZh": "蛋羹表面光亮，虾仁粉红，葱花翠绿",
        "signal": "Ready when shiny and aromatic",
        "signalZh": "表面光亮、香气扑鼻即成"
      }
    }
  ],
  "tips": [
    "Use warm water (not cold) for a smoother custard. Cold water creates a watery layer.",
    "Straining is the secret to silky texture — never skip it.",
    "Do not steam on high heat or the eggs will become porous and bumpy.",
    "Blanched shrimp can be swapped for raw shrimp placed on top before steaming (cook 8 more minutes)."
  ],
  "tipsZh": [
    "用温水（非冷水）使蛋羹更顺滑。冷水会导致出水。",
    "过筛是丝滑口感的秘密——不可省略。",
    "不要用大火蒸，否则蛋羹会变多孔起坑。",
    "焯熟的虾仁可换成生虾仁直接放蛋羹上蒸（多蒸8分钟）。"
  ],
  "relatedSlugs": [
    "egg-drop-soup",
    "tomato-eggs",
    "garlic-chives-scrambled-eggs"
  ],
  "image": "/images/recipes/shrimp-steamed-egg.webp"
};
