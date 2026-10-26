import type { Recipe } from "@/lib/types";

/** Beggar's Chicken (Jiaohua Ji) (叫花鸡) — Day batch */
export const beggars_chicken: Recipe = {
  "id": "beggars-chicken",
  "slug": "beggars-chicken",
  "titleEn": "Beggar's Chicken (Jiaohua Ji)",
  "titleZh": "叫花鸡",
  "pinyin": "jiào huā jī",
  "cuisine": "淮扬菜",
  "cuisineEn": "Huaiyang",
  "region": "Jiangsu (Changshu)",
  "regionZh": "江苏（常熟）",
  "difficulty": "hard",
  "timeMin": 120,
  "servings": 4,
  "version": "family",
  "versionNote": "The original is sealed in clay and buried in coals. At home we wrap the marinated bird in lotus leaf (or parchment plus foil) and roast it in the oven — same sealed-steam effect, no mud, no open fire.",
  "versionNoteZh": "正宗做法是用泥巴封住埋进炭火。家常版把腌好的鸡用荷叶（或油纸加锡纸）包紧、进烤箱烤，密封蒸汽效果一样，不用泥也不用明火。",
  "tags": [
    "huaiyang",
    "chicken",
    "roast",
    "weekend-project",
    "showstopper"
  ],
  "dietary": [
    "none"
  ],
  "story": "The legend says a beggar stole a chicken, had no pot, sealed it in river mud and dropped it into a fire — and when he cracked the clay open the meat fell off the bone. Changshu restaurants still make it that way. What actually matters is not the mud: it is the sealed parcel, which steams the bird in its own juices until the stuffing has drunk everything.",
  "storyZh": "传说有个叫花子偷了只鸡，没锅，就用河泥糊上丢进火里——敲开泥壳时肉已经脱骨。常熟的老饭店到现在还这么做。真正的关键其实不是泥，而是「密封」：鸡在自己的汁水里被闷熟，填料把香味全吸了进去。",
  "ingredients": [
    {
      "id": "whole-chicken",
      "nameEn": "whole chicken, 1.5 kg, giblets removed",
      "nameZh": "整鸡（约 1.5 kg，去内脏）",
      "amountMetric": "1.5 kg",
      "amountUS": "3.3 lb",
      "category": "protein",
      "pantry": "local",
      "note": "A 3-4 lb roasting chicken fits most home ovens. Pat it very dry.",
      "noteZh": "3-4 磅的烤鸡大小合适，里外一定要擦干。"
    },
    {
      "id": "dried-shiitake",
      "nameEn": "dried shiitake, rehydrated and sliced",
      "nameZh": "干香菇（泡发切片）",
      "amountMetric": "30 g",
      "amountUS": "6 mushrooms",
      "category": "produce",
      "pantry": "asian",
      "termKey": "dried-shiitake",
      "note": "Save the soaking liquid for the marinade and the stuffing.",
      "noteZh": "泡香菇的水留着腌鸡和拌馅。"
    },
    {
      "id": "scallion",
      "nameEn": "scallions, cut in lengths",
      "nameZh": "葱段",
      "amountMetric": "4 stalks",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "30 g",
      "amountUS": "8 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "light-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "oyster-sauce",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "hoisin-sauce",
      "nameEn": "hoisin sauce",
      "nameZh": "海鲜酱",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "hoisin-sauce"
    },
    {
      "id": "shaoxing-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "five-spice",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "sesame-oil",
      "nameEn": "toasted sesame oil",
      "nameZh": "芝麻油",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "lotus-leaf",
      "nameEn": "dried lotus leaves (or parchment + heavy foil)",
      "nameZh": "干荷叶（或油纸加厚锡纸）",
      "amountMetric": "2 leaves",
      "amountUS": "2 leaves",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak dried lotus leaves in warm water for 30 minutes until pliable.",
      "noteZh": "干荷叶用温水泡 30 分钟至变软。"
    }
  ],
  "steps": [
    {
      "text": "Rub the chicken inside and out with soy sauce, oyster sauce, hoisin, wine, five-spice and sesame oil, then stuff the cavity with shiitake, half the scallion and half the ginger. Marinate at least 1 hour, ideally overnight.",
      "textZh": "用生抽、蚝油、海鲜酱、黄酒、五香粉、麻油把鸡里外抹匀，腹腔填入香菇、一半葱姜。腌至少 1 小时，隔夜更好。",
      "stateNote": {
        "visual": "The skin takes on a reddish-brown tint and the cavity glistens with marinade",
        "visualZh": "鸡皮染上红褐色，腹腔里的腌汁发亮",
        "signal": "Marinade no longer pools but clings when you tilt the bird",
        "signalZh": "倾斜鸡身时腌汁挂住不再积在底部",
        "timeRef": "1 hour minimum",
        "timeRefZh": "至少 1 小时",
        "heat": "low"
      }
    },
    {
      "text": "Wrap the chicken tightly in the soaked lotus leaves, folding the edges underneath like a parcel, then wrap again in heavy foil with the seam facing up.",
      "textZh": "用泡软的荷叶把鸡紧紧包起来，边角像包袱一样折到底下，外面再包一层厚锡纸，接缝朝上。",
      "stateNote": {
        "visual": "A compact, completely sealed parcel with no gaps or tears",
        "visualZh": "包成紧实、完全密封的一包，无缝无破口",
        "signal": "Squeezing gently produces no drips and no air hiss",
        "signalZh": "轻捏不滴汁、不漏气",
        "timeRef": "10 minutes",
        "timeRefZh": "约 10 分钟",
        "heat": "medium"
      },
      "tip": "The seal is the whole technique. If steam can escape, you are just roasting a chicken.",
      "tipZh": "密封就是全部技术。漏气了就只是普通烤鸡。"
    },
    {
      "text": "Roast at 200 C / 400 F on a tray for 60 minutes, then reduce to 170 C / 340 F and continue for 30 minutes.",
      "textZh": "烤箱 200°C 烤 60 分钟，再降到 170°C 继续烤 30 分钟。",
      "stateNote": {
        "visual": "The parcel puffs slightly and the kitchen fills with a sweet-spiced smell",
        "visualZh": "纸包微微鼓起，厨房弥漫甜香料的味道",
        "signal": "Juices begin to perfume rather than smell sharp and raw",
        "signalZh": "香气从生涩变成醇和的肉香",
        "timeRef": "90 minutes total",
        "timeRefZh": "共 90 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Rest the parcel, still sealed, for 15 minutes so the juices redistribute.",
      "textZh": "包好的鸡不要拆，静置 15 分钟让肉汁重新分布。",
      "stateNote": {
        "visual": "The foil relaxes and stops crackling as it cools",
        "visualZh": "锡纸随冷却变松，不再发出脆响",
        "signal": "The parcel is warm rather than too hot to touch",
        "signalZh": "包子的热度降到温热不烫手",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Open the parcel at the table, pouring every drop of collected juice back over the meat, and pull the chicken apart with two forks.",
      "textZh": "上桌时才拆包，把积在纸里的每一滴汁都倒回鸡上，用两把叉子把鸡拆开。",
      "stateNote": {
        "visual": "Steam billows out and the meat separates along the grain with no knife",
        "visualZh": "蒸汽腾起，肉顺着纹理一撕就开，不用刀",
        "signal": "A thigh bone pulls out clean and the joint is glossy, not pink",
        "signalZh": "腿骨能整根抽出，骨节处发亮不带血色",
        "timeRef": "2 minutes",
        "timeRefZh": "约 2 分钟",
        "heat": "medium"
      }
    }
  ],
  "tips": [
    "Never pierce the parcel to check doneness — you will lose the steam that makes this dish.",
    "No lotus leaves? Parchment then a double layer of foil gives 90 percent of the result.",
    "The collected juice is the sauce. Do not let anyone throw the foil away before you pour it off."
  ],
  "tipsZh": [
    "千万别扎破纸包看熟没熟，一扎蒸汽就跑了。",
    "没有荷叶？油纸加两层锡纸，效果能到九成。",
    "纸里积的汁就是酱汁，倒出来之前别让人把锡纸扔了。"
  ],
  "relatedSlugs": [
    "lotus-leaf-steamed-chicken",
    "white-cut-chicken",
    "hongshao-pork"
  ],
  "image": "/images/recipes/lotus-leaf-steamed-chicken.webp"
};
