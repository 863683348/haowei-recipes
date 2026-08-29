import type { Recipe } from "@/lib/types";

/** Kung Pao Shrimp (宫保虾球) — Seed batch */
export const kung_pao_shrimp: Recipe = {
  "id": "kung-pao-shrimp",
  "slug": "kung-pao-shrimp",
  "titleEn": "Kung Pao Shrimp",
  "titleZh": "宫保虾球",
  "pinyin": "gōng bǎo xiā qiú",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 28,
  "servings": 2,
  "version": "family",
  "versionNote": "This is the Chengdu home version: less sugar, more toasted Sichuan peppercorn aroma, and shrimp cooked just until opaque—never rubbery. No peanuts are deep-fried separately; they’re lightly toasted with dried chilies for deeper nuttiness.",
  "versionNoteZh": "这是成都家常版：糖量更少，花椒香气更突出，虾仁仅熟至断生不老。花生不单独油炸，而是与干辣椒同焙，香气更醇厚。",
  "tags": [
    "30-min",
    "weeknight",
    "protein"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt Li in Qingyang District used to make this every Friday after school—she’d let me toast the peanuts in her wok while she pounded Sichuan peppercorns in a stone mortar. The smell of chili and warm peanut oil still reminds me of her tiny balcony overlooking Jinjiang River.",
  "storyZh": "我青羊区的李阿姨每周五放学后都会做这道菜——她让我在她的铁锅里焙花生，自己则用石臼舂四川花椒。辣椒与温热花生油的香气，至今仍让我想起她临锦江的小阳台。",
  "ingredients": [
    {
      "id": "sh-01",
      "nameEn": "large shrimp, peeled and deveined",
      "nameZh": "大虾仁（去壳去线）",
      "pinyin": "dà xiā rén",
      "amountMetric": "250 g",
      "amountUS": "1 ¾ cup (raw, medium-large)",
      "category": "protein",
      "pantry": "local",
      "note": "Use fresh or thawed frozen; pat dry before marinating",
      "noteZh": "选用新鲜或解冻虾仁；腌制前务必吸干水分"
    },
    {
      "id": "sh-02",
      "nameEn": "roasted unsalted peanuts",
      "nameZh": "原味烤花生仁",
      "pinyin": "yuán wèi kǎo huā shēng rén",
      "amountMetric": "40 g",
      "amountUS": "¼ cup",
      "category": "staple",
      "pantry": "local",
      "note": "Substitute raw peanuts toasted in dry pan for 4 minutes",
      "noteZh": "可用生花生在无油锅中焙香4分钟替代"
    },
    {
      "id": "sh-03",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "8 g",
      "amountUS": "12–15 whole",
      "category": "spice",
      "pantry": "asian",
      "note": "Remove seeds for milder heat; substitute crushed red pepper flakes (use ½ tsp less)",
      "noteZh": "去籽可减辣；可用红椒碎替代（用量减½ tsp）"
    },
    {
      "id": "sh-04",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "3 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "sh-05",
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
      "id": "sh-06",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "sh-07",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sh-08",
      "nameEn": "cornstarch",
      "nameZh": "玉米淀粉",
      "pinyin": "yù mǐ diàn fěn",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Marinate shrimp: In a bowl, combine shrimp, 1 tsp light soy sauce (5 ml), 1 tsp Shaoxing wine (5 ml), and 1 tsp cornstarch (5 g). Mix gently and set aside 10 minutes.",
      "textZh": "腌虾：虾仁加1 tsp生抽、1 tsp绍兴酒、1 tsp玉米淀粉，轻拌匀，静置10分钟。",
      "zhHint": "轻拌，勿挤水",
      "stateNote": {
        "visual": "Shrimp turn slightly glossy and plump",
        "visualZh": "虾仁略泛光泽、微微饱满",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No liquid pooling at bottom",
        "signalZh": "碗底无渗出水"
      }
    },
    {
      "text": "Toast Sichuan peppercorns and dried chilies in a cold wok over medium-low heat until fragrant and lightly browned (about 2 minutes). Remove and crush coarsely with a mortar or knife.",
      "textZh": "冷锅下花椒与干辣椒，中小火焙至微香微褐（约2分钟），取出粗略压碎。",
      "zhHint": "全程小火防焦",
      "stateNote": {
        "visual": "Peppercorns swell slightly; chilies darken at tips",
        "visualZh": "花椒微胀，辣椒尖端颜色变深",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "Aromatic, nutty scent rises — no smoke",
        "signalZh": "散发坚果香气，无烟"
      }
    },
    {
      "text": "Heat 15 ml (1 tbsp) neutral oil in wok over medium-high heat until shimmering. Add marinated shrimp in single layer; stir-fry 1 minute until pink and curled but still tender.",
      "textZh": "锅烧热，加15 ml油至微冒纹路，虾仁单层入锅，大火快炒1分钟至粉红卷曲但未老。",
      "zhHint": "分次炒防出水",
      "stateNote": {
        "visual": "Shrimp turn opaque pink with faint curl",
        "visualZh": "虾仁转为不透明粉红色，微卷",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-high",
        "signal": "Edges begin to sear, not steam",
        "signalZh": "边缘微焦，不冒水汽"
      }
    },
    {
      "text": "Push shrimp to side. Add 1 tsp minced ginger and 1 tsp minced garlic to center; stir 15 seconds until fragrant. Then add crushed chili-peppercorn mix and stir 20 seconds.",
      "textZh": "将虾拨至锅边，中心下姜末、蒜末各1 tsp，煸15秒至香；再下椒麻碎，煸20秒。",
      "zhHint": "先爆香辛料，再合炒",
      "stateNote": {
        "visual": "Ginger-garlic sizzle and release golden flecks",
        "visualZh": "姜蒜爆出金黄色小点",
        "timeRef": "15–20 seconds",
        "timeRefZh": "15–20 秒",
        "heat": "medium-high",
        "signal": "Aroma intensifies sharply",
        "signalZh": "香气骤然浓郁"
      }
    },
    {
      "text": "Return shrimp to center. Add remaining light soy sauce (10 ml), black vinegar (10 ml), Shaoxing wine (5 ml), and 1 tsp sugar (5 g). Toss 30 seconds. Fold in peanuts. Serve immediately.",
      "textZh": "虾回锅中心，淋入余下生抽、陈醋、绍兴酒及糖，翻炒30秒；最后拌入花生，即刻出锅。",
      "zhHint": "动作要快，锁住脆感",
      "stateNote": {
        "visual": "Sauce coats shrimp evenly with glossy sheen",
        "visualZh": "酱汁均匀裹附虾仁，泛亮泽",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "Sauce thickens slightly and clings",
        "signalZh": "酱汁微稠，能挂勺"
      }
    }
  ],
  "tips": [
    "Use room-temperature shrimp — cold ones steam instead of sear.",
    "Toast peanuts *after* crushing chilies to avoid burning.",
    "Double the chili-peppercorn mix and store in jar for future kung pao dishes."
  ],
  "tipsZh": [
    "虾仁需回温至室温，冷藏虾易出水难上色。",
    "花生应在辣椒花椒碎之后再焙，避免焦糊。",
    "椒麻碎可加倍制作，密封罐装，随取随用。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/kung-pao-shrimp.webp"
};
