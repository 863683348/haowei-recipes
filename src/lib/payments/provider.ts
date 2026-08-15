/**
 * 支付抽象层（v2.1）
 * PaymentProvider 接口：mock（开发/无密钥回退）与 waffo（真实）。
 * waffo 端点与字段以官方文档为准，接入时核对：
 * - 下单：https://waffo.com/docs/api-reference/order-create/create-new-order
 * - Webhook 事件：https://waffo.com/docs/zh/developer-docs/webhook/event-types
 * - 沙箱：https://waffo.com/docs/en/developer-docs/tools-and-references/developer-tools/sandbox-simulator.md
 */
import type { PlanCode } from "../membership";

export interface CheckoutRequest {
  orderId: string;
  userId: string;
  email: string;
  planCode: PlanCode;
  volumeId?: string;
  amountCny: number;
  locale: "en" | "zh";
  successUrl: string;
  cancelUrl: string;
}

export interface CheckoutResult {
  url: string;
  providerOrderId: string;
}

export interface PaymentProvider {
  readonly name: "mock" | "waffo";
  createCheckout(req: CheckoutRequest): Promise<CheckoutResult>;
}

/* ---------- mock：本地模拟支付（PAYMENT_MODE 缺省 / mock） ---------- */

export const mockProvider: PaymentProvider = {
  name: "mock",
  async createCheckout(req) {
    // 模拟支付：回调路由完成结算（走与 webhook 相同的 finalize 逻辑）
    const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    return {
      url: `${base}/api/payments/mock-callback?orderId=${encodeURIComponent(req.orderId)}&locale=${req.locale}`,
      providerOrderId: `mock_${req.orderId}`,
    };
  },
};

/* ---------- waffo：真实支付（PAYMENT_MODE=waffo） ---------- */

export const waffoProvider: PaymentProvider = {
  name: "waffo",
  async createCheckout(req) {
    const apiKey = process.env.WAFFO_API_KEY;
    if (!apiKey) throw new Error("WAFFO_API_KEY is not configured");
    const apiUrl = process.env.WAFFO_API_URL ?? "https://api.waffo.com/v1";
    // TODO(waffo)：以下端点/字段以官方 Create Order 文档为准核对
    const res = await fetch(`${apiUrl}/checkout/sessions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: req.amountCny,
        currency: "cny",
        metadata: {
          orderId: req.orderId,
          userId: req.userId,
          planCode: req.planCode,
          volumeId: req.volumeId ?? null,
          locale: req.locale,
        },
        success_url: req.successUrl,
        cancel_url: req.cancelUrl,
        customer_email: req.email,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`waffo checkout failed: ${res.status} ${body}`);
    }
    const data = (await res.json()) as {
      id?: string;
      order_id?: string;
      checkout_url?: string;
      url?: string;
    };
    return {
      url: data.checkout_url ?? data.url ?? req.cancelUrl,
      providerOrderId: String(data.id ?? data.order_id ?? req.orderId),
    };
  },
};

export function getPaymentProvider(): PaymentProvider {
  return process.env.PAYMENT_MODE === "waffo" ? waffoProvider : mockProvider;
}
