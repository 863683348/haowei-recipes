import type { Recipe } from "@/lib/types";

/** Fish Fillet Congee (鱼片粥) — Day batch */
export const fish_fillet_congee: Recipe = {
  "id": "fish-fillet-congee",
  "slug": "fish-fillet-congee",
  "titleEn": "Fish Fillet Congee",
  "titleZh": "鱼片粥",
  "pinyin": "yú piàn zhōu",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version marinates the fish briefly and slips it into the pot at the table so it stays silky; restaurant versions keep a pot of base congee on the stove all day and poach fish to order in a small strainer.",
  "versionNoteZh": "家常版把鱼片稍腌后直接下锅，吃多少煮多少，保持嫩滑；餐厅版常备一锅粥底，用小笊篱按单现烫鱼片。",
  "tags": [
    "45-min",
    "congee",
    "breakfast",
    "light",
    "cantonese"
  ],
  "dietary": [
    "none"
  ],
  "story": "In Guangdong this is what you eat at 10 p.m. after a long day — the congee is cooked loose and plain first, then the raw fish is laid on top and cooked by nothing but the heat of the porridge itself. My grandmother insisted the fillet had to be sliced thin enough to see the bowl through it, which is the only real secret to the dish.",
  "storyZh": "在广东，这是深夜十点收工时吃的东西——先把粥底煮得稀薄清淡，再把生鱼片铺在上面，只靠粥本身的热度把鱼烫熟。我外婆坚持鱼片要切得能透过它看见碗底，这是这道菜唯一的秘诀。",
  "ingredients": [
    {
      "id": "ff-01",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "duǎn lì bái mǐ",
      "amountMetric": "90 g",
      "amountUS": "½ cup",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse until the water runs clear, then soak 30 minutes; do not drain the soaking water",
      "noteZh": "淘洗至水清后浸泡30分钟，泡米水不要倒掉"
    },
    {
      "id": "ff-02",
      "nameEn": "white fish fillet, thinly sliced against the grain",
      "nameZh": "白肉鱼片，逆纹切薄片",
      "pinyin": "yú piàn",
      "amountMetric": "280 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Tilapia, cod or grass carp all work; ask for it sliced 'hot-pot thin' at an Asian fish counter",
      "noteZh": "罗非鱼、鳕鱼或草鱼均可；在亚洲超市鱼档请师傅切『火锅薄片』",
      "termKey": "white-fish"
    },
    {
      "id": "ff-03",
      "nameEn": "fresh ginger, finely shredded",
      "nameZh": "鲜姜，切细丝",
      "pinyin": "jiāng sī",
      "amountMetric": "15 g",
      "amountUS": "1½ tbsp shredded",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ff-04",
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
      "id": "ff-05",
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
      "id": "ff-06",
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
      "id": "ff-07",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "ff-08",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Rinse the rice until the runoff is clear, then soak it in 1.2 L (5 cups) cold water for 30 minutes. Keep the soaking water.",
      "textZh": "大米淘洗至水清，加1.2升冷水浸泡30分钟，保留泡米水。",
      "zhHint": "淘净泡透",
      "stateNote": {
        "visual": "Grains look chalky white and opaque; the water turns faintly milky",
        "visualZh": "米粒粉白不透明，水略带乳白",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "low",
        "signal": "A grain crushes easily between your fingernails",
        "signalZh": "指甲轻掐米粒即碎"
      }
    },
    {
      "text": "Toss the fish slices with half the ginger, 1 tsp of the soy sauce and the cornstarch. Rest 10 minutes in the fridge.",
      "textZh": "鱼片加一半姜丝、1茶匙生抽与淀粉抓匀，冷藏静置10分钟。",
      "zhHint": "鱼片先腌",
      "stateNote": {
        "visual": "Fish looks glossy and slightly slippery, each slice separate and translucent at the thin edges",
        "visualZh": "鱼片油亮微滑、片片分明，薄处呈半透明",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "A slice drapes over your finger without tearing",
        "signalZh": "鱼片能搭在手指上下垂而不断裂"
      }
    },
    {
      "text": "Bring the rice and soaking water to a boil over high heat, then drop to medium-low and simmer uncovered for 25 minutes, stirring every 5 minutes.",
      "textZh": "米与泡米水大火烧沸后转中小火，不加盖煮25分钟，每5分钟搅一次。",
      "zhHint": "沸后转小火",
      "stateNote": {
        "visual": "Grains have burst open into soft flowers; the liquid is thick and cloudy white",
        "visualZh": "米粒煮开成柔软花状，汤汁浓稠乳白",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "medium-low",
        "signal": "Spoon scrapes the pot bottom with slight resistance — stir before it catches",
        "signalZh": "勺子刮锅底略有阻力——在粘底前搅动"
      }
    },
    {
      "text": "Season the congee base with the remaining soy sauce and half the white pepper. It should taste slightly too salty on its own, because the fish is unsalted.",
      "textZh": "粥底用剩余生抽与一半白胡椒调味；单独尝应略偏咸，因为鱼片本身没盐。",
      "zhHint": "粥底略偏咸",
      "stateNote": {
        "visual": "Congee is ivory and glossy, bubbling in slow thick blobs",
        "visualZh": "粥体象牙白有光泽，缓慢冒出浓稠气泡",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "Bubbles break on the surface with a soft 'plop' rather than a hiss",
        "signalZh": "表面气泡以轻柔『扑』声破裂，而非嘶嘶声"
      }
    },
    {
      "text": "Scatter the fish slices over the surface in a single layer. Do not stir. Cover and let stand off the heat for 3 minutes, then stir once, gently.",
      "textZh": "鱼片单层铺在粥面上，不要搅动；加盖离火静置3分钟，再轻轻搅一次。",
      "zhHint": "铺面不搅",
      "stateNote": {
        "visual": "Fish turns from translucent pink-grey to opaque white, edges just set",
        "visualZh": "鱼片由半透明粉灰转为不透明白，边缘刚刚凝固",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "A slice flakes into large clean pieces when nudged with a spoon",
        "signalZh": "用勺轻推，鱼片裂成干净大块"
      }
    },
    {
      "text": "Stir in the remaining ginger, the sesame oil and the rest of the white pepper. Ladle into bowls and finish with scallion. Serve immediately.",
      "textZh": "拌入剩余姜丝、香油与剩余白胡椒，盛碗后撒葱花，趁热即食。",
      "zhHint": "关火撒葱花",
      "stateNote": {
        "visual": "Ivory congee with white fish flakes, pale ginger threads and green scallion",
        "visualZh": "象牙白粥中有白色鱼片、浅色姜丝与绿色葱花",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "A thin glossy film covers the surface and the aroma is clean and sweet, not fishy",
        "signalZh": "表面覆薄薄光泽，气味干净带甜香，无腥味"
      }
    }
  ],
  "tips": [
    "Freeze the fish for 20 minutes before slicing — a firm, half-frozen fillet slices paper-thin without shredding.",
    "Never boil the fish in the congee. The residual heat of a thick porridge is enough, and boiling turns it rubbery.",
    "Add a spoonful of the marinade to a bowl of hot congee to test the seasoning before adding the raw fish."
  ],
  "tipsZh": [
    "切鱼片前先冷冻20分钟——半硬的鱼身能切得薄如纸而不散碎。",
    "千万不要把鱼片放进粥里煮。浓粥的余温足够烫熟，一煮就变橡皮。",
    "下生鱼前，先舀一勺粥试试腌料的咸淡再调整。"
  ],
  "relatedSlugs": [
    "pidan-shourou-congee",
    "tingzai-congee"
  ],
  "image": "/images/recipes/tingzai-congee.webp"
};
