"use client";

import Link from "next/link";
import Image from "next/image";
import type { Recipe } from "@/lib/types";
import { useI18n } from "@/i18n/provider";
import { localizePath } from "@/i18n/config";
import { ClockIcon } from "./icons";

const difficultyCls = {
  easy: "bg-[rgba(74,124,89,0.15)] text-[var(--hw-scallion)]",
  medium: "bg-[rgba(199,123,46,0.15)] text-[var(--hw-ginger)]",
  hard: "bg-[rgba(62,39,35,0.12)] text-[var(--hw-fg-muted)]",
} as const;

/** 菜谱卡片（列表/首页用） */
export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { locale, t } = useI18n();
  const isZh = locale === "zh";
  const title = isZh ? recipe.titleZh : recipe.titleEn;
  const subtitle = isZh
    ? `${recipe.titleEn} · ${recipe.pinyin}`
    : `${recipe.titleZh} · ${recipe.pinyin}`;

  return (
    <Link
      href={localizePath(`/recipes/${recipe.slug}`, locale)}
      className="group flex flex-col overflow-hidden rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={recipe.image}
          alt={`${title} — ${isZh ? recipe.cuisine : recipe.cuisineEn ?? recipe.cuisine} recipe`}
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-[var(--hw-ginger)]">
            {isZh ? recipe.cuisine : recipe.cuisineEn ?? recipe.cuisine}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-[var(--hw-fg-muted)]">
            <ClockIcon className="h-3 w-3" /> {recipe.timeMin} {t.common.minutes}
          </span>
        </div>
        <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-[var(--hw-fg)] group-hover:text-[var(--hw-ginger)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--hw-fg-muted)]">{subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${difficultyCls[recipe.difficulty]}`}>
            {t.common.difficulty[recipe.difficulty]}
          </span>
          {recipe.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--hw-bg-soft)] px-2 py-0.5 text-xs text-[var(--hw-fg-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
