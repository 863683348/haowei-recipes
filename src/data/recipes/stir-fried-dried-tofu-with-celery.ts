import type { Recipe } from "@/lib/types";

/** Stir-Fried Dried Tofu with Celery (Qin Cai Chao Xiang Gan) (芹菜炒香干) — Seed batch */
export const stir_fried_dried_tofu_with_celery: Recipe = {
  "id": "qin-cai-chao-xiang-gan",
  "slug": "stir-fried-dried-tofu-with-celery",
  "titleEn": "Stir-Fried Dried Tofu with Celery (Qin Cai Chao Xiang Gan)",
  "titleZh": "芹菜炒香干",
  "pinyin": "qin cai chao xiang gan",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Nanjing",
  "regionZh": "南京",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips deep-frying: instead, pan-sears tofu squares until golden and chewy — no oil waste, full flavor.",
  "versionNoteZh": "家常版不油炸，改用平底锅中小火煎至豆干金黄微韧，省油且风味足。",
  "tags": [
    "25-min",
    "weeknight",
    "vegetarian"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "My grandfather in Nanjing’s Qinhuai district cooked this every Thursday — he said celery stood for ‘diligence’ and dried tofu for ‘steadiness’, two virtues he taught me while flipping squares in his wok with a worn bamboo spatula.",
  "storyZh": "我南京秦淮区的祖父每周四必做这道菜——他说芹菜象征‘勤勉’，香干代表‘稳实’，他边用竹铲翻动豆干，边教我这两样美德。",
  "ingredients": [
    {
      "id": "xg-01",
      "nameEn": "dried tofu (xiang gan)",
      "nameZh": "香干",
      "pinyin": "xiang gan",
      "amountMetric": "150 g",
      "amountUS": "1½ cups, 1.5-cm cubes",
      "category": "protein",
      "pantry": "asian",
      "note": "Look for firm, dense, beige-brown blocks with subtle fermented aroma — avoid spongy or sour-smelling ones.",
      "noteZh": "选紧实、浅褐、微带发酵香的豆干；避松软或酸馊味。"
    },
    {
      "id": "xg-02",
      "nameEn": "celery",
      "nameZh": "芹菜",
      "pinyin": "qin cai",
      "amountMetric": "120 g",
      "amountUS": "1 cup, 3-cm diagonal slices",
      "category": "produce",
      "pantry": "local",
      "note": "Use inner stalks for tenderness; leave leaves attached for fragrance.",
      "noteZh": "用内侧嫩茎，斜切；芹菜叶保留增香。"
    },
    {
      "id": "xg-03",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "sheng chou",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "xg-04",
      "nameEn": "cooking wine",
      "nameZh": "料酒",
      "pinyin": "liao jiu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "cooking-wine"
    },
    {
      "id": "xg-05",
      "nameEn": "ginger",
      "nameZh": "姜",
      "pinyin": "jiang",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp, minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    }
  ],
  "steps": [
    {
      "text": "Pat dried tofu cubes dry with paper towels. Heat 10 ml neutral oil in a nonstick skillet over medium heat until shimmering but not smoking.",
      "textZh": "豆干块用厨房纸吸干表面水；中火加热中性油10毫升至微波纹、未冒烟。",
      "zhHint": "擦干再煎，防溅油",
      "stateNote": {
        "visual": "Oil surface shimmers like heat haze over pavement.",
        "visualZh": "油面如路面热浪般微微波动。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "medium",
        "signal": "A wooden chopstick tip dipped in oil produces steady, fine bubbles.",
        "signalZh": "木筷尖插入油中，周围冒出细密均匀气泡。"
      }
    },
    {
      "text": "Arrange tofu cubes in single layer. Pan-fry undisturbed for 2 minutes per side until golden brown and slightly springy — turn carefully with tongs.",
      "textZh": "豆干单层铺开，中火煎2分钟/面至金黄微弹，用夹子小心翻面。",
      "zhHint": "单层煎，不叠压",
      "stateNote": {
        "visual": "Cubes develop rich amber edges and hold shape firmly.",
        "visualZh": "豆干边缘呈琥珀色，整体挺立不塌。",
        "timeRef": "4 minutes total",
        "timeRefZh": "共4 分钟",
        "heat": "medium",
        "signal": "Tofu releases easily from pan when gently nudged.",
        "signalZh": "轻推即滑动，不粘锅。"
      }
    },
    {
      "text": "Push tofu to one side. Add minced ginger to the empty space and stir-fry 30 seconds until fragrant — do not brown.",
      "textZh": "将豆干拨至锅边，空处下姜末，小火煸香30秒（勿焦）。",
      "zhHint": "分区域操作，保姜香",
      "stateNote": {
        "visual": "Ginger turns translucent with faint golden flecks.",
        "visualZh": "姜末变半透明，略带金点。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "medium-low",
        "signal": "Aromatic steam rises without smoke or darkening.",
        "signalZh": "升腾清香蒸汽，无烟无焦色。"
      }
    },
    {
      "text": "Add celery slices and stir-fry over high heat for 1 minute until bright green and crisp-tender.",
      "textZh": "下芹菜片，大火快炒1分钟至翠绿、断生仍脆。",
      "zhHint": "旺火快炒，锁鲜色",
      "stateNote": {
        "visual": "Celery retains vivid green color and slight resistance when bitten.",
        "visualZh": "芹菜翠绿鲜亮，咬之微脆。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Stems make a clean 'snap' sound when bent sharply.",
        "signalZh": "茎部弯曲时发出清脆‘咔’声。"
      }
    },
    {
      "text": "Return tofu to center, add light soy sauce and cooking wine. Toss 45 seconds over high heat until sauce coats evenly and evaporates slightly.",
      "textZh": "豆干回锅，淋入生抽与料酒，大火翻炒45秒至汁收匀、微亮。",
      "zhHint": "最后合炒，酱裹匀",
      "stateNote": {
        "visual": "Sauce clings as a glossy film, no pooling at bottom.",
        "visualZh": "酱汁成薄亮膜裹附，锅底无积液。",
        "timeRef": "45 seconds",
        "timeRefZh": "45 秒",
        "heat": "high",
        "signal": "A faint caramelized aroma emerges, not burnt.",
        "signalZh": "散发微焦糖香，非糊味。"
      }
    }
  ],
  "tips": [
    "For authentic Nanjing texture, choose dense, slightly chewy xiang gan — if only soft 'tofu puffs' are available, pan-fry them longer to firm up.",
    "Substitute shaoxing wine for cooking wine if preferred — use same amount.",
    "Add 1 tsp sugar if your celery is especially bitter."
  ],
  "tipsZh": [
    "南京风味重豆干韧度，选紧实耐嚼型；若只有蓬松豆泡，需延长煎制时间定型。",
    "可用等量绍兴酒替代料酒。",
    "若芹菜较苦，可加1茶匙糖中和。"
  ],
  "relatedSlugs": [
    "cold-dressed-dried-tofu"
  ],
  "image": "/images/recipes/stir-fried-dried-tofu-with-celery.webp"
};
