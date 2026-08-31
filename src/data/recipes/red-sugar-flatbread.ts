import type { Recipe } from "@/lib/types";

/** Brown Sugar Flatbread (红糖烧饼) (红糖烧饼) — Day batch */
export const red_sugar_flatbread: Recipe = {
  "id": "red-sugar-flatbread",
  "slug": "red-sugar-flatbread",
  "titleEn": "Brown Sugar Flatbread (红糖烧饼)",
  "titleZh": "红糖烧饼",
  "pinyin": "hóng táng shāo bǐng",
  "cuisine": "北方家常菜",
  "cuisineEn": "Northern Chinese Home Cooking",
  "region": "Shandong (English)",
  "regionZh": "山东",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭版：红糖内馅，外酥里糯",
  "versionNoteZh": "家庭版：红糖内馅，外酥里糯",
  "tags": [
    "pastry",
    "breakfast",
    "snack",
    "sweet",
    "chinese-dessert"
  ],
  "dietary": [
    "none"
  ],
  "story": "Red sugar flatbread is a comforting winter treat from Shandong. The molasses-like brown sugar oozes out when you bite, creating a caramelized crunch. My mother would make these on cold mornings, saying the dark sugar 'warms the blood.'",
  "storyZh": "红糖烧饼是山东人冬天的暖心点心。咬下去红糖馅料流出，形成焦糖脆壳。母亲常说深色红糖'补血暖身'。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "All-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "250 g",
      "amountUS": "2 cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "2",
      "nameEn": "Dark brown sugar",
      "nameZh": "红糖",
      "amountMetric": "80 g",
      "amountUS": "⅔ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "brown-sugar"
    },
    {
      "id": "3",
      "nameEn": "Lard",
      "nameZh": "猪油",
      "amountMetric": "50 g",
      "amountUS": "4 tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Warm water",
      "nameZh": "温水",
      "amountMetric": "120 ml",
      "amountUS": "½ cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "White sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "6",
      "nameEn": "All-purpose flour (for filling)",
      "nameZh": "面粉（馅心用）",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "staple",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Make dough: mix flour, salt, 30g lard and warm water. Knead until smooth. Rest 20 minutes covered.",
      "textZh": "和面：将面粉、盐、30g猪油和温水混合，揉至光滑。盖盖静置20分钟。",
      "stateNote": {
        "visual": "Dough should be elastic and slightly tacky",
        "visualZh": "面团应有弹性微粘",
        "signal": "面团光滑有延展性"
      }
    },
    {
      "text": "Make filling: melt brown sugar gently (don't boil), mix with 20g flour to thicken. Cool to room temp — it should be paste-like.",
      "textZh": "制作馅心：小火融化红糖（勿煮沸），加入20g面粉增稠。冷却至室温，呈膏状。",
      "stateNote": {
        "visual": "Filling should hold its shape when scooped, not runny",
        "visualZh": "馅心应能成型不流动",
        "signal": "馅心不稀不干粉"
      }
    },
    {
      "text": "Divide dough into 4 balls. Roll each into oval. Spread oil paste (remaining lard + 20g flour) on half.",
      "textZh": "面团分4份。擀成长椭圆形，一半涂抹油酥（剩余猪油+20g面粉）。",
      "stateNote": {
        "visual": "Oil paste should be thin and even, like window screen",
        "visualZh": "油酥应薄而匀",
        "signal": "油酥 layer 透明可见"
      }
    },
    {
      "text": "Fold over, roll again, fold once more. Cut into 4. Place filling in center, wrap like dumpling.",
      "textZh": "折叠擀开，再折叠，切成4份。包入红糖馅，像包饺子一样收口。",
      "stateNote": {
        "visual": "Seam should be fully sealed, no cracks",
        "visualZh": "收口应完全密封无裂缝",
        "signal": "轻压不散"
      }
    },
    {
      "text": "Flatten into disc, brush with water, coat with sesame. Bake at 200°C for 18 minutes.",
      "textZh": "压扁成饼状，刷水沾芝麻。200°C烤18分钟。",
      "stateNote": {
        "visual": "Bottom should be deep golden with sugar leaking slightly",
        "visualZh": "底部深金黄，略带糖浆渗出",
        "timeRef": "约18分钟",
        "heat": "high",
        "signal": "敲底有空鼓声"
      }
    }
  ],
  "tips": [
    "Use block brown sugar (not powder) for best flavor — dissolve in 2 tbsp water first",
    "The flour in filling prevents leakage — don't skip this step",
    "Serve warm — the sugar filling is very hot inside",
    "Leftover filling can be used as dipping sauce for other pastries"
  ],
  "tipsZh": [
    "用块状红糖（非红糖粉）风味最佳——先用2汤匙水化开",
    "馅中加面粉防止漏糖——此步不可省",
    "趁热吃——糖馅内部很烫",
    "剩余馅心可作其他点心的蘸酱"
  ],
  "relatedSlugs": [
    "sesame-flatbread",
    "scallion-flatbread",
    "egg-yolk-pastry"
  ],
  "image": "/images/recipes/red-sugar-flatbread.webp"
};
