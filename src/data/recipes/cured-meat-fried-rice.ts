import type { Recipe } from "@/lib/types";

/** Cured Meat Fried Rice (腊味炒饭) — Day batch */
export const cured_meat_fried_rice: Recipe = {
  "id": "cured-meat-fried-rice",
  "slug": "cured-meat-fried-rice",
  "titleEn": "Cured Meat Fried Rice",
  "titleZh": "腊味炒饭",
  "pinyin": "là wèi chǎo fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Home cooks steam or microwave the sausage for 5 minutes first to render fat and soften it, then dice. Restaurant kitchens dice it raw and let the wok do both jobs, which gives a chewier, more caramelised cube but needs heat a home burner cannot reach.",
  "versionNoteZh": "家常先把腊肠蒸或微波5分钟出油变软再切丁；餐厅直接生切下锅，让猛火同时完成出油与焦化，得到更弹更焦香的丁，但需要家用灶达不到的火力。",
  "tags": [
    "30-min",
    "fried-rice",
    "cantonese",
    "lap-cheong",
    "winter"
  ],
  "dietary": [
    "none"
  ],
  "story": "Lap cheong is winter in a sausage: pork and fat, sugar and rose-scented liquor, air-dried until it goes firm and translucent at the edges. In fried rice you barely need to season it — the sausage renders sweet, smoky orange fat that coats every grain, and anything you add on top of that is just noise.",
  "storyZh": "腊肠就是『冬天』这根香肠：猪肉与肥膘、糖与玫瑰露酒，风干到紧实、边缘微透。做炒饭几乎不用调味——腊肠会逼出甜香带烟熏的橙色油脂裹住每粒米，你再往上加什么都只是杂音。",
  "ingredients": [
    {
      "id": "cmf-01",
      "nameEn": "cooked rice, cold and day-old",
      "nameZh": "米饭，隔夜冷饭",
      "pinyin": "lěng fàn",
      "amountMetric": "450 g",
      "amountUS": "3 cups cooked",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "cmf-02",
      "nameEn": "Chinese sausage (lap cheong)",
      "nameZh": "腊肠",
      "pinyin": "là cháng",
      "amountMetric": "120 g",
      "amountUS": "2 links",
      "category": "protein",
      "pantry": "asian",
      "note": "Vacuum-packed lap cheong is sold year-round at Chinese grocers; Spanish chorizo is the closest supermarket substitute",
      "noteZh": "华人超市全年有真空装腊肠；最接近的西超替代是西班牙辣肠 chorizo"
    },
    {
      "id": "cmf-03",
      "nameEn": "large eggs, beaten",
      "nameZh": "鸡蛋，打散",
      "pinyin": "jī dàn",
      "amountMetric": "100 g",
      "amountUS": "2 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "cmf-04",
      "nameEn": "frozen green peas",
      "nameZh": "冷冻青豆",
      "pinyin": "qīng dòu",
      "amountMetric": "70 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cmf-05",
      "nameEn": "carrot, small dice",
      "nameZh": "胡萝卜，切小丁",
      "pinyin": "hú luó bo",
      "amountMetric": "60 g",
      "amountUS": "⅓ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "cmf-06",
      "nameEn": "napa cabbage, shredded",
      "nameZh": "大白菜，切丝",
      "pinyin": "dà bái cài",
      "amountMetric": "120 g",
      "amountUS": "1½ cups",
      "category": "produce",
      "pantry": "asian",
      "note": "Adds sweetness and keeps the dish from feeling too rich",
      "noteZh": "增加甜味，也让整道菜不至于太腻",
      "termKey": "napa-cabbage"
    },
    {
      "id": "cmf-07",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "小葱，切葱花",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cmf-08",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "The sausage is salty and sweet — season carefully at the end",
      "noteZh": "腊肠本身咸甜，最后调味要谨慎",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cmf-09",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "cmf-10",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "You may need less — the sausage renders a lot of fat",
      "noteZh": "可能用不了这么多——腊肠本身会出很多油"
    }
  ],
  "steps": [
    {
      "text": "Steam or microwave the sausages on high for 4–5 minutes until just firm and slightly glossy. Cool 2 minutes, then slice into 5 mm rounds and dice.",
      "textZh": "腊肠蒸或微波高火4–5分钟至刚变紧实微亮，稍凉2分钟后切5毫米圆片再切丁。",
      "zhHint": "腊肠蒸软切丁",
      "stateNote": {
        "visual": "The sausage has plumped slightly and the fat inside has turned from opaque white to translucent; slices hold their shape",
        "visualZh": "腊肠略微鼓起，内部肥肉由不透明乳白转为半透明；切片不散",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "A knife goes through cleanly without the casing tearing away from the filling",
        "signalZh": "刀切下去利落，肠衣不会和肉馅分离"
      },
      "tip": "Steaming first softens the sausage so it dices cleanly and renders its fat faster in the wok.",
      "tipZh": "先蒸软，腊肠才好切丁，下锅出油也更快。"
    },
    {
      "text": "Heat a dry wok over medium. Add the sausage dice and render for 2 minutes, stirring, until fat runs out and the edges caramelise. Lift out the dice, keep the orange fat.",
      "textZh": "空锅中火烧热，下腊肠丁煸炒2分钟至出油、边缘焦化。捞出肠丁，橙色油脂留在锅中。",
      "zhHint": "煸出腊肠油",
      "stateNote": {
        "visual": "A pool of clear orange fat has collected and the dice have dark mahogany edges; the fat smells sweet and smoky",
        "visualZh": "锅底积起一层清亮橙色油脂，肠丁边缘转深红木色；油脂带甜香烟熏味",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "The dice sizzle steadily and the fat is visibly bubbling around them",
        "signalZh": "肠丁持续作响，周围油脂明显冒泡"
      }
    },
    {
      "text": "Use the rendered fat to scramble the eggs over high heat for 20 seconds. Remove and set aside with the sausage.",
      "textZh": "用锅中腊肠油大火炒蛋20秒，盛出与腊肠放一起。",
      "zhHint": "腊肠油炒蛋",
      "stateNote": {
        "visual": "Egg is puffed and pale gold from the orange fat; still slightly glossy, no browning",
        "visualZh": "蛋液蓬松并被橙油染成浅金；仍带光泽，无焦黄",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "It lifts out in one soft mass and the wok bottom is left only lightly filmed",
        "signalZh": "整块软嫩地铲出，锅底只留薄薄一层油膜"
      }
    },
    {
      "text": "Add carrot and peas to the wok and stir-fry 90 seconds over high heat, then add the napa cabbage for 45 seconds.",
      "textZh": "锅中下胡萝卜丁与青豆大火炒90秒，再下大白菜丝炒45秒。",
      "zhHint": "炒蔬菜",
      "stateNote": {
        "visual": "Carrot is glossy orange, peas bright green, cabbage has wilted to translucent pale yellow with no water in the wok",
        "visualZh": "胡萝卜油亮橙红，青豆鲜绿，白菜塌软成半透明浅黄，锅底不积水",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "The cabbage has released its smell but not its liquid — it should wilt, not stew",
        "signalZh": "白菜出了香味但没出水——是塌软不是煮烂"
      }
    },
    {
      "text": "Add the cold rice and press-and-fold 2–3 minutes until the grains are separate and every one is coated in orange fat.",
      "textZh": "下冷饭压散翻炒2–3分钟，至米粒散开、每粒都裹上橙色油脂。",
      "zhHint": "炒饭上色",
      "stateNote": {
        "visual": "Rice has turned a warm amber-orange and looks glossy but dry; grains move independently",
        "visualZh": "米饭转为暖琥珀橙色，油亮但干爽；粒粒独立流动",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "The wok crackles and the smell is smoky-sweet rather than steamy",
        "signalZh": "锅里爆响，气味是烟熏甜香而非水汽味"
      }
    },
    {
      "text": "Return the sausage and egg, add white pepper and taste before adding soy sauce. Toss 30 seconds, then off the heat fold in the scallion.",
      "textZh": "倒回腊肠与鸡蛋，撒白胡椒，尝过再决定要不要加生抽。翻炒30秒，关火拌入葱花。",
      "zhHint": "合炒收尾",
      "stateNote": {
        "visual": "Amber grains studded with mahogany sausage cubes, pale egg and green scallion; no free oil pools on the plate",
        "visualZh": "琥珀色米粒间嵌着红木色腊肠丁、浅色蛋块与翠绿葱花；盘底不积油",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Each spoonful tastes sweet, smoky and salty at once, and the sausage is chewy but not hard",
        "signalZh": "每勺同时有甜、烟熏与咸味，腊肠弹牙但不发硬"
      }
    }
  ],
  "tips": [
    "Render the sausage in a dry wok first and use its fat to fry everything else. That fat is the flavour of the dish.",
    "Taste before adding soy sauce. Lap cheong is already salted and sugared; oversalting is the usual mistake.",
    "Add cabbage or another mild green. Without it, cured meat fried rice is very rich."
  ],
  "tipsZh": [
    "先用空锅把腊肠的油煸出来，再用这油炒其他料。那层油就是这道菜的味道。",
    "加酱油前先尝。腊肠本身咸甜俱全，最常见的问题就是过咸。",
    "一定要配白菜之类清淡蔬菜。否则腊味炒饭会非常腻。"
  ],
  "relatedSlugs": [
    "lap-cheong-claypot-rice",
    "egg-fried-rice"
  ],
  "image": "/images/recipes/lap-cheong-claypot-rice.webp"
};
