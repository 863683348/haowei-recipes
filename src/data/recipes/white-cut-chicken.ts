import type { Recipe } from "@/lib/types";

/** White Cut Chicken (白切鸡) — Seed batch */
export const white_cut_chicken: Recipe = {
  "id": "bai-qie-ji",
  "slug": "white-cut-chicken",
  "titleEn": "White Cut Chicken",
  "titleZh": "白切鸡",
  "pinyin": "bái qiē jī",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses gentle poaching and ice-water shock for tender, jiggly texture — no commercial chicken stock or MSG.",
  "versionNoteZh": "家常版用文火浸煮+冰水激冷，追求嫩滑弹牙口感，不使用市售高汤或味精。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Guangzhou’s Xiguan district taught me this when I was twelve — she’d pluck a live chicken from the market at Qingping, then simmer it just until the thigh meat released clear juice. She said, 'If the water boils, the skin tears; if it cools too slow, the meat turns gray.'",
  "storyZh": "我十二岁时，广州西关的姑妈教我这道菜——她总在清平市场挑活鸡，文火浸至鸡腿肉渗出清汁即停。她说：‘水一滚，皮就裂；凉太慢，肉发灰。’",
  "ingredients": [
    {
      "id": "bqj-01",
      "nameEn": "whole chicken (3–3.5 lb / 1.4–1.6 kg), air-chilled preferred",
      "nameZh": "整鸡（1.4–1.6 千克），优选气冷鸡",
      "pinyin": "zhěng jī",
      "amountMetric": "1.5 kg",
      "amountUS": "3.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Use a young, plump bird — avoid frozen-thawed; skin must be taut and unblemished.",
      "noteZh": "选嫩鸡、体肥者为佳；忌反复冻融鸡，皮须紧实无破损。"
    },
    {
      "id": "bqj-02",
      "nameEn": "ginger, thickly sliced (unpeeled)",
      "nameZh": "老姜，厚片（不去皮）",
      "pinyin": "lǎo jiāng",
      "amountMetric": "80 g",
      "amountUS": "½ cup, loosely packed",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bqj-03",
      "nameEn": "scallions, white and light green parts only, tied into a bundle",
      "nameZh": "小葱，只取葱白及浅绿段，扎捆",
      "pinyin": "xiǎo cōng",
      "amountMetric": "100 g",
      "amountUS": "1½ cups, loosely packed",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "bqj-04",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Substitute granulated sugar if unavailable — but rock sugar gives cleaner finish.",
      "noteZh": "无冰糖可用白砂糖替代，但冰糖成色更清亮。"
    }
  ],
  "steps": [
    {
      "text": "Rinse chicken inside and out under cold running water; pat dry thoroughly with paper towels. Tuck wings behind back and tie legs together with kitchen twine.",
      "textZh": "鸡内外用冷水冲洗干净，用厨房纸彻底擦干。翅膀向后别入身下，双腿用棉线捆拢。",
      "zhHint": "擦干是关键"
    },
    {
      "text": "In a stockpot large enough to fully submerge chicken, combine 2.5 L water, ginger slices, scallion bundle, and rock sugar. Bring to a gentle simmer over medium-high heat.",
      "textZh": "取足够大汤锅，加2.5升水、姜片、葱结、冰糖，中大火烧至微沸。",
      "zhHint": "水要没过鸡"
    },
    {
      "text": "Carefully lower chicken breast-side down into hot liquid. Once surface returns to a bare simmer (small bubbles barely breaking), reduce heat to low. Cover and poach gently for 25 minutes.",
      "textZh": "小心将鸡胸朝下浸入热汤；待液面重现微沸（仅细小气泡浮起），转最小火，盖盖浸煮25分钟。",
      "zhHint": "全程微沸状态",
      "stateNote": {
        "visual": "Liquid shimmers faintly; tiny bubbles rise intermittently at edges",
        "visualZh": "汤面微漾，边缘偶有细泡浮起",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "low",
        "signal": "Thigh meat yields clear, not pink, juice when pierced with skewer",
        "signalZh": "用竹签刺大腿肉，渗出清汁而非粉红汁"
      }
    },
    {
      "text": "Turn off heat. Let chicken steep, covered, in residual heat for 15 minutes — do not lift lid.",
      "textZh": "关火，盖紧盖子，让鸡在余温中继续浸焖15分钟——切勿开盖。",
      "zhHint": "余温焖熟"
    },
    {
      "text": "Drain chicken and immediately plunge into an ice-water bath (3 L water + 1 kg ice) for 10 minutes. This firms skin and locks in moisture.",
      "textZh": "捞出沥干，立刻浸入冰水浴（3升水+1千克冰）10分钟，使鸡皮紧致、锁住汁水。",
      "zhHint": "冰水激冷定型",
      "stateNote": {
        "visual": "Skin turns pearly white and taut; flesh feels springy to touch",
        "visualZh": "鸡皮呈珍珠白、绷紧；肉质按压有弹性",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Skin makes a faint ‘snap’ sound when lightly tapped",
        "signalZh": "轻叩鸡皮，发出细微‘啪’声"
      }
    }
  ],
  "tips": [
    "Always use a thermometer: internal thigh temp should reach 72°C (162°F) after chilling.",
    "Serve with ginger-scallion oil (see related recipe) and light soy sauce dip.",
    "Leftover broth makes excellent congee base — strain and refrigerate up to 3 days."
  ],
  "tipsZh": [
    "务必用温度计：冷藏后鸡腿肉中心温度应达72°C（162°F）。",
    "配姜葱油与生抽蘸料同食。",
    "剩余鸡汤滤净后冷藏3天内可煮粥。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/white-cut-chicken.webp"
};
