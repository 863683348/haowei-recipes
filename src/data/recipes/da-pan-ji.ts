import type { Recipe } from "@/lib/types";

/** Xinjiang-Style Big Plate Chicken (大盘鸡) — Seed batch */
export const da_pan_ji: Recipe = {
  "id": "da-pan-ji",
  "slug": "da-pan-ji",
  "titleEn": "Xinjiang-Style Big Plate Chicken",
  "titleZh": "大盘鸡",
  "pinyin": "dà pán jī",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Xinjiang",
  "regionZh": "新疆",
  "difficulty": "medium",
  "timeMin": 55,
  "servings": 4,
  "version": "family",
  "versionNote": "This is the home-cooked version — less oil, no restaurant-level deep-frying of chicken, and simmered gently for tender meat and rich sauce. We skip the heavy cornstarch slurry common in takeout versions.",
  "versionNoteZh": "这是家庭版——用油更少，不油炸鸡肉，小火慢炖使肉质软嫩、酱汁醇厚；不使用外卖店常见的浓稠淀粉芡。",
  "tags": [
    "one-pot",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Ürümqi always cooked this for Sunday lunch after her shift at the textile factory. She’d serve it straight from the wok into a wide platter, with fresh hand-pulled noodles on the side — not the packaged kind, but noodles she stretched herself while humming old Uyghur folk songs.",
  "storyZh": "我在乌鲁木齐的姑妈每次纺织厂下班后，周日中午都会做这道菜。她直接用炒锅盛出，配上现拉的手擀面——不是超市买的挂面，而是边哼着维吾尔老民歌边亲手抻出来的面条。",
  "ingredients": [
    {
      "id": "chicken-01",
      "nameEn": "boneless, skinless chicken thighs",
      "nameZh": "鸡腿肉（去骨去皮）",
      "pinyin": "jī tuǐ ròu",
      "amountMetric": "600 g",
      "amountUS": "21 oz (about 3 large thighs)",
      "category": "protein",
      "pantry": "local",
      "note": "Cut into 4 cm chunks; thighs stay juicy longer than breast",
      "noteZh": "切4厘米见方块；鸡腿肉比鸡胸更耐炖、多汁"
    },
    {
      "id": "potato-02",
      "nameEn": "Yukon Gold potatoes",
      "nameZh": "黄心土豆",
      "pinyin": "huáng xīn tǔ dòu",
      "amountMetric": "400 g",
      "amountUS": "2 large potatoes, ~14 oz",
      "category": "produce",
      "pantry": "local",
      "note": "Waxy potatoes hold shape better than russets",
      "noteZh": "蜡质土豆（如尤金黄金薯）比褐皮土豆更耐炖不散"
    },
    {
      "id": "pepper-03",
      "nameEn": "green bell peppers",
      "nameZh": "青椒",
      "pinyin": "qīng jiāo",
      "amountMetric": "200 g",
      "amountUS": "2 medium peppers",
      "category": "produce",
      "pantry": "local",
      "note": "Use thick-walled peppers for crunch",
      "noteZh": "选果肉厚实的青椒，保持炖后脆嫩口感"
    },
    {
      "id": "onion-04",
      "nameEn": "yellow onion",
      "nameZh": "黄洋葱",
      "pinyin": "huáng yáng cōng",
      "amountMetric": "150 g",
      "amountUS": "1 medium onion",
      "category": "produce",
      "pantry": "local",
      "note": "",
      "noteZh": ""
    },
    {
      "id": "soy-05",
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
      "id": "wine-06",
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
      "id": "douban-07",
      "nameEn": "spicy fermented broad bean paste",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "25 g",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: Korean gochujang + ½ tsp sugar if unavailable",
      "noteZh": "替代：韩式辣酱+½茶匙糖（若无郫县豆瓣酱）",
      "termKey": "doubanjiang"
    }
  ],
  "steps": [
    {
      "text": "Heat 2 tbsp neutral oil in a wide wok or Dutch oven over medium-high heat. Add chicken pieces in a single layer and sear until golden brown on all sides — about 2 minutes per side. Remove and set aside.",
      "textZh": "宽底炒锅或荷兰锅中倒入2汤匙中性油，中高火加热。鸡块单层放入，煎至四面金黄（每面约2分钟），盛出备用。",
      "zhHint": "先煎后炖，锁住汁水",
      "stateNote": {
        "visual": "Chicken surface is deeply golden with slight caramelization at edges",
        "visualZh": "鸡块表面深金黄，边缘微焦糖化",
        "timeRef": "4–5 minutes total",
        "timeRefZh": "共约4–5分钟",
        "heat": "medium-high",
        "signal": "Sizzle turns steady and aromatic; no steam clouds",
        "signalZh": "滋滋声转为稳定、香气明显；无大量白汽"
      }
    },
    {
      "text": "Reduce heat to medium. Add doubanjiang and stir-fry for 1 minute until fragrant and oil turns reddish. Add minced ginger (1 tsp), garlic (2 cloves), and scallion whites (2 stalks) — stir 30 seconds.",
      "textZh": "转中火。加入郫县豆瓣酱，煸炒1分钟至出红油、香气溢出。再加入姜末（1茶匙）、蒜末（2瓣）、葱白段（2根），翻炒30秒。",
      "zhHint": "先炒酱，再下辛香料",
      "stateNote": {
        "visual": "Oil separates and takes on a deep red hue; paste bubbles gently",
        "visualZh": "油析出，呈深红色；酱体微微冒泡",
        "timeRef": "1 minute",
        "timeRefZh": "1分钟",
        "heat": "medium",
        "signal": "Aroma becomes warm, nutty, and unmistakably fermented",
        "signalZh": "散发出温暖、坚果香与明显发酵香气"
      }
    },
    {
      "text": "Return chicken to pan. Add Shaoxing wine, light soy sauce, and 250 ml hot water. Bring to a gentle simmer, then cover and cook on low for 25 minutes.",
      "textZh": "将鸡块倒回锅中。加入绍兴酒、生抽和250毫升热水，煮沸后转小火，盖盖焖炖25分钟。",
      "zhHint": "加盖慢炖，让味道渗透",
      "stateNote": {
        "visual": "Liquid simmers softly with small, steady bubbles around edges",
        "visualZh": "汤汁边缘持续冒出细小均匀气泡",
        "timeRef": "25 minutes",
        "timeRefZh": "25分钟",
        "heat": "low",
        "signal": "Steam rises steadily but quietly from lid seam",
        "signalZh": "锅盖缝隙处持续、安静地冒热气"
      }
    },
    {
      "text": "Add potatoes and onions. Simmer uncovered for 10 minutes, stirring gently every 3 minutes to prevent sticking.",
      "textZh": "加入土豆块和洋葱块，开盖继续炖10分钟，每3分钟轻轻翻动一次防粘底。",
      "zhHint": "开盖收汁，土豆吸味",
      "stateNote": {
        "visual": "Potatoes look slightly translucent at edges; liquid reduces by ~⅓",
        "visualZh": "土豆边缘略显半透明；汤汁减少约三分之一",
        "timeRef": "10 minutes",
        "timeRefZh": "10分钟",
        "heat": "medium",
        "signal": "Edges of potato cubes soften but hold shape",
        "signalZh": "土豆块边缘变软但仍保持完整形状"
      }
    },
    {
      "text": "Stir in green peppers and simmer 5 more minutes until peppers are crisp-tender and sauce coats ingredients thickly. Taste and adjust salt only if needed — doubanjiang and soy are usually sufficient.",
      "textZh": "最后加入青椒块，再煮5分钟至断生仍脆嫩，酱汁浓稠裹满食材。尝味，仅在必要时补少许盐（豆瓣酱和生抽通常已够咸）。",
      "zhHint": "青椒最后放，保色保脆",
      "stateNote": {
        "visual": "Peppers retain bright green color; sauce clings in glossy ribbons",
        "visualZh": "青椒保持鲜绿色；酱汁呈亮泽丝带状裹附食材",
        "timeRef": "5 minutes",
        "timeRefZh": "5分钟",
        "heat": "medium",
        "signal": "Pepper skins glisten and show no browning",
        "signalZh": "青椒表皮光亮，无任何焦褐痕迹"
      }
    }
  ],
  "tips": [
    "Serve immediately in a wide platter — true da pan ji means 'big plate' for sharing",
    "Leftovers taste even better the next day as flavors meld",
    "For authentic Xinjiang style, add 1 tsp cumin seeds with the doubanjiang"
  ],
  "tipsZh": [
    "务必用大盘盛出上桌——‘大盘’即指共享的大盘装法",
    "隔夜再热风味更融合，是家常习惯",
    "追求地道新疆风味，可在炒豆瓣酱时加1茶匙孜然籽"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/da-pan-ji.webp"
};
