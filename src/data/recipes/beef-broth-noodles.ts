import type { Recipe } from "@/lib/types";

/** Beef Broth Noodles (牛肉汤面) — Day batch */
export const beef_broth_noodles: Recipe = {
  "id": "beef-broth-noodles",
  "slug": "beef-broth-noodles",
  "titleEn": "Beef Broth Noodles",
  "titleZh": "牛肉汤面",
  "pinyin": "niú ròu tāng miàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "medium",
  "timeMin": 60,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses one cut of beef for both the broth and the meat in the bowl, and accepts a slightly cloudy soup; restaurant versions simmer a separate soup bone for a clarified broth and braise the beef separately in a master stock.",
  "versionNoteZh": "家常版一块牛肉既煮汤又当浇头，汤色略浑也无妨；餐厅版另用牛骨吊清汤，牛肉在老卤中单独焖煮。",
  "tags": [
    "60-min",
    "noodles",
    "beef",
    "soup",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "Not to be confused with Lanzhou lamian or Taiwanese beef noodle — this is the plain home bowl: a piece of shank simmered with ginger, scallion and a tomato until the broth tastes of beef and nothing else, then poured over noodles with a handful of greens. It is what a Chinese parent makes on the first cold day of the year.",
  "storyZh": "别和兰州拉面或台式牛肉面混为一谈——这是最家常的一碗：一块牛腱加姜葱和一颗番茄慢炖，炖出只有牛肉味的清汤，浇在面上配一把青菜。中国父母在入冬头一个冷天就会煮它。",
  "ingredients": [
    {
      "id": "bb-01",
      "nameEn": "fresh wheat noodles",
      "nameZh": "鲜面条",
      "pinyin": "xiān miàn",
      "amountMetric": "280 g",
      "amountUS": "9 oz",
      "category": "staple",
      "pantry": "asian",
      "note": "Medium or wide fresh noodles; dried wide noodles need 1 extra minute",
      "noteZh": "中宽或宽鲜面；干宽面需多煮1分钟"
    },
    {
      "id": "bb-02",
      "nameEn": "beef shank or chuck, cut into 4 cm chunks",
      "nameZh": "牛腱子或牛肩肉，切4厘米块",
      "pinyin": "niú jiàn zi",
      "amountMetric": "500 g",
      "amountUS": "1 lb 2 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Shank gives clean slices and a fine broth; chuck is more forgiving if you overcook it",
      "noteZh": "牛腱切片整齐汤清；牛肩更耐煮，过火也不易柴"
    },
    {
      "id": "bb-03",
      "nameEn": "tomato, quartered",
      "nameZh": "番茄，切四瓣",
      "pinyin": "fān qié",
      "amountMetric": "150 g",
      "amountUS": "1 medium",
      "category": "produce",
      "pantry": "local",
      "note": "The quiet secret — it dissolves entirely and rounds out the broth without tasting of tomato",
      "noteZh": "暗藏的关键——它会完全化掉，让汤头圆润却不带番茄味",
      "termKey": "tomato"
    },
    {
      "id": "bb-04",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "鲜姜，切片",
      "pinyin": "jiāng piàn",
      "amountMetric": "15 g",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bb-05",
      "nameEn": "scallion, cut into lengths, white and green separated",
      "nameZh": "小葱，切段，葱白葱绿分开",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "bb-06",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "2 g",
      "amountUS": "2 pods",
      "category": "spice",
      "pantry": "asian",
      "note": "Two pods only — any more and it tastes like a braise, not a broth",
      "noteZh": "只放两颗——多了就成卤味而非清汤",
      "termKey": "star-anise"
    },
    {
      "id": "bb-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bb-08",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "For colour only; it is less salty than light soy",
      "noteZh": "只为上色，咸度低于生抽",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "bb-09",
      "nameEn": "baby bok choy, halved",
      "nameZh": "小白菜，剖半",
      "pinyin": "xiǎo bái cài",
      "amountMetric": "200 g",
      "amountUS": "3–4 heads",
      "category": "produce",
      "pantry": "asian",
      "termKey": "baby-bok-choy"
    },
    {
      "id": "bb-10",
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
      "text": "Put the beef in a pot, cover with cold water by 5 cm, and bring to a boil over high heat. Boil 2 minutes, then pour everything into a colander and rinse the meat under hot water.",
      "textZh": "牛肉冷水下锅，水面没过5厘米，大火烧沸后煮2分钟，连水倒入漏勺，用热水冲洗肉块。",
      "zhHint": "飞水去腥",
      "stateNote": {
        "visual": "Grey-brown scum coats the meat and the water is cloudy; after rinsing the chunks look clean and pink-brown",
        "visualZh": "肉块覆灰褐浮沫、水色浑浊；冲洗后肉块干净呈粉褐",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "No grey foam rises when you rinse, and the pot smells beefy rather than metallic",
        "signalZh": "冲洗时无灰沫浮起，锅中气味是肉香而非腥铁味"
      }
    },
    {
      "text": "Return the beef to a clean pot with 1.5 L (6¼ cups) hot water, ginger, scallion whites and star anise. Bring to a boil, then drop to the lowest heat.",
      "textZh": "牛肉放回净锅，加1.5升热水、姜片、葱白与八角，烧沸后转最小火。",
      "zhHint": "热水慢炖",
      "stateNote": {
        "visual": "Surface is almost still, with lazy bubbles rising at the edges only",
        "visualZh": "水面近乎静止，只有锅边缓缓冒出零星气泡",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "The broth ripples rather than boils — a rolling boil will make it cloudy and tough",
        "signalZh": "汤面只是微波荡漾而非翻滚——大沸会让汤浑肉紧"
      }
    },
    {
      "text": "Add the tomato quarters, cover with the lid slightly ajar, and simmer very gently for 40 minutes.",
      "textZh": "下番茄瓣，锅盖留缝加盖，极小火炖40分钟。",
      "zhHint": "番茄同炖",
      "stateNote": {
        "visual": "Tomato has completely collapsed into threads of skin; broth is clear amber with a few oil beads",
        "visualZh": "番茄完全化开只剩皮丝，汤色清亮琥珀带几粒油珠",
        "timeRef": "40 minutes",
        "timeRefZh": "40 分钟",
        "heat": "low",
        "signal": "A chopstick slides into a beef chunk with only light resistance",
        "signalZh": "筷子轻用力即可插入肉块"
      }
    },
    {
      "text": "Season with both soy sauces and the white pepper. Lift out the beef, slice it across the grain, and return the slices to the broth off the heat.",
      "textZh": "用生抽、老抽与白胡椒调味，捞出牛肉逆纹切片，关火后放回汤中。",
      "zhHint": "逆纹切片",
      "stateNote": {
        "visual": "Slices are rosy brown with visible grain running across the short side; no red juices run",
        "visualZh": "肉片玫瑰褐，可见纹理横贯短边，无血水流出",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "A slice tears easily along the grain with your fingers",
        "signalZh": "手指顺纹轻撕即开"
      }
    },
    {
      "text": "Cook the noodles in a separate pot of boiling water until just tender, adding the bok choy for the final 60 seconds. Drain both.",
      "textZh": "另锅宽水煮面至刚熟，最后60秒下小白菜，一起捞出沥干。",
      "zhHint": "面菜单煮",
      "stateNote": {
        "visual": "Noodles are swollen with no white core; bok choy stems are translucent jade",
        "visualZh": "面条胀起无白心，菜梗呈半透明青玉色",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "high",
        "signal": "A strand stretches without snapping; a stem bends without breaking",
        "signalZh": "面条拉伸不断，菜梗弯折不断"
      }
    },
    {
      "text": "Divide the noodles between deep bowls, arrange bok choy and beef on top, and ladle the boiling broth over everything. Finish with scallion greens.",
      "textZh": "面条分装深碗，摆上小白菜与牛肉，浇入滚烫汤汁，最后撒葱绿。",
      "zhHint": "浇汤撒葱",
      "stateNote": {
        "visual": "Clear amber broth with rosy beef slices, white noodles and bright green bok choy",
        "visualZh": "清亮琥珀汤中有玫瑰色牛肉片、白色面条与鲜绿小白菜",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Beef slices curl slightly at the edges the moment the hot broth hits them",
        "signalZh": "滚汤浇下瞬间，牛肉片边缘微微卷起"
      }
    }
  ],
  "tips": [
    "The blanching step is not optional — skipping it gives you a grey, metallic-tasting broth no amount of ginger will fix.",
    "Keep the simmer below a boil the whole time. A rolling boil emulsifies the fat and turns a clear broth cloudy.",
    "The tomato is a background note, not a flavour. It should dissolve completely and leave no tomato taste behind."
  ],
  "tipsZh": [
    "飞水这步不能省——跳过它汤色发灰带铁腥，加再多姜也救不回来。",
    "全程保持不沸。大滚会把脂肪乳化，清汤立刻变浑。",
    "番茄只是配角，不是味道。它应完全化掉，不留一点番茄味。"
  ],
  "relatedSlugs": [
    "lanzhou-lamian",
    "tomato-beef-noodles"
  ],
  "image": "/images/recipes/lanzhou-lamian.webp"
};
