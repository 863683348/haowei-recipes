import type { Recipe } from "@/lib/types";

/** Chinese Tea Eggs (茶叶蛋) — Day batch */
export const chinese_tea_eggs: Recipe = {
  "id": "chinese-tea-eggs",
  "slug": "chinese-tea-eggs",
  "titleEn": "Chinese Tea Eggs",
  "titleZh": "茶叶蛋",
  "pinyin": "chá yè dàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Zhejiang",
  "regionZh": "浙江",
  "difficulty": "easy",
  "timeMin": 60,
  "servings": 4,
  "version": "family",
  "versionNote": "Tea eggs are built on black tea as the dominant aromatic, cracked so the brew seeps in as a marbled pattern and steeped for hours; soy-braised eggs are simmered in a savoury master stock where soy leads and tea, if used at all, is only for colour. The two look similar in the shell and taste nothing alike.",
  "versionNoteZh": "茶叶蛋以红茶为主导香气，蛋壳敲裂纹让卤汁渗成大理石纹，重长时间浸泡；卤蛋以酱油为主的卤水煮制，茶若有也只是上色。两者带壳时很像，味道完全不同。",
  "tags": [
    "60-min",
    "breakfast",
    "eggs",
    "snack",
    "make-ahead",
    "beginner"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every convenience store in China keeps a pot of tea eggs on the counter, and every family has a jar of them steeping in the fridge. Mine comes from a roadside stall outside Hangzhou where the woman tapped each egg with the back of a spoon until the shell crazed like crackle glaze, then told me the eggs are not for today - they are for tomorrow, and today you eat yesterday's.",
  "storyZh": "中国每家便利店柜台上都摆着一锅茶叶蛋，家家户户冰箱里也都泡着一罐。我的做法来自杭州城外一个路边摊：摊主用勺背把每颗蛋敲出细密裂纹，像冰裂纹釉，然后告诉我——今天的蛋不是今天吃的，是明天的；今天吃昨天的。",
  "ingredients": [
    {
      "id": "cte-01",
      "nameEn": "large eggs, at room temperature",
      "nameZh": "鸡蛋，室温",
      "pinyin": "jī dàn",
      "amountMetric": "6",
      "amountUS": "6 large",
      "category": "protein",
      "pantry": "local",
      "note": "Room-temperature eggs are far less likely to crack in the boiling water",
      "noteZh": "室温鸡蛋下沸水更不容易裂开",
      "termKey": "egg"
    },
    {
      "id": "cte-02",
      "nameEn": "black tea leaves",
      "nameZh": "红茶茶叶",
      "pinyin": "hóng chá",
      "amountMetric": "8 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "A cheap strong black tea is ideal - Keemun, Assam or plain English breakfast bags; do not use anything smoky or floral",
      "noteZh": "用便宜浓烈的红茶最合适——祁门、阿萨姆或普通早餐茶包；不要用烟熏或花香调的",
      "termKey": "black-tea"
    },
    {
      "id": "cte-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "60 ml",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cte-04",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "This is mostly for the deep mahogany colour on the shell and white",
      "noteZh": "主要用于给蛋壳与蛋白上深褐色",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "cte-05",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "2 pods",
      "amountUS": "2 pods",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "cte-06",
      "nameEn": "cassia bark",
      "nameZh": "桂皮",
      "pinyin": "guì pí",
      "amountMetric": "1 stick",
      "amountUS": "1 stick",
      "category": "spice",
      "pantry": "asian",
      "note": "Cassia, not true cinnamon - it is what Chinese braises use and it stands up to long simmering",
      "noteZh": "用桂皮不是肉桂——中式卤味用的是它，久煮不散味",
      "termKey": "cinnamon"
    },
    {
      "id": "cte-07",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "pinyin": "wǔ xiāng fěn",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "cte-08",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rounds out the salt and tea; without it the brine tastes harsh",
      "noteZh": "调和咸味与茶涩；没有它卤汁会发冲",
      "termKey": "rock-sugar"
    },
    {
      "id": "cte-09",
      "nameEn": "fine sea salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "6 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "cte-10",
      "nameEn": "water",
      "nameZh": "水",
      "pinyin": "shuǐ",
      "amountMetric": "800 ml",
      "amountUS": "3 1/2 cups",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Lower the eggs into boiling water and cook 8 minutes at a steady simmer, then transfer straight to a bowl of ice water.",
      "textZh": "鸡蛋放入沸水，稳定微沸煮8分钟，立刻捞出投入冰水。",
      "zhHint": "煮8分钟过冰水",
      "stateNote": {
        "visual": "Eggs spin slowly in the simmering water rather than banging around; the water stays at small steady bubbles",
        "visualZh": "鸡蛋在水中缓慢转动而非剧烈碰撞；水面保持细小稳定气泡",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium",
        "signal": "Spin one and it stops upright - that is a fully set yolk",
        "signalZh": "转一颗蛋，能立住不倒——说明蛋黄已完全凝固"
      },
      "tip": "Ice water is not optional. It stops the cooking and contracts the egg so the shell releases cleanly.",
      "tipZh": "冰水不能省。它终止余温加热，并让蛋收缩、好剥壳。"
    },
    {
      "text": "Tap each cooled egg all over with the back of a spoon until the shell is finely crazed like crackle glaze - the membrane must stay intact.",
      "textZh": "冷却的蛋用勺背周身轻敲，敲出细密冰裂纹——注意膜不能破。",
      "zhHint": "敲出冰裂纹不破膜",
      "stateNote": {
        "visual": "The whole shell is covered in a fine web of hairline cracks with no flakes missing and no white showing through",
        "visualZh": "整个蛋壳布满细如发丝的裂纹网，没有掉壳碎片、也没露出蛋白",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Press gently - the shell gives slightly but the egg still feels whole and solid",
        "signalZh": "轻按——蛋壳略有下陷但整颗蛋仍是完整结实的"
      },
      "tip": "More cracks means more marbling. Fewer cracks means a plainer egg. It is entirely your call.",
      "tipZh": "裂纹越多花纹越密，裂纹越少蛋白越素，全看个人喜好。"
    },
    {
      "text": "Bring the water, tea, both soy sauces, star anise, cassia, five-spice, rock sugar and salt to a boil, then lower the heat and simmer 10 minutes to draw out the aromatics.",
      "textZh": "水、红茶、生抽、老抽、八角、桂皮、五香粉、冰糖与盐煮开，转小火煮10分钟逼出香料味。",
      "zhHint": "卤汁先煮10分钟",
      "stateNote": {
        "visual": "Liquid turns opaque deep brown; tea leaves have unfurled fully and the spice pods bob at the surface",
        "visualZh": "汤色转为不透明深褐；茶叶完全舒展，香料浮在表面",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "The kitchen smells of tea and anise before it smells of soy - if soy leads, add a splash more water",
        "signalZh": "先闻到茶香与八角香再闻到酱味——若酱味抢先，就再加点水"
      }
    },
    {
      "text": "Add the cracked eggs, making sure they are fully submerged, and simmer gently for 20 minutes. Give the pot a shake every 5 minutes rather than stirring.",
      "textZh": "放入敲好裂纹的鸡蛋，确保完全浸没，小火煮20分钟；每5分钟晃锅一次而不是搅拌。",
      "zhHint": "小火卤20分钟",
      "stateNote": {
        "visual": "Shells pick up a pale tan stain within minutes and darken steadily; the liquid barely moves",
        "visualZh": "蛋壳几分钟内染上浅褐色并持续加深；卤汁几乎不翻动",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "low",
        "signal": "Lift one out with a spoon - the shell should be an even light brown all over, not patchy",
        "signalZh": "用勺捞起一颗——蛋壳应通体均匀浅褐，不能花一块白一块"
      },
      "tip": "Stirring with a spoon knocks the shells off. Shake the pot instead.",
      "tipZh": "用勺搅拌会把蛋壳搅掉，改晃锅。"
    },
    {
      "text": "Turn off the heat and leave the eggs in the brine, covered, at room temperature for 2 hours, then refrigerate overnight. They are ready the next day and better on day two.",
      "textZh": "关火，蛋留卤汁中加盖室温静置2小时，再连卤汁冷藏过夜。第二天即可食用，第二天味道更好。",
      "zhHint": "浸泡过夜才入味",
      "stateNote": {
        "visual": "Brine has darkened to near-black; the shells are deep mahogany and faintly shiny",
        "visualZh": "卤汁变为近黑色；蛋壳呈深红褐色并微微发亮",
        "timeRef": "8 hours or overnight",
        "timeRefZh": "8 小时或过夜",
        "heat": "low",
        "signal": "Peel one - the white should be clouded with a brown marbled web reaching about halfway to the yolk",
        "signalZh": "剥开一颗——蛋白应有褐色大理石纹路，渗到约一半深度"
      }
    },
    {
      "text": "Peel under running water, splitting the shell along the cracks, and serve at room temperature or gently reheated in the brine.",
      "textZh": "在水龙头下剥壳，顺着裂纹掰开，室温食用或放回卤汁中小火温热。",
      "zhHint": "顺裂纹水冲剥壳",
      "stateNote": {
        "visual": "The peeled white is cream with a fine brown marbled web; the yolk is fully set, grey-rimmed and dry-crumbly",
        "visualZh": "剥出的蛋白为米白底带细密褐色纹路；蛋黄完全凝固、边缘灰绿、质地干松",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "The yolk should be dry and powdery, not creamy - a glossy yolk means it was not cooked long enough",
        "signalZh": "蛋黄应干松带粉感而非湿润——蛋黄发亮说明煮的时间不够"
      }
    }
  ],
  "tips": [
    "Crack the shell finely and keep the membrane whole - that is what makes the marbling instead of a blotchy stain.",
    "Tea eggs are a next-day food. Eating one an hour after cooking will disappoint you.",
    "Keep the strained brine in the fridge; it freezes well and gets better every time you reuse it."
  ],
  "tipsZh": [
    "蛋壳要敲得细而膜不破——这才是出大理石纹而不是斑块的原因。",
    "茶叶蛋是隔夜的食物。煮好一小时就吃一定会失望。",
    "滤过的卤汁冷藏保存，冷冻也行，每次复用味道都更好。"
  ],
  "relatedSlugs": [
    "braised-eggs-luwei",
    "steamed-egg-custard",
    "soy-milk-and-youtiao"
  ],
  "image": "/images/recipes/braised-eggs-luwei.webp"
};
