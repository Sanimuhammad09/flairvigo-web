const fs = require('fs');

function replaceStr(file, find, repl) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.split(find).join(repl);
  fs.writeFileSync(file, content);
}

// 1. src/routes/_store/account.tsx
replaceStr('src/routes/_store/account.tsx', 
  "return data || []?.data || response.data || []", 
  "return data || []"
);

// 2. src/routes/_store/bulk-orders.tsx
replaceStr('src/routes/_store/bulk-orders.tsx',
  "import { supabase } from '../../lib/supabase';\n",
  ""
);

// 3. src/routes/_store/index.tsx
replaceStr('src/routes/_store/index.tsx',
  "const slides = storeSettings?.homepageBanners?.length > 0",
  "const slides = storeSettings?.homepageBanners && storeSettings?.homepageBanners?.length > 0"
);
replaceStr('src/routes/_store/index.tsx',
  "? storeSettings?.banner_settings",
  "? (storeSettings as any)?.banner_settings"
);
replaceStr('src/routes/_store/index.tsx',
  "const apiProducts = bestSellerProducts && Array.isArray(bestSellerProducts.data || bestSellerProducts) ? (bestSellerProducts.data || bestSellerProducts).filter((p: any) => !p.name.toLowerCase().includes('perfume')) : [];",
  "const bestSellerArray = Array.isArray(bestSellerProducts) ? bestSellerProducts : [];\n                const apiProducts = bestSellerArray.filter((p: any) => !p.name?.toLowerCase().includes('perfume'));"
);

// 4. src/routes/_store/product.$id.tsx
replaceStr('src/routes/_store/product.$id.tsx',
  "const email = watch('email')",
  "// const email = watch('email')"
);
replaceStr('src/routes/_store/product.$id.tsx',
  "to={`/product/${related.id}` as any}",
  "to=\"/product/$id\" params={{ id: related.id }}"
);
replaceStr('src/routes/_store/product.$id.tsx',
  "to={`/product/${related.id}`}",
  "to=\"/product/$id\" params={{ id: related.id }}"
);


// 5. src/routes/_store/wishlist.tsx
replaceStr('src/routes/_store/wishlist.tsx',
  "import { supabase } from '../../lib/supabase';\n",
  ""
);
replaceStr('src/routes/_store/wishlist.tsx',
  "const variantId = watch('variantId')",
  "// const variantId = watch('variantId')"
);
replaceStr('src/routes/_store/wishlist.tsx',
  "const { data } = await supabase",
  "const res = await supabase"
);
replaceStr('src/routes/_store/wishlist.tsx',
  "return data || []",
  "return res.data || []"
);

// 6. Admin files
let adminFiles = [
  'src/routes/admin/customers.tsx',
  'src/routes/admin/index.tsx',
  'src/routes/admin/inventory.tsx',
  'src/routes/admin/marketing.tsx',
  'src/routes/admin/orders.tsx'
];
adminFiles.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.split("users.length").join("(users || []).length");
  c = c.split("recentOrders.length").join("(recentOrders || []).length");
  c = c.split("products.length").join("(products || []).length");
  c = c.split("coupons.length").join("(coupons || []).length");
  c = c.split("orders.length").join("(orders || []).length");
  
  c = c.split("users.map").join("(users || []).map");
  c = c.split("recentOrders.map").join("(recentOrders || []).map");
  c = c.split("products.map").join("(products || []).map");
  c = c.split("coupons.map").join("(coupons || []).map");
  c = c.split("orders.map").join("(orders || []).map");
  fs.writeFileSync(f, c);
});

// 7. checkout
replaceStr('src/routes/checkout.tsx',
  "const payload = {",
  "// const payload = {"
);
