import type { Recipe } from "@/lib/types";

/** Frozen & Thawed Tofu for Hot Pot (Dòng Dòu Fǔ) (冻豆腐) — Seed batch */
export const frozen_tofu_hot_pot: Recipe = {
  "id": "dong-dou-fu",
  "slug": "frozen-tofu-hot-pot",
  "titleEn": "Frozen & Thawed Tofu for Hot Pot (Dòng Dòu Fǔ)",
  "titleZh": "冻豆腐",
  "pinyin": "dong dou fu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Harbin",
  "regionZh": "哈尔滨",
  "difficulty": "easy",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version freezes firm tofu *raw*, then thaws slowly in fridge—no blanching or pressing. This creates irregular, absorbent pores ideal for soaking up broth. Restaurants often deep-fry first for crispness, which we omit for authenticity and ease.",
  "versionNoteZh": "家常版用生老豆腐直接冷冻、冰箱缓化解冻——不焯水不挤压，形成天然不规则孔洞，最宜吸汤。餐馆版常先油炸增脆，我们舍弃以保本真与便捷。",
  "tags": [
    "30-min",
    "vegetarian",
    "hot-pot-sides"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "In Harbin winters, my grandmother stored blocks of tofu in the unheated balcony—temperatures dropped below -20°C, freezing them solid overnight. 'The colder it freezes, the fluffier it gets when thawed,' she’d say, crumbling the thawed cubes into our mutton soup like snow.",
  "storyZh": "哈尔滨寒冬，奶奶把豆腐块放在未供暖的阳台过夜——气温低至零下20℃，冻得透心硬。‘冻得越狠，化得越蓬松。’她总这么说，把化好的冻豆腐掰成雪片般碎块，撒进我们的羊肉汤里。",
  "ingredients": [
    {
      "id": "dd-01",
      "nameEn": "firm tofu, block (not silken or soft)",
      "nameZh": "老豆腐（非嫩豆腐或内酯豆腐）",
      "pinyin": "lao dou fu",
      "amountMetric": "300 g",
      "amountUS": "1 standard 12-oz block",
      "category": "protein",
      "pantry": "local",
      "note": "Must be water-packed firm tofu—check label for 'calcium sulfate' coagulant, not glucono delta-lactone (GDL).",
      "noteZh": "须为水浸装老豆腐；配料表含硫酸钙凝固剂，非葡萄糖酸内酯（GDL）。"
    },
    {
      "id": "dd-02",
      "nameEn": "cold water, for thawing",
      "nameZh": "冷水（用于解冻）",
      "pinyin": "leng shui",
      "amountMetric": "500 ml",
      "amountUS": "2 ¼ cups",
      "category": "other",
      "pantry": "local",
      "note": "Never thaw at room temperature—risk of bacterial growth in porous tofu.",
      "noteZh": "切勿室温解冻——冻豆腐多孔，易滋生细菌。"
    },
    {
      "id": "dd-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "sheng chou",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds umami depth without darkening color.",
      "noteZh": "提鲜不染色。",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "dd-04",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chen cu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute balsamic vinegar if unavailable—but true black vinegar gives deeper tang.",
      "noteZh": "无陈醋可用意大利黑醋替代，但风味层次稍逊。",
      "termKey": "chinese-black-vinegar"
    }
  ],
  "steps": [
    {
      "text": "Drain tofu and pat dry with paper towels. Place uncovered on a parchment-lined tray and freeze solid—minimum 8 hours, ideally overnight.",
      "textZh": "豆腐沥干，用厨房纸吸净表面水；敞口置于铺烘焙纸的托盘，冷冻至实心——至少8小时，隔夜最佳。",
      "zhHint": "敞口深冻",
      "stateNote": {
        "visual": "Surface turns opaque yellowish-white; no visible ice crystals remain on exterior.",
        "visualZh": "表面转为不透明淡黄白色；外层无可见冰晶。",
        "timeRef": "8–12 hours",
        "timeRefZh": "8–12 小时",
        "signal": "Tofu sounds hollow when tapped lightly.",
        "signalZh": "轻叩发出空响。"
      }
    },
    {
      "text": "Transfer frozen tofu to a bowl. Cover with cold water and refrigerate 4 hours—do not rush with warm water.",
      "textZh": "冻豆腐移入碗中，没顶覆冷水，冷藏解冻4小时——禁用温水加速。",
      "zhHint": "冷水缓化",
      "stateNote": {
        "visual": "Tofu swells to 1.5× original size; surface looks spongy and deeply pitted.",
        "visualZh": "豆腐膨大至原体积1.5倍；表面呈海绵状，坑洼深密。",
        "timeRef": "4 hours",
        "timeRefZh": "4 小时",
        "signal": "Water turns cloudy gray; tofu feels light and springy.",
        "signalZh": "水变灰浊；豆腐触感轻盈、富有弹性。"
      }
    },
    {
      "text": "Drain thoroughly. Gently squeeze each piece between palms to remove excess water—stop when no droplets form.",
      "textZh": "彻底沥水。双手轻握每块豆腐挤出余水——至无水滴渗出即止。",
      "zhHint": "轻挤余水",
      "stateNote": {
        "visual": "Tofu shrinks slightly; surface looks dry-matte, not glistening.",
        "visualZh": "豆腐略回缩；表面呈哑光干爽状，不反光。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No water pools in palm when held horizontally.",
        "signalZh": "水平托掌，掌心无积水。"
      }
    },
    {
      "text": "Cut into 2.5-cm cubes. In a small bowl, mix light soy sauce and black vinegar. Pour over tofu and toss gently to coat.",
      "textZh": "切成2.5厘米方块。小碗中混合生抽与陈醋，淋入豆腐中，轻拌均匀。",
      "zhHint": "酱醋轻拌",
      "stateNote": {
        "visual": "Cubes glisten with thin, even glaze; no pooling liquid remains.",
        "visualZh": "方块泛薄而均匀酱光；无酱汁积聚。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Each cube holds coating without dripping.",
        "signalZh": "每块挂汁不滴落。"
      }
    },
    {
      "text": "Let marinate 10 minutes at room temperature. Then add directly to simmering hot pot broth—cook 3–4 minutes until heated through and plump.",
      "textZh": "室温腌10分钟。直接投入滚沸火锅汤中，煮3–4分钟至热透膨润即可。",
      "zhHint": "热汤直涮",
      "stateNote": {
        "visual": "Cubes swell further, turn creamy beige, and absorb broth visibly.",
        "visualZh": "方块再度膨大，呈乳白米色，明显吸饱汤汁。",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "heat": "medium-high",
        "signal": "No raw tofu smell remains; edges soften but hold shape.",
        "signalZh": "无豆腥气；边缘柔润但仍成形。"
      }
    }
  ],
  "tips": [
    "Freeze extra tofu blocks in portioned bags—they keep 3 months frozen.",
    "Save the cloudy thaw water—it’s rich in soy proteins; add to miso or vegetable broths.",
    "For richer mouthfeel, pan-sear marinated cubes in sesame oil before adding to hot pot."
  ],
  "tipsZh": [
    "多冻几包分量豆腐，冷冻保存可达3个月。",
    "解冻后的浑浊水富含大豆蛋白，可加入味噌或素高汤提鲜。",
    "若喜丰腴口感，可将腌好豆腐块用芝麻油中小火煎至微黄再涮。"
  ],
  "relatedSlugs": [
    "hand-beaten-shrimp-paste",
    "lamb-roll-platter"
  ],
  "image": "/images/recipes/frozen-tofu-hot-pot.webp"
};
