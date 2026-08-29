import type { Recipe } from "@/lib/types";

/** Hong Shao Eggplant (Braised Eggplant in Soy Sauce) (红烧茄子) — Seed batch */
export const hong_shao_eggplant: Recipe = {
  "id": "hong-shao-eggplant",
  "slug": "hong-shao-eggplant",
  "titleEn": "Hong Shao Eggplant (Braised Eggplant in Soy Sauce)",
  "titleZh": "红烧茄子",
  "pinyin": "hóng shāo qié zi",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses minimal oil and avoids deep-frying — eggplant is steamed briefly first, then braised in a rich, glossy soy-based sauce. No cornstarch slurry needed — natural starch from eggplant thickens the sauce.",
  "versionNoteZh": "家常版先蒸后烧，省油免炸；茄子自带淀粉使酱汁自然浓亮，无需水淀粉。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My grandmother in Shanghai made this every Sunday after temple — she’d steam the eggplant just until pliable, then braise it slowly with a spoonful of dark soy and a knob of rock sugar, whispering, 'Red cooking means patience, not color.' Her version was soft, glossy, and deeply savory — never greasy.",
  "storyZh": "外婆在上海，每周拜完庙就做这道菜——茄子蒸到刚软就捞出，用一勺老抽、一小块冰糖慢煨，她说：‘红烧是功夫，不是颜色。’口感软糯油亮，绝不腻口。",
  "ingredients": [
    {
      "id": "hs-01",
      "nameEn": "Chinese eggplant",
      "nameZh": "长条茄子",
      "pinyin": "cháng tiáo qié zi",
      "amountMetric": "350 g",
      "amountUS": "1¾ medium",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute Japanese eggplant or globe eggplant (peeled, if using globe)",
      "noteZh": "可用日本茄子或圆茄替代（圆茄需去皮）"
    },
    {
      "id": "hs-02",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "hs-03",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp crushed",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Substitute granulated sugar if rock sugar unavailable",
      "noteZh": "无冰糖可用白砂糖替代"
    },
    {
      "id": "hs-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "hs-05",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Cut eggplant into 3-cm batons. Steam over boiling water for 4 minutes until just pliable but still holding shape.",
      "textZh": "茄子切3厘米长条，沸水上汽蒸4分钟，至微软仍保形。",
      "zhHint": "断生不烂",
      "stateNote": {
        "visual": "Batons look slightly translucent and bend easily without breaking",
        "visualZh": "长条略呈半透明，轻弯不断",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "high",
        "signal": "Tip of knife slides in with slight resistance",
        "signalZh": "刀尖可轻松插入，略有阻力"
      }
    },
    {
      "text": "Heat 15 ml (1 tbsp) neutral oil in a wok over medium heat. Add steamed eggplant and pan-fry gently for 2 minutes until lightly golden and surface dries.",
      "textZh": "锅中放15毫升（1汤匙）油，中火将蒸过的茄子轻煎2分钟，至微黄、表面收干。",
      "zhHint": "煎干水汽",
      "stateNote": {
        "visual": "Eggplant edges crisp lightly; surface loses shine and looks matte",
        "visualZh": "茄条边缘微脆，表面哑光无水光",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "No sizzling sound — water has fully evaporated",
        "signalZh": "无滋滋声——水分已彻底蒸发"
      }
    },
    {
      "text": "Push eggplant aside. Add dark soy sauce and Shaoxing wine to the hot center — let bubble 10 seconds to cook off alcohol and deepen flavor.",
      "textZh": "将茄子拨至锅边，在锅心倒入老抽和绍酒，大火激香10秒，挥发酒气、增醇厚。",
      "zhHint": "炝锅提香",
      "stateNote": {
        "visual": "Liquid sizzles vigorously and emits aromatic steam",
        "visualZh": "液体剧烈嘶嘶作响，升腾带香热气",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "high",
        "signal": "Alcohol fumes rise sharply — sharp, clean scent",
        "signalZh": "酒精蒸汽上扬，气味清冽微冲"
      }
    },
    {
      "text": "Return eggplant to center. Add rock sugar and 90 ml (⅓ cup + 1 tbsp) warm water. Bring to gentle simmer, then cover and braise 5 minutes.",
      "textZh": "茄子回锅中心，加冰糖和90毫升（⅓杯+1汤匙）温水，烧开后转小火盖盖焖5分钟。",
      "zhHint": "小火焖透",
      "stateNote": {
        "visual": "Sauce bubbles softly; eggplant absorbs liquid and swells slightly",
        "visualZh": "酱汁轻沸；茄条吸汁微胀",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "Liquid reduces by ~20% and coats spoon thinly",
        "signalZh": "汤汁减少约20%，能薄薄挂勺"
      }
    },
    {
      "text": "Uncover, increase heat to medium. Stir gently and cook 2 more minutes until sauce is glossy, thickened, and clings to eggplant.",
      "textZh": "开盖转中火，轻翻2分钟，至酱汁油亮浓稠、均匀裹住茄条。",
      "zhHint": "收汁亮油",
      "stateNote": {
        "visual": "Sauce glistens like lacquer; no pooling liquid remains in pan",
        "visualZh": "酱汁如漆光亮，锅底无余汁",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Stirring leaves clear trails in sauce",
        "signalZh": "锅铲划过，酱汁留清晰痕迹"
      }
    }
  ],
  "tips": [
    "Steaming first ensures tender texture without oil absorption.",
    "Rock sugar gives superior gloss and mellow sweetness vs granulated sugar.",
    "Do not stir aggressively — eggplant is delicate after steaming."
  ],
  "tipsZh": [
    "先蒸后烧，保嫩不吸油。",
    "冰糖比白砂糖更亮泽、甜味更柔和。",
    "蒸过茄子娇嫩，翻炒须轻柔。"
  ],
  "relatedSlugs": [
    "yu-xiang-eggplant"
  ],
  "image": "/images/recipes/hong-shao-eggplant.webp"
};
