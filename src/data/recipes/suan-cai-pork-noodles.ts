import type { Recipe } from "@/lib/types";

/** Pickled Cabbage and Pork Noodles (酸菜肉丝面) — Day batch */
export const suan_cai_pork_noodles: Recipe = {
  "id": "suan-cai-pork-noodles",
  "slug": "suan-cai-pork-noodles",
  "titleEn": "Pickled Cabbage and Pork Noodles",
  "titleZh": "酸菜肉丝面",
  "pinyin": "suān cài ròu sī miàn",
  "cuisine": "东北菜",
  "cuisineEn": "Northeastern Chinese",
  "region": "Heilongjiang",
  "regionZh": "黑龙江",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version rinses the pickle lightly and keeps some of its sour brine for the broth; restaurant versions rinse it thoroughly and rebuild the sourness with vinegar, which is cleaner but less rounded.",
  "versionNoteZh": "家常版略洗腌菜并留一点酸卤进汤；餐厅版彻底洗净后用醋重新调酸，更清爽但少了圆润。",
  "tags": [
    "30-min",
    "noodles",
    "sour",
    "northeastern",
    "winter"
  ],
  "dietary": [
    "none"
  ],
  "story": "In the northeast the whole winter runs on suan cai — whole cabbages buried in crocks in October and dug out frozen in January. This noodle is the quick weekday version of the famous suan cai pork stew: sour, porky, and designed to be eaten so hot that the window fogs up.",
  "storyZh": "在东北，整个冬天都靠酸菜撑着——十月整棵白菜下缸，一月冻着挖出来。这碗面是名菜酸菜白肉的快手版：酸、香、有肉味，而且要吃得够烫，烫到窗户起雾。",
  "ingredients": [
    {
      "id": "sp-01",
      "nameEn": "fresh wheat noodles",
      "nameZh": "鲜面条",
      "pinyin": "xiān miàn",
      "amountMetric": "280 g",
      "amountUS": "9 oz",
      "category": "staple",
      "pantry": "asian",
      "note": "Medium-width fresh noodles; the sour broth wants something with chew",
      "noteZh": "用中等宽度鲜面——酸汤配筋道的面最好"
    },
    {
      "id": "sp-02",
      "nameEn": "pork loin, cut into fine matchsticks",
      "nameZh": "猪里脊，切细丝",
      "pinyin": "zhū lǐ jǐ sī",
      "amountMetric": "180 g",
      "amountUS": "6 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-loin"
    },
    {
      "id": "sp-03",
      "nameEn": "pickled napa cabbage (suan cai), rinsed and squeezed dry",
      "nameZh": "东北酸菜，冲洗挤干",
      "pinyin": "suān cài",
      "amountMetric": "200 g",
      "amountUS": "1½ cups shredded",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Vacuum-packed or jarred northeastern suan cai; squeeze out as much liquid as you can before shredding",
      "noteZh": "真空装或罐装东北酸菜；切丝前尽量挤干水分",
      "termKey": "napa-cabbage"
    },
    {
      "id": "sp-04",
      "nameEn": "dried red chillies, snipped",
      "nameZh": "干辣椒，剪段",
      "pinyin": "gān là jiāo",
      "amountMetric": "3 g",
      "amountUS": "2–3 chillies",
      "category": "spice",
      "pantry": "asian",
      "note": "Snip and shake out the seeds if you want fragrance without much heat",
      "noteZh": "剪段并抖掉籽，只要香气不要太辣",
      "termKey": "dried-chilies"
    },
    {
      "id": "sp-05",
      "nameEn": "fresh ginger, shredded",
      "nameZh": "鲜姜，切丝",
      "pinyin": "jiāng sī",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp shredded",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sp-06",
      "nameEn": "garlic, sliced",
      "nameZh": "蒜，切片",
      "pinyin": "suàn piàn",
      "amountMetric": "10 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "sp-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sp-08",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Northeastern cooks are generous with white pepper in sour cabbage dishes",
      "noteZh": "东北人做酸菜时白胡椒给得很足",
      "termKey": "white-pepper"
    },
    {
      "id": "sp-09",
      "nameEn": "scallion, sliced",
      "nameZh": "小葱，切段",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rinse the suan cai briefly under cold water, then squeeze it very dry and shred it crosswise into ribbons.",
      "textZh": "酸菜用冷水快速冲洗，挤干水分后横切成细丝。",
      "zhHint": "挤干切丝",
      "stateNote": {
        "visual": "Shreds are pale translucent yellow and feel almost dry; no water drips when squeezed",
        "visualZh": "菜丝呈半透明浅黄、手感近干，挤压无水滴滴下",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "A handful springs back loosely instead of clumping into a wet ball",
        "signalZh": "抓一把松手能散开，而非黏成湿团"
      }
    },
    {
      "text": "Heat a wok over medium-high with oil. Fry the dried chillies, ginger and garlic for 30 seconds until the oil smells hot and nutty.",
      "textZh": "锅烧热下油，爆香干辣椒、姜丝与蒜片30秒至油出焦香。",
      "zhHint": "爆香辣姜蒜",
      "stateNote": {
        "visual": "Chillies darken to a deep glossy red without turning black; garlic edges are pale gold",
        "visualZh": "辣椒转为深亮红色但未发黑，蒜片边缘浅金",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-high",
        "signal": "The fragrance hits you before any smoke does — if it smokes, the wok was too hot",
        "signalZh": "香气先于油烟扑鼻——若已冒烟说明锅过热"
      }
    },
    {
      "text": "Add the pork matchsticks and stir-fry over high heat for 90 seconds until they change colour, then push to one side.",
      "textZh": "下肉丝大火炒90秒至变色，推到一边。",
      "zhHint": "大火炒肉丝",
      "stateNote": {
        "visual": "Strands are pale gold outside with no pink showing, still plump not shrunken",
        "visualZh": "肉丝外表浅金无粉色，仍饱满不缩水",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "high",
        "signal": "The pork squeaks lightly against the wok rather than sticking",
        "signalZh": "肉丝在锅中发出轻微摩擦声而不粘锅"
      }
    },
    {
      "text": "Add the suan cai to the clear side and stir-fry for 2 minutes, until it looks dry and smells toasted rather than raw sour.",
      "textZh": "酸菜下到空处炒2分钟，至干爽、气味由生酸转焦香。",
      "zhHint": "酸菜要炒透",
      "stateNote": {
        "visual": "Shreds have lost their wet sheen and look matte and slightly curled at the edges",
        "visualZh": "菜丝失去水亮感，表面哑光、边缘微卷",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-high",
        "signal": "The sharp raw-pickle smell has softened into a rounded, savoury sourness",
        "signalZh": "刺鼻生腌味转为圆润咸酸香"
      }
    },
    {
      "text": "Pour in 800 ml (3⅓ cups) boiling water. Bring to a boil, season with soy sauce and white pepper, and simmer 5 minutes.",
      "textZh": "倒入800毫升滚水，烧沸后用生抽与白胡椒调味，小火煮5分钟。",
      "zhHint": "滚水煮汤",
      "stateNote": {
        "visual": "Broth is pale gold with a faint sheen, pickle shreds suspended and moving in the boil",
        "visualZh": "汤色浅金微亮，酸菜丝在沸汤中悬浮翻动",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "A spoonful tastes sour first, salty second, and the sourness fades quickly",
        "signalZh": "尝一口先酸后咸，酸味很快退去"
      }
    },
    {
      "text": "Cook the noodles separately until just tender, divide between bowls, ladle the boiling sour broth over, and finish with scallion.",
      "textZh": "另锅煮面至刚熟，分装碗中，浇入滚烫酸汤，最后撒葱花。",
      "zhHint": "浇酸汤",
      "stateNote": {
        "visual": "Pale gold sour broth with translucent pickle ribbons, tender pork and green scallion",
        "visualZh": "浅金酸汤中有半透明酸菜丝、嫩肉丝与绿色葱花",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "high",
        "signal": "Steam fogs your glasses when you lean over the bowl",
        "signalZh": "凑近碗面时蒸汽能糊住眼镜"
      }
    }
  ],
  "tips": [
    "Fry the suan cai dry before adding water. Raw pickle straight into liquid tastes thin and one-dimensional.",
    "Rinse lightly rather than thoroughly — you want to keep a little of the sour brine for depth.",
    "A spoonful of lard is traditional here and makes a noticeable difference; bacon fat is the closest substitute."
  ],
  "tipsZh": [
    "酸菜一定要先炒干再加水。生腌菜直接下水，汤味又薄又单。",
    "略洗不要狠洗——留一点酸卤才有层次。",
    "传统做法会加一勺猪油，差别明显；培根油是最接近的替代。"
  ],
  "relatedSlugs": [
    "pork-ribs-sauerkraut-stew",
    "suan-la-fen-hot-and-sour-noodles"
  ],
  "image": "/images/recipes/suan-la-fen-hot-and-sour-noodles.webp"
};
