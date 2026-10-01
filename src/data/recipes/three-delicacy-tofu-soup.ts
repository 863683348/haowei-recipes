import type { Recipe } from "@/lib/types";

/** Three Delicacy Tofu Soup (三鲜豆腐羹) (三鲜豆腐羹) — Day batch */
export const three_delicacy_tofu_soup: Recipe = {
  "id": "san-xian-dou-fu-geng",
  "slug": "three-delicacy-tofu-soup",
  "titleEn": "Three Delicacy Tofu Soup (三鲜豆腐羹)",
  "titleZh": "三鲜豆腐羹",
  "pinyin": "sān xiān dòu fu gēng",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Home",
  "regionZh": "家常",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses chicken stock from a cube and whatever seafood is in the freezer; restaurant version builds a proper shrimp-shell stock and adds crab roe.",
  "versionNoteZh": "家常版用现成高汤块加冷冻海鲜；酒楼版先熬虾壳汤，再加蟹黄。",
  "tags": [
    "tofu",
    "soup",
    "seafood",
    "comfort",
    "family"
  ],
  "dietary": [
    "none"
  ],
  "story": "The bowl that appears when someone is tired or coming down with something: silky tofu, three kinds of seafood, thickened just enough to hold heat.",
  "storyZh": "家里有人累了或快感冒时就会出现的那碗：嫩豆腐配三样海鲜，勾到刚好保温的稠度。",
  "ingredients": [
    {
      "id": "sxdfg-01",
      "nameEn": "soft tofu, cut into 1 cm dice",
      "nameZh": "嫩豆腐（切1厘米丁）",
      "pinyin": "nèn dòu fu",
      "amountMetric": "350 g",
      "amountUS": "12 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "tofu"
    },
    {
      "id": "sxdfg-02",
      "nameEn": "shelled shrimp, halved",
      "nameZh": "虾仁（对半切）",
      "pinyin": "xiā rén",
      "amountMetric": "100 g",
      "amountUS": "3.5 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "shrimp"
    },
    {
      "id": "sxdfg-03",
      "nameEn": "squid, scored and sliced",
      "nameZh": "鲜鱿（剞花切片）",
      "pinyin": "xiān yóu",
      "amountMetric": "100 g",
      "amountUS": "3.5 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "sxdfg-04",
      "nameEn": "seaweed or wakame, soaked",
      "nameZh": "海带/裙带菜（泡发）",
      "pinyin": "hǎi dài",
      "amountMetric": "10 g",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "seaweed"
    },
    {
      "id": "sxdfg-05",
      "nameEn": "chicken or seafood stock",
      "nameZh": "鸡高汤/海鲜汤",
      "pinyin": "jī gāo tāng",
      "amountMetric": "900 ml",
      "amountUS": "3 3/4 cups",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "sxdfg-06",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "25 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cornstarch"
    },
    {
      "id": "sxdfg-07",
      "nameEn": "ginger, shredded fine",
      "nameZh": "姜（切细丝）",
      "pinyin": "jiāng",
      "amountMetric": "8 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sxdfg-08",
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
      "id": "sxdfg-09",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "sxdfg-10",
      "nameEn": "scallion, finely sliced",
      "nameZh": "葱（切细花）",
      "pinyin": "cōng",
      "amountMetric": "15 g",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Cut tofu into 1 cm dice and soak in warm salted water 5 minutes; drain gently.",
      "textZh": "豆腐切1厘米丁，温盐水浸5分钟，轻轻沥干。",
      "zhHint": "泡豆腐",
      "stateNote": {
        "visual": "Cubes hold sharp edges instead of crumbling.",
        "visualZh": "豆腐丁棱角分明、不碎。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Water stays mostly clear.",
        "signalZh": "水基本清澈。"
      }
    },
    {
      "text": "Bring stock to a bare simmer with ginger shreds; cook 3 minutes to infuse.",
      "textZh": "高汤加姜丝煮至微沸，煨3分钟出味。",
      "zhHint": "煨汤底",
      "stateNote": {
        "visual": "Tiny bubbles cling to the pot wall; surface barely moves.",
        "visualZh": "锅边挂细泡、汤面几乎不动。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "Ginger aroma is clean and warm.",
        "signalZh": "姜香清暖。"
      }
    },
    {
      "text": "Add shrimp and squid; poach 90 seconds until the shrimp turn pink and squid curls.",
      "textZh": "下虾仁与鲜鱿，汆90秒至虾变粉、鱿卷起。",
      "zhHint": "汆海鲜",
      "stateNote": {
        "visual": "Shrimp are opaque pink; squid forms tight curls.",
        "visualZh": "虾仁粉白、鱿鱼卷紧。",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium",
        "signal": "Seafood feels springy, not rubbery.",
        "signalZh": "海鲜弹、不橡皮。"
      }
    },
    {
      "text": "Slip in tofu and seaweed; simmer 2 minutes without stirring hard.",
      "textZh": "下豆腐与海带，微火煮2分钟，不要大力搅。",
      "zhHint": "下豆腐",
      "stateNote": {
        "visual": "Tofu cubes stay whole and float slightly.",
        "visualZh": "豆腐完整、微微浮起。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Broth looks cloudy-savoury, not broken.",
        "signalZh": "汤色微浑、鲜而不散。"
      }
    },
    {
      "text": "Season with soy sauce and white pepper; pour in the cornstarch slurry in a thin stream while stirring one direction.",
      "textZh": "加生抽与白胡椒调味，淀粉水细流淋入并顺一个方向搅。",
      "zhHint": "勾芡",
      "stateNote": {
        "visual": "Soup turns glossy and coats the spoon lightly.",
        "visualZh": "羹变亮、能薄挂勺背。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Bubbles break slowly on the surface.",
        "signalZh": "表面气泡缓破。"
      }
    },
    {
      "text": "Off heat, scatter scallion and serve hot.",
      "textZh": "关火撒葱花，趁热上桌。",
      "zhHint": "出锅",
      "stateNote": {
        "visual": "Steam carries pepper and seafood aroma; surface is smooth.",
        "visualZh": "热气带胡椒与海鲜香、表面平滑。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "Soup is hot enough to sip, not scalding-thick.",
        "signalZh": "热可入口、不稠到烫嘴。"
      }
    }
  ],
  "tips": [
    "Soften tofu in warm salted water so it will not shatter.",
    "Add the slurry slowly and stir one direction only.",
    "White pepper is the signature — do not swap it for black."
  ],
  "tipsZh": [
    "豆腐温盐水泡过才不碎。",
    "芡要慢淋、只朝一个方向搅。",
    "白胡椒是灵魂，别换黑胡椒。"
  ],
  "commonMistakes": [
    {
      "mistake": "Boiling hard after adding tofu so it breaks apart.",
      "mistakeZh": "下豆腐后大火滚，豆腐全碎。",
      "fix": "Keep it at a low simmer and stir gently.",
      "fixZh": "小火微沸、轻推。"
    },
    {
      "mistake": "Dumping the slurry in at once, leaving lumps.",
      "mistakeZh": "淀粉水一次倒，起疙瘩。",
      "fix": "Pour in a thin stream while stirring.",
      "fixZh": "细流慢淋、同步搅动。"
    }
  ],
  "variations": [
    "Add crab meat for a richer bowl.",
    "Swap seaweed for spinach.",
    "Drop in an egg ribbon at the end."
  ],
  "variationsZh": [
    "加蟹肉更浓。",
    "海带换菠菜。",
    "最后淋蛋液成蛋花。"
  ],
  "relatedSlugs": [
    "braised-tofu",
    "tomato-tofu",
    "enoki-tofu-clay-pot",
    "guota-tofu",
    "shrimp-with-silky-eggs"
  ],
  "image": "/images/recipes/chrysanthemum-tofu.webp"
};
