"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useI18n } from "@/i18n/provider";
import { localizePath } from "@/i18n/config";

export function Header() {
  const { locale, t } = useI18n();

  const nav = [
    { href: "/recipes", label: t.header.recipes },
    { href: "/substitutions", label: t.header.substitutions },
    { href: "/terms", label: t.header.glossary },
    { href: "/ai-assistant", label: t.header.aiAssistant },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--hw-border)] bg-[var(--hw-bg)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link href={localizePath("/", locale)} className="flex items-baseline gap-2">
          <span className="font-serif text-xl font-bold text-[var(--hw-soy)] dark:text-[var(--hw-soy)]">
            HǎoWèi
          </span>
          <span className="hidden text-sm text-[var(--hw-fg-muted)] sm:inline">好味</span>
        </Link>
        <nav className="flex items-center gap-4 overflow-x-auto">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={localizePath(n.href, locale)}
              className="whitespace-nowrap text-sm font-medium text-[var(--hw-fg-muted)] transition hover:text-[var(--hw-ginger)]"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href={localizePath("/shopping-list", locale)}
            className="whitespace-nowrap rounded-lg bg-[var(--hw-ginger)] px-3 py-1.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {t.header.shoppingList}
          </Link>
          <LanguageToggle />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
