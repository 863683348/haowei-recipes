import type { Recipe } from "@/lib/types";

/** Grilled Mantou Slices (Kǎo Mántou Piàn) (烤馒头片) — Day batch */
export const grilled_mantou_slices: Recipe = {
  "id": "kao-man-tou-pian",
  "slug": "grilled-mantou-slices",
  "titleEn": "Grilled Mantou Slices (Kǎo Mántou Piàn)",
  "titleZh": "烤馒头片",
  "pinyin": "kǎo mán tou piàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "北方",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses day-old steamed mantou sliced thick and finished under a home oven broiler, rather than the street-stall charcoal grill that gives a smokier, more uneven char. Broiling gives a more even crunch and no smoke alarm.",
  "versionNoteZh": "家庭版用隔夜馒头切厚片、以家用烤箱上火烤制，代替街边炭火烤炉那种烟熏味更重、焦痕更不匀的做法。烤箱上火热力更均匀，也不会触发烟雾报警器。",
  "tags": [
    "20-min",
    "snack",
    "vegetarian",
    "grill",
    "northern"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "This is what northern Chinese families do with yesterday's mantou, and it is the cheapest good snack I know. My grandfather grilled them on the coal stove in winter, and the whole point was that the outside went shatteringly crisp while the inside stayed steamy and soft — you ate them standing up, too hot to hold properly.",
  "storyZh": "北方人家处理隔夜馒头就是这么干的，也是我知道最便宜的好吃零嘴。冬天爷爷在煤炉上烤，关键是外壳要酥到掉渣，里面还冒着热气软乎——烫得拿不住，只能站在炉边吃。",
  "ingredients": [
    {
      "id": "km-01",
      "nameEn": "steamed mantou, preferably day-old",
      "nameZh": "馒头（隔夜更佳）",
      "pinyin": "mán tou",
      "amountMetric": "2 buns",
      "amountUS": "2 buns (about 200 g)",
      "category": "staple",
      "pantry": "asian",
      "note": "Day-old mantou slices cleanly and toasts better; fresh mantou is too moist and tears. Sub: any plain white bread roll or brioche bun.",
      "noteZh": "隔夜馒头切得整齐、也更容易烤脆；新鲜馒头水分大容易切碎。替代：可用普通白面包或小布里欧修。"
    },
    {
      "id": "km-02",
      "nameEn": "neutral vegetable oil",
      "nameZh": "无味植物油",
      "pinyin": "zhí wù yóu",
      "amountMetric": "20 ml",
      "amountUS": "1.5 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "km-03",
      "nameEn": "cumin powder",
      "nameZh": "孜然粉",
      "pinyin": "zī rán fěn",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "cumin"
    },
    {
      "id": "km-04",
      "nameEn": "chili flakes",
      "nameZh": "辣椒面",
      "pinyin": "là jiāo miàn",
      "amountMetric": "3 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "chili-flakes"
    },
    {
      "id": "km-05",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "pinyin": "wǔ xiāng fěn",
      "amountMetric": "3 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "km-06",
      "nameEn": "fine salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "3 g",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "km-07",
      "nameEn": "scallion greens, finely chopped",
      "nameZh": "小葱绿（切细）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Slice each mantou into 3–4 rounds about 1.5 cm / 5/8 in thick. Use a serrated knife and a gentle sawing motion — pressing down will squash the crumb.",
      "textZh": "每个馒头切成3–4片，厚约1.5厘米。用锯齿刀轻轻来回锯切——下压会把馒头压扁。",
      "zhHint": "锯齿刀轻锯，别下压",
      "stateNote": {
        "visual": "Even rounds with flat faces and no compressed, dense bands where the knife pressed",
        "visualZh": "厚薄均匀的圆片，切面平整，无刀压造成的致密硬带",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "A slice holds its shape when picked up and the crumb looks open and airy",
        "signalZh": "拿起一片仍能保持形状，内部组织疏松多孔"
      },
      "tip": "Thinner than 1 cm and they turn into crackers; thicker than 2 cm and the centre never crisps.",
      "tipZh": "薄于1厘米会变成脆饼；厚于2厘米则中心始终烤不透。"
    },
    {
      "text": "Mix cumin, chili flakes, five-spice and salt in a small bowl. In a separate dish, pour the oil. Brush one cut face of each slice with oil, then sprinkle with about half the spice mix.",
      "textZh": "小碗中混合孜然粉、辣椒面、五香粉和盐；另备一碟油。在每片馒头的一面刷油，再撒约一半的混合香料。",
      "zhHint": "单面刷油撒料",
      "stateNote": {
        "visual": "Oiled face looks damp and slightly translucent; spices sit in an even dusting, not clumps",
        "visualZh": "刷油面湿润微透；香料均匀薄撒，不成团",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Oil soaks in within a few seconds rather than beading on the surface",
        "signalZh": "油在数秒内被吸收，而不是在表面聚成油珠"
      }
    },
    {
      "text": "Heat the oven broiler (or a grill pan over medium-high heat) for 5 minutes. Place the slices seasoned-side up on a rack or tray about 10 cm / 4 in from the element. Broil 3–4 minutes.",
      "textZh": "烤箱上火（或烤盘中火偏高）预热5分钟。馒头片调味面朝上摆在网上或烤盘，距发热管约10厘米。上火烤3–4分钟。",
      "zhHint": "预热充分，靠近上火",
      "stateNote": {
        "visual": "Surface dries then turns light gold; edges start to darken first",
        "visualZh": "表面先变干再转浅金；边缘最先上色",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "high",
        "signal": "You hear faint crackling and smell toasted cumin — pull them the moment the first dark spots appear",
        "signalZh": "听到轻微噼啪声、闻到焙孜然香——一出现深色斑点立刻取出"
      },
      "tip": "Do not walk away. Mantou goes from golden to burnt in under 30 seconds under a broiler.",
      "tipZh": "千万别走开。上火烤馒头从金黄到焦黑不超过30秒。"
    },
    {
      "text": "Flip the slices, brush the second side with oil and sprinkle the remaining spice mix. Broil another 2–3 minutes until the second side is golden.",
      "textZh": "翻面，在另一面刷油并撒剩余香料，再上火烤2–3分钟至该面金黄。",
      "zhHint": "翻面补油撒料再烤",
      "stateNote": {
        "visual": "Both faces golden with deeper brown speckles where spices toasted; edges firm to the touch",
        "visualZh": "两面金黄，香料处有较深褐色斑点；边缘摸起来变硬",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "high",
        "signal": "Tapping a slice with a spoon gives a hollow, dry sound rather than a soft thud",
        "signalZh": "用勺子轻敲发出干脆的空响，而不是沉闷的实声"
      }
    },
    {
      "text": "Transfer to a plate and scatter the scallion over the top while still hot. Serve immediately, within about 5 minutes, while the contrast between crisp crust and soft interior is at its peak.",
      "textZh": "取出装盘，趁热撒上葱花。立即上桌，最好5分钟内吃完——此时外脆内软的反差最强。",
      "zhHint": "趁热撒葱，立刻吃",
      "stateNote": {
        "visual": "Scallion wilts slightly from the residual heat and turns a brighter green",
        "visualZh": "葱花受余温略微软塌，绿色更鲜亮",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "The first bite shatters audibly, then gives way to a steamy, soft centre",
        "signalZh": "第一口咬下去有清脆响声，随即触到冒热气的内芯"
      },
      "tip": "Sweet version: skip the spices and brush with a little condensed milk or honey instead — equally traditional.",
      "tipZh": "甜味版：不放香料，改刷少许炼乳或蜂蜜——同样是很传统的吃法。"
    }
  ],
  "tips": [
    "Day-old mantou is genuinely better here — if yours is fresh, leave the slices uncovered for 30 minutes to dry out first.",
    "Cook them on a wire rack set over a tray so hot air circulates and the underside crisps too.",
    "Leftover slices re-crisp in a 180°C / 350°F oven for 4 minutes; the microwave will make them chewy."
  ],
  "tipsZh": [
    "隔夜馒头做这个确实更好——若是新馒头，切片后敞开放30分钟晾干再用。",
    "架在烤网上、下面垫烤盘，热空气能循环，底面也能烤脆。",
    "剩下的用180°C烤箱回烤4分钟能重新变脆；微波炉会让它们变韧。"
  ],
  "relatedSlugs": [
    "white-mantou-steamed-buns",
    "brown-sugar-mantou",
    "grilled-leeks"
  ],
  "image": "/images/recipes/white-mantou-steamed-buns.webp"
};
