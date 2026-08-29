import type { Recipe } from "@/lib/types";

/** Beijing-Style Scallion Lamb Stir Fry (京葱爆羊肉) — Seed batch */
export const scallion_lamb_stir_fry_beijing_style: Recipe = {
  "id": "jing-cong-lamb-stir-fry",
  "slug": "scallion-lamb-stir-fry-beijing-style",
  "titleEn": "Beijing-Style Scallion Lamb Stir Fry",
  "titleZh": "京葱爆羊肉",
  "pinyin": "jīng cōng bào yáng ròu",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Chinese Snack",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses thinly sliced leg of lamb (not expensive cuts), marinated only with Shaoxing wine and white pepper — no soy or sugar. The scallions are thick-cut and cooked until just softened, preserving crunch and aroma.",
  "versionNoteZh": "家常版选用羊腿肉薄片（非高价部位），仅以黄酒与白胡椒腌制，不加酱油或糖。京葱粗切，断生即止，保脆留香。",
  "tags": [
    "20-min",
    "lamb-stir-fry",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Beijing’s Xidan neighborhood ran a tiny stall where he’d slice lamb on a marble counter while shouting orders — his secret was slicing against the grain *after* freezing for 20 minutes, so every bite stayed tender.",
  "storyZh": "我在西单的舅舅在石板案上片羊肉，边切边吆喝——他的诀窍是冻20分钟后再逆纹切，保证每一片都嫩而不柴。",
  "ingredients": [
    {
      "id": "jl-01",
      "nameEn": "boneless lamb leg, thinly sliced against the grain",
      "nameZh": "羊腿肉（逆纹切薄片）",
      "pinyin": "yáng tuǐ ròu",
      "amountMetric": "250 g",
      "amountUS": "1 ¾ cups (loose)",
      "category": "protein",
      "pantry": "local",
      "note": "Freeze 20 min before slicing for clean, thin cuts. Substitute with beef sirloin if lamb unavailable — adjust cook time to 45 sec/side.",
      "noteZh": "切前冷冻20分钟更易片薄。若无羊肉，可用牛里脊替代——每面改炒45秒。"
    },
    {
      "id": "jl-02",
      "nameEn": "large scallions (‘jing cong’), cut into 5-cm batons",
      "nameZh": "大葱（京葱，切5厘米段）",
      "pinyin": "jīng cōng",
      "amountMetric": "200 g",
      "amountUS": "2 large stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "jl-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "jl-04",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "白胡椒粉（现磨）",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "jl-05",
      "nameEn": "neutral oil (e.g., peanut or canola)",
      "nameZh": "无味植物油（如花生油或菜籽油）",
      "pinyin": "wú wèi zhí wù yóu",
      "amountMetric": "25 ml",
      "amountUS": "1 ¾ tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Toss lamb slices with Shaoxing wine and white pepper. Marinate 10 minutes at room temperature.",
      "textZh": "羊肉片加绍酒与白胡椒粉拌匀，室温腌10分钟。",
      "zhHint": "酒椒腌肉",
      "stateNote": {
        "visual": "Meat fibers appear slightly moistened but not wet",
        "visualZh": "肉丝表面微润不淌水",
        "timeRef": "10 minutes",
        "timeRefZh": "10分钟",
        "signal": "Faint alcohol aroma becomes mellow",
        "signalZh": "酒气由冲转柔"
      }
    },
    {
      "text": "Heat wok over high heat until very hot. Add oil and swirl. Add lamb in single layer; sear 45 seconds without stirring until lightly browned.",
      "textZh": "旺火烧热铁锅，下油滑匀。羊肉单层铺入，静置45秒至微褐，勿翻动。",
      "zhHint": "单层定焦",
      "stateNote": {
        "visual": "Lamb develops golden-brown edges and releases clear juices",
        "visualZh": "羊肉边缘呈金褐色，渗出清亮汁液",
        "timeRef": "45 seconds",
        "timeRefZh": "45秒",
        "heat": "high",
        "signal": "Sizzling sound deepens and steadies",
        "signalZh": "滋啦声由尖转沉、趋于稳定"
      }
    },
    {
      "text": "Flip lamb and cook 30 seconds more. Transfer to a plate — do not wash wok.",
      "textZh": "翻面再炒30秒，盛出备用。锅不必洗。",
      "zhHint": "锅留余香",
      "stateNote": {
        "visual": "Lamb is mostly opaque with slight pink center",
        "visualZh": "羊肉基本不透明，中心微粉",
        "timeRef": "30 seconds",
        "timeRefZh": "30秒",
        "heat": "high",
        "signal": "Edges curl slightly and separate cleanly",
        "signalZh": "边缘微卷，自然离锅"
      }
    },
    {
      "text": "Reheat same wok over high heat. Add scallions; stir-fry 60 seconds until edges turn translucent and fragrance blooms.",
      "textZh": "同一铁锅旺火复热，下葱段猛炒60秒至边缘微透、香气迸发。",
      "zhHint": "爆香京葱",
      "stateNote": {
        "visual": "Scallion edges soften but centers remain crisp and bright green",
        "visualZh": "葱段边缘变软，芯部仍脆、翠绿鲜活",
        "timeRef": "60 seconds",
        "timeRefZh": "60秒",
        "heat": "high",
        "signal": "Aroma intensifies sharply — sharp, green, and sweet",
        "signalZh": "葱香骤然爆发——辛冽中带清甜"
      }
    },
    {
      "text": "Return lamb to wok. Toss continuously for 20 seconds until fully heated and evenly mixed. Serve immediately.",
      "textZh": "羊肉倒回锅中，持续翻拌20秒至热透均匀，即刻装盘。",
      "zhHint": "回锅快拌",
      "stateNote": {
        "visual": "Lamb glistens with light oil sheen; scallions retain vivid green hue",
        "visualZh": "羊肉油润微亮，葱段翠绿不暗",
        "timeRef": "20 seconds",
        "timeRefZh": "20秒",
        "heat": "high",
        "signal": "Wok emits continuous ‘wok hei’ — smoky, savory, and aromatic",
        "signalZh": "锅气连绵不断：烟熏感、咸鲜味与葱香交织"
      }
    }
  ],
  "tips": [
    "Slice lamb *against* the grain after brief freezing — this is non-negotiable for tenderness.",
    "Use only the white and light-green parts of scallions; dark green tops are too fibrous for stir-fry.",
    "Do not overcrowd the wok — cook in batches if doubling the recipe."
  ],
  "tipsZh": [
    "羊肉务必冻20分钟后逆纹切——这是嫩滑唯一的保障。",
    "只取葱白及浅绿段；深绿葱叶纤维粗，不宜爆炒。",
    "切勿堆叠入锅——若量大请分批炒制。"
  ],
  "relatedSlugs": [
    "spring-pancake-vegetable-wrap",
    "chinese-chives-stir-fried-river-shrimp"
  ],
  "image": "/images/recipes/scallion-lamb-stir-fry-beijing-style.webp"
};
