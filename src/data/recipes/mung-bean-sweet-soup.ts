import type { Recipe } from "@/lib/types";

/** Cantonese Mung Bean Sweet Soup (绿豆沙) — Day batch */
export const mung_bean_sweet_soup: Recipe = {
  "id": "mung-bean-sweet-soup",
  "slug": "mung-bean-sweet-soup",
  "titleEn": "Cantonese Mung Bean Sweet Soup",
  "titleZh": "绿豆沙",
  "pinyin": "lǜ dòu shā",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 60,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version cooks the beans down until a good third of them burst and dissolve, which is what makes it a 'sand' rather than a soup, and finishes it with a strip of dried tangerine peel; shop versions often add coconut milk for body and push the sugar much higher.",
  "versionNoteZh": "家常版熬到约三分之一豆子开花化开，这才叫『沙』而不是汤，最后放一小片陈皮提香；糖水铺常加椰浆增厚，糖也放得多得多。",
  "tags": [
    "60-min",
    "dessert",
    "cooling",
    "vegan",
    "gluten-free",
    "make-ahead"
  ],
  "dietary": [
    "vegan",
    "gluten-free"
  ],
  "story": "In the Pearl River Delta, summer is measured in bowls of this soup. It comes out of the fridge at four in the afternoon when the air has gone thick, and the argument in every family is the same: my grandmother insisted the beans must be cooked to sand, my uncle insists they must stay whole, and both of them agree that a bowl without tangerine peel is not worth making.",
  "storyZh": "在珠三角，夏天是用这碗糖水计量的。下午四点空气发闷时从冰箱端出来，家家都要吵同一件事：奶奶坚持豆子必须熬成沙，舅舅坚持要粒粒完整；唯一能达成共识的是——不放陈皮的一碗，不值得做。",
  "ingredients": [
    {
      "id": "mbss-01",
      "nameEn": "dried mung beans",
      "nameZh": "绿豆",
      "pinyin": "lǜ dòu",
      "amountMetric": "150 g",
      "amountUS": "3/4 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Look for bright green, uniform beans; dull olive ones are old and will never soften properly",
      "noteZh": "选鲜绿均匀的豆子；暗橄榄色的陈豆怎么煮都煮不烂"
    },
    {
      "id": "mbss-02",
      "nameEn": "water",
      "nameZh": "水",
      "pinyin": "shuǐ",
      "amountMetric": "1.5 L",
      "amountUS": "6 1/4 cups",
      "category": "other",
      "pantry": "local",
      "note": "There should be enough to cover the beans by a good 5 cm the whole way through",
      "noteZh": "全程水量都要高出豆面至少5厘米"
    },
    {
      "id": "mbss-03",
      "nameEn": "dried tangerine peel",
      "nameZh": "陈皮",
      "pinyin": "chén pí",
      "amountMetric": "1 small piece",
      "amountUS": "1 piece",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak 10 minutes and scrape off the white pith, which is bitter; a strip of orange zest works in a pinch",
      "noteZh": "泡10分钟后刮去白色内瓤（发苦）；实在没有可用一条橙皮屑应急"
    },
    {
      "id": "mbss-04",
      "nameEn": "dried lily bulbs",
      "nameZh": "干百合",
      "pinyin": "gān bǎi hé",
      "amountMetric": "10 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Optional but traditional; it gives a faint floral note. Omit if you cannot find it",
      "noteZh": "可选但传统，增一丝花香；买不到可省"
    },
    {
      "id": "mbss-05",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "60 g",
      "amountUS": "1/3 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Always add sugar at the end - beans cooked with sugar from the start stay stubbornly hard",
      "noteZh": "糖一定要最后放——一开始就加糖，豆子会顽固地煮不烂",
      "termKey": "rock-sugar"
    },
    {
      "id": "mbss-06",
      "nameEn": "fine sea salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "1 g",
      "amountUS": "a pinch",
      "category": "spice",
      "pantry": "local",
      "note": "A pinch sharpens the sweetness; you should not be able to taste it as salt",
      "noteZh": "一小撮能让甜味更分明；不应尝出咸味"
    },
    {
      "id": "mbss-07",
      "nameEn": "coconut milk, for serving",
      "nameZh": "椰浆，装碗时用",
      "pinyin": "yē jiāng",
      "amountMetric": "60 ml",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "local",
      "note": "Optional; a swirl in the bowl makes it a proper tong sui shop version. Skip it for the plainer home style",
      "noteZh": "可选；碗里淋一圈就是糖水铺的做法。家常清饮可以不加"
    }
  ],
  "steps": [
    {
      "text": "Rinse the mung beans twice in cold water, discarding anything that floats, then soak them in plenty of water for at least 2 hours or overnight.",
      "textZh": "绿豆用冷水淘洗两次，漂在水面的空豆捞掉，再加足量水浸泡至少2小时或过夜。",
      "zhHint": "泡豆2小时以上",
      "stateNote": {
        "visual": "Beans have swollen noticeably and a few skins have split; the soaking water is pale green and slightly cloudy",
        "visualZh": "豆子明显胀大，部分豆皮裂开；泡豆水呈淡绿微浊",
        "timeRef": "2 hours",
        "timeRefZh": "2 小时",
        "heat": "low",
        "signal": "Squeeze one between your fingers - it should crush easily with no hard white core",
        "signalZh": "指腹捏一粒——应轻松捏碎，没有发硬的白色芯"
      },
      "tip": "Soaking is what turns an hour of boiling into 40 minutes. Skip it and you will be standing there much longer.",
      "tipZh": "浸泡能把一小时的熬煮缩到40分钟。跳过这步，你就得在灶台前多站很久。"
    },
    {
      "text": "Drain the beans, put them in a pot with the water, tangerine peel and lily bulbs, and bring to a full rolling boil.",
      "textZh": "豆子沥干入锅，加水、陈皮与干百合，大火烧至完全沸腾。",
      "zhHint": "大火滚沸",
      "stateNote": {
        "visual": "A grey-green foam lifts to the rim and the water takes on a pale green tint",
        "visualZh": "灰绿色浮沫涌向锅边，水色转为淡绿",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "high",
        "signal": "Steam comes off in a thick column and the surface never settles flat",
        "signalZh": "蒸汽呈粗柱上腾，水面始终不平静"
      }
    },
    {
      "text": "Skim off the grey foam with a slotted spoon, then lower the heat and simmer uncovered for 35-40 minutes, stirring every 10 minutes.",
      "textZh": "用漏勺撇去灰绿浮沫，转小火敞盖熬35-40分钟，每10分钟搅一次。",
      "zhHint": "撇沫小火慢熬",
      "stateNote": {
        "visual": "Many beans have split open and the liquid has turned cloudy and pale yellow-green; loose skins float on top",
        "visualZh": "大量豆子裂开，汤色转为浑浊的黄绿，浮着脱落的豆皮",
        "timeRef": "40 minutes",
        "timeRefZh": "40 分钟",
        "heat": "low",
        "signal": "Crush a bean against the side of the pot with your spoon - it should smear with no resistance",
        "signalZh": "用勺把豆子压在锅壁上——应毫不费力地碾成泥"
      },
      "tip": "Skim the foam properly. Leaving it in is what gives the soup that faintly raw, grassy edge.",
      "tipZh": "浮沫要撇干净。留在里面汤会带一股生涩的青草味。"
    },
    {
      "text": "Mash about a third of the beans against the side of the pot with the back of a spoon, leaving the rest whole. This is what turns a soup into a sand.",
      "textZh": "用勺背把约三分之一豆子压在锅壁碾成泥，其余保持完整——这一步正是「汤」变「沙」的关键。",
      "zhHint": "压碎三分之一出沙",
      "stateNote": {
        "visual": "The liquid thickens visibly and turns opaque with suspended starch; whole beans still float in a now-cloudy broth",
        "visualZh": "汤汁明显变稠、因淀粉悬浮而转为不透明；完整豆粒仍浮在浑浊汤中",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Dip a spoon in and pull it out - the soup clings in a coating rather than running off clean",
        "signalZh": "勺子插入再提起——汤汁应挂勺成层而不是干脆流尽"
      }
    },
    {
      "text": "Add the rock sugar and the pinch of salt and cook 5 minutes more, stirring until the sugar has completely dissolved. Fish out the tangerine peel.",
      "textZh": "加入冰糖与一小撮盐，再煮5分钟，搅至糖完全溶化，捞出陈皮。",
      "zhHint": "糖盐最后放",
      "stateNote": {
        "visual": "No sugar crystals catch on the spoon; the soup is glossy and slightly thickened with a soft pale green colour",
        "visualZh": "勺上无糖粒；糖水油亮微稠，呈柔和的淡绿色",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "Taste it - sweetness arrives first, then the faint bitter-floral note of the peel behind it",
        "signalZh": "尝一口——甜味先到，随后才是陈皮那一丝微苦的花香"
      }
    },
    {
      "text": "Serve hot, or cool to room temperature and chill for at least 2 hours. Finish each bowl with a swirl of coconut milk if you like.",
      "textZh": "可热食，也可放凉后冷藏至少2小时；喜好的话每碗淋一圈椰浆。",
      "zhHint": "冷热皆宜",
      "stateNote": {
        "visual": "Chilled, it has thickened to a loose spoonable texture with a dull matte surface; whole beans sit suspended rather than sunk",
        "visualZh": "冷藏后稠度变为可舀的稀糊状、表面哑光；完整豆粒悬浮而非沉底",
        "timeRef": "2 hours chilling",
        "timeRefZh": "冷藏 2 小时",
        "heat": "low",
        "signal": "Tilt the glass - it moves slowly as one mass rather than sloshing like water",
        "signalZh": "倾斜杯子——整体缓慢移动，而不是像水一样晃荡"
      },
      "tip": "It thickens a lot in the fridge; add a splash of cold water and stir before serving leftovers.",
      "tipZh": "冷藏后会明显变稠，吃剩的加少许冷水调开再盛。"
    }
  ],
  "tips": [
    "Sugar goes in last, every time. Beans cooked in sugar water stay hard no matter how long you simmer them.",
    "The tangerine peel is not a garnish - it is the difference between a bowl that tastes flat and one that tastes Cantonese.",
    "For a faster version use a pressure cooker: 12 minutes at high pressure, then mash and sweeten on the stove."
  ],
  "tipsZh": [
    "糖永远最后放。在糖水里煮的豆子，熬多久都硬。",
    "陈皮不是点缀——它是「一碗寡淡」和「一碗广式」之间的区别。",
    "想快就用压力锅：高压12分钟，再倒回灶上碾沙加糖。"
  ],
  "relatedSlugs": [
    "red-bean-soup-hong-dou-sha",
    "rock-sugar-pear-soup",
    "silver-fungus-lotus-seed-soup"
  ],
  "image": "/images/recipes/silver-fungus-lotus-seed-soup.webp"
};
