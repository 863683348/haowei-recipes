import type { Recipe } from "@/lib/types";

/** Bobo Chicken | Sichuan Bobo Ji, Cold Skewers in Sesame Chili Oil (钵钵鸡) — Day batch */
export const bobo_chicken: Recipe = {
  "id": "bobo-chicken",
  "slug": "bobo-chicken",
  "titleEn": "Bobo Chicken | Sichuan Bobo Ji, Cold Skewers in Sesame Chili Oil",
  "titleZh": "钵钵鸡",
  "pinyin": "bō bō jī",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version poaches the chicken gently and uses a jarred chili oil base; street stalls keep a big clay pot of seasoned broth and dip skewers to order.",
  "versionNoteZh": "家庭版用小火浸熟鸡肉、以现成红油打底；街边摊则备一大钵调味汤底，随取随浸。",
  "tags": [
    "sichuan",
    "cold-dish",
    "skewers",
    "make-ahead",
    "numbing-spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "Bobo ji comes from Leshan, Sichuan. The name refers to the clay bowl ('bo') the skewers are soaked in. Everything is cooked ahead and served at room temperature, which makes it one of the most practical Sichuan dishes for a hot day or a party table — you build the flavor bowl once and let it do the work.",
  "storyZh": "钵钵鸡源自四川乐山，名字来自浸串的陶钵。食材提前煮好、放凉上桌，是川菜里最适合夏天或宴客的一道——味碟调一次就能反复用，越浸越入味。",
  "ingredients": [
    {
      "id": "bc-01",
      "nameEn": "boneless chicken thighs",
      "nameZh": "去骨鸡腿肉",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "bc-02",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "20 g",
      "amountUS": "1 knob",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bc-03",
      "nameEn": "scallion",
      "nameZh": "葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "bc-04",
      "nameEn": "Sichuan peppercorn",
      "nameZh": "花椒",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "bc-05",
      "nameEn": "chili oil with sediment",
      "nameZh": "红油（带辣椒面）",
      "amountMetric": "80 ml",
      "amountUS": "1/3 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-oil"
    },
    {
      "id": "bc-06",
      "nameEn": "Chinese sesame paste",
      "nameZh": "芝麻酱",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-paste",
      "note": "Thin it with warm water, never cold — cold water makes it seize.",
      "noteZh": "必须用温水澥开，冷水会让芝麻酱返生结块。"
    },
    {
      "id": "bc-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bc-08",
      "nameEn": "Chinkiang vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "bc-09",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    },
    {
      "id": "bc-10",
      "nameEn": "toasted sesame seeds",
      "nameZh": "熟白芝麻",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "other",
      "pantry": "local",
      "termKey": "sesame-seeds"
    },
    {
      "id": "bc-11",
      "nameEn": "cucumber, cut in batons",
      "nameZh": "黄瓜条",
      "amountMetric": "1 piece",
      "amountUS": "1 piece",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Put the chicken thighs in a pot with cold water, ginger, scallion and Sichuan peppercorn. Bring it just to a bare simmer.",
      "textZh": "鸡腿肉冷水下锅，加姜、葱、花椒，煮至将沸未沸。",
      "stateNote": {
        "visual": "Small bubbles cling to the pot wall; the surface has not yet broken into a rolling boil.",
        "visualZh": "锅壁挂满小气泡，水面尚未翻滚。",
        "signal": "Tiny bubbles along the edge, no big rolling boil",
        "signalZh": "边缘起小泡，不翻大滚",
        "timeRef": "about 6-8 minutes over medium heat",
        "timeRefZh": "中火约 6-8 分钟",
        "heat": "medium"
      },
      "tip": "Starting in cold water draws out the blood foam for a cleaner broth."
    },
    {
      "text": "Cover, turn the heat to the lowest setting and poach for 12 minutes, then turn off the heat and let it sit covered for another 10 minutes.",
      "textZh": "盖盖转最小火浸煮 12 分钟，关火后再焖 10 分钟。",
      "stateNote": {
        "visual": "The liquid barely trembles; the thickest part of the thigh feels firm and springs back when pressed.",
        "visualZh": "汤汁几乎不动；鸡腿最厚处按下去有弹性回弹。",
        "signal": "Juices run clear when pierced with a skewer",
        "signalZh": "竹签扎入无血水渗出",
        "timeRef": "12 minutes poach + 10 minutes rest",
        "timeRefZh": "浸 12 分钟 + 焖 10 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Transfer the chicken to a bowl of ice water for 5 minutes, then drain and slice into thin pieces.",
      "textZh": "捞出放入冰水浸 5 分钟，沥干后切薄片。",
      "stateNote": {
        "visual": "The skin turns taut and slightly translucent; the meat slices cleanly without shredding.",
        "visualZh": "鸡皮收紧略透亮，肉切时不散不碎。",
        "signal": "Skin feels tight and springy to the touch",
        "signalZh": "鸡皮摸起来紧实弹手",
        "timeRef": "5 minutes in ice water",
        "timeRefZh": "冰水 5 分钟",
        "heat": "low"
      },
      "tip": "Ice water is what gives bobo ji its snappy skin — do not skip it."
    },
    {
      "text": "In a large bowl, whisk the sesame paste with 3 tbsp warm water until it loosens into a pourable cream, then add soy sauce, vinegar and rock sugar and stir until the sugar dissolves.",
      "textZh": "大碗中先用 3 汤匙温水把芝麻酱澥成可流动的糊，再加生抽、香醋、冰糖搅至糖化。",
      "stateNote": {
        "visual": "The paste turns from a stiff putty to a smooth light-brown cream that ribbons off the spoon.",
        "visualZh": "酱体由硬膏变为浅棕色顺滑糊状，提起呈带状流下。",
        "signal": "No lumps remain and the spoon leaves a ribbon trail",
        "signalZh": "无颗粒，勺子划过留下带状痕迹",
        "timeRef": "about 2 minutes of whisking",
        "timeRefZh": "搅约 2 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Pour in the chili oil, add 150 ml of the warm poaching liquid, and stir. Taste: it should be salty first, then sweet-sour, then numbing.",
      "textZh": "倒入红油，加 150 毫升温热浸鸡原汤搅匀。尝味：先咸、后酸甜、再回麻。",
      "stateNote": {
        "visual": "A red-glossy sauce flecked with chili sediment and floating sesame seeds.",
        "visualZh": "酱汁红亮，浮着辣椒面与芝麻。",
        "signal": "Coats the back of a spoon and tastes layered, not flat",
        "signalZh": "能挂住勺背，味道有层次不寡",
        "timeRef": "1 minute",
        "timeRefZh": "约 1 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Thread the chicken slices and cucumber batons onto skewers and soak them in the sauce bowl for at least 15 minutes before serving; sprinkle with sesame seeds.",
      "textZh": "鸡肉片与黄瓜条穿签，浸入味碟至少 15 分钟后上桌，撒熟芝麻。",
      "stateNote": {
        "visual": "Each piece picks up a glossy red coat and the edges take on the chili color.",
        "visualZh": "每块都裹上红亮酱汁，边缘染色。",
        "signal": "The color reaches the center seam of each slice",
        "signalZh": "颜色吃到肉片中缝",
        "timeRef": "at least 15 minutes",
        "timeRefZh": "至少 15 分钟",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "Use chicken thighs, not breast — breast dries out in the poach-and-chill cycle.",
    "Keep the poaching liquid; it is the backbone of the flavor bowl.",
    "Scale the heat by choosing a mild or a fiery chili oil; the base sauce stays the same."
  ],
  "tipsZh": [
    "用鸡腿肉不用鸡胸——鸡胸在浸煮+冰镇后会发柴。",
    "浸鸡的汤别倒，是味碟的灵魂。",
    "辣度靠换红油调节，基础味碟配方不变。"
  ],
  "relatedSlugs": [
    "kou-shui-chicken",
    "chengdu-maocai",
    "chongqing-mala-xiang-guo",
    "fu-qi-fei-pian"
  ],
  "image": "/images/recipes/kou-shui-chicken.webp"
};
