const fs = require('fs');

function htmlToJsx(html) {
    let jsx = html.replace(/class=/g, 'className=');
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, ''); // remove comments
    jsx = jsx.replace(/<img([^>]+[^\/])>/g, '<img$1 />'); // close img tags
    jsx = jsx.replace(/<input([^>]+[^\/])>/g, '<input$1 />'); // close input tags
    jsx = jsx.replace(/<br([^>]*[^\/])?>/g, '<br />'); // close br tags
    jsx = jsx.replace(/<hr([^>]*[^\/])?>/g, '<hr />'); // close hr tags
    jsx = jsx.replace(/checked=""/g, 'defaultChecked');
    jsx = jsx.replace(/style="([^"]*)"/g, (match, styleStr) => {
        // basic style string to object converter
        const styles = styleStr.split(';').filter(s => s.trim()).map(s => {
            const [key, value] = s.split(':');
            const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            return `${camelKey}: '${value.trim()}'`;
        });
        return `style={{ ${styles.join(', ')} }}`;
    });
    return jsx;
}

const wishlistMain = `
<main class="min-h-screen pb-section-gap-lg pt-12 md:pt-24">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-primary/10 pb-6 reveal-up">
<div>
<h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-ink-deep mb-2">My Wishlist</h1>
<p class="font-body-lg text-body-lg text-ink-deep/70">3 items saved</p>
</div>
<div class="mt-6 md:mt-0">
<button class="flex items-center space-x-2 text-ink-deep/70 hover:text-ink-deep transition-colors">
<span class="font-label-bold text-label-bold uppercase">Share List</span>
<span class="material-symbols-outlined text-sm">ios_share</span>
</button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
<div class="product-card group relative bg-neutral-light/30 rounded-DEFAULT reveal-up">
<button class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-surface-cream/80 backdrop-blur-sm rounded-full text-ink-deep hover:bg-white hover:text-accent-gold transition-colors shadow-sm">
<span class="material-symbols-outlined fill text-[20px]">favorite</span>
</button>
<div class="aspect-[3/4] relative overflow-hidden bg-neutral-light rounded-t-DEFAULT">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" alt="Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzHwI8PCniM0M5GwD7lwwkCcVRgfDnLSxsEU6I8uzjGtNG7S6kcwY79b5ziqY4eJuCqP-iCu0hcA4gJ150iaKeUq8zomTLKJOMt85NufI0M7DuDuk9Cyglkx-NNbZ4wOWt97F2TBq-jD0Lhjt69PfxOrGJ9IjjY-VGrsQA2puA3L0lGCpg_pYA9utcfVM9P0IXIkMibrMEXytGn7i0pDsNXKOStCHqz4G5PeM1Gp_aOnWgboyUhYowWg" />
<div class="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
<button class="w-full bg-ink-deep text-surface-cream font-label-bold text-label-bold py-4 uppercase tracking-widest hover:bg-ink-deep/90 transition-colors">
                                Add to Bag
                            </button>
</div>
</div>
<div class="pt-6 pb-2 px-2 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-2">
<h3 class="font-headline-md text-body-lg font-semibold text-ink-deep line-clamp-1">Vigo Pro-Tech V-Neck</h3>
<span class="font-headline-md text-body-lg font-semibold text-ink-deep ml-4">$78</span>
</div>
<p class="font-body-md text-body-md text-ink-deep/60">Deep Burgundy</p>
</div>
<div class="mt-4 flex gap-2">
<span class="w-8 h-8 rounded-full border border-ink-deep/20 flex items-center justify-center font-label-sm text-[10px] text-ink-deep cursor-pointer hover:border-ink-deep transition-colors">XS</span>
<span class="w-8 h-8 rounded-full border border-ink-deep flex items-center justify-center font-label-sm text-[10px] bg-ink-deep text-surface-cream cursor-pointer transition-colors">S</span>
<span class="w-8 h-8 rounded-full border border-ink-deep/20 flex items-center justify-center font-label-sm text-[10px] text-ink-deep cursor-pointer hover:border-ink-deep transition-colors">M</span>
</div>
</div>
</div>
<div class="product-card group relative bg-neutral-light/30 rounded-DEFAULT reveal-up">
<button class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-surface-cream/80 backdrop-blur-sm rounded-full text-ink-deep hover:bg-white hover:text-accent-gold transition-colors shadow-sm">
<span class="material-symbols-outlined fill text-[20px]">favorite</span>
</button>
<div class="aspect-[3/4] relative overflow-hidden bg-neutral-light rounded-t-DEFAULT">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" alt="Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCs8aNxW-mZU4ebFmHSKWyz8uhXNxUfn0SMe2qmxhFSEr7eTeR4g5yRZd5m2soaWALWedR3xVPHq2y9FsPOT8PhMFKUvHN3m3t-1wwImLgLkhFhMCf7pPZgB1jyo6XirhQJ9eElP4hdtnCPfBpznF_h5W8Q2W_LDb-Wvs5CR2V49rM3GvbkxmbpXbar9YISmYGmpwUm4sfWWFBNa50Vvdz8Vss6X6U0-L_dLZajD0cYdDZLCdqwM1niw" />
<div class="absolute top-4 left-4">
<span class="bg-accent-gold text-surface-cream px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider rounded-sm">Low Stock</span>
</div>
<div class="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
<button class="w-full bg-ink-deep text-surface-cream font-label-bold text-label-bold py-4 uppercase tracking-widest hover:bg-ink-deep/90 transition-colors">
                                Add to Bag
                            </button>
</div>
</div>
<div class="pt-6 pb-2 px-2 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-2">
<h3 class="font-headline-md text-body-lg font-semibold text-ink-deep line-clamp-1">Elevate Jogger Pant</h3>
<span class="font-headline-md text-body-lg font-semibold text-ink-deep ml-4">$95</span>
</div>
<p class="font-body-md text-body-md text-ink-deep/60">Forest Green</p>
</div>
<div class="mt-4 flex gap-2">
<span class="font-label-sm text-[12px] text-accent-gold border-b border-accent-gold cursor-pointer">Select Size</span>
</div>
</div>
</div>
<div class="product-card group relative bg-neutral-light/30 rounded-DEFAULT reveal-up">
<button class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-surface-cream/80 backdrop-blur-sm rounded-full text-ink-deep hover:bg-white hover:text-accent-gold transition-colors shadow-sm">
<span class="material-symbols-outlined fill text-[20px]">favorite</span>
</button>
<div class="aspect-[3/4] relative overflow-hidden bg-neutral-light rounded-t-DEFAULT">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" alt="Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAStrbSer9oNhiZZzuxKGYjBithu_dNDi_NCnCxd2KMOL4DEe-8X90-UA542uEmnql3KoNWt_HXpwU5SdhVDIJKZC4uarOPt6zQa8LM2_LXpnK4jd6VbCNbdNG8F_Ab9s0JnEUtW7u-0u4UrVns9gtA89ZCBWgRdHX91zK3Pv7xSQxRaNbP6qZBfi_An1zNUh3Ng5s8yG8HdL9mB1z5q5U_vxa4mYaA4renqqrAqZTMqeD59_q1t4mYgg" />
<div class="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
<button class="w-full bg-ink-deep text-surface-cream font-label-bold text-label-bold py-4 uppercase tracking-widest hover:bg-ink-deep/90 transition-colors">
                                Add to Bag
                            </button>
</div>
</div>
<div class="pt-6 pb-2 px-2 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-2">
<h3 class="font-headline-md text-body-lg font-semibold text-ink-deep line-clamp-1">Pulse Pendant Necklace</h3>
<span class="font-headline-md text-body-lg font-semibold text-ink-deep ml-4">$245</span>
</div>
<p class="font-body-md text-body-md text-ink-deep/60">14k Solid Gold</p>
</div>
<div class="mt-4 flex gap-2">
<span class="font-label-sm text-[12px] text-ink-deep/40">One Size</span>
</div>
</div>
</div>
</div>
</div>
</main>
`;

const wishlistTemplate = `import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/wishlist')({
  component: Wishlist,
})

function Wishlist() {
  return (
    ${htmlToJsx(wishlistMain)}
  )
}
`;

fs.writeFileSync('src/routes/_store/wishlist.tsx', wishlistTemplate);
console.log('Created wishlist.tsx');

