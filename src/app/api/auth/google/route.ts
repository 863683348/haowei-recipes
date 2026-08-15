import { NextResponse, type NextRequest } from "next/server";
import { randomBytes } from "node:crypto";
import { buildGoogleAuthUrl } from "@/lib/google-oauth";

export const dynamic = "force-dynamic";

/**
 * 发起 Google OAuth：生成 CSRF state（存入 httpOnly cookie），302 到 Google 授权页。
 * locale / next 编码进 state，避免 Google 仅原样回传 state 的限制。
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") === "zh" ? "zh" : "en";
  const next = searchParams.get("next") ?? `/${locale}/account`;

  const csrf = randomBytes(32).toString("hex");
  const state = Buffer.from(
    JSON.stringify({ csrf, locale, next })
  ).toString("base64url");

  const res = NextResponse.redirect(buildGoogleAuthUrl(state));
  res.cookies.set("hw_oauth_state", csrf, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 300,
  });
  return res;
}
