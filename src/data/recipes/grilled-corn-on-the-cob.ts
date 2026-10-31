import type { Recipe } from "@/lib/types";

/** Grilled Corn on the Cob (Kǎo Yùmǐ) (烤玉米) — Day batch */
export const grilled_corn_on_the_cob: Recipe = {
  "id": "kao-yu-mi",
  "slug": "grilled-corn-on-the-cob",
  "titleEn": "Grilled Corn on the Cob (Kǎo Yùmǐ)",
  "titleZh": "烤玉米",
  "pinyin": "kǎo yù mǐ",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Northeast China",
  "regionZh": "东北",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version parboils the corn first so the kernels are guaranteed tender, then finishes it under a broiler for colour — the street-stall version grills raw corn over charcoal for 20 minutes, which is delicious but very easy to end up with burnt outside and raw inside.",
  "versionNoteZh": "家庭版先把玉米煮到半熟，确保粒粒软糯，再用烤箱上火上色；街边摊是把生玉米直接架在炭火上烤20分钟，虽香却很容易外焦里生。",
  "tags": [
    "30-min",
    "grill",
    "vegetarian",
    "snack",
    "summer"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Northeast Chinese corn is sweeter and starchier than the American supermarket kind, and grilling it is a summer ritual — you buy it from a cart on the way home and eat it walking, holding the cob with a folded napkin because it is too hot. My mother brushed hers with soy sauce, which sounds strange and tastes correct.",
  "storyZh": "东北玉米比美国超市里的更甜更糯，烤玉米是夏天的仪式——下班路上从小推车买一根，边走边吃，烫得只能用叠起来的纸巾垫着拿。我妈爱刷酱油，听着奇怪，吃着却对。",
  "ingredients": [
    {
      "id": "ky-01",
      "nameEn": "sweet corn on the cob, husked",
      "nameZh": "甜玉米（去苞叶）",
      "pinyin": "tián yù mǐ",
      "amountMetric": "2 ears",
      "amountUS": "2 ears",
      "category": "produce",
      "pantry": "local",
      "note": "Any sweet corn works; super-sweet varieties caramelise fastest. Frozen cobs work too — thaw fully first.",
      "noteZh": "任意甜玉米都可以；超甜品种上色最快。冷冻玉米也行，需彻底解冻。"
    },
    {
      "id": "ky-02",
      "nameEn": "butter, softened",
      "nameZh": "黄油（软化）",
      "pinyin": "huáng yóu",
      "amountMetric": "20 g",
      "amountUS": "1.5 tbsp",
      "category": "dairy",
      "pantry": "local",
      "note": "Sub: neutral oil or vegan spread to keep it dairy-free.",
      "noteZh": "替代：无味植物油或纯素涂抹酱，可做无奶版本。"
    },
    {
      "id": "ky-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ky-04",
      "nameEn": "cumin powder",
      "nameZh": "孜然粉",
      "pinyin": "zī rán fěn",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "cumin"
    },
    {
      "id": "ky-05",
      "nameEn": "chili flakes",
      "nameZh": "辣椒面",
      "pinyin": "là jiāo miàn",
      "amountMetric": "3 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "chili-flakes"
    },
    {
      "id": "ky-06",
      "nameEn": "fine salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "3 g",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "ky-07",
      "nameEn": "scallion greens, finely chopped",
      "nameZh": "小葱绿（切细）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "10 g",
      "amountUS": "1.5 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Bring a large pot of water to a boil and cook the husked corn for 6 minutes. This sets the kernels so they cannot end up raw in the middle later.",
      "textZh": "大锅烧水，放入去苞叶的玉米煮6分钟。这一步先把玉米粒煮定，后面就不会出现外焦里生的情况。",
      "zhHint": "先煮6分钟打底",
      "stateNote": {
        "visual": "Kernels turn from pale, opaque yellow to a brighter, glossy yellow and look slightly plump",
        "visualZh": "玉米粒由暗淡的浅黄转为鲜亮的润黄，略显饱满",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "high",
        "signal": "A kernel pierced with a fork releases milky liquid rather than starchy paste",
        "signalZh": "叉子扎一粒会渗出乳白浆汁，而不是干淀粉糊"
      },
      "tip": "Do not salt the water — salt tightens the kernels. Season after cooking instead.",
      "tipZh": "煮的水里别加盐——盐会让玉米粒收紧。调味留到煮好之后。"
    },
    {
      "text": "Drain well and pat the cobs completely dry with a towel. Steam escaping from wet corn will prevent browning.",
      "textZh": "沥干后用厨纸把玉米彻底擦干。表面带水会冒蒸汽，导致上不了色。",
      "zhHint": "擦干表面水分",
      "stateNote": {
        "visual": "Surface looks matte and dry; no water beading between kernels",
        "visualZh": "表面呈哑光干爽；粒与粒之间无水珠",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "A dry towel pressed against the cob comes away dry",
        "signalZh": "干厨纸压上去取下来仍是干的"
      }
    },
    {
      "text": "Mix the softened butter with soy sauce, cumin, chili flakes and salt into a smooth paste. Brush it evenly over all sides of the warm cobs.",
      "textZh": "软化的黄油与生抽、孜然粉、辣椒面和盐调成顺滑酱膏，均匀刷在温热玉米的每一面。",
      "zhHint": "调成酱膏刷满每一面",
      "stateNote": {
        "visual": "Cobs coated in a thin, speckled tan layer; butter begins to melt into the kernels",
        "visualZh": "玉米裹上一层带斑点的浅褐色薄酱；黄油开始融进玉米粒",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "The coating looks tacky rather than wet, and smells of cumin and soy",
        "signalZh": "涂层摸起来发黏而非湿漉，并散出孜然与酱香"
      },
      "tip": "Brush while the cobs are still warm — cold corn will not absorb the seasoned butter.",
      "tipZh": "趁玉米还温热时刷——凉玉米吸不进调味黄油。"
    },
    {
      "text": "Grill over medium-high heat or broil about 10 cm / 4 in from the element for 8–10 minutes, turning every 2 minutes, until evenly blistered.",
      "textZh": "中高火烤架或烤箱上火（距发热管约10厘米）烤8–10分钟，每2分钟翻动一次，至表面均匀起焦斑。",
      "zhHint": "每2分钟翻动，烤8–10分钟",
      "stateNote": {
        "visual": "Kernels blister and take on scattered deep-golden to light-brown spots all around the cob",
        "visualZh": "玉米粒起泡，周身布满深金至浅褐的斑点",
        "timeRef": "8–10 minutes",
        "timeRefZh": "8–10 分钟",
        "heat": "medium-high",
        "signal": "You hear steady sizzling and occasional pops as kernels blister; sugars smell caramelised, not burnt",
        "signalZh": "持续滋滋作响、偶尔有粒爆开的声音；闻到的是焦糖香而非焦糊味"
      },
      "tip": "Turn often. Corn sugar goes from caramelised to acrid quickly under direct high heat.",
      "tipZh": "要勤翻面。玉米糖分在旺火直烤下很容易从焦香变成焦苦。"
    },
    {
      "text": "Brush with any remaining butter mixture, scatter scallion over the top and rest 2 minutes before serving. Eat hot, holding the cob with a napkin.",
      "textZh": "刷上剩余的黄油酱，撒葱花，静置2分钟再上桌。趁热吃，用纸巾垫着拿。",
      "zhHint": "补刷酱撒葱花，静置2分钟",
      "stateNote": {
        "visual": "Glossy, blistered surface with green scallion flecks; no dry or pale patches",
        "visualZh": "表面油亮带焦斑，点缀翠绿葱花；无发白发干的部位",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Kernels burst with sweet juice on the first bite and the cob is hot all the way through",
        "signalZh": "第一口咬下去玉米粒爆出甜汁，整根玉米从外到内都烫口"
      },
      "tip": "Sweet version: skip the soy and cumin and brush with butter and a little sugar for the classic Northeast style.",
      "tipZh": "甜味版：不放酱油和孜然，改刷黄油加少许白糖，就是最经典的东北做法。"
    }
  ],
  "tips": [
    "Parboiling is not cheating — it is the only reliable way to get tender kernels and good colour at the same time.",
    "Cut cobs in half crosswise to make them easier to turn and to fit a home broiler.",
    "Leftover grilled corn kernels cut off the cob make an excellent fried rice or salad addition."
  ],
  "tipsZh": [
    "先煮不是偷懒——这是同时得到软糯口感和漂亮焦色的唯一可靠办法。",
    "把玉米横切成两段更好翻面，也更容易放进家用烤箱。",
    "吃剩的玉米把粒削下来，炒饭或拌沙拉都极好。"
  ],
  "relatedSlugs": [
    "grilled-enoki-mushrooms",
    "grilled-mantou-slices",
    "sweet-corn-pork-bone-soup"
  ],
  "image": "/images/recipes/sweet-corn-pork-bone-soup.webp"
};
