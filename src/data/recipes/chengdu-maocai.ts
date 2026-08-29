import type { Recipe } from "@/lib/types";

/** Chengdu-Style Maocai (Spicy Sichuan Boiled Hotpot) (成都冒菜) — Seed batch */
export const chengdu_maocai: Recipe = {
  "id": "maocai-chengdu-style",
  "slug": "chengdu-maocai",
  "titleEn": "Chengdu-Style Maocai (Spicy Sichuan Boiled Hotpot)",
  "titleZh": "成都冒菜",
  "pinyin": "Chéngdū mào cài",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "This is the home version — simmered in a rich, reusable broth with layered spice, not boiled in disposable single-use soup packets.",
  "versionNoteZh": "这是家常版——用可重复使用的浓香红汤慢煨，而非一次性汤包快煮。",
  "tags": [
    "30-min",
    "spicy",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt Li in Qingyang District, Chengdu, taught me this when I visited at 16 — she’d prep the broth on Sunday mornings while listening to Sichuan opera on her old radio, then let it bubble all afternoon so the spices bloomed fully.",
  "storyZh": "我成都青羊区的李姨在我16岁那年教我这道菜——她总在周日清晨边听川剧广播边熬底料，小火慢炖一下午，让花椒、辣椒和豆瓣酱的香气彻底释放。",
  "ingredients": [
    {
      "id": "mc-01",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "四川花椒",
      "pinyin": "Sìchuān huājiāo",
      "amountMetric": "6 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "mc-02",
      "nameEn": "Doubanjiang (fermented broad bean paste)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "Píxiàn dòubàn jiàng",
      "amountMetric": "30 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for 'Pixian' on label; substitute Korean gochujang + 1/2 tsp rice vinegar if unavailable",
      "noteZh": "认准‘郫县’字样；如无，可用韩式辣酱+½ tsp 米醋替代",
      "termKey": "doubanjiang"
    },
    {
      "id": "mc-03",
      "nameEn": "Dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "12 g",
      "amountUS": "1 tbsp (about 8–10 whole)",
      "category": "spice",
      "pantry": "asian",
      "note": "Use mild-to-medium heat chilies like guajillo or ancho if facing chilies are too intense",
      "noteZh": "若怕辣，可用瓜希略或安乔干椒（中低辣度）替代朝天椒",
      "termKey": "dried-chili"
    },
    {
      "id": "mc-04",
      "nameEn": "Light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "mc-05",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "mc-06",
      "nameEn": "Fresh tofu puffs (fried tofu cubes)",
      "nameZh": "油豆腐泡",
      "pinyin": "yóu dòufu pào",
      "amountMetric": "150 g",
      "amountUS": "1 ½ cups",
      "category": "protein",
      "pantry": "asian",
      "note": "Substitute baked firm tofu cubes tossed in 1 tsp light soy + ½ tsp sesame oil, pan-fried until golden"
    },
    {
      "id": "mc-07",
      "nameEn": "Bok choy (baby or Shanghai type)",
      "nameZh": "小棠菜/上海青",
      "pinyin": "xiǎo táng cài / Shànghǎi qīng",
      "amountMetric": "200 g",
      "amountUS": "4 cups chopped",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Toast Sichuan peppercorns and dried chilies in a dry wok over medium heat until fragrant (30 seconds), shaking constantly. Transfer to a mortar and lightly crush with pestle — do not grind to powder.",
      "textZh": "干锅小火焙香花椒与干辣椒约30秒，不停翻动；倒入石臼轻捣碎（勿成粉）。",
      "zhHint": "焙香后轻捣",
      "stateNote": {
        "visual": "Peppercorns look slightly puffed and darker; chilies darken at edges",
        "visualZh": "花椒微膨、颜色略深；辣椒边缘变暗",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Aromatic citrus-and-wood scent rises, no smoke",
        "signalZh": "散发出柑橘与木质清香，无焦烟"
      }
    },
    {
      "text": "Heat 2 tbsp neutral oil in a heavy pot over medium-low heat. Add doubanjiang and stir constantly for 2 minutes until oil turns brick-red and separates from paste.",
      "textZh": "厚底锅中火加热中性油，下豆瓣酱持续搅拌2分钟，至油色转砖红、酱粒分明。",
      "zhHint": "炒出红油",
      "stateNote": {
        "visual": "Oil deepens to rust-red; small bubbles form around paste edges",
        "visualZh": "油色转为铁锈红；酱边缘泛细泡",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "Fragrant, fermented aroma intensifies without burning",
        "signalZh": "发酵香气明显增强，无焦糊味"
      }
    },
    {
      "text": "Add crushed spice mix and minced ginger (15 g / 1 tbsp) and garlic (10 g / 2 cloves), stir 1 minute until aromatic.",
      "textZh": "加入捣碎的香料、姜末（15 g / 1 tbsp）与蒜末（10 g / 2瓣），炒香1分钟。",
      "zhHint": "爆香姜蒜",
      "stateNote": {
        "visual": "Ginger and garlic soften and turn translucent",
        "visualZh": "姜蒜变软、呈半透明状",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Aroma becomes warm and pungent",
        "signalZh": "气味转为温热辛香"
      }
    },
    {
      "text": "Pour in 800 ml (3 ⅓ cups) hot water, light soy sauce, black vinegar, and 1 tsp white pepper. Simmer uncovered 15 minutes, skimming foam occasionally.",
      "textZh": "冲入800 ml热水、生抽、陈醋与白胡椒粉，敞盖小火熬15分钟，适时撇去浮沫。",
      "zhHint": "熬制底汤",
      "stateNote": {
        "visual": "Broth reduces slightly and coats spoon lightly",
        "visualZh": "汤汁略收，能薄薄挂勺",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "Surface shimmers gently; aroma deepens into savory umami",
        "signalZh": "汤面微漾；咸鲜醇香愈发浓郁"
      }
    },
    {
      "text": "Add tofu puffs and bok choy. Simmer 5 minutes until greens wilt and tofu absorbs flavor. Serve hot in bowls, drizzle with 1 tsp sesame oil and sliced scallions.",
      "textZh": "下油豆腐与小棠菜，再煮5分钟至菜软、豆腐吸饱汤汁。盛碗，淋芝麻油、撒葱花即食。",
      "zhHint": "烫煮配菜",
      "stateNote": {
        "visual": "Bok choy stems turn bright green; tofu puffs plump and glisten",
        "visualZh": "菜梗翠绿；豆腐泡饱满油亮",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "Stems bend easily when nudged with chopsticks",
        "signalZh": "筷子轻碰即弯软"
      }
    }
  ],
  "tips": [
    "Reuse the broth up to 3 times — refrigerate and reboil before next use",
    "Blanch leafy greens separately if using spinach or chrysanthemum greens to avoid bitterness",
    "For authentic texture, serve with pickled mustard tuber (zha cai) on the side"
  ],
  "tipsZh": [
    "底汤可重复使用最多3次：冷藏保存，下次使用前务必煮沸",
    "若用菠菜或菊花脑等易苦绿叶菜，建议先单独焯水去涩",
    "地道吃法：配榨菜丁同食，解腻增脆"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/chengdu-maocai.webp"
};
