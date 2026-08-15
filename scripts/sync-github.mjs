#!/usr/bin/env node
/**
 * Layer 3 · 发布层 · 用 GitHub Git Database API 推送文件（绕过本机含单引号路径 git 易损坏坑）
 *
 * 用法：
 *   node scripts/sync-github.mjs \
 *     --owner 863683348 \
 *     --repo haoweirecipes \
 *     --branch main \
 *     --token $GH_TOKEN \
 *     --message "auto: daily recipes batch"
 *
 * 行为：
 *   1. `git status` 拿到所有变更文件
 *   2. 对每个文件：GET 当前 blob SHA → PUT 新内容 → 创建 tree → 创建 commit → 更新 ref
 *   3. 失败：保留本地分支 autopipe/day-N，下次 cron 重试
 *
 * 输出：写入 GITHUB_OUTPUT new_urls=... (空格分隔的 URL 列表，给 indexnow-submit.mjs 用)
 *
 * 参考：https://docs.github.com/en/rest/git
 */

import { execFileSync } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const args = process.argv.slice(2);
function getArg(name) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : null;
}

const OWNER = getArg("owner");
const REPO = getArg("repo");
const BRANCH = getArg("branch") || "main";
const TOKEN = getArg("token");
const MESSAGE = getArg("message") || "auto: update";
const DRY_RUN = args.includes("--dry-run");

if (!OWNER || !REPO || !TOKEN) {
  console.error("用法: node scripts/sync-github.mjs --owner X --repo Y --branch main --token $T --message M");
  process.exit(1);
}

const GH_API = "https://api.github.com";
const authHeaders = {
  Authorization: `token ${TOKEN}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "haowei-autopipe/1.0",
};

function setGHOutput(key, value) {
  const f = process.env.GITHUB_OUTPUT;
  if (f) {
    fs.appendFile(f, `${key}<<EOF\n${value}\nEOF\n`).catch(() => {});
  }
}

async function gh(method, url, body) {
  const res = await fetch(`${GH_API}${url}`, {
    method,
    headers: { ...authHeaders, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${method} ${url} → ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json();
}

/* ---------- 1. 拿到所有变更文件 ---------- */
function getChangedFiles() {
  // 用 git CLI（这里在 GitHub Actions 容器里，路径干净）
  const status = execFileSync("git", ["status", "--short"], { cwd: ROOT, encoding: "utf8" });
  const files = [];
  for (const line of status.split("\n")) {
    if (!line.trim()) continue;
    // 格式: "XY filename" 或 "XY old → new"
    const m = line.match(/^(.{2})\s+(.+?)(?:\s+->\s+.+)?$/);
    if (!m) continue;
    const xy = m[1];
    const f = m[2].trim();
    // 只关心非删除的变更
    if (xy.includes("D")) continue;
    files.push(f);
  }
  return files;
}

/* ---------- 2. 拿到当前分支 SHA + base tree ---------- */
async function getRef() {
  const data = await gh("GET", `/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`);
  return data.object.sha;
}

async function getCommit(sha) {
  return gh("GET", `/repos/${OWNER}/${REPO}/git/commits/${sha}`);
}

/* ---------- 3. 为每个文件创建 blob ---------- */
async function createBlob(content) {
  // content 用 base64 编码（GitHub API 接收 utf-8 也行，但 base64 更稳）
  const data = await gh("POST", `/repos/${OWNER}/${REPO}/git/blobs`, {
    content,
    encoding: "utf-8",
  });
  return data.sha;
}

async function readFileContent(file) {
  const buf = await fs.readFile(path.join(ROOT, file));
  return buf.toString("utf8");
}

/* ---------- 4. 创建 tree ---------- */
async function createTree(baseTreeSha, items) {
  const data = await gh("POST", `/repos/${OWNER}/${REPO}/git/trees`, {
    base_tree: baseTreeSha,
    tree: items.map((it) => ({
      path: it.path,
      mode: "100644",
      type: "blob",
      sha: it.sha,
    })),
  });
  return data.sha;
}

/* ---------- 5. 创建 commit ---------- */
async function createCommit(treeSha, parentSha, message) {
  const data = await gh("POST", `/repos/${OWNER}/${REPO}/git/commits`, {
    message,
    tree: treeSha,
    parents: [parentSha],
  });
  return data.sha;
}

/* ---------- 6. 更新 ref ---------- */
async function updateRef(newCommitSha) {
  return gh("PATCH", `/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, {
    sha: newCommitSha,
  });
}

/* ---------- main ---------- */
async function main() {
  const changed = getChangedFiles();
  if (changed.length === 0) {
    console.log("✅ 无变更，无需推送");
    setGHOutput("result", "noop");
    setGHOutput("new_urls", "");
    return;
  }
  console.log(`📦 发现 ${changed.length} 个变更文件：`);
  for (const f of changed) console.log(`   - ${f}`);

  // 过滤：只同步 src/data/recipes/ 和 public/images/recipes/
  const relevant = changed.filter(
    (f) =>
      f.startsWith("src/data/recipes/") ||
      f.startsWith("public/images/recipes/") ||
      f === "src/data/recipes/index.ts"
  );
  if (relevant.length === 0) {
    console.log("ℹ️ 变更均不在 recipes/images，跳过");
    setGHOutput("result", "noop");
    setGHOutput("new_urls", "");
    return;
  }

  const newUrls = [];
  for (const f of relevant) {
    const m = f.match(/^src\/data\/recipes\/(.+)\.ts$/);
    if (m && m[1] !== "index") {
      const slug = m[1];
      newUrls.push(`https://haoweirecipes.com/en/recipes/${slug}`);
      newUrls.push(`https://haoweirecipes.com/zh/recipes/${slug}`);
    }
  }

  if (DRY_RUN) {
    console.log(`📝 dry-run: 将推送 ${relevant.length} 个文件，新 URL ${newUrls.length} 个`);
    setGHOutput("result", "dry-run");
    setGHOutput("new_urls", newUrls.join(" "));
    return;
  }

  // 拿 base
  const baseCommitSha = await getRef();
  const baseCommit = await getCommit(baseCommitSha);
  console.log(`📍 base: ${baseCommitSha.slice(0, 7)}`);

  // 创建 blobs
  const items = [];
  for (const f of relevant) {
    const content = await readFileContent(f);
    const sha = await createBlob(content);
    items.push({ path: f, sha });
    console.log(`   ✅ blob: ${f} (${sha.slice(0, 7)})`);
  }

  // tree
  const treeSha = await createTree(baseCommit.tree.sha, items);
  console.log(`🌳 tree: ${treeSha.slice(0, 7)}`);

  // commit
  const commitSha = await createCommit(treeSha, baseCommitSha, MESSAGE);
  console.log(`📝 commit: ${commitSha.slice(0, 7)} — ${MESSAGE}`);

  // update ref
  await updateRef(commitSha);
  console.log(`🚀 ref updated: ${BRANCH} → ${commitSha.slice(0, 7)}`);

  setGHOutput("result", "ok");
  setGHOutput("new_urls", newUrls.join(" "));
  setGHOutput("commit_sha", commitSha);
}

main().catch((e) => {
  console.error("💥 sync-github 失败:", e.message);
  setGHOutput("result", "error");
  setGHOutput("new_urls", "");
  process.exit(1);
});