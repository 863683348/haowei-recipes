import type { Recipe } from "@/lib/types";

/** Beijing Sugar-Glazed Fried Dough (糖油饼) — Day batch */
export const sugar_glazed_fried_dough: Recipe = {
  "id": "sugar-glazed-fried-dough",
  "slug": "sugar-glazed-fried-dough",
  "titleEn": "Beijing Sugar-Glazed Fried Dough",
  "titleZh": "糖油饼",
  "pinyin": "táng yóu bǐng",
  "cuisine": "京味小吃",
  "cuisineEn": "Beijing",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version uses a single enriched dough and a shallow pan-fry-shallow-fry, so the sugar layer stays soft-chewy; the shop version fries in deep tallow at a higher temperature and the sugar shell shatters when you bite it.",
  "versionNoteZh": "家常版用一份加蛋面团，油量略少、油温略低，糖层保持软糯；铺子版大油高温炸，糖壳咬下去会碎裂。",
  "tags": [
    "90-min",
    "breakfast",
    "street-food",
    "fried",
    "dough"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Beijing hutong breakfast windows have two things going at once: a vat of soy milk and a wok of oil. The sugar oil cake is the one the queue waits for - a plain dough disc with a spoonful of brown sugar paste smeared on top, fried until the sugar runs and darkens. The old men eat it standing up, folded round a youtiao, and insist the burnt-sugar edge is the best part.",
  "storyZh": "北京胡同早点窗口永远同时开着两样：一桶豆浆、一锅油。糖油饼是排队的人真正等的东西——一张素面饼坯，抹一勺红糖面糊，下锅炸到糖化开、颜色转深。老爷子们站着吃，裹一根油条，非说那圈焦糖边才是精髓。",
  "ingredients": [
    {
      "id": "sgfd-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "300 g",
      "amountUS": "2 1/2 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Plain flour is right here; bread flour makes the cake too chewy",
      "noteZh": "普通中粉正好；高筋粉会让饼太韧"
    },
    {
      "id": "sgfd-02",
      "nameEn": "granulated sugar",
      "nameZh": "细砂糖",
      "pinyin": "xì shā táng",
      "amountMetric": "30 g",
      "amountUS": "2 1/2 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Goes in the dough; it feeds the yeast and helps the crust brown",
      "noteZh": "拌入面团：供酵母发酵并帮助上色"
    },
    {
      "id": "sgfd-03",
      "nameEn": "instant dry yeast",
      "nameZh": "即发酵母",
      "pinyin": "jí fā jiào mǔ",
      "amountMetric": "4 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Instant yeast can go straight into the flour; if using active dry, proof it in the warm water first",
      "noteZh": "即发酵母可直接与面粉混合；若用活性干酵母需先用温水活化"
    },
    {
      "id": "sgfd-04",
      "nameEn": "warm water, about 40 C",
      "nameZh": "温水，约40℃",
      "pinyin": "wēn shuǐ",
      "amountMetric": "170 ml",
      "amountUS": "3/4 cup",
      "category": "other",
      "pantry": "local",
      "note": "Should feel like a warm bath on your wrist, not hot - hot water kills the yeast",
      "noteZh": "滴在手腕上如温水澡般不烫——过热会烫死酵母"
    },
    {
      "id": "sgfd-05",
      "nameEn": "large egg",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "1",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "note": "The egg is what makes this a soft cake rather than a hard cracker",
      "noteZh": "鸡蛋是让饼柔软而非发硬的关键",
      "termKey": "egg"
    },
    {
      "id": "sgfd-06",
      "nameEn": "dark brown sugar, for the topping",
      "nameZh": "红糖，糖层用",
      "pinyin": "hóng táng",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp packed",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Dark brown sugar or muscovado gives the proper molasses edge; light brown is fine but blander",
      "noteZh": "深黑糖/黑蔗糖才有那股焦糖蜜香；浅黄糖也可用但味道偏平"
    },
    {
      "id": "sgfd-07",
      "nameEn": "fine sea salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "4 g",
      "amountUS": "3/4 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Salt in a sweet dough is not optional - without it the cake tastes flat",
      "noteZh": "甜面团里也必须放盐，否则味道发呆"
    },
    {
      "id": "sgfd-08",
      "nameEn": "neutral oil, for frying",
      "nameZh": "食用油，炸制用",
      "pinyin": "shí yòng yóu",
      "amountMetric": "400 ml",
      "amountUS": "1 2/3 cups",
      "category": "other",
      "pantry": "local",
      "note": "Peanut, canola or sunflower; you need enough for the cake to float half-submerged",
      "noteZh": "花生油/芥花油/葵花油均可；油量要能让饼半浮起来"
    }
  ],
  "steps": [
    {
      "text": "Mix the flour, granulated sugar, yeast and salt, then add the egg and warm water and stir to a shaggy mass. Knead 8 minutes on a lightly oiled surface until smooth and elastic.",
      "textZh": "面粉、细砂糖、酵母、盐混合，加鸡蛋与温水搅成絮状，在抹油台面上揉8分钟至光滑有弹性。",
      "zhHint": "揉面8分钟至光滑",
      "stateNote": {
        "visual": "Dough pulls cleanly off the counter, surface is satiny, and it springs back slowly when poked",
        "visualZh": "面团能干净离开台面，表面柔滑，按压后缓慢回弹",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "low",
        "signal": "Stretch a small piece thin enough to see light through it without it tearing - that is the windowpane test",
        "signalZh": "揪小块能拉出透光薄膜而不断裂——即所谓「手套膜」"
      },
      "tip": "An oiled surface instead of floured keeps the dough from drying out and toughening.",
      "tipZh": "台面抹油而不是撒粉，可避免面团变干变硬。"
    },
    {
      "text": "Cover and leave to rise in a warm spot until doubled, about 60 minutes.",
      "textZh": "盖好，置于温暖处发酵至两倍大，约60分钟。",
      "zhHint": "一发至两倍大",
      "stateNote": {
        "visual": "Dough has domed and roughly doubled; a floured finger pressed 2 cm deep leaves a dent that fills back slowly",
        "visualZh": "面团鼓起约两倍；沾粉手指按压2厘米，凹痕缓慢回弹",
        "timeRef": "60 minutes",
        "timeRefZh": "60 分钟",
        "heat": "low",
        "signal": "The dent does not spring all the way back - if it snaps back instantly it is under-proofed",
        "signalZh": "凹痕不会完全弹回——若立刻弹平说明发酵不足"
      }
    },
    {
      "text": "Mix the brown sugar with 1 tablespoon of flour and 1 teaspoon of water to a thick, spreadable paste. Divide the dough into 4 balls and roll each into a 12 cm disc.",
      "textZh": "红糖加1大勺面粉与1小勺水调成可涂抹的厚糊；面团分4份，各擀成12厘米圆片。",
      "zhHint": "糖糊加面粉防流",
      "stateNote": {
        "visual": "Sugar paste is the consistency of soft peanut butter and holds a ridge when you drag a spoon through it",
        "visualZh": "糖糊如软花生酱般稠厚，勺子划过能留下棱线",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "low",
        "signal": "It should not run off a tilted spoon - runny sugar burns in the oil before the dough cooks",
        "signalZh": "倾斜勺子糖糊不流下——过稀的糖会在饼熟前就炸焦"
      }
    },
    {
      "text": "Spread a thin even layer of brown sugar paste over the top of each disc, leaving a 1 cm bare rim, then cut two short slashes across the centre.",
      "textZh": "每张圆片表面薄薄均匀抹一层红糖糊，留出1厘米空白边，中间划两道短口。",
      "zhHint": "抹糖留边划口",
      "stateNote": {
        "visual": "Sugar layer is dull brown and evenly thick, no bare patches of dough showing through the middle",
        "visualZh": "糖层呈哑光褐色、厚薄均匀，中间没有露出面皮的空白",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "You can still see the pale dough rim framing the whole circle",
        "signalZh": "整圈仍能看到浅色面皮边缘框住糖层"
      },
      "tip": "The slashes stop the cake from ballooning into a dome in the oil.",
      "tipZh": "划口是为了防止饼在油里鼓成球。"
    },
    {
      "text": "Heat the oil to about 170 C and slide in one cake sugar-side down. Fry 90 seconds, then flip and fry another 90 seconds, spooning hot oil over the top as it cooks.",
      "textZh": "油烧至约170℃，饼坯糖面朝下滑入锅。炸90秒，翻面再炸90秒，边炸边用勺舀热油淋表面。",
      "zhHint": "糖面先下，170℃",
      "stateNote": {
        "visual": "Cake puffs at once, the sugar side darkens to deep amber and the underside is pale gold; bubbles stream steadily from the rim",
        "visualZh": "饼立刻鼓起，糖面转为深琥珀色，底面浅金，锅边气泡持续匀密",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-high",
        "signal": "Drop a scrap of dough in - it should rise to the surface in 2 seconds and sizzle briskly, not violently",
        "signalZh": "丢一小块面团试油温——2秒内浮起、急促作响但不狂溅即为合适"
      },
      "tip": "Too hot and the sugar burns before the dough sets; too cool and the cake drinks oil and goes greasy.",
      "tipZh": "油温过高糖先焦而饼未熟；过低则饼吸油发腻。"
    },
    {
      "text": "Lift out, stand on edge in a rack or against the pan wall for 30 seconds to drain, and serve hot while the sugar shell is still crisp.",
      "textZh": "捞出，竖立架在网架或靠锅壁沥油30秒，趁糖壳还脆热食。",
      "zhHint": "沥油趁热吃",
      "stateNote": {
        "visual": "Sugar side is glossy deep amber with darker freckles at the edge; the cut side shows an open, honeycombed crumb",
        "visualZh": "糖面油亮深琥珀、边缘有深色斑点；切开侧面呈蜂窝状疏松组织",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low",
        "signal": "Tap the sugar side with a spoon - it should sound hollow and faintly crack",
        "signalZh": "用勺轻敲糖面——应发出中空声并微微开裂"
      }
    }
  ],
  "tips": [
    "Fry sugar-side down first so the caramel sets against the hot oil instead of sliding off into the pan.",
    "Keep the oil at a steady 170 C; frying two at a time drops the temperature and you will get pale, greasy cakes.",
    "Best eaten within ten minutes. Reheat in a dry pan over medium heat, sugar-side down, to re-crisp the shell."
  ],
  "tipsZh": [
    "先糖面朝下入锅，让焦糖在热油中定型，而不是滑落到锅里。",
    "油温稳定在170℃；同时下两个会降温，饼会发白发腻。",
    "十分钟内吃最好。回热用干锅中小火糖面朝下烙，可恢复脆壳。"
  ],
  "relatedSlugs": [
    "scallion-pancakes",
    "ji-dan-guan-bing",
    "brown-sugar-mantou"
  ],
  "image": "/images/recipes/scallion-pancakes.webp"
};
