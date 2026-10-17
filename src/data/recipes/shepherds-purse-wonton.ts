import type { Recipe } from "@/lib/types";

/** Shepherd's Purse Wonton (Ji Cai Hun Dun) (荠菜馄饨) — Day batch */
export const shepherds_purse_wonton: Recipe = {
  "id": "shepherds-purse-wonton",
  "slug": "shepherds-purse-wonton",
  "titleEn": "Shepherd's Purse Wonton (Ji Cai Hun Dun)",
  "titleZh": "荠菜馄饨",
  "pinyin": "jì cài hún tun",
  "cuisine": "上海菜",
  "cuisineEn": "Shanghai (Jiangnan)",
  "region": "Shanghai / Jiangnan",
  "regionZh": "上海 / 江南",
  "difficulty": "medium",
  "timeMin": 70,
  "servings": 4,
  "version": "family",
  "versionNote": "Home wontons mix shepherd's purse with a little pork and crumbled tofu, and are served in a light broth with seaweed and egg strips. Jiangnan teahouse versions go nearly all-vegetable with just enough pork fat to bind, and the broth is a proper chicken stock — cleaner, but much less forgiving of a weak filling.",
  "versionNoteZh": "家常馄饨把荠菜配一点猪肉和豆腐碎，配清汤、紫菜与蛋皮丝。江南茶馆版几乎是纯素的，只用一点猪油黏合，汤底则是正经鸡汤——更清，但对馅心的要求高得多。",
  "tags": [
    "wonton",
    "spring",
    "jiangnan",
    "soup"
  ],
  "dietary": [
    "none"
  ],
  "story": "Ji cai is a wild green that comes up in the fields around Shanghai just after the turn of the year, and the city treats its arrival as a season. It has a faintly nutty, mineral taste that no cultivated green matches, and it disappears from the market within about six weeks. Frozen ji cai is a real compromise — blanch and freeze your own if you can find it fresh, because the texture survives freezing far better than the flavour of the shop-bought packs.",
  "storyZh": "荠菜是年初上海郊野刚转暖时长出来的野菜，这座城市把它的出现当作一个节气。它带一点坚果似的矿物味，任何种植蔬菜都比不上，而它在菜场里只出现大约六周。冷冻荠菜是真正的妥协——要是碰上新鲜的，自己汆水冻起来，因为口感比买来的冷冻货保存得好得多。",
  "ingredients": [
    {
      "id": "sw-01",
      "nameEn": "square wonton wrappers",
      "nameZh": "馄饨皮",
      "amountMetric": "400 g",
      "amountUS": "about 40 wrappers",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Thin square wrappers, not round dumpling skins",
      "noteZh": "薄的方形馄饨皮，不是圆形饺子皮"
    },
    {
      "id": "sw-02",
      "nameEn": "shepherd's purse (ji cai), blanched and squeezed",
      "nameZh": "荠菜（汆水挤干）",
      "amountMetric": "300 g",
      "amountUS": "2 cups squeezed",
      "category": "produce",
      "pantry": "local",
      "note": "Frozen is acceptable; if using fresh, pick over carefully for grit",
      "noteZh": "冷冻可以接受；如用新鲜的，需仔细挑净泥沙"
    },
    {
      "id": "sw-03",
      "nameEn": "ground pork",
      "nameZh": "猪肉末",
      "amountMetric": "250 g",
      "amountUS": "9 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "sw-04",
      "nameEn": "firm tofu, crumbled",
      "nameZh": "老豆腐（捏碎）",
      "amountMetric": "120 g",
      "amountUS": "4 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "sw-05",
      "nameEn": "dried shrimp, soaked and minced",
      "nameZh": "虾皮（泡软剁碎）",
      "amountMetric": "15 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shrimp"
    },
    {
      "id": "sw-06",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱（切细）",
      "amountMetric": "40 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sw-07",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜（切末）",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sw-08",
      "nameEn": "large egg",
      "nameZh": "鸡蛋",
      "amountMetric": "50 g",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "sw-09",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sw-10",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "20 ml",
      "amountUS": "4 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "sw-11",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "3 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "sw-12",
      "nameEn": "dried seaweed (for the bowl)",
      "nameZh": "紫菜（汤碗用）",
      "amountMetric": "5 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "seaweed"
    }
  ],
  "steps": [
    {
      "text": "Blanch the shepherd's purse in boiling water 40 seconds, then refresh in cold water and squeeze out every drop. Chop finely.",
      "textZh": "荠菜下沸水汆40秒，过冷水后把水分一滴不剩地挤干，切细。",
      "zhHint": "汆水挤干",
      "stateNote": {
        "visual": "Greens have gone from dull grey-green to a deep, bright green and collapse into a tight, dry ball when squeezed",
        "visualZh": "荠菜由暗青灰转为深亮绿，攥紧时缩成一团干燥的紧实菜球",
        "timeRef": "40 seconds + 10 minutes draining",
        "timeRefZh": "汆40秒 + 沥10分钟",
        "signal": "Squeezing over the sink produces nothing more than a few drops"
      }
    },
    {
      "text": "Stir pork with soy sauce, ginger, white pepper and the egg in one direction 3 minutes until sticky, then fold in tofu, dried shrimp and sesame oil.",
      "textZh": "猪肉末加生抽、姜末、白胡椒与鸡蛋顺一个方向搅3分钟至发黏，再拌入豆腐碎、虾皮末与香油。",
      "zhHint": "拌肉馅",
      "stateNote": {
        "visual": "Mixture is cohesive and slightly glossy with white tofu crumbs and pink-orange shrimp flecks through it",
        "visualZh": "馅料抱团微有光泽，白色豆腐碎与粉橙色虾皮粒分布其中",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "A spoonful holds together and slides off the spoon as one piece"
      }
    },
    {
      "text": "Fold the chopped shepherd's purse and scallions through the meat mixture. Mix gently and stop as soon as it is even.",
      "textZh": "把切好的荠菜与葱花拌入肉馅，轻手拌匀即停。",
      "zhHint": "拌入荠菜",
      "stateNote": {
        "visual": "Filling is predominantly green with the meat only just binding it, and there is no liquid in the bowl",
        "visualZh": "馅料以绿色为主，肉只是勉强把菜黏合起来，碗底没有汁水",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Tilt the bowl and nothing runs; the mixture looks dry rather than wet",
        "signalZh": "倾斜碗时没有汁水流动；馅料看着是干的而不是湿的"
      },
      "tip": "Ji cai should dominate. If the filling looks pink, you have used too much pork."
    },
    {
      "text": "Put 1 tsp filling in the centre of a wrapper, fold into a triangle, then bring the two outer corners together and pinch with a dab of water to seal.",
      "textZh": "馄饨皮中央放1茶匙馅，对折成三角，再把两个外角对折捏合，点一点水封口。",
      "zhHint": "包馄饨",
      "stateNote": {
        "visual": "Wontons look like small gathered purses with two wings, seams sealed and the thin wrapper showing the green filling faintly through",
        "visualZh": "馄饨呈收口的小荷包状、两侧带翼，收口严密，薄皮下隐约透出绿色",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Pinched, the seam holds and the wonton keeps its shape when set down"
      }
    },
    {
      "text": "Boil the wontons in batches in unsalted boiling water 3-4 minutes until they float and the wrappers turn translucent. Lift out into bowls with seaweed and a splash of the cooking water.",
      "textZh": "宽水煮沸后分批下馄饨，煮3-4分钟至浮起、面皮变半透明，捞入放了紫菜的碗中，加一勺煮馄饨的水。",
      "zhHint": "煮馄饨",
      "stateNote": {
        "visual": "Wrappers are silky and translucent with the green filling clearly visible inside; the seaweed has unfurled into dark ribbons",
        "visualZh": "面皮柔滑半透明，能清楚看见里面的绿色馅心；紫菜已舒展成深色条带",
        "timeRef": "3-4 minutes per batch",
        "timeRefZh": "每批3-4分钟",
        "heat": "high",
        "signal": "They float high and the wrapper no longer looks opaque or floury",
        "signalZh": "馄饨高高浮起，面皮不再发白或带生粉感"
      }
    }
  ],
  "tips": [
    "Squeeze the greens bone dry — wet ji cai makes a filling that will not hold and turns the broth cloudy.",
    "Keep the ratio green-heavy; pork is a binder here, not the main event.",
    "Wonton wrappers are thin: do not overfill or they will tear in the pot."
  ],
  "tipsZh": [
    "荠菜必须挤到极干——带水的荠菜馅抱不住团，还会把汤煮浑。",
    "比例以菜为主；猪肉在这里是黏合剂，不是主角。",
    "馄饨皮很薄：别放太多馅，下锅会破。"
  ],
  "relatedSlugs": [
    "vegetable-pork-large-wonton",
    "fresh-pork-wonton",
    "chicken-broth-wonton-soup"
  ],
  "image": "/images/recipes/vegetable-pork-large-wonton.webp"
};
