import type { Recipe } from "@/lib/types";

/** Savoury Tofu Pudding (豆腐脑) — Day batch */
export const tofu_pudding_douhua: Recipe = {
  "id": "tofu-pudding-douhua",
  "slug": "tofu-pudding-douhua",
  "titleEn": "Savoury Tofu Pudding",
  "titleZh": "豆腐脑",
  "pinyin": "dòu fǔ nǎo",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 50,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version sets the soy milk with GDL (glucono delta-lactone), which gives a very tender, slightly fragile curd; the traditional shop version uses gypsum, which sets firmer and lets the vendor scoop it into sheets with a flat ladle without breaking it.",
  "versionNoteZh": "家常版用葡萄糖酸内酯（内酯）点浆，凝出的脑极其嫩滑但略易碎；老铺子用石膏点，凝得稍硬，能用平勺一片片完整舀起而不破。",
  "tags": [
    "50-min",
    "breakfast",
    "sichuan",
    "tofu",
    "vegetarian",
    "make-ahead"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "A Sichuan breakfast is not complete without a bowl of douhua carried out steaming, the vendor having already decided for you whether it is sweet or savoury. In Leshan they hand you a bowl of trembling white curd and a ladle of dark, peppery gravy, and the only rule is that you eat it standing at the counter, fast, before the pepper numbs you into silence.",
  "storyZh": "四川人的早点少不了一碗端出来还在冒热气的豆腐脑，甜咸早在摊主那儿就替你决定了。乐山的摊子端上一碗颤巍巍的白脑，再浇一勺深褐麻辣的卤汁；唯一的规矩是站在柜台前快吃，趁花椒还没把你麻到说不出话。",
  "ingredients": [
    {
      "id": "tpd-01",
      "nameEn": "dried yellow soybeans, soaked 8 hours",
      "nameZh": "黄豆，泡8小时",
      "pinyin": "huáng dòu",
      "amountMetric": "150 g",
      "amountUS": "3/4 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Soak overnight in plenty of water; they should triple in volume and crush easily between your fingers",
      "noteZh": "隔夜足量水浸泡，体积应为三倍、指腹一捏即碎",
      "termKey": "tofu"
    },
    {
      "id": "tpd-02",
      "nameEn": "water, for blending and cooking",
      "nameZh": "水",
      "pinyin": "shuǐ",
      "amountMetric": "1.4 L",
      "amountUS": "6 cups",
      "category": "other",
      "pantry": "local",
      "note": "Aim for a soy milk that reads about 1:9 beans to water by weight - too thin and it will not set",
      "noteZh": "豆浆浓度控制在豆水重量比约1:9——太稀凝不住"
    },
    {
      "id": "tpd-03",
      "nameEn": "glucono delta-lactone (GDL)",
      "nameZh": "葡萄糖酸内酯",
      "pinyin": "pú táo táng suān nèi zhǐ",
      "amountMetric": "3 g",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Sold as 内酯 or GDL in Asian groceries and online; it is the standard coagulant for silken tofu. Food-grade gypsum is the traditional alternative",
      "noteZh": "亚洲超市或网上标『内酯』/GDL，是内酯豆腐的标准凝固剂；传统替代为食用石膏粉",
      "termKey": "tofu"
    },
    {
      "id": "tpd-04",
      "nameEn": "dried shiitake mushrooms, soaked and sliced",
      "nameZh": "干香菇，泡发切片",
      "pinyin": "gān xiāng gū",
      "amountMetric": "2",
      "amountUS": "2 mushrooms",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Keep the soaking liquid - it is the backbone of the savoury gravy",
      "noteZh": "泡菇水留着——这是咸卤汁的底味",
      "termKey": "dried-shiitake"
    },
    {
      "id": "tpd-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "35 ml",
      "amountUS": "2 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tpd-06",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "note": "Mixed with 2 tablespoons cold water to make the slurry that thickens the gravy",
      "noteZh": "加2大勺冷水调成勾芡水，用于卤汁增稠",
      "termKey": "cornstarch"
    },
    {
      "id": "tpd-07",
      "nameEn": "chili oil, with sediment",
      "nameZh": "红油（带辣渣）",
      "pinyin": "hóng yóu",
      "amountMetric": "25 ml",
      "amountUS": "1 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use the kind with chili sediment at the bottom, not clear chili-infused oil",
      "noteZh": "要用瓶底带辣椒渣的红油，不是清亮的辣椒油",
      "termKey": "chili-oil"
    },
    {
      "id": "tpd-08",
      "nameEn": "ground Sichuan peppercorn",
      "nameZh": "花椒粉",
      "pinyin": "huā jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Toast and grind it yourself if you can; pre-ground loses its perfume in weeks",
      "noteZh": "最好现焙现磨；现成花椒粉几周就没香气了",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "tpd-09",
      "nameEn": "scallion, finely sliced",
      "nameZh": "小葱，切细",
      "pinyin": "xiǎo cōng",
      "amountMetric": "1 stalk",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "tpd-10",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Drain the soaked soybeans and blend with 600 ml fresh water in two batches, 90 seconds each, until completely smooth.",
      "textZh": "泡好的黄豆沥干，分两批各加300毫升清水，每批高速搅打90秒至完全细腻。",
      "zhHint": "豆子分两批打浆",
      "stateNote": {
        "visual": "Slurry is creamy white and completely smooth, no bean fragments visible when spread thin on a spoon",
        "visualZh": "浆液乳白细腻，抹薄在勺上看不到豆渣颗粒",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "Rub a little between your fingers - it should feel like cream, with zero grit",
        "signalZh": "取少许在指间搓——应如奶油般滑，毫无砂感"
      }
    },
    {
      "text": "Pour the slurry into a nut-milk bag or cheesecloth-lined sieve and squeeze out the soy milk into a pot. You should have about 1.2 L.",
      "textZh": "浆液倒入豆浆袋或铺纱布的筛中，用力挤出豆浆到锅里，应得约1.2升。",
      "zhHint": "滤浆挤干",
      "stateNote": {
        "visual": "Milk runs opaque and creamy-white; what remains in the bag is a pale, crumbly pulp",
        "visualZh": "滤出的豆浆不透明、乳白浓稠；袋中残留为浅色松散豆渣",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "When you squeeze hard, only a few drops come out - the pulp is spent",
        "signalZh": "用力挤也只能滴出几滴——说明豆渣已榨干"
      },
      "tip": "Do not skip the straining; bean pulp in the milk makes the curd grainy instead of silky.",
      "tipZh": "别省过滤这步；豆浆里带渣会让凝出的脑发粗而非嫩滑。"
    },
    {
      "text": "Bring the soy milk to a full rolling boil over medium heat, stirring often, then lower the heat and simmer 3 minutes to cook out the raw bean flavour. Skim off the foam.",
      "textZh": "豆浆中火加热至完全沸腾，勤搅拌，转小火再煮3分钟去生豆味，撇去浮沫。",
      "zhHint": "豆浆必须煮沸",
      "stateNote": {
        "visual": "Milk rises in a thick white foam and then settles; the surface is calm and glossy once cooked",
        "visualZh": "豆浆涌起厚白泡沫后回落，煮透后液面平静油亮",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium",
        "signal": "It no longer smells grassy or beany - it smells like warm milk",
        "signalZh": "闻不到青草味和生豆味，只有温热的奶香"
      },
      "tip": "Soy milk boils over in a heartbeat. Keep the lid off and never walk away.",
      "tipZh": "豆浆一眨眼就溢锅。不要盖盖，也别走开。"
    },
    {
      "text": "Dissolve the GDL in 2 tablespoons of cool water. Put the hot soy milk - it should be 85-90 C, about 2 minutes off the boil - into a bowl, pour in the GDL solution in one stream, stir twice only, skim the foam and cover. Leave it completely undisturbed for 15 minutes.",
      "textZh": "内酯用2大勺凉水化开。热豆浆（85-90℃，离沸约2分钟）倒入碗中，一次性冲入内酯水，只搅两下，撇沫加盖，静置15分钟绝不晃动。",
      "zhHint": "内酯点浆后静置",
      "stateNote": {
        "visual": "The surface dulls from glossy to matte within a minute; the milk stops moving as a liquid and holds a slight wobble",
        "visualZh": "液面一分钟内由油亮转为哑光；液体停止流动，整体开始微微颤动",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "Tilt the bowl a few degrees - the whole mass moves as one with a set wobble, like panna cotta",
        "signalZh": "把碗倾斜几度——整体如一地颤动，像意式奶冻"
      },
      "tip": "Do not stir more than twice and do not move the bowl. Any disturbance at this stage tears the curd.",
      "tipZh": "最多搅两下，碗也不要动。这个阶段任何晃动都会把脑搅碎。"
    },
    {
      "text": "Meanwhile make the gravy: bring 250 ml of the shiitake soaking liquid to a simmer with the sliced mushrooms, add the light soy sauce and cook 4 minutes, then stream in the cornstarch slurry while stirring until it thickens enough to coat a spoon.",
      "textZh": "同时做卤汁：250毫升香菇水与香菇片煮开，加生抽煮4分钟，边搅边淋入淀粉水，至能挂勺的稠度。",
      "zhHint": "香菇水做卤汁",
      "stateNote": {
        "visual": "Gravy turns glossy deep brown and falls from the spoon in a slow ribbon rather than a thin dribble",
        "visualZh": "卤汁转为油亮深褐，从勺上落下呈缓慢带状而非细流",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium",
        "signal": "Drag a finger across the spoon - the line holds cleanly and does not run back together",
        "signalZh": "手指在勺背划一道——痕迹清晰不回流"
      }
    },
    {
      "text": "Scoop the pudding into bowls with a flat spoon in wide, thin sheets, ladle over the hot gravy, then finish with chili oil, sesame oil, Sichuan pepper and scallion.",
      "textZh": "用平勺把豆腐脑宽而薄地一片片舀入碗中，浇上热卤汁，最后淋红油、香油，撒花椒粉与葱花。",
      "zhHint": "平勺片薄舀出",
      "stateNote": {
        "visual": "White curd shows as broad soft sheets through dark glossy gravy; red oil pools in bright beads on the surface",
        "visualZh": "白色脑片透过油亮深褐卤汁呈现宽软片状，红油在表面聚成明亮油珠",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "The gravy should be hot enough to send up steam when it hits the curd - cold gravy makes the whole bowl taste flat",
        "signalZh": "卤汁浇上脑面应腾起热气——卤汁凉了整碗就没味"
      }
    }
  ],
  "tips": [
    "Soy milk must reach 85-90 C before the GDL goes in; too cool and it never sets, too hot and the curd turns coarse.",
    "Stir twice. Then walk away. Every extra stir is a curd you are breaking.",
    "For the sweet version, skip the gravy and spoon over warm ginger syrup instead - the setting method is identical."
  ],
  "tipsZh": [
    "豆浆必须到85-90℃再点内酯；太凉凝不住，太热凝出的脑发粗。",
    "只搅两下，然后走开。多搅一下就多碎一块脑。",
    "做甜味版就省掉卤汁，改浇温热姜糖水——点浆方法完全一样。"
  ],
  "relatedSlugs": [
    "home-style-tofu",
    "mapo-tofu",
    "tofu-soup-with-egg"
  ],
  "image": "/images/recipes/wen-si-tofu.webp"
};
