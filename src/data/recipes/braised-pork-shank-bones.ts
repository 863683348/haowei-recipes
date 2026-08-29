import type { Recipe } from "@/lib/types";

/** Braised Pork Shank Bones (Jiàng Dà Gǔ) (酱大骨) — Seed batch */
export const braised_pork_shank_bones: Recipe = {
  "id": "jiang-da-gu",
  "slug": "braised-pork-shank-bones",
  "titleEn": "Braised Pork Shank Bones (Jiàng Dà Gǔ)",
  "titleZh": "酱大骨",
  "pinyin": "jiàng dà gǔ",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shandong",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 180,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses whole shank bones with marrow, slow-simmered in a reusable master stock base — no MSG or commercial braising sauce.",
  "versionNoteZh": "家庭版使用带骨髓的整段猪棒骨，用可复用的老卤汤底慢炖，不添加味精或市售酱料。",
  "tags": [
    "slow-cook",
    "weekend",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Jinan used to braise these on Sunday mornings — the scent of star anise and dark soy would fill his narrow alleyway courtyard while he told stories about working at the old Jinan Meat Processing Plant in the 1970s.",
  "storyZh": "我济南的舅舅每逢周日清晨都会炖这道菜——八角与老抽的香气弥漫在他窄窄的胡同院里，他一边炖一边讲上世纪70年代在济南肉类加工厂工作的往事。",
  "ingredients": [
    {
      "id": "bd-01",
      "nameEn": "pork shank bones (with marrow, ~5 cm thick)",
      "nameZh": "猪棒骨（带骨髓，约5厘米厚）",
      "pinyin": "zhū bàng gǔ",
      "amountMetric": "1000 g",
      "amountUS": "2.2 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for 'cross-cut pork shank' — not rib bones. Must include marrow cavity.",
      "noteZh": "请肉贩切‘横截猪前腿骨’，非肋排；需保留骨髓腔。"
    },
    {
      "id": "bd-02",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "bd-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bd-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "bd-05",
      "nameEn": "fresh ginger, smashed",
      "nameZh": "鲜姜块（拍松）",
      "pinyin": "xiān jiāng kuài",
      "amountMetric": "30 g",
      "amountUS": "1.5-inch piece",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bd-06",
      "nameEn": "scallions, white parts only, tied in knot",
      "nameZh": "小葱白（打结）",
      "pinyin": "xiǎo cōng bái",
      "amountMetric": "60 g",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "bd-07",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "3 pcs",
      "amountUS": "3 pcs",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "bd-08",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "25 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute light brown sugar if unavailable — but ice sugar gives authentic glossy finish.",
      "noteZh": "如无冰糖，可用浅色红糖替代，但冰糖赋予正宗琥珀光泽。"
    }
  ],
  "steps": [
    {
      "text": "Rinse pork bones under cold water; place in large pot, cover with cold water, and bring to a rolling boil over high heat. Skim off all grayish foam vigorously for 3 minutes.",
      "textZh": "猪骨冷水冲洗；入大锅，加足量冷水，大火烧沸；持续撇净浮沫3分钟。",
      "zhHint": "焯水去腥",
      "stateNote": {
        "visual": "Water turns cloudy gray with thick scum rising to surface",
        "visualZh": "水面泛起浓密灰白色浮沫，水体浑浊",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Foam stops forming new clusters and becomes stable gray layer",
        "signalZh": "浮沫不再大量新生，形成稳定灰层"
      }
    },
    {
      "text": "Drain bones and rinse again under cool running water. Pat dry thoroughly with paper towels.",
      "textZh": "捞出骨头，流水冲洗，用厨房纸彻底擦干。",
      "zhHint": "沥干防溅油",
      "stateNote": {
        "visual": "Bones appear pale pink and completely moisture-free on surface",
        "visualZh": "骨头呈淡粉色，表面完全无水渍",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No water beads remain when lightly pressed",
        "signalZh": "轻压无水珠渗出"
      }
    },
    {
      "text": "Heat wok or Dutch oven over medium-high heat. Add 1 tbsp neutral oil, then sear bones on all sides until deeply browned (about 6–8 minutes total). Do not crowd pan.",
      "textZh": "炒锅或铸铁锅中火高热，加1 tbsp中性油，分批将骨头煎至四面焦褐（共约6–8分钟）。",
      "zhHint": "分批煎透",
      "stateNote": {
        "visual": "Deep mahogany crust forms on bone surfaces, no pink raw spots remain",
        "visualZh": "骨面形成深棕褐色脆壳，无粉红生肉区",
        "timeRef": "6–8 minutes",
        "timeRefZh": "6–8 分钟",
        "heat": "medium-high",
        "signal": "Sizzling becomes steady and deep, not spluttering",
        "signalZh": "滋滋声转为沉稳，无爆溅"
      }
    },
    {
      "text": "Add ginger, scallion knots, star anise, dark soy, light soy, Shaoxing wine, and rock sugar. Pour in enough hot water to just cover bones (approx. 1200 ml). Bring to gentle simmer.",
      "textZh": "下姜块、葱结、八角、老抽、生抽、绍酒、冰糖；冲入热水没过骨头（约1200 ml），煮至微沸。",
      "zhHint": "热水防肉紧",
      "stateNote": {
        "visual": "Liquid bubbles softly at edges, steam rises steadily but no vigorous rolling",
        "visualZh": "锅边微泡，蒸汽匀速升腾，无剧烈翻滚",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium",
        "signal": "Surface shows tiny, continuous bubbles — not large bursts",
        "signalZh": "水面浮现细密连续气泡，非大泡迸裂"
      }
    },
    {
      "text": "Cover tightly and reduce heat to lowest possible simmer. Braise uncovered for first 30 minutes, then cover and braise 2.5 hours more. Turn bones gently every 45 minutes.",
      "textZh": "盖紧盖子，调至最小火；先敞盖炖30分钟，再加盖慢炖2.5小时；每45分钟轻翻一次骨头。",
      "zhHint": "勤翻保入味",
      "stateNote": {
        "visual": "Liquid reduces by ~1/3, turns syrupy and glossy around bones",
        "visualZh": "卤汁减少约1/3，裹骨处呈琥珀光泽",
        "timeRef": "2.5 hours",
        "timeRefZh": "2.5 小时",
        "heat": "low",
        "signal": "Single bubble breaks surface every 3–4 seconds",
        "signalZh": "每3–4秒冒出一个气泡"
      }
    }
  ],
  "tips": [
    "Save the braising liquid — strain and refrigerate for up to 1 week to reuse as master stock.",
    "Serve bones warm with steamed jasmine rice and blanched bok choy.",
    "Marrow is best scooped out with a small spoon while hot — it’s rich, savory, and melts on tongue."
  ],
  "tipsZh": [
    "卤汁滤净冷藏，可保存1周，作老卤反复使用。",
    "趁热配茉莉香米饭与焯水小白菜同食。",
    "骨髓需趁热用小勺挖食，丰腴咸鲜，入口即化。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/braised-pork-shank-bones.webp"
};
