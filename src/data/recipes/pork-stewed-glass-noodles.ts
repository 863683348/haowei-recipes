import type { Recipe } from "@/lib/types";

/** Pork Belly Stew with Glass Noodles (Zhu Rou Dun Fen Tiao) (猪肉炖粉条) — Day batch */
export const pork_stewed_glass_noodles: Recipe = {
  "id": "zhu-rou-dun-fen-tiao",
  "slug": "pork-stewed-glass-noodles",
  "titleEn": "Pork Belly Stew with Glass Noodles (Zhu Rou Dun Fen Tiao)",
  "titleZh": "猪肉炖粉条",
  "pinyin": "zhū ròu dùn fěn tiáo",
  "cuisine": "东北菜",
  "cuisineEn": "Northeast Chinese",
  "region": "Heilongjiang",
  "regionZh": "黑龙江",
  "difficulty": "easy",
  "timeMin": 70,
  "servings": 4,
  "version": "family",
  "versionNote": "The family version uses one pot and a modest amount of pork belly, with napa cabbage added at the end for sweetness. The rural Northeast original is much richer: a big cast-iron pot, more fat, and the noodles cooked until they have absorbed nearly all the broth.",
  "versionNoteZh": "家庭版一锅到底，五花肉用量适中，最后加大白菜增甜。东北农村原版更豪放：大铁锅、油更足，粉条要炖到几乎把汤收干。",
  "tags": [
    "one-pot",
    "pork",
    "stew",
    "comfort-food",
    "winter"
  ],
  "dietary": [
    "none"
  ],
  "story": "This is the dish my father-in-law in Harbin served when minus twenty kept everyone indoors. The noodles were always the first thing to vanish — they soak up the pork fat and turn slippery and savoury, and no one ever waited for a second spoonful to be polite.",
  "storyZh": "哈尔滨的岳父总在零下二十度、全家困在屋里时做这道菜。粉条永远第一个被抢光——它吸饱了肉的油脂，滑溜又入味，没人会为了客套等第二勺。",
  "ingredients": [
    {
      "id": "zr-01",
      "nameEn": "pork belly",
      "nameZh": "五花肉",
      "amountMetric": "500 g",
      "amountUS": "1.1 lb",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-belly",
      "note": "Skin-on, cut into 1 cm thick slices about 4 cm long."
    },
    {
      "id": "zr-02",
      "nameEn": "dried sweet potato glass noodles",
      "nameZh": "红薯粉条（干）",
      "amountMetric": "150 g",
      "amountUS": "5 oz",
      "category": "staple",
      "pantry": "asian",
      "termKey": "vermicelli",
      "note": "Thick sweet potato noodles hold up to long simmering; thin mung bean vermicelli will disintegrate."
    },
    {
      "id": "zr-03",
      "nameEn": "napa cabbage",
      "nameZh": "大白菜",
      "amountMetric": "300 g",
      "amountUS": "3 cups torn",
      "category": "produce",
      "pantry": "local",
      "termKey": "napa-cabbage"
    },
    {
      "id": "zr-04",
      "nameEn": "dried shiitake mushrooms",
      "nameZh": "干香菇",
      "amountMetric": "20 g",
      "amountUS": "4-5 caps",
      "category": "produce",
      "pantry": "asian",
      "termKey": "dried-shiitake"
    },
    {
      "id": "zr-05",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "amountMetric": "20 g",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "zr-06",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "amountMetric": "20 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "zr-07",
      "nameEn": "star anise",
      "nameZh": "八角",
      "amountMetric": "2 g",
      "amountUS": "2 pods",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "zr-08",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "zr-09",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce",
      "note": "For colour only; add a little at a time."
    },
    {
      "id": "zr-10",
      "nameEn": "rock sugar",
      "nameZh": "冰糖",
      "amountMetric": "10 g",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rock-sugar"
    },
    {
      "id": "zr-11",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "amountMetric": "15 g",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Soak glass noodles in warm water for 20 minutes until pliable but still firm at the core. Soak dried shiitake in hot water for 30 minutes and reserve the soaking liquid.",
      "textZh": "粉条用温水泡20分钟至可弯曲但中心仍硬。干香菇用热水泡30分钟，泡菇水留用。",
      "zhHint": "粉条温水泡20分钟，菇水留用",
      "stateNote": {
        "visual": "Noodles are flexible but snap rather than bend flat; mushrooms are fully plump",
        "visualZh": "粉条柔软但折时仍有脆感，香菇完全泡发饱满",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "Noodle centre still shows a faint opaque white core when broken"
      },
      "tip": "Do not soak the noodles fully soft — they finish cooking in the stew."
    },
    {
      "text": "Place pork belly in a cold pot with enough water to cover. Bring to a boil, skim the grey foam, drain and rinse the slices.",
      "textZh": "五花肉冷水下锅，水量没过肉。大火煮沸撇去灰色浮沫，捞出冲洗干净。",
      "zhHint": "冷水焯肉去腥沫",
      "stateNote": {
        "visual": "Water turns cloudy grey with foam on top; meat surface looks clean and pale",
        "visualZh": "水色浑浊发灰、浮沫满锅；肉块表面洁净发白",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "No more grey foam rises when the boil is steady"
      }
    },
    {
      "text": "Heat a little oil in a heavy pot over medium heat. Add pork belly and render for 5 minutes, stirring, until the edges curl and turn golden.",
      "textZh": "厚底锅放少许油中火，下五花肉煸炒5分钟至边缘卷曲、呈金黄色。",
      "zhHint": "中火煸出油脂",
      "stateNote": {
        "visual": "Slices shrink, edges curl and turn golden; clear rendered fat pools in the pot",
        "visualZh": "肉片收缩、边缘卷曲泛金黄，锅底析出清亮油脂",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "Pork sizzles in its own fat and smells nutty, not raw"
      }
    },
    {
      "text": "Add ginger, garlic and star anise, stir 30 seconds, then add both soy sauces and rock sugar. Pour in the mushroom soaking liquid plus water to cover by 2 cm and bring to a boil.",
      "textZh": "下姜蒜八角炒30秒，加入生抽、老抽和冰糖。倒入泡菇水并补清水至没过食材2厘米，大火烧开。",
      "zhHint": "加双酱油和冰糖上色",
      "stateNote": {
        "visual": "Liquid turns a glossy reddish-brown and sugar grains dissolve completely",
        "visualZh": "汤汁转为油亮红褐，冰糖完全溶化",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "high",
        "signal": "No sugar crystals remain on the spoon; aroma is sweet-savoury"
      }
    },
    {
      "text": "Lower to a bare simmer, cover, and cook 35 minutes until the pork belly yields easily to a chopstick. Add shiitake halfway through.",
      "textZh": "转小火加盖炖35分钟，至五花肉用筷子可轻松扎透。中途加入香菇。",
      "zhHint": "小火焖炖35分钟",
      "stateNote": {
        "visual": "Pork looks translucent and jiggly; fat layer has softened to a gel",
        "visualZh": "五花肉呈半透明、轻晃会颤，脂肪层软化为胶状",
        "timeRef": "35 minutes",
        "timeRefZh": "35 分钟",
        "heat": "low",
        "signal": "A chopstick pierces the skin and flesh with no resistance"
      }
    },
    {
      "text": "Add soaked noodles and napa cabbage. Simmer uncovered 12 minutes until the noodles are translucent and have drunk most of the broth. Scatter scallion and serve in the pot.",
      "textZh": "下泡好的粉条和大白菜，不加盖小火炖12分钟，至粉条变透明、吸饱大部分汤汁。撒葱花，连锅上桌。",
      "zhHint": "下粉条白菜再炖12分钟",
      "stateNote": {
        "visual": "Noodles turn from milky white to translucent amber; broth reduces to a thick coating",
        "visualZh": "粉条由乳白转为透亮琥珀色，汤汁收浓成挂汁",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "heat": "medium-low",
        "signal": "Noodle is slippery and chewy with no dry white core; cabbage is silky-soft"
      },
      "tip": "If the pot dries out before the noodles are done, add hot water 100 ml at a time."
    }
  ],
  "tips": [
    "Use thick sweet potato noodles — thin vermicelli will turn to mush.",
    "Render the pork belly properly; that fat is what the noodles absorb.",
    "Add the noodles last so they season the dish without dissolving."
  ],
  "tipsZh": [
    "一定要用粗红薯粉条，细粉丝会炖成糊。",
    "五花肉要煸出油，粉条吸的就是这股油脂。",
    "粉条最后下，既入味又不会化掉。"
  ],
  "relatedSlugs": [
    "dong-bei-luan-dun",
    "potato-stewed-green-beans",
    "pork-ribs-sauerkraut-stew"
  ],
  "image": "/images/recipes/dong-bei-luan-dun.webp"
};
