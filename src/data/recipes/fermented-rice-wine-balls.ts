import type { Recipe } from "@/lib/types";

/** Sweet Fermented Rice with Mini Dumplings (酒酿圆子) — Day batch */
export const fermented_rice_wine_balls: Recipe = {
  "id": "fermented-rice-wine-balls",
  "slug": "fermented-rice-wine-balls",
  "titleEn": "Sweet Fermented Rice with Mini Dumplings",
  "titleZh": "酒酿圆子",
  "pinyin": "jiǔ niàng yuán zǐ",
  "cuisine": "江南菜",
  "cuisineEn": "Jiangnan",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version adds the fermented rice off the heat so the live culture and its perfume are not cooked away, and keeps the dumplings tiny and unfilled; restaurant versions boil the wine hard, thicken more heavily and often drop in a beaten egg for body.",
  "versionNoteZh": "家常版离火后再下酒酿，保住活菌与酒香不被煮掉，圆子保持无馅的小粒；餐厅版酒酿久煮、勾芡更重，常再甩个蛋花增稠。",
  "tags": [
    "25-min",
    "dessert",
    "jiangnan",
    "vegetarian",
    "warming",
    "beginner"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "This is what a Jiangnan family eats on the coldest nights of the year, and what new mothers are fed for a month after giving birth, because fermented rice is held to warm the body from the inside. My Shanghai grandmother made the little dumplings by rolling a dab of dough on her palm with one finger, and she made a thousand of them an hour without looking.",
  "storyZh": "这是江南人家一年中最冷的夜里吃的东西，也是产妇坐月子吃满一个月的东西——酒酿被认为能由内暖身。上海外婆用一个手指在掌心搓小圆子，一小时能搓一千个，眼睛都不用看。",
  "ingredients": [
    {
      "id": "frwb-01",
      "nameEn": "sweet fermented rice wine with grains",
      "nameZh": "酒酿（醪糟，带米）",
      "pinyin": "jiǔ niàng",
      "amountMetric": "200 g",
      "amountUS": "3/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Sold in jars or tubs in the refrigerated section of Asian groceries as 酒酿 or 醪糟; look for one with plenty of whole grains, not just liquid",
      "noteZh": "亚洲超市冷藏柜标『酒酿』或『醪糟』；要选米粒多的，不要只有汁的",
      "termKey": "rice-wine"
    },
    {
      "id": "frwb-02",
      "nameEn": "mini glutinous rice balls, no filling",
      "nameZh": "小圆子（无馅糯米小汤圆）",
      "pinyin": "xiǎo yuán zǐ",
      "amountMetric": "150 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Frozen mini tangyuan without filling, sold as 小圆子; filled tangyuan are a different dish entirely",
      "noteZh": "冷冻无馅小汤圆，包装标『小圆子』；有馅汤圆是另一道菜"
    },
    {
      "id": "frwb-03",
      "nameEn": "water",
      "nameZh": "水",
      "pinyin": "shuǐ",
      "amountMetric": "600 ml",
      "amountUS": "2 1/2 cups",
      "category": "other",
      "pantry": "local",
      "note": "Use more for a soupier bowl; it is a matter of regional taste",
      "noteZh": "想喝汤感就多加水，各地口味不同"
    },
    {
      "id": "frwb-04",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Taste your fermented rice first - some brands are already very sweet",
      "noteZh": "先尝一下酒酿——有些牌子本身已经很甜",
      "termKey": "rock-sugar"
    },
    {
      "id": "frwb-05",
      "nameEn": "dried goji berries",
      "nameZh": "枸杞",
      "pinyin": "gǒu qǐ",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Add at the very end so they plump without turning to mush",
      "noteZh": "最后放入，泡发而不软烂"
    },
    {
      "id": "frwb-06",
      "nameEn": "dried osmanthus flowers",
      "nameZh": "干桂花",
      "pinyin": "gān guì huā",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Optional but it is the signature Shanghai touch; find it in the tea aisle of Asian groceries",
      "noteZh": "可选，但这是上海做法的点睛之笔；亚超茶叶区可找到"
    },
    {
      "id": "frwb-07",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "note": "Mixed with 2 tablespoons cold water for a light slurry - use it only if you want a slightly thickened bowl",
      "noteZh": "加2大勺冷水调成薄芡水——只在想要略稠口感时使用",
      "termKey": "cornstarch"
    },
    {
      "id": "frwb-08",
      "nameEn": "large egg, lightly beaten",
      "nameZh": "鸡蛋，打散",
      "pinyin": "jī dàn",
      "amountMetric": "1",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "note": "Optional; drizzled in at the end for silky ribbons, the way many restaurants serve it",
      "noteZh": "可选；最后淋入成蛋花，很多餐厅就是这么做的",
      "termKey": "egg"
    }
  ],
  "steps": [
    {
      "text": "Bring the water to a full rolling boil over high heat.",
      "textZh": "水大火烧至完全沸腾。",
      "zhHint": "水滚开",
      "stateNote": {
        "visual": "Large bubbles break across the whole surface and steam rises in a thick steady column",
        "visualZh": "整面水面翻起大泡，蒸汽呈粗大稳定汽柱上升",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "The sound changes from a low rumble to a hard, steady roar",
        "signalZh": "声音由低沉闷响变为持续响亮的沸腾声"
      }
    },
    {
      "text": "Add the frozen mini rice balls straight from the freezer and stir once so they do not stick. Cook until they all float and have swollen slightly, about 3 minutes.",
      "textZh": "冷冻小圆子直接下锅，搅一下防粘，煮至全部浮起并微微胀大，约3分钟。",
      "zhHint": "圆子浮起即熟",
      "stateNote": {
        "visual": "Balls rise to the surface one after another and go from opaque white to translucent and slightly puffy",
        "visualZh": "圆子陆续浮起，由不透明白转为半透明微鼓",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high",
        "signal": "Every single ball is floating - one still on the bottom means it needs another 30 seconds",
        "signalZh": "每颗都浮起来了——还有沉底的就再煮30秒"
      },
      "tip": "Do not thaw them first. Frozen straight into boiling water keeps them from going gummy.",
      "tipZh": "不要提前解冻。冷冻直接下沸水才不发黏。"
    },
    {
      "text": "If using, stream in the cornstarch slurry while stirring gently and cook 30 seconds until the liquid is lightly glossy and thickened.",
      "textZh": "若用芡水，边轻轻搅边淋入，煮30秒至汤汁微亮略稠。",
      "zhHint": "薄芡可选",
      "stateNote": {
        "visual": "Liquid goes from watery to a faint sheen that coats the back of a spoon thinly rather than heavily",
        "visualZh": "汤汁由清水状转为微有光泽，在勺背挂薄薄一层而非厚浆",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "A spoon trail closes over in about one second, not instantly and not sluggishly",
        "signalZh": "勺痕约一秒后合拢——既不立刻消失也不迟滞"
      }
    },
    {
      "text": "Turn the heat off completely, then stir in the fermented rice and the rock sugar. Do not let it boil again.",
      "textZh": "完全关火，再加入酒酿与冰糖。切勿重新煮沸。",
      "zhHint": "关火后再下酒酿",
      "stateNote": {
        "visual": "Soft white rice grains suspend in the lightly cloudy broth; the surface stops moving and a faint sweet-sour aroma rises",
        "visualZh": "柔软白色米粒悬浮在微浊汤中；液面停止翻动，飘出淡淡酸甜酒香",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "You can smell the fermentation clearly - if it smells flat and only sweet, it got too hot",
        "signalZh": "能清楚闻到发酵香——若只剩甜味、毫无酒香，说明温度过高了"
      },
      "tip": "This is the one step that separates a good bowl from a flat one: fermented rice off the heat, always.",
      "tipZh": "这是决定一碗好不好喝的唯一一步：酒酿必须离火后放，没有例外。"
    },
    {
      "text": "Add the goji berries and let them sit for 1 minute off the heat to plump, then, if using, drizzle in the beaten egg in a thin stream without stirring for 10 seconds before gently folding once.",
      "textZh": "下枸杞离火静置1分钟泡发；若用蛋花，细流淋入蛋液，先静置10秒不动，再轻轻推一下。",
      "zhHint": "枸杞后放，蛋液细流淋",
      "stateNote": {
        "visual": "Goji berries have plumped into round red beads; the egg sets into pale silky ribbons rather than cloudy scraps",
        "visualZh": "枸杞泡成圆润红珠；蛋液凝成浅色柔滑蛋丝而非浑浊碎絮",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "The egg ribbons hold their shape when you lift the spoon - if the broth turns cloudy you stirred too early",
        "signalZh": "勺起时蛋丝保持完整——若汤色变浑说明搅早了"
      }
    },
    {
      "text": "Ladle into small bowls, scatter with dried osmanthus and serve hot.",
      "textZh": "盛入小碗，撒干桂花，趁热食用。",
      "zhHint": "撒桂花趁热",
      "stateNote": {
        "visual": "Pale ivory broth with soft white rice grains, translucent dumplings, red goji and tiny gold osmanthus flecks; steam rises gently",
        "visualZh": "汤色淡象牙白，内有软白米粒、半透明圆子、红色枸杞与金色桂花碎；热气轻柔上腾",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "The osmanthus aroma hits you as you lean over the bowl - that is when it is ready to carry to the table",
        "signalZh": "俯身靠近碗时就闻到桂花香——这时就可以端上桌了"
      }
    }
  ],
  "tips": [
    "Fermented rice goes in after the heat is off. Boiling it kills the aroma and turns it sour.",
    "Frozen mini dumplings go straight from freezer to boiling water; thawed ones clump and turn gummy.",
    "Leftovers keep two days in the fridge, but the dumplings keep drinking liquid and will swell soft - reheat with extra water."
  ],
  "tipsZh": [
    "酒酿必须关火后放。一煮沸酒香全失、还会发酸。",
    "冷冻小圆子直接从冰箱下沸水；解冻后会结团发黏。",
    "剩的冷藏可放两天，但圆子会继续吸水涨软——回锅要多加水。"
  ],
  "relatedSlugs": [
    "sesame-tangyuan-glutinous-rice-balls",
    "fried-tangyuan",
    "red-bean-mochi-glutinous-rice-dumplings"
  ],
  "image": "/images/recipes/sesame-tangyuan-glutinous-rice-balls.webp"
};
