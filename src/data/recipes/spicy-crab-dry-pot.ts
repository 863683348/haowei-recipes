import type { Recipe } from "@/lib/types";

/** Spicy Crab Dry Pot (香辣蟹) — Seed batch */
export const spicy_crab_dry_pot: Recipe = {
  "id": "xiang-la-xie",
  "slug": "spicy-crab-dry-pot",
  "titleEn": "Spicy Crab Dry Pot",
  "titleZh": "香辣蟹",
  "pinyin": "xiāng là xiè",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips deep-frying: crab pieces are par-boiled, then stir-braised with toasted spices and doubanjiang—crisp-tender, deeply aromatic, just like Grandma Li’s kitchen in Yuzhong District.",
  "versionNoteZh": "家常版不油炸：蟹块先焯水定型，再与焙香调料、豆瓣酱同焖——外酥里嫩、辛香扑鼻，一如渝中区李婆婆灶台上的烟火气。",
  "tags": [
    "30-min",
    "weeknight",
    "seafood"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every Lunar New Year, Grandma Li in Chongqing would crack live crabs herself—blue swimming crabs from the Yangtze estuary—and stir-fry them with aged doubanjiang and hand-toasted Sichuan peppercorns. She taught me to listen for the ‘crackle-hiss’ when spices hit hot oil—it meant the wok was ready.",
  "storyZh": "每年春节，重庆的李婆婆都会亲手敲开长江口捕的青蟹，用陈年豆瓣酱和手焙花椒猛火爆炒。她教我听油锅里‘噼啪嘶嘶’声——那是锅温到位的暗号。",
  "ingredients": [
    {
      "id": "xlx-01",
      "nameEn": "blue swimming crab or Dungeness crab, cleaned and cut into 6–8 pieces (legs cracked)",
      "nameZh": "青蟹或珍宝蟹（洗净切块，腿骨拍裂）",
      "pinyin": "qīng xiè huò zhēn bǎo xiè",
      "amountMetric": "400 g",
      "amountUS": "1 ¾ cups (cut pieces)",
      "category": "protein",
      "pantry": "local",
      "note": "Frozen pre-cooked crab works—thaw fully and pat dry. Avoid imitation crab.",
      "noteZh": "可用已熟冷冻蟹块（彻底解冻并擦干），禁用蟹棒。"
    },
    {
      "id": "xlx-02",
      "nameEn": "Sichuan doubanjiang (fermented broad-bean chili paste)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "25 g",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "xlx-03",
      "nameEn": "Sichuan peppercorns, toasted and coarsely ground",
      "nameZh": "花椒（焙香后粗磨）",
      "pinyin": "huā jiāo",
      "amountMetric": "3 g",
      "amountUS": "1 tsp whole, ground",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "xlx-04",
      "nameEn": "dried red chilies, stemmed and broken",
      "nameZh": "干红辣椒（去梗掰段）",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "8 g",
      "amountUS": "12–15 pieces",
      "category": "spice",
      "pantry": "asian",
      "note": "Substitute crushed red pepper (5 g / 1 tsp), reduce by ⅓ if sensitive to heat.",
      "noteZh": "可用红椒碎替代（5克/1茶匙），怕辣者减1/3。"
    },
    {
      "id": "xlx-05",
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
      "id": "xlx-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Bring a pot of salted water (1 L) to boil. Add crab pieces and par-boil 2 minutes. Drain, rinse under cold water, and pat *very* dry.",
      "textZh": "烧开1升盐水（1小勺盐），放入蟹块焯水2分钟；捞出过凉水，彻底擦干。",
      "zhHint": "焯水定型，擦干防溅"
    },
    {
      "text": "Heat 40 ml (2½ tbsp) neutral oil in a wok over medium heat. Add Sichuan peppercorns and dried chilies. Toast 45 seconds until fragrant and chilies darken slightly.",
      "textZh": "锅中倒入40毫升（2½汤匙）油，中火下花椒与干辣椒，焙香45秒至微呛香、辣椒颜色略深。",
      "zhHint": "小火焙香",
      "stateNote": {
        "visual": "Chilies deepen to brick-red; peppercorns puff slightly and release citrusy aroma",
        "visualZh": "辣椒转砖红色；花椒微膨，散发柑橘清香",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium",
        "signal": "Aromatic steam rises—no smoke or bitter smell",
        "signalZh": "升腾辛香蒸汽，无烟无焦苦味"
      }
    },
    {
      "text": "Push aromatics to the side. Add doubanjiang to center and stir-fry 1 minute until oil turns red and paste thickens slightly.",
      "textZh": "将香料拨至锅边，豆瓣酱放入中心，中火煸炒1分钟至油色变红、酱体微稠。",
      "zhHint": "酱料单独煸透",
      "stateNote": {
        "visual": "Red oil separates around edges of paste; surface looks glossy and cohesive",
        "visualZh": "酱周析出红油，酱体表面油亮、成团不散",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Fragrance shifts from raw bean to deep, savory umami",
        "signalZh": "气味由生豆腥转为醇厚酱香"
      }
    },
    {
      "text": "Return crab to wok. Add light soy sauce and Shaoxing wine. Toss over medium-high heat for 2 minutes, pressing gently to coat all surfaces.",
      "textZh": "蟹块倒回锅中，淋入生抽与绍酒，中大火翻炒2分钟，边炒边轻压使酱汁裹匀。",
      "zhHint": "压炒入味"
    },
    {
      "text": "Reduce heat to medium-low. Cover and steam-braise 3 minutes. Uncover, increase heat to high, and stir-fry 1 more minute until sauce is nearly absorbed and crab glistens.",
      "textZh": "转中小火，盖盖焖焗3分钟；开盖，转大火收汁1分钟，至酱汁近干、蟹块油亮。",
      "zhHint": "先焖后收",
      "stateNote": {
        "visual": "Crab pieces glisten with a lacquered sheen; minimal sauce clings to crevices",
        "visualZh": "蟹块泛琥珀光泽，酱汁仅薄附于缝隙间",
        "timeRef": "4 minutes total (3 covered + 1 uncovered)",
        "timeRefZh": "共4分钟（焖3分+收1分）",
        "signal": "Edges of crab begin to crisp slightly; aroma intensifies",
        "signalZh": "蟹边微脆，辛香更浓"
      }
    }
  ],
  "tips": [
    "Crab shells soften beautifully with this method—no need for heavy cleavers or pre-cracking beyond legs.",
    "Toasting Sichuan peppercorns unlocks their numbing citrus oils; never skip this step.",
    "If using frozen crab, add 30 seconds to the par-boil time to ensure thorough heating."
  ],
  "tipsZh": [
    "此法让蟹壳自然软化，无需重刀剁，腿壳拍裂足矣。",
    "花椒必须现焙——激发其麻香与柑橘精油，不可省略。",
    "若用冷冻蟹块，焯水时间延长30秒以确保彻底热透。"
  ],
  "relatedSlugs": [
    "spicy-shrimp-dry-pot"
  ],
  "image": "/images/recipes/spicy-crab-dry-pot.webp"
};
