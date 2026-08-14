import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale, isLocale, SITE_URL, pageAlternates, absoluteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LangSync } from "@/i18n/lang-sync";

/** 动态段静态化：en / zh 两套页面全部静态生成（skill 铁律） */
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
    title: {
      default: siteTitle,
      template: "%s | HǎoWèi 好味",
    },
    description: t.metadata.siteDesc,
    metadataBase: new URL(SITE_URL),
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

export default async function LocaleLayout({
  children,
  params,
}: Props & { children: React.ReactNode }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale as Locale);

  return (
    <I18nProvider locale={locale as Locale} t={t}>
      <LangSync locale={locale as Locale} />
      <Header />
      {children}
      <Footer />
    </I18nProvider>
  );
}
