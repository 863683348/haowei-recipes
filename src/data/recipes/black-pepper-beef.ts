import type { Recipe } from "@/lib/types";

/** Black Pepper Beef (黑椒牛柳) (黑椒牛柳) — Day batch */
export const black_pepper_beef: Recipe = {
  "id": "black-pepper-beef",
  "slug": "black-pepper-beef",
  "titleEn": "Black Pepper Beef (黑椒牛柳)",
  "titleZh": "黑椒牛柳",
  "pinyin": "hēi jiāo niú liǔ",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version uses coarsely cracked pepper in a quick pan sauce. Restaurant version flames the beef and thickens the sauce with a butter-and-flour roux.",
  "versionNoteZh": "家常版用粗粒黑椒做快手酱汁。餐厅版明火爆炒，并用黄油面粉糊勾芡。",
  "tags": [
    "beef",
    "black-pepper",
    "stir-fry",
    "takeout-at-home",
    "30-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "Black pepper beef is the dish that made Cantonese cooking look easy to the rest of the world — it is essentially steak strips in a pan sauce, and it tastes best when the pepper is cracked seconds before it hits the oil.",
  "storyZh": "黑椒牛柳是让全世界觉得粤菜很简单的菜——本质就是平底锅酱汁煎牛肉条，胡椒在下锅前几秒现磨现碾才最香。",
  "ingredients": [
    {
      "id": "bpb-1",
      "nameEn": "beef tenderloin, cut into strips",
      "nameZh": "牛柳条",
      "amountMetric": "350 g",
      "amountUS": "about 12 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "bpb-2",
      "nameEn": "black peppercorns, coarsely cracked",
      "nameZh": "黑胡椒粒，粗碾",
      "amountMetric": "1.5 tsp",
      "amountUS": "1.5 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "bpb-3",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "bpb-4",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bpb-5",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "2 tsp",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "bpb-6",
      "nameEn": "onion, cut into wedges",
      "nameZh": "洋葱角",
      "amountMetric": "1/2 medium",
      "amountUS": "1/2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "bpb-7",
      "nameEn": "green pepper, cut into squares",
      "nameZh": "青椒块",
      "amountMetric": "1 piece",
      "amountUS": "1 piece",
      "category": "produce",
      "pantry": "local",
      "termKey": "green-pepper"
    },
    {
      "id": "bpb-8",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "bpb-9",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "bpb-10",
      "nameEn": "water or stock",
      "nameZh": "清水或高汤",
      "amountMetric": "100 ml",
      "amountUS": "about 1/2 cup",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Toss the beef strips with soy sauce and cornstarch. Marinate 10 minutes.",
      "textZh": "牛柳条加生抽和淀粉抓匀，腌 10 分钟。",
      "zhHint": "腌牛肉",
      "stateNote": {
        "visual": "Each strip looks matte and lightly coated",
        "visualZh": "每根肉条表面发哑、薄薄挂浆",
        "signal": "No loose starch powder in the bowl",
        "signalZh": "碗里没有干粉残留",
        "timeRef": "10 minutes"
      }
    },
    {
      "text": "Heat a wok over high heat until smoking lightly. Add oil, then sear the beef 90 seconds without stirring.",
      "textZh": "锅大火烧至微冒烟，放油，下牛肉煎 90 秒不动。",
      "zhHint": "大火定型",
      "stateNote": {
        "visual": "Strips lift cleanly with a browned face",
        "visualZh": "肉条能干净翻起，底面焦褐",
        "signal": "Meat releases from the wok on its own",
        "signalZh": "牛肉自动离锅",
        "heat": "high",
        "timeRef": "90 seconds"
      }
    },
    {
      "text": "Stir-fry 1 minute more and remove the beef while still slightly pink inside.",
      "textZh": "再炒 1 分钟盛出，内部可略生。",
      "zhHint": "盛出备用"
    },
    {
      "text": "In the same wok, fry garlic 10 seconds, then add onion and pepper and stir-fry 2 minutes.",
      "textZh": "原锅爆香蒜末 10 秒，下洋葱和青椒炒 2 分钟。",
      "zhHint": "炒配菜",
      "stateNote": {
        "visual": "Onion layers separate, pepper skin blisters faintly",
        "visualZh": "洋葱层散开，青椒皮起细微白点",
        "signal": "Vegetables still snap when bitten",
        "signalZh": "蔬菜咬下去仍脆",
        "heat": "high",
        "timeRef": "2 minutes"
      }
    },
    {
      "text": "Crack the peppercorns straight into the pan. Add oyster sauce and water, and bring to a bubble.",
      "textZh": "黑胡椒现碾下锅，加蚝油和水，烧沸。",
      "zhHint": "下黑椒酱汁",
      "stateNote": {
        "visual": "Pepper flecks scatter evenly through the sauce",
        "visualZh": "胡椒碎均匀散在酱汁中",
        "signal": "Pepper aroma is sharp and immediate",
        "signalZh": "黑椒香气立刻冲上来",
        "heat": "high"
      }
    },
    {
      "text": "Return the beef and toss 30 seconds until the sauce thickens and clings.",
      "textZh": "回锅翻 30 秒，至酱汁变稠裹住牛肉。",
      "zhHint": "回锅收汁",
      "stateNote": {
        "visual": "Sauce turns glossy and coats each strip",
        "visualZh": "酱汁油亮，裹住每根肉条",
        "signal": "No thin liquid pooling in the wok",
        "signalZh": "锅底没有稀汤",
        "heat": "high",
        "timeRef": "30 seconds"
      }
    },
    {
      "text": "Serve at once — this one does not wait well.",
      "textZh": "立刻上桌，这道菜不能等。",
      "zhHint": "出锅"
    }
  ],
  "tips": [
    "Crack pepper at the last second. Pre-ground loses most of its punch.",
    "Do not crowd the wok — beef needs direct pan contact to brown.",
    "The sauce should just coat the meat, not flood it."
  ],
  "tipsZh": [
    "胡椒最后现碾，预磨粉香气损失大半。",
    "牛肉不要堆太厚，要贴锅才上色。",
    "酱汁只需裹住肉，不要变成泡肉。"
  ],
  "relatedSlugs": [
    "green-pepper-beef",
    "oyster-sauce-beef",
    "beef-and-broccoli",
    "onion-beef-stir-fry"
  ],
  "image": "/images/recipes/green-pepper-beef.webp"
};
