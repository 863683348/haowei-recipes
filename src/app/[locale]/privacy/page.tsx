import type { Metadata } from "next";
import { isLocale, localizePath, pageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-static";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale as Locale);
  return {
    title: t.metadata.privacyTitle,
    description: t.metadata.privacyDesc,
    alternates: pageAlternates("/privacy", locale as Locale),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
        {t.privacyPage.title}
      </h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--hw-fg)]">
        {t.privacyPage.paragraphs.map((p, i) => (
          <p key={i}>
            <strong>{p.strong}</strong>
            {p.text}
            {i === t.privacyPage.paragraphs.length - 1 && (
              <Link href={localizePath("/contact", loc)} className="text-[var(--hw-ginger)] underline">
                {" "}
                {t.privacyPage.contactLink}
              </Link>
            )}
          </p>
        ))}
        <p className="text-[var(--hw-fg-muted)]">{t.privacyPage.lastUpdated}</p>
      </div>
    </main>
  );
}
