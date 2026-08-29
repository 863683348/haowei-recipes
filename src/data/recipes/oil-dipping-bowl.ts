import type { Recipe } from "@/lib/types";

/** Chili Oil Dipping Bowl (Yóu Dié) (油碟) — Seed batch */
export const oil_dipping_bowl: Recipe = {
  "id": "you-die",
  "slug": "oil-dipping-bowl",
  "titleEn": "Chili Oil Dipping Bowl (Yóu Dié)",
  "titleZh": "油碟",
  "pinyin": "yóu dié",
  "cuisine": "川菜",
  "cuisineEn": "Sichuan",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "easy",
  "timeMin": 10,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses store-bought chili oil but enhances it with fresh aromatics and Sichuan peppercorn infusion—no frying required. Restaurants often deep-fry garlic and shallots; we use raw scallion and toasted Sichuan peppercorn for brighter heat.",
  "versionNoteZh": "家庭版用市售辣椒油为基础，加鲜香料与花椒油增香——无需热油炝锅。餐馆版常炸蒜末、干葱，我们改用生葱与焙香花椒，辣香更清透。",
  "tags": [
    "10-min",
    "dipping-sauce",
    "hot-pot"
  ],
  "dietary": [
    "vegetarian",
    "vegan"
  ],
  "story": "My uncle in Chengdu’s Jinjiang District kept a glass jar of chili oil on his dining table year-round. For hot pot, he’d spoon two tablespoons into each small bowl, then add raw scallion, a pinch of toasted Sichuan peppercorns, and a splash of light soy—never cooked, always alive.",
  "storyZh": "我在成都锦江区的舅舅，餐桌上常年摆着一玻璃罐辣椒油。吃火锅时，他往每人小碗里舀两勺，再撒生葱、一小撮焙香花椒、几滴生抽——从不加热，永远鲜活。",
  "ingredients": [
    {
      "id": "yd-01",
      "nameEn": "Sichuan chili oil (with sediment)",
      "nameZh": "红油（带油渣）",
      "pinyin": "hóng yóu",
      "amountMetric": "120 ml",
      "amountUS": "½ cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Look for ‘Sichuan chili oil’ with visible red sediment (crushed chilies & spices). Sub: ¾ cup neutral oil + 2 tbsp gochujang + 1 tsp smoked paprika (for depth).",
      "noteZh": "选带红油渣的‘四川红油’。替代：植物油¾杯 + 韩式辣酱2汤匙 + 烟熏红椒粉1茶匙（增醇厚感）。"
    },
    {
      "id": "yd-02",
      "nameEn": "Sichuan peppercorns, toasted and ground",
      "nameZh": "花椒（焙香后碾碎）",
      "pinyin": "huā jiāo",
      "amountMetric": "3 g",
      "amountUS": "1 tsp whole, ground",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "yd-03",
      "nameEn": "scallion greens, finely chopped",
      "nameZh": "小葱绿段（切细）",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "¼ cup chopped",
      "category": "produce",
      "pantry": "local",
      "note": "Use only green parts—they stay crisp and aromatic longer than white.",
      "noteZh": "只取葱绿部分——比葱白更耐久、香气更持久。"
    },
    {
      "id": "yd-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "yd-05",
      "nameEn": "Chinese black vinegar",
      "nameZh": "陈醋",
      "pinyin": "chén cù",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinese-black-vinegar"
    }
  ],
  "steps": [
    {
      "text": "In a small skillet over medium-low heat, toast Sichuan peppercorns for 1–2 minutes until fragrant and slightly smoky—do not brown.",
      "textZh": "小平底锅中火转小火，焙香花椒1–2分钟，至散发焦香微烟，切勿上色。",
      "zhHint": "小火焙香，闻香即停",
      "stateNote": {
        "visual": "Peppercorns plump slightly and turn matte brown",
        "visualZh": "花椒粒微膨，呈哑光棕褐色",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "medium-low",
        "signal": "Aromatic, citrusy, numbing scent fills the air",
        "signalZh": "空气中弥漫柑橘清香与麻感"
      }
    },
    {
      "text": "Transfer toasted peppercorns to a mortar or spice grinder. Grind to a coarse powder—do not overgrind into dust.",
      "textZh": "将焙香花椒移入石臼或研磨机，粗磨成颗粒状粉末，勿磨成细粉。",
      "zhHint": "粗磨保麻香",
      "stateNote": {
        "visual": "Granular texture with visible flecks of gray-brown husk",
        "visualZh": "可见灰褐色种皮碎屑的颗粒感",
        "timeRef": "20 seconds grinding",
        "timeRefZh": "研磨20秒",
        "signal": "Aroma intensifies and becomes sharper",
        "signalZh": "麻香更锐利、更集中"
      }
    },
    {
      "text": "In a mixing bowl, combine chili oil (including sediment), ground Sichuan peppercorns, scallions, light soy sauce, and Chinese black vinegar. Stir gently with chopsticks for 30 seconds.",
      "textZh": " Mixing碗中混合红油（含油渣）、花椒粉、葱花、生抽与陈醋，用筷子轻柔搅打30秒。",
      "zhHint": "轻搅30秒，防葱出水",
      "stateNote": {
        "visual": "Red oil coats scallions evenly; no pooling of clear oil on surface",
        "visualZh": "红油均匀裹住葱花，表面无清油析出",
        "timeRef": "30 seconds",
        "timeRefZh": "30 秒",
        "signal": "Scallions remain vibrant green, not dull or translucent",
        "signalZh": "葱花保持鲜绿，不发暗或半透明"
      }
    },
    {
      "text": "Let sit undisturbed for 3 minutes. This allows the Sichuan peppercorn’s numbing oil to infuse the mixture.",
      "textZh": "静置3分钟，让花椒麻油充分浸润整碗蘸料。",
      "zhHint": "静置释麻",
      "stateNote": {
        "visual": "Surface develops faint shimmer; scallions appear slightly glossy",
        "visualZh": "表面泛微光；葱花略显油润",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Numbing sensation begins on tongue tip when tasting a drop",
        "signalZh": "尝一滴，舌尖已初感微麻"
      }
    },
    {
      "text": "Give one final gentle stir. Serve immediately—this dip is best within 30 minutes of mixing.",
      "textZh": "最后轻拌一次，即刻上桌——此蘸料最佳风味期为调制后30分钟内。",
      "zhHint": "即调即食，风味最鲜",
      "stateNote": {
        "visual": "Uniform rust-red hue with floating green specks and dark sediment",
        "visualZh": "均一铁锈红色，浮有翠绿葱点与深色油渣",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "First whiff delivers heat, then citrusy numbness, then savory depth",
        "signalZh": "初闻是辣，继而是柑橘麻香，最后是醇厚酱香"
      }
    }
  ],
  "tips": [
    "Never refrigerate—chili oil solidifies and loses aroma.",
    "Toast Sichuan peppercorns in batches; they lose potency fast once ground.",
    "For extra richness, add ½ tsp sesame oil—but never substitute for chili oil base."
  ],
  "tipsZh": [
    "切勿冷藏——红油遇冷凝固，香气尽失。",
    "花椒宜分批焙香现磨，磨后香气散失极快。",
    "如需更醇厚，可加½茶匙芝麻油，但不可替代红油基底。"
  ],
  "relatedSlugs": [
    "sesame-sauce-dipping-sauce"
  ],
  "image": "/images/recipes/oil-dipping-bowl.webp"
};
