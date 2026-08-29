import type { Recipe } from "@/lib/types";

/** Beer Duck (啤酒鸭) — Seed batch */
export const beer_duck: Recipe = {
  "id": "pi-jiu-ya",
  "slug": "beer-duck",
  "titleEn": "Beer Duck",
  "titleZh": "啤酒鸭",
  "pinyin": "pí jiǔ yā",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 65,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses duck leg quarters and local lager instead of premium craft beer — flavor comes from slow braise, not alcohol intensity.",
  "versionNoteZh": "家庭版选用鸭腿四分块与普通拉格啤酒，风味来自慢炖而非酒精烈度。",
  "tags": [
    "one-pot",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Chengdu’s Jinjiang district ran a small duck stall near Chunxi Road. He’d marinate duck legs overnight in ginger, star anise, and a splash of beer — ‘to take the gamey edge off,’ he’d say — then braise them slowly while steaming buns for lunch rush.",
  "storyZh": "我在成都锦江区的舅舅在春熙路旁摆鸭肉摊。他总提前一晚用姜、八角和一点啤酒腌鸭腿——‘去腥提鲜’，他说——再慢火卤制，同时蒸馒头供午市。",
  "ingredients": [
    {
      "id": "bd-01",
      "nameEn": "duck leg quarters (skin-on, bone-in)",
      "nameZh": "鸭腿块（带皮带骨）",
      "pinyin": "yā tuǐ kuài",
      "amountMetric": "800 g",
      "amountUS": "1.75 lbs",
      "category": "protein",
      "pantry": "local",
      "note": "Rinse and pat dry; trim excess fat if very thick",
      "noteZh": "冲洗后擦干；肥厚处可修去多余脂肪"
    },
    {
      "id": "bd-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bd-03",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "bd-04",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "3 pcs",
      "amountUS": "3 pcs",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "bd-05",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "生姜（切片）",
      "pinyin": "shēng jiāng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp, sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bd-06",
      "nameEn": "garlic cloves, lightly crushed",
      "nameZh": "大蒜（轻拍）",
      "pinyin": "dà suàn",
      "amountMetric": "12 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "bd-07",
      "nameEn": "lager beer (e.g., Tsingtao, Budweiser, or Heineken)",
      "nameZh": "拉格啤酒（如青岛、百威、喜力）",
      "pinyin": "lā gé pí jiǔ",
      "amountMetric": "360 ml",
      "amountUS": "1.5 cups",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Do NOT use stout, IPA, or non-alcoholic beer",
      "noteZh": "禁用世涛、IPA或无醇啤酒"
    }
  ],
  "steps": [
    {
      "text": "Blanch duck pieces in boiling water with 1 tsp ginger slices for 3 minutes. Drain, rinse under cold water, and pat dry.",
      "textZh": "鸭块与1茶匙姜片同入沸水焯烫3分钟，捞出冲凉水，彻底擦干。",
      "zhHint": "焯水去浮沫",
      "stateNote": {
        "visual": "Water turns cloudy gray; foam rises to surface",
        "visualZh": "水变灰浊；浮沫聚于水面",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Foam stops rising; meat firms up slightly",
        "signalZh": "浮沫不再上涌；肉质略紧实"
      }
    },
    {
      "text": "Heat wok over medium-high. Add 1 tbsp neutral oil. Sear duck skin-side down until deeply golden and crisp — about 4 minutes.",
      "textZh": "中大火烧热炒锅，加1汤匙中性油。鸭皮朝下煎至深金酥脆，约4分钟。",
      "zhHint": "先煎皮，逼出油脂",
      "stateNote": {
        "visual": "Skin blisters and pulls away from bone at edges",
        "visualZh": "鸭皮起泡，边缘自然离骨",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-high",
        "signal": "Oil sizzles loudly; skin releases easily from pan",
        "signalZh": "油声猛烈；鸭皮可轻松离锅"
      }
    },
    {
      "text": "Push duck to sides. Add remaining ginger, garlic, and star anise to center. Stir-fry 1 minute until aromatic.",
      "textZh": "将鸭块推至锅边，中心下剩余姜、蒜、八角，煸炒1分钟至出香。",
      "zhHint": "料头居中爆香",
      "stateNote": {
        "visual": "Spices darken slightly; oil glistens with golden flecks",
        "visualZh": "香料微褐；油面泛金斑",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Warm, licorice-like aroma fills air",
        "signalZh": "空气中弥漫甘草暖香"
      }
    },
    {
      "text": "Return duck to center. Pour in light soy sauce, black vinegar, and beer. Liquid should just cover duck. Bring to boil, then reduce heat to low, cover, and braise 45 minutes.",
      "textZh": "鸭块归中，淋入生抽、陈醋和啤酒，液面刚没过鸭块。大火烧沸后转小火，加盖焖炖45分钟。",
      "zhHint": "沸后转小火慢煨",
      "stateNote": {
        "visual": "Liquid simmers with gentle, even bubbles across surface",
        "visualZh": "汤汁表面匀速轻滚",
        "timeRef": "45 minutes",
        "timeRefZh": "45 分钟",
        "heat": "low",
        "signal": "Duck meat separates easily from bone with fork",
        "signalZh": "叉子轻碰，鸭肉即离骨"
      }
    },
    {
      "text": "Uncover and raise heat to medium-high. Simmer 8–10 minutes until sauce reduces to thick, glossy glaze clinging to duck.",
      "textZh": "开盖，中大火收汁8–10分钟，至酱汁浓稠油亮、裹附鸭块。",
      "zhHint": "收至油亮挂汁",
      "stateNote": {
        "visual": "Sauce coats duck evenly; droplets bead on surface like honey",
        "visualZh": "酱汁均匀裹鸭；表面如蜂蜜般成珠",
        "timeRef": "8–10 minutes",
        "timeRefZh": "8–10 分钟",
        "heat": "medium-high",
        "signal": "Bubbles pop slower, thicker; aroma becomes malty and deep",
        "signalZh": "气泡变慢变厚；麦芽香醇厚悠长"
      }
    }
  ],
  "tips": [
    "Duck skin must be fully dried before searing — moisture causes splatter and prevents crispness.",
    "Substitute rice vinegar if Chinese black vinegar is unavailable (use ½ tsp extra sugar).",
    "For deeper color, add 1 tsp dark soy sauce in last 5 minutes — optional, not traditional."
  ],
  "tipsZh": [
    "煎鸭前务必擦干表皮——水分会导致溅油且无法酥脆。",
    "若无陈醋，可用米醋替代（另加½茶匙糖）。",
    "如需加深酱色，可在最后5分钟加1茶匙老抽（非传统，酌情使用）。",
    "This dish tastes even better the next day — flavors meld as it cools."
  ],
  "relatedSlugs": [
    "taiwanese-three-cup-chicken"
  ],
  "image": "/images/recipes/beer-duck.webp"
};
