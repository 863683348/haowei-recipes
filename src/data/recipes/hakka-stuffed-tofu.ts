import type { Recipe } from "@/lib/types";

/** Hakka Stuffed Tofu (客家酿豆腐) (客家酿豆腐) — Day batch */
export const hakka_stuffed_tofu: Recipe = {
  "id": "ke-jia-niang-dou-fu",
  "slug": "hakka-stuffed-tofu",
  "titleEn": "Hakka Stuffed Tofu (客家酿豆腐)",
  "titleZh": "客家酿豆腐",
  "pinyin": "kè jiā niàng dòu fu",
  "cuisine": "客家菜",
  "cuisineEn": "Hakka",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "hard",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version pan-fries and braises in one skillet with a light gravy; restaurant version fries the stuffed blocks first, then steams them in a bamboo steamer before saucing.",
  "versionNoteZh": "家常版一口锅煎后直接烧汁；酒楼版先煎定型，再上笼蒸透才勾芡。",
  "tags": [
    "hakka",
    "tofu",
    "pork",
    "braised",
    "banquet"
  ],
  "dietary": [
    "none"
  ],
  "story": "Hakka cooks far from home made do: no dumpling wrappers in the north, so they hollowed tofu blocks and stuffed them instead. It became the dish that defines the cuisine.",
  "storyZh": "客家人迁徙北方，买不到饺子皮，就把豆腐挖空当皮包肉。这道菜后来成了客家菜的门面。",
  "ingredients": [
    {
      "id": "kjndf-01",
      "nameEn": "firm tofu, cut into 6 blocks of 5x4x3 cm",
      "nameZh": "北豆腐（切6块5×4×3厘米）",
      "pinyin": "běi dòu fu",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "kjndf-02",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "pinyin": "zhū ròu mò",
      "amountMetric": "250 g",
      "amountUS": "9 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "kjndf-03",
      "nameEn": "dried shiitake, soaked and minced",
      "nameZh": "干香菇（泡发切末）",
      "pinyin": "gān xiāng gū",
      "amountMetric": "20 g",
      "amountUS": "4 caps",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-shiitake"
    },
    {
      "id": "kjndf-04",
      "nameEn": "scallion, finely sliced",
      "nameZh": "葱（切细花）",
      "pinyin": "cōng",
      "amountMetric": "25 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "kjndf-05",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "kjndf-06",
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
      "id": "kjndf-07",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "kjndf-08",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "kjndf-09",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "kjndf-10",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Press tofu blocks 15 minutes; with a small spoon, hollow a well into the top of each, leaving a 5 mm wall.",
      "textZh": "豆腐压15分钟，用小勺在每块顶部挖一个凹坑，留5毫米边壁。",
      "zhHint": "挖豆腐",
      "stateNote": {
        "visual": "A neat cavity with intact walls; no cracks through the base.",
        "visualZh": "凹坑整齐、壁不破底不漏。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Block still holds together when lifted.",
        "signalZh": "提起仍成一整块。"
      }
    },
    {
      "text": "Mix pork with shiitake, half the scallion, 5 g cornstarch, half the soy sauce and white pepper; stir in one direction 2 minutes until sticky.",
      "textZh": "猪肉末加香菇、一半葱花、5克淀粉、一半生抽与白胡椒，顺一个方向搅2分钟至发黏。",
      "zhHint": "打馅",
      "stateNote": {
        "visual": "Filling turns glossy and holds together in a ball.",
        "visualZh": "馅料发亮、能团成球。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "It clings to the chopsticks when lifted.",
        "signalZh": "筷子挑起不散落。"
      }
    },
    {
      "text": "Dust each cavity with cornstarch, then pack in the filling, mounding it slightly.",
      "textZh": "凹坑内撒薄淀粉，填入肉馅并略堆高。",
      "zhHint": "酿馅",
      "stateNote": {
        "visual": "Filling sits proud with no gap at the rim.",
        "visualZh": "馅微鼓、边缘无缝。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Filling feels firmly packed when pressed.",
        "signalZh": "轻按手感紧实。"
      }
    },
    {
      "text": "Fry stuffed-side down over medium heat 4 minutes until the meat is golden; turn carefully.",
      "textZh": "中火肉面朝下煎4分钟至金黄，小心翻面。",
      "zhHint": "煎酿面",
      "stateNote": {
        "visual": "Meat surface browns into a crust; tofu base is pale gold.",
        "visualZh": "肉面结金壳、豆腐底浅金。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium",
        "signal": "Meat smells roasted; block slides freely.",
        "signalZh": "肉香出、块能滑动。"
      }
    },
    {
      "text": "Add 200 ml water, remaining soy sauce, oyster sauce and wine; cover and simmer 12 minutes.",
      "textZh": "加水200毫升、剩余生抽、蚝油与黄酒，加盖焖12分钟。",
      "zhHint": "焖煮",
      "stateNote": {
        "visual": "Sauce reduces by half and turns glossy amber.",
        "visualZh": "汤汁收半、转琥珀亮色。",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "medium-low",
        "signal": "A skewer into the filling comes out clean.",
        "signalZh": "竹签插入馅心无血水。"
      }
    },
    {
      "text": "Thicken with the remaining cornstarch slurry; scatter the rest of the scallion and serve.",
      "textZh": "用剩余淀粉水勾芡，撒葱花出锅。",
      "zhHint": "勾芡",
      "stateNote": {
        "visual": "Gravy coats the back of a spoon.",
        "visualZh": "芡汁能挂住勺背。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Bubbles turn thick and slow.",
        "signalZh": "气泡变稠变慢。"
      }
    }
  ],
  "tips": [
    "Dust the cavity with cornstarch or the filling falls out when you flip.",
    "Stir the filling one direction only — that is what makes it springy.",
    "Turn once, and turn with confidence."
  ],
  "tipsZh": [
    "坑里撒淀粉，否则翻面掉馅。",
    "馅只朝一个方向搅，才有弹劲。",
    "只翻一次，翻就果断。"
  ],
  "commonMistakes": [
    {
      "mistake": "Hollowing too deep so the base cracks.",
      "mistakeZh": "挖太深，底部破了。",
      "fix": "Leave a 5 mm floor and walls.",
      "fixZh": "留5毫米底和壁。"
    },
    {
      "mistake": "Filling falls out during the flip.",
      "mistakeZh": "翻面时馅掉出来。",
      "fix": "Dust cavity with cornstarch; chill blocks 10 minutes before frying.",
      "fixZh": "坑内拍粉，煎前冷藏10分钟。"
    }
  ],
  "variations": [
    "Use a pork-and-fish paste blend for authenticity.",
    "Braise in a clay pot for a deeper flavour.",
    "Make it vegetarian with minced shiitake and water chestnut."
  ],
  "variationsZh": [
    "猪肉加鱼茸混合更地道。",
    "改砂锅焖，味更厚。",
    "香菇马蹄做全素馅。"
  ],
  "relatedSlugs": [
    "braised-tofu",
    "guota-tofu",
    "iron-plate-tofu",
    "tomato-tofu",
    "enoki-tofu-clay-pot"
  ],
  "image": "/images/recipes/braised-tofu.webp"
};
