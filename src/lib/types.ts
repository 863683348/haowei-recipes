/** 全局类型定义（Spec §3 数据模型，v1.1 多语言：英文为主，新增 Zh 增量字段） */

/* ---------- 菜谱 ---------- */
export type Version = "family" | "restaurant";
export type Difficulty = "easy" | "medium" | "hard";
export type DietLabel =
  | "vegetarian"
  | "vegan"
  | "gluten-free"
  | "low-sodium"
  | "halal"
  | "none";
export type IngredientCategory =
  | "produce"
  | "protein"
  | "staple"
  | "asian-pantry"
  | "western-pantry"
  | "spice"
  | "dairy"
  | "other";
export type Pantry = "local" | "asian"; // 购买渠道

export interface Ingredient {
  id: string;
  nameEn: string;
  nameZh: string; // 中文辅助标注（HǎoWèi 双语策略）
  pinyin?: string;
  amountMetric: string; // 公制 如 "15 g"
  amountUS: string; // 美制 如 "1 tbsp"
  category: IngredientCategory;
  pantry?: Pantry;
  note?: string; // 选材/替代提示（英文）
  noteZh?: string; // 选材/替代提示（中文，可选）
  termKey?: string; // 关联术语（R-01 悬浮释义）
}

export interface StateNote {
  visual: string; // 状态描述（"边缘开始半透明"）
  visualZh?: string; // 状态描述（中文）
  timeRef?: string; // 时间参考（"中火约 2-3 分钟"）
  timeRefZh?: string; // 时间参考（中文）
  heat?: "low" | "medium" | "medium-low" | "medium-high" | "high";
  signal: string; // 判断信号（"边缘开始金黄"）
  signalZh?: string; // 判断信号（中文）
}

export interface Step {
  text: string; // 步骤说明（英文）
  textZh?: string; // 步骤说明（中文）
  zhHint?: string; // 中文短提示（旧辅助，保留兼容）
  stateNote?: StateNote; // R-03 火候/状态可视化
  tip?: string; // 步骤小贴士（英文）
  tipZh?: string; // 步骤小贴士（中文）
}

export interface Recipe {
  id: string;
  slug: string;
  titleEn: string;
  titleZh: string;
  pinyin: string;
  cuisine: string; // 川菜 / 粤菜 / 家常 ...（中文）
  cuisineEn?: string; // 菜系（英文，可选）
  region: string; // 省份/城市（英文）
  regionZh?: string; // 省份/城市（中文）
  difficulty: Difficulty;
  timeMin: number;
  servings: number;
  version: Version;
  versionNote?: string; // 双版本说明（英文）
  versionNoteZh?: string; // 双版本说明（中文）
  tags: string[];
  dietary: DietLabel[];
  story: string; // 家庭配方来源 / 文化叙事（英文）
  storyZh?: string; // 家庭配方来源 / 文化叙事（中文）
  ingredients: Ingredient[];
  steps: Step[];
  tips: string[]; // 英文
  tipsZh?: string[]; // 中文（与 tips 平行）
  relatedSlugs: string[];
  /** 菜谱卡片图（绝对路径，从 SITE_URL 解析为完整 URL） */
  image: string;
}

/* ---------- 术语（R-01） ---------- */
export interface Term {
  id: string;
  zh: string;
  pinyin: string;
  en: string;
  category: "sauce" | "spice" | "technique" | "ingredient" | "measurement";
  definition: string; // 英文释义
  definitionZh?: string; // 中文释义
  quantEquivalent?: string; // 如 "1 tbsp ≈ 15 ml"
  substituteHint?: string; // 英文替代提示
  substituteHintZh?: string; // 中文替代提示
}

/* ---------- 食材替换（R-02） ---------- */
export type Fidelity = 1 | 2 | 3 | 4 | 5; // 风味还原度星级

export interface Substitution {
  id: string;
  from: string; // 原食材（亚超/中餐特有）
  fromZh?: string;
  to: string; // 替代品（英文）
  toZh?: string; // 替代品（中文）
  ratio: string; // 用量换算
  fidelity: Fidelity;
  note: string; // 风味影响（英文）
  noteZh?: string; // 风味影响（中文）
  type: "asian2local" | "pair";
}

/* ---------- FAQ 规则问答（R-05） ---------- */
export interface FAQ {
  id: string;
  category: "technique" | "ingredient" | "flavor" | "equipment" | "diet" | "general";
  question: string; // 英文问题
  questionZh?: string; // 中文问题
  keywords: string[]; // 关键词匹配
  answer: string; // 英文回答
  answerZh?: string; // 中文回答
  source?: string; // 来源标注（信任要素）
  confidence: "high" | "medium" | "low";
  relatedRecipeSlugs?: string[];
}

/* ---------- 口味调整（R-06） ---------- */
export interface FlavorAdjustment {
  termKey: string;
  label: string; // 英文
  labelZh?: string; // 中文
  from: string; // 原用量（菜谱中值，格式 "1 tbsp"）
  to: string; // 调整后用量
  note: string; // 风味影响说明（英文）
  noteZh?: string; // 风味影响说明（中文）
}

export interface FlavorLevel {
  id: string;
  label: string; // 英文
  labelZh?: string; // 中文
  adjustments: FlavorAdjustment[];
}

export interface FlavorRule {
  id: string;
  key: "spicy" | "salty" | "oily" | "vegetarian" | "less-sugar";
  label: string; // 英文
  labelZh?: string; // 中文
  question: string; // AI/交互文案（英文）
  questionZh?: string; // 中文
  levels: FlavorLevel[];
}

/* ---------- 食材采购渠道目录（R-04） ---------- */
export interface CatalogEntry {
  name: string;
  aliases?: string[];
  category: IngredientCategory;
  pantry: Pantry;
}
