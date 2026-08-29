import type { Recipe } from "@/lib/types";

/** Clay Pot Bok Choy & Vermicelli (砂锅白菜粉丝) — Seed batch */
export const clay_pot_bok_choy_vermicelli: Recipe = {
  "id": "sha-guo-bai-cai-fen-si",
  "slug": "clay-pot-bok-choy-vermicelli",
  "titleEn": "Clay Pot Bok Choy & Vermicelli",
  "titleZh": "砂锅白菜粉丝",
  "pinyin": "shā guō bái cài fěn sī",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Jinan",
  "regionZh": "济南",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips pork belly and uses only cabbage, vermicelli, and ginger—simple, nourishing, and deeply comforting. My uncle in Licheng made this every winter solstice, saying, 'White cabbage clears the lungs, rice noodles warm the bones.'",
  "versionNoteZh": "家常版不放五花肉，只用白菜、粉丝与姜丝——朴素养人，暖身暖心。我历城区的舅舅每逢冬至必做，说：‘白菜清肺，米线暖骨。’",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "When I stayed with my paternal grandparents in Jinan’s downtown during winter break, Grandma would wake before dawn to shred Napa cabbage by hand—her knuckles always slightly red from the cold—and stir-fry ginger in the clay pot until golden before adding broth and rice vermicelli.",
  "storyZh": "寒假住在济南市中心的祖父母家时，奶奶总在凌晨起身亲手切娃娃菜——冻红的指节还沾着菜屑——先在砂锅里把姜丝煸至金黄，再下高汤与米线。",
  "ingredients": [
    {
      "id": "bc-01",
      "nameEn": "Napa cabbage",
      "nameZh": "娃娃菜",
      "pinyin": "wá wá cài",
      "amountMetric": "300 g",
      "amountUS": "1 small head (6 cups shredded)",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute regular green cabbage if unavailable; shred finely.",
      "noteZh": "若无娃娃菜，可用普通圆白菜替代，需切细丝。"
    },
    {
      "id": "bc-02",
      "nameEn": "rice vermicelli",
      "nameZh": "大米粉丝",
      "pinyin": "dà mǐ fěn sī",
      "amountMetric": "80 g",
      "amountUS": "2 oz (1 bundle)",
      "category": "staple",
      "pantry": "asian",
      "note": "Soak in room-temp water 10 min until flexible but not mushy.",
      "noteZh": "室温水泡10分钟至柔软但不断。"
    },
    {
      "id": "bc-03",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bc-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Shred cabbage leaves finely; rinse and drain well. Grate ginger finely.",
      "textZh": "将娃娃菜切极细丝，洗净沥干；生姜擦茸。",
      "zhHint": "细丝、沥干、擦茸",
      "stateNote": {
        "visual": "Cabbage shreds are uniform, 2 mm wide; no pooling water.",
        "visualZh": "菜丝宽约2毫米，无积水。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Shreds spring back slightly when pinched.",
        "signalZh": "菜丝轻掐后略有回弹。"
      }
    },
    {
      "text": "Heat 1 tsp oil in clay pot over medium heat. Add ginger and stir 30 seconds until fragrant—do not brown.",
      "textZh": "砂锅中火加热，下姜茸煸30秒至香，不可焦。",
      "zhHint": "闻香即止",
      "stateNote": {
        "visual": "Ginger turns translucent, edges barely golden.",
        "visualZh": "姜茸变半透明，边缘微黄。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Sharp, clean aroma—no acrid or burnt notes.",
        "signalZh": "辛香清冽，无焦苦气。"
      }
    },
    {
      "text": "Add cabbage and stir-fry 2 minutes until slightly softened but still crisp.",
      "textZh": "下白菜丝翻炒2分钟，至略软但仍脆。",
      "zhHint": "断生保脆",
      "stateNote": {
        "visual": "Leaves turn bright pale green; edges curl slightly.",
        "visualZh": "菜叶转为鲜淡绿色，边缘微卷。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Sizzling sound remains steady, not fading.",
        "signalZh": "锅中持续响亮滋滋声，未减弱。"
      }
    },
    {
      "text": "Pour in 300 ml hot water (or vegetable broth). Simmer 3 minutes.",
      "textZh": "冲入300毫升热水（或素高汤），煮3分钟。",
      "zhHint": "滚水入锅",
      "stateNote": {
        "visual": "Liquid reduces slightly; cabbage releases subtle sweetness.",
        "visualZh": "汤汁微减，白菜渗出清甜。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Bubbles break softly at surface—no splashing.",
        "signalZh": "汤面轻破泡，无飞溅。"
      }
    },
    {
      "text": "Drain vermicelli and add to pot. Stir gently. Drizzle light soy sauce. Simmer 2 more minutes until noodles absorb broth and soften fully.",
      "textZh": "粉丝沥干入锅，轻拌匀；淋入生抽，再炖2分钟至吸饱汤汁、软而不烂。",
      "zhHint": "轻拌、吸汁、软韧",
      "stateNote": {
        "visual": "Vermicelli is opaque and plump, no hard core visible.",
        "visualZh": "粉丝呈乳白饱满状，无硬芯。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Noodles separate easily with chopsticks—no clumping.",
        "signalZh": "筷子轻拨即散，不结团。"
      }
    }
  ],
  "tips": [
    "Rice vermicelli expands dramatically—measure dry weight before soaking.",
    "For depth, add 1/4 tsp white pepper just before serving.",
    "Clay pot retains heat: use oven mitts and place on trivet."
  ],
  "tipsZh": [
    "大米粉丝泡发后体积剧增，请按干重称量。",
    "起锅前撒1/4茶匙白胡椒粉，提鲜增厚。",
    "砂锅极烫：务必戴隔热手套，并置于隔热垫上。"
  ],
  "relatedSlugs": [
    "clay-pot-tofu"
  ],
  "image": "/images/recipes/clay-pot-bok-choy-vermicelli.webp"
};
