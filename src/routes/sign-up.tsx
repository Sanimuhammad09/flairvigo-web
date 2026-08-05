import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-up')({
  component: SignUp,
})

function SignUp() {
  return (
    <main className="flex w-full min-h-screen">
      <div className="w-full flex flex-col md:flex-row min-h-screen">
        {/* Left Side: Form Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-section-gap-md relative z-10 bg-surface-cream">
          <div className="absolute top-margin-mobile md:top-margin-desktop left-margin-mobile md:left-margin-desktop">
            <Link to="/" className="block">
              <img alt="Flair Vigo Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyf_YLPJ-uAika6zi0ciCVAS-uISkteIM2ux371p2IMF6mb5MG4DIBPJpanL7NsSwbMP3B61T5txuiJVr2b9upM_X5aaeCLK2EY73taf6I2mr3V2ze8U1S8oUNvl7KW6tobocmENZfuuVRXsZqb8w4Z67wwNGFErnjvSL6SrP8dk42dcM2Tv6BB8O8TGpWzEGVzcCzDiB-K9iyb3VB1MjIMiC-MqvRZGGVEhM0rJdFsV89822ykyGLHxw51m2jFWUI9M" />
            </Link>
          </div>
          <div className="max-w-md w-full mx-auto mt-12 md:mt-0">
            <div className="mb-8">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-ink-deep mb-2">Join the Community</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Sign up to access exclusive updates, curated collections, and a refined shopping experience.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-label-bold text-label-bold text-ink-deep" htmlFor="firstName">First Name</label>
                  <input className="w-full bg-transparent border-b border-ink-deep/20 py-2 px-0 focus:outline-none focus:border-accent-gold focus:ring-0 transition-colors rounded-none placeholder:text-ink-deep/50 font-body-md text-body-md" id="firstName" name="firstName" placeholder="Jane" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-bold text-label-bold text-ink-deep" htmlFor="lastName">Last Name</label>
                  <input className="w-full bg-transparent border-b border-ink-deep/20 py-2 px-0 focus:outline-none focus:border-accent-gold focus:ring-0 transition-colors rounded-none placeholder:text-ink-deep/50 font-body-md text-body-md" id="lastName" name="lastName" placeholder="Doe" type="text" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-ink-deep" htmlFor="email">Email Address</label>
                <input className="w-full bg-transparent border-b border-ink-deep/20 py-2 px-0 focus:outline-none focus:border-accent-gold focus:ring-0 transition-colors rounded-none placeholder:text-ink-deep/50 font-body-md text-body-md" id="email" name="email" placeholder="jane@example.com" type="email" />
              </div>
              
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-ink-deep" htmlFor="password">Password</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-ink-deep/20 py-2 px-0 pr-8 focus:outline-none focus:border-accent-gold focus:ring-0 transition-colors rounded-none placeholder:text-ink-deep/50 font-body-md text-body-md" id="password" name="password" placeholder="••••••••" type="password" />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-ink-deep/50 hover:text-accent-gold transition-colors" type="button">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>visibility</span>
                  </button>
                </div>
              </div>
              
              <div className="pt-4">
                <button className="w-full bg-ink-deep text-surface-cream py-4 px-8 font-label-bold text-label-bold hover:bg-ink-deep/90 transition-all duration-300 flex justify-center items-center group" type="submit">
                  Create Account
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                </button>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Already have an account? 
                <Link to="/sign-in" className="text-ink-deep font-label-bold text-label-bold border-b border-transparent hover:border-ink-deep transition-colors ml-1">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Side: Imagery */}
        <div className="hidden md:block md:w-1/2 relative bg-surface-container-high">
          <div className="absolute inset-0 bg-ink-deep/10 z-10"></div>
          <img className="object-cover w-full h-full absolute inset-0" data-alt="A pristine, highly organized medical or technical layout viewed from above. Premium grooming tools, precision instruments, and elegant minimal packaging arranged in a rigid grid on a soft cream background. Professional, high-end editorial lighting creating soft shadows, evoking a sense of clinical luxury and sophisticated care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlCCLbCiGjyaZ0-sdLFCmvGA9ODEC0G7qqloEadGtGwhszCoH1_eN-1i_Q96U5sHaZ8aBHLn8dlOvBeGEx2eaLTAebciLb7-M9l4E1QlVpgH8W57CgVgCS_VZIfA6CE3cPe8WZCOpM85IGaKmj8x4k5XkDCuEMyGFvnlaj7gQGUKsyTWyjFLXh2dc9PAb9XOJot-g5dI4O4L9KI_1UCr8EdPsTxgJBvAdB584rgkyCpejTzXbRUYao6Q" />
          <div className="absolute bottom-margin-desktop left-margin-desktop z-20 max-w-sm text-surface-cream">
            <p className="font-headline-md text-headline-md font-bold mb-4">Precision & Elegance</p>
            <p className="font-body-lg text-body-lg opacity-90">Experience a new standard of care tailored for the discerning individual.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
