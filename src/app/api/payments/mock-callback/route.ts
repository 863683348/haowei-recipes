import { NextResponse, type NextRequest } from "next/server";
import { store } from "@/lib/db";
import { finalizeOrder } from "@/lib/payments/service";

/**
 * mock 支付回调：模拟「支付成功」→ 走与 webhook 完全相同的 finalize 结算逻辑。
 * 生产（waffo）由 /api/payments/webhook 负责，此处仅测试/无密钥回退。
 */
export async function GET(request: NextRequest) {
  const orderId = request.nextUrl.searchParams.get("orderId");
  const locale =
    request.nextUrl.searchParams.get("locale") === "zh" ? "zh" : "en";
  if (!orderId) {
    return NextResponse.json({ error: "missing-order" }, { status: 400 });
  }

  const order = await store.getOrderById(orderId);
  if (!order) {
    return NextResponse.json({ error: "order-not-found" }, { status: 404 });
  }

  await finalizeOrder(order.id);

  const base = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
  return NextResponse.redirect(`${base}/${locale}/account?paid=1`, 302);
}
