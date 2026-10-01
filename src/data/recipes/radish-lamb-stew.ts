import type { Recipe } from "@/lib/types";

/** Radish Lamb Stew (萝卜炖羊肉) (萝卜炖羊肉) — Day batch */
export const radish_lamb_stew: Recipe = {
  "id": "luo-bo-dun-yang-rou",
  "slug": "radish-lamb-stew",
  "titleEn": "Radish Lamb Stew (萝卜炖羊肉)",
  "titleZh": "萝卜炖羊肉",
  "pinyin": "luó bo dùn yáng ròu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Northern China",
  "regionZh": "北方",
  "difficulty": "easy",
  "timeMin": 80,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version simmers lamb with white radish — the radish absorbs the broth and tames the gaminess, making a clean, warming one-pot soup.",
  "versionNoteZh": "家常版羊肉配白萝卜同炖，萝卜吸汤去膻，成一道清润暖身的一锅汤。",
  "tags": [
    "stew",
    "one-pot",
    "comfort-food",
    "soup"
  ],
  "dietary": [
    "halal"
  ],
  "story": "Every northern Chinese winter has this pot bubbling on the stove. My mother said radish and lamb were 'made for each other' — the radish drinks the broth the lamb gives.",
  "storyZh": "北方每个冬天都靠这锅续命。妈妈说萝卜和羊肉'天生一对'——萝卜喝下羊肉给的汤。",
  "ingredients": [
    {
      "id": "rs-01",
      "nameEn": "lamb shoulder or shank, chunked",
      "nameZh": "羊肩/羊腿肉（切块）",
      "pinyin": "yáng ròu",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Bone-in shank adds richness to the broth.",
      "noteZh": "带骨羊腿更添汤鲜。"
    },
    {
      "id": "rs-02",
      "nameEn": "white radish (daikon), chunked",
      "nameZh": "白萝卜（切块）",
      "pinyin": "bái luó bo",
      "amountMetric": "400 g",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "rs-03",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "生姜（切片）",
      "pinyin": "shēng jiāng",
      "amountMetric": "20 g",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "rs-04",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "rs-05",
      "nameEn": "salt",
      "nameZh": "盐",
      "pinyin": "yán",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "rs-06",
      "nameEn": "scallion, for garnish",
      "nameZh": "葱（点缀）",
      "pinyin": "cōng",
      "amountMetric": "10 g",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Blanch lamb in cold water, skim foam, drain, and rinse.",
      "textZh": "羊肉冷水焯水撇沫，捞出冲净。",
      "zhHint": "冷水焯膻",
      "stateNote": {
        "visual": "Grey foam rises; meat pales.",
        "visualZh": "灰沫涌起，肉转白。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "Foam stops at steady boil.",
        "signalZh": "稳沸后沫止。"
      }
    },
    {
      "text": "Place lamb, ginger, and water to cover in a pot. Bring to a boil then simmer 50 minutes.",
      "textZh": "羊肉、姜片与没肉的水入锅，煮沸后小火炖50分钟。",
      "zhHint": "注汤炖肉",
      "stateNote": {
        "visual": "Broth turns milky; surface shows slow bubbles.",
        "visualZh": "汤色转乳白，汤面缓沸。",
        "timeRef": "50 minutes",
        "timeRefZh": "50 分钟",
        "heat": "low",
        "signal": "Meat softens; aroma mellows.",
        "signalZh": "肉渐软，香气转柔。"
      }
    },
    {
      "text": "Add radish chunks and simmer 20 minutes until translucent and tender.",
      "textZh": "下白萝卜块再炖20分钟至半透明软糯。",
      "zhHint": "下萝卜炖",
      "stateNote": {
        "visual": "Radish edges turn glassy and easily pierced.",
        "visualZh": "萝卜边转透亮，一戳即透。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "medium",
        "signal": "Radish absorbs broth and loses raw bite.",
        "signalZh": "萝卜吸汤、去生涩。"
      }
    },
    {
      "text": "Season with salt and white pepper; simmer 2 minutes more.",
      "textZh": "加盐与白胡椒，再煮2分钟。",
      "zhHint": "调味定咸",
      "stateNote": {
        "visual": "Broth clears slightly; pepper flecks float.",
        "visualZh": "汤略清，胡椒粒浮起。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Aroma turns peppery and warm.",
        "signalZh": "香气转胡椒暖意。"
      }
    },
    {
      "text": "Scatter scallion and serve hot as soup and main together.",
      "textZh": "撒葱花，趁热汤菜同享。",
      "zhHint": "撒葱出锅",
      "stateNote": {
        "visual": "Scallion stays bright green atop a clear broth.",
        "visualZh": "葱花翠绿浮于清汤。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Clean, savory lamb aroma — no gaminess.",
        "signalZh": "清新咸鲜羊香，无膻。"
      }
    }
  ],
  "tips": [
    "Add radish only after the lamb is half-done, or it overcooks to mush.",
    "White pepper, not black, keeps the broth clean.",
    "Bone-in cuts make a noticeably richer soup."
  ],
  "tipsZh": [
    "萝卜待羊肉半熟再下，否则烂糊。",
    "用白胡椒而非黑胡椒，汤更清。",
    "带骨炖汤更浓。"
  ],
  "relatedSlugs": [
    "red-braised-lamb",
    "angelica-ginger-lamb-soup",
    "tea-braised-beef",
    "lamb-glass-noodle-pot"
  ],
  "image": "/images/recipes/og-default.webp"
};
