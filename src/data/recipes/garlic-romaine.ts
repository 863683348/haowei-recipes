import type { Recipe } from "@/lib/types";

/** Garlic Romaine (蒜蓉油麦菜) (蒜蓉油麦菜) — Day batch */
export const garlic_romaine: Recipe = {
  "id": "garlic-romaine",
  "slug": "garlic-romaine",
  "titleEn": "Garlic Romaine (蒜蓉油麦菜)",
  "titleZh": "蒜蓉油麦菜",
  "pinyin": "suàn róng yóu mài cài",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "National favorite",
  "regionZh": "全国流行",
  "difficulty": "easy",
  "timeMin": 12,
  "servings": 2,
  "version": "family",
  "versionNote": "Quick high-heat stir-fry. The romaine stays crisp, garlic shines, no complex sauce needed.",
  "versionNoteZh": "大火快炒快手菜。油麦菜保持脆嫩，蒜香突出，无需复杂调味。",
  "tags": [
    "quick",
    "vegetarian",
    "weeknight",
    "15-min"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "油麦菜 is a summer staple in Chinese home kitchens — a long, narrow lettuce with a slightly bitter, artichoke-like flavor that loves a quick scorch in the wok. Paired with generous garlic, it is the weekday vegetable side that takes less time than boiling rice.",
  "storyZh": "油麦菜是中国家庭夏日的常客——细长叶片，略带苦味的洋蓟风味，大火快炒最对味。配大量蒜末，是比煮饭还快的家常蔬菜。",
  "image": "/images/recipes/garlic-romaine.svg",
  "ingredients": [
    {
      "id": "gr-01",
      "nameEn": "romaine lettuce (油麦菜)",
      "nameZh": "油麦菜",
      "pinyin": "yóu mài cài",
      "amountMetric": "400 g",
      "amountUS": "1 large bunch",
      "category": "produce",
      "pantry": "local",
      "termKey": "",
      "note": "Look for crisp, bright green stalks with no yellowing. If unavailable, use Chinese broccoli (gai lan) stems trimmed to 5-cm lengths.",
      "noteZh": "选翠绿挺直、无黄叶者。买不到可用菜心茎代替。"
    },
    {
      "id": "gr-02",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "6 cloves",
      "amountUS": "6 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic",
      "note": "Double the garlic here — this dish lives or dies by garlic quantity.",
      "noteZh": "这道菜蒜越多越好，蒜量决定成败。"
    },
    {
      "id": "gr-03",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gr-04",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "gr-05",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gr-06",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Wash romaine thoroughly and cut into 5-cm lengths. Shake off excess water — wet leaves steam instead of fry.",
      "textZh": "油麦菜洗净，切5厘米长段。甩干水分——湿叶子会蒸煮而不是快炒。",
      "zhHint": "洗净甩干",
      "stateNote": {
        "visual": "Leaves are bright green and firm, stems snap cleanly when bent",
        "visualZh": "叶片翠绿挺直，茎部折断时发出清脆声",
        "signal": "No yellowing or wilted outer leaves",
        "signalZh": "无黄叶或萎蔫外层"
      }
    },
    {
      "text": "Mince garlic finely. Set aside.",
      "textZh": "大蒜切末，备用。",
      "zhHint": "备蒜末"
    },
    {
      "text": "Heat oil in a wok over high heat until just shimmering (about 45 seconds).",
      "textZh": "大火烧锅至油面微微泛光（约45秒）。",
      "zhHint": "热油",
      "stateNote": {
        "visual": "Oil ripples faintly with no smoke",
        "visualZh": "油面泛起细微涟漪，无青烟",
        "heat": "high",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "signal": "A chopstick tip held above the oil sizzles immediately",
        "signalZh": "筷子尖距油面2厘米处持续嘶嘶作响"
      }
    },
    {
      "text": "Add minced garlic. Stir-fry 10 seconds until fragrant — do not let it brown.",
      "textZh": "下蒜末，快炒10秒至出香——不要煎黄。",
      "zhHint": "爆香蒜末",
      "stateNote": {
        "visual": "Garlic bubbles vigorously and fills the kitchen with aroma",
        "visualZh": "蒜末滋滋冒泡，满屋蒜香",
        "heat": "high",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "Sharp garlic aroma without any bitter or burnt note",
        "signalZh": "香气尖锐蒜香扑鼻——无苦涩或焦糊味"
      }
    },
    {
      "text": "Add romaine and salt. Toss vigorously for exactly 60 seconds — the leaves should wilt just enough to become glossy while retaining crunch.",
      "textZh": "下油麦菜和盐，猛力翻炒恰好60秒——叶片微塌但保持脆感。",
      "zhHint": "大火快炒60秒",
      "stateNote": {
        "visual": "Leaves turn glossy dark green, stems still firm to the bite",
        "visualZh": "叶片油亮深绿，茎部仍脆硬",
        "heat": "high",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "signal": "Leaves are wilted but not mushy; stems still snap",
        "signalZh": "叶片塌软但非烂糊；茎部依然脆断"
      }
    },
    {
      "text": "Add oyster sauce and sesame oil. Toss 15 seconds more and serve immediately.",
      "textZh": "加蚝油和香油，再翻15秒立即上桌。",
      "zhHint": "调味出锅",
      "stateNote": {
        "visual": "Sauce coats leaves in a thin glossy film",
        "visualZh": "酱汁薄薄挂在叶片上，油亮均匀",
        "signal": "Pungent garlic and oyster aroma, no raw vegetable smell",
        "signalZh": "蒜香蚝香扑鼻，无生青味"
      }
    }
  ],
  "tips": [
    "Never cover the wok — trapped steam makes romaine soggy.",
    "Double the garlic from what the recipe says — it is the star.",
    "Cook on the highest heat your stove can manage; this dish lives on flame."
  ],
  "tipsZh": [
    "绝对不要盖锅盖——蒸汽会让油麦菜变软塌。",
    "蒜量加倍——它是这道菜的灵魂。",
    "火力越大越好，这道菜靠猛火立身。"
  ],
  "relatedSlugs": [
    "oyster-sauce-lettuce",
    "stir-fried-bok-choy",
    "garlic-chives-scrambled-eggs"
  ]
};
