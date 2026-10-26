import type { Recipe } from "@/lib/types";

/** Scallion-Braised Crucian Carp (Congkao Jiyu) (葱烤鲫鱼) — Day batch */
export const scallion_braised_crucian_carp: Recipe = {
  "id": "scallion-braised-crucian-carp",
  "slug": "scallion-braised-crucian-carp",
  "titleEn": "Scallion-Braised Crucian Carp (Congkao Jiyu)",
  "titleZh": "葱烤鲫鱼",
  "pinyin": "cōng kǎo jì yú",
  "cuisine": "家常菜",
  "cuisineEn": "Home cooking",
  "region": "Jiangnan (Jiangsu / Zhejiang)",
  "regionZh": "江南（江苏 / 浙江）",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 2,
  "version": "family",
  "versionNote": "Classic versions deep-fry the carp first and braise for over an hour in a generous amount of oil. The home version pan-fries and braises in a covered pan with less oil, still long enough for the fine bones to soften.",
  "versionNoteZh": "传统做法要先炸鱼，再用大量油焖一个多小时。家常版改煎，加盖少油焖，时间仍然够长，细刺也能焖软。",
  "tags": [
    "jiangnan",
    "fish",
    "braise",
    "one-pan"
  ],
  "dietary": [
    "none"
  ],
  "story": "In 葱烤 the scallion is not a garnish, it is a bed: a thick mattress of whole scallions laid under and over the fish, slowly smothered until it collapses into sweet green jam. My mother made this when someone in the family had a cold and no appetite — the vinegar-and-scallion smell cut through everything.",
  "storyZh": "「葱烤」的葱不是配角，是垫被：厚厚的整把葱铺在鱼下鱼上，慢慢焖到塌成甜丝丝的绿泥。小时候家里谁感冒没胃口，我妈就做这道——葱香混着醋味，闻一下鼻子就通了。",
  "ingredients": [
    {
      "id": "crucian-carp",
      "nameEn": "whole crucian carp, cleaned and scaled",
      "nameZh": "鲫鱼（去鳞去内脏）",
      "amountMetric": "2 x 350 g",
      "amountUS": "2 x 12 oz",
      "category": "protein",
      "pantry": "asian",
      "termKey": "white-fish",
      "note": "Crucian carp is small and bony. Ask for it at a Chinese market; a small whole tilapia or trout is the workable substitute.",
      "noteZh": "鲫鱼小刺多，中式超市有售；买不到可用小罗非鱼或鳟鱼替代。"
    },
    {
      "id": "scallion",
      "nameEn": "scallions, kept whole",
      "nameZh": "整把小葱",
      "amountMetric": "300 g",
      "amountUS": "2 large bunches",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion",
      "note": "This looks like a lot. It is not a mistake — the scallion is the main vegetable.",
      "noteZh": "看着多，但不是写错——葱就是这道菜的主菜。"
    },
    {
      "id": "ginger",
      "nameEn": "ginger, sliced",
      "nameZh": "姜片",
      "amountMetric": "25 g",
      "amountUS": "6 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "light-soy",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "dark-soy",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "shaoxing-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "chinkiang-vinegar",
      "nameEn": "Chinkiang black vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar",
      "note": "The vinegar softens the fine bones — do not skip it.",
      "noteZh": "醋能把细刺焖软，不能省。"
    },
    {
      "id": "rock-sugar",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "20 g",
      "amountUS": "1 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    },
    {
      "id": "neutral-oil",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "45 ml",
      "amountUS": "3 tbsp",
      "category": "other",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Dry the carp inside and out, score both sides diagonally three times, and rub a little salt into the cuts.",
      "textZh": "鲫鱼内外擦干，两面各斜划三刀，刀口抹少许盐。",
      "stateNote": {
        "visual": "Skin is dry to the touch and the cuts open slightly",
        "visualZh": "鱼皮摸上去干爽，刀口微微张开",
        "signal": "No moisture transfers when you press a towel against the belly cavity",
        "signalZh": "厨房纸按鱼腹不再沾湿",
        "timeRef": "5 minutes",
        "timeRefZh": "约 5 分钟",
        "heat": "medium"
      }
    },
    {
      "text": "Pan-fry the carp over medium-high until both sides are set and golden, then slide them out onto a plate.",
      "textZh": "中大火把鲫鱼两面煎至定型金黄，盛出备用。",
      "stateNote": {
        "visual": "Skin is uniformly golden and no longer sticks to the pan",
        "visualZh": "鱼皮均匀金黄，不再粘锅",
        "signal": "The fish moves freely when you shake the pan",
        "signalZh": "晃动锅子鱼能自由滑动",
        "timeRef": "3 minutes per side",
        "timeRefZh": "每面 3 分钟",
        "heat": "medium-high"
      }
    },
    {
      "text": "Lay half the scallions and all the ginger in the pan, set the carp on top, then bury them under the remaining scallions.",
      "textZh": "锅里铺一半葱和姜片，放上鲫鱼，再把剩下的葱全部盖在鱼身上。",
      "stateNote": {
        "visual": "The fish is completely hidden under a green mound",
        "visualZh": "鱼被绿色的葱堆完全盖住",
        "signal": "The scallions start to wilt and release a sweet smell within a minute",
        "signalZh": "一分钟内葱开始塌软、散出甜香",
        "timeRef": "2 minutes",
        "timeRefZh": "约 2 分钟",
        "heat": "medium"
      }
    },
    {
      "text": "Add both soy sauces, wine, vinegar, rock sugar and 250 ml hot water. Cover tightly and braise at the barest simmer, turning once.",
      "textZh": "加生抽老抽、黄酒、香醋、冰糖和 250 ml 热水，盖紧锅盖，最小火焖煮，中途翻面一次。",
      "stateNote": {
        "visual": "The scallion bed collapses into a dark green jam and the liquid reduces by half",
        "visualZh": "葱被焖塌成深绿色葱泥，汤汁收掉一半",
        "signal": "A fine bone pinched between your fingers gives way easily",
        "signalZh": "细刺用手指一捏就软",
        "timeRef": "30-35 minutes",
        "timeRefZh": "30-35 分钟",
        "heat": "low"
      },
      "tip": "This is a braise, not a boil. If you hear bubbling, the heat is too high.",
      "tipZh": "这是焖不是煮，听见咕嘟声就是火大了。"
    },
    {
      "text": "Uncover, raise the heat and reduce for a few minutes until the sauce is thick and dark, then lift the fish out carefully and spoon the scallion jam over it.",
      "textZh": "开盖转大火收汁几分钟至浓稠发亮，小心把鱼盛出，把葱泥浇在上面。",
      "stateNote": {
        "visual": "The sauce is dark, glossy and mounds slightly on the spoon",
        "visualZh": "汤汁深褐油亮，能在勺上微微堆起",
        "signal": "Large slow bubbles and a faint caramel smell",
        "signalZh": "出现大而慢的气泡，闻到淡淡焦糖香",
        "timeRef": "5 minutes",
        "timeRefZh": "约 5 分钟",
        "heat": "medium-high"
      }
    }
  ],
  "tips": [
    "The scallion jam is the best part — serve it with the fish, never discard it.",
    "Eat slowly and watch for the fine bones; the vinegar softens them but does not dissolve them.",
    "Leftovers are excellent cold the next day, eaten straight from the fridge."
  ],
  "tipsZh": [
    "焖塌的葱泥是精华，一定要连着吃，别扔。",
    "细刺虽被醋焖软但没化掉，慢慢吃、仔细看。",
    "隔夜冷藏后冷吃也极好。"
  ],
  "relatedSlugs": [
    "dry-braised-crucian",
    "sauce-braised-crucian-carp",
    "crucian-carp-tofu-soup"
  ],
  "image": "/images/recipes/sauce-braised-crucian-carp.webp"
};
