import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/about')({
  component: About,
})

function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" data-alt="A wide, sweeping landscape shot of a modern, eco-friendly fabric production facility integrated into a lush, green natural environment." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWn8IMB-hqEjj_MdNqPAcnYKRId0jL6xwvM6-hTTqYV8PwgB4v7yPl7dp6ewh4NKsn_tPKjf1ScMdogBWNJFp8X04W279EAEUJsgsHuQBdWYNLK-FXiRHYPRLttE0gLuaiDsfURS7SaMCONln4qsgU__K7PKhQaktWjCcM8qkJNWd8fan0W7JywjQGgfw-tVOoZsc_xz4I0ZvcMG6QysxCy0_C858hg1kHfUTPTc9aeeJ3qFIEaGv9eg')" }}></div>
          <div className="absolute inset-0 bg-ink-deep/30 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
          <h1 className="font-display-lg text-display-lg text-surface-cream mb-unit animate-fade-in-up">Performance. Purpose. Precision.</h1>
          <p className="font-body-lg text-body-lg text-surface-cream/90 font-light">The story behind our commitment to medical professionals and the planet they heal.</p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-section-gap-md md:py-section-gap-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-2 flex flex-col gap-6">
            <span className="font-label-bold text-label-bold text-accent-gold uppercase tracking-widest">Our Story</span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-deep">Born from necessity. Crafted for excellence.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Flair Vigo was founded on a simple premise: medical professionals deserve apparel that performs as tirelessly as they do, without compromising on aesthetic refinement or environmental responsibility. 
              We saw an industry stagnant with utilitarian designs and unsustainable practices, and chose to engineer a new standard.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every garment is a testament to our dedication to technical luxury, blending cutting-edge material science with meticulous tailoring.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8 mt-12 md:mt-0 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
              <img className="w-full h-full object-cover" data-alt="A close-up, highly detailed editorial photograph of a designer’s hands carefully inspecting a piece of premium, deep burgundy medical fabric against a cream-colored minimalist worktable." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV_XZ0rIoitExAF1qgLCGIG9ogDsMfq0TaMlqXadb0haSt1gqbMk_6w4Ar64G2ltC0WVmV-CwvEft9asJYfxOTUhKW2VEabqA3YtpMC8y-c2YHSPSCkPG0QHoLTWdaEFm4ItmqqZlexaCuBsHZsVNvFAp40rIfPTVXsAdkPlGHij-IFX_Skl_mdUf7nnxp0knhKm_w8ZpvyuLPKhvkzYIfIsCPpUA1_JVbgZIGieObu-8FNXbnwuSyCg" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square bg-neutral-light -z-10 border border-ink-deep/10"></div>
          </div>
        </div>
      </section>
      
      {/* Fabric Technology / Material Science */}
      <section className="bg-neutral-light py-section-gap-md md:py-section-gap-lg px-margin-mobile md:px-margin-desktop border-y border-ink-deep/10">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="font-label-bold text-label-bold text-accent-gold uppercase tracking-widest">Material Science</span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-deep mt-2">The Architecture of Comfort</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Feature 1 */}
            <div className="flex flex-col group cursor-default">
              <div className="aspect-square overflow-hidden mb-6 rounded-sm">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="An abstract, macro shot of advanced fabric weave." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRUaHNkBbYR8I2RvIbcEhblagrEUW9dH_hjmPLuYHHIHGYLJHYQJXeVJquWvIHEGyJhKoMUNw9TyPk1oncys0sDKDPCSGN9I2gX2uH03lPMtNO3kW5_OV2RjMJ0poo80F6y0LfhN_kOtjBvEHu-3U_xVATFlRAID5FwN29eOYeAJrnm7p7g0uMdjOQiSRk4FEeIeKFRRtd-knAN5qVt5cI-UyXNRwG7oUuy6h1oUaPU6XrOkxK4umdqg" />
              </div>
              <h3 className="font-headline-md text-headline-md text-ink-deep mb-2">Aero-Knit™ Tech</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Proprietary fiber engineering allowing for maximum airflow and dynamic stretch, recovering its shape shift after shift.</p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col group cursor-default md:translate-y-12">
              <div className="aspect-square overflow-hidden mb-6 rounded-sm">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A visually striking composition of recycled water bottles morphing into fine, spun yarn against a pristine white background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxyEjLDBzfpTDaLD2zIpWX52MthWr0M8u1Z6vLNnS0xy4V5PTFrKwDVtx7842uSrfb06BkGHOFriVWyePypN0fBUXMvQyL6vmR0LGqfnO6wyU2QFHKRxOezdSE5LV9XOCmoC8T2TLWkSY5MBenBmM7jN5QBPIFOoMrDX3uRyYjgUthZHscfW0corv5wCbGHdxPr8TWANp7t7nBZJ4HKdrBuyIygFQq_ily20YXbXQyFB34PP4mACVSFw" />
              </div>
              <h3 className="font-headline-md text-headline-md text-ink-deep mb-2">Repurposed Polymers</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Transforming post-consumer plastics into premium threads, significantly reducing our reliance on virgin synthetics.</p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col group cursor-default">
              <div className="aspect-square overflow-hidden mb-6 rounded-sm">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A minimalist, editorial depiction of water droplets interacting with a high-performance fabric surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgfhpDYgsZaiPlQ-YR_RM8KRkm4UiFxP7sohUBn6HnBJyb8JeYoUwzI_7Hqwy6JuTPJB5_D__XbsgHiGgSfRRBBH_Eiw_QCyKoh3KfPn5TRgjcC_MXb7p7lKFigS5HxPzm76Bt_5GcrfGhCebiUjb47hEQMPrMPrpRaV2ZJtQwO6D5GDEc0tWzmyEiJ4fUajE9PjVRkNo_r4NPGZlAjbeSRq3SYdFnUnKnb-EVGXFMr12HWP_VKIDDmg" />
              </div>
              <h3 className="font-headline-md text-headline-md text-ink-deep mb-2">Eco-Shield Finish</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">A bluesign® certified antimicrobial and fluid-resistant treatment that protects without harmful chemical runoff.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
