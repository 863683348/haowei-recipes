import type { Recipe } from "@/lib/types";

/** Herb-Roasted Chicken Thighs (香草烤鸡腿) — Seed batch */
export const herb_roasted_chicken_thighs: Recipe = {
  "id": "xiang-cao-kao-ji-tui",
  "slug": "herb-roasted-chicken-thighs",
  "titleEn": "Herb-Roasted Chicken Thighs",
  "titleZh": "香草烤鸡腿",
  "pinyin": "xiāng cǎo kǎo jī tuǐ",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Guangzhou",
  "regionZh": "广州",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "True Cantonese home version skips butter and heavy cream—uses only fresh herbs, garlic, and a splash of rice vinegar for brightness. No oven rack needed; direct pan roasting gives deeper browning.",
  "versionNoteZh": "正宗广式家常版不用黄油与奶油，仅靠新鲜香草、蒜末与少许米醋提亮；无需烤架，直接烤盘烘烤，上色更醇厚。",
  "tags": [
    "30-min",
    "family-dinner",
    "herb"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Guangzhou’s Liwan District roasted these on her gas stove’s highest flame—she’d sear thighs in a wok first, then finish in the oven ‘just long enough for the rosemary to sigh.’ She kept dried rosemary in a blue ceramic jar labeled ‘Xiao Lin’s Herb Box’—my cousin’s name.",
  "storyZh": "我广州荔湾区的祖母总用燃气灶最大火烤这道菜——先在炒锅里煎鸡腿，再进烤箱‘烤到迷迭香叹气为止’。她把干迷迭香存进一个蓝釉瓷罐，上面写着‘小林香草盒’，是我堂妹的名字。",
  "ingredients": [
    {
      "id": "hr-01",
      "nameEn": "bone-in, skin-on chicken thighs",
      "nameZh": "带骨带皮鸡腿",
      "pinyin": "dài gǔ dài pí jī tuǐ",
      "amountMetric": "600 g",
      "amountUS": "21 oz (about 3 large thighs)",
      "category": "protein",
      "pantry": "local",
      "note": "Choose thighs with even thickness—avoid overly fatty or stringy ones",
      "noteZh": "选厚薄均匀者，避肥腻或筋膜多的"
    },
    {
      "id": "hr-02",
      "nameEn": "fresh rosemary, finely chopped",
      "nameZh": "新鲜迷迭香（切碎）",
      "pinyin": "xīn xiān mí dié xiāng (qiē suì)",
      "amountMetric": "10 g",
      "amountUS": "1 tbsp chopped",
      "category": "produce",
      "pantry": "local",
      "note": "Substitute 1 tsp dried rosemary if fresh unavailable (add in step 3)",
      "noteZh": "如无新鲜迷迭香，可用1茶匙干品替代（步骤3加入）"
    },
    {
      "id": "hr-03",
      "nameEn": "garlic, minced",
      "nameZh": "蒜末",
      "pinyin": "suàn mò",
      "amountMetric": "12 g",
      "amountUS": "2 cloves, minced",
      "category": "produce",
      "pantry": "local",
      "termKey": "garlic"
    },
    {
      "id": "hr-04",
      "nameEn": "rice vinegar",
      "nameZh": "米醋",
      "pinyin": "mǐ cù",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "rice-vinegar"
    },
    {
      "id": "hr-05",
      "nameEn": "neutral oil (e.g., canola or grapeseed)",
      "nameZh": "无味植物油（如芥花籽油）",
      "pinyin": "wú wèi zhí wù yóu (rú jiè huā zǐ yóu)",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Pat chicken dry. Rub all over with oil, garlic, rosemary, and rice vinegar. Let sit 10 minutes at room temperature.",
      "textZh": "鸡腿擦干；均匀抹油、蒜末、迷迭香与米醋，室温静置10分钟。",
      "zhHint": "擦干→抹料→静置"
    },
    {
      "text": "Heat a heavy oven-safe skillet (cast iron preferred) over medium-high heat until oil shimmers. Place chicken skin-side down; press gently with spatula for 1 minute to ensure contact.",
      "textZh": "厚底可入烤箱的平底锅（铸铁最佳）中火烧热至油微漾；鸡腿皮面朝下放入，用锅铲轻压1分钟确保贴合。",
      "zhHint": "烧锅→下鸡→轻压"
    },
    {
      "text": "Sear undisturbed for 6–7 minutes until skin is deep golden and releases easily from pan. Flip and sear 2 minutes on meat side.",
      "textZh": "不翻动煎6–7分钟，至鸡皮深金黄、自然脱锅；翻面再煎2分钟。",
      "zhHint": "定型→脱锅→翻面",
      "stateNote": {
        "visual": "Skin is taut, deeply golden, and lifts cleanly when nudged with spatula",
        "visualZh": "鸡皮紧绷、深金黄，锅铲轻推即自然脱锅",
        "timeRef": "6–7 minutes",
        "timeRefZh": "6–7 分钟",
        "heat": "medium-high",
        "signal": "A faint sizzle persists without smoking or splattering",
        "signalZh": "持续细微滋滋声，无冒烟或飞溅"
      }
    },
    {
      "text": "Transfer skillet to preheated 200°C (400°F) oven. Roast 18 minutes—juices should run clear when thigh is pierced near bone.",
      "textZh": "整锅移入预热200°C（400°F）烤箱，烤18分钟——用竹签刺近骨处，流出清汁即熟。",
      "zhHint": "入烤箱→计时→验汁"
    },
    {
      "text": "Rest 4 minutes in skillet off heat. Serve with pan drippings spooned over top.",
      "textZh": "离火静置4分钟；将锅底浓缩汁淋在鸡腿上即可上桌。",
      "zhHint": "离火→静置→淋汁"
    }
  ],
  "tips": [
    "If using dried rosemary, add it with garlic in step 1—it needs time to rehydrate.",
    "For extra tenderness, pierce thighs deeply with fork before marinating (3–4 holes per piece).",
    "This method works equally well with chicken drumsticks—just add 2 minutes to oven time."
  ],
  "tipsZh": [
    "若用干迷迭香，请在步骤1与蒜末一同加入——需时间回软。",
    "想更嫩？腌前用叉子在鸡腿厚处深扎3–4孔。",
    "此法同样适用于鸡翅根，只需烤箱时间+2分钟。"
  ],
  "relatedSlugs": [
    "honey-glazed-roast-chicken"
  ],
  "image": "/images/recipes/herb-roasted-chicken-thighs.webp"
};
