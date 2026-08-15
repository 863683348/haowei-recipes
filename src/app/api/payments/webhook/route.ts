import { NextResponse, type NextRequest } from "next/server";
import { store } from "@/lib/db";
import { finalizeOrder } from "@/lib/payments/service";
import { verifyWaffoSignature } from "@/lib/payments/waffo-verify";

/**
 * waffo Webhook（支付/订阅事件 → 结算权益）
 *
 * 安全铁律（参照 dafeixiang-saas-launch skill）：
 *   1. 先验签，再处理；验签失败一律拒绝，绝不结算。
 *   2. 仅当 PAYMENT_MODE === "waffo" 才接受外部回调。
 *   3. 结算金额/方案以【服务端订单】为准（finalizeOrder 读 DB，不读请求体）。
 *   4. 响应体必须匹配 waffo 期望：{"message":"success"|"failed"|"unknown"}。
 *
 * 验签方案：https://waffo.com/docs/zh/developer-docs/webhook/overview
 * 事件映射：https://waffo.com/docs/zh/developer-docs/webhook/event-types
 */
export async function POST(request: NextRequest) {
  if (process.env.PAYMENT_MODE !== "waffo") {
    // 未启用 waffo：拒绝外部回调，避免误结算
    return NextResponse.json({ message: "not-configured" }, { status: 503 });
  }

  const raw = await request.text();

  // ★ 先验签（P0 红线）：未配置公钥或签名不符 → 直接拒绝，不解析、不结算
  const signature = request.headers.get("X-SIGNATURE");
  if (!verifyWaffoSignature(raw, signature)) {
    return NextResponse.json({ message: "failed" }, { status: 401 });
  }

  let body: unknown = null;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ message: "failed" }, { status: 400 });
  }

  const root = (body as Record<string, unknown>) ?? {};
  const data = (root.data as Record<string, unknown> | undefined) ?? {};
  const metadata = (data.metadata as Record<string, unknown> | undefined) ?? {};

  // 1) 我们的订单号（metadata.orderId）—— 推荐匹配路径
  const ourOrderId =
    typeof metadata.orderId === "string" ? metadata.orderId : "";
  if (ourOrderId) {
    const order = await store.getOrderById(ourOrderId);
    if (order) {
      await finalizeOrder(order.id);
      return NextResponse.json({ message: "success" });
    }
  }

  // 2) 渠道单号回查（兜底）
  const providerOrderId = String(
    root.id ?? root.order_id ?? data.id ?? data.order_id ?? ""
  );
  if (!providerOrderId) {
    // 无法识别但不重试：找不到订单，重试无意义
    return NextResponse.json({ message: "unknown" }, { status: 200 });
  }
  const order = await store.findOrderByProvider("waffo", providerOrderId);
  if (order) {
    await finalizeOrder(order.id);
  }
  return NextResponse.json({ message: "success" });
}
