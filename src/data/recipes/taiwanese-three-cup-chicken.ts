import type { Recipe } from "@/lib/types";

/** Taiwanese Three-Cup Chicken (台式三杯鸡) — Seed batch */
export const taiwanese_three_cup_chicken: Recipe = {
  "id": "tai-wan-san-bei-ji",
  "slug": "taiwanese-three-cup-chicken",
  "titleEn": "Taiwanese Three-Cup Chicken",
  "titleZh": "台式三杯鸡",
  "pinyin": "tái shì sān bēi jī",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Tainan",
  "regionZh": "台南",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version uses skin-on chicken thighs for richer flavor and avoids deep-frying — unlike restaurant versions that often add sugar or cornstarch slurry.",
  "versionNoteZh": "家庭版使用带皮鸡腿肉增香，不油炸、不勾芡，区别于餐厅版常见的糖和水淀粉增稠做法。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Tainan cooked this every Sunday after temple visits — she’d toast sesame oil in her black iron wok until it shimmered, then add ginger, garlic, and scallions, filling the whole alley with fragrance. She always said, 'The cups must be equal: one cup soy, one cup wine, one cup oil — no cheating.'",
  "storyZh": "我台南的阿姨每逢周日参拜完庙宇就做这道菜——她用黑铁锅把芝麻油烧至微漾，再下姜、蒜、葱爆香，整条巷子都飘着香气。她总说：‘三杯必须等量：一杯酱油、一杯酒、一杯油，少一滴都不行。’",
  "ingredients": [
    {
      "id": "tb-01",
      "nameEn": "chicken thighs, bone-in, skin-on",
      "nameZh": "鸡腿肉（带骨带皮）",
      "pinyin": "jī tuǐ ròu",
      "amountMetric": "600 g",
      "amountUS": "1.5 lbs",
      "category": "protein",
      "pantry": "local",
      "note": "Cut into 4–5 cm pieces; pat dry before cooking",
      "noteZh": "切4–5厘米块，烹饪前擦干表面水分"
    },
    {
      "id": "tb-02",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "tb-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tb-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "tb-05",
      "nameEn": "fresh ginger, thickly sliced",
      "nameZh": "老姜（厚片）",
      "pinyin": "lǎo jiāng",
      "amountMetric": "40 g",
      "amountUS": "¼ cup, thinly sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "tb-06",
      "nameEn": "garlic cloves, smashed",
      "nameZh": "大蒜（拍松）",
      "pinyin": "dà suàn",
      "amountMetric": "15 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "tb-07",
      "nameEn": "scallions, cut into 4-cm lengths (white + green)",
      "nameZh": "小葱（白绿段）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "80 g",
      "amountUS": "1 cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Heat a heavy-bottomed wok or skillet over medium heat. Add sesame oil and swirl to coat. Toast ginger slices until edges curl and aroma rises — about 1 minute.",
      "textZh": "厚底炒锅或平底锅中火加热，倒入芝麻油，转动锅体使油均匀铺开。放入姜片，煸至边缘微卷、香味溢出，约1分钟。",
      "zhHint": "姜片微卷即止",
      "stateNote": {
        "visual": "Ginger edges curl slightly; oil shimmers but does not smoke",
        "visualZh": "姜片边缘微卷；油面微漾但未冒烟",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Fragrant, nutty aroma fills the kitchen",
        "signalZh": "厨房充满坚果香气"
      }
    },
    {
      "text": "Add smashed garlic and stir 30 seconds until fragrant. Do not brown.",
      "textZh": "加入拍松的大蒜，翻炒30秒至出香，切勿焦黄。",
      "zhHint": "闻香即转",
      "stateNote": {
        "visual": "Garlic turns translucent with light golden flecks",
        "visualZh": "蒜瓣变半透明，略带浅金斑点",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Aromatics release pungent, sweet scent",
        "signalZh": "辛香料释放辛辣甜香"
      }
    },
    {
      "text": "Add chicken pieces in a single layer. Sear undisturbed for 2 minutes until golden-brown on one side.",
      "textZh": "鸡块单层平铺入锅，静置煎2分钟，至一面呈金黄色。",
      "zhHint": "不翻动，定型上色",
      "stateNote": {
        "visual": "Chicken surface develops deep golden crust",
        "visualZh": "鸡块表面形成深金褐色脆壳",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Sizzling sound steadies; edges lift easily",
        "signalZh": "滋滋声趋稳；边缘可轻松掀起"
      }
    },
    {
      "text": "Flip chicken, then pour in light soy sauce, Shaoxing wine, and 60 ml water. Bring to a gentle simmer, then cover and cook 15 minutes.",
      "textZh": "翻面后，淋入生抽、绍兴酒和60毫升水，煮沸后转小火，加盖焖煮15分钟。",
      "zhHint": "沸后转小火焖",
      "stateNote": {
        "visual": "Liquid bubbles softly at edge of lid; steam condenses steadily",
        "visualZh": "汤汁在锅盖边缘轻滚；锅盖内持续凝结水汽",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-low",
        "signal": "Steam rises consistently; liquid reduces by ~⅓",
        "signalZh": "蒸汽稳定上升；汤汁减少约三分之一"
      }
    },
    {
      "text": "Uncover, increase heat to medium-high. Add scallions and stir gently. Cook uncovered 5–7 minutes until sauce thickens to glossy glaze and clings to chicken.",
      "textZh": "开盖，转中大火，加入葱段轻翻。继续收汁5–7分钟，至酱汁浓亮、裹附鸡块。",
      "zhHint": "收至油亮挂汁",
      "stateNote": {
        "visual": "Sauce coats back of spoon and leaves clear trail when dragged",
        "visualZh": "酱汁能挂勺背，划痕处清晰不闭合",
        "timeRef": "5–7 minutes",
        "timeRefZh": "5–7 分钟",
        "heat": "medium-high",
        "signal": "Bubbles slow to large, syrupy pops; aroma deepens",
        "signalZh": "气泡变大、粘稠‘噗噗’声；香气更醇厚"
      }
    }
  ],
  "tips": [
    "Use bone-in, skin-on thighs — collagen and fat render into rich, unctuous sauce.",
    "If Shaoxing wine is unavailable, substitute dry sherry (not cooking wine).",
    "Do not substitute dark soy sauce — it adds unwanted color and bitterness here."
  ],
  "tipsZh": [
    "务必用带骨带皮鸡腿肉——胶原与脂肪融化后成就浓郁醇厚酱汁。",
    "若无绍兴酒，可用干雪利酒替代（不可用料酒）。",
    "切勿用老抽代替生抽，会令色泽过深、味道发苦。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/taiwanese-three-cup-chicken.webp"
};
