import { isLocale, localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Link from "next/link";

/** [locale] 级 404（包在 [locale]/layout 内，带 Header/Footer） */
export default async function LocaleNotFound({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : "en";
  const t = getDictionary(loc);

  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <p className="font-serif text-6xl font-bold text-[var(--hw-ginger)]">404</p>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-[var(--hw-fg)]">
        {t.notFound.title}
      </h1>
      <p className="mt-2 text-[var(--hw-fg-muted)]">{t.notFound.desc}</p>
      <Link
        href={localizePath("/recipes", loc)}
        className="mt-6 rounded-lg bg-[var(--hw-soy)] px-6 py-3 text-sm font-semibold text-white dark:bg-[var(--hw-ginger)]"
      >
        {t.notFound.browse}
      </Link>
    </main>
  );
}
