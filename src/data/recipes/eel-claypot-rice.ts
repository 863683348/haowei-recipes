import type { Recipe } from "@/lib/types";

/** Grilled Eel Clay Pot Rice (鳗鱼煲仔饭) — Day batch */
export const eel_claypot_rice: Recipe = {
  "id": "eel-claypot-rice",
  "slug": "eel-claypot-rice",
  "titleEn": "Grilled Eel Clay Pot Rice",
  "titleZh": "鳗鱼煲仔饭",
  "pinyin": "mán yú bāo zǎi fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "Home cooks use ready-glazed vacuum-packed kabayaki eel from the Asian freezer case and warm it on top of the rice. Hong Kong clay pot shops grill fresh eel to order, glaze it twice, and lay it over the rice at the last second so the lacquer never goes tacky.",
  "versionNoteZh": "家常版用亚洲超市冷冻柜里现成的蒲烧鳗鱼，放在饭面上加热即可；香港煲仔饭店是现烤鲜鳗、刷两次酱，最后一秒才铺上饭面，酱面永远不会返黏。",
  "tags": [
    "45-min",
    "claypot",
    "cantonese",
    "seafood",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "鳗鱼煲仔饭 is what happens when Cantonese clay pot technique meets Japanese unagi. The sweet-savoury kabayaki lacquer melts into the rice as the pot rests, so the bottom of the dish tastes like grilled eel and the top tastes like clean rice. It is the richest pot in the family and the fastest to assemble.",
  "storyZh": "鳗鱼煲仔饭是粤式煲仔技法遇上日式蒲烧鳗鱼的产物。静置时甜咸的蒲烧酱会融进米饭里，所以这道菜下层是烤鳗鱼的味道，上层是清米的味道。它是煲仔饭家族里最浓、也最快能端上桌的一锅。",
  "ingredients": [
    {
      "id": "ecl-01",
      "nameEn": "jasmine rice, rinsed",
      "nameZh": "茉莉香米，淘洗",
      "pinyin": "xiāng mǐ",
      "amountMetric": "220 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Rinsed until the water runs clear and drained well",
      "noteZh": "淘到水清后彻底沥干"
    },
    {
      "id": "ecl-02",
      "nameEn": "glazed kabayaki eel fillet",
      "nameZh": "蒲烧鳗鱼柳",
      "pinyin": "pú shāo mán yú",
      "amountMetric": "250 g",
      "amountUS": "9 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Vacuum-packed grilled eel from the Asian freezer aisle; thaw fully before using",
      "noteZh": "亚洲超市冷冻区的真空包装蒲烧鳗鱼；使用前完全解冻"
    },
    {
      "id": "ecl-03",
      "nameEn": "mirin",
      "nameZh": "味淋",
      "pinyin": "wèi lín",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "mirin"
    },
    {
      "id": "ecl-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ecl-05",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "ecl-06",
      "nameEn": "fresh ginger, shredded",
      "nameZh": "鲜姜，切丝",
      "pinyin": "jiāng sī",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "note": "Cuts the richness of the eel",
      "noteZh": "解鳗鱼的腻",
      "termKey": "ginger"
    },
    {
      "id": "ecl-07",
      "nameEn": "scallion, sliced thin",
      "nameZh": "小葱，切细葱花",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ecl-08",
      "nameEn": "toasted sesame seeds",
      "nameZh": "熟白芝麻",
      "pinyin": "bái zhī má",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-seeds"
    },
    {
      "id": "ecl-09",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Films the pot so the crust forms",
      "noteZh": "给锅上油膜，才能出锅巴"
    }
  ],
  "steps": [
    {
      "text": "Thaw the eel completely and cut it crosswise into 3 cm pieces. Reserve any glaze left in the packet.",
      "textZh": "鳗鱼完全解冻后横切成3厘米段，包装里剩下的酱汁留用。",
      "zhHint": "解冻切段",
      "stateNote": {
        "visual": "Flesh is soft to the touch with no ice crystals in the centre; each piece shows clean white flesh under a dark lacquer",
        "visualZh": "肉质按下去柔软，中心没有冰晶；每块都能看到酱色下的洁白鱼肉",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "A knife slides through with no resistance and no frost in the cut",
        "signalZh": "刀切下去毫无阻力，切面没有霜花"
      }
    },
    {
      "text": "Put the drained rice in the clay pot with 300 ml (1¼ cups) water and the oil. Bring to a boil over medium heat, stirring once.",
      "textZh": "沥干的米倒入砂锅，加300毫升水与油。中火烧沸，搅一次。",
      "zhHint": "砂锅下米加水",
      "stateNote": {
        "visual": "Milky water boiling across the whole surface; grains move sluggishly rather than swirling freely",
        "visualZh": "乳白的水在整个锅面沸腾；米粒缓慢翻动而非自由打转",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium",
        "signal": "Bubbles break through the centre, not just the rim",
        "signalZh": "锅中央也有气泡冒出破裂，不只是锅边"
      }
    },
    {
      "text": "Cover, drop to the lowest heat and cook 14 minutes until the water has been absorbed and small steam holes pock the surface.",
      "textZh": "加盖转最小火煮14分钟，至水分被吸干、饭面出现细小的气孔。",
      "zhHint": "小火焖饭",
      "stateNote": {
        "visual": "No free liquid remains and the surface is dotted with small craters where steam escaped",
        "visualZh": "没有流动的汤水，饭面布满蒸汽冲出的小气孔",
        "timeRef": "14 minutes",
        "timeRefZh": "14 分钟",
        "heat": "low",
        "signal": "Steam coming from under the lid has thinned noticeably",
        "signalZh": "盖边漏出的蒸汽明显变稀"
      }
    },
    {
      "text": "Lay the eel pieces over the rice in one layer and spoon the reserved glaze, mirin and dark soy over them. Cover again and cook on the lowest heat 8 minutes.",
      "textZh": "鳗鱼单层铺在饭面上，把留用的酱汁、味淋和老抽淋在上面。再加盖最小火煮8分钟。",
      "zhHint": "铺鳗鱼淋酱",
      "stateNote": {
        "visual": "The lacquer has loosened and run in dark rivulets down into the rice; the eel looks glossy and heated through",
        "visualZh": "酱汁化开，顺着深色的细流渗进米饭；鳗鱼油亮、已热透",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "low",
        "signal": "The pot smells sweet and caramelised rather than fishy",
        "signalZh": "锅里飘出焦糖甜香而不是鱼腥味"
      },
      "tip": "Glaze goes on now, not earlier. Earlier means it caramelises onto the pot bottom and turns bitter.",
      "tipZh": "酱汁这时候才淋，不能更早。太早会焦化粘在锅底发苦。"
    },
    {
      "text": "Raise to medium-low for 5–6 minutes to set the crust, listening for the faint crackle.",
      "textZh": "转中小火5–6分钟让锅巴定型，听着那点轻微的爆裂声。",
      "zhHint": "中火逼锅巴",
      "stateNote": {
        "visual": "Steam is nearly gone and the aroma has a faint toasted edge",
        "visualZh": "蒸汽基本散尽，香气多了一丝微焦",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium-low",
        "signal": "A dry crackle is audible at the base of the pot",
        "signalZh": "能听见锅底发出干脆的爆裂声"
      }
    },
    {
      "text": "Off the heat, rest 5 minutes. Scatter ginger, scallion and sesame seeds, and serve with extra light soy at the table.",
      "textZh": "离火静置5分钟。撒姜丝、葱花与芝麻，配额外生抽上桌。",
      "zhHint": "静置撒料",
      "stateNote": {
        "visual": "Rice beneath the eel is stained amber-brown and a golden crust comes away in sheets where you scrape",
        "visualZh": "鳗鱼下方的米饭被染成琥珀褐色，刮开底部能成片掀起金黄锅巴",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "The spoon lifts crisp layers rather than loose grains",
        "signalZh": "勺子掀起的是脆片而不是散粒"
      }
    }
  ],
  "tips": [
    "Buy the eel glazed, not plain — making kabayaki sauce from scratch is a project for another day.",
    "The ginger is functional here, not decorative. Skip it and the pot tastes cloying by the third bite.",
    "Warm the knife under hot water before cutting the eel; cold steel tears the lacquer."
  ],
  "tipsZh": [
    "买蒲烧味而不是原味鳗鱼——从零熬蒲烧汁是另一天的工程。",
    "这里的姜丝是功能性的，不是装饰。省掉它，第三口就会觉得腻。",
    "切鳗鱼前把刀在热水里烫一下；冷刀会扯坏酱皮。"
  ],
  "relatedSlugs": [
    "clay-pot-rice",
    "crispy-eel-with-sizzling-oil"
  ],
  "image": "/images/recipes/crispy-eel-with-sizzling-oil.webp"
};
