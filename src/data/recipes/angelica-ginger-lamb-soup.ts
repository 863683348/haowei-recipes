import type { Recipe } from "@/lib/types";

/** Angelica & Ginger Lamb Soup (当归生姜羊肉汤) (当归生姜羊肉汤) — Day batch */
export const angelica_ginger_lamb_soup: Recipe = {
  "id": "dang-gui-sheng-jiang-yang-rou-tang",
  "slug": "angelica-ginger-lamb-soup",
  "titleEn": "Angelica & Ginger Lamb Soup (当归生姜羊肉汤)",
  "titleZh": "当归生姜羊肉汤",
  "pinyin": "dāng guī shēng jiāng yáng ròu tāng",
  "cuisine": "药膳",
  "cuisineEn": "Chinese Medicinal Soup",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 100,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version is a gentle herbal poach of lamb with angelica root and lots of ginger — a classic warming tonic from the Shang Han Lun, light enough to drink as broth.",
  "versionNoteZh": "家常版以当归与大量生姜文火清炖羊肉，源自《伤寒论》的温补名方，清润可作汤饮。",
  "tags": [
    "soup",
    "tonic",
    "winter",
    "comfort-food"
  ],
  "dietary": [
    "halal"
  ],
  "story": "This recipe is nearly two thousand years old, written down by the physician Zhang Zhongjing. My grandmother made it every cold snap — 'for the inside cold,' she'd say.",
  "storyZh": "这方子近两千年，出自医圣张仲景。外婆每逢寒潮必煮：'治里寒。'她说。",
  "ingredients": [
    {
      "id": "ag-01",
      "nameEn": "lamb shoulder, chunked",
      "nameZh": "羊肩肉（切块）",
      "pinyin": "yáng jiān ròu",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Bone-in adds body to the broth.",
      "noteZh": "带骨更添汤底。"
    },
    {
      "id": "ag-02",
      "nameEn": "angelica root (dang gui)",
      "nameZh": "当归",
      "pinyin": "dāng guī",
      "amountMetric": "12 g",
      "amountUS": "1 tbsp",
      "category": "other",
      "pantry": "asian",
      "termKey": "angelica-root"
    },
    {
      "id": "ag-03",
      "nameEn": "fresh ginger, thick slices",
      "nameZh": "生姜（厚片）",
      "pinyin": "shēng jiāng",
      "amountMetric": "40 g",
      "amountUS": "6 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ag-04",
      "nameEn": "salt",
      "nameZh": "盐",
      "pinyin": "yán",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ag-05",
      "nameEn": "water",
      "nameZh": "水",
      "pinyin": "shuǐ",
      "amountMetric": "1.2 L",
      "amountUS": "5 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "ag-06",
      "nameEn": "scallion, for garnish",
      "nameZh": "葱（点缀）",
      "pinyin": "cōng",
      "amountMetric": "10 g",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Blanch lamb in cold water, skim, drain, rinse.",
      "textZh": "羊肉冷水焯水撇沫，捞出冲净。",
      "zhHint": "冷水焯膻",
      "stateNote": {
        "visual": "Grey foam rises; meat pales.",
        "visualZh": "灰沫涌起，肉转白。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "Foam stops at steady boil.",
        "signalZh": "稳沸后沫止。"
      }
    },
    {
      "text": "Combine lamb, angelica, ginger, and water in a pot. Bring to a boil then simmer 80 minutes.",
      "textZh": "羊肉、当归、姜与水同入锅，煮沸后小火炖80分钟。",
      "zhHint": "注汤慢炖",
      "stateNote": {
        "visual": "Broth turns pale gold; herb aroma steeps in.",
        "visualZh": "汤转淡金，药香渐渗。",
        "timeRef": "80 minutes",
        "timeRefZh": "80 分钟",
        "heat": "low",
        "signal": "Clean, warming scent — no gaminess.",
        "signalZh": "清新暖香，无膻。"
      }
    },
    {
      "text": "Skim any surface oil; add salt to taste.",
      "textZh": "撇去浮油，加盐调味。",
      "zhHint": "撇油定咸",
      "stateNote": {
        "visual": "Surface clears; oil beads skimmed off.",
        "visualZh": "汤面转清，油珠撇净。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Broth tastes clean and savory.",
        "signalZh": "汤清味鲜。"
      }
    },
    {
      "text": "Rest 5 minutes off heat so the herbal notes settle.",
      "textZh": "离火静置5分钟让药味融合。",
      "zhHint": "静置融合",
      "stateNote": {
        "visual": "Broth slightly thickens as it cools.",
        "visualZh": "稍凉汤汁微稠。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Angelica aroma mellows to sweet-warm.",
        "signalZh": "当归香转甜暖。"
      }
    },
    {
      "text": "Scatter scallion and serve the broth and meat together, hot.",
      "textZh": "撒葱花，汤肉同热上桌。",
      "zhHint": "撒葱出锅",
      "stateNote": {
        "visual": "Scallion bright green atop clear gold broth.",
        "visualZh": "葱花翠绿浮于金汤。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Comforting, medicinal warmth.",
        "signalZh": "温润药膳暖意。"
      }
    }
  ],
  "tips": [
    "Use generous ginger — it balances the angelica and warms the dish.",
    "This is a broth-first soup; skim oil for a lighter feel.",
    "Drink the broth hot; it is the point of the recipe."
  ],
  "tipsZh": [
    "生姜要足，既和当归又增暖。",
    "以汤为主，撇油更清。",
    "趁热饮汤，方显其意。"
  ],
  "relatedSlugs": [
    "radish-lamb-stew",
    "hand-torn-lamb",
    "red-braised-lamb",
    "sour-soup-lamb"
  ],
  "image": "/images/recipes/og-default.webp"
};
