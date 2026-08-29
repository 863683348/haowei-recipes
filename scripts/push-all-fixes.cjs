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

// 死链 -> 真实存在的菜谱 slug
const LINK_FIX = {
  "tomato-eggs": "tomato-and-egg",
  "sichuan-green-beans": "dry-fried-green-beans",
  "hong-shao-pork-belly": "hongshao-pork",
  "red-braised-carp": "sweet-sour-fish",
  "braised-beef-brisket": "potato-beef-stew",
  "water-boiled-beef": "shui-zhu-beef",
  "century-egg-tofu": "cold-dressed-dried-tofu",
  "tofu-vegetable-stir-fry": "home-style-tofu",
  "scallion-oil-noodles": "scallion-noodles",
  "dan-dan-noodles": "dan-dan-noodles-chengdu",
  "wonton-noodle-soup": "chicken-broth-noodle-soup",
  "congee-basic": "pidan-shourou-congee",
  "sticky-rice-dumplings": "pearl-meatballs-sticky-rice",
  "cold-noodle-salad": "da-la-pi-jelly-noodle-salad",
  "cucumber-salad": "smashed-cucumber",
  "tofu-cold-appetizer": "cold-dressed-dried-tofu",
  "cold-dressed-cucumber": "smashed-cucumber",
};

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
  let t = fs.readFileSync(TARGET, "utf8");
  let added = 0;
  const existing = names.filter((n) => t.includes("const " + n + ":"));
  if (existing.length === names.length) return 0;
  const need = blocks.filter((bl, i) => !t.includes("const " + names[i] + ":"));
  if (need.length) {
    const anchor = "export const blogPosts: BlogPost[] = [";
    const idx = t.indexOf(anchor);
    if (idx === -1) return -1;
    t = t.slice(0, idx) + need.join("\n") + "\n" + t.slice(idx);
    const ni = t.indexOf(anchor);
    const ei = t.indexOf("];", ni);
    const inner = t.slice(ni + anchor.length, ei);
    const addNames = names.filter((n) => !t.includes("const " + n + ":"));
    t = t.slice(0, ni) + anchor + addNames.join(", ") + ", " + inner + t.slice(ei);
    added = need.length;
  }
  fs.writeFileSync(TARGET, t, "utf8");
  return added;
}

function fixDeadLinks() {
  let t = fs.readFileSync(TARGET, "utf8");
  let n = 0;
  for (const [bad, good] of Object.entries(LINK_FIX)) {
    const from = '"' + bad + '"';
    const to = '"' + good + '"';
    if (t.includes(from)) {
      const count = t.split(from).length - 1;
      t = t.split(from).join(to);
      n += count;
    }
  }
  fs.writeFileSync(TARGET, t, "utf8");
  return n;
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

  const added = insertPosts();
  if (added === -1) {
    console.log("插入失败");
    break;
  }
  console.log("插入 9 篇: " + added + " 篇新增");
  const fixed = fixDeadLinks();
  console.log("死链修复: " + fixed + " 处");
  console.log("封面图恢复: " + restoreCovers() + " 张");

  const tsc = sh("node node_modules/typescript/bin/tsc --noEmit", true);
  if (tsc === null) {
    console.log("TSC 失败:");
    console.log(sh("node node_modules/typescript/bin/tsc --noEmit 2>&1 | head -20", true));
    break;
  }
  console.log("TSC 通过");

  sh("git add src/data/blog/index.ts public/images/blog/ scripts/", true);
  sh(
    'git commit -q -m "feat(blog): add 9 ingredient glossary posts (fill 2026-08-22..08-31 gaps) + fix 17 dead recipe links"',
    true
  );

  const push = sh("git push origin main 2>&1", true);
  if (push !== null && !/rejected|error/i.test(push)) {
    console.log("PUSH 成功");
    console.log(push.trim().split("\n").slice(-3).join("\n"));
    break;
  }
  console.log("PUSH 被拒（远端又更新），重试...");
  if (attempt === MAX) console.log("已达最大重试次数");
}
