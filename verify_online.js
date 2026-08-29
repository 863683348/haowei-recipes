const fs = require("fs");
function check(f) {
  const h = fs.readFileSync(f, "utf8");
  const has = (s) => h.includes(s);
  const cards = (h.match(/\/zh\/recipes\/[a-z0-9-]+/g) || []).length;
  console.log("\n=== " + f + " ===");
  console.log("搜索框 搜索… :", has("搜索…"));
  console.log("标题 全部菜谱 :", has("全部菜谱"));
  console.log("共 289 道    :", has("共 289 道"));
  const m = h.match(/第 \d+ \/ \d+ 页/);
  console.log("分页标识     :", m ? m[0] : "NOT FOUND");
  console.log("卡片链接数   :", cards);
}
check(process.argv[2]);
check(process.argv[3]);
