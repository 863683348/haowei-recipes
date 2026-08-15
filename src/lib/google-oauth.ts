/**
 * Google OAuth 2.0（Authorization Code 流程，零依赖，纯 fetch + node:crypto）
 *
 * 配置（.env）：
 *   GOOGLE_CLIENT_ID      —— Google Cloud Console OAuth 客户端 ID
 *   GOOGLE_CLIENT_SECRET  —— OAuth 客户端密钥
 *   NEXT_PUBLIC_SITE_URL  —— 站点根（用于拼 redirect_uri；Vercel 下可用 VERCEL_URL）
 *
 * redirect_uri 必须和 Google Cloud Console 的「已获授权的重定向 URI」完全一致，
 * 本实现固定为 `${SITE}/api/auth/google/callback`。
 *
 * 会话复用现有 auth.ts 的 HMAC cookie（setSessionCookie），仅把认证来源从
 * 「密码」换成「Google 身份」——已有密码账号也可用同一邮箱走 Google 登录。
 */
const AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const USERINFO_ENDPOINT = "https://www.googleapis.com/oauth2/v3/userinfo";
const SCOPE = "openid email profile";

export function siteBase(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  );
}

export function googleRedirectUri(): string {
  return `${siteBase()}/api/auth/google/callback`;
}

export function buildGoogleAuthUrl(state: string): string {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID ?? "",
    redirect_uri: googleRedirectUri(),
    response_type: "code",
    scope: SCOPE,
    state,
    access_type: "offline",
    prompt: "select_account",
  });
  return `${AUTH_ENDPOINT}?${params.toString()}`;
}

export interface GoogleTokens {
  access_token: string;
  id_token?: string;
}

export async function exchangeCodeForTokens(code: string): Promise<GoogleTokens> {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID ?? "",
      client_secret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      redirect_uri: googleRedirectUri(),
      grant_type: "authorization_code",
    }).toString(),
  });
  if (!res.ok) throw new Error(`google-token-${res.status}`);
  return (await res.json()) as GoogleTokens;
}

export interface GoogleProfile {
  sub: string;
  email: string;
  name?: string;
  picture?: string;
}

export async function fetchGoogleProfile(accessToken: string): Promise<GoogleProfile> {
  const res = await fetch(USERINFO_ENDPOINT, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) throw new Error(`google-userinfo-${res.status}`);
  return (await res.json()) as GoogleProfile;
}
