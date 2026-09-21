const fs = require('fs');

function replace(file, find, repl) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(find, repl);
  fs.writeFileSync(file, content);
}

// 1. src/routes/_store/account.tsx
let account = fs.readFileSync('src/routes/_store/account.tsx', 'utf8');
account = account.replace(/const { data, error } = await supabase.from\('orders'\).select\('\*, items:order_items\(\*, product:products\(\*\)\)'\).order\('created_at', { ascending: false }\)\n\s*if \(error\) return \[\]\n\s*return data || \[\]/g, "const res = await supabase.from('orders').select('*, items:order_items(*, product:products(*))').order('created_at', { ascending: false });\n        if (res.error) return [];\n        return res.data || [];");
account = account.replace(/const { data: orders = \[\], isLoading }/g, "const { data: ordersData, isLoading }");
account = account.replace(/queryFn: async \(\) => {/g, "queryFn: async (): Promise<any[]> => {");
account = account.replace(/return \(\n\s*<div/g, "const orders = ordersData || [];\n  return (\n    <div");
fs.writeFileSync('src/routes/_store/account.tsx', account);

// 2. src/routes/_store/index.tsx
let idx = fs.readFileSync('src/routes/_store/index.tsx', 'utf8');
idx = idx.replace(/const apiProducts = bestSellerProducts && Array\.isArray\(bestSellerProducts\.data \|\| bestSellerProducts\) \? \(bestSellerProducts\.data \|\| bestSellerProducts\)\.filter\(\(p: any\) => !p\.name\.toLowerCase\(\)\.includes\('perfume'\)\) : \[\];/g, "const bestSellerArray = Array.isArray(bestSellerProducts) ? bestSellerProducts : [];\n                const apiProducts = bestSellerArray.filter((p: any) => !p.name?.toLowerCase().includes('perfume'));");
fs.writeFileSync('src/routes/_store/index.tsx', idx);

// 3. src/routes/_store/wishlist.tsx
replace('src/routes/_store/wishlist.tsx', /const { data } = await supabase/g, "const res = await supabase");
replace('src/routes/_store/wishlist.tsx', /return data \|\| \[\]/g, "return res.data || []");
