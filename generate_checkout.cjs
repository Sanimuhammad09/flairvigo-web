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
    // Fix link replacing for specific PAY NOW
    jsx = jsx.replace(/<button className="w-full bg-ink-deep text-surface-cream font-label-bold text-body-md py-4 px-8 tracking-wider hover:bg-primary transition-colors">\s*PAY NOW\s*<\/button>/g, '<Link to="/order-success" className="w-full bg-ink-deep text-surface-cream font-label-bold text-body-md py-4 px-8 tracking-wider hover:bg-primary transition-colors block text-center">PAY NOW</Link>');
    
    return jsx;
}

const checkoutHtml = `
<div className="min-h-screen flex flex-col font-body-md antialiased bg-surface-cream text-ink-deep">
<header class="w-full border-b border-primary/10 bg-surface-cream px-margin-mobile md:px-margin-desktop h-20 flex justify-between items-center max-w-container-max mx-auto shrink-0 sticky top-0 z-50">
<Link to="/" class="font-display-lg text-headline-lg font-bold text-ink-deep cursor-pointer">
            Flair Vigo
        </Link>
<Link to="/cart" class="font-label-bold text-label-bold tracking-widest uppercase text-ink-deep hover:text-accent-gold transition-colors flex items-center gap-2">
<span class="material-symbols-outlined" style="font-size: 18px;">arrow_back</span>
            Return to Cart
        </Link>
</header>
<main class="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
<div class="flex flex-col lg:flex-row gap-gutter lg:gap-[64px]">
<div class="flex-1 w-full lg:max-w-[55%] xl:max-w-[60%] flex flex-col gap-12">
<section>
<div class="flex justify-between items-end mb-6">
<h2 class="font-headline-md text-headline-md text-ink-deep">Contact</h2>
<Link to="/sign-in" class="font-label-bold text-label-bold text-accent-gold hover:text-ink-deep transition-colors underline underline-offset-4">Log in</Link>
</div>
<div class="space-y-4">
<div>
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none focus:outline-none focus:ring-0" placeholder="Email or mobile phone number" type="email"/>
</div>
<label class="flex items-center gap-3 cursor-pointer group mt-2">
<input class="w-4 h-4 rounded border-outline-variant text-ink-deep focus:ring-accent-gold focus:ring-offset-0 bg-transparent" type="checkbox"/>
<span class="font-body-md text-body-md text-on-surface-variant group-hover:text-ink-deep transition-colors">Email me with news and offers</span>
</label>
</div>
</section>
<section>
<h2 class="font-headline-md text-headline-md text-ink-deep mb-6">Shipping address</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="md:col-span-2">
<select class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors appearance-none cursor-pointer focus:border-accent-gold outline-none">
<option>United States</option>
<option>Canada</option>
<option>United Kingdom</option>
</select>
</div>
<div>
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="First name" type="text"/>
</div>
<div>
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Last name" type="text"/>
</div>
<div class="md:col-span-2">
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Address" type="text"/>
</div>
<div class="md:col-span-2">
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Apartment, suite, etc. (optional)" type="text"/>
</div>
<div>
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="City" type="text"/>
</div>
<div>
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="State" type="text"/>
</div>
<div class="md:col-span-2">
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="ZIP code" type="text"/>
</div>
<div class="md:col-span-2">
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Phone" type="tel"/>
</div>
</div>
</section>
<section>
<h2 class="font-headline-md text-headline-md text-ink-deep mb-6">Shipping method</h2>
<div class="border border-outline-variant rounded-lg overflow-hidden bg-surface">
<label class="flex justify-between items-center p-4 border-b border-outline-variant cursor-pointer hover:bg-neutral-light transition-colors">
<div class="flex items-center gap-4">
<input checked="" class="w-4 h-4 text-ink-deep focus:ring-accent-gold border-outline-variant" name="shipping" type="radio"/>
<div>
<p class="font-label-bold text-body-md text-ink-deep">Standard Shipping</p>
<p class="font-label-sm text-label-sm text-outline mt-1">3-5 business days</p>
</div>
</div>
<span class="font-label-bold text-body-md text-ink-deep">Free</span>
</label>
<label class="flex justify-between items-center p-4 cursor-pointer hover:bg-neutral-light transition-colors">
<div class="flex items-center gap-4">
<input class="w-4 h-4 text-ink-deep focus:ring-accent-gold border-outline-variant" name="shipping" type="radio"/>
<div>
<p class="font-label-bold text-body-md text-ink-deep">Express Shipping</p>
<p class="font-label-sm text-label-sm text-outline mt-1">1-2 business days</p>
</div>
</div>
<span class="font-label-bold text-body-md text-ink-deep">$15.00</span>
</label>
</div>
</section>
<section>
<h2 class="font-headline-md text-headline-md text-ink-deep mb-6">Payment</h2>
<p class="font-body-md text-body-md text-outline mb-6">All transactions are secure and encrypted.</p>
<div class="border border-outline-variant rounded-lg overflow-hidden bg-surface">
<div class="p-4 border-b border-outline-variant bg-neutral-light">
<label class="flex items-center gap-4 cursor-pointer">
<input checked="" class="w-4 h-4 text-ink-deep focus:ring-accent-gold border-outline-variant" name="payment" type="radio"/>
<span class="font-label-bold text-body-md text-ink-deep">Credit card</span>
</label>
</div>
<div class="p-4 space-y-4 bg-surface-cream">
<div>
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Card number" type="text"/>
</div>
<div class="grid grid-cols-2 gap-4">
<div>
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Expiration date (MM / YY)" type="text"/>
</div>
<div>
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Security code" type="text"/>
</div>
</div>
<div>
<input class="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Name on card" type="text"/>
</div>
</div>
<div class="p-4 border-t border-outline-variant hover:bg-neutral-light transition-colors cursor-pointer">
<label class="flex items-center gap-4 cursor-pointer w-full">
<input class="w-4 h-4 text-ink-deep focus:ring-accent-gold border-outline-variant" name="payment" type="radio"/>
<span class="font-label-bold text-body-md text-ink-deep">PayPal</span>
</label>
</div>
</div>
</section>
<div class="pt-6 border-t border-primary/10">
<button class="w-full bg-ink-deep text-surface-cream font-label-bold text-body-md py-4 px-8 tracking-wider hover:bg-primary transition-colors">
                        PAY NOW
                    </button>
<p class="text-center font-label-sm text-label-sm text-outline mt-4">
                        By clicking Pay Now, you agree to our Terms of Service.
                    </p>
</div>
</div>
<div class="w-full lg:w-[45%] xl:w-[40%] mt-12 lg:mt-0">
<div class="bg-neutral-light p-6 md:p-8 rounded-lg sticky top-[100px] border border-primary/5">
<h2 class="font-headline-md text-headline-md text-ink-deep mb-6">Order summary</h2>
<div class="space-y-6 mb-8">
<div class="flex gap-4 items-center">
<div class="relative w-20 h-24 shrink-0 bg-surface-variant rounded overflow-hidden">
<img class="w-full h-full object-cover" alt="Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZb2cMpJ3GBFKoNfZS-4ng1t_KtEDZiHyuLuPiW-pJqh9VvIRZnnRY8Eso4kA0WmS1TQ_6MwPSwlqsXKUWYfLbFMu-y9R7lI6XZrp_RXRauv5emIOJsFclooVIuXr885kRankBT2i9S0-1gKJZNWZ8bbpBCyhvy9dBC-78ZmmkezondoVogf9Qv1xZfWf_MH0dMjoXjeJO5coY0d-G35m6msSayIsgvrf6qcJft0-OFqMx-xJx6JOjeA"/>
<span class="absolute -top-2 -right-2 bg-ink-deep text-surface-cream w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm">1</span>
</div>
<div class="flex-grow">
<h3 class="font-label-bold text-body-md text-ink-deep">The Vigo Top</h3>
<p class="font-body-md text-label-sm text-outline mt-1">Deep Burgundy / Medium</p>
</div>
<span class="font-label-bold text-body-md text-ink-deep">$48.00</span>
</div>
<div class="flex gap-4 items-center">
<div class="relative w-20 h-24 shrink-0 bg-surface-variant rounded overflow-hidden">
<img class="w-full h-full object-cover" alt="Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrHAiOk6OZUWgO2iO_fofiOENpEdkQpoYHIq6zeRLmzfkWYFrm6A2W9qcWphzqVjYhXPmPnnbiNOEuib_G6FeNRr-XSKhjA3Y3PJtad4sIfqP7n3K9nLIYXHB_ved1lmFkoXVFItsqjwuo6MzfwQRcKa_uX0DFZo3CoKD2xwyXBLj60ZHwaOqRx4eUVDmz1jp9xt-uP6n8TeMuhuciXlPdFfuKe2oB2HAE9cJsCsAHO3nCmLbYd_zkpA"/>
<span class="absolute -top-2 -right-2 bg-ink-deep text-surface-cream w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm">1</span>
</div>
<div class="flex-grow">
<h3 class="font-label-bold text-body-md text-ink-deep">The Essence Pant</h3>
<p class="font-body-md text-label-sm text-outline mt-1">Deep Burgundy / Medium</p>
</div>
<span class="font-label-bold text-body-md text-ink-deep">$56.00</span>
</div>
</div>
<div class="flex gap-3 mb-8 pt-6 border-t border-primary/10">
<input class="flex-grow bg-surface border-b border-outline-variant py-3 px-3 font-body-md text-body-md text-ink-deep rounded-none transition-colors outline-none focus:border-accent-gold" placeholder="Discount code" type="text"/>
<button class="bg-surface-dim text-ink-deep font-label-bold text-label-bold px-6 py-3 hover:bg-outline-variant transition-colors">APPLY</button>
</div>
<div class="space-y-3 pt-6 border-t border-primary/10">
<div class="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Subtotal</span>
<span>$104.00</span>
</div>
<div class="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Shipping</span>
<span>Calculated at next step</span>
</div>
<div class="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Taxes</span>
<span>$8.32</span>
</div>
</div>
<div class="flex justify-between items-end mt-6 pt-6 border-t border-primary/20">
<span class="font-headline-md text-body-lg text-ink-deep">Total</span>
<div class="text-right">
<span class="font-label-sm text-outline mr-2 text-xs">USD</span>
<span class="font-headline-lg text-headline-lg-mobile text-ink-deep">$112.32</span>
</div>
</div>
</div>
</div>
</div>
</main>
<footer class="bg-ink-deep dark:bg-surface-container-highest w-full relative grid grid-cols-2 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap-md max-w-container-max mx-auto mt-auto">
<div class="col-span-2 md:col-span-4 mb-8">
<span class="font-display-lg text-headline-md text-surface-cream">Flair Vigo</span>
</div>
<div class="flex flex-col gap-4">
<Link class="font-body-md text-body-md text-surface-variant/70 hover:text-surface-cream hover:translate-x-1 transition-all duration-200" to="/">Support</Link>
<Link class="font-body-md text-body-md text-surface-variant/70 hover:text-surface-cream hover:translate-x-1 transition-all duration-200" to="/">Company</Link>
</div>
<div class="flex flex-col gap-4">
<Link class="font-body-md text-body-md text-surface-variant/70 hover:text-surface-cream hover:translate-x-1 transition-all duration-200" to="/">Guides</Link>
<Link class="font-body-md text-body-md text-surface-variant/70 hover:text-surface-cream hover:translate-x-1 transition-all duration-200" to="/">Shipping &amp; Returns</Link>
</div>
<div class="flex flex-col gap-4">
<Link class="font-body-md text-body-md text-surface-variant/70 hover:text-surface-cream hover:translate-x-1 transition-all duration-200" to="/">Contact Us</Link>
<Link class="font-body-md text-body-md text-surface-variant/70 hover:text-surface-cream hover:translate-x-1 transition-all duration-200" to="/">Privacy Policy</Link>
</div>
<div class="col-span-2 md:col-span-4 mt-8 pt-8 border-t border-surface-cream/10">
<p class="font-body-md text-body-md text-surface-cream dark:text-on-surface opacity-70 text-sm">
                © 2024 Flair Vigo. Premium Medical Apparel. All rights reserved.
            </p>
</div>
</footer>
</div>
`;

const checkoutTemplate = `import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout')({
  component: Checkout,
})

function Checkout() {
  return (
    ${htmlToJsx(checkoutHtml)}
  )
}
`;

fs.writeFileSync('src/routes/checkout.tsx', checkoutTemplate);
console.log('Created checkout.tsx');
