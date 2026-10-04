import type { Recipe } from "@/lib/types";

/** Smashed Peppers Hunan-Style with Centuries Egg (擂辣椒) (擂辣椒) — Day batch */
export const smashed_peppers_lei_la_jiao: Recipe = {
  "id": "smashed-peppers-lei-la-jiao",
  "slug": "smashed-peppers-lei-la-jiao",
  "titleEn": "Smashed Peppers Hunan-Style with Centuries Egg (擂辣椒)",
  "titleZh": "擂辣椒",
  "pinyin": "lei la jiao",
  "cuisine": "湘菜",
  "cuisineEn": "Hunan",
  "region": "Hunan (湖南)",
  "regionZh": "湖南",
  "difficulty": "easy",
  "timeMin": 25,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version char the peppers in a dry wok and pound them in a mortar. Restaurants deep-fry the peppers for a softer skin, then machine-blitz — faster, but the texture goes flat.",
  "versionNoteZh": "家庭版：干锅干煸出虎皮，再放擂钵里舂。餐厅版直接油炸让皮变软，再用机器打碎——快，但口感发死。",
  "tags": [
    "hunan",
    "spicy",
    "vegetarian",
    "cold-dish",
    "rice-pairing"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Lei la jiao — literally 'pounded chili' — is Hunan's most honest dish. Peppers are dry-roasted until blistered, then smashed in a stone mortar with garlic and salt until they collapse into a jammy, smoky paste. Every Hunan family has an opinion about how coarse it should be. My grandfather insisted on visible chunks and refused to eat anything that looked pureed.",
  "storyZh": "擂辣椒是湖南最实在的一道菜。辣椒干煸到起虎皮，再放进石擂钵里加大蒜、盐舂到塌软成酱。每个湖南家庭对「该多粗」都有自己的坚持。我外公坚持要看得见块，打成泥的他一口不吃。",
  "ingredients": [
    {
      "id": "llj-1",
      "nameEn": "long green chilies or anaheim peppers",
      "nameZh": "长青椒 / 螺丝椒",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "llj-2",
      "nameEn": "garlic cloves",
      "nameZh": "大蒜",
      "amountMetric": "4 cloves",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "llj-3",
      "nameEn": "century egg (preserved duck egg)",
      "nameZh": "皮蛋",
      "amountMetric": "1 piece",
      "amountUS": "1 piece",
      "category": "protein",
      "pantry": "asian",
      "termKey": "preserved-egg"
    },
    {
      "id": "llj-4",
      "nameEn": "fermented black soybeans (douchi), rinsed",
      "nameZh": "豆豉（冲洗）",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "douchi"
    },
    {
      "id": "llj-5",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "llj-6",
      "nameEn": "chinkiang vinegar",
      "nameZh": "镇江香醋",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    },
    {
      "id": "llj-7",
      "nameEn": "sesame oil",
      "nameZh": "香油",
      "amountMetric": "1 tsp",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "llj-8",
      "nameEn": "salt",
      "nameZh": "盐",
      "amountMetric": "1/4 tsp",
      "amountUS": "1/4 tsp",
      "category": "western-pantry",
      "pantry": "local",
      "termKey": "tsp"
    }
  ],
  "steps": [
    {
      "text": "Wash the peppers and dry them completely. Any surface water will steam them instead of charring them.",
      "textZh": "辣椒洗净并彻底擦干。表面有水会变成蒸而不是煸。",
      "stateNote": {
        "visual": "skin completely dry",
        "signal": "prep complete",
        "timeRef": "2 min"
      }
    },
    {
      "text": "Heat a dry wok or cast-iron skillet over medium heat with no oil. Lay the peppers flat and press down with a spatula, turning every 2 minutes, until the skins blister and slump.",
      "textZh": "干锅或铸铁锅中小火烧热（不放油），辣椒平铺，用锅铲压住，每 2 分钟翻面，煸到表皮起泡塌陷。",
      "stateNote": {
        "visual": "skin blistered with charred patches, pepper softened and flattened",
        "signal": "peppers collapse under the spatula",
        "timeRef": "8-10 min",
        "heat": "medium"
      }
    },
    {
      "text": "Meanwhile, drop the whole garlic cloves into the dry pan alongside the peppers and roast until the skins blacken in spots and the cloves soften.",
      "textZh": "同时把整瓣大蒜丢进锅里一起干煸，煸到外皮带焦斑、蒜瓣变软。",
      "stateNote": {
        "visual": "garlic skins speckled black, cloves yielding",
        "signal": "roasted garlic aroma",
        "timeRef": "5-6 min",
        "heat": "medium"
      }
    },
    {
      "text": "Transfer the peppers and garlic to a mortar. Add salt and douchi, then pound with the pestle until the peppers break into coarse shreds with visible chunks — do not overwork into a puree.",
      "textZh": "辣椒和大蒜移入擂钵，加盐和豆豉，用擂棍舂到辣椒裂成粗条、仍有明显块状——别舂成泥。",
      "stateNote": {
        "visual": "coarse jammy texture with visible pieces",
        "signal": "peppers release liquid",
        "timeRef": "2-3 min"
      }
    },
    {
      "text": "Peel the century egg and cut into wedges. Fold the wedges through the pepper mixture gently with a spoon so they stay intact.",
      "textZh": "皮蛋去壳切瓣，用勺子轻轻拌入辣椒中，保持皮蛋完整。",
      "stateNote": {
        "visual": "dark glossy egg wedges against green pepper",
        "signal": "prep complete",
        "timeRef": "1 min"
      }
    },
    {
      "text": "Add light soy sauce, chinkiang vinegar and sesame oil. Toss once more, then let it sit for 5 minutes at room temperature before serving with plain rice.",
      "textZh": "加入生抽、镇江香醋和香油，再拌一次，室温静置 5 分钟后配白米饭上桌。",
      "stateNote": {
        "visual": "glossy, slightly saucy",
        "signal": "flavours melded",
        "timeRef": "5 min"
      }
    }
  ],
  "tips": [
    "Choose thin-walled long peppers. Thick bell peppers will not char properly.",
    "Dry-roast in a completely dry pan — oil prevents the blistering that gives the dish its smoky flavour.",
    "Leave chunks. The point of a mortar is texture, not smoothness.",
    "Serve at room temperature, not cold from the fridge — cold kills the aroma."
  ],
  "tipsZh": [
    "选薄皮长椒。厚肉甜椒煸不出虎皮。",
    "必须完全无油干煸——有油就起不了虎皮，也就没了烟熏味。",
    "要留块状。用擂钵是为了口感，不是为了细腻。",
    "室温食用，别从冰箱拿出来就吃，低温会压住香气。"
  ],
  "relatedSlugs": [
    "tiger-skin-chili",
    "chilli-pork",
    "garlic-steamed-eggplant",
    "cold-wood-ear"
  ],
  "image": "/images/recipes/chilli-pork.webp"
};
