import { NextResponse, type NextRequest } from "next/server";
import { timingSafeEqual } from "node:crypto";
import {
  exchangeCodeForTokens,
  fetchGoogleProfile,
  siteBase,
} from "@/lib/google-oauth";
import { setSessionCookie } from "@/lib/auth";
import { store } from "@/lib/db";

export const dynamic = "force-dynamic";

function redirectTo(path: string): NextResponse {
  const base = siteBase();
  const res = NextResponse.redirect(`${base}${path}`);
  res.cookies.set("hw_oauth_state", "", { path: "/", maxAge: 0 });
  return res;
}

/**
 * Google OAuth 回调：校验 state CSRF → 换 token → 取 userinfo →
 * 按邮箱 upsert 用户（无密码）→ 写会话 cookie → 跳回目标页。
 * 任何一步失败都回首页并带 oauth 错误码，绝不泄露内部异常。
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const stateParam = searchParams.get("state");
  const cookieState = request.cookies.get("hw_oauth_state")?.value;
  const base = siteBase();

  if (!code || !stateParam || !cookieState) {
    return redirectTo("/?oauth=missing");
  }

  let payload: { csrf: string; locale: string; next: string };
  try {
    payload = JSON.parse(Buffer.from(stateParam, "base64url").toString("utf8"));
  } catch {
    return redirectTo("/?oauth=state");
  }

  const a = Buffer.from(payload.csrf);
  const b = Buffer.from(cookieState);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return redirectTo("/?oauth=state");
  }

  try {
    const tokens = await exchangeCodeForTokens(code);
    const profile = await fetchGoogleProfile(tokens.access_token);

    let user = await store.findUserByEmail(profile.email);
    if (!user) {
      user = await store.createUser({
        email: profile.email,
        name: profile.name ?? profile.email,
        passwordHash: "",
      });
    }

    const target =
      typeof payload.next === "string" && payload.next.startsWith("/")
        ? payload.next
        : `/${payload.locale}/account`;
    return setSessionCookie(redirectTo(target), user.id);
  } catch {
    return redirectTo("/?oauth=error");
  }
}
