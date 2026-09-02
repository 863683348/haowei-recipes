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
  
  const result = [];
  let i = 0;
  while (i < content.length) {
    const idx = content.indexOf('stateNote:', i);
    if (idx === -1) {
      result.push(content.slice(i));
      break;
    }
    
    result.push(content.slice(i, idx));
    
    const start = content.indexOf('{', idx);
    let depth = 0;
    let j = start;
    while (j < content.length) {
      if (content[j] === '{') depth++;
      else if (content[j] === '}') {
        depth--;
        if (depth === 0) break;
      }
      j++;
    }
    
    let block = content.slice(start, j + 1);
    if (!block.includes('"signal"')) {
      block = block.slice(0, -1) + '        signal: "状态已稳定",\n        signalZh: "视觉信号已稳定"\n      }';
    }
    
    result.push(block);
    i = j + 1;
  }
  
  const newContent = result.join('');
  fs.writeFileSync(fp, newContent, 'utf8');
  console.log('Fixed: ' + f);
}
