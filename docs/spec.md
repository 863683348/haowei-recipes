# Spec 契约：HǎoWèi 好味 · haoweirecipes.com

**版本**：v1.0（锁定）｜**日期**：2026-08-15 ｜**来源**：PRD v0.1 + 用户决策（2026-08-15 确认）

## 0. 已确认决策（用户拍板）
| 项 | 决策 |
|---|---|
| 品牌/域名 | HǎoWèi 好味 / **haoweirecipes.com**（whois 实测可注册） |
| 技术栈 | Next.js 15 App Router + TypeScript + Tailwind + Vercel 部署 |
| AI 接入 | **规则+静态优先**（术语库/替换表/FAQ 规则问答；不接 LLM API） |
| MVP 范围 | PRD P0 六项全做（R-01~R-06） |

## 1. MVP 功能表（锁定，明确不做的也写死）

| 编号 | 功能 | 实现方式 | 验收标准（Given/When/Then） |
|---|---|---|---|
| R-01 | 英中术语对照系统 | 术语库 JSON + 悬浮/点击释义组件 | 悬停"生抽"→ 显示 英中对照+量化(1 tbsp≈15ml)+替代提示；P0 菜谱 100% 覆盖 |
| R-02 | 食材替换引擎 | 替换映射表 + 规则函数；双向（亚超→本地替代 / 本地食材→可做菜谱） | 输入"no Shaoxing wine"→ 返回 ≥1 替代（干雪利酒）标注还原度（如 80%）；Top20 替换 100% 覆盖 |
| R-03 | 火候状态可视化 | 步骤结构化字段 stateNote + 状态描述/时间参考 + 图标化呈现 | 所有含状态判断步骤均有"状态描述+时间参考"呈现 |
| R-04 | 购物清单一键生成 | 客户端聚合：按菜谱生成，双语、分"本地超市/亚超"两类、人数缩放、可复制导出 | 生成后分类正确率≥90%；可一键复制 |
| R-05 | AI 交互式追问 | FAQ 规则库 + 关键词匹配 + 菜谱上下文回答；明示边界 | 问"为什么小火"→ 返回食材层解释；未知问题→ 诚实"不确定"+引导 |
| R-06 | 口味量化调整 | 规则函数：辣/咸/油/素食 输入→调料量化换算，同步更新清单 | 选"减咸"→ 酱油类步骤给出新量化用量并同步清单 |

## 2. 页面清单
- `/` 首页（品牌 + 场景入口：30分钟/剩饭改造/第一次做中餐 + 精选菜谱）
- `/recipes` 菜谱库（筛选：菜系/难度/时长/场景 + 搜索）
- `/recipes/[slug]` 菜谱详情（双版本切换 + 术语悬浮 + 计量切换 + 状态图 + 口味调整 + 购物清单）
- `/ai-assistant` AI 助手（FAQ 规则问答，独立页 + 详情页内嵌）
- `/shopping-list` 购物清单（会话态，localStorage）
- `/terms` 术语表（SEO 长尾）
- `/substitutions` 食材替换表（SEO 长尾）
- `/about`、`/faq`、`/privacy`、`/contact`

## 3. 数据模型（src/data/ 下静态 TS/JSON）
- `recipes/*.ts`：Recipe（id/slug/titleEn/titleZh/pinyin/cuisine/difficulty/time/servings/version 双版本/ingredients[名称双语+双制计量+类别+替换提示]/steps[步骤+状态点+时间参考+视觉提示]/tips/story/region/tags/dietary）
- `terms.ts`：Term（zh/pinyin/en/definition/quantEquivalent/substituteHint/category）≥30 条
- `substitutions.ts`：Substitution（from/to/ratio/fidelityScore 1-5 星/note/type: asian2local|local2dish|pair）Top20 覆盖
- `faqs.ts`：FAQ（id/category/question/answer/keywords/relatedRecipeSlugs/confidence: high|medium|low）
- `flavor-adjust.ts`：口味调整规则（spicy/salty/oily/vegetarian → 调料量化换算表）
- `ingredient-catalog.ts`：食材类别映射（本地超市可买 / 需亚超）

## 4. 设计 Token（Phase 2 落地）
- 亮色为主（SEO 内容站阅读场景），提供 dark 变量；CSS 变量集中定义
- 品牌色：中餐暖色系（酱油深褐/姜黄/青葱绿点缀）；内容字体优先系统栈，标题可衬线
- 组件全程 Token，不写死颜色；emoji 仅限风味/状态图标化场景，不用于导航

## 5. i18n 策略（v1.1 更新：双前缀全双语，2026-08-15）
- **URL 结构**：双前缀 `/:locale(en|zh)`——`/en/...` 英文、`/zh/...` 中文；根路径 `/` 由 middleware 重定向到 `/en`（默认语言）；顶栏语言切换器保持当前路径互切（`/zh/recipes/x` ↔ `/en/recipes/x`），选择记忆 localStorage（hw-lang）
- **UI 文案**：自建轻量字典 `src/i18n/dictionaries/{en,zh}.ts`（类型化、零新依赖，延续"不引入完整 i18n 框架"铁律）；客户端组件经 `useI18n()` Context 取文案；服务端组件 `getDictionary(locale)`
- **内容数据**：英文为主字段（story/steps/tips/definition/answer 等）+ 中文增量字段（storyZh/textZh/tipsZh/definitionZh/answerZh 等，可选 `?`），页面按 locale 取 `zh ?? en` 兜底；FAQ 匹配引擎同时支持中英关键词
- **SEO**：每页 `alternates` canonical + hreflang（en/zh/x-default）；sitemap.xml 输出双套 URL + xhtml:link alternates；metadata/OG/Twitter 按语言输出；`<html lang>` 由客户端 LangSync 同步
- **静态生成**：`[locale]` 段 generateStaticParams 返回 en/zh，37 个页面全部 SSG；next.config 缓存规则全部改为 `/:locale(en|zh)/...` 前缀
- 计量双轨：公制(g/ml) + 美制(cup/tbsp/oz)，全局切换记忆 localStorage（与语言独立）

## 6. 技术约束（铁律）
- 不接任何 LLM API（规则问答）；无用户账号；无支付；无 UGC；无美式中餐内容
- 菜谱内容：真实家庭配方（家庭快手版/餐厅正宗版双版本标注）
- AI 边界诚实：FAQ 回答带"来源"+未知问题明示不确定
- SEO：语义化 HTML + Recipe JSON-LD + sitemap + robots + metadata 模板

## 7. 安全/性能基线（Phase 5 闸门）
- 安全响应头：CSP / X-Frame-Options / HSTS / X-Content-Type-Options / Referrer-Policy（next.config）
- 公开路由 `s-maxage=86400, stale-while-revalidate=604800`；route.ts 手动 setHeader
- 根 layout 不读 cookies()/headers()；动态段 generateStaticParams
- npm audit 无高危；lint + tsc + build 全绿；375px 无横向溢出

## 8. Non-goals（v1 坚决不做）
1. LLM API 集成（AI 问答为规则版，二期升级）
2. 用户账号/登录/个性化持久化（口味调整仅会话内）
3. 支付/订阅（R-14 延后）
4. UGC 开放发布
5. 美式中餐菜谱
6. 自营电商（联盟链接后续）
7. 多语言完整体系（仅 en 主 + zh 标注）
8. 原生 App
