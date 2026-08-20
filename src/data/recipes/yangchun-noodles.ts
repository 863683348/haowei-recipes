import type { Recipe } from "@/lib/types";

/** Yangchun Noodles (阳春面) (阳春面) — Day batch */
export const yangchun_noodles: Recipe = {
  "id": "yangchun-noodles",
  "slug": "yangchun-noodles",
  "titleEn": "Yangchun Noodles (阳春面)",
  "titleZh": "阳春面",
  "pinyin": "yáng chūn miàn",
  "cuisine": "淮扬菜",
  "cuisineEn": "Huaiyang",
  "region": "Jiangsu",
  "regionZh": "江苏",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "The simplest Chinese noodle soup — clear broth, no garnish beyond scallion. The depth comes from the broth and the quality of the noodles. A winter comfort that feels like spring.",
  "versionNoteZh": "最简约的中式汤面——清汤底，仅葱点缀。深度来自汤底和面条品质。冬日 comfort，却有春日暖意。",
  "tags": [
    "comfort",
    "quick",
    "weeknight",
    "simple",
    "noodles"
  ],
  "dietary": [
    "none"
  ],
  "story": "阳春面 is the noodle equivalent of a blank canvas — deceptively simple, impossible to perfect, and deeply comforting. The name means \"spring face\" and refers to the clear, pale broth that looks like the first warm days of spring. Nanjing and Shanghai variants exist, but the principle is universal: great broth, good noodles, a pinch of scallion.",
  "storyZh": "阳春面相当于面条界的留白——看似简单，极难做好，但温暖治愈。\"阳春\"指清澈的淡色汤底，如同春日初暖。南京和上海各有版本，但原则一致：好汤、好面、一撮葱。",
  "image": "/images/recipes/og-default.webp",
  "ingredients": [
    {
      "id": "yn-01",
      "nameEn": "wheat noodles (thin, fresh if possible)",
      "nameZh": "细小麦面条",
      "pinyin": "xì xiǎo mài miàn",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "staple",
      "pantry": "local",
      "note": "Thin egg noodles or ramen-style wheat noodles work. Avoid thick udon or chewy somen.",
      "noteZh": "细鸡蛋面或拉面风格小麦面均可。避开粗乌冬或韧性素面。"
    },
    {
      "id": "yn-02",
      "nameEn": "chicken stock (or good-quality instant stock)",
      "nameZh": "高汤",
      "pinyin": "gāo tāng",
      "amountMetric": "600 ml",
      "amountUS": "2½ cups",
      "category": "other",
      "pantry": "local",
      "note": "Homemade is best; instant chicken stock cube dissolved in water works in a pinch.",
      "noteZh": "自制最佳；临时用速溶鸡高汤块兑水也可。"
    },
    {
      "id": "yn-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "1½ tbsp",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "yn-04",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "yn-05",
      "nameEn": "scallions, finely sliced",
      "nameZh": "葱花",
      "pinyin": "cōng huā",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "yn-06",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "¼ tsp",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "yn-07",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "In individual serving bowls, combine light soy sauce, sesame oil, white pepper, and salt.",
      "textZh": "在 individual 碗中混合生抽、香油、白胡椒和盐。",
      "zhHint": "备碗底调味",
      "stateNote": {
        "visual": "Dry seasonings sit at bottom of bowl before broth is added",
        "visualZh": "干燥调味料在碗底，等待高汤冲入",
        "signal": "Soy sauce, sesame oil, and salt are visible as separate layers before stirring"
      }
    },
    {
      "text": "Bring a large pot of water to a rolling boil for the noodles.",
      "textZh": "大锅烧水至滚沸，准备下面条。",
      "zhHint": "烧水下面"
    },
    {
      "text": "Pour 300 ml boiling chicken stock into each bowl and stir to dissolve the seasonings. The broth should be clear and pale golden.",
      "textZh": "每碗倒入300毫升沸高汤，搅匀至调味料融化。汤底清澈微金。",
      "zhHint": "冲汤",
      "stateNote": {
        "visual": "Broth is clear, pale golden, with no cloudiness or oil separation",
        "visualZh": "汤清澈、淡金色，无浑浊或油花分离",
        "signal": "Seasonings fully dissolved; a thin film of sesame oil on surface",
        "signalZh": "调味料完全融化；表面有薄薄香油膜"
      }
    },
    {
      "text": "Cook noodles in boiling water according to package timing. Drain well — excess water dilutes the broth.",
      "textZh": "面条沸水煮至包装时间。充分沥干——多余水分会稀释汤底。",
      "zhHint": "煮面沥干"
    },
    {
      "text": "Transfer noodles to the broth bowls. Top with a generous mound of finely sliced scallions. Serve immediately.",
      "textZh": "面条倒入汤碗。顶部堆满细葱花。立即上桌。",
      "zhHint": "装碗上桌",
      "stateNote": {
        "visual": "Broth steams gently; scallions sit bright green on the surface",
        "visualZh": "汤底微冒热气；葱花鲜绿浮于表面",
        "signal": "Clear, aromatic broth; no raw egg or wheat smell",
        "signalZh": "汤清香气扑鼻；无生蛋或生麦味"
      }
    }
  ],
  "tips": [
    "The broth quality is everything — use the best stock you can find.",
    "Don't overcook the noodles — they should be just al dente.",
    "A soft-boiled egg (9 minutes) added on top elevates this to a full meal."
  ],
  "tipsZh": [
    "汤底决定一切——用你能找到的最好高汤。",
    "面条别煮过头——保持 al dente。",
    "加一颗溏心蛋（水煮9分钟）就能升级为完整一餐。"
  ],
  "relatedSlugs": [
    "tomato-egg-noodles",
    "scallion-noodles",
    "egg-drop-soup"
  ]
};
