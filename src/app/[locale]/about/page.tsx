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
        {/* E-E-A-T 信号区（经验/专业/权威/可信） */}
        <section className="mt-10 rounded-xl border border-[var(--hw-fg-muted)]/20 bg-[var(--hw-ginger)]/5 p-6">
          <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
            {loc === "zh" ? "我们怎么保证菜谱靠谱" : "How we keep recipes trustworthy"}
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--hw-fg-muted)]">
            <li>
              <span className="font-semibold text-[var(--hw-fg)]">{loc === "zh" ? "经验（Experience）：" : "Experience: "}</span>
              {loc === "zh" ? "每篇菜谱都在家庭厨房实测出锅，不是照搬书。" : "Every recipe is cooked and tasted in a home kitchen, not copied from a book."}
            </li>
            <li>
              <span className="font-semibold text-[var(--hw-fg)]">{loc === "zh" ? "专业（Expertise）：" : "Expertise: "}</span>
              {loc === "zh" ? "食材按本地超市与亚超双标注，附选法与替代方案。" : "Ingredients are tagged local vs Asian-market, with buying tips and swaps."}
            </li>
            <li>
              <span className="font-semibold text-[var(--hw-fg)]">{loc === "zh" ? "权威（Authoritativeness）：" : "Authoritativeness: "}</span>
              {loc === "zh" ? "技法文章引用传统做法（如郫县豆瓣、上浆原理）。" : "Technique guides cite traditional methods (pixian doubanjiang, velveting)."}
            </li>
            <li>
              <span className="font-semibold text-[var(--hw-fg)]">{loc === "zh" ? "可信（Trust）：" : "Trust: "}</span>
              {loc === "zh" ? "不确定处标注来源与置信度，欢迎纠错。" : "Where we're unsure, we say so and cite sources. Corrections welcome."}
            </li>
          </ul>
        </section>

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
