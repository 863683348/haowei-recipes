import type { Recipe } from "@/lib/types";

/** Cantonese Lap Cheong Claypot Rice (腊肠煲仔饭) — Seed batch */
export const lap_cheong_claypot_rice: Recipe = {
  "id": "la-chang-bao-zai-fan",
  "slug": "lap-cheong-claypot-rice",
  "titleEn": "Cantonese Lap Cheong Claypot Rice",
  "titleZh": "腊肠煲仔饭",
  "pinyin": "là cháng bāo zǎi fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses less oil and simpler seasoning than restaurant-style—no MSG, just natural umami from lap cheong and soy sauces.",
  "versionNoteZh": "家常版用油更少、调味更简朴，不添加味精，仅靠腊肠与酱油释放天然鲜味。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Sham Shui Po, Hong Kong, cooked this every Sunday after dim sum—she’d line the claypot with rice first, then tuck in thick slices of lap cheong so they caramelized at the edges while steaming. The crackle of the scorched rice crust (guō bā) was our dinner bell.",
  "storyZh": "我在香港深水埗的姑妈每逢周日吃完早茶后都会做这道菜——她先铺一层米饭进砂锅，再把厚切腊肠嵌入米中，让腊肠油脂在蒸煮时慢慢渗出、边缘微焦。那层锅巴‘咔嚓’声，就是我们开饭的信号。",
  "ingredients": [
    {
      "id": "lc-01",
      "nameEn": "jasmine rice",
      "nameZh": "茉莉香米",
      "pinyin": "mò lì xiāng mǐ",
      "amountMetric": "300 g",
      "amountUS": "1 ½ cups",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse until water runs clear to remove excess starch",
      "noteZh": "淘洗至水清，去除多余淀粉"
    },
    {
      "id": "lc-02",
      "nameEn": "Chinese dried lap cheong (hard, sweet-cured pork sausage)",
      "nameZh": "广式腊肠（硬质甜味）",
      "pinyin": "guǎng shì là cháng",
      "amountMetric": "120 g",
      "amountUS": "4.2 oz (about 3–4 links)",
      "category": "protein",
      "pantry": "asian",
      "note": "Look for firm, glossy, deep red sausages labeled 'Cantonese style' or 'lap cheong'—avoid soft or overly greasy versions",
      "noteZh": "选质地紧实、油亮深红、标有‘广式’或‘腊肠’者；避免过软或浮油明显款"
    },
    {
      "id": "lc-03",
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
      "id": "lc-04",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "lc-05",
      "nameEn": "scallion greens, finely sliced",
      "nameZh": "小葱绿段",
      "pinyin": "xiǎo cōng lǜ duàn",
      "amountMetric": "20 g",
      "amountUS": "¼ cup",
      "category": "produce",
      "pantry": "local",
      "note": "Use only green parts for garnish; white parts can be reserved for step 2",
      "noteZh": "仅取葱绿部分作装饰；葱白可留作步骤2使用"
    }
  ],
  "steps": [
    {
      "text": "Rinse rice thoroughly, then soak in cold water for 20 minutes. Drain well and set aside.",
      "textZh": "将大米反复淘洗至水清，冷水浸泡20分钟，沥干备用。",
      "zhHint": "淘洗+浸泡是关键"
    },
    {
      "text": "Heat a 6-inch (15 cm) unglazed claypot over medium-low heat for 1 minute. Add 1 tsp neutral oil and swirl to coat. Sauté reserved scallion whites and 1 minced garlic clove (optional) until fragrant, about 30 seconds.",
      "textZh": "将6英寸素烧砂锅置于中小火预热1分钟，加1茶匙中性油晃匀，放入预留葱白及1瓣蒜末（可选）煸香约30秒。",
      "zhHint": "砂锅需预热防裂",
      "stateNote": {
        "visual": "Oil shimmers lightly; scallions soften but don’t brown",
        "visualZh": "油面微微泛光；葱白变软但未上色",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-low",
        "signal": "Aromatic fragrance rises, no smoke or browning",
        "signalZh": "香气升腾，无油烟或焦色"
      }
    },
    {
      "text": "Add drained rice and spread evenly. Pour in 360 ml (1 ½ cups) boiling water — just enough to cover rice by 0.5 cm. Bring to a gentle boil, then reduce heat to low, cover tightly with lid, and simmer for 12 minutes.",
      "textZh": "倒入沥干的大米，铺平。加入360毫升（1½杯）沸水，水量刚没过米面0.5厘米。大火烧开后转最小火，盖紧盖子焖12分钟。",
      "zhHint": "用沸水缩短总时长"
    },
    {
      "text": "Arrange lap cheong slices on top of rice. Cover again and continue cooking on low heat for 8 more minutes — steam will cook the sausage through and render its fat into the rice.",
      "textZh": "将腊肠片平铺于米饭表面，盖盖续焖8分钟——蒸汽将腊肠蒸熟，油脂自然渗入米饭。",
      "zhHint": "腊肠此时入锅，借汽蒸熟"
    },
    {
      "text": "Turn off heat. Let rest, covered, for 5 minutes. Drizzle with light soy sauce and sesame oil. Garnish with scallion greens. Serve immediately — scrape crispy guō bā from bottom with a spoon.",
      "textZh": "关火，加盖静置5分钟。淋入生抽与芝麻油，撒上葱绿。趁热上桌，用勺刮取底部金黄酥脆的锅巴同食。",
      "zhHint": "静置锁住水汽，锅巴才酥脆",
      "stateNote": {
        "visual": "Rice is tender, slightly moist; lap cheong is plump and glossy; thin golden crust forms at pot bottom",
        "visualZh": "米饭软糯微润；腊肠饱满油亮；锅底已形成薄薄金黄锅巴",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Steam stops escaping from lid edge; faint caramelized aroma rises",
        "signalZh": "锅盖边缘不再冒汽；隐约焦香升起"
      }
    }
  ],
  "tips": [
    "Always preheat the claypot before adding oil — prevents cracking and ensures even heat distribution.",
    "If your lap cheong is very fatty, blanch slices in hot water for 30 seconds first to reduce greasiness.",
    "For authentic guō bā: After resting, lift lid, tilt pot slightly, and listen for a faint ‘crackle’ — that’s the crust forming."
  ],
  "tipsZh": [
    "砂锅务必先干烧预热再加油，防裂且受热均匀。",
    "若腊肠油脂过多，可先将腊肠片在沸水中焯烫30秒，减少油腻感。",
    "判断锅巴是否形成：静置后轻掀锅盖，稍斜倾砂锅，听细微‘咔嚓’声即成。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/lap-cheong-claypot-rice.webp"
};
