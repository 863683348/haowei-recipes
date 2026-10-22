import type { Recipe } from "@/lib/types";

/** Steamed Salted Fish Pork Patty | Xian Yu Zheng Rou Bing (咸鱼蒸肉饼) — Day batch */
export const salted_fish_pork_patty: Recipe = {
  "id": "salted-fish-pork-patty",
  "slug": "salted-fish-pork-patty",
  "titleEn": "Steamed Salted Fish Pork Patty | Xian Yu Zheng Rou Bing",
  "titleZh": "咸鱼蒸肉饼",
  "pinyin": "xián yú zhēng ròu bǐng",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Home version uses a small amount of salted fish for aroma; traditional versions use a bigger ratio and steam the patty with a whole salted fish head on top.",
  "versionNoteZh": "家庭版只用少量咸鱼提香；传统做法比例更大，并在肉饼上放整只咸鱼头同蒸。",
  "tags": [
    "cantonese",
    "steamed",
    "rice-pairing",
    "one-dish",
    "umami"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the dish that defines 'rice thief' in Cantonese homes. A thumbnail of salted fish is enough to season half a kilo of pork, and the steaming liquid that collects in the plate is poured over rice. It is inexpensive, fast, and unreasonably good.",
  "storyZh": "这是粤式家庭里「偷饭贼」的代表。指甲盖大一块咸鱼就够调半公斤肉，蒸出的汤汁浇在饭上。便宜、快手、好吃得没道理。",
  "ingredients": [
    {
      "id": "sf-01",
      "nameEn": "pork mince, 20% fat",
      "nameZh": "猪肉末（二肥八瘦）",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "sf-02",
      "nameEn": "salted fish fillet",
      "nameZh": "咸鱼肉",
      "amountMetric": "25 g",
      "amountUS": "1 oz",
      "category": "protein",
      "pantry": "asian"
    },
    {
      "id": "sf-03",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "10 g",
      "amountUS": "2 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sf-04",
      "nameEn": "cornstarch",
      "nameZh": "生粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "other",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "sf-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sf-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sf-07",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "sf-08",
      "nameEn": "scallion",
      "nameZh": "葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sf-09",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Briefly pan-fry or steam the salted fish for 2 minutes to wake up the aroma, then flake it finely and discard the bones.",
      "textZh": "咸鱼先煎或蒸 2 分钟唤醒香气，撕成细丝并去骨。",
      "stateNote": {
        "visual": "The flesh turns from firm and translucent to opaque and flakes easily along the grain.",
        "visualZh": "鱼肉由紧实半透转为不透明，顺纹易撕。",
        "signal": "A strong savoury smell releases and the flesh separates into flakes",
        "signalZh": "浓郁咸香逸出、鱼肉成丝状散开",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium"
      },
      "tip": "A short fry removes the raw edge; over-frying makes it harsh."
    },
    {
      "text": "Mix the pork mince with cornstarch, soy sauce, Shaoxing wine, white pepper, ginger and 2 tbsp cold water. Stir hard in one direction until the paste turns sticky and elastic.",
      "textZh": "猪肉末加生粉、生抽、料酒、白胡椒、姜末和 2 汤匙冷水，用力顺一个方向搅至起胶有弹性。",
      "stateNote": {
        "visual": "The mince changes from a loose crumble to a shiny, cohesive mass that pulls away from the bowl in one piece.",
        "visualZh": "肉末由松散变为发亮抱团，能整块离碗。",
        "signal": "Slapping the paste back into the bowl makes it bounce slightly",
        "signalZh": "把肉浆摔回碗里会轻微回弹",
        "timeRef": "3 minutes",
        "timeRefZh": "约 3 分钟",
        "heat": "low"
      },
      "tip": "The one-direction stir is what gives the patty a springy bite instead of a crumbly one."
    },
    {
      "text": "Fold most of the flaked salted fish into the pork, reserving a little for the top. Press the mixture into a flat 2 cm patty in a shallow heatproof dish.",
      "textZh": "把大部分咸鱼丝拌入肉馅，留少许铺面。将肉馅压成 2 厘米厚饼，放入浅口耐热盘。",
      "stateNote": {
        "visual": "An even round patty with a slightly domed centre so it steams evenly; flakes of fish are visible throughout.",
        "visualZh": "肉饼厚薄均匀、中心略鼓利于受热，可见咸鱼丝分布其中。",
        "signal": "No cracks run through the surface when the dish is tapped",
        "signalZh": "轻敲盘子表面不裂开",
        "timeRef": "3 minutes",
        "timeRefZh": "约 3 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Scatter the reserved salted fish on top and steam over a full boil for 15 minutes.",
      "textZh": "表面撒上预留咸鱼，水大滚后蒸 15 分钟。",
      "stateNote": {
        "visual": "The patty firms and pulls slightly from the dish edge; clear amber liquid collects around it.",
        "visualZh": "肉饼定形并略缩离盘边，四周积起琥珀色清汁。",
        "signal": "A chopstick inserted into the centre comes out with clear juice",
        "signalZh": "筷子扎入中心拔出是清汁",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Finish with sesame oil and scallion, and spoon the collected juices over rice when serving.",
      "textZh": "淋香油、撒葱花，上桌时把盘中汤汁浇到米饭上。",
      "stateNote": {
        "visual": "The patty surface is glazed and the surrounding liquid is clear amber, not cloudy.",
        "visualZh": "肉饼表面油亮，周围汤汁清澈琥珀而非浑浊。",
        "signal": "Juices look clear and taste salty-savoury, not raw",
        "signalZh": "汤汁清亮，咸鲜不生",
        "timeRef": "1 minute",
        "timeRefZh": "约 1 分钟",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "Salted fish is already very salty — taste before adding any extra salt or soy.",
    "Use mince with about 20% fat; lean mince gives a dry, crumbly patty.",
    "Leftover patty sliced and pan-fried the next day is excellent."
  ],
  "tipsZh": [
    "咸鱼本身很咸，加盐或酱油前一定先尝。",
    "用二肥八瘦的肉末，全瘦会又干又散。",
    "隔天切片香煎，又是另一道好菜。"
  ],
  "relatedSlugs": [
    "salted-egg-pork-patty-claypot-rice",
    "minced-pork-steamed-egg",
    "red-braised-lions-head-meatballs",
    "black-bean-pork-ribs"
  ],
  "image": "/images/recipes/red-braised-lions-head-meatballs.webp"
};
