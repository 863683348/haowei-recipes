/**
 * P1-1 深度字段批量生成（规则引擎，零 LLM 零成本）
 * 为 52 道菜谱生成：ingredientSubs（替代指南）/ commonMistakes（翻车点）/ variations（变花样）
 * 
 * 用法: node --experimental-strip-types --experimental-loader ./scripts/audit-recipes-loader.mjs scripts/gen-depth-fields.mjs
 * 输出: scripts/depth-fields.json（人工 review 后合并入各菜谱 ts）
 */
import { recipes } from "../src/data/recipes/index.ts";
import { writeFileSync } from "node:fs";

// ---------- 亚超食材 → 本地替代 规则库 ----------
const SUB_RULES = {
  "doubanjiang": { fromZh: "豆瓣酱", to: "gochujang + a splash of soy sauce", toZh: "韩式辣酱 + 少许生抽", ratio: "1:1", note: "Sweeter, less fermented; add ½ tsp vinegar to mimic the tang.", noteZh: "更甜、发酵味轻；加半茶匙醋找回酸香。" },
  "light soy sauce": { fromZh: "生抽", to: "regular soy sauce", toZh: "普通酱油", ratio: "1:1", note: "Slightly saltier — dial salt back by a pinch.", noteZh: "稍咸，盐量减一小撮。" },
  "dark soy sauce": { fromZh: "老抽", to: "light soy + ½ tsp sugar + drop of molasses", toZh: "生抽 + 半茶匙糖 + 一滴糖蜜", ratio: "1:1", note: "Gets the color without the bottle.", noteZh: "同样上色，不用单买老抽。" },
  "oyster sauce": { fromZh: "蚝油", to: "hoisin + ½ tsp fish sauce (or soy)", toZh: "海鲜酱 + 半茶匙鱼露（或生抽）", ratio: "1:1", note: "Sweeter and thicker; thin with a little water.", noteZh: "更甜更稠，加一点水调稀。" },
  "shaoxing wine": { fromZh: "绍兴酒", to: "dry sherry or mirin (less sweet)", toZh: "干雪利酒或味醂（减糖）", ratio: "1:1", note: "Both add the same warm fermented depth.", noteZh: "都能带来相同的发酵醇香。" },
  "chinese black vinegar": { fromZh: "香醋/陈醋", to: "balsamic vinegar (thinned) or rice vinegar + molasses", toZh: "稀释的意大利黑醋，或米醋+糖蜜", ratio: "1:1", note: "Maltier than rice vinegar — balsamic is closest.", noteZh: "比米醋更醇厚，意大利黑醋最接近。" },
  "sesame oil": { fromZh: "香油", to: "toasted sesame oil (same thing!)", toZh: "烤芝麻油（同物）", ratio: "1:1", note: "Check the label: use toasted (dark), not raw.", noteZh: "看标签：用深色烤芝麻油，不是生油。" },
  "sichuan peppercorn": { fromZh: "花椒", to: "black peppercorn + pinch of lemon zest", toZh: "黑胡椒 + 一小撮柠檬皮屑", ratio: "1:1", note: "Loses the numbing, keeps some aroma.", noteZh: "没有麻感，但保留部分香气。" },
  "dried chilies": { fromZh: "干辣椒", to: "red pepper flakes + whole cayenne (rehydrated)", toZh: "辣椒碎 + 整只辣椒（泡发）", ratio: "1 tbsp : 1 tbsp", note: "Use fewer for heat — dried chilies are mild.", noteZh: "用量减少——干辣椒本身不算辣。" },
  "fermented black beans": { fromZh: "豆豉", to: "miso (white) + pinch of salt", toZh: "白味噌 + 一小撮盐", ratio: "1:1", note: "Adds umami and salt; reduce salt elsewhere.", noteZh: "提供鲜味和咸度，其他处减盐。" },
  "chinese sausage": { fromZh: "腊肠", to: "chorizo (sweet paprika style)", toZh: "甜椒粉风味西班牙香肠", ratio: "1:1", note: "Smoky-sweet, similar fat melt.", noteZh: "烟熏甜口，油脂溶化感接近。" },
  "wood ear mushrooms": { fromZh: "木耳", to: "shiitake (rehydrated), sliced thin", toZh: "泡发香菇切薄片", ratio: "1:1", note: "Loses the crunch, keeps the chew.", noteZh: "少了脆感，保留嚼劲。" },
  "tofu": { fromZh: "豆腐", to: "halloumi (for frying) or paneer", toZh: "哈鲁米（煎）或印度奶酪", ratio: "1:1", note: "Both hold shape better in wok dishes.", noteZh: "在炒锅里更能保持形状。" },
  "rice wine": { fromZh: "米酒", to: "sake or dry white wine", toZh: "清酒或干白葡萄酒", ratio: "1:1", note: "Same clean acidity lift.", noteZh: "同样带来干净的酸香提味。" },
  "star anise": { fromZh: "八角", to: "fennel seeds + pinch of cinnamon", toZh: "茴香籽 + 一小撮肉桂", ratio: "2 pieces : 1 tsp", note: "Close licorice warmth.", noteZh: "接近的甘草甜香。" },
  "chinese five spice": { fromZh: "五香粉", to: "cinnamon + star anise + fennel + cloves + peppercorn", toZh: "肉桂+八角+茴香+丁香+胡椒自制", ratio: "1 tsp : 1 tsp", note: "All components are western-aisle staples.", noteZh: "所有成分都是西式货架常见香料。" },
  "sichuan chili bean paste": { fromZh: "川式辣豆瓣酱", to: "sambal oelek + 1 tsp fermented black bean paste", toZh: "印尼辣椒酱 + 1 茶匙豆豉酱", ratio: "1:1", note: "Heat + ferment, minus the bean paste body.", noteZh: "辣度与发酵感都有，少了豆瓣的质地。" },
  "baby bok choy": { fromZh: "小白菜", to: "baby spinach or Swiss chard stems", toZh: "嫩菠菜或甜菜茎", ratio: "1:1", note: "Sturdier greens hold the wok heat.", noteZh: "更耐炒。" },
  "chinese chives": { fromZh: "韭菜", to: "scallions (greens) + 1 clove garlic", toZh: "葱绿部分 + 1 瓣蒜", ratio: "1:1", note: "Close savory punch, less pungent.", noteZh: "接近的葱香，辣味更轻。" },
  "white pepper": { fromZh: "白胡椒粉", to: "black pepper (use ¾ amount)", toZh: "黑胡椒（用 ¾ 量）", ratio: "3:4", note: "Sharper, but works in a pinch.", noteZh: "更冲，但可应急。" },
};

// ---------- 翻车点规则库（按 tags/技法匹配） ----------
const MISTAKE_RULES = [
  {
    match: (r) => r.tags.includes("wok") || r.tags.includes("stir-fry") || r.steps.some((s) => (s.text + " " + (s.textZh||"")).includes("high")),
    mistakes: [
      { mistake: "Crowding the pan — ingredients steam instead of sear.", mistakeZh: "食材堆太满——变成蒸而不是炒。", fix: "Cook in batches; give each piece room to brown.", fixZh: "分批下锅，给每块食材留出上色空间。" },
      { mistake: "Adding sauce too early — the wok cools and flavors dull.", mistakeZh: "酱汁下太早——锅温骤降，香味出不来。", fix: "Push food up the wok wall, add sauce to the hot center, toss fast.", fixZh: "把食材推到锅边，酱汁下到中间热区，快速翻匀。" },
    ],
  },
  {
    match: (r) => r.tags.includes("braised") || r.tags.includes("stew") || r.tags.includes("one-pot"),
    mistakes: [
      { mistake: "Boiling hard the whole time — meat turns tough and dry.", mistakeZh: "全程大火滚——肉变柴变干。", fix: "Bring to a boil once, then drop to a gentle simmer (small bubbles).", fixZh: "大火烧开后转小火，保持微沸小泡即可。" },
      { mistake: "Adding salt at the start — sauce reduces and oversalts.", mistakeZh: "一开始就放盐——收汁后变咸。", fix: "Season in the last 10 minutes; adjust at the end.", fixZh: "最后 10 分钟再调味，出锅前调整。" },
    ],
  },
  {
    match: (r) => r.tags.includes("cold") || r.tags.includes("salad") || r.tags.includes("quick"),
    mistakes: [
      { mistake: "Skipping the 'rest' step — dressing runs watery.", mistakeZh: "跳过静置步骤——调料汁水分离。", fix: "Let dressed vegetables sit 5-10 min so flavors marry.", fixZh: "拌好后静置 5-10 分钟让味道融合。" },
    ],
  },
  {
    match: (r) => r.tags.includes("dumplings") || r.tags.includes("dough"),
    mistakes: [
      { mistake: "Filling too wet — wrappers tear while pleating.", mistakeZh: "馅太湿——包的时候皮就破了。", fix: "Squeeze out moisture; chill filling 15 min before wrapping.", fixZh: "挤干水分，包前冷藏馅料 15 分钟。" },
      { mistake: "Not sealing edges — dumplings open in the pot.", mistakeZh: "边缘没捏紧——下锅就开口。", fix: "Dab water on the edge and pinch firmly; crimp twice.", fixZh: "边缘抹水用力捏合，收口捏两遍。" },
    ],
  },
  {
    match: (r) => r.tags.includes("noodles") || r.titleEn.toLowerCase().includes("noodle"),
    mistakes: [
      { mistake: "Overcooking noodles — they turn mushy in the sauce.", mistakeZh: "面条煮过头——拌酱后烂糊。", fix: "Cook 30-60s less than the package says; finish in the sauce.", fixZh: "比包装时间少煮 30-60 秒，让它在酱汁里完成。" },
    ],
  },
  {
    match: (r) => r.tags.includes("egg") || r.titleEn.toLowerCase().includes("egg"),
    mistakes: [
      { mistake: "Eggs scrambled over high heat for too long — dry and rubbery.", mistakeZh: "全程大火久炒——蛋又干又老。", fix: "Pull eggs off while still glossy; carry-over heat finishes them.", fixZh: "蛋还带光泽时就出锅，余温会继续加热。" },
    ],
  },
  {
    match: (r) => r.tags.includes("chicken") || r.tags.includes("pork") || r.tags.includes("beef"),
    mistakes: [
      { mistake: "Skipping the marinade rest — meat stays bland and tough.", mistakeZh: "腌完直接下锅——肉又柴又没味。", fix: "Let marinated meat rest 10-15 min (or overnight for deep flavor).", fixZh: "腌好后静置 10-15 分钟（想入味可过夜）。" },
      { mistake: "Frying cold meat straight from the fridge — temperature shock.", mistakeZh: "冷肉直接下锅——温度骤变口感差。", fix: "Let meat come to room temp (15-20 min) before cooking.", fixZh: "下锅前让肉回温 15-20 分钟。" },
    ],
  },
  {
    match: (r) => r.tags.includes("tofu"),
    mistakes: [
      { mistake: "Tossing tofu before it's browned — it breaks apart.", mistakeZh: "没煎定型就翻动——豆腐全碎。", fix: "Pan-fry undisturbed until golden on one side, then flip once.", fixZh: "一面煎到金黄再翻，只翻一次。" },
    ],
  },
  {
    match: (r) => r.tags.includes("fish") || r.titleEn.toLowerCase().includes("fish"),
    mistakes: [
      { mistake: "Over-flipping fish — fillets fall apart.", mistakeZh: "反复翻鱼——鱼块全散。", fix: "Flip once; let the first side fully set before turning.", fixZh: "只翻一次，第一面煎定型再翻。" },
    ],
  },
];

// ---------- 变花样规则库（按食材关键词） ----------
const VARIATION_RULES = [
  {
    match: (r) => r.titleEn.toLowerCase().includes("tofu") || r.tags.includes("tofu"),
    vars: [
      ["Use silken tofu for a softer mapo-style texture", "换成嫩豆腐，口感更滑（麻婆风）"],
      ["Swap in eggplant for a vegan twist (pan-fry first)", "把豆腐换成茄子，先煎再烧（纯素版）"],
      ["Add a handful of leafy greens in the last minute", "出锅前加一把绿叶菜"],
    ],
  },
  {
    match: (r) => r.tags.includes("chicken"),
    vars: [
      ["Use chicken thighs instead of breast — juicier, more forgiving", "鸡腿代替鸡胸——更嫩更不容易柴"],
      ["Double the sauce for a rice-bowl version", "酱汁加倍，变成盖饭"],
      ["Add cashews or peanuts for crunch at the end", "出锅前加腰果或花生增脆"],
    ],
  },
  {
    match: (r) => r.tags.includes("beef"),
    vars: [
      ["Swap beef for pork loin, sliced thin", "牛肉换成猪里脊切薄片"],
      ["Add mushrooms (shiitake or button) for extra umami", "加香菇或口蘑提鲜"],
      ["Turn the stir-fry into a one-pot rice bowl", "改成一人食盖饭"],
    ],
  },
  {
    match: (r) => r.tags.includes("pork"),
    vars: [
      ["Use ground pork for a quicker, softer texture", "用猪肉末，更快更软"],
      ["Add a handful of cabbage for bulk and sweetness", "加一把白菜增甜增量"],
      ["Skip the meat for a vegetarian version with extra tofu", "纯素版：肉换豆腐"],
    ],
  },
  {
    match: (r) => r.tags.includes("egg") || r.titleEn.toLowerCase().includes("egg"),
    vars: [
      ["Add tomato for a saucy version", "加番茄变成带汁版"],
      ["Scramble with scallion whites for extra fragrance", "加葱白一起炒更香"],
      ["Serve over rice for a complete 10-minute meal", "盖在米饭上，10 分钟一餐"],
    ],
  },
  {
    match: (r) => r.tags.includes("noodles") || r.titleEn.toLowerCase().includes("noodle"),
    vars: [
      ["Swap wheat noodles for rice noodles (gluten-free)", "面条换成米粉（无麸质）"],
      ["Add a soft-fried egg on top", "加一个溏心煎蛋"],
      ["Use cold noodles in summer with the same sauce", "夏天换冷面，用同一碗酱"],
    ],
  },
  {
    match: (r) => r.tags.includes("dumplings") || r.tags.includes("dough"),
    vars: [
      ["Steam instead of boil — chewier wrappers", "蒸代替煮——皮更筋道"],
      ["Pan-fry for potstickers (guotie)", "煎成锅贴"],
      ["Swap filling to shrimp + chives", "馅料换成虾仁韭菜"],
    ],
  },
  {
    match: (r) => r.tags.includes("rice") || r.titleEn.toLowerCase().includes("rice"),
    vars: [
      ["Use day-old rice for the best wok-hei", "用隔夜饭炒最有镬气"],
      ["Add frozen peas and carrots for color", "加冷冻豌豆和胡萝卜丁配色"],
      ["Finish with a drizzle of sesame oil", "出锅前淋一点香油"],
    ],
  },
  {
    match: (r) => r.tags.includes("soup"),
    vars: [
      ["Add silken tofu cubes for protein", "加嫩豆腐块增加蛋白质"],
      ["Swap the stock for miso broth (faster umami)", "高汤换味噌汤底（更快提鲜）"],
      ["Add a beaten egg swirl at the end for body", "最后淋蛋花增稠"],
    ],
  },
  {
    match: (r) => r.tags.includes("vegetarian") || r.dietary.includes("vegetarian"),
    vars: [
      ["Add mushrooms for a meaty texture", "加香菇增加肉感"],
      ["Finish with toasted sesame seeds for crunch", "撒烤芝麻增脆"],
      ["Serve with a fried egg for extra protein", "配煎蛋补充蛋白质"],
    ],
  },
];

// ---------- 每道菜生成 ----------
const out = {};
let withSubs = 0, withMistakes = 0, withVars = 0;

for (const r of recipes) {
  const entry = { slug: r.slug, titleEn: r.titleEn };

  // 1) ingredientSubs：按食材 nameEn 匹配亚超食材
  const subs = [];
  for (const ing of r.ingredients) {
    const nameEn = ing.nameEn.toLowerCase();
    // 精确或包含匹配
    let rule;
    if (SUB_RULES[nameEn]) rule = SUB_RULES[nameEn];
    else {
      for (const [k, v] of Object.entries(SUB_RULES)) {
        if (nameEn.includes(k.toLowerCase()) && nameEn.length < k.length + 12) {
          rule = v; break;
        }
      }
    }
    if (rule) {
      subs.push({
        from: ing.nameEn,
        fromZh: ing.nameZh,
        to: rule.to,
        toZh: rule.toZh,
        ratio: rule.ratio,
        note: rule.note,
        noteZh: rule.noteZh,
      });
    }
  }
  // 去重
  const seen = new Set();
  entry.ingredientSubs = subs.filter((s) => {
    if (seen.has(s.from)) return false;
    seen.add(s.from); return true;
  }).slice(0, 3);
  if (entry.ingredientSubs.length) withSubs++;

  // 2) commonMistakes：按规则匹配
  const mistakes = [];
  for (const rule of MISTAKE_RULES) {
    if (rule.match(r)) mistakes.push(...rule.mistakes);
  }
  entry.commonMistakes = mistakes.slice(0, 2);
  if (entry.commonMistakes.length) withMistakes++;

  // 3) variations：按规则匹配
  const vars = [];
  for (const rule of VARIATION_RULES) {
    if (rule.match(r)) vars.push(...rule.vars);
  }
  entry.variations = vars.slice(0, 3).map(([en]) => en);
  entry.variationsZh = vars.slice(0, 3).map(([, zh]) => zh);
  if (entry.variations.length) withVars++;

  out[r.slug] = entry;
}

writeFileSync("scripts/depth-fields.json", JSON.stringify(out, null, 2));
console.log(`Generated depth fields for ${recipes.length} recipes`);
console.log(`  with ingredientSubs: ${withSubs}`);
console.log(`  with commonMistakes: ${withMistakes}`);
console.log(`  with variations:     ${withVars}`);
console.log("Sample (mapo-tofu):", JSON.stringify(out["mapo-tofu"], null, 1).slice(0, 800));
