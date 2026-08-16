/**
 * 支付抽象层（v2.2 — waffo 按官方 OpenAPI 对齐）
 * PaymentProvider 接口：mock（开发/无密钥回退）与 waffo（真实）。
 *
 * waffo 官方（已核对 openapi.json + examples.md）：
 * - 下单端点：POST {WAFFO_API_URL}/api/v1/order/create
 *   （沙箱 https://api-sandbox.waffo.com，生产 https://api.waffo.com）
 * - 认证：请求头 X-API-KEY（商户 API key）+ X-SIGNATURE（商户私钥 RSA-SHA256 签
 *   原始 body）+ X-API-VERSION: 1.0.0
 * - 下单响应：{ code:"0", msg:"success", data:{ acquiringOrderId, orderStatus,
 *   orderAction:"{\"webUrl\":\"...\"}" } } —— 支付跳转 URL 在 data.orderAction 的
 *   webUrl 字段（JSON 字符串）。
 * - Webhook 验签：waffo 私钥签名 → 商户用 WAFFO_PUBLIC_KEY 验（见 waffo-verify.ts）
 *
 * 所需环境变量：WAFFO_API_KEY / WAFFO_MERCHANT_ID / WAFFO_PRIVATE_KEY（下单签名）
 *   / WAFFO_PUBLIC_KEY（webhook 验签）/ PAYMENT_MODE=waffo
 *   可选：WAFFO_API_URL（沙箱/生产）、WAFFO_CURRENCY（默认 CNY）、
 *   WAFFO_NOTIFY_URL（webhook 回调地址，默认 ${siteBase}/api/payments/webhook）
 */
import type { PlanCode } from "../membership";
import { signWaffoRequest } from "./waffo-verify";

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

function planDescription(planCode: PlanCode): string {
  switch (planCode) {
    case "pdf_volume":
      return "HaoWei Recipe PDF Volume";
    case "recipe_pass":
      return "HaoWei Recipe Pass";
    case "pdf_pass":
      return "HaoWei PDF Pass";
    case "all_access":
      return "HaoWei All-Access Membership";
    default:
      return `HaoWei ${planCode}`;
  }
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
    const merchantId = process.env.WAFFO_MERCHANT_ID;
    if (!apiKey || !merchantId) {
      throw new Error("WAFFO_API_KEY / WAFFO_MERCHANT_ID is not configured");
    }
    const apiHost =
      process.env.WAFFO_API_URL ?? "https://api.waffo.com"; // 沙箱用 https://api-sandbox.waffo.com
    const currency = process.env.WAFFO_CURRENCY ?? "CNY";
    const base =
      process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");
    const notifyUrl =
      process.env.WAFFO_NOTIFY_URL ?? `${base}/api/payments/webhook`;

    const payload = {
      // 幂等键：paymentRequestId（≤32，uuid 去横线正好 32 位）
      paymentRequestId: req.orderId.replace(/-/g, "").slice(0, 32),
      merchantOrderId: req.orderId, // ≤64
      orderCurrency: currency,
      orderAmount: req.amountCny.toFixed(2), // 官方要求 string，2 位小数
      orderDescription: planDescription(req.planCode), // ≤128
      orderRequestedAt: new Date().toISOString(),
      notifyUrl,
      successRedirectUrl: req.successUrl,
      failedRedirectUrl: req.cancelUrl,
      cancelRedirectUrl: req.cancelUrl,
      merchantInfo: { merchantId },
      userInfo: {
        userId: req.userId,
        userEmail: req.email,
        userTerminal: "WEB",
      },
      paymentInfo: { productName: "ONE_TIME_PAYMENT" },
      extendInfo: JSON.stringify({
        orderId: req.orderId,
        planCode: req.planCode,
        volumeId: req.volumeId ?? null,
        locale: req.locale,
      }),
    };

    const rawBody = JSON.stringify(payload);
    const signature = signWaffoRequest(rawBody);
    if (!signature) {
      throw new Error("WAFFO_PRIVATE_KEY is not configured or invalid");
    }

    const res = await fetch(`${apiHost}/api/v1/order/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
        "X-SIGNATURE": signature,
        "X-API-VERSION": "1.0.0",
      },
      body: rawBody,
    });

    if (!res.ok) {
      const errBody = await res.text();
      throw new Error(`waffo checkout failed: ${res.status} ${errBody}`);
    }

    const data = (await res.json()) as {
      code?: string;
      msg?: string;
      data?: {
        acquiringOrderId?: string;
        orderStatus?: string;
        orderAction?: string;
      };
    };

    // 官方成功码 "0"
    if (data.code && data.code !== "0") {
      throw new Error(`waffo checkout error: ${data.code} ${data.msg ?? ""}`);
    }

    // 支付跳转 URL：data.orderAction 是 JSON 字符串，取 webUrl
    let webUrl = "";
    const action = data?.data?.orderAction;
    if (typeof action === "string" && action.trim()) {
      try {
        const parsed = JSON.parse(action) as { webUrl?: string };
        webUrl = parsed.webUrl ?? "";
      } catch {
        webUrl = "";
      }
    }

    return {
      url: webUrl || req.cancelUrl,
      providerOrderId: String(
        data?.data?.acquiringOrderId ?? req.orderId
      ),
    };
  },
};

export function getPaymentProvider(): PaymentProvider {
  return process.env.PAYMENT_MODE === "waffo" ? waffoProvider : mockProvider;
}
