import type { Recipe } from "@/lib/types";

/** Crispy Chicken Strips (炸鸡柳) (炸鸡柳) — Day batch */
export const crispy_chicken_strips: Recipe = {
  "titleEn": "Crispy Chicken Strips (炸鸡柳)",
  "titleZh": "炸鸡柳",
  "pinyin": "zhà jī liǔ",
  "cuisine": "街头小吃",
  "cuisineEn": "Street Snack",
  "region": "全国",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 3,
  "version": "family",
  "versionNote": "Crispy breaded chicken tenders, street stall version",
  "versionNoteZh": "酥脆炸鸡柳，街头摊贩风味",
  "tags": [
    "street-food",
    "finger-food",
    "quick"
  ],
  "dietary": [
    "none"
  ],
  "story": "The most ubiquitous street food at Chinese school gates — crispy golden chicken strips dusted with cumin and chili. The trick is marinating the tenderloin in five-spice before the double-fry method creates an impossibly crunchy coating.",
  "storyZh": "中国校门口最常见的街头小吃——金黄酥脆的炸鸡柳撒上孜然辣椒面。秘诀在于用五香粉腌制鸡柳，然后双重炸制，外壳酥脆到难以置信。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "Chicken tenderloins",
      "nameZh": "鸡柳",
      "amountMetric": "400g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "2",
      "nameEn": "Cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "80g",
      "amountUS": "2/3 cup",
      "category": "staple",
      "pantry": "asian"
    },
    {
      "id": "3",
      "nameEn": "All-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "50g",
      "amountUS": "1/3 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Egg",
      "nameZh": "鸡蛋",
      "amountMetric": "1 large",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "Five-spice powder",
      "nameZh": "五香粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "6",
      "nameEn": "Garlic powder",
      "nameZh": "蒜粉",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "7",
      "nameEn": "Vegetable oil",
      "nameZh": "食用油",
      "amountMetric": "500ml",
      "amountUS": "2 cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut chicken tenderloins into 2cm x 8cm strips, marinate with five-spice powder and a pinch of salt for 15 minutes.",
      "textZh": "鸡柳切成2厘米宽、8厘米长的条，加入五香粉和少许盐腌制15分钟。",
      "stateNote": {
        "visual": "chicken coated in reddish spice",
        "signal": "15 minutes marinated"
      }
    },
    {
      "text": "Set up breading station: flour-cornstarch mix, beaten egg, and extra cornstarch.",
      "textZh": "准备三碗粉料：面粉玉米淀粉混合粉、打散的鸡蛋液、纯玉米淀粉。",
      "stateNote": {
        "visual": "three bowls ready",
        "signal": "breading station set"
      }
    },
    {
      "text": "Dredge each strip in flour mix, dip in egg, then coat thoroughly in cornstarch, pressing firmly.",
      "textZh": "鸡柳依次裹上混合粉、蛋液、玉米淀粉，用手压紧让粉层附着。",
      "zhHint": "玉米淀粉是酥脆的关键",
      "stateNote": {
        "visual": "white coated strips",
        "signal": "ready to fry"
      }
    },
    {
      "text": "Heat oil to 170°C, fry strips in batches for 3 minutes until pale golden.",
      "textZh": "油烧至170度，分批下入鸡柳炸3分钟至浅金黄色，捞出沥油。",
      "stateNote": {
        "visual": "light golden crust",
        "signal": "3 minutes"
      }
    },
    {
      "text": "Increase oil to 190°C, return all strips and fry 1 more minute until deep golden and crisp.",
      "textZh": "油温升至190度，将鸡柳全部复炸1分钟至深金黄酥脆，捞出沥油。",
      "stateNote": {
        "visual": "crisp golden-brown exterior",
        "signal": "double-fried crispy"
      }
    },
    {
      "text": "Toss immediately with garlic powder and serve with ketchup or chili sauce.",
      "textZh": "趁热撒上蒜粉，配番茄酱或辣椒酱食用。",
      "stateNote": {
        "visual": "steaming, powder adhering",
        "signal": "ready to serve"
      }
    }
  ],
  "tips": [
    "Double frying is essential for maximum crunch",
    "Cornstarch creates a lighter, crispier crust than flour alone",
    "Serve immediately — they lose crunch within 10 minutes"
  ],
  "tipsZh": [
    "双重炸制是酥脆的关键",
    "玉米淀粉比面粉更酥脆",
    "现炸现吃，10分钟后口感下降"
  ],
  "relatedSlugs": [
    "jianbing-day88-8",
    "fried-skewers-day88-2"
  ],
  "image": "/images/recipes/crispy-chicken-strips-day88.webp",
  "slug": "crispy-chicken-strips",
  "id": "crispy-chicken-strips"
};
