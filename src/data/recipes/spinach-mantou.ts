import type { Recipe } from "@/lib/types";

/** Spinach Mantou (Steamed Green Buns) (菠菜馒头) — Day batch */
export const spinach_mantou: Recipe = {
  "id": "spinach-mantou",
  "slug": "spinach-mantou",
  "titleEn": "Spinach Mantou (Steamed Green Buns)",
  "titleZh": "菠菜馒头",
  "pinyin": "bō cài mántou",
  "cuisine": "面点小吃",
  "cuisineEn": "Chinese Steamed Buns",
  "region": "Northern China",
  "regionZh": "中国北方",
  "difficulty": "medium",
  "timeMin": 150,
  "servings": 10,
  "version": "family",
  "versionNote": "Home versions rely on blanched spinach purée, which gives a natural but slightly muted green that fades a shade during steaming. Restaurant versions add a tiny pinch of baking soda to the blanching water to lock in a brighter jade colour.",
  "versionNoteZh": "家常版靠焯过的菠菜打泥，颜色天然但略暗，蒸后会再淡一度；店里在焯菜水里加极少量小苏打，能锁住更亮的翠绿。",
  "tags": [
    "steamed-buns",
    "vegetable-forward",
    "kid-friendly",
    "make-ahead"
  ],
  "dietary": [
    "vegetarian"
  ],
  "story": "Green mantou exists for one reason: to get a child to eat a vegetable without a negotiation. The blanch-then-shock step is what keeps the colour from turning olive, and squeezing the spinach bone dry is what keeps the dough from collapsing into a sticky mess.",
  "storyZh": "绿色馒头存在的理由只有一个：不用谈判就能让孩子吃下蔬菜。焯后过冰水是颜色不发橄榄的关键，而把菠菜攥得极干则是面团不至于塌成湿泥的关键。",
  "ingredients": [
    {
      "id": "sm-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "450 g",
      "amountUS": "3¾ cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "sm-02",
      "nameEn": "fresh spinach",
      "nameZh": "菠菜",
      "amountMetric": "150 g",
      "amountUS": "5 cups packed",
      "category": "produce",
      "pantry": "local"
    },
    {
      "id": "sm-03",
      "nameEn": "water for blending",
      "nameZh": "清水（打泥用）",
      "amountMetric": "120 ml",
      "amountUS": "½ cup",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "sm-04",
      "nameEn": "caster sugar",
      "nameZh": "细砂糖",
      "amountMetric": "35 g",
      "amountUS": "2½ tbsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "sm-05",
      "nameEn": "active dry yeast",
      "nameZh": "干酵母",
      "amountMetric": "5 g",
      "amountUS": "1½ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "sm-06",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "amountMetric": "12 ml",
      "amountUS": "2½ tsp",
      "category": "western-pantry",
      "pantry": "local"
    },
    {
      "id": "sm-07",
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
      "text": "Blanch the spinach in boiling water 30 seconds, transfer straight to iced water, then squeeze out every drop of water you can.",
      "textZh": "菠菜沸水焯30秒，立刻过冰水，然后攥干到滴不出水。",
      "zhHint": "焯水过凉攥干",
      "stateNote": {
        "visual": "Leaves have collapsed to a bright jade and the iced water stays clear",
        "visualZh": "叶片塌成鲜亮翠绿，冰水依然清澈",
        "timeRef": "30 seconds blanch + 2 minutes chill",
        "timeRefZh": "焯30秒 + 冰镇2分钟",
        "signal": "Squeezed hard in a fist, no water runs between your fingers",
        "signalZh": "用力攥拳，指缝间不再滴水"
      },
      "tip": "Skip the ice bath and the residual heat cooks the spinach to olive drab.",
      "tipZh": "省掉冰水，余温会把菠菜焐成橄榄灰。"
    },
    {
      "text": "Blend the squeezed spinach with the water to a completely smooth purée.",
      "textZh": "攥干的菠菜加清水打成完全细腻的菜汁。",
      "zhHint": "打菠菜汁",
      "stateNote": {
        "visual": "Purée is an opaque emerald with no visible flecks and pours like thin cream",
        "visualZh": "菜汁呈不透明翠绿，看不到碎屑，流动如稀奶油",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "signal": "No grit remains when you rub a drop between your fingers",
        "signalZh": "取一滴在指间搓开，没有颗粒感"
      }
    },
    {
      "text": "Mix flour, sugar and salt. Add the spinach purée, yeast and oil, then knead 12 minutes until smooth.",
      "textZh": "面粉、糖、盐混匀，倒入菠菜汁、酵母和油，揉12分钟至光滑。",
      "zhHint": "和面揉面",
      "stateNote": {
        "visual": "Dough is a uniform pastel green with no darker streaks and feels firm rather than sticky",
        "visualZh": "面团呈均匀淡绿，无深色条纹，手感偏硬不粘手",
        "timeRef": "12 minutes",
        "timeRefZh": "12 分钟",
        "signal": "It springs back when pressed and cleans the side of the bowl",
        "signalZh": "按压回弹，并能把碗壁刮干净"
      }
    },
    {
      "text": "Cover and rise at room temperature until doubled, about 75 minutes.",
      "textZh": "加盖室温发酵约75分钟至两倍大。",
      "zhHint": "一发",
      "stateNote": {
        "visual": "Dough has domed and the green has deepened slightly as the surface tautens",
        "visualZh": "面团隆起，随着表面绷紧绿色略微加深",
        "timeRef": "75 minutes",
        "timeRefZh": "75 分钟",
        "signal": "A floured finger dent stays put for 3 seconds",
        "signalZh": "沾粉手指按出的凹坑静止3秒不回弹"
      }
    },
    {
      "text": "Degassing knead 3 minutes, cut into 10, shape into tall balls and proof 25 minutes on parchment squares.",
      "textZh": "排气揉3分钟，切10份收成高圆球，垫纸醒发25分钟。",
      "zhHint": "成形二发",
      "stateNote": {
        "visual": "Cut face is an even pale green with a pinhead crumb; shaped buns have gone puffy and velvety",
        "visualZh": "切面淡绿均匀、针尖级气孔；生坯胀起、表面如绒",
        "timeRef": "25 minutes",
        "timeRefZh": "25 分钟",
        "signal": "A light press leaves a shallow dent that slowly fills in",
        "signalZh": "轻按留下缓慢填平的浅坑"
      }
    },
    {
      "text": "Steam over vigorously boiling water 15 minutes with a cloth-wrapped lid, rest 5 minutes, then open the lid away from you.",
      "textZh": "笼布包锅盖、沸水大火蒸15分钟，焖5分钟后向反方向开盖。",
      "zhHint": "大火蒸+焖制",
      "stateNote": {
        "visual": "Buns are plump with a soft jade skin that springs back; the crumb inside is evenly green",
        "visualZh": "馒头饱满，外皮柔润呈淡翠绿且回弹；内部组织均匀碧绿",
        "timeRef": "15 minutes steam + 5 minutes rest",
        "timeRefZh": "蒸15分钟 + 焖5分钟",
        "heat": "high",
        "signal": "Steam bursts out on opening and the bun lifts cleanly off the paper",
        "signalZh": "开盖蒸汽喷涌，馒头能干净脱离纸"
      }
    }
  ],
  "tips": [
    "Squeeze the spinach far drier than feels necessary — wet spinach is what makes green mantou collapse.",
    "Blend the purée smooth; any flecks show up as dark specks in the finished bun.",
    "The colour will always fade one shade in the steamer. That is normal, not a failure."
  ],
  "tipsZh": [
    "菠菜要攥到「过分干」为止——水分没挤干是绿色馒头塌陷的主因。",
    "菜汁一定打细，任何碎渣蒸出来都是黑点。",
    "蒸后颜色必然淡一度，这是正常的，不算失败。"
  ],
  "relatedSlugs": [
    "pumpkin-mantou",
    "milk-mantou",
    "two-tone-flower-rolls"
  ],
  "image": "/images/recipes/white-mantou-steamed-buns.webp"
};
