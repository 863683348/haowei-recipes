import type { Recipe } from "@/lib/types";

/** Northern Cornmeal Gruel (Yu Mi Hu) (玉米糊) — Seed batch */
export const northern_cornmeal_gruel: Recipe = {
  "id": "yu-mi-hu",
  "slug": "northern-cornmeal-gruel",
  "titleEn": "Northern Cornmeal Gruel (Yu Mi Hu)",
  "titleZh": "玉米糊",
  "pinyin": "yù mǐ hú",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanxi",
  "regionZh": "山西",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version simmers slowly in a clay pot over low heat — no blender needed — just like Uncle Wei’s Shanxi farmhouse breakfast ritual.",
  "versionNoteZh": "家常版用砂锅小火慢熬——无需搅拌机，正如山西乡下魏叔的早餐传统。",
  "tags": [
    "20-min",
    "breakfast",
    "comfort"
  ],
  "dietary": [
    "vegetarian",
    "vegan",
    "gluten-free"
  ],
  "story": "Uncle Wei in Shanxi’s Lüliang mountains stirred this gruel each dawn in a black clay pot hung over a hearth fire. He’d serve it in chipped porcelain bowls with pickled radish — saying, 'It warms the stomach before the wind bites.'",
  "storyZh": "山西吕梁山的魏叔每天清晨都在灶膛火上吊着黑陶罐熬这糊糊。他盛在豁口瓷碗里，配一碟辣萝卜——说：‘风没咬人，胃先暖了。’",
  "ingredients": [
    {
      "id": "hu-01",
      "nameEn": "fine yellow cornmeal",
      "nameZh": "细黄玉米面",
      "pinyin": "xì huáng yù mǐ miàn",
      "amountMetric": "80 g",
      "amountUS": "⅔ cup",
      "category": "staple",
      "pantry": "local",
      "note": "Fine grind ensures silky texture; substitute with finely ground polenta or corn flour.",
      "noteZh": "细磨确保顺滑口感；可用细磨polenta或玉米淀粉替代。"
    },
    {
      "id": "hu-02",
      "nameEn": "cold water (for slurry)",
      "nameZh": "凉水（调浆用）",
      "pinyin": "liáng shuǐ",
      "amountMetric": "120 ml",
      "amountUS": "½ cup",
      "category": "other",
      "pantry": "local",
      "note": "Must be cold to prevent lumps when mixed with cornmeal.",
      "noteZh": "必须用凉水，避免玉米面结块。"
    },
    {
      "id": "hu-03",
      "nameEn": "boiling water (for cooking)",
      "nameZh": "沸水（煮糊用）",
      "pinyin": "fèi shuǐ",
      "amountMetric": "600 ml",
      "amountUS": "2½ cups",
      "category": "other",
      "pantry": "local",
      "note": "Freshly boiled — essential for even thickening.",
      "noteZh": "必须现烧沸水——确保受热均匀、糊化充分。"
    },
    {
      "id": "hu-04",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "1.5 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Balances corn’s natural earthiness.",
      "noteZh": "中和玉米天然土腥味。"
    }
  ],
  "steps": [
    {
      "text": "In a small bowl, whisk cornmeal and cold water until completely smooth and lump-free — this is your slurry.",
      "textZh": "小碗中将玉米面与凉水搅匀至完全顺滑、无颗粒——即为面浆。",
      "zhHint": "先调浆防结块",
      "stateNote": {
        "visual": "Liquid pours in a single, unbroken ribbon; no white specks visible.",
        "visualZh": "浆液呈不间断丝带状流下；无白点可见。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Rub a drop between thumb and forefinger — feels slick, not gritty.",
        "signalZh": "指捻一滴——顺滑无颗粒感。"
      },
      "tip": "Strain slurry through fine-mesh sieve if any grit remains.",
      "tipZh": "如有微粒，过细网筛滤净。"
    },
    {
      "text": "Bring boiling water to a vigorous boil in a heavy-bottomed pot or clay pot. Slowly drizzle in slurry while stirring constantly with a long-handled spoon in one direction.",
      "textZh": "厚底锅或砂锅中，将沸水烧至滚沸；一边持续单向搅动，一边缓缓淋入面浆。",
      "zhHint": "沸水冲浆",
      "stateNote": {
        "visual": "Liquid thickens visibly within 5 seconds; bubbles become smaller and denser.",
        "visualZh": "5秒内明显变稠；气泡变小变密。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "heat": "high",
        "signal": "Stirring meets slight resistance; spoon leaves faint trail.",
        "signalZh": "搅动遇轻微阻力；勺过留痕。"
      },
      "tip": "Always add slurry to boiling water — reverse causes irreversible lumps.",
      "tipZh": "务必浆入沸水——反之必结死块。"
    },
    {
      "text": "Reduce heat to low. Simmer uncovered, stirring every 30 seconds with a wooden spoon, for 8 minutes — scraping bottom and corners to prevent scorching.",
      "textZh": "转最小火，敞盖慢煨8分钟，每30秒用木勺搅拌并刮底角防糊。",
      "zhHint": "小火勤搅",
      "stateNote": {
        "visual": "Surface shimmers with tiny, slow-rising bubbles; consistency resembles warm custard.",
        "visualZh": "表面泛细密缓升气泡；质地如温蛋奶冻。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "low",
        "signal": "Spoon glides smoothly but leaves brief, soft trails.",
        "signalZh": "勺滑过留短暂柔痕。"
      },
      "tip": "Clay pots retain heat longer — reduce heat earlier than metal pots.",
      "tipZh": "砂锅蓄热强——比金属锅早半分钟调小火。"
    },
    {
      "text": "Add salt and stir 30 seconds. Remove from heat and let stand 2 minutes — this allows starch to fully set and texture to unify.",
      "textZh": "加盐搅30秒，离火静置2分钟——让淀粉充分凝沉、质地均一。",
      "zhHint": "静置定型",
      "stateNote": {
        "visual": "Surface forms faint skin; edges pull slightly inward.",
        "visualZh": "表面微结薄皮；边缘略向内收。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Spoon dipped and lifted shows clean, glossy film.",
        "signalZh": "勺蘸起再垂落，挂清亮薄膜。"
      },
      "tip": "Do not stir during standing — disrupts starch network.",
      "tipZh": "静置时勿搅动——会破坏淀粉网络。"
    },
    {
      "text": "Gently re-stir with wooden spoon. Serve hot in pre-warmed bowls — it should coat the spoon lightly and flow slowly.",
      "textZh": "轻搅匀，盛入预热碗中——应微挂勺、缓流淌。",
      "zhHint": "热碗盛糊",
      "stateNote": {
        "visual": "Smooth, pale yellow liquid with no separation or foam.",
        "visualZh": "均匀浅黄色液体，无分层或浮沫。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "When tilted, bowl coating remains even and unbroken.",
        "signalZh": "碗倾斜，挂壁均匀不断裂。"
      },
      "tip": "For richer mouthfeel, stir in 1 tsp toasted sesame oil just before serving.",
      "tipZh": "喜醇厚口感？出锅前拌入1 tsp焙香芝麻油。"
    }
  ],
  "tips": [
    "Best served within 10 minutes — reheats well but loses silkiness if held too long.",
    "Add a pinch of white pepper (termKey: white-pepper) for warming depth — common in Shanxi homes.",
    "Leftovers thicken overnight; thin with hot water and reheat gently."
  ],
  "tipsZh": [
    "10分钟内食用最佳——可复热，但久置失顺滑。",
    "加少许白胡椒（termKey: white-pepper）增暖香——山西家常做法。",
    "隔夜变稠？加热水稀释，小火回暖即可。"
  ],
  "relatedSlugs": [
    "cornmeal-buns-homestyle",
    "cornmeal-flatcakes-northern-style"
  ],
  "image": "/images/recipes/northern-cornmeal-gruel.webp"
};
