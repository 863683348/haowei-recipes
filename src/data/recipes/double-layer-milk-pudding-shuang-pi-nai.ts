import type { Recipe } from "@/lib/types";

/** Double-Layer Milk Pudding (Shuang Pi Nai) (双皮奶) — Seed batch */
export const double_layer_milk_pudding_shuang_pi_nai: Recipe = {
  "id": "shuang-pi-nai",
  "slug": "double-layer-milk-pudding-shuang-pi-nai",
  "titleEn": "Double-Layer Milk Pudding (Shuang Pi Nai)",
  "titleZh": "双皮奶",
  "pinyin": "shuāng pí nǎi",
  "cuisine": "甜品饮品",
  "cuisineEn": "Dessert & Beverage",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 55,
  "servings": 4,
  "version": "family",
  "versionNote": "True shuang pi nai requires full-fat cow’s milk heated *just* to skin-forming point — no ultra-pasteurized milk, no substitutes. The ‘double skin’ comes from cooling then reheating the same milk.",
  "versionNoteZh": "正宗双皮奶必须用全脂鲜牛奶，加热至恰能结皮——禁用超高温灭菌奶，无可替代。‘双皮’源于同一锅奶先冷凝、再回温。",
  "tags": [
    "make-ahead",
    "steamed",
    "classic"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My uncle in Shunde still uses his 1972 enamel pot to make this — he says the even heat retention is why his top skin never cracks, and he always lets the milk cool by the open window, not in the fridge, to mimic Guangdong’s humid spring air.",
  "storyZh": "我在顺德的叔叔至今用1972年产搪瓷锅制作——他说均匀蓄热让奶皮从不裂开；且坚持开窗自然冷却，而非冰箱冷藏，以复刻广东春日的湿润空气。",
  "ingredients": [
    {
      "id": "sp-01",
      "nameEn": "full-fat fresh cow's milk (not UHT or long-life)",
      "nameZh": "全脂鲜牛奶（非超高温灭菌奶）",
      "pinyin": "quán zhī xiān niú nǎi",
      "amountMetric": "500 ml",
      "amountUS": "2¼ cups",
      "category": "dairy",
      "pantry": "local",
      "note": "Must be pasteurized (not raw) but NOT ultra-pasteurized (UHT). Check label: 'Refrigerated' section, <7 days shelf life.",
      "noteZh": "须巴氏杀菌（非生奶），但绝不可是超高温灭菌奶（UHT）。看标签：冷藏柜内、保质期＜7天。"
    },
    {
      "id": "sp-02",
      "nameEn": "egg whites",
      "nameZh": "鸡蛋清",
      "pinyin": "jī dàn qīng",
      "amountMetric": "80 g",
      "amountUS": "3 large egg whites",
      "category": "protein",
      "pantry": "local",
      "note": "Room temperature preferred — cold whites trap air unevenly.",
      "noteZh": "推荐室温蛋清——低温易导致打发不均。"
    },
    {
      "id": "sp-03",
      "nameEn": "granulated cane sugar",
      "nameZh": "白砂糖",
      "pinyin": "bái shā táng",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Sugar helps stabilize the egg white foam — do not reduce below 30 g.",
      "noteZh": "糖有助稳定蛋清泡沫——不可少于30克。"
    },
    {
      "id": "sp-04",
      "nameEn": "vanilla extract (pure, optional)",
      "nameZh": "纯香草精（可选）",
      "pinyin": "chún xiāng cǎo jīng",
      "amountMetric": "1 ml",
      "amountUS": "¼ tsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Only use alcohol-based pure extract — imitation vanilla leaves a chemical aftertaste.",
      "noteZh": "仅限酒精基纯香草精——香兰素仿制品有化学余味。"
    }
  ],
  "steps": [
    {
      "text": "Pour milk into a wide, shallow saucepan. Heat over medium-low heat, stirring constantly with a wooden spoon, until tiny bubbles form around edges and steam rises steadily — do not boil.",
      "textZh": "牛奶倒入宽浅锅，中小火持续搅拌，至锅边冒细泡、蒸汽稳定上升——切勿沸腾。",
      "zhHint": "加热至微沸边缘",
      "stateNote": {
        "visual": "Surface shimmers with thin, wavy film; no large bubbles breaking",
        "visualZh": "表面泛起薄薄波纹膜，无大气泡破裂",
        "timeRef": "6–8 minutes",
        "timeRefZh": "6–8 分钟",
        "heat": "medium-low",
        "signal": "A faint caramel note emerges — stop immediately if milk smells toasted",
        "signalZh": "飘出淡淡焦糖香——若闻烤糊味即刻离火"
      }
    },
    {
      "text": "Immediately pour hot milk into four heatproof ramekins (150 ml each). Cover loosely with plastic wrap or lids. Let cool uncovered at room temperature for 45 minutes — a smooth, unbroken skin will form on top.",
      "textZh": "热奶立即分装入四个耐热小碗（各150毫升）。松盖保鲜膜或盖子，室温静置45分钟——表面凝成完整光滑奶皮。",
      "zhHint": "室温冷凝成皮",
      "stateNote": {
        "visual": "Skin is taut, glossy, and reflects light like stretched silk",
        "visualZh": "奶皮紧绷、光亮，如拉伸丝绸般反光",
        "timeRef": "45 minutes",
        "timeRefZh": "45 分钟",
        "signal": "Skin does not wrinkle or tear when gently touched with fingertip",
        "signalZh": "指尖轻触不皱不破"
      }
    },
    {
      "text": "While milk cools, whisk egg whites and sugar in a clean, dry bowl until soft peaks form — glossy, drooping tips. Add vanilla and whisk 2 more seconds.",
      "textZh": "牛奶冷却时，将蛋清与糖在洁净干碗中打发至湿性发泡——光泽明显，尖端柔软下垂。加香草精再搅2秒。",
      "zhHint": "蛋清打至湿性发泡",
      "stateNote": {
        "visual": "Foam is thick, uniform, and holds shape when bowl is tilted",
        "visualZh": "泡沫浓密均匀，倾斜碗身不流动",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "signal": "Whisk leaves visible trails that hold for 2 seconds before dissolving",
        "signalZh": "打蛋器划痕停留2秒不消失"
      }
    },
    {
      "text": "Carefully pierce each skin with a toothpick near the edge, then gently lift and pour milk back into a clean bowl — leave skin intact in ramekin. Stir warm milk gently into egg white foam until just combined (do not overmix).",
      "textZh": "用牙签沿碗边轻刺奶皮，小心掀起，将奶液倒回干净碗中——奶皮留在碗底。将温奶轻柔拌入蛋清泡沫，至刚融合即可（切勿过度搅拌）。",
      "zhHint": "奶皮留底，奶液回拌",
      "stateNote": {
        "visual": "Mixture is pale yellow, airy, and slightly ribbony — no streaks of white foam",
        "visualZh": "混合液浅黄色、蓬松带丝缕感，无白色泡沫条纹",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Foam collapses minimally — mixture flows like thick cream",
        "signalZh": "泡沫轻微塌陷，质地如浓奶油般流动"
      }
    },
    {
      "text": "Slowly pour milk-egg mixture back over the intact skin in each ramekin. Cover and steam over simmering water for 12 minutes — lid must be tilted to prevent condensation drip.",
      "textZh": "将奶蛋液缓缓倒回各碗，覆于原奶皮之上。盖盖，隔水蒸12分钟——盖子需斜扣防冷凝水滴落。",
      "zhHint": "蒸时斜盖防滴水",
      "stateNote": {
        "visual": "Surface is matte, faintly dimpled, with no liquid pooling",
        "visualZh": "表面哑光、微凹，无液体积聚",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "medium-low",
        "signal": "Center jiggles slightly like firm tofu when nudged",
        "signalZh": "轻碰中心如嫩豆腐般微颤"
      }
    }
  ],
  "tips": [
    "If skin breaks during pouring, gently press fragments back — they’ll fuse during steaming.",
    "Steaming time varies by ramekin depth: use 120–150 ml capacity for reliable results.",
    "Serve chilled or at room temperature — never hot, as heat dulls the delicate milk fragrance."
  ],
  "tipsZh": [
    "若倒奶时奶皮破裂，可轻压碎片使其复位——蒸制时会自然愈合。",
    "蒸制时间依碗深而异：建议使用120–150毫升容量小碗以保成功率。",
    "宜冷藏或室温食用——切忌趁热吃，高温会掩盖牛奶清雅香气。"
  ],
  "relatedSlugs": [
    "red-bean-soup-hong-dou-sha",
    "mango-pomelo-yang-zhi-gan-lu"
  ],
  "image": "/images/recipes/double-layer-milk-pudding-shuang-pi-nai.webp"
};
