# HǎoWèi 好味 · 百日 SEO 规划（Blog + 菜谱内容矩阵）

> 目标：100 天内把 haoweirecipes.com 做成「中式家常菜」海外搜索霸主。
> 核心打法：**菜谱（每天 3 道）+ Blog（每天 1 篇）双轨内容矩阵，全部中英双语，互相内链，外部分发 + 索引推送**。

## 一、总目标

| 指标 | 目标值 | 说明 |
|------|--------|------|
| 周期 | 100 天（Day 1 = 2026-08-15） | 与菜谱日历对齐 |
| 菜谱 | 300 道（每天 3） | 已由 `haowei-recipe-daily` 流水线覆盖 |
| Blog | 100 篇（每天 1） | 本文档新增规划 |
| 语言 | 每篇 en + zh 双语 | 双前缀路由 `/en` `/zh` |
| 可索引 URL | 800（400 内容 × 2 语） | sitemap 已含 blog |

## 二、内容矩阵

| 类型 | 频率 | 日产量 | 100天总量 | 数据层 | 路由 |
|------|------|--------|-----------|--------|------|
| 菜谱 Recipes | 每日 | 3 | 300 | `src/data/recipes/*.ts` | `/[locale]/recipes/[slug]` |
| Blog 文章 | 每日 | 1 | 100 | `src/data/blog/*.ts` | `/[locale]/blog/[slug]` |

菜谱与 blog 同日产出、主题联动（blog 内链当日/相关菜谱），形成内容簇。

## 三、Blog 内容方向（4 大类轮换）

| 类别 | 占比 | 示例选题 | 内链目标 |
|------|------|----------|----------|
| **技法 Technique** | 30% | 生抽 vs 老抽、怎么看油温、上浆原理、炝锅顺序 | 用到该技法的菜谱 |
| **食材 Ingredients** | 25% | 欧美超市备中餐料、酱料替代表、亚超必买 10 样 | 依赖该食材的菜谱 |
| **菜谱合集 Recipes** | 25% | 10 道最下饭川菜、15 分钟快手菜、素食家常 Top10 | 合集内每道菜 |
| **文化 Culture** | 20% | 八大菜系一览、节气食俗、家的味道故事 | 相关地域菜谱 |

**每篇 blog 硬标准（参考 seo-100day-publish Phase 1）**：
- 开头段含主关键词（首 100 词）
- H2 分区 3-6 节（含长尾词）
- FAQ 区块 2-4 问 → `FAQPage` JSON-LD
- 内链 ≥ 2 道相关菜谱（权重传递，已实施 `relatedRecipeSlugs`）
- 封面图（og:image，已实施）
- 中英双语 title/description/canonical/hreflang（已实施）

## 四、中英文 SEO 技术基线（已落地）

| 项 | 状态 | 位置 |
|----|------|------|
| 双前缀 `/en` `/zh` | ✅ | `i18n/config.ts` `locales` |
| canonical + hreflang(en/zh/x-default) | ✅ | `pageAlternates()` + 每页 `generateMetadata` |
| sitemap 双语言 + hreflang alternates | ✅ | `sitemap.xml/route.ts`（已含 `/blog` + `/blog/[slug]`） |
| robots 允许 /blog | ✅ | `robots.txt/route.ts`（`Allow: /`） |
| JSON-LD（BlogPosting + FAQPage + BreadcrumbList） | ✅ | blog 详情页 |
| 列表页 ItemList JSON-LD | ✅ | blog 列表页 |
| 静态全预生成 en/zh | ✅ | `generateStaticParams` |

## 五、内链矩阵

- **Blog → 菜谱**：每篇 blog 底部「相关菜谱」模块（`relatedRecipeSlugs` 驱动，已实施）
- **菜谱 → Blog**：菜谱详情页后续加「相关文章」模块（待实施，Phase 2）
- **导航**：Header 已加 Blog 入口
- 内链全部走 `localizePath()`，en/zh 各自闭环，不串语言

## 六、外部分发（复用 `seo-100day-publish`）

每天 blog 生成后同步产出 5 平台分发内容（英文正文 + 中文操作指引）：
Dev.to / Medium / Quora / LinkedIn / Reddit。
- canonical 指向站内角落，外链一律不写（不稀释权重）
- **索引推送**：Bing IndexNow + Google Indexing API 双推（新 URL 24h 内生效）

## 七、里程碑

| 阶段 | 天数 | 累计 Blog | 累计菜谱 | 重点 |
|------|------|-----------|----------|------|
| 一 | 1-30 | 30 | 90 | 技术 SEO 全通（sitemap/hreflang/JSON-LD 验证无误） |
| 二 | 31-60 | 60 | 180 | 外部分发起量，长尾词开始收录 |
| 三 | 61-100 | 100 | 300 | 长尾词收割，菜谱↔blog 互链闭环 |

## 八、KPI

- 可索引 URL：800（双语）
- 自然流量目标：6 个月内 > 5k/月（欧美英语区为主，zh 为辅）
- 核心词：`chinese home cooking recipes` / `[dish] recipe` / `[ingredient] substitute`

## 九、自动化

- `haowei-recipe-daily`：每日 03:00 生成 3 道菜（已建 automation）
- **待建 `haowei-blog-daily`**：每日生成 1 篇 blog（复用本规划日历 `docs/blog-calendar-100d.md`，
  落盘 `src/data/blog/*.ts` + 注册 `index.ts` + tsc 闸门 + 提交推送）
- 两流水线同窗口串行，避免并发改 `index.ts` 冲突

## 十、当前进度（2026-08-16）

- ✅ Blog 模块从零建好：数据层 + 列表/详情页 + 词典 + nav + sitemap 集成
- ✅ 首批 3 篇双语示例（技法/菜谱合集/食材各 1）已落盘并通过 tsc
- ⏳ 百日 blog 日历（`docs/blog-calendar-100d.md`）待生成
- ⏳ `haowei-blog-daily` automation 待建
