import type { Recipe } from "@/lib/types";

/** Northeastern Mixed Stew (东北乱炖) — Seed batch */
export const dong_bei_luan_dun: Recipe = {
  "id": "dong-bei-luan-dun",
  "slug": "dong-bei-luan-dun",
  "titleEn": "Northeastern Mixed Stew",
  "titleZh": "东北乱炖",
  "pinyin": "dōng běi luàn dùn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Liaoning",
  "regionZh": "辽宁",
  "difficulty": "easy",
  "timeMin": 40,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses simple cuts and one-pot timing — no pre-boiling beans or soaking. It’s rustic, hearty, and forgiving, just like Grandma Li’s stove-side pot in Shenyang.",
  "versionNoteZh": "家庭版无需提前焯豆角或泡干豆，一刀切、一锅炖，粗犷实在，就像沈阳李奶奶灶台边那口咕嘟冒泡的铁锅。",
  "tags": [
    "one-pot",
    "vegetable-forward",
    "comfort"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Every winter holiday in Shenyang, my grandma Li would fill a black iron pot with whatever was left in the root cellar — dried tofu, frozen peas, last-of-the-season eggplant. She called it ‘luàn dùn’ because ‘nothing needs to be perfect — just honest and warm.’",
  "storyZh": "每年沈阳过冬节，李奶奶总爱用黑铁锅把地窖里剩下的东西全倒进去——冻豆腐、速冻豌豆、最后一茬茄子。她管这叫‘乱炖’，因为‘不用讲究，只要实在、暖和就行’。",
  "ingredients": [
    {
      "id": "tofu-01",
      "nameEn": "firm dried tofu (pressed & sliced)",
      "nameZh": "干豆腐（千张）",
      "pinyin": "gān dòu fu",
      "amountMetric": "200 g",
      "amountUS": "7 oz (about 8 thin sheets)",
      "category": "protein",
      "pantry": "asian",
      "note": "Substitute: extra-firm regular tofu, pressed 15 min",
      "noteZh": "替代：特硬豆腐，压重物15分钟去水"
    },
    {
      "id": "eggplant-02",
      "nameEn": "Chinese eggplant",
      "nameZh": "长茄",
      "pinyin": "cháng qié",
      "amountMetric": "300 g",
      "amountUS": "1 large eggplant (~10.5 oz)",
      "category": "produce",
      "pantry": "local",
      "note": "Salt slices lightly and rest 10 min to remove bitterness",
      "noteZh": "切片后轻撒盐，静置10分钟去涩味"
    },
    {
      "id": "green-bean-03",
      "nameEn": "green beans",
      "nameZh": "四季豆",
      "pinyin": "sì jì dòu",
      "amountMetric": "250 g",
      "amountUS": "1.5 cups, trimmed & cut into 3 cm pieces",
      "category": "produce",
      "pantry": "local",
      "note": "Must be fully cooked — boil 2 min first if using very thick beans",
      "noteZh": "必须彻底熟透——若豆角极粗，建议先沸水焯2分钟"
    },
    {
      "id": "corn-04",
      "nameEn": "fresh or frozen corn kernels",
      "nameZh": "玉米粒",
      "pinyin": "yù mǐ lì",
      "amountMetric": "150 g",
      "amountUS": "1 cup",
      "category": "produce",
      "pantry": "local",
      "note": "Frozen works perfectly — no thawing needed",
      "noteZh": "冷冻玉米粒可直接使用，无需解冻"
    },
    {
      "id": "soy-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "garlic-06",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "12 g",
      "amountUS": "3 cloves, minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    }
  ],
  "steps": [
    {
      "text": "Heat 1 tbsp neutral oil in a heavy-bottomed pot over medium heat. Sauté minced garlic until fragrant and pale gold — about 45 seconds. Do not brown.",
      "textZh": "厚底锅中倒入1汤匙中性油，中火加热。蒜末下锅炒至微香、浅金黄色（约45秒），切勿焦黄。",
      "zhHint": "爆香蒜末，定风味基底",
      "stateNote": {
        "visual": "Garlic pieces turn translucent with faint golden edges",
        "visualZh": "蒜末变半透明，边缘微泛金黄",
        "timeRef": "45 seconds",
        "timeRefZh": "45秒",
        "heat": "medium",
        "signal": "Aroma lifts clearly — sharp rawness fades to sweet warmth",
        "signalZh": "蒜香明显上升，生辣味褪去，转为甜暖香气"
      }
    },
    {
      "text": "Add green beans and stir-fry 2 minutes until bright green and slightly blistered. Add eggplant and continue stir-frying 3 more minutes until eggplant softens slightly and darkens.",
      "textZh": "下四季豆，中大火快炒2分钟至碧绿微起皱。再下长茄，续炒3分钟至茄肉微软、颜色略深。",
      "zhHint": "分次下料，控水保香",
      "stateNote": {
        "visual": "Eggplant edges darken to deep purple-gray; beans glisten",
        "visualZh": "茄子边缘转为深紫灰色；豆角泛油光",
        "timeRef": "5 minutes total",
        "timeRefZh": "共5分钟",
        "heat": "medium-high",
        "signal": "Eggplant releases moisture visibly — surface looks damp, not dry",
        "signalZh": "茄子明显出水——表面湿润而非干瘪"
      }
    },
    {
      "text": "Add dried tofu, corn, and 300 ml hot water. Bring to a gentle boil, then reduce heat to low, cover, and simmer 15 minutes.",
      "textZh": "加入干豆腐、玉米粒和300毫升热水，烧开后转最小火，盖盖焖煮15分钟。",
      "zhHint": "加水后盖盖，促软烂入味",
      "stateNote": {
        "visual": "Liquid simmers with slow, occasional bubbles; tofu absorbs broth",
        "visualZh": "汤汁缓慢冒泡；干豆腐逐渐吸饱汤汁",
        "timeRef": "15 minutes",
        "timeRefZh": "15分钟",
        "heat": "low",
        "signal": "Tofu puffs slightly and turns ivory-yellow",
        "signalZh": "干豆腐微微鼓起，呈乳白色"
      }
    },
    {
      "text": "Uncover and increase heat to medium. Stir in light soy sauce and simmer 5 more minutes until liquid reduces to a light glaze clinging to vegetables.",
      "textZh": "开盖，中火转大，加入生抽，再煮5分钟至汤汁收成薄亮芡，均匀裹在食材上。",
      "zhHint": "最后收汁，提鲜增亮",
      "stateNote": {
        "visual": "Broth thickens to syrupy consistency; coats back of spoon",
        "visualZh": "汤汁变浓稠如糖浆；能挂住勺背",
        "timeRef": "5 minutes",
        "timeRefZh": "5分钟",
        "heat": "medium",
        "signal": "Bubbles become slower and larger; surface shimmers",
        "signalZh": "气泡变慢变大；汤面泛亮光"
      }
    },
    {
      "text": "Taste and adjust with a pinch of white pepper (optional). Serve hot, directly from the pot — no garnish needed, just authenticity.",
      "textZh": "尝味，按需撒少许白胡椒粉提香。趁热连锅端上桌——无需点缀，本真即美。",
      "zhHint": "白胡椒点睛，不抢主味",
      "stateNote": {
        "visual": "Steam rises in continuous, soft plumes",
        "visualZh": "热气持续、柔和地升腾",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "heat": "high",
        "signal": "Surface of stew glistens without pooling liquid",
        "signalZh": "炖菜表面油亮，无积水"
      }
    }
  ],
  "tips": [
    "This stew tastes best when made with seasonal produce — try sweet potatoes instead of corn in autumn",
    "Dried tofu adds chew and umami; don’t skip it",
    "If using frozen green beans, add them 2 minutes later to avoid mushiness"
  ],
  "tipsZh": [
    "应季而食风味最佳——秋日可用红薯块代替玉米",
    "干豆腐提供嚼劲与天然鲜味，不可省略",
    "若用冷冻豆角，延后2分钟下锅，防软烂"
  ],
  "relatedSlugs": [
    "da-pan-ji"
  ],
  "image": "/images/recipes/dong-bei-luan-dun.webp"
};
