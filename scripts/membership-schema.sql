-- 好味 HǎoWèi · 会员体系（v2.1）Neon Postgres 建表脚本
-- 在 Neon 控制台 SQL Editor 或 psql 执行一次即可。

CREATE TABLE IF NOT EXISTS users (
  id            text PRIMARY KEY,
  email         text NOT NULL UNIQUE,
  name          text NOT NULL DEFAULT '',
  password_hash text NOT NULL,
  locale        text NOT NULL DEFAULT 'en',
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS plans (
  id          text PRIMARY KEY,
  code        text NOT NULL UNIQUE,  -- recipe_pass | pdf_pass | all_access | pdf_volume
  name_en     text NOT NULL,
  name_zh     text NOT NULL,
  price_cny   numeric(10,2) NOT NULL,
  price_usd   numeric(10,2) NOT NULL,
  billing     text NOT NULL CHECK (billing IN ('subscription','one_time'))
);

CREATE TABLE IF NOT EXISTS orders (
  id                 text PRIMARY KEY,
  user_id            text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan_code          text NOT NULL REFERENCES plans(code),
  volume_id          text,                       -- pdf_volume 时对应册（v1/v2...）
  provider           text NOT NULL DEFAULT 'pending', -- pending | mock | waffo
  provider_order_id  text NOT NULL DEFAULT '',
  amount_cny         numeric(10,2) NOT NULL,
  status             text NOT NULL DEFAULT 'pending'
                     CHECK (status IN ('pending','paid','failed','refunded')),
  created_at         timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_orders_provider ON orders(provider, provider_order_id)
  WHERE provider_order_id <> '';
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id, created_at DESC);

-- 权益表：双维度分离（菜谱权益 / PDF 权益）
CREATE TABLE IF NOT EXISTS entitlements (
  user_id            text PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  recipe_pass_until  timestamptz,                -- 菜谱会员到期时间
  pdf_pass_until     timestamptz,                -- PDF 会员到期时间
  updated_at         timestamptz NOT NULL DEFAULT now()
);

-- 已购 PDF 册（买断记录）
CREATE TABLE IF NOT EXISTS downloads (
  id           bigserial PRIMARY KEY,
  user_id      text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  volume_id    text NOT NULL,
  purchased_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, volume_id)
);

-- V1 免费下载邮箱收集（邮件序列蓄水）
CREATE TABLE IF NOT EXISTS leads (
  id            bigserial PRIMARY KEY,
  email         text NOT NULL,
  volume_id     text NOT NULL,
  downloaded_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (email, volume_id)
);

-- 下载审计（防滥用）
CREATE TABLE IF NOT EXISTS download_events (
  id            bigserial PRIMARY KEY,
  actor         text NOT NULL,  -- email 或 user_id
  volume_id     text NOT NULL,
  ip            text NOT NULL DEFAULT '',
  downloaded_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_download_events_actor ON download_events(actor, downloaded_at DESC);

-- 初始产品目录（与 src/lib/membership.ts 的 PLANS 保持一致）
INSERT INTO plans (id, code, name_en, name_zh, price_cny, price_usd, billing) VALUES
  ('p_recipe_pass', 'recipe_pass', 'Recipe Pass', '菜谱会员', 99, 14.99, 'subscription'),
  ('p_pdf_pass',    'pdf_pass',    'PDF Pass',    'PDF 会员', 129, 18.99, 'subscription'),
  ('p_all_access',  'all_access',  'All-Access',  'All-Access 全会员', 199, 29.99, 'subscription'),
  ('p_pdf_volume',  'pdf_volume',  'PDF Volume',  'PDF 合集单册', 39, 5.99, 'one_time')
ON CONFLICT (code) DO NOTHING;
