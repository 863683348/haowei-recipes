import type { Recipe } from "@/lib/types";

/** Dry Pot Spare Ribs (Gan Guo Pai Gu) (干锅排骨) — Day batch */
export const dry_pot_spare_ribs: Recipe = {
  "id": "gan-guo-pai-gu",
  "slug": "dry-pot-spare-ribs",
  "titleEn": "Dry Pot Spare Ribs (Gan Guo Pai Gu)",
  "titleZh": "干锅排骨",
  "pinyin": "gān guō pái gǔ",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Hunan",
  "regionZh": "湖南",
  "difficulty": "medium",
  "timeMin": 60,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version braises the ribs first in a regular pot, then finishes them in a wok; restaurant versions deep-fry the braised ribs before the final dry-pot toss, which gives a harder crust at the cost of a lot of oil.",
  "versionNoteZh": "家常版先普通锅炖软再回炒锅收干；餐馆版要把炖好的排骨再过油炸，外壳更硬但费油。",
  "tags": [
    
    "weekend-project"
  ],
  "dietary": [
    "none"
  ],
  "story": "Dry-pot ribs are the dish Hunan cooks order when they want beer food: ribs braised until the meat nearly slips off, then thrown into a screaming wok with chillies, garlic and potato slices so the outside caramelises while the inside stays juicy. It arrives in a cast-iron pot still snapping and popping at the table.",
  "storyZh": "干锅排骨是湖南厨师想吃下酒菜时的首选：排骨先炖到肉近乎脱骨，再下滚烫炒锅与辣椒、蒜和土豆片同炒，外皮焦糖化、内里依旧多汁；连铸铁锅一起端上桌时还在噼啪作响。",
  "ingredients": [
    {
      "id": "ggpg-1",
      "nameEn": "pork spare ribs",
      "nameZh": "猪肋排",
      "pinyin": "zhū lèi pái",
      "amountMetric": "600 g",
      "amountUS": "1 1/3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Cut into 4 cm segments; ask the butcher to chop through the bone.",
      "noteZh": "剁成 4 厘米段，请肉铺连骨斩断。",
      "termKey": "pork-rib"
    },
    {
      "id": "ggpg-2",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ggpg-3",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "30 g",
      "amountUS": "6 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "ggpg-4",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "12 g",
      "amountUS": "15 chilies",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "ggpg-5",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "3 g",
      "amountUS": "1 1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "ggpg-6",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "2 g",
      "amountUS": "2 pods",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "ggpg-7",
      "nameEn": "doubanjiang (fermented chilli bean paste)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "25 g",
      "amountUS": "1 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "ggpg-8",
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
      "id": "ggpg-9",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "8 ml",
      "amountUS": "1 1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "ggpg-10",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ggpg-11",
      "nameEn": "waxy potatoes",
      "nameZh": "黄心土豆",
      "pinyin": "huáng xīn tǔ dòu",
      "amountMetric": "200 g",
      "amountUS": "2 small",
      "category": "produce",
      "pantry": "local",
      "note": "Slice 5 mm thick; they crisp in the final toss.",
      "noteZh": "切 5 毫米厚片，最后同炒会煎脆。"
    },
    {
      "id": "ggpg-12",
      "nameEn": "celery",
      "nameZh": "西芹",
      "pinyin": "xī qín",
      "amountMetric": "100 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "note": "Added off heat at the end for crunch and freshness.",
      "noteZh": "最后离火加入，提供脆感与清香。"
    },
    {
      "id": "ggpg-13",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "ggpg-14",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Soak ribs in cold water 15 minutes, then blanch: cover with cold water, bring to a boil, boil 2 minutes, and rinse off the grey scum.",
      "textZh": "排骨冷水浸泡 15 分钟，再冷水下锅焯水：烧开后煮 2 分钟，冲净灰色浮沫。",
      "zhHint": "先泡后焯，去腥去血沫",
      "stateNote": {
        "visual": "Scum is grey-brown and foamy; after rinsing, rib surfaces are clean and pale.",
        "visualZh": "浮沫灰褐起泡；冲洗后排骨表面干净色浅。",
        "timeRef": "15 + 5 minutes",
        "timeRefZh": "15 + 5 分钟",
        "heat": "high",
        "signal": "Rinsing water runs clear and the ribs smell clean, not metallic.",
        "signalZh": "冲洗水变清，排骨无腥无铁味。"
      }
    },
    {
      "text": "Put ribs in a pot with ginger, star anise, Shaoxing wine, light and dark soy, and 700 ml hot water. Simmer covered 30 minutes until nearly tender but still holding the bone.",
      "textZh": "排骨入锅，加姜片、八角、黄酒、生抽、老抽与 700 毫升热水；加盖小火炖 30 分钟至将熟但仍连骨不散。",
      "zhHint": "炖到将脱骨，别炖烂",
      "stateNote": {
        "visual": "Broth is amber and reduced by about a third; meat has shrunk from the bone ends.",
        "visualZh": "汤色琥珀、收去约三分之一，骨端肉已回缩。",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "low",
        "signal": "A chopstick pierces the meat with firm resistance — it should not fall off yet.",
        "signalZh": "筷子扎肉有明显阻力——还不能脱骨。"
      }
    },
    {
      "text": "Lift ribs out and pat dry; reserve 100 ml of the braising liquid. Heat a wok over medium-high with 20 ml oil and fry potato slices 3 minutes per side until golden. Remove.",
      "textZh": "排骨捞出擦干，留 100 毫升炖汁；炒锅大火放 20 毫升油，土豆片每面煎 3 分钟至金黄盛出。",
      "zhHint": "排骨擦干，土豆先煎香",
      "stateNote": {
        "visual": "Potato slices show even golden crusts and hold their shape when lifted.",
        "visualZh": "土豆片金黄均匀，铲起时不碎不散。",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium-high",
        "signal": "Slices slide freely and sound crisp against the spatula.",
        "signalZh": "土豆片锅底可自由滑动，锅铲碰之有脆声。"
      }
    },
    {
      "text": "In the wok over medium, add ribs and dry-fry 4 minutes, turning, until the surfaces blister and take on brown patches.",
      "textZh": "锅中火下排骨干煸 4 分钟，勤翻动，至表面起泡并现焦褐斑。",
      "zhHint": "回锅干煸，逼出焦香",
      "stateNote": {
        "visual": "Rib surfaces are dry and lacquered brown; fat renders and the wok glistens.",
        "visualZh": "排骨表面干爽呈酱褐，油脂析出、锅面发亮。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium",
        "signal": "Sizzling turns dry and popping rather than wet.",
        "signalZh": "声音由带水转为干爽的爆响。"
      }
    },
    {
      "text": "Push ribs aside. Add dried chilies, garlic, Sichuan peppercorns and doubanjiang to the fat; fry 90 seconds until red and fragrant. Splash in the reserved braising liquid.",
      "textZh": "排骨拨到一边，用锅底油下干辣椒、蒜瓣、花椒与豆瓣酱煸 90 秒至红香；淋入预留炖汁。",
      "zhHint": "豆瓣煸香，汁要分次淋",
      "stateNote": {
        "visual": "Oil turns clear red; the added liquid bubbles up and quickly thickens.",
        "visualZh": "油色清红，淋入的汁迅速起泡变稠。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium",
        "signal": "A burst of roasted chilli-bean aroma, then a thick, glossy sauce forming.",
        "signalZh": "先爆出豆瓣煳香，随即酱汁转浓发亮。"
      }
    },
    {
      "text": "Return potatoes. Toss over medium-high 2 minutes until everything is lacquered and nearly dry. Off heat, fold in celery and white pepper, garnish with scallion, and serve in the wok or a cast-iron pot.",
      "textZh": "土豆回锅，中大火翻匀 2 分钟至全部裹酱、锅底近干；离火拌入西芹与白胡椒粉，撒葱花，连炒锅或铸铁锅上桌。",
      "zhHint": "大火收干，离火拌芹菜",
      "stateNote": {
        "visual": "No free sauce remains; ribs are glossy and dark; celery is still bright green.",
        "visualZh": "锅底无余汁，排骨油亮深褐，西芹仍翠绿。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Spatula scraping the wok bottom makes a dry, sticky rasp.",
        "signalZh": "锅铲刮锅底发出干爽带黏的摩擦声。"
      }
    }
  ],
  "tips": [
    "Braise until nearly tender, not falling apart — the final dry-pot stage will finish the cooking.",
    "Pat the braised ribs dry before the wok; wet ribs steam instead of caramelising.",
    "Celery goes in off heat — it should stay crunchy and fresh against the rich ribs."
  ],
  "tipsZh": [
    "炖到「将熟」而非「脱骨」——最后干锅阶段还会继续加热。",
    "炖好的排骨下锅前要擦干；带水只会蒸熟，不上色。",
    "西芹必须离火拌——要保留脆爽，与浓味排骨形成反差。"
  ],
  "relatedSlugs": [
    "dry-pot-potato-slices",
    "red-braised-pork-ribs",
    "chongqing-mala-xiang-guo"
  ],
  "image": "/images/recipes/honey-rib-roast.webp"
};
