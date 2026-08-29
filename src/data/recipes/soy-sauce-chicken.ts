import type { Recipe } from "@/lib/types";

/** Soy Sauce Chicken (豉油鸡) — Seed batch */
export const soy_sauce_chicken: Recipe = {
  "id": "chi-you-ji",
  "slug": "soy-sauce-chicken",
  "titleEn": "Soy Sauce Chicken",
  "titleZh": "豉油鸡",
  "pinyin": "chǐ yóu jī",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Foshan",
  "regionZh": "佛山",
  "difficulty": "medium",
  "timeMin": 55,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses whole chicken braised in reduced master stock — no artificial coloring or cornstarch glaze. Dark soy provides color; light soy delivers saltiness.",
  "versionNoteZh": "家常版以整鸡浸煮于浓缩卤汁中——不添加人工色素或淀粉亮光剂；老抽上色，生抽提咸。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Foshan’s Chencun raised chickens in her courtyard and made this for Lunar New Year — she’d simmer the stock three times, skimming foam each round, and always added a single star anise ‘to honor the ancestors’.",
  "storyZh": "佛山陈村的祖母在院中养鸡，每逢春节必做豉油鸡——卤汁要三滚去沫，每次必放一颗八角，说‘敬祖先’。",
  "ingredients": [
    {
      "id": "cyj-01",
      "nameEn": "whole chicken (3–3.5 lb / 1.4–1.6 kg), air-chilled",
      "nameZh": "整鸡（1.4–1.6 千克），优选气冷鸡",
      "pinyin": "zhěng jī",
      "amountMetric": "1.5 kg",
      "amountUS": "3.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Avoid frozen-thawed chicken — texture becomes grainy.",
      "noteZh": "忌冻融鸡，肉质易变柴。"
    },
    {
      "id": "cyj-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "120 ml",
      "amountUS": "½ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cyj-03",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "cyj-04",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "2 pcs",
      "amountUS": "2 pcs",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    }
  ],
  "steps": [
    {
      "text": "Rinse chicken and pat dry. In a wok or Dutch oven, combine 1.8 L water, light soy, dark soy, and star anise. Bring to a boil over high heat.",
      "textZh": "鸡洗净擦干。炒锅或搪瓷锅中加1.8升水、生抽、老抽、八角，大火烧沸。",
      "zhHint": "先烧沸卤汁"
    },
    {
      "text": "Carefully lower chicken into boiling liquid, breast-side down. Return to gentle boil, then reduce heat to medium-low.",
      "textZh": "小心将鸡胸朝下浸入沸卤，再次烧沸后转中小火。",
      "zhHint": "鸡入锅再控火"
    },
    {
      "text": "Simmer uncovered for 35 minutes, turning chicken once halfway. Skim foam and fat from surface every 10 minutes.",
      "textZh": "敞盖中小火煮35分钟，中途翻面一次；每10分钟撇净浮沫与浮油。",
      "zhHint": "勤撇浮沫",
      "stateNote": {
        "visual": "Surface shows thin, amber-brown layer; foam recedes to edges",
        "visualZh": "汤面浮薄层琥珀色油光，泡沫退至锅边",
        "timeRef": "35 minutes",
        "timeRefZh": "35 分钟",
        "heat": "medium-low",
        "signal": "Chicken skin turns glossy mahogany; thigh joint moves freely when twisted",
        "signalZh": "鸡皮呈油亮枣红色；扭大腿关节，可轻松转动"
      }
    },
    {
      "text": "Turn off heat. Let chicken cool in liquid for 20 minutes — this ensures even flavor penetration and tender texture.",
      "textZh": "关火，让鸡在卤汁中自然冷却20分钟——确保入味均匀、肉质柔嫩。",
      "zhHint": "卤汁中冷透"
    },
    {
      "text": "Remove chicken, reserve 1 cup braising liquid. Strain and reduce reserved liquid over medium heat until syrupy (≈5 min). Brush over chicken before slicing.",
      "textZh": "捞出鸡，留1杯卤汁，滤净后中火收至糖浆状（约5分钟），刷于鸡身再切块。",
      "zhHint": "卤汁收浓刷身",
      "stateNote": {
        "visual": "Liquid coats spoon thickly and leaves a trail",
        "visualZh": "卤汁挂勺成线、滴落缓慢",
        "timeRef": "4–5 minutes",
        "timeRefZh": "4–5 分钟",
        "heat": "medium",
        "signal": "Steam thins and aroma deepens to caramelized soy",
        "signalZh": "蒸汽变薄，酱香转为焦糖化豆香"
      }
    }
  ],
  "tips": [
    "Add 1 tsp sugar if your dark soy is very salty — balance is key.",
    "Save strained spices and ½ cup liquid to start next batch of master stock.",
    "Slice against the grain for maximum tenderness."
  ],
  "tipsZh": [
    "若老抽偏咸，可加1茶匙糖调和——咸甜平衡是关键。",
    "滤出的香料与半杯卤汁可冷藏保存，作下次卤汁基底。",
    "逆纹切片，口感更嫩。"
  ],
  "relatedSlugs": [
    "white-cut-chicken",
    "ginger-scallion-chicken"
  ],
  "image": "/images/recipes/soy-sauce-chicken.webp"
};
