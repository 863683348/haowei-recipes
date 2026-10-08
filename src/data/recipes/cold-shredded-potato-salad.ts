import type { Recipe } from "@/lib/types";

/** Cold Shredded Potato Salad (凉拌土豆丝) (凉拌土豆丝) — Day batch */
export const cold_shredded_potato_salad: Recipe = {
  "id": "cold-shredded-potato-salad",
  "slug": "cold-shredded-potato-salad",
  "titleEn": "Cold Shredded Potato Salad (凉拌土豆丝)",
  "titleZh": "凉拌土豆丝",
  "pinyin": "liáng bàn tǔ dòu sī",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version: shredded potato blanched 60 seconds, shocked in ice water, and tossed with vinegar, chili oil, and toasted Sichuan peppercorn. Restaurant version adds shredded green pepper and a pinch of sugar, and blanches in batches so every strand hits the water at the same temperature.",
  "versionNoteZh": "家庭版：土豆丝焯水 60 秒、冰水过凉，拌醋、辣椒油和花椒面。餐厅版会加青椒丝和一撮糖，并分批焯水让每根丝受热一致。",
  "tags": [
    "cold",
    "quick",
    "30-min",
    "vegetarian",
    "spicy",
    "vegan"
  ],
  "dietary": [
    "vegan"
  ],
  "story": "The same potato that becomes 酸辣土豆丝 in a screaming hot wok becomes something entirely different when you shock it in ice water: the starch sets, the strands turn glassy, and the crunch lasts for hours in the fridge. Sichuan cooks treat the two dishes as siblings, not variations — one for winter appetite, one for summer. The secret both share is soaking the raw shreds in cold water to wash off the surface starch, which is what separates crisp from gluey.",
  "storyZh": "同一个土豆，在滚烫的锅里是酸辣土豆丝，冰水一激就变成另一样东西：淀粉凝固、丝条透亮，脆感在冰箱里能撑几小时。四川厨子把这两道当兄弟菜而非变体——一个管冬天的食欲，一个管夏天。两者共用一个秘诀：生丝先泡冷水洗掉表面淀粉，这正是脆与黏的分界。",
  "ingredients": [
    {
      "id": "csp-potato",
      "nameEn": "waxy potatoes, peeled",
      "nameZh": "脆土豆，去皮",
      "amountMetric": "400 g",
      "amountUS": "about 14 oz",
      "category": "produce",
      "pantry": "local",
      "note": "Use waxy or all-purpose potatoes, not starchy russets — russets disintegrate in the blanch.",
      "noteZh": "用脆质或通用土豆，别用粉质的褐皮土豆——焯水就散。"
    },
    {
      "id": "csp-green-pepper",
      "nameEn": "green bell pepper, thinly shredded",
      "nameZh": "青椒，切细丝",
      "amountMetric": "1/2 pepper",
      "amountUS": "1/2 pepper",
      "category": "produce",
      "pantry": "local",
      "termKey": "green-pepper"
    },
    {
      "id": "csp-garlic",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "amountMetric": "3 cloves",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "csp-vinegar",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "amountMetric": "2 tbsp (30 ml)",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    },
    {
      "id": "csp-chili-oil",
      "nameEn": "chili oil",
      "nameZh": "辣椒油",
      "amountMetric": "1 tbsp (15 ml)",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-oil"
    },
    {
      "id": "csp-sichuan-pepper",
      "nameEn": "toasted Sichuan peppercorn, ground",
      "nameZh": "花椒面（焙香磨碎）",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "csp-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "csp-sesame-oil",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Peel the potatoes and cut them into the thinnest matchsticks you can manage, about 2 mm thick. Soak the shreds in a bowl of cold water for 5 minutes, then change the water once. The water will look cloudy — that is the surface starch you are removing.",
      "textZh": "土豆去皮，切成尽量细的火柴丝，约 2 毫米厚。切好的丝泡冷水 5 分钟，换一次水。水会变浑浊——那就是要洗掉的表面淀粉。",
      "stateNote": {
        "visual": "First soak water is milky white; after the change it is nearly clear and the shreds look glassy and separate",
        "visualZh": "第一次泡的水呈乳白；换水后近乎清澈，土豆丝看起来透亮、根根分明",
        "timeRef": "5 minutes per soak",
        "timeRefZh": "每次泡 5 分钟",
        "signal": "The shreds no longer stick together when you lift a handful out of the water",
        "signalZh": "抓一把出水时不再互相粘连"
      },
      "tip": "A julienne peeler or mandoline gives even shreds in a tenth of the time.",
      "tipZh": "用切丝削皮器或擦板，十分之一的时间就能切出均匀的丝。"
    },
    {
      "text": "Bring a pot of water to a rolling boil. Add the shreds all at once and blanch for exactly 60 seconds. They should still have a faint raw snap at the center — they will finish in the ice bath and you want them to stop short of tender.",
      "textZh": "锅中水剧烈沸腾。土豆丝一次下锅，严格焯 60 秒。中心应仍有微生的脆硬——后面冰水还会继续熟成，要留余地。",
      "stateNote": {
        "visual": "Shreds shift from opaque cream to translucent and bend without snapping when lifted on a spoon",
        "visualZh": "土豆丝由不透明的乳白转为半透明，用勺子托起时能弯而不断",
        "heat": "high",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "signal": "Bite one: it resists, then gives — no raw starchy crunch, no softness either",
        "signalZh": "尝一根：先有阻力再断开——无生淀粉的硬脆，也没有软烂"
      }
    },
    {
      "text": "Drain instantly and dump the shreds into a bowl of ice water. Leave them for 2 minutes, until completely cold. This is the step that sets the crunch — the starch retrogrades and the strands firm up noticeably.",
      "textZh": "立刻捞出倒入冰水中。静置 2 分钟至彻底冷却。这一步决定脆感——淀粉回凝，丝条明显变挺。",
      "stateNote": {
        "visual": "Shreds look almost glass-clear and stiff; the ice has mostly melted from the residual heat",
        "visualZh": "土豆丝近乎玻璃般透明、硬挺，冰块因余温融化大半",
        "timeRef": "2 minutes in ice water",
        "timeRefZh": "冰水 2 分钟",
        "signal": "Touch the bowl — it is cold, and a strand held between fingers feels firm, not floppy",
        "signalZh": "摸碗壁是凉的，手指捏起一根感觉挺实不塌"
      }
    },
    {
      "text": "Drain thoroughly and gently press out the water with your hands. Add the shredded green pepper, minced garlic, rice vinegar, salt, and chili oil.",
      "textZh": "彻底沥干，用手轻压挤出水分。加入青椒丝、蒜末、米醋、盐和辣椒油。",
      "stateNote": {
        "visual": "No drips from the colander after 10 seconds; shreds are matte and separate, pepper shreds bright green against them",
        "visualZh": "静置 10 秒滤网不再滴水，土豆丝哑光分明，青椒丝翠绿点缀其间",
        "signal": "Squeezing a handful yields no water",
        "signalZh": "抓一把用力捏也不出水"
      }
    },
    {
      "text": "Toss gently with chopsticks, lifting and folding rather than stirring, to keep the strands from breaking. Finish with the ground toasted Sichuan peppercorn and sesame oil. Rest 5 minutes so the vinegar penetrates, then serve cold.",
      "textZh": "用筷子轻拌，从底部翻挑而非搅动，避免弄断丝条。最后撒花椒面、淋香油。静置 5 分钟让醋渗入，冷食上桌。",
      "stateNote": {
        "visual": "Strands are coated in a thin red-amber film, flecked with dark peppercorn specks; nothing pools at the bottom",
        "visualZh": "土豆丝裹着薄薄一层红琥珀色油膜，点缀深色花椒碎，碗底无积液",
        "timeRef": "5 minutes resting",
        "timeRefZh": "静置 5 分钟",
        "signal": "The vinegar smell is rounded, and you get the numbing tingle of Sichuan pepper within a few seconds of tasting",
        "signalZh": "醋味变圆润，入口几秒后能感到花椒的麻意"
      }
    }
  ],
  "tips": [
    "Soak the raw shreds in cold water and change it once. Skipping this makes the blanch water gluey and the result soft.",
    "Waxy potatoes only. Russet potatoes fall apart into a starchy mush in the pot.",
    "Blanch 60 seconds, no more. The ice bath does the rest of the cooking.",
    "Toast whole Sichuan peppercorns in a dry pan for 1 minute before grinding — pre-ground pepper loses its aroma fast.",
    "This keeps well for a day in the fridge, unlike most dressed salads. The crunch holds."
  ],
  "tipsZh": [
    "生丝要泡冷水并换一次水。省掉这步，焯水就发黏、成品发软。",
    "只用脆质土豆。褐皮土豆下锅就散成淀粉糊。",
    "焯水 60 秒封顶，剩下的交给冰水。",
    "花椒要整粒干锅焙 1 分钟再磨——预磨的花椒面跑味很快。",
    "这道菜冷藏一天仍好吃，不像多数凉拌菜。脆感不掉。"
  ],
  "relatedSlugs": [
    "spicy-potato-shreds",
    "cold-wood-ear",
    "lao-hu-cai-tiger-salad",
    "cold-bean-sprout-salad"
  ],
  "image": "/images/recipes/spicy-potato-shreds.webp"
};
