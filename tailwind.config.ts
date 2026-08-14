import type { Config } from "tailwindcss";

/**
 * 设计 Token（Spec §4）
 * 亮色为主的阅读型内容站，中餐暖色系：
 *  - soy 酱油深褐（主品牌色/正文强调）
 *  - ginger 姜黄（CTA/交互强调）
 *  - scallion 青葱绿（健康/素食/辅助信息）
 *  - rice 米白（页面背景）
 * dark 变量在 globals.css 中定义，组件统一走 var(--hw-*) Token。
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          soy: "#3E2723",
          ginger: "#C77B2E",
          scallion: "#4A7C59",
          rice: "#FAF7F2",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "Songti SC", "SimSun", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
