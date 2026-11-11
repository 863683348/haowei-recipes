import type { Recipe } from "@/lib/types";

/** Double-Boiled Papaya with Hasma (木瓜炖雪蛤) — Day batch */
export const papaya_hasma_dessert_soup: Recipe = {
  "id": "papaya-hasma-dessert-soup",
  "slug": "papaya-hasma-dessert-soup",
  "titleEn": "Double-Boiled Papaya with Hasma",
  "titleZh": "木瓜炖雪蛤",
  "pinyin": "mù guā dùn xuě há",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 120,
  "servings": 2,
  "version": "family",
  "versionNote": "Home cooks double-boil the papaya in chunks so it survives the steam; banquet kitchens steam a hollowed whole fruit as its own bowl and let the guest lift the lid at the table. Both are the same dish - the chunked version just gives you more fruit per spoon.",
  "versionNoteZh": "家常做法把木瓜切块隔水炖，才能经得住长时间蒸汽；酒楼是把整只挖空的木瓜当炖盅，上桌由客人揭盖。两者是同一道菜——切块版每勺都能吃到果肉。",
  "tags": [
    "dessert-soup",
    "double-boiled",
    "cantonese",
    "autumn",
    "2-hour"
  ],
  "dietary": [
    "none"
  ],
  "story": "In Cantonese households this is the dessert a mother makes when the air turns dry. My grandmother insisted the hasma be soaked in ginger water overnight and the yellow membrane picked out piece by piece - she said the membrane is what makes the soup smell of pond, and no amount of sugar covers it up. The papaya is barely ripe on purpose: it perfumes the liquid without collapsing into pulp.",
  "storyZh": "在粤式家庭里，天一干燥母亲就会炖这一盅。外婆坚持雪蛤要用姜水泡过夜、把那层黄色薄膜一点点挑净——她说那层膜才是「塘泥味」的来源，加多少糖都盖不住。木瓜故意选八分熟：只要香气进汤，果肉不能化。",
  "ingredients": [
    {
      "id": "phd-01",
      "nameEn": "papaya, barely ripe",
      "nameZh": "木瓜（八分熟）",
      "pinyin": "mù guā",
      "amountMetric": "400 g",
      "amountUS": "1/2 medium papaya",
      "category": "produce",
      "pantry": "local",
      "note": "Firm enough to hold its shape for 25 minutes of steam. Press the skin: if your thumb sinks in, it is too ripe and will dissolve.",
      "noteZh": "要硬到能撑住 25 分钟蒸汽。按一下皮，拇指一压就陷进去的已过熟，会炖成糊。",
      "termKey": "papaya"
    },
    {
      "id": "phd-02",
      "nameEn": "dried hasma (snow frog)",
      "nameZh": "雪蛤干",
      "pinyin": "xuě há",
      "amountMetric": "3 g",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Sold in small sealed boxes in Chinese pharmacies and dry-goods shops. 3 g swells to a full cup - do not be tempted to use more.",
      "noteZh": "中药店与干货铺的小盒装。3 克能胀到一整杯——不要贪多。",
      "termKey": "hasma"
    },
    {
      "id": "phd-03",
      "nameEn": "ginger, sliced",
      "nameZh": "生姜片",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "4 thin slices",
      "category": "produce",
      "pantry": "local",
      "note": "Half for the soaking water, half for the blanching water. It is there to kill the pond smell, not to flavour the dessert.",
      "noteZh": "一半泡发用、一半焯水用。它的作用是去腥，不是给甜汤添姜味。",
      "termKey": "ginger"
    },
    {
      "id": "phd-04",
      "nameEn": "dried red dates",
      "nameZh": "红枣",
      "pinyin": "hóng zǎo",
      "amountMetric": "20 g",
      "amountUS": "4 dates",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Slit them once so they plump instead of sitting in the syrup like stones.",
      "noteZh": "每颗划一刀，才会吸糖饱满，否则像石头泡在糖水里。",
      "termKey": "jujube"
    },
    {
      "id": "phd-05",
      "nameEn": "goji berries",
      "nameZh": "枸杞",
      "pinyin": "gǒu qǐ",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Added at the very end, off the heat. Simmered goji turns sour and stains the soup orange.",
      "noteZh": "关火后才放。煮过的枸杞发酸，还会把汤染成橘色。",
      "termKey": "goji-berries"
    },
    {
      "id": "phd-06",
      "nameEn": "yellow rock sugar",
      "nameZh": "黄冰糖",
      "pinyin": "huáng bīng táng",
      "amountMetric": "20 g",
      "amountUS": "2 lumps",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Start with 20 g. The papaya brings its own sugar and this dessert should taste of fruit first.",
      "noteZh": "先放 20 克。木瓜自带甜味，这道甜汤应该先尝到果香。",
      "termKey": "rock-sugar-raw"
    },
    {
      "id": "phd-07",
      "nameEn": "aged dried tangerine peel",
      "nameZh": "陈皮",
      "pinyin": "chén pí",
      "amountMetric": "1 g",
      "amountUS": "1 postage-stamp piece",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Optional but it is the difference between sweet water and a Cantonese dessert. Scrape the white pith off first.",
      "noteZh": "可省略，但有没有它就是「糖水」与「粤式甜汤」的差别。先用刀刮掉白瓤。",
      "termKey": "dried-tangerine-peel"
    },
    {
      "id": "phd-08",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "450 ml",
      "amountUS": "1 3/4 cups",
      "category": "other",
      "pantry": "local",
      "note": "Use the same amount inside the double boiler, not in the outer pot - the outer water should reach halfway up the bowl.",
      "noteZh": "450 毫升是装在炖盅里的量，不是外锅。外锅水加到炖盅高度的一半。"
    }
  ],
  "steps": [
    {
      "text": "Soak the hasma in 300 ml cold water with two ginger slices for at least 8 hours, changing the water twice. Refrigerate if your kitchen is warm.",
      "textZh": "雪蛤用 300 毫升冷水加两片姜泡至少 8 小时，中途换两次水。厨房温度高就放冰箱。",
      "zhHint": "冷水泡发一夜",
      "stateNote": {
        "visual": "Each thread swells into a translucent, cotton-wool tangle; the water turns faintly milky",
        "visualZh": "每条都胀成半透明的棉絮状，泡发水微微发白",
        "timeRef": "8 hours, or overnight",
        "timeRefZh": "8 小时，或过夜",
        "heat": "low",
        "signal": "Volume is now five to six times the dry amount and a strand feels like soft cotton between your fingers - if it still has a hard core, keep soaking",
        "signalZh": "体积涨到干品的五六倍，捏起来像软棉花——中间还有硬芯就继续泡"
      },
      "tip": "Pick out the thin yellow membrane while soaking; that membrane is where the off-smell lives.",
      "tipZh": "泡的时候顺手挑掉那层薄黄膜——腥味全在膜里。"
    },
    {
      "text": "Bring a small pot of water to a boil with the remaining ginger, drop in the drained hasma and blanch for 30 seconds, then drain and rinse under cold water.",
      "textZh": "小锅水加剩下的姜片烧开，放入沥干的雪蛤焯 30 秒，捞出过冷水冲净。",
      "zhHint": "姜水焯 30 秒去腥",
      "stateNote": {
        "visual": "Threads curl slightly and turn from clear to a milky white the moment they hit the water",
        "visualZh": "一入水就微微卷曲，从透明变成乳白",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Smell the steam: it should read as ginger, not as pond. Any fishy note means another 15 seconds",
        "signalZh": "闻蒸汽：应是姜味而不是塘泥味。还有腥气就再焯 15 秒"
      }
    },
    {
      "text": "Halve the papaya, scoop out the seeds and cut the flesh into 3 cm chunks, leaving the skin on so the pieces keep their shape.",
      "textZh": "木瓜对半切开，挖去籽，连皮切成 3 厘米块——留皮才能保持形状。",
      "zhHint": "连皮切大块",
      "stateNote": {
        "visual": "Pale orange flesh, firm and dry at the cut surface, not weeping juice",
        "visualZh": "果肉浅橘色，切面干爽硬挺，不出汁水",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "A piece holds a clean edge when you cut it; a ripe fruit smears",
        "signalZh": "切下去边缘利落就是对的；过熟的一刀就烂"
      }
    },
    {
      "text": "Put the water, rock sugar, slit red dates and tangerine peel into a heatproof bowl, set it in a steamer over simmering water and steam, covered, for 40 minutes to build the syrup.",
      "textZh": "把清水、冰糖、划口的红枣与陈皮放入耐热碗，放进蒸锅隔水，盖盖中火蒸 40 分钟熬出糖水。",
      "zhHint": "先蒸糖水底",
      "stateNote": {
        "visual": "The liquid turns pale amber and the dates puff up and float",
        "visualZh": "汤色转为浅琥珀，红枣胀起、浮在表面",
        "timeRef": "40 minutes",
        "timeRefZh": "40 分钟",
        "heat": "medium",
        "signal": "No sugar grit left at the bottom when you tilt the bowl, and a date squashes easily against the side",
        "signalZh": "倾斜碗底已无糖粒，枣子抵住碗壁一压就烂"
      },
      "tip": "Keep the outer pot at a steady simmer, never a rolling boil - agitation clouds the syrup.",
      "tipZh": "外锅保持微沸即可，不要大滚——翻滚会把糖水搅浑。"
    },
    {
      "text": "Add the hasma and papaya chunks, cover again and steam for a further 25 minutes.",
      "textZh": "加入雪蛤与木瓜块，盖盖再蒸 25 分钟。",
      "zhHint": "雪蛤木瓜后下",
      "stateNote": {
        "visual": "Papaya edges go translucent while the centres stay opaque orange; hasma floats in clear threads",
        "visualZh": "木瓜边缘变半透明，中心仍是不透光的橘色；雪蛤呈透明丝状漂浮",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "medium",
        "signal": "A chopstick slides into a papaya chunk with almost no resistance, but the chunk still stands whole",
        "signalZh": "筷子几乎无阻插进木瓜块，但整块仍立得住"
      }
    },
    {
      "text": "Turn off the heat, scatter the goji in, put the lid back on and let it rest 5 minutes before serving warm, or chill it and serve cold.",
      "textZh": "关火，撒入枸杞，盖回盖子静置 5 分钟，温食或冷藏后冷食均可。",
      "zhHint": "关火撒枸杞焖 5 分钟",
      "stateNote": {
        "visual": "Goji berries plump and brighten to scarlet against the amber syrup",
        "visualZh": "枸杞在琥珀色糖水里胀起、转为鲜红",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "The syrup has thickened just enough to coat the back of a spoon in a thin film",
        "signalZh": "糖水稠到能在勺背挂一层薄薄的膜"
      }
    }
  ],
  "tips": [
    "Hasma is almost flavourless by design - it is there for the slippery texture, so do not expect it to taste of anything but the syrup it sits in.",
    "If you cannot buy hasma, soak 8 g of snow fungus, tear it into small pieces and simmer it with the syrup for 30 minutes; the texture lands very close.",
    "Serve it at whatever temperature you like, but never boil it again after the papaya goes in or the fruit turns to mush."
  ],
  "tipsZh": [
    "雪蛤本身几乎无味，它的存在是为了那口滑——别指望它有自己的味道，它只带糖水的味。",
    "买不到雪蛤就用 8 克银耳泡发撕小片，跟糖水同煮 30 分钟，口感非常接近。",
    "冷热随喜，但木瓜下锅后就不要再大滚，否则果肉必烂。"
  ],
  "relatedSlugs": [
    "silver-fungus-lotus-seed-soup",
    "double-layer-milk-pudding-shuang-pi-nai",
    "ginger-milk-curd"
  ],
  "image": "/images/recipes/silver-fungus-lotus-seed-soup.webp"
};
