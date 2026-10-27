import type { Recipe } from "@/lib/types";

/** Fermented Chive Flower Sauce (Jiu Cai Hua Jiang) (韭菜花酱) — Day batch */
export const chive_flower_sauce: Recipe = {
  "id": "jiu-cai-hua-jiang",
  "slug": "chive-flower-sauce",
  "titleEn": "Fermented Chive Flower Sauce (Jiu Cai Hua Jiang)",
  "titleZh": "韭菜花酱",
  "pinyin": "jiǔ cài huā jiàng",
  "cuisine": "北方菜",
  "cuisineEn": "Northern Chinese",
  "region": "Inner Mongolia",
  "regionZh": "内蒙古",
  "difficulty": "easy",
  "timeMin": 40,
  "servings": 12,
  "version": "family",
  "versionNote": "The family version adds a little grated Asian pear and a quick 3-day countertop ferment, then refrigerates. Traditional Inner Mongolian and old Beijing versions are pounded in a stone mortar with only chive flowers and salt and left to ferment for weeks, producing a sharper, more funky sauce.",
  "versionNoteZh": "家庭版加入少许磨碎的沙梨，常温发酵3天后转冷藏。内蒙与老北京传统做法只用韭菜花和盐，在石臼里捣烂后发酵数周，味道更冲、更有发酵的野性。",
  "tags": [
    "condiment",
    "fermented",
    "make-ahead",
    "hot-pot"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Chive flowers only appear for a couple of weeks in late summer, and my grandmother bought them by the basketful then. She pounded them with coarse salt in an old stone mortar until the whole courtyard smelled green and sharp, and the jar she sealed that day was opened at the first hot pot of winter.",
  "storyZh": "韭菜花只在夏末出现短短两周，外婆那阵子成筐地买。她用粗盐在旧石臼里把它们捣烂，整座院子都是又青又冲的气味。那天封好的一罐，要到冬天第一顿火锅才开。",
  "ingredients": [
    {
      "id": "jc-01",
      "nameEn": "chive flowers",
      "nameZh": "韭菜花",
      "amountMetric": "500 g",
      "amountUS": "4 cups florets",
      "category": "produce",
      "pantry": "asian",
      "note": "Use unopened or just-opened chive flower buds; once fully bloomed they turn bitter. Substitute: 350 g garlic chives plus 150 g chive buds."
    },
    {
      "id": "jc-02",
      "nameEn": "coarse salt",
      "nameZh": "粗盐",
      "amountMetric": "60 g",
      "amountUS": "1/4 cup",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Use non-iodised coarse salt; iodine can dull the ferment and inhibit the culture."
    },
    {
      "id": "jc-03",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "20 g",
      "amountUS": "1 tbsp minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "jc-04",
      "nameEn": "Asian pear",
      "nameZh": "沙梨",
      "amountMetric": "100 g",
      "amountUS": "1/4 pear",
      "category": "produce",
      "pantry": "local",
      "note": "Grated pear feeds the ferment and rounds off the harsh edge. Sub: 1/2 grated apple."
    },
    {
      "id": "jc-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "jc-06",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "jc-07",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Pick over the chive flowers, discarding any stems or fully opened blooms. Rinse quickly, then spread on a clean towel and air-dry completely for at least 1 hour.",
      "textZh": "择去韭菜花的硬梗和已完全开放的朵。快速冲洗后摊在干净布上，彻底晾干至少1小时。",
      "zhHint": "韭菜花洗净后彻底晾干",
      "stateNote": {
        "visual": "Florets look matte and separated with no visible water film",
        "visualZh": "花蕾呈哑光、颗颗分明，表面无水膜",
        "timeRef": "1 hour",
        "timeRefZh": "1 小时",
        "signal": "A handful feels dry, not cool and damp"
      },
      "tip": "Any remaining water will make the ferment go mouldy instead of sour."
    },
    {
      "text": "Pound the chive flowers with coarse salt in a mortar, or pulse in a food processor, until you have a coarse, wet, chunky paste rather than a smooth puree.",
      "textZh": "韭菜花加粗盐在石臼中捣烂，或用料理机点动打碎，成粗颗粒的湿润酱泥，而非细腻泥状。",
      "zhHint": "捣成粗颗粒湿酱泥",
      "stateNote": {
        "visual": "Paste is coarse and bright green with visible flecks of flower and salt crystals dissolving",
        "visualZh": "酱体粗糙鲜绿，可见花蕾碎粒，盐粒正在溶化",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Mixture releases its own juice and holds together when pressed"
      }
    },
    {
      "text": "Stir in grated Asian pear, minced ginger and sugar until evenly distributed.",
      "textZh": "拌入磨碎的沙梨、姜末和白糖，搅拌至均匀分布。",
      "zhHint": "拌入梨泥姜末和糖",
      "stateNote": {
        "visual": "Paste lightens slightly and looks glossy from the pear juice",
        "visualZh": "酱体颜色略变浅，因梨汁而泛出光泽",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "No streaks of white pear or pale ginger remain"
      },
      "tip": "The pear is not for sweetness but to feed a clean, fast ferment."
    },
    {
      "text": "Pack the paste tightly into a sterilised jar, pressing down so no air pockets remain and the brine rises above the solids. Leave 3 cm of headspace.",
      "textZh": "把酱料紧实装入消毒玻璃罐，压实排出空气，让渗出的汁水没过酱体，顶部留3厘米空隙。",
      "zhHint": "压实装罐，汁水要没过酱体",
      "stateNote": {
        "visual": "Solids sit fully submerged under a thin layer of pale green brine",
        "visualZh": "酱体完全浸在薄薄一层浅绿汁水之下",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Tilting the jar shows no dry pockets or trapped bubbles"
      }
    },
    {
      "text": "Cover loosely and leave at room temperature for 3 days until small bubbles appear and the smell turns pleasantly sour.",
      "textZh": "松盖室温放置3天，至出现细小气泡、气味转为宜人的酸香。",
      "zhHint": "室温发酵3天至起细泡",
      "stateNote": {
        "visual": "Tiny bubbles rise along the jar wall; colour softens from bright green to olive",
        "visualZh": "罐壁冒出细小气泡，颜色从鲜绿柔和为橄榄绿",
        "timeRef": "3 days",
        "timeRefZh": "3 天",
        "signal": "Aroma is tangy and fruity-sour, never putrid or mouldy"
      },
      "tip": "If you see any fuzzy white or black growth on the surface, discard the whole jar."
    },
    {
      "text": "Stir in light soy sauce and sesame oil, seal tightly, and refrigerate for at least 1 week before using. Keeps 6 months.",
      "textZh": "拌入生抽和香油，密封冷藏至少1周后使用。可保存6个月。",
      "zhHint": "拌酱油香油密封冷藏",
      "stateNote": {
        "visual": "Deep olive-green paste with a thin amber oil layer; texture is spoonable",
        "visualZh": "深橄榄绿酱体，表面一层琥珀色薄油，质地可用勺舀起",
        "timeRef": "1 week rest",
        "timeRefZh": "静置1周",
        "signal": "Flavour is salty, sharply green and savoury with no raw harshness"
      },
      "tip": "Classic with hot pot lamb, or thinned with a little water as a noodle sauce."
    }
  ],
  "tips": [
    "Everything must be bone dry before it goes in the jar.",
    "Use non-iodised salt so the ferment develops properly.",
    "Discard immediately if you see fuzzy mould rather than flat brine bubbles."
  ],
  "tipsZh": [
    "所有器具和原料入罐前必须干透。",
    "用不含碘的粗盐，发酵才顺利。",
    "若表面长出毛状霉斑（不是扁平气泡），整罐丢弃。"
  ],
  "relatedSlugs": [
    "garlic-clam-with-chives",
    "sesame-sauce-dipping-sauce",
    "dry-chili-dipping-bowl"
  ],
  "image": "/images/recipes/dry-chili-dipping-bowl.webp"
};
