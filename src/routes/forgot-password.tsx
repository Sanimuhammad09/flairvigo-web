import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/forgot-password')({
  component: ForgotPassword,
})

function ForgotPassword() {
  return (
    <main className="bg-surface-cream min-h-screen flex items-center justify-center font-body-md text-ink-deep p-margin-mobile md:p-margin-desktop antialiased">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Logo */}
        <Link to="/" className="mb-12 text-center group">
          <img alt="Flair Vigo Logo" className="h-10 md:h-12 w-auto object-contain group-hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyf_YLPJ-uAika6zi0ciCVAS-uISkteIM2ux371p2IMF6mb5MG4DIBPJpanL7NsSwbMP3B61T5txuiJVr2b9upM_X5aaeCLK2EY73taf6I2mr3V2ze8U1S8oUNvl7KW6tobocmENZfuuVRXsZqb8w4Z67wwNGFErnjvSL6SrP8dk42dcM2Tv6BB8O8TGpWzEGVzcCzDiB-K9iyb3VB1MjIMiC-MqvRZGGVEhM0rJdFsV89822ykyGLHxw51m2jFWUI9M" />
        </Link>
        
        {/* Form Container */}
        <div className="w-full bg-white p-8 md:p-12 shadow-sm rounded-lg border border-ink-deep/10">
          <div className="mb-8 text-center">
            <h1 className="font-headline-md text-headline-md text-ink-deep mb-3">Reset your password</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Enter the email address associated with your account and we'll send you a link to reset your password.
            </p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block font-label-bold text-label-bold text-ink-deep mb-2" htmlFor="email">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-ink-deep/50" style={{ fontVariationSettings: "'FILL' 0" }}>mail</span>
                </span>
                <input className="block w-full pl-10 pr-3 py-3 bg-neutral-light border-b-2 border-transparent focus:border-accent-gold focus:ring-0 focus:outline-none transition-colors font-body-md text-body-md text-ink-deep placeholder:text-ink-deep/50 rounded-t-sm" id="email" name="email" placeholder="you@example.com" required type="email" />
              </div>
            </div>
            
            <button className="w-full bg-ink-deep text-surface-cream py-4 px-8 font-label-bold text-label-bold flex items-center justify-center space-x-2 hover:bg-ink-deep/90 hover:scale-[1.01] transition-all duration-200" type="submit">
              <span>Send Reset Link</span>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <Link to="/sign-in" className="inline-flex items-center space-x-2 font-label-bold text-label-bold text-accent-gold hover:text-ink-deep transition-colors group">
              <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back</span>
              <span>Back to Sign In</span>
            </Link>
          </div>
        </div>
        
        {/* Support Link */}
        <div className="mt-12 text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Having trouble? <a className="text-ink-deep font-label-bold text-label-bold underline underline-offset-4 hover:text-accent-gold transition-colors" href="#">Contact Support</a>
          </p>
        </div>
      </div>
    </main>
  )
}
