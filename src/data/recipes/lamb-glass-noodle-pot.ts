import type { Recipe } from "@/lib/types";

/** Lamb & Glass Noodle Pot (羊肉粉丝煲) (羊肉粉丝煲) — Day batch */
export const lamb_glass_noodle_pot: Recipe = {
  "id": "yang-rou-fen-si-bao",
  "slug": "lamb-glass-noodle-pot",
  "titleEn": "Lamb & Glass Noodle Pot (羊肉粉丝煲)",
  "titleZh": "羊肉粉丝煲",
  "pinyin": "yáng ròu fěn sī bāo",
  "cuisine": "家常菜",
  "cuisineEn": "Home-style Chinese",
  "region": "Northern China",
  "regionZh": "北方",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 3,
  "version": "family",
  "versionNote": "Family version builds a quick lamb broth, then simmers glass noodles and leafy greens in a claypot so everything soaks up the savory lamb flavor at the table.",
  "versionNoteZh": "家常版先吊快手羊汤，再入砂锅与粉丝、青菜同煨，上桌时尽吸羊鲜。",
  "tags": [
    "hot-pot",
    "noodles",
    "one-pot",
    "lamb"
  ],
  "dietary": [
    "halal"
  ],
  "story": "A claypot of this bubbling on the table is the northern answer to hot pot — everyone dips in, the noodles drinking the broth last.",
  "storyZh": "桌上咕嘟一砂锅，是北方的火锅答复——人人伸筷，最后粉丝吸饱汤。",
  "ingredients": [
    {
      "id": "ln-01",
      "nameEn": "lamb slices (hot-pot style)",
      "nameZh": "羊肉片（火锅式）",
      "pinyin": "yáng ròu piàn",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Thin slices cook in seconds; sub with beef if needed.",
      "noteZh": "薄片秒熟；无羊肉可用牛肉替代。"
    },
    {
      "id": "ln-02",
      "nameEn": "glass noodles (mung bean vermicelli)",
      "nameZh": "绿豆粉丝",
      "pinyin": "fěn sī",
      "amountMetric": "80 g",
      "amountUS": "2 bundles",
      "category": "staple",
      "pantry": "asian",
      "termKey": "vermicelli"
    },
    {
      "id": "ln-03",
      "nameEn": "baby bok choy",
      "nameZh": "小白菜",
      "pinyin": "xiǎo bái cài",
      "amountMetric": "150 g",
      "amountUS": "4 heads",
      "category": "produce",
      "pantry": "local",
      "termKey": "baby-bok-choy"
    },
    {
      "id": "ln-04",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "生姜（切片）",
      "pinyin": "shēng jiāng",
      "amountMetric": "15 g",
      "amountUS": "2 slices",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ln-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "20 ml",
      "amountUS": "1.5 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "ln-06",
      "nameEn": "sesame oil",
      "nameZh": "芝麻油",
      "pinyin": "zhī ma yóu",
      "amountMetric": "10 ml",
      "amountUS": "2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Soak glass noodles in warm water 10 minutes until pliable; drain.",
      "textZh": "粉丝温水泡10分钟至软，沥干。",
      "zhHint": "泡软粉丝",
      "stateNote": {
        "visual": "Noodles bend without snapping.",
        "visualZh": "粉丝弯而不折。",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "signal": "No hard white core remains.",
        "signalZh": "无硬白芯。"
      }
    },
    {
      "text": "In a claypot or pot, bring 600 ml water with ginger and light soy to a boil, then add lamb slices and cook 1 minute.",
      "textZh": "砂锅加水600ml、姜片、生抽煮沸，下羊肉片煮1分钟。",
      "zhHint": "吊汤下肉",
      "stateNote": {
        "visual": "Lamb turns from pink to opaque white.",
        "visualZh": "羊肉由粉转白不透明。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "high",
        "signal": "Broth clouds lightly and smells meaty.",
        "signalZh": "汤略浊，肉香起。"
      }
    },
    {
      "text": "Add noodles and bok choy; simmer 3 minutes until noodles are translucent and greens wilt.",
      "textZh": "下粉丝与小白菜，煮3分钟至粉丝透亮、菜软。",
      "zhHint": "下粉下菜",
      "stateNote": {
        "visual": "Noodles clear and slippery; bok choy brightens.",
        "visualZh": "粉丝透亮顺滑，小白菜转翠。",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "Noodles no longer chalky.",
        "signalZh": "粉丝不再粉感。"
      }
    },
    {
      "text": "Drizzle sesame oil and taste for salt; keep the pot gently bubbling at the table.",
      "textZh": "淋芝麻油尝咸淡，上桌保持微沸。",
      "zhHint": "淋油保温",
      "stateNote": {
        "visual": "Oil pearls on the surface; pot gives a lazy simmer.",
        "visualZh": "油珠浮面，砂锅懒沸。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "low",
        "signal": "Nutty sesame aroma lifts the broth.",
        "signalZh": "芝麻焦香提汤。"
      }
    },
    {
      "text": "Serve straight from the pot; slurp noodles last to catch the fullest broth.",
      "textZh": "原锅上桌；最后嗦粉，吸尽浓汤。",
      "zhHint": "原锅分食",
      "stateNote": {
        "visual": "Noodles glossy, clinging to broth.",
        "visualZh": "粉丝油亮，挂满汤汁。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Everything tastes of lamb.",
        "signalZh": "样样皆染羊鲜。"
      }
    }
  ],
  "tips": [
    "Soak noodles first or they drink all the broth raw.",
    "Use a claypot if you have one — it keeps the stew bubbling at the table.",
    "Add greens last so they stay crisp-tender."
  ],
  "tipsZh": [
    "先泡粉丝，否则生粉吸干汤。",
    "有砂锅最好，上桌仍咕嘟。",
    "青菜最后下，保脆嫩。"
  ],
  "relatedSlugs": [
    "radish-lamb-stew",
    "lamb-pilaf",
    "hand-torn-lamb",
    "sour-soup-lamb"
  ],
  "image": "/images/recipes/og-default.webp"
};
