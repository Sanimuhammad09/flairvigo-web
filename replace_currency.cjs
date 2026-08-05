const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace $ followed by a digit with ₦ followed by the digit
    content = content.replace(/\$([0-9])/g, '₦$1');
    // Replace USD with NGN
    content = content.replace(/USD/g, 'NGN');
    // Replace USD ($) with NGN (₦) which might have become NGN ($) because of the first rule. Let's just fix it.
    // Wait, the first rule only matches $ followed by digit.
    // So "USD ($)" -> "NGN ($)". I should fix the ($) to (₦)
    content = content.replace(/NGN \(\$\)/g, 'NGN (₦)');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
