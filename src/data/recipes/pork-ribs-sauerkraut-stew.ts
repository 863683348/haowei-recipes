import type { Recipe } from "@/lib/types";

/** Pork Ribs Sauerkraut Stew (排骨炖酸菜) — Seed batch */
export const pork_ribs_sauerkraut_stew: Recipe = {
  "id": "pai-gu-dun-suan-cai",
  "slug": "pork-ribs-sauerkraut-stew",
  "titleEn": "Pork Ribs Sauerkraut Stew",
  "titleZh": "排骨炖酸菜",
  "pinyin": "pái gǔ dùn suān cài",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Jilin",
  "regionZh": "吉林省",
  "difficulty": "medium",
  "timeMin": 150,
  "servings": 5,
  "version": "family",
  "versionNote": "Family version uses pork spare ribs (not baby back), fermented sour cabbage from Northeast China (not German sauerkraut), and no sugar — only natural lactic tang. The acid cuts richness without sweetness.",
  "versionNoteZh": "家庭版用东北猪肋排（非小排）、东北发酵酸白菜（非德式酸菜），不加糖——纯乳酸自然酸香，解腻不甜。",
  "tags": [
    "winter",
    "sour",
    "hearty"
  ],
  "dietary": [
    "none"
  ],
  "story": "In Changchun, my grandfather kept a crock of fermented napa cabbage buried in the cellar every October. He’d pull out a fistful each morning, rinse it three times in cold well water, and toss it with ribs in his black iron wok — the sour smell would wake us up before breakfast.",
  "storyZh": "长春的爷爷每年十月把大白菜酸坛埋进地窖。清晨捞出一把，井水冲三遍，直接扔进黑铁锅与排骨同炖——那股酸香，总在早饭前就把我们叫醒。",
  "ingredients": [
    {
      "id": "rb-01",
      "nameEn": "pork spare ribs (cut into 5-cm pieces)",
      "nameZh": "猪肋排（切5厘米段）",
      "pinyin": "zhū lèi pái",
      "amountMetric": "1000 g",
      "amountUS": "2.2 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask for 'Chinese-style spare ribs' — meaty, with cartilage. Sub: country-style ribs (same weight), but avoid lean loin chops.",
      "noteZh": "要‘中式肋排’——肉厚带软骨。替代：美式乡村肋排（同重），忌瘦里脊。"
    },
    {
      "id": "rb-02",
      "nameEn": "fermented Chinese sour cabbage (suan cai)",
      "nameZh": "东北酸菜（发酵白菜）",
      "pinyin": "dōng běi suān cài",
      "amountMetric": "600 g",
      "amountUS": "6 cups, chopped coarse",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Must be lacto-fermented, not vinegar-brined. Look for 'Northeast China' origin. Sub: Korean kimchi base (no chili) — drain well, rinse once.",
      "noteZh": "必须是乳酸发酵，非醋泡。认准‘东北产’。替代：韩式无辣泡菜基底——沥干、冲洗一次。"
    },
    {
      "id": "rb-03",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "40 g",
      "amountUS": "⅓ cup, thickly sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "rb-04",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "50 g",
      "amountUS": "4 stalks, whites and greens separated",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "rb-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "25 ml",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Rinse ribs under cold running water. Soak in cold water 30 min to draw out blood. Drain and pat dry.",
      "textZh": "肋排冷水冲洗，再冷水中浸泡30分钟去血水。捞出沥干并擦干。",
      "zhHint": "血水去净，汤才清",
      "stateNote": {
        "visual": "Water runs clear, no pink tinge remains",
        "visualZh": "水变清亮，无粉红血丝",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "No foam forms when rinsed again",
        "signalZh": "再次冲洗无泡沫"
      }
    },
    {
      "text": "Heat a 5-L cast-iron pot over medium-high. Add ribs in single layer; sear undisturbed 5 min until browned. Flip; sear 4 more min.",
      "textZh": "5L铸铁锅中火烧热，排骨单层码放，静置煎5分钟至焦黄；翻面再煎4分钟。",
      "zhHint": "单层不叠，静置上色",
      "stateNote": {
        "visual": "Bottom surface is deeply browned, slight crust forms",
        "visualZh": "底面深褐，形成薄壳",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-high",
        "signal": "Sizzle remains steady, not fading",
        "signalZh": "滋滋声持续不断"
      }
    },
    {
      "text": "Remove ribs. Pour off all but 1 tbsp fat. Add ginger and scallion whites; stir-fry 1.5 min until edges darken slightly.",
      "textZh": "捞出排骨，倒掉多余油，留1汤匙；下姜片与葱白段，煸炒1.5分钟至边缘微深。",
      "zhHint": "姜葱微焦，香更浓",
      "stateNote": {
        "visual": "Ginger edges turn light brown, scallion whites soften",
        "visualZh": "姜边浅褐，葱白变软",
        "timeRef": "1.5 minutes",
        "timeRefZh": "1.5 分钟",
        "heat": "medium",
        "signal": "Fragrance blooms — warm, earthy, sharp",
        "signalZh": "香气迸发——温润、泥土感、微辛"
      }
    },
    {
      "text": "Return ribs. Add sour cabbage and 1 L boiling water (just covers). Bring to simmer, then reduce to low. Cover and cook 1.5 hours.",
      "textZh": "排骨回锅，加酸菜与1L沸水（刚没过）。烧至微沸后转最小火，盖盖炖1.5小时。",
      "zhHint": "水要沸，火要稳",
      "stateNote": {
        "visual": "Cabbage softens but holds shape; broth turns cloudy white",
        "visualZh": "酸菜变软但不烂；汤色微浊泛白",
        "timeRef": "1.5 hours",
        "timeRefZh": "1.5 小时",
        "heat": "low",
        "signal": "Acidic tang mellows into round sourness",
        "signalZh": "尖酸转为圆润酸香"
      }
    },
    {
      "text": "Uncover. Skim fat. Add scallion greens. Simmer uncovered 15 min. Taste: adjust only with salt — the sour cabbage provides full acidity.",
      "textZh": "揭盖，撇净浮油。下葱绿段，敞盖再煮15分钟。尝味：仅用盐调整——酸菜已提供全部酸度。",
      "zhHint": "酸菜自带酸，勿加醋",
      "stateNote": {
        "visual": "Broth reduces ~10%, clings to ribs",
        "visualZh": "汤汁减少约10%，裹住排骨",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-low",
        "signal": "Sour aroma deepens, no raw sharpness remains",
        "signalZh": "酸香变醇厚，无生涩感"
      }
    }
  ],
  "tips": [
    "Rinse sour cabbage 3 times — first rinse removes excess brine, second removes grit, third balances salt level.",
    "Use a heavy-bottomed pot: thin pots scorch the cabbage at the bottom before ribs are tender.",
    "Leftovers taste better the next day — the sour cabbage continues fermenting gently in the broth."
  ],
  "tipsZh": [
    "酸菜务必洗三次——第一遍去盐卤，第二遍去泥沙，第三遍调咸淡。",
    "务必用厚底锅：薄锅易糊底，排骨未烂酸菜已焦。",
    "隔夜再吃更佳——酸菜在汤中继续温和发酵。"
  ],
  "relatedSlugs": [
    "iron-pot-stew-goose",
    "chicken-mushroom-stew"
  ],
  "image": "/images/recipes/pork-ribs-sauerkraut-stew.webp"
};
