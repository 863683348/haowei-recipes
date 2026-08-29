import type { Recipe } from "@/lib/types";

/** Sandpot Vermicelli Pot (砂锅粉丝煲) — Seed batch */
export const sandpot_vermicelli_pot: Recipe = {
  "id": "sha-guo-fen-si-bao",
  "slug": "sandpot-vermicelli-pot",
  "titleEn": "Sandpot Vermicelli Pot",
  "titleZh": "砂锅粉丝煲",
  "pinyin": "shā guō fěn sī bǎo",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses pre-soaked vermicelli and a stovetop sandpot substitute (enameled Dutch oven) — achieves same silky texture and layered aroma without special equipment.",
  "versionNoteZh": "家庭版用预泡粉丝+搪瓷铸铁锅替代传统砂锅，同样获得滑润口感与层次香气，无需专用炊具。",
  "tags": [
    "30-min",
    "weeknight",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "At my cousin’s dim sum stall near Shamian Island in Guangzhou, she’d assemble this at 4 a.m.: soaked glass noodles, minced pork, shrimp, and preserved turnip — all layered into a sizzling sandpot just before service. ‘The sizzle is the first bite,’ she told me, ‘and the smell tells customers it’s real Cantonese.’",
  "storyZh": "在广州沙面岛表姐的早茶档口，她每天凌晨四点备这道菜：泡发粉丝、肉末、虾仁、菜脯，层层码进滚烫砂锅端上桌。‘滋啦一声是第一口，香气一飘，就知道是地道广式。’",
  "ingredients": [
    {
      "id": "vp-01",
      "nameEn": "dried mung bean vermicelli (glass noodles)",
      "nameZh": "绿豆粉丝",
      "pinyin": "lǜ dòu fěn sī",
      "amountMetric": "120 g",
      "amountUS": "1 ½ oz (about 1 nest)",
      "category": "staple",
      "pantry": "asian",
      "note": "Soak in room-temp water 20 min until flexible but not mushy",
      "noteZh": "室温水泡20分钟，至柔韧不烂"
    },
    {
      "id": "vp-02",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "pinyin": "zhū ròu mò",
      "amountMetric": "180 g",
      "amountUS": "6 ½ oz",
      "category": "protein",
      "pantry": "local",
      "note": "85% lean recommended for balance",
      "noteZh": "建议选用八分瘦两分肥"
    },
    {
      "id": "vp-03",
      "nameEn": "dried shrimp, rinsed & finely chopped",
      "nameZh": "海米（洗净切碎）",
      "pinyin": "hǎi mǐ",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "protein",
      "pantry": "asian",
      "note": "Substitute 1 tbsp fish sauce + 1 tsp toasted sesame oil if unavailable",
      "noteZh": "如无海米，可用鱼露1汤匙+芝麻油1茶匙替代"
    },
    {
      "id": "vp-04",
      "nameEn": "preserved turnip (chai poh), finely diced",
      "nameZh": "菜脯（切小丁）",
      "pinyin": "cài pú",
      "amountMetric": "40 g",
      "amountUS": "¼ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rinse briefly to reduce saltiness",
      "noteZh": "快速冲洗去咸"
    },
    {
      "id": "vp-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "25 ml",
      "amountUS": "1 ⅔ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "vp-06",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Drain soaked vermicelli; gently separate strands with fingers. Set aside.",
      "textZh": "捞出泡软粉丝，手指轻拨散开，备用。",
      "zhHint": "粉丝防结团"
    },
    {
      "text": "Heat 1 tsp oil in Dutch oven over medium heat. Sauté pork until lightly browned and crumbled, ~4 minutes.",
      "textZh": "锅中放1茶匙油，中火炒猪肉末至微黄松散，约4分钟。",
      "zhHint": "肉末炒散",
      "stateNote": {
        "visual": "Pork turns pale tan; small crumbles form, no gray clumps",
        "visualZh": "肉色转浅褐，呈细颗粒状，无灰白结块",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium",
        "signal": "Faint sizzle resumes after initial steam stops",
        "signalZh": "初蒸气散尽后，响起细微滋滋声"
      }
    },
    {
      "text": "Add dried shrimp and preserved turnip; stir 1 minute until fragrant.",
      "textZh": "加入海米与菜脯，翻炒1分钟至香气溢出。",
      "zhHint": "激发干香"
    },
    {
      "text": "Pour in 300 ml hot water, light soy sauce, and bring to simmer. Gently lay vermicelli on top — do not stir.",
      "textZh": "倒入300 ml热水和生抽，烧至微沸；将粉丝平铺于表面，切勿翻动。",
      "zhHint": "粉丝覆顶不搅"
    },
    {
      "text": "Cover tightly and simmer 12 minutes. Uncover, drizzle with sesame oil, and let stand 3 minutes before serving.",
      "textZh": "盖紧盖子焖12分钟；揭盖淋芝麻油，静置3分钟即可上桌。",
      "zhHint": "淋油静置锁香",
      "stateNote": {
        "visual": "Vermicelli fully translucent; liquid nearly absorbed, glossy surface",
        "visualZh": "粉丝全透明；汤汁近收干，表面油亮",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "No visible steam rising; surface shimmers faintly",
        "signalZh": "无明显蒸汽；表面微微反光"
      }
    }
  ],
  "tips": [
    "Never skip the sesame oil finish — it lifts the entire dish.",
    "For authentic texture, use mung bean vermicelli (not rice or sweet potato).",
    "Serve immediately: vermicelli softens quickly if left sitting."
  ],
  "tipsZh": [
    "芝麻油必须最后淋入，是整道菜的点睛之笔。",
    "务必用绿豆粉丝（非米粉或红薯粉），口感才正宗。",
    "出锅即食，久置粉丝易软烂。"
  ],
  "relatedSlugs": [
    "electric-rice-cooker-claypot-style-rice",
    "one-pot-winter-vegetable-stew"
  ],
  "image": "/images/recipes/sandpot-vermicelli-pot.webp"
};
