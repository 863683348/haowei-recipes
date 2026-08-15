/**
 * HǎoWèi 统一图标集（P0-1：SVG 描边图标，禁止 emoji 作功能图标）
 * 统一 24×24 viewBox、stroke=currentColor、stroke-width=1.8、round cap/join。
 * 尺寸规范：16px（行内）/ 20px（按钮内）/ 24px（独立图标）——由调用处 className 控制。
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

/** 购物车（shopping list） */
export function CartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
      <path d="M3 3h2.2l2.1 12.2a1.2 1.2 0 0 0 1.2 1h8.6a1.2 1.2 0 0 0 1.2-.9L20.5 7H6" />
    </svg>
  );
}

/** 问 AI（对话框） */
export function ChatIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 12a8 8 0 0 1-11.6 7.2L4 21l1.6-4.6A8 8 0 1 1 21 12Z" />
      <path d="M9 10.5h6M9 14h3.5" />
    </svg>
  );
}

/** 闪电（快速 / 30 分钟） */
export function BoltIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 2 4.5 13.5H11L9.5 22 19 10.5h-6.5L13 2Z" />
    </svg>
  );
}

/** 米饭（剩饭妙用） */
export function RiceIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 3.5c-1.5 1.6-2.5 3.6-2.5 5.5a7.5 7.5 0 0 0 15 0C19.5 7.1 18.5 5.1 17 3.5" />
      <path d="M5 12.5h14M8.5 8.5c.5 1.3 1.6 2.2 3.5 2.2" />
    </svg>
  );
}

/** 叶子（素食） */
export function LeafIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20C4 10 10 4 20 4c0 10-6 16-16 16Z" />
      <path d="M4 20c4-6 8-9 12-11" />
    </svg>
  );
}

/** 放大镜（查看状态） */
export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.4-4.4" />
    </svg>
  );
}

/** 店铺 / 亚超 */
export function StoreIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 10 5.6 4h12.8L20 10M4 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0 4.4 0" />
      <path d="M6 12.5V20h12v-7.5M10 20v-4.5h4V20" />
    </svg>
  );
}

/** 火（热度） */
export function FireIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21c4.4 0 7-2.7 7-6.4 0-3.6-2.6-6.3-5.1-8.1.2 1.7-.4 3.1-1.6 4.1-.4-2.3-1.8-4-3.9-5C9.9 8.7 8 11 8 13.6c0 1.5.5 2.6 1.3 3.5" />
    </svg>
  );
}

/** 替换（substitution） */
export function SwapIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 4 3.5 7.5 7 11M3.5 7.5h11M17 13l3.5 3.5L17 20M20.5 16.5h-11" />
    </svg>
  );
}

/** 复制 */
export function CopyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M5 15.5V5.5A1.5 1.5 0 0 1 6.5 4h9" />
    </svg>
  );
}

/** 对勾（已完成） */
export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

/** 天平 / 计量 */
export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v16M7 20h10M5 6.5h14" />
      <path d="M7 8.5 5.5 13a2.6 2.6 0 0 0 5 0L9 8.5M15 8.5l-1.5 4.5a2.6 2.6 0 0 0 5 0L17 8.5" />
    </svg>
  );
}

/** 星级（保真度） */
export function StarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3 2.6 5.6 6 .7-4.5 4.1 1.2 5.9L12 16.5 6.7 19.3l1.2-5.9L3.4 9.3l6-.7L12 3Z" />
    </svg>
  );
}

/** 关闭 / 移除 */
export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

/** 太阳（浅色主题） */
export function SunIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
    </svg>
  );
}

/** 月亮（深色主题） */
export function MoonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 14.5A8.3 8.3 0 0 1 9.5 4 8.3 8.3 0 1 0 20 14.5Z" />
    </svg>
  );
}

/** 灯泡（提示） */
export function BulbIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9.5 18h5M10.5 21h3M12 3a6 6 0 0 0-3.4 10.9c.6.5.9 1.2.9 1.9v.2h5v-.2c0-.7.3-1.4.9-1.9A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

/** 碗（份量） */
export function BowlIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16a8 8 0 0 1-16 0Z" />
      <path d="M8 3.5c-1 1.2-1.5 2.4-1.5 3.5M12 3c-.8 1.4-1.2 2.6-1.2 4M16 3.5c-1 1.2-1.5 2.4-1.5 3.5" />
    </svg>
  );
}

/** 箱子（其他分类） */
export function BoxIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m4 7.5 8-4 8 4v9l-8 4-8-4v-9Z" />
      <path d="m4 7.5 8 4 8-4M12 11.5v9" />
    </svg>
  );
}

/** 时钟（时间） */
export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

/** 眼睛（预览 PDF / 查看） */
export function EyeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  );
}

/** 下载 */
export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5V15M7 10.5l5 5 5-5M4 19.5h16" />
    </svg>
  );
}

/** 锁（锁定 / 付费内容） */
export function LockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2" />
    </svg>
  );
}
