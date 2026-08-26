import type { Recipe } from "@/lib/types";

/** Winter Melon Pork Rib Soup (冬瓜排骨汤) (冬瓜排骨汤) — Day batch */
export const winter_melon_soup: Recipe = {
  "id": "winter-melon-soup",
  "slug": "winter-melon-soup",
  "titleEn": "Winter Melon Pork Rib Soup (冬瓜排骨汤)",
  "titleZh": "冬瓜排骨汤",
  "pinyin": "dong gua pai gu tang",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "Classic Cantonese slow-simmered soup (老火汤) — the kind that simmers for hours and fills the house with comfort. Winter melon becomes translucent and melt-in-the-mouth; the broth is clean, subtly sweet, and deeply nourishing.",
  "versionNoteZh": "经典广式老火汤——慢火煲数小时，满屋清香。冬瓜炖至半透明入口即化，汤色清澈微甜，温润滋补。",
  "tags": [
    "soup",
    "Cantonese",
    "slow-cook",
    "comfort",
    "family"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "Winter melon pork rib soup (冬瓜排骨汤) is a Cantonese comfort soup that embodies the philosophy of 老火汤 — long, slow simmering extracts every ounce of flavor from the bones while the winter melon absorbs the broth and becomes silky. It is a staple in Cantonese households, especially during summer when the cooling properties of winter melon are prized. The soup requires patience but delivers an extraordinary depth of clean, savory flavor with zero heaviness.",
  "storyZh": "冬瓜排骨汤是广式 comfort soup 的代表，体现老火汤的哲学——长时间慢火熬煮，骨头的鲜味全然释放，冬瓜吸收汤汁变得丝滑。是广东家庭的常客，尤其夏季——冬瓜的清凉属性备受推崇。这道汤需要耐心，但回报是无与伦比的清澈鲜香。",
  "ingredients": [
    {
      "id": "wms-rib",
      "nameEn": "pork ribs, cut into 5 cm segments",
      "nameZh": "猪排骨，切 5 cm 段",
      "amountMetric": "500 g",
      "amountUS": "1.1 lbs",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-rib"
    },
    {
      "id": "wms-melon",
      "nameEn": "winter melon, peeled and cut into 3 cm chunks",
      "nameZh": "冬瓜，去皮切 3 cm 块",
      "amountMetric": "600 g",
      "amountUS": "1.3 lbs",
      "category": "produce",
      "pantry": "local",
      "termKey": "winter-melon"
    },
    {
      "id": "wms-ginger",
      "nameEn": "ginger, sliced into 4 rounds",
      "nameZh": "老姜，切 4 片",
      "amountMetric": "15 g",
      "amountUS": "about 1/2 inch slice",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "wms-scallion",
      "nameEn": "scallion, knotted (for simmering)",
      "nameZh": "大葱结（煲汤用）",
      "amountMetric": "1 stalk",
      "amountUS": "1 stalk",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "wms-wine",
      "nameEn": "Shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "wms-water",
      "nameEn": "cold water",
      "nameZh": "冷水",
      "amountMetric": "1.5 L",
      "amountUS": "about 6 cups",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "wms-salt",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "wms-white-pepper",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Blanch the pork ribs: place ribs in a pot of cold water, bring to a boil over high heat. Boil for 3 minutes to release scum. Drain and rinse ribs under cold running water. This step removes impurities and ensures a clear broth.",
      "textZh": "排骨焯水：冷水下锅，大火烧开煮 3 分钟，撇去浮沫。捞出用冷水冲洗。这一步去除杂质，确保汤清。",
      "stateNote": {
        "visual": "Gray-brown scum floats to the surface; water turns cloudy",
        "visualZh": "灰褐色浮沫浮起，水变浑浊",
        "heat": "high",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Scum is fully released and water is cloudy — time to drain",
        "signalZh": "浮沫充分释放，水浑浊，需倒掉"
      }
    },
    {
      "text": "Prepare the winter melon: peel the tough outer skin, remove seeds, and cut the flesh into 3 cm chunks. The rind can be left on for a firmer texture or removed for a softer result.",
      "textZh": "冬瓜去皮去籽，切 3 cm 块。保留部分瓜皮口感更爽脆，全部去皮更软糯。",
      "stateNote": {
        "visual": "Flesh is pure white, firm but yielding to slight pressure",
        "visualZh": "果肉纯白，质地坚实但按压微软",
        "signal": "Knife meets slight resistance — not rock hard, not mushy",
        "signalZh": "刀切有轻微阻力——不硬不烂"
      }
    },
    {
      "text": "In a clean pot, combine blanched ribs, sliced ginger, knotted scallion, and Shaoxing wine. Add cold water (1.5 L). Bring to a boil over high heat.",
      "textZh": "新锅中放入焯好的排骨、姜片、葱结、料酒，加冷水 1.5 L，大火烧开。",
      "stateNote": {
        "visual": "Water is clear, small bubbles forming at the edges",
        "visualZh": "汤色清澈，锅边开始冒小泡",
        "heat": "high",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Vigorous rolling boil achieved",
        "signalZh": "剧烈沸腾"
      }
    },
    {
      "text": "Once boiling, reduce heat to the lowest possible setting. Cover partially and simmer for 40 minutes. The broth should barely move — a few occasional bubbles, not a rolling boil.",
      "textZh": "烧开后转最小火，半盖锅盖慢炖 40 分钟。汤面仅微冒泡，不能大滚。",
      "stateNote": {
        "visual": "Broth is clear golden, a few bubbles breaking the surface every few seconds",
        "visualZh": "汤色清亮微金，每隔几秒破出一两个小泡",
        "heat": "low",
        "timeRef": "40 minutes",
        "timeRefZh": "40 分钟",
        "signal": "Surface is almost still — only gentle movement",
        "signalZh": "汤面几近平静，仅微动"
      }
    },
    {
      "text": "Add winter melon chunks to the pot. Continue simmering uncovered for another 30-35 minutes, until the melon is translucent and fork-tender.",
      "textZh": "下冬瓜块，继续敞盖慢炖 30-35 分钟，至冬瓜半透明、筷子可轻松插入。",
      "stateNote": {
        "visual": "Winter melon turns from opaque white to semi-translucent, edges softening",
        "visualZh": "冬瓜由乳白转为半透明，边缘开始软化",
        "timeRef": "30-35 minutes",
        "timeRefZh": "30-35 分钟",
        "signal": "Fork slides in with zero resistance — melon is melting",
        "signalZh": "筷子一插即入，冬瓜入口即化"
      }
    },
    {
      "text": "Remove ginger slices and scallion knot. Season with salt and white pepper to taste. Ladle into bowls and serve immediately.",
      "textZh": "捞出姜片和葱结不要。加盐和白胡椒粉调味，盛碗上桌。",
      "stateNote": {
        "visual": "Broth is crystal clear with a faint golden sheen, melon pieces floating like jade",
        "visualZh": "汤色清澈见底微泛金，冬瓜块如翡翠漂浮",
        "signal": "Broth should be drinkable on its own — clean, savory, slightly sweet from the melon",
        "signalZh": "汤本身可直接饮用——清澈鲜香，带冬瓜微甜"
      }
    }
  ],
  "tips": [
    "The key to clear soup is the blanching step — never skip it. Impure bones make cloudy, gamy soup.",
    "Keep the simmer gentle — a rolling boil will cloud the broth and break apart the winter melon.",
    "Winter melon is available in Asian supermarkets year-round. Look for heavy, hard pieces with intact white powdery bloom on the skin — this indicates freshness.",
    "This soup improves with time — make it a day ahead and reheat gently. The flavors meld beautifully overnight."
  ],
  "tipsZh": [
    "汤清的关键是焯水——绝不能省。血沫不去，汤浑且腥。",
    "保持微沸——大火会搅浑汤底，冬瓜也会煮烂。",
    "冬瓜在亚超全年有售。选沉重、坚硬、表皮有白色粉霜的——说明新鲜。",
    "这道汤隔夜更美味——提前一天做好，第二天小火回温，风味更融合。"
  ],
  "relatedSlugs": [
    "egg-drop-soup",
    "tomato-egg-drop-soup",
    "egg-drop-soup"
  ],
  "image": "/images/recipes/winter-melon-soup.webp"
};
