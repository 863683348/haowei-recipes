import type { Recipe } from "@/lib/types";

/** Red Bean Soup (Hong Dou Sha) (红豆沙) — Seed batch */
export const red_bean_soup_hong_dou_sha: Recipe = {
  "id": "hong-dou-sha",
  "slug": "red-bean-soup-hong-dou-sha",
  "titleEn": "Red Bean Soup (Hong Dou Sha)",
  "titleZh": "红豆沙",
  "pinyin": "hóng dòu shā",
  "cuisine": "甜品饮品",
  "cuisineEn": "Dessert & Beverage",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "easy",
  "timeMin": 45,
  "servings": 4,
  "version": "family",
  "versionNote": "This is the slow-simmered, unthickened version Grandma Li made in Foshan — no cornstarch, no canned beans, just patience and a clay pot.",
  "versionNoteZh": "这是佛山李奶奶用砂锅慢熬的家常版——不加玉米淀粉，不用罐头豆，只靠耐心与火候。",
  "tags": [
    "45-min",
    "make-ahead",
    "comfort"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "My aunt in Foshan still stirs red bean soup every Sunday morning while listening to Cantonese opera on the radio. She says her mother taught her to soak the beans overnight in rainwater — now she uses filtered water, but insists the beans must ‘breathe’ for 8 hours before cooking.",
  "storyZh": "我在佛山的姑妈每逢周日清晨都会边听粤剧广播边搅动红豆沙。她说母亲教她用雨水泡豆——如今改用过滤水，但仍坚持豆子要‘呼吸’8小时再下锅。",
  "ingredients": [
    {
      "id": "rd-01",
      "nameEn": "dried adzuki beans",
      "nameZh": "赤小豆（非红豆）",
      "pinyin": "chì xiǎo dòu",
      "amountMetric": "200 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "True hong dou are small, dark red, and split easily — not the larger, pale 'red beans' sometimes mislabeled in US bulk bins.",
      "noteZh": "正宗赤小豆颗粒小、深红、易煮烂；非超市散装区误标为‘red beans’的大颗浅红色豆。"
    },
    {
      "id": "rd-02",
      "nameEn": "granulated cane sugar",
      "nameZh": "白砂糖",
      "pinyin": "bái shā táng",
      "amountMetric": "80 g",
      "amountUS": "1/3 cup",
      "category": "western-pantry",
      "pantry": "local",
      "note": "Do not substitute brown sugar — it clouds the color and adds molasses notes that clash with the clean bean flavor.",
      "noteZh": "不可用红糖替代——会令汤色浑浊，且焦糖味破坏豆沙本味。"
    },
    {
      "id": "rd-03",
      "nameEn": "rock sugar (optional, for gloss)",
      "nameZh": "冰糖（可选，增亮）",
      "pinyin": "bīng táng",
      "amountMetric": "30 g",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Adds subtle sweetness and a translucent sheen; omit if unavailable — regular sugar works fine.",
      "noteZh": "增添清甜与透亮光泽；若无可用白砂糖代替。"
    },
    {
      "id": "rd-04",
      "nameEn": "water (for soaking and cooking)",
      "nameZh": "清水（浸泡及煮制用）",
      "pinyin": "qīng shuǐ",
      "amountMetric": "1200 ml",
      "amountUS": "5 cups",
      "category": "other",
      "pantry": "local",
      "note": "Use filtered water for best clarity and mild taste.",
      "noteZh": "推荐使用过滤水，汤色更清亮，味道更柔和。"
    }
  ],
  "steps": [
    {
      "text": "Rinse adzuki beans under cold water until runoff runs clear. Place in a bowl, cover with 800 ml (3½ cups) cool filtered water, and soak overnight (at least 8 hours) at room temperature.",
      "textZh": "赤小豆冷水淘洗至水清，放入碗中，加800毫升（3½杯）凉过滤水，室温浸泡过夜（至少8小时）。",
      "zhHint": "浸泡是关键一步",
      "stateNote": {
        "visual": "Beans plump and nearly double in size, skins slightly wrinkled",
        "visualZh": "豆粒胀大近一倍，表皮微皱",
        "timeRef": "8 hours",
        "timeRefZh": "8 小时",
        "signal": "No hard center when bitten — they should yield fully",
        "signalZh": "咬开无硬芯，完全软糯"
      },
      "tip": "Soaking reduces cooking time and prevents splitting during simmering.",
      "tipZh": "浸泡可缩短煮制时间，并防止豆子在熬煮时爆裂。"
    },
    {
      "text": "Drain soaked beans and transfer to a heavy-bottomed pot or clay pot. Add 400 ml (1¾ cups) fresh filtered water. Bring to a gentle boil over medium-high heat, then immediately reduce to low heat.",
      "textZh": "倒掉泡豆水，豆子入厚底锅或砂锅，加400毫升（1¾杯）新过滤水。中大火烧沸后，立刻转最小火。",
      "zhHint": "沸后即转小火",
      "stateNote": {
        "visual": "Tiny bubbles barely breaking surface, steam rising in thin wisps",
        "visualZh": "水面仅见细密小泡，蒸汽如轻烟升起",
        "timeRef": "1–2 minutes",
        "timeRefZh": "1–2 分钟",
        "heat": "low",
        "signal": "A faint, sweet, beany aroma begins to rise",
        "signalZh": "飘出淡淡豆香与甜气"
      },
      "tip": "Never stir vigorously after boiling — gentle folding only preserves whole beans.",
      "tipZh": "煮沸后切忌大力搅拌——仅需轻柔翻拌，保持豆粒完整。"
    },
    {
      "text": "Simmer uncovered for 30 minutes, gently folding beans every 8–10 minutes with a wooden spoon. Skim off any foam that rises to the surface.",
      "textZh": "敞盖小火慢熬30分钟，每8–10分钟用木勺轻柔翻拌一次，并撇去浮沫。",
      "zhHint": "勤撇沫，保清亮",
      "stateNote": {
        "visual": "Liquid turns pale pinkish-brown and slightly thickens around beans",
        "visualZh": "汤汁呈淡粉褐色，豆周略显浓稠",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "low",
        "signal": "Beans begin to burst open naturally at seams, releasing creamy insides",
        "signalZh": "豆子沿缝隙自然绽开，露出细腻豆沙瓤"
      }
    },
    {
      "text": "Add sugar and rock sugar. Stir gently until dissolved, then continue simmering uncovered for another 10 minutes. Do not boil rapidly — maintain a bare simmer.",
      "textZh": "加入白砂糖与冰糖，轻柔搅至融化，再小火续煮10分钟。全程保持微沸，切勿滚煮。",
      "zhHint": "糖后小火续煮",
      "stateNote": {
        "visual": "Soup deepens to warm amber, glossy and lightly clinging to spoon",
        "visualZh": "汤色转为暖琥珀色，有光泽，勺面薄挂一层",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "low",
        "signal": "A thin film forms on surface when cooled slightly",
        "signalZh": "稍冷却后表面浮现薄薄一层油润膜"
      }
    },
    {
      "text": "Turn off heat. Let cool slightly, then use a potato masher or fork to lightly crush 1/3 of the beans — just enough to thicken the broth without making it pasty. Cool to room temperature before serving chilled or warm.",
      "textZh": "关火，稍晾凉后，用压泥器或叉子轻压约三分之一豆子——仅增稠汤体，不求成泥。",
      "zhHint": "保留部分整豆口感",
      "stateNote": {
        "visual": "Broth is velvety with visible whole and crushed beans, no lumps",
        "visualZh": "汤体丝滑，可见整豆与碎沙共存，无结块",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "Ladle reveals gentle resistance, not watery or gluey",
        "signalZh": "勺起微阻，不稀薄也不黏滞"
      }
    }
  ],
  "tips": [
    "Serve warm in winter, chilled in summer — never ice-cold, as it dulls the bean fragrance.",
    "For smoother texture, pass half the soup through a fine-mesh sieve — but keep some whole beans for authenticity.",
    "Leftovers keep 5 days refrigerated; reheat gently — do not boil again."
  ],
  "tipsZh": [
    "冬暖夏凉，但切忌冰镇过冷，以免掩盖豆香。",
    "若喜顺滑口感，可将一半汤汁过细筛，但仍需保留部分整豆以保地道风味。",
    "冷藏可存5天；复热务必轻柔，切勿再次煮沸。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/red-bean-soup-hong-dou-sha.webp"
};
