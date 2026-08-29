import type { Metadata } from "next";
import { SubstitutionPanel } from "@/components/substitution-panel";
import { StarIcon } from "@/components/icons";
import { substitutions } from "@/data/substitutions";
import { isLocale, pageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

// P0：把 GSC 高频长尾搜索词（柱侯酱/榨菜/豆瓣酱替代）直接落到页面，强化这些词的相关性
const faqItems = [
  { qEn: "Chu hou paste substitute", qZh: "柱侯酱用什么代替", id: "sub-chu-hou" },
  { qEn: "Zha cai substitute", qZh: "榨菜用什么代替", id: "sub-zha-cai" },
  { qEn: "Doubanjiang replacement", qZh: "豆瓣酱用什么代替", id: "sub-doubanjiang" },
  { qEn: "Dou gan recipe", qZh: "豆干怎么做", id: "sub-dou-gan" },
  { qEn: "Xia chaobing (shrimp stir-fried flatbread)", qZh: "虾炒饼怎么做", id: "sub-chaobing" },
];
const faqById = new Map(substitutions.map((s) => [s.id, s]));

/** T1-2：常用计量换算表（标准美制量杯 1 cup = 240 ml） */
const CONVERSIONS: { en: string; zh: string; us: string; metric: string }[] = [
  { en: "All-purpose flour", zh: "中筋面粉", us: "1 cup", metric: "≈ 120 g" },
  { en: "Granulated sugar", zh: "白砂糖", us: "1 cup", metric: "≈ 200 g" },
  { en: "Brown sugar (packed)", zh: "红糖（压实）", us: "1 cup", metric: "≈ 213 g" },
  { en: "Unsalted butter", zh: "无盐黄油", us: "1 cup", metric: "≈ 227 g" },
  { en: "Uncooked white rice", zh: "生大米", us: "1 cup", metric: "≈ 185 g" },
  { en: "Water / stock", zh: "水 / 高汤", us: "1 cup", metric: "≈ 240 ml" },
  { en: "Light soy sauce / Shaoxing wine", zh: "生抽 / 绍兴酒", us: "1 tbsp", metric: "≈ 15 ml" },
  { en: "Sesame oil", zh: "芝麻油", us: "1 tsp", metric: "≈ 5 ml" },
  { en: "Cornstarch", zh: "玉米淀粉", us: "1 tbsp", metric: "≈ 8 g" },
  { en: "Table salt", zh: "食盐", us: "1 tsp", metric: "≈ 6 g" },
];

export const dynamic = "force-static";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale as Locale);
  return {
    title: t.metadata.substitutionsTitle,
    description: t.metadata.substitutionsDesc,
    alternates: pageAlternates("/substitutions", locale as Locale),
  };
}

export default async function SubstitutionsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const isZh = loc === "zh";

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
        {t.substitutionsPage.title}
      </h1>
      <p className="mt-2 text-[var(--hw-fg-muted)]">
        {t.substitutionsPage.subtitle.replace("{n}", String(substitutions.length))}
      </p>

      <div className="mt-8">
        <SubstitutionPanel />
      </div>

      {/* P0：直接覆盖 GSC 长尾搜索词，让页面文本包含这些查询词 */}
      <section className="mt-12">
        <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
          {isZh ? "大家常搜的替换方案" : "Substitutions people search for"}
        </h2>
        <div className="mt-4 space-y-3">
          {faqItems.map((item) => {
            const s = faqById.get(item.id);
            if (!s) return null;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-4 shadow-sm"
              >
                <p className="mb-2 text-sm font-semibold text-[var(--hw-ginger)]">
                  {isZh ? item.qZh : item.qEn}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-[var(--hw-fg)]">
                    {isZh ? s.fromZh ?? s.from : s.from}
                    {!isZh && s.fromZh && (
                      <span className="ml-1.5 font-normal text-[var(--hw-fg-muted)]">
                        {s.fromZh}
                      </span>
                    )}
                  </span>
                  <span
                    className="text-sm"
                    title={t.recipeDetail.fidelity.replace("{f}", String(s.fidelity))}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <StarIcon
                        key={n}
                        className={
                          n <= s.fidelity
                            ? "inline-block h-3.5 w-3.5 fill-[var(--hw-ginger)] text-[var(--hw-ginger)]"
                            : "inline-block h-3.5 w-3.5 text-[var(--hw-border)]"
                        }
                      />
                    ))}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--hw-fg)]">
                  <span className="font-medium text-[var(--hw-scallion)]">
                    {t.recipeDetail.use}
                  </span>
                  {isZh ? s.toZh ?? s.to : s.to}{" "}
                  <span className="text-[var(--hw-fg-muted)]">({s.ratio})</span>
                </p>
                <p className="mt-1 text-xs text-[var(--hw-fg-muted)]">
                  {isZh ? s.noteZh ?? s.note : s.note}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
          {t.substitutionsPage.fullTable}
        </h2>
        <div className="mt-4 space-y-3">
          {substitutions.map((s) => (
            <div
              key={s.id}
              className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-4 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-semibold text-[var(--hw-fg)]">
                  {isZh ? s.fromZh ?? s.from : s.from}
                  {!isZh && s.fromZh && (
                    <span className="ml-1.5 font-normal text-[var(--hw-fg-muted)]">
                      {s.fromZh}
                    </span>
                  )}
                </span>
                <span className="text-sm" title={t.recipeDetail.fidelity.replace("{f}", String(s.fidelity))}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <StarIcon
                      key={n}
                      className={
                        n <= s.fidelity
                          ? "inline-block h-3.5 w-3.5 fill-[var(--hw-ginger)] text-[var(--hw-ginger)]"
                          : "inline-block h-3.5 w-3.5 text-[var(--hw-border)]"
                      }
                    />
                  ))}
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--hw-fg)]">
                <span className="font-medium text-[var(--hw-scallion)]">
                  {t.recipeDetail.use}
                </span>
                {isZh ? s.toZh ?? s.to : s.to}{" "}
                <span className="text-[var(--hw-fg-muted)]">({s.ratio})</span>
              </p>
              <p className="mt-1 text-xs text-[var(--hw-fg-muted)]">
                {isZh ? s.noteZh ?? s.note : s.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* T1-2：常用计量换算，覆盖 "1 cup flour in grams" 类搜索意图 */}
      <section className="mt-12">
        <h2 className="font-serif text-xl font-semibold text-[var(--hw-fg)]">
          {isZh ? "中餐常用计量换算（杯/勺 → 克）" : "Common Measurement Conversions (Cup/Spoon → Grams)"}
        </h2>
        <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">
          {isZh
            ? "中餐食谱最常卡在美制计量上。下表覆盖本站菜谱最常用食材的杯/勺 → 克换算，按标准美制量杯（1 cup = 240 ml）计算。"
            : "US cup measurements are the #1 sticking point in Chinese recipes. This table covers the most-used ingredients on this site, based on a standard US cup (1 cup = 240 ml)."}
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--hw-border)] text-left text-xs uppercase tracking-wide text-[var(--hw-fg-muted)]">
                <th className="px-4 py-2.5 font-semibold">{isZh ? "食材" : "Ingredient"}</th>
                <th className="px-4 py-2.5 font-semibold">{isZh ? "美制" : "US measure"}</th>
                <th className="px-4 py-2.5 font-semibold">{isZh ? "公制约等于" : "Metric (approx.)"}</th>
              </tr>
            </thead>
            <tbody>
              {CONVERSIONS.map((row) => (
                <tr key={row.en} className="border-b border-[var(--hw-border)] last:border-0">
                  <td className="px-4 py-2 font-medium text-[var(--hw-fg)]">{isZh ? row.zh : row.en}</td>
                  <td className="px-4 py-2 text-[var(--hw-fg-muted)]">{row.us}</td>
                  <td className="px-4 py-2 text-[var(--hw-fg)]">{row.metric}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
