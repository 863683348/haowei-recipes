import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

/**
 * 语言路由 middleware：
 *  - 根路径 "/" → 重定向到默认语言 "/en"（保持 query）
 *  - 已带 /en /zh 前缀的路径 → 放行
 *  - 注意：不读取 Accept-Language（避免边缘行为差异），默认语言由 /en 兜底；
 *    用户偏好经 Header 语言切换器持久化到 URL（SEO 双前缀结构）。
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  // 已是合法语言前缀 → 放行
  if ((locales as readonly string[]).includes(first)) {
    return NextResponse.next();
  }

  // 其他路径（含根路径）→ 重定向到默认语言
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}

export const config = {
  // 排除静态资源、API、route handlers 与带扩展名的文件
  matcher: ["/((?!_next|api|robots.txt|sitemap.xml|.*\\..*).*)"],
};
