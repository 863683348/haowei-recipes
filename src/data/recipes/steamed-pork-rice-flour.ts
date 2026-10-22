import type { Recipe } from "@/lib/types";

/** Steamed Pork with Rice Flour | Sichuan Fen Zheng Rou (粉蒸肉) — Day batch */
export const steamed_pork_rice_flour: Recipe = {
  "id": "steamed-pork-rice-flour",
  "slug": "steamed-pork-rice-flour",
  "titleEn": "Steamed Pork with Rice Flour | Sichuan Fen Zheng Rou",
  "titleZh": "粉蒸肉",
  "pinyin": "fěn zhēng ròu",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Sichuan",
  "regionZh": "四川",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version uses store-bought steamed-meat rice flour and a sweet potato base; traditional versions toast and coarsely grind the rice with star anise at home.",
  "versionNoteZh": "家庭版用现成蒸肉米粉、红薯垫底；传统做法是把米加八角炒香后现舂粗粉。",
  "tags": [
    "sichuan",
    "steamed",
    "pork-belly",
    "banquet",
    "make-ahead"
  ],
  "dietary": [
    "none"
  ],
  "story": "Fen zheng rou is the dish Sichuan families make for New Year and for harvest tables. The rice flour is not a coating but a sponge: it drinks the rendered pork fat and turns into something between a dumpling skin and a risotto grain. Sweet potato at the bottom caramelizes in the dripping fat and is everyone's favourite part.",
  "storyZh": "粉蒸肉是川人过年和收谷时节的大菜。米粉不是裹粉而是海绵——吸饱猪油后介于面皮和烩饭之间。垫底的红薯在油汁里糖化，是全盘最抢手的部分。",
  "ingredients": [
    {
      "id": "fr-01",
      "nameEn": "pork belly, sliced 5 mm thick",
      "nameZh": "五花肉片（5 毫米厚）",
      "amountMetric": "600 g",
      "amountUS": "1.3 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly"
    },
    {
      "id": "fr-02",
      "nameEn": "steamed-meat rice flour",
      "nameZh": "蒸肉米粉",
      "amountMetric": "150 g",
      "amountUS": "1 cup",
      "category": "asian-pantry",
      "pantry": "asian"
    },
    {
      "id": "fr-03",
      "nameEn": "sweet potato, cut into chunks",
      "nameZh": "红薯块",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "fr-04",
      "nameEn": "doubanjiang",
      "nameZh": "豆瓣酱",
      "amountMetric": "1.5 tbsp",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang"
    },
    {
      "id": "fr-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "fr-06",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "fr-07",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "2 tbsp",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "fr-08",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    },
    {
      "id": "fr-09",
      "nameEn": "ginger",
      "nameZh": "姜",
      "amountMetric": "15 g",
      "amountUS": "1 knob",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "fr-10",
      "nameEn": "scallion",
      "nameZh": "葱",
      "amountMetric": "2 stalks",
      "amountUS": "2 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Mix the pork slices with doubanjiang, both soy sauces, Shaoxing wine, five-spice, ginger and scallion. Marinate 30 minutes.",
      "textZh": "五花肉片加豆瓣酱、两种酱油、料酒、五香粉、姜、葱拌匀，腌 30 分钟。",
      "stateNote": {
        "visual": "The meat darkens to a dull red-brown and the marinade is absorbed, leaving a tacky surface.",
        "visualZh": "肉色转为暗红棕，腌汁被吸收、表面发黏。",
        "signal": "No liquid pools in the bottom of the bowl",
        "signalZh": "碗底无积液",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Add the rice flour a little at a time with 3-4 tbsp water, tossing until every slice is coated in a damp, sandy layer.",
      "textZh": "分次加入蒸肉米粉和 3-4 汤匙清水，抓拌至每片都裹上湿润的沙状粉层。",
      "stateNote": {
        "visual": "The flour looks damp and clings; dry white patches mean more water is needed.",
        "visualZh": "米粉湿润附着；若还有白色干粉斑说明水不够。",
        "signal": "Squeezing a slice leaves flour stuck to your fingers, not falling off",
        "signalZh": "捏一下肉片，米粉粘手不掉",
        "timeRef": "3 minutes",
        "timeRefZh": "约 3 分钟",
        "heat": "low"
      },
      "tip": "Too dry and the flour stays raw; too wet and it turns to paste. Aim for damp sand."
    },
    {
      "text": "Bed the sweet potato chunks in a deep bowl, then lay the coated pork slices over them in slightly overlapping rows.",
      "textZh": "深碗底部铺红薯块，再把裹好粉的肉片略微叠压码在上方。",
      "stateNote": {
        "visual": "The bowl is layered: orange sweet potato below, pale beige rice-flour-coated pork above, with gaps for steam.",
        "visualZh": "碗中分层：下层橙色红薯，上层浅米色裹粉肉片，留出蒸汽通道。",
        "signal": "Layers are loose, not pressed compact",
        "signalZh": "码得松，没有压实",
        "timeRef": "5 minutes",
        "timeRefZh": "约 5 分钟",
        "heat": "low"
      }
    },
    {
      "text": "Steam over high heat for 60 minutes, topping up the steamer with boiling water halfway through.",
      "textZh": "大火蒸 60 分钟，中途加一次沸水。",
      "stateNote": {
        "visual": "The rice flour has turned from pale beige to translucent amber and swollen; fat bubbles up around the edges.",
        "visualZh": "米粉由浅米色转为半透明琥珀色并膨胀，边缘冒出油泡。",
        "signal": "Flour grains are no longer chalky when pressed between chopsticks",
        "signalZh": "筷子夹开米粉不再有生粉感",
        "timeRef": "60 minutes",
        "timeRefZh": "60 分钟",
        "heat": "high"
      }
    },
    {
      "text": "Rest 5 minutes, invert onto a plate so the sweet potato sits on top, and serve.",
      "textZh": "静置 5 分钟后倒扣入盘，让红薯在上，即可上桌。",
      "stateNote": {
        "visual": "The sweet potato is glossy and collapsed at the edges; the pork slices hold their shape but wobble.",
        "visualZh": "红薯油亮、边缘塌软；肉片成形但轻颤。",
        "signal": "The bowl lifts away cleanly leaving a domed mound",
        "signalZh": "碗能干净提起，留下完整圆丘",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low"
      }
    }
  ],
  "tips": [
    "Use the coarsely ground rice flour sold for this dish; regular rice flour gives a pasty texture.",
    "Add a splash of water and re-steam leftovers — the flour firms up in the fridge.",
    "Swap sweet potato for taro or pumpkin; both work with the same timing."
  ],
  "tipsZh": [
    "要用专做粉蒸肉的粗粒米粉，普通粘米粉会发糊。",
    "隔餐回蒸时洒点水，米粉冷藏后会变硬。",
    "红薯可换芋头或南瓜，时间一样。"
  ],
  "relatedSlugs": [
    "meicai-kourou",
    "cured-meat-steamed-bundle",
    "hongshao-pork",
    "lotus-leaf-steamed-chicken"
  ],
  "image": "/images/recipes/hongshao-pork.webp"
};
