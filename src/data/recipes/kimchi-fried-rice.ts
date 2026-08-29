import type { Recipe } from "@/lib/types";

/** Kimchi Fried Rice (泡菜炒饭) — Seed batch */
export const kimchi_fried_rice: Recipe = {
  "id": "pao-cai-chao-fan",
  "slug": "kimchi-fried-rice",
  "titleEn": "Kimchi Fried Rice",
  "titleZh": "泡菜炒饭",
  "pinyin": "pào cài chǎo fàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "easy",
  "timeMin": 22,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips pork belly—uses pantry kimchi and a single egg for speed and tang. No gochujang; authentic Sichuan-style kimchi is used (mild, garlicky, less sweet).",
  "versionNoteZh": "家庭版不加五花肉，只用常备泡菜与单个鸡蛋，快手酸辣。不用韩式辣酱；用川式泡菜（微辣、蒜香、少甜）。",
  "tags": [
    "30-min",
    "weeknight",
    "vegetarian-option"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My uncle in Jinniu District kept a crock of homemade suan cai under his kitchen sink—he’d stir-fry it with rice and an egg every time my cousins visited, saying, 'Sourness wakes up sleepy stomachs.'",
  "storyZh": "我金牛区的舅舅在厨房水槽下常年存一坛自腌酸菜——每次表弟妹来，他就用酸菜、米饭和一个鸡蛋快炒一锅，说：‘酸味能叫懒洋洋的胃醒过来。’",
  "ingredients": [
    {
      "id": "kf-01",
      "nameEn": "cold cooked rice",
      "nameZh": "隔夜熟米饭",
      "pinyin": "gé yè shú mǐ fàn",
      "amountMetric": "300 g",
      "amountUS": "2 cups (loosely packed)",
      "category": "staple",
      "pantry": "local",
      "note": "Must be fully chilled and dry; refrigerated ≥8 hours",
      "noteZh": "必须彻底冷藏且干爽；冷藏≥8小时"
    },
    {
      "id": "kf-02",
      "nameEn": "Sichuan-style kimchi (suan cai)",
      "nameZh": "四川泡菜（酸菜）",
      "pinyin": "sì chuān pào cài (suān cài)",
      "amountMetric": "120 g",
      "amountUS": "½ cup, chopped fine",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute Korean kimchi if unavailable—but drain well and reduce salt by ½ tsp",
      "noteZh": "若无川式泡菜，可用韩式泡菜替代——但需沥干，并减盐½茶匙"
    },
    {
      "id": "kf-03",
      "nameEn": "egg",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "50 g",
      "amountUS": "1 large",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "kf-04",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "10 g",
      "amountUS": "2 cloves, minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "kf-05",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Heat wok over medium-high heat. Add 1 tsp neutral oil (e.g., canola), then garlic—stir 15 seconds until aromatic but pale.",
      "textZh": "中高火烧热炒锅，加1茶匙中性油（如菜籽油），下蒜末，煸15秒至出香但未上色。",
      "zhHint": "蒜末快煸",
      "stateNote": {
        "visual": "Garlic pieces soften but retain pale ivory color",
        "visualZh": "蒜末变软，仍呈浅象牙色",
        "timeRef": "15 seconds",
        "timeRefZh": "15秒",
        "heat": "medium-high",
        "signal": "Fragrant steam rises, no browning",
        "signalZh": "香气升腾，无焦色"
      }
    },
    {
      "text": "Add chopped kimchi and stir-fry 1 minute until bubbling and slightly reduced.",
      "textZh": "下切碎泡菜，翻炒1分钟至冒小泡、体积略收。",
      "zhHint": "泡菜煸香",
      "stateNote": {
        "visual": "Kimchi releases small bubbles and darkens slightly",
        "visualZh": "泡菜冒细泡、颜色微深",
        "timeRef": "1 minute",
        "timeRefZh": "1分钟",
        "heat": "medium-high",
        "signal": "Tangy aroma sharpens noticeably",
        "signalZh": "酸香明显变浓"
      }
    },
    {
      "text": "Push kimchi to one side. Crack egg into empty space and scramble until just set—then mix with kimchi.",
      "textZh": "将泡菜拨至锅边，空出位置磕入鸡蛋，炒至刚凝固即与泡菜混匀。",
      "zhHint": "蛋液摊开炒",
      "stateNote": {
        "visual": "Egg forms soft, golden curds, no browning",
        "visualZh": "蛋呈柔软金黄絮状，无焦边",
        "timeRef": "45 seconds",
        "timeRefZh": "45秒",
        "heat": "medium-high",
        "signal": "Egg loses all liquid sheen",
        "signalZh": "蛋液光泽完全消失"
      }
    },
    {
      "text": "Add cold rice. Break up clumps and stir-fry 2 minutes until rice is heated through and begins to crisp at edges.",
      "textZh": "下冷米饭，压散结块，翻炒2分钟至热透、边缘微脆。",
      "zhHint": "炒热炒脆",
      "stateNote": {
        "visual": "Rice grains separate and some develop light golden flecks",
        "visualZh": "米粒松散，部分边缘呈浅金斑点",
        "timeRef": "2 minutes",
        "timeRefZh": "2分钟",
        "heat": "medium-high",
        "signal": "Dry sizzle sound replaces wet steam",
        "signalZh": "湿气声转为干爽滋滋声"
      }
    },
    {
      "text": "Turn off heat. Stir in sesame oil. Taste and adjust—add a pinch of white pepper if desired (optional). Serve hot.",
      "textZh": "关火，拌入芝麻油。尝味调整——可选加少许白胡椒粉。趁热上桌。",
      "zhHint": "关火淋香油",
      "stateNote": {
        "visual": "Oil coats each grain with a subtle sheen",
        "visualZh": "香油均匀裹覆每粒米饭",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Aroma blooms without further cooking",
        "signalZh": "香气自然迸发，无需再加热"
      }
    }
  ],
  "tips": [
    "Rinse kimchi briefly if overly salty—pat dry before cooking.",
    "For vegan version, omit egg and add 60 g (¼ cup) roasted peanuts for crunch and protein.",
    "Sichuan-style kimchi is often sold as 'Sichuan pickled mustard tuber' or 'suan cai'—check Asian grocery refrigerated section."
  ],
  "tipsZh": [
    "若泡菜过咸，可快速冲洗一下——务必擦干再炒。",
    "素食版可省去鸡蛋，加60克（¼杯）烤花生仁增香添脆补蛋白。",
    "川式泡菜常标为‘四川榨菜’或‘酸菜’，请查亚超冷藏区。"
  ],
  "relatedSlugs": [
    "soy-sauce-fried-rice"
  ],
  "image": "/images/recipes/kimchi-fried-rice.webp"
};
