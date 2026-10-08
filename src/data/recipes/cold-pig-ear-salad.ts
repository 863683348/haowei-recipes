import type { Recipe } from "@/lib/types";

/** Spicy Cold Pig Ear Salad (凉拌猪耳) (凉拌猪耳) — Day batch */
export const cold_pig_ear_salad: Recipe = {
  "id": "cold-pig-ear-salad",
  "slug": "cold-pig-ear-salad",
  "titleEn": "Spicy Cold Pig Ear Salad (凉拌猪耳)",
  "titleZh": "凉拌猪耳",
  "pinyin": "liáng bàn zhū ěr",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan (Chengdu)",
  "regionZh": "四川成都",
  "difficulty": "medium",
  "timeMin": 60,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version: one pig ear simmered with ginger, scallion, and star anise, then sliced thin and tossed in a garlicky chili-vinegar dressing. Restaurant version uses the classic 夫妻肺片 red-oil base with Sichuan peppercorn oil and peanut crumbs, and slices the ear paper-thin on a bias.",
  "versionNoteZh": "家庭版：一只猪耳加姜、葱、八角煮透，切薄片拌蒜香醋辣汁。餐厅版用夫妻肺片的红油底，加花椒油和花生碎，并斜刀片成薄如纸的片。",
  "tags": [
    "cold",
    "appetizer",
    "spicy",
    "medium",
    "protein"
  ],
  "dietary": [
    "none"
  ],
  "story": "Pig ear is the textural joke of Sichuan cold cuts: there is almost no meat on it, but the layers of cartilage and skin give a crunch that no muscle can match. Chengdu's 凉拌猪耳 is a beer snack, a 卤味 counter staple, and one of the most-ordered plates at any late-night 串串 joint. The home version rewards patience in the poaching stage — undercooked ear is rubbery in a bad way, and properly cooked ear is snappy in a good way.",
  "storyZh": "猪耳是四川凉拌菜里的口感担当：几乎没有肉，但软骨与皮的层次带来的脆感，任何肌肉都比不了。成都的凉拌猪耳是下酒菜、卤味摊的常驻、深夜串串店里点得最多的一碟。家常版考验的是煮制阶段的耐心——煮不透的耳是难嚼的橡皮，煮到位的是利落的脆。",
  "ingredients": [
    {
      "id": "cpe-ear",
      "nameEn": "pig ear, cleaned",
      "nameZh": "猪耳，洗净",
      "amountMetric": "1 ear (about 300 g)",
      "amountUS": "about 10 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Ask the butcher to singe and scrape it, or buy it pre-cooked from an Asian deli to cut the total time to 15 minutes.",
      "noteZh": "请肉铺烧毛刮净，或直接买亚超熟猪耳，总耗时可压到 15 分钟。"
    },
    {
      "id": "cpe-ginger",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "生姜，切片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "cpe-scallion",
      "nameEn": "scallions, cut into lengths",
      "nameZh": "小葱，切段",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cpe-star-anise",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "1 pod",
      "amountUS": "1 pod",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "cpe-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "1 tbsp (15 ml)",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cpe-garlic",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cpe-chili-oil",
      "nameEn": "chili oil, with sediment",
      "nameZh": "辣椒油（带辣椒渣）",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-oil"
    },
    {
      "id": "cpe-vinegar",
      "nameEn": "Chinkiang black vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "1 tbsp (15 ml)",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "cpe-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp (15 ml)",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cpe-pepper",
      "nameEn": "toasted Sichuan peppercorn, ground",
      "nameZh": "花椒面",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "cpe-sesame-seeds",
      "nameEn": "toasted sesame seeds and crushed peanuts",
      "nameZh": "熟芝麻与花生碎",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-seeds"
    }
  ],
  "steps": [
    {
      "text": "Scrub the pig ear under cold water, paying attention to the folds where hair and dirt hide. Put it in a pot, cover with cold water, and bring to a boil. Boil hard for 2 minutes, then dump the water and rinse the ear. This removes the barnyard smell.",
      "textZh": "冷水冲洗猪耳，重点搓洗藏污纳垢的褶皱。放入锅中加冷水没过，烧开后大火煮 2 分钟，倒掉水并冲洗猪耳。这一步去腥臊。",
      "stateNote": {
        "visual": "Grey-brown foam rises to the surface and the first water turns cloudy; the ear looks cleaner and paler after rinsing",
        "visualZh": "灰褐色浮沫涌上水面，头道水变浑；冲洗后猪耳更干净、颜色更浅",
        "heat": "high",
        "timeRef": "2 minutes at a hard boil",
        "timeRefZh": "大火沸煮 2 分钟",
        "signal": "The water smells of scum rather than meat — pour it all out, do not skim only",
        "signalZh": "水闻起来是腥沫味而非肉香——整锅倒掉，别只撇沫"
      }
    },
    {
      "text": "Return the ear to the clean pot with fresh water to cover, plus ginger, scallion, star anise, and Shaoxing wine. Bring to a boil, then drop to a bare simmer and cook for 35-40 minutes. Do not boil hard — a rolling boil toughens the skin.",
      "textZh": "猪耳回净锅，加清水没过，放姜片、葱段、八角、黄酒。烧开后转微沸，煮 35-40 分钟。别大火滚——滚水会把皮煮老。",
      "stateNote": {
        "visual": "Surface barely trembles with tiny bubbles breaking every second or two; the water stays almost clear",
        "visualZh": "水面几乎不起波澜，每一两秒才冒一个小泡，汤汁始终接近清澈",
        "heat": "low",
        "timeRef": "35-40 minutes at a bare simmer",
        "timeRefZh": "微沸 35-40 分钟",
        "signal": "A skewer slides into the thickest part of the ear with no resistance, and the cartilage near the base has gone from hard to yielding",
        "signalZh": "竹签能毫无阻力地插入最厚的部位，根部附近的软骨由硬转软"
      }
    },
    {
      "text": "Transfer the hot ear straight into a bowl of ice water for 5 minutes. This contracts the skin and firms the cartilage, which is what makes it slice cleanly instead of squashing under the knife.",
      "textZh": "热猪耳直接投入冰水 5 分钟。这会让皮收紧、软骨变脆，切片时才能利落成型而不是被刀压扁。",
      "stateNote": {
        "visual": "The ear tightens visibly and the surface turns from soft and floppy to firm and slightly shiny",
        "visualZh": "猪耳明显收紧，表面由松软塌垂变为紧实微亮",
        "timeRef": "5 minutes in ice water",
        "timeRefZh": "冰水 5 分钟",
        "signal": "Press a finger into the thick part — it springs back instead of denting",
        "signalZh": "手指按压最厚处——会回弹而不是凹陷"
      }
    },
    {
      "text": "Pat the ear completely dry. Slice it across the grain as thinly as you can, on a slight bias, so each slice shows the layered stripes of skin, fat, and cartilage. Pile the slices in a bowl.",
      "textZh": "把猪耳彻底擦干。逆着纹理斜刀切成尽量薄的片，让每片都能看到皮、脂、软骨的层次条纹。切好堆入碗中。",
      "stateNote": {
        "visual": "Each slice shows clean parallel bands: translucent amber skin, white fat, and opaque white cartilage",
        "visualZh": "每片都能看到清晰的平行层带：半透明的琥珀色皮、白色脂肪和乳白软骨",
        "signal": "The knife cuts with a faint crisp resistance and the slices hold their shape rather than curling into tubes",
        "signalZh": "下刀有轻微的脆阻力，切片保持平整而不卷成筒状"
      },
      "tip": "Chilling the ear for 20 minutes in the fridge before slicing makes paper-thin cuts much easier.",
      "tipZh": "切之前放冰箱冷藏 20 分钟，切薄片会容易得多。"
    },
    {
      "text": "Whisk together minced garlic, chili oil with its sediment, Chinkiang vinegar, light soy sauce, and ground Sichuan peppercorn. Pour over the slices and toss well. Finish with sesame seeds and crushed peanuts. Rest 10 minutes before serving so the slices take up the dressing.",
      "textZh": "把蒜末、带渣辣椒油、镇江香醋、生抽和花椒面调匀。浇在耳片上拌匀。最后撒芝麻和花生碎。静置 10 分钟让耳片吸汁再上桌。",
      "stateNote": {
        "visual": "Every slice is lacquered red and glistening; dark chili sediment clings to the cut faces and nut crumbs speckle the pile",
        "visualZh": "每片都裹着红亮的油衣，深色辣椒渣附着在切面上，花生碎点缀其间",
        "timeRef": "10 minutes resting",
        "timeRefZh": "静置 10 分钟",
        "signal": "The first bite gives crunch, then heat, then the numbing tingle — the Sichuan trio in that order",
        "signalZh": "第一口是脆，接着是辣，然后是麻——川味三件套按序登场"
      }
    }
  ],
  "tips": [
    "Blanch and discard the first water. It is the single most important step for a clean-tasting result.",
    "Simmer, never boil. A hard boil tightens the skin into something you cannot bite through.",
    "Ice-bath the ear before slicing. Warm ear smears under the knife instead of slicing.",
    "Slice thin on a bias — the layered cross-section is the whole point of eating pig ear.",
    "Buy pre-cooked pig ear from an Asian deli and the whole dish takes 15 minutes."
  ],
  "tipsZh": [
    "焯水后倒掉头道水。这是成品味道干净与否最关键的一步。",
    "只可微沸，不可滚煮。大火会把皮煮得咬不动。",
    "切片前务必冰镇。热耳下刀会被压成糊而不是成片。",
    "斜刀切薄——那层层截面正是吃猪耳的意义所在。",
    "直接买亚超的熟猪耳，整道菜 15 分钟搞定。"
  ],
  "relatedSlugs": [
    "fu-qi-fei-pian",
    "kou-shui-chicken",
    "cold-shredded-chicken",
    "suan-ni-bai-rou"
  ],
  "image": "/images/recipes/fu-qi-fei-pian.webp"
};
