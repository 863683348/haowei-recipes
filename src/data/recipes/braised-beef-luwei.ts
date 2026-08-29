import type { Recipe } from "@/lib/types";

/** Home-Style Braised Beef (Lǔ Niú Ròu) (卤牛肉) — Seed batch */
export const braised_beef_luwei: Recipe = {
  "id": "lu-niu-rou",
  "slug": "braised-beef-luwei",
  "titleEn": "Home-Style Braised Beef (Lǔ Niú Ròu)",
  "titleZh": "卤牛肉",
  "pinyin": "lǔ niú ròu",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 180,
  "servings": 4,
  "version": "family",
  "versionNote": "This version uses gentle simmering and reuses the master stock for depth — unlike restaurant versions that often over-spice or pressure-cook. My grandmother in Yangpu kept hers for months, skimming daily and adding new aromatics.",
  "versionNoteZh": "此版本用文火慢炖，并循环使用老卤汁增香——不同于餐馆常用高压锅或过量香料的做法。我杨浦的外婆会将老卤保存数月，每日撇沫、添料。",
  "tags": [
    "make-ahead",
    "meal-prep",
    "protein"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Shanghai’s Hongkou district taught me this recipe when I was 16 — he’d braise beef every Sunday morning while listening to Shanghai Opera on the radio, saving the broth for dumpling fillings all week.",
  "storyZh": "我十六岁时，上海虹口区的舅舅教了我这道菜——他每个周日清晨一边听沪剧广播，一边卤牛肉，卤汁留着整周包饺子用。",
  "ingredients": [
    {
      "id": "bn-01",
      "nameEn": "beef shank (lean, with connective tissue)",
      "nameZh": "牛腱子肉",
      "pinyin": "niú jiàn zi ròu",
      "amountMetric": "750 g",
      "amountUS": "1.5 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Look for firm, marbled slices with visible sinew — essential for chewy-tender texture.",
      "noteZh": "选紧实带筋络的肉块，筋膜明显者为佳，成菜才弹牙有嚼劲。"
    },
    {
      "id": "bn-02",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "60 ml",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "bn-03",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "bn-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "bn-05",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "4 pcs",
      "amountUS": "4 whole",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "bn-06",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "40 g",
      "amountUS": "¼ cup, sliced",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "bn-07",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "60 g",
      "amountUS": "½ cup, cut into 3-inch lengths",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "bn-08",
      "nameEn": "five-spice powder",
      "nameZh": "五香粉",
      "pinyin": "wǔ xiāng fěn",
      "amountMetric": "1.5 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "five-spice"
    }
  ],
  "steps": [
    {
      "text": "Rinse beef shank under cold water; soak in cold water for 30 minutes to draw out blood. Drain and pat dry.",
      "textZh": "牛腱子肉冷水冲洗，浸泡30分钟去血水；捞出沥干并用厨房纸吸干表面水分。",
      "zhHint": "去腥关键步骤"
    },
    {
      "text": "Blanch beef in a large pot of boiling water for 5 minutes. Skim off foam vigorously. Remove beef, rinse under cool water, and set aside.",
      "textZh": "冷水下锅焯水5分钟，全程撇净浮沫；捞出牛肉，用凉水冲洗干净，备用。",
      "zhHint": "去沫要彻底"
    },
    {
      "text": "In a clean pot, combine all aromatics (ginger, scallion, star anise, five-spice) with light soy, dark soy, Shaoxing wine, and 1.5 L water. Bring to a gentle boil over medium-high heat.",
      "textZh": "净锅中放入姜片、葱段、八角、五香粉、生抽、老抽、绍酒和1.5升水，中大火烧开。",
      "zhHint": "香料与酱料先煮透"
    },
    {
      "text": "Add blanched beef. Reduce heat to low, cover partially, and simmer gently for 2.5 hours — turning meat every 45 minutes.",
      "textZh": "放入焯好水的牛肉，转小火，盖半盖，慢炖2.5小时，每45分钟翻动一次。",
      "zhHint": "小火慢炖不沸腾",
      "stateNote": {
        "visual": "Surface barely shivers with tiny bubbles; liquid maintains a steady, quiet simmer.",
        "visualZh": "汤面仅微微冒泡，液面持续静谧微滚。",
        "timeRef": "2.5 hours",
        "timeRefZh": "2.5 小时",
        "heat": "low",
        "signal": "Meat yields slightly when pressed with chopsticks but does not fall apart.",
        "signalZh": "筷子轻压微有弹性，不散不烂。"
      }
    },
    {
      "text": "Turn off heat. Let beef cool completely in the broth (minimum 2 hours, ideally overnight). Slice thinly against the grain before serving.",
      "textZh": "关火，让牛肉在卤汁中自然冷却（至少2小时，隔夜更佳）。食用前逆纹切薄片。",
      "zhHint": "浸卤入味是灵魂",
      "stateNote": {
        "visual": "Broth thickens slightly and coats the meat like lacquer.",
        "visualZh": "卤汁微稠，如漆般裹住牛肉。",
        "timeRef": "2–12 hours",
        "timeRefZh": "2–12 小时",
        "signal": "Meat feels firm yet supple; broth glistens on surface.",
        "signalZh": "肉质紧实柔韧，卤汁表面泛光。"
      }
    }
  ],
  "tips": [
    "Save the cooled broth — strain, refrigerate up to 1 week or freeze for 3 months. Reuse as base for luwei chicken feet or eggs.",
    "For cleaner slices, chill beef in broth overnight before cutting.",
    "If star anise is unavailable, substitute 1 tsp ground anise + ¼ tsp cinnamon (not authentic but functional)."
  ],
  "tipsZh": [
    "卤汁务必保留——滤渣冷藏可存1周，冷冻3个月；可复用于卤鸡爪或卤蛋。",
    "切片前连卤冷藏过夜，肉质更紧实易切。",
    "若无八角，可用1茶匙茴香粉+¼茶匙肉桂粉替代（非正宗但可行）。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/braised-beef-luwei.webp"
};
