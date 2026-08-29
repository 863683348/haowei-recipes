import type { Recipe } from "@/lib/types";

/** Fresh Pork Wonton (鲜肉馄饨) — Seed batch */
export const fresh_pork_wonton: Recipe = {
  "id": "xian-rou-hun-tun",
  "slug": "fresh-pork-wonton",
  "titleEn": "Fresh Pork Wonton",
  "titleZh": "鲜肉馄饨",
  "pinyin": "xiān ròu hún tún",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses hand-folded square wrappers and a light, clean broth—no MSG or pre-made stock. Restaurant versions often use thicker wrappers and richer, longer-simmered broths.",
  "versionNoteZh": "家庭版用手工折的方皮和清鲜汤底，不加味精或市售高汤；餐馆版常用厚皮、长时间熬煮的浓汤。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Yangpu District, Shanghai, folded these every Sunday before the 1980s market opened—she’d wake at 5 a.m. to grind pork shoulder by hand with a stone mortar, saying ‘the fat must melt into the meat, not sit beside it.’ Her broth was just boiled water, salt, and a single dried shrimp for umami.",
  "storyZh": "我上海杨浦区的外婆在上世纪80年代前，每逢周日清晨五点就起来做这道馄饨——她亲手用石臼捶打猪肩肉，说‘肥肉要融进瘦肉里，不能只是挨着’。她的汤底只有开水、盐和一颗干虾米提鲜。",
  "ingredients": [
    {
      "id": "fr-01",
      "nameEn": "ground pork (shoulder, 20% fat)",
      "nameZh": "猪前腿肉末（肥瘦比2:8）",
      "pinyin": "zhū qián tuǐ ròu mò",
      "amountMetric": "300 g",
      "amountUS": "1 1/3 cups loosely packed",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for freshly ground; avoid pre-packaged lean-only",
      "noteZh": "请肉铺现绞；勿用预包装纯瘦肉"
    },
    {
      "id": "fr-02",
      "nameEn": "wonton wrappers (square, ~8 cm)",
      "nameZh": "方形馄饨皮（约8厘米边长）",
      "pinyin": "fāng xíng hún tún pí",
      "amountMetric": "36 pieces",
      "amountUS": "36 pieces",
      "category": "staple",
      "pantry": "asian",
      "note": "Look for 'egg wonton wrappers' in refrigerated section; substitute fresh pasta sheets cut to size if unavailable",
      "noteZh": "冷藏柜找‘鸡蛋馄饨皮’；若无，可用新鲜意大利面皮裁成8cm方块替代"
    },
    {
      "id": "fr-03",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp finely grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "fr-04",
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
      "id": "fr-05",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "In a large bowl, combine pork, ginger, light soy sauce, and sesame oil. Stir vigorously in one direction for 2 minutes until sticky and slightly glossy.",
      "textZh": "大碗中混合猪肉末、姜末、生抽和香油，朝同一方向用力搅打2分钟，至肉馅发黏、略泛光泽。",
      "zhHint": "同向搅打上劲",
      "stateNote": {
        "visual": "Mixture pulls away from bowl sides and holds shape when scooped",
        "visualZh": "肉馅能脱离碗壁，勺起成团不散",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Resists breaking apart when pinched between thumb and forefinger",
        "signalZh": "拇指与食指轻捏不散开"
      }
    },
    {
      "text": "Place 1 tsp (7 g) of filling in center of each wrapper. Fold diagonally into triangle, then pinch corners together to form a ‘pillow’ shape with sealed edges.",
      "textZh": "每张皮中央放一茶匙（7克）馅料；对角对折成三角形，再将两角尖捏合，形成封口‘小枕头’。",
      "zhHint": "对折再捏角，封口要紧",
      "stateNote": {
        "visual": "No gaps visible along seams; edges look taut and smooth",
        "visualZh": "接缝处无缝隙，边缘紧绷光滑",
        "timeRef": "3–4 seconds per wonton",
        "timeRefZh": "每个馄饨3–4秒",
        "signal": "Wrapper doesn’t tear or leak moisture when gently squeezed",
        "signalZh": "轻压不破皮、不渗水"
      }
    },
    {
      "text": "Bring a large pot of water to rolling boil. Gently add wontons one by one, stirring once to prevent sticking.",
      "textZh": "大锅水烧至滚沸，逐个下入馄饨，轻搅一次防粘连。",
      "zhHint": "水沸再下，轻搅防沉底",
      "stateNote": {
        "visual": "Water bubbles violently across entire surface",
        "visualZh": "水面剧烈翻滚，气泡布满全锅",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "high",
        "signal": "Steam rises thickly and lid fogs heavily",
        "signalZh": "蒸汽浓重，锅盖迅速结满水雾"
      }
    },
    {
      "text": "When wontons float, reduce heat to medium. Simmer uncovered for 3 minutes — they’ll puff slightly and turn translucent at edges.",
      "textZh": "馄饨浮起后转中火，敞盖煮3分钟——体积微胀，边缘呈半透明状。",
      "zhHint": "浮起即转中火，勿盖盖",
      "stateNote": {
        "visual": "Edges of wrappers glow faintly white and semi-transparent",
        "visualZh": "皮边缘泛出微白半透明光晕",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Wontons bob gently without bursting",
        "signalZh": "馄饨轻浮轻沉，不破不裂"
      }
    },
    {
      "text": "Ladle hot clear broth (simmered water + pinch of salt + 1 dried shrimp) into bowls. Add 9 wontons per serving. Garnish with minced scallion.",
      "textZh": "将热清汤（清水+少许盐+1颗干虾米熬制）舀入碗中，每碗放9只馄饨，撒葱花。",
      "zhHint": "清汤为魂，葱花点睛",
      "stateNote": {
        "visual": "Broth remains crystal-clear, no cloudiness or oil slick",
        "visualZh": "汤色清亮，无浑浊或浮油",
        "timeRef": "immediately after boiling",
        "timeRefZh": "滚水即盛",
        "signal": "Steam rises steadily from bowl surface",
        "signalZh": "碗面持续升腾热气"
      }
    }
  ],
  "tips": [
    "Freeze uncooked wontons on a parchment-lined tray first—then bag—to prevent clumping.",
    "For silkier texture, add 1 tsp cornstarch (7 g) to filling—it binds moisture without gumminess.",
    "Never over-boil: 3 minutes post-float is ideal. Overcooking makes wrappers mushy."
  ],
  "tipsZh": [
    "生馄饨先平铺冷冻定型，再装袋，防粘连。",
    "加1茶匙（7克）玉米淀粉入馅，口感更滑润，不发黏。",
    "浮起后仅煮3分钟！久煮皮烂失形。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/fresh-pork-wonton.webp"
};
