import {
  createPrivateKey,
  createPublicKey,
  sign as cryptoSign,
  verify as cryptoVerify,
} from "node:crypto";

/**
 * waffo 双向 RSA 签名（对齐官方文档 SHA256WithRSA）。
 *
 * 1) 商户 → waffo（下单等请求）：用【商户私钥 WAFFO_PRIVATE_KEY】对请求原始 body
 *    签名，放在请求头 `X-SIGNATURE`（base64）。官方文档：
 *    https://waffo.com/docs/en/developer-docs/integration/api/examples.md
 * 2) waffo → 商户（Webhook）：waffo 用【Waffo 私钥】对回调原始 body 签名，商户用
 *    【Waffo 公钥 WAFFO_PUBLIC_KEY】验证请求头 `X-SIGNATURE`（base64）。官方文档：
 *    https://waffo.com/docs/en/developer-docs/webhook/signature-verification.md
 *
 * 公钥/私钥来源：waffo Merchant Portal → Integration 菜单（Dev/Admin 角色可看）。
 *
 * 安全默认：未配置密钥或验签失败 → 一律返回 false / null，调用方不得执行业务逻辑。
 * 算法以 waffo 官方为准：RSA + SHA-256（PKCS1 v1.5 填充）。
 */
const ALGO = "RSA-SHA256";

function wrapPem(raw: string, label: "PUBLIC KEY" | "PRIVATE KEY"): string {
  const t = raw.trim();
  if (t.includes("-----BEGIN")) return t;
  const body = t.replace(/\s+/g, "");
  const wrapped = body.match(/.{1,64}/g)?.join("\n") ?? body;
  return `-----BEGIN ${label}-----\n${wrapped}\n-----END ${label}-----`;
}

/** 验签：waffo webhook 回调（用 Waffo 公钥验证 X-SIGNATURE） */
export function verifyWaffoSignature(
  rawBody: string,
  signatureB64: string | null
): boolean {
  const pub = process.env.WAFFO_PUBLIC_KEY;
  if (!pub || !signatureB64) return false;
  try {
    const key = createPublicKey({ key: wrapPem(pub, "PUBLIC KEY"), format: "pem" });
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

/** 签名：商户向 waffo 下单（用商户私钥生成 X-SIGNATURE） */
export function signWaffoRequest(rawBody: string): string | null {
  const priv = process.env.WAFFO_PRIVATE_KEY;
  if (!priv) return null;
  try {
    const key = createPrivateKey({ key: wrapPem(priv, "PRIVATE KEY"), format: "pem" });
    return cryptoSign(ALGO, Buffer.from(rawBody, "utf8"), key).toString("base64");
  } catch {
    return null;
  }
}
