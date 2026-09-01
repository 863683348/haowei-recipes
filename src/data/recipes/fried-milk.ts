import type { Recipe } from "@/lib/types";

/** Crispy Fried Milk (炸牛奶) (炸牛奶) — Day batch */
export const fried_milk: Recipe = {
  "id": "fried-milk",
  "slug": "fried-milk",
  "titleEn": "Crispy Fried Milk (炸牛奶)",
  "titleZh": "炸牛奶",
  "pinyin": "zhà niú nǎi",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "hard",
  "timeMin": 60,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭版用全脂牛奶+玉米淀粉，冷藏定型后炸；餐馆版有时加吉利丁增强定型。",
  "versionNoteZh": "家庭版用全脂牛奶+玉米淀粉，冷藏定型后炸；餐馆版有时加吉利丁增强定型。",
  "tags": [
    "fried",
    "dessert",
    "cantonese",
    "party",
    "textural-contrast"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Fried milk is a Cantonese paradox—crispy outside, creamy inside, hot milk that somehow doesn't burn your mouth. My Cantonese friend in Guangzhou learned this at a dim sum school, amazed that milk could be fried.",
  "storyZh": "炸牛奶是粤菜的悖论——外酥里嫩，热牛奶却不烫嘴。我在广州的粤菜朋友在点心学校学会的，对牛奶能炸这件事感到惊奇。",
  "ingredients": [
    {
      "id": "fm-01",
      "nameEn": "whole milk",
      "nameZh": "全脂牛奶",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "fm-02",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "50 g",
      "amountUS": "1/2 cup",
      "category": "staple",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "fm-03",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "fm-04",
      "nameEn": "butter",
      "nameZh": "黄油",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "fm-05",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "50 g",
      "amountUS": "1/2 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "fm-06",
      "nameEn": "egg, beaten",
      "nameZh": "鸡蛋（打散）",
      "amountMetric": "1 large",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "fm-07",
      "nameEn": "panko breadcrumbs",
      "nameZh": "面包糠",
      "amountMetric": "100 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "fm-08",
      "nameEn": "neutral oil (for frying)",
      "nameZh": "中性油（炸用）",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Combine milk, cornstarch, sugar, and butter in saucepan. Cook over medium-low heat, stirring constantly, until thickened like pudding.",
      "textZh": "牛奶、淀粉、糖、黄油混合，中火慢煮，不停搅拌至布丁状稠度。",
      "stateNote": {
        "visual": "Mixture coats spoon thickly, leaves trail when dragged",
        "visualZh": "混合物厚裹勺子，拖过留痕",
        "signal": "Pudding consistency, pulls away from pan sides",
        "signalZh": "呈布丁状，离开锅边"
      }
    },
    {
      "text": "Spread onto tray, refrigerate 4+ hours until firm enough to cut.",
      "textZh": "倒入托盘，冷藏4小时以上至硬实可切。",
      "stateNote": {
        "visual": "Surface firm, springs back when touched",
        "visualZh": "表面硬实，按压回弹",
        "signal": "Knife cuts clean through without sticking",
        "signalZh": "刀切 cleanly，不粘"
      }
    },
    {
      "text": "Cut into rectangles, dip in flour, then egg, then panko.",
      "textZh": "切成长方形，依次蘸面粉、蛋液、面包糠。",
      "stateNote": {
        "visual": "Coating is even, no bare spots",
        "visualZh": "涂层均匀，无裸露",
        "signal": "Breadcrumb sticks without falling off",
        "signalZh": "面包糠粘附不掉落"
      }
    },
    {
      "text": "Heat oil to 175°C, fry milk rectangles 1-2 minutes until golden. Serve immediately.",
      "textZh": "油温175°C，炸1-2分钟至金黄，立刻上桌。",
      "stateNote": {
        "visual": "Crust turns golden in under 2 minutes",
        "visualZh": "外壳2分钟内变金黄",
        "signal": "Crackles when bitten, hot center",
        "signalZh": "咬下咔嚓，内里滚烫"
      }
    },
    {
      "text": "Prepare three shallow bowls: one with flour, one with beaten egg, one with panko breadcrumbs.",
      "textZh": "准备三个浅盘：面粉、蛋液、面包糠各一。",
      "stateNote": {
        "visual": "Three stations arranged in line",
        "visualZh": "三站依次排列",
        "signal": "Each station has enough coating material",
        "signalZh": "每站有足够涂层材料"
      }
    }
  ],
  "tips": [
    "Must refrigerate until very firm—soft milk will collapse in oil",
    "Work quickly when frying—the outside cooks fast, inside stays cold initially",
    "Cut into uniform sizes for even cooking"
  ],
  "tipsZh": [
    "必须冷藏到很硬——软牛奶下锅会塌",
    "炸的时候动作要快——外焦里冷是特色",
    "切成均匀大小确保受热一致"
  ],
  "relatedSlugs": [
    "egg-yolk-pastry",
    "sesame-tangyuan-glutinous-rice-balls",
    "fried-wontons"
  ],
  "image": "/images/recipes/egg-yolk-pastry.webp"
};
