import type { Metadata } from "next";
import { AIAssistant } from "@/components/ai-assistant";
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
    title: t.metadata.aiTitle,
    description: t.metadata.aiDesc,
    alternates: pageAlternates("/ai-assistant", locale as Locale),
  };
}

export default async function AIAssistantPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
          {t.aiAssistant.title}
        </h1>
        <p className="mt-2 text-[var(--hw-fg-muted)]">{t.aiAssistant.subtitle}</p>
      </div>
      <div className="mt-8">
        <AIAssistant />
      </div>
    </main>
  );
}
