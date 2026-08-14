/** 全局类型定义（Spec §3 数据模型） */

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
  note?: string; // 选材/替代提示
  termKey?: string; // 关联术语（R-01 悬浮释义）
}

export interface StateNote {
  visual: string; // 状态描述（"边缘开始半透明"）
  timeRef?: string; // 时间参考（"中火约 2-3 分钟"）
  heat?: "low" | "medium" | "medium-low" | "medium-high" | "high";
  signal: string; // 判断信号（"边缘开始金黄"）
}

export interface Step {
  text: string;
  zhHint?: string; // 中文辅助（可选）
  stateNote?: StateNote; // R-03 火候/状态可视化
  tip?: string;
}

export interface Recipe {
  id: string;
  slug: string;
  titleEn: string;
  titleZh: string;
  pinyin: string;
  cuisine: string; // 川菜 / 粤菜 / 家常 ...
  region: string; // 省份/城市
  difficulty: Difficulty;
  timeMin: number;
  servings: number;
  version: Version;
  versionNote?: string; // 双版本说明（R-08 信任要素）
  tags: string[];
  dietary: DietLabel[];
  story: string; // 家庭配方来源 / 文化叙事（信任要素）
  ingredients: Ingredient[];
  steps: Step[];
  tips: string[];
  relatedSlugs: string[];
}

/* ---------- 术语（R-01） ---------- */
export interface Term {
  id: string;
  zh: string;
  pinyin: string;
  en: string;
  category: "sauce" | "spice" | "technique" | "ingredient" | "measurement";
  definition: string;
  quantEquivalent?: string; // 如 "1 tbsp ≈ 15 ml"
  substituteHint?: string;
}

/* ---------- 食材替换（R-02） ---------- */
export type Fidelity = 1 | 2 | 3 | 4 | 5; // 风味还原度星级

export interface Substitution {
  id: string;
  from: string; // 原食材（亚超/中餐特有）
  fromZh?: string;
  to: string; // 替代品
  ratio: string; // 用量换算
  fidelity: Fidelity;
  note: string; // 风味影响
  type: "asian2local" | "pair";
}

/* ---------- FAQ 规则问答（R-05） ---------- */
export interface FAQ {
  id: string;
  category: "technique" | "ingredient" | "flavor" | "equipment" | "diet" | "general";
  question: string;
  keywords: string[]; // 关键词匹配
  answer: string;
  source?: string; // 来源标注（信任要素）
  confidence: "high" | "medium" | "low";
  relatedRecipeSlugs?: string[];
}

/* ---------- 口味调整（R-06） ---------- */
export interface FlavorAdjustment {
  termKey: string;
  label: string;
  from: string; // 原用量（菜谱中值，格式 "1 tbsp"）
  to: string; // 调整后用量
  note: string; // 风味影响说明
}

export interface FlavorLevel {
  id: string;
  label: string; // 如 "Less spicy" / "Reduce salt 30%"
  adjustments: FlavorAdjustment[];
}

export interface FlavorRule {
  id: string;
  key: "spicy" | "salty" | "oily" | "vegetarian" | "less-sugar";
  label: string;
  question: string; // AI/交互文案
  levels: FlavorLevel[];
}

/* ---------- 食材采购渠道目录（R-04） ---------- */
export interface CatalogEntry {
  name: string;
  aliases?: string[];
  category: IngredientCategory;
  pantry: Pantry;
}
