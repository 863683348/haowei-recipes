import type { Recipe } from "@/lib/types";

/** Sesame Sauce Dipping Sauce (Májiàng Diǎnliào) (麻酱蘸料) — Seed batch */
export const sesame_sauce_dipping_sauce: Recipe = {
  "id": "ma-jiang-dian-liao",
  "slug": "sesame-sauce-dipping-sauce",
  "titleEn": "Sesame Sauce Dipping Sauce (Májiàng Diǎnliào)",
  "titleZh": "麻酱蘸料",
  "pinyin": "má jiàng zhàn liào",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses no MSG or pre-mixed sesame paste—just toasted sesame paste thinned with warm water and balanced with vinegar and soy. Restaurant versions often add sugar and garlic powder; ours relies on fresh scallion and ginger.",
  "versionNoteZh": "家庭版不添加味精或预调芝麻酱，仅用现烤芝麻酱加温水澥开，并以醋和酱油调和。餐馆版常加糖和蒜粉，我们则依赖新鲜葱姜提鲜。",
  "tags": [
    "15-min",
    "weeknight",
    "dipping-sauce"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "My aunt in Beijing’s Hutong made this every winter for hot pot nights—she’d toast sesame seeds in a wok over low heat until golden, then grind them by hand in a stone mortar. I still remember the nutty aroma filling her tiny kitchen while snow fell outside the courtyard gate.",
  "storyZh": "我北京胡同里的姑妈每年冬天都做这个配火锅——她用小火在锅里焙香芝麻，再用石臼手工研磨。我至今记得那股坚果香气弥漫在她小小的厨房里，而院门外正飘着雪。",
  "ingredients": [
    {
      "id": "mj-01",
      "nameEn": "toasted sesame paste",
      "nameZh": "芝麻酱（熟）",
      "pinyin": "zhī ma jiàng",
      "amountMetric": "120 g",
      "amountUS": "1/2 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for 100% pure roasted sesame paste (not 'spicy sesame sauce' or peanut blends). Sub: tahini + 1 tsp toasted sesame oil per 1/4 cup tahini.",
      "noteZh": "选100%纯焙炒芝麻酱（非‘辣味芝麻酱’或花生混合酱）。替代：芝麻酱（tahini）+ 每1/4杯加1茶匙焙香芝麻油。"
    },
    {
      "id": "mj-02",
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
      "id": "mj-03",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "mj-04",
      "nameEn": "fresh ginger, finely grated",
      "nameZh": "生姜（去皮细末）",
      "pinyin": "shēng jiāng",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "note": "Use a microplane or fine grater; squeeze out excess juice before adding.",
      "noteZh": "用微刨或细擦丝器；加入前挤掉多余汁水。"
    },
    {
      "id": "mj-05",
      "nameEn": "scallion greens, finely chopped",
      "nameZh": "小葱绿段（切细）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "3 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "note": "Use only green parts for freshness and color.",
      "noteZh": "只取葱绿部分，更清香、色泽更佳。"
    }
  ],
  "steps": [
    {
      "text": "In a medium bowl, place toasted sesame paste. Slowly whisk in 60 ml (¼ cup) warm water (40–45°C / 105–113°F), 15 ml at a time, until smooth and creamy—do not rush or it will seize.",
      "textZh": "取中号碗，放入芝麻酱。分5次加入60毫升（¼杯）温水（40–45°C），每次15毫升，边加边顺时针搅打至顺滑乳化，不可一次倒入，否则会结块。",
      "zhHint": "分次加温水，顺时针搅打",
      "stateNote": {
        "visual": "Smooth, glossy, pourable paste with no lumps or oil separation",
        "visualZh": "顺滑光亮、可流动的膏状，无颗粒、无浮油",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "signal": "Paste thickens slightly then loosens into a velvety consistency",
        "signalZh": "酱体先略变稠，继而转为丝绒般柔滑质地"
      }
    },
    {
      "text": "Add light soy sauce and Chinese black vinegar. Whisk vigorously for 30 seconds to fully emulsify.",
      "textZh": "加入生抽与陈醋，用力搅打30秒，确保完全乳化。",
      "zhHint": "加酱醋后猛力搅打",
      "stateNote": {
        "visual": "Uniform mahogany-brown color with no streaks",
        "visualZh": "均匀枣红色，无条纹或分层",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Liquid becomes cohesive and slightly foamy at edges",
        "signalZh": "液体边缘略起细泡，整体粘连成一体"
      }
    },
    {
      "text": "Stir in grated ginger and scallion greens. Mix gently just until evenly distributed—do not overmix.",
      "textZh": "拌入姜末与葱花，轻柔翻拌至均匀即可，切勿过度搅拌。",
      "zhHint": "轻拌匀，防葱姜出水",
      "stateNote": {
        "visual": "Flecks of pale yellow ginger and bright green scallion suspended throughout",
        "visualZh": "淡黄色姜末与翠绿葱花均匀悬浮其中",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "signal": "No pooling of liquid around herbs",
        "signalZh": "香料周围无渗出水渍"
      }
    },
    {
      "text": "Let rest at room temperature for 5 minutes. This allows flavors to meld and texture to stabilize.",
      "textZh": "室温静置5分钟，使风味融合、质地稳定。",
      "zhHint": "静置醒酱",
      "stateNote": {
        "visual": "Surface appears matte, not shiny; slight sheen only at edges",
        "visualZh": "表面呈哑光，仅边缘微泛光泽",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "No visible separation when gently tilted",
        "signalZh": "轻轻倾斜碗身，无分层迹象"
      }
    },
    {
      "text": "Taste and adjust: add 1 tsp more vinegar if too rich, or ½ tsp light soy sauce if too sharp. Serve cool or at room temperature.",
      "textZh": "试味调整：若过腻，加1茶匙陈醋；若过酸，加½茶匙生抽。冷藏或室温食用均可。",
      "zhHint": "按需微调酸咸",
      "stateNote": {
        "visual": "Balanced aroma—nutty, tangy, savory—no single note dominates",
        "visualZh": "香气平衡：芝麻香、醋香、酱香交融，无单一气味压倒",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Tongue registers umami first, then gentle acidity and warmth from ginger",
        "signalZh": "舌尖先感鲜味，继而微酸与姜辛回甘"
      }
    }
  ],
  "tips": [
    "Store covered in fridge up to 5 days—stir well before reuse.",
    "If sauce thickens overnight, stir in 1 tsp warm water per tablespoon.",
    "For authentic Beijing style, omit garlic—my aunt said ‘garlic masks the sesame’."
  ],
  "tipsZh": [
    "密封冷藏保存最多5天，再用前充分搅匀。",
    "隔夜变稠？每汤匙酱加1茶匙温水搅匀即可。",
    "老北京正宗做法不放蒜——姑妈说‘蒜味抢了芝麻本香’。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/sesame-sauce-dipping-sauce.webp"
};
