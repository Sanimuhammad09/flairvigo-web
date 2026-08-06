import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { api } from '../lib/api'
import { useAuthStore } from '../store/auth'

export const Route = createFileRoute('/sign-in')({
  component: SignIn,
})

function SignIn() {
  const navigate = useNavigate()
  const { login } = useAuthStore()
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const loginMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await api.post('/auth/login', data)
      return response.data.data // Extract the nested 'data' object
    },
    onSuccess: (responseData) => {
      // responseData contains { user, accessToken, refreshToken }
      login(responseData.user, responseData.accessToken)
      
      // Redirect based on role
      const userRole = responseData.user?.role?.toUpperCase()
      const userRoles = responseData.user?.roles?.map((r: string) => r.toUpperCase()) || []
      const isAdmin = userRole === 'ADMIN' || userRole === 'STAFF' || userRoles.includes('ADMIN') || userRoles.includes('STAFF')
      if (isAdmin) {
        navigate({ to: '/admin' })
      } else {
        navigate({ to: '/' })
      }
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loginMutation.mutate(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="flex w-full min-h-screen">
      {/* Left Side: Image Canvas (Hidden on mobile) */}
      <section className="hidden lg:flex w-1/2 relative bg-ink-deep overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-[10s] hover:scale-105 origin-center" data-alt="A high-fashion editorial style photograph of medical professionals in premium deep burgundy scrubs. The lighting is dramatic and moody, emphasizing the luxurious texture of the fabric. The environment is abstract and minimalist, conveying a sense of technical luxury and precision engineering. The color palette focuses on rich deep burgundy, warm charcoal, and soft highlights, perfectly aligning with the Flair Vigo brand identity." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBC_-I192bwbv8lxO0tdC2-PvJ2soeP_5mlFjtv-aNBwwoz19hEYr1N2g_rcD_bZvM8lNQ2pksNyqH5GL4gTUSkimufyQl1x56TweBasMfY2_SsFyPuzvH0ZAJg3d4vuVKs09CB6_BpsGoUOOzP1QvDnm7xXptlOnG1YOtnQAiwn4771pkk9qk_VqpzBGba2Vhl2-bGxCf14XD0SXod9kbB3SHlFZCD3YY9kXLpTjQn7JVNitJwgPXkkQ')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/80 via-ink-deep/20 to-transparent"></div>
        <div className="relative z-10 p-margin-desktop flex flex-col justify-between h-full w-full">
          <Link to="/" className="w-max hover:opacity-80 transition-opacity block">
            <img alt="Flair Vigo Logo" className="h-8 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyf_YLPJ-uAika6zi0ciCVAS-uISkteIM2ux371p2IMF6mb5MG4DIBPJpanL7NsSwbMP3B61T5txuiJVr2b9upM_X5aaeCLK2EY73taf6I2mr3V2ze8U1S8oUNvl7KW6tobocmENZfuuVRXsZqb8w4Z67wwNGFErnjvSL6SrP8dk42dcM2Tv6BB8O8TGpWzEGVzcCzDiB-K9iyb3VB1MjIMiC-MqvRZGGVEhM0rJdFsV89822ykyGLHxw51m2jFWUI9M" />
          </Link>
          <div className="max-w-md">
            <h1 className="font-display-lg text-display-lg text-surface-cream mb-4">Precision in every thread.</h1>
            <p className="font-body-lg text-body-lg text-surface-cream/80">Experience medical apparel engineered for high performance and uncompromising style.</p>
          </div>
        </div>
      </section>
      
      {/* Right Side: Login Form */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface-cream">
        <div className="w-full max-w-[440px] space-y-12">
          {/* Mobile Logo (Hidden on desktop) */}
          <div className="lg:hidden flex justify-center mb-12">
            <Link to="/" className="block">
              <img alt="Flair Vigo Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyf_YLPJ-uAika6zi0ciCVAS-uISkteIM2ux371p2IMF6mb5MG4DIBPJpanL7NsSwbMP3B61T5txuiJVr2b9upM_X5aaeCLK2EY73taf6I2mr3V2ze8U1S8oUNvl7KW6tobocmENZfuuVRXsZqb8w4Z67wwNGFErnjvSL6SrP8dk42dcM2Tv6BB8O8TGpWzEGVzcCzDiB-K9iyb3VB1MjIMiC-MqvRZGGVEhM0rJdFsV89822ykyGLHxw51m2jFWUI9M" />
            </Link>
          </div>
          
          <div className="space-y-4">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-deep">Welcome back</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Please enter your details to sign in.</p>
          </div>
          
          {loginMutation.isError && (
            <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded text-sm">
              Sign in failed. Please check your credentials.
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="relative group">
                <input className="peer w-full bg-transparent border-0 border-b border-ink-deep/20 pt-6 pb-2 px-0 text-ink-deep font-body-md focus:ring-0 focus:border-accent-gold transition-colors duration-300 placeholder-transparent" id="email" name="email" placeholder="Email address" required type="email" value={formData.email} onChange={handleChange} />
                <label className="absolute left-0 top-6 text-on-surface-variant font-body-md transition-all duration-300 peer-focus:-top-2 peer-focus:text-label-sm peer-focus:font-label-sm peer-focus:text-accent-gold peer-valid:-top-2 peer-valid:text-label-sm peer-valid:font-label-sm" htmlFor="email">
                  Email address
                </label>
              </div>
              <div className="relative group">
                <input className="peer w-full bg-transparent border-0 border-b border-ink-deep/20 pt-6 pb-2 px-0 text-ink-deep font-body-md focus:ring-0 focus:border-accent-gold transition-colors duration-300 placeholder-transparent" id="password" name="password" placeholder="Password" required type="password" value={formData.password} onChange={handleChange} />
                <label className="absolute left-0 top-6 text-on-surface-variant font-body-md transition-all duration-300 peer-focus:-top-2 peer-focus:text-label-sm peer-focus:font-label-sm peer-focus:text-accent-gold peer-valid:-top-2 peer-valid:text-label-sm peer-valid:font-label-sm" htmlFor="password">
                  Password
                </label>
                <button aria-label="Toggle password visibility" className="absolute right-0 top-6 text-ink-deep/40 hover:text-ink-deep transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center">
                  <input className="peer appearance-none w-4 h-4 border border-ink-deep/20 rounded-none checked:bg-ink-deep checked:border-ink-deep cursor-pointer focus:ring-1 focus:ring-ink-deep/30 focus:ring-offset-2 focus:ring-offset-surface-cream transition-all" id="remember" name="remember" type="checkbox" />
                  <span className="material-symbols-outlined absolute text-surface-cream text-[14px] pointer-events-none opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity">check</span>
                </div>
                <label className="font-body-md text-body-md text-on-surface-variant cursor-pointer select-none" htmlFor="remember">Remember for 30 days</label>
              </div>
              <Link to="/forgot-password" className="font-label-bold text-label-bold text-ink-deep hover:text-accent-gold transition-colors underline underline-offset-4 decoration-1 decoration-ink-deep/30 hover:decoration-accent-gold">Forgot Password?</Link>
            </div>
            
            <button className="w-full bg-ink-deep text-surface-cream font-label-bold text-label-bold py-4 px-8 mt-8 hover:bg-ink-deep/90 active:scale-[0.99] transition-all duration-200 flex justify-center items-center gap-2 group disabled:opacity-50" type="submit" disabled={loginMutation.isPending}>
              {loginMutation.isPending ? 'Signing In...' : 'Sign In'}
              {!loginMutation.isPending && <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>}
            </button>
          </form>
          
          <div className="text-center mt-12 pt-8 border-t border-ink-deep/10">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Don't have an account? 
              <Link to="/sign-up" className="font-label-bold text-label-bold text-ink-deep ml-1 hover:text-accent-gold transition-colors underline underline-offset-4 decoration-1 decoration-ink-deep/30 hover:decoration-accent-gold">Create an Account</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
