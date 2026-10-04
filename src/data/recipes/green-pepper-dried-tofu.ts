import type { Recipe } from "@/lib/types";

/** Green Pepper with Smoked Dried Tofu (青椒炒香干) (青椒炒香干) — Day batch */
export const green_pepper_dried_tofu: Recipe = {
  "id": "green-pepper-dried-tofu",
  "slug": "green-pepper-dried-tofu",
  "titleEn": "Green Pepper with Smoked Dried Tofu (青椒炒香干)",
  "titleZh": "青椒炒香干",
  "pinyin": "qing jiao chao xiang gan",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Jiangnan (江南)",
  "regionZh": "江南",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses one green bell pepper and a small amount of pork for fragrance. The fully vegetarian version skips the pork and adds a splash of chili oil at the end.",
  "versionNoteZh": "家庭版用一只青椒配少量猪肉提香。全素版不放肉，出锅前淋一点辣椒油。",
  "tags": [
    "tofu",
    "quick",
    "weeknight",
    "low-cost",
    "20-min"
  ],
  "dietary": [
    "none"
  ],
  "story": "Xiang gan — smoked dried tofu — is one of the most underrated ingredients in Chinese home cooking. It costs almost nothing, keeps for a week, and has a chewy, faintly smoky bite that soaks up sauce like a sponge. Stir-fried with green pepper it becomes the sort of five-ingredient dish that shows up on a family table three nights a week without anyone complaining.",
  "storyZh": "香干是中餐里被严重低估的食材。便宜、能放一周，带点烟熏味和嚼劲，吸汁像海绵。跟青椒一炒就是那种「五样食材、一周上桌三晚还没人抱怨」的家常菜。",
  "ingredients": [
    {
      "id": "gpdt-1",
      "nameEn": "smoked dried tofu (xiang gan), sliced 3 mm thick",
      "nameZh": "香干（切 3 毫米片）",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "asian",
      "termKey": "tofu"
    },
    {
      "id": "gpdt-2",
      "nameEn": "green bell pepper, cut into strips",
      "nameZh": "青椒（切条）",
      "amountMetric": "1 large",
      "amountUS": "1 large",
      "category": "produce",
      "pantry": "local",
      "termKey": "green-pepper"
    },
    {
      "id": "gpdt-3",
      "nameEn": "pork loin, thin slivers",
      "nameZh": "猪里脊（切薄片）",
      "amountMetric": "80 g",
      "amountUS": "3 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-loin"
    },
    {
      "id": "gpdt-4",
      "nameEn": "garlic cloves, sliced",
      "nameZh": "大蒜（切片）",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "gpdt-5",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "gpdt-6",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "gpdt-7",
      "nameEn": "shaoxing wine",
      "nameZh": "绍兴酒",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "gpdt-8",
      "nameEn": "cooking oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "gpdt-9",
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
      "text": "Slice the smoked tofu into 3 mm strips and the green pepper into matching batons. Keeping the shapes consistent means everything cooks evenly and looks tidy.",
      "textZh": "香干切 3 毫米条，青椒切成相近的条。形状一致受热才均匀，成菜也利落。",
      "stateNote": {
        "visual": "uniform 3 mm batons",
        "signal": "prep complete",
        "timeRef": "3 min"
      }
    },
    {
      "text": "Bring a small pot of water to a boil, drop in the tofu strips for 30 seconds, then drain. This removes any stale fridge smell and softens the surface.",
      "textZh": "小锅水烧开，香干条下锅烫 30 秒后捞出。这一步去豆腥、也让表面回软。",
      "stateNote": {
        "visual": "tofu strips plumped and glossy",
        "signal": "water returns to a boil",
        "timeRef": "30 sec"
      }
    },
    {
      "text": "Heat 1 tbsp oil in a wok over high heat. Add the pork slivers and spread them flat. Sear for 20 seconds without moving, then stir-fry until the colour changes.",
      "textZh": "锅下 1 汤匙油，大火放肉片平铺，静置煎 20 秒不动，再翻炒至变色。",
      "stateNote": {
        "visual": "pork turning opaque at the edges",
        "signal": "sharp sizzle",
        "timeRef": "1 min",
        "heat": "high"
      }
    },
    {
      "text": "Add garlic and the remaining oil, then the tofu strips. Stir-fry for 1 minute so the tofu picks up a light golden edge.",
      "textZh": "下蒜片和剩下的油，倒入香干条，翻炒 1 分钟让香干边缘微微上色。",
      "stateNote": {
        "visual": "tofu edges faintly golden",
        "signal": "nutty toasted aroma",
        "timeRef": "1 min",
        "heat": "high"
      }
    },
    {
      "text": "Add the green pepper, splash in shaoxing wine around the wok edge, then add light soy sauce and oyster sauce. Toss hard for 45 seconds.",
      "textZh": "下青椒，沿锅边淋绍兴酒，再加生抽和蚝油，大火快翻 45 秒。",
      "stateNote": {
        "visual": "pepper bright green and glossy",
        "signal": "sauce sizzling and reducing fast",
        "timeRef": "45 sec",
        "heat": "high"
      }
    },
    {
      "text": "Taste, adjust salt if needed, drizzle sesame oil and serve immediately with rice or congee.",
      "textZh": "尝味，需要就补盐，淋香油即可出锅，配米饭或白粥食用。",
      "stateNote": {
        "visual": "sauce clinging thinly, no liquid pooling",
        "signal": "ready to serve"
      }
    }
  ],
  "tips": [
    "Blanching the tofu for 30 seconds is the single biggest upgrade — do not skip it.",
    "Green bell pepper should stay crisp. If it turns olive, the wok was not hot enough.",
    "Smoked tofu is already salty; taste before adding extra salt.",
    "For a vegetarian version, drop the pork and add 1 tsp chili oil at the end."
  ],
  "tipsZh": [
    "香干焯水 30 秒是最大的提升点，别省。",
    "青椒要保持脆感。如果发黄发蔫，说明锅温不够。",
    "香干本身有咸味，加盐前先尝。",
    "做全素版：去掉猪肉，出锅前加 1 茶匙辣椒油。"
  ],
  "relatedSlugs": [
    "braised-dried-tofu",
    "cold-dressed-dried-tofu",
    "stir-fried-dried-tofu-with-celery",
    "pepper-pork"
  ],
  "image": "/images/recipes/braised-dried-tofu.webp"
};
