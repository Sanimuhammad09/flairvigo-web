const fs = require('fs');

const files = [
  'src/routes/_store/jewelry.tsx',
  'src/routes/_store/product.$id.tsx'
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

  // We know the structure for these two files: 
  // <div className="group cursor-pointer">
  // ...
  // </div> (the matching one)
  
  if (content.includes('<div className="group cursor-pointer"')) {
    content = content.replace(/<div className="group cursor-pointer"/g, '<Link to="/product/1" className="group cursor-pointer block"');
    
    // We need to replace only the closing </div> of these specific product cards.
    // In jewelry.tsx:
    content = content.replace(/<\/span>\n            <\/div>\n          <\/div>/g, '</span>\n            </div>\n          </Link>');
    
    // In product.$id.tsx:
    content = content.replace(/<\/span>\n            <\/div>\n          <\/div>/g, '</span>\n            </div>\n          </Link>');
    
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
