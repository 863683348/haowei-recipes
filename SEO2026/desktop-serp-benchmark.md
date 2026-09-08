# 桌面端 SERP 富媒体对标（P1-#5，2026-09-08）

> 问题：桌面 3,166 展示（70%）只产 5 点击（CTR 0.16%），而移动 1,360 展示产 22 点击（CTR 1.62%）。
> 根因假设 = 桌面 SERP 竞争（大站 + 富媒体压制）+ 我方排名深（桌面均值 50.9 vs 移动 12.3）。
> 本文件：抓取桌面端「hong shao rou / chinese vegetarian / cheung fun」类 SERP 前 5 名，逐项比对富媒体要素，列出我方缺失信号与补法。

---

## 1. 竞品 SERP 前 5 富媒体要素（实测，2026-09-08 抓取）

以「hong shao rou braised pork belly recipe」为例，前 5 名（ohsnapletseat / howtofoodedition / mycookingcalendar / ichisushi / terumimorita）：

| 要素 | 竞品覆盖 | 我方 haoweirecipes |
|---|---|---|
| Recipe JSON-LD（完整字段） | 5/5 | ✅ 已有（全字段含 citation/reviewedBy/suitableForDiet） |
| 可见 FAQ 区块（H2+问答） | 4/5 | ✅ 菜谱页已有（getRelatedFaqs 可见 details）+ 博客页刚上线可见化 |
| 深度内容（替代/翻车点/变花样） | 3/5 | ✅ 已有（depth-fields 全量 52 道） |
| E-E-A-T（作者/审核/来源引用） | 2/5 | ✅ 已有（作者栏 + reviewedBy + editorial policy + citation） |
| **aggregateRating 星级评分** | 4/5 | ❌ 缺失（无真实评分数据，**禁止造假**） |
| **Nutrition Facts 营养表** | 2/5 | ❌ 缺失（需计算，USDA 引用已备） |
| **步骤图（3-10 张）** | 4/5 | ⚠️ 仅 1 张 hero 图（aspect 1200/630） |
| **视频教程（iframe/内嵌）** | 2/5 | ❌ 缺失（需制作资源） |
| AI/互动组件 | 1/5 | ✅ 已有（AI 助手 / 口味调整 / 购物清单） |
| 面包屑富媒体 | 3/5 | ✅ 已有（BreadcrumbList） |

## 2. 结论：结构性信号已齐，缺口全是「资源型」而非「代码型」

代码层能补的（FAQ 可见化、E-E-A-T、深度字段、JSON-LD）**上一轮 P0/P1/P2 已全部落地**。
剩余三项缺口 —— 评分 / 营养表 / 多图视频 —— 都需要**真实内容资源**：

| 缺口 | 性质 | 补法 | 优先级 |
|---|---|---|---|
| aggregateRating | 需真实用户评分 | 已有 RecipeComments 组件可收集评分；评分 ≥10 条后再在 JSON-LD 输出 aggregateRating（Google 明确惩罚虚假评分，宁缺毋假） | P2（数据积累后） |
| Nutrition Facts | 需计算 | 用已引用的 USDA FoodData Central 计算每道菜营养，输出 NutritionInformation JSON-LD + 页面表格 | P2（可脚本半自动） |
| 步骤图 | 需图片资源 | 每道菜 3-5 张步骤实拍/AI 图（即梦AI 60 张/日免费），替换单 hero 为多图区 | P1（配合 P2-8 首图 A/B） |
| 视频教程 | 需制作资源 | 可灵AI 生成 30-60s 教程，iframe 嵌入菜谱页 | P3（资源充裕后） |

## 3. 诚实约束（不可逾越）

- **不输出虚假 aggregateRating**：无真实评分时 JSON-LD 不含 rating 字段。Google 的评分滥用惩罚对新站是致命的。
- **不堆图片凑数**：步骤图必须与步骤一一对应，否则是 CLS + 质量双输。
- **视频不外包劣质源**：宁可暂无，不上低质 YouTube 链接。

## 4. 立即可做的代码层收尾

1. ✅ 本轮已做：博客 FAQ 可见化（P0-3）+ 聚合页 FAQ（P1-4）——与竞品 4/5 对齐。
2. 待做：菜谱页 hero 图 `alt` 含菜名+菜系已达标；`RecipeViews`/`RecipeComments` 组件在，评分数据积累中。
3. 下期验证点：GSC「SERP 特征」表格——食谱富媒体 CTR 是否随 FAQ/深度内容可见化上升（目标 0.79%→1.5%+）。

## 5. 对标后更新 GSC 09-08 报告的判断

- 原判断「桌面断层源于 SERP 竞争」**成立**：竞品富媒体要素我方已基本对齐，剩余差异（评分/营养/多图/视频）属资源型。
- 桌面 CTR 的真正突破口不是补信号，而是**排名进前 10**（桌面均值 50.9 太深）——回到外链矩阵（P1-6）与近胜利页文案收割（P0-1）。
