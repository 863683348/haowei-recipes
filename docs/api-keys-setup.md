# 生图 / 视频 API Key 注册与接入步骤

> 适用：HǎoWèi 好味菜谱站「每道菜 4 图（1 封面 + 3 过程）+ 1 条视频」流水线
> 更新：2026-08-15

---

## 一、即梦AI（火山引擎 Ark）生图

### 注册 + 开通
1. 打开 **火山引擎官网** https://www.volcengine.com/
2. **注册 / 登录**：手机号 或 抖音 APP 扫码
3. **实名认证**（必须，人脸核验）：控制台任意按钮会弹「前往认证」，完成才能开通 API
4. 开通即梦图片生成服务：
   - 入口：顶部「产品」→「人工智能与机器学习」→「图像生成大模型（即梦AI）」→「立即体验」
   - 或直达智能视觉控制台 https://console.volcengine.com/ai/overview
   - 左侧选 **即梦AI - 图片生成（4.0 / 5.0）** → 点「开通服务」→ 选 **免费试用**（有约 200 张免费额度）确认开通
5. **获取 API Key（方舟）**：
   - 打开 **火山方舟控制台** https://console.volcengine.com/ark
   - 左侧「在线推理」→「自定义推理接入点」→「创建推理接入点」
   - 模型选「即梦AI - 图片生成」，命名后创建
   - **复制接入点 ID（形如 `ep-xxxx`）** —— 这是脚本里的 `JIMENG_MODEL`
   - 右上角账号 →「API 访问密钥」→「新建密钥」→ 复制 **API Key**（Bearer 用）

### 接入本项目
```bash
# API Key（Bearer 鉴权）
export VOLCENGINE_API_KEY="ark-xxxx"
# 方舟推理接入点 ID（即梦图片生成模型）
export JIMENG_MODEL="ep-xxxx"

# 或写入本地 secrets（推荐，不进对话/仓库）：
#   ~/.workbuddy/secrets/jimeng-api-key.txt   → 填 VOLCENGINE_API_KEY
#   ~/.workbuddy/secrets/jimeng-model.txt     → 填 ep-xxxx（脚本读取逻辑见下）
```

> ⚠️ **关键提醒**：即梦「网页端 60 张/天免费」≠ API 免费。API 走方舟，消耗的是方舟资源包 / 开通时的免费试用额度（约 200 张）。网页端额度无法用于 API。

---

## 二、可灵AI（Kling / 快手）视频

### 注册 + 开通
1. 打开 **可灵AI 开发者平台** https://klingai.com/dev
2. **登录**：手机号 或 快手扫码（与网页端同一账号）
3. **购买资源包**：进入「资源包」购买页，选 **【试用资源包】**（新用户可免费联调少量）或按需购买视频生成资源包
   - 视频 API 购买页：https://klingai.com/dev/pricing?scrollTo=video
4. **获取 API Key**：
   - 打开 https://klingai.com/dev/api-key
   - 点「+ 新建 API Key」→ 命名 → **复制（仅显示一次，务必保存）**
5. 调用域名：`https://api-beijing.klingai.com`，鉴权 `Authorization: Bearer <API_KEY>`
6. 文档：https://klingai.com/document-api

### 接入本项目
```bash
export KLING_API_KEY="<复制的 API Key>"

# 或写入本地 secrets（推荐）：
#   ~/.workbuddy/secrets/kling-api-key.txt
```

> ⚠️ 旧版用户若只有 Access Key + Secret Key，脚本也兼容（自动走 JWT 签名）：
> `export KLING_ACCESS_KEY=xxx && export KLING_SECRET_KEY=yyy`

---

## 三、agnes（备用生图，用户另行提供 Key）

- 用户提到 agnes 也具备生图能力，将另行提供 Key。
- **待确认**：agnes 的 API endpoint 与请求格式（是否兼容 OpenAI `images/generations`？还是自定义协议？）。
- 拿到 Key + 调用方式后，会新增 `scripts/agnes-recipe-images.mjs`，复用现有 4-prompt 结构。
- **降级策略**：若 agnes 不可用，立即回退到 WorkBuddy 自带生图（ImageGen）先跑通流水线。

---

## 四、脚本用法速查

```bash
# 即梦生图（每道 4 图：1 封面 + 3 过程）
node scripts/jimeng-recipe-images.mjs --dry-run          # 只打印 prompt
node scripts/jimeng-recipe-images.mjs --slug mapo-tofu   # 单道
node scripts/jimeng-recipe-images.mjs                    # 全部

# 可灵视频（每道 1 条，默认图生视频）
node scripts/kling-video-gen.mjs --dry-run
node scripts/kling-video-gen.mjs --slug mapo-tofu
node scripts/kling-video-gen.mjs --mode text             # 文生视频
```

*规划版本 v0.3 · 2026-08-15 · 即梦 + 可灵 + agnes 备用 + WorkBuddy 兜底*
