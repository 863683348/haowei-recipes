import type { Recipe } from "@/lib/types";

/** Cucumber Scrambled Eggs (黄瓜炒蛋) — Day batch */
export const cucumber_scrambled_eggs: Recipe = {
  "id": "huang-gua-chao-dan",
  "slug": "cucumber-scrambled-eggs",
  "titleEn": "Cucumber Scrambled Eggs",
  "titleZh": "黄瓜炒蛋",
  "pinyin": "huáng guā chǎo dàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Northern China",
  "regionZh": "华北",
  "difficulty": "easy",
  "timeMin": 18,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses gentle heat and minimal seasoning to highlight the fresh, cool crunch of cucumber and tender eggs — no cornstarch, no stock, no MSG.",
  "versionNoteZh": "家常版用小火慢炒，少盐少酱，突出黄瓜的清脆与鸡蛋的嫩滑，不加淀粉、高汤或味精。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "A humble summer staple in Beijing hutongs, this dish appears on dinner tables when cucumbers are crisp and abundant. Grandmothers teach children to salt cucumbers first — not to squeeze out water, but to draw out their natural sweetness and stabilize texture during stir-frying.",
  "storyZh": "这是北京胡同人家夏日餐桌上的朴素常客。黄瓜应季脆嫩时，家家户户都做这道菜。老辈人教孩子先用盐轻拌黄瓜——不是为了挤水，而是激发其天然甘甜，并稳定炒制时的口感。",
  "ingredients": [
    {
      "id": "hg-01",
      "nameEn": "cucumber",
      "nameZh": "黄瓜",
      "pinyin": "huáng guā",
      "amountMetric": "250 g",
      "amountUS": "1½ cups, thinly sliced (¼ cm)",
      "category": "produce",
      "pantry": "local",
      "note": "Use English or Persian cucumber for low-seed, firm flesh; avoid hothouse varieties with watery centers.",
      "noteZh": "推荐用英国黄瓜或波斯黄瓜，籽少肉紧；避免温室大棚黄瓜（水分过多）。",
      "termKey": ""
    },
    {
      "id": "hg-02",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "4 large (200 g)",
      "amountUS": "4 large",
      "category": "protein",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": ""
    },
    {
      "id": "hg-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use a balanced, mild light soy sauce (e.g., Pearl River Bridge or Lee Kum Kee Premium).",
      "noteZh": "选用咸鲜均衡的生抽（如李锦记精选生抽或珠江桥牌）。",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "hg-04",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "3 ml",
      "amountUS": "½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Toasted sesame oil only — added at the end for aroma.",
      "noteZh": "仅限焙炒芝麻油，出锅前淋入增香。",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Thinly slice cucumber (¼ cm thick) on diagonal. Toss with 2 g (¼ tsp) fine sea salt and let sit 5 minutes. Gently pat dry with paper towel — do not rinse or squeeze.",
      "textZh": "黄瓜斜刀切薄片（约¼厘米厚），加2克（¼茶匙）细海盐拌匀，静置5分钟。用厨房纸轻轻拍干表面水分——不可冲洗，不可用力挤。",
      "zhHint": "盐腌后轻拍，不挤不洗",
      "stateNote": {
        "visual": "Cucumber slices look slightly translucent and lightly damp, not dripping wet.",
        "visualZh": "黄瓜片略显半透明，表面微潮但不滴水。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        
        "signal": "Surface moisture beads but no pooling liquid remains.",
        "signalZh": "表面有水珠凝结，但无积水。"
      },
      "tip": "Salting draws out excess water *and* enhances natural sweetness — skipping this step leads to soggy eggs.",
      "tipZh": "盐腌既去多余水分，又激发甜味；省略此步会导致鸡蛋湿软。"
    },
    {
      "text": "Whisk eggs with 10 ml (2 tsp) water until just combined — no froth. Season lightly with white pepper (optional).",
      "textZh": "鸡蛋加10毫升（2茶匙）清水搅打至刚融合即可，勿起泡；可酌加少许白胡椒粉提味。",
      "zhHint": "蛋液加水，勿打发",
      "stateNote": {
        "visual": "Egg mixture is pale yellow and homogenous, with no streaks or foam.",
        "visualZh": "蛋液呈浅黄色，均匀无条纹、无泡沫。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        
        "signal": "No visible air bubbles or separated whites.",
        "signalZh": "无明显气泡或蛋白分离。"
      }
    },
    {
      "text": "Heat wok over medium-high heat until a drop of water sizzles and evaporates instantly. Add 10 g (2 tsp) neutral oil (e.g., canola or peanut). Swirl to coat.",
      "textZh": "旺火烧热炒锅，滴一滴水能‘滋啦’爆开即达温度。倒入10克（2茶匙）无味油（如菜籽油或花生油），旋转润锅。",
      "zhHint": "锅热油烫，滴水即爆",
      "stateNote": {
        "visual": "Oil shimmers faintly with thin, even ripples.",
        "visualZh": "油面泛起细微均匀涟漪，略有光泽。",
        "timeRef": "45–60 seconds",
        "timeRefZh": "45–60 秒",
        "heat": "medium-high",
        "signal": "Water droplet dances and vanishes in <1 second.",
        "signalZh": "水滴入锅即弹跳并1秒内汽化。"
      }
    },
    {
      "text": "Pour in egg mixture. Let sit undisturbed 5 seconds, then gently push from edges toward center with spatula as curds form. Stop cooking when eggs are ~90% set — still slightly glossy and soft.",
      "textZh": "倒入蛋液，静置5秒，待边缘初凝后，用锅铲从四周向中心轻推成块；蛋液约九分熟时即停火——仍带微光、质地柔嫩。",
      "zhHint": "蛋液初凝即推，九分熟即出锅",
      "stateNote": {
        "visual": "Eggs form large, soft curds with visible sheen; no browning or dry edges.",
        "visualZh": "蛋块大而柔软，表面有光泽；无焦边、无褐斑。",
        "timeRef": "60–75 seconds",
        "timeRefZh": "60–75 秒",
        "heat": "medium-high",
        "signal": "Edges lift cleanly from wok; center remains slightly runny.",
        "signalZh": "边缘自然离锅；中心仍略带湿润。"
      }
    },
    {
      "text": "Transfer eggs to a plate. Wipe wok clean. Reheat over medium heat, add remaining 5 g (1 tsp) oil, then add cucumber. Stir-fry 60 seconds until just warmed through and bright green. Return eggs, drizzle with light soy sauce and sesame oil. Toss gently 10 seconds and serve immediately.",
      "textZh": "将蛋盛出备用。擦净炒锅，中火加热，加余下5克（1茶匙）油，下黄瓜片快炒60秒至断生、翠绿明亮。倒回鸡蛋，淋入生抽和香油，轻翻10秒即出锅。",
      "zhHint": "黄瓜快炒断生，回锅轻拌即上",
      "stateNote": {
        "visual": "Cucumber retains vibrant green color and crisp-tender bite; eggs remain moist and separate.",
        "visualZh": "黄瓜翠绿鲜亮、脆嫩爽口；蛋块湿润分明，不粘连。",
        "timeRef": "60 seconds + 10 seconds",
        "timeRefZh": "60 秒 + 10 秒",
        "heat": "medium",
        "signal": "Cucumber emits fresh, grassy aroma; no steam plume or darkening.",
        "signalZh": "散发清新青草香；无大量蒸汽或颜色变暗。"
      }
    }
  ],
  "tips": [
    "Use cold eggs straight from the fridge — they set more evenly and resist overcooking.",
    "Never add salt directly to raw egg mixture; it breaks down proteins and makes eggs rubbery.",
    "Resist the urge to over-stir eggs — gentle folding preserves tenderness."
  ],
  "tipsZh": [
    "鸡蛋用冷藏状态直接打散——受热更均匀，不易老硬。",
    "生蛋液中切勿直接加盐，会破坏蛋白质结构，导致蛋质变韧。",
    "炒蛋时切忌反复翻搅，轻柔推叠才能保持嫩滑。"
  ],
  "relatedSlugs": [
    "tomato-and-egg",
    "garlic-chives-scrambled-eggs"
  ],
  "image": "/images/recipes/cucumber-scrambled-eggs.webp"
};
