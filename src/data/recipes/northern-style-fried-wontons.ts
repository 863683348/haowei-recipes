import type { Recipe } from "@/lib/types";

/** Northern-Style Fried Wontons (北方炸馄饨) — Seed batch */
export const northern_style_fried_wontons: Recipe = {
  "id": "zha-hun-tun",
  "slug": "northern-style-fried-wontons",
  "titleEn": "Northern-Style Fried Wontons",
  "titleZh": "北方炸馄饨",
  "pinyin": "běi fāng zhá hún tún",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern snacks",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 3,
  "version": "family",
  "versionNote": "These are distinct from Cantonese wonton soup—they’re pan-fried until crisp-bottomed and juicy inside, served with black vinegar and ginger slivers. No broth, no steaming.",
  "versionNoteZh": "区别于广式云吞汤：此为北方做法，锅贴式煎制，底脆汤汁丰盈，配陈醋姜丝，无汤无蒸。",
  "tags": [
    "30-min",
    "appetizer",
    "crispy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Xicheng ran a tiny stall near Liulichang Street in the 1980s—he’d press each wonton by hand, then fry them in a wok so hot the vinegar sizzle sounded like fireworks.",
  "storyZh": "西城区的舅舅1980年代在琉璃厂街口支摊，亲手按压每只馄饨，旺火煎炸时浇醋，‘滋啦’声如鞭炮齐鸣。",
  "ingredients": [
    {
      "id": "zt-01",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "pinyin": "zhū ròu mò",
      "amountMetric": "250 g",
      "amountUS": "1 1/4 cups loosely packed",
      "category": "protein",
      "pantry": "local",
      "note": "70/30 lean/fat ratio for best juiciness",
      "noteZh": "肥瘦比3:7，汁水更足"
    },
    {
      "id": "zt-02",
      "nameEn": "wonton wrappers",
      "nameZh": "馄饨皮",
      "pinyin": "hún tún pí",
      "amountMetric": "24 sheets",
      "amountUS": "24 sheets (approx. 8 cm square)",
      "category": "staple",
      "pantry": "asian",
      "note": "Look for ‘square wonton skins’—not round or thick ‘dumpling wrappers’",
      "noteZh": "选方形馄饨皮，非圆形或厚饺子皮"
    },
    {
      "id": "zt-03",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "zt-04",
      "nameEn": "fresh ginger",
      "nameZh": "鲜姜",
      "pinyin": "xiān jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp julienned",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Mix pork with 1 tsp light soy sauce, 1 tsp Shaoxing wine, 1/4 tsp white pepper, and 1 tsp minced scallion. Stir 1 minute until sticky.",
      "textZh": "猪肉末加生抽、绍兴酒、白胡椒粉和葱末拌匀，顺一方向搅打1分钟至黏手。",
      "zhHint": "打上劲才多汁",
      "stateNote": {
        "visual": "Mixture clings to fingers and resists falling off chopsticks",
        "visualZh": "馅料粘手，筷子挑起不坠落",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Surface looks glossy and slightly stringy",
        "signalZh": "表面泛光，略带拉丝感"
      }
    },
    {
      "text": "Place 1 tsp filling in center of wrapper. Moisten edges with water, fold diagonally into triangle, then pinch corners to seal tightly.",
      "textZh": "取1茶匙馅放皮中央，边缘蘸水，对角折成三角形，捏紧两角封口。",
      "zhHint": "封口务必捏牢",
      "stateNote": {
        "visual": "Triangle holds sharp corners; no gap visible at seams",
        "visualZh": "三角棱角分明，接缝处无缝隙",
        "timeRef": "10 seconds per wonton",
        "timeRefZh": "每只10秒",
        "signal": "Wrapper adheres with gentle pressure only",
        "signalZh": "仅靠指压即可密合"
      }
    },
    {
      "text": "Heat 1 tbsp neutral oil in nonstick skillet over medium-high heat. Arrange wontons in single layer, flat-side down. Cook 2 minutes until golden brown and crisp underneath.",
      "textZh": "中大火烧热平底锅，倒1汤匙油；馄饨平底朝下码入，煎2分钟至底面金黄酥脆。",
      "zhHint": "一次别放太多",
      "stateNote": {
        "visual": "Edges bubble slightly; underside is deep amber with lacy crispness",
        "visualZh": "边缘微起泡；底面呈深琥珀色，带蕾丝状酥边",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Sizzling sound deepens and steadies",
        "signalZh": "滋滋声由尖锐转沉稳"
      }
    },
    {
      "text": "Pour in 1/4 cup water and immediately cover. Steam-fry 4 minutes until water fully evaporates and bottoms re-crisp.",
      "textZh": "沿锅边淋入1/4杯水，立刻盖盖；焖煎4分钟，至水汽全干、底面复脆。",
      "zhHint": "盖盖锁住蒸汽",
      "stateNote": {
        "visual": "Steam billows from lid edge; surface of wontons turns matte",
        "visualZh": "蒸汽从锅盖边缘涌出；馄饨表面由亮转哑光",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-high",
        "signal": "Hissing stops and lid stops vibrating",
        "signalZh": "嘶嘶声停止，锅盖不再震动"
      }
    },
    {
      "text": "Uncover, drizzle with Chinese black vinegar and scatter ginger slivers. Let sit 30 seconds for vinegar to lightly caramelize on hot surface.",
      "textZh": "揭盖，淋陈醋，撒姜丝；静置30秒，让醋在高温表面微焦化。",
      "zhHint": "醋遇热才生香",
      "stateNote": {
        "visual": "Vinegar darkens slightly at edges; ginger curls gently",
        "visualZh": "醋汁边缘微褐；姜丝自然卷曲",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "Aromatic tang rises sharply",
        "signalZh": "酸香气息骤然上扬"
      }
    }
  ],
  "tips": [
    "Use cold pork filling—it holds shape better during folding.",
    "For authentic northern crunch, don’t skip the final uncovered vinegar sizzle.",
    "Serve with extra vinegar and raw ginger on the side—never mix in advance."
  ],
  "tipsZh": [
    "馅料冷藏后再包，更易塑形不破皮。",
    "北方酥脆灵魂在于最后淋醋的‘滋啦’爆香，不可省略。",
    "额外陈醋与生姜须另配小碟，切勿提前拌入。"
  ],
  "relatedSlugs": [
    "homestyle-spring-rolls",
    "shanghai-egg-rolls"
  ],
  "image": "/images/recipes/northern-style-fried-wontons.webp"
};
