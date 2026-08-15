"use client";

import Script from "next/script";

/**
 * Google Analytics 4（GA4）
 * 标准 Next.js App Router 接入：用 next/script 的 afterInteractive 策略，
 * 避免阻塞首屏；measurement ID 来自 NEXT_PUBLIC_GA4_ID（构建期内联）。
 * 未配置该变量时返回 null，不影响构建与渲染。
 */
const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
