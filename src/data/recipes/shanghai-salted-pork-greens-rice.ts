import type { Recipe } from "@/lib/types";

/** Shanghai Salted Pork and Greens Rice (Xianrou Caifan) (咸肉菜饭) — Day batch */
export const shanghai_salted_pork_greens_rice: Recipe = {
  "id": "xian-rou-cai-fan",
  "slug": "shanghai-salted-pork-greens-rice",
  "titleEn": "Shanghai Salted Pork and Greens Rice (Xianrou Caifan)",
  "titleZh": "咸肉菜饭",
  "pinyin": "xián ròu cài fàn",
  "cuisine": "本帮菜",
  "cuisineEn": "Shanghai",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "The family version cooks the salted pork with the raw rice so the whole pot is seasoned from within; restaurants often stir-fry cooked rice with the meat at the end, which is faster but leaves the grains white in the middle.",
  "versionNoteZh": "家庭版让咸肉和生米一起煮，整锅从里到外都有味；餐馆常用熟饭最后拌炒，速度快但米粒中心仍是白的。",
  "tags": [
    "45-min",
    "one-pot",
    "rice",
    "shanghai",
    "comfort-food"
  ],
  "dietary": [
    "none"
  ],
  "story": "Caifan is what Shanghai grandmothers make when the weather turns: salted pork from the winter, greens from the allotment, one pot. My neighbour Mrs Chen used to bring a bowl over whenever she made it, and it arrived wrapped in a towel to keep it hot, which is the most Shanghai thing imaginable.",
  "storyZh": "菜饭是上海阿娘在天转凉时做的：冬天的咸肉、地里的小青菜、一口锅。邻居陈阿婆每次做都会端一碗过来，外面还裹着毛巾保温，这是能想到的最上海的一件事。",
  "ingredients": [
    {
      "id": "xr-01",
      "nameEn": "jasmine rice",
      "nameZh": "茉莉香米",
      "pinyin": "dà mǐ",
      "amountMetric": "360 g",
      "amountUS": "1.8 cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "xr-02",
      "nameEn": "Chinese salted pork belly, diced",
      "nameZh": "咸肉（切丁）",
      "pinyin": "xián ròu",
      "amountMetric": "150 g",
      "amountUS": "5.3 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Vacuum-packed salted pork from an Asian grocer. Sub: unsmoked pancetta plus 1/4 tsp extra salt.",
      "noteZh": "亚超真空包装咸肉。替代：未烟熏的意式培根加1/4茶匙盐。"
    },
    {
      "id": "xr-03",
      "nameEn": "Shanghai bok choy or baby bok choy",
      "nameZh": "上海青／小白菜",
      "pinyin": "shàng hǎi qīng",
      "amountMetric": "350 g",
      "amountUS": "12 oz",
      "category": "produce",
      "pantry": "local",
      "termKey": "baby-bok-choy"
    },
    {
      "id": "xr-04",
      "nameEn": "carrot, diced",
      "nameZh": "胡萝卜（切丁）",
      "pinyin": "hú luó bo",
      "amountMetric": "80 g",
      "amountUS": "1/2 cup diced",
      "category": "produce",
      "pantry": "local",
      "termKey": "carrot"
    },
    {
      "id": "xr-05",
      "nameEn": "ginger, minced",
      "nameZh": "姜（切末）",
      "pinyin": "jiāng",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "xr-06",
      "nameEn": "neutral vegetable oil",
      "nameZh": "无味植物油",
      "pinyin": "zhí wù yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "xr-07",
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
      "id": "xr-08",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "xr-09",
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
      "text": "Soak the diced salted pork in warm water for 10 minutes to pull out excess salt, then drain and pat dry.",
      "textZh": "咸肉丁用温水泡10分钟去掉多余盐分，捞出沥干并擦干。",
      "zhHint": "咸肉泡水10分钟去盐",
      "stateNote": {
        "visual": "Soaking water turns faintly cloudy; pork fat goes from translucent to opaque white",
        "visualZh": "浸泡水略微发浑；肥肉由半透明转为不透明白",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Tasting a tiny piece of the fat should be seasoned, not sharply salty",
        "signalZh": "尝一小块肥肉应是适口有咸香，而不是齁咸"
      },
      "tip": "Skip this and the whole pot will be too salty to fix — salted pork varies wildly between brands.",
      "tipZh": "这步省了整锅会咸到无法补救——各品牌咸肉咸度差很多。"
    },
    {
      "text": "Rinse the rice until the water runs mostly clear, then drain thoroughly.",
      "textZh": "大米淘洗至水基本清澈，然后充分沥干。",
      "zhHint": "淘米至水清并沥干",
      "stateNote": {
        "visual": "Grains look matte and separate rather than clumped and shiny",
        "visualZh": "米粒呈哑光、颗颗分明，而不是结团发亮",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "Water poured off the top is clear enough to see the sink through",
        "signalZh": "倒出的上层水清澈到能看清水槽"
      },
      "tip": "For caifan you want slightly drier rice than usual, so give it a full 5 minutes in the sieve.",
      "tipZh": "菜饭的饭要比平时略干，所以沥水要足足5分钟。"
    },
    {
      "text": "Heat the oil in a wide pan over medium heat and fry the salted pork 4 minutes until the fat turns translucent and the edges brown. Add ginger and cook 30 seconds.",
      "textZh": "宽锅中火加油，下咸肉丁煸4分钟至肥肉透明、边缘焦黄。下姜末炒30秒。",
      "zhHint": "咸肉煸香再下姜",
      "stateNote": {
        "visual": "Fat cubes go from milky white to translucent glassy; the lean turns deep pink-brown and the pan has a clear layer of rendered fat",
        "visualZh": "肥肉丁由乳白转为玻璃般半透明；瘦肉变深粉褐色，锅中析出一层清油",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "The sizzle steadies and the smell changes from raw pork to savoury and nutty",
        "signalZh": "油爆声趋于平稳，气味由生肉味转为坚果咸香"
      },
      "tip": "That rendered salted-pork fat is the whole flavour base of the dish — do not pour it away.",
      "tipZh": "煸出的咸肉油是这道菜全部风味的基础——千万别倒掉。"
    },
    {
      "text": "Add the drained rice and carrot and stir 2 minutes over medium heat so every grain is coated in the pork fat, then transfer to the rice cooker and add water to the 1.8-cup mark minus 60 ml / 1/4 cup.",
      "textZh": "倒入沥干的米和胡萝卜丁，中火翻炒2分钟让每粒米裹上咸肉油，再移入电饭煲，加水至1.8杯刻度再减去60毫升。",
      "zhHint": "米裹油后入锅，水量略减",
      "stateNote": {
        "visual": "Grains turn glossy and slightly translucent at the edges; no dry white grains remain",
        "visualZh": "米粒变得油亮、边缘略半透明；不再有干白的米粒",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "A grain pressed between fingers feels oily, not powdery",
        "signalZh": "两指搓一粒米感觉是油的，而不是干粉感"
      },
      "tip": "Frying the rice in the fat first is what gives caifan its distinct nutty aroma.",
      "tipZh": "先把米在咸肉油里炒一遍，正是菜饭独特坚果香的来源。"
    },
    {
      "text": "Cook on the standard rice setting. Meanwhile, cut the bok choy into 2 cm / 3/4 in pieces and blanch in boiling water 45 seconds, then drain very well and squeeze out excess water.",
      "textZh": "按电饭煲标准煮饭档。同时把上海青切成2厘米的段，沸水焯45秒，充分沥干并挤去多余水分。",
      "zhHint": "青菜切段焯45秒挤干",
      "stateNote": {
        "visual": "Leaves turn bright emerald and stems become translucent; squeezed greens form a compact ball with no dripping",
        "visualZh": "叶片变成鲜亮的翠绿，菜梗半透明；挤干后的青菜成紧实一团、不再滴水",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "A stem snapped in half shows no raw white core",
        "signalZh": "折断菜梗，断面不见生的白色芯"
      },
      "tip": "Squeeze the blanched greens properly — leftover water turns the finished rice soggy and pale.",
      "tipZh": "焯好的青菜一定要挤干——残留水分会让成品发软发白。"
    },
    {
      "text": "When the rice is done, add the greens and soy sauce, white pepper and sesame oil, and fold through from the bottom. Rest 5 minutes with the lid on before serving.",
      "textZh": "饭煮好后加入青菜、生抽、白胡椒粉和香油，从锅底向上翻拌均匀，盖盖再焖5分钟即可上桌。",
      "zhHint": "青菜拌入后盖盖焖5分钟",
      "stateNote": {
        "visual": "Rice is pale beige flecked with bright green; greens stay distinct rather than collapsing into the rice",
        "visualZh": "米饭呈浅米色点缀鲜绿；青菜保持成形而非烂进饭里",
        "timeRef": "5 minutes resting",
        "timeRefZh": "焖5分钟",
        "signal": "Every spoonful has both white rice and green pieces, and none of it looks wet",
        "signalZh": "每一勺都既有白饭又有青菜，且整体不显湿"
      },
      "tip": "Fold the greens in at the very end — anything longer and they go from bright green to olive.",
      "tipZh": "青菜最后才拌——多拌一会儿就会从翠绿变成橄榄色。"
    }
  ],
  "tips": [
    "A spoonful of crispy fried shallots on top is the Shanghai way to finish this.",
    "Add a handful of diced dried tofu with the rice for a vegetarian-leaning version.",
    "Use short-grain rice if you can find it — the slightly sticky texture suits this dish better than jasmine."
  ],
  "tipsZh": [
    "最后撒一勺油葱酥，是上海吃法的收尾。",
    "跟米一起加一把香干丁，就是偏素的版本。",
    "能买到短粒米就用短粒米——略黏的口感比茉莉香米更适合这道菜。"
  ],
  "relatedSlugs": [
    "electric-rice-cooker-claypot-style-rice",
    "radish-pickle-stirred-cured-pork",
    "kimchi-fried-rice"
  ],
  "image": "/images/recipes/cheese-baked-rice.webp"
};
