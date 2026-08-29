import type { Recipe } from "@/lib/types";

/** Potato-Stewed Green Beans (土豆炖豆角) — Seed batch */
export const potato_stewed_green_beans: Recipe = {
  "id": "tu-dou-dun-dou-jiao",
  "slug": "potato-stewed-green-beans",
  "titleEn": "Potato-Stewed Green Beans",
  "titleZh": "土豆炖豆角",
  "pinyin": "tǔ dòu dùn dòu jiǎo",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Northeast China",
  "regionZh": "东北",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version uses gentle simmering and no thickener — just natural starch from potatoes to coat the beans. Restaurant versions often add cornstarch slurry for gloss.",
  "versionNoteZh": "家常版靠土豆自然淀粉收汁，不勾芡；餐馆版常加水淀粉提亮。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Harbin taught me this dish when I was twelve — she’d stir the wok with one hand while holding her baby niece with the other, saying, 'Stew it slow, like patience, and the beans will soften like your heart.'",
  "storyZh": "哈尔滨的姑姑十二岁时教我这道菜——她一手颠锅，一手抱着小侄女，说：‘火要慢，像耐心一样炖，豆角就软得像你的心。’",
  "ingredients": [
    {
      "id": "pd-01",
      "nameEn": "potatoes",
      "nameZh": "土豆",
      "pinyin": "tǔ dòu",
      "amountMetric": "300 g",
      "amountUS": "2 cups (diced)",
      "category": "produce",
      "pantry": "local",
      "note": "Waxy or all-purpose potatoes hold shape best",
      "noteZh": "蜡质或中性土豆更耐炖，不易散"
    },
    {
      "id": "pd-02",
      "nameEn": "green beans",
      "nameZh": "豆角",
      "pinyin": "dòu jiǎo",
      "amountMetric": "250 g",
      "amountUS": "2 cups (cut into 4 cm pieces)",
      "category": "produce",
      "pantry": "local",
      "note": "Look for firm, snap-prone beans; avoid limp or bulging pods",
      "noteZh": "选紧实、易折断的豆角；避免发蔫或鼓胀的豆荚"
    },
    {
      "id": "pd-03",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "3 cloves (15 g)",
      "amountUS": "1 tbsp (minced)",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "pd-04",
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
      "id": "pd-05",
      "nameEn": "cooking wine",
      "nameZh": "料酒",
      "pinyin": "liào jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cooking-wine"
    },
    {
      "id": "pd-06",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "20 ml",
      "amountUS": "1½ tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse green beans and trim ends. Cut into 4 cm pieces. Peel and dice potatoes into 2 cm cubes.",
      "textZh": "豆角洗净去头尾，切成4厘米段；土豆去皮，切2厘米见方块。",
      "zhHint": "切匀防熟度不一"
    },
    {
      "text": "Heat oil in a heavy-bottomed pot or Dutch oven over medium heat. Add minced garlic and stir until fragrant — about 30 seconds.",
      "textZh": "厚底锅中火加热油，下蒜末爆香约30秒。",
      "zhHint": "蒜香即出，勿焦",
      "stateNote": {
        "visual": "Garlic turns pale gold and releases aroma",
        "visualZh": "蒜末微黄、香气初溢",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Fragrance rises without browning",
        "signalZh": "闻香即止，不可变褐"
      }
    },
    {
      "text": "Add green beans and stir-fry for 2 minutes until edges darken slightly. Add potatoes and stir to combine.",
      "textZh": "下豆角中火煸炒2分钟至边缘微深；加入土豆翻匀。",
      "zhHint": "先煸豆角，锁鲜增香"
    },
    {
      "text": "Pour in light soy sauce and cooking wine. Add 250 ml hot water — just enough to barely cover ingredients.",
      "textZh": "淋入生抽和料酒，加250毫升热水，水量以刚没过食材为宜。",
      "zhHint": "水宁少勿多，靠土豆出汁"
    },
    {
      "text": "Cover and simmer on low heat for 20–22 minutes, stirring gently every 5 minutes, until potatoes are tender but hold shape and beans are soft with slight bite.",
      "textZh": "盖盖小火焖20–22分钟，每5分钟轻翻一次，至土豆软糯不烂、豆角柔韧有豆香。",
      "zhHint": "轻翻防碎，留豆角筋络",
      "stateNote": {
        "visual": "Liquid reduces to glossy, clinging sauce; potatoes yield slightly to fork",
        "visualZh": "汤汁浓亮裹菜，土豆叉压微绵",
        "timeRef": "20–22 minutes",
        "timeRefZh": "20–22 分钟",
        "heat": "low",
        "signal": "Sauce coats back of spoon and shimmers",
        "signalZh": "汤汁能挂勺、泛油光"
      }
    }
  ],
  "tips": [
    "Use waxy potatoes like Yukon Gold — they won’t disintegrate during stewing.",
    "Blanch beans 1 minute in boiling salted water first if you prefer extra tenderness (optional).",
    "Do not add salt separately — light soy sauce provides sufficient seasoning."
  ],
  "tipsZh": [
    "选黄心土豆等蜡质品种，久炖不散形。",
    "如喜豆角更软，可先沸盐水焯烫1分钟（可选）。",
    "生抽已含盐分，无需额外加盐。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/potato-stewed-green-beans.webp"
};
