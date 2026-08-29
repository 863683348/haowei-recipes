import type { Recipe } from "@/lib/types";

/** Brown Sugar Mantou (Hóng Táng Mántou) (红糖馒头) — Seed batch */
export const brown_sugar_mantou: Recipe = {
  "id": "hong-tang-mantou",
  "slug": "brown-sugar-mantou",
  "titleEn": "Brown Sugar Mantou (Hóng Táng Mántou)",
  "titleZh": "红糖馒头",
  "pinyin": "hóng táng mántou",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Jiangsu",
  "regionZh": "江苏",
  "difficulty": "medium",
  "timeMin": 195,
  "servings": 12,
  "version": "family",
  "versionNote": "Family version uses unrefined brown sugar for deep molasses notes and natural caramelization—never dark brown sugar (too wet) or white sugar (lacks depth). Restaurant versions sometimes add maltose for sheen.",
  "versionNoteZh": "家常版用未精炼红糖，带焦糖香与天然褐变；禁用深褐糖（太湿）或白糖（无层次）。餐馆版偶添麦芽糖增亮。",
  "tags": [
    "steamed-buns",
    "sweet",
    "brown-sugar"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My aunt in Yangzhou stirred red sugar into hot milk herself every winter solstice—she believed the warmth unlocked its 'earth energy'. Her mantou were never overly sweet, just rich and amber-hued, served warm with pickled mustard greens.",
  "storyZh": "扬州姨妈每年冬至亲手将红糖融进热奶——她说热度能唤醒它的‘土气’。她的红糖馒头不齁甜，只醇厚琥珀色，配雪里蕻小菜趁热吃。",
  "ingredients": [
    {
      "id": "ht-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "480 g",
      "amountUS": "3¾ cups",
      "category": "staple",
      "pantry": "local",
      "note": "Substitute bread flour (460 g) + cornstarch (20 g)",
      "noteZh": "筋度不足可用高筋粉460g+玉米淀粉20g替代"
    },
    {
      "id": "ht-02",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "pinyin": "gān jiàomǔ",
      "amountMetric": "4 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Proof in 30 ml warm milk first",
      "noteZh": "先用30ml温牛奶活化验证"
    },
    {
      "id": "ht-03",
      "nameEn": "unrefined brown sugar",
      "nameZh": "未精炼红糖",
      "pinyin": "wèi jīng liàn hóng táng",
      "amountMetric": "100 g",
      "amountUS": "½ cup packed",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Substitute turbinado sugar (100 g); avoid dark brown sugar—it adds excess moisture",
      "noteZh": "可用粗砂糖100g替代；忌深褐糖（水分过多）"
    },
    {
      "id": "ht-04",
      "nameEn": "warm whole milk",
      "nameZh": "温全脂牛奶",
      "pinyin": "wēn quán zhī niú nǎi",
      "amountMetric": "220 ml",
      "amountUS": "¾ cup + 2 tbsp",
      "category": "dairy",
      "pantry": "local",
      "note": "Substitute warm water + 10 g powdered milk (1 tbsp)",
      "noteZh": "可用温水220ml+奶粉10g（1大勺）替代"
    },
    {
      "id": "ht-05",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Heat milk to 45°C (113°F), stir in brown sugar until fully dissolved. Cool to 35°C (95°F) before adding yeast.",
      "textZh": "牛奶加热至45°C，搅入红糖至完全溶解；降温至35°C后再加酵母。",
      "zhHint": "控温融糖",
      "stateNote": {
        "visual": "Liquid clear and glossy, no graininess",
        "visualZh": "液体清亮光润，无颗粒感",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium-low",
        "signal": "Sugar dissolves completely with gentle stirring",
        "signalZh": "轻搅即完全融化"
      }
    },
    {
      "text": "Mix yeast into cooled milk-sugar liquid. Add 100 g flour and stir into batter. Cover and ferment 1 hour until foamy and risen.",
      "textZh": "酵母加入已降温的糖奶液，拌入100克面粉成糊状，盖好发酵1小时至起泡蓬起。",
      "zhHint": "糖酵头发酵",
      "stateNote": {
        "visual": "Bubbles break surface continuously, slight dome formed",
        "visualZh": "气泡持续破表，表面微隆",
        "timeRef": "1 hour",
        "timeRefZh": "1 小时",
        "signal": "Sweet, yeasty aroma with hint of caramel",
        "signalZh": "甜酵香中带焦糖气息"
      }
    },
    {
      "text": "Add remaining 380 g flour and salt. Knead 12 minutes until smooth and slightly tacky. Transfer to oiled bowl, cover, and rise 80 minutes until doubled.",
      "textZh": "加入剩余380克面粉和盐，揉12分钟至光滑微黏；入抹油盆，盖布发酵80分钟至两倍大。",
      "zhHint": "主面团揉制",
      "stateNote": {
        "visual": "Dough puffed, surface moist and dimpled",
        "visualZh": "面团膨起，表面湿润微凹",
        "timeRef": "80 minutes",
        "timeRefZh": "80 分钟",
        "signal": "Finger press leaves deep, slow-filling indentation",
        "signalZh": "指压凹陷深，缓慢回填"
      }
    },
    {
      "text": "Punch down dough, divide into 12 equal pieces (≈75 g each). Roll each into tight ball using cupped-hand technique. Place on parchment-lined trays.",
      "textZh": "排气后均分12份（每份约75克），掌心收圆法搓成紧实球体，摆入铺烘焙纸蒸屉。",
      "zhHint": "收圆整形",
      "stateNote": {
        "visual": "Round, smooth balls with no seams or cracks",
        "visualZh": "圆润光滑，无缝无裂",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "signal": "Balls hold shape when gently rolled on counter",
        "signalZh": "轻推台面不散形"
      }
    },
    {
      "text": "Cover and proof 25 minutes until slightly puffed. Steam over high heat for 14 minutes. Rest covered 5 minutes before opening lid.",
      "textZh": "盖布醒发25分钟至微胀；大火沸水蒸14分钟，关火焖5分钟再揭盖。",
      "zhHint": "焖制防回缩",
      "stateNote": {
        "visual": "Mantou deep amber, glossy, with faint steam halo",
        "visualZh": "馒头呈深琥珀色，光泽润亮，带微汽晕",
        "timeRef": "14 minutes steaming + 5 minutes resting",
        "timeRefZh": "蒸14分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam rises in steady column; buns feel firm but yielding",
        "signalZh": "蒸汽呈稳定柱状；馒头按之 firm 但有弹性"
      }
    }
  ],
  "tips": [
    "For glossy finish, brush cooled mantou with honey-water glaze (1:1)",
    "Red sugar mantou pair perfectly with salty fermented tofu (furu)",
    "Best eaten same day—texture firms overnight but reheats beautifully"
  ],
  "tipsZh": [
    "追求亮泽，可用蜂蜜水（1:1）刷冷却馒头表面",
    "红糖馒头配腐乳最是绝配",
    "当日食用最佳，隔夜稍硬但复蒸后口感如初"
  ],
  "relatedSlugs": [
    "white-mantou-steamed-buns",
    "flower-rolls-steamed-buns"
  ],
  "image": "/images/recipes/brown-sugar-mantou.webp"
};
