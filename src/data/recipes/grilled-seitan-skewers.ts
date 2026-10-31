import type { Recipe } from "@/lib/types";

/** Grilled Seitan Skewers (Kǎo Miànjīn) (烤面筋) — Day batch */
export const grilled_seitan_skewers: Recipe = {
  "id": "kao-mian-jin",
  "slug": "grilled-seitan-skewers",
  "titleEn": "Grilled Seitan Skewers (Kǎo Miànjīn)",
  "titleZh": "烤面筋",
  "pinyin": "kǎo miàn jīn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shaanxi",
  "regionZh": "陕西",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses store-bought steamed seitan (miànjīn) cut into spiral rolls so the basting sauce gets trapped in the layers, rather than the street method of stretching fresh gluten around a stick, which is hard to do at home and needs a very hot charcoal fire.",
  "versionNoteZh": "家庭版用现成的蒸面筋切成螺旋卷，让刷酱能卡进层层缝隙里；街边做法是把新鲜面筋缠在签子上，家里很难操作，而且要很旺的炭火才行。",
  "tags": [
    "40-min",
    "grill",
    "vegetarian",
    "vegan",
    "skewer",
    "street-food"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "Grilled gluten is the great northern Chinese street snack that vegetarians love and nobody outside China has heard of. A Xi'an vendor once told me the trick was in the scoring — 'more cuts, more sauce' — and he was right; the difference between a good one and a bland one is almost entirely how much surface you create.",
  "storyZh": "烤面筋是中国北方极好的街头小吃，素食者都喜欢，可出了中国几乎没人知道。西安有个摊主跟我说诀窍在改刀——'划得多，蘸得多'——确实如此；好吃的和没味的差别，几乎全在你造出了多少表面积。",
  "ingredients": [
    {
      "id": "kmj-01",
      "nameEn": "seitan (steamed wheat gluten)",
      "nameZh": "面筋（蒸制）",
      "pinyin": "miàn jīn",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Sold vacuum-packed or fresh in Asian groceries, often labelled 'gluten' or 'miànjīn'. Sub: firm tofu, pressed 20 minutes, though the texture will be less chewy.",
      "noteZh": "亚超有真空装或新鲜面筋出售，常标 'gluten' 或 '面筋'。替代：老豆腐压水20分钟，但口感没那么筋道。"
    },
    {
      "id": "kmj-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "kmj-03",
      "nameEn": "doubanjiang (fermented broad bean chili paste)",
      "nameZh": "豆瓣酱",
      "pinyin": "dòu bàn jiàng",
      "amountMetric": "20 g",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "doubanjiang",
      "note": "Chop it finely before mixing, or it will clump on the skewers. Sub: 1 tbsp tomato paste + 1/2 tsp chili flakes.",
      "noteZh": "混合前要剁细，否则会在串上结块。替代：1汤匙番茄膏+½茶匙辣椒面。"
    },
    {
      "id": "kmj-04",
      "nameEn": "chili flakes",
      "nameZh": "辣椒面",
      "pinyin": "là jiāo miàn",
      "amountMetric": "8 g",
      "amountUS": "1.5 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "chili-flakes"
    },
    {
      "id": "kmj-05",
      "nameEn": "cumin powder",
      "nameZh": "孜然粉",
      "pinyin": "zī rán fěn",
      "amountMetric": "8 g",
      "amountUS": "1.5 tbsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "cumin"
    },
    {
      "id": "kmj-06",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油（芝麻油）",
      "pinyin": "xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "kmj-07",
      "nameEn": "garlic, minced",
      "nameZh": "大蒜（切末）",
      "pinyin": "dà suàn",
      "amountMetric": "15 g",
      "amountUS": "3 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "kmj-08",
      "nameEn": "neutral vegetable oil",
      "nameZh": "无味植物油",
      "pinyin": "zhí wù yóu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Blanch the seitan in boiling water for 2 minutes, then drain and press gently between towels. This removes any packaged sourness and firms the texture.",
      "textZh": "面筋入沸水焯2分钟，捞出用厨纸轻压吸干。这一步能去掉包装带来的酸味，并让质地更紧实。",
      "zhHint": "焯水去酸味再吸干",
      "stateNote": {
        "visual": "Seitan looks slightly puffed and paler; surface water has been pressed away",
        "visualZh": "面筋略微膨胀、颜色变浅；表面水分已被压干",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "Pressed gently, it feels springy and dry to the touch rather than damp",
        "signalZh": "轻压时手感干爽有弹性，而不是潮湿黏手"
      },
      "tip": "Skip this step and packaged seitan can taste faintly sour and metallic after grilling.",
      "tipZh": "省掉这步，包装面筋烤完会带一点酸涩的金属味。"
    },
    {
      "text": "Cut the seitan into strips about 2 cm / 3/4 in wide. Make shallow diagonal cuts about 3 mm deep along each strip, then roll it into a loose spiral and thread onto skewers so the cut edges face outward.",
      "textZh": "面筋切成约2厘米宽的条。每条斜划深约3毫米的浅刀口，再卷成松散的螺旋状穿到签上，让刀口朝外。",
      "zhHint": "斜划浅刀口再卷成螺旋",
      "stateNote": {
        "visual": "Spiral roll with visible grooves spiralling around it; cut faces open slightly outward",
        "visualZh": "螺旋卷上可见环绕的刀纹；刀口微微朝外张开",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "signal": "The roll holds its shape on the skewer but you can see gaps between the layers for sauce to enter",
        "signalZh": "卷在签上保持形状，但层与层之间能看到让酱汁渗入的缝隙"
      },
      "tip": "This is the whole trick: those grooves are what hold the sauce. Cut gently so you do not slice through.",
      "tipZh": "诀窍全在这里：这些刀纹就是挂酱的地方。下刀要轻，别切断。"
    },
    {
      "text": "Mix soy sauce, finely chopped doubanjiang, chili flakes, cumin, garlic and sesame oil into a thick paste. It should be spreadable, not runny.",
      "textZh": "把生抽、剁细的豆瓣酱、辣椒面、孜然粉、蒜末和香油调成浓稠酱膏。要能涂抹，而不是稀流质。",
      "zhHint": "调成能涂抹的酱膏",
      "stateNote": {
        "visual": "Deep red-brown paste that holds a soft peak; no free liquid pooling at the bottom",
        "visualZh": "深红褐色酱膏，能立起软尖；碗底无液体渗出",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "A spoon dragged through it leaves a channel that slowly fills back in",
        "signalZh": "勺子划过留下的沟痕会缓慢回填"
      }
    },
    {
      "text": "Brush the skewers with vegetable oil, then coat them generously with the spice paste, working it into the grooves. Grill or broil 10 cm / 4 in from the heat, turning every 3 minutes, for 12 minutes total.",
      "textZh": "签子刷上一层植物油，再厚厚抹上香料酱膏，把酱挤进刀纹里。置于距火约10厘米处烤，每3分钟翻面，共烤12分钟。",
      "zhHint": "厚抹酱膏，每3分钟翻面",
      "stateNote": {
        "visual": "Paste dries and darkens to a deep rust colour; edges blister and faint char spots appear",
        "visualZh": "酱膏变干并转为深铁锈色；边缘起泡，出现零星焦斑",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "medium-high",
        "signal": "Cumin smells strongly toasted; the surface crackles faintly when you turn the skewers",
        "signalZh": "孜然焙香浓郁；翻面时表面发出轻微脆响"
      },
      "tip": "Keep basting on the last two turns — the second coat is what builds the crust.",
      "tipZh": "最后两次翻面要继续补酱——第二层才是形成外壳的关键。"
    },
    {
      "text": "Brush one final thin layer of sesame oil over the skewers, rest 2 minutes, and serve hot off the skewer.",
      "textZh": "最后薄薄刷一层香油，静置2分钟，趁热从签上撸着吃。",
      "zhHint": "收尾刷香油，静置2分钟",
      "stateNote": {
        "visual": "Glossy, lacquered surface with toasted spice crust; no pale soft patches remaining",
        "visualZh": "表面油亮如涂漆，覆着焙香的外壳；无发白软塌的部位",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Biting in gives a firm, chewy resistance then yields — springy and saucy, never mushy",
        "signalZh": "咬下去先有筋道的回弹再断开——弹牙多汁，绝不软烂"
      },
      "tip": "If you cannot find seitan, thick slices of pressed firm tofu work with the same paste and about 8 minutes less cooking.",
      "tipZh": "买不到面筋的话，用压过水的老豆腐厚片配同样的酱，烤制时间少约8分钟。"
    }
  ],
  "tips": [
    "Soak wooden skewers in water for 20 minutes first or the ends will burn before the gluten is done.",
    "The spice paste keeps 5 days refrigerated and is excellent on grilled mushrooms, tofu, or potato slices.",
    "Shaanxi style uses more cumin than chili — adjust the ratio to taste, but do not skip the cumin."
  ],
  "tipsZh": [
    "竹签先用清水泡20分钟，否则面筋还没熟签子头就焦了。",
    "香料酱冷藏可存5天，刷烤蘑菇、豆腐或土豆片都很好吃。",
    "陕西做法是孜然多于辣椒——比例可随口味调整，但孜然不能省。"
  ],
  "relatedSlugs": [
    "lamb-skewers-chinese-bbq",
    "grilled-leeks",
    "grilled-enoki-mushrooms"
  ],
  "image": "/images/recipes/lamb-skewers-chinese-bbq.webp"
};
