"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/provider";
import { localizePath } from "@/i18n/config";

export function Footer() {
  const { locale, t } = useI18n();

  return (
    <footer className="border-t border-[var(--hw-border)] bg-[var(--hw-bg-soft)]">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-semibold text-[var(--hw-fg)]">
            HǎoWèi 好味
          </p>
          <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--hw-fg)]">{t.footer.explore}</p>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--hw-fg-muted)]">
            <li>
              <Link className="hover:text-[var(--hw-ginger)]" href={localizePath("/recipes", locale)}>
                {t.footer.allRecipes}
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--hw-ginger)]" href={localizePath("/substitutions", locale)}>
                {t.footer.ingredientSubstitutions}
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--hw-ginger)]" href={localizePath("/terms", locale)}>
                {t.footer.glossary}
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--hw-ginger)]" href={localizePath("/ai-assistant", locale)}>
                {t.footer.askAI}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--hw-fg)]">{t.footer.about}</p>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--hw-fg-muted)]">
            <li>
              <Link className="hover:text-[var(--hw-ginger)]" href={localizePath("/about", locale)}>
                {t.footer.ourStory}
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--hw-ginger)]" href={localizePath("/faq", locale)}>
                {t.footer.faq}
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--hw-ginger)]" href={localizePath("/editorial-policy", locale)}>
                {t.footer.editorialPolicy}
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--hw-ginger)]" href={localizePath("/privacy", locale)}>
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--hw-ginger)]" href={localizePath("/contact", locale)}>
                {t.footer.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--hw-border)] py-4 text-center text-xs text-[var(--hw-fg-muted)]">
        © {new Date().getFullYear()} HǎoWèi 好味 · {t.footer.copyright}
      </div>
    </footer>
  );
}
