import type { Recipe } from "@/lib/types";

/** Wenshi Tofu — Silken Bean Curd Threads (文思豆腐) — Seed batch */
export const wen_si_tofu: Recipe = {
  "id": "wen-si-dou-fu",
  "slug": "wen-si-tofu",
  "titleEn": "Wenshi Tofu — Silken Bean Curd Threads",
  "titleZh": "文思豆腐",
  "pinyin": "wén sī dòu fu",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu",
  "region": "Yangzhou",
  "regionZh": "扬州",
  "difficulty": "hard",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses softer silken tofu (not 'soft tofu' sold in tubs) and accepts 1–2 mm shreds instead of professional 0.5 mm. It’s served in clear broth with just three garnishes—no fancy carving—honoring its origin as a monk’s refined vegetarian dish.",
  "versionNoteZh": "家常版选用嫩豆腐（非盒装‘嫩豆腐’），接受1–2毫米细丝（非专业0.5毫米）。清汤为底，仅三样点缀，还原其作为僧人素斋的清雅本源。",
  "tags": [
    "showstopper",
    "vegetarian-option",
    "delicate"
  ],
  "dietary": [
    "none"
  ],
  "story": "My great-aunt, a former nun at Daming Temple, taught me this dish when I was twelve. She said Wenshi tofu wasn’t about perfection—it was about patience: ‘Each thread is a breath. If your mind wanders, the knife slips.’ We’d eat it plain, with just broth and chives, on Buddha’s Birthday.",
  "storyZh": "我的姑婆曾是大明寺尼姑，十二岁那年教我做这道菜。她说文思豆腐不在刀工多准，而在心静：‘每一丝是一口气，心乱了，刀就偏了。’佛诞日我们只配清汤与韭菜花，素净而敬。",
  "ingredients": [
    {
      "id": "wt-01",
      "nameEn": "silken tofu (not 'soft tofu'—must be shelf-stable, vacuum-packed, labeled 'jellied tofu')",
      "nameZh": "内酯豆腐（真空包装，标有‘凝胶型’）",
      "pinyin": "nèi zhì dòu fu",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Critical: Must be jellied-type silken tofu (e.g., 'Sun-Luck' or 'Hodo Soy'). Tub-style 'soft tofu' is too fragile.",
      "noteZh": "关键：须选真空装‘内酯豆腐’（如Sun-Luck或Hodo Soy）；盒装‘嫩豆腐’易碎无法切丝"
    },
    {
      "id": "wt-02",
      "nameEn": "dried wood ear mushrooms",
      "nameZh": "干木耳",
      "pinyin": "gān mù ěr",
      "amountMetric": "10 g",
      "amountUS": "1/4 cup dried",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak in warm water 20 min, trim stems, slice thinly",
      "noteZh": "温水泡发20分钟，去硬蒂，切细丝"
    },
    {
      "id": "wt-03",
      "nameEn": "carrot",
      "nameZh": "胡萝卜",
      "pinyin": "hú luó bo",
      "amountMetric": "80 g",
      "amountUS": "1/2 cup julienned",
      "category": "produce",
      "pantry": "local",
      "note": "Cut into matchstick-size pieces first, then slice into fine shreds",
      "noteZh": "先切火柴棒粗细，再片成细丝"
    },
    {
      "id": "wt-04",
      "nameEn": "chicken broth (homemade or low-sodium store-bought)",
      "nameZh": "鸡汤（自制或低钠市售）",
      "pinyin": "jī tāng",
      "amountMetric": "800 ml",
      "amountUS": "3.5 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Vegetarian option: use shiitake dashi (4 dried shiitake + 800 ml water, simmered 30 min)",
      "noteZh": "素食版：用香菇高汤（4朵干香菇+800ml水，炖30分钟）"
    },
    {
      "id": "wt-05",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Drain silken tofu, place on a clean, dry cutting board. Chill uncovered in freezer 15 minutes—just until surface firms (do not freeze solid).",
      "textZh": "豆腐沥干，放洁净砧板。敞盖冷冻15分钟，至表层微硬（不可冻实）。",
      "zhHint": "微冻定型，防塌陷",
      "stateNote": {
        "visual": "Surface feels cool and slightly resistant to fingertip pressure—no ice crystals form",
        "visualZh": "触感微凉、略抗压，无冰晶",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Tofu holds impression of finger for 1 second before springing back",
        "signalZh": "按压后留痕1秒即回弹"
      }
    },
    {
      "text": "Using a very sharp chef’s knife, slice tofu into 0.5 cm thick slabs. Stack 3–4 slabs and cut lengthwise into 2 mm wide strips. Rotate bundle 90° and slice crosswise into fine threads (~1–2 mm). Keep threads submerged in cold water.",
      "textZh": "用极锋利厨刀，将豆腐片成0.5厘米厚片。叠3–4片，顺长切2毫米宽条；旋转90度，横切成1–2毫米细丝。全程浸于冷水中。",
      "zhHint": "刀快、手稳、水护",
      "stateNote": {
        "visual": "Threads float freely, separate cleanly—no clumping or breakage",
        "visualZh": "丝条悬浮游动，根根分明，不黏不断",
        "timeRef": "20–25 minutes",
        "timeRefZh": "20–25 分钟",
        "signal": "Knife glides silently without resistance or tearing sound",
        "signalZh": "刀锋无声滑过，无撕扯声"
      }
    },
    {
      "text": "Blanch carrot and wood ear shreds separately in boiling water for 45 seconds each. Drain and rinse under cold water. Pat dry with paper towel.",
      "textZh": "胡萝卜丝与木耳丝分锅焯水45秒，捞出过凉，厨房纸吸干。",
      "zhHint": "分焯保色保脆",
      "stateNote": {
        "visual": "Carrot shreds bright orange; wood ear shreds translucent and springy",
        "visualZh": "胡萝卜丝鲜橙透亮；木耳丝半透弹韧",
        "timeRef": "45 seconds × 2",
        "timeRefZh": "各45秒",
        "heat": "high",
        "signal": "Water returns to boil within 10 seconds of adding shreds",
        "signalZh": "下丝后10秒内水复滚"
      }
    },
    {
      "text": "Bring chicken broth to gentle simmer in a clean pot. Carefully add tofu threads using a fine-mesh skimmer—let them fall in slowly. Simmer uncovered 3 minutes.",
      "textZh": "清鸡汤微沸。用细网漏勺轻托豆腐丝，缓缓落入汤中。敞盖小火煨3分钟。",
      "zhHint": "网勺护丝，慢落防断",
      "stateNote": {
        "visual": "Tofu threads bloom like white blossoms in broth—no clumping or clouding",
        "visualZh": "豆腐丝如白花绽放，汤仍清澈，无絮状物",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "Tiny bubbles rise gently around edges of pot",
        "signalZh": "锅边泛细泡，汤面无翻滚"
      }
    },
    {
      "text": "Add carrot and wood ear shreds, white pepper, and a pinch of salt. Simmer 1 more minute. Turn off heat. Let rest 2 minutes before serving. Garnish with scallion greens.",
      "textZh": "加入胡萝卜丝、木耳丝、白胡椒粉和少许盐，再煨1分钟。关火，静置2分钟上桌。撒葱绿。",
      "zhHint": "关火焖浸，锁住鲜嫩",
      "stateNote": {
        "visual": "All threads float evenly; broth remains crystal-clear with no haze",
        "visualZh": "所有细丝均匀悬浮，汤色澄澈无浑浊",
        "timeRef": "1 minute simmer + 2 minutes rest",
        "timeRefZh": "煨1分钟 + 静置2分钟",
        "signal": "Aroma lifts cleanly—no cooked-carrot or earthy mushroom dominance",
        "signalZh": "香气清扬，无胡萝卜或菌菇的浓重气味"
      }
    }
  ],
  "tips": [
    "Freezing tofu is non-negotiable—it sets the gel structure so threads hold shape during cooking.",
    "Use a ceramic or wooden cutting board: plastic boards cause knives to skip and tear tofu.",
    "If threads break, don’t discard—simmer them into the broth as ‘cloud tofu’ (a rustic family variation)."
  ],
  "tipsZh": [
    "豆腐微冻不可省——冻结胶体结构，确保细丝入汤不散。",
    "务必用木质或陶瓷砧板：塑料板易使刀打滑，切断豆腐丝。",
    "若断丝，勿丢弃——可直接入汤，称‘云豆腐’，是家常变通版。"
  ],
  "relatedSlugs": [
    "yangzhou-lion-head",
    "da-zhu-gan-si"
  ],
  "image": "/images/recipes/wen-si-tofu.webp"
};
