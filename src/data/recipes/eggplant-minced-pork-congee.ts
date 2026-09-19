import type { Recipe } from "@/lib/types";

/** Eggplant and Minced Pork Congee (茄子肉末粥) (茄子肉末粥) — Day batch */
export const eggplant_minced_pork_congee: Recipe = {
  "id": "eggplant-minced-pork-congee",
  "slug": "eggplant-minced-pork-congee",
  "titleEn": "Eggplant and Minced Pork Congee (茄子肉末粥)",
  "titleZh": "茄子肉末粥",
  "pinyin": "qié zi ròu mò zhōu",
  "cuisine": "粤式粥品",
  "cuisineEn": "Cantonese congee",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 50,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version: eggplant is added late so it keeps some texture. Restaurant congee houses sometimes puree the eggplant into the broth for a creamier result.",
  "versionNoteZh": "家常版：茄子后放，保持口感。粥铺有时会打成泥让粥更绵滑。",
  "tags": [
    "comfort",
    "congee",
    "breakfast",
    "weekend",
    "easy"
  ],
  "dietary": [
    "none"
  ],
  "story": "Congee (粥) is the ultimate comfort food across China, and Cantonese eggplant congee is a lesser-known gem. The eggplant melts into the rice broth, creating a naturally creamy texture without any dairy. A spoonful of seasoned minced pork on top adds savory contrast.",
  "storyZh": "粥是全中国的终极安慰食品，而茄子肉末粥是粤式粥里被低估的宝贝。茄子融进米汤，不用任何乳制品就产生天然绵滑口感。上面一勺调味肉末增添鲜味对比。",
  "ingredients": [
    {
      "id": "emc-01",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "amountMetric": "½ cup (100 g)",
      "amountUS": "½ cup",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "emc-02",
      "nameEn": "Chinese eggplant",
      "nameZh": "长条茄子",
      "amountMetric": "200 g",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "emc-03",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "amountMetric": "80 g",
      "amountUS": "3 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "emc-04",
      "nameEn": "ginger, julienned",
      "nameZh": "姜丝",
      "amountMetric": "5 g",
      "amountUS": "1 tsp julienned",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "emc-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "emc-06",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "emc-07",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "¼ tsp",
      "amountUS": "pinch",
      "category": "spice",
      "pantry": "asian"
    },
    {
      "id": "emc-08",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "½ tsp",
      "amountUS": "½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "emc-09",
      "nameEn": "water or chicken broth",
      "nameZh": "水或鸡高汤",
      "amountMetric": "8 cups (2 L)",
      "amountUS": "8 cups (2 L)",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "emc-10",
      "nameEn": "scallions, finely sliced",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse rice until water runs clear. Soak in 4 cups of water for 30 min. This shortens cooking time and gives creamier congee.",
      "textZh": "米淘至水清，浸泡在2杯水中30分钟。缩短烹饪时间，粥更绵。",
      "stateNote": {
        "visual": "rice grains look opaque and swollen",
        "visualZh": "米粒发白膨胀",
        "signal": "30 min is enough — longer soaking makes grains too soft and may disintegrate",
        "signalZh": "30分钟刚好——泡太久米会散"
      }
    },
    {
      "text": "Cut eggplant into 2 cm cubes. Toss with ¼ tsp salt and set aside.",
      "textZh": "茄子切2cm丁，撒¼茶匙盐腌制，备用。"
    },
    {
      "text": "Heat a pot over medium heat. Add the drained rice and remaining 4 cups water. Bring to a boil, then reduce to a gentle simmer. Cook 25 min, stirring occasionally.",
      "textZh": "锅烧热，下沥干米和剩余2杯水。大火烧开转小火咕嘟。煮25分钟，偶尔搅拌。",
      "stateNote": {
        "visual": "rice grains burst open, broth turns cloudy and thick",
        "visualZh": "米粒开花，汤变浑浊浓稠",
        "signal": "congee is ready when rice has completely disintegrated and the texture is creamy",
        "signalZh": "米完全化开，质地绵滑——完成"
      }
    },
    {
      "text": "Add eggplant cubes. Simmer 8 min until eggplant is translucent and melting.",
      "textZh": "下茄子丁，咕嘟8分钟至茄子半透明融化。",
      "stateNote": {
        "visual": "eggplant cubes lose their shape and begin to dissolve into the congee",
        "visualZh": "茄子丁失去形状开始融入粥中",
        "signal": "eggplant should be spreadable with a spoon — if still firm, cook 2 min more",
        "signalZh": "茄子用勺能抹开——还硬就多煮2分钟"
      }
    },
    {
      "text": "Meanwhile, heat 1 tbsp oil in a small pan. Sear pork mince over high heat until browned and crispy at edges — 3 min. Add soy sauce and sesame oil. Toss 30 sec.",
      "textZh": "同时小锅热油，大火煎肉末至边缘焦脆——3分钟。加生抽和香油，翻炒30秒。",
      "stateNote": {
        "visual": "pork is deep golden with crispy edges",
        "visualZh": "肉末深金黄，边缘焦脆",
        "signal": "meat should sizzle loudly and no pink remains — this is the Maillard reaction",
        "signalZh": "肉滋滋响且无粉红——美拉德反应完成"
      }
    },
    {
      "text": "Season congee with salt and white pepper. Ladle into bowls. Top with crispy pork and scallions. Serve immediately.",
      "textZh": "粥加盐和白胡椒调味。盛碗，铺上脆肉末和葱花。立即上桌。"
    }
  ],
  "tips": [
    "Stirring occasionally prevents the rice from sticking to the bottom — but don't over-stir or the congee becomes gummy.",
    "The crispy pork topping is non-negotiable — it adds texture contrast to the silky congee.",
    "Congee thickens as it sits. Add hot water when serving if it's too thick."
  ],
  "tipsZh": [
    "偶尔搅拌防止粘底——但别多搅，粥会发粘。",
    "脆肉末 topping 不可省略——给绵粥增加口感对比。",
    "粥放久会变稠。上桌时太稠就加热水。"
  ],
  "relatedSlugs": [
    "egg-drop-soup",
    "winter-melon-soup",
    "tomato-egg-drop-soup"
  ],
  "image": "/images/recipes/eggplant-minced-pork-congee.webp"
};
