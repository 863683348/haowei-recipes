import type { Recipe } from "@/lib/types";

/** Wild Rice Shoot Shredded Pork (茭白肉丝) (茭白肉丝) — Day batch */
export const wild_rice_shoot_shredded_pork: Recipe = {
  "id": "wild-rice-shoot-shredded-pork",
  "slug": "wild-rice-shoot-shredded-pork",
  "titleEn": "Wild Rice Shoot Shredded Pork (茭白肉丝)",
  "titleZh": "茭白肉丝",
  "pinyin": "jiāo bái ròu sī",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Jiangnan (江南)",
  "regionZh": "江南",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Jiangnan home version uses fresh wild rice shoots in season, quick-stirred with pork.",
  "versionNoteZh": "江南家常版用应季鲜茭白快炒。",
  "tags": [
    "30-min",
    "weeknight",
    "pork",
    "seasonal",
    "jiangnan"
  ],
  "dietary": [
    "none"
  ],
  "story": "Jiāo bái is one of Jiangnan's most beloved seasonal vegetables — the swollen stem of the rice plant, crunchy and subtly sweet.",
  "storyZh": "茭白是江南人最爱的时令蔬菜之一——稻株膨大的茎，脆嫩微甜。",
  "ingredients": [
    {
      "id": "wrs-pork",
      "nameEn": "pork tenderloin, julienned",
      "nameZh": "猪里脊切丝",
      "amountMetric": "200 g",
      "amountUS": "7 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-tenderloin"
    },
    {
      "id": "wrs-shoot",
      "nameEn": "wild rice shoots (jiāo bái), peeled and julienned",
      "nameZh": "茭白（去皮切丝）",
      "amountMetric": "2 medium (~300 g)",
      "amountUS": "2 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "wild-rice-shoot"
    },
    {
      "id": "wrs-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "wrs-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "wrs-starch",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "wrs-garlic",
      "nameEn": "garlic cloves, minced",
      "nameZh": "蒜末",
      "amountMetric": "2 cloves",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "wrs-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "wrs-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "¼ tsp",
      "amountUS": "¼ tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "wrs-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Peel the tough outer layer from the wild rice shoots. Slice lengthwise into 4 cm × 3 mm strips. Pat dry.",
      "textZh": "茭白削去外层老皮，纵向切成4厘米长、3毫米宽的细丝。用厨房纸吸干水分。",
      "stateNote": {
        "visual": "Strips are creamy white and uniformly thick",
        "visualZh": "丝条乳白均匀、厚薄一致",
        "signal": "No fibrous stringiness when bent"
      }
    },
    {
      "text": "Toss pork strips with Shaoxing wine and cornstarch. Let marinate 10 minutes.",
      "textZh": "肉丝加料酒和玉米淀粉抓匀，腌制10分钟。",
      "stateNote": {
        "visual": "Meat is evenly coated, surface tacky",
        "visualZh": "肉丝均匀裹浆，表面微黏",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Liquid absorbed, surface is glossy"
      }
    },
    {
      "text": "Heat oil in a wok over high heat. Add pork and sear 30 seconds. Stir-fry until white.",
      "textZh": "热锅下油，大火烧至冒烟。下肉丝煎30秒，翻炒至变白。",
      "stateNote": {
        "visual": "Pork turns opaque white, exterior silky",
        "visualZh": "肉丝变白，表面丝滑",
        "heat": "high",
        "timeRef": "30-45 seconds",
        "timeRefZh": "30-45 秒",
        "signal": "No pink remaining; surface is glossy"
      }
    },
    {
      "text": "Add garlic and wild rice shoot strips. Stir-fry 1 minute until shoots are bright and slightly wilted.",
      "textZh": "下蒜末和茭白丝，翻炒1分钟至茭白变亮微塌。",
      "stateNote": {
        "visual": "Shoots turn from matte to glossy white; edges slightly translucent",
        "visualZh": "茭白从哑光变油亮，边缘微透明",
        "heat": "high",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Shoots are tender-crisp, not raw or mushy"
      }
    },
    {
      "text": "Add light soy sauce, salt, and sugar. Toss 15 seconds. Serve immediately.",
      "textZh": "加生抽、盐和白糖，翻匀15秒出锅。",
      "stateNote": {
        "visual": "Sauce lightly coats everything; shoots still hold their shape",
        "visualZh": "酱汁薄薄挂面，茭白形态完整",
        "signal": "No watery pool at the bottom of the wok"
      }
    }
  ],
  "tips": [
    "Wild rice shoots oxidize quickly — work fast after cutting.",
    "Seasonal freshness matters. In summer, fresh jiāo bái is sweet enough to need almost no seasoning.",
    "Hearts of palm are an acceptable winter substitute.",
    "This dish is best eaten the moment it hits the plate."
  ],
  "tipsZh": [
    "茭白切开后易氧化变黑——切好快炒。",
    "时令鲜美。夏季新鲜茭白甜度高，少调味即可。",
    "冬季可用洋蓟心替代，但甜度略逊。",
    "这道菜要趁热立刻吃——放久了会变软塌。"
  ],
  "relatedSlugs": [
    "oil-braised-bamboo-shoots",
    "pepper-pork",
    "garlic-sprout-shredded-pork",
    "home-style-pork"
  ],
  "image": "/images/recipes/oil-braised-bamboo-shoots.webp"
};
