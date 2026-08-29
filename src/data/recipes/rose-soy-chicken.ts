import type { Recipe } from "@/lib/types";

/** Rose-Infused Soy-Braised Chicken (玫瑰豉油鸡) — Seed batch */
export const rose_soy_chicken: Recipe = {
  "id": "rose-soy-chicken",
  "slug": "rose-soy-chicken",
  "titleEn": "Rose-Infused Soy-Braised Chicken",
  "titleZh": "玫瑰豉油鸡",
  "pinyin": "méi guī chǐ yóu jī",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Foshan",
  "regionZh": "佛山",
  "difficulty": "medium",
  "timeMin": 120,
  "servings": 4,
  "version": "family",
  "versionNote": "A Foshan grandmother’s secret: rose petal-infused soy braising liquid, not heavy oil or MSG. She used dried roses from her courtyard, but food-grade dried rose buds work perfectly in Western kitchens.",
  "versionNoteZh": "佛山阿婆秘方：玫瑰花瓣浸润的豉油卤汁，不靠重油或味精。她用自家庭院晒干的玫瑰，西方厨房用食品级干玫瑰花蕾即可。",
  "tags": [
    "weeknight",
    "braise",
    "aromatic"
  ],
  "dietary": [
    "none"
  ],
  "story": "My great-aunt in Foshan’s Chencun Town kept a rose arbor beside her clay-brick stove. Every spring, she’d pluck petals at dawn, dry them in bamboo trays, and steep them in aged soy sauce for weeks. When I visited at 12, she served this chicken chilled—sliced thin, drizzled with rose oil—and said, 'Taste the garden, not the wok.'",
  "storyZh": "我在佛山陈村镇的姑婆家有个玫瑰架，挨着泥砖灶台。每年春天她清晨采瓣，竹匾晾干，再泡进陈年酱油里数周。我12岁那年去探亲，她端出冰镇玫瑰豉油鸡——薄片铺盘、淋玫瑰油，说：‘尝的是园子，不是镬气。’",
  "ingredients": [
    {
      "id": "rs-01",
      "nameEn": "whole chicken (about 1.2 kg), cut into serving pieces",
      "nameZh": "整鸡（约1.2公斤），斩件",
      "pinyin": "zhěng jī",
      "amountMetric": "1200 g",
      "amountUS": "2.6 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Use free-range or air-chilled chicken for best texture and flavor.",
      "noteZh": "推荐散养或气冷鸡，肉质紧实、风味足。"
    },
    {
      "id": "rs-02",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "rs-03",
      "nameEn": "dried food-grade rose buds",
      "nameZh": "食用干玫瑰花蕾",
      "pinyin": "shí yòng gān méi guī huā léi",
      "amountMetric": "5 g",
      "amountUS": "2 tbsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Find in Asian grocery or online; do NOT use perfume-grade roses.",
      "noteZh": "可在亚超或网购；严禁使用香水级玫瑰。"
    },
    {
      "id": "rs-04",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "25 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "rs-05",
      "nameEn": "scallions",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "50 g",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rinse chicken pieces and soak in cold salted water (10 g salt per 500 ml water) for 30 minutes to draw out blood and improve tenderness.",
      "textZh": "鸡块冷水加盐（每500毫升水加10克盐）浸泡30分钟，去血水、增嫩。",
      "zhHint": "盐水浸泡去腥"
    },
    {
      "text": "In a deep pot, combine dark soy sauce, rose buds, garlic, scallions, and 1 L water. Bring to gentle simmer over medium heat.",
      "textZh": "深锅中加入老抽、玫瑰花蕾、蒜、葱段与1升水，中火煮至微沸。",
      "zhHint": "玫瑰需同煮释放香气"
    },
    {
      "text": "Add chicken pieces, skin-side down. Bring liquid back to a bare simmer (small bubbles barely breaking surface), then reduce heat to lowest setting. Cover and braise 45 minutes.",
      "textZh": "鸡块皮朝下放入卤汁，复烧至微沸（水面仅冒小泡），转最小火，加盖焖煮45分钟。",
      "zhHint": "全程微沸不翻滚"
    },
    {
      "text": "Turn off heat. Let chicken cool fully in braising liquid—minimum 1 hour, ideally 2 hours—for deep flavor absorption.",
      "textZh": "关火，鸡块连卤汁静置冷却，至少1小时，理想为2小时，使风味充分渗透。",
      "zhHint": "冷卤更入味"
    },
    {
      "text": "Remove chicken and strain liquid through cheesecloth into a clean bowl. Discard solids. Skim fat, then reduce strained liquid over medium-high heat until syrupy (about 8 minutes). Cool slightly, then pour over sliced chicken.",
      "textZh": "捞出鸡块，卤汁用纱布过滤入碗；弃渣，撇净浮油，中大火收至糖浆状（约8分钟）；稍凉后淋在切片鸡上。",
      "zhHint": "滤渣收汁更清亮",
      "stateNote": {
        "visual": "Liquid coats the back of a spoon and leaves a slow, ribbon-like trail",
        "visualZh": "卤汁挂勺，滴落呈缓慢丝带状",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "medium-high",
        "signal": "Surface bubbles become larger and slower; aroma intensifies with floral-savory balance",
        "signalZh": "气泡变大变慢；花香与咸鲜味愈发融合"
      }
    }
  ],
  "tips": [
    "For authentic texture, serve chilled—not room temperature—to highlight the clean, floral soy contrast.",
    "Save leftover rose-infused soy liquid: freeze in ice cube trays for future braises or noodle soups.",
    "If using fresh rose petals, double the amount and add only in last 5 minutes of simmering to preserve fragrance."
  ],
  "tipsZh": [
    "正宗吃法是冰镇上桌，非室温，更能凸显玫瑰与豉油的清爽对比。",
    "剩余玫瑰豉油可冷冻成冰格小块，下次卤味或煮面时取用。",
    "若用新鲜玫瑰花瓣，用量加倍，且只在最后5分钟加入，锁住香气。"
  ],
  "relatedSlugs": [
    "char-siu-pork",
    "honey-rib-roast"
  ],
  "image": "/images/recipes/rose-soy-chicken.webp"
};
