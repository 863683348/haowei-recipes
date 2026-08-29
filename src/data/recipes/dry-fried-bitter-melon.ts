import type { Recipe } from "@/lib/types";

/** Dry-Fried Bitter Melon (干煸苦瓜) — Seed batch */
export const dry_fried_bitter_melon: Recipe = {
  "id": "gan-bian-ku-gua",
  "slug": "dry-fried-bitter-melon",
  "titleEn": "Dry-Fried Bitter Melon",
  "titleZh": "干煸苦瓜",
  "pinyin": "gān biān kǔ guā",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips parboiling — instead, salt-and-drain to mellow bitterness while preserving crunch. Restaurants often deep-fry first for hollow crispness, but home cooks rely on wok heat control and timing.",
  "versionNoteZh": "家常版不焯水，改用盐腌脱水减苦、保脆；餐馆多先过油求空心酥脆，家庭则靠锅温与火候把控。",
  "tags": [
    "30-min",
    "vegetable-forward",
    "healthy"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My grandmother in Shanghai’s Jing’an district kept a bamboo steamer basket full of coarse sea salt beside her wok. She’d slice bitter melon thin, toss with salt, and let it weep into a bowl for exactly 12 minutes — ‘long enough to cry out bitterness, not its soul,’ she’d say.",
  "storyZh": "我上海静安的外婆总在灶台边放一只竹制盐罐，盛满粗海盐。她将苦瓜切薄片拌盐，静置12分钟——‘苦汁要流尽，但不能把魂儿流走’。",
  "ingredients": [
    {
      "id": "kg-01",
      "nameEn": "bitter melon (about 1 medium, ~300 g)",
      "nameZh": "苦瓜（约1根，300克）",
      "pinyin": "kǔ guā",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "produce",
      "pantry": "local",
      "note": "Choose firm, bright green, bumpy-skinned melons — avoid yellowing or soft spots.",
      "noteZh": "选表皮翠绿、瘤状凸起饱满、按压硬实者；避黄斑或软塌。"
    },
    {
      "id": "kg-02",
      "nameEn": "garlic (thin slivers)",
      "nameZh": "大蒜（切薄片）",
      "pinyin": "dà suàn",
      "amountMetric": "12 g",
      "amountUS": "2 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "kg-03",
      "nameEn": "scallion (white and light green parts, cut 2 cm long)",
      "nameZh": "小葱（葱白及浅绿段，切2厘米段）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "¼ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "kg-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "kg-05",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Halve bitter melon lengthwise. Scoop out seeds and white pith with a spoon. Slice crosswise into 3-mm rounds.",
      "textZh": "苦瓜纵向剖开，刮净籽与白瓤；横切成3毫米薄片。",
      "zhHint": "去瓤要彻底",
      "stateNote": {
        "visual": "Rounds are uniform, translucent green with clean edges",
        "visualZh": "切片均匀、翠绿半透、边缘整齐",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "No visible white pith clinging to slices",
        "signalZh": "切片上无残留白瓤"
      }
    },
    {
      "text": "Toss slices with 1 tsp coarse salt in a colander. Let drain over bowl 12 minutes — press gently after 6 minutes to release more liquid.",
      "textZh": "苦瓜片加1茶匙粗盐拌匀，置于漏勺中，悬于碗上沥水12分钟；6分钟后轻压挤水。",
      "zhHint": "盐腌12分钟，定时挤水",
      "stateNote": {
        "visual": "Clear, slightly viscous liquid pools in bowl",
        "visualZh": "碗底积聚清亮微黏汁液",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "low",
        "signal": "Slices shrink slightly and feel less rigid",
        "signalZh": "切片略微收缩、硬度降低"
      }
    },
    {
      "text": "Rinse under cold water, then squeeze dry in clean towel — remove every drop of moisture.",
      "textZh": "冷水冲洗后，用干净毛巾用力攥干——务必挤尽每一滴水。",
      "zhHint": "攥干是关键",
      "stateNote": {
        "visual": "Towel shows damp, not wet, dark patches",
        "visualZh": "毛巾仅显潮润暗斑，无水渍",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "No water droplets cling to melon surfaces",
        "signalZh": "苦瓜表面无挂水珠"
      }
    },
    {
      "text": "Heat wok over medium-high until shimmering. Add 1 tbsp neutral oil. Spread melon in single layer — fry undisturbed 1.5 minutes until edges curl and deepen to olive-green.",
      "textZh": "中大火烧热锅，加1汤匙油；苦瓜平铺入锅，静置1.5分钟至边缘微卷、色转橄榄绿。",
      "zhHint": "单层不叠放，静置定形",
      "stateNote": {
        "visual": "Edges lift and curl upward like tiny boats",
        "visualZh": "边缘上翘如小舟",
        "timeRef": "1.5 minutes",
        "timeRefZh": "1.5 分钟",
        "heat": "medium-high",
        "signal": "Subtle caramelized aroma begins — not burnt",
        "signalZh": "初现焦糖香，非焦糊味"
      }
    },
    {
      "text": "Stir-fry 2 minutes with garlic and scallion whites. Add light soy sauce. Cook 30 seconds more. Finish with sesame oil and scallion greens.",
      "textZh": "加入蒜片与葱白段，翻炒2分钟；淋入生抽，再炒30秒；出锅前淋芝麻油，撒葱绿段。",
      "zhHint": "后下香辛，锁鲜提香",
      "stateNote": {
        "visual": "Melons glisten with glossy, amber-tinted coating",
        "visualZh": "苦瓜裹上琥珀色透亮油光",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Oil shimmers brightly without smoking",
        "signalZh": "油光跃动但未冒烟"
      }
    }
  ],
  "tips": [
    "Don’t skip the salt-and-drain step — it removes 70% of bitterness without losing texture.",
    "Use a carbon-steel or cast-iron wok: nonstick won’t generate the needed sear.",
    "For milder flavor, substitute half the bitter melon with zucchini — same prep, same technique."
  ],
  "tipsZh": [
    "盐腌步骤不可省——能去除70%苦味却不损脆感。",
    "务必用熟铁锅或铸铁锅：不粘锅无法形成理想焦边。",
    "口味偏淡者可用一半西葫芦替代苦瓜，处理与火候完全一致。"
  ],
  "relatedSlugs": [
    "dry-fried-pork-intestine"
  ],
  "image": "/images/recipes/dry-fried-bitter-melon.webp"
};
