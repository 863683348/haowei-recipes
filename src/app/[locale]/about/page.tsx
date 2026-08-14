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
    title: t.metadata.aboutTitle,
    description: t.metadata.aboutDesc,
    alternates: pageAlternates("/about", locale as Locale),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
        {t.aboutPage.title}
      </h1>
      <div className="mt-6 space-y-4 leading-relaxed text-[var(--hw-fg)]">
        {t.aboutPage.paragraphs.map((p, i) =>
          p.lead ? (
            <p key={i}>
              <span className="font-serif text-xl font-semibold">{p.content}</span>
            </p>
          ) : p.bullets ? (
            <ul key={i} className="list-disc space-y-2 pl-6">
              {p.bullets.map((b, j) => (
                <li key={j}>
                  <span className="font-semibold">{b.strong}</span>
                  {b.text}
                </li>
              ))}
            </ul>
          ) : (
            <p key={i}>{p.content}</p>
          )
        )}
        <p className="text-[var(--hw-fg-muted)]">
          {t.aboutPage.getInTouch}{" "}
          <Link href={localizePath("/contact", loc)} className="text-[var(--hw-ginger)] underline">
            {t.aboutPage.contactLink}
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
