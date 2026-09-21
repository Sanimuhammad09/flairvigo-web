const fs = require('fs');

function replace(file, find, repl) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(find, repl);
  fs.writeFileSync(file, content);
}

// 1. src/routes/_store/account.tsx
let account = fs.readFileSync('src/routes/_store/account.tsx', 'utf8');
account = account.replace(/Array\.isArray\(orders\)\s*\?\s*orders\s*:\s*orders\.data\s*\|\|\s*\[\]/g, 'orders || []');
account = account.replace(/Array\.isArray\(orders\.data\)\s*\?\s*orders\.data\s*:\s*orders\.data\.data/g, 'orders || []');
account = account.replace(/response\.data\.data/g, 'orders || []');
account = account.replace(/response\.data/g, 'orders || []');
account = account.replace(/orders\.data\s*\|\|\s*orders/g, 'orders || []');
account = account.replace(/orders\.data\.length/g, 'orders.length');
fs.writeFileSync('src/routes/_store/account.tsx', account);

// 2. src/routes/_store/bulk-orders.tsx
replace('src/routes/_store/bulk-orders.tsx', /import \{ supabase \} from '..\/..\/lib\/supabase';\n/g, '');

// 3. src/routes/_store/index.tsx
let idx = fs.readFileSync('src/routes/_store/index.tsx', 'utf8');
idx = idx.replace(/storeSettings\.homepageBanners\.length/g, '(storeSettings?.homepageBanners?.length || 0)');
idx = idx.replace(/storeSettings\.banner_settings/g, '(storeSettings as any)?.banner_settings');
idx = idx.replace(/product\.data\.image_url/g, 'product.image_url');
idx = idx.replace(/product\.data\.name/g, 'product.name');
idx = idx.replace(/product\.data\?/g, 'product?');
fs.writeFileSync('src/routes/_store/index.tsx', idx);

// 4. src/routes/_store/product.$id.tsx
let prodId = fs.readFileSync('src/routes/_store/product.$id.tsx', 'utf8');
prodId = prodId.replace(/const email = .*?\n/g, '');
prodId = prodId.replace(/to={`\/product\/\${related\.id}`}/g, 'to="/product/$id" params={{ id: related.id }}');
fs.writeFileSync('src/routes/_store/product.$id.tsx', prodId);

// 5. src/routes/_store/wishlist.tsx
let wish = fs.readFileSync('src/routes/_store/wishlist.tsx', 'utf8');
wish = wish.replace(/import \{ supabase \} from '..\/..\/lib\/supabase';\n/g, '');
wish = wish.replace(/const variantId = .*?\n/g, '');
wish = wish.replace(/item\.data\.name/g, '(item as any).name');
wish = wish.replace(/item\.data\.image_url/g, '(item as any).image_url');
wish = wish.replace(/item\.data\.price/g, '(item as any).price');
wish = wish.replace(/item\.data\./g, '(item as any).');
fs.writeFileSync('src/routes/_store/wishlist.tsx', wish);

// 6. admin lengths
['src/routes/admin/customers.tsx', 'src/routes/admin/index.tsx', 'src/routes/admin/inventory.tsx', 'src/routes/admin/marketing.tsx', 'src/routes/admin/orders.tsx'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/users\.length/g, '(users || []).length');
  c = c.replace(/users\.map/g, '(users || []).map');
  c = c.replace(/recentOrders\.length/g, '(recentOrders || []).length');
  c = c.replace(/recentOrders\.map/g, '(recentOrders || []).map');
  c = c.replace(/products\.length/g, '(products || []).length');
  c = c.replace(/products\.map/g, '(products || []).map');
  c = c.replace(/coupons\.length/g, '(coupons || []).length');
  c = c.replace(/coupons\.map/g, '(coupons || []).map');
  c = c.replace(/orders\.length/g, '(orders || []).length');
  c = c.replace(/orders\.map/g, '(orders || []).map');
  fs.writeFileSync(f, c);
});

// 7. src/routes/checkout.tsx
replace('src/routes/checkout.tsx', /const payload = .*?\n/g, '');
