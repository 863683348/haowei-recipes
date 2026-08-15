"use client";

import { membershipText } from "@/lib/membership-i18n";
import { hasRecipeAccess } from "@/lib/membership";
import { useEntitlements } from "@/hooks/use-entitlements";
import { openUpgrade } from "./upgrade-modal";

interface Props {
  /** 菜谱原图绝对路径（public 下可直接下载） */
  image: string;
  locale: "en" | "zh";
}

/**
 * 高清图片下载按钮（菜谱会员权益）：
 * - 菜谱会员：直接触发下载原图
 * - 非会员：弹出升级引导（需页面内挂载 <UpgradeModalHost locale=.../>）
 */
export function HdImageButton({ image, locale }: Props) {
  const t = membershipText(locale);
  const { loading, entitlements } = useEntitlements();
  const unlocked = !loading && hasRecipeAccess(entitlements);

  function onClick() {
    if (unlocked) {
      const a = document.createElement("a");
      a.href = image;
      a.download = image.split("/").pop() ?? "recipe.jpg";
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }
    openUpgrade("recipe_pass");
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-[var(--hw-border)] px-3 py-1.5 text-xs font-medium text-[var(--hw-fg-muted)] transition hover:border-[var(--hw-ginger)] hover:text-[var(--hw-ginger)]"
      title={unlocked ? t.hdImage : t.hdImageMember}
    >
      {unlocked ? t.hdImage : `🔒 ${t.hdImage}`}
    </button>
  );
}
