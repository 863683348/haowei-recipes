import type { Recipe } from "@/lib/types";

/** Braised Dried Tofu (Lu Dou Gan) (卤豆干) — Seed batch */
export const braised_dried_tofu: Recipe = {
  "id": "lu-dou-gan",
  "slug": "braised-dried-tofu",
  "titleEn": "Braised Dried Tofu (Lu Dou Gan)",
  "titleZh": "卤豆干",
  "pinyin": "lu dou gan",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Suzhou",
  "regionZh": "苏州",
  "difficulty": "medium",
  "timeMin": 55,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses reusable braising liquid (lu shui) — simmered once, then cooled and stored for future use — unlike restaurant versions that discard after each batch.",
  "versionNoteZh": "家常版卤水可重复使用：初煮冷却后冷藏，下次复热续用，越卤越香。",
  "tags": [
    "60-min",
    "make-ahead",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "My great-aunt in Suzhou’s Pingjiang Road kept a 30-year-old lu shui in a ceramic crock — she’d add a new batch of dried tofu every Sunday, then serve the first pieces to neighbors as ‘taste-of-the-week’. I still use her ratio: 1 part star anise, 2 parts ginger, 3 parts light soy.",
  "storyZh": "苏州平江路的姑婆有一坛用了30年的老卤水，盛在青瓷罐里——每周日添新豆干，头几块总先分给邻居尝‘本周第一口’。我至今沿用她的秘方比例：八角1份、姜2份、生抽3份。",
  "ingredients": [
    {
      "id": "lg-01",
      "nameEn": "dried tofu (xiang gan)",
      "nameZh": "香干",
      "pinyin": "xiang gan",
      "amountMetric": "300 g",
      "amountUS": "3 cups, 1.5-cm cubes",
      "category": "protein",
      "pantry": "asian",
      "note": "Choose thick-cut, firm-textured xiang gan — avoid pre-sliced ‘snack packs’ which disintegrate during braising.",
      "noteZh": "选厚切、紧实型香干；避预切零食装，易煮散。"
    },
    {
      "id": "lg-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "sheng chou",
      "amountMetric": "120 ml",
      "amountUS": "½ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "lg-03",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "ba jiao",
      "amountMetric": "3 g",
      "amountUS": "2 whole pods",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "lg-04",
      "nameEn": "ginger",
      "nameZh": "姜",
      "pinyin": "jiang",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp, thickly sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "lg-05",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "pinyin": "wu xiang fen",
      "amountMetric": "2 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    }
  ],
  "steps": [
    {
      "text": "Rinse dried tofu cubes under cold water. Place in a saucepan with enough cold water to cover by 2 cm. Bring to a gentle simmer over medium heat — do not boil vigorously.",
      "textZh": "豆干冷水冲洗，入锅加水没过2厘米，中火煮至微沸（勿滚）。",
      "zhHint": "冷水下锅，去豆腥",
      "stateNote": {
        "visual": "Tiny bubbles rise steadily from bottom; surface stays calm with no roiling.",
        "visualZh": "锅底持续冒细泡，水面平静无翻滚。",
        "timeRef": "5–7 minutes",
        "timeRefZh": "5–7 分钟",
        "heat": "medium",
        "signal": "Steam rises in thin, steady ribbons — no loud bubbling.",
        "signalZh": "蒸汽呈细而稳的带状升起，无爆沸声。"
      }
    },
    {
      "text": "Skim off any foam, then drain and rinse tofu with cool water. Pat dry with towels.",
      "textZh": "撇净浮沫，滤出豆干，冲凉水，厨房纸吸干。",
      "zhHint": "去浮沫，保卤清",
      "stateNote": {
        "visual": "Foam is grayish-white and frothy; water runs clear after rinsing.",
        "visualZh": "浮沫灰白泡沫状；冲后水流清澈。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No gray residue remains on tofu surface after rinsing.",
        "signalZh": "冲净后豆干表面无灰白残渣。"
      }
    },
    {
      "text": "In a clean pot, combine light soy sauce, star anise, ginger, five-spice powder, and 500 ml water. Bring to a bare simmer over medium-low heat.",
      "textZh": "净锅中加入生抽、八角、姜片、五香粉和500毫升水，中小火煮至微沸。",
      "zhHint": "卤汁先煮开，再下料",
      "stateNote": {
        "visual": "Liquid shivers gently; tiny bubbles break intermittently at edges.",
        "visualZh": "卤汁微颤，边缘间歇冒小泡。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "Aromas of star anise and ginger bloom clearly without bitterness.",
        "signalZh": "八角与姜香清晰绽放，无焦苦味。"
      }
    },
    {
      "text": "Add drained tofu. Simmer uncovered for 30 minutes, turning gently every 10 minutes — liquid should reduce by one-third and cling to tofu.",
      "textZh": "下豆干，敞盖小火卤30分钟，每10分钟轻翻一次——卤汁应减少三分之一并裹附豆干。",
      "zhHint": "小火慢卤，勤翻匀入味",
      "stateNote": {
        "visual": "Tofu deepens to rich amber; liquid thickens to syrupy gloss.",
        "visualZh": "豆干转为深琥珀色，卤汁呈糖浆状亮泽。",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "medium-low",
        "signal": "A spoon drawn across bottom leaves a slow, visible trail.",
        "signalZh": "勺背划过锅底，留缓慢可见痕迹。"
      }
    },
    {
      "text": "Turn off heat. Let tofu cool completely in liquid — minimum 2 hours, ideally overnight — for maximum flavor absorption.",
      "textZh": "关火，豆干在卤汁中自然冷却——至少2小时，隔夜更佳，充分吸味。",
      "zhHint": "冷卤入味，是关键",
      "stateNote": {
        "visual": "Tofu cubes swell slightly and darken evenly; liquid becomes viscous.",
        "visualZh": "豆干微胀、色泽均匀加深；卤汁渐浓稠。",
        "timeRef": "2 hours minimum",
        "timeRefZh": "至少2 小时",
        "signal": "Tofu feels cool to touch and yields slightly when pressed.",
        "signalZh": "触感冰凉，按压微弹。"
      }
    }
  ],
  "tips": [
    "Save the cooled braising liquid in a sealed jar in fridge for up to 1 month — reboil before next use.",
    "For deeper color, add 1 tsp dark soy sauce (not listed above) — optional but traditional in Suzhou style.",
    "Serve chilled or at room temperature — never hot, as heat dulls the delicate balance."
  ],
  "tipsZh": [
    "冷却卤汁密封冷藏，可存1个月；下次使用前需煮沸。",
    "如需更深酱色，可加1茶匙老抽（未列于主料），苏州传统做法。",
    "宜冷食或室温食用，忌热食，以免破坏细腻风味平衡。"
  ],
  "relatedSlugs": [
    "cold-dressed-dried-tofu",
    "stir-fried-dried-tofu-with-celery"
  ],
  "image": "/images/recipes/braised-dried-tofu.webp"
};
