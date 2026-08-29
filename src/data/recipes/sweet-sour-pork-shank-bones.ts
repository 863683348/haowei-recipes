import type { Recipe } from "@/lib/types";

/** Sweet-and-Sour Pork Shank Bones (Táng Cù Dà Gǔ) (糖醋大骨) — Seed batch */
export const sweet_sour_pork_shank_bones: Recipe = {
  "id": "tang-cu-da-gu",
  "slug": "sweet-sour-pork-shank-bones",
  "titleEn": "Sweet-and-Sour Pork Shank Bones (Táng Cù Dà Gǔ)",
  "titleZh": "糖醋大骨",
  "pinyin": "táng cù dà gǔ",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Jiangsu",
  "regionZh": "江苏",
  "difficulty": "medium",
  "timeMin": 150,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version skips cornstarch-heavy glaze — instead relies on reduction and caramelized sugar for clingy, glossy finish without artificial thickness.",
  "versionNoteZh": "家庭版不依赖淀粉勾芡，靠糖焦化与自然收汁形成挂壁亮泽感，口感清爽不糊口。",
  "tags": [
    "tangy",
    "weekend",
    "sticky"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Yangzhou made this for Lunar New Year — she’d crack open the marrow after braising, stir it into the sauce, and serve it with lotus root slices she’d pickled herself in rice vinegar.",
  "storyZh": "扬州外婆每逢春节必做这道菜——她会将炖软的骨髓挖出搅入酱汁，并配上自腌的藕片，酸脆解腻。",
  "ingredients": [
    {
      "id": "tc-01",
      "nameEn": "pork shank bones (with marrow, ~5 cm thick)",
      "nameZh": "猪棒骨（带骨髓，约5厘米厚）",
      "pinyin": "zhū bàng gǔ",
      "amountMetric": "1000 g",
      "amountUS": "2.2 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Same cut as braised version — cross-cut shank, marrow intact.",
      "noteZh": "同酱大骨用料：横切前腿骨，骨髓完整。"
    },
    {
      "id": "tc-02",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "tc-03",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "80 g",
      "amountUS": "1/3 cup",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "tc-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tc-05",
      "nameEn": "fresh ginger, minced",
      "nameZh": "鲜姜末",
      "pinyin": "xiān jiāng mò",
      "amountMetric": "20 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "tc-06",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "15 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    }
  ],
  "steps": [
    {
      "text": "Blanch bones in boiling water 3 minutes, then rinse and drain. Pat dry.",
      "textZh": "骨头沸水焯3分钟，捞出冲洗沥干，擦净表面水分。",
      "zhHint": "去腥定型",
      "stateNote": {
        "visual": "Water clears slightly and no foam reappears after 2 minutes",
        "visualZh": "水体略清，2分钟后无新浮沫",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Bones feel firm to touch, not soft or mushy",
        "signalZh": "骨头触感紧实，不软塌"
      }
    },
    {
      "text": "In heavy-bottomed pot, combine rock sugar and 2 tbsp water. Heat over medium-low until sugar dissolves, then increase to medium and cook — without stirring — until amber-colored (5–6 min). Swirl pan gently.",
      "textZh": "厚底锅中放冰糖与2 tbsp水，中小火煮至融化，转中火不搅动，晃锅至琥珀色（5–6分钟）。",
      "zhHint": "糖色要匀",
      "stateNote": {
        "visual": "Liquid turns clear golden, then deep amber with thin wisps of smoke",
        "visualZh": "糖液由清亮金黄转为深琥珀色，泛起细烟",
        "timeRef": "5–6 minutes",
        "timeRefZh": "5–6 分钟",
        "heat": "medium",
        "signal": "Color deepens evenly; no grainy crystals visible",
        "signalZh": "色泽均匀加深，无颗粒结晶"
      }
    },
    {
      "text": "Carefully add bones — they will sizzle violently. Stir constantly 1 minute until coated. Add ginger and garlic; stir 30 seconds until fragrant.",
      "textZh": "迅速下骨头（剧烈嘶响），不停翻动1分钟裹糖色；加姜蒜末，炒香30秒。",
      "zhHint": "防糖溅烫",
      "stateNote": {
        "visual": "Bones gleam with even amber glaze; aromatics release sharp, clean scent",
        "visualZh": "骨头裹匀琥珀色糖衣；姜蒜散发清爽辛香",
        "timeRef": "1.5 minutes",
        "timeRefZh": "1.5 分钟",
        "heat": "medium",
        "signal": "Garlic edges turn pale gold, not brown",
        "signalZh": "蒜边微泛浅金，未焦黄"
      }
    },
    {
      "text": "Pour in Chinese black vinegar and light soy sauce. Add hot water to just cover bones (1000 ml). Bring to simmer, then cover and braise 2 hours on low heat.",
      "textZh": "烹入陈醋、生抽，加热水没过骨头（1000 ml），煮沸后转小火加盖焖2小时。",
      "zhHint": "醋后加水",
      "stateNote": {
        "visual": "Liquid simmers with gentle bubbles; surface shimmers with thin oil film",
        "visualZh": "汤面微泡，泛薄油光",
        "timeRef": "2 hours",
        "timeRefZh": "2 小时",
        "heat": "low",
        "signal": "Steam rises in slow, steady pulses",
        "signalZh": "蒸汽呈缓慢匀速脉动"
      }
    },
    {
      "text": "Uncover and raise heat to medium. Reduce sauce until thick and glossy, coating bones fully (15–20 min). Spoon sauce over bones 2–3 times during reduction.",
      "textZh": "开盖中火收汁至浓亮，能均匀裹骨（15–20分钟）；收汁中途2–3次淋酱。",
      "zhHint": "淋酱增亮",
      "stateNote": {
        "visual": "Sauce coats back of spoon thickly and holds line when finger drawn across",
        "visualZh": "酱汁浓稠挂勺，指划留痕不弥合",
        "timeRef": "15–20 minutes",
        "timeRefZh": "15–20 分钟",
        "heat": "medium",
        "signal": "Bones glisten like lacquer; sauce no longer watery or separated",
        "signalZh": "骨头如漆器般发亮；酱汁不水析、不分层"
      }
    }
  ],
  "tips": [
    "Use Chinese black vinegar — rice vinegar lacks depth and won’t balance the richness.",
    "Let bones rest 10 minutes before serving so marrow firms slightly for easier scooping.",
    "Leftover sauce freezes well — use as stir-fry base or dipping for dumplings."
  ],
  "tipsZh": [
    "务必用陈醋——米醋风味单薄，无法平衡油脂厚重感。",
    "装盘前静置10分钟，骨髓稍凝固更易挖取。",
    "余酱冷冻保存，是炒菜底味或饺子蘸料的上选。"
  ],
  "relatedSlugs": [
    "braised-pork-shank-bones"
  ],
  "image": "/images/recipes/sweet-sour-pork-shank-bones.webp"
};
