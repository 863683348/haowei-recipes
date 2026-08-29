import type { Recipe } from "@/lib/types";

/** Honey-Glazed Roast Chicken (蜜汁烤鸡) — Seed batch */
export const honey_glazed_roast_chicken: Recipe = {
  "id": "mi-zhi-kao-ji",
  "slug": "honey-glazed-roast-chicken",
  "titleEn": "Honey-Glazed Roast Chicken",
  "titleZh": "蜜汁烤鸡",
  "pinyin": "mì zhī kǎo jī",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 65,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses skin-on chicken thighs and drumsticks for juiciness—no whole bird, no fancy brining. Glaze is brushed twice, not poured, to avoid burning.",
  "versionNoteZh": "家常版选用带皮鸡腿和鸡翅根，不整鸡、不腌制过夜；蜜汁分两次刷，不淋浇，防焦糊。",
  "tags": [
    "one-pan",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Shanghai’s Yangpu District made this every Sunday when I was ten—she’d hum while brushing the glaze, saying, 'Sweetness sticks best when the chicken breathes first.' She never used a thermometer, just poked with chopsticks: clear juices meant it was ready.",
  "storyZh": "我上海杨浦区的姑妈在我十岁时每个周日都做这道菜——她边刷蜜汁边哼歌，说‘甜味要等鸡肉先喘口气才粘得住’。她从不用温度计，只用筷子戳：流出清汁就是熟了。",
  "ingredients": [
    {
      "id": "ch-01",
      "nameEn": "skin-on chicken thighs and drumsticks",
      "nameZh": "带皮鸡腿肉（含鸡翅根）",
      "pinyin": "dài pí jī tuǐ ròu (hán jī chì gēn)",
      "amountMetric": "800 g",
      "amountUS": "28 oz (about 4 thighs + 4 drumsticks)",
      "category": "protein",
      "pantry": "local",
      "note": "Look for plump, pinkish meat with minimal liquid in package",
      "noteZh": "选肉质饱满、粉红鲜亮、包装内渗水少的"
    },
    {
      "id": "ch-02",
      "nameEn": "honey",
      "nameZh": "蜂蜜",
      "pinyin": "fēng mì",
      "amountMetric": "60 ml",
      "amountUS": "¼ cup",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Use mild clover or orange-blossom honey—not raw or dark buckwheat",
      "noteZh": "选清淡的苜蓿蜜或橙花蜜，忌生蜜或黑麦蜜"
    },
    {
      "id": "ch-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ch-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ch-05",
      "nameEn": "fresh ginger, minced",
      "nameZh": "鲜姜末",
      "pinyin": "xiān jiāng mò",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Pat chicken dry with paper towels. Place in a bowl and rub evenly with light soy sauce, Shaoxing wine, and ginger. Marinate at room temperature for 20 minutes.",
      "textZh": "用厨房纸彻底擦干鸡块；放入碗中，均匀揉入生抽、绍酒和姜末，室温腌20分钟。",
      "zhHint": "擦干→揉匀→静置"
    },
    {
      "text": "Preheat oven to 200°C (400°F). Line a rimmed baking sheet with parchment. Arrange chicken skin-side up, leaving space between pieces.",
      "textZh": "烤箱预热至200°C（400°F）；铺烘焙纸于烤盘，鸡块皮面朝上、彼此留空隙摆放。",
      "zhHint": "预热→铺纸→摆鸡"
    },
    {
      "text": "Roast for 25 minutes. Remove from oven—skin should be lightly blistered and golden at edges.",
      "textZh": "烘烤25分钟。取出时鸡皮边缘应微起泡、呈浅金黄色。",
      "zhHint": "先烤再看色",
      "stateNote": {
        "visual": "Skin shows fine blisters and pale gold edges, not browned or shriveled",
        "visualZh": "鸡皮表面有细密小泡，边缘呈浅金色，未焦褐或干缩",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "medium-high",
        "signal": "Edges of skin curl slightly and shimmer with fat",
        "signalZh": "鸡皮边缘微卷，泛出油润光泽"
      }
    },
    {
      "text": "Brush honey evenly over skin. Return to oven and roast 12–15 more minutes until glaze is glossy and deeply amber, and internal temperature reaches 75°C (167°F) at thickest part.",
      "textZh": "均匀刷一层蜂蜜；放回烤箱再烤12–15分钟，至酱汁光亮深琥珀色，最厚处内部温度达75°C（167°F）。",
      "zhHint": "刷蜜→再烤→测温"
    },
    {
      "text": "Let rest 5 minutes before serving. Spoon any pan drippings over chicken—do not pour excess liquid.",
      "textZh": "静置5分钟再装盘；舀取烤盘底浓缩汁淋在鸡上，勿倒多余汤水。",
      "zhHint": "静置→淋汁→不倒水"
    }
  ],
  "tips": [
    "For crispier skin, chill marinated chicken uncovered for 30 minutes before roasting.",
    "If honey starts bubbling violently during second roast, reduce heat to 190°C (375°F).",
    "Leftovers reheat beautifully in a skillet over medium-low heat—add 1 tsp water to steam gently."
  ],
  "tipsZh": [
    "想鸡皮更脆？腌好后敞盖冷藏30分钟再烤。",
    "若二次烘烤时蜂蜜剧烈冒泡，立降烤箱至190°C（375°F）。",
    "剩菜用平底锅中小火复热最佳——加1茶匙水，微汽蒸热。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/honey-glazed-roast-chicken.webp"
};
