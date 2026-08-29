import type { Recipe } from "@/lib/types";

/** Homestyle Cornmeal Buns (Wo Tou) (玉米面窝头) — Seed batch */
export const cornmeal_buns_homestyle: Recipe = {
  "id": "yu-mi-mian-wo-tou",
  "slug": "cornmeal-buns-homestyle",
  "titleEn": "Homestyle Cornmeal Buns (Wo Tou)",
  "titleZh": "玉米面窝头",
  "pinyin": "yù mǐ miàn wō tóu",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Chinese Snack",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 6,
  "version": "family",
  "versionNote": "Family version uses no baking powder — relies on natural fermentation and texture from coarse cornmeal, just like Grandma Li in Xicheng District used to make.",
  "versionNoteZh": "家常版不添加泡打粉，依靠粗玉米面天然质地与轻微发酵，正如西城区李奶奶当年所做。",
  "tags": [
    "45-min",
    "vegetarian",
    "comfort"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My grandmother in Beijing’s Xicheng district made these every Tuesday morning before heading to the Dongdan market. She’d mix the dough by hand in a chipped blue enamel bowl, humming old opera tunes while the steam rose from the bamboo steamer.",
  "storyZh": "我北京西城区的奶奶每周二清晨都会做这个，做完就去东单市场。她总用一只掉漆的蓝搪瓷盆和面，一边哼着老戏，一边看竹屉上蒸气升腾。",
  "ingredients": [
    {
      "id": "cm-01",
      "nameEn": "coarse yellow cornmeal",
      "nameZh": "粗黄玉米面",
      "pinyin": "cū huáng yù mǐ miàn",
      "amountMetric": "200 g",
      "amountUS": "1 ⅔ cups",
      "category": "staple",
      "pantry": "local",
      "note": "Must be coarse-ground (not fine or instant); look for 'polenta' or 'stone-ground cornmeal' in Western supermarkets.",
      "noteZh": "必须是粗磨玉米面（非即食或细粉）；西超市可选‘polenta’或‘stone-ground cornmeal’。"
    },
    {
      "id": "cm-02",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "100 g",
      "amountUS": "¾ cup",
      "category": "staple",
      "pantry": "local",
      "note": "Provides gluten structure; substitute with bread flour if preferred.",
      "noteZh": "提供面筋结构；可用高筋面粉替代。"
    },
    {
      "id": "cm-03",
      "nameEn": "warm water",
      "nameZh": "温水",
      "pinyin": "wēn shuǐ",
      "amountMetric": "180 ml",
      "amountUS": "¾ cup",
      "category": "other",
      "pantry": "local",
      "note": "Should feel warm but not hot to the wrist (≈40°C / 105°F).",
      "noteZh": "手腕试温，微热不烫（约40°C）。"
    },
    {
      "id": "cm-04",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xì hǎi yán",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Do not substitute with iodized table salt — flavor is sharper and less balanced.",
      "noteZh": "勿用加碘精制盐——风味更尖锐、失衡。"
    }
  ],
  "steps": [
    {
      "text": "In a large mixing bowl, combine cornmeal, all-purpose flour, and salt. Stir with chopsticks until evenly distributed.",
      "textZh": "大碗中混合玉米面、中筋面粉和盐，用筷子搅匀。",
      "zhHint": "干料先混匀",
      "stateNote": {
        "visual": "Uniform pale yellow mixture with no streaks of white or gray.",
        "visualZh": "均匀浅黄色，无白色或灰白条纹。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No visible clumps or dry pockets.",
        "signalZh": "无结块或干粉区域。"
      },
      "tip": "",
      "tipZh": ""
    },
    {
      "text": "Gradually pour in warm water while stirring with chopsticks. When shaggy dough forms, switch to hands and knead gently for 2 minutes until cohesive but still slightly rough.",
      "textZh": "边搅拌边缓慢倒入温水；待成絮状后改用手揉2分钟，至面团成形但表面略粗糙。",
      "zhHint": "手揉至成团",
      "stateNote": {
        "visual": "Dough holds together when squeezed but shows faint cracks on surface.",
        "visualZh": "手捏能成团，但表面有细微裂纹。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No loose crumbs remain in the bowl.",
        "signalZh": "盆底无散落干粉。"
      },
      "tip": "If dough feels too dry, add water 1 tsp at a time. Too wet? Dust with 1 tsp cornmeal.",
      "tipZh": "若太干，每次加1 tsp水；若太湿，撒1 tsp玉米面补救。"
    },
    {
      "text": "Cover bowl with damp cloth and let rest at room temperature (22–25°C) for 20 minutes — this relaxes gluten and improves shaping.",
      "textZh": "盖湿布，室温（22–25°C）静置20分钟——松弛面筋，便于整形。",
      "zhHint": "静置松弛",
      "stateNote": {
        "visual": "Slightly puffed surface with faint moisture beads.",
        "visualZh": "表面微鼓，泛出细小水珠。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Dough yields softly under gentle finger press.",
        "signalZh": "轻按面团，缓慢回弹。"
      },
      "tip": "Do not skip — skipping makes buns crumbly and hard to shape.",
      "tipZh": "不可省略——否则窝头易散、难塑形。"
    },
    {
      "text": "Wet your palms lightly. Pinch off 80 g portions, roll into balls, then press thumb deeply into center to form a conical hollow. Gently pinch base to taper into a classic ‘bird’s nest’ shape.",
      "textZh": "手掌微沾水，取80 g面团搓圆，拇指深压中心形成锥形凹洞，再轻捏底部收窄成经典‘鸟巢’状。",
      "zhHint": "拇指压出锥洞",
      "stateNote": {
        "visual": "Each bun stands upright on its tapered base with smooth, slightly ridged sides.",
        "visualZh": "每个窝头可直立于收窄底座，侧面光滑带微纹。",
        "timeRef": "5–7 minutes",
        "timeRefZh": "5–7 分钟",
        "signal": "No tearing or cracking at the rim of the hollow.",
        "signalZh": "凹洞边缘无撕裂或开裂。"
      },
      "tip": "Keep palms moist — dry hands cause surface cracking.",
      "tipZh": "手掌持续微湿——干燥会导致表皮开裂。"
    },
    {
      "text": "Place shaped buns in a bamboo steamer lined with parchment or cabbage leaves. Steam over vigorously boiling water for 25 minutes on medium-high heat.",
      "textZh": "将成型窝头放入垫烘焙纸或白菜叶的竹屉中，大火烧沸水后转中大火蒸25分钟。",
      "zhHint": "竹屉蒸制",
      "stateNote": {
        "visual": "Buns swell slightly and turn golden-yellow; surface feels firm but springy.",
        "visualZh": "窝头微胀，呈金黄色；触感紧实而有弹性。",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "heat": "medium-high",
        "signal": "Steam flows steadily from lid edges; no condensation drips onto buns.",
        "signalZh": "蒸汽从盖边稳定溢出；无冷凝水滴落。"
      },
      "tip": "Use cabbage leaves instead of parchment for subtle sweetness and authentic aroma.",
      "tipZh": "用白菜叶代替烘焙纸，增添清甜与地道香气。"
    }
  ],
  "tips": [
    "Cornmeal buns taste best fresh off the steamer — reheat only in bamboo steamer, never microwave.",
    "Store unsteamed shaped buns in fridge up to 12 hours; bring to room temp before steaming.",
    "For deeper flavor, toast cornmeal in a dry pan 3 minutes before mixing."
  ],
  "tipsZh": [
    "玉米面窝头现蒸现吃最佳——仅可用竹屉复热，切勿微波。",
    "未蒸的成型窝头可冷藏保存12小时；蒸前需回温至室温。",
    "为增香，可将玉米面干锅小火焙炒3分钟后再混合。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/cornmeal-buns-homestyle.webp"
};
