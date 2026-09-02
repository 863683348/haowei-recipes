#!/usr/bin/env node
/**
 * Layer 3 · 发布层 · 提交新 URL 到 IndexNow（让 Bing 立即收录）
 *
 * 用法 1（从 sync-github 传 URL）：
 *   node scripts/indexnow-submit.mjs --host haoweirecipes.com --key $INDEXNOW_KEY --urls "u1 u2 u3"
 *
 * 用法 2（从 sitemap 批量提取）：
 *   node scripts/indexnow-submit.mjs --host haoweirecipes.com --key $INDEXNOW_KEY \
 *     --from-sitemap public/sitemap.xml
 *
 * 用法 3（按 pattern 从 sitemap 过滤重提）：
 *   node scripts/indexnow-submit.mjs --host haoweirerecipes.com --key $K \
 *     --from-sitemap public/sitemap.xml --url-pattern "/recipes/"
 *
 * IndexNow 文档：https://www.indexnow.org/
 * 限制：单次最多 10000 URL，POST JSON body
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

// IndexNow 参与搜索引擎端点：api 中心会自动分发至 Bing/Yandex/Seznam，
// 同时显式直推 bing.com 与 yandex.com 以提升确定性收录（幂等、重复无害）。
const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

const args = process.argv.slice(2);
function getArg(name) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : null;
}

const HOST = getArg("host");
const KEY = getArg("key");
const URLS = getArg("urls") ? getArg("urls").split(/\s+/).filter(Boolean) : null;
const FROM_SITEMAP = getArg("from-sitemap");
const PATTERN = getArg("url-pattern");

if (!HOST || !KEY) {
  console.error("用法: node scripts/indexnow-submit.mjs --host X --key Y [--urls 'u1 u2' | --from-sitemap path]");
  process.exit(1);
}

async function loadUrlsFromSitemap() {
  const file = path.isAbsolute(FROM_SITEMAP)
    ? FROM_SITEMAP
    : path.join(ROOT, FROM_SITEMAP);
  const xml = await fs.readFile(file, "utf8");
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (PATTERN) return urls.filter((u) => u.includes(PATTERN));
  return urls;
}

async function submit(urls) {
  if (urls.length === 0) {
    console.log("ℹ️ 无 URL，跳过");
    return;
  }
  // IndexNow 限制单次最多 10000
  const chunks = [];
  for (let i = 0; i < urls.length; i += 10000) {
    chunks.push(urls.slice(i, i + 10000));
  }
  console.log(`📤 提交 ${urls.length} 个 URL 到 ${ENDPOINTS.length} 个搜索引擎（${chunks.length} 批）...`);

  for (const endpoint of ENDPOINTS) {
    const engine = new URL(endpoint).host;
    for (const chunk of chunks) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify({
            host: HOST,
            key: KEY,
            keyLocation: `https://${HOST}/${KEY}.txt`,
            urlList: chunk,
          }),
        });
        if (res.ok || res.status === 200 || res.status === 202) {
          console.log(`   ✅ ${engine}: ${chunk.length} 个 URL -> ${res.status}`);
        } else {
          const text = await res.text();
          console.warn(`   ⚠️ ${engine} 失败 ${res.status}: ${text.slice(0, 200)}`);
        }
      } catch (e) {
        console.warn(`   ⚠️ ${engine} 请求异常: ${e.message}`);
      }
    }
  }
}

async function main() {
  let urls = URLS;
  if (!urls && FROM_SITEMAP) urls = await loadUrlsFromSitemap();
  if (!urls || urls.length === 0) {
    console.log("ℹ️ 无 URL 可提交");
    process.exit(0);
  }
  await submit(urls);
  console.log(`✅ IndexNow 完成：${urls.length} 个 URL 已提交`);
}

main().catch((e) => {
  console.error("💥 IndexNow 失败:", e.message);
  process.exit(1);
});