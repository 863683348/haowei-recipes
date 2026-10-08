import type { Recipe } from "@/lib/types";

/** Winter Melon Meatball Soup (冬瓜丸子汤) (冬瓜丸子汤) — Day batch */
export const winter_melon_meatball_soup: Recipe = {
  "id": "winter-melon-meatball-soup",
  "slug": "winter-melon-meatball-soup",
  "titleEn": "Winter Melon Meatball Soup (冬瓜丸子汤)",
  "titleZh": "冬瓜丸子汤",
  "pinyin": "dōng guā wán zi tāng",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version: hand-mixed pork meatballs dropped straight into simmering winter melon broth, finished with white pepper and sesame oil. Restaurant version velvets the pork with egg white and cornstarch, poaches the meatballs separately so the broth stays glass-clear, and adds a few dried scallops for depth.",
  "versionNoteZh": "家庭版：手打猪肉丸直接下入微沸的冬瓜汤，以白胡椒和香油收尾。餐厅版会用蛋清淀粉给肉上浆，并把丸子单独汆熟以保持汤色清澈，还会加几粒干贝提鲜。",
  "tags": [
    "soup",
    "cantonese",
    "comfort-food",
    "medium",
    "protein"
  ],
  "dietary": [
    "none"
  ],
  "story": "Winter melon (冬瓜, dōng guā) is named for its season, not its temperature — it keeps through winter, which is exactly why Cantonese kitchens lean on it. In a clear soup it does something unusual: it absorbs the flavor of whatever it simmers in while contributing almost nothing of its own except a clean, faint sweetness and a texture that turns from firm to translucent-jelly in about twelve minutes. Paired with loosely packed pork meatballs, it makes the soup that Guangdong families serve when someone has a cold.",
  "storyZh": "冬瓜以季节得名，不是因为凉——它耐储存过冬，这正是粤菜厨房倚重它的原因。在清汤里它有个特别之处：吸味而不抢味，除了干净的微甜和十二分钟左右从硬挺到半透明胶质的口感转变，几乎不贡献别的味道。配上松散的猪肉丸，就是广东家里有人感冒时端出来的那碗汤。",
  "ingredients": [
    {
      "id": "wmm-melon",
      "nameEn": "winter melon, peeled and cut into 2 cm cubes",
      "nameZh": "冬瓜，去皮切 2 厘米方块",
      "amountMetric": "500 g",
      "amountUS": "about 1.1 lb",
      "category": "produce",
      "pantry": "asian",
      "termKey": "winter-melon",
      "note": "Remove all the pale green rind and the soft pith. The white flesh is what you want.",
      "noteZh": "削净浅绿色外皮和软瓤。要的是白色瓜肉。"
    },
    {
      "id": "wmm-pork",
      "nameEn": "ground pork, 20% fat",
      "nameZh": "猪肉馅（二八肥瘦）",
      "amountMetric": "300 g",
      "amountUS": "about 10 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "wmm-ginger",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜，切末",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "wmm-scallion",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱，切细花",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "wmm-cornstarch",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "cornstarch"
    },
    {
      "id": "wmm-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "1 tsp (5 ml)",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "wmm-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tsp (10 ml)",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "wmm-egg",
      "nameEn": "egg white",
      "nameZh": "蛋清",
      "amountMetric": "1 white",
      "amountUS": "1 white",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "wmm-water",
      "nameEn": "water or light chicken stock",
      "nameZh": "清水或清鸡汤",
      "amountMetric": "1.2 L",
      "amountUS": "about 5 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "wmm-pepper",
      "nameEn": "ground white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "wmm-sesame-oil",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "wmm-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Combine the ground pork with minced ginger, half the scallion, cornstarch, Shaoxing wine, soy sauce, and the egg white. Stir in one direction only for 2 minutes, until the mixture turns sticky and holds together when you lift a spoonful. This builds the protein network that keeps the meatballs tender instead of crumbly.",
      "textZh": "猪肉馅加姜末、一半葱花、淀粉、黄酒、生抽和蛋清。只朝一个方向搅 2 分钟，至肉馅发黏、舀起一勺能成团不散。这一步是在建立蛋白网络，让丸子嫩而不散。",
      "stateNote": {
        "visual": "The paste goes from loose and speckled to a smooth, slightly shiny mass that pulls in strings off the spoon",
        "visualZh": "肉馅由松散斑驳变为光滑微亮的一团，能从勺上拉出丝状",
        "timeRef": "2 minutes stirring in one direction",
        "timeRefZh": "单向搅打 2 分钟",
        "signal": "Turn the bowl upside down for 3 seconds and the paste does not slide out",
        "signalZh": "把碗倒扣 3 秒，肉馅不会滑落"
      },
      "tip": "Always stir in one direction. Reversing direction breaks the network you just built.",
      "tipZh": "必须单向搅打。反方向会破坏刚建立的网络。"
    },
    {
      "text": "Bring the water or stock to a boil in a pot. Add the winter melon cubes, return to a boil, then drop to a simmer and cook for 12 minutes, until the cubes turn translucent at the edges.",
      "textZh": "锅中水或高汤烧开，下冬瓜块，再次烧开后转微沸煮 12 分钟，至冬瓜边缘呈半透明。",
      "stateNote": {
        "visual": "Opaque white cubes gradually turn glassy from the outside in; a thin sheen appears on the cut faces",
        "visualZh": "乳白瓜块由外向内逐渐转为玻璃质感，切面泛出薄薄光泽",
        "heat": "medium-low",
        "timeRef": "12 minutes at a simmer",
        "timeRefZh": "微沸 12 分钟",
        "signal": "A chopstick slides into a cube with no resistance, but the cube still holds its square shape",
        "signalZh": "筷子能毫无阻力地插入瓜块，但瓜块仍保持方形不散"
      }
    },
    {
      "text": "Keep the broth at a bare simmer — the surface should tremble, not bubble. Shape the meatballs by squeezing the paste between thumb and index finger and scooping the ball out with a wet spoon. Drop them in one at a time around the pot.",
      "textZh": "保持汤面微沸——轻颤而非冒泡。用拇指和食指挤出肉丸，用湿勺舀起，沿锅边逐个下入。",
      "stateNote": {
        "visual": "Meatballs sink at first, then rise one by one; the broth stays almost clear with only a few grey specks of foam",
        "visualZh": "肉丸先沉底，随后逐个浮起；汤体基本清澈，只有少量灰色浮沫",
        "heat": "low",
        "timeRef": "about 3 minutes to add all the meatballs",
        "timeRefZh": "下完所有丸子约 3 分钟",
        "signal": "The water never comes back to a rolling boil while you are adding them — a hard boil will break the meatballs apart",
        "signalZh": "下丸子过程中汤绝不能重新滚沸——一滚丸子就散"
      }
    },
    {
      "text": "Skim off any grey foam with a spoon. Once all the meatballs have risen, continue to simmer for 5 minutes. Resist stirring; move the pot by swirling instead so the meatballs stay round.",
      "textZh": "用勺撇去灰色浮沫。所有丸子浮起后继续微沸 5 分钟。别搅动，改用晃锅的方式让丸子保持浑圆。",
      "stateNote": {
        "visual": "The broth is clear enough to see the melon cubes at the bottom; meatballs are firm, pale and evenly rounded",
        "visualZh": "汤清到能看见锅底冬瓜块；肉丸紧实、色浅、形状均匀圆润",
        "heat": "low",
        "timeRef": "5 minutes after the last meatball rises",
        "timeRefZh": "最后一颗丸子浮起后再煮 5 分钟",
        "signal": "Cut one open: the center is uniformly pale pink with no raw red, and juices run clear",
        "signalZh": "掰开一颗：中心呈均匀的浅粉色、无生红，汁水清澈"
      }
    },
    {
      "text": "Season with salt and white pepper. Turn off the heat and add sesame oil and the remaining scallion. Serve hot in deep bowls — winter melon soup loses its clean character if it sits and reheats, so make it close to the table.",
      "textZh": "加盐和白胡椒调味。关火后淋香油、撒剩余葱花。趁热盛入深碗——冬瓜汤回锅再热会失去清爽的本色，所以尽量临上桌再做。",
      "stateNote": {
        "visual": "Clear pale broth, glassy melon cubes, ivory meatballs, with scallion greens and golden oil beads on the surface",
        "visualZh": "汤色清浅，冬瓜块通透，丸子呈象牙白，表面浮着葱绿与金色油珠",
        "signal": "The broth tastes clean and sweet, and the melon yields with almost no pressure from the tongue",
        "signalZh": "汤味清甜，冬瓜用舌头一抿就化"
      }
    }
  ],
  "tips": [
    "Stir the pork paste in one direction for a full 2 minutes. It is the difference between tender and mealy.",
    "Never let the broth boil once the meatballs go in. Boiling shreds them.",
    "Skim the grey foam. It is the reason home versions of this soup look cloudy.",
    "Winter melon is done when translucent at the edges but still square. Beyond that it dissolves.",
    "White pepper, not black — it is what gives Cantonese clear soups their signature warmth."
  ],
  "tipsZh": [
    "肉馅单向搅满 2 分钟。这是嫩与柴的分界。",
    "丸子下锅后绝不能滚沸。一滚就散。",
    "撇净灰色浮沫。家常版汤色浑浊就是这个原因。",
    "冬瓜边缘透明但仍是方块时就到位了。再煮就化。",
    "要用白胡椒而不是黑胡椒——那才是粤式清汤标志性暖意的来源。"
  ],
  "relatedSlugs": [
    "winter-melon-soup",
    "winter-melon-coix-pork-bone-soup",
    "clay-pot-meatballs",
    "pearl-meatballs-sticky-rice"
  ],
  "image": "/images/recipes/winter-melon-soup.webp"
};
