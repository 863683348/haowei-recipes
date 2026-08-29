import type { Recipe } from "@/lib/types";

/** Fresh Soy Milk with Crispy Youtiao (Dou Jiang You Tiao) (豆浆油条) — Seed batch */
export const soy_milk_and_youtiao: Recipe = {
  "id": "soy-milk-and-youtiao",
  "slug": "soy-milk-and-youtiao",
  "titleEn": "Fresh Soy Milk with Crispy Youtiao (Dou Jiang You Tiao)",
  "titleZh": "豆浆油条",
  "pinyin": "dòu jiāng yóu tiáo",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Snacks",
  "region": "Tianjin",
  "regionZh": "天津",
  "difficulty": "medium",
  "timeMin": 65,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version makes soy milk from scratch using soaked soybeans and a blender—no powdered mix—and fries youtiao in small batches for crisp, airy texture.",
  "versionNoteZh": "家常版用泡发黄豆现磨豆浆（非粉冲调），油条分批炸制，确保外酥内空。",
  "tags": [
    "breakfast",
    "make-ahead",
    "fry"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Every Sunday morning in Tianjin’s Ancient Culture Street, my uncle ran a stall where he’d shout, 'Hot dou jiang—still bubbling!' while pulling golden youtiao from the wok. He taught me to judge doneness by sound: 'When it sings like a cricket, it’s ready.'",
  "storyZh": "天津古文化街，舅舅每周日清晨支摊卖豆浆油条，总吆喝‘热豆浆——还咕嘟着呢！’他教我听油条炸熟的声音：‘吱吱叫像蟋蟀，就对了。’",
  "ingredients": [
    {
      "id": "sy-01",
      "nameEn": "dried soybeans",
      "nameZh": "黄豆",
      "pinyin": "huáng dòu",
      "amountMetric": "120 g",
      "amountUS": "3/4 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Soak overnight (8–12 hrs) in 4x volume cold water—beans should double in size.",
      "noteZh": "需提前8–12小时冷水浸泡，水量为豆4倍，豆胀至两倍大。"
    },
    {
      "id": "sy-02",
      "nameEn": "water (for blending)",
      "nameZh": "清水（用于搅拌）",
      "pinyin": "qīng shuǐ",
      "amountMetric": "900 ml",
      "amountUS": "3¾ cups",
      "category": "other",
      "pantry": "local",
      "note": "Use filtered water for clean taste.",
      "noteZh": "建议用过滤水，味道更纯。"
    },
    {
      "id": "sy-03",
      "nameEn": "youtiao (Chinese crullers)",
      "nameZh": "油条",
      "pinyin": "yóu tiáo",
      "amountMetric": "200 g",
      "amountUS": "2 medium sticks",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: frozen youtiao (thawed) or 2 plain doughnut holes fried until golden.",
      "noteZh": "可用冷冻油条（解冻）或2个原味甜甜圈洞炸至金黄替代。"
    },
    {
      "id": "sy-04",
      "nameEn": "sea salt",
      "nameZh": "海盐",
      "pinyin": "hǎi yán",
      "amountMetric": "1 g",
      "amountUS": "1/8 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Enhances soybean sweetness—do not omit.",
      "noteZh": "提显豆香甜味，不可省略。"
    }
  ],
  "steps": [
    {
      "text": "Drain soaked soybeans. Blend with 450 ml (1¾ cups) water on high for 2 minutes until completely smooth and frothy.",
      "textZh": "沥干泡豆，与450毫升水高速搅打2分钟，至细腻起泡。",
      "zhHint": "分次搅打更细腻",
      "stateNote": {
        "visual": "Creamy, pale beige liquid with fine bubbles clinging to sides.",
        "visualZh": "乳白细腻液体，杯壁挂细密气泡。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No visible bean particles remain.",
        "signalZh": "无豆渣残留。"
      }
    },
    {
      "text": "Strain mixture through a nut milk bag into a heavy-bottomed pot. Squeeze firmly to extract all liquid—discard pulp.",
      "textZh": "用坚果奶袋过滤入厚底锅，用力挤压取尽浆汁，弃渣。",
      "zhHint": "用力挤尽浆汁",
      "stateNote": {
        "visual": "Smooth, opaque white liquid with no specks.",
        "visualZh": "浆液洁白均匀，无颗粒。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "signal": "Bag yields only dry, compact pulp after squeezing.",
        "signalZh": "挤后袋中只剩干硬豆渣。"
      }
    },
    {
      "text": "Heat remaining 450 ml water in same pot. Add soy milk and salt. Bring to a rolling boil over medium-high heat, stirring constantly with a wooden spatula.",
      "textZh": "锅中另加450毫升水，倒入豆浆与盐，中大火持续搅拌至翻滚。",
      "zhHint": "防糊底，勤搅拌",
      "stateNote": {
        "visual": "Large, vigorous bubbles erupt continuously across surface.",
        "visualZh": "表面持续爆发大气泡。",
        "timeRef": "8–10 minutes",
        "timeRefZh": "8–10 分钟",
        "heat": "medium-high",
        "signal": "Foam rises rapidly and threatens to boil over.",
        "signalZh": "泡沫快速涌起，即将溢锅。"
      }
    },
    {
      "text": "Reduce heat to low and simmer uncovered for 15 minutes, skimming foam every 3 minutes. Foam must be removed to prevent bitterness.",
      "textZh": "转小火敞盖续煮15分钟，每3分钟撇净浮沫——去沫防苦。",
      "zhHint": "浮沫去净才香醇",
      "stateNote": {
        "visual": "Thin, beige foam gathers at edges and center.",
        "visualZh": "浅褐色浮沫聚于锅边与中心。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "Foam regenerates visibly every 2–3 minutes.",
        "signalZh": "每2–3分钟明显再生浮沫。"
      }
    },
    {
      "text": "Meanwhile, heat 5 cm (2 inches) neutral oil in a wok to 180°C (356°F). Fry youtiao in batches for 2–3 minutes until puffed and golden. Drain on wire rack.",
      "textZh": "另起锅，倒油5厘米深，烧至180°C，分批炸油条2–3分钟至蓬松金黄，架上沥油。",
      "zhHint": "油温准，分批炸",
      "stateNote": {
        "visual": "Youtiao floats upright and swells dramatically within 10 seconds.",
        "visualZh": "油条入锅10秒内直立浮起、大幅膨胀。",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium-high",
        "signal": "Oil shimmers steadily; chopstick inserted bubbles vigorously.",
        "signalZh": "油面稳定微漾；筷子插入冒密集气泡。"
      }
    }
  ],
  "tips": [
    "For silkier soy milk, blend soaked beans twice—first coarse, then fine.",
    "Refrigerate leftover soy milk up to 3 days—reheat gently before serving.",
    "Serve youtiao within 10 minutes of frying for maximum crispness."
  ],
  "tipsZh": [
    "追求更顺滑豆浆，可将泡豆分两次搅打：先粗打，再细打。",
    "剩余豆浆冷藏保存3天，饮用前需文火复热。",
    "油条炸好10分钟内食用，酥脆度最佳。"
  ],
  "relatedSlugs": [
    "sour-plum-drink",
    "ginger-milk-curd"
  ],
  "image": "/images/recipes/soy-milk-and-youtiao.webp"
};
