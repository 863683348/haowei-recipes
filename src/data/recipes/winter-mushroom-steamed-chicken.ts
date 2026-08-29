import type { Recipe } from "@/lib/types";

/** Winter Mushroom Steamed Chicken (冬菇蒸鸡) — Seed batch */
export const winter_mushroom_steamed_chicken: Recipe = {
  "id": "dong-gu-zheng-ji",
  "slug": "winter-mushroom-steamed-chicken",
  "titleEn": "Winter Mushroom Steamed Chicken",
  "titleZh": "冬菇蒸鸡",
  "pinyin": "dōng gū zhēng jī",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses whole dried shiitake caps (not powder or paste) and includes a splash of sesame oil only at the end—never cooked in, to preserve its fragrance.",
  "versionNoteZh": "家庭版使用整朵干香菇（非粉状或酱状），芝麻油仅出锅前淋入（不入锅烹炒），以保其香气。",
  "tags": [
    "30-min",
    "weeknight",
    "umami"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Zhongshan kept a tin of ‘winter mushrooms’—her name for premium dried shiitake—under her rice jar. She’d rehydrate them in tea instead of water, saying it ‘softened their soul’ before steaming with chicken.",
  "storyZh": "中山的祖母在米缸旁总放着一铁罐‘冬菇’——她对顶级干香菇的称呼。她用茶水而非清水泡发，说这样能‘柔化菇魂’，再与鸡肉同蒸。",
  "ingredients": [
    {
      "id": "dg-01",
      "nameEn": "boneless chicken thigh",
      "nameZh": "去骨鸡腿肉",
      "pinyin": "qù gǔ jī tuǐ ròu",
      "amountMetric": "320 g",
      "amountUS": "11.3 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Cut into 2 cm cubes; skin-on optional for extra richness",
      "noteZh": "切2厘米见方块；带皮可增脂香（可选）"
    },
    {
      "id": "dg-02",
      "nameEn": "dried shiitake mushrooms",
      "nameZh": "干冬菇",
      "pinyin": "gān dōng gū",
      "amountMetric": "60 g",
      "amountUS": "1/2 cup (4–5 large caps)",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for thick, dark brown caps with white cracks—these are mature winter-grade shiitake",
      "noteZh": "选厚实深褐、带白裂纹的菌盖——属成熟冬菇级"
    },
    {
      "id": "dg-03",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "15 g",
      "amountUS": "2 cloves, finely minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "dg-04",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "dg-05",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Soak dried shiitake in 250 ml hot water (70°C / 160°F) for 30 minutes until fully softened. Reserve soaking liquid; strain through cheesecloth to remove grit.",
      "textZh": "干冬菇用250毫升70°C热水浸泡30分钟至完全软化。滤出泡发水，用纱布过滤去杂质。",
      "zhHint": "泡发冬菇",
      "stateNote": {
        "visual": "Mushrooms are plump, leathery, and deep mahogany; liquid is richly aromatic and slightly cloudy",
        "visualZh": "香菇饱满厚韧、呈深红褐色；泡发水浓香微浊",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "Cap edges curl slightly upward when lifted",
        "signalZh": "轻提菌盖边缘微上翘"
      }
    },
    {
      "text": "Squeeze excess water from mushrooms, trim tough stems, and slice caps into 0.5 cm strips. Set aside.",
      "textZh": "轻挤去香菇多余水分，去硬蒂，切成0.5厘米宽条，备用。",
      "zhHint": "处理香菇",
      "stateNote": {
        "visual": "Strips hold shape without crumbling; surface glistens lightly",
        "visualZh": "条状完整不碎，表面微泛润泽",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "No water beads form on cutting board",
        "signalZh": "砧板上无水珠凝结"
      }
    },
    {
      "text": "In a bowl, combine chicken, minced garlic, dark soy sauce, 1 tbsp reserved mushroom liquid, and white pepper. Mix gently for 2 minutes until marinade clings.",
      "textZh": "碗中放入鸡块、蒜末、老抽、1汤匙香菇泡发水及白胡椒，轻拌2分钟至酱汁均匀附着。",
      "zhHint": "腌制鸡肉",
      "stateNote": {
        "visual": "Marinade forms thin, sticky film on each chicken cube",
        "visualZh": "每块鸡表面裹一层薄而黏的酱膜",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Chicken feels tacky—not wet—to touch",
        "signalZh": "触感微黏，不湿手"
      }
    },
    {
      "text": "Layer marinated chicken in a shallow heatproof dish. Arrange mushroom strips evenly on top. Steam over boiling water on medium-high heat for 22 minutes.",
      "textZh": "将腌好的鸡块平铺于浅口耐热盘中，香菇条均匀铺于表面。水沸后中大火蒸22分钟。",
      "zhHint": "铺料蒸制",
      "stateNote": {
        "visual": "Mushroom strips retain deep color; steam condenses heavily on lid",
        "visualZh": "香菇条色泽深润不褪；锅盖内侧大量凝结水珠",
        "timeRef": "22 minutes",
        "timeRefZh": "22 分钟",
        "heat": "medium-high",
        "signal": "Fragrance of mushroom and garlic fills kitchen unmistakably",
        "signalZh": "香菇与蒜香浓郁扑鼻，无可混淆"
      }
    },
    {
      "text": "Remove dish from steamer. Drizzle with sesame oil and stir once gently to distribute. Serve immediately.",
      "textZh": "取出蒸盘，淋入芝麻油，轻拌一次使油均匀分布，即刻上桌。",
      "zhHint": "淋油拌匀",
      "stateNote": {
        "visual": "Oil creates delicate golden sheen across surface; steam rises in fragrant wisps",
        "visualZh": "油光细润泛金；热气携香袅袅升腾",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Aroma intensifies within 5 seconds of drizzling",
        "signalZh": "淋油后5秒内香气骤然增强"
      }
    }
  ],
  "tips": [
    "Soaking mushrooms in hot (not boiling) water preserves their gelatinous texture—boiling makes them rubbery.",
    "Reserve every drop of mushroom liquid: it’s pure umami gold for soups or stir-fries later.",
    "For deeper color, add 1/2 tsp dark soy sauce to marinade—but never more, or it turns bitter."
  ],
  "tipsZh": [
    "用热水（非沸水）泡发香菇可保持胶质口感——沸水会使菇体变韧。",
    "务必留尽所有泡发水：这是纯正的鲜味黄金，可存作煲汤或快炒之用。",
    "如需加深酱色，可在腌料中加1/2茶匙老抽，但切勿过量，否则发苦。"
  ],
  "relatedSlugs": [
    "cordyceps-flowers-steamed-chicken"
  ],
  "image": "/images/recipes/winter-mushroom-steamed-chicken.webp"
};
