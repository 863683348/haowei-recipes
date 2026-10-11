import type { Recipe } from "@/lib/types";

/** Henan Stewed Noodles (河南烩面) — Day batch */
export const henan_stewed_noodles: Recipe = {
  "id": "henan-stewed-noodles",
  "slug": "henan-stewed-noodles",
  "titleEn": "Henan Stewed Noodles",
  "titleZh": "河南烩面",
  "pinyin": "hé nán huì miàn",
  "cuisine": "豫菜",
  "cuisineEn": "Henan",
  "region": "Henan",
  "regionZh": "河南",
  "difficulty": "medium",
  "timeMin": 70,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version simmers lamb bones once and uses that single broth; restaurant versions keep a bone broth going all day, adding water and bones as it draws down, which is why shop bowls taste so much deeper.",
  "versionNoteZh": "家常版一次炖羊骨取汤；餐厅版羊骨汤整天续水续骨不停火，这是店里那碗格外醇厚的原因。",
  "tags": [
    "70-min",
    "noodles",
    "lamb",
    "stew",
    "henan"
  ],
  "dietary": [
    "none"
  ],
  "story": "Hui mian is Henan in a bowl. The broth is lamb, milky white from long simmering; the noodles are wide, thick ribbons pulled by hand and dropped straight into the broth so their starch thickens it; and everything — glass noodles, wood ear, greens — is stewed together rather than assembled. Zhengzhou locals eat it at breakfast, in a bowl the size of a small basin.",
  "storyZh": "烩面就是碗里的河南。羊骨久炖出奶白汤；面条是手工抻出的宽厚面片，直接下进汤里，用本身的淀粉把汤收稠；粉条、木耳、青菜全在一起烩而不是分次码放。郑州人拿它当早饭，碗有小盆那么大。",
  "ingredients": [
    {
      "id": "hn-01",
      "nameEn": "wide fresh wheat noodles",
      "nameZh": "宽鲜面条",
      "pinyin": "kuān xiān miàn",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "staple",
      "pantry": "asian",
      "note": "Wide hand-pulled style noodles from the chilled case; dried wide 'belt' noodles are a fair substitute",
      "noteZh": "冷藏柜的宽拉面；干宽『皮带面』也可替代"
    },
    {
      "id": "hn-02",
      "nameEn": "lamb shoulder, cut into thin slices",
      "nameZh": "羊肩肉，切薄片",
      "pinyin": "yáng jiān ròu",
      "amountMetric": "300 g",
      "amountUS": "10 oz",
      "category": "protein",
      "pantry": "local",
      "note": "Shoulder stays tender with long simmering; if lamb is hard to find, use beef chuck",
      "noteZh": "羊肩久炖仍嫩；买不到羊肉可用牛肩代替"
    },
    {
      "id": "hn-03",
      "nameEn": "sweet potato glass noodles",
      "nameZh": "红薯粉条",
      "pinyin": "fěn tiáo",
      "amountMetric": "50 g dried",
      "amountUS": "1¾ oz dried",
      "category": "staple",
      "pantry": "asian",
      "note": "Soak 20 minutes in warm water first; they go in near the end",
      "noteZh": "先用温水泡发20分钟，接近最后才下锅",
      "termKey": "vermicelli"
    },
    {
      "id": "hn-04",
      "nameEn": "wood ear mushrooms, soaked and torn",
      "nameZh": "木耳，泡发撕小朵",
      "pinyin": "mù ěr",
      "amountMetric": "10 g dried",
      "amountUS": "⅓ cup dried",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak 20 minutes and trim the hard knot at the base",
      "noteZh": "泡发20分钟，剪去根部硬结",
      "termKey": "wood-ear"
    },
    {
      "id": "hn-05",
      "nameEn": "baby bok choy, halved",
      "nameZh": "小白菜，剖半",
      "pinyin": "xiǎo bái cài",
      "amountMetric": "200 g",
      "amountUS": "3–4 heads",
      "category": "produce",
      "pantry": "asian",
      "termKey": "baby-bok-choy"
    },
    {
      "id": "hn-06",
      "nameEn": "fresh ginger, sliced",
      "nameZh": "鲜姜，切片",
      "pinyin": "jiāng piàn",
      "amountMetric": "15 g",
      "amountUS": "4 slices",
      "category": "produce",
      "pantry": "local",
      "note": "Henan cooks are liberal with ginger in lamb — it is the main defence against gaminess",
      "noteZh": "河南人炖羊肉舍得放姜——这是去膻的主要手段",
      "termKey": "ginger"
    },
    {
      "id": "hn-07",
      "nameEn": "scallion, cut into lengths",
      "nameZh": "小葱，切段",
      "pinyin": "xiǎo cōng",
      "amountMetric": "30 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "hn-08",
      "nameEn": "star anise",
      "nameZh": "八角",
      "pinyin": "bā jiǎo",
      "amountMetric": "2 g",
      "amountUS": "2 pods",
      "category": "spice",
      "pantry": "asian",
      "termKey": "star-anise"
    },
    {
      "id": "hn-09",
      "nameEn": "white pepper, freshly ground",
      "nameZh": "现磨白胡椒粉",
      "pinyin": "bái hú jiāo fěn",
      "amountMetric": "2 g",
      "amountUS": "½ tsp",
      "category": "spice",
      "pantry": "local",
      "note": "Hui mian is heavily peppered at the table — it is part of the flavour, not a garnish",
      "noteZh": "烩面上桌要撒足白胡椒——它是味道的一部分，不是点缀",
      "termKey": "white-pepper"
    },
    {
      "id": "hn-10",
      "nameEn": "toasted sesame oil",
      "nameZh": "香油",
      "pinyin": "xiāng yóu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "sesame-oil"
    }
  ],
  "steps": [
    {
      "text": "Put the lamb in a pot, cover with cold water, and bring to a boil over high heat for 3 minutes. Drain and rinse the meat under hot water.",
      "textZh": "羊肉冷水下锅大火烧沸煮3分钟，捞出用热水冲洗。",
      "zhHint": "羊肉飞水",
      "stateNote": {
        "visual": "Grey foam coats the meat and the water is cloudy; after rinsing the slices look clean and pale pink",
        "visualZh": "肉块覆灰沫、水色浑浊；冲洗后肉片干净呈淡粉",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "high",
        "signal": "No grey scum rises on rinsing and the smell is meaty, not gamy",
        "signalZh": "冲洗时无灰沫浮起，气味是肉香而非膻味"
      }
    },
    {
      "text": "Return the lamb to a clean pot with 1.6 L (6¾ cups) hot water, ginger, scallion and star anise. Boil hard, uncovered, for 20 minutes.",
      "textZh": "羊肉放回净锅，加1.6升热水、姜片、葱段与八角，不加盖大火滚煮20分钟。",
      "zhHint": "大火滚白汤",
      "stateNote": {
        "visual": "The broth has turned opaque and milky white — this only happens with a hard, rolling boil",
        "visualZh": "汤汁转为不透明奶白——只有大火滚煮才能做到",
        "timeRef": "20 minutes",
        "timeRefZh": "20 分钟",
        "heat": "high",
        "signal": "Bubbles break noisily and continuously, and the surface has a layer of white foam",
        "signalZh": "气泡持续响亮破裂，表面覆一层白沫"
      }
    },
    {
      "text": "Drop to medium-low, cover, and simmer 30 minutes until the lamb is tender. Skim the surface once or twice.",
      "textZh": "转中小火加盖炖30分钟至羊肉软烂，期间撇沫一两次。",
      "zhHint": "小火炖烂",
      "stateNote": {
        "visual": "Broth is creamy and opaque; lamb slices look shrunken but hold together",
        "visualZh": "汤汁乳白浓稠，羊肉片略缩但完整不散",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "heat": "medium-low",
        "signal": "A slice parts easily when pressed with a chopstick",
        "signalZh": "筷子轻压肉片即分开"
      }
    },
    {
      "text": "Add the soaked glass noodles and wood ear. Simmer 6 minutes, until the glass noodles are fully translucent and slippery.",
      "textZh": "下泡软的粉条与木耳，小火煮6分钟，至粉条完全透明滑爽。",
      "zhHint": "粉条木耳",
      "stateNote": {
        "visual": "Glass noodles have turned from opaque white to clear and glossy; wood ear looks glossy black",
        "visualZh": "粉条由不透明白转为清亮透明，木耳乌亮",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium-low",
        "signal": "A glass noodle slides off the chopsticks rather than clinging",
        "signalZh": "粉条从筷子上滑落而不黏附"
      }
    },
    {
      "text": "Add the fresh noodles and bok choy directly to the broth and cook 4 minutes. The noodle starch will thicken the soup — that is the point.",
      "textZh": "鲜面条与小白菜直接下汤煮4分钟。面条淀粉会把汤收稠——这正是关键。",
      "zhHint": "面菜入汤",
      "stateNote": {
        "visual": "Broth has thickened enough to coat the back of a spoon; noodles are swollen and pale",
        "visualZh": "汤汁浓稠到能挂住勺背，面条胀起发白",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium",
        "signal": "A spoon dragged across the pot bottom leaves a trail that fills in slowly",
        "signalZh": "勺子刮过锅底留下沟痕，缓慢才被填平"
      }
    },
    {
      "text": "Season with salt and white pepper, turn off the heat, and stir in the sesame oil. Ladle into deep bowls and finish with plenty of white pepper and scallion.",
      "textZh": "用盐与白胡椒调味，关火淋香油，盛入深碗，最后撒足白胡椒与葱花。",
      "zhHint": "重胡椒收尾",
      "stateNote": {
        "visual": "Milky white broth with wide noodles, pale lamb, clear glass noodles and dark wood ear",
        "visualZh": "奶白汤中有宽面、浅色羊肉、透明粉条与黑色木耳",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "low",
        "signal": "The pepper aroma rises before the bowl reaches the table",
        "signalZh": "碗还没上桌，胡椒香已先飘出"
      }
    }
  ],
  "tips": [
    "The lamb broth only turns white if you boil it hard, uncovered, for the first 20 minutes. A gentle simmer gives you a clear, thin soup instead.",
    "Cook the noodles in the broth, not in separate water — their starch is what gives hui mian its body.",
    "White pepper goes in at the table as well as in the pot. If you only season once, season at the end."
  ],
  "tipsZh": [
    "羊汤只有前20分钟大火不加盖滚煮才会变白。小火慢炖只能得到清汤。",
    "面条要在汤里煮，不要另锅煮——面汤里的淀粉正是烩面浓稠的来源。",
    "白胡椒要锅里放一次、上桌再撒一次。若只放一次，就放在最后。"
  ],
  "relatedSlugs": [
    "lanzhou-lamian",
    "chicken-broth-noodle-soup"
  ],
  "image": "/images/recipes/chicken-broth-noodle-soup.webp"
};
