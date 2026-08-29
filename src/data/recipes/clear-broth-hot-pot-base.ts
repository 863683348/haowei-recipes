import type { Recipe } from "@/lib/types";

/** Clear Broth Hot Pot Base (Jiangsu Style) (清汤火锅底料（苏南家常版）) — Seed batch */
export const clear_broth_hot_pot_base: Recipe = {
  "id": "clear-broth-hot-pot-base",
  "slug": "clear-broth-hot-pot-base",
  "titleEn": "Clear Broth Hot Pot Base (Jiangsu Style)",
  "titleZh": "清汤火锅底料（苏南家常版）",
  "pinyin": "qing tang huo guo di liao",
  "cuisine": "江浙菜",
  "cuisineEn": "Jiangsu-Zhejiang",
  "region": "Suzhou",
  "regionZh": "苏州",
  "difficulty": "easy",
  "timeMin": 35,
  "servings": 4,
  "version": "family",
  "versionNote": "Unlike Cantonese clear broths that use chicken only, Suzhou families add lean pork belly for silkiness — no MSG, no cloudiness. My uncle in Pingjiang Lu simmers it with aged Shaoxing wine and white pepper to lift the umami.",
  "versionNoteZh": "区别于粤式纯鸡清汤，苏州家常版加瘦五花肉提滑润感——不加味精、不浑浊。平江路的舅舅用陈年绍兴酒与白胡椒提鲜。",
  "tags": [
    "30-min",
    "light",
    "healthy"
  ],
  "dietary": [
    "none"
  ],
  "story": "My mother made this every Lunar New Year Eve in her Suzhou courtyard — she’d strain it through three layers of cheesecloth so the broth gleamed like pale jade. We served it with hand-peeled shrimp and tofu skin from Tongli’s morning market.",
  "storyZh": "妈妈每年除夕夜都在苏州小院做这汤，用三层纱布过滤，汤色如青玉透亮。配同里早市手剥虾和豆腐皮涮食。",
  "ingredients": [
    {
      "id": "cb-01",
      "nameEn": "Chicken bones (backs + necks)",
      "nameZh": "鸡架（含颈骨）",
      "pinyin": "ji jia",
      "amountMetric": "500 g",
      "amountUS": "1 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Substitute whole chicken carcass or 2 bone-in chicken thighs",
      "noteZh": "可用整鸡骨架或带骨鸡腿2只替代"
    },
    {
      "id": "cb-02",
      "nameEn": "Lean pork belly, cut into 2 cm cubes",
      "nameZh": "瘦五花肉（切2厘米方块）",
      "pinyin": "shou wu hua rou",
      "amountMetric": "200 g",
      "amountUS": "3/4 cup cubed",
      "category": "protein",
      "pantry": "local",
      "note": "Choose meat with thin fat marbling — avoid fatty cuts",
      "noteZh": "选瘦中带细纹脂肪者，忌肥厚五花"
    },
    {
      "id": "cb-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shao xing jiu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use cooking-grade Shaoxing; dry sherry is acceptable substitute",
      "noteZh": "可用料酒级绍兴酒；干雪利酒可替代",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "cb-04",
      "nameEn": "White pepper powder",
      "nameZh": "白胡椒粉",
      "pinyin": "bai hu jiao fen",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Grind whole white peppercorns fresh if possible — pre-ground loses potency",
      "noteZh": "推荐现磨白胡椒粒，预磨粉易失辛香",
      "termKey": "white-pepper"
    },
    {
      "id": "cb-05",
      "nameEn": "Scallions, white parts only, smashed",
      "nameZh": "小葱（只取葱白，拍松）",
      "pinyin": "xiao cong",
      "amountMetric": "60 g",
      "amountUS": "4 scallions",
      "category": "produce",
      "pantry": "local",
      "note": "Green tops reserved for garnish — do not add during simmering",
      "noteZh": "葱绿部分留作涮后点缀，勿入汤中久煮",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Rinse chicken bones and pork belly under cold water. Place in large pot with 2 L cold water. Bring to full boil over high heat, then immediately reduce to low.",
      "textZh": "鸡架与五花肉冷水冲洗，入大锅加2升冷水。大火烧沸后立刻转最小火。",
      "zhHint": "沸即转小火",
      "stateNote": {
        "visual": "Surface covered with grayish foam that rises rapidly",
        "visualZh": "水面迅速浮起灰白色浮沫",
        "timeRef": "3–4 minutes",
        "timeRefZh": "3–4 分钟",
        "signal": "Foam thickens and smells raw — time to skim",
        "signalZh": "浮沫增厚、气味生腥，即刻撇沫"
      }
    },
    {
      "text": "Skim all foam thoroughly with a fine-mesh ladle. Add smashed scallion whites and Shaoxing wine.",
      "textZh": "用细网漏勺彻底撇净浮沫。加入拍松葱白与绍兴酒。",
      "zhHint": "浮沫务必撇净",
      "stateNote": {
        "visual": "Broth clears visibly, turning pale amber",
        "visualZh": "汤色明显转为浅琥珀色",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Raw odor vanishes, replaced by gentle wine fragrance",
        "signalZh": "生腥气消失，代之以清雅酒香"
      }
    },
    {
      "text": "Simmer uncovered for 25 minutes, maintaining barest bubble at edge. Do not stir — let solids settle.",
      "textZh": "敞盖小火慢炖25分钟，仅边缘微滚。勿搅动，让渣滓自然沉底。",
      "zhHint": "静置慢炖不搅动",
      "stateNote": {
        "visual": "Tiny bubbles break softly at pot rim only",
        "visualZh": "仅锅沿冒细密小泡",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "low",
        "signal": "Broth surface stays still except at very edge",
        "signalZh": "汤面静止，唯锅边微动"
      }
    },
    {
      "text": "Strain broth through triple-layered cheesecloth into clean bowl. Discard solids. Stir in white pepper powder while hot.",
      "textZh": "用三层纱布过滤入碗，弃渣。趁热拌入白胡椒粉。",
      "zhHint": "趁热下胡椒粉",
      "stateNote": {
        "visual": "Broth flows cleanly, no cloudiness or particles",
        "visualZh": "汤液清澈流畅，无浑浊或杂质",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Steam rises steadily — ideal temp for pepper infusion",
        "signalZh": "热气匀稳上升，最宜胡椒溶香"
      }
    },
    {
      "text": "Let cool 10 minutes, then refrigerate uncovered until surface forms light fat layer (about 30 minutes). Skim fat before using for hot pot.",
      "textZh": "晾凉10分钟，敞口冷藏约30分钟至表面凝薄脂层。涮锅前刮净浮油。",
      "zhHint": "凝脂后刮油",
      "stateNote": {
        "visual": "Thin, opaque ivory film coats surface",
        "visualZh": "表面覆一层乳白薄脂膜",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "Film holds shape when gently touched with spoon",
        "signalZh": "汤匙轻触，脂膜成形不破"
      }
    }
  ],
  "tips": [
    "For vegetarian version, replace pork and chicken with dried shiitake stems + kombu — soak 1 hour first.",
    "This base freezes well: portion into ice cube trays, then transfer to bags.",
    "Always reheat gently — never boil clear broth after straining, or it clouds."
  ],
  "tipsZh": [
    "素版做法：以干香菇蒂+昆布替代荤料，提前泡发1小时。",
    "此汤可冷冻保存：冰格分装后转密封袋。",
    "过滤后的清汤务必文火复热，禁沸腾，否则浑浊。"
  ],
  "relatedSlugs": [
    "mala-hot-pot-base"
  ],
  "image": "/images/recipes/clear-broth-hot-pot-base.webp"
};
