import type { Recipe } from "@/lib/types";

/** Tomato Beef Brisket Noodles (番茄牛腩面) (番茄牛腩面) — Day batch */
export const tomato_beef_noodles: Recipe = {
  "slug": "tomato-beef-noodles",
  "titleEn": "Tomato Beef Brisket Noodles (番茄牛腩面)",
  "titleZh": "番茄牛腩面",
  "pinyin": "fān qié niú ruǎn miàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 80,
  "servings": 2,
  "version": "family",
  "versionNote": "Comfort food bowl — noodles in rich tomato-beef broth.",
  "versionNoteZh": "暖胃面条——番茄牛腩汤底配面条。",
  "tags": [
    "beef",
    "tomato",
    "noodles",
    "comfort-food",
    "weeknight"
  ],
  "dietary": [],
  "story": "A bowl of tomato beef brisket noodles is the ultimate comfort food in Shanghai homes. The noodles soak up the reddish-brown broth, and the tender brisket makes it a complete meal.",
  "storyZh": "番茄牛腩面是上海人家的终极 comfort food。面条吸饱红褐色汤汁，配上软烂牛腩，就是一顿完整的大餐。",
  "ingredients": [
    {
      "id": "tbn-1",
      "nameEn": "beef brisket, 3cm chunks",
      "nameZh": "牛腩块",
      "amountMetric": "300 g",
      "amountUS": "about 0.7 lbs",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "tbn-2",
      "nameEn": "ripe tomatoes, quartered",
      "nameZh": "熟番茄",
      "amountMetric": "3 medium",
      "amountUS": "3 medium",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "tbn-3",
      "nameEn": "egg noodles or wheat noodles",
      "nameZh": "鸡蛋面/小麦面",
      "amountMetric": "200 g",
      "amountUS": "about 7 oz",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "tbn-4",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "2 slices",
      "amountUS": "2 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "tbn-5",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tbn-6",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "rock-sugar"
    },
    {
      "id": "tbn-7",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "tbn-8",
      "nameEn": "hot water",
      "nameZh": "热水",
      "amountMetric": "800 ml",
      "amountUS": "about 3.2 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "tbn-9",
      "nameEn": "scallions, chopped",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "tbn-10",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "to taste",
      "amountUS": "to taste",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Blanch brisket in cold water, skim foam, drain and rinse.",
      "textZh": "牛腩冷水下锅，烧开撇沫，捞出冲洗。",
      "zhHint": "焯水",
      "stateNote": {
        "visual": "Gray foam",
        "visualZh": "灰色浮沫",
        "signal": "Water runs clear",
        "signalZh": "水变清"
      }
    },
    {
      "text": "Heat oil, add ginger. Fry 30s. Add tomatoes, stir-fry until soft and broken down.",
      "textZh": "热油下姜片爆香 30 秒，下番茄翻炒至软烂。",
      "zhHint": "炒番茄",
      "stateNote": {
        "visual": "Tomatoes breaking down into paste",
        "visualZh": "番茄开始化开成酱",
        "heat": "medium",
        "signal": "Tomatoes collapsing",
        "signalZh": "番茄变软塌"
      }
    },
    {
      "text": "Add brisket, soy sauce, rock sugar. Stir 2 min.",
      "textZh": "下牛腩、生抽、冰糖，炒 2 分钟。",
      "zhHint": "炒香",
      "stateNote": {
        "visual": "Sauce coats beef and tomatoes",
        "visualZh": "酱汁裹住牛肉和番茄",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Add hot water. Bring to boil, reduce to low. Cover and simmer 45 min.",
      "textZh": "加热水烧开，转小火盖盖炖 45 分钟。",
      "zhHint": "炖煮",
      "stateNote": {
        "visual": "Broth is rich reddish-brown",
        "visualZh": "汤汁呈红褐色",
        "heat": "low",
        "timeRef": "45 minutes",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Meanwhile, cook noodles in boiling salted water according to package. Drain.",
      "textZh": "同时另锅烧水，下面条煮熟捞出。",
      "zhHint": "煮面",
      "stateNote": {
        "visual": "Noodles float and no white center",
        "visualZh": "面条浮起无硬心",
        "timeRef": "3-5 minutes",
        "signal": "状态已稳定",
        "signalZh": "视觉信号已稳定"
      }
    },
    {
      "text": "Season broth with salt. Place noodles in bowl, ladle hot beef-tomato broth and brisket on top. Garnish with scallions.",
      "textZh": "汤汁盐调味。碗底放面条，浇上牛腩番茄汤，撒葱花。",
      "zhHint": "组装"
    }
  ],
  "tips": [
    "Use ripe tomatoes for the best color and sweetness.",
    "Noodles should be al dente — they'll soften in the hot broth.",
    "Save some broth to drink separately if you like."
  ],
  "tipsZh": [
    "番茄要熟透——颜色甜味都好。",
    "面条煮到 al dente——会在热汤里继续软化。",
    "汤可以单独喝。"
  ],
  "relatedSlugs": [
    "tomato-egg-noodles",
    "tomato-beef-brisket",
    "yangchun-noodles",
    "zhajiang-noodles"
  ],
  "image": "/images/recipes/tomato-beef-noodles.webp",
  "id": "tomato-beef-noodles"
};
