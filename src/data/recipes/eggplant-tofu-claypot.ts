import type { Recipe } from "@/lib/types";

/** Eggplant and Tofu Claypot (茄子豆腐煲) (茄子豆腐煲) — Day batch */
export const eggplant_tofu_claypot: Recipe = {
  "id": "eggplant-tofu-claypot",
  "slug": "eggplant-tofu-claypot",
  "titleEn": "Eggplant and Tofu Claypot (茄子豆腐煲)",
  "titleZh": "茄子豆腐煲",
  "pinyin": "qié zi dòu fu bāo",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Jiangnan",
  "regionZh": "江南",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses firm tofu and a simple savory-broth braise. Restaurant versions sometimes add shrimp paste for extra umami.",
  "versionNoteZh": "家常版用老豆腐和简单咸鲜高汤焖。餐厅版有时加虾酱提鲜。",
  "tags": [
    "comfort",
    "soft",
    "braised",
    "weeknight",
    "vegetarian-option"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "A one-pot comfort classic: eggplant and firm tofu braise together in a savory broth, the tofu acting like a flavor sponge that absorbs everything. The claypot keeps it bubbling at the table — a dish that gets better the longer you sit with it.",
  "storyZh": "一锅慰藉经典：茄子和老豆腐在咸鲜高汤中同焖，豆腐像风味海绵吸饱一切。砂锅上桌持续咕嘟——坐得越久越入味。",
  "ingredients": [
    {
      "id": "etc-01",
      "nameEn": "Chinese eggplant",
      "nameZh": "长条茄子",
      "amountMetric": "350 g",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "etc-02",
      "nameEn": "firm tofu",
      "nameZh": "老豆腐",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "etc-03",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜片",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "etc-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "etc-05",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "etc-06",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "etc-07",
      "nameEn": "vegetable broth or water",
      "nameZh": "素高汤或水",
      "amountMetric": "1 cup",
      "amountUS": "1 cup",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "etc-08",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "etc-09",
      "nameEn": "scallions, cut 2-inch pieces",
      "nameZh": "小葱段",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "etc-10",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut eggplant into 3 cm chunks. Cut tofu into 3 cm cubes. Pat tofu dry with paper towel — this helps it brown.",
      "textZh": "茄子切3cm块。豆腐切3cm方块，厨房纸吸干水分——帮助煎出金黄。",
      "stateNote": {
        "visual": "tofu surface is dry and matte",
        "visualZh": "豆腐表面干燥哑光",
        "signal": "if tofu is wet, it will steam instead of sear — pat longer",
        "signalZh": "豆腐湿润会蒸不会煎——继续吸干"
      }
    },
    {
      "text": "Heat 1 tbsp oil in a claypot or heavy pan over medium-high. Add tofu in a single layer and fry until golden on all sides — about 4 min total.",
      "textZh": "砂锅或厚锅烧热1汤匙油，中大火，豆腐单摆煎至四面金黄——约4分钟。",
      "stateNote": {
        "visual": "tofu crust turns golden brown",
        "visualZh": "豆腐表皮金黄",
        "signal": "tofu releases from the pot easily — if sticking, it needs another minute",
        "signalZh": "豆腐自然脱离锅底——粘说明还差1分钟"
      }
    },
    {
      "text": "Push tofu to the side. Add remaining oil and eggplant. Sear 2 min, then add garlic.",
      "textZh": "豆腐拨到一边。加剩余油，下茄子煎2分钟，下蒜片。"
    },
    {
      "text": "Add soy sauces, sugar, and broth. Bring to a boil, then reduce to a simmer. Cover and cook 10 min.",
      "textZh": "加生抽老抽、糖和高汤，大火烧开转小火。盖盖焖10分钟。",
      "stateNote": {
        "visual": "eggplant is collapsed and translucent; tofu has absorbed the braising liquid",
        "visualZh": "茄子塌软半透明；豆腐吸饱卤汁",
        "signal": "eggplant yields to gentle pressure; tofu feels springy not firm",
        "signalZh": "茄子轻压即塌；豆腐弹性不硬——完成"
      }
    },
    {
      "text": "Add scallion pieces. Drizzle sesame oil. Simmer 1 min uncovered. Serve the claypot directly at the table.",
      "textZh": "下葱段，淋香油，开盖再煮1分钟。连砂锅上桌。"
    }
  ],
  "tips": [
    "Pat tofu dry before frying — moisture is the enemy of browning.",
    "Use firm tofu (老豆腐), not silken. Silken will disintegrate during braising.",
    "The claypot is both cooking vessel and serving dish — it keeps the dish hot for a long time."
  ],
  "tipsZh": [
    "煎豆腐前务必吸干——水分是焦化的敌人。",
    "用老豆腐，不用嫩豆腐。嫩豆腐焖的时候会散。",
    "砂锅既是烹饪器也是上桌的容器——能长时间保温。"
  ],
  "relatedSlugs": [
    "home-style-tofu",
    "yu-xiang-eggplant",
    "mapo-tofu"
  ],
  "image": "/images/recipes/eggplant-tofu-claypot.webp"
};
