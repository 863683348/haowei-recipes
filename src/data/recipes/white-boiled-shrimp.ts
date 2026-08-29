import type { Recipe } from "@/lib/types";

/** White-Boiled Shrimp (白灼虾) — Seed batch */
export const white_boiled_shrimp: Recipe = {
  "id": "bai-zhuo-xia",
  "slug": "white-boiled-shrimp",
  "titleEn": "White-Boiled Shrimp",
  "titleZh": "白灼虾",
  "pinyin": "bái zhuó xiā",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses minimal seasoning and emphasizes shrimp freshness — no sugar or MSG, unlike some restaurant versions that add a splash of oyster sauce.",
  "versionNoteZh": "家庭版仅用姜、葱、料酒去腥提鲜，不加糖或味精；部分餐馆版本会加蚝油增亮增味。",
  "tags": [
    "15-min",
    "weeknight",
    "seafood"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Guangzhou taught me this when I was ten — she’d buy live river shrimp from Xiguan Market every Thursday, saying 'the shrimp must dance in the pot before they rest.' She never boiled more than 8 at once so each stayed plump and sweet.",
  "storyZh": "我十岁时，广州的姑妈教我这道菜——她每周四都去西关市场买活河虾，说‘虾要在锅里跳完最后一支舞才肯安息’。她从不一次煮超过八只，确保每只都饱满清甜。",
  "ingredients": [
    {
      "id": "sh-01",
      "nameEn": "large shrimp, peeled and deveined, tails on",
      "nameZh": "大虾（去壳去线，留尾）",
      "pinyin": "dà xiā",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz (about 16–18 shrimp)",
      "category": "protein",
      "pantry": "local",
      "note": "Use fresh or high-quality frozen; thaw fully and pat dry.",
      "noteZh": "选用新鲜或优质冷冻虾；完全解冻后擦干水分。"
    },
    {
      "id": "sh-02",
      "nameEn": "ginger, thinly sliced",
      "nameZh": "生姜（切薄片）",
      "pinyin": "shēng jiāng",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp (about 6 slices)",
      "category": "produce",
      "pantry": "local",
      "note": "Peel lightly with a spoon — preserves fiber and aroma.",
      "noteZh": "用勺子轻刮去皮，保留纤维与香气。",
      "termKey": "ginger"
    },
    {
      "id": "sh-03",
      "nameEn": "scallion whites, cut into 3-cm pieces",
      "nameZh": "葱白（切3厘米段）",
      "pinyin": "cōng bái",
      "amountMetric": "40 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "note": "Use only whites for clean, mild aroma — greens reserved for garnish.",
      "noteZh": "仅用葱白取其清冽香气；葱绿留作最后点缀。",
      "termKey": "scallion"
    },
    {
      "id": "sh-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute dry sherry if unavailable.",
      "noteZh": "无绍兴酒可用干雪利酒替代。",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Fill a wide, deep pot with 1.5 L water. Add ginger slices, scallion whites, and Shaoxing wine.",
      "textZh": "宽口深锅中加入1.5升水，放入姜片、葱白段和绍兴酒。",
      "zhHint": "先煮水再下虾",
      "stateNote": {
        "visual": "Water is clear with faint golden tint from ginger.",
        "visualZh": "水呈清澈微金黄色，姜香初透。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Bubbles begin to rise steadily from bottom.",
        "signalZh": "锅底开始持续冒出均匀气泡。"
      },
      "tip": "Do not add salt — shrimp’s natural sweetness needs no enhancement.",
      "tipZh": "切勿加盐——虾本身的清甜无需额外提味。"
    },
    {
      "text": "Bring to a vigorous boil, then reduce heat to medium-high and maintain a steady rolling simmer.",
      "textZh": "大火烧沸后调至中高火，保持水面持续翻滚。",
      "zhHint": "水沸即下虾",
      "stateNote": {
        "visual": "Large bubbles break constantly across entire surface.",
        "visualZh": "整锅水面持续翻涌大气泡。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "Steam rises thickly and audibly.",
        "signalZh": "蒸汽浓密且有明显‘嘶嘶’声。"
      }
    },
    {
      "text": "Gently add shrimp in a single layer. Do not stir — let them poach undisturbed.",
      "textZh": "将虾平铺入锅，不搅动，静置浸烫。",
      "zhHint": "虾身微卷即熟",
      "stateNote": {
        "visual": "Shrimp turn opaque pink with slight curling at tails.",
        "visualZh": "虾身由透明转为粉红，尾部微微卷曲。",
        "timeRef": "90–120 seconds",
        "timeRefZh": "90–120 秒",
        "heat": "medium-high",
        "signal": "First shrimp begins curling tightly like a comma.",
        "signalZh": "最先下锅的虾尾部紧卷如逗号。"
      }
    },
    {
      "text": "Immediately drain shrimp into a colander. Rinse *briefly* under cold running water for 5 seconds to halt cooking and firm texture.",
      "textZh": "迅速捞出沥干，用冷水冲淋5秒以止熟并收紧虾肉。",
      "zhHint": "冷激定型",
      "stateNote": {
        "visual": "Shrimp gleam with tight, glossy surface and springy feel.",
        "visualZh": "虾身泛光、紧实有弹性。",
        "timeRef": "5 seconds",
        "timeRefZh": "5 秒",
        "signal": "Surface feels cool and resilient to fingertip press.",
        "signalZh": "指尖轻按即弹回，触感凉而韧。"
      }
    },
    {
      "text": "Arrange on a chilled plate. Garnish with reserved scallion greens and serve immediately with light soy sauce for dipping.",
      "textZh": "摆入冰镇盘中，撒上预留的葱绿，配浅色酱油蘸食。",
      "zhHint": "冷盘热酱",
      "stateNote": {
        "visual": "Shrimp sit upright, glistening, with vibrant green garnish.",
        "visualZh": "虾体挺立、油亮，葱绿鲜翠。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "No steam rising from plate.",
        "signalZh": "盘面无热气升腾。"
      }
    }
  ],
  "tips": [
    "Use head-on shrimp if available — their natural enzymes enhance sweetness.",
    "Never overcook: shrimp are done the moment they curl into a loose C-shape.",
    "Chill the serving plate in freezer 10 minutes before plating for optimal texture."
  ],
  "tipsZh": [
    "如有条件，选用带头虾——虾头内天然酶可提升鲜甜度。",
    "切忌过熟：虾身刚卷成松散‘C’形即达最佳火候。",
    "上菜前10分钟将盘子放入冰箱冷冻室预冷，口感更爽弹。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/white-boiled-shrimp.webp"
};
