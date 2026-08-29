import type { Recipe } from "@/lib/types";

/** Chrysanthemum Tofu (菊花豆腐) — Seed batch */
export const chrysanthemum_tofu: Recipe = {
  "id": "ju-hua-dou-fu",
  "slug": "chrysanthemum-tofu",
  "titleEn": "Chrysanthemum Tofu",
  "titleZh": "菊花豆腐",
  "pinyin": "jú huā dòu fu",
  "cuisine": "江浙菜",
  "cuisineEn": "Huaiyang",
  "region": "Yangzhou",
  "regionZh": "扬州",
  "difficulty": "medium",
  "timeMin": 40,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses soft tofu and a paring knife—not a professional 'tofu slicer'—and simmers gently in clear broth instead of flash-steaming, preserving delicate texture.",
  "versionNoteZh": "家常版用嫩豆腐与普通削皮刀（非专业豆腐刀），以清汤慢煨代替猛火快蒸，更易操作且不易碎。",
  "tags": [
    "delicate",
    "vegetarian",
    "light"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My grandmother in Yangzhou made this for my grandfather after his surgery—she’d whisper, 'Tofu must bloom like chrysanthemums in spring rain, not shatter like winter ice.' She used only local soy milk tofu from Dongguan Street market, pressed just that morning.",
  "storyZh": "扬州外婆在我祖父术后专做这道菜——她总轻声说：‘豆腐要如春雨中的菊花徐徐绽放，不可似冬冰般骤然迸裂。’只用东关街早市当天现做的豆浆豆腐，手工轻压去水。",
  "ingredients": [
    {
      "id": "jt-01",
      "nameEn": "soft tofu (silken-style, NOT shelf-stable)",
      "nameZh": "嫩豆腐（非盒装即食型）",
      "pinyin": "nèn dòu fu",
      "amountMetric": "300 g",
      "amountUS": "10.5 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Must be fresh, refrigerated, water-packed soft tofu (e.g., Nasoya Soft or House Foods Mori-Nu 'Soft' — NOT 'Silken' shelf-stable).",
      "noteZh": "须为冷藏水浸嫩豆腐（如Nasoya Soft或House Foods Mori-Nu‘Soft’款），不可用常温盒装‘绢豆腐’。"
    },
    {
      "id": "jt-02",
      "nameEn": "chicken or vegetable stock",
      "nameZh": "鸡汤或素高汤",
      "pinyin": "jī tāng huò sù gāo tāng",
      "amountMetric": "500 ml",
      "amountUS": "2 1/4 cups",
      "category": "other",
      "pantry": "local",
      "note": "Low-sodium preferred. Substitute: 1 tsp bouillon + 500 ml hot water.",
      "noteZh": "推荐低钠高汤。替代法：1茶匙高汤块 + 500毫升热水。"
    },
    {
      "id": "jt-03",
      "nameEn": "ginger",
      "nameZh": "姜",
      "pinyin": "jiāng",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp grated",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "jt-04",
      "nameEn": "scallion",
      "nameZh": "小葱",
      "pinyin": "xiǎo cōng",
      "amountMetric": "20 g",
      "amountUS": "2 large stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "jt-05",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "1 g",
      "amountUS": "1/4 tsp",
      "category": "spice",
      "pantry": "local",
      "termKey": "white-pepper"
    }
  ],
  "steps": [
    {
      "text": "Prep tofu: Drain tofu gently in a colander for 2 minutes. Pat top and sides *very* dry with paper towels—moisture prevents clean cutting.",
      "textZh": "处理豆腐：豆腐轻置滤网沥水2分钟。用厨房纸仔细吸干表面及四侧水分——水多则无法切出细丝。",
      "zhHint": "豆腐要干，刀才利落",
      "stateNote": {
        "visual": "Surface feels cool and matte, no beadings of water.",
        "visualZh": "触感微凉哑光，无水珠凝结。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Paper towel lifts cleanly, no damp transfer.",
        "signalZh": "厨房纸揭起洁净，无水渍沾染。"
      }
    },
    {
      "text": "Slice into ribbons: Hold tofu steady with chopsticks. Using a very sharp paring knife, slice 1.5-mm-thick planks. Stack 3–4 planks; cut lengthwise into 1.5-mm-wide matchsticks. Gently separate bundles with fingertips.",
      "textZh": "切丝：用筷子稳住豆腐。以极锋利削皮刀切1.5毫米厚片；叠3–4片后顺长切成1.5毫米粗细的丝。指尖轻拨散成菊花状。",
      "zhHint": "刀要快，手要轻，丝才匀",
      "stateNote": {
        "visual": "Ribbons curl slightly at ends, forming loose 'petals'.",
        "visualZh": "豆腐丝两端微卷，自然舒展如花瓣。",
        "timeRef": "12–15 minutes",
        "timeRefZh": "12–15 分钟",
        "signal": "Knife makes silent, smooth cuts—no dragging or compression.",
        "signalZh": "刀过无声，无拖拽或挤压感。"
      }
    },
    {
      "text": "Blanch: Bring stock to gentle simmer (not boil) in a wide saucepan. Add ginger and scallion whites. Carefully lower tofu ribbons into broth using a slotted spoon. Simmer uncovered 3 minutes—do not stir.",
      "textZh": "焯烫：宽口锅中高汤微沸（勿滚），加姜片与葱白段。用漏勺轻托豆腐丝缓缓浸入，小火煨3分钟——切勿搅动。",
      "zhHint": "汤微沸，豆腐静卧",
      "stateNote": {
        "visual": "Tofu ribbons float freely, edges softening but holding shape.",
        "visualZh": "豆腐丝悬浮自如，边缘微软但形态完整。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "low",
        "signal": "Tiny bubbles rise gently around pot edges; surface barely shivers.",
        "signalZh": "锅边泛细泡，汤面仅微颤。"
      }
    },
    {
      "text": "Season and finish: Remove ginger and scallion whites. Stir in white pepper. Turn off heat. Let stand 1 minute to infuse.",
      "textZh": "调味收尾：捞出姜片与葱白。撒入白胡椒粉。关火，静置1分钟使辛香渗入。",
      "zhHint": "关火焖香，味更清雅",
      "stateNote": {
        "visual": "Broth remains crystal-clear, no cloudiness from tofu.",
        "visualZh": "汤色清亮如初，无豆腐浑浊。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Aroma shifts from raw ginger to warm, floral pepper.",
        "signalZh": "香气由姜辛转为温润椒香。"
      }
    },
    {
      "text": "Serve: Ladle tofu and broth into warmed bowls. Garnish with scallion greens and a few drops of sesame oil.",
      "textZh": "盛碗：将豆腐与清汤舀入预热碗中。撒葱绿，滴芝麻油2–3滴。",
      "zhHint": "碗要烫，油要少而香",
      "stateNote": {
        "visual": "Tofu ribbons bloom outward like open chrysanthemums in clear broth.",
        "visualZh": "豆腐丝在清汤中舒展如盛开菊花。",
        "timeRef": "immediately",
        "timeRefZh": "即刻",
        "signal": "First spoonful releases clean, savory fragrance.",
        "signalZh": "首勺入口即有清鲜醇香。"
      }
    }
  ],
  "tips": [
    "Chill tofu 15 minutes before slicing—it firms up slightly for cleaner cuts.",
    "If ribbons break, gather them gently and let them 'bloom' in hot broth—they’ll re-form naturally.",
    "Never use firm or extra-firm tofu—the texture won’t yield delicate petals."
  ],
  "tipsZh": [
    "切前冷藏豆腐15分钟，可略微紧实便于切丝。",
    "若豆腐丝偶断，轻拢后入热汤中静置，会自然舒展复形。",
    "禁用老豆腐或北豆腐——质地过硬无法呈现花瓣柔态。"
  ],
  "relatedSlugs": [
    "squirrel-fish"
  ],
  "image": "/images/recipes/chrysanthemum-tofu.webp"
};
