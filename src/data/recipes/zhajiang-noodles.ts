import type { Recipe } from "@/lib/types";

/** Beijing-Style Zhajiang Noodles (京味炸酱面) — Seed batch */
export const zhajiang_noodles: Recipe = {
  "id": "zhajiang-mian",
  "slug": "zhajiang-noodles",
  "titleEn": "Beijing-Style Zhajiang Noodles",
  "titleZh": "京味炸酱面",
  "pinyin": "jīng wèi zhá jiàng miàn",
  "cuisine": "北方小吃",
  "cuisineEn": "Northern Chinese Snack",
  "region": "Beijing",
  "regionZh": "北京",
  "difficulty": "medium",
  "timeMin": 45,
  "servings": 2,
  "version": "family",
  "versionNote": "Family version uses lean pork belly (not ground pork) for richer texture and slower-braised depth—just like Aunt Li in her courtyard hutong kitchen.",
  "versionNoteZh": "家常版用带点肥的猪五花肉丁（非纯瘦肉末），慢煸出油、久炒生酱，还原李阿姨胡同院里铁锅熬酱的扎实口感。",
  "tags": [
    "45-min",
    "weeknight",
    "comfort"
  ],
  "dietary": [
    "none"
  ],
  "story": "My grandmother in Xicheng, Beijing, made zhajiang every Saturday before temple fairs. She’d chop the pork by hand on a thick wooden board, saying 'the sauce must breathe between the grains'—a phrase I still whisper while stirring.",
  "storyZh": "我在北京西城区的奶奶每逢庙会前的周六必做炸酱。她总在厚木砧板上手切猪肉，说‘酱得让肉粒喘气’——这句念叨，我搅酱时至今还下意识低语。",
  "ingredients": [
    {
      "id": "zh-01",
      "nameEn": "pork belly, finely diced (skin removed)",
      "nameZh": "猪五花肉丁（去皮）",
      "pinyin": "zhū wǔ huā ròu dīng",
      "amountMetric": "200 g",
      "amountUS": "3/4 cup (diced)",
      "category": "protein",
      "pantry": "local",
      "note": "Look for 30% fat ratio; substitute with ground pork if unavailable, but reduce cooking time by 5 min.",
      "noteZh": "选肥瘦约3:7的五花；若无，可用绞肉替代，但总炒制时间减5分钟。"
    },
    {
      "id": "zh-02",
      "nameEn": "yellow soybean paste (tianmianjiang)",
      "nameZh": "甜面酱",
      "pinyin": "tián miàn jiàng",
      "amountMetric": "80 g",
      "amountUS": "1/4 cup",
      "category": "asian-pantry",
      "pantry": "asian",
      "note": "Must be fermented yellow bean paste—not hoisin. Find at Asian grocers or online as 'Beijing-style tianmianjiang'.",
      "noteZh": "必须是发酵黄豆甜面酱，非海鲜酱。亚洲超市或网购搜‘北京甜面酱’。"
    },
    {
      "id": "zh-03",
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
      "id": "zh-04",
      "nameEn": "Shaoxing wine",
      "nameZh": "绍兴黄酒",
      "pinyin": "shào xīng huáng jiǔ",
      "amountMetric": "15 ml",
      "amountUS": "1 tbsp",
      "category": "asian-pantry",
      "pantry": "asian",
      "termKey": "shaoxing-wine"
    },
    {
      "id": "zh-05",
      "nameEn": "scallions, white and light green parts only, finely chopped",
      "nameZh": "小葱白及浅绿段，切细",
      "pinyin": "xiǎo cōng bái jí qiǎn lǜ duàn",
      "amountMetric": "60 g",
      "amountUS": "1/2 cup",
      "category": "produce",
      "pantry": "local",
      "termKey": "scallion"
    }
  ],
  "steps": [
    {
      "text": "Heat a wok over medium-high heat. Add pork belly and stir-fry until edges turn golden and fat begins to render — about 4 minutes.",
      "textZh": "中大火烧热炒锅，下五花肉丁翻炒至边缘微金黄、油脂初析出，约4分钟。",
      "zhHint": "先煸油再炒酱",
      "stateNote": {
        "visual": "Small beads of clear oil gather around meat cubes; meat shrinks slightly.",
        "visualZh": "肉丁周围渗出透明油珠；肉丁体积略缩小。",
        "timeRef": "4 minutes",
        "timeRefZh": "4 分钟",
        "heat": "medium-high",
        "signal": "Faint sizzle turns steady; no steam plume.",
        "signalZh": "滋滋声由断续变持续；无明显水汽升腾。"
      }
    },
    {
      "text": "Reduce heat to medium-low. Add sweet bean paste and stir constantly for 2 minutes until fragrant and darkened.",
      "textZh": "转中小火，加入甜面酱，持续搅动2分钟，至酱香迸发、颜色转深棕。",
      "zhHint": "小火防糊，勤搅匀",
      "stateNote": {
        "visual": "Sauce coats each meat cube evenly; surface glistens with oil.",
        "visualZh": "酱汁均匀裹住每粒肉丁；表面泛油光。",
        "timeRef": "2 minutes",
        "timeRefZh": "2 分钟",
        "heat": "medium-low",
        "signal": "Aroma deepens from sweet to nutty; no blackening at edges.",
        "signalZh": "香气由甜转醇香；锅边无焦黑。"
      }
    },
    {
      "text": "Add Shaoxing wine and light soy sauce. Cook 1 minute, stirring to blend.",
      "textZh": "淋入绍兴酒与生抽，翻炒1分钟，使酱汁融合。",
      "zhHint": "酒遇热激香",
      "stateNote": {
        "visual": "Steam rises briefly; sauce bubbles softly.",
        "visualZh": "短暂冒白气；酱汁轻泡。",
        "timeRef": "1 minute",
        "timeRefZh": "1 分钟",
        "heat": "medium",
        "signal": "Alcohol smell dissipates quickly.",
        "signalZh": "酒气迅速挥发。"
      }
    },
    {
      "text": "Add 60 ml water and simmer uncovered for 8–10 minutes, stirring every 2 minutes, until sauce thickens and clings to meat.",
      "textZh": "加水60毫升，敞盖小火焖8–10分钟，每2分钟搅一次，至酱汁浓稠、能挂勺。",
      "zhHint": "收汁不加盖",
      "stateNote": {
        "visual": "Sauce pulls away from pan sides; leaves a trail when spoon drags.",
        "visualZh": "酱汁离锅边收缩；勺背划过留痕。",
        "timeRef": "8–10 minutes",
        "timeRefZh": "8–10 分钟",
        "heat": "low",
        "signal": "Bubbles slow to gentle pop; no splattering.",
        "signalZh": "气泡变缓为轻噗声；无飞溅。"
      }
    },
    {
      "text": "Stir in scallions off heat. Let rest 5 minutes before serving over fresh hand-pulled noodles.",
      "textZh": "关火后拌入葱末，静置5分钟再浇在手擀面上。",
      "zhHint": "后放葱保鲜香",
      "stateNote": {
        "visual": "Scallions retain bright green hue; sauce cools slightly but remains glossy.",
        "visualZh": "葱末翠绿未蔫；酱汁微凉仍油亮。",
        "timeRef": "5 minutes",
        "timeRefZh": "5 分钟",
        "signal": "No residual steam rising from sauce surface.",
        "signalZh": "酱面无余热蒸气。"
      }
    }
  ],
  "tips": [
    "Use a heavy-bottomed wok or Dutch oven—thin pans scorch the paste.",
    "Make extra sauce: it keeps refrigerated for 5 days and improves flavor overnight.",
    "Traditional Beijing zhajiang is served with eight 'jing' toppings: cucumber, radish, bean sprouts, etc.—but family style needs only two: raw scallions and blanched spinach."
  ],
  "tipsZh": [
    "务必用厚底炒锅或铸铁锅，薄锅易糊酱。",
    "可多做些酱：冷藏5天，隔夜风味更醇。",
    "老北京炸酱配八样‘京’菜码（黄瓜丝、心里美萝卜丝等），但家常只需两样：生葱末+焯水菠菜。"
  ],
  "relatedSlugs": [],
  "image": "/images/recipes/zhajiang-noodles.webp"
};
