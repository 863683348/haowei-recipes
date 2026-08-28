"use client";

import { useEffect, useState, useCallback } from "react";
import { useI18n } from "@/i18n/provider";

const KEY_PREFIX = "hw-comments";

interface Comment {
  id: string;
  name: string;
  text: string;
  at: string; // ISO
}

/**
 * 菜谱评论区（社交证明，本地存储）
 * - localStorage 按 slug 存评论数组（每菜谱独立）
 * - 支持匿名昵称 + 留言 + 删除自己刚发的（简单版）
 * - 零后端零 DB；后续可平滑迁移到 Neon
 */
export function RecipeComments({ slug }: { slug: string }) {
  const { t } = useI18n();
  const isZh = t.recipeDetail.pairingTitle === "这一餐配什么"; // 简易 locale 探测
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const key = `${KEY_PREFIX}:${slug}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw) as Comment[];
        if (Array.isArray(parsed)) setComments(parsed);
      }
    } catch {
      /* ignore */
    }
  }, [key]);

  const persist = useCallback(
    (next: Comment[]) => {
      try {
        localStorage.setItem(key, JSON.stringify(next));
      } catch {
        /* ignore */
      }
    },
    [key]
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim() || (isZh ? "匿名食客" : "Anonymous cook");
    const trimmedText = text.trim();
    if (!trimmedText) return;
    const c: Comment = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: trimmedName.slice(0, 40),
      text: trimmedText.slice(0, 500),
      at: new Date().toISOString(),
    };
    const next = [c, ...comments];
    setComments(next);
    persist(next);
    setText("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const remove = (id: string) => {
    const next = comments.filter((c) => c.id !== id);
    setComments(next);
    persist(next);
  };

  const labels = {
    title: isZh ? "大家的评价" : "What cooks say",
    desc: isZh ? "做过这道菜？留下你的心得。" : "Made this? Leave a note.",
    placeholder: isZh ? "好吃/翻车/改进点都欢迎……" : "Share your result, tweaks or questions…",
    namePh: isZh ? "昵称（可选）" : "Name (optional)",
    submit: isZh ? "发布" : "Post",
    done: isZh ? "✓ 已发布（保存在本浏览器）" : "✓ Posted (saved on this browser)",
    empty: isZh ? "还没有评论，来抢沙发！" : "No comments yet — be the first!",
    delete: isZh ? "删除" : "Delete",
  };

  return (
    <div className="rounded-2xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-6">
      <h2 className="font-serif text-2xl font-semibold text-[var(--hw-fg)]">
        {labels.title}
      </h2>
      <p className="mt-1 text-sm text-[var(--hw-fg-muted)]">{labels.desc}</p>

      {/* 表单 */}
      <form onSubmit={submit} className="mt-4 space-y-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={labels.namePh}
          maxLength={40}
          className="w-full rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg-soft)] px-3 py-2 text-sm text-[var(--hw-fg)] outline-none focus:border-[var(--hw-ginger)]"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={labels.placeholder}
          required
          maxLength={500}
          rows={3}
          className="w-full rounded-lg border border-[var(--hw-border)] bg-[var(--hw-bg-soft)] px-3 py-2 text-sm text-[var(--hw-fg)] outline-none focus:border-[var(--hw-ginger)]"
        />
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-lg bg-[var(--hw-soy)] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-[var(--hw-ginger)]"
          >
            {labels.submit}
          </button>
          {submitted && (
            <span className="text-xs font-medium text-[var(--hw-scallion)]">
              {labels.done}
            </span>
          )}
        </div>
      </form>

      {/* 评论列表 */}
      <ul className="mt-5 space-y-4">
        {comments.length === 0 && (
          <li className="text-sm text-[var(--hw-fg-muted)]">{labels.empty}</li>
        )}
        {comments.map((c) => (
          <li
            key={c.id}
            className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-bg-soft)] p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-[var(--hw-fg)]">{c.name}</p>
              <div className="flex items-center gap-3">
                <time className="text-xs text-[var(--hw-fg-muted)]">
                  {new Date(c.at).toLocaleDateString(isZh ? "zh-CN" : "en-US")}
                </time>
                <button
                  onClick={() => remove(c.id)}
                  className="text-xs text-[var(--hw-fg-muted)] hover:text-[var(--hw-ginger)]"
                >
                  {labels.delete}
                </button>
              </div>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--hw-fg)]">
              {c.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
