import type { Recipe } from "@/lib/types";

/** Squirrel Fish (松鼠鱼) — Seed batch */
export const squirrel_fish: Recipe = {
  "id": "song-shu-yu",
  "slug": "squirrel-fish",
  "titleEn": "Squirrel Fish",
  "titleZh": "松鼠鱼",
  "pinyin": "sōng shǔ yú",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Suzhou",
  "regionZh": "苏州",
  "difficulty": "hard",
  "timeMin": 65,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses whole mandarin fish (or tilapia) and hand-cut diamond scoring—no deep-frying at 200°C like restaurants; instead, two-stage pan-fry + shallow fry for control and safety.",
  "versionNoteZh": "家常版用整条鳜鱼（或罗非鱼），手工剞刀，不追求餐厅级200°C深炸，改用两段式煎炸（先定型后浸炸），更安全可控。",
  "tags": [
    "impressive",
    "weekend",
    "special-occasion"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Suzhou taught me this when I was twelve—she’d hum Suzhou opera while scoring the fish, saying, 'The cuts must breathe like willow leaves, not snap like dry twigs.' We served it at every Spring Festival dinner, always with extra sweet-and-sour sauce for dipping.",
  "storyZh": "我十二岁时，苏州的姑妈教我这道菜——她一边给鱼剞花刀，一边哼着苏州评弹，说：‘刀口要像柳叶般柔韧，不能似枯枝般脆断。’每年春节家宴必上，总多调一碗糖醋汁供大家蘸食。",
  "ingredients": [
    {
      "id": "sf-01",
      "nameEn": "mandarin fish (or skin-on tilapia fillet, 400 g total)",
      "nameZh": "鳜鱼（或带皮罗非鱼排，共400克）",
      "pinyin": "guì yú",
      "amountMetric": "400 g",
      "amountUS": "14 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Ask fishmonger to scale, gut, and remove head/tail; keep skin on. Tilapia is acceptable substitute if mandarin fish unavailable.",
      "noteZh": "请鱼贩去鳞、去内脏、去头尾；务必保留鱼皮。若无鳜鱼，可用罗非鱼替代。"
    },
    {
      "id": "sf-02",
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
      "id": "sf-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sf-04",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "60 g",
      "amountUS": "1/2 cup",
      "category": "staple",
      "pantry": "local",
      "note": "Must be fine, unbleached cornstarch—not potato or tapioca starch.",
      "noteZh": "须用细粒无漂白玉米淀粉，不可用土豆或木薯淀粉。"
    },
    {
      "id": "sf-05",
      "nameEn": "Chinese black vinegar",
      "nameZh": "镇江香醋",
      "pinyin": "zhèn jiāng xiāng cù",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "sf-06",
      "nameEn": "granulated sugar",
      "nameZh": "白砂糖",
      "pinyin": "bái shā táng",
      "amountMetric": "60 g",
      "amountUS": "1/4 cup",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Score the fish: With a sharp chef’s knife, make deep diagonal cuts (45°) 1 cm apart across the flesh side, then rotate 90° and cut again to form diamond-shaped pockets—cut down to but not through the skin. Flip and repeat lightly on skin side only to loosen.",
      "textZh": "剞刀：用锋利厨刀，在鱼肉面以45°角斜切，刀距1厘米；再旋转90°切第二遍，形成菱形刀口（深至鱼皮但不切断）。翻面后仅在鱼皮面轻划几刀助卷曲。",
      "zhHint": "菱形花刀，深至皮不破",
      "stateNote": {
        "visual": "Fish surface shows clean, even diamond patterns; skin remains intact.",
        "visualZh": "鱼身呈现整齐菱形纹路，鱼皮完好无破损。",
        "timeRef": "8–10 minutes",
        "timeRefZh": "8–10 分钟",
        "signal": "Knife glides smoothly without tearing flesh.",
        "signalZh": "刀刃顺滑切入，不拉扯鱼肉。"
      }
    },
    {
      "text": "Marinate 10 minutes: Rub fish evenly with light soy sauce, Shaoxing wine, and 1 tsp salt. Pat dry thoroughly with paper towels—critical for crispness.",
      "textZh": "腌制10分钟：均匀抹上生抽、绍酒和1茶匙盐。务必用厨房纸彻底吸干表面水分——这是酥脆的关键。",
      "zhHint": "擦干水分，一步不能省",
      "stateNote": {
        "visual": "Surface appears matte, no glistening moisture.",
        "visualZh": "鱼身呈哑光状，无水光反光。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Paper towel comes away clean, no damp residue.",
        "signalZh": "厨房纸取下时洁净，无湿痕残留。"
      }
    },
    {
      "text": "Coat and rest: Dredge fish generously in cornstarch, pressing gently into cuts. Let rest 5 minutes so starch adheres and seals cuts.",
      "textZh": "裹粉静置：将鱼全身均匀裹满玉米淀粉，轻轻按压使粉嵌入刀缝。静置5分钟，让淀粉回潮定型。",
      "zhHint": "粉要进刀缝，静置才定型",
      "stateNote": {
        "visual": "Fish looks uniformly pale white, no bare patches.",
        "visualZh": "鱼身呈均匀淡白色，无漏粉处。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Starch feels slightly tacky, not powdery.",
        "signalZh": "淀粉微黏手，不呈干粉状。"
      }
    },
    {
      "text": "Pan-fry skin-side down over medium heat in 3 tbsp neutral oil (e.g., canola) until golden and crisp (5–6 min). Carefully flip and shallow-fry flesh side in same oil until puffed and caramelized at edges (4–5 min). Drain upright on wire rack.",
      "textZh": "煎制：中火，3汤匙中性油（如菜籽油），鱼皮朝下煎5–6分钟至金黄酥脆；小心翻面，同油浅炸鱼肉面4–5分钟，至刀口蓬起、边缘微焦糖化。沥油时竖立放置于晾架上。",
      "zhHint": "先煎皮，再浅炸肉面",
      "stateNote": {
        "visual": "Flesh lifts into distinct 'pinecone' peaks; edges shimmer with amber gloss.",
        "visualZh": "鱼肉刀口自然翘起如松果状；边缘泛琥珀色油亮光泽。",
        "timeRef": "9–11 minutes",
        "timeRefZh": "9–11 分钟",
        "heat": "medium",
        "signal": "Oil bubbles steadily around fish; no violent splatter.",
        "signalZh": "油面围绕鱼身持续冒小泡，无剧烈爆溅。"
      }
    },
    {
      "text": "Make sauce: In a clean wok, combine vinegar, sugar, 60 ml water, 1 tsp salt, and 1 tsp light soy sauce. Bring to boil, then simmer 2 min until syrupy. Stir in 1 tsp cornstarch slurry (1 tsp cornstarch + 1 tbsp water); cook 30 sec until glossy and coats spoon.",
      "textZh": "熬汁：净锅中放入香醋、白糖、60毫升水、1茶匙盐、1茶匙生抽，煮沸后转小火熬2分钟至略浓稠。加入1茶匙水淀粉（1茶匙淀粉+1汤匙水），再煮30秒至汁液明亮、能挂勺。",
      "zhHint": "汁要熬亮，挂勺即成",
      "stateNote": {
        "visual": "Sauce coats back of spoon thickly, drips slowly in a ribbon.",
        "visualZh": "酱汁浓稠挂勺，滴落呈缓慢丝带状。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "Steam rises steadily; surface shimmers without bubbling violently.",
        "signalZh": "蒸汽匀速上升，表面微光泛动，无暴沸。"
      }
    },
    {
      "text": "Serve immediately: Pour hot sauce over warm fish. Garnish with blanched peas and shredded carrot. Serve with steamed rice.",
      "textZh": "趁热浇汁：将滚烫糖醋汁淋在温热鱼身上。撒熟豌豆与胡萝卜丝点缀。配白米饭同食。",
      "zhHint": "汁要滚烫，鱼要温热",
      "stateNote": {
        "visual": "Sauce sizzles softly on fish surface, releasing tangy-sweet aroma.",
        "visualZh": "酱汁淋上鱼身微嘶作响，散发酸甜香气。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "heat": "high",
        "signal": "Aroma becomes unmistakably bright and vinegary.",
        "signalZh": "酸香气息鲜明扑鼻。"
      }
    }
  ],
  "tips": [
    "Use a flexible fillet knife for precise scoring—stiff blades tear flesh.",
    "If tilapia is used, score deeper (5 mm) to compensate for thinner flesh.",
    "Never skip the cornstarch rest—it prevents 'unfurling' during frying."
  ],
  "tipsZh": [
    "剞刀宜用柔韧片刀，硬刀易扯裂鱼肉。",
    "若用罗非鱼，刀口需加深至5毫米以适应较薄鱼肉。",
    "玉米淀粉静置不可省略，否则炸时刀口会散开。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/squirrel-fish.webp"
};
