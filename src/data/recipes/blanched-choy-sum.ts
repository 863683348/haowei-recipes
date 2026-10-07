import type { Recipe } from "@/lib/types";

/** Cantonese Blanched Choy Sum with Oyster Sauce (白灼菜心) (白灼菜心) — Day batch */
export const blanched_choy_sum: Recipe = {
  "id": "blanched-choy-sum",
  "slug": "blanched-choy-sum",
  "titleEn": "Cantonese Blanched Choy Sum with Oyster Sauce (白灼菜心)",
  "titleZh": "白灼菜心",
  "pinyin": "bái zhuó cài xīn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 3,
  "version": "family",
  "versionNote": "白灼 means 'blanched in plain water' — the purest Cantonese technique and the one restaurant kitchens judge a cook by. A restaurant finishes with a ladle of house superior stock in the dressing; at home a good chicken or vegetable stock cube dissolved in the blanching liquid gets you most of the way.",
  "versionNoteZh": "白灼＝只用清水汆烫，是粤菜最纯粹的技法，也是酒楼考察厨师的一道菜。餐厅最后会淋一勺自家高汤调汁；家里用一块好的鸡粉或蔬菜高汤块溶进汆烫水里，也就八九不离十了。",
  "tags": [
    "cantonese",
    "vegetarian",
    "15-min",
    "healthy",
    "technique"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "白灼菜心 is the dish that proves a Cantonese cook's timing. There is no sauce to hide behind, no batter, no spice — just greens, boiling water, and the decision of exactly when to lift them out. Served with a drizzle of oyster sauce and a spoon of hot oil poured over the garlic at the table, it is on every dim sum menu and every family dinner table in the Pearl River Delta.",
  "storyZh": "白灼菜心是证明粤菜厨师火候的一道菜。没有酱汁可遮、没有糊可挂、没有香料可掩——只有青菜、滚水，以及「什么时候捞」这个决定。上桌时淋蚝油、再把一勺热油浇在蒜上，它在珠三角每家茶楼和每张家庭餐桌上都出现。",
  "ingredients": [
    {
      "id": "bcs-choy",
      "nameEn": "choy sum (菜心), trimmed, thick stems scored with a shallow cross",
      "nameZh": "菜心（修整，粗梗划浅十字）",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lb",
      "category": "produce",
      "pantry": "asian",
      "termKey": "baby-bok-choy",
      "note": "Look for slim stalks with small yellow flowers — they are the sweetest.",
      "noteZh": "选细梗带小黄花的，最甜。"
    },
    {
      "id": "bcs-oyster",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "bcs-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bcs-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "bcs-ginger",
      "nameEn": "ginger, minced",
      "nameZh": "姜末",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bcs-stock",
      "nameEn": "vegetable stock",
      "nameZh": "蔬菜高汤",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "bcs-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "0.5 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "bcs-oil",
      "nameEn": "neutral oil",
      "nameZh": "中性油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Trim the choy sum and score a shallow cross into any stem thicker than a pencil so the core cooks as fast as the leaves.",
      "textZh": "菜心修整，比铅笔粗的梗划一道浅十字，让芯和叶同时熟。",
      "stateNote": {
        "visual": "Cut ends are clean and pale; the cross cut opens just into the white core",
        "visualZh": "切口干净发白，十字只切到白色菜芯",
        "signal": "Stems and leaves are of similar thickness at the cut",
        "signalZh": "切口处梗与叶的厚度接近"
      }
    },
    {
      "text": "Bring a wide pot of water to a full rolling boil. Add 1 tablespoon of the oil and a big pinch of salt.",
      "textZh": "宽口锅水烧至大滚，加 1 汤匙油和一大撮盐。",
      "stateNote": {
        "visual": "The surface of the water is broken by large rolling bubbles and beads of oil float on top",
        "visualZh": "水面翻起大泡，油珠浮在表面",
        "timeRef": "about 4 minutes to boil",
        "timeRefZh": "约 4 分钟烧开",
        "heat": "high",
        "signal": "Steam rises in a steady column, not a lazy wisp",
        "signalZh": "蒸汽成稳定一股上升，而不是懒懒一缕"
      },
      "tip": "The oil coats the greens as they surface and is what gives restaurant 白灼 its shine.",
      "tipZh": "油会在菜出水时裹上去，这正是酒楼白灼那层光泽的来源。"
    },
    {
      "text": "Slide in the choy sum stems first, press them under, and blanch for 60 to 90 seconds.",
      "textZh": "菜心梗先下锅并按入水中，汆烫 60–90 秒。",
      "stateNote": {
        "visual": "Stems go from pale opaque green to a translucent jade; leaves darken and wilt slightly",
        "visualZh": "梗由不透明浅绿转为半透明翠玉色，叶片变深略软",
        "timeRef": "60 to 90 seconds",
        "timeRefZh": "60–90 秒",
        "heat": "high",
        "signal": "A stem bends without snapping and the flower buds, if any, are just tender",
        "signalZh": "梗能弯而不断，花苞（如有）刚好变软"
      },
      "tip": "Pull them 10 seconds before you think they are ready — the plate keeps cooking them.",
      "tipZh": "比你觉得该出锅的时间早 10 秒捞——盘里的余温还会继续熟。"
    },
    {
      "text": "Lift the greens out, shake off the water, and arrange them neatly in one direction on a warm plate.",
      "textZh": "捞出青菜甩去水分，整齐朝一个方向码在温过的盘里。",
      "stateNote": {
        "visual": "Greens lie flat and aligned, still bright jade with no dull patches",
        "visualZh": "青菜平铺顺向排列，仍翠绿发亮无暗斑",
        "signal": "No water runs out when the plate is tilted slightly",
        "signalZh": "盘子微倾不再有水流出"
      }
    },
    {
      "text": "Warm the oyster sauce with the stock, soy sauce and sugar in a small pan over low heat until it just simmers, then stir in half the garlic and the ginger.",
      "textZh": "小锅小火把蚝油、高汤、生抽和糖加热到刚冒泡，拌入一半蒜末和姜末。",
      "stateNote": {
        "visual": "Sauce loosens to a pourable glossy consistency and small bubbles appear at the rim",
        "visualZh": "酱汁稀释成可流动的亮泽状，边缘冒出小泡",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "low",
        "signal": "A spoonful coats the back of a spoon without running off immediately",
        "signalZh": "一勺酱汁挂在勺背不会立刻流下"
      }
    },
    {
      "text": "Spoon the sauce over the greens, pile the remaining raw garlic on top, and heat the last tablespoon of oil until it smokes faintly — pour it over the garlic.",
      "textZh": "把酱汁浇在菜上，堆上剩余生蒜末，最后一汤匙油烧到微微冒烟，浇在蒜末上。",
      "stateNote": {
        "visual": "The oil hits the garlic and it sizzles and turns pale gold in 2 seconds; the plate glistens",
        "visualZh": "热油浇到蒜末上滋响，2 秒内转浅金，整盘油亮",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "high",
        "signal": "A burst of garlic aroma rises the moment the oil lands",
        "signalZh": "热油落下的瞬间腾起一股蒜香"
      },
      "tip": "This final hot-oil pour is the whole point of the dish; do not skip it.",
      "tipZh": "最后这勺热油是这道菜的精髓，不能省。"
    }
  ],
  "tips": [
    "Use a wide pot and plenty of water so the temperature does not crash when the greens go in.",
    "Do not rinse after blanching; you would wash off the oil coating that gives the shine.",
    "Use vegetarian mushroom stir-fry sauce instead of oyster sauce to make the dish fully vegan."
  ],
  "tipsZh": [
    "用宽口锅、多放水，青菜下锅时水温才不会骤降。",
    "汆完别冲冷水——会把带来光泽的那层油冲掉。",
    "用素食香菇蚝油代替蚝油，这道菜就是全素。"
  ],
  "ingredientSubs": [
    {
      "from": "choy sum (菜心)",
      "fromZh": "菜心",
      "to": "baby bok choy or broccolini",
      "toZh": "小白菜或西兰苔",
      "ratio": "1:1 by weight",
      "note": "Both blanch beautifully; broccolini needs 30 seconds more.",
      "noteZh": "两者都适合白灼；西兰苔要多汆 30 秒。"
    },
    {
      "from": "oyster sauce",
      "fromZh": "蚝油",
      "to": "vegetarian mushroom stir-fry sauce",
      "toZh": "素食香菇蚝油",
      "ratio": "1:1",
      "note": "Makes the dish vegan with only a small loss of savoury depth.",
      "noteZh": "可做全素，鲜味厚度略减。"
    }
  ],
  "relatedSlugs": [
    "oyster-sauce-lettuce",
    "stir-fried-bok-choy",
    "garlic-broccoli"
  ],
  "image": "/images/recipes/oyster-sauce-lettuce.webp"
};
