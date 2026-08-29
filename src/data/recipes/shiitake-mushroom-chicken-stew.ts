import type { Recipe } from "@/lib/types";

/** Shiitake Mushroom Chicken Stew (香菇炖鸡) — Seed batch */
export const shiitake_mushroom_chicken_stew: Recipe = {
  "id": "xiang-gu-dun-ji",
  "slug": "shiitake-mushroom-chicken-stew",
  "titleEn": "Shiitake Mushroom Chicken Stew",
  "titleZh": "香菇炖鸡",
  "pinyin": "xiāng gū dùn jī",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 50,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version skips blanching—uses ginger and wine to deodorize naturally. Restaurants often blanch chicken first for crystal-clear broth.",
  "versionNoteZh": "家常版省去焯水，靠姜酒自然去腥；餐厅版常先焯鸡块以得清汤。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Shanghai’s Old Town made this every Sunday with dried shiitakes she rehydrated overnight in rice wine—she said the mushrooms ‘remember the forest rain’ and the chicken ‘learns patience from the pot’.",
  "storyZh": "我上海老城厢的姑妈每周日都做这道菜，干香菇用黄酒泡发整夜——她说香菇‘记得山林的雨’，鸡肉‘从锅里学会耐心’。",
  "ingredients": [
    {
      "id": "sh-01",
      "nameEn": "boneless, skinless chicken thighs",
      "nameZh": "去骨去皮鸡腿肉",
      "pinyin": "qù gǔ qù pí jī tuǐ ròu",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Cut into 3 cm cubes; more tender than breast",
      "noteZh": "切3厘米方块；比鸡胸更嫩"
    },
    {
      "id": "sh-02",
      "nameEn": "dried shiitake mushrooms",
      "nameZh": "干香菇",
      "pinyin": "gān xiāng gū",
      "amountMetric": "40 g",
      "amountUS": "1.5 oz (about 8 large caps)",
      "category": "produce",
      "pantry": "asian",
      "note": "Substitute: 200 g fresh shiitakes (sauté 2 min first)",
      "noteZh": "替代：鲜香菇200克（先煸炒2分钟）"
    },
    {
      "id": "sh-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "25 ml",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sh-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "20 ml",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sh-05",
      "nameEn": "scallions",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks, white parts only",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Soak dried shiitakes in 300 ml warm water + 1 tbsp Shaoxing wine for 30 minutes. Reserve soaking liquid; squeeze mushrooms dry and slice.",
      "textZh": "干香菇加300毫升温水与1汤匙绍兴酒泡30分钟；留泡发水，挤干切片。",
      "zhHint": "酒水同泡增香",
      "stateNote": {
        "visual": "Mushrooms plump and soft, liquid cloudy amber",
        "visualZh": "香菇饱满柔软，泡发水呈浑浊琥珀色",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "Mushrooms double in size and yield to gentle pinch",
        "signalZh": "香菇膨大一倍，轻捏即软"
      }
    },
    {
      "text": "Heat 1 tsp oil in a heavy pot over medium heat. Add scallion whites and stir 1 minute until fragrant.",
      "textZh": "厚底锅中火加热1茶匙油，下葱白段煸香1分钟。",
      "zhHint": "葱白提鲜不焦",
      "stateNote": {
        "visual": "Scallions soften and turn translucent at edges",
        "visualZh": "葱白变软、边缘微透",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Aroma becomes sweet and earthy",
        "signalZh": "香气转为甜润土香"
      }
    },
    {
      "text": "Add chicken; stir-fry 3 minutes until opaque. Add mushrooms and stir 2 more minutes.",
      "textZh": "下鸡块翻炒3分钟至断生；加香菇再炒2分钟。",
      "zhHint": "断生即止，防柴",
      "stateNote": {
        "visual": "Chicken loses pink hue entirely, surface dries slightly",
        "visualZh": "鸡肉完全褪粉，表面略收干",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "No visible moisture released from chicken",
        "signalZh": "鸡肉不再渗出水分"
      }
    },
    {
      "text": "Pour in reserved mushroom liquid, remaining Shaoxing wine, and light soy. Bring to simmer, then cover and cook 25 minutes on low heat.",
      "textZh": "倒入泡发水、余下绍兴酒和生抽，烧开后转小火加盖焖25分钟。",
      "zhHint": "泡发水是精华",
      "stateNote": {
        "visual": "Gentle steam escapes lid edge steadily",
        "visualZh": "锅盖边缘持续逸出匀稳蒸汽",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "low",
        "signal": "Liquid reduces slightly and smells deeply savory",
        "signalZh": "汤汁略收，香味醇厚浓郁"
      }
    },
    {
      "text": "Uncover, increase heat to medium-low. Simmer 5 minutes until sauce lightly glazes chicken. Garnish with green scallion tops.",
      "textZh": "开盖转中小火收汁5分钟至酱汁轻裹鸡块；撒葱绿段即成。",
      "zhHint": "收汁勿过干",
      "stateNote": {
        "visual": "Sauce clings thinly, no pooling liquid remains",
        "visualZh": "酱汁薄裹，无多余汤汁",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "Bubbles pop softly and leave faint trails",
        "signalZh": "气泡轻破，留细微油痕"
      }
    }
  ],
  "tips": [
    "Never discard mushroom soaking liquid—it’s umami gold.",
    "For richer texture, add 1 tsp sesame oil at the end (not heated).",
    "If using fresh shiitakes, sauté until edges curl before adding chicken."
  ],
  "tipsZh": [
    "泡发水万勿倒掉——是天然味精。",
    "喜香可出锅前淋半茶匙芝麻油（不加热）。",
    "若用鲜香菇，须先煸至边缘微卷再下鸡。"
  ],
  "relatedSlugs": [
    "chestnut-chicken-braise"
  ],
  "image": "/images/recipes/shiitake-mushroom-chicken-stew.webp"
};
