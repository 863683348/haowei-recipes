import type { Recipe } from "@/lib/types";

/** Steamed Silver Pomfret (清蒸鲳鱼) — Seed batch */
export const steamed_pomfret: Recipe = {
  "id": "qing-zheng-chang-yu",
  "slug": "steamed-pomfret",
  "titleEn": "Steamed Silver Pomfret",
  "titleZh": "清蒸鲳鱼",
  "pinyin": "qīng zhēng chāng yú",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Ningbo",
  "regionZh": "宁波",
  "difficulty": "easy",
  "timeMin": 22,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses no oyster sauce or sugar — just ginger, scallion, light soy, and sesame oil for pure, clean ocean flavor.",
  "versionNoteZh": "家常版不加蚝油与糖，仅用姜、葱、生抽、芝麻油，凸显海鱼本真清鲜。",
  "tags": [
    "25-min",
    "weeknight",
    "seafood"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Ningbo — a retired fisherman — taught me to choose pomfret by pressing the gills: they must be deep red and spring back firmly. He steams them in a wok with river stones for even heat, saying ‘the fish should taste like the East China Sea at dawn.’",
  "storyZh": "我宁波的渔民叔叔教我挑鲳鱼：按压鱼鳃，须呈深红色且指压后迅速回弹。他用鹅卵石垫底的铁锅蒸鱼，说‘鱼该有东海黎明时的味道。’",
  "ingredients": [
    {
      "id": "pomfret-01",
      "nameEn": "whole silver pomfret (scaled, gutted, ~400 g)",
      "nameZh": "整条银鲳鱼（已刮鳞去内脏，约400克）",
      "pinyin": "zhěng tiáo yín chāng yú",
      "amountMetric": "1 pc",
      "amountUS": "1 fish",
      "category": "protein",
      "pantry": "local",
      "note": "Look for silvery skin with iridescent sheen and clear, bulging eyes. Substitute: whole Pacific saury or mackerel pike (similar flakiness).",
      "noteZh": "选银亮带虹彩鳞、眼球凸出清澈者。替代：整条竹荚鱼或䲠鱼（肉质相近）。"
    },
    {
      "id": "pomfret-02",
      "nameEn": "fresh ginger",
      "nameZh": "生姜",
      "pinyin": "shēng jiāng",
      "amountMetric": "25 g",
      "amountUS": "2 tbsp julienned",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "pomfret-03",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "pomfret-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Rinse pomfret and pat *very* dry inside and out. Make three shallow diagonal slashes on each side. Rub with ¼ tsp salt and 1 tsp Shaoxing wine.",
      "textZh": "银鲳洗净，里外彻底擦干；两面各斜切三刀（浅至鱼骨）；抹¼茶匙盐、1茶匙料酒。",
      "zhHint": "擦干、浅划、薄腌",
      "stateNote": {
        "visual": "No water beads remain on skin or gills.",
        "visualZh": "鱼皮与鳃部无水珠残留。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Skin feels tight and slightly tacky to touch.",
        "signalZh": "鱼皮触感紧绷微黏。"
      }
    },
    {
      "text": "Stuff cavity with half the julienned ginger and 2 scallion whites. Place fish on a heatproof plate lined with ginger slices.",
      "textZh": "鱼腹内填入一半姜丝与葱白段；耐热盘底铺姜片，鱼置其上。",
      "zhHint": "姜葱入腹，姜片垫底",
      "stateNote": {
        "visual": "Ginger lies flat and evenly spaced on plate surface.",
        "visualZh": "姜片平铺盘底，分布均匀。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "No overlapping or clumping of ginger.",
        "signalZh": "姜片不重叠、不堆叠。"
      }
    },
    {
      "text": "Steam over high heat for 8 minutes (for 400 g fish) — timing is critical. Fish is done when flesh near bone is opaque and separates cleanly.",
      "textZh": "大火蒸8分钟（400克鱼）——时间精准是关键；鱼肉近骨处变白不透明，且能沿肌理完整分离即熟。",
      "zhHint": "精准计时，骨边透白",
      "stateNote": {
        "visual": "Flesh near dorsal fin turns from translucent pink to solid white.",
        "visualZh": "背鳍附近鱼肉由半透明粉红转为纯白。",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "heat": "high",
        "signal": "Tip of tail curls upward slightly.",
        "signalZh": "鱼尾尖微微上翘。"
      }
    },
    {
      "text": "Discard cooking ginger and scallions. Top fish with remaining julienned ginger and all scallion greens.",
      "textZh": "弃去蒸制用姜片与葱白；撒上余下姜丝与全部葱绿。",
      "zhHint": "换新姜葱",
      "stateNote": {
        "visual": "Fresh ginger and scallions lie in neat, separate strands.",
        "visualZh": "新姜丝与葱绿分列清晰、不混杂。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "signal": "Raw ginger aroma is sharp and cooling.",
        "signalZh": "生姜气味辛辣清凉。"
      }
    },
    {
      "text": "Heat sesame oil in a small pan until fragrant (do not smoke). Drizzle warm oil and light soy sauce evenly over fish.",
      "textZh": "芝麻油小锅加热至微香（勿冒烟），趁热淋于鱼身，再均匀浇入生抽。",
      "zhHint": "温油激香，生抽提鲜",
      "stateNote": {
        "visual": "Oil glistens on fish surface; soy sauce forms thin, glossy film.",
        "visualZh": "油光润泽鱼身，生抽成薄亮膜。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "A nutty, toasted aroma rises — not burnt or acrid.",
        "signalZh": "散发坚果焦香，无焦糊呛味。"
      }
    }
  ],
  "tips": [
    "Silver pomfret has delicate bones — eat carefully or ask your fishmonger to remove central bone before purchase.",
    "Never oversteam: pomfret turns mushy after 9 minutes, even at 400 g.",
    "For extra clarity, rinse fish in cold green tea instead of water — it removes fishy odor naturally."
  ],
  "tipsZh": [
    "银鲳细刺多——食用需小心，或请鱼贩购前剔除主骨。",
    "切勿过蒸：400克鲳鱼蒸超9分钟即松散失形。",
    "为去腥更彻底，可用冷绿茶代替清水冲洗鱼身。"
  ],
  "relatedSlugs": [
    "steamed-hairy-crab",
    "steamed-bass-with-scallion-oil"
  ],
  "image": "/images/recipes/steamed-pomfret.webp"
};
