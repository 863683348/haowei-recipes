import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
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
    title: t.metadata.faqTitle,
    description: t.metadata.faqDesc,
    alternates: pageAlternates("/faq", locale as Locale),
  };
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  // FAQPage JSON-LD（谷歌问答富结果必需）
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: isZh ? f.questionZh ?? f.question : f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: isZh ? f.answerZh ?? f.answer : f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
          {t.faqPage.title}
        </h1>
      <p className="mt-2 text-[var(--hw-fg-muted)]">
        {t.faqPage.subtitle}{" "}
        <Link href={localizePath("/ai-assistant", loc)} className="text-[var(--hw-ginger)] underline">
          {t.faqPage.aiAssistantLink}
        </Link>
        .
      </p>
      <div className="mt-8 space-y-5">
        {faqs.map((f) => (
          <details
            key={f.id}
            className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-4 shadow-sm"
          >
            <summary className="cursor-pointer font-medium text-[var(--hw-fg)]">
              {isZh ? f.questionZh ?? f.question : f.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[var(--hw-fg)]">
              {isZh ? f.answerZh ?? f.answer : f.answer}
            </p>
            {f.source && (
              <p className="mt-2 text-xs text-[var(--hw-fg-muted)]">
                {t.faqPage.source}: {f.source}
              </p>
            )}
          </details>
        ))}
      </div>
    </main>
    </>
  );
}
