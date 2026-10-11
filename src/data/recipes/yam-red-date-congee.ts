import type { Recipe } from "@/lib/types";

/** Chinese Yam and Red Date Congee (山药红枣粥) — Day batch */
export const yam_red_date_congee: Recipe = {
  "id": "yam-red-date-congee",
  "slug": "yam-red-date-congee",
  "titleEn": "Chinese Yam and Red Date Congee",
  "titleZh": "山药红枣粥",
  "pinyin": "shān yào hóng zǎo zhōu",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 50,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version pits the dates and simmers them with the rice so the sweetness spreads evenly; the restaurant version drops dates in whole at the end so each bowl gets one or two intact, sweet centres.",
  "versionNoteZh": "家常版把红枣去核与米同煮，甜味均匀散开；餐厅版最后整颗下枣，每碗能吃到一两颗完整的甜心。",
  "tags": [
    "50-min",
    "congee",
    "tonic",
    "vegetarian",
    "sweet"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "This is the bowl that appears in Chinese households in the first cold week of autumn — part breakfast, part tonic. Yam is considered neutral and strengthening in Chinese food therapy, red dates 'build the blood', and together they make a congee sweet enough to eat without any sugar at all if the dates are good.",
  "storyZh": "这是中国家庭入秋第一场冷天里出现的那碗粥——一半是早餐，一半是补品。中医食疗认为山药性平健脾、红枣补血，两者同煮，只要枣够好，不加糖也足够甜。",
  "ingredients": [
    {
      "id": "yr-01",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "duǎn lì bái mǐ",
      "amountMetric": "90 g",
      "amountUS": "½ cup",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse until clear, then soak 30 minutes in the cooking water",
      "noteZh": "淘洗至水清后用煮粥的水浸泡30分钟"
    },
    {
      "id": "yr-02",
      "nameEn": "Chinese yam (nagaimo), peeled and cut into 2 cm chunks",
      "nameZh": "山药，去皮切2厘米块",
      "pinyin": "shān yào",
      "amountMetric": "250 g",
      "amountUS": "8 oz",
      "category": "produce",
      "pantry": "asian",
      "note": "Wear gloves when peeling — the sap itches badly. Frozen peeled yam is a good shortcut",
      "noteZh": "去皮戴手套，黏液会痒；冷冻去皮山药是省事替代"
    },
    {
      "id": "yr-03",
      "nameEn": "dried red dates (jujube), pitted and halved",
      "nameZh": "红枣，去核对半",
      "pinyin": "hóng zǎo",
      "amountMetric": "40 g",
      "amountUS": "6–8 dates",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for plump, glossy, dark-red dates; dull wrinkled ones are old and will taste flat",
      "noteZh": "选饱满油亮深红色的枣；暗淡干瘪的是陈枣，味淡"
    },
    {
      "id": "yr-04",
      "nameEn": "goji berries",
      "nameZh": "枸杞",
      "pinyin": "gǒu qǐ",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Add at the very end — long cooking turns them sour and grey",
      "noteZh": "最后再放——久煮会发酸变灰"
    },
    {
      "id": "yr-05",
      "nameEn": "dried longan flesh",
      "nameZh": "桂圆肉",
      "pinyin": "guì yuán ròu",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Optional; adds a deep honeyed note. Available in Asian markets near the dried fruits",
      "noteZh": "可选，增添醇厚蜜香；亚洲超市干果区有售"
    },
    {
      "id": "yr-06",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Taste first — good dates may make this unnecessary",
      "noteZh": "先尝味——好枣可能已足够甜，无需加糖",
      "termKey": "rock-sugar"
    }
  ],
  "steps": [
    {
      "text": "Rinse the rice until the runoff is clear, then soak it in 1.2 L (5 cups) cold water for 30 minutes. Do not drain.",
      "textZh": "大米淘洗至水清，加1.2升冷水浸泡30分钟，不要倒掉。",
      "zhHint": "淘净泡透",
      "stateNote": {
        "visual": "Grains look chalky and opaque; the water turns faintly milky",
        "visualZh": "米粒粉白不透明，水略带乳白",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "low",
        "signal": "A grain crushes easily between your fingernails",
        "signalZh": "指甲轻掐米粒即碎"
      }
    },
    {
      "text": "Bring the rice and its soaking water to a boil over high heat with the red dates and longan, then drop to medium-low and simmer 20 minutes.",
      "textZh": "米连泡米水加红枣、桂圆大火烧沸，转中小火煮20分钟。",
      "zhHint": "枣与米同煮",
      "stateNote": {
        "visual": "Dates have swollen plump and the liquid has taken on a pale amber tint",
        "visualZh": "红枣泡发饱满，汤汁呈淡琥珀色",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "medium-low",
        "signal": "A date splits easily when pressed against the pot with a spoon",
        "signalZh": "用勺把枣压向锅壁，能轻松压开"
      }
    },
    {
      "text": "Add the yam chunks. Simmer 15 minutes more, stirring gently every few minutes.",
      "textZh": "下山药块，再煮15分钟，每隔几分钟轻搅一次。",
      "zhHint": "山药中途下锅",
      "stateNote": {
        "visual": "Yam looks waxy and slightly translucent at the corners; some pieces have begun to fray at the edges",
        "visualZh": "山药块边角发亮微透，部分边缘开始散开",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-low",
        "signal": "A chunk yields to a spoon with light pressure but still holds its shape",
        "signalZh": "勺子轻压即入但仍保持块状"
      }
    },
    {
      "text": "Stir in the rock sugar and cook 3 minutes until fully dissolved. Taste and adjust — the congee should be gently sweet, not dessert-sweet.",
      "textZh": "加入冰糖煮3分钟至完全溶化。尝味调整——粥应清甜，而非甜品般甜腻。",
      "zhHint": "清甜不腻",
      "stateNote": {
        "visual": "No crystals remain on the spoon; the surface looks glossy and smooth",
        "visualZh": "勺上无糖粒，粥面光滑有光泽",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "The sweetness registers at the back of the tongue rather than coating the whole mouth",
        "signalZh": "甜味落在舌根而非糊满全口"
      }
    },
    {
      "text": "Turn off the heat and stir in the goji berries. Cover and let stand 5 minutes.",
      "textZh": "关火后拌入枸杞，加盖静置5分钟。",
      "zhHint": "关火放枸杞",
      "stateNote": {
        "visual": "Goji berries have softened to plump red beads but have not lost their colour",
        "visualZh": "枸杞泡软成红润珠粒，颜色未褪",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Berries are tender when bitten, with no hard dry centre",
        "signalZh": "咬开柔软，无干硬硬心"
      }
    },
    {
      "text": "Give the pot one last gentle stir to break up any yam that has thickened the base, then ladle into bowls and serve warm.",
      "textZh": "最后轻搅一次，把化开增稠的山药拌匀，盛碗温热食用。",
      "zhHint": "轻搅盛碗",
      "stateNote": {
        "visual": "Creamy amber-flecked congee with pale yam chunks and red date halves",
        "visualZh": "粥体绵滑带琥珀色斑点，有浅色山药块与红色枣瓣",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "A spoon stands briefly in the centre before slowly leaning over",
        "signalZh": "勺子能在锅中央短暂立住再慢慢歪倒"
      }
    }
  ],
  "tips": [
    "Peel yam under running water or with gloves on — the raw sap causes an itch that lasts for hours.",
    "Pit the dates. Whole un-pitted dates are considered 'heating' in Chinese food therapy and give a harsher sweetness.",
    "Add goji only after the heat is off; simmered goji turns grey and lends a sour edge to the whole pot."
  ],
  "tipsZh": [
    "山药要在流水下或戴手套去皮——生黏液引起的刺痒会持续数小时。",
    "红枣要去核。整颗带核的枣在食疗上被认为『上火』，甜味也更冲。",
    "枸杞必须关火后再放；久煮的枸杞发灰，还会让整锅带酸。"
  ],
  "relatedSlugs": [
    "yam-lean-pork-congee",
    "red-bean-congee"
  ],
  "image": "/images/recipes/huai-yang-yam-chicken-soup.webp"
};
