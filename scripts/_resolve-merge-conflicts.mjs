/**
 * 批量解决 merge 冲突：
 * 四个菜（winter-melon-soup, twice-cooked-pork, yangchun-noodles, vinegar-cabbage）
 * 冲突类型：HEAD 改了 image 字段引号 vs origin/main 新增 Day 9 内容
 * 策略：保留 origin/main 的新内容，确保 image 字段指向 .svg（HEAD 已修正）
 */
import { promises as fs } from "node:fs";
import path from "node:path";

const DATA_DIR = "src/data/recipes";

async function resolveConflict(filePath) {
  let content = await fs.readFile(path.join(DATA_DIR, filePath), "utf8");

  // 去掉所有冲突标记，保留 ====== 分隔的内容
  // 策略：保留 "===== " 之后的 origin/main 内容，但确保 image 字段正确
  const lines = content.split("\n");
  const resolved = [];
  let inConflict = false;

  for (const line of lines) {
    if (line.startsWith("<<<<<<< HEAD")) { inConflict = true; continue; }
    if (line.startsWith("=======")) { inConflict = false; continue; }
    if (line.startsWith(">>>>>>> origin/main")) { continue; }
    resolved.push(line);
  }

  // 现在 resolved 里包含了 HEAD 和 origin/main 的所有内容
  // 对于 yangchun-noodles 和 vinegar-cabbage，需要保留 HEAD 的 tips/relatedSlugs
  // 但去掉 HEAD 的 image 行（origin/main 已有）

  // 重新解析并构建正确版本
  const text = resolved.join("\n");

  // 提取 image 行（来自 HEAD）
  const imgMatch = content.match(/<<<<<<< HEAD[\s\S]*?image:\s*"([^"]+)"/);
  const headImage = imgMatch ? `  image: "${imgMatch[1]}",` : null;

  // 从 origin/main 内容中提取 tips/relatedSlugs（HEAD 特有的）
  // HEAD 格式：  tips: [...], tipsZh: [...], relatedSlugs: [...]
  const headTipsMatch = content.match(/<<<<<<< HEAD[\s\S]*?(?:relatedSlugs:\s*\[([^\]]+)\])?[\s\S]*?image:.*?>>>>>>>/);

  // 重新构建：保留 origin/main 的完整内容，替换 image 字段
  const originParts = content.split("=======");
  const originContent = originParts[1]; // origin/main 部分

  // 将 origin/main 内容的 image 字段替换为 HEAD 的
  if (headImage) {
    const final = originContent.replace(/"image":\s*"[^"]+"/, headImage.replace(": ", ": ").replace(/^  image:/, '  "image"'));
    await fs.writeFile(path.join(DATA_DIR, filePath), final, "utf8");
    console.log("FIXED", filePath);
  } else {
    // 直接保留 origin/main
    await fs.writeFile(path.join(DATA_DIR, filePath), originContent, "utf8");
    console.log("APPLIED ORIGIN", filePath);
  }
}

async function main() {
  const files = ["winter-melon-soup.ts", "twice-cooked-pork.ts", "yangchun-noodles.ts", "vinegar-cabbage.ts"];
  for (const f of files) {
    await resolveConflict(f);
  }
}

main().catch(console.error);
