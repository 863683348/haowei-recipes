import type { Recipe } from "@/lib/types";

/** Yongzhou Blood Duck (永州血鸭) — Seed batch */
export const yong_zhou_blood_duck: Recipe = {
  "id": "yong-zhou-xue-ya",
  "slug": "yong-zhou-blood-duck",
  "titleEn": "Yongzhou Blood Duck",
  "titleZh": "永州血鸭",
  "pinyin": "Yǒngzhōu xuè yā",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Yongzhou, Hunan",
  "regionZh": "湖南永州",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses fresh duck blood and minimal thickening—no cornstarch slurry, unlike restaurant versions that prioritize glossy sheen.",
  "versionNoteZh": "家常版使用新鲜鸭血，不加淀粉水勾芡；餐馆版为追求油亮卖相常加水淀粉。",
  "tags": [
    "30-min",
    "weeknight",
    "bold-flavor"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Yongzhou’s Lingling District slaughtered ducks every winter solstice. He’d stir-fry the meat with hot duck blood straight from the cleaver board—my cousin once dropped a spoon into the wok and we still tease him about it.",
  "storyZh": "我舅舅在永州零陵区，每年冬至都要宰鸭。他把刚放的鸭血直接淋进热锅里翻炒——表弟有回把汤匙掉进锅里，我们至今还拿这事打趣。",
  "ingredients": [
    {
      "id": "yy-01",
      "nameEn": "duck leg meat, boneless, diced (skin-on preferred)",
      "nameZh": "鸭腿肉（带皮），去骨切丁",
      "pinyin": "yā tuǐ ròu",
      "amountMetric": "300 g",
      "amountUS": "1 ¼ cups (diced)",
      "category": "protein",
      "pantry": "local",
      "note": "Ask butcher for skin-on duck leg; substitute chicken thigh if duck unavailable (but flavor will differ)",
      "noteZh": "请肉铺代切带皮鸭腿肉；若无鸭肉，可用鸡腿肉替代（风味不同）"
    },
    {
      "id": "yy-02",
      "nameEn": "fresh duck blood, chilled",
      "nameZh": "新鲜鸭血（冷藏）",
      "pinyin": "xīn xiān yā xuè",
      "amountMetric": "120 ml",
      "amountUS": "½ cup",
      "category": "protein",
      "pantry": "local",
      "note": "Must be fresh, uncoagulated, and refrigerated — sold at Asian markets or specialty butchers. Substitute: 120 ml silken tofu blended with 1 tsp light soy sauce + ½ tsp Chinese black vinegar (for color & tang)",
      "noteZh": "须为冷藏未凝固鲜鸭血，亚洲超市或西式精肉店偶有售。替代：嫩豆腐120ml + 轻酱油1 tsp + 中式黑醋½ tsp（调色增酸）"
    },
    {
      "id": "yy-03",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "20 g",
      "amountUS": "4 cloves, minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "yy-04",
      "nameEn": "ginger, julienned",
      "nameZh": "姜丝",
      "pinyin": "jiāng sī",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp, julienned",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "yy-05",
      "nameEn": "scallions, white and green parts, cut into 3-cm lengths",
      "nameZh": "小葱（葱白+葱绿），切3厘米段",
      "pinyin": "xiǎo cōng",
      "amountMetric": "60 g",
      "amountUS": "4 medium scallions",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "yy-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "yy-07",
      "nameEn": "Chinese black vinegar",
      "nameZh": "镇江香醋 or other Chinese black vinegar",
      "pinyin": "zhèn jiāng xiāng cù",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    }
  ],
  "steps": [
    {
      "text": "Rinse duck meat under cold water; pat very dry with paper towels. Season lightly with ¼ tsp white pepper.",
      "textZh": "鸭肉冷水冲洗，用厨房纸彻底吸干水分；撒¼茶匙白胡椒粉略腌。",
      "zhHint": "务必擦干！",
      "stateNote": {
        "visual": "Meat pieces look matte, not glistening or wet",
        "visualZh": "鸭丁表面哑光，无水光",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "No steam rising from meat surface",
        "signalZh": "肉表面无水汽冒出"
      }
    },
    {
      "text": "Heat wok over high heat until smoking slightly. Add 20 g (1½ tbsp) neutral oil. Swirl to coat. Add duck meat in single layer; sear without stirring for 90 seconds.",
      "textZh": "旺火烧热铁锅至微冒青烟，倒入20克（1½汤匙）中性油，转锅润壁；鸭丁单层铺入，静置煎90秒不翻动。",
      "zhHint": "定型再翻",
      "stateNote": {
        "visual": "Edges of duck pieces turn golden-brown and slightly curled",
        "visualZh": "鸭丁边缘微焦黄、略卷起",
        "timeRef": "1½ minutes",
        "timeRefZh": "1½ 分钟",
        "heat": "high",
        "signal": "Sizzling intensifies and faint browning appears",
        "signalZh": "滋滋声变响，边缘初现焦色"
      }
    },
    {
      "text": "Flip duck pieces and stir-fry 2 minutes until browned on all sides. Push to wok perimeter. Add ginger, garlic, and scallion whites to center; stir-fry 30 seconds until fragrant.",
      "textZh": "翻面继续煸炒2分钟至周身焦黄；推至锅边，中心下姜丝、蒜末、葱白，爆香30秒。",
      "zhHint": "先炒香料再合炒",
      "stateNote": {
        "visual": "Aroma rises sharply; garlic edges turn pale gold",
        "visualZh": "香气骤然上扬；蒜末边缘呈浅金色",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Fragrance fills kitchen instantly",
        "signalZh": "厨房瞬间充满辛香"
      }
    },
    {
      "text": "Return duck to center. Add light soy sauce and black vinegar. Stir-fry 1 minute to coat and caramelize slightly.",
      "textZh": "鸭肉回锅中心，淋入生抽与黑醋，猛火快炒1分钟，使酱汁裹匀并微焦化。",
      "zhHint": "酱汁要收亮",
      "stateNote": {
        "visual": "Sauce clings to meat in glossy, thin film; no pooling liquid",
        "visualZh": "酱汁薄亮裹肉，无多余汁液积聚",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Wok emits sharp, sweet-fermented aroma",
        "signalZh": "锅气升腾，散发焦糖与发酵香"
      }
    },
    {
      "text": "Remove wok from heat. Immediately pour chilled duck blood over meat while stirring vigorously with wooden spatula. Stir continuously 45 seconds until blood coagulates into tender, dark-brown curds.",
      "textZh": "离火，立即将冷藏鸭血沿锅边淋入，用木铲急速搅动45秒，至血凝成柔韧深褐色絮状。",
      "zhHint": "离火再淋血，快搅防结块",
      "stateNote": {
        "visual": "Blood transforms into soft, irregular dark-brown shreds clinging to duck",
        "visualZh": "鸭血凝成柔软不规则的深褐色絮片，裹附鸭肉",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "signal": "Mixture thickens visibly and loses raw red sheen",
        "signalZh": "整体明显变稠，褪去生红光泽"
      }
    },
    {
      "text": "Fold in scallion greens. Serve immediately in warmed bowl.",
      "textZh": "最后拌入葱绿段，趁热盛入预热碗中。",
      "zhHint": "即炒即食，血嫩不老"
    }
  ],
  "tips": [
    "Use only *chilled* fresh duck blood — warm blood will scramble like eggs.",
    "If substituting tofu mixture, add it in Step 5 *after* removing from heat and stir just 30 sec — longer = grainy texture.",
    "This dish must be eaten within 5 minutes of cooking — blood texture degrades fast."
  ],
  "tipsZh": [
    "务必用*冷藏*鲜鸭血——温血会像蛋液般结块成块。",
    "若用豆腐替代液，步骤5离火后加入，仅搅30秒；过久则口感粉渣。",
    "此菜须出锅5分钟内食尽——鸭血质地随时间迅速变韧。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/yong-zhou-blood-duck.webp"
};
