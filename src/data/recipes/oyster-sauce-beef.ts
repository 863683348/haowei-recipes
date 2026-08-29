import type { Recipe } from "@/lib/types";

/** Oyster Sauce Beef Stir-Fry (蚝油牛肉) — Seed batch */
export const oyster_sauce_beef: Recipe = {
  "id": "oyster-sauce-beef",
  "slug": "oyster-sauce-beef",
  "titleEn": "Oyster Sauce Beef Stir-Fry",
  "titleZh": "蚝油牛肉",
  "pinyin": "háo yóu niú ròu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 22,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses tenderized flank steak and minimal cornstarch—no velveting with egg white or baking soda, just quick marination and high-heat wok sear.",
  "versionNoteZh": "家常版用牛腩肉片，不加蛋清或小苏打上浆，仅用少量生粉和蚝油腌制，旺火快炒。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Foshan taught me this when I was 14—she’d stir-fry it while listening to Cantonese opera on the radio, always saying, 'If the wok sings, the beef is ready.' She never measured; she just knew by the sizzle and the color.",
  "storyZh": "我佛山的姑妈十四岁时教我这道菜——她边听粤剧边炒，总说：‘锅一响，牛肉就熟了。’她从不称量，只凭声音和颜色判断。",
  "ingredients": [
    {
      "id": "beef-01",
      "nameEn": "flank steak",
      "nameZh": "牛腩肉片",
      "pinyin": "niú nǎn ròu piàn",
      "amountMetric": "250 g",
      "amountUS": "8.8 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Thinly sliced across the grain, ~3 mm thick",
      "noteZh": "逆纹切薄片，约3毫米厚"
    },
    {
      "id": "beef-02",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "beef-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "1 tbsp (15 ml)",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "beef-04",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "1 tsp (3 g)",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "beef-05",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "1 tbsp (15 ml)",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "In a bowl, combine beef slices, oyster sauce, light soy sauce, and cornstarch. Mix gently until evenly coated. Marinate at room temperature for 10 minutes.",
      "textZh": "将牛肉片、蚝油、生抽和玉米淀粉放入碗中，轻柔拌匀至均匀裹浆，室温腌10分钟。",
      "zhHint": "轻拌，勿揉碎",
      "stateNote": {
        "visual": "Beef slices glisten with a thin, glossy film",
        "visualZh": "牛肉片泛出薄而透亮的光泽膜",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No pooling liquid; sauce clings to each piece",
        "signalZh": "无多余汁水渗出，酱汁均匀附着于每片牛肉"
      }
    },
    {
      "text": "Heat a wok or large skillet over medium-high heat until a drop of water sizzles and evaporates instantly.",
      "textZh": "将炒锅或大平底锅烧至中高火，滴一滴水入锅，若立即嘶嘶作响并蒸发即为到位。",
      "zhHint": "水珠跳动即热",
      "stateNote": {
        "visual": "Water droplet skitters and vanishes in under 1 second",
        "visualZh": "水珠弹跳并1秒内消失",
        "timeRef": "30–60 seconds",
        "timeRefZh": "30–60 秒",
        "heat": "medium-high",
        "signal": "Wok surface shimmers faintly",
        "signalZh": "锅面微微泛光"
      }
    },
    {
      "text": "Add oil, swirl to coat, then add beef in a single layer. Let sear undisturbed for 1 minute.",
      "textZh": "倒入油，转锅润匀，再将牛肉平铺入锅，静置煎1分钟不翻动。",
      "zhHint": "铺开不叠压",
      "stateNote": {
        "visual": "Edges of beef turn light brown and begin to curl slightly",
        "visualZh": "牛肉边缘呈浅褐色，略卷起",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Sustained sizzling without smoke",
        "signalZh": "持续滋滋声，无油烟"
      }
    },
    {
      "text": "Flip beef and stir-fry for another 1–1.5 minutes until just cooked through but still tender.",
      "textZh": "翻面后快速翻炒1–1.5分钟，至牛肉刚熟、仍嫩滑即可。",
      "zhHint": "断生即停",
      "stateNote": {
        "visual": "Beef turns uniformly light brown-gray with no pink visible",
        "visualZh": "牛肉整体呈浅褐灰色，无粉红色",
        "timeRef": "1–1.5 minutes",
        "timeRefZh": "1–1.5 分钟",
        "heat": "high",
        "signal": "Surface moisture has fully evaporated",
        "signalZh": "表面水分完全收干"
      }
    },
    {
      "text": "Turn off heat immediately. Transfer to a plate and serve hot with steamed rice.",
      "textZh": "立刻关火，盛入盘中，趁热配白米饭食用。",
      "zhHint": "余热会继续加热",
      "stateNote": {
        "visual": "Steam rises steadily from the beef pile",
        "visualZh": "牛肉堆上方持续升腾热气",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "No further sizzling in pan",
        "signalZh": "锅中不再有滋滋声"
      }
    }
  ],
  "tips": [
    "Use flank steak—not sirloin—for authentic tenderness and chew.",
    "Do not over-marinate: >15 min makes beef mushy.",
    "For extra umami, add ½ tsp sesame oil (toasted) at the end."
  ],
  "tipsZh": [
    "选用牛腩肉片而非西冷，更贴近家常口感与嚼劲。",
    "腌制勿超15分钟，否则牛肉易变软烂。",
    "出锅前淋半茶匙芝麻油（焙香）可增鲜香。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/oyster-sauce-beef.webp"
};
