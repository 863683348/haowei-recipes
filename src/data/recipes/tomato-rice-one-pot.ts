import type { Recipe } from "@/lib/types";

/** Tomato Rice One-Pot (Fānqié Mènfàn) (番茄焖饭) — Day batch */
export const tomato_rice_one_pot: Recipe = {
  "id": "fan-qie-men-fan",
  "slug": "tomato-rice-one-pot",
  "titleEn": "Tomato Rice One-Pot (Fānqié Mènfàn)",
  "titleZh": "番茄焖饭",
  "pinyin": "fān qié mèn fàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 40,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version builds the whole thing in a rice cooker or one pot, sautéing the tomato first so the sauce concentrates — the restaurant version often uses tomato paste and stock cube for speed, which tastes flatter and much saltier.",
  "versionNoteZh": "家庭版全程用电饭煲或一口锅完成，先把番茄炒出沙让味道浓缩；餐馆为求快常用番茄膏加浓汤宝，味道更平板也更咸。",
  "tags": [
    "40-min",
    "one-pot",
    "rice",
    "weeknight",
    "kid-friendly"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the dish Chinese students make in their first year abroad, because it needs one pot, one vegetable and one appliance. My flatmate cooked it every week for a whole term and never once measured anything — her only instruction was 'more tomato than you think', and she was right about that too.",
  "storyZh": "这是中国留学生出国第一年必做的菜，因为只要一口锅、一样蔬菜、一件厨电。我室友整整一个学期每周都做，从没量过任何东西——她唯一的心得是'番茄要比你想的多'，这点也没错。",
  "ingredients": [
    {
      "id": "fq-01",
      "nameEn": "jasmine rice",
      "nameZh": "茉莉香米（大米）",
      "pinyin": "dà mǐ",
      "amountMetric": "300 g",
      "amountUS": "1.5 cups",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse until the water runs nearly clear. Sub: any medium-grain white rice; adjust water as the package directs.",
      "noteZh": "淘洗至水近乎清澈。替代：任意中粒白米，水量按包装说明调整。"
    },
    {
      "id": "fq-02",
      "nameEn": "ripe tomatoes",
      "nameZh": "番茄（熟透）",
      "pinyin": "fān qié",
      "amountMetric": "2 medium (about 300 g)",
      "amountUS": "2 medium (about 10.5 oz)",
      "category": "produce",
      "pantry": "local",
      "termKey": "tomato",
      "note": "Ripe, soft tomatoes break down into a sauce; firm ones stay in chunks. Sub: 1 can (400 g) whole peeled tomatoes, drained and crushed.",
      "noteZh": "熟软的番茄能炒成沙；硬的只会成块。替代：1罐（400克）整颗去皮番茄，沥干后压碎。"
    },
    {
      "id": "fq-03",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "2",
      "amountUS": "2",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "fq-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "25 ml",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "fq-05",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "oyster-sauce",
      "note": "Sub: vegetarian mushroom 'oyster' sauce to keep it meat-free.",
      "noteZh": "替代：素蚝油（蘑菇蚝油）可做无肉版本。"
    },
    {
      "id": "fq-06",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油（芝麻油）",
      "pinyin": "xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "fq-07",
      "nameEn": "neutral vegetable oil",
      "nameZh": "无味植物油",
      "pinyin": "zhí wù yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "fq-08",
      "nameEn": "scallion greens, chopped",
      "nameZh": "小葱绿（切碎）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "3 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "fq-09",
      "nameEn": "fine salt",
      "nameZh": "细盐",
      "pinyin": "xì yán",
      "amountMetric": "3 g",
      "amountUS": "1/2 tsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Rinse the rice in cold water, swirling with your hand, until the water runs mostly clear — about 3 changes. Drain well.",
      "textZh": "大米用冷水淘洗，用手划圈搅动至水基本清澈，约换3次水。充分沥干。",
      "zhHint": "淘洗至水清，沥干",
      "stateNote": {
        "visual": "Rinsing water changes from cloudy white to nearly transparent; grains look separate, not clumped",
        "visualZh": "淘米水由乳白浑浊转为近乎透明；米粒分明不结团",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "You can see individual grains through the water in the pot",
        "signalZh": "透过锅里的水能看清一颗颗米粒"
      },
      "tip": "Skipping the rinse gives you gluey, starchy rice — this dish relies on distinct grains.",
      "tipZh": "不淘米会煮出黏糊发浆的饭——这道菜要的就是粒粒分明。"
    },
    {
      "text": "Cut a small cross in the skin of each tomato, blanch in boiling water 30 seconds, then peel and dice into 1.5 cm / 1/2 in pieces.",
      "textZh": "番茄顶部划十字，沸水烫30秒，去皮后切成1.5厘米的丁。",
      "zhHint": "划十字烫后去皮切丁",
      "stateNote": {
        "visual": "Skin loosens and splits at the cross cut; peeled flesh is glossy red and dice hold their shape",
        "visualZh": "表皮在十字口处松脱裂开；去皮后果肉鲜红油亮，切丁保持形状",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "high",
        "signal": "The skin peels away in one piece with almost no flesh attached",
        "signalZh": "表皮能整片撕下，几乎不带果肉"
      },
      "tip": "Peeling is worth the 30 seconds — tomato skin curls into tough little rolls in the finished rice.",
      "tipZh": "这30秒值得花——番茄皮在饭里会卷成一条条嚼不烂的硬皮。"
    },
    {
      "text": "Heat the vegetable oil in a skillet over medium heat. Add the diced tomato and salt and cook 5 minutes, pressing with a spatula, until it collapses into a thick, jammy sauce.",
      "textZh": "炒锅加植物油中火加热，下番茄丁和盐炒5分钟，用锅铲按压，至番茄塌软成浓稠酱泥。",
      "zhHint": "中火炒5分钟压成酱泥",
      "stateNote": {
        "visual": "Diced pieces lose their shape and the mixture darkens to a deep red, thick pulp; oil separates and turns orange-red",
        "visualZh": "番茄丁失去形状，混合物转为深红色浓酱；油分析出并变成橙红色",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "The spatula leaves a channel that fills slowly; raw tomato smell has cooked off into sweetness",
        "signalZh": "锅铲划过的沟痕缓慢回填；生番茄味已炒成熟甜香"
      },
      "tip": "The salt helps the tomato break down faster — add it at the start, not the end.",
      "tipZh": "盐能加速番茄出沙——一开始就加，别最后才放。"
    },
    {
      "text": "Add the drained rice to the skillet and stir 1 minute so every grain is coated in the tomato sauce. Stir in light soy sauce and oyster sauce, then transfer everything to the rice cooker and add water to the level your cooker marks for 1.5 cups of rice.",
      "textZh": "把沥干的米倒入炒锅翻炒1分钟，让每粒米都裹上番茄酱。加入生抽和蚝油拌匀，全部倒入电饭煲，加水至电饭煲1.5杯米对应的刻度线。",
      "zhHint": "米裹酱后再入电饭煲",
      "stateNote": {
        "visual": "Grains look pink-orange and glossy rather than white; water level reads slightly below the usual mark because the tomato adds volume",
        "visualZh": "米粒呈粉橙色发亮而非白色；水位略低于平时刻度，因为番茄本身有体积",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Rubbing a grain between your fingers leaves an orange film",
        "signalZh": "两指搓一粒米会留下橙色薄膜"
      },
      "tip": "Reduce the water slightly — the tomatoes release a lot of liquid and the rice should not be soupy.",
      "tipZh": "水量要略减——番茄会出很多水，饭不该煮成稀的。"
    },
    {
      "text": "Cook on the standard rice setting. When it finishes, crack the eggs directly onto the hot rice, close the lid and let them steam 5 minutes. Then drizzle with sesame oil, scatter scallion, and fold everything together.",
      "textZh": "按电饭煲标准煮饭档。煮好后把鸡蛋直接磕在热饭上，盖盖焖5分钟。再淋香油、撒葱花，把饭整体翻拌均匀。",
      "zhHint": "磕蛋焖5分钟再拌",
      "stateNote": {
        "visual": "Rice is fluffy and evenly orange-pink; egg whites are set and opaque while yolks stay slightly soft",
        "visualZh": "米饭松软、呈均匀的橙粉色；蛋白凝固发白，蛋黄仍略软",
        "timeRef": "5 minutes steam",
        "timeRefZh": "焖5分钟",
        "signal": "A spoon dragged across the bottom of the pot comes up clean; grains separate easily",
        "signalZh": "勺子刮过锅底不带黏糊；米粒轻松散开"
      },
      "tip": "Resting 10 minutes with the lid on before serving lets the bottom layer firm up — do not stir straight away.",
      "tipZh": "煮好后盖盖再焖10分钟，底层会更成形——别一跳闸就翻拌。"
    }
  ],
  "tips": [
    "Add a handful of frozen peas or diced ham in the last 10 minutes for a fuller one-pot meal.",
    "For crispier bottom rice, use a heavy pot on the stove instead of a rice cooker and cook 5 extra minutes on low.",
    "Leftovers make excellent fried rice the next day — the tomato keeps it moist."
  ],
  "tipsZh": [
    "最后10分钟加一把冷冻青豆或火腿丁，就是更完整的一锅餐。",
    "想要锅巴，改用厚底锅在炉上煮，小火多煮5分钟即可。",
    "剩饭第二天炒饭极好——番茄让饭保持湿润。"
  ],
  "relatedSlugs": [
    "electric-rice-cooker-claypot-style-rice",
    "tomato-eggs",
    "clay-pot-rice"
  ],
  "image": "/images/recipes/clay-pot-rice.webp"
};
