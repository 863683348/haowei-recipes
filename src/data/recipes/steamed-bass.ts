import type { Recipe } from '@/lib/types';

/\*\* Steamed Sea Bass (清蒸鲈鱼) (清蒸鲈鱼) — Day 15 batch \*/
export const steamed_bass: Recipe = {
  "id": "steamed-bass",
  "slug": "steamed-bass",
  "titleEn": "Steamed Sea Bass (清蒸鲈鱼)",
  "titleZh": "清蒸鲈鱼",
  "pinyin": "qīng zhēng lú yú",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong (广东)",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version: whole steamed fish with scallion oil — Cantonese technique for maximum freshness.",
  "versionNoteZh": "家庭版：整条清蒸鲈鱼淋葱油——粤式技法最大化鲜味。",
  "tags": [
    "steamed",
    "seafood",
    "cantonese",
    "healthy",
    "weeknight"
  ],
  "dietary": [
    "gluten-free"],
  "story": "Steamed sea bass is one of the most celebrated dishes in Cantonese cuisine. The philosophy is simple: the fresher the fish, the less you need to do. A whole fish is steamed until just cooked, then doused with a sizzling pour of soy sauce and hot oil infused with scallions and ginger. The result is impossibly tender white flesh with a clean, sweet sea flavor. It is a dish made for hosting guests or celebrating a special occasion — but simple enough for a Wednesday night.",
  "storyZh": "清蒸鲈鱼是粤菜中最受推崇的菜式之一。理念很简单：鱼越新鲜，越无需多作修饰。整条鱼蒸至刚熟，淋上热油激香的酱油和葱姜。结果是嫩到不可思议的白色鱼肉和清甜海味。这道菜适合请客或庆生——但简单到周中也能做。",
  "ingredients": [
    {
      "id": "sb-1",
      "nameEn": "whole sea bass, scaled and gutted",
      "nameZh": "鲈鱼（去鳞去内脏）",
      "amountMetric": "1 fish (about 500 g)",
      "amountUS": "1 fish (about 1.1 lbs)",
      "category": "protein",
      "pantry": "local",
      "termKey": "sea-bass"
    },
    {
      "id": "sb-2",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sb-3",
      "nameEn": "scallions, cut into 5 cm strips",
      "nameZh": "小葱段",
      "amountMetric": "4 stalks",
      "amountUS": "4 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sb-4",
      "nameEn": "ginger, sliced into rounds",
      "nameZh": "姜片",
      "amountMetric": "4 slices",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "sb-5",
      "nameEn": "neutral oil (canola or vegetable)",
      "nameZh": "食用油",
      "amountMetric": "3 tbsp",
      "amountUS": "3 tbsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "sb-6",
      "nameEn": "shaoxing wine",
      "nameZh": "料酒",
      "amountMetric": "1 tbsp",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sb-7",
      "nameEn": "sugar",
      "nameZh": "糖",
      "amountMetric": "1/2 tsp",
      "amountUS": "1/2 tsp",
      "category": "asian-pantry",
      "pantry": "local"
    },
    {
      "id": "sb-8",
      "nameEn": "cooked white rice (for serving)",
      "nameZh": "白米饭（配饭）",
      "amountMetric": "2 bowls",
      "amountUS": "2 bowls",
      "category": "staple",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Pat the fish completely dry with paper towels. Score both sides deeply: make 3 diagonal cuts (about 2 cm deep) on each side, stopping at the bone. Rub the cavity and cuts with Shaoxing wine and a pinch of salt. Stuff the cavity with half the ginger slices and scallion whites. Let rest 10 minutes.",
      "textZh": "用厨房纸将鱼彻底擦干。两面各斜切3刀（深约2cm，至骨）。 cavity 和切口抹料酒和少许盐。 cavity 塞入一半姜片和葱白，静置10分钟。",
      "stateNote": {
        "visual": "Fish skin dry and taut, cuts open to reveal white flesh",
        "visualZh": "鱼皮干爽紧致，切口露出白色鱼肉",
        "signal": "Wine aroma when rubbing cavity"
      }
    },
    {
      "text": "Bring a large pot of water to a rolling boil. Place a heatproof plate or steamer rack in the steamer. Lay the fish on the plate, on top of remaining ginger slices. Cover and steam on high heat for 8 minutes.",
      "textZh": "大锅水烧开。蒸架上放耐热盘，鱼置于盘中姜片上。盖锅盖，大火蒸8分钟。",
      "stateNote": {
        "visual": "Fish flesh turns opaque white around the cuts",
        "visualZh": "切口处鱼肉变白 opaque",
        "signal": "8 minutes for a 500g fish — do not oversteam"
      }
    },
    {
      "text": "Carefully remove the plate. Discard the cooked ginger and scallions from inside. Pour off any steaming liquid from the plate (this liquid can be fishy). Arrange fresh scallion strips and ginger rounds on top of the fish.",
      "textZh": "小心取出蒸盘，倒掉盘中蒸出的水（会有腥味）。撤去旧的葱姜，放上新的葱丝和姜片。",
      "stateNote": {
        "visual": "Fish is cooked through, flesh flakes easily at the thickest point",
        "visualZh": "鱼全熟，最厚处鱼肉能轻松剥落",
        "signal": "Fork inserts into thickest part with zero resistance"
      }
    },
    {
      "text": "Heat neutral oil in a small pan until it just starts to shimmer and smoke (about 2 minutes on high). In a small bowl, mix soy sauce with sugar and a splash of hot water.",
      "textZh": "小锅中加热食用油至微微冒烟（大火约2分钟）。小碗中生抽加糖和少许热水调匀。",
      "stateNote": {
        "visual": "Oil surface shimmers, faint wisp of smoke rises",
        "visualZh": "油面起波纹，微微冒烟",
        "signal": "Oil is hot enough to sizzle when scallion touches it"
      }
    },
    {
      "text": "Pour the hot oil directly over the scallions and ginger on the fish — it will sizzle loudly, releasing the aromatics. Immediately drizzle the soy sauce mixture around (not directly on) the fish. Serve immediately with steamed rice.",
      "textZh": "热油直接淋在鱼上葱姜上——会大声嘶嘶作响，释放香气。酱油汁沿鱼身淋入（不要直接浇鱼）。立刻配米饭上桌。",
      "stateNote": {
        "visual": "Oil sizzles on scallions, soy sauce pools in the plate, fish gleams",
        "visualZh": "热油在葱上嘶嘶作响，酱油在盘底，鱼身油亮",
        "signal": "Aromatic steam rises with ginger and scallion scent"
      }
    }
  ],
  "tips": [
    "The fish must be fresh — ask your fishmonger to scale and gut it. Frozen fish will not work for this recipe.",
    "Always pour off the steaming liquid before adding the hot oil — that liquid is the source of any fishy taste.",
    "The sizzling oil step is non-negotiable — it releases the aromatics from the scallions and ginger.",
    "2 minutes of high-heat oil is the sweet spot: hot enough to sizzle, not so hot the scallions burn."
  ],
  "tipsZh": [
    "鱼必须新鲜——让鱼贩去鳞去内脏。冷冻鱼不适合此菜谱。",
    "淋热油前务必倒掉蒸鱼出的水——那是腥味的来源。",
    "热油激香这一步不能省——它释放葱姜香气。",
    "大火热油2分钟是最佳状态：够热滋啦作响，又不至于把葱炸焦。"
  ],
  "relatedSlugs": [
    "shrimp-steamed-egg",
    "minced-pork-steamed-egg",
    "egg-drop-soup"
  ],
  "image": "/images/recipes/steamed-bass.webp"
};
