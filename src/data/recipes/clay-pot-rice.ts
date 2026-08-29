import type { Recipe } from "@/lib/types";

/** Cantonese Clay Pot Rice (Bao Zai Fan) (煲仔饭) — Seed batch */
export const clay_pot_rice: Recipe = {
  "id": "bao-zi-fan",
  "slug": "clay-pot-rice",
  "titleEn": "Cantonese Clay Pot Rice (Bao Zai Fan)",
  "titleZh": "煲仔饭",
  "pinyin": "bāo zǎi fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses a heavy-bottomed Dutch oven instead of traditional unglazed clay pot — safer for home stovetops and achieves same crusty rice bottom.",
  "versionNoteZh": "家常版用厚底荷兰锅替代传统未上釉砂锅，更安全且同样能形成焦香锅巴。",
  "tags": [
    "45-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Guangzhou cooked this every Sunday after temple visits — she’d line the pot with thin slices of Chinese sausage and lap cheong, then let us kids scrape the crispy rice crust off the bottom with wooden spoons. The scent of ginger, shaoxing wine, and caramelizing soy still brings me back to her tiled kitchen.",
  "storyZh": "我广州的姑妈每逢周日拜完庙就做这道菜——她总在锅底铺上薄薄的广式腊肠和腊肉，再让我们小孩用木勺刮下焦香的锅巴。姜、绍兴酒和酱油焦糖化的香气，至今让我想起她瓷砖铺就的厨房。",
  "ingredients": [
    {
      "id": "br-01",
      "nameEn": "jasmine rice",
      "nameZh": "茉莉香米",
      "pinyin": "mò lì xiāng mǐ",
      "amountMetric": "300 g",
      "amountUS": "1 ½ cups",
      "category": "staple",
      "pantry": "local",
      "note": "Rinse until water runs clear; soak 30 min before cooking",
      "noteZh": "淘洗至水清，浸泡30分钟"
    },
    {
      "id": "br-02",
      "nameEn": "Chinese sausage (lap cheong)",
      "nameZh": "广式腊肠",
      "pinyin": "guǎng shì là cháng",
      "amountMetric": "120 g",
      "amountUS": "½ cup, thinly sliced",
      "category": "protein",
      "pantry": "asian",
      "note": "Substitute with dry-cured chorizo if unavailable (less sweet, more paprika)",
      "noteZh": "无货时可用西班牙干腌辣味香肠替代（甜度低，烟熏味重）"
    },
    {
      "id": "br-03",
      "nameEn": "boneless chicken thigh",
      "nameZh": "去骨鸡腿肉",
      "pinyin": "qù gǔ jī tuǐ ròu",
      "amountMetric": "180 g",
      "amountUS": "¾ cup, diced 1.5 cm",
      "category": "protein",
      "pantry": "local",
      "note": "Marinate 20 min minimum",
      "noteZh": "至少提前腌制20分钟"
    },
    {
      "id": "br-04",
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
      "id": "br-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "br-06",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp, finely minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Rinse rice, soak 30 minutes, then drain. Combine with 360 ml water (1.5× rice volume) in a heavy 2.5 L Dutch oven or flameproof casserole.",
      "textZh": "淘洗大米，浸泡30分钟，沥干。将米与360毫升水（米体积1.5倍）倒入厚底2.5升荷兰锅或耐火炖锅中。",
      "zhHint": "水量精准是关键",
      "stateNote": {
        "visual": "Water level just covers rice by 0.5 cm",
        "visualZh": "水面刚好没过米粒0.5厘米",
        "timeRef": "30 minutes soaking",
        "timeRefZh": "浸泡30分钟",
        "signal": "Grains plump but not mushy",
        "signalZh": "米粒吸水膨胀但不软烂"
      }
    },
    {
      "text": "Bring to a boil over high heat, then immediately reduce to low heat, cover tightly, and simmer 15 minutes without lifting lid.",
      "textZh": "大火烧开后立刻转最小火，盖紧锅盖焖煮15分钟，中途不可掀盖。",
      "zhHint": "全程密封焖煮",
      "stateNote": {
        "visual": "Steam condenses heavily on lid; faint bubbling sound audible",
        "visualZh": "锅盖内侧布满水珠；可听见细微咕嘟声",
        "timeRef": "15 minutes",
        "timeRefZh": "15分钟",
        "heat": "low",
        "signal": "Steam stops escaping from lid edge",
        "signalZh": "蒸汽不再从锅盖边缘逸出"
      }
    },
    {
      "text": "While rice cooks, marinate chicken in light soy sauce, Shaoxing wine, and minced ginger for 15 minutes.",
      "textZh": "煮饭同时，将鸡丁用生抽、绍兴酒和姜末腌制15分钟。",
      "zhHint": "同步准备省时",
      "stateNote": {
        "visual": "Chicken pieces glisten with marinade",
        "visualZh": "鸡丁裹满酱汁，泛光",
        "timeRef": "15 minutes",
        "timeRefZh": "15分钟",
        "signal": "Liquid pools slightly around meat",
        "signalZh": "肉块周围渗出少量酱汁"
      }
    },
    {
      "text": "After 15 minutes, carefully lift lid and arrange sausage slices and marinated chicken evenly over rice surface. Cover again and cook 8 more minutes.",
      "textZh": "15分钟后小心揭盖，在米饭表面均匀铺上腊肠片和腌好的鸡丁，再次盖严，续煮8分钟。",
      "zhHint": "铺料后勿搅动",
      "stateNote": {
        "visual": "Sausage edges begin to curl and deepen in color",
        "visualZh": "腊肠边缘微卷，颜色变深",
        "timeRef": "8 minutes",
        "timeRefZh": "8分钟",
        "heat": "medium-low",
        "signal": "Faint sizzling resumes under lid",
        "signalZh": "锅盖下重新响起轻微滋滋声"
      }
    },
    {
      "text": "Turn off heat. Let rest covered 5 minutes. Gently stir in 1 tsp sesame oil (optional) before serving. Scrape golden-brown crust from bottom with wooden spoon.",
      "textZh": "关火，加盖焖5分钟。食用前可拌入1茶匙芝麻油（可选），用木勺轻刮锅底金黄脆锅巴。",
      "zhHint": "焖透再刮锅巴",
      "stateNote": {
        "visual": "Rice grains are separate, glossy, and slightly springy",
        "visualZh": "米粒分明、油亮、略带弹性",
        "timeRef": "5 minutes resting",
        "timeRefZh": "焖5分钟",
        "signal": "Steam no longer rises when lid lifted",
        "signalZh": "掀盖时已无热气升腾"
      }
    }
  ],
  "tips": [
    "Use day-old rice only if making 'leftover clay pot' variation — fresh rice gives best crust.",
    "For authentic wok hei aroma, drizzle ½ tsp sesame oil into hot pot just before adding rice-water mixture.",
    "Never stir rice during cooking — crust forms only when undisturbed."
  ],
  "tipsZh": [
    "仅制作‘隔夜煲仔饭’变体时可用隔夜饭——新鲜米才能形成最佳锅巴。",
    "追求镬气风味？在加米水前，向烧热的锅中淋入½茶匙芝麻油。",
    "煮饭全程切勿搅拌——静置是形成锅巴的唯一条件。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/clay-pot-rice.webp"
};
