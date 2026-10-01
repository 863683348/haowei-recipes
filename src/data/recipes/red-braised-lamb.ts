import type { Recipe } from "@/lib/types";

/** Red-Braised Lamb (红焖羊肉) (红焖羊肉) — Day batch */
export const red_braised_lamb: Recipe = {
  "id": "hong-men-yang-rou",
  "slug": "red-braised-lamb",
  "titleEn": "Red-Braised Lamb (红焖羊肉)",
  "titleZh": "红焖羊肉",
  "pinyin": "hóng mèn yáng ròu",
  "cuisine": "本帮菜",
  "cuisineEn": "Shanghainese",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 100,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version braises lamb shoulder with dark soy, rock sugar, and star anise until glossy and fork-tender — the northern cousin of red-braised pork.",
  "versionNoteZh": "家常版以老抽、冰糖、八角慢焖羊肩至油亮酥烂，是红烧肉的北方羊肉表亲。",
  "tags": [
    "braise",
    "comfort-food",
    "weekend",
    "lamb"
  ],
  "dietary": [
    "halal"
  ],
  "story": "A Shanghai auntie taught me that lamb takes to red-braising just like pork — 'Same sugar, same soy, just give it ten more minutes,' she laughed.",
  "storyZh": "一位上海阿姨说羊肉也能红烧：'糖一样、酱油一样，多焖十分钟就好。'她笑着说。",
  "ingredients": [
    {
      "id": "rb-01",
      "nameEn": "lamb shoulder, chunked",
      "nameZh": "羊肩肉（切块）",
      "pinyin": "yáng jiān ròu",
      "amountMetric": "800 g",
      "amountUS": "1.75 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Shoulder stays moist; trim excess fat but keep some for flavor.",
      "noteZh": "羊肩久焖多汁；去多余肥油留少许增香。"
    },
    {
      "id": "rb-02",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "rb-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "rb-04",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "25 g",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    },
    {
      "id": "rb-05",
      "nameEn": "star anise + cinnamon",
      "nameZh": "八角+桂皮",
      "pinyin": "bā jiǎo + guì pí",
      "amountMetric": "2 pods + 1 stick",
      "amountUS": "2 pods + 1 stick",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "rb-06",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "生姜（切片）",
      "pinyin": "shēng jiāng",
      "amountMetric": "20 g",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Blanch lamb in cold water, skim, drain, and rinse to remove gameyness.",
      "textZh": "羊肉冷水焯水、撇沫、捞出冲净去膻。",
      "zhHint": "冷水焯膻",
      "stateNote": {
        "visual": "Grey foam rises; meat pales at edges.",
        "visualZh": "灰色浮沫涌起，肉边转白。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "Foam stops once boiling steadily.",
        "signalZh": "稳沸后泡沫止。"
      }
    },
    {
      "text": "In a wok, caramelize rock sugar over medium heat until amber, then add lamb and toss to coat.",
      "textZh": "锅中火炒冰糖至琥珀色，下羊肉翻匀裹色。",
      "zhHint": "炒糖上色",
      "stateNote": {
        "visual": "Sugar melts to deep amber; lamb turns glossy brown.",
        "visualZh": "糖化深琥珀，羊肉油亮褐。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Sweet, nutty smell — pull off heat if it smokes.",
        "signalZh": "焦糖甜香；若冒烟立即离火。"
      }
    },
    {
      "text": "Add both soy sauces, ginger, star anise, and cinnamon with water to cover. Bring to a boil.",
      "textZh": "加双酱油、姜、八角、桂皮与没肉的水，煮沸。",
      "zhHint": "注汤煮沸",
      "stateNote": {
        "visual": "Liquid darkens to chestnut from dark soy.",
        "visualZh": "老抽将汤染成栗色。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Rolling boil with layered spice aroma.",
        "signalZh": "翻滚沸腾，香料层叠香气。"
      }
    },
    {
      "text": "Cover and simmer on low 80 minutes until a chopstick slides in easily.",
      "textZh": "加盖小火焖80分钟至筷子易插透。",
      "zhHint": "小火慢焖",
      "stateNote": {
        "visual": "Surface barely bubbles; collagen melts into broth.",
        "visualZh": "汤面微沸，胶质融汤。",
        "timeRef": "80 minutes",
        "timeRefZh": "80 分钟",
        "heat": "low",
        "signal": "Meat edges separate; glossy sheen forms.",
        "signalZh": "肉边微散，浮起油亮光泽。"
      }
    },
    {
      "text": "Uncover, raise to medium, and reduce sauce 10 minutes until thick and lacquered.",
      "textZh": "开盖转中火收汁10分钟至浓稠挂亮。",
      "zhHint": "开盖收汁",
      "stateNote": {
        "visual": "Sauce clings to meat; bubbles slow and glossy.",
        "visualZh": "汤汁裹肉，气泡变慢发亮。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium",
        "signal": "Bubbles become syrupy and infrequent.",
        "signalZh": "气泡变稠、变稀。"
      }
    }
  ],
  "tips": [
    "Caramelizing sugar gives the signature red-braised shine — don't skip it.",
    "Lamb needs slightly longer than pork; test with a chopstick.",
    "Skim fat at the end for a cleaner sauce."
  ],
  "tipsZh": [
    "炒糖色是红烧亮泽的关键，不可省。",
    "羊肉比猪肉略久，用筷子试。",
    "收尾撇油，汤汁更清。"
  ],
  "relatedSlugs": [
    "tea-braised-beef",
    "radish-lamb-stew",
    "hand-torn-lamb",
    "lamb-pilaf"
  ],
  "image": "/images/recipes/og-default.webp"
};
