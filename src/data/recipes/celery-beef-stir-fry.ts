import type { Recipe } from "@/lib/types";

/** Celery and Beef Stir-Fry (芹菜炒牛肉) (芹菜炒牛肉) — Day batch */
export const celery_beef_stir_fry: Recipe = {
  "id": "celery-beef-stir-fry",
  "slug": "celery-beef-stir-fry",
  "titleEn": "Celery and Beef Stir-Fry (芹菜炒牛肉)",
  "titleZh": "芹菜炒牛肉",
  "pinyin": "qín cài chǎo niú ròu",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Hunan",
  "regionZh": "湖南",
  "difficulty": "medium",
  "timeMin": 22,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version uses sliced celery for a soft bite. Restaurant version cuts it into fine julienne and adds pickled chilies.",
  "versionNoteZh": "家常版芹菜切片，口感偏软。餐厅版切细丝并加泡椒。",
  "tags": [
    "beef",
    "celery",
    "stir-fry",
    "hunan",
    "22-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "In Hunan, celery is a workhorse vegetable, not a garnish. It goes into hot wok oil with beef and chilies, and the edge of bitterness in the celery is exactly what makes the heavy beef fat taste clean.",
  "storyZh": "在湖南，芹菜是主力蔬菜而非点缀。它和牛肉、辣椒一起下热油锅，那一丝苦味正好解掉牛肉的厚重油脂。",
  "ingredients": [
    {
      "id": "cbfs-1",
      "nameEn": "beef, sliced thin",
      "nameZh": "牛肉薄片",
      "amountMetric": "300 g",
      "amountUS": "about 10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "cbfs-2",
      "nameEn": "celery, stalks sliced on the bias",
      "nameZh": "芹菜斜切片",
      "amountMetric": "350 g",
      "amountUS": "about 5 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cbfs-3",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cbfs-4",
      "nameEn": "doubanjiang (fermented chili bean paste)",
      "nameZh": "豆瓣酱",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang",
      "note": "Skip if you want a milder dish."
    },
    {
      "id": "cbfs-5",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cbfs-6",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "cbfs-7",
      "nameEn": "dried chilies",
      "nameZh": "干辣椒",
      "amountMetric": "4 pieces",
      "amountUS": "4 pieces",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "cbfs-8",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cbfs-9",
      "nameEn": "ginger, julienned",
      "nameZh": "姜丝",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cbfs-10",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Marinate the beef with soy sauce, wine and cornstarch for 10 minutes.",
      "textZh": "牛肉加生抽、绍酒、淀粉腌 10 分钟。",
      "zhHint": "腌牛肉"
    },
    {
      "text": "Peel the stringy ridges off the celery stalks with a vegetable peeler, then slice on the bias.",
      "textZh": "芹菜削掉表面老筋，再斜刀切片。",
      "zhHint": "处理芹菜",
      "stateNote": {
        "visual": "Stalks look smooth with no visible fibres",
        "visualZh": "芹菜表面光滑看不到纤维",
        "signal": "A slice bends without stringing apart",
        "signalZh": "切片能弯不易散丝"
      }
    },
    {
      "text": "Heat a wok over high heat. Add oil, sear the beef 70 seconds and remove.",
      "textZh": "大火热锅放油，牛肉煎 70 秒盛出。",
      "zhHint": "滑炒牛肉",
      "stateNote": {
        "visual": "Slices brown on contact, no liquid in the pan",
        "visualZh": "肉片贴锅立刻上色，锅底无出水",
        "signal": "Smell is roasted meat, not raw",
        "signalZh": "闻到的是焦香不是生肉味",
        "heat": "high",
        "timeRef": "70 seconds"
      }
    },
    {
      "text": "Fry chilies, garlic and ginger 20 seconds, then add doubanjiang and stir 10 seconds until the oil reddens.",
      "textZh": "下辣椒、蒜片、姜丝炒 20 秒，加豆瓣酱炒 10 秒至红油渗出。",
      "zhHint": "炒红油",
      "stateNote": {
        "visual": "Oil turns orange-red and smells nutty",
        "visualZh": "油色变橘红，飘出酱香",
        "signal": "Paste no longer smells raw",
        "signalZh": "豆瓣生味消失",
        "heat": "medium",
        "timeRef": "30 seconds total"
      }
    },
    {
      "text": "Add celery and stir-fry 2 minutes. It should soften slightly but keep a bite.",
      "textZh": "下芹菜炒 2 分钟，微软但仍带脆感。",
      "zhHint": "炒芹菜",
      "stateNote": {
        "visual": "Colour deepens and edges look translucent",
        "visualZh": "颜色加深，边缘变半透明",
        "signal": "A piece snaps with light resistance",
        "signalZh": "咬下去有轻微阻力",
        "heat": "high",
        "timeRef": "2 minutes"
      }
    },
    {
      "text": "Return the beef, toss 30 seconds, and taste before adding any salt — doubanjiang is salty.",
      "textZh": "回锅牛肉翻炒 30 秒，先尝味再决定是否加盐。",
      "zhHint": "回锅合炒",
      "stateNote": {
        "visual": "Beef and celery are evenly mixed, sauce thin",
        "visualZh": "牛肉芹菜混匀，酱汁稀薄",
        "signal": "Seasoning tastes balanced, not sharp",
        "signalZh": "咸淡平衡不发咸",
        "heat": "high",
        "timeRef": "30 seconds"
      }
    },
    {
      "text": "Serve with steamed rice.",
      "textZh": "配米饭上桌。",
      "zhHint": "出锅"
    }
  ],
  "tips": [
    "Peeling the celery ridges is the difference between tender and chewy.",
    "Doubanjiang burns easily — keep the heat at medium when it goes in.",
    "Taste before salting; the bean paste carries a lot."
  ],
  "tipsZh": [
    "削掉芹菜老筋，口感完全不同。",
    "豆瓣酱易糊，下锅时转中火。",
    "先尝味再加盐，豆瓣本身很咸。"
  ],
  "relatedSlugs": [
    "hunan-sliced-beef-stir-fry",
    "green-pepper-beef",
    "onion-beef-stir-fry",
    "stir-fried-dried-tofu-with-celery"
  ],
  "image": "/images/recipes/hunan-sliced-beef-stir-fry.webp"
};
