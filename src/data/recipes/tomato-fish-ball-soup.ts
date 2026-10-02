import type { Recipe } from "@/lib/types";

/** Tomato Fish Ball Soup (番茄鱼丸汤) (番茄鱼丸汤) — Day batch */
export const tomato_fish_ball_soup: Recipe = {
  "id": "fan-qie-yu-wan-tang",
  "slug": "tomato-fish-ball-soup",
  "titleEn": "Tomato Fish Ball Soup (番茄鱼丸汤)",
  "titleZh": "番茄鱼丸汤",
  "pinyin": "fān qié yú wán tāng",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 3,
  "version": "family",
  "versionNote": "Restaurants hand-slap fish paste for a bouncy texture; the family version uses good store-bought fish balls and focuses on the tomato broth, which needs no special skill.",
  "versionNoteZh": "餐厅手工摔打鱼浆求弹牙；家庭版买现成好鱼丸，重点放在番茄汤底上，不需要特殊手法。",
  "tags": [
    "30-min",
    "soup",
    "seafood",
    "light",
    "kid-friendly",
    "cantonese"
  ],
  "dietary": [
    "none"
  ],
  "story": "The soup my mother made when someone had a cold: clear, sour-sweet, and gone in five minutes. Fish balls were the shortcut that made it possible on a Tuesday night.",
  "storyZh": "我妈在有人感冒时煮的汤：清亮酸甜，五分钟见底。鱼丸是让它在周二晚上也能上桌的捷径。",
  "ingredients": [
    {
      "id": "ing-fishball",
      "nameEn": "white fish balls",
      "nameZh": "白鱼丸",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Found frozen in Asian groceries; look for ones with a springy bite.",
      "noteZh": "亚洲超市冷冻区有售，选口感弹牙的。",
      "termKey": "white-fish"
    },
    {
      "id": "ing-tomato",
      "nameEn": "ripe tomatoes, cut in wedges",
      "nameZh": "成熟番茄（切块）",
      "amountMetric": "3 medium (400 g)",
      "amountUS": "3 medium (14 oz)",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato"
    },
    {
      "id": "ing-ginger",
      "nameEn": "ginger, shredded",
      "nameZh": "姜（切丝）",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ing-cornstarch",
      "nameEn": "cornstarch slurry (1 tsp starch + 2 tsp water)",
      "nameZh": "水淀粉（1 茶匙淀粉+2 茶匙水）",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "ing-sesame",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "ing-wp",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "ing-scallion",
      "nameEn": "scallion, chopped",
      "nameZh": "葱花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Heat 1 tbsp oil over medium-high, add tomato wedges and a pinch of salt. Stir-fry 4 minutes until they break down into a saucy base.",
      "textZh": "中大火热 1 汤匙油，下番茄块和一小撮盐，翻炒 4 分钟至化成酱状汤底。",
      "stateNote": {
        "visual": "Tomatoes lose their shape and the pan is slick with red juice.",
        "visualZh": "番茄失去形状，锅面挂满红色汁水。",
        "signal": "Skins detach and curl at the edges.",
        "signalZh": "番茄皮脱落、边缘卷起。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Add 1 L hot water and the ginger. Bring to a boil and let it bubble hard for 3 minutes to pull the tomato into the broth.",
      "textZh": "加 1 升热水和姜丝。煮开后大火滚 3 分钟，把番茄味道逼进汤里。",
      "stateNote": {
        "visual": "Broth turns cloudy orange then settles into a light red.",
        "visualZh": "汤先变浑浊橙红，随后转为清亮淡红。",
        "signal": "The sharp raw-tomato smell softens into a sweet aroma.",
        "signalZh": "生番茄的青涩味转为甜香。",
        "timeRef": "3 minutes at a hard boil",
        "timeRefZh": "大火滚 3 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Slide in the fish balls and lower to medium. Simmer 5-6 minutes until they float and swell slightly.",
      "textZh": "下鱼丸转中火，煮 5-6 分钟至鱼丸浮起并略微膨胀。",
      "stateNote": {
        "visual": "Fish balls rise to the surface and look plumper and smoother.",
        "visualZh": "鱼丸浮到水面，看起来更饱满光滑。",
        "signal": "A skewer goes through with no resistance and the center is hot.",
        "signalZh": "竹签轻松穿透，中心已烫。",
        "timeRef": "5-6 minutes",
        "timeRefZh": "5-6 分钟",
        "heat": "medium"
      }
    },
    {
      "text": "Stir the slurry and pour it in slowly while swirling the pot. Cook 30 seconds until the soup lightly coats a spoon.",
      "textZh": "搅匀水淀粉，边转锅边缓缓淋入，煮 30 秒至汤能薄薄挂勺。",
      "stateNote": {
        "visual": "Soup gains a faint gloss and tiny bubbles slow down.",
        "visualZh": "汤面出现淡淡光泽，小泡变缓。",
        "signal": "A spoonful leaves a thin film on the back of the spoon.",
        "signalZh": "勺背挂上一层薄汁。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium"
      }
    },
    {
      "text": "Turn off the heat, add white pepper, sesame oil and scallion. Taste and add salt — fish balls are already seasoned.",
      "textZh": "关火，加白胡椒粉、香油和葱花。尝味后再补盐——鱼丸本身已有咸味。",
      "stateNote": {
        "visual": "Scallion stays vivid green; a thin ring of sesame oil floats on top.",
        "visualZh": "葱花保持鲜绿，表面浮一圈香油。",
        "signal": "The aroma turns nutty from the sesame oil within seconds.",
        "signalZh": "几秒内香气转为芝麻坚果香。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "Salt the tomatoes while frying — it draws out water and speeds up the breakdown.",
    "Do not boil hard once the fish balls are in, or they turn rubbery.",
    "Add a handful of baby bok choy in the last 2 minutes for a complete one-bowl meal."
  ],
  "tipsZh": [
    "炒番茄时先加盐——出水更快，更容易炒烂。",
    "下鱼丸后不要大火猛煮，否则会变橡皮。",
    "最后 2 分钟加一把小油菜，一锅就是完整一餐。"
  ],
  "relatedSlugs": [
    "tomato-fish-slices",
    "tomato-basa-fillet",
    "tomato-egg-drop-soup",
    "tomato-beef-soup"
  ],
  "image": "/images/recipes/seafood-geda-soup.webp"
};
