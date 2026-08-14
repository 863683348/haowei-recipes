"use client";

import { useMemo, useState } from "react";
import { findSubstitution } from "@/data/substitutions";

const fidelityLabel = (f: number) =>
  f >= 5 ? "Excellent match" : f === 4 ? "Very close" : f === 3 ? "Good, adjusted" : "Approximate";

/**
 * R-02 食材替换引擎：输入"没有某食材"查询替代方案（风味还原度星级可视化）
 */
export function SubstitutionPanel() {
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

  return (
    <div className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-5 shadow-sm">
      <h3 className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
        🔁 Ingredient substitution finder
      </h3>
      <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">
        "I don't have <em>X</em> — what do I use?" Type the ingredient (e.g.{" "}
        <button
          type="button"
          onClick={() => {
            setQuery("Shaoxing wine");
            setSearched("Shaoxing wine");
          }}
          className="text-[var(--hw-ginger)] underline underline-offset-2"
        >
          Shaoxing wine
        </button>
        ,{" "}
        <button
          type="button"
          onClick={() => {
            setQuery("doubanjiang");
            setSearched("doubanjiang");
          }}
          className="text-[var(--hw-ginger)] underline underline-offset-2"
        >
          doubanjiang
        </button>
        ).
      </p>

      <form onSubmit={submit} className="mt-4 flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. dark soy sauce"
          className="min-w-0 flex-1 rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg)] px-3 py-2 text-sm text-[var(--hw-fg)] outline-none focus:border-[var(--hw-ginger)]"
          aria-label="Ingredient to substitute"
        />
        <button
          type="submit"
          className="shrink-0 rounded-lg bg-[var(--hw-soy)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-[var(--hw-ginger)]"
        >
          Find
        </button>
      </form>

      {searched && results.length === 0 && (
        <div className="mt-4 rounded-lg border border-dashed border-[var(--hw-border)] p-3 text-sm text-[var(--hw-fg-muted)]">
          No substitution found for "{searched}". Try a pantry staple like soy
          sauce, vinegar, or cooking wine — or ask in the{" "}
          <a href="/ai-assistant" className="text-[var(--hw-ginger)] underline">
            AI assistant
          </a>
          .
        </div>
      )}

      {results.length > 0 && (
        <ul className="mt-4 space-y-3">
          {results.map((s) => (
            <li
              key={s.id}
              className="rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg-soft)] p-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-semibold text-[var(--hw-fg)]">
                  {s.from}
                  {s.fromZh && (
                    <span className="ml-1.5 font-normal text-[var(--hw-fg-muted)]">
                      {s.fromZh}
                    </span>
                  )}
                </span>
                <span
                  className="text-sm"
                  title={`Fidelity: ${s.fidelity}/5 — ${fidelityLabel(s.fidelity)}`}
                  aria-label={`Fidelity ${s.fidelity} out of 5`}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={
                        n <= s.fidelity
                          ? "text-[var(--hw-ginger)]"
                          : "text-[var(--hw-border)]"
                      }
                    >
                      ★
                    </span>
                  ))}
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--hw-fg)]">
                <span className="font-medium text-[var(--hw-scallion)]">Use: </span>
                {s.to} <span className="text-[var(--hw-fg-muted)]">({s.ratio})</span>
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--hw-fg-muted)]">
                {s.note}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
