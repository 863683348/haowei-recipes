import type { Recipe } from "@/lib/types";

/** Grilled Eggplant with Garlic Sauce (烤茄子) — Seed batch */
export const grilled_eggplant_with_garlic_sauce: Recipe = {
  "id": "kao-qie-zi",
  "slug": "grilled-eggplant-with-garlic-sauce",
  "titleEn": "Grilled Eggplant with Garlic Sauce",
  "titleZh": "烤茄子",
  "pinyin": "kao qie zi",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Xi'an",
  "regionZh": "西安",
  "difficulty": "easy",
  "timeMin": 30,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version roasts whole eggplants until collapsed and smoky, then mashes with raw garlic, vinegar, and chili oil—no frying, no meat, just pure umami depth.",
  "versionNoteZh": "家常版整茄烤至塌软带烟熏香，拌入生蒜、醋、辣油——不炸、不加肉，纯素浓香。",
  "tags": [
    "30-min",
    "vegetarian",
    "comfort"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Every summer in Xi’an’s Beilin District, my grandmother grilled long purple eggplants over charcoal briquettes in her courtyard. She’d mash them with crushed garlic and black vinegar while still steaming, saying, 'The heat wakes up the garlic’s soul.' We ate it with millet porridge and pickled radish.",
  "storyZh": "每年夏天，西安碑林区的外婆都在院中炭火上烤长紫茄。趁热捣碎拌蒜末和陈醋，说：‘热气唤醒蒜的灵魂。’配小米粥和萝卜干同食。",
  "ingredients": [
    {
      "id": "eg-01",
      "nameEn": "Asian long eggplant",
      "nameZh": "长条紫茄",
      "pinyin": "chang tiao zi qie",
      "amountMetric": "400 g",
      "amountUS": "2 medium (14 oz)",
      "category": "produce",
      "pantry": "local",
      "note": "Choose firm, glossy, heavy-for-size eggplants; Japanese or Chinese varieties preferred.",
      "noteZh": "选紧实油亮、手感沉甸的茄子；优选日式或中式长茄。"
    },
    {
      "id": "eg-02",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "da suan",
      "amountMetric": "20 g",
      "amountUS": "4 cloves, finely minced",
      "category": "produce",
      "pantry": "local",
      "note": "Do not cook garlic—it must stay raw for pungent bite.",
      "noteZh": "蒜不可加热，需生用以保辛辣冲劲。",
      "termKey": "garlic"
    },
    {
      "id": "eg-03",
      "nameEn": "Chinese black vinegar",
      "nameZh": "镇江香醋",
      "pinyin": "zhen jiang xiang cu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute balsamic if unavailable—but true black vinegar has deeper malt notes.",
      "noteZh": "无镇江香醋可用意大利黑醋替代，但风味层次略浅。",
      "termKey": "chinese-black-vinegar"
    },
    {
      "id": "eg-04",
      "nameEn": "chili oil",
      "nameZh": "辣椒油",
      "pinyin": "la jiao you",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Use store-bought chili oil with sediment; shake well before measuring.",
      "noteZh": "选带红油渣的市售辣椒油，使用前摇匀。"
    }
  ],
  "steps": [
    {
      "text": "Prick eggplants all over with a fork. Place directly on oven rack or grill grate over medium coals. Roast 25–30 minutes, turning every 8 minutes, until completely collapsed, charred in spots, and yielding to gentle squeeze.",
      "textZh": "茄子全身叉孔。直接置于烤架或炭火上，中火烤25–30分钟，每8分钟翻面，至全软塌陷、局部焦黑、轻捏即凹。",
      "zhHint": "叉孔+翻面+按压验熟",
      "stateNote": {
        "visual": "Skin wrinkles deeply and peels slightly at stem end; flesh oozes dark juice when pressed.",
        "visualZh": "表皮深皱，蒂部微裂；轻压渗出深色汁液。",
        "timeRef": "25–30 minutes",
        "timeRefZh": "25–30 分钟",
        "heat": "medium",
        "signal": "Eggplant collapses inward with no resistance when squeezed.",
        "signalZh": "轻捏即向内塌陷，毫无阻力。"
      }
    },
    {
      "text": "Let cool 5 minutes. Slit lengthwise and scoop flesh into a bowl, discarding skin and stem. Mash with a fork until mostly smooth but with some texture.",
      "textZh": "静置5分钟。纵切剖开，刮出茄肉入碗，弃皮弃蒂。用叉子压成泥，保留少许颗粒感。",
      "zhHint": "凉透刮肉+粗压",
      "stateNote": {
        "visual": "Flesh is deep purple-brown, glossy, and holds together loosely when stirred.",
        "visualZh": "茄泥呈深紫褐色，油润，搅动时松散聚拢。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "Steam rises steadily but no longer forcefully.",
        "signalZh": "白汽稳定升腾，不再猛烈喷发。"
      }
    },
    {
      "text": "Add minced garlic, black vinegar, chili oil, and 1/4 tsp salt. Stir gently 30 seconds to combine—do not overmix.",
      "textZh": "加入蒜末、香醋、辣椒油和1/4茶匙盐，轻拌30秒至融合，忌过度搅拌。",
      "zhHint": "轻拌30秒",
      "stateNote": {
        "visual": "Mixture turns glossy purple with visible flecks of raw garlic.",
        "visualZh": "茄泥泛紫光，嵌着生蒜碎粒。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Aromatic pungency becomes sharp and immediate upon stirring.",
        "signalZh": "搅拌即刻散发强烈辛香。"
      }
    },
    {
      "text": "Rest at room temperature 10 minutes to let flavors meld. The garlic bite will mellow slightly, and vinegar acidity will brighten.",
      "textZh": "室温静置10分钟使风味融合——蒜辣稍柔，醋酸更爽利。",
      "zhHint": "静置融味",
      "stateNote": {
        "visual": "Surface develops a thin, reflective sheen from oil rising.",
        "visualZh": "表面浮起薄而透亮的油光。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Aroma shifts from raw pungency to balanced savory-sour.",
        "signalZh": "气味由生辣转为咸鲜酸香平衡。"
      }
    },
    {
      "text": "Transfer to serving dish. Garnish with extra scallion greens and a drizzle of chili oil. Serve at room temperature with steamed rice or as a side.",
      "textZh": "装盘，撒葱绿，淋少许辣椒油。室温食用，配白米饭或作凉菜。",
      "zhHint": "葱绿+辣油+室温",
      "stateNote": {
        "visual": "Chili oil pools in glossy crimson beads on purple surface.",
        "visualZh": "辣椒油凝成紫底上的油润红珠。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "Aroma intensifies again upon plating—warm and layered.",
        "signalZh": "装盘后香气再度升腾，温暖而有层次。"
      }
    }
  ],
  "tips": [
    "For smokier flavor, roast over gas flame on stovetop instead of oven.",
    "Add 1 tsp toasted sesame seeds for nutty crunch.",
    "Leftovers keep 2 days refrigerated—stir well before re-serving."
  ],
  "tipsZh": [
    "追求烟熏味，可用燃气灶明火烤代替烤箱。",
    "加1茶匙焙香芝麻增香脆感。",
    "冷藏保存2天，复食前充分搅匀。"
  ],
  "relatedSlugs": [
    "tin-foil-grilled-fish",
    "sizzling-iron-plate-squid"
  ],
  "image": "/images/recipes/grilled-eggplant-with-garlic-sauce.webp"
};
