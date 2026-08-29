import type { Recipe } from "@/lib/types";

/** Caramel Apples (拔丝苹果) — Seed batch */
export const caramel_apples: Recipe = {
  "id": "ba-si-ping-guo",
  "slug": "caramel-apples",
  "titleEn": "Caramel Apples",
  "titleZh": "拔丝苹果",
  "pinyin": "bá sī píng guǒ",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses a heavy-bottomed skillet and cold-water test for sugar stage—no candy thermometer needed—and serves with chilled sesame oil for immediate 'thread-pulling' contrast.",
  "versionNoteZh": "家常版用厚底平底锅+冷水测试判断糖温（无需糖果温度计），并配冰镇香油蘸食，冷热交织，拉丝更持久。",
  "tags": [
    "sweet",
    "dessert",
    "drawing-sugar"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every Mid-Autumn, my uncle in Beijing would pull sugar threads with chopsticks while telling moon legends—he said, 'Good caramel must singe your eyebrows, not burn your tongue.' He kept a bowl of icy water beside the stove to test sugar readiness, just like his father did in old Qianmen.",
  "storyZh": "每逢中秋，北京舅舅便用筷子拉糖丝，边讲月宫传说边说：‘好拔丝得燎眉毛，不烫舌尖。’他总在灶边备一碗冰水测糖温，正如前门老宅里祖父所教。",
  "ingredients": [
    {
      "id": "ba-01",
      "nameEn": "Granny Smith apples",
      "nameZh": "青蛇果",
      "pinyin": "qīng shé guǒ",
      "amountMetric": "300 g",
      "amountUS": "2 medium apples",
      "category": "produce",
      "pantry": "local",
      "note": "Must be tart, firm, and crisp—not Fuji or Gala. Peel, core, and cut into 2.5-cm cubes.",
      "noteZh": "须选酸脆青蛇果，不可用富士或嘎啦；去皮去核，切2.5厘米见方块。"
    },
    {
      "id": "ba-02",
      "nameEn": "granulated sugar",
      "nameZh": "白砂糖",
      "pinyin": "bái shā táng",
      "amountMetric": "120 g",
      "amountUS": "1/2 cup",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ba-03",
      "nameEn": "water",
      "nameZh": "水",
      "pinyin": "shuǐ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "ba-04",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Prep apples: Peel, core, and cut apples into 2.5-cm cubes. Toss with 1 tsp lemon juice to prevent browning. Pat *completely* dry with paper towels.",
      "textZh": "处理苹果：去皮去核，切2.5厘米方块。拌入1茶匙柠檬汁防氧化。务必用厨房纸彻底吸干。",
      "zhHint": "苹果要干，糖才粘",
      "stateNote": {
        "visual": "Cubes appear matte, no shine or moisture sheen.",
        "visualZh": "苹果块呈哑光状，无水光反光。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Paper towel shows no discoloration or dampness.",
        "signalZh": "厨房纸无褐渍或湿痕。"
      }
    },
    {
      "text": "Coat: In a bowl, toss apple cubes with 40 g sugar (1/3 of total) until evenly coated. Set aside 5 minutes to draw out slight moisture.",
      "textZh": "裹糖：碗中苹果块与40克糖（总量1/3）拌匀，静置5分钟，略析出水分助糖附着。",
      "zhHint": "糖先裹一层，静置更入味",
      "stateNote": {
        "visual": "Sugar begins to dissolve faintly on apple surfaces, turning slightly translucent.",
        "visualZh": "糖粒在苹果表面微融，略呈半透明。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Cubes feel slightly tacky, not wet or dry.",
        "signalZh": "苹果块微黏手，不湿亦不干。"
      }
    },
    {
      "text": "Fry apples: Heat 2 tbsp neutral oil in a heavy-bottomed skillet over medium-high heat. Fry apple cubes in batches until golden and slightly caramelized (2–3 min per batch). Drain on wire rack.",
      "textZh": "炸苹果：厚底锅中火加热2汤匙中性油。分批炸苹果块至金黄微焦糖化（每批2–3分钟）。沥油于晾架。",
      "zhHint": "分批炸，火候稳",
      "stateNote": {
        "visual": "Edges of cubes turn light amber; surface bubbles gently in oil.",
        "visualZh": "苹果块边缘呈浅琥珀色；油面微泛小泡。",
        "timeRef": "6–8 minutes total",
        "timeRefZh": "共6–8 分钟",
        "heat": "medium-high",
        "signal": "Oil shimmers but does not smoke; apples sizzle steadily.",
        "signalZh": "油面微光泛动但未冒烟；苹果持续均匀嘶响。"
      }
    },
    {
      "text": "Make caramel: Wipe skillet clean. Combine remaining 80 g sugar and 30 ml water. Heat over medium-low, stirring *only* until sugar dissolves. Then stop stirring—swirl pan gently. Cook until syrup turns light amber (160–170°C), ~6–7 min. Test with cold water: a drop forms brittle, snap-able threads.",
      "textZh": "熬糖：洗净锅具。余下80克糖与30毫升水入锅，中低温加热，仅搅拌至糖溶；之后停搅，轻晃锅。熬至浅琥珀色（约160–170°C），约6–7分钟。冷水测试：糖液滴入冰水即成脆硬可拉丝。",
      "zhHint": "糖水初搅，后晃不搅",
      "stateNote": {
        "visual": "Syrup bubbles become smaller, tighter, and golden—no large frothy bubbles.",
        "visualZh": "糖浆气泡变小、密集、呈金色，无大泡沫。",
        "timeRef": "6–7 minutes",
        "timeRefZh": "6–7 分钟",
        "heat": "medium-low",
        "signal": "Cold water test yields brittle, glass-like threads that snap cleanly.",
        "signalZh": "冰水测试得脆硬玻璃丝，一折即断。"
      }
    },
    {
      "text": "Combine: Immediately add warm apple cubes to hot caramel. Stir *once* with heatproof spatula to coat. Quickly pour onto oiled marble or cold plate.",
      "textZh": "裹糖：热糖浆中立即倒入温热苹果块，耐热刮刀快速翻拌1次裹匀。迅速倾倒在抹油石板或冰凉盘中。",
      "zhHint": "动作要快，一拌即出",
      "stateNote": {
        "visual": "Apples glisten under a thin, transparent amber glaze.",
        "visualZh": "苹果裹覆一层透亮琥珀薄衣。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "high",
        "signal": "Sugar hardens visibly at edges within 10 seconds of contact with cool surface.",
        "signalZh": "糖液接触凉面10秒内边缘即显硬化迹象。"
      }
    },
    {
      "text": "Serve: Cut into portions while warm. Serve immediately with chilled sesame oil for dipping—pull threads by dipping apple into oil, then lifting.",
      "textZh": "上桌：温热时分块。即刻配冰镇香油蘸食——苹果蘸油后提起，即可拉出细长糖丝。",
      "zhHint": "趁热分块，蘸油拉丝",
      "stateNote": {
        "visual": "Thin, continuous golden threads stretch 10–15 cm between chopsticks and apple.",
        "visualZh": "金黄细丝可延展10–15厘米不中断。",
        "timeRef": "within 1 minute of plating",
        "timeRefZh": "装盘后1分钟内",
        "heat": "medium",
        "signal": "Threads emit faint caramel scent and hold elasticity.",
        "signalZh": "糖丝散发焦糖香，富有弹性。"
      }
    }
  ],
  "tips": [
    "Use a marble or stainless steel surface—it cools sugar fastest for clean pulls.",
    "If sugar seizes, add 1 tsp hot water and reheat gently while stirring—do not overheat.",
    "Serve with chopsticks, not forks: tines disrupt thread formation."
  ],
  "tipsZh": [
    "务必用大理石或不锈钢台面——降温最快，拉丝最利落。",
    "若糖返砂，加1茶匙热水，小火边搅边融，切勿过热。",
    "配筷子而非叉子上桌：叉齿会切断糖丝。"
  ],
  "relatedSlugs": [
    "squirrel-fish",
    "chrysanthemum-tofu"
  ],
  "image": "/images/recipes/caramel-apples.webp"
};
