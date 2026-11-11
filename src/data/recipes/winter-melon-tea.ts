import type { Recipe } from "@/lib/types";

/** Winter Melon Tea (冬瓜茶) — Day batch */
export const winter_melon_tea: Recipe = {
  "id": "winter-melon-tea",
  "slug": "winter-melon-tea",
  "titleEn": "Winter Melon Tea",
  "titleZh": "冬瓜茶",
  "pinyin": "dōng guā chá",
  "cuisine": "家常菜",
  "cuisineEn": "Taiwanese",
  "region": "Taiwan",
  "regionZh": "台湾",
  "difficulty": "medium",
  "timeMin": 100,
  "servings": 6,
  "version": "family",
  "versionNote": "Home version macerates the melon in sugar overnight and then reduces it slowly into a syrup you dilute to taste; the street-stall version is a pre-made block melted in water. Doing it yourself means you control the sugar - the block is roughly a third sugar by weight.",
  "versionNoteZh": "家常版把冬瓜用糖腌出汁、再慢火收成糖浆，喝时按口味兑水；街边版是现成冬瓜茶砖化水。自己做才能控糖——茶砖里差不多三分之一都是糖。",
  "tags": [
    "taiwanese",
    "syrup",
    "1-hour",
    "summer",
    "make-ahead"
  ],
  "dietary": [
    "vegan",
    "gluten-free",
    "low-sodium"
  ],
  "story": "Winter melon tea is a Taiwanese institution - sold in every convenience store, brewed at home in summer by the pot. The trick that surprises people: the peel and seeds go in. They carry most of the aroma, and the tea tastes hollow without them. The melon itself contributes very little sugar; almost all the sweetness in the glass is added, which is why the homemade version can be far lighter than the commercial one.",
  "storyZh": "冬瓜茶在台湾是一种「制度」——便利店家家有，夏天家家自己煮一锅。最让人意外的一点：皮和籽要一起下。香气大半在皮里，少了它茶就发空。冬瓜本身几乎不含糖，杯里的甜基本都是外加的——这也是自制版能比市售版清甜得多的原因。",
  "ingredients": [
    {
      "id": "wmt-01",
      "nameEn": "winter melon flesh",
      "nameZh": "冬瓜肉",
      "pinyin": "dōng guā ròu",
      "amountMetric": "800 g",
      "amountUS": "about 1/2 small melon",
      "category": "produce",
      "pantry": "asian",
      "note": "Cut into 2 cm cubes. Do not peel away the skin yet - it goes into the pot separately.",
      "noteZh": "切成 2 厘米方块。皮先别扔，另放一边等下锅。",
      "termKey": "winter-melon"
    },
    {
      "id": "wmt-02",
      "nameEn": "winter melon peel and seeds",
      "nameZh": "冬瓜皮与籽",
      "pinyin": "dōng guā pí",
      "amountMetric": "100 g",
      "amountUS": "the peel and seeds of the melon above",
      "category": "produce",
      "pantry": "asian",
      "note": "Tied in a muslin bag. This is where the aroma lives; the tea is thin without it.",
      "noteZh": "装进纱布袋。香气全在这里，不放就发空。",
      "termKey": "winter-melon"
    },
    {
      "id": "wmt-03",
      "nameEn": "Chinese brown sugar",
      "nameZh": "红糖（或黑糖）",
      "pinyin": "hóng táng",
      "amountMetric": "200 g",
      "amountUS": "1 cup packed",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Dark brown sugar or Taiwanese black sugar gives the caramel backbone. This is the traditional ratio - cut it to 150 g if you want it lighter.",
      "noteZh": "深红糖或台湾黑糖给焦糖底味。这是传统比例——想清淡可减到 150 克。",
      "termKey": "brown-sugar"
    },
    {
      "id": "wmt-04",
      "nameEn": "yellow rock sugar",
      "nameZh": "黄冰糖",
      "pinyin": "huáng bīng táng",
      "amountMetric": "100 g",
      "amountUS": "1/2 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rock sugar keeps the syrup glossy; all-brown-sugar versions go dull and grainy.",
      "noteZh": "冰糖让糖浆清亮；全用红糖会发暗、起砂。",
      "termKey": "rock-sugar-raw"
    },
    {
      "id": "wmt-05",
      "nameEn": "water",
      "nameZh": "清水",
      "pinyin": "qīng shuǐ",
      "amountMetric": "600 ml",
      "amountUS": "2 1/2 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "wmt-06",
      "nameEn": "ginger, sliced",
      "nameZh": "生姜片",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "note": "Cuts the melon's faintly raw, watery note. Traditional in the home version, absent from the commercial block.",
      "noteZh": "压掉冬瓜那点生水气。家常版传统会放，市售茶砖里没有。",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Toss the melon cubes with the brown sugar in a large bowl, cover and leave for 1 hour at room temperature until the sugar draws out a pool of juice.",
      "textZh": "冬瓜块与红糖在大碗里拌匀，盖住室温放 1 小时，等糖把汁水腌出来。",
      "zhHint": "糖腌出汁 1 小时",
      "stateNote": {
        "visual": "Sugar turns dark and wet, then dissolves into a brown pool at the bottom of the bowl while the cubes shrink and go translucent at the edges",
        "visualZh": "糖先变湿变深，随后化成一汪褐色糖水积在碗底，瓜块缩水、边缘变半透明",
        "timeRef": "1 hour",
        "timeRefZh": "1 小时",
        "heat": "low",
        "signal": "Liquid covers the bottom of the bowl by at least a centimetre; the cubes feel limp when you press them",
        "signalZh": "碗底积起至少一厘米的糖水，瓜块按下去已经发软"
      },
      "tip": "Do not add water here. The salt-and-sugar draw is the whole point - extra water just means a longer reduction later.",
      "tipZh": "这一步不要加水。靠糖把水「拔」出来才是关键——加水只会让后面收得更久。"
    },
    {
      "text": "Tip everything into a heavy pot, add the muslin bag of peel and seeds, the ginger and the water, and bring to a boil.",
      "textZh": "全部倒入厚底锅，加装皮和籽的纱布袋、姜片与清水，煮开。",
      "zhHint": "连皮籽袋一起下锅",
      "stateNote": {
        "visual": "The bag floats on top; the liquid is thin and pale brown",
        "visualZh": "纱布袋浮在表面，汤汁稀薄浅褐",
        "timeRef": "5 minutes to come to a boil",
        "timeRefZh": "约 5 分钟煮开",
        "heat": "high",
        "signal": "A green-melon smell rises first, then settles into something sweeter as the sugar dissolves",
        "signalZh": "先上来的是青瓜气，糖化开后就沉成更甜的气味"
      }
    },
    {
      "text": "Drop to the lowest simmer and cook uncovered for 60 minutes, stirring every 15 minutes so the bottom does not catch.",
      "textZh": "转最小火，不加盖煮 60 分钟，每 15 分钟搅一次，防糊底。",
      "zhHint": "小火 60 分钟勤搅",
      "stateNote": {
        "visual": "The cubes collapse into soft, translucent strands; the liquid darkens to the colour of cola",
        "visualZh": "瓜块塌成半透明软丝，汤汁加深到接近可乐的颜色",
        "timeRef": "60 minutes",
        "timeRefZh": "60 分钟",
        "heat": "medium-low",
        "signal": "A cube smashes against the pot wall with no resistance at all - the flesh has fully given up",
        "signalZh": "瓜块抵住锅壁一按即烂、毫无阻力——果肉已经完全化开"
      }
    },
    {
      "text": "Fish out the muslin bag and squeeze it over the pot, then add the rock sugar and stir until dissolved.",
      "textZh": "捞出纱布袋，挤干汤汁回锅，再加冰糖搅至化开。",
      "zhHint": "捞袋挤汁加冰糖",
      "stateNote": {
        "visual": "The syrup turns glossy and slightly more golden once the rock sugar goes in",
        "visualZh": "冰糖加入后糖浆变得油亮、颜色更金",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "No sugar grit when you drag a spoon across the bottom",
        "signalZh": "勺子在锅底划过去，摸不到糖砂就对了"
      }
    },
    {
      "text": "Keep simmering uncovered until the mixture coats a spoon thickly - about another 15 minutes - then blend smooth or leave it chunky, your choice.",
      "textZh": "继续不加盖收汁，直到能厚厚挂在勺上（约再 15 分钟），然后按喜好打成顺滑或保留果肉。",
      "zhHint": "收成浓糖浆",
      "stateNote": {
        "visual": "Bubbles grow larger and slower as the water leaves; the surface looks like molten caramel",
        "visualZh": "水分收走，气泡变大变慢，表面像融化的焦糖",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "A drop on a cold plate holds its shape instead of spreading - that is a syrup, ready to bottle",
        "signalZh": "滴一滴在冷盘上能立住不摊开——就是可以装瓶的糖浆浓度"
      }
    },
    {
      "text": "Cool completely, pour into a clean jar and refrigerate. To serve, dilute 1 part syrup to 4 parts cold water and add ice.",
      "textZh": "彻底放凉后装入干净瓶子冷藏。喝时按 1 份糖浆兑 4 份冷水，加冰。",
      "zhHint": "1:4 兑水加冰",
      "stateNote": {
        "visual": "Thick dark syrup in the jar; diluted, it turns a translucent amber with the ice floating",
        "visualZh": "罐里是浓稠深色糖浆；兑水后是透亮的琥珀色，冰块浮起",
        "timeRef": "2 hours to cool",
        "timeRefZh": "放凉约 2 小时",
        "heat": "low",
        "signal": "The diluted drink should taste like iced caramel with a green-melon edge, not like syrup - add more water if it coats your mouth",
        "signalZh": "兑好的应该像带青瓜尾韵的冰焦糖，而不是糖浆——如果糊嘴就再加水"
      }
    }
  ],
  "tips": [
    "The peel and seeds are the flavour; discarding them is the most common reason homemade winter melon tea tastes like sweet water.",
    "1:4 is a starting point. Commercial versions are closer to 1:3 and much sweeter; you can go as light as 1:6.",
    "The syrup keeps a month in the fridge and makes an excellent base for a gin highball."
  ],
  "tipsZh": [
    "皮和籽就是风味所在；把它们丢掉是自制冬瓜茶「只剩甜水味」最常见的原因。",
    "1:4 只是起点。市售大约是 1:3、甜得多；想清淡可以到 1:6。",
    "糖浆冷藏能放一个月，拿来调金汤力／高球非常好用。"
  ],
  "relatedSlugs": [
    "sugarcane-water-chestnut-drink",
    "luo-han-guo-tea",
    "sour-plum-drink"
  ],
  "image": "/images/recipes/rock-sugar-pear-soup.webp"
};
