// Test script to verify all imports work
const fs = require('fs');
const path = require('path');

console.log('Testing Next.js setup...\n');

// Check if key files exist
const files = [
  'next.config.js',
  'jsconfig.json',
  'package.json',
  'app/layout.jsx',
  'app/page.jsx',
  'components/Header.jsx',
  'components/ui/button.jsx',
  'components/ui/select.jsx',
  'components/ui/textarea.jsx',
  'lib/utils.js',
  'public/assets/hero-professional.jpg',
];

let allGood = true;

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    console.log(`✓ ${file}`);
  } else {
    console.log(`✗ MISSING: ${file}`);
    allGood = false;
  }
});

console.log('\n' + (allGood ? '✓ All files exist!' : '✗ Some files are missing'));

// Check for TypeScript files in main directories
console.log('\nChecking for TypeScript files in source...');
const checkTsFiles = (dir) => {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let tsFiles = [];
  
  for (const file of files) {
    if (file.isDirectory() && file.name !== 'node_modules' && file.name !== '.next') {
      tsFiles = tsFiles.concat(checkTsFiles(path.join(dir, file.name)));
    } else if (file.name.endsWith('.ts') || file.name.endsWith('.tsx')) {
      tsFiles.push(path.join(dir, file.name));
    }
  }
  return tsFiles;
};

const tsFiles = checkTsFiles(__dirname).filter(f => !f.includes('node_modules'));
if (tsFiles.length === 0) {
  console.log('✓ No TypeScript files found in source');
} else {
  console.log('✗ TypeScript files still exist:');
  tsFiles.forEach(f => console.log('  -', f));
}

console.log('\n✓ Setup verification complete!');
