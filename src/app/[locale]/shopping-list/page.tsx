"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { useShoppingList } from "@/hooks/use-shopping-list";
import { useUnitPreference } from "@/hooks/use-unit-preference";
import { useI18n } from "@/i18n/provider";
import { localizePath } from "@/i18n/config";
import { CartIcon, StoreIcon, BoxIcon, CloseIcon } from "@/components/icons";
import type { ShoppingItem } from "@/hooks/use-shopping-list";

// 购物清单页依赖客户端 localStorage，避免 SSR 预渲染（useI18n 在 SSR 静态化时
// 会拿到错误的 intermediate value，导致 build 失败）。Next.js 仍然允许在 client
// component 顶层声明 server-side directive 来跳过预渲染。
export const dynamic = "force-dynamic";

/** R-04 购物清单页：双列（本地超市/亚超）+ 勾选 + 复制导出 */
export default function ShoppingListPage() {
  const { items, toggleItem, removeItem, clearAll, grouped, toText } =
    useShoppingList();
  const { unit } = useUnitPreference();
  const { locale, t } = useI18n();
  const [copied, setCopied] = useState(false);
  const { local, asian, unknown } = grouped();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(toText(unit));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const renderItem = (i: ShoppingItem) => (
    <li
      key={i.key}
      className={`flex items-center justify-between gap-3 py-2 text-sm ${
        i.checked ? "opacity-50" : ""
      }`}
    >
      <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          checked={i.checked}
          onChange={() => toggleItem(i.key)}
          className="h-4 w-4 accent-[var(--hw-ginger)]"
        />
        <span className={i.checked ? "line-through" : ""}>
          {unit === "metric" ? i.amountMetric : i.amountUS}{" "}
          <span className="font-medium">{i.nameEn}</span>
          <span className="ml-1 text-xs text-[var(--hw-fg-muted)]">
            {i.nameZh} · {i.recipeTitle}
          </span>
        </span>
      </label>
      <button
        type="button"
        onClick={() => removeItem(i.key)}
        className="text-xs text-[var(--hw-fg-muted)] hover:text-red-500"
        aria-label={`${t.shoppingList.remove} ${i.nameEn}`}
      >
        <CloseIcon className="h-4 w-4" />
      </button>
    </li>
  );

  const renderColumn = (title: string, icon: ReactNode, list: ShoppingItem[]) => (
    <div className="rounded-xl border border-[var(--hw-border)] bg-[var(--hw-card)] p-4 shadow-sm">
      <h2 className="flex items-center gap-1.5 font-serif text-base font-semibold text-[var(--hw-fg)]">
        {icon} {title}{" "}
        <span className="text-xs font-normal text-[var(--hw-fg-muted)]">({list.length})</span>
      </h2>
      {list.length === 0 ? (
        <p className="mt-2 text-sm text-[var(--hw-fg-muted)]">
          {t.shoppingList.nothingHere}
        </p>
      ) : (
        <ul className="mt-1 divide-y divide-[var(--hw-border)]/60">{list.map(renderItem)}</ul>
      )}
    </div>
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-serif text-3xl font-bold text-[var(--hw-fg)]">
          {t.shoppingList.title}
        </h1>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={copy}
            className="rounded-lg border border-[var(--hw-border)] px-3 py-2 text-sm font-semibold text-[var(--hw-fg)] hover:border-[var(--hw-ginger)]"
          >
            {copied ? t.shoppingList.copied : t.shoppingList.copy}
          </button>
          <button
            type="button"
            onClick={clearAll}
            className="rounded-lg border border-[var(--hw-border)] px-3 py-2 text-sm font-semibold text-[var(--hw-fg)] hover:border-red-400 hover:text-red-500"
          >
            {t.shoppingList.clearAll}
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-[var(--hw-border)] p-10 text-center">
          <p className="text-[var(--hw-fg-muted)]">
            {t.shoppingList.empty}{" "}
            <span className="font-semibold text-[var(--hw-ginger)]">
              {t.shoppingList.addHint}
            </span>
          </p>
          <Link
            href={localizePath("/recipes", locale)}
            className="mt-4 inline-block rounded-lg bg-[var(--hw-soy)] px-5 py-2.5 text-sm font-semibold text-white dark:bg-[var(--hw-ginger)]"
          >
            {t.shoppingList.browseRecipes}
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {renderColumn(t.shoppingList.localSupermarket, <CartIcon className="h-4 w-4 text-[var(--hw-ginger)]" />, local)}
          {renderColumn(t.shoppingList.asianGrocery, <StoreIcon className="h-4 w-4 text-[var(--hw-ginger)]" />, asian)}
          {unknown.length > 0 && renderColumn(t.shoppingList.other, <BoxIcon className="h-4 w-4 text-[var(--hw-ginger)]" />, unknown)}
        </div>
      )}
    </main>
  );
}
