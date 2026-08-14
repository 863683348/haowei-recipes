import type { Metadata } from "next";
import "./globals.css";

/**
 * 根布局铁律（skill 安全/性能）：
 *  - 不读 cookies() / headers()（避免整站降级 SSR）
 *  - 主题偏好走内联 bootstrap script + localStorage（首帧即定，无 FOUC）
 *  - html lang 由 [locale]/layout 通过 LangSync 客户端同步
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://haoweirecipes.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 主题 bootstrap：首帧内联读取偏好，避免 FOUC；默认 light */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("hw-theme");if(t==="dark"||(!t&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
