import type { Recipe } from "@/lib/types";

/** Cornmeal Mantou (玉米面馒头) — Day batch */
export const cornmeal_mantou: Recipe = {
  "id": "cornmeal-mantou",
  "slug": "cornmeal-mantou",
  "titleEn": "Cornmeal Mantou",
  "titleZh": "玉米面馒头",
  "pinyin": "yù mǐ miàn mántou",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "medium",
  "timeMin": 160,
  "servings": 10,
  "version": "family",
  "versionNote": "Home cooks scald part of the cornmeal with boiling water first so the crumb stays tender instead of sandy. The northern street version, 窝头, uses fine cornmeal alone with little or no wheat flour, steamed into a conical shape around the thumb.",
  "versionNoteZh": "家常版先用开水烫一部分玉米面，组织才会柔软不发沙；北方的街头版窝头则是纯细玉米面、几乎不加小麦粉，绕着拇指捏成圆锥形蒸制。",
  "tags": [
    "steamed-buns",
    "make-ahead",
    "whole-grain",
    "freezer-friendly"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "玉米面馒头 is what happens when northern China's corn country meets the wheat-based mantou tradition. Pure cornmeal will not rise — there is no gluten — so it is always cut with wheat flour, and the cornmeal is scalded first to take the raw edge off. The result has a faintly gritty, sweet bite that plain white mantou cannot give you.",
  "storyZh": "玉米面馒头是北方玉米产区与小麦馒头传统相遇的产物。纯玉米面发不起来——里面没有面筋——所以一定要掺小麦粉，而且要先把玉米面烫过去掉生味。成品带一点点沙沙的、回甜的口感，这是白馒头给不了你的。",
  "ingredients": [
    {
      "id": "cm-01",
      "nameEn": "fine cornmeal (corn flour)",
      "nameZh": "细玉米面",
      "pinyin": "yù mǐ miàn",
      "amountMetric": "150 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "local",
      "note": "Fine grind, not polenta. Coarse meal stays gritty no matter how long you steam",
      "noteZh": "要细玉米面不是玉米糁；粗磨的无论蒸多久都会发糙"
    },
    {
      "id": "cm-02",
      "nameEn": "boiling water, for scalding",
      "nameZh": "开水（烫面用）",
      "pinyin": "kāi shuǐ",
      "amountMetric": "150 ml",
      "amountUS": "⅔ cup",
      "category": "other",
      "pantry": "local",
      "note": "Poured over two-thirds of the cornmeal",
      "noteZh": "浇在三分之二的玉米面上"
    },
    {
      "id": "cm-03",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "350 g",
      "amountUS": "2¾ cups",
      "category": "staple",
      "pantry": "local",
      "note": "The gluten that lets the dough rise",
      "noteZh": "提供让面团发起来的面筋"
    },
    {
      "id": "cm-04",
      "nameEn": "whole milk, warmed to 35°C",
      "nameZh": "全脂牛奶，加热至35°C",
      "pinyin": "niú nǎi",
      "amountMetric": "180 ml",
      "amountUS": "¾ cup",
      "category": "dairy",
      "pantry": "local",
      "note": "Substitute warm water if you want a plainer, more traditional bun",
      "noteZh": "想要更朴素的传统口味可用温水替代"
    },
    {
      "id": "cm-05",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "pinyin": "xì shā táng",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Echoes the sweetness of the corn",
      "noteZh": "呼应玉米本身的甜味"
    },
    {
      "id": "cm-06",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "pinyin": "gān jiàomǔ",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "cm-07",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "12 ml",
      "amountUS": "2½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "cm-08",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Put 100 g of the cornmeal in a bowl and pour the boiling water over it in a steady stream, stirring constantly. Set aside to cool to body temperature.",
      "textZh": "取100克玉米面放入碗中，把开水以细流浇入并不断搅拌。放凉至手感微温。",
      "zhHint": "开水分次烫面",
      "stateNote": {
        "visual": "The meal has thickened into a stiff, glossy golden paste that holds the track of the spoon",
        "visualZh": "玉米面稠化成硬挺油亮的金色糊状，能留下勺子的划痕",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "No visible dry powder remains and the paste no longer smells raw when you bring it close",
        "signalZh": "看不到干粉，凑近闻也没有生面味"
      },
      "tip": "Scalding is what separates tender cornmeal mantou from a dry, sandy brick.",
      "tipZh": "烫面这一步，决定了玉米面馒头是柔软还是又干又糙的砖头。"
    },
    {
      "text": "Proof the yeast with 1 tsp sugar in the warm milk for 8 minutes, then combine everything — scalded paste, flour, remaining cornmeal, remaining sugar, salt, oil — and knead 12 minutes.",
      "textZh": "酵母加1茶匙糖溶于温牛奶静置8分钟，然后把所有材料——烫面糊、面粉、余下玉米面、余下糖、盐、油——混合揉12分钟。",
      "zhHint": "合面揉制",
      "stateNote": {
        "visual": "A supple golden dough that springs back when poked and pulls cleanly off the board",
        "visualZh": "柔软的金色面团，戳一下会回弹，能干净脱离案板",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "The surface looks smooth rather than fissured, and no dough cracks open as you knead",
        "signalZh": "表面光滑不开裂，揉制过程中面团不会裂开"
      }
    },
    {
      "text": "Cover and rise 80 minutes at room temperature until nearly doubled.",
      "textZh": "加盖室温发酵80分钟至接近两倍大。",
      "zhHint": "一发",
      "stateNote": {
        "visual": "Dough has domed; the surface is taut with a faintly uneven, rustic look from the cornmeal",
        "visualZh": "面团隆起，表面紧绷，因玉米面而带一点点质朴的不平整感",
        "timeRef": "80 minutes",
        "timeRefZh": "80 分钟",
        "signal": "A floured finger indentation holds its shape for several seconds",
        "signalZh": "沾粉手指按出的凹痕能保持数秒不回弹"
      }
    },
    {
      "text": "Knead out the air for 3 minutes, roll into a log and divide into 10 equal pieces.",
      "textZh": "排气揉3分钟，搓成长条分成10等份。",
      "zhHint": "排气分剂",
      "stateNote": {
        "visual": "The cut face is dense and even, with uniform golden speckling and no large holes",
        "visualZh": "切面组织致密均匀，金色颗粒分布一致，没有大气孔",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Pieces feel heavy for their size and resist stretching",
        "signalZh": "面剂手感沉实，拉扯时有阻力"
      }
    },
    {
      "text": "Shape into tall rounds with a taut skin, arrange on parchment squares, cover loosely and proof 25 minutes.",
      "textZh": "逐个收成高挺的圆球、绷紧表皮，摆在烘焙纸方块上，盖松布醒发25分钟。",
      "zhHint": "收圆二发",
      "stateNote": {
        "visual": "Buns have clearly puffed and the surface has dulled slightly as it dries in the air",
        "visualZh": "生坯明显胀大，表面因风干而略微失去光泽",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "signal": "A gentle press leaves a dent that slowly refills",
        "signalZh": "轻按留下凹痕，会缓慢填回"
      }
    },
    {
      "text": "Steam over vigorously boiling water 16 minutes with a cloth-wrapped lid. Rest 5 minutes off the heat before opening.",
      "textZh": "笼布包盖，大火沸水蒸16分钟。关火焖5分钟后再开盖。",
      "zhHint": "大火蒸+焖制",
      "stateNote": {
        "visual": "Buns are deep golden, plump and matte-surfaced, with a fine even crumb when torn",
        "visualZh": "馒头呈深金黄色、饱满哑光，撕开可见细腻均匀的组织",
        "timeRef": "16 minutes steam + 5 minutes rest",
        "timeRefZh": "蒸16分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam bursts from under the lid; a bun springs back fully when pressed and peels cleanly off the paper",
        "signalZh": "开盖蒸汽喷涌；轻按完全回弹，且能干净地从纸上揭下"
      }
    }
  ],
  "tips": [
    "Buy cornmeal labelled fine or medium; anything described as 'polenta' or 'grits' is too coarse.",
    "The dough should feel softer than a plain mantou dough. Cornmeal keeps drinking water as it rests.",
    "Best eaten the day they are made. After that steam rather than microwave to bring them back."
  ],
  "tipsZh": [
    "买标注「细」或「中」的玉米面；写着 polenta 或 grits 的都太粗。",
    "面团要比普通馒头面团更软一些。玉米面在静置过程中会持续吸水。",
    "最好当天吃完。之后回热请用蒸的，不要微波。"
  ],
  "relatedSlugs": [
    "white-mantou-steamed-buns",
    "cornmeal-buns-homestyle"
  ],
  "image": "/images/recipes/cornmeal-buns-homestyle.webp"
};
