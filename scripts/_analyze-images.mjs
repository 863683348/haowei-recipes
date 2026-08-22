import { promises as fs } from "node:fs";
import path from "node:path";

const dir = "src/data/recipes";
const imgDir = "public/images/recipes";
const files = (await fs.readdir(dir)).filter((f) => f.endsWith(".ts") && f !== "index.ts");
const existing = new Set(await fs.readdir(imgDir));

let rows = [];
for (const f of files) {
  const content = await fs.readFile(path.join(dir, f), "utf8");
  // 兼容 "image": "..." 与 image: "..." 两种格式
  const m = content.match(/(["']?)image\1\s*:\s*"([^"]+)"/);
  const slug = f.replace(/\.ts$/, "");
  const ref = m ? m[2] : null;
  const base = ref ? ref.split("/").pop() : null;
  const ok = base ? existing.has(base) : false;
  const realPhoto = base ? /\.(webp|png|jpe?g)$/i.test(base) : false;
  rows.push({ slug, ref, ok, realPhoto });
}
const missing = rows.filter((r) => !r.ok);
console.log("总菜谱:", rows.length, "| 引用文件存在:", rows.filter((r) => r.ok).length, "| 缺图:", missing.length);
console.log("\n--- 缺图清单 ---");
for (const r of missing) console.log("  " + r.slug.padEnd(28) + " ref=" + r.ref);
console.log("\n--- 有正确引用 ---");
for (const r of rows.filter((r) => r.ok)) console.log("  " + r.slug.padEnd(28) + " ref=" + r.ref);
