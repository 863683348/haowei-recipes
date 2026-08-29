import type { Recipe } from "@/lib/types";

/** Northern-Style Cornmeal Flatcakes (Tie Bing Zi) (贴饼子) — Seed batch */
export const cornmeal_flatcakes_northern_style: Recipe = {
  "id": "tie-bing-zi",
  "slug": "cornmeal-flatcakes-northern-style",
  "titleEn": "Northern-Style Cornmeal Flatcakes (Tie Bing Zi)",
  "titleZh": "贴饼子",
  "pinyin": "tiē bǐng zi",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Chinese Snack",
  "region": "Tianjin",
  "regionZh": "天津",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses no oil in batter — cakes cling naturally to the wok side, just as Aunt Mei did in her Tianjin alleyway kitchen.",
  "versionNoteZh": "家常版面糊不加油——靠自然黏附锅壁，正如天津胡同里梅姨的做法。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Aunt Mei in Tianjin’s Heping District cooked these against the inner wall of her seasoned wok while simmering red bean porridge. She’d flip them only once — listening for the crisp ‘shhhk’ sound that meant the crust was set.",
  "storyZh": "天津和平区的梅姨常在煮红豆粥时，把面糊贴在熟铁锅内壁上烤制。她只翻一次面——凭‘嘶咔’脆响判断外皮定型。",
  "ingredients": [
    {
      "id": "tb-01",
      "nameEn": "medium-coarse yellow cornmeal",
      "nameZh": "中粗黄玉米面",
      "pinyin": "zhōng cū huáng yù mǐ miàn",
      "amountMetric": "150 g",
      "amountUS": "1¼ cups",
      "category": "staple",
      "pantry": "local",
      "note": "Slightly finer than wo tou cornmeal; substitute with polenta labeled 'medium grind'.",
      "noteZh": "比窝头玉米面稍细；可选标注‘medium grind’的polenta。"
    },
    {
      "id": "tb-02",
      "nameEn": "boiling water",
      "nameZh": "沸水",
      "pinyin": "fèi shuǐ",
      "amountMetric": "120 ml",
      "amountUS": "½ cup",
      "category": "other",
      "pantry": "local",
      "note": "Must be freshly boiled — critical for gelatinizing corn starch.",
      "noteZh": "必须现烧沸水——确保玉米淀粉充分糊化。"
    },
    {
      "id": "tb-03",
      "nameEn": "cold water",
      "nameZh": "凉水",
      "pinyin": "liáng shuǐ",
      "amountMetric": "60 ml",
      "amountUS": "¼ cup",
      "category": "other",
      "pantry": "local",
      "note": "Cools batter to safe handling temperature.",
      "noteZh": "降温至可操作温度。"
    },
    {
      "id": "tb-04",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "2 g",
      "amountUS": "⅓ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Enhances natural sweetness of corn without bitterness.",
      "noteZh": "提玉米本味甜香，不显苦涩。"
    }
  ],
  "steps": [
    {
      "text": "In a heatproof bowl, pour boiling water over cornmeal. Stir immediately with a wooden spoon until fully absorbed and thickened.",
      "textZh": "耐热碗中，将沸水冲入玉米面，立即用木勺搅拌至完全吸水变稠。",
      "zhHint": "沸水烫面",
      "stateNote": {
        "visual": "Thick, glossy paste with no dry specks; steam rises steadily.",
        "visualZh": "浓稠光亮糊状，无干粉颗粒；持续冒热气。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Mixture pulls away cleanly from bowl sides.",
        "signalZh": "面糊能干净脱离碗壁。"
      },
      "tip": "Use heatproof bowl — plastic may warp or leach.",
      "tipZh": "务必用耐热碗——塑料易变形或析出物质。"
    },
    {
      "text": "Let cool 2 minutes, then stir in cold water and salt. Mix vigorously for 1 minute until smooth and slightly elastic.",
      "textZh": "冷却2分钟后，加入凉水和盐，用力搅打1分钟至顺滑微弹。",
      "zhHint": "搅打出筋",
      "stateNote": {
        "visual": "Batter coats spoon evenly and leaves thin film when lifted.",
        "visualZh": "面糊均匀挂勺，提起后留薄层膜。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No grittiness remains between fingers when rubbed.",
        "signalZh": "指间揉搓无砂砾感。"
      },
      "tip": "Undermixing causes graininess; overmixing leads to toughness.",
      "tipZh": "搅不足则粗糙；过度则口感硬韧。"
    },
    {
      "text": "Heat a heavy-bottomed cast-iron or carbon-steel wok over medium-high heat until water droplets dance and evaporate instantly.",
      "textZh": "厚底铸铁或碳钢锅中火高加热，至水滴入锅‘噼啪’跳动并瞬蒸发。",
      "zhHint": "锅要烧热",
      "stateNote": {
        "visual": "Surface looks dry and slightly shimmering; no smoke yet.",
        "visualZh": "锅面干爽微泛光；尚无青烟。",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "medium-high",
        "signal": "Water droplet sizzles and skitters like mercury.",
        "signalZh": "水珠如水银般弹跳嘶响。"
      },
      "tip": "Never use nonstick — it prevents proper adhesion and crust formation.",
      "tipZh": "禁用不粘锅——无法形成吸附力与酥脆底壳。"
    },
    {
      "text": "Reduce heat to medium. Pour 3 tbsp batter per cake along the inner slope of the wok. Tilt wok gently to spread thinly and evenly — do not flatten with spatula.",
      "textZh": "调至中火，沿锅内斜壁舀入3 tbsp面糊，轻晃锅体使其自然摊薄——勿用铲压平。",
      "zhHint": "锅壁自然摊开",
      "stateNote": {
        "visual": "Batter spreads into 10-cm circles with slightly raised rims.",
        "visualZh": "面糊自然延展成直径10 cm圆饼，边缘微隆。",
        "timeRef": "15 seconds",
        "timeRefZh": "15 秒",
        "heat": "medium",
        "signal": "Edges begin to dry and lose shine.",
        "signalZh": "边缘开始失光、变干。"
      },
      "tip": "Work quickly — batter sets fast on hot surface.",
      "tipZh": "动作要快——热锅上糊化极快。"
    },
    {
      "text": "Cover wok tightly and cook undisturbed for 8 minutes. Uncover: cakes should be golden-brown with crisp, lacy edges. Flip carefully and cook uncovered 2 more minutes until underside is deep golden.",
      "textZh": "严盖焖煎8分钟；揭盖见饼边金黄酥脆、表面微润；小心翻面，敞盖再煎2分钟至底面深金黄。",
      "zhHint": "先焖后煎",
      "stateNote": {
        "visual": "Bottom crust lifts cleanly from wok with audible ‘crackle’; top remains matte, not glossy.",
        "visualZh": "底壳可整片离锅，发出清脆‘咔嚓’声；表面哑光不反光。",
        "timeRef": "10 minutes total",
        "timeRefZh": "共10 分钟",
        "heat": "medium",
        "signal": "Lift edge with chopstick — no raw batter oozes out.",
        "signalZh": "用筷子轻挑边缘——无生面糊渗出。"
      },
      "tip": "If sticking occurs, let cool 30 seconds before flipping — residual steam loosens grip.",
      "tipZh": "若粘锅，稍等30秒再翻——余汽助其自然松脱。"
    }
  ],
  "tips": [
    "Serve immediately — crust softens within minutes.",
    "Pair with braised greens or fermented black bean sauce for contrast.",
    "For chewier texture, replace 20 g cornmeal with millet flour."
  ],
  "tipsZh": [
    "即刻食用——酥壳3分钟内即软化。",
    "配炖青菜或豆豉酱，风味更平衡。",
    "喜韧劲口感？可用小米粉替换20 g玉米面。"
  ],
  "relatedSlugs": [
    "cornmeal-buns-homestyle"
  ],
  "image": "/images/recipes/cornmeal-flatcakes-northern-style.webp"
};
