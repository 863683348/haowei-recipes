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

/** 图片静态资源长缓存：文件名固定但内容可能换 → 30d + SWR 1y（换图时改文件名而非覆盖） */
const imageCache =
  "public, max-age=2592000, stale-while-revalidate=31536000";
const imageCacheHeaders = [{ key: "Cache-Control", value: imageCache }];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // public/images/ 下的图片由脚本预压缩为 WebP（单张 ~100KB）；禁止 next/image 在
  // build 时重新编码（会膨胀体积、拖慢首屏 + 爆 Vercel FOT 带宽）。
  images: { unoptimized: true },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      // 图片走 CDN 长缓存，避免每个 edge 区域反复回源
      { source: "/images/:path*", headers: imageCacheHeaders },
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
