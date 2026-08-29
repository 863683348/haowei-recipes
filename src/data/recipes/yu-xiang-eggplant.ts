import type { Recipe } from "@/lib/types";

/** Yu Xiang Eggplant (Fish-Flavored Eggplant) (鱼香茄子) — Seed batch */
export const yu_xiang_eggplant: Recipe = {
  "id": "yu-xiang-eggplant",
  "slug": "yu-xiang-eggplant",
  "titleEn": "Yu Xiang Eggplant (Fish-Flavored Eggplant)",
  "titleZh": "鱼香茄子",
  "pinyin": "yú xiāng qié zi",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses less oil and skips deep-frying — eggplant is pan-seared until tender, then braised in the signature yu xiang sauce. No restaurant-style batter or excess oil.",
  "versionNoteZh": "家常版不裹粉、不油炸，用平底锅煎软茄子后焖煮，酱汁用量适中，更健康。",
  "tags": [
    "30-min",
    "weeknight",
    "spicy"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My aunt in Chengdu taught me this when I visited at 14 — she’d chop garlic, ginger, and scallions with one hand while stirring the wok with the other, saying, 'Yu xiang isn’t about fish — it’s about balance: sour, sweet, salty, spicy, and umami, all singing together.' She never measured anything — just tasted and adjusted.",
  "storyZh": "我14岁去成都探亲时，姑妈教我这道菜——她一手切姜蒜葱末，一手颠锅翻炒，说：‘鱼香不是真有鱼，是酸甜咸辣鲜五味齐鸣。’她从不称量，只靠尝和调。",
  "ingredients": [
    {
      "id": "eg-01",
      "nameEn": "Chinese eggplant",
      "nameZh": "长条茄子",
      "pinyin": "cháng tiáo qié zi",
      "amountMetric": "400 g",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "note": "Firm, glossy skin; substitute Japanese eggplant if unavailable",
      "noteZh": "表皮光亮紧实；无可用时可用日本茄子替代"
    },
    {
      "id": "eg-02",
      "nameEn": "fermented broad bean paste",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "20 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for 'Pixian Doubanjiang' — authentic Sichuan chili-bean paste, coarse texture, deep red-brown",
      "noteZh": "认准‘郫县豆瓣酱’，四川产，质地粗粒，红褐色",
      "termKey": "doubanjiang"
    },
    {
      "id": "eg-03",
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
      "id": "eg-04",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "eg-05",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "pinyin": "bái táng",
      "amountMetric": "12 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "eg-06",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "15 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "eg-07",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "10 g",
      "amountUS": "1 tsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "eg-08",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Cut eggplant into 4-cm batons (1.5-inch). Sprinkle lightly with salt (5 g / 1 tsp), rest 10 minutes, then pat dry with paper towels — this draws out bitterness and prevents oil absorption.",
      "textZh": "茄子切4厘米长条，撒盐（5克/1茶匙）腌10分钟，挤干水分并用厨房纸吸干。",
      "zhHint": "去涩控水",
      "stateNote": {
        "visual": "Eggplant releases cloudy liquid and shrinks slightly",
        "visualZh": "茄子渗出微浊液体，体积略缩小",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Surface feels dry to touch, no visible moisture",
        "signalZh": "表面触感干爽，无明显水渍"
      }
    },
    {
      "text": "Heat 30 ml (2 tbsp) neutral oil in a nonstick wok or skillet over medium-high heat. Add eggplant in a single layer and pan-sear without stirring for 2–3 minutes until golden-brown and softened.",
      "textZh": "不粘锅中火高热，倒入30毫升（2汤匙）无味油，茄子单层铺入，不翻动煎2–3分钟至金黄变软。",
      "zhHint": "定型再翻",
      "stateNote": {
        "visual": "Edges turn deep golden; flesh yields gently when pressed with spatula",
        "visualZh": "边缘呈深金色；锅铲轻压茄身微软",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium-high",
        "signal": "First side develops even golden crust",
        "signalZh": "底面形成均匀金黄脆边"
      }
    },
    {
      "text": "Push eggplant to side. In the cleared space, add doubanjiang and stir-fry 30 seconds until fragrant and oil turns reddish.",
      "textZh": "将茄子拨至锅边，在空出的锅底放入豆瓣酱，小火煸炒30秒至出红油、香气溢出。",
      "zhHint": "先炒酱再合炒",
      "stateNote": {
        "visual": "Oil separates and glows red-orange around paste",
        "visualZh": "酱料周围油色转为红橙透亮",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Aroma becomes rich, nutty, and slightly fermented",
        "signalZh": "散发浓郁、微坚果香与微发酵气息"
      }
    },
    {
      "text": "Add minced garlic, ginger, and half the scallions. Stir-fry 45 seconds until aromatic but not browned.",
      "textZh": "加入蒜末、姜末和一半葱花，中小火煸炒45秒至香起但未焦黄。",
      "zhHint": "爆香三末",
      "stateNote": {
        "visual": "Mixture glistens with oil and releases steam",
        "visualZh": "混合物油亮泛光，微微冒汽",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium",
        "signal": "Fragrance intensifies sharply — like raw garlic turning sweet",
        "signalZh": "香气骤然变浓，如生蒜转为甘香"
      }
    },
    {
      "text": "Return eggplant to center. Add light soy sauce, black vinegar, sugar, and 60 ml (¼ cup) warm water. Simmer covered on medium-low for 6–8 minutes until sauce thickens and eggplant is melt-tender.",
      "textZh": "将茄子推回锅中心，加入生抽、陈醋、糖和60毫升（¼杯）温水，盖盖中低火焖6–8分钟，至酱汁浓稠、茄子入口即化。",
      "zhHint": "加盖焖软",
      "stateNote": {
        "visual": "Sauce coats eggplant evenly, glistens, and reduces by ~⅓",
        "visualZh": "酱汁均匀裹住茄子，油亮且减少约三分之一",
        "timeRef": "6–8 minutes",
        "timeRefZh": "6–8 分钟",
        "heat": "medium-low",
        "signal": "Bubbles break softly — not vigorous boil, but gentle simmer",
        "signalZh": "气泡轻柔破裂，非滚沸而是微沸"
      }
    }
  ],
  "tips": [
    "Use Chinese eggplant — its lower seed count and denser flesh hold shape better.",
    "If your doubanjiang is very salty, reduce added soy sauce by half.",
    "Always add vinegar last — heat degrades its bright acidity."
  ],
  "tipsZh": [
    "务必用长条茄子——籽少肉密，久煮不易烂形。",
    "若豆瓣酱偏咸，生抽减半使用。",
    "陈醋最后下锅——高温会削弱其明亮酸香。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/yu-xiang-eggplant.webp"
};
