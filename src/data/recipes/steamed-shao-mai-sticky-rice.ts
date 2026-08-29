import type { Recipe } from "@/lib/types";

/** Steamed Shao Mai (Sticky Rice Dumplings) (烧麦) — Seed batch */
export const steamed_shao_mai_sticky_rice: Recipe = {
  "id": "shao-mai",
  "slug": "steamed-shao-mai-sticky-rice",
  "titleEn": "Steamed Shao Mai (Sticky Rice Dumplings)",
  "titleZh": "烧麦",
  "pinyin": "shāo mài",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Snack",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 75,
  "servings": 4,
  "version": "family",
  "versionNote": "Family version uses simple wheat wrappers instead of labor-intensive handmade ones — same delicate pleats, half the effort.",
  "versionNoteZh": "家常版用现成小麦饺子皮替代手擀皮，褶子依旧玲珑，省力一半。",
  "tags": [
    "75-min",
    "dim-sum",
    "brunch"
  ],
  "dietary": [
    "none"
  ],
  "story": "Every Sunday morning at Dongsi Market, my uncle sold shao mai from a blue enamel cart. He taught me to pinch the top open like a flower — ‘The heart must breathe,’ he’d say — and always added a tiny dot of carrot for color, just like his mother did in Tianjin.",
  "storyZh": "每周日清晨，我舅舅在东四市场蓝搪瓷车摊卖烧麦。他教我捏顶口如绽花：‘心要透气’；还总点一粒胡萝卜提色，像他天津母亲那样。",
  "ingredients": [
    {
      "id": "sm-01",
      "nameEn": "ground pork (15% fat)",
      "nameZh": "猪肉末（肥瘦1.5:8.5）",
      "pinyin": "zhū ròu mò",
      "amountMetric": "250 g",
      "amountUS": "8.8 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Chill 15 min before mixing — keeps fat firm for better binding.",
      "noteZh": "混合前冷藏15分钟，使脂肪凝固更易抱团。"
    },
    {
      "id": "sm-02",
      "nameEn": "glutinous rice",
      "nameZh": "糯米",
      "pinyin": "nuò mǐ",
      "amountMetric": "100 g",
      "amountUS": "½ cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Rinse, soak 2 hours, drain, then steam 15 min until tender but not mushy.",
      "noteZh": "淘洗后泡2小时，沥干蒸15分钟至软而不烂。"
    },
    {
      "id": "sm-03",
      "nameEn": "dried wood ear mushrooms",
      "nameZh": "干木耳",
      "pinyin": "gān mù ěr",
      "amountMetric": "15 g",
      "amountUS": "¼ cup (rehydrated, chopped)",
      "category": "produce",
      "pantry": "asian",
      "note": "Soak in warm water 20 min; discard tough stems.",
      "noteZh": "温水泡发20分钟；去硬根切碎。"
    },
    {
      "id": "sm-04",
      "nameEn": "carrot",
      "nameZh": "胡萝卜",
      "pinyin": "hú luó bo",
      "amountMetric": "50 g",
      "amountUS": "¼ cup finely diced",
      "category": "produce",
      "pantry": "local",
      "note": "Adds sweetness and visual pop — don’t skip!",
      "noteZh": "增甜提色，不可省略！"
    },
    {
      "id": "sm-05",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "",
      "noteZh": "",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "sm-06",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴酒",
      "pinyin": "shào xīng jiǔ",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Substitute dry sherry.",
      "noteZh": "可用干雪利酒替代。",
      "termKey": "shaoxing-wine"
    }
  ],
  "steps": [
    {
      "text": "Steam soaked glutinous rice 15 minutes until tender but separate — cool completely before mixing.",
      "textZh": "泡好的糯米蒸15分钟至软而粒粒分明——彻底放凉再拌馅。",
      "zhHint": "蒸至粒粒分明，彻底放凉",
      "stateNote": {
        "visual": "Grains are soft, translucent, and bounce back slightly when pressed.",
        "visualZh": "米粒软糯透亮，轻压微弹。",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "high",
        "signal": "Steam rises in steady pulses; rice no longer opaque.",
        "signalZh": "蒸汽匀长喷涌；米粒不再发白。"
      }
    },
    {
      "text": "Sauté wood ear and carrot in 1 tsp oil over medium heat 3 minutes until fragrant and slightly softened. Cool.",
      "textZh": "木耳丁与胡萝卜丁用1茶匙油中火煸3分钟至香软，放凉。",
      "zhHint": "煸至香软，放凉",
      "stateNote": {
        "visual": "Carrot turns brighter orange; wood ears curl at edges.",
        "visualZh": "胡萝卜橙色更亮；木耳边缘微卷。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Aroma shifts from raw to sweet-earthy.",
        "signalZh": "香气由生涩转为甘香微土。"
      }
    },
    {
      "text": "Combine pork, cooled rice, sautéed vegetables, dark soy sauce, Shaoxing wine, 1 tsp ginger juice, and ½ tsp white pepper. Mix vigorously in one direction 3 minutes until sticky and elastic.",
      "textZh": "猪肉、凉糯米饭、炒料、老抽、绍酒、姜汁1茶匙、白胡椒粉½茶匙同拌，顺一个方向搅打3分钟至粘稠有劲。",
      "zhHint": "顺一个方向搅打3分钟",
      "stateNote": {
        "visual": "Mixture pulls into a cohesive mass that stretches 2 cm without breaking.",
        "visualZh": "馅料成团，拉伸2厘米不断裂。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "signal": "Resists separation when lifted with spatula.",
        "signalZh": "刮刀挑起不散落。"
      }
    },
    {
      "text": "Place 1 tbsp filling in center of round wheat wrapper (9 cm). Gather edges up around filling, leaving center open — pinch 6–8 pleats evenly. Press base flat on board to seal.",
      "textZh": "9厘米小麦饺子皮中央放1汤匙馅，收拢边缘包成开口花苞状，捏6–8道均匀褶子；按压底部封口。",
      "zhHint": "捏6–8道褶，按压封底",
      "stateNote": {
        "visual": "Top opening resembles a blooming chrysanthemum; base sits level without wobbling.",
        "visualZh": "顶口如菊绽放；底部平稳不晃。",
        "timeRef": "1 minute per dumpling",
        "timeRefZh": "每个约1分钟",
        "signal": "Pleats hold shape without collapsing when lifted.",
        "signalZh": "拎起褶子不塌陷。"
      }
    },
    {
      "text": "Steam shao mai over high heat for 12 minutes. Rest covered 2 minutes before serving — steam condensation will settle, preventing soggy bottoms.",
      "textZh": "大火蒸12分钟；关火焖2分钟再揭盖——防冷凝水浸软底。",
      "zhHint": "蒸12分钟，焖2分钟",
      "stateNote": {
        "visual": "Rice grains visible through thin wrapper; top pleats glisten with light steam-moisture.",
        "visualZh": "米粒透过薄皮隐约可见；顶褶泛润泽微光。",
        "timeRef": "12 minutes steam + 2 minutes rest",
        "timeRefZh": "蒸12分钟 + 焖2分钟",
        "heat": "high",
        "signal": "Wrapper turns semi-translucent; aroma intensifies.",
        "signalZh": "皮变半透明；香气明显增强。"
      }
    }
  ],
  "tips": [
    "Use only thin round wheat wrappers — square wonton skins won’t pleat properly.",
    "Freeze uncooked shao mai on tray first, then bag — they steam perfectly from frozen (add 3 min).",
    "For gluten-free: substitute rice flour wrappers (available online or make with 100 g rice flour + 60 ml hot water)."
  ],
  "tipsZh": [
    "务必用圆形薄小麦饺皮，方形云吞皮无法捏褶。",
    "生坯可先单层冻硬再装袋——冷冻直蒸（加3分钟）。",
    "无麸质版：用米粉皮替代（网购或自制：100克米粉+60毫升沸水）"
  ],
  "relatedSlugs": [
    "sticky-rice-chicken-bamboo-leaf",
    "pearl-meatballs-sticky-rice"
  ],
  "image": "/images/recipes/steamed-shao-mai-sticky-rice.webp"
};
