const fs = require('fs');
const fp = 'src/data/recipes/index.ts';
let content = fs.readFileSync(fp, 'utf8');

// 删除import行
const badImports = [
  'tomato_beef_brisket',
  'daikon_beef_brisket',
  'clear_broth_daikon_beef',
  'tomato_beef_noodles',
  'red_wine_beef_brisket',
  'chu_hou_sauce_beef',
  'curry_beef_brisket',
  'tofu_skin_beef_casserole',
  'shacha_beef_brisket'
];

for (const name of badImports) {
  content = content.replace(new RegExp(`import \{ ${name} \} from "\.\/[^"]+";\n?`, 'g'), '');
}

// 删除数组中的项
for (const name of badImports) {
  content = content.replace(new RegExp(`  ${name},\n?`, 'g'), '');
}

fs.writeFileSync(fp, content, 'utf8');
console.log('Cleaned index.ts');
