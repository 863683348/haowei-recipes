import type { Recipe } from "@/lib/types";

/** Iron-Pot Fish Stew (铁锅炖鱼) — Seed batch */
export const iron_pot_fish_stew: Recipe = {
  "id": "tie-guo-dun-yu",
  "slug": "iron-pot-fish-stew",
  "titleEn": "Iron-Pot Fish Stew",
  "titleZh": "铁锅炖鱼",
  "pinyin": "tiě guō dùn yú",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Harbin",
  "regionZh": "哈尔滨",
  "difficulty": "medium",
  "timeMin": 65,
  "servings": 5,
  "version": "family",
  "versionNote": "Family version uses a single cast-iron Dutch oven instead of traditional open iron wok over firewood — same layered aroma, safer and more controllable for home kitchens.",
  "versionNoteZh": "家庭版改用铸铁锅替代传统柴火铁锅——香气层次不变，更安全易控。",
  "tags": [
    "60-min",
    "one-pot",
    "winter-warmth"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Harbin’s Daoli District kept a 40-year-old cast-iron wok hanging above his stove — he’d layer fish, potatoes, tofu, and cabbage in it each November, saying ‘the cold air makes the broth clearer’.",
  "storyZh": "我哈尔滨道里区的舅舅灶台上方常年挂着一口用了40年的铁锅——每年11月他都往里层层铺鱼、土豆、豆腐、白菜，说‘冷空气让汤更清亮’。",
  "ingredients": [
    {
      "id": "tg-01",
      "nameEn": "silver carp or bighead carp",
      "nameZh": "鳙鱼或鲢鱼",
      "pinyin": "yōng yú huò lián yú",
      "amountMetric": "1000 g",
      "amountUS": "2.2 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Head-on, scaled and gutted. Silver carp preferred for richer flavor. Substitute: catfish (1 kg, skin-on).",
      "noteZh": "带鱼头，已刮鳞去内脏。花鲢风味更佳。替代：鲶鱼（1公斤，带皮）。"
    },
    {
      "id": "tg-02",
      "nameEn": "potatoes",
      "nameZh": "土豆",
      "pinyin": "tǔ dòu",
      "amountMetric": "300 g",
      "amountUS": "2 medium, cubed",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tg-03",
      "nameEn": "firm tofu",
      "nameZh": "北豆腐",
      "pinyin": "běi dòu fu",
      "amountMetric": "250 g",
      "amountUS": "1 block (14 oz)",
      "category": "protein",
      "pantry": "asian",
      "note": "Press tofu 10 min between paper towels to remove excess water.",
      "noteZh": "豆腐用厨房纸夹住压10分钟，挤出多余水分。"
    },
    {
      "id": "tg-04",
      "nameEn": "Napa cabbage",
      "nameZh": "大白菜",
      "pinyin": "dà bái cài",
      "amountMetric": "400 g",
      "amountUS": "½ small head, chopped",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tg-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tg-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "25 ml",
      "amountUS": "1½ tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Score fish deeply on both sides. Rub with 1 tbsp Shaoxing wine and 5 g salt. Let sit 15 minutes while prepping vegetables.",
      "textZh": "鱼身两面深划刀口。用1汤匙绍兴酒和5克盐搓抹，静置15分钟（同时备菜）。",
      "zhHint": "划刀 + 酒盐腌",
      "stateNote": {
        "visual": "Salt dissolves fully; fish surface looks taut and slightly opaque",
        "visualZh": "盐粒全溶，鱼身紧绷微泛白",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "No liquid pools around fish on plate",
        "signalZh": "盘中无渗出液体积聚"
      }
    },
    {
      "text": "Heat 25 ml (1½ tbsp) oil in a 5.5-qt cast-iron Dutch oven over medium-high heat until shimmering. Place fish in center; sear 4 minutes per side until deeply browned and firm.",
      "textZh": "5.5夸脱铸铁锅中火高热25毫升（1½汤匙）油至涟漪状。鱼居中放入，每面煎4分钟至深褐酥硬。",
      "zhHint": "热油 + 双面煎透",
      "stateNote": {
        "visual": "Fish skin is deeply browned, edges slightly curled and crisp",
        "visualZh": "鱼皮深褐，边缘微翘酥硬",
        "timeRef": "4 minutes (per side)",
        "timeRefZh": "每面 4 分钟",
        "heat": "medium-high",
        "signal": "Fish lifts cleanly without tearing",
        "signalZh": "鱼身完整抬起，不破皮不撕裂"
      }
    },
    {
      "text": "Push fish aside. Add potatoes and tofu to empty space; stir-fry 2 minutes until edges begin to brown. Push aside too. Add cabbage and stir-fry 1 minute until wilted.",
      "textZh": "将鱼推至锅边。空位下土豆与豆腐，中火煸炒2分钟至边缘微黄。再推至一边，下白菜炒1分钟至塌软。",
      "zhHint": "分层煸炒蔬菜",
      "stateNote": {
        "visual": "Potatoes show light golden edges; cabbage loses raw shine",
        "visualZh": "土豆边缘微黄；白菜褪去生涩光泽",
        "timeRef": "3 minutes total",
        "timeRefZh": "共 3 分钟",
        "heat": "medium",
        "signal": "Cabbage emits mild sweet aroma, not sour",
        "signalZh": "白菜散发微甜香，无酸腐气"
      }
    },
    {
      "text": "Return fish to center. Pour in light soy, remaining Shaoxing wine, and 600 ml (2½ cups) warm water. Bring to gentle boil, then reduce heat to low.",
      "textZh": "鱼归回锅中央。淋入生抽、剩余绍兴酒，加600毫升（2½杯）温水。烧开后转最小火。",
      "zhHint": "鱼回位 + 淋酱 + 加水",
      "stateNote": {
        "visual": "Liquid simmers softly with tiny, steady bubbles",
        "visualZh": "汤汁微滚，气泡细密均匀",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Steam rises steadily but quietly",
        "signalZh": "热气持续平稳升腾，无声息"
      }
    },
    {
      "text": "Cover tightly and braise 45 minutes. Uncover, stir gently once, and simmer uncovered 5 minutes to concentrate flavors. Serve directly from the pot.",
      "textZh": "严盖焖煮45分钟。开盖轻拌一次，再敞盖炖5分钟收味。原锅上桌。",
      "zhHint": "严盖焖 + 敞盖收",
      "stateNote": {
        "visual": "Broth is clear amber, vegetables plump and tender",
        "visualZh": "汤色清亮琥珀，蔬菜饱满软糯",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "Steam thins and aroma intensifies sharply",
        "signalZh": "水汽变薄，香气骤然浓郁"
      }
    }
  ],
  "tips": [
    "Layering order matters: fish bottom → potatoes/tofu middle → cabbage top — ensures even cooking.",
    "If using catfish, reduce braising time by 10 minutes — it cooks faster.",
    "For authentic Northeastern depth, add 1 star anise (termKey: star-anise) with the wine."
  ],
  "tipsZh": [
    "分层顺序关键：鱼打底 → 土豆豆腐居中 → 白菜盖顶——受热更匀。",
    "若用鲶鱼，焖煮时间减10分钟——熟得更快。",
    "追求地道东北风味，可在加酒时投入1颗八角（termKey: star-anise）。"
  ],
  "relatedSlugs": [
    "sauce-braised-crucian-carp",
    "home-style-braised-common-carp"
  ],
  "image": "/images/recipes/iron-pot-fish-stew.webp"
};
