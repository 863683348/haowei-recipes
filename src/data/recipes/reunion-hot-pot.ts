import type { Recipe } from "@/lib/types";

/** Reunion Hot Pot (团圆火锅) — Seed batch */
export const reunion_hot_pot: Recipe = {
  "id": "tuan-yuan-huo-guo",
  "slug": "reunion-hot-pot",
  "titleEn": "Reunion Hot Pot",
  "titleZh": "团圆火锅",
  "pinyin": "tuán yuán huǒ guō",
  "cuisine": "家常",
  "cuisineEn": "Home-style",
  "region": "Chengdu",
  "regionZh": "成都",
  "difficulty": "medium",
  "timeMin": 90,
  "servings": 4,
  "version": "family",
  "versionNote": "No commercial base needed—simmered from scratch with dried chilies, Sichuan peppercorns, star anise, and roasted aromatics. Mild enough for kids, layered enough for elders. Includes non-spicy 'yin' broth option.",
  "versionNoteZh": "不用市售底料——自熬红汤：干辣椒、花椒、八角与烤香辛料。辣度适中宜老幼，另配清汤‘阴’锅。",
  "tags": [
    "chinese-new-year-feast",
    "shared-meal",
    "customizable"
  ],
  "dietary": [
    "none"
  ],
  "story": "My uncle in Chengdu’s Jianshe Road ran a tiny hot pot stall where families gathered every Lunar New Year’s Day. He’d ladle two broths side-by-side—one fiery red, one milky white—and say, 'Yin and yang must sit together at the table.' We’d dip lamb, lotus root, and handmade fish balls, laughing as steam fogged our glasses.",
  "storyZh": "我成都建设路的舅舅开过一家小火锅摊，每年正月初一都有全家来围坐。他总是一左一右舀两锅汤——一锅赤红，一锅乳白，说：'阴阳要同桌。'我们涮羊肉、藕片、手打鱼丸，笑声伴着水汽模糊了眼镜。",
  "ingredients": [
    {
      "id": "ty-01",
      "nameEn": "dried red chilies, stemmed and roughly chopped",
      "nameZh": "干红辣椒，去蒂粗切",
      "pinyin": "gān hóng là jiāo",
      "amountMetric": "20 g",
      "amountUS": "1/4 cup",
      "category": "spice",
      "pantry": "asian",
      "note": "Substitute 1 tbsp crushed red pepper flakes if unavailable.",
      "noteZh": "无干辣椒可用1汤匙辣椒碎替代。"
    },
    {
      "id": "ty-02",
      "nameEn": "Sichuan peppercorns",
      "nameZh": "花椒",
      "pinyin": "huā jiāo",
      "amountMetric": "5 g",
      "amountUS": "1 tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "sichuan-peppercorn"
    },
    {
      "id": "ty-03",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "3 pcs",
      "amountUS": "3 whole",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "ty-04",
      "nameEn": "ginger, thick slice, smashed",
      "nameZh": "老姜，厚片拍松",
      "pinyin": "lǎo jiāng",
      "amountMetric": "30 g",
      "amountUS": "1 large knob (about 2-inch piece)",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "ty-05",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    }
  ],
  "steps": [
    {
      "text": "Dry-toast dried chilies, Sichuan peppercorns, and star anise in wok over medium-low heat until fragrant and slightly darkened (~3 min). Cool, then grind coarsely.",
      "textZh": "干辣椒、花椒、八角入锅，中小火干焙至出香、颜色微深（约3分钟）。晾凉后粗磨。",
      "zhHint": "焙香增韵",
      "stateNote": {
        "visual": "Spices puff slightly; surface gains matte sheen",
        "visualZh": "香料微微蓬起；表面呈哑光",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium-low",
        "signal": "Aroma shifts from raw to warm, nutty, and floral",
        "signalZh": "香气由生涩转为暖香、坚果香与花香"
      }
    },
    {
      "text": "Heat 2 tbsp neutral oil in heavy pot. Stir-fry smashed ginger, 3 minced garlic cloves, and 2 chopped scallions until golden (~2 min). Add ground spice mix and cook 1 more minute.",
      "textZh": "厚底锅烧热2汤匙中性油，爆香拍姜、3瓣蒜末、2根葱段至金黄（约2分钟）；加磨好的香料粉，再炒1分钟。",
      "zhHint": "油润香透",
      "stateNote": {
        "visual": "Oil turns deep red-orange; spices sizzle steadily",
        "visualZh": "油色转深红橙；香料持续微响",
        "timeRef": "3 minutes total",
        "timeRefZh": "共3 分钟",
        "heat": "medium",
        "signal": "Fragrance becomes rich and penetrating—not sharp or acrid",
        "signalZh": "香气浓郁醇厚，不刺鼻不焦苦"
      }
    },
    {
      "text": "Add 1.5 L water, 2 tbsp light soy sauce, 1 tbsp Shaoxing wine, and 1 tsp salt. Simmer uncovered 45 minutes. Strain broth; discard solids.",
      "textZh": "加1.5升水、2汤匙生抽、1汤匙绍酒、1茶匙盐，敞盖小火熬45分钟。滤去渣滓。",
      "zhHint": "久熬出醇",
      "stateNote": {
        "visual": "Broth reduces slightly; surface shows oily sheen and fine foam",
        "visualZh": "汤略收；表面浮油光与细沫",
        "timeRef": "45 minutes",
        "timeRefZh": "45 分钟",
        "heat": "low",
        "signal": "Steam rises in steady, quiet waves—not rolling or spitting",
        "signalZh": "蒸汽平稳静升，不翻滚不溅射"
      }
    },
    {
      "text": "For 'yin' broth: Simmer 1 L water with 100 g pork bones, 1 piece dried tangerine peel, and 10 g goji berries for 30 minutes. Strain.",
      "textZh": "‘阴’汤：1升水+100克猪骨+1小片陈皮+10克枸杞，小火煲30分钟，滤清。",
      "zhHint": "清补相济",
      "tip": "Use same pot—just rinse after straining red broth. Yin broth needs no salt; goji adds natural sweetness.",
      "tipZh": "同锅使用——红汤滤后冲洗即可。阴汤不需盐，枸杞自带甘甜。"
    },
    {
      "text": "Set up dual burners or electric hot pot: red broth in center, yin broth in outer ring. Arrange raw ingredients (thin-sliced lamb, tofu, enoki, napa cabbage, fish balls) around rim. Serve with chili oil and fermented bean paste dipping sauce.",
      "textZh": "双头炉或电火锅：红汤居中，阴汤环周。生鲜食材（羊肉薄片、豆腐、金针菇、娃娃菜、鱼丸）围边码放。配红油与豆瓣酱蘸碟。",
      "zhHint": "阴阳同锅",
      "stateNote": {
        "visual": "Red broth simmers vigorously; yin broth shimmers gently",
        "visualZh": "红汤翻滚；阴汤微漾",
        "timeRef": "immediately before serving",
        "timeRefZh": "上桌即刻",
        "signal": "First bubbles break surface in both pots simultaneously",
        "signalZh": "两锅同时初沸冒泡"
      }
    }
  ],
  "tips": [
    "Freeze lamb 20 minutes before slicing—it yields paper-thin, even cuts",
    "Add leafy greens last—they cook in under 30 seconds",
    "Leftover red broth freezes well for future soups or noodle bases"
  ],
  "tipsZh": [
    "羊肉冷冻20分钟再切——得纸薄均匀片",
    "绿叶菜最后下锅——烫30秒即熟",
    "剩余红汤可冷冻，作后续汤品或面汤底"
  ],
  "relatedSlugs": [
    "man-han-family-feast-combo",
    "whole-family-blessing-casserole"
  ],
  "image": "/images/recipes/reunion-hot-pot.webp"
};
