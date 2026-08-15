import { promises as fs } from "node:fs";
const key = (await fs.readFile("C:/Users/l'x/.workbuddy/secrets/jimeng-api-key.txt", "utf8")).trim();

// 1) 试列推理接入点（多种可能路径）
for (const p of [
  "https://ark.cn-beijing.volces.com/api/v3/endpoints",
  "https://ark.cn-beijing.volces.com/api/v3/endpoints",
  "https://visual.volcengine.com/api/v3/endpoints",
]) {
  try {
    const r = await fetch(p, { headers: { Authorization: "Bearer " + key } });
    const t = await r.text();
    console.log(`### GET ${p} => ${r.status}`);
    console.log(t.slice(0, 600));
  } catch (e) { console.log("ERR", p, e.message); }
}

// 2) 用假 model 打一次生图接口，看报错提示
try {
  const r = await fetch("https://ark.cn-beijing.volces.com/api/v3/images/generations", {
    method: "POST",
    headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "__probe__", prompt: "test", n: 1, size: "1024x1024" }),
  });
  const t = await r.text();
  console.log(`### POST images/generations (dummy model) => ${r.status}`);
  console.log(t.slice(0, 800));
} catch (e) { console.log("ERR image gen", e.message); }
