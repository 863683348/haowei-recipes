/**
 * 会员权益核心模型（v2.1 升级）
 * 核心原则：权益 = 两个独立维度的授权集合 —— 菜谱权益 ∪ PDF 权益，
 * 两套权益独立购买、独立生效、独立过期，互不绑定。
 */

export type PlanCode =
  | "recipe_pass" // 菜谱会员（年订阅）
  | "pdf_pass" // PDF 会员（年订阅）
  | "all_access" // All-Access（年订阅）
  | "pdf_volume"; // PDF 单册（买断）

export type BillingType = "subscription" | "one_time";

export interface Plan {
  code: PlanCode;
  billing: BillingType;
  priceCny: number;
  priceUsd: number;
  /** 订阅时长（天）；买断为 null */
  durationDays: number | null;
}

/** 产品与定价目录（锚定 v1.0，仅拆分；与 waffo 产品 ID 的映射在接入时配置） */
export const PLANS: Record<PlanCode, Plan> = {
  recipe_pass: {
    code: "recipe_pass",
    billing: "subscription",
    priceCny: 99,
    priceUsd: 14.99,
    durationDays: 365,
  },
  pdf_pass: {
    code: "pdf_pass",
    billing: "subscription",
    priceCny: 129,
    priceUsd: 18.99,
    durationDays: 365,
  },
  all_access: {
    code: "all_access",
    billing: "subscription",
    priceCny: 199,
    priceUsd: 29.99,
    durationDays: 365,
  },
  pdf_volume: {
    code: "pdf_volume",
    billing: "one_time",
    priceCny: 39,
    priceUsd: 5.99,
    durationDays: null,
  },
};

/** PDF 合集册目录 */
export interface VolumeInfo {
  id: string; // "v1" | "v2" | ...
  free: boolean; // v1 免费（填邮箱下载）；v2+ 付费
  recipeSlugs: string[]; // 该册收录菜谱（顺序即目录顺序）
  previewCount: number; // 免费可预览道数（v2+ 为 3）
}

export const VOLUMES: VolumeInfo[] = [
  {
    id: "v1",
    free: true,
    recipeSlugs: [
      "tomato-and-egg",
      "mapo-tofu",
      "kung-pao-chicken",
      "egg-fried-rice",
      "beef-and-broccoli",
      "scallion-pancakes",
      "cucumber-scrambled-eggs",
      "garlic-chives-scrambled-eggs",
      "yangzhou-fried-rice",
      "pineapple-fried-rice",
    ],
    previewCount: 10,
  },
  {
    id: "v2",
    free: false,
    recipeSlugs: ["mapo-tofu", "kung-pao-chicken", "beef-and-broccoli"],
    previewCount: 3, // 川菜专场（制作中）：先以 3 道预览占位，完整目录随内容补充
  },
  {
    id: "v3",
    free: true,
    recipeSlugs: [
      "tomato-and-egg",
      "egg-fried-rice",
      "braised-tofu",
      "home-style-tofu",
      "scallion-noodles",
      "tomato-egg-noodles",
      "yangchun-noodles",
      "egg-drop-soup",
      "tomato-egg-drop-soup",
      "winter-melon-soup",
      "beef-and-broccoli",
      "green-pepper-beef",
      "onion-beef-stir-fry",
      "potato-beef-stew",
      "cashew-chicken",
      "coke-chicken-wings",
      "hongshao-chicken",
      "soy-chicken-wings",
      "pan-fried-chicken",
      "hongshao-pork",
      "sweet-sour-pork",
      "sweet-sour-ribs",
      "pepper-pork",
      "vinegar-cabbage",
      "spicy-potato-shreds",
    ],
    previewCount: 25, // Top 25 家常菜电子书（免费）
  },
];

export const getVolume = (id: string): VolumeInfo | undefined =>
  VOLUMES.find((v) => v.id === id);

/** 免费菜谱额度：当前库 10 道 → 全部免费（延续「首本免费」叙事）。
 *  渐进式门禁：库扩至 30 道时调整为 15；扩至 50 道时调整为 20。一行配置，无需改页面。 */
export const FREE_RECIPE_LIMIT = 10;

/* ---------- 权益结构与判定（服务端唯一权威） ---------- */

export interface Entitlements {
  /** 菜谱权益到期时间（ISO），null = 无 */
  recipePassUntil: string | null;
  /** PDF 权益到期时间（ISO），null = 无 */
  pdfPassUntil: string | null;
  /** 已买断的 PDF 册 id 集合 */
  volumes: string[];
}

export const emptyEntitlements = (): Entitlements => ({
  recipePassUntil: null,
  pdfPassUntil: null,
  volumes: [],
});

function isActive(iso: string | null): boolean {
  return !!iso && new Date(iso).getTime() > Date.now();
}

/** 菜谱权益是否有效（All-Access 也写 recipePassUntil，故无需单列） */
export function hasRecipeAccess(e: Entitlements | null | undefined): boolean {
  return isActive(e?.recipePassUntil ?? null);
}

/** PDF 会员权益是否有效 */
export function hasPdfPassAccess(e: Entitlements | null | undefined): boolean {
  return isActive(e?.pdfPassUntil ?? null);
}

/** 指定 PDF 册是否可下载：买断记录 或 PDF 会员（含 All-Access） */
export function hasVolumeAccess(
  e: Entitlements | null | undefined,
  volumeId: string
): boolean {
  if (hasPdfPassAccess(e)) return true;
  return (e?.volumes ?? []).includes(volumeId);
}

/** 菜谱是否属于会员内容（渐进式：序号超出免费额度的视为会员菜谱） */
export function isPremiumRecipe(slug: string, allSlugs: string[]): boolean {
  const idx = allSlugs.indexOf(slug);
  return idx >= 0 && idx >= FREE_RECIPE_LIMIT;
}

export interface GrantSpec {
  recipePassDays?: number;
  pdfPassDays?: number;
  volumeId?: string;
}

/** 由订单推导权益变更（供 finalizeOrder 使用） */
export function grantForPlan(
  plan: Plan,
  volumeId?: string
): GrantSpec {
  switch (plan.code) {
    case "recipe_pass":
      return { recipePassDays: plan.durationDays ?? 365 };
    case "pdf_pass":
      return { pdfPassDays: plan.durationDays ?? 365 };
    case "all_access":
      return { recipePassDays: plan.durationDays ?? 365, pdfPassDays: plan.durationDays ?? 365 };
    case "pdf_volume":
      return { volumeId };
    default:
      return {};
  }
}

/** 从当前到期时间（可能为 null）叠加天数，返回新的 ISO 字符串 */
export function extendDate(currentIso: string | null, days: number): string {
  const base = currentIso
    ? Math.max(new Date(currentIso).getTime(), Date.now())
    : Date.now();
  return new Date(base + days * 24 * 60 * 60 * 1000).toISOString();
}
