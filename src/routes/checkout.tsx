import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout')({
  component: Checkout,
})

function Checkout() {
  return (
    
<div className="min-h-screen flex flex-col font-body-md antialiased bg-surface-cream text-ink-deep">
<header className="w-full border-b border-primary/10 bg-surface-cream px-margin-mobile md:px-margin-desktop h-20 flex justify-between items-center max-w-container-max mx-auto shrink-0 sticky top-0 z-50">
<Link to="/" className="font-display-lg text-headline-lg font-bold text-ink-deep cursor-pointer">
            Flair Vigo
        </Link>
<Link to="/" className="font-label-bold text-label-bold tracking-widest uppercase text-ink-deep hover:text-accent-gold transition-colors flex items-center gap-2">
<span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
            Return to Cart
        </Link>
</header>
<main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
<div className="flex flex-col lg:flex-row gap-gutter lg:gap-[64px]">
<div className="flex-1 w-full lg:max-w-[55%] xl:max-w-[60%] flex flex-col gap-12">
<section>
<div className="flex justify-between items-end mb-6">
<h2 className="font-headline-md text-headline-md text-ink-deep">Contact</h2>
<Link to="/sign-in" className="font-label-bold text-label-bold text-accent-gold hover:text-ink-deep transition-colors underline underline-offset-4">Log in</Link>
</div>
<div className="space-y-4">
<div>
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none focus:outline-none focus:ring-0" placeholder="Email or mobile phone number" type="email"/>
</div>
<label className="flex items-center gap-3 cursor-pointer group mt-2">
<input className="w-4 h-4 rounded border-outline-variant text-ink-deep focus:ring-accent-gold focus:ring-offset-0 bg-transparent" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-ink-deep transition-colors">Email me with news and offers</span>
</label>
</div>
</section>
<section>
<h2 className="font-headline-md text-headline-md text-ink-deep mb-6">Shipping address</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="md:col-span-2">
<select className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors appearance-none cursor-pointer focus:border-accent-gold outline-none">
<option>United States</option>
<option>Canada</option>
<option>United Kingdom</option>
</select>
</div>
<div>
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="First name" type="text"/>
</div>
<div>
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Last name" type="text"/>
</div>
<div className="md:col-span-2">
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Address" type="text"/>
</div>
<div className="md:col-span-2">
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Apartment, suite, etc. (optional)" type="text"/>
</div>
<div>
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="City" type="text"/>
</div>
<div>
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="State" type="text"/>
</div>
<div className="md:col-span-2">
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="ZIP code" type="text"/>
</div>
<div className="md:col-span-2">
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Phone" type="tel"/>
</div>
</div>
</section>
<section>
<h2 className="font-headline-md text-headline-md text-ink-deep mb-6">Shipping method</h2>
<div className="border border-outline-variant rounded-lg overflow-hidden bg-surface">
<label className="flex justify-between items-center p-4 border-b border-outline-variant cursor-pointer hover:bg-neutral-light transition-colors">
<div className="flex items-center gap-4">
<input defaultChecked className="w-4 h-4 text-ink-deep focus:ring-accent-gold border-outline-variant" name="shipping" type="radio"/>
<div>
<p className="font-label-bold text-body-md text-ink-deep">Standard Shipping</p>
<p className="font-label-sm text-label-sm text-outline mt-1">3-5 business days</p>
</div>
</div>
<span className="font-label-bold text-body-md text-ink-deep">Free</span>
</label>
<label className="flex justify-between items-center p-4 cursor-pointer hover:bg-neutral-light transition-colors">
<div className="flex items-center gap-4">
<input className="w-4 h-4 text-ink-deep focus:ring-accent-gold border-outline-variant" name="shipping" type="radio"/>
<div>
<p className="font-label-bold text-body-md text-ink-deep">Express Shipping</p>
<p className="font-label-sm text-label-sm text-outline mt-1">1-2 business days</p>
</div>
</div>
<span className="font-label-bold text-body-md text-ink-deep">₦15.00</span>
</label>
</div>
</section>
<section>
<h2 className="font-headline-md text-headline-md text-ink-deep mb-6">Payment</h2>
<p className="font-body-md text-body-md text-outline mb-6">All transactions are secure and encrypted.</p>
<div className="border border-outline-variant rounded-lg overflow-hidden bg-surface">
<div className="p-4 border-b border-outline-variant bg-neutral-light">
<label className="flex items-center gap-4 cursor-pointer">
<input defaultChecked className="w-4 h-4 text-ink-deep focus:ring-accent-gold border-outline-variant" name="payment" type="radio"/>
<span className="font-label-bold text-body-md text-ink-deep">Credit card</span>
</label>
</div>
<div className="p-4 space-y-4 bg-surface-cream">
<div>
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Card number" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Expiration date (MM / YY)" type="text"/>
</div>
<div>
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Security code" type="text"/>
</div>
</div>
<div>
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" placeholder="Name on card" type="text"/>
</div>
</div>
<div className="p-4 border-t border-outline-variant hover:bg-neutral-light transition-colors cursor-pointer">
<label className="flex items-center gap-4 cursor-pointer w-full">
<input className="w-4 h-4 text-ink-deep focus:ring-accent-gold border-outline-variant" name="payment" type="radio"/>
<span className="font-label-bold text-body-md text-ink-deep">PayPal</span>
</label>
</div>
</div>
</section>
<div className="pt-6 border-t border-primary/10">
<Link to="/order-success" className="w-full bg-ink-deep text-surface-cream font-label-bold text-body-md py-4 px-8 tracking-wider hover:bg-primary transition-colors block text-center">PAY NOW</Link>
<p className="text-center font-label-sm text-label-sm text-outline mt-4">
                        By clicking Pay Now, you agree to our Terms of Service.
                    </p>
</div>
</div>
<div className="w-full lg:w-[45%] xl:w-[40%] mt-12 lg:mt-0">
<div className="bg-neutral-light p-6 md:p-8 rounded-lg sticky top-[100px] border border-primary/5">
<h2 className="font-headline-md text-headline-md text-ink-deep mb-6">Order summary</h2>
<div className="space-y-6 mb-8">
<div className="flex gap-4 items-center">
<div className="relative w-20 h-24 shrink-0 bg-surface-variant rounded overflow-hidden">
<img className="w-full h-full object-cover" alt="Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZb2cMpJ3GBFKoNfZS-4ng1t_KtEDZiHyuLuPiW-pJqh9VvIRZnnRY8Eso4kA0WmS1TQ_6MwPSwlqsXKUWYfLbFMu-y9R7lI6XZrp_RXRauv5emIOJsFclooVIuXr885kRankBT2i9S0-1gKJZNWZ8bbpBCyhvy9dBC-78ZmmkezondoVogf9Qv1xZfWf_MH0dMjoXjeJO5coY0d-G35m6msSayIsgvrf6qcJft0-OFqMx-xJx6JOjeA"/>
<span className="absolute -top-2 -right-2 bg-ink-deep text-surface-cream w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm">1</span>
</div>
<div className="flex-grow">
<h3 className="font-label-bold text-body-md text-ink-deep">The Vigo Top</h3>
<p className="font-body-md text-label-sm text-outline mt-1">Deep Burgundy / Medium</p>
</div>
<span className="font-label-bold text-body-md text-ink-deep">₦48.00</span>
</div>
<div className="flex gap-4 items-center">
<div className="relative w-20 h-24 shrink-0 bg-surface-variant rounded overflow-hidden">
<img className="w-full h-full object-cover" alt="Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrHAiOk6OZUWgO2iO_fofiOENpEdkQpoYHIq6zeRLmzfkWYFrm6A2W9qcWphzqVjYhXPmPnnbiNOEuib_G6FeNRr-XSKhjA3Y3PJtad4sIfqP7n3K9nLIYXHB_ved1lmFkoXVFItsqjwuo6MzfwQRcKa_uX0DFZo3CoKD2xwyXBLj60ZHwaOqRx4eUVDmz1jp9xt-uP6n8TeMuhuciXlPdFfuKe2oB2HAE9cJsCsAHO3nCmLbYd_zkpA"/>
<span className="absolute -top-2 -right-2 bg-ink-deep text-surface-cream w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm">1</span>
</div>
<div className="flex-grow">
<h3 className="font-label-bold text-body-md text-ink-deep">The Essence Pant</h3>
<p className="font-body-md text-label-sm text-outline mt-1">Deep Burgundy / Medium</p>
</div>
<span className="font-label-bold text-body-md text-ink-deep">₦56.00</span>
</div>
</div>
<div className="flex gap-3 mb-8 pt-6 border-t border-primary/10">
<input className="flex-grow bg-surface border-b border-outline-variant py-3 px-3 font-body-md text-body-md text-ink-deep rounded-none transition-colors outline-none focus:border-accent-gold" placeholder="Discount code" type="text"/>
<button className="bg-surface-dim text-ink-deep font-label-bold text-label-bold px-6 py-3 hover:bg-outline-variant transition-colors">APPLY</button>
</div>
<div className="space-y-3 pt-6 border-t border-primary/10">
<div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Subtotal</span>
<span>₦104.00</span>
</div>
<div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Shipping</span>
<span>Calculated at next step</span>
</div>
<div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Taxes</span>
<span>₦8.32</span>
</div>
</div>
<div className="flex justify-between items-end mt-6 pt-6 border-t border-primary/20">
<span className="font-headline-md text-body-lg text-ink-deep">Total</span>
<div className="text-right">
<span className="font-label-sm text-outline mr-2 text-xs">NGN</span>
<span className="font-headline-lg text-headline-lg-mobile text-ink-deep">₦112.32</span>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="bg-ink-deep dark:bg-surface-container-highest w-full relative grid grid-cols-2 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap-md max-w-container-max mx-auto mt-auto">
<div className="col-span-2 md:col-span-4 mb-8">
<span className="font-display-lg text-headline-md text-surface-cream">Flair Vigo</span>
</div>
<div className="flex flex-col gap-4">
<Link className="font-body-md text-body-md text-surface-variant/70 hover:text-surface-cream hover:translate-x-1 transition-all duration-200" to="/">Support</Link>
<Link className="font-body-md text-body-md text-surface-variant/70 hover:text-surface-cream hover:translate-x-1 transition-all duration-200" to="/">Company</Link>
</div>
<div className="flex flex-col gap-4">
<Link className="font-body-md text-body-md text-surface-variant/70 hover:text-surface-cream hover:translate-x-1 transition-all duration-200" to="/">Guides</Link>
<Link className="font-body-md text-body-md text-surface-variant/70 hover:text-surface-cream hover:translate-x-1 transition-all duration-200" to="/">Shipping &amp; Returns</Link>
</div>
<div className="flex flex-col gap-4">
<Link className="font-body-md text-body-md text-surface-variant/70 hover:text-surface-cream hover:translate-x-1 transition-all duration-200" to="/">Contact Us</Link>
<Link className="font-body-md text-body-md text-surface-variant/70 hover:text-surface-cream hover:translate-x-1 transition-all duration-200" to="/">Privacy Policy</Link>
</div>
<div className="col-span-2 md:col-span-4 mt-8 pt-8 border-t border-surface-cream/10">
<p className="font-body-md text-body-md text-surface-cream dark:text-on-surface opacity-70 text-sm">
                © 2024 Flair Vigo. Premium Medical Apparel. All rights reserved.
            </p>
</div>
</footer>
</div>

  )
}
