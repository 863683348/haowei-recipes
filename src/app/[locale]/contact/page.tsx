import type { Metadata } from "next";
import { isLocale, pageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale as Locale);
  return {
    title: t.metadata.contactTitle,
    description: t.metadata.contactDesc,
    alternates: pageAlternates("/contact", locale as Locale),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
        {t.contactPage.title}
      </h1>
      <p className="mt-2 text-[var(--hw-fg-muted)]">{t.contactPage.subtitle}</p>
      <div className="mt-8 rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6 shadow-sm">
        <p className="text-sm text-[var(--hw-fg)]">
          {t.contactPage.emailLine}{" "}
          <a
            href="mailto:hello@haoweirecipes.com"
            className="font-semibold text-[var(--hw-ginger)] underline"
          >
            hello@haoweirecipes.com
          </a>
          .
        </p>
        <p className="mt-3 text-sm text-[var(--hw-fg-muted)]">{t.contactPage.tellUs}</p>
      </div>
    </main>
  );
}
