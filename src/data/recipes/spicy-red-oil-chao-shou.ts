import type { Recipe } from "@/lib/types";

/** Spicy Red Oil Chao Shou (红油抄手) — Seed batch */
export const spicy_red_oil_chao_shou: Recipe = {
  "id": "hong-you-chao-shou",
  "slug": "spicy-red-oil-chao-shou",
  "titleEn": "Spicy Red Oil Chao Shou",
  "titleZh": "红油抄手",
  "pinyin": "hóng yóu chāo shǒu",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips chili oil infusion (too time-consuming) and uses store-bought Sichuan chili oil—just strained for clarity. It’s stirred cold into cooked wontons, never heated, to preserve aroma.",
  "versionNoteZh": "家庭版省去自制红油熬炼步骤，选用市售红油（滤去渣），冷拌熟馄饨，以保香气。",
  "tags": [
    "30-min",
    "spicy",
    "appetizer"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Chengdu’s Jinniu District ran a tiny stall near Renmin Park. He taught me to stir the red oil *after* plating—never before—because ‘heat kills the fragrance of the chilies, like shouting at a poem.’ His version used only three seasonings: chili oil, light soy, and black vinegar.",
  "storyZh": "我在成都金牛区的舅舅，在人民公园旁摆抄手摊。他教我：红油必须出锅后才淋——绝不可提前拌，‘热会杀掉辣椒的香，就像对着诗喊叫’。他只用三味：红油、生抽、陈醋。",
  "ingredients": [
    {
      "id": "hr-01",
      "nameEn": "ground pork (leaner, 15% fat)",
      "nameZh": "猪后腿肉末（肥瘦比1.5:8.5）",
      "pinyin": "zhū hòu tuǐ ròu mò",
      "amountMetric": "200 g",
      "amountUS": "scant 1 cup",
      "category": "protein",
      "pantry": "local",
      "note": "Leaner than wonton filling—better for cold dressings",
      "noteZh": "比馄饨馅更瘦，适合冷拌"
    },
    {
      "id": "hr-02",
      "nameEn": "Sichuan chili oil (strained, no sediment)",
      "nameZh": "四川红油（滤净油渣）",
      "pinyin": "Sìchuān hóng yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for ‘Chengdu chili oil’ or make quick version: heat 30ml neutral oil + 1 tbsp Sichuan chili flakes until fragrant, cool, strain.",
      "noteZh": "选‘成都红油’；或自制：30ml植物油+1 tbsp四川辣椒面，小火焙香后滤渣冷却"
    },
    {
      "id": "hr-03",
      "nameEn": "chinese black vinegar",
      "nameZh": "中国黑醋",
      "pinyin": "zhōng guó hēi cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "hr-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "hr-05",
      "nameEn": "toasted sesame seeds",
      "nameZh": "熟白芝麻",
      "pinyin": "shú bái zhī ma",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Toasting adds nuttiness; skip if pre-toasted seeds are unavailable",
      "noteZh": "现烤更香；若无，可用市售熟芝麻"
    }
  ],
  "steps": [
    {
      "text": "Mix pork, 1 tsp (5 ml) light soy, and 1 tsp (5 ml) Chinese black vinegar in a bowl. Stir 1 minute until cohesive but not pasty.",
      "textZh": "碗中混合猪肉末、1茶匙生抽、1茶匙黑醋，顺一方向搅打1分钟至抱团不散。",
      "zhHint": "轻搅上劲，勿打稀",
      "stateNote": {
        "visual": "Mixture forms soft clumps that hold shape when pressed",
        "visualZh": "肉馅轻压成团，松手微散",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No liquid separates at bottom of bowl",
        "signalZh": "碗底无汁水析出"
      }
    },
    {
      "text": "Fold filling into small, tight triangles using round wonton wrappers (~7 cm). Pinch edges firmly—no pleats needed, as filling is drier.",
      "textZh": "用圆形馄饨皮（约7厘米）包成小三角，边缘捏紧即可，无需褶皱（馅较干）。",
      "zhHint": "三角紧捏，皮薄馅实",
      "stateNote": {
        "visual": "Wrapper lies flat against filling with no air pockets",
        "visualZh": "皮紧贴馅料，无空鼓",
        "timeRef": "2–3 seconds per chao shou",
        "timeRefZh": "每个抄手2–3秒",
        "signal": "Seam stays sealed when lifted by one corner",
        "signalZh": "单角拎起不漏馅"
      }
    },
    {
      "text": "Boil in salted water until floating (1.5 minutes), then cook 1 more minute. Drain thoroughly and spread on a rack to cool 2 minutes—no steam trapped!",
      "textZh": "盐水煮至浮起（1.5分钟），再煮1分钟；沥干后摊于晾架，晾2分钟——务必散尽水汽！",
      "zhHint": "煮后晾透，防红油变浑",
      "stateNote": {
        "visual": "Surface looks matte, not glistening; no droplets on skin",
        "visualZh": "表面哑光，无水珠附着",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Wontons feel dry to fingertip touch",
        "signalZh": "指尖轻触无湿感"
      }
    },
    {
      "text": "In a separate bowl, whisk chili oil, remaining light soy, remaining black vinegar, and 1/4 tsp white pepper. Taste—should be fiery, tangy, salty, balanced.",
      "textZh": "另取碗，将红油、余下生抽、余下黑醋、1/4茶匙白胡椒粉搅匀。尝味——应辣、酸、咸、香四味平衡。",
      "zhHint": "四味调和，辣不掩酸",
      "stateNote": {
        "visual": "Oil floats evenly, no separation into layers",
        "visualZh": "油液均匀悬浮，不分层",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Aroma rises sharply—peppery and smoky—when sniffed closely",
        "signalZh": "凑近闻有明显椒麻烟香"
      }
    },
    {
      "text": "Toss cooled chao shou gently in sauce. Transfer to chilled plates. Sprinkle with sesame seeds and scallion greens.",
      "textZh": "将晾凉的抄手倒入酱汁中轻拌匀，盛入冰镇盘中，撒芝麻与葱绿。",
      "zhHint": "冷盘冷拌，锁住红油香",
      "stateNote": {
        "visual": "Each piece glistens with thin, even coat—no pooling sauce",
        "visualZh": "每只抄手裹薄亮油膜，无酱汁积聚",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "signal": "Red oil coats wrapper without sliding off",
        "signalZh": "红油附着皮面，不滑落"
      }
    }
  ],
  "tips": [
    "Use room-temp pork—cold meat won’t bind well with the dry seasoning.",
    "Chill plates 10 minutes before serving: cold surface keeps oil vibrant and prevents sogginess.",
    "If chili oil is too harsh, stir in 1 tsp (5 ml) toasted sesame oil to round the heat."
  ],
  "tipsZh": [
    "猪肉需回温至室温，冷肉难与干调料融合。",
    "上桌前10分钟将盘子冷藏，冷盘保红油亮泽、防皮软。",
    "若红油过辣，可拌入1茶匙（5ml）香油缓和辣度。"
  ],
  "relatedSlugs": [
    "fresh-pork-wonton"
  ],
  "image": "/images/recipes/spicy-red-oil-chao-shou.webp"
};
