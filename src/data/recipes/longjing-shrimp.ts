import type { Recipe } from "@/lib/types";

/** Longjing Shrimp (龙井虾仁) — Seed batch */
export const longjing_shrimp: Recipe = {
  "id": "longjing-shrimp",
  "slug": "longjing-shrimp",
  "titleEn": "Longjing Shrimp",
  "titleZh": "龙井虾仁",
  "pinyin": "lóng jǐng xiā rén",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Hangzhou",
  "regionZh": "杭州",
  "difficulty": "medium",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses gentle wok-tossing and avoids overcooking—no cornstarch slurry, unlike restaurant versions that prioritize glossy sheen.",
  "versionNoteZh": "家常版讲究轻快翻炒、不勾芡，重在虾仁弹嫩与茶香清鲜；餐馆版常加淀粉水增亮，失却本味。",
  "tags": [
    "30-min",
    "weeknight",
    "spring"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Hangzhou’s West Lake district would pick fresh Longjing leaves herself each April, then steep them lightly before stir-frying with spring shrimp from Tonglu. She’d say, 'The tea isn’t for flavor—it’s for breath.'",
  "storyZh": "我杭州西湖边的姑妈每年四月亲手采明前龙井，只取嫩芽，温水初泡后即与桐庐春虾同炒。她说：‘茶不是调味，是给菜一口呼吸。’",
  "ingredients": [
    {
      "id": "shrimp-01",
      "nameEn": "large shrimp, peeled and deveined, tails removed",
      "nameZh": "大虾仁（去壳去线，去尾）",
      "pinyin": "dà xiā rén",
      "amountMetric": "250 g",
      "amountUS": "1 cup",
      "category": "protein",
      "pantry": "local",
      "note": "Use fresh or high-quality frozen; avoid pre-blanched or salted shrimp",
      "noteZh": "用鲜虾或优质冷冻虾仁；忌用已焯水或腌过盐的虾仁"
    },
    {
      "id": "tea-02",
      "nameEn": "Longjing (Dragon Well) green tea leaves, loose-leaf",
      "nameZh": "龙井绿茶（散装）",
      "pinyin": "lóng jǐng lǜ chá",
      "amountMetric": "6 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute: Japanese sencha if unavailable — avoid matcha or flavored teas",
      "noteZh": "替代：无龙井可用日本煎茶；禁用抹茶或调味茶"
    },
    {
      "id": "egg-white-03",
      "nameEn": "egg white",
      "nameZh": "蛋清",
      "pinyin": "dàn qīng",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "dairy",
      "pantry": "local",
      "note": "Helps tenderize shrimp without starch",
      "noteZh": "使虾仁滑嫩，无需淀粉"
    },
    {
      "id": "light-soy-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "8 ml",
      "amountUS": "1½ tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "shaoxing-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Rinse shrimp under cold water, pat very dry with paper towels. Mix gently with egg white and 1 tsp of the Shaoxing wine; let sit 10 minutes at room temperature.",
      "textZh": "虾仁冷水冲洗，用厨房纸彻底吸干。加入蛋清和1茶匙绍酒轻拌匀，室温静置10分钟。",
      "zhHint": "吸干+静置是嫩的关键",
      "stateNote": {
        "visual": "Shrimp look plump and slightly opaque at edges",
        "visualZh": "虾仁边缘微泛乳白，饱满有弹性",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No pooling liquid around shrimp",
        "signalZh": "虾仁周围无渗出水液"
      }
    },
    {
      "text": "Steep tea leaves in 60 ml (¼ cup) hot water (80°C / 176°F — just below boiling) for 2 minutes. Strain, reserving both tea liquid and leaves separately.",
      "textZh": "茶芽用60毫升80°C热水（勿沸）浸泡2分钟，滤出茶汤与茶叶，分开放置。",
      "zhHint": "水温决定茶香是否清幽",
      "stateNote": {
        "visual": "Tea liquor is pale jade-green, fragrant but not bitter",
        "visualZh": "茶汤呈淡青玉色，清香不涩",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "Steam rises gently, no vigorous bubbles",
        "signalZh": "水汽轻浮，无翻滚气泡"
      }
    },
    {
      "text": "Heat wok over medium-high heat until a drop of water sizzles and evaporates instantly. Add 15 ml (1 tbsp) neutral oil, swirl to coat.",
      "textZh": "旺火烧热锅，滴水入锅即爆裂蒸发；倒入15毫升无味油，旋锅润匀。",
      "zhHint": "锅要够热，油要够薄",
      "stateNote": {
        "visual": "Oil shimmers faintly, no smoke yet",
        "visualZh": "油面微漾，未见青烟",
        "timeRef": "30–45 seconds",
        "timeRefZh": "30–45 秒",
        "heat": "medium-high",
        "signal": "Water droplet dances and vanishes in <1 second",
        "signalZh": "水珠跳动并1秒内汽化"
      }
    },
    {
      "text": "Add shrimp in single layer. Stir-fry 1 minute until edges turn pink but centers remain translucent. Remove immediately to a plate.",
      "textZh": "虾仁平铺入锅，大火快炒1分钟至边缘微粉红、中心仍半透明，立刻盛出。",
      "zhHint": "宁生勿老，余热会继续熟化",
      "stateNote": {
        "visual": "Shrimp curl slightly and glow with natural sheen",
        "visualZh": "虾仁微卷，泛天然润泽光",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "First hint of pink appears at tail curve",
        "signalZh": "尾部弯曲处初现粉晕"
      }
    },
    {
      "text": "Lower heat to medium. Add reserved tea leaves and stir 20 seconds until aromatic. Return shrimp, pour in reserved tea liquid and light soy sauce. Toss 30 seconds — just until shrimp are fully opaque and coated. Serve immediately.",
      "textZh": "转中火，下茶芽煸香20秒；倒入虾仁、茶汤和生抽，快速翻匀30秒至虾仁全熟、裹汁即止。趁热上桌。",
      "zhHint": "全程不过45秒，茶香才鲜活",
      "stateNote": {
        "visual": "Tea leaves cling lightly to shrimp; no pooling liquid remains",
        "visualZh": "茶叶轻附虾身，盘底无余汁",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium",
        "signal": "Aromatic steam lifts with distinct grassy-tea scent",
        "signalZh": "升腾蒸汽带清冽草木茶香"
      }
    }
  ],
  "tips": [
    "Use only spring-harvest Longjing for authentic aroma — autumn batches lack brightness.",
    "Never rinse tea-steeped shrimp — moisture prevents proper sear.",
    "If using frozen shrimp, thaw overnight in fridge and pat *extra* dry."
  ],
  "tipsZh": [
    "务必选用明前龙井，秋茶香气沉闷，失却春鲜。",
    "泡过茶的虾仁切勿再冲洗——水汽会阻碍锅气锁鲜。",
    "若用冻虾，须冷藏解冻整夜，并务必额外吸干水分。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/longjing-shrimp.webp"
};
