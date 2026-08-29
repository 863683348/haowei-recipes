import type { Recipe } from "@/lib/types";

/** Hand-Beaten Shrimp Paste (Shǒu Dǎ Xiā Huá) (手打虾滑) — Seed batch */
export const hand_beaten_shrimp_paste: Recipe = {
  "id": "shou-da-xia-hua",
  "slug": "hand-beaten-shrimp-paste",
  "titleEn": "Hand-Beaten Shrimp Paste (Shǒu Dǎ Xiā Huá)",
  "titleZh": "手打虾滑",
  "pinyin": "shou da xia hua",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Shanghai",
  "regionZh": "上海",
  "difficulty": "medium",
  "timeMin": 35,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses no binders like egg white or starch—just pure shrimp, salt, and a little Shaoxing wine for brightness. Restaurant versions often add cornstarch for bounce; we skip it for cleaner texture.",
  "versionNoteZh": "家常版不加蛋清或淀粉，仅用鲜虾、盐和少许绍兴酒提鲜；餐馆版常加玉米淀粉增弹，我们舍弃以保本味。",
  "tags": [
    "30-min",
    "weeknight",
    "hot-pot-sides"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Yangpu District made this every Lunar New Year Eve—she’d sit at the kitchen table with a wooden mortar, pounding fresh river shrimp until her arms ached, saying 'If you don’t feel the stickiness in your palms, it’s not ready.' I still use her chipped bamboo scraper to shape the paste into smooth ovals.",
  "storyZh": "我杨浦区的姑妈每年除夕夜都做这个——她坐在厨房桌边，用木臼捶打新鲜河虾，直到手臂酸痛，说‘手掌不发黏，就不算好。’我现在还用她那把豁了口的竹刮板把虾滑刮成光滑椭圆。",
  "ingredients": [
    {
      "id": "sd-01",
      "nameEn": "fresh shrimp, peeled and deveined",
      "nameZh": "鲜虾仁（去壳去线）",
      "pinyin": "xian xia ren",
      "amountMetric": "300 g",
      "amountUS": "1 ¼ cups (packed)",
      "category": "protein",
      "pantry": "local",
      "note": "Use cold, firm shrimp—avoid pre-frozen mushy ones. If only frozen available, thaw fully and pat dry.",
      "noteZh": "选冷鲜、紧实虾仁；避用反复冻融变软者。若仅得冷冻虾，需彻底解冻并吸干水分。"
    },
    {
      "id": "sd-02",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "pinyin": "xi hai yan",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Do not substitute iodized table salt—it dulls flavor.",
      "noteZh": "勿用加碘精制盐，风味会变钝。"
    },
    {
      "id": "sd-03",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shao xing jiu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute dry sherry if unavailable.",
      "noteZh": "无绍兴酒可用干雪利酒替代。",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sd-04",
      "nameEn": "white pepper powder",
      "nameZh": "白胡椒粉",
      "pinyin": "bai hu jiao fen",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Freshly ground preferred; pre-ground loses aroma fast.",
      "noteZh": "现磨最佳；市售粉香气易散失。",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Chill shrimp and a stainless steel bowl in freezer for 10 minutes. Cold temperature prevents protein breakdown during pounding.",
      "textZh": "将虾仁与不锈钢碗一同放入冰箱冷冻室冷藏10分钟。低温可防止捶打时蛋白质过度分解。",
      "zhHint": "提前预冷",
      "stateNote": {
        "visual": "Shrimp look pale pink and slightly stiff; bowl feels icy to touch.",
        "visualZh": "虾仁呈淡粉色、略显僵硬；碗壁摸起来刺骨冰凉。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "Bowl surface beads condensation but no frost forms.",
        "signalZh": "碗外壁凝结水珠，但无霜层。"
      }
    },
    {
      "text": "Place chilled shrimp in the cold bowl. Using the flat side of a cleaver or heavy knife, begin pounding rhythmically—lift high, strike firmly, fold shrimp over, repeat.",
      "textZh": "将冷藏虾仁倒入冷碗中。用刀背（或厚实厨刀平刃）有节奏捶打：高抬、重落、翻拌、再捶。",
      "zhHint": "刀背捶打",
      "stateNote": {
        "visual": "Shrimp break into coarse pulp after 2 minutes, then gradually turn glossy and sticky.",
        "visualZh": "2分钟后虾呈粗颗粒状，继续捶打渐转油亮、粘手。",
        "timeRef": "5–7 minutes",
        "timeRefZh": "5–7 分钟",
        "signal": "Paste clings to knife and pulls away cleanly from bowl sides.",
        "signalZh": "虾泥粘刀，并能从碗壁整片剥离。"
      }
    },
    {
      "text": "Add salt, Shaoxing wine, and white pepper. Continue pounding another 2 minutes until mixture is elastic and stringy when stretched between fingers.",
      "textZh": "加入盐、绍兴酒和白胡椒粉，再捶打2分钟，至虾泥拉丝、有弹性。",
      "zhHint": "加料续捶",
      "stateNote": {
        "visual": "Mixture glistens, holds shape when scooped, and forms thin strands when pinched.",
        "visualZh": "虾泥泛光、成团不塌，指间拉出细韧长丝。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No graininess remains; paste feels cool and springy.",
        "signalZh": "无颗粒感；触感冰凉、富有回弹。"
      }
    },
    {
      "text": "Cover tightly and refrigerate 20 minutes. This firms the paste and improves cohesion for hot pot cooking.",
      "textZh": "盖严实后冷藏20分钟。此步使虾滑定型，更耐涮煮。",
      "zhHint": "冷藏定型",
      "stateNote": {
        "visual": "Surface looks matte and slightly taut, not wet or weeping.",
        "visualZh": "表面哑光微绷，无渗水或湿黏。",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "signal": "Paste holds clean scoop without sagging.",
        "signalZh": "勺取时形状完整、不塌陷。"
      }
    },
    {
      "text": "Using two spoons or a damp hand, shape into 2-cm ovals. Drop gently into simmering hot pot broth—do not stir. Cook 1.5–2 minutes until opaque and buoyant.",
      "textZh": "用两把汤匙或沾湿的手搓成2厘米椭圆小丸。轻放滚烫火锅汤中，勿搅动。煮1.5–2分钟至全白浮起即熟。",
      "zhHint": "轻放勿搅",
      "stateNote": {
        "visual": "Shrimp balls turn uniformly pale pink-white and float steadily.",
        "visualZh": "虾丸整体呈均匀淡粉白色，稳稳浮于汤面。",
        "timeRef": "1.5–2 minutes",
        "timeRefZh": "1.5–2 分钟",
        "heat": "medium-high",
        "signal": "No gray translucency remains at center; edges curl slightly.",
        "signalZh": "中心无灰白半透明；边缘微微卷起。"
      }
    }
  ],
  "tips": [
    "For best texture, use shrimp with high myosin content: tiger prawns or large white shrimp work best.",
    "Never use a food processor—it overheats and makes gluey paste.",
    "Leftover shrimp paste keeps 2 days refrigerated or 1 month frozen (shape before freezing)."
  ],
  "tipsZh": [
    "优选高肌球蛋白虾：斑节对虾或大白虾口感最佳。",
    "切忌用料理机——高速产热易致虾滑发黏。",
    "余下虾滑冷藏可存2天，冷冻可存1个月（建议先搓丸再冻）。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/hand-beaten-shrimp-paste.webp"
};
