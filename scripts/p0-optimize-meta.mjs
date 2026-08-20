// P0: Optimize meta for top-ranking recipes (low position, zero clicks)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RECIPES_DIR = path.join(__dirname, '../src/data/recipes');
const INDEX_FILE = path.join(RECIPES_DIR, 'index.ts');

// Top pages from GSC (rank, impressions, zero clicks)
const OPTIMIZATIONS = {
  // rank 8.14 - BEST opportunity! "菠萝炒饭"
  'pineapple-fried-rice': {
    titleEn: 'Thai-Style Pineapple Fried Rice Recipe | 20-Min Chinese Street Food',
    titleZh: '泰式菠萝炒饭（菠萝炒饭）—— 20分钟中式街头美食',
  },
  // rank 15.71
  'cucumber-scrambled-eggs': {
    titleEn: 'Cucumber Scrambled Eggs Recipe | Quick 15-Min Chinese Home Cooking',
    titleZh: '黄瓜炒蛋（黄瓜炒蛋）—— 15分钟快手家常菜',
  },
  // rank 53.83 - needs keyword boost
  'garlic-chives-scrambled-eggs': {
    titleEn: 'Garlic Chives Scrambled Eggs Recipe | Chinese Scrambled Eggs with Chives',
    titleZh: '蒜蓉韭菜炒蛋（蒜蓉韭菜炒蛋）—— 经典中式炒蛋',
  },
};

let updates = 0;
Object.entries(OPTIMIZATIONS).forEach(([slug, config]) => {
  const filePath = path.join(RECIPES_DIR, `${slug}.ts`);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${slug} not found`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /"titleEn":\s*"[^"]+"/,
    `"titleEn": "${config.titleEn}"`
  );
  content = content.replace(
    /"titleZh":\s*"[^"]+"/,
    `"titleZh": "${config.titleZh}"`
  );
  fs.writeFileSync(filePath, content);
  console.log(`✅ Updated: ${slug}`);
  updates++;
});

console.log(`\n${updates}/${Object.keys(OPTIMIZATIONS).length} recipes updated`);
console.log('Commit: git add -A && git commit -m "P0: optimize meta for top-ranking recipes" && git push');
