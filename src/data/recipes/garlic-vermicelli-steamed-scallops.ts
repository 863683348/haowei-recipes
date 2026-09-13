import type { Recipe } from "@/lib/types";

/** Garlic Vermicelli Steamed Scallops (蒜蓉粉丝蒸扇贝) — Day batch */
export const garlic_vermicelli_steamed_scallops: Recipe = {
  "id": "garlic-vermicelli-steamed-scallops",
  "slug": "garlic-vermicelli-steamed-scallops",
  "titleEn": "Garlic Vermicelli Steamed Scallops",
  "titleZh": "蒜蓉粉丝蒸扇贝",
  "pinyin": "suàn róng fěn sī zhēng shàn bèi",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 20,
  "servings": 4,
  "version": "family",
  "versionNote": "Home version simplifies the restaurant technique — just garlic, vermicelli, and steam time.",
  "versionNoteZh": "家常版简化餐馆技法——蒜蓉、粉丝、清蒸，无需复杂步骤。",
  "tags": [
    "30-min",
    "healthy",
    "seafood",
    "cantonese"
  ],
  "dietary": [
    "gluten-free"
  ],
  "story": "This dish appeared on every banquet table in Guangdong coastal homes. The trick isn't the technique but the garlic — half fried until golden, half raw for freshness. The vermicelli drinks the garlicky broth like a sponge.",
  "storyZh": "这道菜是广东沿海家庭的宴席标配。秘诀不在技法，而在蒜——一半炸至金黄，一半生用提鲜。粉丝如海绵般吸饱蒜香汤汁。",
  "ingredients": [
    {
      "id": "scallops-01",
      "nameEn": "fresh scallops on the half shell",
      "nameZh": "鲜扇贝（带壳）",
      "pinyin": "xiān shàn bèi",
      "amountMetric": "8 large",
      "amountUS": "8 large",
      "category": "protein",
      "pantry": "local",
      "note": "Ask the fishmonger to remove the dark intestine; rinse well",
      "noteZh": "请鱼贩去黑肠，冲洗干净"
    },
    {
      "id": "vermicelli-02",
      "nameEn": "mung bean vermicelli (glass noodles)",
      "nameZh": "绿豆粉丝",
      "pinyin": "lǜ dòu fěn sī",
      "amountMetric": "50 g",
      "amountUS": "1.7 oz",
      "category": "staple",
      "pantry": "asian",
      "termKey": "vermicelli"
    },
    {
      "id": "garlic-03",
      "nameEn": "garlic cloves, minced",
      "nameZh": "大蒜，切末",
      "pinyin": "dà suàn",
      "amountMetric": "8 cloves",
      "amountUS": "8 cloves",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "light-soy-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "oil-05",
      "nameEn": "vegetable oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "60 ml",
      "amountUS": "4 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "scallion-06",
      "nameEn": "scallions, finely chopped",
      "nameZh": "小葱，切碎",
      "pinyin": "xiǎo cōng",
      "amountMetric": "3 stalks",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Soak vermicelli in warm water for 15 minutes until soft. Drain, cut into 5 cm lengths, and arrange a small pile on each scallop shell.",
      "textZh": "粉丝温水泡软约15分钟，捞出剪成5厘米段，每只扇贝壳上放一小撮。",
      "zhHint": "粉丝不要泡太久，软即可",
      "stateNote": {
        "visual": "Vermicelli is translucent and pliable",
        "visualZh": "粉丝呈半透明状，柔软可弯",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "signal": "Bends without snapping",
        "signalZh": "弯曲不断裂"
      }
    },
    {
      "text": "Heat oil in a small wok over medium heat. Add half the garlic and fry until golden (about 2 minutes). Remove from heat and immediately mix with remaining raw garlic — this creates the signature two-tone garlic.",
      "textZh": "小锅烧油中火，下另一半蒜末炸至金黄（约2分钟），离火后立即拌入剩余生蒜——这就是双味蒜蓉的关键。",
      "zhHint": "一半炸一半生，香气层次分明",
      "stateNote": {
        "visual": "Fried garlic turns light golden, raw garlic remains pale",
        "visualZh": "炸蒜呈浅金色，生蒜仍为 pale 色",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium",
        "signal": "Garlic sizzles gently and turns pale gold",
        "signalZh": "蒜末轻沸、呈浅金色"
      }
    },
    {
      "text": "Mix fried garlic, raw garlic, soy sauce, and a pinch of sugar into a paste. Spoon a generous amount onto each scallop, covering the vermicelli completely.",
      "textZh": "将蒜蓉、生抽、少许糖调成糊，均匀铺在粉丝上，覆盖每只扇贝。",
      "zhHint": "蒜蓉要够厚，蒸出的汁才够味"
    },
    {
      "text": "Steam over high heat for 5 minutes. The scallops are done when they turn opaque white and the edges curl slightly.",
      "textZh": "大火蒸5分钟，扇贝变白、边缘微卷即可。",
      "zhHint": "宁短勿长，老了就柴",
      "stateNote": {
        "visual": "Scallop meat turns opaque white, edges curl",
        "visualZh": "扇贝肉变白不透明，边缘微卷",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "high",
        "signal": "Meat loses translucency, becomes solid white",
        "signalZh": "肉质由透明转为纯白"
      }
    },
    {
      "text": "Remove from steamer, sprinkle with chopped scallions. Optionally pour 1 tbsp hot oil over the scallions for aroma.",
      "textZh": "出锅撒葱花，可淋少许热油激香。趁热上桌。",
      "zhHint": "热油淋葱花是点睛之笔"
    }
  ],
  "tips": [
    "The two-tone garlic (half fried, half raw) is the secret — don't skip this step.",
    "Fresh scallops are best; frozen work but pat them dry before stuffing.",
    "Don't oversteam — 5 minutes is plenty for medium scallops."
  ],
  "tipsZh": [
    "双味蒜蓉（一半炸一半生）是秘诀，不可省略。",
    "鲜扇贝最佳；冷冻的也行，但蒸前务必吸干水分。",
    "蒸制不可过久——5分钟对于中等大小扇贝刚好。"
  ],
  "relatedSlugs": [
    "garlic-steamed-prawns",
    "clear-steamed-prawns",
    "garlic-shrimp-vermicelli",
    "steamed-hairy-crab",
    "clay-pot-tofu"
  ],
  "image": "/images/recipes/garlic-vermicelli-steamed-scallops.webp"
};
