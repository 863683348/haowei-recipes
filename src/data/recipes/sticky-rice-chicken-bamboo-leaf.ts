import type { Recipe } from "@/lib/types";

/** Sticky Rice Chicken (Nuo Mi Ji) (糯米鸡) — Seed batch */
export const sticky_rice_chicken_bamboo_leaf: Recipe = {
  "id": "nuo-mi-ji",
  "slug": "sticky-rice-chicken-bamboo-leaf",
  "titleEn": "Sticky Rice Chicken (Nuo Mi Ji)",
  "titleZh": "糯米鸡",
  "pinyin": "nuò mǐ jī",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses steamed bamboo leaves instead of fried wrappers — tender, fragrant, and gentle on digestion.",
  "versionNoteZh": "家常版用蒸制竹叶包裹，不油炸，口感软糯清香，更养胃。",
  "tags": [
    "90-min",
    "lunch",
    "festive"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Guangzhou made this every Dragon Boat Festival — she’d soak the bamboo leaves overnight in her courtyard well, then wrap each parcel while humming old Cantonese opera tunes. I still remember the scent of steaming rice and star anise clinging to her cotton apron.",
  "storyZh": "我广州的姑妈每年端午节都做这个——她会在天井的老井里泡一整晚竹叶，一边哼着粤剧小调一边包。我至今记得蒸气里糯米、八角的香气，还沾在她棉布围裙上。",
  "ingredients": [
    {
      "id": "nmj-01",
      "nameEn": "glutinous rice",
      "nameZh": "糯米",
      "pinyin": "nuò mǐ",
      "amountMetric": "300 g",
      "amountUS": "1 ½ cups",
      "category": "staple",
      "pantry": "asian",
      "note": "Rinse until water runs clear; soak 4 hours or overnight.",
      "noteZh": "淘洗至水清，浸泡4小时或隔夜。"
    },
    {
      "id": "nmj-02",
      "nameEn": "boneless chicken thigh",
      "nameZh": "去骨鸡腿肉",
      "pinyin": "qù gǔ jī tuǐ ròu",
      "amountMetric": "250 g",
      "amountUS": "8.8 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Cut into 1.5 cm cubes; substitute boneless chicken breast if needed (less tender).",
      "noteZh": "切1.5厘米见方丁；可用鸡胸替代（口感稍柴）。"
    },
    {
      "id": "nmj-03",
      "nameEn": "dried shiitake mushrooms",
      "nameZh": "干香菇",
      "pinyin": "gān xiāng gū",
      "amountMetric": "40 g",
      "amountUS": "¼ cup (whole, rehydrated)",
      "category": "produce",
      "pantry": "asian",
      "note": "Soak in warm water 30 min; reserve soaking liquid for rice.",
      "noteZh": "温水泡发30分钟；泡发水留用煮饭。"
    },
    {
      "id": "nmj-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "",
      "noteZh": "",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "nmj-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute dry sherry if unavailable.",
      "noteZh": "不可得时可用干雪利酒替代。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "nmj-06",
      "nameEn": "fresh bamboo leaves",
      "nameZh": "新鲜竹叶",
      "pinyin": "xīn xiān zhú yè",
      "amountMetric": "12 pieces",
      "amountUS": "12 leaves",
      "category": "produce",
      "pantry": "asian",
      "note": "Blanch 2 min in boiling water to soften and sterilize. Substitute dried bamboo leaves (soak 2 hrs) if fresh unavailable.",
      "noteZh": "沸水焯2分钟软化杀菌；无鲜叶可用干竹叶（泡发2小时）。"
    }
  ],
  "steps": [
    {
      "text": "Drain soaked glutinous rice and mix with reserved mushroom soaking liquid (add water to reach 300 ml total). Steam rice in a lined bamboo steamer for 25 minutes until translucent and plump.",
      "textZh": "沥干泡好的糯米，拌入泡香菇的水（补足至300毫升）。铺入垫纱布的竹蒸笼，蒸25分钟至米粒透亮饱满。",
      "zhHint": "蒸至透亮饱满",
      "stateNote": {
        "visual": "Rice grains are glossy, separate easily with chopsticks, and no opaque centers remain.",
        "visualZh": "米粒油亮，用筷子可轻松拨散，无白芯。",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "high",
        "signal": "Steam rises steadily; lid is fogged evenly.",
        "signalZh": "蒸汽持续稳定上升；锅盖均匀结雾。"
      }
    },
    {
      "text": "Marinate chicken cubes with light soy sauce, Shaoxing wine, 1 tsp white pepper, and 1 tsp sugar for 20 minutes.",
      "textZh": "鸡丁加生抽、绍酒、白胡椒粉1茶匙、糖1茶匙，腌20分钟。",
      "zhHint": "腌制20分钟",
      "stateNote": {
        "visual": "Chicken pieces are evenly coated and slightly swollen.",
        "visualZh": "鸡丁均匀裹酱，略显胀润。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Surface glistens with marinade; no pooling liquid.",
        "signalZh": "表面泛光，无多余酱汁积聚。"
      }
    },
    {
      "text": "Sauté marinated chicken and drained shiitakes in 1 tbsp oil over medium-high heat until chicken browns lightly and mushrooms release aroma (3–4 min). Stir in 1 tsp oyster sauce and remove from heat.",
      "textZh": "热油中火高炒鸡丁与香菇，至鸡丁微黄、香菇出香（3–4分钟），淋入蚝油1茶匙，离火。",
      "zhHint": "炒至微黄出香",
      "stateNote": {
        "visual": "Chicken edges turn golden; mushrooms shrink slightly and emit earthy fragrance.",
        "visualZh": "鸡丁边缘微金黄；香菇略缩小，散发泥土清香。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium-high",
        "signal": "Fragrance lifts sharply; sizzle becomes steady.",
        "signalZh": "香味骤然升腾；滋滋声转为匀长。"
      }
    },
    {
      "text": "Fold warm rice and sautéed filling together gently. Cool to room temperature before wrapping.",
      "textZh": "将温热米饭与炒料轻柔拌匀，放凉至室温再包。",
      "zhHint": "拌匀后放凉",
      "stateNote": {
        "visual": "Rice clings softly to filling without breaking grains.",
        "visualZh": "米粒柔软裹附馅料，不碎粒。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Steam just barely rises from mixture.",
        "signalZh": "混合物仅微微冒热气。"
      }
    },
    {
      "text": "Wrap ⅓ cup rice-filling mixture in one blanched bamboo leaf: fold sides inward, then tuck ends tightly to form a compact pyramid. Steam wrapped parcels 30 minutes over high heat.",
      "textZh": "取1/3杯饭馅，包入焯水竹叶：先折两侧，再收紧两端成金字塔形。大火蒸30分钟。",
      "zhHint": "包成金字塔形，大火蒸",
      "stateNote": {
        "visual": "Leaves deepen to olive-green; parcels feel firm but yielding when pressed.",
        "visualZh": "竹叶转深橄榄绿；轻压有弹性不松散。",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "high",
        "signal": "Strong aroma of bamboo and rice fills kitchen.",
        "signalZh": "厨房弥漫竹香与米香。"
      }
    }
  ],
  "tips": [
    "Use only glutinous rice — regular rice won’t hold shape.",
    "Bamboo leaves must be fully softened; stiff leaves tear during folding.",
    "Leftovers re-steam 10 minutes — never microwave (rice hardens)."
  ],
  "tipsZh": [
    "务必用糯米，普通大米无法成型。",
    "竹叶必须充分软化，僵硬易破。",
    "剩食需隔水复蒸10分钟，忌微波（糯米会变硬）。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/sticky-rice-chicken-bamboo-leaf.webp"
};
