import { createPublicKey, verify as cryptoVerify } from "node:crypto";

/**
 * waffo Webhook 验签（非对称，RSA）。
 *
 * waffo 使用 Waffo 私钥对「请求原始 body」签名，商户必须用 Waffo 公钥验证
 * 请求头 `X-SIGNATURE`（base64）。详见 waffo 文档：
 *   https://waffo.com/docs/zh/developer-docs/webhook/overview
 *   https://waffo.com/docs/zh/developer-docs/webhook/best-practices
 *
 * 公钥来源：在 waffo 后台「开发者 / Webhook」页面下载 PEM 公钥，
 * 存入环境变量 WAFFO_PUBLIC_KEY（注意换行保留，可用 \n 转义）。
 *
 * 安全默认：未配置公钥或验签失败 → 一律返回 false，调用方不得执行业务逻辑。
 * 算法以 waffo 官方为准；若其改为 ECDSA，可把 ALGO 改为 "sha256" 并把
 * createPublicKey 的 key 视为 EC 公钥。
 */
const ALGO = "RSA-SHA256";

function toPem(raw: string): string {
  const t = raw.trim();
  if (t.includes("-----BEGIN")) return t;
  const body = t.replace(/\s+/g, "");
  const wrapped = body.match(/.{1,64}/g)?.join("\n") ?? body;
  return `-----BEGIN PUBLIC KEY-----\n${wrapped}\n-----END PUBLIC KEY-----`;
}

export function verifyWaffoSignature(
  rawBody: string,
  signatureB64: string | null
): boolean {
  const pub = process.env.WAFFO_PUBLIC_KEY;
  if (!pub || !signatureB64) return false;
  try {
    const key = createPublicKey({ key: toPem(pub), format: "pem" });
    return cryptoVerify(
      ALGO,
      Buffer.from(rawBody, "utf8"),
      key,
      Buffer.from(signatureB64, "base64")
    );
  } catch {
    return false;
  }
}
