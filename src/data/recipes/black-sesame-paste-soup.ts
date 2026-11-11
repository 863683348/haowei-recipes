import type { Recipe } from "@/lib/types";

/** Black Sesame Paste Soup (芝麻糊) — Day batch */
export const black_sesame_paste_soup: Recipe = {
  "id": "black-sesame-paste-soup",
  "slug": "black-sesame-paste-soup",
  "titleEn": "Black Sesame Paste Soup",
  "titleZh": "芝麻糊",
  "pinyin": "zhī má hù",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Home version toasts the sesame itself and blends it with soaked glutinous rice for body, giving a thicker, grainier, more rustic bowl; the restaurant version is silky-smooth because it starts with factory-ground sesame paste and finishes with a starch slurry.",
  "versionNoteZh": "家常版自己炒芝麻、加泡发糯米增稠，糊体更厚更带颗粒感、更朴实；餐厅版用现成芝麻酱加淀粉勾芡，所以格外顺滑。",
  "tags": [
    "35-min",
    "dessert",
    "breakfast",
    "vegetarian",
    "gluten-free",
    "make-ahead"
  ],
  "dietary": [
    "vegetarian",
    "gluten-free"
  ],
  "story": "In Guangzhou, sesame paste is what grandmothers feed you when your hair looks thin or your knees ache in damp weather - the logic being that black food feeds black. My neighbour made a double batch every Sunday and kept a thermos by the door; the test of a good batch was whether the spoon stood up in it.",
  "storyZh": "在广州，头发稀疏或回南天膝盖发酸时，奶奶辈就会端来一碗芝麻糊——黑食补黑。隔壁阿姨每周日熬双份，门口常备一个保温壶；她说好芝麻糊的标准是勺子插进去能立住。",
  "ingredients": [
    {
      "id": "bsps-01",
      "nameEn": "black sesame seeds",
      "nameZh": "黑芝麻",
      "pinyin": "hēi zhī má",
      "amountMetric": "100 g",
      "amountUS": "3/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Buy raw, not pre-toasted - you want to toast it yourself for the aroma. White sesame will work but the colour and flavour are paler",
      "noteZh": "买生的不要买熟的，自己炒才香；白芝麻也能用，但颜色和香味都偏淡",
      "termKey": "sesame-seeds"
    },
    {
      "id": "bsps-02",
      "nameEn": "glutinous rice (sticky rice), soaked 2 hours",
      "nameZh": "糯米，泡2小时",
      "pinyin": "nuò mǐ",
      "amountMetric": "25 g",
      "amountUS": "2 tbsp",
      "category": "staple",
      "pantry": "asian",
      "note": "This is the traditional thickener and it gives the paste its characteristic body; short-grain rice is an acceptable stand-in",
      "noteZh": "传统增稠用料，决定糊体的稠厚度；短粒米可替代"
    },
    {
      "id": "bsps-03",
      "nameEn": "raw peanuts, skins on",
      "nameZh": "生花生仁",
      "pinyin": "huā shēng rén",
      "amountMetric": "15 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "local",
      "note": "Optional but traditional - it rounds out the sesame with a nutty sweetness. Omit for a nut-free version",
      "noteZh": "可选但传统——增加坚果甜香；忌坚果可省略"
    },
    {
      "id": "bsps-04",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rock sugar gives a rounder sweetness than granulated; brown sugar turns the paste muddy in colour",
      "noteZh": "冰糖比白砂糖更圆润；红糖会让糊色发暗",
      "termKey": "rock-sugar"
    },
    {
      "id": "bsps-05",
      "nameEn": "water",
      "nameZh": "水",
      "pinyin": "shuǐ",
      "amountMetric": "900 ml",
      "amountUS": "3 3/4 cups",
      "category": "other",
      "pantry": "local",
      "note": "Hold back 100 ml for blending and add the rest while cooking, adjusting for the thickness you like",
      "noteZh": "留100毫升打浆用，其余煮时加，按喜好调整稠度"
    },
    {
      "id": "bsps-06",
      "nameEn": "fresh ginger, one thin slice",
      "nameZh": "鲜姜，1薄片",
      "pinyin": "jiāng piàn",
      "amountMetric": "4 g",
      "amountUS": "1 slice",
      "category": "produce",
      "pantry": "local",
      "note": "A single slice cuts the heaviness without announcing itself; fish it out before serving",
      "noteZh": "一片即可去腻提香又不抢味；盛出前捞出",
      "termKey": "ginger"
    },
    {
      "id": "bsps-07",
      "nameEn": "dried goji berries, for garnish",
      "nameZh": "枸杞，装饰用",
      "pinyin": "gǒu qǐ",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Rinse briefly and add at the end so they plump without going mushy",
      "noteZh": "快速冲洗，最后放入，泡发而不软烂"
    }
  ],
  "steps": [
    {
      "text": "Put the sesame seeds in a dry pan over medium-low heat and toast, shaking constantly, until they smell nutty and a few begin to pop. Tip them onto a cold plate immediately.",
      "textZh": "黑芝麻下干锅中小火炒，不停晃动，至出坚果香、少量开始爆响，立刻倒到冷盘上。",
      "zhHint": "芝麻小火干炒",
      "stateNote": {
        "visual": "Seeds have gone from flat grey-black to glossy and slightly swollen; a few jump in the pan",
        "visualZh": "芝麻由哑光灰黑变为油亮微鼓，锅中有零星跳起",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-low",
        "signal": "You can smell it a metre from the stove - that is the moment to pull it, not when it looks brown",
        "signalZh": "离灶一米就能闻到香味就是出锅时机——不要等颜色变深"
      },
      "tip": "Sesame goes from toasted to bitter in about 20 seconds; never leave the pan unattended.",
      "tipZh": "芝麻从香到苦只需约20秒，千万别离锅。"
    },
    {
      "text": "Toast the peanuts in the same dry pan until the skins slip off easily, then rub them between your hands to loosen the skins and discard most of them.",
      "textZh": "花生在同一干锅炒至外皮一搓即脱，双手搓揉去皮，倒掉大部分皮。",
      "zhHint": "花生同锅炒香去皮",
      "stateNote": {
        "visual": "Peanuts are pale gold with faintly blistered skins; the papery skins crack rather than cling",
        "visualZh": "花生呈浅金色，外皮微微起泡；纸状外皮开裂而非紧贴",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "Cut one in half - the inside should be cream, not raw white",
        "signalZh": "掰开一粒，内里应为米黄而非生白"
      }
    },
    {
      "text": "Blend the toasted sesame, peanuts, drained glutinous rice and 300 ml of the water on high speed for a full 2 minutes, until the mixture is completely smooth and pale grey.",
      "textZh": "炒香的黑芝麻、花生、沥干糯米加300毫升水，高速搅打2分钟，至完全细腻、呈浅灰色浆。",
      "zhHint": "高速打浆2分钟",
      "stateNote": {
        "visual": "The slurry is uniform, opaque and pale grey with no visible seed fragments when you smear it on the back of a spoon",
        "visualZh": "浆体均匀不透明，呈浅灰色，抹在勺背上看不到整粒芝麻",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Rub a drop between your fingers - it should feel like lotion, not sand",
        "signalZh": "取一滴在指腹间搓——应如乳液般滑，不应有砂感"
      },
      "tip": "A high-speed blender is worth it here; a weak one leaves grit and you will be tempted to strain, which throws away all the fibre.",
      "tipZh": "这里值得用高速破壁机；功率不够会留砂感，而过滤会把膳食纤维全部扔掉。"
    },
    {
      "text": "Strain the slurry through a fine sieve into a saucepan, pressing hard on the solids, then stir in the remaining 600 ml water and the ginger slice.",
      "textZh": "浆液过细筛滤入汤锅，用力压干渣，再加入余下600毫升水与姜片。",
      "zhHint": "过筛入锅加水",
      "stateNote": {
        "visual": "Liquid pours thin and even; what stays in the sieve is a damp grey cake with no whole seeds",
        "visualZh": "滤出的液体稀薄均匀，筛中残留为湿润灰色渣饼，无整粒芝麻",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "The last of the liquid drips rather than pours - you have extracted what there is to extract",
        "signalZh": "最后以滴落而非成流方式滤出，说明已榨干可榨的部分"
      }
    },
    {
      "text": "Bring to a gentle simmer over medium heat, stirring constantly with a whisk, and cook for 8-10 minutes until it thickens enough to coat the back of a spoon.",
      "textZh": "中火加热至微沸，用打蛋器不停搅拌，煮8-10分钟至能挂勺的稠度。",
      "zhHint": "边煮边搅防糊底",
      "stateNote": {
        "visual": "The surface goes from flat and watery to glossy and slow-moving; a drawn line across the spoon holds for two seconds",
        "visualZh": "液面由稀薄转为油亮缓慢流动；在勺背划一道，痕迹可停留两秒",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium",
        "signal": "Bubbles break thickly and lazily at the centre rather than boiling up the sides",
        "signalZh": "中心气泡浓稠缓慢破裂，而不是沿锅边翻滚沸腾"
      },
      "tip": "Never stop stirring once it heats - the starch settles in seconds and the bottom will scorch before you smell it.",
      "tipZh": "加热后绝不能停手——淀粉几秒就沉底，还没闻到焦味锅底就糊了。"
    },
    {
      "text": "Stir in the rock sugar until dissolved, fish out the ginger, and cook 1 minute more. Serve hot, scattered with goji berries.",
      "textZh": "加入冰糖搅至溶化，捞出姜片，再煮1分钟，趁热盛出，撒枸杞。",
      "zhHint": "糖化后撒枸杞",
      "stateNote": {
        "visual": "Paste is dark slate-grey and glossy; no sugar crystals catch the light on the spoon",
        "visualZh": "糊体呈深石板灰、油亮有光；勺上看不到糖粒反光",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Taste it on the back of the spoon - sweetness should arrive after the nuttiness, not before it",
        "signalZh": "用勺背尝味——坚果香应先到，甜味随后，不能反过来"
      }
    }
  ],
  "tips": [
    "Toast low and slow, and pull the pan the moment you smell it - burnt sesame cannot be rescued.",
    "It thickens a lot as it cools; cook it slightly looser than you want it and it will be right by the time you sit down.",
    "Reheat with a splash of water over low heat, whisking; it will seize into a solid block if you microwave it straight from the fridge."
  ],
  "tipsZh": [
    "小火慢炒，闻到香味立刻离锅——炒焦的芝麻救不回来。",
    "放凉后会继续变稠，所以煮时要比目标稀一点，坐下吃时刚好。",
    "回锅加少许水小火搅拌加热；从冰箱拿出来直接微波会整块凝固。"
  ],
  "relatedSlugs": [
    "northern-cornmeal-gruel",
    "red-bean-soup-hong-dou-sha",
    "sesame-tangyuan-glutinous-rice-balls"
  ],
  "image": "/images/recipes/red-bean-soup-hong-dou-sha.webp"
};
