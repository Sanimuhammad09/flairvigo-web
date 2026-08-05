import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/order-success')({
  component: OrderSuccess,
})

function OrderSuccess() {
  return (
    <div className="min-h-screen flex flex-col font-body-md antialiased bg-surface-cream text-ink-deep">
      <header className="w-full border-b border-primary/10 bg-surface-cream px-margin-mobile md:px-margin-desktop h-20 flex justify-between items-center max-w-container-max mx-auto shrink-0 sticky top-0 z-50">
        <Link to="/" className="font-display-lg text-headline-lg font-bold text-ink-deep cursor-pointer">
          Flair Vigo
        </Link>
        <Link to="/" className="font-label-bold text-label-bold tracking-widest uppercase text-ink-deep hover:text-accent-gold transition-colors flex items-center gap-2">
          Continue Shopping
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
        </Link>
      </header>

      <main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 text-center">
        <div className="mb-8">
          <span className="material-symbols-outlined text-[64px] text-accent-gold mb-4">check_circle</span>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-deep font-bold mb-4">Order Confirmed</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto">
            Thank you for your purchase. We've received your order and will email you with tracking details as soon as it ships.
          </p>
        </div>

        <div className="bg-neutral-light border border-primary/10 rounded-lg p-8 text-left mb-12">
          <h2 className="font-headline-md text-headline-md text-ink-deep mb-6 pb-4 border-b border-primary/10">Order Details</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="relative w-16 h-20 shrink-0 bg-surface-variant rounded overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZb2cMpJ3GBFKoNfZS-4ng1t_KtEDZiHyuLuPiW-pJqh9VvIRZnnRY8Eso4kA0WmS1TQ_6MwPSwlqsXKUWYfLbFMu-y9R7lI6XZrp_RXRauv5emIOJsFclooVIuXr885kRankBT2i9S0-1gKJZNWZ8bbpBCyhvy9dBC-78ZmmkezondoVogf9Qv1xZfWf_MH0dMjoXjeJO5coY0d-G35m6msSayIsgvrf6qcJft0-OFqMx-xJx6JOjeA" />
                <span className="absolute -top-2 -right-2 bg-ink-deep text-surface-cream w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm">1</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-label-bold text-body-md text-ink-deep">The Vigo Top</h3>
                <p className="font-body-md text-label-sm text-outline mt-1">Deep Burgundy / Medium</p>
              </div>
              <span className="font-label-bold text-body-md text-ink-deep">₦48.00</span>
            </div>

            <div className="flex gap-4 items-center pb-6 border-b border-primary/10">
              <div className="relative w-16 h-20 shrink-0 bg-surface-variant rounded overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrHAiOk6OZUWgO2iO_fofiOENpEdkQpoYHIq6zeRLmzfkWYFrm6A2W9qcWphzqVjYhXPmPnnbiNOEuib_G6FeNRr-XSKhjA3Y3PJtad4sIfqP7n3K9nLIYXHB_ved1lmFkoXVFItsqjwuo6MzfwQRcKa_uX0DFZo3CoKD2xwyXBLj60ZHwaOqRx4eUVDmz1jp9xt-uP6n8TeMuhuciXlPdFfuKe2oB2HAE9cJsCsAHO3nCmLbYd_zkpA" />
                <span className="absolute -top-2 -right-2 bg-ink-deep text-surface-cream w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm">1</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-label-bold text-body-md text-ink-deep">The Essence Pant</h3>
                <p className="font-body-md text-label-sm text-outline mt-1">Deep Burgundy / Medium</p>
              </div>
              <span className="font-label-bold text-body-md text-ink-deep">₦56.00</span>
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                <span>Subtotal</span>
                <span>₦104.00</span>
              </div>
              <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                <span>Taxes</span>
                <span>₦8.32</span>
              </div>
            </div>

            <div className="flex justify-between items-end mt-4 pt-6 border-t border-primary/20">
              <span className="font-headline-md text-body-lg text-ink-deep">Total</span>
              <div className="text-right">
                <span className="font-label-sm text-outline mr-2 text-xs">NGN</span>
                <span className="font-headline-lg text-headline-lg-mobile text-ink-deep">₦112.32</span>
              </div>
            </div>
          </div>
        </div>

        <Link to="/" className="inline-block bg-ink-deep text-surface-cream font-label-bold text-body-md py-4 px-12 tracking-wider hover:bg-primary transition-colors">
          RETURN TO HOME
        </Link>
      </main>

      <footer className="bg-ink-deep dark:bg-surface-container-highest w-full relative grid grid-cols-2 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap-md max-w-container-max mx-auto mt-auto">
        <div className="col-span-2 md:col-span-4 mb-8">
          <span className="font-display-lg text-headline-md text-surface-cream">Flair Vigo</span>
        </div>
        <div className="col-span-2 md:col-span-4 pt-8 border-t border-surface-cream/10">
          <p className="font-body-md text-body-md text-surface-cream dark:text-on-surface opacity-70 text-sm">
            © 2024 Flair Vigo. Premium Medical Apparel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
