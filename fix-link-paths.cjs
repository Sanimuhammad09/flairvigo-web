const fs = require('fs');

const files = [
  'src/routes/_store/best-sellers.tsx',
  'src/routes/_store/men.tsx',
  'src/routes/_store/new-arrivals.tsx',
  'src/routes/_store/outerwear.tsx',
  'src/routes/_store/women.tsx',
  'src/routes/_store/jewelry.tsx',
  'src/routes/_store/product.$id.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('to="/product/1"')) {
    content = content.replace(/to="\/product\/1"/g, 'to="/product/$id" params={{ id: \'1\' }}');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
