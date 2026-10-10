import type { Recipe } from "@/lib/types";

/** Chinese-Style Borscht (Shanghai Luo Song Tang) (罗宋汤中式) — Day batch */
export const chinese_borscht_soup: Recipe = {
  "id": "chinese-borscht-soup",
  "slug": "chinese-borscht-soup",
  "titleEn": "Chinese-Style Borscht (Shanghai Luo Song Tang)",
  "titleZh": "罗宋汤中式",
  "pinyin": "luó sòng tāng",
  "cuisine": "海派家常菜",
  "cuisineEn": "Shanghai Home-Style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 75,
  "servings": 4,
  "version": "family",
  "versionNote": "The family version simmers everything in one pot with tomato paste for body; restaurant versions start from a long-simmered beef bone stock and finish with a roux-thickened base.",
  "versionNoteZh": "家常版一锅到底，靠番茄酱出浓稠度；餐厅版先用牛骨吊高汤，最后以油面糊（roux）增稠。",
  "tags": [
    "75-min",
    "soup",
    "comfort",
    "one-pot",
    "batch-cook"
  ],
  "dietary": [
    "none"
  ],
  "story": "Borscht came to Shanghai with Russian émigrés in the 1920s and got rewritten by local cooks: beets were swapped for tomatoes, sour cream for a spoon of sugar, and it became the red soup every Shanghai school cafeteria served with a slice of white bread. My grandmother called it 'foreign soup that tastes like home.'",
  "storyZh": "罗宋汤随1920年代的俄侨传入上海，被本地厨子彻底改写：甜菜根换成番茄，酸奶油换成一勺糖，成了每所上海学校食堂都配一片白面包供应的红汤。我外婆管它叫『尝起来像家的洋汤』。",
  "ingredients": [
    {
      "id": "ls-01",
      "nameEn": "beef chuck, cut into 3 cm cubes",
      "nameZh": "牛肩肉，切3厘米块",
      "pinyin": "niú jiān ròu",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Chuck has enough collagen to stay tender after long simmering; ask for 'stew beef'",
      "noteZh": "牛肩肉胶原蛋白足，久炖不柴，买时说『炖牛肉块』"
    },
    {
      "id": "ls-02",
      "nameEn": "ripe tomatoes, peeled and chopped",
      "nameZh": "熟番茄，去皮切块",
      "pinyin": "shú fān qiē",
      "amountMetric": "400 g",
      "amountUS": "3 medium (about 14 oz)",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato",
      "note": "Score an X on the base, blanch 30 seconds, then slip off the skin",
      "noteZh": "底部划十字，焯30秒后剥皮"
    },
    {
      "id": "ls-03",
      "nameEn": "tomato paste",
      "nameZh": "番茄膏",
      "pinyin": "fān qié gāo",
      "amountMetric": "45 g",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Double-concentrated paste gives the deepest colour and sweetness",
      "noteZh": "选双倍浓缩番茄膏，颜色和甜味最足"
    },
    {
      "id": "ls-04",
      "nameEn": "carrot, cut into 2 cm chunks",
      "nameZh": "胡萝卜，切2厘米块",
      "pinyin": "hú luó bo",
      "amountMetric": "150 g",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "ls-05",
      "nameEn": "yellow onion, diced",
      "nameZh": "黄洋葱，切丁",
      "pinyin": "huáng yáng cōng",
      "amountMetric": "180 g",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "onion"
    },
    {
      "id": "ls-06",
      "nameEn": "green cabbage, cut into 3 cm pieces",
      "nameZh": "圆白菜，切3厘米块",
      "pinyin": "yuán bái cài",
      "amountMetric": "250 g",
      "amountUS": "3 cups loosely packed",
      "category": "produce",
      "pantry": "local",
      "note": "Adds the sweetness Shanghai cooks use instead of beet sugar",
      "noteZh": "提供上海人代替甜菜糖的清甜味"
    },
    {
      "id": "ls-07",
      "nameEn": "potato, cut into 2 cm cubes",
      "nameZh": "土豆，切2厘米块",
      "pinyin": "tǔ dòu",
      "amountMetric": "200 g",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "note": "Starch from the potato thickens the soup naturally",
      "noteZh": "土豆淀粉能让汤自然浓稠"
    },
    {
      "id": "ls-08",
      "nameEn": "unsalted butter",
      "nameZh": "无盐黄油",
      "pinyin": "wú yán huáng yóu",
      "amountMetric": "20 g",
      "amountUS": "1½ tbsp",
      "category": "dairy",
      "pantry": "local",
      "note": "The one Russian habit Shanghai kept; use neutral oil for a dairy-free version",
      "noteZh": "上海版保留的唯一俄式习惯；不吃奶制品可换无味植物油"
    },
    {
      "id": "ls-09",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Bring 1.5 L (6 cups) water to a boil, add beef chuck, and blanch for 2 minutes. Skim the grey foam, then lift the beef out and rinse the pot.",
      "textZh": "1.5升水烧沸，下牛肩肉焯2分钟，撇净灰沫，捞出牛肉并洗净锅。",
      "zhHint": "牛肉先焯去沫",
      "stateNote": {
        "visual": "Grey-brown scum collects on the surface and the water turns cloudy",
        "visualZh": "表面浮起灰褐色浮沫，水变浑浊",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Foam stops rising and the beef surface turns from pink to grey",
        "signalZh": "浮沫不再涌起，牛肉表面由粉转灰"
      }
    },
    {
      "text": "Melt butter in the clean pot over medium heat. Add onion and carrot, and cook 5 minutes until the onion turns translucent and smells sweet.",
      "textZh": "净锅中火融化黄油，下洋葱与胡萝卜炒5分钟，至洋葱变半透明、散发甜香。",
      "zhHint": "洋葱炒软出甜",
      "stateNote": {
        "visual": "Onion edges look glassy, carrot brightens to a deeper orange",
        "visualZh": "洋葱边缘呈半透明，胡萝卜颜色变深",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "No more raw onion bite when you smell the steam",
        "signalZh": "闻蒸汽时已无生洋葱辛辣味"
      }
    },
    {
      "text": "Stir in tomato paste and cook 2 minutes until it darkens to brick red and coats the vegetables. Add chopped tomatoes and cook another 4 minutes until they collapse into a sauce.",
      "textZh": "加入番茄膏炒2分钟至颜色转砖红并裹住蔬菜，再下番茄块炒4分钟至塌软成酱。",
      "zhHint": "番茄膏炒出红油",
      "stateNote": {
        "visual": "Paste darkens and releases red-tinted oil at the pot edges",
        "visualZh": "番茄膏变深，锅边析出红色油分",
        "timeRef": "6 minutes total",
        "timeRefZh": "共 6 分钟",
        "heat": "medium",
        "signal": "Spoon dragged through the base leaves a clean trail that fills in slowly",
        "signalZh": "勺底划过锅底留下清晰痕迹，回流缓慢"
      }
    },
    {
      "text": "Return beef to the pot with 1.2 L (5 cups) hot water. Bring to a boil, then lower to medium-low, cover, and simmer 45 minutes.",
      "textZh": "牛肉回锅，加1.2升热水。大火烧沸后转中小火加盖，炖45分钟。",
      "zhHint": "小火慢炖45分钟",
      "stateNote": {
        "visual": "Surface holds small lazy bubbles, broth is reddish and clear",
        "visualZh": "表面冒细小缓泡，汤色红亮清透",
        "timeRef": "45 minutes",
        "timeRefZh": "45 分钟",
        "heat": "medium-low",
        "signal": "A fork slides into a beef cube with no resistance",
        "signalZh": "叉子插入牛肉块毫无阻力"
      }
    },
    {
      "text": "Add potato and cabbage, and simmer uncovered 15 minutes more, until potato edges soften and cabbage turns tender but not mushy.",
      "textZh": "下土豆和圆白菜，不加盖再煮15分钟，至土豆边缘软化、圆白菜软而不烂。",
      "zhHint": "土豆白菜后放",
      "stateNote": {
        "visual": "Potato corners round off, cabbage leaves go from opaque white to slightly translucent",
        "visualZh": "土豆棱角变圆，圆白菜由不透明白转为微透明",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-low",
        "signal": "Potato yields to a spoon with gentle pressure but keeps its shape",
        "signalZh": "勺子轻压土豆即陷，但仍保持块状"
      }
    },
    {
      "text": "Season with white pepper and salt to taste. Ladle into bowls — thick, brick-red, with a slick of red oil on top.",
      "textZh": "以白胡椒粉和盐调味，盛碗——浓稠砖红，表面浮一层红油。",
      "zhHint": "白胡椒提味",
      "stateNote": {
        "visual": "Soup coats the back of a spoon and small red oil droplets float on top",
        "visualZh": "汤汁能挂住勺背，表面漂着细小红油珠",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Taste is sweet-tart with a warm pepper finish, no raw tomato sourness",
        "signalZh": "口感酸甜、尾韵带胡椒暖意，无生番茄的尖锐酸味"
      }
    }
  ],
  "tips": [
    "Make it a day ahead — the flavour deepens overnight and the fat cap is easy to lift off.",
    "For a thicker, restaurant-style body, mash one potato cube against the pot wall and stir it back in.",
    "Serve with a slice of white bread like a Shanghai cafeteria, or over steamed rice."
  ],
  "tipsZh": [
    "提前一天做更入味，冷藏后表面的浮油也更容易撇掉。",
    "想要餐厅般浓稠，取一块土豆在锅壁压成泥再拌回汤里。",
    "像上海食堂那样配一片白面包，或浇在米饭上吃。"
  ],
  "relatedSlugs": [
    "tomato-beef-soup",
    "sweet-corn-pork-bone-soup"
  ],
  "image": "/images/recipes/tomato-hot-pot-base.webp"
};
