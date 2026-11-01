import type { Recipe } from "@/lib/types";

/** Brown Rice Fried Rice (Caomi Chaofan) (糙米炒饭) — Day batch */
export const brown_rice_fried_rice: Recipe = {
  "id": "cao-mi-chao-fan",
  "slug": "brown-rice-fried-rice",
  "titleEn": "Brown Rice Fried Rice (Caomi Chaofan)",
  "titleZh": "糙米炒饭",
  "pinyin": "cāo mǐ chǎo fàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "The family version uses leftover brown rice and accepts a chewier, nuttier result; restaurant fried rice is always made with polished white rice because it fries faster and stays separate, and swapping in brown rice at the last minute is why home versions often turn out heavy.",
  "versionNoteZh": "家庭版用剩糙米，接受更有嚼劲、更坚果香的结果；餐馆炒饭一律用精白米，因为炒得快、粒粒分明，临时把糙米换进去正是家庭版常做得发硬的原因。",
  "tags": [
    "30-min",
    "fried-rice",
    "whole-grain",
    "leftovers",
    "weeknight"
  ],
  "dietary": [
    "none"
  ],
  "story": "Brown rice fried rice is what happens when someone in the house decides to eat more whole grains and nobody wants to give up fried rice. It is genuinely good, but only if the rice is a day old and cooked slightly firmer than usual. The first time I made it with fresh brown rice it came out like warm gravel.",
  "storyZh": "糙米炒饭是家里有人决定多吃粗粮、又没人愿意放弃炒饭时的产物。它其实很好吃，但前提是米要放一天，并且煮得比平时略硬。我第一次用新煮的糙米炒，成品像一堆温热的石子。",
  "ingredients": [
    {
      "id": "cm-01",
      "nameEn": "cold cooked brown rice",
      "nameZh": "冷糙米饭",
      "pinyin": "cāo mǐ fàn",
      "amountMetric": "400 g",
      "amountUS": "2.5 cups cooked",
      "category": "staple",
      "pantry": "local",
      "note": "Cook with 10 percent less water than the package says and chill overnight. Sub: any cooked whole grain rice.",
      "noteZh": "煮时比包装说明少加一成水，冷藏过夜。替代：任意熟杂粮米。"
    },
    {
      "id": "cm-02",
      "nameEn": "eggs",
      "nameZh": "鸡蛋",
      "pinyin": "jī dàn",
      "amountMetric": "2",
      "amountUS": "2",
      "category": "protein",
      "pantry": "local",
      "termKey": "egg"
    },
    {
      "id": "cm-03",
      "nameEn": "raw shrimp, peeled and chopped",
      "nameZh": "生虾仁（切碎）",
      "pinyin": "xiā rén",
      "amountMetric": "120 g",
      "amountUS": "4 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "shrimp",
      "note": "Sub: diced chicken thigh or firm tofu.",
      "noteZh": "替代：鸡腿肉丁或老豆腐丁。"
    },
    {
      "id": "cm-04",
      "nameEn": "carrot, finely diced",
      "nameZh": "胡萝卜（切细丁）",
      "pinyin": "hú luó bo",
      "amountMetric": "70 g",
      "amountUS": "1/2 cup diced",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "cm-05",
      "nameEn": "frozen corn kernels",
      "nameZh": "冷冻玉米粒",
      "pinyin": "yù mǐ lì",
      "amountMetric": "70 g",
      "amountUS": "1/2 cup",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "cm-06",
      "nameEn": "garlic, minced",
      "nameZh": "蒜（切末）",
      "pinyin": "suàn",
      "amountMetric": "8 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "cm-07",
      "nameEn": "scallion, whites and greens separated",
      "nameZh": "小葱（葱白葱绿分开）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "cm-08",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "cm-09",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "cm-10",
      "nameEn": "neutral vegetable oil",
      "nameZh": "无味植物油",
      "pinyin": "zhí wù yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Take the brown rice out of the fridge and break it up with wet hands, pressing out every clump until the grains move freely.",
      "textZh": "取出冰箱里的糙米饭，手上蘸水抓散，压开每一处结块直到米粒能自由散动。",
      "zhHint": "冷糙米饭蘸水抓散",
      "stateNote": {
        "visual": "Grains are separate and matte rather than stuck in wet lumps; no large white blocks remain",
        "visualZh": "米粒分明呈哑光，而不是黏成湿块；不再有大块结团",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Shaking the bowl makes the grains tumble rather than move as one mass",
        "signalZh": "晃动碗时米粒会滚动，而不是整团一起动"
      },
      "tip": "Do this before you turn the heat on. Once the pan is hot you will not have time to break up clumps.",
      "tipZh": "开火前就要做完这步。锅一热你就没时间再拆结块了。"
    },
    {
      "text": "Heat 1 tbsp oil in a wok or wide pan over high heat until it shimmers. Add the beaten eggs and scramble 40 seconds, then remove to a bowl while still slightly soft.",
      "textZh": "炒锅或宽锅大火加1汤匙油烧至冒油纹。倒入蛋液炒40秒，仍略软时盛出备用。",
      "zhHint": "大火炒蛋40秒盛出",
      "stateNote": {
        "visual": "Egg puffs and sets at the edges in about 20 seconds; centres still look slightly wet; pieces are large and fluffy",
        "visualZh": "鸡蛋约20秒就边缘起泡凝固；中心仍略湿；蛋块大而蓬松",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "The egg slides as one mass when you tilt the pan, and the smell is toasty not sulphurous",
        "signalZh": "倾斜锅体时鸡蛋整块滑动，气味是焦香而非硫味"
      },
      "tip": "Brown rice takes longer to fry than white, so take the egg out earlier than you normally would.",
      "tipZh": "糙米比白米炒得久，所以鸡蛋要比平时更早盛出。"
    },
    {
      "text": "Add the remaining oil, then the scallion whites and garlic. Fry 30 seconds, add the shrimp and cook 1 minute until they just turn pink and opaque.",
      "textZh": "补入剩余油，下葱白和蒜末炒30秒，再下虾仁炒1分钟至刚变粉红不透明。",
      "zhHint": "爆香葱蒜后炒虾仁",
      "stateNote": {
        "visual": "Shrimp go from translucent grey to opaque pink-white and curl into a loose C shape, not a tight O",
        "visualZh": "虾仁由半透明灰色变为不透明粉白，卷成松散的C形而非紧闭的O形",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "high",
        "signal": "The garlic is fragrant and pale gold, not browned; shrimp feel springy when pressed",
        "signalZh": "蒜香扑鼻呈浅金色而非焦褐；虾仁按压有弹性"
      },
      "tip": "A tight O shape means overcooked. Pull the shrimp at the C and they finish with the rice.",
      "tipZh": "卷成紧闭的O形就是老了。虾仁到C形就捞出，它会和饭一起再熟。"
    },
    {
      "text": "Add carrot and corn and stir-fry 2 minutes, then add the rice. Press and toss continuously for 4 minutes, letting the grains toast rather than steam.",
      "textZh": "下胡萝卜丁和玉米粒炒2分钟，再倒入米饭。持续按压翻炒4分钟，让米粒受热出香而不是出水冒汽。",
      "zhHint": "配菜先炒再下饭翻炒4分钟",
      "stateNote": {
        "visual": "Grains darken slightly and start to jump in the pan; the mass breaks apart easily with each toss",
        "visualZh": "米粒颜色略深并开始在锅中跳动；每一翻都能轻松散开",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "high",
        "signal": "You hear a dry popping sound rather than a wet sizzle, and the rice moves freely across the pan",
        "signalZh": "听到的是干脆的爆响而非带水的滋滋声，米粒在锅里能顺畅滑动"
      },
      "tip": "Brown rice needs a good 4 minutes of direct contact with the hot pan to lose its raw, dusty edge.",
      "tipZh": "糙米需要在热锅上实打实炒4分钟，才能去掉那股生粉味。"
    },
    {
      "text": "Return the egg, add soy sauce around the edge of the pan, and toss 1 minute so it caramelises on the metal rather than pooling.",
      "textZh": "倒回鸡蛋，沿锅边淋入生抽翻炒1分钟，让酱油在锅壁上焦化而不是积在锅底。",
      "zhHint": "回鸡蛋沿锅边淋酱油",
      "stateNote": {
        "visual": "Sauce hits the pan and steams up instantly; grains take on an even light brown tint with no pale patches",
        "visualZh": "酱油入锅瞬间腾起白汽；米粒均匀染上浅褐色，无浅色斑块",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "The smell changes from raw soy to a toasty, slightly sweet aroma",
        "signalZh": "气味由生酱油味转为焦香微甜"
      },
      "tip": "Pouring sauce down the side of the pan is the whole secret of wok hei at home.",
      "tipZh": "沿锅边淋酱油正是家庭灶做出镬气的全部秘诀。"
    },
    {
      "text": "Turn off the heat, add the scallion greens and sesame oil, and toss twice. Serve immediately.",
      "textZh": "关火，加入葱绿和香油，翻拌两下立刻出锅上桌。",
      "zhHint": "关火拌葱绿香油",
      "stateNote": {
        "visual": "Rice is glossy, separate and evenly coloured; greens are bright and wilted only slightly from residual heat",
        "visualZh": "米饭油亮分明、色泽均匀；葱绿鲜亮，仅被余温烫得略微塌软",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "A spoonful holds its shape on the plate instead of slumping in a wet heap",
        "signalZh": "盛一勺放在盘中能保持形状，而不是塌成湿糊一堆"
      },
      "tip": "Sesame oil goes in off the heat — its aroma is volatile and burns away in seconds over high heat.",
      "tipZh": "香油要关火后加——它的香气挥发极快，大火几秒就没了。"
    }
  ],
  "tips": [
    "Cook brown rice with a splash of oil in the water so the grains stay separate after chilling.",
    "Add a spoonful of chopped kimchi with the vegetables for a spicy, sour edge.",
    "Freeze portions of cooked brown rice flat in bags — it thaws in the pan far better than it reheats."
  ],
  "tipsZh": [
    "煮糙米时在水里加几滴油，冷藏后米粒更容易分开。",
    "炒蔬菜时加一勺泡菜碎，能有酸辣的层次。",
    "熟糙米分装压平冷冻——下锅解冻比重新加热效果好得多。"
  ],
  "relatedSlugs": [
    "yangzhou-fried-rice",
    "egg-fried-rice",
    "shrimp-fried-rice"
  ],
  "image": "/images/recipes/yangzhou-fried-rice.webp"
};
