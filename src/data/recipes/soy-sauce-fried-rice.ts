import type { Recipe } from "@/lib/types";

/** Soy Sauce Fried Rice (酱油炒饭) — Seed batch */
export const soy_sauce_fried_rice: Recipe = {
  "id": "jiangyou-chao-fan",
  "slug": "soy-sauce-fried-rice",
  "titleEn": "Soy Sauce Fried Rice",
  "titleZh": "酱油炒饭",
  "pinyin": "jiàng yóu chǎo fàn",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses cold leftover rice and minimal oil—no fancy wok hei, just deep umami from aged soy and a whisper of scallion.",
  "versionNoteZh": "家庭版用隔夜冷饭和少量油，不追求猛火镬气，靠陈年酱油与葱花提鲜。",
  "tags": [
    "30-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Yangpu would make this every Sunday after temple market—she’d toss yesterday’s jasmine rice with light soy, a splash of dark soy for color, and fried egg ribbons. She said, 'Rice must be dry enough to sing in the wok.'",
  "storyZh": "我杨浦的阿姨每逢周日逛完庙市回来就做这道菜——把昨天的茉莉香米饭拌上生抽、一点老抽上色，再加金黄蛋丝。她说：‘米饭要干到在锅里唱歌才行。’",
  "ingredients": [
    {
      "id": "sf-01",
      "nameEn": "cold cooked rice",
      "nameZh": "隔夜熟米饭",
      "pinyin": "gé yè shú mǐ fàn",
      "amountMetric": "300 g",
      "amountUS": "2 cups (loosely packed)",
      "category": "staple",
      "pantry": "local",
      "note": "Must be fully chilled and dry; refrigerated ≥8 hours",
      "noteZh": "必须彻底冷藏且干爽；冷藏≥8小时"
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
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "sf-04",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "¼ cup, finely sliced",
      "category": "produce",
      "pantry": "local",
      "note": "Use both white and green parts",
      "noteZh": "葱白葱绿都要用"
    },
    {
      "id": "sf-05",
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
      "text": "Heat a wok or large nonstick skillet over medium-high heat until a drop of water sizzles and evaporates instantly.",
      "textZh": "将炒锅或大号不粘平底锅烧至中高火，滴一滴水入锅，若立即嘶嘶蒸发即为到位。",
      "zhHint": "热锅测试",
      "stateNote": {
        "visual": "Water droplet dances and vanishes in <1 second",
        "visualZh": "水珠跳动并1秒内消失",
        "timeRef": "30 seconds",
        "timeRefZh": "30秒",
        "heat": "medium-high",
        "signal": "A faint wisp of smoke rises from the dry pan",
        "signalZh": "干锅表面泛起一丝青烟"
      }
    },
    {
      "text": "Add 10 g (2 tsp) scallion whites and stir-fry 30 seconds until fragrant but not browned.",
      "textZh": "下10克葱白（约2茶匙），快速煸炒30秒至出香但未焦黄。",
      "zhHint": "先爆葱白",
      "stateNote": {
        "visual": "Scallion whites turn translucent at edges",
        "visualZh": "葱白边缘变半透明",
        "timeRef": "30 seconds",
        "timeRefZh": "30秒",
        "heat": "medium-high",
        "signal": "Aromatic steam rises, no browning yet",
        "signalZh": "香气蒸腾，尚无焦色"
      }
    },
    {
      "text": "Add cold rice and break up clumps with a spatula. Stir-fry continuously for 2 minutes until grains separate and begin to jump in the wok.",
      "textZh": "倒入冷米饭，用锅铲压散结块，持续翻炒2分钟，直至米粒松散、在锅中轻跳。",
      "zhHint": "炒散米粒",
      "stateNote": {
        "visual": "Individual grains glisten and bounce lightly",
        "visualZh": "米粒颗颗分明、微微弹跳",
        "timeRef": "2 minutes",
        "timeRefZh": "2分钟",
        "heat": "medium-high",
        "signal": "Rice emits a dry, toasted aroma",
        "signalZh": "米饭散发干香微焙气息"
      }
    },
    {
      "text": "Drizzle light and dark soy sauces evenly over rice. Toss vigorously for 1 minute until evenly coated and slightly glossy.",
      "textZh": "将生抽与老抽均匀淋在米饭上，猛火快翻1分钟，至每粒米饭油亮均匀。",
      "zhHint": "淋酱快翻",
      "stateNote": {
        "visual": "Rice turns amber-brown and glistens uniformly",
        "visualZh": "米饭呈琥珀棕，整体油亮",
        "timeRef": "1 minute",
        "timeRefZh": "1分钟",
        "heat": "high",
        "signal": "Sauce sizzles audibly on contact",
        "signalZh": "酱汁接触锅面发出清晰滋滋声"
      }
    },
    {
      "text": "Turn off heat. Stir in remaining scallion greens and sesame oil. Serve immediately.",
      "textZh": "关火，拌入剩余葱绿与芝麻油，立刻盛盘。",
      "zhHint": "关火后淋香油",
      "stateNote": {
        "visual": "Green scallions brighten against glossy rice",
        "visualZh": "翠绿葱花映衬油亮米饭",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Fragrance intensifies without cooking further",
        "signalZh": "香气骤然浓郁，无需再加热"
      }
    }
  ],
  "tips": [
    "Use day-old jasmine or medium-grain rice—not sticky short-grain.",
    "Never add soy sauce before rice is hot; it will steam instead of coat.",
    "For richer depth, replace 1 tsp light soy with 1 tsp oyster sauce (substitution note: oyster sauce widely available in Western supermarkets)."
  ],
  "tipsZh": [
    "务必用隔夜茉莉香米或中粒米——不可用黏性过强的短粒米。",
    "酱油切勿在米饭未热时加入，否则会蒸软而非裹匀。",
    "如需更醇厚风味，可用1茶匙蚝油（替代提示：西超常见）替换1茶匙生抽。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/soy-sauce-fried-rice.webp"
};
