import type { Recipe } from "@/lib/types";

/** Chinese Yam and Lean Pork Congee (山药瘦肉粥) — Day batch */
export const yam_lean_pork_congee: Recipe = {
  "id": "yam-lean-pork-congee",
  "slug": "yam-lean-pork-congee",
  "titleEn": "Chinese Yam and Lean Pork Congee",
  "titleZh": "山药瘦肉粥",
  "pinyin": "shān yào shòu ròu zhōu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 50,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version simmers yam with the rice so it partly dissolves and sweetens the pot; restaurant versions add yam later so the pieces keep a crisp bite.",
  "versionNoteZh": "家常版把山药与米同煮，让其部分化开增甜；餐厅版后放山药，保留爽脆口感。",
  "tags": [
    "50-min",
    "congee",
    "comfort",
    "breakfast",
    "light"
  ],
  "dietary": [
    "none"
  ],
  "story": "This was my mother's 'stomach day' congee — whenever anyone in the family came down with a cold or had eaten too much rich food the night before, she'd put on a pot of this and call it medicine. The yam breaks down into the rice water and gives the whole bowl a quiet, milky sweetness.",
  "storyZh": "这是我妈的『养胃粥』——家里谁感冒了，或前一晚吃得太油腻，她就煮一锅这个，管它叫药。山药化进米汤里，让整碗粥带上一种安静的乳甜。",
  "ingredients": [
    {
      "id": "ys-01",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "duǎn lì bái mǐ",
      "amountMetric": "100 g",
      "amountUS": "½ cup",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse until the water runs clear, then soak 30 minutes",
      "noteZh": "淘洗至水清后浸泡30分钟"
    },
    {
      "id": "ys-02",
      "nameEn": "lean pork loin, thinly sliced",
      "nameZh": "猪里脊，切薄片",
      "pinyin": "zhū lǐ jǐ piàn",
      "amountMetric": "150 g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-loin"
    },
    {
      "id": "ys-03",
      "nameEn": "Chinese yam (nagaimo), peeled and cut into 2 cm chunks",
      "nameZh": "山药，去皮切2厘米块",
      "pinyin": "shān yào",
      "amountMetric": "250 g",
      "amountUS": "8 oz",
      "category": "produce",
      "pantry": "asian",
      "note": "Wear gloves when peeling — the sap itches. Available frozen and peeled in most Asian markets",
      "noteZh": "去皮戴手套，黏液会痒；多数亚洲超市有冷冻去皮山药"
    },
    {
      "id": "ys-04",
      "nameEn": "fresh ginger, finely shredded",
      "nameZh": "鲜姜，切细丝",
      "pinyin": "jiāng sī",
      "amountMetric": "12 g",
      "amountUS": "1 tbsp shredded",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ys-05",
      "nameEn": "scallion, thinly sliced",
      "nameZh": "小葱，切细",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ys-06",
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
      "id": "ys-07",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "diàn fěn",
      "amountMetric": "5 g",
      "amountUS": "½ tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "ys-08",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Rinse the rice until the runoff is clear, then soak it in 1 L (4¼ cups) cold water for 30 minutes. Do not drain.",
      "textZh": "大米淘洗至水清，加1升冷水浸泡30分钟，不要倒掉泡米水。",
      "zhHint": "淘净泡透",
      "stateNote": {
        "visual": "Rice grains look chalky-white and opaque, water is slightly milky",
        "visualZh": "米粒呈粉白不透明，水略带乳白",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "low",
        "signal": "A grain crushes easily between your fingernails",
        "signalZh": "用指甲轻掐米粒即碎"
      }
    },
    {
      "text": "Toss pork slices with cornstarch, half the ginger and 1 tsp of the soy sauce. Rest 10 minutes while the rice comes to a boil.",
      "textZh": "猪肉片加淀粉、一半姜丝与1茶匙生抽抓匀，静置10分钟，同时把米汤烧开。",
      "zhHint": "肉片先腌",
      "stateNote": {
        "visual": "Pork looks glossy and slightly slippery, each slice separate",
        "visualZh": "肉片油亮微滑，片片分明",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "Slices feel silky rather than sticky when you press them",
        "signalZh": "按压时手感爽滑而非发黏"
      }
    },
    {
      "text": "Bring the rice and its soaking water to a boil over high heat, then drop to medium-low and simmer uncovered for 20 minutes, stirring every 5 minutes.",
      "textZh": "大米连同泡米水大火烧沸，转中小火不加盖煮20分钟，每5分钟搅一次。",
      "zhHint": "沸后转小火",
      "stateNote": {
        "visual": "Grains begin to split at the ends; the water turns cloudy and starchy",
        "visualZh": "米粒两端开始裂开，水变浑浊带浆",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "medium-low",
        "signal": "Spoon scrapes the pot bottom with slight resistance — stir before it catches",
        "signalZh": "勺子刮锅底略有阻力——在粘底前搅动"
      }
    },
    {
      "text": "Add the yam chunks and remaining ginger. Simmer 15 minutes, stirring gently, until the yam is tender at the edges and the congee is creamy.",
      "textZh": "下山药块与剩余姜丝，小火煮15分钟并轻搅，至山药边缘软糯、粥体绵滑。",
      "zhHint": "山药中途下锅",
      "stateNote": {
        "visual": "Yam pieces look waxy and slightly translucent at the corners; congee is thick and ivory",
        "visualZh": "山药块边角发亮微透，粥体浓稠呈象牙白",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "medium-low",
        "signal": "A spoon stands briefly in the centre of the pot before slowly leaning over",
        "signalZh": "勺子能在锅中央短暂立住再慢慢歪倒"
      }
    },
    {
      "text": "Scatter in the pork slices and stir to separate. Cook 3–4 minutes until just opaque — do not overcook.",
      "textZh": "撒入猪肉片并搅散，煮3–4分钟至刚变白即可，不要久煮。",
      "zhHint": "肉片最后下",
      "stateNote": {
        "visual": "Pork is pale and tender, suspended in the creamy porridge",
        "visualZh": "肉片浅白细嫩，悬浮在绵滑粥中",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium-low",
        "signal": "No pink remains and the slices still yield easily to a spoon",
        "signalZh": "无粉色残留，勺子轻压即断"
      }
    },
    {
      "text": "Season with remaining soy sauce and white pepper. Turn off the heat, stir in scallion, and serve hot.",
      "textZh": "以剩余生抽与白胡椒粉调味，关火后拌入葱花，趁热食用。",
      "zhHint": "关火撒葱花",
      "stateNote": {
        "visual": "Ivory congee with pale yam chunks, tender pork slivers and green scallion",
        "visualZh": "象牙白粥中有浅色山药块、细嫩肉片与绿色葱花",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Surface has a thin glossy film and the aroma is clean, starchy-sweet",
        "signalZh": "表面有薄薄一层光泽，气味干净带淀粉甜香"
      }
    }
  ],
  "tips": [
    "Grate half the yam instead of cubing it — it dissolves and makes the congee naturally creamier.",
    "Use leftover rice to skip the soaking: simmer 20 minutes total instead of 35.",
    "Add pork in the last 4 minutes only, or it will turn grainy and dry."
  ],
  "tipsZh": [
    "把一半山药擦成泥而不是切块，会化进粥里自然变稠滑。",
    "用剩米饭可省去浸泡：总煮制时间从35分钟减到20分钟。",
    "肉片只在最后4分钟下锅，否则会又干又柴。"
  ],
  "relatedSlugs": [
    "pidan-shourou-congee",
    "chicken-congee"
  ],
  "image": "/images/recipes/huai-yang-yam-chicken-soup.webp"
};
