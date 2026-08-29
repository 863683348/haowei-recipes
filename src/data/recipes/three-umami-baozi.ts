import type { Recipe } from "@/lib/types";

/** Three-Umami Baozi (三鲜包) — Seed batch */
export const three_umami_baozi: Recipe = {
  "id": "san-xian-bao",
  "slug": "three-umami-baozi",
  "titleEn": "Three-Umami Baozi",
  "titleZh": "三鲜包",
  "pinyin": "sān xiān bāo",
  "cuisine": "面点小吃",
  "cuisineEn": "Steamed Bun",
  "region": "Jiangsu",
  "regionZh": "江苏",
  "difficulty": "medium",
  "timeMin": 165,
  "servings": 12,
  "version": "family",
  "versionNote": "True Jiangsu style: shrimp + pork + cabbage—not egg or mushroom. Cabbage is blanched, squeezed, and folded in last to preserve crunch.",
  "versionNoteZh": "地道苏式：虾仁+猪肉+白菜，不用鸡蛋或香菇。白菜焯水挤干，最后拌入以保脆嫩。",
  "tags": [
    "seafood",
    "spring-recipe",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Yangzhou made these every Qingming Festival, using river shrimp from Slender West Lake. She’d sing while shredding napa cabbage—'crunch like spring rain'—then fold each bun with a tiny shrimp tail peeking out.",
  "storyZh": "扬州外婆每年清明必做此包，虾仁取自瘦西湖。她边切白菜边哼唱：“脆如春雨”，包好后每只顶端露出一截虾尾。",
  "ingredients": [
    {
      "id": "txb-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Same as fresh pork baozi dough—use identical method",
      "noteZh": "面团同鲜肉包，做法一致"
    },
    {
      "id": "txb-02",
      "nameEn": "ground pork shoulder (coarsely minced)",
      "nameZh": "猪前腿肉（粗剁）",
      "pinyin": "zhū qián tuǐ ròu",
      "amountMetric": "300 g",
      "amountUS": "1¼ cups loosely packed",
      "category": "protein",
      "pantry": "local",
      "note": "Coarsely minced only—no pre-ground",
      "noteZh": "仅限粗剁，禁用现成绞肉"
    },
    {
      "id": "txb-03",
      "nameEn": "fresh shrimp, peeled and finely chopped",
      "nameZh": "鲜虾仁（切碎）",
      "pinyin": "xiān xiā rén",
      "amountMetric": "200 g",
      "amountUS": "¾ cup finely chopped",
      "category": "protein",
      "pantry": "local",
      "note": "Frozen shrimp ok—thaw, pat dry, chop by hand",
      "noteZh": "可用冻虾仁，解冻后吸干水分手切"
    },
    {
      "id": "txb-04",
      "nameEn": "napa cabbage",
      "nameZh": "大白菜",
      "pinyin": "dà bái cài",
      "amountMetric": "300 g",
      "amountUS": "3 cups shredded",
      "category": "produce",
      "pantry": "local",
      "note": "Core removed, leaves shredded thin; blanch 30 sec, squeeze dry",
      "noteZh": "去梗，切细丝；沸水烫30秒，挤干水分"
    },
    {
      "id": "txb-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1⅓ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "txb-06",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "3 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "txb-07",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "40 g",
      "amountUS": "⅓ cup finely chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Prepare cabbage: Shred napa cabbage finely. Blanch in boiling water 30 seconds. Drain, cool, then squeeze firmly in clean towel until no water drips.",
      "textZh": "处理白菜：白菜切细丝，沸水焯烫30秒。捞出沥凉，用洁净毛巾用力攥干至无水滴出。",
      "zhHint": "白菜必须攥干",
      "stateNote": {
        "visual": "Cabbage shreds look pale green and feel stiff, not limp",
        "visualZh": "白菜丝呈浅绿色，手感挺括不软塌",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Color brightens slightly; no raw smell remains",
        "signalZh": "颜色微亮，无生涩味"
      }
    },
    {
      "text": "Make filling: In bowl, combine pork, shrimp, light soy sauce, white pepper, scallions, and 5 g sugar. Stir 2 minutes clockwise until tacky.",
      "textZh": "调馅：碗中混合猪肉、虾仁、生抽、白胡椒粉、葱末、糖5 g，顺时针搅打2分钟至黏手。",
      "zhHint": "虾肉先与肉拌匀",
      "stateNote": {
        "visual": "Mixture clings to spoon in thick ribbons",
        "visualZh": "馅料成厚带状裹住勺子",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No separation of liquid or graininess",
        "signalZh": "无水分析出，无颗粒感"
      }
    },
    {
      "text": "Fold in cabbage: Gently fold squeezed cabbage into filling just until evenly distributed—do not overmix. Chill 15 minutes.",
      "textZh": "拌入白菜：将攥干的白菜轻轻拌入馅中，均匀即可，忌过度搅拌。冷藏15分钟。",
      "zhHint": "最后拌入，保脆",
      "stateNote": {
        "visual": "Cabbage bits remain distinct and vibrant green",
        "visualZh": "白菜碎清晰可见，翠绿鲜亮",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Filling stays cohesive but not wet",
        "signalZh": "馅料成团但不渗水"
      }
    },
    {
      "text": "Roll dough: Use same fermented dough as fresh pork baozi. Divide into 12 pieces (≈75 g each), roll into circles 10 cm wide.",
      "textZh": "擀皮：使用同鲜肉包的发酵面团，均分12份（每份约75 g），擀成10 cm圆皮。",
      "zhHint": "皮中间稍厚，边缘薄",
      "stateNote": {
        "visual": "Edge is translucent; center is opaque and slightly thicker",
        "visualZh": "边缘透光，中心不透光且略厚",
        "timeRef": "2 minutes per bun",
        "timeRefZh": "每只约2 分钟",
        "signal": "No tearing when gently stretched",
        "signalZh": "轻拉不破"
      }
    },
    {
      "text": "Fill and pleat: Place 45 g filling in center. Lift edge and pleat toward center, rotating—18 folds total. Pinch top closed firmly. Rest seam-down 20 minutes.",
      "textZh": "包制：取45 g馅置于皮中央，提边向中心捏褶，边转边捏，共18褶。收口捏紧。褶口朝下醒发20分钟。",
      "zhHint": "虾尾朝上露一点",
      "stateNote": {
        "visual": "Top shows faint pink from shrimp; base expands slightly",
        "visualZh": "顶部透出淡粉色虾色；底部微胀",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Surface glistens lightly; no deflation when touched",
        "signalZh": "表面微润，轻触不塌陷"
      }
    },
    {
      "text": "Steam: Steam over boiling water on high heat 13 minutes. Turn off heat—wait 4 minutes before opening lid.",
      "textZh": "蒸制：水沸后大火蒸13分钟。关火焖4分钟再揭盖。",
      "zhHint": "比肉包多1分钟，因含虾",
      "stateNote": {
        "visual": "Buns look plump and slightly glossy; steam rises steadily",
        "visualZh": "包子饱满微亮，蒸汽持续上升",
        "timeRef": "13 minutes",
        "timeRefZh": "13 分钟",
        "heat": "high",
        "signal": "Shrimp aroma fills kitchen unmistakably",
        "signalZh": "厨房弥漫清晰虾鲜香"
      }
    }
  ],
  "tips": [
    "Shrimp must be raw and unmarinated—no salt added before folding",
    "Blanching cabbage removes bitterness and prevents sogginess",
    "If freezing, freeze unbaked buns—steam from frozen (add 2 extra minutes)"
  ],
  "tipsZh": [
    "虾仁须生用，不可提前腌制或加盐",
    "白菜焯水去涩味，防蒸后出水",
    "冷冻生坯，无需解冻直接蒸（加2分钟）"
  ],
  "relatedSlugs": [
    "fresh-pork-baozi"
  ],
  "image": "/images/recipes/three-umami-baozi.webp"
};
