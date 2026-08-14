import type { NextConfig } from "next";

/** 安全响应头（Phase 5 闸门要求） */
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; font-src 'self'; script-src 'self' 'unsafe-inline'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'",
  },
];

/** 公开内容边缘缓存（Vercel FOT/带宽 控制） */
const publicCache = "public, s-maxage=86400, stale-while-revalidate=604800";
const cacheHeaders = [{ key: "Cache-Control", value: publicCache }];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      // 公开内容页全部强制边缘缓存（语言首页单段单独覆盖）
      { source: "/:locale(en|zh)", headers: cacheHeaders },
      { source: "/recipes", headers: cacheHeaders },
      { source: "/recipes/:slug", headers: cacheHeaders },
      { source: "/terms", headers: cacheHeaders },
      { source: "/substitutions", headers: cacheHeaders },
      { source: "/about", headers: cacheHeaders },
      { source: "/faq", headers: cacheHeaders },
      { source: "/privacy", headers: cacheHeaders },
      { source: "/contact", headers: cacheHeaders },
      { source: "/ai-assistant", headers: cacheHeaders },
    ];
  },
};

export default nextConfig;
