import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/contact')({
  component: ContactUs,
})

function ContactUs() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Hero Section */}
      <section className="py-16 md:py-section-gap-md max-w-4xl">
        <h1 className="font-display-lg text-display-lg text-ink-deep mb-6">Get in Touch</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Experience uncompromising support. Whether you have an inquiry regarding a recent order, require assistance with sizing, or wish to explore bespoke arrangements, our concierge team is at your disposal.
        </p>
      </section>

      {/* Asymmetric Grid Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter pb-section-gap-lg">
        {/* Left Column: Contact Form (7 columns) */}
        <div className="lg:col-span-7">
          <div className="bg-neutral-light/50 backdrop-blur-sm p-8 md:p-12 rounded-DEFAULT border border-outline-variant/20">
            <h2 className="font-headline-md text-headline-md text-ink-deep mb-8">Send a Message</h2>
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
                  <input className="peer w-full bg-transparent border-0 border-b border-outline-variant text-ink-deep font-body-md py-2 px-0 focus:ring-0 focus:border-accent-gold placeholder-transparent transition-colors" id="order_number" name="order_number" placeholder="Order Number (Optional)" type="text" />
                  <label className="absolute left-0 -top-4 text-label-sm font-label-sm text-on-surface-variant transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-label-sm peer-focus:text-accent-gold" htmlFor="order_number">Order Number (Optional)</label>
                </div>
              </div>

              <div className="relative">
                <select className="peer w-full bg-transparent border-0 border-b border-outline-variant text-ink-deep font-body-md py-2 px-0 focus:ring-0 focus:border-accent-gold appearance-none transition-colors" id="subject" name="subject" defaultValue="">
                  <option className="text-on-surface-variant" disabled value="">Select a Subject</option>
                  <option value="returns">Returns &amp; Exchanges</option>
                  <option value="shipping">Shipping Inquiries</option>
                  <option value="product">Product Information</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-ink-deep">
                  <span className="material-symbols-outlined" data-icon="expand_more">expand_more</span>
                </div>
              </div>

              <div className="relative">
                <textarea className="peer w-full bg-transparent border-0 border-b border-outline-variant text-ink-deep font-body-md py-2 px-0 focus:ring-0 focus:border-accent-gold placeholder-transparent transition-colors resize-none" id="message" name="message" placeholder="Your Message" required rows={4}></textarea>
                <label className="absolute left-0 -top-4 text-label-sm font-label-sm text-on-surface-variant transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-label-sm peer-focus:text-accent-gold" htmlFor="message">Your Message</label>
              </div>

              <button className="w-full md:w-auto bg-ink-deep text-surface-cream font-label-bold text-label-bold py-4 px-12 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(52,10,10,0.15)] transition-all duration-300" type="submit">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Information Cards (5 columns) */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          {/* Contact Options Bento Card */}
          <div className="bg-neutral-light/30 p-8 rounded-DEFAULT border border-outline-variant/10 hover:border-outline-variant/30 transition-colors">
            <h3 className="font-headline-md text-headline-md text-ink-deep mb-6">Contact Options</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-accent-gold mt-1" data-icon="support_agent">support_agent</span>
                <div>
                  <h4 className="font-label-bold text-label-bold text-ink-deep mb-1">Customer Concierge</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Available Mon-Fri, 9am - 6pm</p>
                  <div className="flex flex-col space-y-1 mt-2">
                    <a className="font-label-bold text-label-bold text-accent-gold hover:underline inline-block" href="mailto:support@flairvigo.com">support@flairvigo.com</a>
                    <a className="font-label-bold text-label-bold text-accent-gold hover:underline inline-block" href="tel:+2349114105173">+2349114105173</a>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-accent-gold mt-1" data-icon="groups">groups</span>
                <div>
                  <h4 className="font-label-bold text-label-bold text-ink-deep mb-1">Bulk Orders</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">For teams of 50 or more.</p>
                  <a className="font-label-bold text-label-bold text-accent-gold hover:underline mt-2 inline-block" href="mailto:teams@flairvigo.com">teams@flairvigo.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-accent-gold mt-1" data-icon="campaign">campaign</span>
                <div>
                  <h4 className="font-label-bold text-label-bold text-ink-deep mb-1">Press &amp; Media</h4>
                  <a className="font-label-bold text-label-bold text-accent-gold hover:underline mt-1 inline-block" href="mailto:press@flairvigo.com">press@flairvigo.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Helpful Resources Card */}
          <div className="bg-neutral-light/30 p-8 rounded-DEFAULT border border-outline-variant/10 hover:border-outline-variant/30 transition-colors">
            <h3 className="font-headline-md text-headline-md text-ink-deep mb-6">Helpful Resources</h3>
            <ul className="space-y-4">
              <li>
                <a className="group flex items-center justify-between py-2 border-b border-outline-variant/30 hover:border-ink-deep transition-colors" href="#">
                  <span className="font-label-bold text-label-bold text-ink-deep group-hover:text-accent-gold transition-colors">Frequently Asked Questions</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-accent-gold transition-colors" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </li>
              <li>
                <a className="group flex items-center justify-between py-2 border-b border-outline-variant/30 hover:border-ink-deep transition-colors" href="#">
                  <span className="font-label-bold text-label-bold text-ink-deep group-hover:text-accent-gold transition-colors">Shipping Information</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-accent-gold transition-colors" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </li>
              <li>
                <a className="group flex items-center justify-between py-2 border-b border-outline-variant/30 hover:border-ink-deep transition-colors" href="#">
                  <span className="font-label-bold text-label-bold text-ink-deep group-hover:text-accent-gold transition-colors">Returns &amp; Exchanges</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-accent-gold transition-colors" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Visit Us Card */}
          <div className="bg-neutral-light/30 p-8 rounded-DEFAULT border border-outline-variant/10 hover:border-outline-variant/30 transition-colors overflow-hidden relative">
            <h3 className="font-headline-md text-headline-md text-ink-deep mb-4">Corporate Office</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Flair Vigo Headquarters<br/>
              1200 Precision Avenue, Suite 400<br/>
              New York, NY 10001
            </p>
            <div className="w-full h-48 bg-surface-variant rounded-DEFAULT relative overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-cover bg-center absolute inset-0 opacity-80 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpoIeq7Roja5vGMyE9_36i_k9ELEFAMxJgczjnRhr1fCa_ALfshudX-2AQhntpLAR2wfVsNI4tlChhEIF8j2ZAGJMG0AqAnFu678Us9oz1duQpIl_g_H2iFt1BRADtTkoFl_EIpxC7VRuosWwOGtDLQ9j2nUPzY6Do-04tAIHppbiCyJWnAk_mu8VdDXuIQ6dhvf0J_Bl2rTlsX8YEnwZEOJ2TjiWsMGw4Ub9Y1sXtKqOfJyY1TWcyYw')" }}></div>
              <div className="absolute inset-0 bg-ink-deep/10 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="absolute bottom-4 right-4 bg-surface-cream p-2 rounded-full shadow-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-ink-deep text-sm" data-icon="location_on">location_on</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
