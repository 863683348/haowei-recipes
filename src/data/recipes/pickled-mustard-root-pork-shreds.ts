import type { Recipe } from "@/lib/types";

/** Pickled Mustard Root & Pork Shreds (榨菜肉丝) — Seed batch */
export const pickled_mustard_root_pork_shreds: Recipe = {
  "id": "zha-cai-rou-si",
  "slug": "pickled-mustard-root-pork-shreds",
  "titleEn": "Pickled Mustard Root & Pork Shreds",
  "titleZh": "榨菜肉丝",
  "pinyin": "zhà cài ròu sī",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "easy",
  "timeMin": 26,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips sugar and MSG — relies on natural sweetness of pork and deep umami of zha cai, stir-fried fast over high heat like Uncle Liang did in his Chongqing alleyway kitchen.",
  "versionNoteZh": "家常版不加糖、不加味精，靠猪肉本甜与榨菜醇厚鲜味，旺火快炒，正如重庆巷子里梁叔的灶台风格。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "Uncle Liang ran a tiny noodle stall in Yuzhong District, Chongqing. His secret wasn’t spice — it was how he hand-shredded zha cai every morning, then tossed it with day-old pork scraps and a splash of Shaoxing wine. I’d watch him stir-fry it in one fluid motion — 90 seconds flat — before spooning it over dan dan noodles. That crunch-and-savor balance still defines my idea of ‘xia fan cai’.",
  "storyZh": "梁叔在重庆渝中区摆了个小面摊。他的秘诀不在辣，而在每天清晨亲手撕榨菜丝，拌上隔夜剩的肉末和一勺绍酒。我蹲在旁边看，他手腕一扬一落，旺火快炒90秒，就盖在担担面上。那种脆与鲜的平衡感，至今是我心中‘下饭菜’的标尺。",
  "ingredients": [
    {
      "id": "zc-01",
      "nameEn": "Sichuan pickled mustard root (zha cai)",
      "nameZh": "榨菜",
      "pinyin": "zhà cài",
      "amountMetric": "100 g",
      "amountUS": "¾ cup, shredded",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for 'Sichuan preserved mustard tuber' or 'zha cai' in jars — choose unsweetened, non-oily versions. Rinse briefly if overly salty.",
      "noteZh": "选罐装‘四川榨菜’（英文标Sichuan preserved mustard tuber/zha cai），避甜味/油浸款；若过咸，快速冲水。"
    },
    {
      "id": "zc-02",
      "nameEn": "pork shoulder, thinly sliced",
      "nameZh": "猪前腿肉",
      "pinyin": "zhū qián tuǐ ròu",
      "amountMetric": "160 g",
      "amountUS": "5.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Slice against the grain, 3 mm thick, then cut into 5 cm shreds. Slightly fattier than tenderloin gives better mouthfeel here.",
      "noteZh": "逆纹切片（3 mm厚），再切5 cm长丝；带少许肥更润口。"
    },
    {
      "id": "zc-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "12 ml",
      "amountUS": "¾ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "zc-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "8 ml",
      "amountUS": "1½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "zc-05",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "8 g",
      "amountUS": "1 tsp, finely minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    }
  ],
  "steps": [
    {
      "text": "Rinse zha cai under cold water for 10 seconds, then drain well and pat dry with paper towel. Shred by hand or with clean fingers into thin, even strands.",
      "textZh": "榨菜冷水轻冲10秒，沥干后用厨房纸吸去表面水，再用手撕成细匀丝。",
      "zhHint": "手撕更自然",
      "stateNote": {
        "visual": "Zha cai shreds are dry to touch, pale tan with visible fibrous texture.",
        "visualZh": "榨菜丝触感干爽，浅褐色，纤维清晰可见。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No water beads remain on surface after patting.",
        "signalZh": "擦拭后表面无水珠残留。"
      }
    },
    {
      "text": "Marinate pork shreds with light soy sauce, Shaoxing wine, and half the garlic. Mix well and set aside 8 minutes.",
      "textZh": "猪肉丝加生抽、绍酒、一半蒜末拌匀，静置8分钟。",
      "zhHint": "短时腌制即可",
      "stateNote": {
        "visual": "Pork looks plump and lightly coated.",
        "visualZh": "肉丝饱满，裹着薄薄酱色。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "No liquid pools — marinade is fully absorbed.",
        "signalZh": "无酱汁析出，全部被吸收。"
      }
    },
    {
      "text": "Heat wok over high heat until smoking lightly. Add 10 ml (2 tsp) neutral oil.",
      "textZh": "大火烧锅至微冒青烟，倒入10毫升中性油。",
      "zhHint": "锅要滚烫",
      "stateNote": {
        "visual": "Thin blue-gray smoke rises steadily from center of wok.",
        "visualZh": "锅心升起细而稳的淡青烟。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "Oil shimmers violently and emits faint nutty aroma.",
        "signalZh": "油面剧烈晃动，散发淡淡焦香。"
      }
    },
    {
      "text": "Add remaining garlic and stir-fry 10 seconds until golden and fragrant. Immediately add pork and stir-fry rapidly until just cooked through (about 1 minute).",
      "textZh": "下剩余蒜末，爆香10秒至微黄；立刻下肉丝，猛火快炒约1分钟至断生。",
      "zhHint": "全程旺火，一气呵成",
      "stateNote": {
        "visual": "Pork turns uniform light brown with no pink showing.",
        "visualZh": "肉丝呈均一浅褐色，不见粉红。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Pork sizzles continuously without steaming.",
        "signalZh": "肉丝持续‘滋滋’响，不冒白气。"
      }
    },
    {
      "text": "Add zha cai and stir-fry over high heat for 1 minute — just until heated through and aromatic. Do not overcook; texture should stay crisp. Turn off heat and serve immediately with steamed rice.",
      "textZh": "倒入榨菜丝，旺火翻炒1分钟至热透出香即可。切勿久炒，务必保持脆感。关火，趁热配米饭上桌。",
      "zhHint": "脆是灵魂",
      "stateNote": {
        "visual": "Zha cai retains distinct pale strands and audible crunch when stirred.",
        "visualZh": "榨菜丝分明、色泽浅淡，翻炒时有清脆声。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Aromatics bloom — sharp, earthy, slightly fermented scent fills air.",
        "signalZh": "辛香、微酵、泥土气息瞬间弥漫。"
      }
    }
  ],
  "tips": [
    "Never substitute zha cai with Korean kimchi or Japanese takuan — flavor and texture are completely different.",
    "Use pork shoulder instead of lean cuts — its subtle fat carries the zha cai’s boldness.",
    "For authentic Chongqing style, serve with a spoonful of chili oil on top — optional but traditional."
  ],
  "tipsZh": [
    "切勿用泡菜或腌萝卜替代榨菜——风味与口感截然不同。",
    "优选前腿肉而非纯瘦肉——微量脂肪能托住榨菜的浓烈风味。",
    "地道重庆吃法：上桌前淋半勺辣椒油——非必需，但极传统。"
  ],
  "relatedSlugs": [
    "pickled-mustard-green-pork-shreds"
  ],
  "image": "/images/recipes/pickled-mustard-root-pork-shreds.webp"
};
