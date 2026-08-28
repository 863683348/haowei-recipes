/**
 * 菜谱完整度审计（运行时对象级，绕开正则坑）
 * 输出：
 *   - 每道菜：字段缺失、steps 数、占位内容检测、titleZh 冗余
 *   - 汇总：空壳清单（steps<4 或占位 ingredient）、缺 story/tips 清单、titleZh 冗余清单
 * 运行：node --experimental-strip-types --experimental-loader ./scripts/audit-recipes-loader.mjs scripts/audit-recipes.mjs
 */
import { recipes } from "../src/data/recipes/index.ts";

const SHELL_ING = ["main ingredient", "seasoning", "oil", "食用油", "主料", "调味料"];
const SHELL_STORY = [
  "A classic Chinese home dish.",
  "A classic Chinese dish.",
  "Classic Chinese home cooking.",
  "经典中国家常菜。",
  "经典中国菜。",
  "经典中式家常菜。",
];
const TITLE_ZH_REDUNDANT = /——|（[^）]*）|\([^)]*\)/;

const report = [];
const shells = [];
const missingStory = [];
const missingTips = [];
const titleZhIssues = [];
const stepIssues = [];

for (const r of recipes) {
  const issues = [];
  const slug = r.slug;

  // --- steps ---
  const steps = r.steps ?? [];
  const hasStateNote = steps.some((s) => s.stateNote);
  const hasZhHint = steps.some((s) => s.zhHint);
  if (steps.length === 0) issues.push("NO_STEPS");
  else if (steps.length < 4) issues.push(`STEPS_${steps.length}`);
  if (!hasStateNote) issues.push("NO_STATE_NOTE");
  if (!hasZhHint) issues.push("NO_ZH_HINT");

  // --- ingredients 占位 ---
  const ingNames = r.ingredients?.map((i) => (i.nameEn || "").trim()) ?? [];
  const shellIngCount = ingNames.filter((n) => SHELL_ING.includes(n)).length;
  if (shellIngCount > 0) issues.push(`SHELL_ING_${shellIngCount}`);
  const noTermKey = r.ingredients?.filter((i) => i.category === "asian-pantry" && !i.termKey);
  if (noTermKey?.length > 0) issues.push(`ASIAN_NO_TERMKEY_${noTermKey.length}`);

  // --- story / tips ---
  const story = (r.story || "").trim();
  const storyZh = (r.storyZh || "").trim();
  if (!story) issues.push("NO_STORY");
  else if (SHELL_STORY.includes(story)) issues.push("SHELL_STORY");
  if (!storyZh) issues.push("NO_STORY_ZH");
  else if (SHELL_STORY.includes(storyZh)) issues.push("SHELL_STORY_ZH");

  const tips = r.tips ?? [];
  const tipsZh = r.tipsZh ?? [];
  if (tips.length === 0) issues.push("NO_TIPS");
  if (tipsZh.length === 0) issues.push("NO_TIPS_ZH");

  // --- relatedSlugs / versionNote ---
  if (!r.relatedSlugs || r.relatedSlugs.length === 0) issues.push("NO_RELATED");
  if (!r.versionNote) issues.push("NO_VERSION_NOTE");

  // --- titleZh 冗余 ---
  if (r.titleZh && TITLE_ZH_REDUNDANT.test(r.titleZh)) {
    issues.push("TITLEZH_REDUNDANT");
    titleZhIssues.push({ slug, titleZh: r.titleZh });
  }

  const isShell =
    steps.length < 4 ||
    shellIngCount >= 2 ||
    SHELL_STORY.includes(story) ||
    SHELL_STORY.includes(storyZh);

  if (isShell) shells.push({ slug, titleZh: r.titleZh, steps: steps.length, issues });
  if (!story || SHELL_STORY.includes(story) || !storyZh || SHELL_STORY.includes(storyZh))
    missingStory.push({ slug, titleZh: r.titleZh });
  if (tips.length === 0 || tipsZh.length === 0)
    missingTips.push({ slug, titleZh: r.titleZh, tips, tipsZh });
  if (steps.some((s) => !s.textZh)) stepIssues.push({ slug, msg: "step missing textZh" });

  report.push({ slug, titleZh: r.titleZh, steps: steps.length, issues });
}

console.log("=== 汇总 ===");
console.log(`总菜谱数: ${recipes.length}`);
console.log(`空壳(需彻底补齐): ${shells.length}`);
console.log(`story 缺失/占位: ${missingStory.length}`);
console.log(`tips/tipsZh 缺失: ${missingTips.length}`);
console.log(`titleZh 冗余: ${titleZhIssues.length}`);
console.log(`step 缺 textZh: ${stepIssues.length}`);

console.log("\n=== 空壳清单（steps<4 或占位食材/故事）===");
for (const s of shells) console.log(`- ${s.slug} [${s.titleZh}] steps=${s.steps} :: ${s.issues.join(",")}`);

console.log("\n=== 非空壳但有缺失 ===");
for (const r of report) {
  if (!shells.some((s) => s.slug === r.slug) && r.issues.length > 0)
    console.log(`- ${r.slug} [${r.titleZh}] :: ${r.issues.join(",")}`);
}

console.log("\n=== titleZh 冗余详情 ===");
for (const t of titleZhIssues) console.log(`- ${t.slug}: "${t.titleZh}"`);
