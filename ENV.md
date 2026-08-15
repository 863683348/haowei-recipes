# 好味 HǎoWèi · 会员体系环境变量与接入说明（v2.1）

> 本次升级为「可新增部分」先行交付：全部新增代码已在 `src/` 内就位，
> 不依赖任何新 npm 包（鉴权为零依赖自研）。本文件说明如何接入真实环境。

## 一、环境变量（`.env.local`）

```env
# 站点
NEXT_PUBLIC_SITE_URL=https://haoweirecipes.com

# 鉴权（必须！生产环境务必设置强随机值；不设置则回退到 dev 密钥，仅限本地）
AUTH_SECRET=

# 数据库（Neon）。不设置 → 内存存储（dev/mock，进程内临时数据）
DATABASE_URL=postgres://...

# 支付：mock（缺省）| waffo（真实）
PAYMENT_MODE=mock
WAFFO_API_KEY=
WAFFO_API_URL=https://api.waffo.com/v1
WAFFO_WEBHOOK_SECRET=
```

## 二、接入真实依赖（环境解锁后执行）

沙箱限制导致 `package.json` 无法修改、npm 无法安装。解锁后：

```bash
npm i @neondatabase/serverless   # Neon 数据驱动
npm i next-auth@beta bcryptjs    # 如从零依赖鉴权切换到 NextAuth（可选）
npm run build
```

- `src/types/neon-serverless.d.ts` 是本地类型桩，安装真实包后可删除。
- 配置 `DATABASE_URL` 后自动切换 Neon 实现；执行 `scripts/membership-schema.sql` 建表。

## 三、waffo 接入（PAYMENT_MODE=waffo 时）

1. 核对 `src/lib/payments/provider.ts` 中下单端点/字段（官方文档：
   https://waffo.com/docs/api-reference/order-create/create-new-order ）
2. 在 waffo 后台配置 Webhook 指向 `/api/payments/webhook`，并按官方文档实现验签
   （https://waffo.com/docs/zh/developer-docs/webhook/overview 与 event-types）
3. 沙箱测试：https://waffo.com/docs/en/developer-docs/tools-and-references/developer-tools/sandbox-simulator.md

## 四、第二阶段集成清单（沙箱解锁后，少量修改既有文件）

| 项 | 文件 | 动作 |
|----|------|------|
| 导航入口 | `src/components/header.tsx` | 加「会员 / Pricing / 下载」链接与登录态 |
| 菜谱页门禁 | `src/app/[locale]/recipes/[slug]/page.tsx` | 会员菜谱渲染预览 + `MembershipGate` 补全完整内容 |
| 高级功能门禁 | `flavor-adjuster.tsx` / `shopping-list` | 次数限制与导出按钮接 `openUpgrade()` |
| i18n 合并 | `en.ts` / `zh.ts` | 把 `membership-i18n.ts` 文案并入 `dict.membership` |
| 隐私政策 | `privacy/page.tsx` + 字典 | 删除「无注册无登录」，补充账号/支付数据说明 |
| 依赖 | `package.json` | 添加 `@neondatabase/serverless`（及可选 next-auth） |
| 缓存/安全头 | `next.config.ts` | 新页面加 cache 规则；CSP `connect-src` 视 waffo 前端需求放行 |
| Middleware | `src/middleware.ts` | 增加 `/account` 会话保护（当前由页面内校验兜底） |

## 五、当前可跑通流程（Mock 模式，无需任何密钥）

1. `/en/account` 注册/登录（邮箱+密码，PBKDF2 哈希）
2. `/en/pricing` 点「开通」→ mock 回调 → 权益写入 → 回 `/en/account?paid=1` 可见双权益状态
3. `/en/downloads` 填邮箱下载 V1 免费 PDF（写 leads）
4. `/en/pdf/v2` 预览 3 道 + 购买入口（PDF 单册权益与菜谱权益互不影响）
