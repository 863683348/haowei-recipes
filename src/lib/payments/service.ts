/**
 * 支付结算服务（v2.1）
 * createCheckoutSession：建单 → 调支付渠道 → 返回跳转 URL（订单保持 pending）
 * finalizeOrder：支付成功后的统一结算（webhook 与 mock 回调共用同一入口，保证幂等）
 * 渠道单号：mock 由 orderId 推导；waffo 由 webhook 携带的 metadata.orderId（我们的单号）匹配，
 * 无需在建单时写回渠道单号，避免引入额外写操作。
 */
import { PLANS, extendDate, grantForPlan, type PlanCode } from "../membership";
import { store } from "../db";
import { getPaymentProvider } from "./provider";

export interface CheckoutSessionInput {
  userId: string;
  planCode: PlanCode;
  volumeId?: string;
  locale: string;
}

export async function createCheckoutSession(
  input: CheckoutSessionInput
): Promise<{ url: string }> {
  const user = await store.findUserById(input.userId);
  if (!user) throw new Error("unauthorized");

  const plan = PLANS[input.planCode];
  if (!plan) throw new Error("unknown-plan");

  if (input.planCode === "pdf_volume" && !input.volumeId) {
    throw new Error("volume-required");
  }

  const order = await store.createOrder({
    userId: input.userId,
    planCode: input.planCode,
    volumeId: input.volumeId ?? null,
    amountCny: plan.priceCny,
  });

  const base =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");
  const locale = input.locale === "zh" ? "zh" : "en";

  const provider = getPaymentProvider();
  const result = await provider.createCheckout({
    orderId: order.id,
    userId: input.userId,
    email: user.email,
    planCode: input.planCode,
    volumeId: input.volumeId,
    amountCny: plan.priceCny,
    locale,
    successUrl: `${base}/${locale}/account?paid=1`,
    cancelUrl: `${base}/${locale}/pricing`,
  });

  // 订单保持 pending；支付成功后由 finalizeOrder 统一结算并置 paid
  return { url: result.url };
}

/** 结算订单 → 写入权益（幂等：已 paid 直接跳过） */
export async function finalizeOrder(
  orderId: string,
  provider: "waffo" | "mock" = "mock"
): Promise<void> {
  const order = await store.getOrderById(orderId);
  if (!order || order.status !== "pending") return;

  const plan = PLANS[order.planCode as PlanCode];
  if (!plan) return;

  const grant = grantForPlan(plan, order.volumeId ?? undefined);
  const e = await store.getEntitlements(order.userId);

  if (grant.recipePassDays) {
    e.recipePassUntil = extendDate(e.recipePassUntil, grant.recipePassDays);
  }
  if (grant.pdfPassDays) {
    e.pdfPassUntil = extendDate(e.pdfPassUntil, grant.pdfPassDays);
  }
  if (grant.volumeId) {
    if (!e.volumes.includes(grant.volumeId)) {
      e.volumes = [...e.volumes, grant.volumeId];
    }
    await store.addDownload(order.userId, grant.volumeId);
  }

  await store.saveEntitlements(order.userId, e);
  await store.markOrderPaid(
    order.id,
    provider,
    provider === "waffo"
      ? order.providerOrderId || `waffo_${order.id}`
      : `mock_${order.id}`
  );
}
