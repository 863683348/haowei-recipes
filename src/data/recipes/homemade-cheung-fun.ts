import type { Recipe } from "@/lib/types";

/** Homemade Cheung Fun (Rice Noodle Rolls) (肠粉) — Seed batch */
export const homemade_cheung_fun: Recipe = {
  "id": "cheung-fun-homestyle",
  "slug": "homemade-cheung-fun",
  "titleEn": "Homemade Cheung Fun (Rice Noodle Rolls)",
  "titleZh": "肠粉",
  "pinyin": "cháng fěn",
  "cuisine": "面点小吃",
  "cuisineEn": "Dim Sum",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "This home version uses a simple steamer setup and rice flour batter — no commercial slurry or electric rollers. Thinner, softer, and less glossy than restaurant-style, but tender and delicate like Grandma Li’s in Yuexiu District.",
  "versionNoteZh": "家常版用普通蒸锅和简易米浆，不依赖商用浆料或电动滚筒。比茶楼版更薄、更软、光泽略少，但口感柔嫩，如越秀区李奶奶做的那样。",
  "tags": [
    "30-min",
    "weeknight",
    "dim-sum"
  ],
  "dietary": [
    "none"
  ],
  "story": "My aunt in Guangzhou taught me this when I was twelve — she’d steam batches on her gas stove using an old bamboo steamer lined with damp cheesecloth. She said real cheung fun should ‘breathe’ — not too thick, never rubbery — just like the ones she ate at Lianxiang Lou before it closed in 1998.",
  "storyZh": "十二岁时，广州的姑妈教我做这个——她用煤气灶配旧竹蒸笼，垫湿纱布蒸制。她说真正的肠粉要‘会呼吸’：不能太厚，绝不能发硬，就像1998年关门前莲香楼卖的那种。",
  "ingredients": [
    {
      "id": "cf-01",
      "nameEn": "rice flour",
      "nameZh": "大米粉",
      "pinyin": "dà mǐ fěn",
      "amountMetric": "120 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Must be finely milled rice flour (not glutinous rice flour). Look for 'Guangdong rice flour' or 'cheung fun flour' in Asian markets.",
      "noteZh": "须为细磨大米粉（非糯米粉）。可在亚洲超市寻找‘广东米粉’或‘肠粉专用粉’。"
    },
    {
      "id": "cf-02",
      "nameEn": "tapioca starch",
      "nameZh": "木薯淀粉",
      "pinyin": "mù shǔ diàn fěn",
      "amountMetric": "30 g",
      "amountUS": "1/4 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Adds elasticity and sheen. Substitutes: cornstarch (less stretchy) or potato starch (slightly grainier).",
      "noteZh": "增加弹性和光泽。替代：玉米淀粉（延展性差）或马铃薯淀粉（略显颗粒感）。"
    },
    {
      "id": "cf-03",
      "nameEn": "water",
      "nameZh": "水",
      "pinyin": "shuǐ",
      "amountMetric": "360 ml",
      "amountUS": "1 1/2 cups",
      "category": "other",
      "pantry": "local",
      "note": "",
      "noteZh": ""
    },
    {
      "id": "cf-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "For seasoning the filling and drizzling — use a mild, balanced brand like Pearl River Bridge.",
      "noteZh": "用于调味馅料及淋汁——选口味均衡的生抽，如珠江桥牌。",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Whisk rice flour, tapioca starch, and water in a bowl until completely smooth and lump-free. Let rest 30 minutes at room temperature.",
      "textZh": "将大米粉、木薯淀粉与水混合搅拌至完全顺滑无颗粒，静置30分钟。",
      "zhHint": "搅匀后静置",
      "stateNote": {
        "visual": "Batter is thin, milky-white, and slightly glossy.",
        "visualZh": "米浆呈稀薄乳白色，略带光泽。",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "No visible lumps; surface looks evenly matte after resting.",
        "signalZh": "无可见颗粒；静置后表面均匀哑光。"
      },
      "tip": "Use a fine-mesh sieve to strain if any grit remains after whisking.",
      "tipZh": "若搅拌后仍有颗粒，可用细网筛过滤。"
    },
    {
      "text": "Prepare filling: Mix 1 tsp light soy sauce with 100 g peeled, finely minced shrimp (or pork) and 1 tsp sesame oil. Set aside.",
      "textZh": "制作馅料：将1茶匙生抽、100克去壳细剁虾仁（或猪肉末）和1茶匙芝麻油拌匀，静置。",
      "zhHint": "馅料提前调好",
      "stateNote": {
        "visual": "Shrimp mixture is moist but not watery.",
        "visualZh": "虾肉湿润但不渗水。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Shrimp clings together lightly when pinched.",
        "signalZh": "轻捏时虾肉微粘成团。"
      },
      "tip": "For authentic texture, hand-mince shrimp — don’t use a food processor.",
      "tipZh": "追求正宗口感，请手工剁虾，勿用料理机。"
    },
    {
      "text": "Lightly oil a heatproof plate or shallow baking dish (20 x 25 cm). Pour 1/3 cup (80 ml) batter onto the plate and tilt to coat evenly into a thin layer.",
      "textZh": "在耐热盘或浅烤盘（20×25厘米）内薄涂一层油。倒入约80毫升米浆，倾斜盘子使浆液均匀铺满底层。",
      "zhHint": "米浆要铺薄铺匀",
      "stateNote": {
        "visual": "Batter forms a translucent, even film covering the entire surface.",
        "visualZh": "米浆形成一层透明、均匀覆盖全盘的薄膜。",
        "timeRef": "10 seconds",
        "timeRefZh": "10 秒",
        "signal": "No bare spots or thick puddles.",
        "signalZh": "无裸露区域或局部积浆。"
      },
      "tip": "A wide, flat spatula helps spread batter quickly and evenly.",
      "tipZh": "宽平刮刀可助快速均匀摊开米浆。"
    },
    {
      "text": "Steam over boiling water for 2–3 minutes until the surface turns opaque and edges curl slightly.",
      "textZh": "放入沸水蒸锅中，大火蒸2–3分钟，至表面变不透明、边缘微卷起。",
      "zhHint": "蒸至不透明即熟",
      "stateNote": {
        "visual": "Surface is fully opaque white, no longer translucent; edges lift gently.",
        "visualZh": "表面完全转为不透明白色，不再透光；边缘微微翘起。",
        "timeRef": "2–3 minutes",
        "timeRefZh": "2–3 分钟",
        "heat": "high",
        "signal": "No wet shine remains; a toothpick inserted comes out clean.",
        "signalZh": "表面无湿亮反光；牙签插入拔出干净。"
      },
      "tip": "Keep lid tightly sealed — steam loss causes tearing and uneven thickness.",
      "tipZh": "盖紧锅盖——漏汽会导致肠粉撕裂、厚薄不均。"
    },
    {
      "text": "Carefully roll up the warm noodle sheet using a spatula. Slide onto a plate, brush lightly with light soy sauce, and serve immediately.",
      "textZh": "用刮刀小心将温热的粉皮卷起，移入盘中，薄刷一层生抽，趁热上桌。",
      "zhHint": "趁热卷起刷酱",
      "stateNote": {
        "visual": "Roll is smooth, tight, and holds shape without cracking.",
        "visualZh": "卷条光滑紧实，不裂不开散。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium-low",
        "signal": "Noodle is pliable but not sticky — cools just enough to hold shape.",
        "signalZh": "粉皮柔韧不粘手——微凉至刚好定型。"
      },
      "tip": "If rolling feels difficult, let cool 15 seconds — but don’t wait too long or it dries out.",
      "tipZh": "若难卷起，稍晾15秒即可——过久则失水变干。"
    }
  ],
  "tips": [
    "Use lukewarm water for smoother batter dispersion",
    "Steam plates must be preheated — cold plates cause uneven setting",
    "Leftover batter keeps 2 days refrigerated; stir well before reuse"
  ],
  "tipsZh": [
    "用微温水调浆，分散更均匀",
    "蒸盘需预热——冷盘导致凝结不均",
    "剩余米浆冷藏可存2天；再用前务必充分搅匀"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/homemade-cheung-fun.webp"
};
