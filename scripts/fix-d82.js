const fs = require('fs');
const path = require('path');

const files = [
  'tomato-beef-brisket',
  'daikon-beef-brisket',
  'clear-broth-daikon-beef',
  'tomato-beef-noodles',
  'red-wine-beef-brisket',
  'chu-hou-sauce-beef',
  'curry-beef-brisket',
  'tofu-skin-beef-casserole',
  'shacha-beef-brisket'
];

for (const f of files) {
  const fp = path.join('src/data/recipes', f + '.ts');
  let content = fs.readFileSync(fp, 'utf8');
  
  // 1. 添加 id 字段（插入到 export const 行之后）
  const match = content.match(/export const \w+: Recipe = \{/);
  if (match) {
    const idx = content.indexOf(match[0]) + match[0].length;
    content = content.slice(0, idx) + '\n  id: "' + f + '",' + content.slice(idx);
  }
  
  // 2. 为每个 stateNote 块补充缺失的 signal
  const lines = content.split('\n');
  const newLines = [];
  let i = 0;
  while (i < lines.length) {
    newLines.push(lines[i]);
    if (lines[i].includes('stateNote:')) {
      // 找到 stateNote 块的结束 }
      let depth = 0;
      let startIdx = i;
      for (let j = i; j < lines.length; j++) {
        if (lines[j].includes('{')) depth++;
        if (lines[j].includes('}')) depth--;
        if (depth === 0) {
          const block = lines.slice(startIdx, j + 1).join('\n');
          if (!block.includes('"signal"')) {
            // 在 visualZh 后插入 signal
            const linesInBlock = lines.slice(startIdx, j + 1);
            const visualZhIdx = linesInBlock.findIndex(l => l.includes('"visualZh"'));
            if (visualZhIdx >= 0) {
              // 在 visualZh 行后插入 signal
              linesInBlock.splice(visualZhIdx + 1, 0, '        signal: "状态已稳定",');
              linesInBlock.splice(visualZhIdx + 2, 0, '        signalZh: "视觉信号已稳定",');
              // 更新 newLines
              for (let k = startIdx; k <= j; k++) {
                newLines[k] = linesInBlock[k - startIdx];
              }
            }
          }
          i = j; // 跳到块结束
          break;
        }
      }
    }
    i++;
  }
  
  fs.writeFileSync(fp, newLines.join('\n'), 'utf8');
  console.log('Fixed: ' + f);
}
