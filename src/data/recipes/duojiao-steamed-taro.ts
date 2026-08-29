import type { Recipe } from "@/lib/types";

/** Chopped Chili Steamed Taro (剁椒蒸芋头) — Seed batch */
export const duojiao_steamed_taro: Recipe = {
  "id": "duojiao-ying-tou",
  "slug": "duojiao-steamed-taro",
  "titleEn": "Chopped Chili Steamed Taro",
  "titleZh": "剁椒蒸芋头",
  "pinyin": "duò jiāo zhēng yù tóu",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Xiangtan",
  "regionZh": "湘潭",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips frying—taro is parboiled then steamed with chili for creamy, unctuous texture without oil heaviness.",
  "versionNoteZh": "家常版不油炸，芋头先焯水再蒸，绵密润泽不腻。",
  "tags": [
    "30-min",
    "vegetarian",
    "side-dish"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My grandmother in Xiangtan served this every Mid-Autumn Festival—it reminded her of harvesting taro from her family’s muddy field near the Lianshui River, where she’d mix freshly dug tubers with last year’s fermented chili.",
  "storyZh": "我湘潭奶奶每逢中秋节必做这道菜，她说这让她想起在涟水河边自家泥田里挖芋头的日子，那时她总用去年腌好的剁椒拌新挖的芋头。",
  "ingredients": [
    {
      "id": "yt-01",
      "nameEn": "taro root (medium, peeled)",
      "nameZh": "芋头（中等大小，去皮）",
      "pinyin": "yù tóu",
      "amountMetric": "300 g",
      "amountUS": "2 cups cubed (2.5 cm)",
      "category": "staple",
      "pantry": "local",
      "note": "Choose firm, heavy taro with no soft spots or browning.",
      "noteZh": "选沉实、无软斑褐变者。"
    },
    {
      "id": "yt-02",
      "nameEn": "homemade Hunan chopped chili (duōjiāo)",
      "nameZh": "湖南自制剁椒",
      "pinyin": "hún nán zì zhì duò jiāo",
      "amountMetric": "80 g",
      "amountUS": "⅓ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: Yang Jiang brand 'Taro-Safe Chopped Chili' (low-salt, no garlic added).",
      "noteZh": "替代：阳江牌‘配芋剁椒’（低盐、无蒜）。"
    },
    {
      "id": "yt-03",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "15 g",
      "amountUS": "2 cloves, minced",
      "category": "produce",
      "pantry": "local",
      "note": "Use raw garlic—cooking dulls its sharpness needed to cut through taro’s starch.",
      "noteZh": "用生蒜末——熟制会削弱其穿透芋头淀粉的辛香。",
      "termKey": "garlic"
    },
    {
      "id": "yt-04",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "",
      "noteZh": "",
      "termKey": "sesame-oil"
    },
    {
      "id": "yt-05",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Cut peeled taro into 2.5 cm cubes. Place in a pot, cover with cold water, add 1 tsp salt, and bring to boil. Parboil 6 minutes until just tender but still holding shape.",
      "textZh": "去皮芋头切2.5厘米方块，冷水下锅加1茶匙盐，煮沸后焯6分钟至刚断生、仍保持形状。",
      "zhHint": "焯水至刚断生",
      "stateNote": {
        "visual": "Cubes intact, edges slightly translucent, no mushiness",
        "visualZh": "块形完整，边缘微透，无软烂",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "high",
        "signal": "Knife tip meets gentle resistance",
        "signalZh": "刀尖轻触有微阻力"
      }
    },
    {
      "text": "Drain thoroughly and spread taro cubes evenly in a shallow heatproof dish. Pat dry with paper towel to remove surface moisture.",
      "textZh": "彻底沥干，平铺于浅蒸盘中，用厨房纸吸干表面水分。",
      "zhHint": "吸干表面水",
      "stateNote": {
        "visual": "Dry, matte surface with no glistening droplets",
        "visualZh": "表面哑光，无水珠反光",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No water beads form when tapped",
        "signalZh": "轻敲无水珠聚拢"
      }
    },
    {
      "text": "Mix chopped chili, minced garlic, sesame oil, and white pepper in a small bowl. Spoon mixture evenly over taro, pressing gently to coat each cube.",
      "textZh": "将剁椒、蒜末、香油、白胡椒粉拌匀，铺于芋头上，轻压使每块裹匀。",
      "zhHint": "轻压裹匀",
      "stateNote": {
        "visual": "Each cube coated with glossy red paste, no dry patches",
        "visualZh": "每块芋头裹满油亮红酱，无干斑",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Red color evenly distributed",
        "signalZh": "红色均匀分布"
      }
    },
    {
      "text": "Steam over medium-high heat for 12 minutes, until taro is creamy inside and slightly caramelized at edges.",
      "textZh": "中高火蒸12分钟，至芋头内里绵软、边缘微焦糖化。",
      "zhHint": "中高火蒸透",
      "stateNote": {
        "visual": "Slightly golden edges; cubes yield softly to spoon pressure",
        "visualZh": "边缘微泛金黄；勺压即软",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "medium-high",
        "signal": "Aroma of toasted taro and chili fills kitchen",
        "signalZh": "厨房弥漫芋头与剁椒烘烤香气"
      }
    },
    {
      "text": "Let rest 2 minutes off heat. Stir gently once before serving to redistribute juices.",
      "textZh": "关火焖2分钟，上桌前轻拌一次，使汁水均匀。",
      "zhHint": "焖2分钟再拌",
      "stateNote": {
        "visual": "Juices pooling faintly between cubes, not watery",
        "visualZh": "汁水微聚于块间，不稀薄",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Steam has mostly dissipated but aroma lingers",
        "signalZh": "蒸汽基本散尽，余香尚存"
      }
    }
  ],
  "tips": [
    "Wear gloves while peeling taro—it causes itchiness.",
    "Do not skip the parboil: raw taro is toxic and won’t absorb chili properly.",
    "Best served warm—not hot, not cold—for ideal mouthfeel."
  ],
  "tipsZh": [
    "削芋头时戴手套，防手痒。",
    "焯水不可省：生芋有毒且无法吸味。",
    "温热食用最佳——过烫或过凉均损口感。"
  ],
  "relatedSlugs": [
    "duojiao-fish-head"
  ],
  "image": "/images/recipes/duojiao-steamed-taro.webp"
};
