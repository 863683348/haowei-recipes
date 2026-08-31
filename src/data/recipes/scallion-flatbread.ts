import type { Recipe } from "@/lib/types";

/** Scallion Flatbread (葱香烧饼) (葱香烧饼) — Day batch */
export const scallion_flatbread: Recipe = {
  "id": "scallion-flatbread",
  "slug": "scallion-flatbread",
  "titleEn": "Scallion Flatbread (葱香烧饼)",
  "titleZh": "葱香烧饼",
  "pinyin": "cōng xiāng shāo bǐng",
  "cuisine": "北方家常菜",
  "cuisineEn": "Northern Chinese Home Cooking",
  "region": "Beijing (English)",
  "regionZh": "北京",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 4,
  "version": "family",
  "versionNote": "家庭快手版：葱油香浓，早餐首选",
  "versionNoteZh": "家庭快手版：葱油香浓，早餐首选",
  "tags": [
    "pastry",
    "breakfast",
    "snack",
    "quick",
    "savory"
  ],
  "dietary": [
    "none"
  ],
  "story": "The most everyday Chinese pastry — scallion flatbread appears in every neighborhood bakery from Beijing to Shanghai. My neighbor's morning ritual was two of these with soy milk. The aroma of scallion and lard is unmistakable.",
  "storyZh": "最日常的中式点心——从北京到上海，每家巷口面包房都有葱香烧饼。邻居的晨间仪式是两块配豆浆。葱油香气 unmistakable。",
  "ingredients": [
    {
      "id": "1",
      "nameEn": "All-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "250 g",
      "amountUS": "2 cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "2",
      "nameEn": "Scallions (green part only)",
      "nameZh": "小葱（绿段）",
      "amountMetric": "60 g",
      "amountUS": "½ cup chopped",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "3",
      "nameEn": "Lard or sesame oil",
      "nameZh": "猪油或香油",
      "amountMetric": "45 g",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "4",
      "nameEn": "Warm water",
      "nameZh": "温水",
      "amountMetric": "130 ml",
      "amountUS": "½ cup + 2 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "5",
      "nameEn": "Salt",
      "nameZh": "盐",
      "amountMetric": "4 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "6",
      "nameEn": "White sesame seeds",
      "nameZh": "白芝麻",
      "amountMetric": "15 g",
      "amountUS": "1½ tbsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Make dough: mix flour, salt, lard and warm water. Knead 5 minutes. Rest 15 minutes.",
      "textZh": "和面：面粉、盐、猪油、温水揉5分钟。静置15分钟。",
      "stateNote": {
        "visual": "Dough should be smooth and slightly elastic",
        "visualZh": "面团应光滑微弹",
        "signal": "面团不粘盆壁"
      }
    },
    {
      "text": "Make scallion oil: mix finely chopped scallions with hot lard (should sizzle). Add pinch of salt.",
      "textZh": "制作葱油：细切小葱与热猪油混合（应嘶嘶作响）。加少许盐。",
      "stateNote": {
        "visual": "Scallions should turn bright green and fragrant immediately",
        "visualZh": "葱应立即变翠绿并发香",
        "signal": "葱油香气扑鼻"
      }
    },
    {
      "text": "Roll dough into rectangle. Spread scallion oil evenly. Roll up tightly like log.",
      "textZh": "面团擀成长方形，均匀涂抹葱油，紧密卷起。",
      "stateNote": {
        "visual": "Roll should be tight — loose roll = flat bread not flaky",
        "visualZh": "卷要紧——松散则不酥",
        "signal": "卷紧不松散"
      }
    },
    {
      "text": "Cut into 4 pieces. Stretch each, coil into snail shape, flatten.",
      "textZh": "切4份。每份拉长，盘成蜗牛状，压扁。",
      "stateNote": {
        "visual": "Coil should be tight spiral with visible layers",
        "visualZh": "盘应紧密螺旋可见分层",
        "signal": "压扁后不回缩"
      }
    },
    {
      "text": "Brush water, press sesame. Bake at 200°C for 15-18 minutes until golden.",
      "textZh": "刷水沾芝麻。200°C烤15-18分钟至金黄。",
      "stateNote": {
        "visual": "Bottom should be deep golden brown",
        "visualZh": "底部深金黄",
        "timeRef": "约15-18分钟",
        "heat": "high",
        "signal": "敲底有空响"
      }
    }
  ],
  "tips": [
    "Use only the green parts of scallion — white parts release too much water",
    "Hot lard activates the scallion flavor instantly",
    "These are best eaten fresh — day old they're still good reheated in pan",
    "For extra crunch, add a pinch of five-spice powder to the scallion oil"
  ],
  "tipsZh": [
    "只用葱绿段——白段水分太多",
    "热猪油瞬间激活葱香",
    "现做现吃最佳——隔天的用锅烘一下也好吃",
    "葱油中加少许五香粉更香"
  ],
  "relatedSlugs": [
    "sesame-flatbread",
    "red-sugar-flatbread",
    "you-su-huoshao"
  ],
  "image": "/images/recipes/scallion-flatbread.webp"
};
