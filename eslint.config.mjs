import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "next-env.d.ts"],
  },
  {
    // 内容站：英文文案大量使用撇号/引号，关闭 JSX 转义强制（可读性优先）
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
