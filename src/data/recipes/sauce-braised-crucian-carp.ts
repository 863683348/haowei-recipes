import type { Recipe } from "@/lib/types";

/** Sauce-Braised Crucian Carp (酱焖鲫鱼) — Seed batch */
export const sauce_braised_crucian_carp: Recipe = {
  "id": "jiang-men-ji-yu",
  "slug": "sauce-braised-crucian-carp",
  "titleEn": "Sauce-Braised Crucian Carp",
  "titleZh": "酱焖鲫鱼",
  "pinyin": "jiàng mèn jì yú",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version uses gentle braising instead of restaurant-style high-heat searing — tenderer flesh, less oil, and no wok hei needed.",
  "versionNoteZh": "家庭版采用小火慢焖而非餐馆大火猛煎，鱼肉更嫩、用油更少，无需镬气。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Yangpu District would braise crucian carp every Saturday morning — she said the fish’s delicate bones softened just right after 35 minutes in sweet-savory sauce, and my cousins always fought over the belly meat.",
  "storyZh": "我杨浦区的阿姨每逢周六清晨必做酱焖鲫鱼——她说鲫鱼细骨在甜咸酱汁里焖够35分钟就酥软入味，表弟表妹总抢着吃鱼腹那块最嫩的肉。",
  "ingredients": [
    {
      "id": "jm-01",
      "nameEn": "crucian carp",
      "nameZh": "鲫鱼",
      "pinyin": "jì yú",
      "amountMetric": "600 g",
      "amountUS": "1.25 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Look for whole, bright-eyed fish with firm flesh; ask fishmonger to scale and gut. Substitute: small tilapia (skin-on, 500–600 g).",
      "noteZh": "选整条、眼睛清亮、肉质紧实的鲫鱼；请鱼贩刮鳞去内脏。替代：带皮小罗非鱼（500–600 克）。"
    },
    {
      "id": "jm-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "jm-03",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "jm-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "jm-05",
      "nameEn": "ginger",
      "nameZh": "姜",
      "pinyin": "jiāng",
      "amountMetric": "20 g",
      "amountUS": "1-inch knob, sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "jm-06",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Pat crucian carp dry with paper towels. Score both sides deeply with a knife (3–4 slashes per side) to help seasoning penetrate.",
      "textZh": "用厨房纸将鲫鱼全身擦干。两面各斜切3–4道深口，便于入味。",
      "zhHint": "擦干 + 划刀",
      "stateNote": {
        "visual": "Fish surface is matte, not shiny or wet",
        "visualZh": "鱼身哑光，无水珠反光",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Knife cuts reach halfway through the thickest part of the fillet",
        "signalZh": "刀口切入鱼身最厚处一半深度"
      }
    },
    {
      "text": "Heat 20 ml (1½ tbsp) neutral oil in a heavy-bottomed pot or Dutch oven over medium-high heat until shimmering but not smoking.",
      "textZh": "厚底锅中倒入20毫升（1½汤匙）中性油，中高火烧至油面微泛涟漪但未冒烟。",
      "zhHint": "热油至涟漪状",
      "stateNote": {
        "visual": "Oil shimmers with faint ripples, no smoke rising",
        "visualZh": "油面泛起细微涟漪，无青烟",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium-high",
        "signal": "A wooden chopstick tip bubbles gently when dipped",
        "signalZh": "木筷尖端轻触油面，有细密气泡缓慢升起"
      }
    },
    {
      "text": "Carefully place fish in hot oil, skin-side down. Press gently with a spatula for 30 seconds to prevent curling. Fry undisturbed until golden brown and crisp (about 4 minutes). Flip and fry second side 3 minutes.",
      "textZh": "小心将鱼放入热油，鱼皮朝下。用锅铲轻压30秒防卷边。保持不动，煎至鱼皮金黄酥脆（约4分钟）。翻面再煎3分钟。",
      "zhHint": "压平 + 不翻动",
      "stateNote": {
        "visual": "Skin is uniformly deep golden with crisp edges",
        "visualZh": "鱼皮呈均匀深金色，边缘微翘酥脆",
        "timeRef": "4 minutes (first side)",
        "timeRefZh": "第一面 4 分钟",
        "heat": "medium",
        "signal": "Fish releases easily from pan without sticking",
        "signalZh": "鱼身自然松脱，不粘锅底"
      }
    },
    {
      "text": "Push fish to one side. Add ginger slices and scallion whites to the empty space; stir-fry 30 seconds until fragrant. Pour in light soy, dark soy, and Shaoxing wine. Add just enough warm water to barely cover the fish (≈300 ml / 1¼ cups).",
      "textZh": "将鱼推至锅一侧，在空余处放入姜片和葱白段，煸炒30秒至出香。淋入生抽、老抽、绍兴酒，再加温水至刚好没过鱼身（约300毫升／1¼杯）。",
      "zhHint": "爆香姜葱 + 淋酱 + 加水",
      "stateNote": {
        "visual": "Sauce bubbles gently at edges, steam rises steadily",
        "visualZh": "酱汁边缘微滚，持续升腾热气",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Aromatics sizzle and release fragrance immediately",
        "signalZh": "姜葱遇热即刻发出浓郁辛香"
      }
    },
    {
      "text": "Bring to a gentle simmer, then reduce heat to low. Cover and braise 35 minutes, turning fish once halfway. Remove lid and reduce sauce over medium-low heat until thickened and glossy (5–7 minutes). Garnish with scallion greens.",
      "textZh": "烧开后转最小火，盖盖焖煮35分钟，中途翻面一次。开盖，中低温收汁至浓稠油亮（5–7分钟），撒葱绿段即成。",
      "zhHint": "小火焖 + 开盖收汁",
      "stateNote": {
        "visual": "Sauce coats back of spoon thickly and leaves a clear trail",
        "visualZh": "酱汁浓稠挂勺，勺背划痕清晰不闭合",
        "timeRef": "5–7 minutes",
        "timeRefZh": "5–7 分钟",
        "heat": "medium-low",
        "signal": "Bubbles slow to large, lazy pops; sauce glistens",
        "signalZh": "气泡变大变缓，酱汁泛油亮光泽"
      }
    }
  ],
  "tips": [
    "Crucian carp has many fine bones — serve with rice to soften texture contrast.",
    "For deeper umami, add 1 tsp oyster sauce (termKey: oyster-sauce) in step 4.",
    "Never stir the fish while braising — use two spatulas to gently lift and flip."
  ],
  "tipsZh": [
    "鲫鱼细刺多，配米饭食用可柔化口感对比。",
    "如需更醇厚鲜味，步骤4中可加1茶匙蚝油（termKey: oyster-sauce）。",
    "焖煮时切勿搅动鱼身——用两把锅铲托起翻面。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/sauce-braised-crucian-carp.webp"
};
