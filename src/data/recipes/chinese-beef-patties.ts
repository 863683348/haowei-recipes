import type { Recipe } from "@/lib/types";

/** Crispy Chinese Beef Patties (Niu Rou Bing) (牛肉饼) — Day batch */
export const chinese_beef_patties: Recipe = {
  "id": "niu-rou-bing",
  "slug": "chinese-beef-patties",
  "titleEn": "Crispy Chinese Beef Patties (Niu Rou Bing)",
  "titleZh": "牛肉饼",
  "pinyin": "niú ròu bǐng",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Xi'an",
  "regionZh": "西安",
  "difficulty": "medium",
  "timeMin": 55,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses a skillet and a modest amount of oil; Xi'an street stalls griddle on a flat top with much more fat, and the dough is laminated thinner for an almost shattering shell.",
  "versionNoteZh": "家常版平底锅少油；西安摊贩在铁板上用油更多，且面皮分层擀得更薄，外壳近乎一碰就碎。",
  "tags": [
    "weeknight",
    "make-ahead",
    "handheld"
  ],
  "dietary": [
    "none"
  ],
  "story": "Walk through a Xi'an morning market and you will hear beef patties before you see them: the rhythmic slap of dough on steel, then the long hiss as oil hits the griddle. Inside the crackling shell is a thin layer of seasoned beef and scallion, folded into the dough so every bite has spiral layers.",
  "storyZh": "走在西安的早市，先听见牛肉饼才看见它——面团摔在铁板上的节奏声，接着是油落铁板的长长滋响。脆壳里是薄薄一层调味牛肉和葱花，卷进面里，每一口都有螺旋层次。",
  "ingredients": [
    {
      "id": "nrb-1",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "250 g",
      "amountUS": "2 cups",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "nrb-2",
      "nameEn": "warm water",
      "nameZh": "温水",
      "pinyin": "wēn shuǐ",
      "amountMetric": "145 ml",
      "amountUS": "2/3 cup",
      "category": "other",
      "pantry": "local",
      "note": "About 50°C; warm water dough stays soft and rolls thin.",
      "noteZh": "约 50℃；温水面团柔软好擀薄。"
    },
    {
      "id": "nrb-3",
      "nameEn": "ground beef (80/20)",
      "nameZh": "牛肉馅（二八肥瘦）",
      "pinyin": "niú ròu xiàn",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Some fat is essential — lean beef makes a dry, crumbly filling.",
      "noteZh": "必须带点肥；纯瘦会又干又散。"
    },
    {
      "id": "nrb-4",
      "nameEn": "onion",
      "nameZh": "洋葱",
      "pinyin": "yáng cōng",
      "amountMetric": "100 g",
      "amountUS": "1/2 medium",
      "category": "produce",
      "pantry": "local",
      "note": "Finely diced; it provides moisture and sweetness.",
      "noteZh": "切细末，提供水分与清甜。",
      "termKey": "onion"
    },
    {
      "id": "nrb-5",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "nrb-6",
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
      "id": "nrb-7",
      "nameEn": "oyster sauce",
      "nameZh": "蚝油",
      "pinyin": "háo yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds savoury depth and helps bind; vegetarian sub: mushroom sauce.",
      "noteZh": "增鲜并起黏合作用；素食替代：香菇素蚝油。",
      "termKey": "oyster-sauce"
    },
    {
      "id": "nrb-8",
      "nameEn": "toasted sesame oil",
      "nameZh": "芝麻香油",
      "pinyin": "zhī ma xiāng yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "nrb-9",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "1/2 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    },
    {
      "id": "nrb-10",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "50 g",
      "amountUS": "5 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Mix flour with warm water and a pinch of salt; knead 6 minutes to a soft dough. Cover and rest 30 minutes.",
      "textZh": "面粉加温水与少许盐，揉 6 分钟成软面团；盖膜醒 30 分钟。",
      "zhHint": "软面团醒透才好擀",
      "stateNote": {
        "visual": "Dough is smooth, slightly tacky, and holds a stretched film when pulled.",
        "visualZh": "面团光滑微黏，抻开可见薄膜。",
        "timeRef": "6 minutes + 30 minutes",
        "timeRefZh": "揉 6 分钟 + 醒 30 分钟",
        "signal": "A poked dent fills in slowly and leaves a faint ring.",
        "signalZh": "戳洞缓慢回弹并留下浅痕。"
      }
    },
    {
      "text": "Combine beef, onion, ginger, soy sauce, oyster sauce, sesame oil and white pepper. Stir in one direction 2 minutes until sticky and glossy.",
      "textZh": "牛肉馅加洋葱、姜末、生抽、蚝油、香油与白胡椒粉，朝一个方向搅 2 分钟至发黏上劲。",
      "zhHint": "单向搅上劲，馅才不散",
      "stateNote": {
        "visual": "Filling turns glossy and pulls in strings from the spoon.",
        "visualZh": "馅料发亮，勺起时拉出丝状。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Turning the bowl upside down briefly does not drop the filling.",
        "signalZh": "碗口朝下短时倒扣，馅料不脱落。"
      }
    },
    {
      "text": "Divide dough into 4 balls. Roll one ball into a 25 × 12 cm rectangle, spread 1/4 of the filling thinly over two-thirds, and scatter scallion.",
      "textZh": "面团分 4 份；取一份擀成 25×12 厘米长方形，在三分之二面积上薄抹四分之一馅料，撒葱花。",
      "zhHint": "馅抹薄，留出空白封口",
      "stateNote": {
        "visual": "Filling layer is about 2 mm thick; a clean strip of dough remains at the far edge.",
        "visualZh": "馅层约 2 毫米厚，远端留出干净封口条。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "signal": "Dough underneath stays opaque — filling has not soaked through.",
        "signalZh": "底层面皮仍不透光，馅汁未渗透。"
      }
    },
    {
      "text": "Fold the bare third over the filling, then fold again like a letter; pinch all seams shut. Roll the packet gently from one end into a long strip, then coil it into a spiral and flatten to 1.5 cm.",
      "textZh": "空白处折向馅料，再像折信一样对折，所有接口捏紧；从一端轻轻擀成长条，再盘成螺旋状按扁至 1.5 厘米厚。",
      "zhHint": "折三折再盘卷，收口必捏紧",
      "stateNote": {
        "visual": "Spiral layers visible through the surface; no filling oozes at the seam.",
        "visualZh": "表面可见螺旋纹，收口处无馅料外溢。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Pressing the centre produces no squelch or leakage.",
        "signalZh": "按压中心无汁水挤出。"
      }
    },
    {
      "text": "Heat 10 ml oil in a skillet over medium-low. Cook each patty 4 minutes per side, covered for the first 2 minutes of each side, until deep gold and cooked through.",
      "textZh": "平底锅中小火放 10 毫升油，每面煎 4 分钟（每面前 2 分钟加盖），至两面深金、内部熟透。",
      "zhHint": "中小火加盖，先焖后煎",
      "stateNote": {
        "visual": "Crust is deep amber with toasted blisters; the patty feels firm, not doughy.",
        "visualZh": "外壳深琥珀带焦香鼓泡，按压紧实不发黏。",
        "timeRef": "8 minutes per patty",
        "timeRefZh": "每饼 8 分钟",
        "heat": "medium-low",
        "signal": "Juices at the seam run clear, and the cake sounds hollow when tapped.",
        "signalZh": "收口处渗出汁水清亮，轻敲有中空声。"
      }
    },
    {
      "text": "Rest 2 minutes on a rack (not a plate, which traps steam), then cut into wedges and serve.",
      "textZh": "放网架静置 2 分钟（勿放盘中，会积汽回软），切角上桌。",
      "zhHint": "架子上放凉，别捂盘里",
      "stateNote": {
        "visual": "Cut face shows distinct spiral layers with evenly cooked beef between them.",
        "visualZh": "切面可见清晰螺旋层，层间牛肉熟度均匀。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Crust stays crisp to the touch after resting.",
        "signalZh": "静置后外壳触之仍脆。"
      }
    }
  ],
  "tips": [
    "Roll and coil rather than stuffing a ball — the spiral is what gives the signature layered bite.",
    "Medium-low heat is the rule: high heat browns the shell before the beef at the centre cooks.",
    "Freeze shaped raw patties between parchment; cook from frozen with 3 extra minutes per side."
  ],
  "tipsZh": [
    "要「擀开卷起」而非包成球——螺旋正是层层口感的来源。",
    "火候铁律中小火：火大则外壳先焦、中心肉还没熟。",
    "生胚用油纸隔层冷冻；无需解冻，每面多煎 3 分钟。"
  ],
  "relatedSlugs": [
    "beef-and-broccoli",
    "hunan-sliced-beef-stir-fry",
    "beijing-zhima-shaobing"
  ],
  "image": "/images/recipes/beef-and-broccoli.webp"
};
