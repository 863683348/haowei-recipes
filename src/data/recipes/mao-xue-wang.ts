import type { Recipe } from "@/lib/types";

/** Mao Xue Wang (Chongqing Blood & Offal Stew) (毛血旺) — Day batch */
export const mao_xue_wang: Recipe = {
  "id": "mao-xue-wang",
  "slug": "mao-xue-wang",
  "titleEn": "Mao Xue Wang (Chongqing Blood & Offal Stew)",
  "titleZh": "毛血旺",
  "pinyin": "máo xuè wàng",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chongqing",
  "regionZh": "重庆",
  "difficulty": "hard",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version uses a lighter chilli-oil finish and everyday cuts (luncheon meat, bean sprouts, wood ear); restaurant versions load a full offal set — tripe, aorta, throat — and finish with a cup of scalding chilli oil poured over raw garlic and peppercorns.",
  "versionNoteZh": "家常版红油量减半、用料走日常（午餐肉、豆芽、木耳）；餐馆版配齐毛肚、黄喉、鸭肠，最后还要浇一勺滚烫红油激在生蒜末与花椒上。",
  "tags": [
    
    "weekend-project",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "Mao Xue Wang was born in the wharf district of Chongqing, where boatmen wanted something cheap, filling and violently spicy. 'Mao' refers to the rough, rustic style; 'xue wang' is the blood curd that anchors the bowl. It is less a recipe than a method: build a fierce broth, then poach whatever you have in order of cooking time.",
  "storyZh": "毛血旺诞生于重庆码头——船工要的是便宜、顶饱、够猛的辣。「毛」是粗犷家常之意，「血旺」则是定碗的鸭血。它与其说是菜谱，不如说是方法：先熬一锅凶猛的红汤，再按成熟先后依次下料。",
  "ingredients": [
    {
      "id": "mxw-1",
      "nameEn": "duck blood curd",
      "nameZh": "鸭血",
      "pinyin": "yā xuè",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "asian",
      "note": "Sold vacuum-packed in Asian supermarkets. Handle gently or it crumbles.",
      "noteZh": "亚洲超市有真空装；翻动要轻，否则易碎。",
      "termKey": "duck-blood"
    },
    {
      "id": "mxw-2",
      "nameEn": "luncheon meat (or cooked ham)",
      "nameZh": "午餐肉",
      "pinyin": "wǔ cān ròu",
      "amountMetric": "150 g",
      "amountUS": "5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Slice 5 mm thick — it should hold its shape in the broth.",
      "noteZh": "切 5 毫米厚，在汤中要能保持形状。"
    },
    {
      "id": "mxw-3",
      "nameEn": "bean sprouts",
      "nameZh": "黄豆芽",
      "pinyin": "huáng dòu yá",
      "amountMetric": "200 g",
      "amountUS": "3 cups",
      "category": "produce",
      "pantry": "local",
      "note": "Traditional base layer; pinch off the tails if you like.",
      "noteZh": "传统垫底菜；讲究可掐去芽尾。"
    },
    {
      "id": "mxw-4",
      "nameEn": "dried wood ear mushrooms",
      "nameZh": "干木耳",
      "pinyin": "gān mù ěr",
      "amountMetric": "15 g",
      "amountUS": "1/2 cup dried",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak 30 minutes in warm water; they expand roughly 6×.",
      "noteZh": "温水泡 30 分钟，体积约涨 6 倍。",
      "termKey": "wood-ear"
    },
    {
      "id": "mxw-5",
      "nameEn": "wide sweet-potato vermicelli",
      "nameZh": "宽红薯粉",
      "pinyin": "kuān hóng shǔ fěn",
      "amountMetric": "60 g",
      "amountUS": "1 small bundle",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak 20 minutes until pliable; it thickens as it cooks.",
      "noteZh": "泡 20 分钟至可弯；煮后会继续吸水变稠。",
      "termKey": "vermicelli"
    },
    {
      "id": "mxw-6",
      "nameEn": "doubanjiang (fermented chilli bean paste)",
      "nameZh": "郫县豆瓣酱",
      "pinyin": "pí xiàn dòu bàn jiàng",
      "amountMetric": "40 g",
      "amountUS": "2 1/2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Mince it finely before frying; whole beans burn before they release flavour.",
      "noteZh": "下锅前剁细；整粒豆瓣还没出味就先糊。",
      "termKey": "doubanjiang"
    },
    {
      "id": "mxw-7",
      "nameEn": "dried red chilies",
      "nameZh": "干红辣椒",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "12 g",
      "amountUS": "15–18 chilies",
      "category": "spice",
      "pantry": "asian",
      "termKey": "dried-chilies"
    },
    {
      "id": "mxw-8",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "4 g",
      "amountUS": "2 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "mxw-9",
      "nameEn": "chilli oil (with sediment)",
      "nameZh": "红油辣子（带渣）",
      "pinyin": "hóng yóu là zi",
      "amountMetric": "60 ml",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chili-oil"
    },
    {
      "id": "mxw-10",
      "nameEn": "garlic",
      "nameZh": "大蒜",
      "pinyin": "dà suàn",
      "amountMetric": "20 g",
      "amountUS": "4 cloves",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "mxw-11",
      "nameEn": "beef or chicken stock",
      "nameZh": "牛肉汤/鸡汤",
      "pinyin": "niú ròu tāng",
      "amountMetric": "800 ml",
      "amountUS": "3 1/3 cups",
      "category": "other",
      "pantry": "local",
      "note": "A rich stock matters: this dish is mostly broth.",
      "noteZh": "汤底要浓——这道菜大半是汤。"
    },
    {
      "id": "mxw-12",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Prep everything first: soak wood ear 30 minutes and vermicelli 20 minutes; cut blood curd into 2 cm cubes; slice luncheon meat 5 mm thick; mince garlic and chilies.",
      "textZh": "先备料：木耳泡 30 分钟、宽粉泡 20 分钟；鸭血切 2 厘米方块；午餐肉切 5 毫米厚片；蒜与辣椒切碎。",
      "zhHint": "先备齐料，下锅才不乱",
      "stateNote": {
        "visual": "Wood ear is fully expanded and jelly-like; vermicelli bends without snapping.",
        "visualZh": "木耳完全涨发呈胶质状；宽粉可弯不断。",
        "timeRef": "30 minutes (overlapping)",
        "timeRefZh": "30 分钟（可并行）",
        "signal": "A wood ear cap feels slippery and springs back when squeezed.",
        "signalZh": "木耳捏之滑韧、松手回弹。"
      }
    },
    {
      "text": "Blanch bean sprouts in boiling water 60 seconds, drain, and spread in the bottom of a deep serving bowl. This is the base layer.",
      "textZh": "黄豆芽沸水焯 60 秒捞出沥干，铺在深碗底部作垫底。",
      "zhHint": "豆芽垫底，去生保脆",
      "stateNote": {
        "visual": "Sprouts turn translucent and smell clean, no raw bean aroma.",
        "visualZh": "豆芽转半透明、无生豆味。",
        "timeRef": "60 seconds",
        "timeRefZh": "60 秒",
        "heat": "high",
        "signal": "Sprouts bend easily but still snap with a faint crack.",
        "signalZh": "豆芽易弯但折断仍有脆声。"
      }
    },
    {
      "text": "Heat 30 ml oil in a wok over medium-low. Add minced doubanjiang, dried chilies, garlic and Sichuan peppercorns. Fry 2 minutes, stirring, until the oil turns deep red and smells toasty.",
      "textZh": "锅中火转小放 30 毫升油，下剁细豆瓣酱、干辣椒、蒜末与花椒；煸 2 分钟至油色深红、香气焦香。",
      "zhHint": "小火慢煸，油红才到位",
      "stateNote": {
        "visual": "Oil takes on a clear crimson tint and separates from the paste; no scorched specks.",
        "visualZh": "油色转为清亮深红并与酱分离，无焦糊黑点。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "A sharp, roasted chilli-and-bean aroma rises — not a burnt one.",
        "signalZh": "升起浓烈煳辣酱香，而非焦苦味。"
      }
    },
    {
      "text": "Pour in the stock, bring to a boil, and season with salt to taste. Simmer 5 minutes so the spice infuses, then strain out the spent solids if you prefer a cleaner broth.",
      "textZh": "倒入高汤烧开，加盐调味，小火煮 5 分钟让香辣味渗入；喜欢汤清可滤掉渣滓。",
      "zhHint": "煮 5 分钟入味，可滤渣",
      "stateNote": {
        "visual": "Broth is opaque red-orange with a shimmer of chilli oil on top.",
        "visualZh": "汤呈不透明红橙色，表面浮红油光。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "medium",
        "signal": "A spoonful tastes spicy, numbing and rounded — not harsh.",
        "signalZh": "舀一勺尝：辣、麻、圆润，不刺喉。"
      }
    },
    {
      "text": "Cook in order of doneness: wood ear and luncheon meat first (3 minutes), then blood curd (2 minutes), then vermicelli (2 minutes). Keep the broth at a bare simmer — a hard boil shatters the curd.",
      "textZh": "按易熟程度依次下锅：木耳与午餐肉先煮 3 分钟，再下鸭血 2 分钟，最后宽粉 2 分钟；全程保持微沸——大滚会把血旺冲碎。",
      "zhHint": "微沸下料，顺序别乱",
      "stateNote": {
        "visual": "Blood curd turns from dark maroon to a firm, even chocolate colour; edges stay square.",
        "visualZh": "鸭血由暗紫转均匀扎实的深褐色，棱角完整不碎。",
        "timeRef": "7 minutes total",
        "timeRefZh": "共 7 分钟",
        "heat": "medium-low",
        "signal": "Small lazy bubbles break the surface; no rolling boil.",
        "signalZh": "汤面只冒细密小泡，不翻大滚。"
      }
    },
    {
      "text": "Pour everything over the sprouts in the serving bowl. Scatter raw minced garlic and Sichuan peppercorns on top, then pour 60 ml very hot chilli oil over them to sizzle. Garnish with scallion.",
      "textZh": "连汤带料浇入铺好豆芽的碗中；面上撒生蒜末与花椒，再淋入 60 毫升滚烫红油激出滋响，最后撒葱花。",
      "zhHint": "滚油激香，最后一步",
      "stateNote": {
        "visual": "Oil hits and instantly foams; garlic turns just golden, not brown.",
        "visualZh": "热油落下瞬间起泡，蒜末刚转金而不焦。",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "heat": "high",
        "signal": "A loud, sharp sizzle lasting 3–4 seconds, then a burst of numbing aroma.",
        "signalZh": "响起 3–4 秒的清脆滋声，随即爆出麻香。"
      }
    }
  ],
  "tips": [
    "Keep the broth at a bare simmer once the blood curd goes in — a rolling boil breaks it into gravel.",
    "Mince the doubanjiang; whole fermented beans scorch before they give up their flavour.",
    "The final hot-oil pour is not decoration — it is what separates restaurant mao xue wang from stewed offal."
  ],
  "tipsZh": [
    "鸭血下锅后务必保持微沸——大滚会把它冲成碎渣。",
    "豆瓣酱必须剁细；整粒豆瓣还没出香就先焦。",
    "最后那勺热油不是摆设——正是它把餐馆毛血旺和家常炖杂碎区分开。"
  ],
  "relatedSlugs": [
    "chongqing-mala-xiang-guo",
    "shui-zhu-beef",
    "mala-dry-pot"
  ],
  "image": "/images/recipes/chongqing-mala-xiang-guo.webp"
};
