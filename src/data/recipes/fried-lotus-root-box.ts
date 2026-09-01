import type { Recipe } from "@/lib/types";

/** Fried Lotus Root Stuffed with Pork (炸藕盒) (炸藕盒) — Day batch */
export const fried_lotus_root_box: Recipe = {
  "id": "fried-lotus-root-box",
  "slug": "fried-lotus-root-box",
  "titleEn": "Fried Lotus Root Stuffed with Pork (炸藕盒)",
  "titleZh": "炸藕盒",
  "pinyin": "zhà ǒu hé",
  "cuisine": "鲁菜",
  "cuisineEn": "Shandong",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭版藕片切相连，夹肉炸制；餐馆版有时用整片藕加淀粉糊。",
  "versionNoteZh": "家庭版藕片切相连，夹肉炸制；餐馆版有时用整片藕加淀粉糊。",
  "tags": [
    "fried",
    "vegetable-forward",
    "winter",
    "festive"
  ],
  "dietary": [
    "none"
  ],
  "story": "Lotus root boxes are a Northern Chinese winter special—the crunch of lotus root paired with savory pork is unforgettable. My grandfather in Jinan would make these every Chinese New Year, saying the holes in lotus root symbolize 'seeing opportunities' (ouduan).",
  "storyZh": "藕盒是北方冬季特色——藕的脆爽配肉馅的鲜香，令人难忘。祖父在济南每年过年必做，说藕的孔洞象征'偶遇'（ouduan）。",
  "ingredients": [
    {
      "id": "fl-01",
      "nameEn": "fresh lotus root",
      "nameZh": "鲜藕",
      "amountMetric": "1 large",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "asian"
    },
    {
      "id": "fl-02",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "amountMetric": "150 g",
      "amountUS": "3/4 cup",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "fl-03",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "1 clove",
      "amountUS": "1 clove",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "fl-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "fl-05",
      "nameEn": "ginger, minced",
      "nameZh": "姜末",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "fl-06",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "60 g",
      "amountUS": "1/2 cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "fl-07",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "staple",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "fl-08",
      "nameEn": "neutral oil (for frying)",
      "nameZh": "中性油（炸用）",
      "amountMetric": "500 ml",
      "amountUS": "2 cups",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Peel lotus root, slice into 1cm rounds. Cut each slice in half but not all the way through—create a pocket.",
      "textZh": "藕去皮切1厘米厚片，每片切一半不停刀，做成口袋。",
      "stateNote": {
        "visual": "Slice opens like a book, connected at bottom",
        "visualZh": "藕片如书本打开，底部相连",
        "signal": "Can insert filling without breaking",
        "signalZh": "能塞入馅料不破裂"
      }
    },
    {
      "text": "Mix pork with garlic, soy sauce, ginger, and a pinch of salt until sticky.",
      "textZh": "猪肉末加蒜末、生抽、姜末和少许盐，搅匀至粘。",
      "stateNote": {
        "visual": "Meat paste clings to spoon, glossy",
        "visualZh": "肉馅粘勺，有光泽",
        "signal": "Filling holds shape when pressed",
        "signalZh": "按压不散"
      }
    },
    {
      "text": "Stuff pork into lotus root pockets, press gently to seal.",
      "textZh": "肉馅塞入藕盒，轻压封口。",
      "stateNote": {
        "visual": "Pork slightly visible, not overflowing",
        "visualZh": "肉馅微露，未溢出",
        "signal": "Pocket closes when pressed",
        "signalZh": "按压能闭合"
      }
    },
    {
      "text": "Dip stuffed lotus root in flour, then batter (flour + cornstarch + water), shaking off excess.",
      "textZh": "藕盒蘸干粉，再挂糊（面粉+淀粉+水），抖掉多余面糊。",
      "stateNote": {
        "visual": "Even coating, no bare spots",
        "visualZh": "均匀挂糊，无裸露",
        "signal": "Batter sticks without dripping",
        "signalZh": "面糊能挂住不滴落"
      }
    },
    {
      "text": "Heat oil to 170°C, fry 3-4 minutes per side until golden and crispy.",
      "textZh": "油温170°C，每面炸3-4分钟至金黄酥脆。",
      "stateNote": {
        "visual": "Crust turns golden, bubbles decrease",
        "visualZh": "外壳金黄，气泡减少",
        "signal": "Floating and sounds hollow when tapped",
        "signalZh": "浮起，轻敲有空洞声"
      }
    },
    {
      "text": "Drain on wire rack, sprinkle with salt, serve hot.",
      "textZh": "架上沥油，撒盐，趁热吃。",
      "stateNote": {
        "visual": "Crust stays crackly, steam rises from center",
        "visualZh": "外壳保持酥脆，中心冒热气",
        "signal": "Inner filling is hot and juicy",
        "signalZh": "内馅滚烫多汁"
      }
    }
  ],
  "tips": [
    "Choose firm, fresh lotus root with closed pores for best texture",
    "Don't skip the flour-dip before batter—creates adhesion layer",
    "Serve immediately—the crunch fades quickly"
  ],
  "tipsZh": [
    "选结实新鲜、孔洞闭合的藕，口感最佳",
    "裹糊前先蘸干粉——增加附着力",
    "出锅即食——脆度随时间快速下降"
  ],
  "relatedSlugs": [
    "fried-eggplant-box",
    "osmanthus-stuffed-lotus-root",
    "homestyle-spring-rolls"
  ],
  "image": "/images/recipes/osmanthus-stuffed-lotus-root.webp"
};
