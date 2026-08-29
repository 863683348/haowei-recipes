import type { Recipe } from "@/lib/types";

/** Iron Pot Stew Goose (铁锅炖大鹅) — Seed batch */
export const iron_pot_stew_goose: Recipe = {
  "id": "tie-guo-dun-da-e",
  "slug": "iron-pot-stew-goose",
  "titleEn": "Iron Pot Stew Goose",
  "titleZh": "铁锅炖大鹅",
  "pinyin": "tiě guō dùn dà é",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Heilongjiang",
  "regionZh": "黑龙江省",
  "difficulty": "medium",
  "timeMin": 180,
  "servings": 6,
  "version": "family",
  "versionNote": "Family version uses bone-in goose leg and thigh pieces, slow-braised in a cast-iron pot—no pressure cooker, no shortcuts. Restaurant versions often pre-boil or use frozen goose; this one starts raw for deeper flavor.",
  "versionNoteZh": "家庭版使用带骨鹅腿与鹅 thighs，铸铁锅慢炖，不加压、不焯水。餐馆版常预煮或用冻鹅，本方坚持生料下锅以锁原香。",
  "tags": [
    "slow-cook",
    "winter",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Qiqihar raised geese on his riverside plot. Every winter solstice, he’d bring two plump birds to our courtyard in Harbin, and my grandmother would season them with ginger, scallions, and a splash of Shaoxing wine before sealing the lid of her black iron wok—steam rising like incense as we waited three hours.",
  "storyZh": "我齐齐哈尔的舅舅在松花江边养鹅。每年冬至，他总提两只肥鹅来哈尔滨的院里，奶奶用姜、葱和一勺绍兴酒腌好，盖上黑铁锅盖——蒸气如香火升腾，我们守着等满三小时。",
  "ingredients": [
    {
      "id": "go-01",
      "nameEn": "goose leg and thigh (bone-in, skin-on)",
      "nameZh": "鹅腿与鹅大腿（带骨带皮）",
      "pinyin": "é tuǐ yǔ é dà tuǐ",
      "amountMetric": "1200 g",
      "amountUS": "2.6 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for 'whole goose leg quarters' — includes drumstick + thigh joint. Sub: duck legs (same weight), but goose gives richer gelatin.",
      "noteZh": "请肉铺提供‘整鹅腿块’（含小腿+大腿关节）。替代：鸭腿（同重），但鹅胶质更丰腴。"
    },
    {
      "id": "go-02",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "50 g",
      "amountUS": "½ cup, thickly sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "go-03",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "60 g",
      "amountUS": "4 large stalks, white and green parts separated",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "go-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "60 ml",
      "amountUS": "¼ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "go-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Rinse goose pieces under cold water. Pat dry thoroughly with paper towels—crucial for browning later.",
      "textZh": "鹅块冷水冲洗，用厨房纸彻底擦干——后续上色关键。",
      "zhHint": "务必擦干",
      "stateNote": {
        "visual": "Goose skin is matte, not shiny or damp",
        "visualZh": "鹅皮呈哑光，无水渍反光",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "No moisture clinging to surface",
        "signalZh": "表面无挂水"
      }
    },
    {
      "text": "Heat a 5.5-L cast-iron Dutch oven over medium-high heat. Add goose skin-side down; press gently with a spatula. Sear until deep golden brown (7–9 min). Flip and sear other side 4 min.",
      "textZh": "5.5L铸铁锅中火烧热，鹅皮朝下放入，轻压定型，煎至深金黄（7–9分钟）；翻面再煎4分钟。",
      "zhHint": "先煎皮，压紧防卷",
      "stateNote": {
        "visual": "Skin is deeply caramelized, edges curling slightly",
        "visualZh": "表皮焦糖化明显，边缘微翘",
        "timeRef": "7–9 minutes",
        "timeRefZh": "7–9 分钟",
        "heat": "medium-high",
        "signal": "Rich aroma rises; fat renders visibly",
        "signalZh": "香气浓郁；油脂清晰析出"
      }
    },
    {
      "text": "Remove goose; pour off all but 2 tbsp rendered fat. Add ginger slices and scallion whites. Stir-fry 2 min until fragrant.",
      "textZh": "捞出鹅块，倒掉多余油，留2汤匙；下姜片与葱白段，煸炒2分钟至香。",
      "zhHint": "只留底油，爆香姜葱",
      "stateNote": {
        "visual": "Ginger edges turn translucent, scallion whites soften",
        "visualZh": "姜边变半透明，葱白变软",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Aromatic steam lifts from pan",
        "signalZh": "锅中升起辛香蒸汽"
      }
    },
    {
      "text": "Return goose to pot. Add Shaoxing wine, light soy sauce, and 1 L boiling water (just enough to cover meat by 2 cm). Bring to gentle boil, then reduce heat to low.",
      "textZh": "鹅块回锅，加绍酒、生抽、1L沸水（没过食材2cm）。大火烧开后转最小火。",
      "zhHint": "水要沸，火要小",
      "stateNote": {
        "visual": "Surface shivers with tiny bubbles, no vigorous rolling",
        "visualZh": "水面微颤冒小泡，无翻滚",
        "timeRef": "immediately after boil",
        "timeRefZh": "沸腾即转",
        "heat": "low",
        "signal": "Steam rises steadily but quietly",
        "signalZh": "蒸汽匀速而安静上升"
      }
    },
    {
      "text": "Cover tightly. Simmer 2.5 hours, checking every 45 min: skim foam, add hot water if level drops below meat. In final 30 min, add scallion greens and stir gently.",
      "textZh": "盖严盖子，小火慢炖2.5小时，每45分钟检查：撇浮沫，若水位低于肉则补热水。最后30分钟加入葱绿段，轻搅。",
      "zhHint": "勤看水位，最后放葱绿",
      "stateNote": {
        "visual": "Goose meat pulls cleanly from bone with fork pressure",
        "visualZh": "叉子轻压，鹅肉即离骨",
        "timeRef": "2.5 hours total",
        "timeRefZh": "共2.5小时",
        "heat": "low",
        "signal": "Meat fibers separate easily; broth thickens slightly",
        "signalZh": "肉丝易散；汤汁略稠"
      }
    }
  ],
  "tips": [
    "Use a heavy-lid cast-iron pot — aluminum or thin steel won’t retain steady low heat.",
    "If goose isn’t available, substitute 1.2 kg bone-in duck legs — same timing, slightly less gelatin.",
    "Save rendered goose fat: it’s gold for frying potatoes or roasting root vegetables."
  ],
  "tipsZh": [
    "务必用厚盖铸铁锅——铝锅或薄钢锅无法维持恒定小火。",
    "若买不到鹅，可用1.2kg带骨鸭腿替代，时间不变，胶质略少。",
    "鹅油别倒掉！是煎土豆、烤根茎蔬菜的黄金油脂。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/iron-pot-stew-goose.webp"
};
