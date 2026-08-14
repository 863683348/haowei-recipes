import type { Metadata } from "next";
import "./globals.css";

/**
 * 根布局铁律（skill 安全/性能）：
 *  - 不读 cookies() / headers()（避免整站降级 SSR）
 *  - 主题偏好走内联 bootstrap script + localStorage（首帧即定，无 FOUC）
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://haoweirecipes.com"),
  title: {
    default: "HǎoWèi 好味 — Authentic Chinese Home Cooking, Made Easy",
    template: "%s | HǎoWèi 好味",
  },
  description:
    "Real Chinese home-cooking recipes in English, with ingredient substitutions for Western supermarkets, bilingual terms, and step-by-step state photos. From mapo tofu to tomato eggs — cook authentic 家常菜 at home.",
  keywords: [
    "chinese home cooking",
    "authentic chinese recipes",
    "easy chinese dinner",
    "mapo tofu recipe",
    "chinese cooking for beginners",
    "家常菜",
    "中餐食谱",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HǎoWèi 好味",
    title: "HǎoWèi 好味 — Authentic Chinese Home Cooking, Made Easy",
    description:
      "Real Chinese home-cooking recipes in English, with substitutions for Western supermarkets and bilingual terms.",
  },
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
