import type { Recipe } from "@/lib/types";

/** Pumpkin Mantou (Steamed Pumpkin Buns) (南瓜馒头) — Day batch */
export const pumpkin_mantou: Recipe = {
  "id": "pumpkin-mantou",
  "slug": "pumpkin-mantou",
  "titleEn": "Pumpkin Mantou (Steamed Pumpkin Buns)",
  "titleZh": "南瓜馒头",
  "pinyin": "nán guā mántou",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "easy",
  "timeMin": 145,
  "servings": 10,
  "version": "family",
  "versionNote": "Home versions use steamed fresh pumpkin or canned purée and accept a slightly damp, cakey crumb. Restaurant dim-sum versions often blend in a little wheat starch to make the crumb whiter and springier and the colour more even.",
  "versionNoteZh": "家常版用新鲜蒸南瓜或罐头南瓜泥，组织偏湿润松软、接近蛋糕；茶楼版常掺一点澄面，让组织更白更弹、颜色更均匀。",
  "tags": [
    "steamed-buns",
    "kid-friendly",
    "make-ahead",
    "vegetarian-friendly"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Pumpkin mantou is the compromise every northern family makes in autumn: the pumpkin harvest is endless, and a plain white mantou is boring. The purée replaces most of the water, so the crumb turns golden, faintly sweet, and stays soft a day longer than a plain bun.",
  "storyZh": "南瓜馒头是北方家庭秋天的折中方案：南瓜多得吃不完，白馒头又实在无聊。南瓜泥替掉大部分水，组织变成金黄色、微甜，而且比白馒头多软一天。",
  "ingredients": [
    {
      "id": "pm-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "pinyin": "zhōng jīn miàn fěn",
      "amountMetric": "400 g",
      "amountUS": "3⅓ cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "pm-02",
      "nameEn": "pumpkin purée, smooth",
      "nameZh": "南瓜泥（细腻）",
      "amountMetric": "210 g",
      "amountUS": "¾ cup + 2 tbsp",
      "category": "produce",
      "pantry": "local",
      "note": "Canned 100% pumpkin works 1:1; drain off any pooled liquid",
      "noteZh": "罐头纯南瓜泥可1:1使用；有析出水分要倒掉"
    },
    {
      "id": "pm-03",
      "nameEn": "whole milk, warmed to 35°C",
      "nameZh": "全脂牛奶（加热至35°C）",
      "amountMetric": "50 ml",
      "amountUS": "3 tbsp",
      "category": "dairy",
      "pantry": "local"
    },
    {
      "id": "pm-04",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "amountMetric": "40 g",
      "amountUS": "3 tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "pm-05",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "amountMetric": "4 g",
      "amountUS": "1¼ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "pm-06",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "12 ml",
      "amountUS": "2½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "pm-07",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "amountMetric": "3 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local"
    }
  ],
  "steps": [
    {
      "text": "Steam or microwave the pumpkin until a skewer slides through with no resistance, then mash or blend to a completely smooth purée and cool to 35°C.",
      "textZh": "南瓜蒸或微波至筷子能轻松穿透，压成或打成完全细腻的泥，放凉至35°C。",
      "zhHint": "蒸南瓜制泥",
      "stateNote": {
        "visual": "Purée is deep orange, glossy and lump-free, holding a soft mound on the spoon",
        "visualZh": "泥呈深橙、油亮无颗粒，能在勺上堆成软丘",
        "timeRef": "15 minutes steam",
        "timeRefZh": "蒸15分钟",
        "signal": "No pale stringy fibres remain and a finger dragged through leaves a clean channel",
        "signalZh": "无浅色粗纤维残留，手指划过留下干净的沟"
      },
      "tip": "Hot purée above 40°C will kill the yeast. Check with your finger, not the clock.",
      "tipZh": "超过40°C的南瓜泥会烫死酵母。用手试温，别只看时间。"
    },
    {
      "text": "Stir the yeast and 1 tsp of the sugar into the warm milk and leave 8 minutes.",
      "textZh": "酵母与1茶匙糖搅入温牛奶，静置8分钟。",
      "zhHint": "活化酵母",
      "stateNote": {
        "visual": "A creamy foam cap forms and the surface is stippled with bubbles",
        "visualZh": "表面形成乳白色泡沫盖，布满细密气泡",
        "timeRef": "8 minutes",
        "timeRefZh": "8 分钟",
        "signal": "Foam rises above the milk line and smells yeasty rather than sour",
        "signalZh": "泡沫高出奶面，闻着是酵母香而非酸味"
      }
    },
    {
      "text": "Combine flour, remaining sugar and salt. Add the pumpkin purée, yeast milk and oil, then knead 10-12 minutes.",
      "textZh": "面粉、余下糖与盐混匀，加入南瓜泥、酵母奶液和油，揉10-12分钟。",
      "zhHint": "和面揉面",
      "stateNote": {
        "visual": "Dough is an even apricot-orange with no pale streaks, smooth and only slightly tacky",
        "visualZh": "面团呈均匀杏橙色，无浅色条纹，光滑且微粘手",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "It springs back slowly when pressed and pulls cleanly from the bowl",
        "signalZh": "按压缓慢回弹，并能干净脱离碗壁"
      }
    },
    {
      "text": "Cover and rise at room temperature until doubled, about 70 minutes.",
      "textZh": "加盖室温发酵约70分钟至两倍大。",
      "zhHint": "一发",
      "stateNote": {
        "visual": "Dough has domed high and the surface looks velvety with a faint orange bloom",
        "visualZh": "面团高高隆起，表面如绒，泛淡淡的橙色光",
        "timeRef": "70 minutes",
        "timeRefZh": "70 分钟",
        "signal": "A pressed dent stays for 3 seconds instead of springing back",
        "signalZh": "按出的凹坑静止3秒不回弹"
      }
    },
    {
      "text": "Punch down, knead 3 minutes to degas, roll into a log and cut into 10. Shape each into a tall ball with a taut skin and proof 25 minutes on parchment.",
      "textZh": "排气后揉3分钟，搓成长条切10份，每份收成高挺的圆球（皮要绷紧），垫纸醒发25分钟。",
      "zhHint": "排气收圆二发",
      "stateNote": {
        "visual": "Cut face shows a fine even crumb with no holes larger than a pinhead; shaped buns look puffy and matte-smooth",
        "visualZh": "切面细腻均匀，无超过针尖的孔洞；生坯胀起、表面哑光平滑",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "signal": "A light press springs back slowly leaving a shallow dent that fills in",
        "signalZh": "轻按缓慢回弹，留下很快填平的浅坑"
      }
    },
    {
      "text": "Steam over vigorously boiling water 15 minutes with the lid wrapped in a cloth, rest 5 minutes, then lift the lid away from you.",
      "textZh": "笼布包锅盖、沸水大火蒸15分钟，焖5分钟后开盖（盖子向反方向倾斜）。",
      "zhHint": "大火蒸+焖制",
      "stateNote": {
        "visual": "Buns are plump and glossy with a deep golden-orange skin that springs back when pressed",
        "visualZh": "馒头饱满油亮，外皮呈深金黄橙色，轻按即回弹",
        "timeRef": "15 minutes steam + 5 minutes rest",
        "timeRefZh": "蒸15分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam bursts out on opening and the bun peels cleanly off the parchment",
        "signalZh": "开盖蒸汽喷涌，馒头能干净撕离纸"
      }
    }
  ],
  "tips": [
    "Canned pumpkin purée is often wetter than fresh — if the dough feels sticky, add flour 10 g at a time rather than dumping it in.",
    "Cool the purée to body temperature before it meets the yeast, or you get bricks.",
    "A pinch of salt in the purée makes the pumpkin taste sweeter without adding sugar."
  ],
  "tipsZh": [
    "罐头南瓜泥常比新鲜南瓜湿——面团粘手就每次10克加面粉，别一次倒进去。",
    "南瓜泥务必降到体温再接触酵母，否则蒸出来是砖头。",
    "南瓜泥里加一小撮盐，能不额外加糖就衬出更明显的甜味。"
  ],
  "relatedSlugs": [
    "milk-mantou",
    "cornmeal-mantou",
    "brown-sugar-mantou"
  ],
  "image": "/images/recipes/cornmeal-buns-homestyle.webp"
};
