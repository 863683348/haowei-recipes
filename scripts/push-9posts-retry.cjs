const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const REPO = "C:/worktmp/haowei-git";
const BACKUP = "C:/worktmp/_haowei-backup/index-mine.ts";
const TARGET = REPO + "/src/data/blog/index.ts";
const COV_BACKUP = "C:/worktmp/_haowei-backup/covers";
const COV_OUT = REPO + "/public/images/blog";

const names = [
  "oysterSauceGuide",
  "hoisinVsSweetBeanSauce",
  "homemadeChiliOil",
  "blackVinegarZhenjiangVsShanxi",
  "shaoxingWineBuyingGuide",
  "firmVsSoftTofu",
  "fermentedBeanCurdFuru",
  "woodEarFungusGuide",
  "sesamePasteGuide",
];

function sh(cmd, quiet) {
  try {
    return execSync(cmd, { encoding: "utf8", cwd: REPO, stdio: quiet ? "pipe" : "inherit" });
  } catch (e) {
    return null;
  }
}

function insertPosts() {
  const b = fs.readFileSync(BACKUP, "utf8");
  const blocks = [];
  for (const n of names) {
    const start = b.indexOf("const " + n + ": BlogPost = {");
    if (start === -1) continue;
    const end = b.indexOf("\n};", start);
    if (end === -1) continue;
    blocks.push(b.slice(start, end + 3) + "\n");
  }
  if (blocks.length !== names.length) {
    console.log("提取失败: " + blocks.length + "/" + names.length);
    return false;
  }
  let t = fs.readFileSync(TARGET, "utf8");
  for (const n of names) {
    if (t.includes("const " + n + ":")) {
      console.log("已存在: " + n);
      return false;
    }
  }
  const anchor = "export const blogPosts: BlogPost[] = [";
  const idx = t.indexOf(anchor);
  if (idx === -1) return false;
  t = t.slice(0, idx) + blocks.join("\n") + "\n" + t.slice(idx);
  const ni = t.indexOf(anchor);
  const ei = t.indexOf("];", ni);
  const inner = t.slice(ni + anchor.length, ei);
  t = t.slice(0, ni) + anchor + names.join(", ") + ", " + inner + t.slice(ei);
  fs.writeFileSync(TARGET, t, "utf8");
  return true;
}

function restoreCovers() {
  let n = 0;
  for (const f of fs.readdirSync(COV_BACKUP)) {
    const dest = path.join(COV_OUT, f);
    if (!fs.existsSync(dest)) {
      fs.copyFileSync(path.join(COV_BACKUP, f), dest);
      n++;
    }
  }
  return n;
}

const MAX = 4;
for (let attempt = 1; attempt <= MAX; attempt++) {
  console.log("\n===== 尝试 " + attempt + "/" + MAX + " =====");
  sh("git fetch origin", true);
  sh("git reset --hard origin/main", true);
  console.log("HEAD -> " + sh("git log --oneline -1", true).trim());

  if (!insertPosts()) {
    console.log("插入失败");
    break;
  }
  console.log("9 篇已插入，封面图恢复 " + restoreCovers() + " 张");

  const tsc = sh("node node_modules/typescript/bin/tsc --noEmit", true);
  if (tsc === null) {
    console.log("TSC 失败，输出:");
    console.log(sh("node node_modules/typescript/bin/tsc --noEmit 2>&1 | head -20", true));
    break;
  }
  console.log("TSC 通过");

  sh("git add src/data/blog/index.ts public/images/blog/ scripts/", true);
  const cm = sh(
    'git commit -q -m "feat(blog): add 9 ingredient glossary posts filling date gaps 2026-08-22..08-31"',
    true
  );
  if (cm === null) console.log("commit 无变更或失败");

  const push = sh("git push origin main 2>&1", true);
  if (push !== null && !/rejected|error/i.test(push)) {
    console.log("PUSH 成功");
    console.log(push.trim().split("\n").slice(-3).join("\n"));
    break;
  }
  console.log("PUSH 被拒（远端又更新），重试...");
  if (attempt === MAX) console.log("已达最大重试次数");
}
