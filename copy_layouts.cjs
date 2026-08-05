const fs = require('fs');

const template = fs.readFileSync('src/routes/_store/women.tsx', 'utf8');

const pages = [
  {
    file: 'src/routes/_store/men.tsx',
    route: '/_store/men',
    component: 'MenCollection',
    title: "Men's Collection",
    desc: "Engineered for performance, designed for professionals. Discover scrub sets that move with you through every shift.",
    linkPath: '/men',
  },
  {
    file: 'src/routes/_store/jewelry.tsx',
    route: '/_store/jewelry',
    component: 'JewelryCollection',
    title: "Jewelry Collection",
    desc: "Medical-inspired jewelry that pairs perfectly with your favorite fits.",
    linkPath: '/jewelry',
  },
  {
    file: 'src/routes/_store/outerwear.tsx',
    route: '/_store/outerwear',
    component: 'OuterwearCollection',
    title: "Outerwear Collection",
    desc: "Stay warm without sacrificing mobility or style. Premium jackets and vests for on and off shift.",
    linkPath: '/outerwear',
  },
  {
    file: 'src/routes/_store/new-arrivals.tsx',
    route: '/_store/new-arrivals',
    component: 'NewArrivals',
    title: "New Arrivals",
    desc: "The latest innovations in medical apparel. Fresh colors, new fits, same premium quality.",
    linkPath: '/new-arrivals',
  },
  {
    file: 'src/routes/_store/best-sellers.tsx',
    route: '/_store/best-sellers',
    component: 'BestSellers',
    title: "Best Sellers",
    desc: "The community's absolute favorites. High-performance, meticulously crafted medical apparel.",
    linkPath: '/best-sellers',
  }
];

pages.forEach(page => {
  let content = template;
  
  // Replace Route
  content = content.replace(/'\/_store\/women'/g, `'${page.route}'`);
  
  // Replace Component Name
  content = content.replace(/WomenCollection/g, page.component);
  
  // Replace Title
  content = content.replace(/>Women's Collection<\/h1>/g, `>${page.title}</h1>`);
  
  // Replace Description
  content = content.replace(/Engineered for performance, designed for professionals\. Discover scrub sets that move with you through every shift\./g, page.desc);
  
  // Replace links
  content = content.replace(/to="\/women"/g, `to="${page.linkPath}"`);
  
  fs.writeFileSync(page.file, content);
  console.log('Updated ' + page.file);
});
