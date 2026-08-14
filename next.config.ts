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
  // public/images/ 下的 PNG 由 sharp 预生成并压缩到位；禁止 next/image 在 build 时
  // 重新编码（会从 ~370KB 膨胀到 ~1.5MB，拖慢首屏 + 爆 Vercel FOT 带宽）。
  images: { unoptimized: true },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      // 公开内容页全部强制边缘缓存（双语言前缀）
      { source: "/:locale(en|zh)", headers: cacheHeaders },
      { source: "/:locale(en|zh)/recipes", headers: cacheHeaders },
      { source: "/:locale(en|zh)/recipes/:slug", headers: cacheHeaders },
      { source: "/:locale(en|zh)/terms", headers: cacheHeaders },
      { source: "/:locale(en|zh)/substitutions", headers: cacheHeaders },
      { source: "/:locale(en|zh)/about", headers: cacheHeaders },
      { source: "/:locale(en|zh)/faq", headers: cacheHeaders },
      { source: "/:locale(en|zh)/privacy", headers: cacheHeaders },
      { source: "/:locale(en|zh)/contact", headers: cacheHeaders },
      { source: "/:locale(en|zh)/ai-assistant", headers: cacheHeaders },
    ];
  },
};

export default nextConfig;
