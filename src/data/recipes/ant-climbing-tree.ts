import type { Recipe } from "@/lib/types";

/** Ant Climbing Tree (蚂蚁上树) — Seed batch */
export const ant_climbing_tree: Recipe = {
  "id": "ma-yi-shang-shu",
  "slug": "ant-climbing-tree",
  "titleEn": "Ant Climbing Tree",
  "titleZh": "蚂蚁上树",
  "pinyin": "mǎ yǐ shàng shù",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "easy",
  "timeMin": 22,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses lean ground pork (not fatty), skips MSG, and adds a splash of Shaoxing wine for depth — no sugar or cornstarch slurry.",
  "versionNoteZh": "家常版选用纯瘦猪肉末，不加味精，仅以绍兴酒提鲜，不放糖、不勾芡。",
  "tags": [
    "30-min",
    "weeknight",
    "budget"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandfather in Chongqing’s Yuzhong District made this every Lunar New Year Eve — he called the vermicelli ‘the tree’ and the pork ‘ants’, saying, 'Even small things climb high when they stick together.' He used his mother’s clay pot, never a wok.",
  "storyZh": "重庆渝中区的祖父每逢除夕必做这道菜——他管粉丝叫‘树’，肉末叫‘蚂蚁’，说：‘再小的东西，抱成团也能登高。’他从不用铁锅，只用祖母留下的陶钵。",
  "ingredients": [
    {
      "id": "ms-01",
      "nameEn": "dried cellophane noodles (mung bean starch)",
      "nameZh": "干粉丝（绿豆淀粉制）",
      "pinyin": "gān fěn sī",
      "amountMetric": "80 g",
      "amountUS": "2 oz (about 1 bundle)",
      "category": "staple",
      "pantry": "asian",
      "note": "Soak in room-temp water 15 min until pliable but still firm — do NOT boil or over-soak.",
      "noteZh": "室温水泡15分钟至柔韧不软烂——禁用开水或久泡。"
    },
    {
      "id": "ms-02",
      "nameEn": "lean ground pork (90% lean)",
      "nameZh": "瘦猪肉末（肥瘦比1:9）",
      "pinyin": "shòu zhū ròu mò",
      "amountMetric": "180 g",
      "amountUS": "¾ cup (loosely packed)",
      "category": "protein",
      "pantry": "local",
      "note": "Substitute ground turkey or chicken if pork unavailable — adjust salt slightly.",
      "noteZh": "若无猪肉末，可用鸡胸或火鸡肉末替代，酌减盐量。"
    },
    {
      "id": "ms-03",
      "nameEn": "fermented broad bean paste (doubanjiang)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Must be Pixian-brand; substitute Korean gochujang only if essential (reduce by 30%).",
      "noteZh": "必须为郫县产；若无，可临时用韩式辣酱（减量30%）。",
      "termKey": "doubanjiang"
    },
    {
      "id": "ms-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute dry sherry or Japanese cooking sake if unavailable.",
      "noteZh": "若无，可用干雪莉酒或日式料理清酒替代。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ms-05",
      "nameEn": "scallions, finely chopped (green and white parts separated)",
      "nameZh": "小葱，葱白葱绿分切",
      "pinyin": "xiǎo cōng",
      "amountMetric": "60 g",
      "amountUS": "½ cup (chopped)",
      "category": "produce",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Soak cellophane noodles in room-temperature water 15 minutes. Drain well, then snip into 5 cm lengths with kitchen shears.",
      "textZh": "粉丝室温水泡15分钟；沥干后用剪刀剪成5厘米段。",
      "zhHint": "剪短易拌匀",
      "stateNote": {
        "visual": "Noodles are translucent, flexible, and separate easily — no mushiness.",
        "visualZh": "粉丝呈半透明状，柔韧易分，无糊烂。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "A strand bends without snapping or dripping water.",
        "signalZh": "单根粉丝可弯折不断，且无水滴下。"
      }
    },
    {
      "text": "Heat wok over medium-high. Add pork and stir-fry until crumbled and no pink remains — about 2 minutes.",
      "textZh": "中大火烧热锅，下肉末快速划散，炒至颗粒分明、无粉红色 — 约2分钟。",
      "zhHint": "炒散防结块",
      "stateNote": {
        "visual": "Meat breaks into fine, dry granules; surface looks matte, not greasy.",
        "visualZh": "肉末呈细碎干爽颗粒状，表面哑光不泛油。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "Edges begin to brown lightly; aroma turns meaty and clean.",
        "signalZh": "边缘初显浅褐，气味转为纯粹肉香。"
      }
    },
    {
      "text": "Push pork to edge. Add doubanjiang to center and stir-fry 20 seconds until oil reddens and aroma sharpens.",
      "textZh": "将肉末拨至锅边，中心下豆瓣酱，小火炒20秒至油色变红、香气变锐。",
      "zhHint": "豆瓣酱需爆香",
      "stateNote": {
        "visual": "Oil around paste darkens to deep coral; tiny foam appears at edges.",
        "visualZh": "酱周油色转深珊瑚红，边缘泛细密泡沫。",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "heat": "medium-low",
        "signal": "Fragrance intensifies with a warm, fermented tang.",
        "signalZh": "香味骤然浓郁，带暖醇发酵酸香。"
      }
    },
    {
      "text": "Return pork to center. Add Shaoxing wine and stir-fry 30 seconds until alcohol smell evaporates and mixture glistens.",
      "textZh": "肉末回锅中心，烹入绍兴酒，快炒30秒至酒气挥发、整体油亮。",
      "zhHint": "酒气要炒净",
      "stateNote": {
        "visual": "Steam rises briefly in a thin, visible veil; surface glistens uniformly.",
        "visualZh": "短暂升腾一缕薄而可见的蒸汽；整体泛匀亮油光。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Sharp alcohol odor disappears, replaced by sweet rice fragrance.",
        "signalZh": "刺鼻酒气消失，转为清甜米香。"
      }
    },
    {
      "text": "Add drained noodles and white scallion parts. Toss gently over medium heat 1 minute — noodles should absorb sauce, not steam.",
      "textZh": "下沥干粉丝和葱白段，中火轻翻1分钟——粉丝吸汁不返潮。",
      "zhHint": "轻翻防断粉",
      "stateNote": {
        "visual": "Noodles cling to pork, turning pale beige with flecks of red sauce.",
        "visualZh": "粉丝裹附肉末，呈浅米色，缀点点酱红。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "No steam rises; noodles feel springy, not soggy.",
        "signalZh": "无蒸汽升腾；粉丝弹牙不软塌。"
      },
      "tip": "If noodles seem dry, add 1 tsp hot water — never cold.",
      "tipZh": "若觉干涩，可淋1茶匙热水——切忌冷水。"
    }
  ],
  "tips": [
    "Never soak noodles in hot water — it makes them gluey and hard to separate.",
    "Doubanjiang is the soul: use authentic Pixian brand for true Sichuan umami.",
    "Finish with raw green scallions off-heat — their freshness balances the deep savoriness."
  ],
  "tipsZh": [
    "粉丝禁用热水泡，否则黏糊难散。",
    "豆瓣酱是灵魂：务必用正宗郫县产，才得川味醇厚鲜。",
    "出锅前离火撒生葱绿——清鲜之气平衡厚重咸鲜。"
  ],
  "relatedSlugs": [
    "salt-fried-pork"
  ],
  "image": "/images/recipes/ant-climbing-tree.webp"
};
