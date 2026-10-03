import type { Recipe } from "@/lib/types";

/** Braised Eggplant with Minced Pork (肉末茄子) (肉末茄子) — Day batch */
export const minced_pork_eggplant: Recipe = {
  "id": "minced-pork-eggplant",
  "slug": "minced-pork-eggplant",
  "titleEn": "Braised Eggplant with Minced Pork (肉末茄子)",
  "titleZh": "肉末茄子",
  "pinyin": "ròu mò qié zi",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide (China)",
  "regionZh": "全国（家常）",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Restaurants deep-fry the eggplant first so it browns fast and stays silky, then finish it in a screaming hot wok. The family version dry-fries the batons in a thin film of oil and braises them briefly in the pork sauce — far less oil, and the eggplant tastes more like eggplant.",
  "versionNoteZh": "餐厅做法是先高温油炸茄子，让它快速上色、外酥里嫩，再用猛火爆炒收汁。家常版用薄油干煎茄子条后直接下肉末酱汁小焖，油量大幅减少，茄子本味更突出。",
  "tags": [
    "home-style",
    "eggplant",
    "pork",
    "weeknight",
    "rice-friendly",
    "30-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the dish Chinese home cooks reach for when eggplants are in season and there is a small handful of ground pork in the fridge. The pork is not the point — it is seasoning that turns into a sauce: it renders, browns, and leaves behind little crumbs that cling to the soft eggplant. Every family has a version; the arguments are about how much doubanjiang and whether to add vinegar at the end.",
  "storyZh": "这是中国家常厨房里最常见的应季菜：茄子正当时，冰箱里刚好有一小团肉末。肉末不是主角，而是「提味的酱」——煸出油、炒到焦香，留下细碎的肉酥裹在软糯的茄子上。家家都有版本，争论只在豆瓣酱放多少、出锅要不要点醋。",
  "ingredients": [
    {
      "id": "mpe-eggplant",
      "nameEn": "Chinese or Japanese eggplant",
      "nameZh": "长茄子",
      "amountMetric": "2 medium (about 450 g)",
      "amountUS": "2 medium (about 1 lb)",
      "category": "produce",
      "pantry": "local",
      "note": "Long slim Asian eggplant: thin skin, few seeds, cooks fast. Globe eggplant works — cut it smaller.",
      "noteZh": "细长的亚洲茄子：皮薄、籽少、熟得快。圆茄也可以，但要切小一些。",
      "termKey": "eggplant"
    },
    {
      "id": "mpe-pork",
      "nameEn": "ground pork (20% fat)",
      "nameZh": "猪肉末（二肥八瘦）",
      "amountMetric": "150 g",
      "amountUS": "about 5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Lean mince works but the sauce will be drier; add 1 extra tsp oil.",
      "noteZh": "用瘦肉末也可以，但酱汁会偏干，需多补 1 茶匙油。",
      "termKey": "pork-mince"
    },
    {
      "id": "mpe-doubanjiang",
      "nameEn": "doubanjiang (fermented broad bean chili paste)",
      "nameZh": "豆瓣酱",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Chop the paste finely first so it melts into the oil. Substitute: 1 tbsp miso + 1/4 tsp chili flakes.",
      "noteZh": "先剁细，才能融进油里。替代：1 大勺味噌 + 1/4 茶匙辣椒碎。",
      "termKey": "doubanjiang"
    },
    {
      "id": "mpe-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "mpe-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: dry sherry.",
      "noteZh": "替代：干雪利酒。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "mpe-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "mpe-ginger",
      "nameEn": "ginger, minced",
      "nameZh": "姜末",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "mpe-scallion",
      "nameEn": "scallion greens, sliced",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "mpe-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "mpe-slurry",
      "nameEn": "cornstarch mixed with 2 tbsp water",
      "nameZh": "水淀粉（玉米淀粉 1 茶匙 + 水 2 大勺）",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "mpe-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2.5 tbsp",
      "amountUS": "2.5 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Cut the eggplant into finger-thick batons about 5 cm long. Toss with 1/2 tsp salt and let it sit 10 minutes, then pat very dry with paper towel.",
      "textZh": "茄子切成手指粗、约 5 厘米长的条。加 1/2 茶匙盐抓匀静置 10 分钟，再用厨房纸彻底吸干。",
      "zhHint": "切条杀水",
      "stateNote": {
        "visual": "Beads of water form on the cut surfaces; batons look slightly darker and bend instead of snapping",
        "visualZh": "切面渗出细密水珠；条身颜色略深，能弯不易断",
        "timeRef": "10 minutes salting",
        "timeRefZh": "盐渍 10 分钟",
        "signal": "Surface is tacky, not wet — pressing with towel leaves no moisture",
        "signalZh": "表面微黏不湿——纸巾按压不留水痕"
      },
      "tip": "Salting collapses some of the eggplant's air pockets, so it absorbs far less oil later.",
      "tipZh": "盐渍让茄子的海绵结构塌一点，之后吸油量会大幅下降。"
    },
    {
      "text": "Heat 2 tbsp oil in a wok or skillet over medium-high. Add the eggplant in one layer and fry 4–5 minutes, turning once, until the edges are golden and the flesh slumps.",
      "textZh": "锅烧热，倒 2 大勺油，中大火下茄子铺平一面煎 4–5 分钟，翻一次面，煎到边缘金黄、茄肉塌软。",
      "zhHint": "干煎上色",
      "stateNote": {
        "visual": "Pale flesh turns creamy white inside with browned edges; oil pools back in the pan",
        "visualZh": "内部由白转奶白，边缘焦黄；油被「吐」回锅里",
        "heat": "medium-high",
        "timeRef": "4–5 minutes",
        "timeRefZh": "4–5 分钟",
        "signal": "A chopstick slides through the thickest piece with no resistance",
        "signalZh": "筷子能毫无阻力地穿过最粗的一块"
      }
    },
    {
      "text": "Push the eggplant to the rim of the pan, add the last 1/2 tbsp oil and the pork. Stir and break it up over medium-high until it loses its pink color and the rendered fat runs clear, about 2 minutes.",
      "textZh": "把茄子推到锅边，补最后 1/2 大勺油，下肉末。中大火边炒边划散，2 分钟左右炒到肉色全变、逼出的油变清亮。",
      "zhHint": "煸炒肉末",
      "stateNote": {
        "visual": "Pork separates into fine crumbs, edges lightly browned, rendered fat no longer cloudy",
        "visualZh": "肉末散成细碎颗粒，边缘微焦，锅里的油由浑浊变清亮",
        "heat": "medium-high",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "The sizzling sound softens; the crumbs start to stick slightly to the pan bottom",
        "signalZh": "滋滋声变柔；肉碎开始微微粘锅底"
      }
    },
    {
      "text": "Add garlic, ginger and doubanjiang. Fry 30 seconds, pressing the paste into the oil, until the oil turns red and smells toasty.",
      "textZh": "下蒜末、姜末和豆瓣酱，炒 30 秒，用锅铲把酱压进油里，炒到油色变红、香气焦香。",
      "zhHint": "炒香豆瓣酱",
      "stateNote": {
        "visual": "Oil shifts from pale gold to glossy red; paste fragments darken but do not blacken",
        "visualZh": "油色从淡金变成红亮；酱粒颜色变深但不发黑",
        "heat": "medium",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Sharp savory-spicy aroma rises — pull it off the heat before it smells burnt",
        "signalZh": "浓郁的酱辣香窜上来——闻到糊味前立刻降火"
      }
    },
    {
      "text": "Return the eggplant to the center. Add soy sauce, Shaoxing wine, sugar and 80 ml water. Toss gently, cover, and simmer over medium-low heat 5 minutes.",
      "textZh": "把茄子拨回锅中央，加生抽、黄酒、糖和 80 毫升清水。轻轻翻匀后加盖，中小火焖 5 分钟。",
      "zhHint": "加汁焖煮",
      "stateNote": {
        "visual": "Sauce loosens into a thin reddish glaze; batons soften completely",
        "visualZh": "汤汁化成稀薄的红色酱汁；茄条完全变软",
        "heat": "medium-low",
        "timeRef": "5 minutes covered",
        "timeRefZh": "加盖焖 5 分钟",
        "signal": "Bubbles around the rim turn from rapid to lazy — most of the water has cooked off",
        "signalZh": "锅边气泡从急促变慵懒——水收得差不多了"
      }
    },
    {
      "text": "Stir the cornstarch slurry again and pour it in while stirring. Add scallion greens, toss 30 seconds until the sauce coats the eggplant, and serve hot over rice.",
      "textZh": "水淀粉再次搅匀，边搅边淋入锅中。撒葱花翻炒 30 秒，酱汁挂住茄子即可出锅，趁热浇在米饭上。",
      "zhHint": "勾芡出锅",
      "stateNote": {
        "visual": "Sauce goes from watery to glossy and clings; it no longer runs off the spoon",
        "visualZh": "汤汁由稀变亮并开始挂芡；从勺边流下时不再稀水",
        "heat": "medium",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "The spoon leaves a clean trail on the pan bottom for a second",
        "signalZh": "铲子划过锅底留下的痕迹能停留一秒"
      }
    }
  ],
  "tips": [
    "Dry the eggplant twice: once after salting, once after rinsing if you rinse the salt off. Water is the enemy of browning.",
    "Chop the doubanjiang before it hits the pan — whole beans stay raw-tasting.",
    "Add a splash of Chinkiang vinegar at the very end if the sauce tastes flat; acid wakes it up.",
    "Leftovers are better on day two: the sauce seeps in. Reheat covered with 1 tbsp water."
  ],
  "tipsZh": [
    "茄子要擦两遍干：盐渍后擦一次，若冲掉盐水挤出涩水要再擦一次。有水就上不了色。",
    "豆瓣酱下锅前先剁细——整颗豆瓣会留有生酱味。",
    "酱汁发闷时，出锅前沿锅边淋一点香醋，酸味会把它「叫醒」。",
    "隔夜更好吃：酱汁会渗进茄子。回锅时加盖补 1 大勺水。"
  ],
  "relatedSlugs": [
    "yu-xiang-eggplant",
    "mapo-tofu",
    "home-style-tofu"
  ],
  "image": "/images/recipes/hong-shao-eggplant.webp"
};
