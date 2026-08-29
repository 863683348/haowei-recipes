import type { Metadata } from "next";
import { isLocale, localizePath, pageAlternates, type Locale } from "@/i18n/config";
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
    title: t.metadata.editorialPolicyTitle,
    description: t.metadata.editorialPolicyDesc,
    alternates: pageAlternates("/editorial-policy", locale as Locale),
  };
}

export default async function EditorialPolicyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
        {t.editorialPage.title}
      </h1>
      <p className="mt-2 text-sm text-[var(--hw-fg-muted)]">{t.editorialPage.lastUpdated}</p>

      <div className="mt-8 space-y-8">
        {t.editorialPage.sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
              {s.heading}
            </h2>
            <p className="mt-2 leading-relaxed text-[var(--hw-fg-muted)]">{s.content}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
