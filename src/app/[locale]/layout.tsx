import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, type Locale, isLocale, SITE_URL, localeHtmlLang, pageAlternates, absoluteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LangSync } from "@/i18n/lang-sync";
import { GoogleAnalytics } from "@/components/google-analytics";

/**
 * Root layout（i18n 结构）：<html lang> 由此处按 locale 输出。
 *  - /en/* → lang="en"，/zh/* → lang="zh-CN"（localeHtmlLang 映射）
 *  - 原 app/layout.tsx 的 html/head 职责已下移到此，避免中文页被声明成 en
 *  - 不读 cookies() / headers()（避免整站降级 SSR），主题偏好走内联 bootstrap（无 FOUC）
 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

/** 按语言输出 SEO metadata（title/description/hreflang + OG/Twitter 含图） */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  const siteTitle = t.metadata.siteTitle;
  const siteImage = absoluteUrl("/images/og-default.webp");

  return {
    metadataBase: new URL(SITE_URL),
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    title: {
      default: siteTitle,
      template: "%s | HǎoWèi 好味",
    },
    description: t.metadata.siteDesc,
    alternates: pageAlternates("/", locale as Locale),
    openGraph: {
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      siteName: "HǎoWèi 好味",
      title: siteTitle,
      description: t.metadata.siteDesc,
      url: `${SITE_URL}/${locale}`,
      images: [{ url: siteImage, width: 1200, height: 630, alt: "HǎoWèi 好味" }],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: t.metadata.siteDesc,
      images: [siteImage],
    },
  };
}

export default async function LocaleRootLayout({
  children,
  params,
}: Props & { children: React.ReactNode }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale as Locale);
  const htmlLang = localeHtmlLang[locale as Locale];

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        {/* 主题 bootstrap：首帧内联读取偏好，避免 FOUC；默认 light */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("hw-theme");if(t==="dark"||(!t&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}}catch(e){}})();`,
          }}
        />
        {/* 性能：GA 预连接，缩短桌面端脚本握手、减轻 LCP 抖动（P1-#4 CWV 加固） */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-screen antialiased">
        <I18nProvider locale={locale as Locale} t={t}>
          <LangSync locale={locale as Locale} />
          <Header />
          {children}
          <Footer />
        </I18nProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
