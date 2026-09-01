import type { Recipe } from "@/lib/types";

/** Spring Rolls (春卷) (春卷) — Day batch */
export const chun_juan: Recipe = {
  "id": "chun-juan",
  "slug": "chun-juan",
  "titleEn": "Spring Rolls (春卷)",
  "titleZh": "春卷",
  "pinyin": "chūn juǎn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭版用新鲜卷心菜和胡萝卜丝，少油快炸；餐馆版有时复炸追求极致酥脆。",
  "versionNoteZh": "家庭版用新鲜卷心菜和胡萝卜丝，少油快炸；餐馆版有时复炸追求极致酥脆。",
  "tags": [
    "fried",
    "appetizer",
    "festive",
    "chinese-new-year",
    "30-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "Spring rolls are the crown jewel of Chinese New Year celebrations—their golden, crispy exterior symbolizes wealth and prosperity. My mother in Suzhou made hundreds every year, wrapping them with practiced speed while the whole family watched TV.",
  "storyZh": "春卷是中国新年的皇冠美食——金黄酥脆的外皮象征财富与吉祥。母亲在苏州每年做几百个，包得又快又好，全家人一边看电视一边等着出锅。",
  "ingredients": [
    {
      "id": "cr-01",
      "nameEn": "napa cabbage",
      "nameZh": "大白菜",
      "amountMetric": "300 g",
      "amountUS": "3 cups shredded",
      "category": "produce",
      "pantry": "local",
      "termKey": "napa-cabbage"
    },
    {
      "id": "cr-02",
      "nameEn": "carrot",
      "nameZh": "胡萝卜",
      "amountMetric": "1 medium",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "cr-03",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "amountMetric": "150 g",
      "amountUS": "2/3 cup",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "cr-04",
      "nameEn": "spring roll wrappers",
      "nameZh": "春卷皮",
      "amountMetric": "12 sheets",
      "amountUS": "12 sheets",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "cr-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cr-06",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "cr-07",
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
      "text": "Shred cabbage and carrot into fine matchsticks. Sprinkle with 1 tsp salt, let sit 10 minutes, then squeeze dry.",
      "textZh": "白菜和胡萝卜切细丝，撒1茶匙盐腌10分钟，挤干水分。",
      "stateNote": {
        "visual": "Vegetables wilted and glossy, liquid released",
        "visualZh": "蔬菜软塌出汁",
        "signal": "Liquid collects at bottom of bowl",
        "signalZh": "碗底有明显水分"
      }
    },
    {
      "text": "Heat 1 tbsp oil in wok, stir-fry pork until no longer pink, about 3 minutes.",
      "textZh": "热锅冷油，炒肉末至变色，约3分钟。",
      "stateNote": {
        "visual": "Meat turns from pink to white-gray, edges slightly browned",
        "visualZh": "肉色由粉变白，边缘微焦",
        "signal": "Meat crumbles easily when stirred",
        "signalZh": "肉粒松散不粘"
      }
    },
    {
      "text": "Add soy sauce, sesame oil, and squeezed vegetables. Stir-fry 2 minutes until well combined.",
      "textZh": "加入生抽、香油和挤干的蔬菜，翻炒2分钟入味。",
      "stateNote": {
        "visual": "Vegetables glisten with oil, aromatic steam rises",
        "visualZh": "蔬菜油亮，香气四溢",
        "signal": "Filling holds together when pressed",
        "signalZh": "馅料按压不散"
      }
    },
    {
      "text": "Place 2 tbsp filling on wrapper, fold corners, roll tightly. Seal edge with water.",
      "textZh": "春卷皮放2汤匙馅，折角卷紧，封口蘸水。",
      "stateNote": {
        "visual": "Roll is cylindrical, compact, no gaps",
        "visualZh": "卷成圆柱形，紧实无空隙",
        "signal": "Wrapper holds shape without leaking",
        "signalZh": "卷皮不露馅"
      }
    },
    {
      "text": "Heat oil to 175°C, fry rolls 2-3 minutes per side until golden brown and crispy.",
      "textZh": "油温175°C，炸至两面金黄酥脆，每面2-3分钟。",
      "stateNote": {
        "visual": "Roll turns golden, bubbles active around edges",
        "visualZh": "卷皮金黄，边缘气泡活跃",
        "signal": "Roll floats, sounds hollow when tapped",
        "signalZh": "春卷浮起，轻敲有空洞声"
      }
    },
    {
      "text": "Drain on paper towel, serve immediately with sweet chili sauce or vinegar dip.",
      "textZh": "吸油纸沥油，趁热配甜辣酱或醋碟上桌。",
      "stateNote": {
        "visual": "Steam rises, crust crackles when broken",
        "visualZh": "热气腾腾，咬下咔嚓响",
        "signal": "Inner filling is hot and steaming",
        "signalZh": "内馅滚烫冒气"
      }
    }
  ],
  "tips": [
    "Squeeze vegetables thoroughly—wet filling makes wrapper soggy",
    "Fry at 175°C, not higher, to avoid burning before inside heats through",
    "Serve immediately—spring rolls lose crispness within 5 minutes"
  ],
  "tipsZh": [
    "蔬菜务必挤干——水分太多会让卷皮软塌",
    "油温175°C即可，过高会外焦里生",
    "出锅即食——春卷放5分钟就回软了"
  ],
  "relatedSlugs": [
    "homestyle-spring-rolls",
    "northern-style-fried-wontons",
    "egg-yolk-pastry"
  ],
  "image": "/images/recipes/homestyle-spring-rolls.webp"
};
