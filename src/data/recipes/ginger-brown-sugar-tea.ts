import type { Recipe } from "@/lib/types";

/** Ginger Tea with Brown Sugar (姜茶) — Day batch */
export const ginger_brown_sugar_tea: Recipe = {
  "id": "ginger-brown-sugar-tea",
  "slug": "ginger-brown-sugar-tea",
  "titleEn": "Ginger Tea with Brown Sugar",
  "titleZh": "姜茶",
  "pinyin": "jiāng chá",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version blisters the ginger in a dry pan first, which makes the tea sharper and more warming; the quick version just boils sliced ginger in water and tastes brighter but flatter. Both are correct - the toasted one is for cold weather.",
  "versionNoteZh": "家常版先把姜在干锅里焙出斑点，茶更冲、更暖；快手版直接姜片煮水，更清爽但单薄。两种都对——焙过的适合冷天。",
  "tags": [
    "herbal-tea",
    "20-min",
    "beginner",
    "warming",
    "winter"
  ],
  "dietary": [
    "vegan",
    "gluten-free",
    "low-sodium"
  ],
  "story": "This is the drink Cantonese families make at the first sign of a chill, and the one my grandmother poured for anyone who came in wet from the rain. She never peeled the ginger - the skin is considered the warming part - and she always used dark, moist brown sugar rather than white, saying white sugar makes it 'a sweet drink' instead of 'a medicine'.",
  "storyZh": "这是广东家庭一觉得受寒就煮的东西，也是外婆给每个淋雨进门的人倒的那一杯。她从不削姜皮——那层皮才是「暖」的部分；糖也一定用深色湿润的红糖，说用白糖就只是「甜饮料」，不是「药」。",
  "ingredients": [
    {
      "id": "gbst-01",
      "nameEn": "old ginger, unpeeled",
      "nameZh": "老姜（不削皮）",
      "pinyin": "lǎo jiāng",
      "amountMetric": "40 g",
      "amountUS": "1 thumb-length piece",
      "category": "produce",
      "pantry": "local",
      "note": "Old ginger is fibrous, drier and much hotter than young ginger. Scrub it clean instead of peeling.",
      "noteZh": "老姜纤维多、更干更辣。刷洗干净，不要削皮。",
      "termKey": "ginger"
    },
    {
      "id": "gbst-02",
      "nameEn": "Chinese brown sugar",
      "nameZh": "红糖",
      "pinyin": "hóng táng",
      "amountMetric": "25 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "The dark, moist slab kind. Light brown sugar is too mild and the tea tastes thin.",
      "noteZh": "要深色湿润的块状红糖。浅色红糖太淡，煮出来单薄。",
      "termKey": "brown-sugar"
    },
    {
      "id": "gbst-03",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "600 ml",
      "amountUS": "2 1/2 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "gbst-04",
      "nameEn": "dried red dates",
      "nameZh": "红枣",
      "pinyin": "hóng zǎo",
      "amountMetric": "15 g",
      "amountUS": "3 dates",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "They soften the ginger's bite and add body.",
      "noteZh": "柔化姜的辛辣，也让茶更有厚度。",
      "termKey": "jujube"
    },
    {
      "id": "gbst-05",
      "nameEn": "aged dried tangerine peel",
      "nameZh": "陈皮",
      "pinyin": "chén pí",
      "amountMetric": "2 g",
      "amountUS": "1 small piece",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Traditional pairing with ginger; it makes the drink smell of winter rather than of medicine.",
      "noteZh": "与姜是传统搭配；有它，这杯闻起来是冬天，而不是药。",
      "termKey": "dried-tangerine-peel"
    },
    {
      "id": "gbst-06",
      "nameEn": "goji berries",
      "nameZh": "枸杞",
      "pinyin": "gǒu qǐ",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Added off the heat at the end.",
      "noteZh": "关火后再放。",
      "termKey": "goji-berries"
    }
  ],
  "steps": [
    {
      "text": "Scrub the ginger under running water with a spoon to lift the dirt out of the knuckles, then slice it into coins about 3 mm thick and smash each coin once with the flat of the knife.",
      "textZh": "姜用勺子在水下刮洗干净（关节处的泥要刮掉），切成约 3 毫米硬币片，再用刀面把每片拍一下。",
      "zhHint": "洗净切片拍裂",
      "stateNote": {
        "visual": "Pale yellow flesh exposed in the smashed cracks, skin left intact",
        "visualZh": "拍裂处露出浅黄姜肉，姜皮完整保留",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "A sharp, clean ginger smell hits you - if it smells musty, the root is old inside and should be binned",
        "signalZh": "闻到清冽的姜辛香；若有霉味说明芯已坏，整块丢掉"
      }
    },
    {
      "text": "Put the ginger into a dry pan over medium-low heat and toast for 3 minutes until the cut faces turn pale gold and the edges blister.",
      "textZh": "姜片放干锅中低火焙 3 分钟，切面转浅金、边缘起泡即可。",
      "zhHint": "干锅焙姜",
      "stateNote": {
        "visual": "Cut surfaces go from white to a light golden brown; edges curl slightly",
        "visualZh": "切面从白转为浅金褐，边缘微微卷起",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "The smell changes from sharp to warm and slightly sweet - that is the gingerol softening into zingerone",
        "signalZh": "气味从尖锐转为温厚微甜——姜醇正在转成姜酮"
      },
      "tip": "No oil at all. Oil makes the tea greasy on the lips.",
      "tipZh": "一滴油都不要放。有油，喝完嘴唇会发腻。"
    },
    {
      "text": "Add the water, slit dates and tangerine peel, bring to a boil and simmer for 12 minutes.",
      "textZh": "加水、划口红枣与陈皮，煮开后小火煮 12 分钟。",
      "zhHint": "小火煮 12 分钟",
      "stateNote": {
        "visual": "The liquid takes on a pale amber tint and the dates swell",
        "visualZh": "汤色染上浅琥珀，红枣胀起",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "medium-low",
        "signal": "Taste a spoonful - it should sting the back of your throat. If it is merely warm-flavoured, simmer 3 minutes more",
        "signalZh": "尝一勺，喉头应该有一点辣。若只是「温吞有味」，再煮 3 分钟"
      }
    },
    {
      "text": "Add the brown sugar and stir until it dissolves completely, about 2 minutes, then switch off.",
      "textZh": "加入红糖搅至完全化开，约 2 分钟，然后关火。",
      "zhHint": "红糖化开即关火",
      "stateNote": {
        "visual": "The tea darkens to a deep reddish brown, almost opaque against the pot wall",
        "visualZh": "茶汤加深为深红棕，贴着锅壁看几乎不透光",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "No grit left on the bottom when you stir with a spoon; sugar that keeps boiling turns bitter",
        "signalZh": "勺底摸不到糖粒即可；红糖久煮会发苦"
      }
    },
    {
      "text": "Drop in the goji, cover and let it stand 3 minutes, then strain into mugs and drink it hot, in slow sips.",
      "textZh": "放入枸杞，盖盖静置 3 分钟，滤入杯中趁热慢慢喝。",
      "zhHint": "焖 3 分钟热饮",
      "stateNote": {
        "visual": "Dark amber tea with floating scarlet goji; steam rising steadily",
        "visualZh": "深琥珀茶汤浮着鲜红枸杞，热气稳定上升",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "The heat spreads from your stomach outward rather than sitting in your mouth",
        "signalZh": "热是从胃里往外散的，不是停在嘴里"
      }
    }
  ],
  "tips": [
    "Keep the skin on. In Chinese home medicine the peel is considered the warming part and the flesh the dispersing part.",
    "Do not use white sugar; it makes the drink sweet without any of the molasses depth that defines it.",
    "For a cold coming on, drink it as hot as you can stand and go to bed - that is the traditional use, not a casual afternoon drink."
  ],
  "tipsZh": [
    "姜皮要留着。中式家庭经验里，皮主「温」，肉主「散」。",
    "不要用白糖；会甜，但少了红糖那种糖蜜厚度，就不是这杯了。",
    "着凉初起时趁最热能入口喝下去、然后去睡——这是它的传统用法，不是下午随便喝的饮料。"
  ],
  "relatedSlugs": [
    "longan-tea",
    "goji-red-date-tea",
    "ginger-milk-curd"
  ],
  "image": "/images/recipes/ginger-milk-curd.webp"
};
