import type { Recipe } from "@/lib/types";

/** Cheese-Baked Eggplant Gratin (芝士焗茄子) (芝士焗茄子) — Day batch */
export const cheese_baked_eggplant: Recipe = {
  "id": "cheese-baked-eggplant",
  "slug": "cheese-baked-eggplant",
  "titleEn": "Cheese-Baked Eggplant Gratin (芝士焗茄子)",
  "titleZh": "芝士焗茄子",
  "pinyin": "zhī shi jú qié zi",
  "cuisine": "融合菜",
  "cuisineEn": "Chinese-Western fusion",
  "region": "Chinese home kitchen with a Western oven",
  "regionZh": "中西融合（家庭烤箱）",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 3,
  "version": "family",
  "versionNote": "Cantonese restaurants do this as 芝士焗 eggplant in individual ramekins with a milk-based white sauce and a blowtorch finish. The home tomato version is simpler and brighter: the acid from the tomatoes cuts the cheese so the dish does not sit heavy, and it reheats far better than a cream-based bake.",
  "versionNoteZh": "粤式茶餐厅的「芝士焗」多用奶白汁装小盅、最后喷枪烤色。家庭番茄版更简单也更清爽：番茄的酸度能压住芝士，吃完不会发腻，而且比奶油白汁版更适合回热。",
  "tags": [
    "fusion",
    "oven",
    "vegetarian",
    "eggplant",
    "cheese",
    "comfort-food"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "This belongs to the Hong Kong-style cha chaan teng tradition, where Western dishes get rewritten with whatever is local and cheap: cheese over anything, baked in a dish that arrives at the table still bubbling. Eggplant is a natural victim — it already collapses into something almost creamy. Done right the layer of cheese should stretch when you lift the spoon, and there should be tomato underneath keeping it honest.",
  "storyZh": "这属于港式茶餐厅的传统：把西餐用本地便宜的材料改写一遍——芝士盖万物，端上桌还在冒泡。茄子天然适合它,因为它本来就软糯得近乎奶油。做得好时，勺子提起来芝士会拉丝，底下还得有番茄压着，让它不至于腻。",
  "ingredients": [
    {
      "id": "cbe-eggplant",
      "nameEn": "eggplant (globe or Asian)",
      "nameZh": "茄子（圆茄或长茄）",
      "amountMetric": "2 medium (about 600 g)",
      "amountUS": "2 medium (about 1.3 lb)",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "cbe-mozzarella",
      "nameEn": "mozzarella, shredded",
      "nameZh": "马苏里拉芝士碎",
      "amountMetric": "120 g",
      "amountUS": "about 4 oz",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "cbe-parmesan",
      "nameEn": "Parmesan, finely grated",
      "nameZh": "帕玛森芝士粉",
      "amountMetric": "30 g",
      "amountUS": "about 1 oz",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "cbe-tomato",
      "nameEn": "ripe tomatoes, diced",
      "nameZh": "番茄切丁",
      "amountMetric": "3 medium (about 350 g)",
      "amountUS": "3 medium (about 12 oz)",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute: one 400 g can of whole peeled tomatoes, crushed by hand.",
      "noteZh": "替代：400 克装整颗去皮番茄罐头一罐，用手捏碎。",
      "termKey": "tomato"
    },
    {
      "id": "cbe-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cbe-onion",
      "nameEn": "onion, finely diced",
      "nameZh": "洋葱丁",
      "amountMetric": "1/2 medium",
      "amountUS": "1/2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "cbe-oliveoil",
      "nameEn": "olive oil",
      "nameZh": "橄榄油",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cbe-tomatopaste",
      "nameEn": "tomato paste",
      "nameZh": "番茄膏",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cbe-herbs",
      "nameEn": "dried Italian herbs (or dried oregano)",
      "nameZh": "意大利混合香草（或牛至）",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "cbe-salt",
      "nameEn": "salt and black pepper",
      "nameZh": "盐与黑胡椒",
      "amountMetric": "to taste",
      "amountUS": "to taste",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Slice the eggplant into 1 cm rounds. Sprinkle both sides with 1/2 tsp salt and leave 15 minutes in a colander, then pat completely dry.",
      "textZh": "茄子切成 1 厘米厚的圆片，两面撒共 1/2 茶匙盐，放沥水篮里静置 15 分钟，之后彻底擦干。",
      "zhHint": "盐渍脱水",
      "stateNote": {
        "visual": "Water beads collect on both faces; slices become noticeably floppy",
        "visualZh": "两面都渗出密集水珠；切片明显变软",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Slices bend like leather instead of springing back",
        "signalZh": "切片像皮革一样能弯，不再回弹"
      },
      "tip": "Skip this and you bake watery eggplant. Salt is the only reliable way to pull the water out.",
      "tipZh": "省了这步，烤出来就是一盘水。盐是唯一靠谱的脱水办法。"
    },
    {
      "text": "Heat the oven to 220°C / 425°F. Brush the rounds with 2 tbsp olive oil on both sides and roast on a tray 12 minutes, until the tops are golden.",
      "textZh": "烤箱预热至 220°C。茄片两面刷 2 大勺橄榄油，放烤盘烤 12 分钟，到表面金黄。",
      "zhHint": "烤软茄片",
      "stateNote": {
        "visual": "Surfaces blister and brown; edges shrink slightly and pull away from the skin",
        "visualZh": "表面起泡上色；边缘略微收缩并与外皮分离",
        "heat": "high",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "The flesh yields completely to a fork with no white resistance",
        "signalZh": "叉子能轻松穿透，中间没有夹生的白芯"
      }
    },
    {
      "text": "Meanwhile make the sauce: heat 1 tbsp olive oil in a pan, add onion and cook 3 minutes until translucent, then garlic for 30 seconds.",
      "textZh": "同时做番茄酱汁：锅中热 1 大勺橄榄油，下洋葱炒 3 分钟至透明，再下蒜末炒 30 秒。",
      "zhHint": "炒软洋葱",
      "stateNote": {
        "visual": "Onion turns translucent and glossy; no browning on the edges",
        "visualZh": "洋葱变透明发亮；边缘没有上色",
        "timeRef": "3 minutes plus 30 seconds",
        "timeRefZh": "3 分钟 + 30 秒",
        "signal": "It smells sweet rather than sharp — raw onion bite is gone",
        "signalZh": "闻起来是甜的而不是冲的——生洋葱味消失"
      }
    },
    {
      "text": "Add tomato paste and cook 1 minute, then the diced tomatoes and herbs. Simmer uncovered 8 minutes until thickened and jammy. Season with salt and pepper.",
      "textZh": "加番茄膏炒 1 分钟，再下番茄丁和香草。开盖小火煮 8 分钟到浓稠如果酱。用盐和黑胡椒调味。",
      "zhHint": "熬浓番茄酱",
      "stateNote": {
        "visual": "Liquid reduces and the sauce mounds instead of spreading; oil begins to separate at the edges",
        "visualZh": "水分收干，酱汁能堆起来而不摊开；边缘开始析出油脂",
        "heat": "medium-low",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "A spoon dragged across the pan leaves a channel that holds for two seconds",
        "signalZh": "勺子划过锅底留下的沟槽能停住两秒"
      }
    },
    {
      "text": "Layer in a baking dish: a third of the tomato sauce, half the eggplant, half the mozzarella; repeat. Finish with the remaining sauce and all the Parmesan.",
      "textZh": "在烤盘里分层：先铺三分之一番茄酱，再铺一半茄片、一半马苏里拉；重复一次。最后盖上剩余番茄酱和全部帕玛森芝士。",
      "zhHint": "分层码盘",
      "stateNote": {
        "visual": "Layers are distinct from the side; cheese covers the surface right to the edges",
        "visualZh": "从侧面能看到清晰分层；芝士铺满表面直到边缘",
        "signal": "No bare eggplant pokes through the top layer of cheese",
        "signalZh": "表面芝士层没有露出茄片"
      }
    },
    {
      "text": "Bake at 200°C / 400°F for 15 minutes until the cheese is melted, bubbling and patched with brown spots. Rest 5 minutes before serving so it holds its shape.",
      "textZh": "200°C 烤 15 分钟，烤到芝士融化冒泡、表面出现焦斑。出炉静置 5 分钟定型再上桌。",
      "zhHint": "高温焗烤",
      "stateNote": {
        "visual": "Cheese goes from pale to golden with darker blistered patches; bubbles break at the edges",
        "visualZh": "芝士由浅白转金黄，并出现深色的鼓泡焦斑；边缘不断有气泡冒出",
        "heat": "high",
        "timeRef": "15 minutes plus 5 minutes rest",
        "timeRefZh": "15 分钟 + 静置 5 分钟",
        "signal": "A spoon lifted from the center pulls a stretch of melted cheese",
        "signalZh": "勺子从中心提起时能拉出芝士丝"
      },
      "tip": "The 5-minute rest is not optional: straight from the oven it collapses into a puddle.",
      "tipZh": "静置 5 分钟不能省：刚出炉直接舀会塌成一滩。"
    }
  ],
  "tips": [
    "Salt, then dry, then roast — three steps that separate creamy eggplant from watery eggplant.",
    "Grate your own mozzarella; pre-shredded cheese is coated in starch and won't melt smoothly.",
    "Add a spoon of the sauce between layers, not just on top, or the middle will be bland.",
    "No broiler? Turn the oven to its highest setting for the last 2 minutes to get the brown spots."
  ],
  "tipsZh": [
    "盐渍 → 擦干 → 烤，这三步决定了是奶香茄子还是水煮茄子。",
    "马苏里拉最好自己刨丝；现成芝士碎表面裹了淀粉，融化不均匀。",
    "每层之间都要抹酱，不能只铺在表面，否则中间会没味道。",
    "没有上火/炙烤功能？最后 2 分钟把烤箱调到最高温，一样能烤出焦斑。"
  ],
  "relatedSlugs": [
    "eggplant-tofu-claypot",
    "cheese-baked-rice",
    "tomato-eggs"
  ],
  "image": "/images/recipes/cheese-baked-rice.webp"
};
