import { NextResponse, type NextRequest } from "next/server";
import { store } from "@/lib/db";
import { finalizeOrder } from "@/lib/payments/service";
import { verifyWaffoSignature } from "@/lib/payments/waffo-verify";

/**
 * waffo Webhook（支付事件 → 结算权益）
 *
 * 官方文档（已核对）：
 *   https://waffo.com/docs/zh/developer-docs/webhook/overview
 *   https://waffo.com/docs/zh/developer-docs/webhook/event-types
 * 请求结构：{ "eventType": "PAYMENT_NOTIFICATION", "result": { ... } }
 *   result 结构与 Order Inquiry 响应的 data 一致，含 merchantOrderId /
 *   acquiringOrderId / orderStatus（PAY_SUCCESS=成功）等字段。
 *
 * 安全铁律（参照 dafeixiang-saas-launch skill）：
 *   1. 先验签，再处理；验签失败一律拒绝，绝不结算。
 *   2. 仅当 PAYMENT_MODE === "waffo" 才接受外部回调。
 *   3. 仅当 orderStatus === "PAY_SUCCESS"（终态成功）才结算——支付失败/其他
 *      中间态事件只接收、不结算。
 *   4. 结算金额/方案以【服务端订单】为准（finalizeOrder 读 DB，不读请求体）。
 *   5. 响应必须匹配 waffo 期望：HTTP 200 + {"message":"success"|"failed"|"unknown"}。
 *      验签/解析失败也返回 HTTP 200 + {"message":"failed"}（waffo 检查状态码+body，
 *      非 200 视为投递失败重试）。
 */
export async function POST(request: NextRequest) {
  if (process.env.PAYMENT_MODE !== "waffo") {
    // 未启用 waffo：拒绝外部回调，避免误结算
    return NextResponse.json({ message: "not-configured" }, { status: 503 });
  }

  const raw = await request.text();

  // 先验签（P0 红线）：未配置公钥或签名不符 → 直接拒绝，不解析、不结算
  const signature = request.headers.get("X-SIGNATURE");
  if (!verifyWaffoSignature(raw, signature)) {
    return NextResponse.json({ message: "failed" }, { status: 200 });
  }

  let body: unknown = null;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ message: "failed" }, { status: 200 });
  }

  const root = (body as Record<string, unknown> | null) ?? {};

  // 仅处理支付结果事件；其余事件（退款/订阅等）接收但不结算
  if (root.eventType !== "PAYMENT_NOTIFICATION") {
    return NextResponse.json({ message: "success" }, { status: 200 });
  }

  const result = (root.result as Record<string, unknown> | undefined) ?? {};

  // 仅支付成功才结算（PAY_SUCCESS 为终态成功；失败/关闭/进行中一律不结算）
  const orderStatus = String(result.orderStatus ?? "");
  const paymentStatus = String(result.paymentStatus ?? "");
  const paid =
    orderStatus === "PAY_SUCCESS" || paymentStatus === "PAY_SUCCESS";
  if (!paid) {
    return NextResponse.json({ message: "success" }, { status: 200 });
  }

  // 1) 我们的订单号（result.merchantOrderId）—— 主匹配路径
  const ourOrderId =
    typeof result.merchantOrderId === "string" ? result.merchantOrderId : "";
  if (ourOrderId) {
    const order = await store.getOrderById(ourOrderId);
    if (order) {
      await finalizeOrder(order.id, "waffo");
      return NextResponse.json({ message: "success" }, { status: 200 });
    }
  }

  // 2) 渠道单号回查（兜底）
  const providerOrderId = String(
    result.acquiringOrderId ?? result.id ?? ""
  );
  if (!providerOrderId) {
    // 无法识别但不重试：找不到订单，重试无意义
    return NextResponse.json({ message: "unknown" }, { status: 200 });
  }
  const order = await store.findOrderByProvider("waffo", providerOrderId);
  if (order) {
    await finalizeOrder(order.id, "waffo");
  }
  return NextResponse.json({ message: "success" }, { status: 200 });
}
