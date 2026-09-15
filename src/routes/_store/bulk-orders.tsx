import { supabase } from '../../lib/supabase'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/bulk-orders')({
  component: BulkOrders,
})

function BulkOrders() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Hero Section */}
      <section className="py-16 md:py-section-gap-md max-w-4xl">
        <h1 className="font-display-lg text-display-lg text-ink-deep mb-6">Bulk Orders</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Equip your entire team with uncompromising quality. Whether you are outfitting a hospital department, a private clinic, or a large medical group, our dedicated bulk order team is here to provide personalized service, custom embroidery options, and tiered pricing.
        </p>
      </section>

      {/* Asymmetric Grid Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter pb-section-gap-lg">
        {/* Left Column: Contact Form (7 columns) */}
        <div className="lg:col-span-7">
          <div className="bg-neutral-light/50 backdrop-blur-sm p-8 md:p-12 rounded-DEFAULT border border-outline-variant/20">
            <h2 className="font-headline-md text-headline-md text-ink-deep mb-8">Request a Quote</h2>
            <form action="#" className="space-y-8" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input className="peer w-full bg-transparent border-0 border-b border-outline-variant text-ink-deep font-body-md py-2 px-0 focus:ring-0 focus:border-accent-gold placeholder-transparent transition-colors" id="first_name" name="first_name" placeholder="First Name" required type="text" />
                  <label className="absolute left-0 -top-4 text-label-sm font-label-sm text-on-surface-variant transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-label-sm peer-focus:text-accent-gold" htmlFor="first_name">First Name</label>
                </div>
                <div className="relative">
                  <input className="peer w-full bg-transparent border-0 border-b border-outline-variant text-ink-deep font-body-md py-2 px-0 focus:ring-0 focus:border-accent-gold placeholder-transparent transition-colors" id="last_name" name="last_name" placeholder="Last Name" required type="text" />
                  <label className="absolute left-0 -top-4 text-label-sm font-label-sm text-on-surface-variant transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-label-sm peer-focus:text-accent-gold" htmlFor="last_name">Last Name</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input className="peer w-full bg-transparent border-0 border-b border-outline-variant text-ink-deep font-body-md py-2 px-0 focus:ring-0 focus:border-accent-gold placeholder-transparent transition-colors" id="email" name="email" placeholder="Email Address" required type="email" />
                  <label className="absolute left-0 -top-4 text-label-sm font-label-sm text-on-surface-variant transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-label-sm peer-focus:text-accent-gold" htmlFor="email">Email Address</label>
                </div>
                <div className="relative">
                  <input className="peer w-full bg-transparent border-0 border-b border-outline-variant text-ink-deep font-body-md py-2 px-0 focus:ring-0 focus:border-accent-gold placeholder-transparent transition-colors" id="phone" name="phone" placeholder="Phone Number" required type="tel" />
                  <label className="absolute left-0 -top-4 text-label-sm font-label-sm text-on-surface-variant transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-label-sm peer-focus:text-accent-gold" htmlFor="phone">Phone Number</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input className="peer w-full bg-transparent border-0 border-b border-outline-variant text-ink-deep font-body-md py-2 px-0 focus:ring-0 focus:border-accent-gold placeholder-transparent transition-colors" id="company" name="company" placeholder="Company / Organization" required type="text" />
                  <label className="absolute left-0 -top-4 text-label-sm font-label-sm text-on-surface-variant transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-label-sm peer-focus:text-accent-gold" htmlFor="company">Company / Organization</label>
                </div>
                <div className="relative">
                  <select className="peer w-full bg-transparent border-0 border-b border-outline-variant text-ink-deep font-body-md py-2 px-0 focus:ring-0 focus:border-accent-gold appearance-none transition-colors" id="team_size" name="team_size" defaultValue="">
                    <option className="text-on-surface-variant" disabled value="">Select Team Size</option>
                    <option value="10-49">10 - 49</option>
                    <option value="50-99">50 - 99</option>
                    <option value="100-249">100 - 249</option>
                    <option value="250+">250+</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-ink-deep">
                    <span className="material-symbols-outlined" data-icon="expand_more">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <textarea className="peer w-full bg-transparent border-0 border-b border-outline-variant text-ink-deep font-body-md py-2 px-0 focus:ring-0 focus:border-accent-gold placeholder-transparent transition-colors resize-none" id="message" name="message" placeholder="Tell us about your needs (specific products, colors, custom embroidery, timeline, etc.)" required rows={4}></textarea>
                <label className="absolute left-0 -top-4 text-label-sm font-label-sm text-on-surface-variant transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-label-sm peer-focus:text-accent-gold" htmlFor="message">Tell us about your needs</label>
              </div>

              <button className="w-full md:w-auto bg-ink-deep text-surface-cream font-label-bold text-label-bold py-4 px-12 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(52,10,10,0.15)] transition-all duration-300" type="submit">
                Submit Request
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Information Cards (5 columns) */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          {/* Perks Bento Card */}
          <div className="bg-neutral-light/30 p-8 rounded-DEFAULT border border-outline-variant/10 hover:border-outline-variant/30 transition-colors">
            <h3 className="font-headline-md text-headline-md text-ink-deep mb-6">Bulk Order Benefits</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-accent-gold mt-1" data-icon="loyalty">loyalty</span>
                <div>
                  <h4 className="font-label-bold text-label-bold text-ink-deep mb-1">Tiered Pricing</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Unlock exclusive discounts scaled to the size of your order.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-accent-gold mt-1" data-icon="styler">styler</span>
                <div>
                  <h4 className="font-label-bold text-label-bold text-ink-deep mb-1">Custom Embroidery</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Add your hospital or clinic logo and personnel names to every piece.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-accent-gold mt-1" data-icon="support_agent">support_agent</span>
                <div>
                  <h4 className="font-label-bold text-label-bold text-ink-deep mb-1">Dedicated Account Manager</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Enjoy streamlined reordering and personalized support from our team.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="bg-neutral-light/30 p-8 rounded-DEFAULT border border-outline-variant/10 hover:border-outline-variant/30 transition-colors">
            <h3 className="font-headline-md text-headline-md text-ink-deep mb-4">Direct Inquiries</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Need immediate assistance with a large order? Reach out to our dedicated teams division.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">EMAIL</p>
                <a className="font-label-bold text-label-bold text-accent-gold hover:underline inline-block" href="mailto:teams@flairvigo.com">teams@flairvigo.com</a>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">PHONE</p>
                <a className="font-label-bold text-label-bold text-accent-gold hover:underline inline-block" href="tel:+2349114105173">+2349114105173</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
