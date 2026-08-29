import type { Recipe } from "@/lib/types";

/** Dried Duck and Radish Braise (腊鸭焖萝卜) — Seed batch */
export const dried_duck_and_radish_braise: Recipe = {
  "id": "la-ya-men-luo-bo",
  "slug": "dried-duck-and-radish-braise",
  "titleEn": "Dried Duck and Radish Braise",
  "titleZh": "腊鸭焖萝卜",
  "pinyin": "Là yā mèn luóbo",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Changsha, Hunan",
  "regionZh": "湖南长沙",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version uses whole dried duck leg (not shredded) and slow-simmered daikon for sweetness — no sugar added, unlike restaurant versions that rush with broth powder.",
  "versionNoteZh": "家常版用整只腊鸭腿慢焖白萝卜引出天然甜味，不加糖；餐馆版为提速常加高汤粉。",
  "tags": [
    "45-min",
    "one-pot",
    "winter-warmth"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Changsha’s Kaifu District hung duck legs in her balcony every November. She’d soak one overnight, then braise it with winter-harvested ‘snow radish’ — I still smell that earthy-sweet steam when I open my pantry.",
  "storyZh": "我外婆在长沙开福区，每年十一月都在阳台挂腊鸭腿。她泡一晚，配冬收‘雪萝卜’同焖——如今每次打开橱柜，那股泥土甜香仍扑鼻而来。",
  "ingredients": [
    {
      "id": "lr-01",
      "nameEn": "whole dried duck leg (skin-on, ~350 g pre-soak)",
      "nameZh": "整只腊鸭腿（带皮，泡发前约350克）",
      "pinyin": "zhěng zhī là yā tuǐ",
      "amountMetric": "350 g",
      "amountUS": "12 oz (unsoaked)",
      "category": "protein",
      "pantry": "asian",
      "note": "Sold vacuum-packed at Asian supermarkets (look for ‘Hunan-style cured duck’). Substitute: 300 g smoked turkey leg (lower salt, less funk)",
      "noteZh": "亚洲超市真空装‘湖南腊鸭腿’。替代：熏火鸡腿300克（咸度低、风味淡）"
    },
    {
      "id": "lr-02",
      "nameEn": "daikon radish, peeled and cut into 4-cm batons",
      "nameZh": "白萝卜，去皮切4厘米条",
      "pinyin": "bái luóbo",
      "amountMetric": "500 g",
      "amountUS": "1 large radish (~2½ cups)",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "lr-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "Shàoxīng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "lr-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "lr-05",
      "nameEn": "dried chili, crushed (optional, for Hunan authenticity)",
      "nameZh": "干辣椒碎（可选，增湘味）",
      "pinyin": "gān là jiāo suì",
      "amountMetric": "5 g",
      "amountUS": "1 tsp crushed",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chili"
    },
    {
      "id": "lr-06",
      "nameEn": "water or unsalted chicken stock",
      "nameZh": "清水或无盐鸡汤",
      "pinyin": "qīng shuǐ",
      "amountMetric": "600 ml",
      "amountUS": "2½ cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Soak dried duck leg in cold water overnight (8–10 hrs) in fridge. Drain, rinse, and pat dry. Score skin deeply in 3 places.",
      "textZh": "腊鸭腿冷水浸泡过夜（8–10小时，冰箱冷藏）。捞出冲洗，擦干；在皮面深划3刀。",
      "zhHint": "去盐关键步",
      "stateNote": {
        "visual": "Skin looks taut and slightly translucent; no visible salt crystals",
        "visualZh": "鸭皮紧绷微透，无盐霜结晶",
        "timeRef": "overnight",
        "timeRefZh": "过夜",
        "signal": "Water remains clear or faintly yellow (not milky)",
        "signalZh": "泡水清澈或微黄（非乳白）"
      }
    },
    {
      "text": "Place duck leg skin-side down in cold water. Bring to gentle simmer over medium heat. Skim foam 2 minutes. Drain and rinse again.",
      "textZh": "鸭腿皮朝下入冷水中，中火煮至微沸，撇浮沫2分钟。捞出再冲净。",
      "zhHint": "二道去腥",
      "stateNote": {
        "visual": "Foam is beige-gray and gathers in clusters at surface",
        "visualZh": "浮沫呈灰 beige 色，聚成团浮于水面",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Small bubbles rise steadily, no rolling boil",
        "signalZh": "小泡持续上升，未达大滚"
      }
    },
    {
      "text": "Heat wok over medium-high heat. Add 15 g (1 tbsp) oil. Place duck skin-down; press gently with spatula 2 minutes until skin crisps and releases easily.",
      "textZh": "中大火烧锅，下15克（1汤匙）油；鸭腿皮朝下入锅，压平煎2分钟至皮脆脱锅。",
      "zhHint": "皮脆才香",
      "stateNote": {
        "visual": "Skin blisters and turns deep amber with crisp edges",
        "visualZh": "鸭皮起泡、呈深琥珀色，边缘酥脆",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Sizzle becomes steady and deeper in pitch",
        "signalZh": "滋滋声变沉稳厚重"
      }
    },
    {
      "text": "Flip duck. Add Shaoxing wine and light soy sauce; cook 1 minute, scraping browned bits. Add crushed dried chilies (if using), daikon, and water/stock. Bring to boil, then reduce heat to low.",
      "textZh": "翻面，烹入绍酒与生抽，煮1分钟刮锅底焦香；加干辣椒碎（如用）、白萝卜与水/高汤，烧沸后转最小火。",
      "zhHint": "酒激香，小火焖",
      "stateNote": {
        "visual": "Liquid simmers with tiny, lazy bubbles breaking every 2–3 seconds",
        "visualZh": "汤汁微沸，每2–3秒冒一颗懒泡",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Steam rises softly, not vigorously",
        "signalZh": "蒸汽轻柔升腾，不猛烈"
      }
    },
    {
      "text": "Cover and braise 30 minutes. Uncover; turn duck and radish gently. Continue uncovered 10 minutes until liquid reduces by half and radish turns tender-crisp.",
      "textZh": "盖盖焖30分钟。揭盖，轻翻鸭腿与萝卜；敞盖续焖10分钟，至汤汁减半、萝卜熟而不烂。",
      "zhHint": "收汁见光亮",
      "stateNote": {
        "visual": "Radish pieces glow translucent; liquid coats spoon thinly",
        "visualZh": "萝卜条透亮；汤汁薄薄挂勺",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Wooden spoon leaves clean trail when dragged",
        "signalZh": "木勺划过，汤面留清晰痕迹"
      }
    },
    {
      "text": "Discard bones if needed. Slice duck meat against grain. Serve radish and duck together with reduced braising liquid.",
      "textZh": "剔除大骨（如有）。鸭肉逆纹切片，与萝卜同盛，浇上浓缩卤汁。",
      "zhHint": "逆纹更嫩"
    }
  ],
  "tips": [
    "Soaking time is non-negotiable — under-soaked duck tastes harshly salty.",
    "Daikon must be winter-harvested ‘snow radish’ (denser, sweeter); summer radish turns mushy.",
    "Save leftover braising liquid — freeze in ice cube trays for future soups or stir-fries."
  ],
  "tipsZh": [
    "浸泡时间不可省——泡不够的腊鸭咸涩刺喉。",
    "白萝卜须用冬收‘雪萝卜’（质地密、甜度高）；夏萝卜易焖烂。",
    "剩余卤汁别倒！冰格冷冻，日后煮汤、炒菜提鲜。"
  ],
  "relatedSlugs": [
    "yong-zhou-blood-duck"
  ],
  "image": "/images/recipes/dried-duck-and-radish-braise.webp"
};
