"use client";

import { useMemo, useState } from "react";
import { findSubstitution } from "@/data/substitutions";
import { useI18n } from "@/i18n/provider";
import { localizePath } from "@/i18n/config";
import Link from "next/link";
import { StarIcon } from "./icons";

const fidelityLabelMap = (t: ReturnType<typeof useI18n>["t"], f: number) =>
  f >= 5
    ? t.substitutionPanel.fidelityExcellent
    : f === 4
      ? t.substitutionPanel.fidelityVeryClose
      : f === 3
        ? t.substitutionPanel.fidelityGood
        : t.substitutionPanel.fidelityApproximate;

/**
 * R-02 食材替换引擎：输入"没有某食材"查询替代方案（风味还原度星级可视化）
 */
export function SubstitutionPanel() {
  const { locale, t } = useI18n();
  const isZh = locale === "zh";
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState<string | null>(null);
  const results = useMemo(
    () => (searched ? findSubstitution(searched) : []),
    [searched]
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(query.trim());
  };

  const examples = isZh
    ? [
        { q: "绍兴酒", d: "绍兴酒" },
        { q: "郫县豆瓣酱", d: "豆瓣酱" },
      ]
    : [
        { q: "Shaoxing wine", d: "Shaoxing wine" },
        { q: "doubanjiang", d: "doubanjiang" },
      ];

  return (
    <div className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-5 shadow-sm">
      <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
        {t.substitutionPanel.title}
      </h3>
      <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">
        {t.substitutionPanel.hint} (e.g.{" "}
        {examples.map((ex, i) => (
          <span key={ex.q}>
            <button
              type="button"
              onClick={() => {
                setQuery(ex.q);
                setSearched(ex.q);
              }}
              className="text-[var(--hw-ginger)] underline underline-offset-2"
            >
              {ex.d}
            </button>
            {i < examples.length - 1 ? ", " : ""}
          </span>
        ))}
        ).
      </p>

      <form onSubmit={submit} className="mt-4 flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.substitutionPanel.placeholder}
          className="min-w-0 flex-1 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg)] px-3 py-2 text-sm text-[var(--hw-fg)] outline-none focus:border-[var(--hw-ginger)]"
          aria-label={t.substitutionPanel.ingredientLabel}
        />
        <button
          type="submit"
          className="shrink-0 rounded-lg bg-[var(--hw-soy)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-[var(--hw-ginger)]"
        >
          {t.substitutionPanel.find}
        </button>
      </form>

      {searched && results.length === 0 && (
        <div className="mt-4 rounded-lg border border-dashed border-[var(--hw-border)] p-3 text-sm text-[var(--hw-fg-muted)]">
          {t.substitutionPanel.notFound.replace("{q}", searched)} {""}
          <Link
            href={localizePath("/ai-assistant", locale)}
            className="text-[var(--hw-ginger)] underline"
          >
            {t.substitutionPanel.aiAssistantLink}
          </Link>
          .
        </div>
      )}

      {results.length > 0 && (
        <ul className="mt-4 space-y-3">
          {results.map((s) => {
            const from = isZh ? s.fromZh ?? s.from : s.from;
            const to = isZh ? s.toZh ?? s.to : s.to;
            const note = isZh ? s.noteZh ?? s.note : s.note;
            const fidelityTxt = fidelityLabelMap(t, s.fidelity);
            return (
              <li
                key={s.id}
                className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg-soft)] p-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-[var(--hw-fg)]">
                    {from}
                    {!isZh && s.fromZh && (
                      <span className="ml-1.5 font-normal text-[var(--hw-fg-muted)]">
                        {s.fromZh}
                      </span>
                    )}
                  </span>
                  <span
                    className="text-sm"
                    title={`${t.recipeDetail.fidelity.replace("{f}", String(s.fidelity))} — ${fidelityTxt}`}
                    aria-label={`Fidelity ${s.fidelity} out of 5`}
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
                  {to} <span className="text-[var(--hw-fg-muted)]">({s.ratio})</span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--hw-fg-muted)]">
                  {note}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
