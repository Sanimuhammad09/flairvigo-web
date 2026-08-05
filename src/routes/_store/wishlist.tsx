import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_store/wishlist')({
  component: Wishlist,
})

function Wishlist() {
  return (
    
<main className="min-h-screen pb-section-gap-lg pt-12 md:pt-24">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-primary/10 pb-6 reveal-up">
<div>
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-ink-deep mb-2">My Wishlist</h1>
<p className="font-body-lg text-body-lg text-ink-deep/70">3 items saved</p>
</div>
<div className="mt-6 md:mt-0">
<button className="flex items-center space-x-2 text-ink-deep/70 hover:text-ink-deep transition-colors">
<span className="font-label-bold text-label-bold uppercase">Share List</span>
<span className="material-symbols-outlined text-sm">ios_share</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
<div className="product-card group relative bg-neutral-light/30 rounded-DEFAULT reveal-up">
<button className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-surface-cream/80 backdrop-blur-sm rounded-full text-ink-deep hover:bg-white hover:text-accent-gold transition-colors shadow-sm">
<span className="material-symbols-outlined fill text-[20px]">favorite</span>
</button>
<div className="aspect-[3/4] relative overflow-hidden bg-neutral-light rounded-t-DEFAULT">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" alt="Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzHwI8PCniM0M5GwD7lwwkCcVRgfDnLSxsEU6I8uzjGtNG7S6kcwY79b5ziqY4eJuCqP-iCu0hcA4gJ150iaKeUq8zomTLKJOMt85NufI0M7DuDuk9Cyglkx-NNbZ4wOWt97F2TBq-jD0Lhjt69PfxOrGJ9IjjY-VGrsQA2puA3L0lGCpg_pYA9utcfVM9P0IXIkMibrMEXytGn7i0pDsNXKOStCHqz4G5PeM1Gp_aOnWgboyUhYowWg" />
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
<button className="w-full bg-ink-deep text-surface-cream font-label-bold text-label-bold py-4 uppercase tracking-widest hover:bg-ink-deep/90 transition-colors">
                                Add to Bag
                            </button>
</div>
</div>
<div className="pt-6 pb-2 px-2 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-body-lg font-semibold text-ink-deep line-clamp-1">Vigo Pro-Tech V-Neck</h3>
<span className="font-headline-md text-body-lg font-semibold text-ink-deep ml-4">₦78</span>
</div>
<p className="font-body-md text-body-md text-ink-deep/60">Deep Burgundy</p>
</div>
<div className="mt-4 flex gap-2">
<span className="w-8 h-8 rounded-full border border-ink-deep/20 flex items-center justify-center font-label-sm text-[10px] text-ink-deep cursor-pointer hover:border-ink-deep transition-colors">XS</span>
<span className="w-8 h-8 rounded-full border border-ink-deep flex items-center justify-center font-label-sm text-[10px] bg-ink-deep text-surface-cream cursor-pointer transition-colors">S</span>
<span className="w-8 h-8 rounded-full border border-ink-deep/20 flex items-center justify-center font-label-sm text-[10px] text-ink-deep cursor-pointer hover:border-ink-deep transition-colors">M</span>
</div>
</div>
</div>
<div className="product-card group relative bg-neutral-light/30 rounded-DEFAULT reveal-up">
<button className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-surface-cream/80 backdrop-blur-sm rounded-full text-ink-deep hover:bg-white hover:text-accent-gold transition-colors shadow-sm">
<span className="material-symbols-outlined fill text-[20px]">favorite</span>
</button>
<div className="aspect-[3/4] relative overflow-hidden bg-neutral-light rounded-t-DEFAULT">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" alt="Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCs8aNxW-mZU4ebFmHSKWyz8uhXNxUfn0SMe2qmxhFSEr7eTeR4g5yRZd5m2soaWALWedR3xVPHq2y9FsPOT8PhMFKUvHN3m3t-1wwImLgLkhFhMCf7pPZgB1jyo6XirhQJ9eElP4hdtnCPfBpznF_h5W8Q2W_LDb-Wvs5CR2V49rM3GvbkxmbpXbar9YISmYGmpwUm4sfWWFBNa50Vvdz8Vss6X6U0-L_dLZajD0cYdDZLCdqwM1niw" />
<div className="absolute top-4 left-4">
<span className="bg-accent-gold text-surface-cream px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider rounded-sm">Low Stock</span>
</div>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
<button className="w-full bg-ink-deep text-surface-cream font-label-bold text-label-bold py-4 uppercase tracking-widest hover:bg-ink-deep/90 transition-colors">
                                Add to Bag
                            </button>
</div>
</div>
<div className="pt-6 pb-2 px-2 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-body-lg font-semibold text-ink-deep line-clamp-1">Elevate Jogger Pant</h3>
<span className="font-headline-md text-body-lg font-semibold text-ink-deep ml-4">₦95</span>
</div>
<p className="font-body-md text-body-md text-ink-deep/60">Forest Green</p>
</div>
<div className="mt-4 flex gap-2">
<span className="font-label-sm text-[12px] text-accent-gold border-b border-accent-gold cursor-pointer">Select Size</span>
</div>
</div>
</div>
<div className="product-card group relative bg-neutral-light/30 rounded-DEFAULT reveal-up">
<button className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-surface-cream/80 backdrop-blur-sm rounded-full text-ink-deep hover:bg-white hover:text-accent-gold transition-colors shadow-sm">
<span className="material-symbols-outlined fill text-[20px]">favorite</span>
</button>
<div className="aspect-[3/4] relative overflow-hidden bg-neutral-light rounded-t-DEFAULT">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" alt="Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAStrbSer9oNhiZZzuxKGYjBithu_dNDi_NCnCxd2KMOL4DEe-8X90-UA542uEmnql3KoNWt_HXpwU5SdhVDIJKZC4uarOPt6zQa8LM2_LXpnK4jd6VbCNbdNG8F_Ab9s0JnEUtW7u-0u4UrVns9gtA89ZCBWgRdHX91zK3Pv7xSQxRaNbP6qZBfi_An1zNUh3Ng5s8yG8HdL9mB1z5q5U_vxa4mYaA4renqqrAqZTMqeD59_q1t4mYgg" />
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
<button className="w-full bg-ink-deep text-surface-cream font-label-bold text-label-bold py-4 uppercase tracking-widest hover:bg-ink-deep/90 transition-colors">
                                Add to Bag
                            </button>
</div>
</div>
<div className="pt-6 pb-2 px-2 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-body-lg font-semibold text-ink-deep line-clamp-1">Pulse Pendant Necklace</h3>
<span className="font-headline-md text-body-lg font-semibold text-ink-deep ml-4">₦245</span>
</div>
<p className="font-body-md text-body-md text-ink-deep/60">14k Solid Gold</p>
</div>
<div className="mt-4 flex gap-2">
<span className="font-label-sm text-[12px] text-ink-deep/40">One Size</span>
</div>
</div>
</div>
</div>
</div>
</main>

  )
}
