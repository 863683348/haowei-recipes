import type { Recipe } from "@/lib/types";

/** Sichuan Shui Zhu Fish (Water-Boiled Fish) (水煮鱼) — Seed batch */
export const shui_zhu_fish: Recipe = {
  "id": "shui-zhu-fish",
  "slug": "shui-zhu-fish",
  "titleEn": "Sichuan Shui Zhu Fish (Water-Boiled Fish)",
  "titleZh": "水煮鱼",
  "pinyin": "shuǐ zhǔ yú",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses skinless, boneless white fish fillets instead of whole fish head or carp — safer and faster for home kitchens.",
  "versionNoteZh": "家常版选用去皮去骨的白身鱼片（如巴沙鱼、鲷鱼），替代整鱼或草鱼头，更安全快捷。",
  "tags": [
    "30-min",
    "seafood",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle ran a riverside stall near Ciqikou Old Town in Chongqing — he’d fillet live fish right on the dock, then toss the pieces into bubbling broth while customers watched. He always added extra ginger and scallion on top — 'for luck and freshness,' he’d say.",
  "storyZh": "我舅舅在重庆磁器口老码头边摆摊，现场从活鱼起刀片鱼，鱼片直接甩进滚烫红汤里，围观食客啧啧称奇。他总在出锅前猛撒一把姜丝葱花——‘图个吉利，添点鲜气’。",
  "ingredients": [
    {
      "id": "fish-01",
      "nameEn": "skinless white fish fillets (e.g., tilapia or basa)",
      "nameZh": "去皮白身鱼片（如罗非鱼或巴沙鱼）",
      "pinyin": "qù pí bái shēn yú piàn",
      "amountMetric": "350 g",
      "amountUS": "12 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Ask fishmonger to cut 3 mm thick; substitute cod or haddock if unavailable",
      "noteZh": "请鱼贩切3毫米厚片；无则用鳕鱼或黑线鳕替代"
    },
    {
      "id": "fish-02",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "25 g",
      "amountUS": "1 tbsp (julienned)",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger",
      "note": "Julienne for garnish — use young ginger for tenderness",
      "noteZh": "切细丝作铺面；嫩姜更脆嫩"
    },
    {
      "id": "fish-03",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "40 g",
      "amountUS": "½ cup (cut into 3 cm lengths)",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion",
      "note": "Use both white and green parts — white for cooking, green for finish",
      "noteZh": "葱白入锅提味，葱绿出锅增色"
    },
    {
      "id": "fish-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce",
      "note": "Adds saltiness without color — essential for balancing doubanjiang’s depth",
      "noteZh": "提咸鲜不增色，平衡豆瓣酱厚重感"
    },
    {
      "id": "fish-05",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "20 g",
      "amountUS": "4 cloves (minced)",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic",
      "note": "Mince finely — raw garlic gives sharp bite that mellows in hot broth",
      "noteZh": "蒜末越细越好——生蒜辛辣，遇热即融为醇香"
    }
  ],
  "steps": [
    {
      "text": "Pat fish fillets dry. Marinate with 1 tsp cornstarch, 1 tsp Shaoxing wine, and ½ tsp white pepper for 10 minutes.",
      "textZh": "鱼片吸干水分，加1茶匙淀粉、1茶匙绍兴酒、½茶匙白胡椒粉拌匀，腌10分钟。",
      "zhHint": "吸干腌制"
    },
    {
      "text": "Heat 3 tbsp oil in a wok. Add minced garlic and ginger (white part only) — stir-fry 30 seconds until fragrant.",
      "textZh": "热锅下3汤匙油，放蒜末与葱白段，小火煸30秒至出香。",
      "zhHint": "爆香蒜姜",
      "stateNote": {
        "visual": "Garlic turns pale gold; no browning",
        "visualZh": "蒜末呈浅金黄色，未焦黄",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-low",
        "signal": "Aroma lifts sharply — stir constantly to prevent burning",
        "signalZh": "蒜香骤然升腾——需不停翻动防焦"
      }
    },
    {
      "text": "Add 2 tbsp doubanjiang and stir-fry 1 minute until oil reddens and paste bubbles softly.",
      "textZh": "加入2汤匙豆瓣酱，中小火炒1分钟，至油色转红、酱体微泡。",
      "zhHint": "炒香豆瓣"
    },
    {
      "text": "Pour in 500 ml water or fish stock. Bring to simmer. Gently add fish slices one by one — do not stir yet. Wait 1 minute for edges to set.",
      "textZh": "倒入500毫升清水或鱼汤，烧至微沸；鱼片逐片平铺入锅，暂勿搅动，静待1分钟使边缘定型。",
      "zhHint": "逐片铺入，静置定型",
      "stateNote": {
        "visual": "Fish edges turn opaque white; center still translucent",
        "visualZh": "鱼片边缘变白不透明，中心仍微透",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-low",
        "signal": "Tiny bubbles rise around each slice — ready to gently nudge",
        "signalZh": "每片鱼周缘泛起细泡——此时可轻推"
      }
    },
    {
      "text": "Gently stir to separate slices. Simmer 2 more minutes until fish is fully opaque and flakes easily with a fork.",
      "textZh": "轻搅散鱼片，再小火煮2分钟，至全熟、用叉子轻拨即散。",
      "zhHint": "轻搅煮熟"
    }
  ],
  "tips": [
    "Use a wide, shallow pan — helps distribute heat evenly and prevents fish from breaking.",
    "Reserve half the scallions for garnish — fresh green contrast makes the dish pop.",
    "If broth tastes flat, add ½ tsp Chinese black vinegar at the end — brightens all flavors."
  ],
  "tipsZh": [
    "选宽浅锅具——受热均匀，鱼片不易碎。",
    "预留一半葱段最后撒面——翠绿与红油相映成趣。",
    "若汤味平淡，出锅前加½茶匙陈醋——瞬间提亮整体风味。"
  ],
  "relatedSlugs": [
    "shui-zhu-beef"
  ],
  "image": "/images/recipes/shui-zhu-fish.webp"
};
