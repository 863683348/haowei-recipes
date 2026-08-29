import type { Recipe } from "@/lib/types";

/** Chicken Mushroom Stew (小鸡炖蘑菇) — Seed batch */
export const chicken_mushroom_stew: Recipe = {
  "id": "xiao-ji-dun-mo-gu",
  "slug": "chicken-mushroom-stew",
  "titleEn": "Chicken Mushroom Stew",
  "titleZh": "小鸡炖蘑菇",
  "pinyin": "xiǎo jī dùn mó gū",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Heilongjiang",
  "regionZh": "黑龙江省",
  "difficulty": "medium",
  "timeMin": 120,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses free-range chicken thighs (not breast) and dried wild mushrooms rehydrated overnight — no canned mushrooms or instant broth. The broth must be clear, amber, and layered with forest notes.",
  "versionNoteZh": "家庭版用散养鸡腿（不用鸡胸）、野生干蘑需提前一夜泡发——禁用罐头菇或速溶高汤。汤色须清亮琥珀，有山林层次香。",
  "tags": [
    "one-pot",
    "mushroom",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every August, my aunt in Yichun would hike into the Greater Khingan Range with a bamboo basket. She’d return at dusk with porcini, oyster, and wood ear mushrooms — dried on our sun-baked brick roof for months. That scent of forest and sun still clings to my mother’s clay pot when she simmers this stew.",
  "storyZh": "每年八月，伊春的姑妈都挎竹篮进大兴安岭采菇。黄昏归来时，篮里装着牛肝菌、平菇和木耳——晒在我家砖房顶上数月。如今母亲砂锅里飘出的森林阳光味，仍是我最熟的乡愁。",
  "ingredients": [
    {
      "id": "ch-01",
      "nameEn": "bone-in chicken thighs",
      "nameZh": "带骨鸡大腿",
      "pinyin": "dài gǔ jī dà tuǐ",
      "amountMetric": "800 g",
      "amountUS": "1.8 lb",
      "category": "protein",
      "pantry": "local",
      "note": "Skin-on preferred. Sub: bone-in chicken legs (drumstick + thigh attached). Avoid breast — too dry.",
      "noteZh": "带皮为佳。替代：带骨鸡腿（小腿+大腿连体）。忌鸡胸——易柴。"
    },
    {
      "id": "ch-02",
      "nameEn": "dried wild mushrooms (porcini or mix)",
      "nameZh": "野生干蘑菇（牛肝菌或混合）",
      "pinyin": "yě shēng gān mó gū",
      "amountMetric": "30 g",
      "amountUS": "1 oz (about 1 cup dried)",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for 'wild foraged' label. Sub: dried shiitake (25g) + dried wood ear (5g) — soak 8 hrs in cool water.",
      "noteZh": "选标‘野生采摘’者。替代：干香菇25g + 干木耳5g，凉水泡发8小时。"
    },
    {
      "id": "ch-03",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "40 g",
      "amountUS": "3 large stalks, cut into 3-cm lengths",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "ch-04",
      "nameEn": "ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "30 g",
      "amountUS": "¼ cup, smashed",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ch-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Soak dried mushrooms in 500 ml cool water for 8 hours or overnight. Reserve soaking liquid (strain through cheesecloth). Slice mushrooms, keeping stems tender.",
      "textZh": "干蘑用500ml凉水泡发8小时或隔夜。泡发水滤渣保留（用纱布过滤）。切片，嫩茎可留。",
      "zhHint": "泡发水是精华，必留",
      "stateNote": {
        "visual": "Mushrooms are plump, elastic, and release earthy aroma",
        "visualZh": "蘑菇饱满有弹性，散发泥土清香",
        "timeRef": "8 hours",
        "timeRefZh": "8 小时",
        "signal": "Liquid turns pale amber, no grit remains",
        "signalZh": "水呈淡琥珀色，无泥沙"
      }
    },
    {
      "text": "Rinse chicken; pat dry. Heat a 4.5-L enameled Dutch oven over medium-high. Brown chicken skin-side down in batches until crisp and golden (6–7 min per batch).",
      "textZh": "鸡块洗净擦干。4.5L珐琅铸铁锅中火烧热，分批鸡皮朝下煎至酥脆金黄（每批6–7分钟）。",
      "zhHint": "分批煎，防降温",
      "stateNote": {
        "visual": "Skin blisters and curls at edges, deep golden color",
        "visualZh": "皮起泡、边微卷，呈深金色",
        "timeRef": "6–7 minutes",
        "timeRefZh": "6–7 分钟",
        "heat": "medium-high",
        "signal": "Sizzling intensifies; golden fat pools around pieces",
        "signalZh": "滋滋声变响；金黄油脂围住鸡块"
      }
    },
    {
      "text": "Remove chicken. Pour off all but 1 tbsp fat. Add ginger and scallion whites; stir-fry 1 min until fragrant.",
      "textZh": "捞出鸡块，倒掉多余油，留1汤匙；下姜片与葱白段，煸香1分钟。",
      "zhHint": "姜葱爆香，去腥增鲜",
      "stateNote": {
        "visual": "Ginger sizzles actively, releasing sharp aroma",
        "visualZh": "姜粒滋滋作响，释放辛辣香",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Steam rises in quick bursts",
        "signalZh": "蒸汽短促喷发"
      }
    },
    {
      "text": "Return chicken. Add mushrooms and reserved soaking liquid. Bring to simmer, then reduce heat to low. Cover and cook 1 hour.",
      "textZh": "鸡块回锅，加蘑菇与泡发水。烧至微沸后转最小火，盖盖焖1小时。",
      "zhHint": "泡发水全入，风味核心",
      "stateNote": {
        "visual": "Broth bubbles gently at edge, surface barely trembles",
        "visualZh": "汤边微泡，水面仅微颤",
        "timeRef": "1 hour",
        "timeRefZh": "1 小时",
        "heat": "low",
        "signal": "Mushroom aroma deepens; chicken skin softens",
        "signalZh": "菇香变醇厚；鸡皮变软"
      }
    },
    {
      "text": "Uncover. Skim surface fat. Add scallion greens. Simmer uncovered 10 more minutes to concentrate flavor. Taste and adjust with salt only — no extra soy.",
      "textZh": "揭盖，撇净浮油。下葱绿段，再煮10分钟收味。尝味，仅用盐调味——勿加额外酱油。",
      "zhHint": "最后10分钟敞盖收香",
      "stateNote": {
        "visual": "Broth reduces slightly, coats spoon lightly",
        "visualZh": "汤汁略收，能薄薄挂勺",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "Aroma becomes rich and rounded",
        "signalZh": "香气变得醇厚圆润"
      }
    }
  ],
  "tips": [
    "Never skip soaking mushrooms overnight — rushed hot-water soak makes them tough and bland.",
    "The best chicken thighs are from pasture-raised birds: look for deep orange fat and firm texture.",
    "Add a 2-cm piece of star anise (1 whole) during last 20 minutes for subtle warmth — optional but traditional in northern Heilongjiang."
  ],
  "tipsZh": [
    "干蘑绝不可用热水急泡——会变韧且失香，必须隔夜冷泡。",
    "优选散养鸡腿：脂肪呈深橙色，肉质紧实有弹性。",
    "最后20分钟可加1颗八角（2cm长），增添北疆传统暖香——非必需但地道。"
  ],
  "relatedSlugs": [
    "iron-pot-stew-goose"
  ],
  "image": "/images/recipes/chicken-mushroom-stew.webp"
};
