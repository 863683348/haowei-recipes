import type { Recipe } from "@/lib/types";

/** Sichuan Couple’s Sliced Beef & Offal (夫妻肺片) — Seed batch */
export const fu_qi_fei_pian: Recipe = {
  "id": "fu-qi-fei-pian",
  "slug": "fu-qi-fei-pian",
  "titleEn": "Sichuan Couple’s Sliced Beef & Offal",
  "titleZh": "夫妻肺片",
  "pinyin": "fū qī fèi piàn",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses less offal and more lean beef—my aunt in Chengdu’s Shuangliu district always substituted half the beef tripe with flank steak so her kids would eat it. No peanut butter, no sugar, no Western chili oil.",
  "versionNoteZh": "家常版减少内脏用量，增加瘦牛肉比例——我双流区的姨妈总用牛腩代替一半牛百叶，哄孩子吃。不用花生酱、不加糖、不用西式辣油。",
  "tags": [
    "30-min",
    "weeknight",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother ran a small cold-dish stall near Jinli Ancient Street in Chengdu. She’d simmer beef shank, tongue, and tripe overnight in star-anise and Sichuan peppercorn broth, then slice everything paper-thin by hand before tossing with red oil and crushed peanuts. I still use her bamboo cutting board.",
  "storyZh": "我外婆在成都锦里古街旁摆凉菜摊。她整夜用八角和花椒熬煮牛腱、牛舌和牛百叶，再手工切成薄如纸的片，拌上红油和碎花生。我至今还用着她的竹砧板。",
  "ingredients": [
    {
      "id": "fp-01",
      "nameEn": "beef shank (lean, trimmed)",
      "nameZh": "牛腱子肉（去脂瘦肉）",
      "pinyin": "niú jiàn zi ròu",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for 'beef shank cross-cut' — avoid stewing cuts with too much connective tissue.",
      "noteZh": "请肉贩切牛腱横截面，避免炖煮型部位结缔组织过多。"
    },
    {
      "id": "fp-02",
      "nameEn": "beef tongue",
      "nameZh": "牛舌",
      "pinyin": "niú shé",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Frozen pre-cooked beef tongue is acceptable; thaw and rinse thoroughly.",
      "noteZh": "冷冻预煮牛舌可用；解冻后彻底冲洗。"
    },
    {
      "id": "fp-03",
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
      "id": "fp-04",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "fp-05",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "fp-06",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "2 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "fp-07",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "10 g",
      "amountUS": "1/4 cup (broken)",
      "category": "spice",
      "pantry": "asian",
      "note": "Substitute: 1 tsp crushed red pepper flakes + 1/4 tsp ground Sichuan peppercorn if unavailable.",
      "noteZh": "替代：1 茶匙红椒碎 + 1/4 茶匙花椒粉。"
    }
  ],
  "steps": [
    {
      "text": "Rinse beef shank and tongue under cold water. Place in a large pot with 1.5 L water, 1 tsp Sichuan peppercorns (half the amount), and 2 whole star anise (not listed — optional pantry item). Bring to boil, skim foam, then reduce heat to low and simmer covered for 2 hours until fork-tender.",
      "textZh": "牛腱与牛舌冷水冲洗。入大锅，加1.5升水、1茶匙花椒（总量一半）、2颗八角（非主料，可选），大火烧开撇浮沫，转小火加盖炖2小时至筷子可穿透。",
      "zhHint": "先焯水，再慢炖",
      "stateNote": {
        "visual": "Surface of broth is barely shimmering; meat fibers separate easily when poked with chopsticks.",
        "visualZh": "汤面微漾；筷子轻戳即散开肉丝。",
        "timeRef": "2 hours",
        "timeRefZh": "2 小时",
        "heat": "low",
        "signal": "A clean chopstick pierces the thickest part of the tongue without resistance.",
        "signalZh": "筷子无阻力刺穿牛舌最厚处。"
      }
    },
    {
      "text": "Remove meat from broth; reserve 250 ml broth. Let cool slightly, then slice shank and tongue into 2-mm-thick pieces using a sharp knife or mandoline. Arrange on a serving plate.",
      "textZh": "捞出肉块，保留250毫升原汤。稍晾凉后，用锋利刀或切片器切成2毫米薄片，整齐铺于盘中。",
      "zhHint": "薄片是关键",
      "stateNote": {
        "visual": "Slices are translucent at edges, uniform in thickness, and lie flat without curling.",
        "visualZh": "片边缘微透光，厚度一致，平铺不卷边。",
        "timeRef": "8–10 minutes",
        "timeRefZh": "8–10 分钟",
        "signal": "Knife glides smoothly without tearing fibers.",
        "signalZh": "刀刃顺滑推进，不撕扯肉纤维。"
      }
    },
    {
      "text": "Heat reserved broth in a small saucepan. Add light soy sauce, Chinese black vinegar, and sesame oil. Simmer gently for 2 minutes to meld flavors.",
      "textZh": "将预留高汤倒入小锅，加入生抽、陈醋、香油，小火煨2分钟使风味融合。",
      "zhHint": "小火融味",
      "stateNote": {
        "visual": "Liquid bubbles softly at edges but does not boil vigorously.",
        "visualZh": "液体边缘微泡，不剧烈沸腾。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "Aromatic steam rises with clear scent of vinegar and soy.",
        "signalZh": "升起带醋香与酱香的清晰热气。"
      }
    },
    {
      "text": "Toast dried chilies and remaining Sichuan peppercorns in a dry wok over medium heat for 1 minute until fragrant and deepened in color. Grind coarsely using a mortar or spice grinder.",
      "textZh": "干辣椒与剩余花椒入空锅，中火焙烤1分钟至香气溢出、颜色加深。用臼或研磨机粗磨。",
      "zhHint": "焙香再磨",
      "stateNote": {
        "visual": "Chilies turn brick-red; peppercorns swell slightly and release white dust.",
        "visualZh": "辣椒转砖红色；花椒略膨起，泛出白色粉状物。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "A warm, numbing aroma fills the kitchen.",
        "signalZh": "厨房弥漫温暖麻香。"
      }
    },
    {
      "text": "Pour warm sauce over sliced meat. Sprinkle toasted chili-peppercorn mixture evenly. Garnish with chopped roasted peanuts and scallion greens. Serve at cool room temperature (18–22°C).",
      "textZh": "将温热酱汁淋在肉片上，均匀撒上椒麻碎，点缀烤花生碎与葱绿段。室温（18–22°C）上桌。",
      "zhHint": "温酱冷肉",
      "stateNote": {
        "visual": "Sauce coats each slice without pooling; peanuts glisten with oil sheen.",
        "visualZh": "酱汁裹匀每片，不积底；花生泛油光。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "No steam rises from the plate after 30 seconds.",
        "signalZh": "盘中30秒后无热气升腾。"
      }
    }
  ],
  "tips": [
    "Use chilled meat for cleaner slices — refrigerate 20 minutes before cutting.",
    "Red oil is built in this recipe via toasted chilies + Sichuan peppercorn — no store-bought 'red oil' needed.",
    "For true fuqi feipian texture, never boil the meat — gentle simmer only."
  ],
  "tipsZh": [
    "肉片更易切薄？冷藏20分钟再切。",
    "本方红油由现焙辣椒+花椒构成，无需购买成品红油。",
    "正宗口感靠文火慢炖，切忌滚沸。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/fu-qi-fei-pian.webp"
};
