import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { localizePath, type Locale } from "@/i18n/config";

/**
 * Blog 列表卡片（server component，无交互）
 * 无图纯文字卡片：分类 chip + 标题 + 摘要 + 日期，顶部分类色条装饰。
 * 视觉与博客详情页头部一致（分类 pill + serif 标题 + 摘要）。
 */
export function BlogCard({ post, locale }: { post: BlogPost; locale: Locale }) {
  const isZh = locale === "zh";
  const title = isZh ? post.titleZh : post.titleEn;
  const excerpt = isZh ? post.excerptZh : post.excerptEn;
  const category = isZh ? post.categoryZh : post.categoryEn;

  return (
    <Link
      href={localizePath(`/blog/${post.slug}`, locale)}
      className="group flex flex-col overflow-hidden rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* 顶部装饰条：分类色条（替代封面图） */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[var(--hw-ginger)] to-[var(--hw-scallion)] opacity-80 transition group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-5">
        <span className="inline-flex w-fit rounded-full bg-[var(--hw-ginger)]/15 px-2.5 py-1 text-xs font-semibold text-[var(--hw-ginger)]">
          {category}
        </span>
        <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-[var(--hw-fg)] transition group-hover:text-[var(--hw-ginger)]">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--hw-fg-muted)]">
          {excerpt}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--hw-fg-muted)]">
          {post.publishDate}
        </span>
      </div>
    </Link>
  );
}
