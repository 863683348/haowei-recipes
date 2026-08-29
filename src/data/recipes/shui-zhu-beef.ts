import type { Recipe } from "@/lib/types";

/** Sichuan Shui Zhu Beef (Water-Boiled Beef) (水煮牛肉) — Seed batch */
export const shui_zhu_beef: Recipe = {
  "id": "shui-zhu-beef",
  "slug": "shui-zhu-beef",
  "titleEn": "Sichuan Shui Zhu Beef (Water-Boiled Beef)",
  "titleZh": "水煮牛肉",
  "pinyin": "shuǐ zhǔ niú ròu",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses less oil and simpler chili prep than restaurant style — no deep-frying of chilies or Sichuan peppercorns, just toasting and steeping for fragrance.",
  "versionNoteZh": "家常版用油更少，辣椒处理更简单——不油炸干辣椒和花椒，仅干焙后泡入热油激香。",
  "tags": [
    "30-min",
    "weeknight",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Chengdu’s Qingyang District taught me this when I was 14 — she’d stir the pot with one hand while scolding me for not slicing the beef thin enough. She always served it over steamed rice with a side of pickled mustard greens from her balcony jar.",
  "storyZh": "我14岁时，成都青羊区的姑妈教我这道菜——她一边用单手搅动锅底，一边数落我牛肉切得不够薄。她总配蒸米饭上桌，并加一小碟自家阳台坛子里腌的雪里蕻。",
  "ingredients": [
    {
      "id": "beef-01",
      "nameEn": "sirloin steak",
      "nameZh": "牛里脊",
      "pinyin": "niú lǐ jǐ",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Slice against the grain, 2 mm thick — freeze 15 min first for clean cuts",
      "noteZh": "逆纹切，厚约2毫米；冷冻15分钟更易切薄片"
    },
    {
      "id": "beef-02",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "staple",
      "pantry": "local",
      "note": "Ensures tender texture; substitute potato starch if unavailable",
      "noteZh": "保证嫩滑口感；无玉米淀粉可用土豆淀粉替代"
    },
    {
      "id": "beef-03",
      "nameEn": "doubanjiang",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang",
      "note": "Use authentic Pixian brand — look for 'Chengdu' on label; NOT spicy bean paste from other regions",
      "noteZh": "须用正宗郫县豆瓣（认准‘成都’产地标识），非其他地区辣豆酱"
    },
    {
      "id": "beef-04",
      "nameEn": "Sichuan peppercorn",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "3 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn",
      "note": "Toasted until fragrant — do not burn; substitute black peppercorn + ¼ tsp ground star anise if unavailable",
      "noteZh": "干焙至出香，忌焦糊；无花椒可代以黑胡椒粉+¼茶匙八角粉"
    },
    {
      "id": "beef-05",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp (broken)",
      "category": "spice",
      "pantry": "asian",
      "note": "Use whole chilies like facing heaven or erjingtiao — mild heat, rich aroma; substitute crushed red pepper flakes (use half amount)",
      "noteZh": "优选朝天椒或二荆条干椒（香浓微辣）；无则用红椒碎减半"
    }
  ],
  "steps": [
    {
      "text": "Marinate beef: In a bowl, combine beef slices, cornstarch, 1 tsp light soy sauce, and 1 tsp Shaoxing wine. Mix well and set aside 15 minutes.",
      "textZh": "腌制牛肉：碗中放入牛肉片、玉米淀粉、1茶匙生抽、1茶匙绍兴酒，抓匀，静置15分钟。",
      "zhHint": "抓匀静置"
    },
    {
      "text": "Toast Sichuan peppercorns and dried chilies in a dry wok over medium heat until fragrant and slightly darkened — about 2 minutes.",
      "textZh": "干锅小火焙香花椒与干辣椒，约2分钟，至香气溢出、颜色微深。",
      "zhHint": "干锅焙香",
      "stateNote": {
        "visual": "Chilies puff slightly; peppercorns turn matte brown",
        "visualZh": "辣椒微微鼓起；花椒呈哑光棕褐色",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Aromatic smoke rises — stop before any bitterness develops",
        "signalZh": "闻到浓郁椒香烟气——切勿烤出焦苦味"
      }
    },
    {
      "text": "Grind toasted spices coarsely in a mortar or spice grinder. Set aside.",
      "textZh": "将焙香的花椒与辣椒粗略舂碎或打碎，备用。",
      "zhHint": "粗碎备用"
    },
    {
      "text": "Heat 2 tbsp oil in a wok. Add doubanjiang and stir-fry 1 minute until oil turns red and fragrant.",
      "textZh": "锅中烧热2汤匙油，下豆瓣酱，中小火炒1分钟，至油色变红、香气四溢。",
      "zhHint": "炒红豆瓣",
      "stateNote": {
        "visual": "Oil separates and glows reddish-orange around paste",
        "visualZh": "油开始析出，豆瓣周围泛出红橙色光泽",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-low",
        "signal": "Red oil floats to surface and bubbles gently",
        "signalZh": "红油浮起，气泡轻柔"
      }
    },
    {
      "text": "Add 400 ml water or light broth. Bring to gentle boil. Add marinated beef in batches, stirring gently to separate. Simmer 2 minutes until beef is just cooked through.",
      "textZh": "倒入400毫升清水或清汤，烧沸后分批下牛肉片，轻搅散开，小火煮2分钟至刚熟。",
      "zhHint": "分批下肉，轻搅",
      "stateNote": {
        "visual": "Beef turns opaque pink with no gray streaks",
        "visualZh": "牛肉转为不透明粉红色，无灰白筋络",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "Thin white foam appears at edges — do not let boil vigorously",
        "signalZh": "锅边泛起细密白沫——切忌大火翻滚"
      }
    }
  ],
  "tips": [
    "Freeze beef 15 minutes before slicing — makes paper-thin cuts effortless.",
    "Do not skip toasting the chilies and Sichuan peppercorns — it unlocks their layered aroma.",
    "Serve immediately in a pre-warmed bowl — the sizzle matters for flavor and texture."
  ],
  "tipsZh": [
    "牛肉冷冻15分钟再切，薄如纸片毫不费力。",
    "务必焙香辣椒与花椒——这是复合香气的关键一步。",
    "盛入预热过的碗中趁热上桌——滋滋声是风味与口感的灵魂。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/shui-zhu-beef.webp"
};
