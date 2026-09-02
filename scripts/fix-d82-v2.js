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
  
  // 使用正则替换所有缺少 signal 的 stateNote 块
  // 匹配 stateNote: { ... } 但不包含 "signal"
  const newStateNotes = content.replace(/stateNote:\s*\{([^}]*)\}/g, (match, inner) => {
    if (inner.includes('"signal"')) {
      return match;
    }
    // 在最后一个 } 前插入 signal 字段
    return match.replace(/\}$/, '        signal: "状态已稳定",\n        signalZh: "视觉信号已稳定"\n      }');
  });
  
  fs.writeFileSync(fp, newStateNotes, 'utf8');
  console.log('Fixed: ' + f);
}
