import type { Recipe } from "@/lib/types";

/** Millet Congee (小米粥) — Day batch */
export const millet_congee: Recipe = {
  "id": "millet-congee",
  "slug": "millet-congee",
  "titleEn": "Millet Congee",
  "titleZh": "小米粥",
  "pinyin": "xiǎo mǐ zhōu",
  "cuisine": "北方菜",
  "cuisineEn": "Northern Chinese",
  "region": "Shanxi",
  "regionZh": "山西",
  "difficulty": "easy",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version cooks it thick enough to coat the spoon and tops it with the golden 'oil skin' that forms on the surface; restaurant versions serve it much looser, almost drinkable, as a palate cleanser between rich dishes.",
  "versionNoteZh": "家常版煮到能挂勺的稠度，表面那层金色『米油』是精华；餐厅版煮得极稀近乎可饮，用来在浓味菜之间清口。",
  "tags": [
    "40-min",
    "congee",
    "breakfast",
    "vegetarian",
    "gluten-free"
  ],
  "dietary": [
    "vegetarian",
    "gluten-free"
  ],
  "story": "Across northern China millet congee is the first solid food a baby eats and the last thing a grandmother asks for. Shanxi cooks judge a pot by the 'millet oil' — the golden film that forms on top as it cools — and will tell you that if you didn't get the oil, you didn't make congee, you made millet soup.",
  "storyZh": "在整个北方，小米粥是婴儿吃的第一口固体食物，也是老人最后想吃的东西。山西人判断一锅粥好坏看『米油』——放凉后表面结出的那层金色薄膜。他们告诉你：没有米油，那不叫粥，那叫小米汤。",
  "ingredients": [
    {
      "id": "mc-01",
      "nameEn": "foxtail millet",
      "nameZh": "小米",
      "pinyin": "xiǎo mǐ",
      "amountMetric": "100 g",
      "amountUS": "½ cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Sold as 小米 in Asian markets and as 'hulled millet' in health-food shops; do not substitute birdseed millet, which is a different variety with a dark hull",
      "noteZh": "亚洲超市标『小米』，健康食品店标 hulled millet；不要用带深色壳的鸟食小米"
    },
    {
      "id": "mc-02",
      "nameEn": "short-grain white rice",
      "nameZh": "短粒白米",
      "pinyin": "duǎn lì bái mǐ",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "staple",
      "pantry": "local",
      "note": "A small handful thickens the body without changing the flavour",
      "noteZh": "一小把即可增加稠度，不影响味道"
    },
    {
      "id": "mc-03",
      "nameEn": "goji berries",
      "nameZh": "枸杞",
      "pinyin": "gǒu qǐ",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rinse briefly; soaking makes them mushy and dull",
      "noteZh": "快速冲洗即可，久泡会软烂失色"
    },
    {
      "id": "mc-04",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adjust to taste, or omit entirely for a savoury pot",
      "noteZh": "按口味增减；做咸粥可完全不放",
      "termKey": "rock-sugar"
    },
    {
      "id": "mc-05",
      "nameEn": "fresh ginger, 2 thin slices",
      "nameZh": "鲜姜，切2薄片",
      "pinyin": "jiāng piàn",
      "amountMetric": "6 g",
      "amountUS": "2 slices",
      "category": "produce",
      "pantry": "local",
      "note": "Optional but traditional — it cuts the grassy note; fish it out before serving",
      "noteZh": "可选但传统——去青涩味，盛出前捞出",
      "termKey": "ginger"
    },
    {
      "id": "mc-06",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "other",
      "pantry": "local",
      "note": "A few drops keep the pot from boiling over and help the 'oil skin' form",
      "noteZh": "几滴可防溢锅，并帮助米油结皮"
    }
  ],
  "steps": [
    {
      "text": "Rinse the millet once, briefly, in cold water and drain through a fine sieve. Do not rinse more than once or you lose the surface starch.",
      "textZh": "小米用冷水快速淘洗一次，用细筛沥干；不要反复淘洗，会洗掉表层淀粉。",
      "zhHint": "只淘一次",
      "stateNote": {
        "visual": "Grains are tiny, hard and bright golden-yellow; the runoff is only lightly cloudy",
        "visualZh": "米粒细小坚硬、呈明亮金黄，淘洗水只略浑浊",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "No grit or dark husks remain in the sieve",
        "signalZh": "筛中无沙粒或深色壳屑"
      }
    },
    {
      "text": "Bring 1.4 L (6 cups) water to a rolling boil with the ginger and oil, then add the millet and rice in a slow stream while stirring.",
      "textZh": "1.4升水加姜片与油大火滚沸，边搅边缓缓冲入小米与大米。",
      "zhHint": "滚水下米",
      "stateNote": {
        "visual": "Water is at a full rolling boil with large breaking bubbles before the grain goes in",
        "visualZh": "下米前水完全滚沸，翻起大泡",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Steam rises in a steady column and the surface never settles flat",
        "signalZh": "蒸汽稳定成柱上升，水面始终不平静"
      }
    },
    {
      "text": "Boil uncovered over medium-high heat for 10 minutes, stirring every couple of minutes so nothing settles.",
      "textZh": "中大火不加盖煮10分钟，隔一两分钟搅一次，防止沉底。",
      "zhHint": "敞盖滚煮",
      "stateNote": {
        "visual": "A pale foam lifts to the rim and the grains move freely in the pot",
        "visualZh": "浅色浮沫涌向锅边，米粒在锅中自由翻滚",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-high",
        "signal": "Grains no longer click against the spoon — they have softened through",
        "signalZh": "米粒不再与勺子碰撞出声——已煮透变软"
      }
    },
    {
      "text": "Drop to the lowest heat, cover with the lid slightly ajar, and simmer 20 minutes until the millet has burst and the liquid has thickened.",
      "textZh": "转最小火，锅盖留缝加盖，焖煮20分钟至小米开花、汤汁变稠。",
      "zhHint": "小火焖煮",
      "stateNote": {
        "visual": "Grains have split open; the porridge is golden and thick enough to hold a spoon trail",
        "visualZh": "米粒开花，粥体金黄浓稠，勺痕可短暂留存",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "low",
        "signal": "Bubbles break slowly and thickly, like lava, instead of boiling",
        "signalZh": "气泡浓稠缓慢破裂，如岩浆状，而非沸腾翻滚"
      }
    },
    {
      "text": "Stir in the rock sugar and goji berries and cook 3 minutes more, until the sugar has dissolved completely.",
      "textZh": "加入冰糖与枸杞再煮3分钟，至糖完全溶化。",
      "zhHint": "糖枸杞后放",
      "stateNote": {
        "visual": "Goji berries have plumped to round red beads; no sugar crystals remain on the spoon",
        "visualZh": "枸杞泡发成圆润红珠，勺上无糖粒残留",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "The porridge tastes round and sweet with no granular texture on the tongue",
        "signalZh": "粥味圆润香甜，舌尖无颗粒感"
      }
    },
    {
      "text": "Fish out the ginger, turn off the heat and let the pot stand covered for 5 minutes so the golden 'millet oil' skin forms on top. Serve hot.",
      "textZh": "捞出姜片，关火加盖静置5分钟，让表面结出金色米油皮，趁热食用。",
      "zhHint": "静置结米油",
      "stateNote": {
        "visual": "A thin golden, slightly wrinkled film covers the whole surface",
        "visualZh": "表面覆有一层金色微皱薄膜",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "The film wrinkles when you tilt the pot",
        "signalZh": "倾斜锅体时薄膜起皱"
      }
    }
  ],
  "tips": [
    "Always add millet to boiling water, never cold — starting cold makes it gluey and it will scorch on the bottom.",
    "Rinse once only. The powdery starch on the grain is exactly what produces the golden 'millet oil'.",
    "Leftover congee sets solid in the fridge; reheat with a splash of water over low heat, stirring until it loosens."
  ],
  "tipsZh": [
    "小米一定要滚水下锅，冷水下锅会发黏糊底。",
    "只淘洗一次——米粒表面的淀粉粉正是结出米油的关键。",
    "剩粥冷藏后会完全凝固；回锅加少许水小火搅拌至重新化开。"
  ],
  "relatedSlugs": [
    "pumpkin-congee",
    "eight-treasure-congee"
  ],
  "image": "/images/recipes/jidi-congee.webp"
};
