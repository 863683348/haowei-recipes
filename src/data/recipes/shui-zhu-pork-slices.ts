import type { Recipe } from "@/lib/types";

/** Sichuan Shui Zhu Pork Slices (Water-Boiled Pork) (水煮肉片) — Seed batch */
export const shui_zhu_pork_slices: Recipe = {
  "id": "shui-zhu-pork-slices",
  "slug": "shui-zhu-pork-slices",
  "titleEn": "Sichuan Shui Zhu Pork Slices (Water-Boiled Pork)",
  "titleZh": "水煮肉片",
  "pinyin": "shuǐ zhǔ ròu piàn",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Neijiang",
  "regionZh": "内江",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version skips the traditional pig’s blood or offal — uses lean pork loin for consistent texture and easier sourcing in Western markets.",
  "versionNoteZh": "家常版舍弃传统猪血或内脏，改用瘦里脊肉，质地稳定且西超市易购。",
  "tags": [
    "30-min",
    "budget",
    "spicy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Neijiang’s old textile district made this every Friday — she called it ‘payday firepot’. She used pork from the neighbor’s backyard pig, sliced it with a cleaver on a bamboo cutting board, and always added a spoonful of homemade chili oil she kept in a blue-glazed jar.",
  "storyZh": "我内江老纺织厂区的祖母每周五必做这道菜，唤作‘发薪火锅’。她用邻居后院养的猪肉，竹砧板上抡大刀现切，出锅前必淋一勺蓝釉罐里自熬的辣椒油。",
  "ingredients": [
    {
      "id": "pork-01",
      "nameEn": "pork loin",
      "nameZh": "猪里脊",
      "pinyin": "zhū lǐ jǐ",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Slice against the grain, 3 mm thick — freeze 10 min first for control",
      "noteZh": "逆纹切3毫米厚片；冷冻10分钟更易掌控"
    },
    {
      "id": "pork-02",
      "nameEn": "egg white",
      "nameZh": "蛋清",
      "pinyin": "dàn qīng",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "dairy",
      "pantry": "local",
      "note": "Tenderizes and binds marinade — substitute 1 tsp cornstarch + 1 tsp water if allergic",
      "noteZh": "嫩化并锁住汁水；过敏者可用1茶匙淀粉+1茶匙水替代"
    },
    {
      "id": "pork-03",
      "nameEn": "dried chili flakes",
      "nameZh": "干辣椒碎",
      "pinyin": "gān là jiāo suì",
      "amountMetric": "8 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "note": "Use coarse-ground facing-heaven chilies — avoid fine powders which burn easily",
      "noteZh": "选粗碎朝天椒，忌细粉（易焦苦）"
    },
    {
      "id": "pork-04",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil",
      "note": "Added at end for aroma — never cook with high heat",
      "noteZh": "出锅前淋入增香——切忌高温烹炒"
    },
    {
      "id": "pork-05",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine",
      "note": "Substitute dry sherry if unavailable — do not use cooking wine with salt",
      "noteZh": "无绍兴酒可用干雪莉酒替代——禁用含盐料酒"
    }
  ],
  "steps": [
    {
      "text": "Marinate pork: Combine pork slices, egg white, 1 tsp cornstarch, 1 tbsp Shaoxing wine, and ½ tsp white pepper. Mix well and rest 12 minutes.",
      "textZh": "腌制猪肉：将肉片、蛋清、1茶匙淀粉、1汤匙绍兴酒、½茶匙白胡椒粉拌匀，静置12分钟。",
      "zhHint": "混合静置"
    },
    {
      "text": "Heat 2 tbsp oil in a wok. Add 1 tbsp doubanjiang and stir-fry over medium-low heat until oil separates and turns brick-red — about 90 seconds.",
      "textZh": "热锅下2汤匙油，加1汤匙豆瓣酱，中小火炒至油析出、呈砖红色——约90秒。",
      "zhHint": "炒出红油",
      "stateNote": {
        "visual": "Red oil pools around edges of paste",
        "visualZh": "红油在酱体边缘聚成小洼",
        "timeRef": "90 seconds",
        "timeRefZh": "90 秒",
        "heat": "medium-low",
        "signal": "Bubbles slow and deepen in color — ready to proceed",
        "signalZh": "气泡变缓、色泽加深——即可进行下一步"
      }
    },
    {
      "text": "Add 450 ml water. Bring to gentle simmer. Carefully slide in marinated pork slices — do not stir for 1 minute.",
      "textZh": "加450毫升水，烧至微沸；将腌好的肉片轻轻滑入，静置1分钟勿搅。",
      "zhHint": "滑入静置"
    },
    {
      "text": "Stir gently to separate slices. Simmer 2 minutes until pork is fully opaque and no pink remains.",
      "textZh": "轻搅散肉片，小火再煮2分钟，至全熟、无粉红血丝。",
      "zhHint": "轻搅煮熟",
      "stateNote": {
        "visual": "Pork turns uniform pale tan; juices run clear",
        "visualZh": "肉片呈均一浅褐色；渗出汁液清亮",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "Edges curl slightly — center firm but springy to touch",
        "signalZh": "边缘微卷——中心按压有弹性"
      }
    },
    {
      "text": "Turn off heat. Stir in sesame oil and reserved dried chili flakes. Top with raw scallion greens.",
      "textZh": "关火，淋入芝麻油与预留的干辣椒碎，撒上生葱绿段。",
      "zhHint": "关火淋油撒椒"
    }
  ],
  "tips": [
    "Always slice pork against the grain — it shortens muscle fibers for tenderness.",
    "Doubanjiang must be stirred constantly while frying — it burns in seconds if left unattended.",
    "For extra richness, stir in 1 tsp oyster sauce at the simmering stage — enhances umami without overpowering."
  ],
  "tipsZh": [
    "猪肉务必逆纹切——切断肌纤维，方得嫩滑。",
    "炒豆瓣酱时必须不停搅动——离手3秒即焦糊。",
    "若想更醇厚，可在微沸阶段加1茶匙蚝油——提鲜不抢味。"
  ],
  "relatedSlugs": [
    "shui-zhu-beef",
    "shui-zhu-fish"
  ],
  "image": "/images/recipes/shui-zhu-pork-slices.webp"
};
