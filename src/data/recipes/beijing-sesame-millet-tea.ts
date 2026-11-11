import type { Recipe } from "@/lib/types";

/** Beijing Sesame Millet Tea (面茶) — Day batch */
export const beijing_sesame_millet_tea: Recipe = {
  "id": "beijing-sesame-millet-tea",
  "slug": "beijing-sesame-millet-tea",
  "titleEn": "Beijing Sesame Millet Tea",
  "titleZh": "面茶",
  "pinyin": "miàn chá",
  "cuisine": "京味小吃",
  "cuisineEn": "Beijing",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version cooks the millet flour gruel slightly thicker so it holds the sesame paste in ripples; the stall version pours it thinner and hotter so a regular can drink it down in three mouthfuls standing at the counter without a spoon.",
  "versionNoteZh": "家常版熬得略稠，好让芝麻酱在表面挂出波纹；摊子版调得更稀更烫，老主顾站在柜台边不用勺，三口就能喝完一碗。",
  "tags": [
    "40-min",
    "breakfast",
    "beijing",
    "street-food",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Mian cha is the Beijing breakfast almost nobody outside the city has heard of: a bowl of millet-flour gruel with a thick lattice of sesame paste poured over the top and a dusting of toasted sesame and salt. The trick is that you do not use a spoon. You tilt the bowl and drink it down, and if you have done it right, the sesame paste coats your upper lip in a white moustache - which is how everyone knows you are a local.",
  "storyZh": "面茶是几乎只有北京人才知道的早点：一碗小米面熬的糊，上面浇一层厚厚的芝麻酱，再撒熟芝麻和芝麻盐。诀窍是不用勺——端起碗转着圈喝。喝得好，上唇会留一圈白胡子，一看就是本地人。",
  "ingredients": [
    {
      "id": "bsmt-01",
      "nameEn": "millet flour (proso or foxtail millet flour)",
      "nameZh": "糜子面/小米面",
      "pinyin": "méi zi miàn",
      "amountMetric": "80 g",
      "amountUS": "2/3 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Asian groceries sell it as 糜子面 or 小米面; you can grind hulled millet in a coffee grinder in batches if you cannot find the flour",
      "noteZh": "亚洲超市标『糜子面』或『小米面』；买不到可用咖啡磨把去壳小米分次打成粉"
    },
    {
      "id": "bsmt-02",
      "nameEn": "water",
      "nameZh": "水",
      "pinyin": "shuǐ",
      "amountMetric": "800 ml",
      "amountUS": "3 1/3 cups",
      "category": "other",
      "pantry": "local",
      "note": "Hold back 150 ml to make the cold slurry first; the rest goes in hot",
      "noteZh": "先留150毫升调冷浆，其余加热水入锅"
    },
    {
      "id": "bsmt-03",
      "nameEn": "Chinese sesame paste",
      "nameZh": "芝麻酱",
      "pinyin": "zhī má jiàng",
      "amountMetric": "40 g",
      "amountUS": "2 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Chinese sesame paste is made from toasted sesame and is much darker and more bitter than tahini; tahini will work but the flavour is milder",
      "noteZh": "中式芝麻酱由炒芝麻制成，颜色更深、微苦，与中东芝麻酱不同；后者可用但味更淡",
      "termKey": "sesame-paste"
    },
    {
      "id": "bsmt-04",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "This is for thinning the sesame paste; use oil, never water, or the paste will seize into lumps",
      "noteZh": "用于澥开芝麻酱；必须用油，用水会结块",
      "termKey": "sesame-oil"
    },
    {
      "id": "bsmt-05",
      "nameEn": "toasted sesame seeds",
      "nameZh": "熟芝麻",
      "pinyin": "shú zhī má",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-seeds"
    },
    {
      "id": "bsmt-06",
      "nameEn": "fine sea salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "4 g",
      "amountUS": "3/4 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Half goes into the gruel, half is mixed with ground toasted sesame for sprinkling",
      "noteZh": "一半调入糊中，一半与熟芝麻粉混合撒面"
    },
    {
      "id": "bsmt-07",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Just a pinch; the bowl should be savoury and warming, not hot",
      "noteZh": "只需一点点；整碗要咸香暖胃，不是辣",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Whisk the millet flour into 150 ml of cold water until it is a completely smooth, lump-free slurry with the texture of single cream.",
      "textZh": "小米面用150毫升冷水调成完全无颗粒的稀浆，稠度如稀奶油。",
      "zhHint": "先调冷浆",
      "stateNote": {
        "visual": "Slurry pours in a smooth pale ribbon with no dry pockets or visible lumps when you tilt the bowl",
        "visualZh": "倾斜碗时稀浆呈浅色光滑带状流下，无干粉团或可见颗粒",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "Drag a finger through it on the spoon - the trail is perfectly clean",
        "signalZh": "手指在勺背划过——痕迹完全光滑无疙瘩"
      },
      "tip": "Always slurry with cold water first. Flour dropped straight into hot water clumps instantly and no amount of whisking fixes it.",
      "tipZh": "一定先用冷水调浆。干粉直接下热水会瞬间结块，再怎么搅也搅不开。"
    },
    {
      "text": "Bring the remaining 650 ml water with half the salt and the white pepper to a boil, then lower the heat to a bare simmer.",
      "textZh": "余下650毫升水加一半盐与白胡椒粉煮开，转最小火保持微沸。",
      "zhHint": "水开转小火",
      "stateNote": {
        "visual": "Surface ripples gently with small breaking bubbles rather than a rolling boil",
        "visualZh": "水面轻微起伏、冒细小气泡，而非剧烈翻滚",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "Steam lifts in a thin steady wisp, not a thick column",
        "signalZh": "蒸汽呈细而稳定的一缕，不是粗大的汽柱"
      }
    },
    {
      "text": "Pour the slurry into the simmering water in a thin stream while whisking constantly, then keep whisking for 5 minutes as it thickens.",
      "textZh": "稀浆细流缓缓倒入微沸水中，同时不停搅打，继续搅5分钟至变稠。",
      "zhHint": "细流冲入不停搅",
      "stateNote": {
        "visual": "The pale gruel turns glossy and translucent; it falls from the whisk in a thick slow ribbon instead of dripping",
        "visualZh": "浅色糊体转为油亮半透明；从打蛋器落下呈浓稠缓带而非滴落",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "A spoon dragged across the bottom leaves a channel that closes slowly behind it",
        "signalZh": "勺子刮过锅底留下的沟痕缓慢合拢"
      }
    },
    {
      "text": "Cook 8 more minutes over the lowest heat, stirring every minute, until the raw flour taste is gone and it smells faintly nutty.",
      "textZh": "最小火再煮8分钟，每分钟搅一次，至生粉味消失、飘出淡淡坚果香。",
      "zhHint": "小火再熬8分钟",
      "stateNote": {
        "visual": "Bubbles break slowly and heavily at the surface; the gruel has gone from translucent to a soft opaque beige",
        "visualZh": "表面气泡缓慢沉重破裂；糊体由半透明转为柔和的不透明米色",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "low",
        "signal": "Taste a small amount - it should be smooth and nutty, never floury or pasty",
        "signalZh": "取少量尝味——应顺滑带坚果香，不能有生粉味或浆糊感"
      },
      "tip": "Millet flour scorches fast. Keep the heat at its lowest and keep stirring - a burnt bottom ruins the whole pot.",
      "tipZh": "小米面极易糊底。火力开到最小并持续搅拌——糊了底整锅就废了。"
    },
    {
      "text": "Thin the sesame paste with the sesame oil, a teaspoon at a time, until it pours in a slow ribbon but still holds a line on the surface.",
      "textZh": "芝麻酱分次加香油（每次1小勺）澥开，至能缓慢流下、滴在表面仍能保持线条。",
      "zhHint": "香油澥芝麻酱",
      "stateNote": {
        "visual": "Paste goes from a stiff putty to a glossy, freely pourable dark tan that ribbons off the spoon and holds a raised trail for two seconds",
        "visualZh": "芝麻酱由硬膏状变为油亮可流动的深褐色，从勺上成带状流下，痕迹可停留两秒",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "low",
        "signal": "Drizzle a line across the back of a spoon - it should sit proud before slowly levelling out",
        "signalZh": "在勺背淋一条线——应能凸起停留再缓慢摊平"
      },
      "tip": "Never thin sesame paste with water. It seizes into grey lumps and you cannot bring it back.",
      "tipZh": "千万别用水澥芝麻酱，会结灰色硬块，救不回来。"
    },
    {
      "text": "Ladle the hot gruel into bowls, drizzle the sesame paste over the top in a lattice, and scatter with the toasted sesame seeds mixed with the remaining salt. Serve immediately.",
      "textZh": "热糊盛入碗中，芝麻酱在表面淋成网格状，撒上熟芝麻与余盐拌匀的芝麻盐，立刻上桌。",
      "zhHint": "淋酱撒芝麻盐",
      "stateNote": {
        "visual": "Pale beige gruel with dark tan paste sitting in raised lines on the surface and white sesame seeds scattered over; steam rises in a steady plume",
        "visualZh": "米色糊体上深褐酱汁呈凸起线条，表面撒着白色芝麻，蒸汽稳定上腾",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "The paste should still show clean raised lines when you set the bowl down - if it has sunk in, the gruel cooled too much",
        "signalZh": "放下碗时酱线仍应清晰凸起——若已沉入糊中说明糊不够烫"
      }
    }
  ],
  "tips": [
    "Slurry cold, pour thin, whisk constantly - those three habits are the whole technique.",
    "Thin the sesame paste with oil only, a teaspoon at a time; too much at once makes it runny and it will sink straight to the bottom of the bowl.",
    "Drink it the Beijing way: no spoon. Tilt the bowl and sip round the rim so you get gruel and paste together."
  ],
  "tipsZh": [
    "冷水调浆、细流冲入、不停搅拌——三个习惯就是全部手法。",
    "芝麻酱只能用油澥，一次一小勺；一次加太多会过稀，直接沉到碗底。",
    "按北京人的喝法：不用勺。转着碗沿碗边喝，这样每一口都有糊也有酱。"
  ],
  "relatedSlugs": [
    "northern-cornmeal-gruel",
    "millet-congee",
    "ji-dan-guan-bing"
  ],
  "image": "/images/recipes/northern-cornmeal-gruel.webp"
};
