import type { Recipe } from "@/lib/types";

/** Pearl Meatballs (Zhen Zhu Wan Zi) (珍珠丸子) — Seed batch */
export const pearl_meatballs_sticky_rice: Recipe = {
  "id": "zhen-zhu-wan-zi",
  "slug": "pearl-meatballs-sticky-rice",
  "titleEn": "Pearl Meatballs (Zhen Zhu Wan Zi)",
  "titleZh": "珍珠丸子",
  "pinyin": "zhēn zhū wán zi",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Wuhan",
  "regionZh": "武汉",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version skips MSG and uses hand-chopped pork for better texture — bouncy, not dense.",
  "versionNoteZh": "家常版不用味精，手工剁肉更弹牙，不发死。",
  "tags": [
    "45-min",
    "appetizer",
    "party"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Wuhan shaped these with her knuckles every winter solstice — she said the round balls brought ‘fullness’ to the year. She always hid a single whole green pea inside one ball for luck, and we kids raced to find it.",
  "storyZh": "我武汉外婆每逢冬至必做这道菜——她说圆球寓意‘圆满’。她总在其中一颗里藏一整颗青豆讨彩头，我们孩子抢着找。",
  "ingredients": [
    {
      "id": "ppb-01",
      "nameEn": "ground pork (20% fat)",
      "nameZh": "猪肉末（肥瘦2:8）",
      "pinyin": "zhū ròu mò",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Substitute ground chicken or turkey (add 1 tsp sesame oil for moisture).",
      "noteZh": "可用鸡末或火鸡末替代（加1茶匙香油增润）。"
    },
    {
      "id": "ppb-02",
      "nameEn": "glutinous rice",
      "nameZh": "糯米",
      "pinyin": "nuò mǐ",
      "amountMetric": "150 g",
      "amountUS": "¾ cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Rinse and soak 30 min; drain well — grains must be dry enough to cling.",
      "noteZh": "淘洗后泡30分钟；沥干至米粒不滴水，方能挂住肉丸。"
    },
    {
      "id": "ppb-03",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "ginger"
    },
    {
      "id": "ppb-04",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "¼ cup finely chopped",
      "category": "produce",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "scallion"
    },
    {
      "id": "ppb-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "",
      "noteZh": "",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ppb-06",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "",
      "noteZh": "",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Mix pork, ginger, scallion, light soy sauce, white pepper, and 1 tsp sesame oil. Chop mixture vigorously with knife 50 strokes — do not use food processor (texture turns pasty).",
      "textZh": "猪肉末与姜末、葱花、生抽、白胡椒粉、香油1茶匙拌匀，用刀反复剁50下——禁用料理机（易成糊）。",
      "zhHint": "刀剁50下，勿用料理机",
      "stateNote": {
        "visual": "Mixture becomes glossy and sticky, pulling away from bowl sides.",
        "visualZh": "肉馅油亮粘稠，能自然脱离碗壁。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Resists spoon stirring; holds shape when scooped.",
        "signalZh": "勺搅费力；舀起能成团不散。"
      }
    },
    {
      "text": "Roll meat mixture into 2.5 cm balls. Roll each ball in drained glutinous rice until fully coated — press gently so rice adheres firmly.",
      "textZh": "肉馅搓成2.5厘米圆球，滚入沥干的糯米中，轻按使米粒密实附着。",
      "zhHint": "轻按使米粒密实附着",
      "stateNote": {
        "visual": "Each ball is completely opaque white, with no bare meat showing.",
        "visualZh": "丸子通体雪白，不见肉色裸露。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Rice grains stand upright, not sliding off.",
        "signalZh": "米粒直立不滑落。"
      }
    },
    {
      "text": "Arrange rice-coated balls on oiled steamer rack, leaving 2 cm space between. Let rest 10 minutes so rice hydrates slightly.",
      "textZh": "丸子摆入抹油蒸架，间距2厘米；静置10分钟让米粒微吸湿。",
      "zhHint": "静置10分钟吸湿",
      "stateNote": {
        "visual": "Rice surface looks damp but not wet; no pooling water.",
        "visualZh": "米面微潮但不湿漉，无水珠积聚。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Grains appear plumper and less chalky.",
        "signalZh": "米粒略鼓胀，粉感减弱。"
      }
    },
    {
      "text": "Steam over high heat for 20 minutes. Turn off heat; let rest covered 5 minutes before serving — this prevents rice from cracking.",
      "textZh": "大火蒸20分钟；关火后焖5分钟再揭盖——防米壳开裂。",
      "zhHint": "关火焖5分钟",
      "stateNote": {
        "visual": "Rice turns translucent at edges; pearls glisten like dew.",
        "visualZh": "米粒边缘微透亮，如露珠般晶莹。",
        "timeRef": "20 minutes steam + 5 minutes rest",
        "timeRefZh": "蒸20分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam thickens and smells sweetly starchy.",
        "signalZh": "蒸汽变浓，散发微甜米香。"
      }
    },
    {
      "text": "Serve hot, garnished with extra scallion greens. Optional: drizzle with 1 tsp light soy sauce and ½ tsp sesame oil.",
      "textZh": "趁热上桌，撒葱绿；可选淋生抽1茶匙+香油½茶匙。",
      "zhHint": "趁热上桌，可淋酱汁",
      "stateNote": {
        "visual": "Pearls stay intact, slightly springy to touch.",
        "visualZh": "丸子完整不散，触之微弹。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Steam still rises gently from surface.",
        "signalZh": "表面仍有轻柔热气升腾。"
      }
    }
  ],
  "tips": [
    "Soaked rice must be thoroughly drained — excess water causes slipping.",
    "For vegan version: use mashed tofu + cooked lentils + glutinous rice flour binder.",
    "Best served within 2 hours — rice hardens if chilled and re-steamed."
  ],
  "tipsZh": [
    "泡米务必沥干，水多则米粒易脱落。",
    "素食版可用豆腐泥+熟扁豆+糯米粉作粘合剂。",
    "最佳赏味期2小时内，冷藏复蒸后米易变硬。"
  ],
  "relatedSlugs": [
    "sticky-rice-chicken-bamboo-leaf"
  ],
  "image": "/images/recipes/pearl-meatballs-sticky-rice.webp"
};
