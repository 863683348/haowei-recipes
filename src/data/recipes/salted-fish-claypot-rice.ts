import type { Recipe } from "@/lib/types";

/** Salted Fish Clay Pot Rice (咸鱼煲仔饭) — Day batch */
export const salted_fish_claypot_rice: Recipe = {
  "id": "salted-fish-claypot-rice",
  "slug": "salted-fish-claypot-rice",
  "titleEn": "Salted Fish Clay Pot Rice",
  "titleZh": "咸鱼煲仔饭",
  "pinyin": "xián yú bāo zǎi fàn",
  "cuisine": "粤菜",
  "cuisineEn": "Cantonese",
  "region": "Guangdong",
  "regionZh": "广东",
  "difficulty": "medium",
  "timeMin": 55,
  "servings": 2,
  "version": "family",
  "versionNote": "At home the salted fish is lightly pan-fried first to soften its edge, then steamed on the rice. Cantonese shops use much older, harder salted fish sliced paper-thin, raw and un-fried, which is far more pungent — the classic version divides a table on smell alone.",
  "versionNoteZh": "家常版先把咸鱼略煎一下柔和风味，再放饭面蒸；粤式店家用的是更陈、更硬的咸鱼，切得纸薄、完全不煎直接生蒸，味道要冲得多——传统版光靠气味就能让一桌人分成两派。",
  "tags": [
    "55-min",
    "claypot",
    "cantonese",
    "pork-belly",
    "one-pot"
  ],
  "dietary": [
    "none"
  ],
  "story": "咸鱼煲仔饭 combines two preserved things — salted fish and pork belly — and lets rice be the neutral ground between them. The trick is restraint: 50 g of salted fish is plenty for a whole pot, and the fat from the pork belly is what carries its flavour down into the grains.",
  "storyZh": "咸鱼煲仔饭把两样腌货——咸鱼与五花肉——凑在一起，让米饭充当两者之间的中性地带。诀窍在于克制：整锅放50克咸鱼就足够了，而把咸鱼香带下米粒的，正是五花肉的油。",
  "ingredients": [
    {
      "id": "sfc-01",
      "nameEn": "jasmine rice, rinsed",
      "nameZh": "茉莉香米，淘洗",
      "pinyin": "xiāng mǐ",
      "amountMetric": "220 g",
      "amountUS": "1 cup",
      "category": "staple",
      "pantry": "asian",
      "note": "Rinsed until clear and drained",
      "noteZh": "淘到水清后沥干"
    },
    {
      "id": "sfc-02",
      "nameEn": "salted fish fillet, soaked 30 minutes",
      "nameZh": "咸鱼肉，泡30分钟",
      "pinyin": "xián yú",
      "amountMetric": "50 g",
      "amountUS": "2 oz",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Soak to pull back some salt, then pat bone dry and cut into thin slices",
      "noteZh": "泡去部分咸味后吸干水分，切薄片"
    },
    {
      "id": "sfc-03",
      "nameEn": "pork belly, sliced 3 mm thick",
      "nameZh": "五花肉，切3毫米片",
      "pinyin": "wǔ huā ròu",
      "amountMetric": "180 g",
      "amountUS": "6 oz",
      "category": "protein",
      "pantry": "local",
      "note": "The fat renders down through the rice and carries the fish aroma",
      "noteZh": "油脂下渗时把鱼香带进米粒",
      "termKey": "pork-belly"
    },
    {
      "id": "sfc-04",
      "nameEn": "light soy sauce",
      "nameZh": "生抽",
      "pinyin": "shēng chōu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "light-soy-sauce"
    },
    {
      "id": "sfc-05",
      "nameEn": "dark soy sauce",
      "nameZh": "老抽",
      "pinyin": "lǎo chōu",
      "amountMetric": "5 ml",
      "amountUS": "1 tsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "dark-soy-sauce"
    },
    {
      "id": "sfc-06",
      "nameEn": "shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "sfc-07",
      "nameEn": "fresh ginger, shredded",
      "nameZh": "鲜姜，切丝",
      "pinyin": "jiāng sī",
      "amountMetric": "20 g",
      "amountUS": "4 tsp",
      "category": "produce",
      "pantry": "local",
      "note": "Generous ginger is what keeps the salted fish from overwhelming",
      "noteZh": "姜要足量，才压得住咸鱼的冲劲",
      "termKey": "ginger"
    },
    {
      "id": "sfc-08",
      "nameEn": "scallion, sliced",
      "nameZh": "小葱，切葱花",
      "pinyin": "xiǎo cōng",
      "amountMetric": "25 g",
      "amountUS": "3 stalks",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    },
    {
      "id": "sfc-09",
      "nameEn": "white pepper",
      "nameZh": "白胡椒粉",
      "pinyin": "bái hú jiāo",
      "amountMetric": "1 g",
      "amountUS": "¼ tsp",
      "category": "spice",
      "pantry": "asian",
      "termKey": "white-pepper"
    },
    {
      "id": "sfc-10",
      "nameEn": "neutral oil",
      "nameZh": "食用油",
      "pinyin": "shí yòng yóu",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "western-pantry",
      "pantry": "local",
      "note": "For frying the fish and filming the pot",
      "noteZh": "用来煎鱼和给锅上油膜"
    }
  ],
  "steps": [
    {
      "text": "Soak the salted fish in cold water 30 minutes, changing the water once. Pat it completely dry and slice thinly across the grain.",
      "textZh": "咸鱼冷水泡30分钟，中间换一次水。彻底吸干后逆纹切薄片。",
      "zhHint": "泡发减盐",
      "stateNote": {
        "visual": "Flesh has softened from board-hard to pliable and looks slightly translucent at the edges",
        "visualZh": "鱼肉从硬如木板变得柔软，边缘略呈半透明",
        "timeRef": "30 minutes",
        "timeRefZh": "30 分钟",
        "signal": "A slice bends without cracking when you press it",
        "signalZh": "按压鱼片能弯而不裂"
      },
      "tip": "Dry it twice: once before slicing and once after. Water on the fish means it spits in the pan.",
      "tipZh": "要吸干两次：切片前一次、切片后一次。鱼上有水，下锅会炸油。"
    },
    {
      "text": "Fry the salted fish in 1 tsp oil over medium heat for 90 seconds a side, until it smells nutty. Lift out and set aside; keep the fragrant oil.",
      "textZh": "咸鱼用1茶匙油中火煎，每面90秒，煎到有坚果香。盛出备用，锅里的香油留下。",
      "zhHint": "干煎咸鱼",
      "stateNote": {
        "visual": "Edges are crisp golden-brown and the flesh has firmed; the pan holds a thin amber film of oil",
        "visualZh": "边缘金黄酥脆、鱼肉收紧；锅里留下一层琥珀色香油",
        "timeRef": "3 minutes",
        "timeRefZh": "3 分钟",
        "heat": "medium",
        "signal": "The sharp raw smell has turned nutty and rounded",
        "signalZh": "生咸鱼的冲味转为圆润的坚果香"
      },
      "tip": "Open a window. This step announces itself to the whole building, and that is normal.",
      "tipZh": "记得开窗。这一步的味道会传遍整栋楼，这是正常的。"
    },
    {
      "text": "Put the drained rice in the clay pot with 300 ml (1¼ cups) water and the reserved fragrant oil. Bring to a boil over medium heat, stirring once.",
      "textZh": "沥干的米放入砂锅，加300毫升水与留用的香油。中火烧沸，搅一次。",
      "zhHint": "香油代替素油下米",
      "stateNote": {
        "visual": "Milky water bubbling hard across the surface with a faint sheen of oil at the rim",
        "visualZh": "乳白的水剧烈冒泡，锅边浮着一层薄油光",
        "timeRef": "6 minutes",
        "timeRefZh": "6 分钟",
        "heat": "medium",
        "signal": "Bubbles break continuously through the centre",
        "signalZh": "锅中央持续冒泡破裂"
      }
    },
    {
      "text": "Toss the pork belly slices with light soy, dark soy, shaoxing wine, white pepper and half the ginger. Scatter them over the rice, cover, and cook on the lowest heat 15 minutes.",
      "textZh": "五花肉片加生抽、老抽、黄酒、白胡椒粉和一半姜丝抓匀，铺散在饭面上，加盖最小火煮15分钟。",
      "zhHint": "铺五花肉焖煮",
      "stateNote": {
        "visual": "Steam pushes steadily from under the lid and the belly slices have turned from pink to opaque with glossy edges",
        "visualZh": "蒸汽从盖边稳定冒出，肉片从粉红转为不透明、边缘油亮",
        "timeRef": "15 minutes",
        "timeRefZh": "15 分钟",
        "heat": "low",
        "signal": "Rendering fat has pooled in the rice and the water line sits below the grain surface",
        "signalZh": "逼出的油已经渗进米饭，水位降到米粒以下"
      }
    },
    {
      "text": "Lay the fried salted fish on top with the remaining ginger. Raise to medium-low and cook 8–10 minutes until the crust forms.",
      "textZh": "把煎好的咸鱼连余下姜丝铺在最上层。转中小火煮8–10分钟，直到锅巴形成。",
      "zhHint": "铺咸鱼逼锅巴",
      "stateNote": {
        "visual": "Steam nearly gone; the fish looks dry and glossy and the pot smells deeply savoury rather than fishy",
        "visualZh": "蒸汽基本散尽；鱼片干爽油亮，锅里是浓郁咸香而不是鱼腥",
        "timeRef": "10 minutes",
        "timeRefZh": "10 分钟",
        "heat": "medium-low",
        "signal": "A faint dry crackle rises from the base",
        "signalZh": "锅底传来轻微的干裂声"
      },
      "tip": "Fish goes on top, never buried. Buried, it steams soft and loses every bit of that fried crunch.",
      "tipZh": "咸鱼一定在最上层，千万别埋进去。埋进去就蒸软了，煎过的脆感全丢。"
    },
    {
      "text": "Off the heat, rest 5 minutes covered. Open, scatter scallion and fold from the bottom up so the fish, pork and crust all meet.",
      "textZh": "离火加盖静置5分钟。开盖撒葱花，从锅底往上翻拌，让咸鱼、五花肉和锅巴混到一起。",
      "zhHint": "静置拌匀",
      "stateNote": {
        "visual": "Rice is an even tan with amber streaks, crisp golden flakes throughout and firm slices of fish on top",
        "visualZh": "米饭呈均匀的浅褐色带琥珀纹，里面混着金黄脆片，上面是完整鱼片",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "heat": "low",
        "signal": "The crust shatters audibly as you fold rather than bending",
        "signalZh": "翻拌时锅巴脆得有声，而不是弯软"
      }
    }
  ],
  "tips": [
    "Do not add salt. Not to the rice, not to the pork, not at the table. The fish has already done it.",
    "If you can only find whole salted fish, use the thickest part of the fillet and skip the thin tail.",
    "The pork belly is not optional padding — it is the delivery system for every bit of the fish aroma."
  ],
  "tipsZh": [
    "不要加盐。米里不加、肉里不加、桌上也别加。咸鱼已经替你加过了。",
    "如果只买得到整条咸鱼，取最厚的鱼柳部分，薄尾巴别用。",
    "五花肉不是凑数的配角——它是把咸鱼香送进每一粒米的运输系统。"
  ],
  "relatedSlugs": [
    "clay-pot-rice",
    "salted-fish-chicken-fried-rice"
  ],
  "image": "/images/recipes/clay-pot-rice.webp"
};
