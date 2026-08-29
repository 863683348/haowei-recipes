import type { Recipe } from "@/lib/types";

/** Dry-Fried Long Beans (干煸豆角) — Seed batch */
export const dry_fried_long_beans: Recipe = {
  "id": "gan-bian-dou-jiao",
  "slug": "dry-fried-long-beans",
  "titleEn": "Dry-Fried Long Beans",
  "titleZh": "干煸豆角",
  "pinyin": "gān biān dòu jiǎo",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "easy",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses fresh green beans — no deep-frying. Instead, low-and-slow dry-fry in batches to evaporate water, then high-heat finish with aromatics. Restaurants often deep-fry first for hollow crispness — but home cooks achieve depth through patience and wok hei.",
  "versionNoteZh": "家常版用鲜豇豆，免过油；分批小火煸干水分，再大火合炒香料。餐馆多先油炸求空心脆，家庭则靠耐心与锅气提香。",
  "tags": [
    "30-min",
    "vegetable-forward",
    "bold-flavor"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My aunt Mei in Chongqing’s Nan’an district fried her long beans in a dented wok handed down from her mother — she’d stir constantly with a bamboo chopstick, counting aloud ‘one-two-three-four’ with each pass, saying the rhythm kept the beans from scorching while coaxing out their earthy sweetness.",
  "storyZh": "我重庆南岸的梅姨用母亲传下的凹痕铁锅炒豇豆——她手持竹筷不停翻动，边数‘一、二、三、四’，说这节奏既能防焦糊，又能逼出豆子的泥土甜香。",
  "ingredients": [
    {
      "id": "dj-01",
      "nameEn": "green long beans (Chinese yard-long beans)",
      "nameZh": "豇豆（长豆角）",
      "pinyin": "jiāng dòu",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "produce",
      "pantry": "local",
      "note": "Look for slender, firm, bright green beans with no bulges — avoid thick, stringy, or yellow-tipped ones. Substitute regular green beans if unavailable.",
      "noteZh": "选细长、硬挺、翠绿无鼓包者；避粗硬、纤维重或尖端发黄者。缺货时可用普通四季豆替代。"
    },
    {
      "id": "dj-02",
      "nameEn": "doubanjiang (spicy fermented broad bean paste)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "dj-03",
      "nameEn": "garlic (minced)",
      "nameZh": "大蒜（剁碎）",
      "pinyin": "dà suàn",
      "amountMetric": "10 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "dj-04",
      "nameEn": "dried chili (crushed, optional for heat)",
      "nameZh": "干辣椒（剪碎，可选增辣）",
      "pinyin": "gān là jiāo",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chili"
    },
    {
      "id": "dj-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Trim ends and cut beans diagonally into 4-cm lengths. Rinse and pat *completely* dry — no dampness allowed.",
      "textZh": "掐去两头，斜刀切成4厘米段；洗净后务必彻底擦干——绝不许带水。",
      "zhHint": "斜切易入味，擦干防溅油",
      "stateNote": {
        "visual": "Beans look matte, no water beads on surface",
        "visualZh": "豆角表面哑光，无水珠附着",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Paper towel comes away clean, not damp",
        "signalZh": "厨房纸擦拭后洁净无潮"
      }
    },
    {
      "text": "Heat wok over medium-low. Add 1.5 tbsp neutral oil. Add beans in single layer — cook undisturbed 3 minutes until edges blister and color deepens to jade-green.",
      "textZh": "中低温烧热锅，加1.5汤匙油；豆角单层铺入，静置3分钟至边缘起泡、色转碧绿。",
      "zhHint": "小火慢煸，逼出水分",
      "stateNote": {
        "visual": "Surface shows tiny, translucent blisters; color intensifies",
        "visualZh": "表面浮现细小透亮水泡，绿色更浓",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "Faint sizzle, no popping or spitting",
        "signalZh": "微滋滋声，无爆溅"
      }
    },
    {
      "text": "Flip beans, repeat 3 minutes. Then stir-fry 2 more minutes until uniformly wrinkled and slightly shriveled — they should weigh ~25% less.",
      "textZh": "翻面再煸3分钟；随后翻炒2分钟至整体起皱微缩——重量减少约25%。",
      "zhHint": "全程需耐心，失重是干煸完成标志",
      "stateNote": {
        "visual": "Beans look leathery, slightly coiled, with matte finish",
        "visualZh": "豆角呈皮革质感、微卷曲、表面哑光",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Wok emits warm, toasted-bean aroma",
        "signalZh": "锅中散发温暖豆香"
      }
    },
    {
      "text": "Push beans to sides. Add doubanjiang, garlic, and dried chilies to center. Toast 45 seconds until oil turns brick-red and fragrance blooms.",
      "textZh": "将豆角拨至锅边，豆瓣酱、蒜末、干辣椒堆于锅心，焙香45秒至油色转砖红、香气迸发。",
      "zhHint": "酱料先焙透，去生味",
      "stateNote": {
        "visual": "Oil separates and glows deep red around paste",
        "visualZh": "油星析出，围酱泛砖红色泽",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium",
        "signal": "Sharp, fermented aroma mellows into rich umami",
        "signalZh": "刺鼻发酵味转为醇厚酱香"
      }
    },
    {
      "text": "Mix everything together. Add light soy sauce. Stir-fry 1 minute on high heat until beans glisten and sauce clings tightly.",
      "textZh": "合炒均匀，淋入生抽，大火翻炒1分钟至豆角油亮、酱汁紧裹。",
      "zhHint": "大火收汁，亮油裹酱",
      "stateNote": {
        "visual": "Each bean coated in thin, glossy, reddish-brown film",
        "visualZh": "每根豆角裹着薄层透亮红褐酱膜",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Wok emits audible 'wok hei' sizzle — sharp, clean, hot",
        "signalZh": "锅中发出清晰‘锅气’滋响——锐利、干净、炽热"
      }
    }
  ],
  "tips": [
    "Never overcrowd the wok — dry-frying requires space for steam to escape.",
    "Doubanjiang must be Sichuan-style (not Korean or Japanese bean paste) — check label for Pixian origin.",
    "If beans soften too much, reduce initial heat or shorten first batch time by 30 seconds."
  ],
  "tipsZh": [
    "切勿堆叠入锅——干煸需要空间让水汽逸散。",
    "豆瓣酱必须是四川郫县产（非韩日款），认准包装‘郫县’字样。",
    "若豆角过软，可调低初火或首段煸炒时间减30秒。"
  ],
  "relatedSlugs": [
    "dry-fried-pork-intestine",
    "dry-fried-bitter-melon"
  ],
  "image": "/images/recipes/dry-fried-long-beans.webp"
};
