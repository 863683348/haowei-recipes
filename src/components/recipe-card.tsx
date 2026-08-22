"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Recipe } from "@/lib/types";
import { useI18n } from "@/i18n/provider";
import { localizePath } from "@/i18n/config";
import { ClockIcon } from "./icons";

/** 图片加载失败兜底：切到通用品牌图，避免破图/空白 */
const FALLBACK_IMG = "/images/og-default.webp";

/** 菜谱卡片（列表/首页用）
 * 设计参考：截图风格——白底卡片、4:3 图片顶置、分类+时长一行、
 * 主标题加粗 serif、英文+拼音副标、底部边框 chip 标签。
 */
export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { locale, t } = useI18n();
  const isZh = locale === "zh";
  const [imgSrc, setImgSrc] = useState(recipe.image);
  const title = isZh ? recipe.titleZh : recipe.titleEn;
  const subtitle = isZh
    ? `${recipe.titleEn} (${recipe.titleZh}) · ${recipe.pinyin}`
    : `${recipe.titleZh} (${recipe.titleEn}) · ${recipe.pinyin}`;
  const cuisineLabel = isZh
    ? recipe.cuisine
    : recipe.cuisineEn ?? recipe.cuisine;

  return (
    <Link
      href={localizePath(`/recipes/${recipe.slug}`, locale)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* 图片区 4:3 */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--hw-bg-soft)]">
        <Image
          src={imgSrc}
          alt={`${title} — ${cuisineLabel} recipe`}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={() => imgSrc !== FALLBACK_IMG && setImgSrc(FALLBACK_IMG)}
        />
      </div>

      {/* 内容区 */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* 分类 + 时长 */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center rounded-md bg-[rgba(199,123,46,0.10)] px-2 py-0.5 text-xs font-medium text-[var(--hw-ginger)]">
            {cuisineLabel}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md border border-[var(--hw-border)] bg-[var(--hw-bg-soft)] px-2 py-0.5 text-xs text-[var(--hw-fg-muted)]">
            <ClockIcon className="h-3 w-3" />
            {recipe.timeMin} {t.common.minutes}
          </span>
        </div>

        {/* 主标题 */}
        <h3 className="font-serif text-2xl font-bold leading-tight tracking-tight text-[var(--hw-fg)] group-hover:text-[var(--hw-ginger)]">
          {title}
        </h3>

        {/* 副标题：英文（中文）· 拼音 */}
        <p className="text-sm leading-snug text-[var(--hw-fg-muted)]">
          {subtitle}
        </p>

        {/* 标签 chips（描边样式，参考截图） */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          <span className="rounded-full border border-[var(--hw-border)] px-2.5 py-0.5 text-xs text-[var(--hw-fg)]">
            {t.common.difficulty[recipe.difficulty]}
          </span>
          {recipe.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--hw-border)] px-2.5 py-0.5 text-xs text-[var(--hw-fg-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
