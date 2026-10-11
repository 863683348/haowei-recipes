import type { Recipe } from "@/lib/types";

/** Shiitake and Shredded Chicken Noodles (香菇鸡丝面) — Day batch */
export const shiitake_chicken_noodles: Recipe = {
  "id": "shiitake-chicken-noodles",
  "slug": "shiitake-chicken-noodles",
  "titleEn": "Shiitake and Shredded Chicken Noodles",
  "titleZh": "香菇鸡丝面",
  "pinyin": "xiāng gū jī sī miàn",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style",
  "region": "Nationwide",
  "regionZh": "全国",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version poaches the chicken directly in the mushroom broth so nothing is wasted; restaurant versions poach whole chicken breasts separately and shred them cold, giving cleaner slices but a thinner soup.",
  "versionNoteZh": "家常版把鸡胸直接放进菌汤里浸熟，一点不浪费；餐厅版另锅浸熟整块鸡胸再放凉撕丝，肉片更整齐但汤头偏薄。",
  "tags": [
    "35-min",
    "noodles",
    "chicken",
    "mushroom",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every Chinese household has a version of this bowl, usually assembled from whatever is already in the pot: a few dried shiitake soaking from the night before, half a chicken breast, the last of the greens. It is the noodle people cook when someone at home is slightly unwell, and it is the one that travels best into a Western kitchen because dried shiitake and chicken breast are available everywhere.",
  "storyZh": "中国家庭都有自己的这碗面，通常用锅里现成的东西凑出来：昨晚泡的几朵香菇、半块鸡胸、最后一点青菜。家里谁有点不舒服时煮的就是它。它也是最容易被搬进西式厨房的一碗——干香菇和鸡胸肉哪儿都买得到。",
  "ingredients": [
    {
      "id": "sc-01",
      "nameEn": "fresh wheat noodles",
      "nameZh": "鲜面条",
      "pinyin": "xiān miàn",
      "amountMetric": "280 g",
      "amountUS": "9 oz",
      "category": "staple",
      "pantry": "asian",
      "note": "Medium-width fresh noodles hold up best against the chunky mushrooms",
      "noteZh": "中等宽度鲜面最能搭配块状香菇"
    },
    {
      "id": "sc-02",
      "nameEn": "boneless skinless chicken breast",
      "nameZh": "鸡胸肉",
      "pinyin": "jī xiōng ròu",
      "amountMetric": "250 g",
      "amountUS": "8 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Poach it whole and shred after — cut-up breast dries out much faster",
      "noteZh": "整块浸熟后再撕丝——切块下锅极易变柴"
    },
    {
      "id": "sc-03",
      "nameEn": "dried shiitake mushrooms",
      "nameZh": "干香菇",
      "pinyin": "gān xiāng gū",
      "amountMetric": "20 g",
      "amountUS": "6–8 caps",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak in 400 ml warm water for 30 minutes; keep the soaking liquid as the broth base",
      "noteZh": "用400毫升温水泡发30分钟，泡菇水留作汤底",
      "termKey": "dried-shiitake"
    },
    {
      "id": "sc-04",
      "nameEn": "baby bok choy, halved lengthwise",
      "nameZh": "小白菜，纵剖对半",
      "pinyin": "xiǎo bái cài",
      "amountMetric": "200 g",
      "amountUS": "3–4 heads",
      "category": "produce",
      "pantry": "asian",
      "termKey": "baby-bok-choy"
    },
    {
      "id": "sc-05",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "鲜姜，切片",
      "pinyin": "jiāng piàn",
      "amountMetric": "10 g",
      "amountUS": "3 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sc-06",
      "nameEn": "scallion, sliced, white and green separated",
      "nameZh": "小葱，切段，葱白葱绿分开",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "2–3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sc-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "25 ml",
      "amountUS": "1½ tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sc-08",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "sc-09",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Soak the dried shiitake in 400 ml (1¾ cups) warm water for 30 minutes. Lift them out, slice them, and keep the soaking water.",
      "textZh": "干香菇用400毫升温水泡发30分钟，捞出切片，泡菇水留用。",
      "zhHint": "泡菇留水",
      "stateNote": {
        "visual": "Caps are fully soft and pliable with no hard centre; the water is deep brown",
        "visualZh": "菇盖完全柔软无硬心，泡菇水呈深褐色",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "low",
        "signal": "A cap squeezes flat and springs back, and the stem tears like tender meat",
        "signalZh": "菇盖能压扁回弹，菇柄如嫩肉般可撕开"
      }
    },
    {
      "text": "Pour the soaking water into a pot, leaving the grit behind, and add 400 ml more water, the ginger and scallion whites. Bring to a bare simmer.",
      "textZh": "泡菇水去底沉沙后入锅，再加400毫升水、姜片与葱白，煮至将沸未沸。",
      "zhHint": "去沙建汤底",
      "stateNote": {
        "visual": "Liquid is clear amber; tiny bubbles cling to the sides without breaking the surface",
        "visualZh": "汤色清亮琥珀，细小气泡附在锅壁而不破面",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "The surface trembles slightly — what Chinese cooks call 'shrimp-eye' bubbles have not yet formed",
        "signalZh": "水面微微颤动——尚未出现俗称的『蟹眼』小泡"
      }
    },
    {
      "text": "Slide in the whole chicken breast. Keep the liquid below a simmer and poach for 12 minutes, then turn off the heat and let it sit 5 minutes covered.",
      "textZh": "放入整块鸡胸，保持汤汁不沸腾浸煮12分钟，关火加盖再焖5分钟。",
      "zhHint": "低温浸熟",
      "stateNote": {
        "visual": "The breast has turned opaque white throughout and the broth stays clear, not cloudy",
        "visualZh": "鸡胸通体转为不透明白，汤汁保持清亮不浑",
        "timeRef": "17 minutes",
        "timeRefZh": "17 分钟",
        "heat": "low",
        "signal": "A probe or skewer slides in with no resistance and the juices run clear",
        "signalZh": "竹签插入毫无阻力，流出汁水澄清"
      }
    },
    {
      "text": "Lift the chicken out and shred it along the grain into thick strands. Return the shreds to the broth with the sliced shiitake and soy sauce, and simmer 5 minutes.",
      "textZh": "取出鸡胸顺纹撕成粗丝，与香菇片、生抽一同回锅，小火煮5分钟。",
      "zhHint": "撕丝回锅",
      "stateNote": {
        "visual": "Chicken strands look juicy and slightly ragged; broth has darkened to a clear brown",
        "visualZh": "鸡丝水润带毛边，汤色转清亮褐色",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium-low",
        "signal": "A strand pulls apart with your fingers without crumbling",
        "signalZh": "手指轻撕即开而不散碎"
      }
    },
    {
      "text": "Cook the noodles in a separate pot of boiling water until just tender. Add the bok choy for the last 60 seconds.",
      "textZh": "另锅宽水煮面至刚熟，最后60秒下小白菜。",
      "zhHint": "面菜单煮",
      "stateNote": {
        "visual": "Bok choy stems are translucent jade and the leaves have collapsed to a deep green",
        "visualZh": "菜梗转半透明青玉色，菜叶塌软呈深绿",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "high",
        "signal": "A stem bends without snapping",
        "signalZh": "菜梗可弯折而不断裂"
      }
    },
    {
      "text": "Divide the noodles between bowls, arrange the bok choy on top, ladle over the boiling broth and chicken. Finish with white pepper, sesame oil and scallion greens.",
      "textZh": "面条分装碗中，摆上小白菜，浇入滚烫汤汁与鸡丝，最后撒白胡椒、淋香油与葱绿。",
      "zhHint": "摆菜浇汤",
      "stateNote": {
        "visual": "Clear brown broth, pale chicken shreds, dark shiitake slices and bright green bok choy",
        "visualZh": "清亮褐汤、浅色鸡丝、深色香菇片与鲜绿小白菜",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "The sesame oil floats as a few distinct golden beads on the surface",
        "signalZh": "香油在汤面浮成几颗分明金色油珠"
      }
    }
  ],
  "tips": [
    "Never boil the chicken. Poaching below a simmer is the whole difference between silky shreds and dry string.",
    "The shiitake soaking water is the broth — pour it off gently and leave the last gritty spoonful behind.",
    "Shred chicken with your fingers, not a knife; torn edges hold sauce the way cut edges do not."
  ],
  "tipsZh": [
    "鸡胸绝对不能煮。低温浸熟才是有丝滑鸡丝还是干柴鸡丝的分水岭。",
    "泡香菇的水就是汤底——轻轻倒出，最后带沙的一勺留着不要。",
    "鸡丝用手撕不要用刀切；撕裂的毛边比刀切面更能挂住汤汁。"
  ],
  "relatedSlugs": [
    "shiitake-mushroom-chicken-stew",
    "chicken-broth-noodle-soup"
  ],
  "image": "/images/recipes/chicken-broth-noodle-soup.webp"
};
