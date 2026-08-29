import type { Recipe } from "@/lib/types";

/** Dry Pot Cauliflower (干锅花菜) — Seed batch */
export const dry_pot_cauliflower: Recipe = {
  "id": "gan-guo-hua-cai",
  "slug": "dry-pot-cauliflower",
  "titleEn": "Dry Pot Cauliflower",
  "titleZh": "干锅花菜",
  "pinyin": "gān guō huā cài",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "easy",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses less oil and skips deep-frying — stir-fried until crisp-tender, not restaurant-style crispy-fried.",
  "versionNoteZh": "家常版少油、不油炸，直接煸炒至断生微焦，区别于餐馆版的过油酥脆。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My aunt in Chengdu always made this on rainy Sichuan evenings — she’d toast dried chilies in a wok first, then toss in the cauliflower with just a splash of light soy and a pinch of Sichuan peppercorn. It smelled like warmth and childhood.",
  "storyZh": "我成都的阿姨总在四川阴雨天做这道菜——先用锅把干辣椒焙香，再下花菜，只加一勺生抽和几粒花椒。那香味就是暖意与童年。",
  "ingredients": [
    {
      "id": "cau-01",
      "nameEn": "cauliflower",
      "nameZh": "花菜",
      "pinyin": "huā cài",
      "amountMetric": "300 g",
      "amountUS": "1 small head (4 cups florets)",
      "category": "produce",
      "pantry": "local",
      "note": "Choose compact, creamy-white heads with tight florets; avoid yellowing or limp stems.",
      "noteZh": "选紧实乳白、花球紧密的；避免发黄或茎部软塌。",
    },
    {
      "id": "gar-01",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "4 cloves",
      "amountUS": "1 tbsp minced",
      "category": "produce",
      "pantry": "local",
      "note": "Fresh garlic preferred; pre-minced from jar works in a pinch.",
      "noteZh": "推荐鲜蒜；实在没有可用瓶装蒜蓉应急。",
      "termKey": "garlic"
    },
    {
      "id": "sco-01",
      "nameEn": "scallions",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "60 g",
      "amountUS": "4 medium stalks",
      "category": "produce",
      "pantry": "local",
      "note": "Use both white and green parts; slice diagonally for texture.",
      "noteZh": "葱白葱绿都用，斜刀切段更入味。",
      "termKey": "scallion"
    },
    {
      "id": "chi-01",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "8 g",
      "amountUS": "10–12 whole chilies",
      "category": "spice",
      "pantry": "asian",
      "note": "Mild variety like 'Tien Tsin' or 'Jalapeño-dried' — remove seeds if sensitive to heat. Sub: 1 tsp crushed red pepper flakes.",
      "noteZh": "选中辣品种如‘天鹰椒’或‘干制青椒’；怕辣可去籽。替代：红椒碎 1 茶匙。",
      "termKey": "dried-chili"
    },
    {
      "id": "soy-01",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use naturally brewed light soy (e.g., Pearl River Bridge or Lee Kum Kee). Not ‘low-sodium’ — flavor depends on umami depth.",
      "noteZh": "选天然酿造生抽（如珠江桥牌、李锦记），勿用‘减盐款’，风味靠鲜味支撑。",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Break cauliflower into uniform 2.5-cm florets. Blanch in boiling salted water for 90 seconds, then drain thoroughly and pat dry with paper towels.",
      "textZh": "将花菜掰成 2.5 厘米左右均匀小朵，沸盐水焯烫 90 秒，捞出沥干并用厨房纸吸净表面水分。",
      "zhHint": "焯水去生涩，吸干防溅油",
      "stateNote": {
        "visual": "Florets turn pale green and feel slightly tender when pierced with a fork.",
        "visualZh": "花菜呈浅绿色，叉尖轻戳略软。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "Water returns to boil within 30 seconds of adding cauliflower.",
        "signalZh": "下花菜后 30 秒内水重新沸腾。"
      }
    },
    {
      "text": "Heat 20 ml (1.5 tbsp) neutral oil in a heavy-bottomed wok or cast-iron skillet over medium-high heat until shimmering but not smoking.",
      "textZh": "厚底炒锅或铸铁锅中倒入 20 毫升中性油，中高火加热至油面微泛涟漪、无青烟。",
      "zhHint": "热锅凉油，防粘增香",
      "stateNote": {
        "visual": "Oil surface shimmers faintly; a wooden chopstick held in oil produces gentle bubbles around the tip.",
        "visualZh": "油面微微泛光；竹筷插入边缘冒细密小泡。",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium-high",
        "signal": "No smoke, no popping — just shimmer and soft bubbling.",
        "signalZh": "无油烟、无爆响，仅泛光与细泡。"
      }
    },
    {
      "text": "Add dried chilies and stir-fry 20 seconds until fragrant and slightly darkened. Immediately add garlic and scallion whites; stir-fry 30 seconds more.",
      "textZh": "下干辣椒，快速煸炒 20 秒至香气溢出、颜色微深；立刻加入蒜末与葱白段，续炒 30 秒。",
      "zhHint": "辣椒先炝，激香不焦",
      "stateNote": {
        "visual": "Chilies puff slightly and release a warm, toasty aroma.",
        "visualZh": "辣椒微膨，散发温热焙香。",
        "timeRef": "20 seconds + 30 seconds",
        "timeRefZh": "20 秒 + 30 秒",
        "heat": "medium-high",
        "signal": "Aromatics sizzle steadily — no browning or blackening.",
        "signalZh": "持续滋滋声，无焦糊变色。"
      }
    },
    {
      "text": "Add blanched cauliflower. Stir-fry vigorously for 4–5 minutes, pressing florets gently against the wok bottom to encourage light caramelization at edges.",
      "textZh": "倒入焯好沥干的花菜，大火猛炒 4–5 分钟，不时用锅铲轻压花菜边缘，促其微焦上色。",
      "zhHint": "猛火干煸，边压边炒",
      "stateNote": {
        "visual": "Cauliflower edges turn golden-brown and develop slight blistering.",
        "visualZh": "花菜边缘呈金褐色，略起皱泡。",
        "timeRef": "4–5 minutes",
        "timeRefZh": "4–5 分钟",
        "heat": "high",
        "signal": "Sizzling intensifies and a nutty, toasted scent rises.",
        "signalZh": "滋滋声转密，飘出坚果焦香。"
      }
    },
    {
      "text": "Drizzle light soy sauce evenly over cauliflower. Add scallion greens and toss 30 seconds. Taste and adjust — only salt if needed (soy provides enough umami). Serve immediately in a warm bowl.",
      "textZh": "沿锅边淋入生抽，撒入葱绿段，翻匀 30 秒。尝味——通常无需额外加盐（生抽已足鲜）。趁热盛入预热碗中。",
      "zhHint": "临出锅淋酱，锁香保脆",
      "stateNote": {
        "visual": "Sauce coats florets lightly without pooling; scallion greens stay bright green.",
        "visualZh": "酱汁薄裹花菜，无积水；葱绿鲜亮不蔫。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Final toss is quick and audible — no steam cloud or sputtering.",
        "signalZh": "最后翻动利落有声，无水汽蒸腾或油星迸溅。"
      }
    }
  ],
  "tips": [
    "Always dry cauliflower after blanching — wet pieces steam instead of sear.",
    "For extra depth, add 1/4 tsp Sichuan peppercorn (toasted & ground) with the garlic.",
    "This dish tastes even better reheated the next day — flavors meld beautifully."
  ],
  "tipsZh": [
    "焯水后务必吸干水分，否则花菜会蒸软而非焦香。",
    "想增层次感？可在下蒜末时加 1/4 茶匙焙香研磨的花椒粉。",
    "隔夜回锅更香——风味融合得恰到好处。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/dry-pot-cauliflower.webp"
};
