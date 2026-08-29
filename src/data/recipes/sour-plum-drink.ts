import type { Recipe } from "@/lib/types";

/** Authentic Sour Plum Drink (Suan Mei Tang) (酸梅汤) — Seed batch */
export const sour_plum_drink: Recipe = {
  "id": "sour-plum-drink",
  "slug": "sour-plum-drink",
  "titleEn": "Authentic Sour Plum Drink (Suan Mei Tang)",
  "titleZh": "酸梅汤",
  "pinyin": "suān méi tāng",
  "cuisine": "汤羹凉菜",
  "cuisineEn": "Soups & Beverages",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses whole dried plums and rock sugar for gentle tartness—no artificial coloring or corn syrup, unlike commercial versions.",
  "versionNoteZh": "家常版用整颗乌梅与冰糖慢熬，酸甜柔和，不加焦糖色或玉米糖浆，区别于市售成品。",
  "tags": [
    "30-min",
    "refreshing",
    "summer"
  ],
  "dietary": [
    "vegan"
  ],
  "story": "My grandmother in Beijing’s Hutong made this every summer afternoon—she’d strain it through a bamboo sieve into a blue-glazed ceramic pitcher and serve it chilled with a single osmanthus blossom floating on top. She said the sourness ‘cleanses the heart’ during humid days.",
  "storyZh": "我北京胡同里的奶奶每到夏日午后都熬这道酸梅汤——她用竹筛细细过滤，盛进青釉瓷壶，冰镇后浮一朵桂花。她说暑气重时，酸味能‘清心’。",
  "ingredients": [
    {
      "id": "sm-01",
      "nameEn": "dried smoked plums (wu mei)",
      "nameZh": "乌梅",
      "pinyin": "wū méi",
      "amountMetric": "50 g",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for dark brown, wrinkled, smoke-cured plums—not sour plums sold for pickling.",
      "noteZh": "选深褐色、皱缩、烟熏味浓的乌梅，非腌渍用青梅。"
    },
    {
      "id": "sm-02",
      "nameEn": "dried hawthorn slices (shan zha)",
      "nameZh": "山楂片",
      "pinyin": "shān zhā piàn",
      "amountMetric": "20 g",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: 1 tsp apple cider vinegar + 1 tsp dried cranberries if unavailable.",
      "noteZh": "若无山楂片，可用苹果醋1茶匙+干蔓越莓1茶匙替代。"
    },
    {
      "id": "sm-03",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "pinyin": "bīng táng",
      "amountMetric": "80 g",
      "amountUS": "1/3 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Essential for clarity and smooth sweetness—granulated sugar clouds the broth.",
      "noteZh": "冰糖是关键，使汤色清亮、甜味醇厚；白砂糖易使汤浑浊。"
    },
    {
      "id": "sm-04",
      "nameEn": "dried osmanthus flowers",
      "nameZh": "桂花",
      "pinyin": "guì huā",
      "amountMetric": "2 g",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds floral aroma; omit if unavailable—do not substitute with orange blossom water.",
      "noteZh": "提供清雅花香；若无，可省略，勿用橙花水替代。"
    }
  ],
  "steps": [
    {
      "text": "Rinse wu mei and shan zha under cold water to remove dust. Place them in a large pot with 1.5 L (6¼ cups) cold water.",
      "textZh": "乌梅与山楂片用冷水冲洗去浮尘，放入大锅，加1.5升冷水。",
      "zhHint": "先洗再泡",
      "stateNote": {
        "visual": "Water is clear, ingredients sink gently.",
        "visualZh": "水清澈，食材缓缓沉底。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No foam or cloudiness yet.",
        "signalZh": "无泡沫或浑浊。"
      }
    },
    {
      "text": "Bring to a boil over high heat, then immediately reduce to low heat. Skim off any grayish foam that rises to the surface.",
      "textZh": "大火烧开后立刻转小火，撇去浮起的灰白色浮沫。",
      "zhHint": "见沸即调小火",
      "stateNote": {
        "visual": "Thin gray foam gathers at edges of pot.",
        "visualZh": "锅边聚起薄层灰白浮沫。",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "low",
        "signal": "Foam appears within first minute of boiling.",
        "signalZh": "沸腾后1分钟内出现浮沫。"
      }
    },
    {
      "text": "Add rock sugar and simmer uncovered for 30 minutes, stirring gently every 10 minutes.",
      "textZh": "加入冰糖，敞盖小火慢熬30分钟，每10分钟轻搅一次。",
      "zhHint": "小火慢熬，勤搅防糊",
      "stateNote": {
        "visual": "Liquid reduces slightly; plums swell and darken.",
        "visualZh": "液体微减，乌梅膨软变深。",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "low",
        "signal": "Gentle bubbles break the surface every 2–3 seconds.",
        "signalZh": "每2–3秒有小泡冒出。"
      }
    },
    {
      "text": "Turn off heat. Stir in dried osmanthus and let steep, covered, for 10 minutes.",
      "textZh": "关火，加入干桂花，加盖焖泡10分钟。",
      "zhHint": "关火焖香",
      "stateNote": {
        "visual": "Golden flecks of osmanthus float in amber liquid.",
        "visualZh": "金黄色桂花在琥珀色汤中浮沉。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Aromatic steam rises when lid is lifted.",
        "signalZh": "掀盖时升起清甜香气。"
      }
    },
    {
      "text": "Strain through a fine-mesh sieve into a heatproof pitcher. Discard solids. Chill thoroughly before serving over ice.",
      "textZh": "用细网筛过滤入耐热玻璃壶，弃渣。彻底冷藏后冰镇饮用。",
      "zhHint": "滤净渣滓，冰镇更佳",
      "stateNote": {
        "visual": "Clear, deep amber liquid with no sediment.",
        "visualZh": "汤色澄澈、呈深琥珀色，无沉淀。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Liquid flows smoothly without pulp or grit.",
        "signalZh": "滤液顺滑，无果渣或颗粒。"
      }
    }
  ],
  "tips": [
    "For best flavor, make 1 day ahead—the taste deepens overnight.",
    "Serve at 4°C (39°F); too warm loses its refreshing edge.",
    "Never reboil after adding osmanthus—it destroys the delicate fragrance."
  ],
  "tipsZh": [
    "风味最佳做法：提前一日熬好，隔夜风味更醇厚。",
    "建议冰镇至4°C（39°F）饮用，过温则失清爽感。",
    "桂花不可二次煮沸，否则会破坏其幽雅香气。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/sour-plum-drink.webp"
};
