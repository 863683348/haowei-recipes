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

const base = path.join('src/data/recipes');

for (const f of files) {
  const fp = path.join(base, f + '.ts');
  let content = fs.readFileSync(fp, 'utf8');
  
  // 直接替换所有缺少 signal 的 stateNote 块
  // 匹配 stateNote: { ... } 但不包含 "signal"
  const lines = content.split('\n');
  const newLines = [];
  let inStateNote = false;
  let stateNoteStart = -1;
  let depth = 0;
  let stateNoteLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('"stateNote": {')) {
      inStateNote = true;
      stateNoteStart = i;
      stateNoteLines = [line];
      depth = 1;
      continue;
    }
    
    if (inStateNote) {
      stateNoteLines.push(line);
      // 计算括号深度
      for (const ch of line) {
        if (ch === '{') depth++;
        if (ch === '}') depth--;
      }
      
      if (depth === 0) {
        // 检查是否包含 signal
        const blockText = stateNoteLines.join('\n');
        if (!blockText.includes('"signal"')) {
          // 在最后一个 } 前插入 signal
          const lastLine = stateNoteLines[stateNoteLines.length - 1];
          stateNoteLines[stateNoteLines.length - 1] = lastLine.replace(/\}$/, '        "signal": "状态已稳定",\n        "signalZh": "视觉信号已稳定"\n      }');
        }
        newLines.push(...stateNoteLines);
        inStateNote = false;
        stateNoteStart = -1;
        stateNoteLines = [];
        continue;
      }
    }
    
    if (!inStateNote) {
      newLines.push(line);
    }
  }
  
  const newContent = newLines.join('\n');
  fs.writeFileSync(fp, newContent, 'utf8');
  console.log('Fixed: ' + f);
}
