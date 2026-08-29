import type { Recipe } from "@/lib/types";

/** Home-Style Braised Eggs (Lǔ Dàn) (卤蛋) — Seed batch */
export const braised_eggs_luwei: Recipe = {
  "id": "lu-dan",
  "slug": "braised-eggs-luwei",
  "titleEn": "Home-Style Braised Eggs (Lǔ Dàn)",
  "titleZh": "卤蛋",
  "pinyin": "lǔ dàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Nanjing",
  "regionZh": "南京",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses hard-boiled eggs cracked *just enough* to let broth seep in — never peeled. My grandfather in Qinhuai used tea leaves to deepen color without bitterness.",
  "versionNoteZh": "家常版用带壳卤蛋，蛋壳轻敲裂纹即可入味——绝不剥壳。秦淮祖父用茶叶增色不增苦。",
  "tags": [
    "30-min",
    "vegetarian-option",
    "side-dish"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather ran a small teahouse near Confucius Temple in Nanjing — he’d make lu dan every dawn, cracking each egg with the back of a spoon so the marbling looked like ink wash painting.",
  "storyZh": "祖父在南京夫子庙旁开小茶馆，每天凌晨做卤蛋，用勺背轻叩蛋壳，裂纹如水墨晕染。",
  "ingredients": [
    {
      "id": "be-01",
      "nameEn": "large eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "8 pcs",
      "amountUS": "8 large",
      "category": "protein",
      "pantry": "local",
      "note": "Use eggs 5–7 days old — fresher eggs are harder to peel after boiling.",
      "noteZh": "选用存放5–7天的蛋，新鲜蛋煮后难剥壳。"
    },
    {
      "id": "be-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "60 ml",
      "amountUS": "¼ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "be-03",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "be-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "be-05",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "2 pcs",
      "amountUS": "2 whole",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "be-06",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp, sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Place eggs in a saucepan, cover with cold water by 2.5 cm. Bring to a boil over high heat, then cover and remove from heat. Let sit 10 minutes.",
      "textZh": "鸡蛋冷水入锅，水没过蛋2.5厘米；大火烧沸后关火，加盖焖10分钟。",
      "zhHint": "焖煮保嫩芯"
    },
    {
      "text": "Drain and cool eggs under cold running water for 2 minutes. Gently tap each egg all over with a spoon to create fine cracks — do not peel.",
      "textZh": "捞出冲凉2分钟；用勺背轻敲全蛋，布满细纹——不可剥壳。",
      "zhHint": "裂纹越密越入味"
    },
    {
      "text": "In a small pot, combine light soy, dark soy, Shaoxing wine, star anise, ginger, and 500 ml water. Bring to a gentle simmer over medium heat.",
      "textZh": "小锅中加入生抽、老抽、绍酒、八角、姜片和500毫升水，中火煮至微沸。",
      "zhHint": "酱料先熬出香"
    },
    {
      "text": "Add cracked eggs. Simmer uncovered on medium-low heat for 25 minutes — gently turn eggs every 8 minutes.",
      "textZh": "放入裂纹蛋，中低火敞盖炖25分钟，每8分钟轻翻一次。",
      "zhHint": "勤翻防色差",
      "stateNote": {
        "visual": "Eggs darken evenly to deep amber; broth reduces slightly and coats eggs lightly.",
        "visualZh": "蛋壳均匀转为深琥珀色；卤汁微减，轻裹蛋身。",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "medium-low",
        "signal": "Cracks deepen in color and absorb visible broth.",
        "signalZh": "裂纹处颜色加深，可见卤汁渗入。"
      }
    },
    {
      "text": "Turn off heat. Let eggs steep in hot broth for at least 15 minutes before serving — longer steeping yields deeper marbling.",
      "textZh": "关火，让蛋在热卤中浸泡至少15分钟再食用——浸泡越久，花纹越深。",
      "zhHint": "浸泡是点睛之笔",
      "stateNote": {
        "visual": "Cracks fill with rich brown broth; surface glistens with glossy sheen.",
        "visualZh": "裂纹吸饱深褐卤汁；蛋壳泛油润光泽。",
        "timeRef": "15–60 minutes",
        "timeRefZh": "15–60 分钟",
        "signal": "Marbling becomes visible through shell; broth clings to surface.",
        "signalZh": "蛋壳透出花纹，卤汁挂壁不滴。"
      }
    }
  ],
  "tips": [
    "For tea-infused lu dan (Nanjing style), add 1 tsp loose black tea leaves to the broth — strain before serving.",
    "Store leftover eggs in their cooled broth for up to 5 days in the fridge.",
    "Use the same broth to braise tofu or dried bean curd sticks — it improves with reuse."
  ],
  "tipsZh": [
    "南京风味可加1茶匙散装红茶同煮（南方式），出锅前滤掉茶渣。",
    "余下卤蛋连卤汁冷藏，可保存5天。",
    "同一卤汁可续卤豆腐干或油豆腐，越用越香。"
  ],
  "relatedSlugs": [
    "braised-beef-luwei",
    "braised-chicken-feet-luwei"
  ],
  "image": "/images/recipes/braised-eggs-luwei.webp"
};
