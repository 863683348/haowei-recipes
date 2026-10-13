import type { Recipe } from "@/lib/types";

/** Milk Mantou (Steamed Milk Buns) (奶香馒头) — Day batch */
export const milk_mantou: Recipe = {
  "id": "milk-mantou",
  "slug": "milk-mantou",
  "titleEn": "Milk Mantou (Steamed Milk Buns)",
  "titleZh": "奶香馒头",
  "pinyin": "nǎi xiāng mántou",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "easy",
  "timeMin": 150,
  "servings": 10,
  "version": "family",
  "versionNote": "Home versions use whole milk and a long, cool first rise for a fine crumb. Northern bakery mantou is made with a stiff older dough worked through a sheeter, which gives a denser, almost chewy bite and a skin that peels off in one piece.",
  "versionNoteZh": "家常版用全脂牛奶加长时间低温一发，组织细腻；北方面点铺的馒头用偏硬的老面过压面机，口感更紧实几乎带嚼劲，外皮能整片撕下来。",
  "tags": [
    "steamed-buns",
    "make-ahead",
    "freezer-friendly",
    "kid-friendly"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Milk mantou is the version most Chinese families actually make, even though the purists insist on water and nothing else. The milk tenderises the crumb and softens the wheat edge, which is why it is also the version children will eat cold out of the steamer, standing at the counter.",
  "storyZh": "奶香馒头是大多数中国家庭真正会做的版本，尽管讲究派坚持只用清水。牛奶让组织更柔软、柔化了麦子的棱角，所以这也是小孩会站在灶台边直接从蒸锅里拿冷馒头吃的版本。",
  "ingredients": [
    {
      "id": "mm-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "500 g",
      "amountUS": "4 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Spoon and level, do not scoop straight from the bag",
      "noteZh": "用勺子舀入刮平，别直接从袋里铲"
    },
    {
      "id": "mm-02",
      "nameEn": "whole milk, warmed to 35°C",
      "nameZh": "全脂牛奶，加热至35°C",
      "pinyin": "niú nǎi",
      "amountMetric": "265 ml",
      "amountUS": "1 cup + 2 tbsp",
      "category": "dairy",
      "pantry": "local",
      "note": "Body temperature — hotter kills the yeast",
      "noteZh": "手感微温即可——太烫会烫死酵母"
    },
    {
      "id": "mm-03",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "pinyin": "xì shā táng",
      "amountMetric": "45 g",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Feeds the yeast and keeps the crust pale",
      "noteZh": "给酵母提供养料，并让外皮保持洁白"
    },
    {
      "id": "mm-04",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "pinyin": "gān jiàomǔ",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Check the expiry date before you start",
      "noteZh": "开做前先检查保质期"
    },
    {
      "id": "mm-05",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "12 ml",
      "amountUS": "2½ tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Makes the crumb soft and the dough easy to knead",
      "noteZh": "让组织柔软、面团更好揉"
    },
    {
      "id": "mm-06",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Keeps the fermentation from running away",
      "noteZh": "防止发酵过度失控"
    }
  ],
  "steps": [
    {
      "text": "Stir the yeast and 1 tsp of the sugar into the warm milk. Leave 8 minutes.",
      "textZh": "酵母与1茶匙糖搅入温牛奶，静置8分钟。",
      "zhHint": "活化酵母",
      "stateNote": {
        "visual": "A thick beige foam has formed on the surface and small bubbles cling to the side of the bowl",
        "visualZh": "表面形成厚实的米色泡沫，碗壁附着小气泡",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "The foam domes above the milk line and smells faintly beer-like",
        "signalZh": "泡沫高出奶面，并带一丝淡淡的酒酿味"
      },
      "tip": "No foam means dead yeast. Start again with a new packet rather than adding more time.",
      "tipZh": "不起泡说明酵母已死。换新的一包重新开始，别指望多等一会。"
    },
    {
      "text": "Combine flour, remaining sugar and salt in a bowl. Pour in the yeast milk and oil, mix to a shaggy mass, then knead 12 minutes by hand.",
      "textZh": "面粉、余下糖与盐混合。倒入酵母奶液和油，拌成絮状后手揉12分钟。",
      "zhHint": "揉面",
      "stateNote": {
        "visual": "Dough is smooth, satin-matt and pulls cleanly from the bowl with no flour pockets",
        "visualZh": "面团光滑呈缎面哑光，能干净地脱离碗壁，没有干粉块",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "Stretched thin, it forms a translucent windowpane instead of tearing",
        "signalZh": "抻薄能形成透光薄膜而不是破裂"
      }
    },
    {
      "text": "Cover and rise at room temperature until doubled and pillowy, about 75 minutes. A floured finger pressed 2 cm deep should leave an indentation that barely fills back.",
      "textZh": "加盖室温发酵约75分钟至两倍大、饱满如枕。沾粉的手指按入2厘米，指印应几乎不回弹。",
      "zhHint": "一发",
      "stateNote": {
        "visual": "Dough has domed visibly, surface taut and slightly glossy, with fine bubbles visible where it touches the bowl",
        "visualZh": "面团明显隆起，表面紧绷微亮，贴碗处能看到细密气泡",
        "timeRef": "75 minutes",
        "timeRefZh": "75 分钟",
        "signal": "The indentation stays put for 3 seconds instead of springing back",
        "signalZh": "指印静止3秒不回弹"
      }
    },
    {
      "text": "Punch down and knead 3 minutes to push out the large bubbles. Roll into a log and cut into 10 equal pieces.",
      "textZh": "排气后再揉3分钟排掉大气泡。搓成长条切成10等份。",
      "zhHint": "排气分剂",
      "stateNote": {
        "visual": "The cut face shows a fine, even crumb with no holes larger than a pinhead",
        "visualZh": "切面组织细腻均匀，没有超过针尖大的孔洞",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Dough feels dense and elastic again and resists when you press",
        "signalZh": "面团重新变得紧实有弹性，按压时有回扯感"
      },
      "tip": "Under-kneading here is the number one cause of wrinkled, collapsing mantou. Go the full 3 minutes.",
      "tipZh": "这一步揉不到位是馒头起皱塌陷的头号原因。老老实实揉满3分钟。"
    },
    {
      "text": "Shape each piece into a tall ball with a taut skin, place on parchment squares, cover loosely and proof 25 minutes until visibly puffy.",
      "textZh": "每份收成高挺的圆球，皮要绷紧，放在烘焙纸方块上，盖松布醒发25分钟至明显胀起。",
      "zhHint": "收圆二发",
      "stateNote": {
        "visual": "Buns have grown by half again and the surface looks smooth and velvety rather than dull",
        "visualZh": "生坯又胀大半，表面光滑如绒而非发暗",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "signal": "A lightly pressed surface springs back slowly, leaving a shallow dent that fills in",
        "signalZh": "轻按表面缓慢回弹，留下很快就填平的浅坑"
      }
    },
    {
      "text": "Steam over vigorously boiling water 15 minutes with the lid wrapped in a cloth. Turn off the heat, wait 5 minutes, then open the lid away from you.",
      "textZh": "笼布包住锅盖，大火沸水蒸15分钟。关火焖5分钟，然后开盖时把盖子往自己反方向倾斜。",
      "zhHint": "大火蒸+焖制",
      "stateNote": {
        "visual": "Buns are plump, glossy and snow-white, with a taut skin that springs back when pressed",
        "visualZh": "馒头饱满油亮雪白，外皮紧绷，轻按即回弹",
        "timeRef": "15 minutes steam + 5 minutes rest",
        "timeRefZh": "蒸15分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam bursts out on opening; the bun lifts cleanly off the paper when peeled",
        "signalZh": "开盖时蒸汽喷涌；撕开时馒头能干净地脱离纸"
      },
      "tip": "Water on the lid is what makes spotted, blistered mantou. Hence the cloth.",
      "tipZh": "盖上的冷凝水滴下来会让馒头起斑起泡。所以要包布。"
    }
  ],
  "tips": [
    "Wrap the lid in a kitchen towel. Condensation dripping onto the buns is what causes pockmarked skin.",
    "The 5-minute rest after the heat goes off is not optional — open early and they deflate.",
    "Freeze cooled buns in a zip bag up to 3 months; re-steam 8 minutes straight from frozen."
  ],
  "tipsZh": [
    "锅盖包一块厨房布。冷凝水滴到馒头上是表皮起坑的主因。",
    "关火后焖5分钟不可省——提前开盖会全部塌陷。",
    "冷却后装密封袋冷冻可存3个月；吃时不用解冻直接蒸8分钟。"
  ],
  "relatedSlugs": [
    "white-mantou-steamed-buns",
    "brown-sugar-mantou"
  ],
  "image": "/images/recipes/white-mantou-steamed-buns.webp"
};
