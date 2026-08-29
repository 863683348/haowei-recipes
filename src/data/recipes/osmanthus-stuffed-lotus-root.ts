import type { Recipe } from "@/lib/types";

/** Osmanthus-Stuffed Lotus Root (桂花糖藕) — Seed batch */
export const osmanthus_stuffed_lotus_root: Recipe = {
  "id": "gui-hua-tang-ou",
  "slug": "osmanthus-stuffed-lotus-root",
  "titleEn": "Osmanthus-Stuffed Lotus Root",
  "titleZh": "桂花糖藕",
  "pinyin": "guì huā táng ǒu",
  "cuisine": "甜品饮品",
  "cuisineEn": "Dessert & Beverage",
  "region": "Hangzhou",
  "regionZh": "杭州",
  "difficulty": "medium",
  "timeMin": 110,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses traditional rice stuffing and double-boiling for even caramelization — no corn syrup or artificial color, unlike some commercial versions.",
  "versionNoteZh": "家常版用传统糯米馅、双层锅隔水慢煨，实现均匀糖色；无玉米糖浆或人工色素。",
  "tags": [
    "make-ahead",
    "impressive",
    "festive"
  ],
  "dietary": [
    "vegetarian",
    "vegan",
    "gluten-free"
  ],
  "story": "Every Mid-Autumn in Hangzhou, my great-aunt Hong would stuff lotus root with glutinous rice, then braise it for two hours in brown sugar and osmanthus — saying the holes ‘hold moonlight, and the sugar holds memory.’ She’d slice it paper-thin with a cleaver, dusted with more osmanthus.",
  "storyZh": "每年杭州中秋，姑婆红总用糯米填满藕孔，再以红糖桂花慢煨两小时——说‘藕眼藏月光，糖色藏记忆’。她用菜刀片成纸薄圆片，再撒一层干桂花。",
  "ingredients": [
    {
      "id": "gh-01",
      "nameEn": "fresh lotus root (1 large, 25–30 cm, unblemished)",
      "nameZh": "鲜莲藕（1节，25–30厘米，表皮完好）",
      "pinyin": "xiān lián ǒu",
      "amountMetric": "500 g",
      "amountUS": "1 large (about 1 lb)",
      "category": "produce",
      "pantry": "asian",
      "note": "Look for smooth, light tan skin with tight, closed pores — avoid hollow or spongy ends.",
      "noteZh": "选表皮浅褐光滑、孔眼紧闭者；避空心或绵软藕节。"
    },
    {
      "id": "gh-02",
      "nameEn": "glutinous rice (short-grain, soaked)",
      "nameZh": "糯米（短粒，已浸泡）",
      "pinyin": "nuò mǐ",
      "amountMetric": "120 g",
      "amountUS": "⅔ cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Soak in cold water 4 hours or overnight — rice should be plump and opaque.",
      "noteZh": "冷水浸泡4小时或隔夜，米粒饱满不透明。"
    },
    {
      "id": "gh-03",
      "nameEn": "brown rock sugar (or dark brown sugar)",
      "nameZh": "红冰糖（或深棕糖）",
      "pinyin": "hóng bīng táng",
      "amountMetric": "150 g",
      "amountUS": "⅔ cup packed",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Red rock sugar gives authentic amber hue; substitute dark brown sugar if unavailable.",
      "noteZh": "红冰糖赋予正宗琥珀色；若无可用深棕糖替代。"
    },
    {
      "id": "gh-04",
      "nameEn": "dried osmanthus flowers (Gui Hua)",
      "nameZh": "干桂花",
      "pinyin": "gān guì huā",
      "amountMetric": "2 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Substitute: ½ tsp food-grade osmanthus extract + ½ tsp honey (add in final step).",
      "noteZh": "替代：桂花香精½茶匙+蜂蜜½茶匙（最后加入）。"
    }
  ],
  "steps": [
    {
      "text": "Scrub lotus root under running water with a vegetable brush. Trim both ends. Using a chopstick or narrow spoon handle, gently push soaked glutinous rice into each hole until tightly packed — tap root lightly to settle.",
      "textZh": "莲藕刷洗干净，切去两头。用筷子或细勺柄将泡好的糯米逐孔塞紧，轻拍藕身助其压实。",
      "zhHint": "逐孔填米",
      "stateNote": {
        "visual": "Rice protrudes 2–3 mm from each hole; no gaps visible when held to light.",
        "visualZh": "米粒微凸孔口2–3毫米；对光无漏隙。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "Tapping produces a solid, dull thud — not hollow echo.",
        "signalZh": "轻叩发出沉实钝响，非空洞回声。"
      }
    },
    {
      "text": "Bring a large pot of water to boil. Carefully lower stuffed lotus root into boiling water and blanch for 3 minutes. Remove and rinse under cold water to stop cooking.",
      "textZh": "大锅烧沸水，轻放藕节焯烫3分钟，捞出冲凉水停熟。",
      "zhHint": "焯水定型",
      "stateNote": {
        "visual": "Surface turns faintly pinkish-beige; rice grains no longer look raw or chalky.",
        "visualZh": "藕表泛淡粉褐；米粒不再显生白或粉感。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Water returns to gentle boil within 20 seconds of adding藕.",
        "signalZh": "下藕后20秒内水重沸。"
      }
    },
    {
      "text": "In a heavy-bottomed Dutch oven, combine blanched lotus root, brown rock sugar, and 750 ml water. Bring to simmer over medium heat, then reduce to low.",
      "textZh": "厚底锅中放入焯过藕节、红冰糖与750ml水，中火煮沸后转最小火。",
      "zhHint": "糖水没藕",
      "stateNote": {
        "visual": "Sugar dissolves completely; liquid shimmers with amber gloss.",
        "visualZh": "糖全溶，汤汁泛琥珀光泽。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "First bubble rises slowly from center of pot.",
        "signalZh": "锅中心缓缓浮起第一颗气泡。"
      }
    },
    {
      "text": "Cover tightly and braise for 90 minutes on low heat, turning藕 every 25 minutes. Liquid should reduce to ~250 ml and coat the藕 thickly.",
      "textZh": "盖紧盖子，最小火煨90分钟，每25分钟翻动一次藕节。汤汁应收至约250ml，浓稠挂藕。",
      "zhHint": "慢煨收汁",
      "stateNote": {
        "visual": "Caramelized syrup clings to藕 surface in glossy, amber ribbons.",
        "visualZh": "焦糖汁如琥珀缎带般裹住藕身。",
        "timeRef": "90 minutes",
        "timeRefZh": "90 分钟",
        "heat": "low",
        "signal": "Tip of knife slides in smoothly with gentle pressure — no resistance.",
        "signalZh": "刀尖轻压即顺滑入藕，无阻力。"
      }
    },
    {
      "text": "Remove藕, cool slightly, then slice into 5-mm rounds. Drizzle with reduced syrup and sprinkle generously with dried osmanthus. Serve at room temperature.",
      "textZh": "藕稍晾后切5毫米圆片，淋浓缩糖汁，撒足量干桂花，室温食用。",
      "zhHint": "片薄撒花",
      "stateNote": {
        "visual": "Each slice shows perfect rice-filled holes and translucent, rosy-brown edges.",
        "visualZh": "每片可见饱满米孔，藕边呈半透明玫瑰褐色。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Syrup pools slightly around each slice without spreading.",
        "signalZh": "糖汁在片周微聚，不漫溢。"
      }
    }
  ],
  "tips": [
    "To prevent rice leakage during braising, seal both ends with aluminum foil before cooking.",
    "For glossy finish, brush slices with 1 tsp warm honey mixed with ½ tsp osmanthus right before serving.",
    "Leftovers keep 4 days refrigerated — reheat gently in steamer to restore tenderness."
  ],
  "tipsZh": [
    "防漏米：炖前藕两端用锡纸封严。",
    "增亮泽：上桌前用1茶匙温蜂蜜+½茶匙桂花调匀，刷片表面。",
    "剩菜冷藏4天，复热宜用蒸笼，保藕脆嫩。"
  ],
  "relatedSlugs": [
    "silver-fungus-lotus-seed-soup",
    "rock-sugar-pear-soup"
  ],
  "image": "/images/recipes/osmanthus-stuffed-lotus-root.webp"
};
