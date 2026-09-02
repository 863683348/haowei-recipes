const fs = require('fs');
const path = require('path');

const recipes = JSON.parse(fs.readFileSync('.workbuddy/kb-upload/2026-08-30/day82-recipes.json', 'utf8'));

// Add id field to each recipe
for (const r of recipes) {
  if (!r.id) {
    r.id = r.slug;
  }
  // Add signal to stateNote
  if (r.steps) {
    for (const step of r.steps) {
      if (step.stateNote && !step.stateNote.signal) {
        step.stateNote.signal = '状态已稳定';
        step.stateNote.signalZh = '视觉信号已稳定';
      }
    }
  }
}

fs.writeFileSync('.workbuddy/kb-upload/2026-08-30/day82-recipes.json', JSON.stringify(recipes, null, 2), 'utf8');
console.log('Fixed ' + recipes.length + ' recipes');
