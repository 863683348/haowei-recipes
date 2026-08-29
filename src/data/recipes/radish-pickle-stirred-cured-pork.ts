import type { Recipe } from "@/lib/types";

/** Radish Pickle Stirred with Cured Pork (萝卜干炒腊肉) — Seed batch */
export const radish_pickle_stirred_cured_pork: Recipe = {
  "id": "luo-bo-gan-stirred-larou",
  "slug": "radish-pickle-stirred-cured-pork",
  "titleEn": "Radish Pickle Stirred with Cured Pork",
  "titleZh": "萝卜干炒腊肉",
  "pinyin": "luó bo gān chǎo là ròu",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Xiangtan",
  "regionZh": "湘潭",
  "difficulty": "easy",
  "timeMin": 22,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses no added oil—the larou renders enough fat—and adds a splash of light soy sauce only at the end for balance, not saltiness.",
  "versionNoteZh": "家常版不另加油（腊肉自出油），出锅前淋少许生抽调和，非增咸。",
  "tags": [
    "20-min",
    "weeknight",
    "pantry-staple"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather in Xiangtan ran a small grain shop in the 1950s—he’d toss leftover larou trimmings with sun-dried radish strips from his neighbor’s yard, stir-frying it over charcoal for lunch every Tuesday.",
  "storyZh": "我湘潭的爷爷五十年代开米铺，每周二中午就用腊肉边角料，配上邻居晒的萝卜干，在炭炉上快炒当午饭。",
  "ingredients": [
    {
      "id": "rb-01",
      "nameEn": "Hunan-style cured pork belly (larou)",
      "nameZh": "湖南腊肉（腊肉）",
      "pinyin": "là ròu",
      "amountMetric": "160 g",
      "amountUS": "5.6 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Trim excess hard rind; slice 3 mm thick against the grain. Substitute smoked pancetta (rind removed, blanched 90 sec).",
      "noteZh": "削去硬皮，逆纹切3毫米薄片；可选烟熏意式培根（去皮，焯水90秒）替代。",
      "termKey": "none"
    },
    {
      "id": "rb-02",
      "nameEn": "Sun-dried radish pickle (luobo gan)",
      "nameZh": "萝卜干",
      "pinyin": "luó bo gān",
      "amountMetric": "80 g",
      "amountUS": "¾ cup, chopped",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for golden-brown, chewy strips—not brittle or overly salty. Soak 5 min in cold water if too salty.",
      "noteZh": "选金黄有嚼劲者，忌过脆或过咸；若偏咸，冷水泡5分钟。",
      "termKey": "none"
    },
    {
      "id": "rb-03",
      "nameEn": "Garlic, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "12 g",
      "amountUS": "2 cloves, minced",
      "category": "produce",
      "pantry": "local",
      "note": "Use fresh garlic—not jarred paste—for sharp, clean aroma.",
      "noteZh": "务必用鲜蒜末，禁用瓶装蒜泥，保辛香清冽。",
      "termKey": "garlic"
    },
    {
      "id": "rb-04",
      "nameEn": "Light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds umami depth without overpowering—do not substitute dark soy.",
      "noteZh": "提鲜不抢味，不可用老抽替代。",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Heat a wok over medium-high heat until a drop of water sizzles and evaporates instantly. Add larou slices in a single layer.",
      "textZh": "空锅烧至滴水即爆裂，转中高火，腊肉平铺入锅。",
      "zhHint": "热锅冷肉激香",
      "stateNote": {
        "visual": "Wok surface shimmering faintly; water droplet dances and vanishes in <1 second.",
        "visualZh": "锅面微泛光；水珠弹跳并1秒内汽化。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "First wisp of smoke rises from dry wok.",
        "signalZh": "干锅初见青烟。"
      }
    },
    {
      "text": "Stir-fry larou until edges curl and fat begins to render—about 2 minutes. Do not brown deeply; aim for translucent, supple slices.",
      "textZh": "煸炒至肉片卷边、油脂初渗，约2分钟；勿焦黄，保持半透明柔韧。",
      "zhHint": "煸至微卷出油",
      "stateNote": {
        "visual": "Edges lightly curled; small beads of clear fat appear around slices.",
        "visualZh": "边缘微卷；腊肉片周缘渗出细小清亮油珠。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Slices release easily from wok base without sticking.",
        "signalZh": "肉片轻松离锅底，不粘连。"
      }
    },
    {
      "text": "Push larou to one side. Add minced garlic to the empty space and stir-fry 15 seconds until fragrant—but not browned.",
      "textZh": "将腊肉拨至锅边，空位下蒜末，煸香15秒（勿焦）。",
      "zhHint": "蒜末后下防苦",
      "stateNote": {
        "visual": "Garlic turns glossy and pale gold; no browning at edges.",
        "visualZh": "蒜末油亮、呈浅金色，边缘未褐。",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "heat": "medium-high",
        "signal": "Aromatic steam rises sharply—no burnt smell.",
        "signalZh": "辛香蒸汽骤起，无焦糊气。"
      }
    },
    {
      "text": "Add luobo gan and stir-fry 2 minutes, tossing constantly. The radish should soften slightly but retain toothsome bite.",
      "textZh": "下萝卜干，猛火快炒2分钟，不断翻动；萝卜干微软但仍爽脆。",
      "zhHint": "萝卜干要炒透不湿",
      "stateNote": {
        "visual": "Radish strips plump slightly and glisten with oil; no visible moisture pooling.",
        "visualZh": "萝卜干略膨润、泛油光；无明水析出。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "Sizzling sound remains steady and crisp.",
        "signalZh": "锅中持续清脆‘滋啦’声。"
      }
    },
    {
      "text": "Drizzle light soy sauce evenly over dish. Toss 30 seconds, then remove from heat immediately.",
      "textZh": "沿锅边淋入生抽，快速翻匀30秒，即关火出锅。",
      "zhHint": "生抽最后淋，保鲜亮",
      "stateNote": {
        "visual": "Sauce coats evenly; color deepens to warm amber—not dark brown.",
        "visualZh": "酱汁均匀裹附，色泽转为暖琥珀色，非深褐。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Aroma shifts from raw garlic to rounded, savory-sweet.",
        "signalZh": "香气由生蒜转为醇厚咸鲜甜香。"
      }
    }
  ],
  "tips": [
    "Soak luobo gan only if tasting salty—most Western brands are low-salt and need no soaking.",
    "Cut larou against the grain for tenderness, especially if using store-bought (often tougher).",
    "Serve hot with plain steamed rice—the radish’s tang cuts through the larou’s richness perfectly."
  ],
  "tipsZh": [
    "萝卜干仅尝咸才泡；多数西售品牌已低盐，无需泡。",
    "腊肉务必逆纹切，尤其市售品常较韧。",
    "配白米饭同食——萝卜干的微酸恰解腊肉丰腴。"
  ],
  "relatedSlugs": [
    "cured-meat-steamed-bundle"
  ],
  "image": "/images/recipes/radish-pickle-stirred-cured-pork.webp"
};
