const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
let files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'contentHelper.js');

// Load railwayLists.js first if it exists
if (files.includes('railwayLists.js')) {
  files = ['railwayLists.js', ...files.filter(f => f !== 'railwayLists.js')];
}

console.log('Validating files in:', dataDir);

global.window = {
  GA_HELPERS: {
    topic: (title, desc, body, extras) => ({ title, desc, body, extras }),
    table: (headers, rows) => ({ headers, rows }),
    h2: (text) => `<h2>${text}</h2>`,
    h3: (text) => `<h3>${text}</h3>`,
    p: (text) => `<p>${text}</p>`,
    ul: (items) => `<ul>${items.join('')}</ul>`,
    ol: (items) => `<ol>${items.join('')}</ol>`
  },
  GA_DATA: {}
};

for (const file of files) {
  try {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
    // Simple evaluation to check for syntax errors
    eval(content);
    console.log(`✅ ${file} loaded successfully.`);
  } catch (err) {
    console.error(`❌ Error in ${file}:`, err.stack);
  }
}
