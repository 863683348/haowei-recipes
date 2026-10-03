import type { Recipe } from "@/lib/types";

/** Eggplant Stir-Fried in Sweet Bean Paste (酱爆茄子) (酱爆茄子) — Day batch */
export const soy_paste_eggplant: Recipe = {
  "id": "soy-paste-eggplant",
  "slug": "soy-paste-eggplant",
  "titleEn": "Eggplant Stir-Fried in Sweet Bean Paste (酱爆茄子)",
  "titleZh": "酱爆茄子",
  "pinyin": "jiàng bào qié zi",
  "cuisine": "京菜",
  "cuisineEn": "Beijing / Northern",
  "region": "Beijing / Northern China",
  "regionZh": "北京 / 华北",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "In a Northern kitchen this is a classic \"bao\" (爆) dish: the paste must be fried in hot oil until fragrant before anything else touches it, and the wok stays screaming hot. The family version drops the deep-fry, softens the eggplant in a covered pan first, and uses a wide skillet so the paste still has room to bloom.",
  "versionNoteZh": "在北方厨房这是标准的「爆」菜：必须先热油把酱爆香再下其他东西，全程猛火。家常版去掉油炸，改用加盖焖软茄子，并用宽口平底锅给酱留出爆香空间。",
  "tags": [
    "northern",
    "eggplant",
    "vegetarian",
    "quick",
    "weeknight",
    "rice-friendly"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "酱 (jiang) is the northern Chinese word for the thick fermented pastes that anchor Beijing cooking — sweet wheat paste, soybean paste, and the darker ones aged in earthen jars. 酱爆 means \"blasted paste\": the sauce is fried alone in hot oil until it smells caramel-sweet and smoky, then the vegetable is tossed through it so every surface gets coated. It is the cheapest way to make eggplant taste like a restaurant dish.",
  "storyZh": "「酱」是北方人对那几口 thickening发酵酱的统称——甜面酱、黄豆酱，还有陶缸里存放更久的老酱。「酱爆」的意思是「把酱爆香」：热油先把酱单独炒到焦香甜、带一丝烟熏气，再让菜在里面翻个身，每一面都裹上酱。这是让茄子吃出馆子味最便宜的做法。",
  "ingredients": [
    {
      "id": "spe-eggplant",
      "nameEn": "Chinese or Japanese eggplant",
      "nameZh": "长茄子",
      "amountMetric": "2 medium (about 450 g)",
      "amountUS": "2 medium (about 1 lb)",
      "category": "produce",
      "pantry": "local",
      "termKey": "eggplant"
    },
    {
      "id": "spe-paste",
      "nameEn": "sweet wheat paste (tianmianjiang)",
      "nameZh": "甜面酱",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: hoisin sauce works in a pinch; yellow soybean paste is saltier — use 1 tbsp.",
      "noteZh": "替代：急用时可用海鲜酱；黄豆酱更咸，减到 1 大勺。",
      "termKey": "hoisin-sauce"
    },
    {
      "id": "spe-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "spe-sugar",
      "nameEn": "sugar",
      "nameZh": "白糖",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "spe-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: dry sherry.",
      "noteZh": "替代：干雪利酒。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "spe-garlic",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "spe-ginger",
      "nameEn": "ginger, minced",
      "nameZh": "姜末",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "spe-scallion",
      "nameEn": "scallion whites, cut into 2 cm pieces",
      "nameZh": "葱白段",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "spe-sesame-oil",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "spe-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "2.5 tbsp",
      "amountUS": "2.5 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Roll-cut the eggplant: rotate a quarter turn between each diagonal slice so you get wedge-shaped pieces with plenty of cut surface. Pat dry.",
      "textZh": "茄子滚刀块：每一刀斜切后转四分之一圈，得到切面多的楔形块。切好擦干水分。",
      "zhHint": "滚刀切块",
      "stateNote": {
        "visual": "Pieces are roughly equal, each with several flat cut faces rather than round ones",
        "visualZh": "大小基本均匀，每块都有几个平面切面而不是圆面",
        "signal": "No piece is thicker than about 3 cm at its widest",
        "signalZh": "最宽处都不超过 3 厘米"
      },
      "tip": "Cut surfaces are where the sauce grips. More flat faces = more jiang.",
      "tipZh": "切面就是挂酱的地方。平面越多，酱越入味。"
    },
    {
      "text": "Heat 2 tbsp oil over medium-high. Add eggplant in one layer and fry 4 minutes, stirring only twice, until golden in patches. Remove to a plate.",
      "textZh": "中大火热锅，倒 2 大勺油，茄子铺平一面煎 4 分钟，只翻两次，煎到斑驳金黄盛出。",
      "zhHint": "煎软去水",
      "stateNote": {
        "visual": "Skins blister and brown unevenly; flesh collapses and no longer springs back",
        "visualZh": "表皮起泡、上色不均；茄肉塌软不再回弹",
        "heat": "medium-high",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "The pan looks wet again — the eggplant has released and reabsorbed its water",
        "signalZh": "锅里重新变得湿亮——茄子出水又被收了回去"
      }
    },
    {
      "text": "Lower heat to medium. Add the last 1/2 tbsp oil, garlic, ginger and scallion whites. Stir 20 seconds until fragrant but not browned.",
      "textZh": "转中火，补最后 1/2 大勺油，下蒜末、姜末、葱白段，炒 20 秒出香不上色。",
      "zhHint": "小火爆香",
      "stateNote": {
        "visual": "Scallion whites turn glossy and translucent; garlic stays pale",
        "visualZh": "葱白变油亮、微微透明；蒜粒保持浅色",
        "heat": "medium",
        "timeRef": "20 seconds",
        "timeRefZh": "20 秒",
        "signal": "Fragrant steam rises — before any browning appears",
        "signalZh": "香气随蒸汽上来——在任何上色之前"
      }
    },
    {
      "text": "Add the sweet bean paste. Fry it in the oil for 45 seconds, pressing and stirring constantly, until it darkens slightly and smells caramel-sweet. This step is the whole dish.",
      "textZh": "下甜面酱，在油里炒 45 秒，不停用锅铲按压翻炒，炒到颜色略深、香气是焦糖甜。这一步就是整道菜的灵魂。",
      "zhHint": "酱爆出香",
      "stateNote": {
        "visual": "Paste loosens, then thickens again into a glossy dark-brown paste that coats the spoon",
        "visualZh": "酱从稠转稀，又重新变稠，成深褐油亮的挂勺状态",
        "heat": "medium",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "signal": "It smells sweet and toasted, not raw or floury — if it scorches, start over",
        "signalZh": "闻起来是焦香甜，而不是生酱味或粉味——一旦糊了就得重来"
      },
      "tip": "Keep it moving. Sweet paste is full of sugar and burns in seconds.",
      "tipZh": "手不要停。甜面酱含糖高，几秒钟就能糊。"
    },
    {
      "text": "Splash in the Shaoxing wine along the pan edge, then add soy sauce, sugar and 60 ml water. Stir to a loose sauce and bring it to a simmer.",
      "textZh": "沿锅边淋入黄酒，再加生抽、糖和 60 毫升水。搅成稀酱汁，煮到微沸。",
      "zhHint": "烹酒调汁",
      "stateNote": {
        "visual": "Sauce bubbles up and turns glossy; pale streaks of paste disappear into it",
        "visualZh": "酱汁冒泡并变得油亮；生酱的白条不见了",
        "heat": "medium",
        "timeRef": "about 1 minute",
        "timeRefZh": "约 1 分钟",
        "signal": "Small bubbles break steadily across the whole surface, not just the rim",
        "signalZh": "整个表面都在稳定冒小泡，而不只是锅边"
      }
    },
    {
      "text": "Return the eggplant. Toss over medium-high for 1–2 minutes until every piece is coated and glossy. Off the heat, stir in sesame oil and serve.",
      "textZh": "倒回茄子，中大火翻炒 1–2 分钟到每块都裹上酱汁、油亮发光。关火后拌入香油即可上桌。",
      "zhHint": "裹酱出锅",
      "stateNote": {
        "visual": "Every cut face is a uniform reddish-brown; nothing pools watery at the bottom",
        "visualZh": "每个切面都是均匀的酱褐色；锅底没有稀水积着",
        "heat": "medium-high",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "signal": "The sauce mounds on the plate instead of running — it has reduced enough",
        "signalZh": "装盘时酱汁能堆起来而不是流散——收汁到位了"
      }
    }
  ],
  "tips": [
    "Fry the paste in oil before adding any liquid — that is what \"bao\" means, and it is the difference between sauce and raw paste.",
    "Hoisin is sweeter and thinner than real tianmianjiang; if using it, cut the sugar.",
    "Scallion whites go in with the aromatics; save the greens for a raw garnish at the end.",
    "Great cold the next day — the Northern way is to eat it at room temperature with mantou."
  ],
  "tipsZh": [
    "任何液体之前都要先用油把酱爆香——这才是「爆」，酱汁和生酱味的区别就在这儿。",
    "海鲜酱比真正的甜面酱更甜更稀，用它的话糖要减量。",
    "葱白跟香料一起爆香，葱绿留到最后生撒做点缀。",
    "隔天凉吃也很好——北方人的吃法是配馒头、放至常温。"
  ],
  "relatedSlugs": [
    "minced-pork-eggplant",
    "jing-jiang-pork",
    "yu-xiang-eggplant"
  ],
  "image": "/images/recipes/di-san-xian.webp"
};
