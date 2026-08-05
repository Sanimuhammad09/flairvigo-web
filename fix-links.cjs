const fs = require('fs');

const files = [
  'src/routes/_store/best-sellers.tsx',
  'src/routes/_store/men.tsx',
  'src/routes/_store/new-arrivals.tsx',
  'src/routes/_store/outerwear.tsx',
  'src/routes/_store/women.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Add Link import if it doesn't exist
  if (!content.includes('Link } from \'@tanstack/react-router\'')) {
    if (content.includes('import { createFileRoute } from \'@tanstack/react-router\'')) {
       content = content.replace('import { createFileRoute } from \'@tanstack/react-router\'', 'import { createFileRoute, Link } from \'@tanstack/react-router\'');
    }
  }

  // For <article>
  if (content.includes('<article className="group cursor-pointer')) {
    content = content.replace(/<article className="group cursor-pointer/g, '<Link to="/product/1" className="group cursor-pointer block');
    content = content.replace(/<\/article>/g, '</Link>');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
