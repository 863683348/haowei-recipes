import type { Recipe } from "@/lib/types";

/** Soup Dumplings Tangbao (Guan Tang Bao) (灌汤包) — Day batch */
export const soup_dumplings_tangbao: Recipe = {
  "id": "soup-dumplings-tangbao",
  "slug": "soup-dumplings-tangbao",
  "titleEn": "Soup Dumplings Tangbao (Guan Tang Bao)",
  "titleZh": "灌汤包",
  "pinyin": "guàn tāng bāo",
  "cuisine": "淮扬菜",
  "cuisineEn": "Huaiyang",
  "region": "Jiangsu (Yangzhou / Shanghai)",
  "regionZh": "江苏扬州 / 上海",
  "difficulty": "hard",
  "timeMin": 240,
  "servings": 12,
  "version": "family",
  "versionNote": "Home tangbao use a cold pork-skin aspic folded into the filling, which melts into soup when steamed. Shanghai restaurant versions use a partially leavened dough wrapped paper-thin with 18-24 pleats and a much higher aspic ratio, which is why theirs hold more soup — and why theirs are a full-time job.",
  "versionNoteZh": "家常灌汤包把冷却的猪皮冻拌进馅里，蒸时化成汤。上海馆子用半发面擀得薄如纸，捏18-24道褶，皮冻比例更高，所以汤更多——也因此那是份全职工作。",
  "tags": [
    "baozi",
    "soup-dumplings",
    "advanced",
    "steamed"
  ],
  "dietary": [
    "none"
  ],
  "story": "The soup in a tangbao is not poured in — it is solid when it goes in and liquid when it comes out. That is the entire trick, and it is about a thousand years old: simmer pork skin until the collagen dissolves, chill it until it sets to a firm jelly, dice it, and fold it through raw filling. Steam melts the jelly back to broth inside a sealed bun. Every failed tangbao is a bun where the aspic was too soft, the seal had a gap, or both.",
  "storyZh": "灌汤包里的汤不是灌进去的——进去时是固体，出来时是液体。这就是全部的诀窍，而且已有一千年历史：把猪皮熬到胶质溶出，冷藏凝成硬冻，切丁后拌进生馅；上笼一蒸，皮冻在密闭的包子里化回汤。每一个失败的灌汤包，要么是皮冻太软，要么是收口有缝，要么两者皆有。",
  "ingredients": [
    {
      "id": "tb-01",
      "nameEn": "all-purpose flour",
      "nameZh": "中筋面粉",
      "amountMetric": "400 g",
      "amountUS": "3¼ cups",
      "category": "staple",
      "pantry": "local"
    },
    {
      "id": "tb-02",
      "nameEn": "cold water, for the dough",
      "nameZh": "冷水（和面用）",
      "amountMetric": "200 ml",
      "amountUS": "¾ cup + 1 tbsp",
      "category": "other",
      "pantry": "local"
    },
    {
      "id": "tb-03",
      "nameEn": "pork skin, cleaned and blanched",
      "nameZh": "猪皮（刮净汆水）",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local"
    },
    {
      "id": "tb-04",
      "nameEn": "ground pork (20% fat)",
      "nameZh": "猪肉末（二分肥八分瘦）",
      "amountMetric": "350 g",
      "amountUS": "12 oz",
      "category": "protein",
      "pantry": "local",
      "termKey": "pork-mince"
    },
    {
      "id": "tb-05",
      "nameEn": "fresh ginger, minced",
      "nameZh": "生姜（切末）",
      "amountMetric": "15 g",
      "amountUS": "1 tbsp",
      "category": "produce",
      "pantry": "local",
      "termKey": "ginger"
    },
    {
      "id": "tb-06",
      "nameEn": "scallions, finely sliced",
      "nameZh": "小葱（切细）",
      "amountMetric": "40 g",
      "amountUS": "½ cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "tb-07",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "amountMetric": "25 ml",
      "amountUS": "1 tbsp + 2 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "tb-08",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "amountMetric": "20 ml",
      "amountUS": "1 tbsp + 1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "tb-09",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    },
    {
      "id": "tb-10",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "amountMetric": "3 g",
      "amountUS": "¾ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "tb-11",
      "nameEn": "fine sea salt",
      "nameZh": "细海盐",
      "amountMetric": "7 g",
      "amountUS": "1¼ tsp",
      "category": "spice",
      "pantry": "local"
    },
    {
      "id": "tb-12",
      "nameEn": "Chinkiang vinegar, for dipping",
      "nameZh": "镇江香醋（蘸食用）",
      "amountMetric": "30 ml",
      "amountUS": "2 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "chinkiang-vinegar"
    }
  ],
  "steps": [
    {
      "text": "Scrape the pork skin clean of fat, blanch 5 minutes, then slice thin and simmer in 900 ml water with ginger and scallion over low heat 90 minutes until the liquid is reduced by half and noticeably sticky.",
      "textZh": "猪皮刮净油脂，汆水5分钟后切细条，加900毫升水与姜葱小火熬90分钟，至汤汁收半并明显发黏。",
      "zhHint": "熬猪皮汤",
      "stateNote": {
        "visual": "Liquid has turned pale ivory and thickens enough to coat the back of a spoon; the skin strips are soft and shrunken",
        "visualZh": "汤汁转为浅象牙白，浓到能挂住勺背；猪皮条变软收缩",
        "timeRef": "90 minutes",
        "timeRefZh": "90 分钟",
        "heat": "low",
        "signal": "A drop between finger and thumb pulls into a short thread"
      }
    },
    {
      "text": "Strain the liquid through a sieve, pressing the solids, discard them, and refrigerate the broth at least 3 hours until it sets firmly.",
      "textZh": "汤汁过筛并压出残渣，渣滓弃去，汤汁冷藏至少3小时至彻底凝固。",
      "zhHint": "过滤冷凝",
      "stateNote": {
        "visual": "The stock has become a pale, opaque, rubbery slab that holds a cut edge and wobbles when the bowl is tapped",
        "visualZh": "汤汁凝成浅色不透明的胶质块，切面平整，敲碗时会晃动",
        "timeRef": "3 hours chilling",
        "timeRefZh": "冷藏3小时",
        "signal": "Turned out, it holds its shape and does not slump at room temperature for several minutes",
        "signalZh": "脱模后能保持形状，室温下数分钟不塌"
      },
      "tip": "If it does not set, simmer it down further. Weak aspic is the single most common reason tangbao come out dry."
    },
    {
      "text": "Knead flour and salt into the cold water 12 minutes to a firm, smooth dough — no yeast. Wrap and rest 30 minutes, then knead 3 minutes more until silky.",
      "textZh": "面粉加盐与冷水揉12分钟成光滑硬面团——不放酵母。包好醒30分钟，再揉3分钟至柔滑。",
      "zhHint": "和死面醒面",
      "stateNote": {
        "visual": "Dough is very smooth, slightly translucent at a thin edge and springs back firmly when pressed",
        "visualZh": "面团极为光滑，擀薄边缘微透，按压后迅速回弹",
        "timeRef": "30 minutes rest",
        "timeRefZh": "醒30分钟",
        "signal": "A finger dent fills back in within a second",
        "signalZh": "手指凹坑一秒内回弹"
      }
    },
    {
      "text": "Stir pork mince with soy sauce, wine, ginger, white pepper and salt in one direction 3 minutes until sticky. Dice the aspic into ½ cm cubes and fold it through with the scallions and sesame oil. Chill 20 minutes.",
      "textZh": "猪肉末加生抽、黄酒、姜末、白胡椒与盐顺一个方向搅3分钟至发黏；皮冻切半厘米丁，与葱花、香油一起拌入。冷藏20分钟。",
      "zhHint": "拌馅入冻",
      "stateNote": {
        "visual": "Filling is a matte pink meat paste studded with pale, translucent jelly cubes that are still sharp-cornered and separate",
        "visualZh": "馅料为哑光粉色肉糊，嵌着浅色半透明的皮冻丁，棱角分明、互不粘连",
        "timeRef": "8 minutes + 20 minutes chilling",
        "timeRefZh": "8分钟 + 冷藏20分钟",
        "signal": "The jelly cubes stay distinct when the filling is scooped — none has smeared into the meat",
        "signalZh": "舀馅时皮冻丁仍然粒粒分明——没有一粒化进肉里"
      },
      "tip": "Everything must be cold. Warm filling melts the aspic and you lose the soup before you even wrap."
    },
    {
      "text": "Roll the dough into 12 wrappers about 10 cm across, thin at the rim. Place 2 tbsp filling in each and pleat closed with 14-18 small pleats, sealing the top completely. Chill 10 minutes.",
      "textZh": "面团分12份，擀成直径约10厘米、边缘薄的皮；每张放2汤匙馅，捏14-18道细褶完全收口。冷藏10分钟。",
      "zhHint": "擀皮包制",
      "stateNote": {
        "visual": "Buns are closed at the crown with no hole, the pleats are fine and even, and the wrapper is thin enough to see the pale filling shadow through",
        "visualZh": "包子顶部完全封口无孔，褶纹细密均匀，面皮薄到能透出馅心的浅色影子",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "Pinch the crown and twist: no gap opens anywhere along the pleats",
        "signalZh": "捏住顶部轻拧：褶缝任何一处都不张开"
      }
    },
    {
      "text": "Line the steamer with parchment, space the buns well apart, and steam over vigorously boiling water 10 minutes. Do not open the lid; serve immediately with Chinkiang vinegar.",
      "textZh": "蒸笼垫纸，包子留出间距，沸水大火蒸10分钟。全程不要揭盖；出笼即配镇江香醋上桌。",
      "zhHint": "蒸制",
      "stateNote": {
        "visual": "Buns sit slumped and glossy with a visibly liquid interior that sloshes when the bun is lifted carefully; the wrapper is translucent",
        "visualZh": "包子微微下塌、表面油亮，小心提起时能感到内部液体晃动；面皮呈半透明",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "high",
        "signal": "Lift one gently with chopsticks: it feels like a small water balloon rather than a solid bun",
        "signalZh": "用筷子轻轻夹起一个：手感像小水球，而不是实心包子"
      },
      "tip": "Ten minutes, not twelve. Over-steaming expands the steam inside and bursts the bun."
    }
  ],
  "tips": [
    "The aspic must set rock-firm. Soft jelly melts while you wrap and you end up with plain pork buns.",
    "Work cold and fast once the aspic is in the filling.",
    "Seal the crown completely — any pinhole is where the soup escapes.",
    "Ten minutes only, and do not lift the lid mid-steam."
  ],
  "tipsZh": [
    "皮冻必须凝得像石头一样硬。冻太软，包的时候就化了，最后只剩普通肉包。",
    "皮冻拌进馅之后，动作要冷、要快。",
    "顶部必须完全封死——任何一个针眼都会漏汤。",
    "只蒸十分钟，中途绝对不要揭盖。"
  ],
  "relatedSlugs": [
    "shanghai-shengjian-bao",
    "fresh-pork-baozi",
    "shanghai-style-guotie"
  ],
  "image": "/images/recipes/shanghai-shengjian-bao.webp"
};
