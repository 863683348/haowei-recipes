import type { Recipe } from "@/lib/types";

/** Two-Topping Clay Pot Rice (双拼煲仔饭) — Day batch */
export const combo_claypot_rice: Recipe = {
  "id": "combo-claypot-rice",
  "slug": "combo-claypot-rice",
  "titleEn": "Two-Topping Clay Pot Rice",
  "titleZh": "双拼煲仔饭",
  "pinyin": "shuāng pīn bāo zǎi fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 60,
  "servings": 2,
  "version": "family",
  "versionNote": "Home cooks pick one slow topping and one quick one so everything finishes together. In a Hong Kong clay pot shop 'double' means the toppings are cooked in separate stations and assembled on the rice at the last moment, each one having had its own pan.",
  "versionNoteZh": "家常版选一个慢熟、一个快熟的配料，让两者同时出锅；香港煲仔饭店的「双拼」是两样配料在不同灶位各自做，最后一刻才组合到饭面上，各有各的一口锅。",
  "tags": [
    "60-min",
    "claypot",
    "cantonese",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "双拼 is what you order in Hong Kong when one topping is not enough of a decision. The classic pairing is sausage plus something that needs time: the sausage renders into the rice during the whole cook, while the second topping only goes on near the end so it stays juicy. Learn that timing principle and you can pair anything.",
  "storyZh": "在香港，当你没法只选一样配料时就会点双拼。经典搭配是腊肠配一样需要时间的食材：腊肠在整个过程中把油香渗进米饭，另一样配料则临近尾声才下锅以保持多汁。学会这个时间差原理，你就能随意搭配。",
  "ingredients": [
    {
      "id": "ccr-01",
      "nameEn": "jasmine rice, rinsed",
      "nameZh": "茉莉香米，淘洗",
      "pinyin": "xiāng mǐ",
      "amountMetric": "220 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Rinsed until the water runs clear",
      "noteZh": "淘到水清"
    },
    {
      "id": "ccr-02",
      "nameEn": "Chinese sausage (lap cheong)",
      "nameZh": "腊肠",
      "pinyin": "là cháng",
      "amountMetric": "2 links",
      "amountUS": "2 links (110 g)",
      "category": "protein",
      "pantry": "asian",
      "note": "Slice on the diagonal into 3 mm coins",
      "noteZh": "斜刀切成3毫米厚片"
    },
    {
      "id": "ccr-03",
      "nameEn": "boneless chicken thigh, cut into 3 cm pieces",
      "nameZh": "去骨鸡腿肉，切3厘米块",
      "pinyin": "jī tuǐ ròu",
      "amountMetric": "220 g",
      "amountUS": "8 oz",
      "category": "protein",
      "pantry": "local",
      "note": "The 'slow' topping; goes on with plenty of time left",
      "noteZh": "这是「慢件」，要早放留足时间"
    },
    {
      "id": "ccr-04",
      "nameEn": "dried shiitake, soaked and sliced",
      "nameZh": "干香菇，泡发切片",
      "pinyin": "xiāng gū",
      "amountMetric": "20 g",
      "amountUS": "4 mushrooms",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dried-shiitake"
    },
    {
      "id": "ccr-05",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce"
    },
    {
      "id": "ccr-06",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ccr-07",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "ccr-08",
      "nameEn": "shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "ccr-09",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "diàn fěn",
      "amountMetric": "6 g",
      "amountUS": "2 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "ccr-10",
      "nameEn": "fresh ginger, shredded",
      "nameZh": "鲜姜，切丝",
      "pinyin": "jiāng sī",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ccr-11",
      "nameEn": "baby bok choy, halved",
      "nameZh": "小白菜，剖半",
      "pinyin": "xiǎo bái cài",
      "amountMetric": "120 g",
      "amountUS": "2–3 heads",
      "category": "produce",
      "pantry": "asian",
      "note": "Blanched separately and added at the table",
      "noteZh": "另锅焯水，上桌时才放",
      "termKey": "baby-bok-choy"
    },
    {
      "id": "ccr-12",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Films the pot for an even crust",
      "noteZh": "给锅上油膜，锅巴才均匀"
    }
  ],
  "steps": [
    {
      "text": "Marinate the chicken with oyster sauce, half the light soy, dark soy, shaoxing wine and cornstarch. Rest 20 minutes while you soak and slice the mushrooms.",
      "textZh": "鸡腿肉加蚝油、一半生抽、老抽、黄酒与淀粉腌20分钟，这段时间泡发并切好香菇。",
      "zhHint": "腌鸡肉",
      "stateNote": {
        "visual": "Each piece is filmed with a glossy brown marinade and nothing watery collects at the bottom",
        "visualZh": "每块肉都裹着油亮的褐色腌料，碗底没有稀薄积液",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "low",
        "signal": "The marinade clings when you lift a piece out",
        "signalZh": "提起一块鸡肉时腌料挂得住"
      }
    },
    {
      "text": "Put the rice in the clay pot with 300 ml (1¼ cups) water and the oil. Bring to a boil over medium heat, stirring once.",
      "textZh": "米放入砂锅，加300毫升水与油。中火烧沸，搅一次。",
      "zhHint": "砂锅下米加水",
      "stateNote": {
        "visual": "Milky water bubbling hard with grains moving sluggishly throughout",
        "visualZh": "乳白的水剧烈冒泡，米粒整体缓慢翻动",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium",
        "signal": "Bubbles break across the whole surface, not just at the rim",
        "signalZh": "整个锅面都有气泡冒出，不只是锅边"
      }
    },
    {
      "text": "Scatter the drained chicken and mushrooms over the rice. Lay the sausage coins on top. Cover and drop to the lowest heat for 15 minutes.",
      "textZh": "把沥过的鸡肉与香菇铺散在饭面上，腊肠片铺在最上。加盖转最小火煮15分钟。",
      "zhHint": "双拼铺面小火焖",
      "stateNote": {
        "visual": "Steam leaks steadily; the sausage has turned translucent with visible beads of orange fat on the cut faces",
        "visualZh": "蒸汽稳定漏出；腊肠变得半透明，切面渗出橙色的油珠",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "The water line has dropped below the rice surface and the pot smells of five-spice and soy",
        "signalZh": "水位已降到饭面以下，锅里飘出五香与酱香"
      },
      "tip": "Sausage on the top layer. Its fat has to travel the furthest to season the most rice.",
      "tipZh": "腊肠放在最上层。它的油要走最远的路，才能给最多米饭调味。"
    },
    {
      "text": "Without lifting the lid, raise the heat to medium-low and cook 8–10 minutes until the aroma turns faintly toasty.",
      "textZh": "不要开盖，转中小火再煮8–10分钟，直到香气转为淡淡焦香。",
      "zhHint": "小火逼锅巴",
      "stateNote": {
        "visual": "Steam has thinned to wisps; the smell has shifted from clean rice to something nutty",
        "visualZh": "蒸汽变稀薄，气味从清米香转为坚果味",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "A faint dry crackle comes from the pot base",
        "signalZh": "锅底传来轻微的干裂声"
      }
    },
    {
      "text": "Meanwhile blanch the bok choy in salted boiling water for 60 seconds, then drain well.",
      "textZh": "同时把小白菜下盐水锅焯60秒，捞出彻底沥干。",
      "zhHint": "青菜焯水",
      "stateNote": {
        "visual": "Stems are bright jade and still hold some snap; leaves are deep green and wilted",
        "visualZh": "菜帮鲜翠仍带脆感；菜叶深绿塌软",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "high",
        "signal": "A stem bends without snapping and the colour stays vivid, not dull olive",
        "signalZh": "菜帮能弯而不断，颜色鲜亮而非暗橄榄"
      }
    },
    {
      "text": "Off the heat, rest 5 minutes covered. Open, arrange the greens, scatter the remaining ginger and toss everything with the remaining light soy from the bottom up.",
      "textZh": "离火加盖静置5分钟。开盖码上青菜、撒余下姜丝，加余下生抽从锅底往上把整锅拌匀。",
      "zhHint": "静置拌饭",
      "stateNote": {
        "visual": "Amber grains glazed with sausage fat, jade greens alongside translucent sausage coins, and golden crust lifting in sheets",
        "visualZh": "米粒被腊油润成琥珀色，旁边是翠绿青菜与半透明腊肠片，金黄锅巴成片掀起",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "The spoon brings up a rigid sheet rather than loose grains",
        "signalZh": "勺子翻上来的是硬挺脆片而不是散粒"
      }
    }
  ],
  "tips": [
    "One slow topping, one fast — that is the whole rule of the paired pot.",
    "Slice the sausage on the diagonal. More surface area means more rendered fat into the rice.",
    "Rest before opening. The crust releases from the pot wall during those 5 minutes."
  ],
  "tipsZh": [
    "一样慢件、一样快件——这就是双拼锅的全部规则。",
    "腊肠要斜刀切。接触面越大，渗进米饭的油越多。",
    "开盖前一定要静置。那5分钟里锅巴会自己脱离锅壁。"
  ],
  "relatedSlugs": [
    "clay-pot-rice",
    "lap-cheong-claypot-rice"
  ],
  "image": "/images/recipes/lap-cheong-claypot-rice.webp"
};
