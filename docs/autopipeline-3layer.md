# HǎoWèi 好味 · 3 层自动发布管线（参考 getcreditworth 模式）

> 目标：把 `docs/content-calendar-100d.md` 的 100 天 × 3 道菜（共 300 道）从「agent 手动跑」
> 升级为「GitHub 远端每天 UTC 00:10 = 北京时间 08:10 自动跑」。人在工地/睡觉/出差，菜照常长。

## 总览：3 层管线 + 2 个 GitHub Actions 定时任务

```
┌─────────────────────────────────────────────────────────────────────┐
│  GitHub Actions · cron 每天 00:10 UTC（北京时间 08:10）触发           │
└─────────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│  Layer 1 · 数据层（脚本：scripts/fetch-recipes-daily.mjs）           │
│  ─────────────────────────────────────────────────────────────────── │
│  ① 解析 docs/content-calendar-100d.md → 找下一个未生成 Day            │
│  ② 调百炼 qwen-plus 生成当日 3 道完整双语菜谱 JSON                    │
│  ③ 校验（slug 唯一/字段完整/食材 ≥4/步骤 ≥5/stateNote 存在）          │
│  ④ 调百炼 wanx2.1-t2i-turbo 生成 3 张菜品图（异步任务模式轮询）       │
│  ⑤ sharp 压缩 PNG → WebP（quality 85，~30-100KB/张）                  │
│  ⑥ 落盘 src/data/recipes/{slug}.ts + public/images/recipes/{slug}.webp│
│  ⑦ 更新 src/data/recipes/index.ts（注入 import + 数组项）             │
│  ⑧ npx tsc --noEmit（质量闸门，失败则 git revert + 报警）             │
└─────────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│  Layer 2 · 内容层（脚本：scripts/blog-derive-daily.mjs，可选）       │
│  ─────────────────────────────────────────────────────────────────── │
│  ① 拿当天 3 道菜 → 派生出 1 篇中英双语「主题博客」（2000-3000 字）      │
│  ② 落盘 data/blog/posts/{date}.md（数据驱动，列表页自动读取）          │
│  ③ 派生 5 平台分发稿：Dev.to / Medium / Quora / LinkedIn / Reddit      │
│     → 落盘 content/social/{platform}-{date}.md                       │
│  ④ 调用 seo-100day-publish skill 统一产出（未来可启用）                │
└─────────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│  Layer 3 · 发布层（脚本：scripts/sync-github.mjs + scripts/indexnow） │
│  ─────────────────────────────────────────────────────────────────── │
│  ① sync-github.mjs：检查本地 git status → 用 GitHub Git Database API │
│     把所有变更文件 PUT 上去（绕过本机含单引号路径 git 易损坏坑）         │
│  ② 触发 Vercel 自动部署（Vercel 监听 GitHub push webhook）           │
│  ③ 几分钟后线上生效（haoweirecipes.com/zh/recipes/{slug}）             │
│  ④ indexnow-submit.mjs：POST 新菜谱 URL 列表到                       │
│     https://api.indexnow.org/indexnow（让 Bing 立即收录）              │
└─────────────────────────────────────────────────────────────────────┘
```

## 与 getcreditworth 模式的对照

| getcreditworth（有声书） | haoweirecipes（菜谱）           | 共同点                                    |
| ------------------------ | ------------------------------ | ----------------------------------------- |
| Audible catalog API      | 百炼 qwen-plus + wanx2.1 LLM  | 都是"自动从外部数据源拉数据"               |
| `data/books.json`        | `src/data/recipes/*.ts`       | 都是"数据驱动页面，零手工改动"             |
| `scripts/fetch-books-daily.mjs` | `scripts/fetch-recipes-daily.mjs` | 都是"按日历找下一个未生成 batch"           |
| `scripts/sync-github.mjs` | `scripts/sync-github.mjs`     | 都是"Git Database API 推送"                |
| IndexNow                  | IndexNow                       | 都是"提交新 URL 给 Bing 立即收录"          |
| 5 平台分发（Dev/Med/Q/L/R） | 5 平台分发（未来可启用）       | 都是"一篇派生 5 平台"                      |

## 复用 skill：`seo-100day-autopipeline`

本方案以 skill 形式封装在 `~/.workbuddy/skills/seo-100day-autopipeline/`，
**任何有「100 天内容排期 + Next.js + 数据驱动页 + Vercel」结构**的出海站点都能套用。

skill 输入：
- 项目路径
- 内容排期文件路径（如 `docs/content-calendar-100d.md`）
- 数据驱动目录（如 `src/data/recipes/`）
- 域名（如 `haoweirecipes.com`）

skill 输出：
- `.github/workflows/daily-content.yml`
- `.github/workflows/indexnow.yml`
- `scripts/fetch-content-daily.mjs`
- `scripts/sync-github.mjs`
- `scripts/indexnow-submit.mjs`
- `docs/autopipeline-3layer.md`（本文件）
- `README-autopipeline.md`（部署说明：需要在 GitHub repo 配置的 secrets）

## GitHub repo 需要配置的 Secrets

进入 https://github.com/863683348/haoweirecipes/settings/secrets/actions 添加：

| Secret 名              | 值                                                  | 用途                          |
| ---------------------- | --------------------------------------------------- | ----------------------------- |
| `DASHSCOPE_API_KEY`    | `sk-xxx`（阿里云百炼）                              | LLM 生成菜谱                  |
| `BAILIAN_API_KEY`      | 同上，可复用（阿里云百炼）                          | wanx2.1-t2i-turbo 生图         |
| `INDEXNOW_KEY`         | 32 位 hex（从 https://www.bing.com/indexnow 生成） | 提交新 URL 给 Bing            |
| `GH_TOKEN`             | PAT（自动生成，workflow 内置 `${{ github.token }}`） | GitHub Git Database API 推送  |

> 注：Vercel 自动部署无需额外 secret，vercel.json/vercel 监听 GitHub push webhook 即可。

## 时间线（北京时间）

```
D-1 23:00    GitHub Actions 准备（pre-cron 调度）
D 00:10      cron 触发 daily-recipes.yml
D 00:10-00:25 LLM 生成 + 校验 + 落盘（~3 道菜 × 8 分钟）
D 00:25-00:40 百炼生图（异步任务轮询，~3 张图 × 5 分钟）
D 00:40-00:43 sharp 压缩 PNG → WebP（<30s）
D 00:43-00:45 tsc 校验
D 00:45-00:46 git commit + push via Git Database API
D 00:46-00:48 IndexNow 提交新 URL
D 00:48      Vercel 检测 push，开始部署
D 00:50-00:55 部署完成（Vercel 通常 2-3 分钟）
D 00:55      新菜谱页面上线（haoweirecipes.com/zh/recipes/{slug}）
D 01:00+     Bing 抓取新 URL（IndexNow 通常 5-30 分钟）
```

## 失败处理

- **LLM 生成失败**：retry 3 次（指数退避 30s/60s/120s），仍失败则跳过当日
  下次 cron 补上（自动检测"未生成 Day"）
- **生图失败**：菜谱数据正常落盘，图用 sharp 生成占位灰色图（带 "Image coming soon" 文字）
- **tsc 失败**：自动 `git revert HEAD`，发邮件/钉钉/Slack 报警（未来可加）
- **Git Database API 失败**：本地分支保留 `autopipe/day-N`，下次 cron 重试 push
- **Vercel 部署失败**：保留上次线上版本（Vercel 默认行为），不影响其他页面

## 调试 / 手动触发

GitHub Actions 支持 `workflow_dispatch`，可在 Actions 页面手动点按钮触发，
传参：
- `--day N`：指定生成日历第 N 天
- `--no-image`：跳过生图（节省百炼额度）
- `--dry-run`：只生成 JSON 到 _autopipe/ 不落盘

## 实施 Checklist

- [x] 写方案文档（本文件）
- [ ] 创建 `.github/workflows/daily-recipes.yml`
- [ ] 创建 `.github/workflows/indexnow.yml`
- [ ] 创建 `scripts/fetch-recipes-daily.mjs`
- [ ] 创建 `scripts/sync-github.mjs`
- [ ] 创建 `scripts/indexnow-submit.mjs`
- [ ] 创建 skill `~/.workbuddy/skills/seo-100day-autopipeline/SKILL.md`
- [ ] 提交 + 推送到 haoweirecipes
- [ ] 用户在 https://github.com/863683348/haoweirecipes/settings/secrets/actions 配置 secrets
- [ ] 用户在 https://www.bing.com/indexnow 生成 key
- [ ] 首次手动触发 workflow 验证全链路
- [ ] 第二天 00:10 验证自动 cron 触发

## 相关文件

- `docs/content-calendar-100d.md` — 100 天内容排期（输入）
- `src/data/recipes/*.ts` — 菜谱数据（被生成）
- `public/images/recipes/*.webp` — 菜谱图（被生成）
- `src/data/recipes/index.ts` — 数据注册表（被更新）
- `scripts/llm-recipe-gen.mjs` — 已有的 LLM 脚本（被 fetch-recipes-daily 复用核心逻辑）
- `scripts/bailian-recipe-images.mjs` — 已有的生图脚本（被 fetch-recipes-daily 复用核心逻辑）
- `scripts/recipe-gen.mjs` — 已有的落盘 + tsc 脚本（被 fetch-recipes-daily 复用核心逻辑）