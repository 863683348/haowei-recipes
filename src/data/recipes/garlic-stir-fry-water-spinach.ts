import type { Recipe } from "@/lib/types";

/** Garlic Stir-Fried Water Spinach (蒜蓉炒通菜) — Seed batch */
export const garlic_stir_fry_water_spinach: Recipe = {
  "id": "suan-rong-chao-tong-cai",
  "slug": "garlic-stir-fry-water-spinach",
  "titleEn": "Garlic Stir-Fried Water Spinach",
  "titleZh": "蒜蓉炒通菜",
  "pinyin": "suàn róng chǎo tōng cài",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 15,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses minimal oil and no oyster sauce—just garlic, salt, and high heat for clean, grassy flavor. Restaurant versions often add oyster sauce or MSG.",
  "versionNoteZh": "家常版仅用蒜、盐和旺火，突出通菜清鲜本味；餐馆版常加蚝油或味精提鲜。",
  "tags": [
    "15-min",
    "weeknight",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan",
    "gluten-free"
  ],
  "story": "My aunt in Foshan cooked this every summer evening after picking fresh water spinach from her rooftop garden—she’d shout ‘Tong cai is ready when the stems snap like celery!’ before tossing it into the wok with a sizzle.",
  "storyZh": "我在佛山的姑妈每到夏天傍晚都会从自家天台菜园摘通菜做这道菜——她总喊：‘通菜要炒到茎秆清脆如芹菜才够嫩！’话音未落，锅里已滋啦作响。",
  "ingredients": [
    {
      "id": "vc-01",
      "nameEn": "water spinach (whole, stems and leaves)",
      "nameZh": "通菜（空心菜，带茎叶）",
      "pinyin": "tōng cài",
      "amountMetric": "300 g",
      "amountUS": "4 cups loosely packed",
      "category": "produce",
      "pantry": "local",
      "note": "Look for crisp, deep green stems with no brown spots; substitute Swiss chard stems + baby bok choy leaves if unavailable.",
      "noteZh": "选茎秆翠绿挺拔、无褐斑者；若买不到，可用瑞士甜菜梗+小棵上海青叶替代。"
    },
    {
      "id": "gc-01",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "4 cloves (16 g)",
      "amountUS": "1 tbsp minced",
      "category": "produce",
      "pantry": "local",
      "note": "Use fresh, firm cloves; pre-minced garlic lacks punch.",
      "noteZh": "须用新鲜饱满蒜瓣；瓶装蒜泥香气不足。"
    },
    {
      "id": "oi-01",
      "nameEn": "peanut oil or vegetable oil",
      "nameZh": "花生油或植物油",
      "pinyin": "huā shēng yóu huò zhí wù yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Peanut oil preferred for authentic nutty aroma.",
      "noteZh": "花生油更地道，香气醇厚。"
    },
    {
      "id": "ss-01",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "2 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "light-soy-sauce",
      "note": "Do not substitute table salt—it’s too sharp; kosher salt works at 1.5× volume.",
      "noteZh": "勿用普通精制盐，过咸刺口；可用犹太盐，用量为1.5倍。"
    }
  ],
  "steps": [
    {
      "text": "Wash water spinach thoroughly under cold running water; shake off excess water but do not dry completely—surface moisture helps steam-sear the stems.",
      "textZh": "通菜用冷水反复冲洗干净，甩掉多余水分，但不必擦干——表面水汽有助茎部快速断生。",
      "zhHint": "洗净不擦干"
    },
    {
      "text": "Trim tough ends (about 2 cm) and cut into 5-cm lengths on diagonal; separate thicker stems from tender leaves.",
      "textZh": "切去老根约2厘米，斜刀切成5厘米段；将粗茎与嫩叶分开放置。",
      "zhHint": "茎叶分放"
    },
    {
      "text": "Mince garlic finely—do not use a press, as it releases too much juice and burns easily.",
      "textZh": "蒜切极细末，禁用压蒜器——出汁多易焦糊。",
      "zhHint": "蒜末勿压汁"
    },
    {
      "text": "Heat wok over high heat until smoking lightly; add oil and swirl to coat. When oil shimmers and just begins to ripple, add garlic.",
      "textZh": "铁锅烧至微冒青烟，下油滑锅；油面泛起细纹、轻漾时下蒜末。",
      "zhHint": "热锅热油下蒜",
      "stateNote": {
        "visual": "Oil surface shimmers with fine, rapid ripples",
        "visualZh": "油面泛起细密、快速波动的纹路",
        "timeRef": "15–20 seconds",
        "timeRefZh": "15–20 秒",
        "heat": "high",
        "signal": "A light wisp of smoke rises from wok center",
        "signalZh": "锅心腾起一缕淡青色轻烟"
      }
    },
    {
      "text": "Stir-fry garlic 10 seconds until fragrant but not browned; immediately add thick stems and stir-fry 1 minute until edges turn translucent.",
      "textZh": "蒜香初溢即下粗茎，猛火快炒1分钟至茎缘微透亮。",
      "zhHint": "蒜香即下茎",
      "stateNote": {
        "visual": "Stem edges lose opacity, turning faintly glassy",
        "visualZh": "茎边缘褪去青白，泛出浅浅玻璃感",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Stems emit a clean, vegetal scent—not burnt or sour",
        "signalZh": "散发清鲜菜香，无焦苦或酸馊气"
      }
    },
    {
      "text": "Add leaves and remaining salt; toss continuously 30–45 seconds until leaves wilt and darken slightly but remain vibrant green.",
      "textZh": "下嫩叶和余盐，持续翻拌30–45秒，至叶片微蔫、色转深绿仍鲜亮。",
      "zhHint": "叶蔫色亮即出锅",
      "stateNote": {
        "visual": "Leaves collapse slightly but retain glossy, emerald-green sheen",
        "visualZh": "叶片微塌，却仍泛油润翠绿色泽",
        "timeRef": "30–45 seconds",
        "timeRefZh": "30–45 秒",
        "heat": "high",
        "signal": "A faint, sweet steam rises—not acrid or smoky",
        "signalZh": "升腾微甜蒸汽，无焦呛或烟熏气"
      }
    }
  ],
  "tips": [
    "Always stir-fry water spinach in batches if your wok is small—overcrowding steams instead of sears.",
    "Blanching is unnecessary and dulls flavor; high heat alone ensures tenderness.",
    "Serve immediately—the texture softens within 90 seconds off heat."
  ],
  "tipsZh": [
    "锅小请分批炒，堆叠会出水变煮而非爆炒。",
    "通菜无需焯水，旺火足矣保嫩保香。",
    "务必即炒即食，离火90秒内口感明显变软。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/garlic-stir-fry-water-spinach.webp"
};
